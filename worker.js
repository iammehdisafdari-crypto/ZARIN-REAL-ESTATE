/**
 * ZARIN Real Estate — Cloudflare Worker
 *
 * Responsibilities:
 * 1. GET /api/tgju:
 *    - Proxies live rate requests to https://call.tgju.org/ajax.json
 *    - Memory caching (TTL 20s) aligned with client 30s polling to minimize upstream load
 *    - Strict No-Fake-Rate Policy:
 *        * Upstream success -> real rate + timestamp + 'fresh' status
 *        * Upstream error + prior valid data -> last valid rate + original timestamp + 'stale' indicator
 *        * Upstream error + no prior data -> rate: null, current: null, status: 'unavailable' (NO hardcoded fake numbers)
 * 2. Static Assets + Custom 404 Page:
 *    - All valid static assets served via env.ASSETS.
 *    - Unmatched routes served with 404.html at HTTP status 404.
 * 3. Production Security Hardening:
 *    - Injects HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy,
 *      and Content-Security-Policy (grounded precisely in the project's actual resource dependencies).
 */

const TGJU_UPSTREAM_URL = 'https://call.tgju.org/ajax.json';
const FETCH_TIMEOUT_MS = 6000;
const CACHE_TTL_MS = 20000; // 20 seconds in-memory cache aligned with 30s client polling

// In-memory cache across worker requests within the same isolate
let memoryCache = {
  lastValidRates: null, // { current, last_updated, last_updated_en, timestamp }
  lastFetchTime: 0
};

// Security headers grounded in ZARIN's actual production resources
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' https://images.unsplash.com data:",
    "connect-src 'self' https://call.tgju.org",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests"
  ].join('; ')
};

// The CMS is a browser app: allow its CDN bundle and the GitHub APIs it uses,
// while keeping the public site on its stricter policy above.
const CMS_CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' https://unpkg.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' https://cdn.jsdelivr.net data:",
  "img-src 'self' blob: data: https:",
  "media-src blob:",
  "frame-src blob:",
  "connect-src 'self' blob: data: https://unpkg.com https://api.github.com https://sveltia-cms-auth.iammehdisafdari.workers.dev",
  "worker-src 'self' blob:",
  "manifest-src blob:",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://github.com"
].join('; ');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Accept, Content-Type, Cache-Control',
  'Access-Control-Max-Age': '86400',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
};

/**
 * Apply standard production security headers to any outgoing Response Headers
 */
function applySecurityHeaders(headers, pathname = '/') {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(key, value);
  }
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    headers.set('Content-Security-Policy', CMS_CONTENT_SECURITY_POLICY);
  }
  return headers;
}

/**
 * Handle GET /api/tgju
 */
async function handleTgjuRequest(request) {
  // Handle preflight OPTIONS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: CORS_HEADERS
    });
  }

  // Only GET and HEAD allowed
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...CORS_HEADERS
      }
    });
  }

  const now = Date.now();

  // 1. Serve fresh cache if within TTL (20 seconds)
  if (memoryCache.lastValidRates && (now - memoryCache.lastFetchTime < CACHE_TTL_MS)) {
    return new Response(JSON.stringify({
      status: 'fresh',
      available: true,
      current: memoryCache.lastValidRates.current,
      last_updated: memoryCache.lastValidRates.last_updated,
      last_updated_en: memoryCache.lastValidRates.last_updated_en
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=15, s-maxage=20',
        'X-Rate-Status': 'fresh-cached',
        ...CORS_HEADERS
      }
    });
  }

  // 2. Fetch from upstream TGJU with timeout and standard browser headers
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const upstreamResponse = await fetch(TGJU_UPSTREAM_URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://www.tgju.org/',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'fa-IR,fa;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (upstreamResponse.ok) {
      const data = await upstreamResponse.json();

      // Validate that response contains actual TGJU rate records
      if (data && data.current && (data.current.price_aed || data.current.price_dollar_rl)) {
        const lastUpdatedFa = data.current.price_aed?.t || data.current.price_dollar_rl?.t || 'هم‌اکنون';
        const lastUpdatedEn = data.current.price_aed?.t_en || data.current.price_dollar_rl?.t_en || 'Live';

        // Update memory cache with authentic live data
        memoryCache.lastValidRates = {
          current: data.current,
          last_updated: lastUpdatedFa,
          last_updated_en: lastUpdatedEn,
          timestamp: now
        };
        memoryCache.lastFetchTime = now;

        // STATE A: TGJU موفق (real rate + timestamp + fresh status)
        return new Response(JSON.stringify({
          status: 'fresh',
          available: true,
          current: data.current,
          last_updated: lastUpdatedFa,
          last_updated_en: lastUpdatedEn
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=15, s-maxage=20',
            'X-Rate-Status': 'fresh',
            ...CORS_HEADERS
          }
        });
      }
    }

    console.warn(`[Worker TGJU] Upstream responded with status ${upstreamResponse.status}`);
  } catch (err) {
    clearTimeout(timeoutId);
    console.warn('[Worker TGJU] Upstream fetch failed or timed out:', err.name === 'AbortError' ? 'Timeout' : err.message);
  }

  // 3. Fallback Handling (ZERO fake hardcoded rates):

  // STATE B: TGJU موقتاً unavailable اما آخرین داده معتبر در دسترس است
  // (last valid rate + original timestamp + stale/unavailable indicator)
  if (memoryCache.lastValidRates) {
    return new Response(JSON.stringify({
      status: 'stale',
      available: true,
      current: memoryCache.lastValidRates.current,
      last_updated: memoryCache.lastValidRates.last_updated,
      last_updated_en: memoryCache.lastValidRates.last_updated_en,
      indicator: 'stale/unavailable'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=10, s-maxage=15',
        'X-Rate-Status': 'stale',
        ...CORS_HEADERS
      }
    });
  }

  // STATE C: TGJU unavailable و هیچ داده معتبر قبلی وجود ندارد
  // (rate = null / unavailable — اکیداً بدون نمایش اعداد ساختگی)
  return new Response(JSON.stringify({
    status: 'unavailable',
    available: false,
    current: null,
    rate: null,
    last_updated: null,
    last_updated_en: null,
    indicator: 'unavailable'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Rate-Status': 'unavailable',
      ...CORS_HEADERS
    }
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route /api/tgju and /api/tgju/
    if (url.pathname === '/api/tgju' || url.pathname === '/api/tgju/') {
      return handleTgjuRequest(request);
    }

    // Pass all other requests to Cloudflare Static Assets
    if (env && env.ASSETS) {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        // Fetch the custom 404 page content from assets
        const notFoundUrl = new URL('/404.html', request.url);
        const notFoundResponse = await env.ASSETS.fetch(notFoundUrl.toString());
        const headers = new Headers(notFoundResponse.headers);
        headers.set('Content-Type', 'text/html; charset=utf-8');
        headers.delete('Location');
        applySecurityHeaders(headers, url.pathname);
        return new Response(notFoundResponse.body, {
          status: 404,
          statusText: 'Not Found',
          headers
        });
      }

      // Preserve status (e.g. 200, 304) and apply security headers
      const headers = new Headers(response.headers);
      applySecurityHeaders(headers, url.pathname);
      const body = (response.status === 304 || response.status === 204) ? null : response.body;

      return new Response(body, {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    }

    const fallbackHeaders = new Headers({ 'Content-Type': 'text/plain; charset=utf-8' });
    applySecurityHeaders(fallbackHeaders, url.pathname);
    return new Response('Not Found', { status: 404, headers: fallbackHeaders });
  }
};
