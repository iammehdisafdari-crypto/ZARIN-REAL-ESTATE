/**
 * ZARIN — Real-Time TGJU.org Live Currency Engine
 * Loads live exchange rates through the site's /api/tgju Cloudflare Worker endpoint.
 */

// Unknown until the upstream live-rate request succeeds; never show fake rates.
export const liveRates = {
  aed_irr: null,
  usd_irr: null,
  eur_irr: null,
  last_updated: null,
  last_updated_en: null,
  is_connected: false
};

const listeners = new Set();

export function subscribeToRates(callback) {
  listeners.add(callback);
  // Send immediate initial state
  callback(liveRates);
  return () => listeners.delete(callback);
}

function notifyListeners() {
  listeners.forEach(cb => cb(liveRates));
}

function parsePrice(str) {
  if (!str) return null;
  const cleaned = String(str).replace(/[^\d.]/g, '');
  const val = parseFloat(cleaned);
  return isNaN(val) ? null : val;
}

export async function fetchLiveTgjuRates() {
  try {
    const response = await fetch('/api/tgju', {
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    });

    if (!response.ok) return;

    const data = await response.json();
    const current = data.current;

    if (current) {
      let changed = false;

      if (current.price_aed?.p) {
        const newAed = parsePrice(current.price_aed.p);
        if (newAed && newAed !== liveRates.aed_irr) {
          liveRates.aed_irr = newAed;
          changed = true;
        }
      }

      if (current.price_dollar_rl?.p) {
        const newUsd = parsePrice(current.price_dollar_rl.p);
        if (newUsd && newUsd !== liveRates.usd_irr) {
          liveRates.usd_irr = newUsd;
          changed = true;
        }
      }

      if (current.price_eur?.p) {
        const newEur = parsePrice(current.price_eur.p);
        if (newEur && newEur !== liveRates.eur_irr) {
          liveRates.eur_irr = newEur;
          changed = true;
        }
      }

      if (current.price_aed?.t) {
        liveRates.last_updated = current.price_aed.t;
        liveRates.last_updated_en = current.price_aed.t_en || current.price_aed.t;
      }

      liveRates.is_connected = true;
      notifyListeners();
    } else {
      liveRates.is_connected = false;
      notifyListeners();
    }
  } catch (err) {
    console.warn('[ZARIN TGJU Engine] Real-time fetch latency:', err);
    liveRates.is_connected = false;
  }
}

// Start continuous polling (every 30 seconds for production efficiency)
let pollingInterval = null;

export function startLiveRatesPolling(intervalMs = 30000) {
  if (pollingInterval) clearInterval(pollingInterval);
  fetchLiveTgjuRates();
  pollingInterval = setInterval(fetchLiveTgjuRates, intervalMs);
}
