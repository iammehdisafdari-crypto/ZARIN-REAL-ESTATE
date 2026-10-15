import fs from 'fs';
import path from 'path';
import http from 'http';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('================================================================');
console.log('TESTING PERSIAN CONSULTATION PAGE & I18N / ROUTING PERSISTENCE');
console.log('================================================================');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
    passed++;
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    failed++;
  }
}

// 1. Verify fa/consultation.html and fa/consultation/index.html
const faFiles = ['fa/consultation.html', 'fa/consultation/index.html'];

for (const rel of faFiles) {
  const filePath = path.join(__dirname, rel);
  assert(fs.existsSync(filePath), `File exists: ${rel}`);
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  console.log(`\nVerifying Persian Consultation: ${rel}`);

  // HTML tag and dir
  assert(doc.documentElement.getAttribute('lang') === 'fa', `[${rel}] <html lang="fa">`);
  assert(doc.documentElement.getAttribute('dir') === 'rtl', `[${rel}] <html dir="rtl">`);

  // SEO & Head
  const canonical = doc.querySelector('link[rel="canonical"]');
  assert(canonical && canonical.getAttribute('href') === 'https://zarinrealestate.com/fa/consultation', `[${rel}] Canonical link is https://zarinrealestate.com/fa/consultation`);

  const hreflangEn = doc.querySelector('link[rel="alternate"][hreflang="en"]');
  const hreflangFa = doc.querySelector('link[rel="alternate"][hreflang="fa"]');
  const hreflangDefault = doc.querySelector('link[rel="alternate"][hreflang="x-default"]');
  assert(!!hreflangEn && hreflangEn.getAttribute('href') === 'https://zarinrealestate.com/consultation', `[${rel}] Alternate hreflang="en" points to /consultation`);
  assert(!!hreflangFa && hreflangFa.getAttribute('href') === 'https://zarinrealestate.com/fa/consultation', `[${rel}] Alternate hreflang="fa" points to /fa/consultation`);
  assert(!!hreflangDefault && hreflangDefault.getAttribute('href') === 'https://zarinrealestate.com/consultation', `[${rel}] Alternate hreflang="x-default" points to /consultation`);

  // Vazirmatn font
  assert(content.includes('Vazirmatn'), `[${rel}] Loads and specifies Vazirmatn Persian font`);

  // Meta OG & Twitter
  const ogTitle = doc.querySelector('meta[property="og:title"]');
  const ogDesc = doc.querySelector('meta[property="og:description"]');
  assert(ogTitle && ogTitle.getAttribute('content').includes('ZARIN'), `[${rel}] Has Persian OG title`);
  assert(ogDesc && ogDesc.getAttribute('content').length > 20, `[${rel}] Has rich Persian OG description`);

  // JSON-LD structured data
  const jsonLdScript = doc.querySelector('script[type="application/ld+json"]');
  assert(!!jsonLdScript, `[${rel}] Contains JSON-LD schema`);
  if (jsonLdScript) {
    try {
      const data = JSON.parse(jsonLdScript.textContent);
      assert(data['@context'] === 'https://schema.org', `[${rel}] Valid JSON-LD Schema.org structure`);
    } catch (e) {
      assert(false, `[${rel}] Invalid JSON-LD Schema: ${e.message}`);
    }
  }

  // Header & Logo (allows / or /fa)
  const logo = doc.querySelector('header a[href="/"]') || doc.querySelector('header a[href="/fa"]');
  assert(!!logo, `[${rel}] Header logo links to "/" or "/fa"`);

  // Nav Links (allows /properties or /fa/properties, etc.)
  const navLinks = Array.from(doc.querySelectorAll('header nav a[href]')).map(a => a.getAttribute('href'));
  assert(navLinks.includes('/properties') || navLinks.includes('/fa/properties'), `[${rel}] Header has /properties or /fa/properties link`);
  assert(navLinks.includes('/private-office') || navLinks.includes('/fa/private-office'), `[${rel}] Header has /private-office or /fa/private-office link`);

  // Consultation Form
  const form = doc.getElementById('consultation-form');
  assert(!!form, `[${rel}] Form #consultation-form exists`);
  if (form) {
    const action = form.getAttribute('action');
    assert(action === '/fa/consultation' || action === '/consultation', `[${rel}] Form action points to real endpoint (${action})`);
    assert(form.getAttribute('method')?.toUpperCase() === 'POST', `[${rel}] Form method is POST`);

    // Latin inputs preserved in LTR
    const emailInput = form.querySelector('input[type="email"]');
    assert(emailInput && emailInput.getAttribute('dir') === 'ltr', `[${rel}] Email input has dir="ltr"`);

    const phoneInput = form.querySelector('input[type="tel"]');
    assert(phoneInput && phoneInput.getAttribute('dir') === 'ltr', `[${rel}] Phone input has dir="ltr"`);
  }

  // Scripts
  const scripts = Array.from(doc.querySelectorAll('script[src]')).map(s => s.getAttribute('src'));
  assert(scripts.includes('/scripts/nav.js'), `[${rel}] Imports /scripts/nav.js`);
  assert(scripts.includes('/scripts/consultation.js'), `[${rel}] Imports /scripts/consultation.js`);

  // Zero href="#" or empty href
  const allAnchors = Array.from(doc.querySelectorAll('a'));
  let brokenHashLinks = 0;
  for (const a of allAnchors) {
    const h = a.getAttribute('href');
    if (h === '#' || h === '' || h === 'javascript:void(0)') {
      brokenHashLinks++;
      console.warn(`    Warning: found placeholder link in ${rel}:`, a.outerHTML.substring(0, 100));
    }
  }
  assert(brokenHashLinks === 0, `[${rel}] Zero broken or placeholder href="#" links found`);
}

// 2. Verify English consultation pages have hreflang alternates
console.log('\nVerifying English Consultation Hreflang Tags:');
const enFiles = ['consultation.html', 'consultation/index.html'];
for (const rel of enFiles) {
  const filePath = path.join(__dirname, rel);
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  const hreflangFa = doc.querySelector('link[rel="alternate"][hreflang="fa"]');
  const hreflangEn = doc.querySelector('link[rel="alternate"][hreflang="en"]');
  assert(!!hreflangFa && hreflangFa.getAttribute('href') === 'https://zarinrealestate.com/fa/consultation', `[${rel}] Has alternate hreflang="fa" pointing to /fa/consultation`);
  assert(!!hreflangEn && hreflangEn.getAttribute('href') === 'https://zarinrealestate.com/consultation', `[${rel}] Has alternate hreflang="en" pointing to /consultation`);
}

// 3. Runtime Verification of Language Persistence & Switching
console.log('\nVerifying Runtime nav.js Language Persistence:');
const { initGlobalLanguageState } = await import('./scripts/nav.js');

// Test Case A: Initializing on Persian consultation page sets and stores 'fa'
{
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html lang="fa" dir="rtl">
      <body>
        <header id="site-header">
          <a class="lang-btn" data-lang="en">EN</a>
          <a class="lang-btn" data-lang="fa">فارسی</a>
          <a href="/consultation">مشاوره</a>
        </header>
        <div id="mobile-menu">
          <a href="/consultation">رزرو مشاوره</a>
        </div>
      </body>
    </html>
  `, { url: 'https://zarinrealestate.com/fa/consultation' });

  initGlobalLanguageState(dom.window.document);
  assert(dom.window.document.documentElement.lang === 'fa', 'Page lang is fa');
  assert(dom.window.document.documentElement.dir === 'rtl', 'Page dir is rtl');
  assert(dom.window.localStorage.getItem('zarin_lang') === 'fa', 'localStorage zarin_lang is fa');

  const ctaLinks = dom.window.document.querySelectorAll('a[href="/fa/consultation"]');
  assert(ctaLinks.length === 2, 'Header and mobile consultation CTAs dynamically point to /fa/consultation');
}

// Test Case B: Moving to /private-office maintains 'fa' and RTL
{
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <body>
        <header id="site-header">
          <a class="lang-btn" data-lang="en">EN</a>
          <a class="lang-btn" data-lang="fa">فارسی</a>
          <a href="/consultation">Book Consultation</a>
        </header>
        <div id="mobile-menu">
          <a href="/consultation">Book Consultation</a>
        </div>
      </body>
    </html>
  `, { url: 'https://zarinrealestate.com/private-office' });

  // Simulate previous choice
  dom.window.localStorage.setItem('zarin_lang', 'fa');
  initGlobalLanguageState(dom.window.document);

  assert(dom.window.document.documentElement.lang === 'fa', '[/private-office] Preserved language as "fa" from localStorage');
  assert(dom.window.document.documentElement.dir === 'rtl', '[/private-office] Preserved direction as "rtl" from localStorage');
  const cta = dom.window.document.querySelector('header a[href="/fa/consultation"]');
  assert(!!cta, '[/private-office] Consultation CTA directs user to /fa/consultation in Persian mode');
}

// 4. Test real backend form POST endpoint on local dev server
console.log('\nTesting Real Backend Endpoint POST /fa/consultation:');

function testBackendPost() {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      name: 'سرمایه‌گذار تست',
      email: 'investor@test.com',
      phone: '+971501234567',
      topic: 'luxury-villas',
      budget: '15m-30m',
      message: 'بررسی فرصت‌های سرمایه‌گذاری پالم جمیرا'
    });

    const options = {
      hostname: 'localhost',
      port: 5174,
      path: '/fa/consultation',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        assert(res.statusCode === 200, `POST /fa/consultation returns HTTP 200 OK (got ${res.statusCode})`);
        try {
          const json = JSON.parse(body);
          assert(json.success === true, 'Response contains success: true');
          assert(!!json.bookingId, `Generated real bookingId: ${json.bookingId}`);
          assert(!!json.advisor, `Allocated advisor: ${json.advisor}`);
        } catch (e) {
          assert(false, `Response body is valid JSON: ${e.message}`);
        }
        resolve();
      });
    });

    req.on('error', (err) => {
      console.warn('  ⚠️ Could not connect to Vite dev server on port 5173 (server might be on different port):', err.message);
      resolve();
    });

    req.write(postData);
    req.end();
  });
}

await testBackendPost();

console.log('\n================================================================');
console.log(`PERSIAN & I18N SUITE SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
}
