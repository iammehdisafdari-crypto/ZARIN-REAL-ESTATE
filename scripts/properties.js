/**
 * ZARIN — Property Portfolio Store & Currency Manager
 */

import propertiesData from '../content/properties.json';
import { liveRates } from './rates.js';

export { propertiesData };

export function formatCurrency(amountAed, currency = "AED", lang = "en") {
  if (currency === "USD") {
    // Live cross-rate from TGJU: AED to USD
    const aedToUsd = (liveRates.aed_irr && liveRates.usd_irr)
      ? (liveRates.aed_irr / liveRates.usd_irr)
      : (1 / 3.6725);
    const usd = Math.round(amountAed * aedToUsd);
    return "$" + usd.toLocaleString("en-US");
  } else if (currency === "EUR") {
    // Live cross-rate from TGJU: AED to EUR
    const aedToEur = (liveRates.aed_irr && liveRates.eur_irr)
      ? (liveRates.aed_irr / liveRates.eur_irr)
      : (1 / 4.02);
    const eur = Math.round(amountAed * aedToEur);
    return "€" + eur.toLocaleString("en-US");
  } else if (currency === "IRR") {
    // Live TGJU Dirham Rate
    if (!liveRates.aed_irr) {
      return lang === "fa" ? "در انتظار استعلام نرخ" : "Rate Pending";
    }

    const totalIrr = Math.round(amountAed * liveRates.aed_irr);

    if (lang === "fa") {
      return totalIrr.toLocaleString("fa-IR") + " ریال";
    }

    return totalIrr.toLocaleString("en-US") + " IRR";
  }

  return "AED " + amountAed.toLocaleString("en-US");
}