/**
 * ZARIN — Property Portfolio Store & Language-Driven Pricing Engine
 */

import propertiesData from '../content/properties.json' with { type: 'json' };
import { liveRates, subscribeToRates, startLiveRatesPolling } from './rates.js';

export { propertiesData };

/**
 * Formats a raw AED amount for a given currency code.
 */
export function formatCurrency(amountAed, currency = "AED", lang = "en") {
  if (currency === "USD") {
    const aedToUsd = (liveRates.aed_irr && liveRates.usd_irr)
      ? (liveRates.aed_irr / liveRates.usd_irr)
      : (1 / 3.6725);
    const usd = Math.round(amountAed * aedToUsd);
    return "$" + usd.toLocaleString("en-US");
  } else if (currency === "EUR") {
    const aedToEur = (liveRates.aed_irr && liveRates.eur_irr)
      ? (liveRates.aed_irr / liveRates.eur_irr)
      : (1 / 4.02);
    const eur = Math.round(amountAed * aedToEur);
    return "€" + eur.toLocaleString("en-US");
  } else if (currency === "IRT" || currency === "IRR") {
    const aedToIrr = liveRates.aed_irr || 730000;
    const aedToIrt = aedToIrr / 10;
    const totalIrt = Math.round(amountAed * aedToIrt);
    if (lang === "fa") {
      return totalIrt.toLocaleString("fa-IR") + " تومان";
    }
    return totalIrt.toLocaleString("en-US") + " IRT";
  }

  if (lang === "fa") {
    return amountAed.toLocaleString("fa-IR") + " درهم";
  }
  return "AED " + amountAed.toLocaleString("en-US");
}

/**
 * Returns formatted short AED string (e.g., 'AED 42M' or '۴۲ میلیون درهم')
 */
export function formatAedShort(amountAed, lang = "en") {
  if (lang === "fa") {
    if (amountAed >= 1e6) {
      const val = (amountAed / 1e6).toFixed(1).replace(/\.0$/, '');
      return `${Number(val).toLocaleString('fa-IR')} میلیون درهم`;
    }
    if (amountAed >= 1e3) {
      const val = (amountAed / 1e3).toFixed(1).replace(/\.0$/, '');
      return `${Number(val).toLocaleString('fa-IR')} هزار درهم`;
    }
    return `${amountAed.toLocaleString('fa-IR')} درهم`;
  }

  if (amountAed >= 1e6) {
    const val = (amountAed / 1e6).toFixed(1).replace(/\.0$/, '');
    return `AED ${val}M`;
  }
  if (amountAed >= 1e3) {
    const val = (amountAed / 1e3).toFixed(1).replace(/\.0$/, '');
    return `AED ${val}K`;
  }
  return `AED ${amountAed.toLocaleString('en-US')}`;
}

/**
 * Returns formatted short USD string (e.g., '$11.4M')
 */
export function formatUsdShort(usdAmount) {
  if (usdAmount >= 1e6) {
    const val = (usdAmount / 1e6).toFixed(1).replace(/\.0$/, '');
    return `$${val}M`;
  }
  if (usdAmount >= 1e3) {
    const val = Math.round(usdAmount / 1e3);
    return `$${val}K`;
  }
  return `$${Math.round(usdAmount).toLocaleString('en-US')}`;
}

/**
 * Returns formatted Iranian Toman (IRT) string with Persian numerals and clear denomination.
 */
export function formatIrt(amountAed) {
  const aedToIrr = liveRates.aed_irr || 730000;
  const aedToIrt = aedToIrr / 10;
  const irt = Math.round(amountAed * aedToIrt);

  if (irt >= 1e9) {
    const val = (irt / 1e9);
    if (val >= 100) {
      const formatted = Math.round(val).toLocaleString('fa-IR');
      return `${formatted} میلیارد تومان`;
    }
    const formatted = Number(val.toFixed(1).replace(/\.0$/, '')).toLocaleString('fa-IR');
    return `${formatted} میلیارد تومان`;
  }
  if (irt >= 1e6) {
    const val = Number((irt / 1e6).toFixed(1).replace(/\.0$/, '')).toLocaleString('fa-IR');
    return `${val} میلیون تومان`;
  }
  return `${irt.toLocaleString('fa-IR')} تومان`;
}

/**
 * Returns language-driven dual pricing structure according to specifications:
 * - English: Main price in AED, and directly beneath: both USD and AED
 * - Persian: Main price in AED, and directly beneath: price in Iranian tomans (IRT)
 */
export function getDualPricing(amountAed, lang = "en", prefix = "") {
  const isFa = lang === "fa";
  const aedToUsd = (liveRates.aed_irr && liveRates.usd_irr)
    ? (liveRates.aed_irr / liveRates.usd_irr)
    : (1 / 3.6725);
  const usd = Math.round(amountAed * aedToUsd);

  if (isFa) {
    const prefixFa = prefix ? (prefix.trim().toLowerCase().includes('from') ? 'از ' : prefix) : '';
    const mainPrice = `${prefixFa}${formatAedShort(amountAed, 'fa')}`;
    const subPrice = `${prefixFa ? prefixFa : 'معادل '}${formatIrt(amountAed)}`;
    return {
      primary: mainPrice,
      secondary: subPrice,
      usdAmount: usd,
      aedAmount: amountAed
    };
  }

  const mainPrice = `${prefix}${formatAedShort(amountAed, 'en')}`;
  const subPrice = `${prefix ? prefix : '≈ '}${formatUsdShort(usd)} USD · ${formatAedShort(amountAed, 'en')}`;
  return {
    primary: mainPrice,
    secondary: subPrice,
    usdAmount: usd,
    aedAmount: amountAed
  };
}

/**
 * Universal updater for all .property-price-card elements in DOM
 */
export function updateAllPriceCards(lang = (document.documentElement.lang || 'en')) {
  document.querySelectorAll('.property-price-card').forEach(card => {
    const aed = parseFloat(card.dataset.priceAed);
    if (!aed || isNaN(aed)) return;

    const rawPrefix = card.dataset.prefix || '';
    const pricing = getDualPricing(aed, lang, rawPrefix);

    const primaryEl = card.querySelector('.price-primary');
    const secondaryEl = card.querySelector('.price-secondary');

    if (primaryEl) {
      primaryEl.textContent = pricing.primary;
    }
    if (secondaryEl) {
      secondaryEl.textContent = pricing.secondary;
    }
  });
}

// Hook up automated updates on rate ticks or language changes if running in browser
if (typeof window !== 'undefined') {
  startLiveRatesPolling(30000);

  window.addEventListener('zarin:languageChange', (e) => {
    updateAllPriceCards(e.detail?.lang || document.documentElement.lang || 'en');
  });

  subscribeToRates(() => {
    updateAllPriceCards(document.documentElement.lang || 'en');
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      updateAllPriceCards(document.documentElement.lang || 'en');
    });
  } else {
    updateAllPriceCards(document.documentElement.lang || 'en');
  }
}