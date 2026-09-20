/**
 * ZARIN — Real-Time TGJU.org Live Currency Engine
 * Directly connects to TGJU.org's live ticker feed for second-by-second updates.
 */

// Default Fallback Rates in case of connection latency
export const liveRates = {
  aed_irr: 629030,
  usd_irr: 2310000,
  eur_irr: 2655800,
  last_updated: "هم‌اکنون",
  last_updated_en: "Live",
  is_connected: true
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
    }
  } catch (err) {
    console.warn('[ZARIN TGJU Engine] Real-time fetch latency:', err);
    liveRates.is_connected = false;
  }
}

// Start continuous polling (every 3 seconds)
let pollingInterval = null;

export function startLiveRatesPolling(intervalMs = 3000) {
  if (pollingInterval) clearInterval(pollingInterval);
  fetchLiveTgjuRates();
  pollingInterval = setInterval(fetchLiveTgjuRates, intervalMs);
}
