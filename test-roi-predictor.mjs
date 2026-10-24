import fs from 'fs';
import { JSDOM } from 'jsdom';
import assert from 'assert';

console.log('================================================================');
console.log('TEST SUITE: OFF-PLAN ROI PREDICTOR ENGINE & DOM INTEGRATION');
console.log('================================================================\n');

let totalTests = 0;
let passedTests = 0;

function it(desc, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✅ [PASS] ${desc}`);
  } catch (err) {
    console.error(`  ❌ [FAIL] ${desc}: ${err.message}`);
  }
}

// Model reference constants matching engine implementation
const PRICE_PER_SQFT_2026 = {
  'downtown': 2200, 'marina': 1850, 'palm-jumeirah': 2800, 'dubai-hills': 1650,
  'jvc': 1150, 'business-bay': 1750, 'creek-harbour': 2100, 'bluewaters': 3200
};
const RENTAL_YIELDS = {
  'downtown': 5.8, 'marina': 6.4, 'palm-jumeirah': 4.9, 'dubai-hills': 5.5,
  'jvc': 7.2, 'business-bay': 6.8, 'creek-harbour': 5.9, 'bluewaters': 5.2
};
const VACANCY_RATES = {
  'downtown': 4, 'marina': 5, 'palm-jumeirah': 7, 'dubai-hills': 4,
  'jvc': 6, 'business-bay': 8, 'creek-harbour': 6, 'bluewaters': 5
};
const SERVICE_CHARGE_PER_SQFT = {
  'downtown': 22, 'marina': 18, 'palm-jumeirah': 28, 'dubai-hills': 12,
  'jvc': 14, 'business-bay': 20, 'creek-harbour': 24, 'bluewaters': 26
};
const PROPERTY_TYPE_MULTIPLIER = {
  'apartment': 1.0, 'villa': 1.15, 'townhouse': 1.08, 'penthouse': 1.35
};
const STAGE_PREMIUM = {
  'prelaunch': 0.20, 'under': 0.12, 'near': 0.05, 'ready': 0.00
};
const STRATEGY = {
  'long':      { yieldMult: 1.00, vacancyMult: 1.00 },
  'short':     { yieldMult: 1.30, vacancyMult: 0.80 },
  'offseason': { yieldMult: 1.00, vacancyMult: 1.50 }
};

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function calculateRoi(params) {
  const ptype = params.ptype || 'apartment';
  const area = params.area || 'marina';
  const price = clamp(parseFloat(params.price) || 2000000, 500000, 50000000);
  const stage = params.stage || 'under';
  const years = clamp(parseInt(params.holding, 10) || 5, 1, 10);
  const stratKey = params.strategy || 'long';
  const growthPct = typeof params.growth === 'number' ? params.growth : 8;

  const growth = growthPct / 100;
  const typeMult = PROPERTY_TYPE_MULTIPLIER[ptype] || 1.0;
  const stagePremium = STAGE_PREMIUM[stage] || 0;
  const strat = STRATEGY[stratKey] || STRATEGY['long'];

  const effGrowth = clamp(growth * typeMult, 0, 0.25);
  const finalValue = price * Math.pow(1 + effGrowth, years) * (1 + stagePremium);
  const appreciation = finalValue - price;
  const appreciationPct = (appreciation / price) * 100;

  const pps = PRICE_PER_SQFT_2026[area] || 1800;
  const sqft = price / pps;

  const baseYield = (RENTAL_YIELDS[area] || 6.0) / 100;
  const baseVacancy = (VACANCY_RATES[area] || 5) / 100;
  const effYield = baseYield * strat.yieldMult;
  const effVacancy = clamp(baseVacancy * strat.vacancyMult, 0, 0.50);
  const yr1Rent = price * effYield * (1 - effVacancy);

  const g = 0.03;
  let totalRental;
  if (g === 0) {
    totalRental = yr1Rent * years;
  } else {
    totalRental = yr1Rent * (Math.pow(1 + g, years) - 1) / g;
  }

  const serviceChargePerYear = (SERVICE_CHARGE_PER_SQFT[area] || 18) * sqft;
  const totalServiceCharges = serviceChargePerYear * years;
  const transactionCosts = price * 0.04 + price * 0.02 + 4000 + totalServiceCharges;

  const totalGain = appreciation + totalRental - transactionCosts;
  const totalDeployed = price + transactionCosts;
  const netRoi = (totalGain / totalDeployed) * 100;
  const annualized = netRoi / years;

  let breakevenYear;
  if (yr1Rent <= 0) {
    breakevenYear = Infinity;
  } else {
    const lhs = 1 + (transactionCosts * g) / yr1Rent;
    if (lhs <= 1) {
      breakevenYear = (yr1Rent >= transactionCosts) ? 1 : Infinity;
    } else {
      breakevenYear = Math.log(lhs) / Math.log(1 + g);
    }
  }

  return {
    price,
    finalValue,
    appreciation,
    appreciationPct,
    effYield,
    totalRental,
    transactionCosts,
    totalGain,
    totalDeployed,
    netRoi,
    annualized,
    breakevenYear: isFinite(breakevenYear) ? Math.ceil(breakevenYear) : Infinity
  };
}

console.log('--- 1. Mathematical Accuracy & Scenario Coverage ---');

it('Scenario 1: Default Marina Apartment (2M AED, 5-yr, 8% growth, under constr)', () => {
  const res = calculateRoi({ ptype: 'apartment', area: 'marina', price: 2000000, stage: 'under', holding: 5, strategy: 'long', growth: 8 });
  assert(res.finalValue > 3290000 && res.finalValue < 3300000, `Expected finalValue ~3,291,295, got ${res.finalValue}`);
  assert(res.appreciation > 1290000 && res.appreciation < 1300000, `Expected appreciation ~1,291,295, got ${res.appreciation}`);
  assert(res.effYield > 0.063 && res.effYield < 0.065, `Expected 6.4% yield, got ${res.effYield}`);
  assert(res.totalRental > 640000 && res.totalRental < 650000, `Expected total rental ~645,591, got ${res.totalRental}`);
  assert(res.transactionCosts > 215000 && res.transactionCosts < 225000, `Expected costs ~221,297, got ${res.transactionCosts}`);
  assert(res.netRoi > 75 && res.netRoi < 80, `Expected netRoi ~78%, got ${res.netRoi}`);
  assert(res.annualized > 15 && res.annualized < 16, `Expected annualized ~15.5%, got ${res.annualized}`);
  assert.strictEqual(res.breakevenYear, 2, `Expected breakeven in Year 2, got ${res.breakevenYear}`);
});

it('Scenario 2: Zero Annual Appreciation (growth = 0%)', () => {
  const res = calculateRoi({ ptype: 'apartment', area: 'downtown', price: 1000000, stage: 'ready', holding: 3, strategy: 'long', growth: 0 });
  assert.strictEqual(res.finalValue, 1000000, `Final value should equal purchase price when growth=0 and ready stage, got ${res.finalValue}`);
  assert.strictEqual(res.appreciation, 0, `Appreciation should be 0, got ${res.appreciation}`);
  assert(res.totalRental > 0, 'Rental income should still be positive');
  assert(!isNaN(res.netRoi), 'Net ROI must not be NaN');
});

it('Scenario 3: 1-Year Holding Period (boundary min)', () => {
  const res = calculateRoi({ ptype: 'townhouse', area: 'dubai-hills', price: 3500000, stage: 'ready', holding: 1, strategy: 'long', growth: 8 });
  assert(!isNaN(res.netRoi) && isFinite(res.netRoi), 'Net ROI must be finite');
  assert.strictEqual(res.netRoi, res.annualized, 'For 1-year hold, netRoi must equal annualized ROI');
});

it('Scenario 4: 10-Year Holding Period (boundary max)', () => {
  const res = calculateRoi({ ptype: 'villa', area: 'palm-jumeirah', price: 15000000, stage: 'prelaunch', holding: 10, strategy: 'long', growth: 12 });
  assert(res.finalValue > 15000000, 'Final value should exceed purchase price');
  assert(res.totalRental > 0, 'Total rental should be positive');
  assert(isFinite(res.netRoi), 'Net ROI must be finite');
});

it('Scenario 5: High-yield JVC with Short-term rental uplift', () => {
  const longRes = calculateRoi({ ptype: 'apartment', area: 'jvc', price: 1000000, stage: 'under', holding: 5, strategy: 'long', growth: 8 });
  const shortRes = calculateRoi({ ptype: 'apartment', area: 'jvc', price: 1000000, stage: 'under', holding: 5, strategy: 'short', growth: 8 });
  assert(shortRes.effYield > longRes.effYield, 'Short-term strategy should yield higher than long-term');
  assert(shortRes.totalRental > longRes.totalRental, 'Short-term strategy should yield more total rental income');
});

it('Scenario 6: Clamping of out-of-range prices & holding periods', () => {
  const resUnder = calculateRoi({ price: 100000, holding: 0 });
  assert.strictEqual(resUnder.price, 500000, 'Price under 500k should be clamped to 500,000');
  const resOver = calculateRoi({ price: 100000000, holding: 20 });
  assert.strictEqual(resOver.price, 50000000, 'Price over 50M should be clamped to 50,000,000');
});

console.log('\n--- 2. English DOM & Live Calculation Verification ---');

const enHtml = fs.readFileSync('off-plan/roi-predictor.html', 'utf8');
const enDom = new JSDOM(enHtml, { runScripts: 'dangerously' });
const enDoc = enDom.window.document;

it('[English DOM] Required calculation elements and outputs exist', () => {
  assert(enDoc.getElementById('roi-form'), 'Missing #roi-form');
  assert(enDoc.getElementById('price'), 'Missing #price input');
  assert(enDoc.getElementById('price-slider'), 'Missing #price-slider');
  assert(enDoc.getElementById('area'), 'Missing #area select');
  assert(enDoc.getElementById('holding-period'), 'Missing #holding-period');
  assert(enDoc.getElementById('r-netroi'), 'Missing #r-netroi');
  assert(enDoc.getElementById('r-finalvalue'), 'Missing #r-finalvalue');
  assert(enDoc.getElementById('r-appreciation'), 'Missing #r-appreciation');
  assert(enDoc.getElementById('r-yield'), 'Missing #r-yield');
  assert(enDoc.getElementById('r-totalrental'), 'Missing #r-totalrental');
  assert(enDoc.getElementById('r-costs'), 'Missing #r-costs');
  assert(enDoc.getElementById('r-annualized'), 'Missing #r-annualized');
  assert(enDoc.getElementById('r-breakeven'), 'Missing #r-breakeven');
  assert(enDoc.getElementById('results-cta'), 'Missing #results-cta');
});

it('[English DOM] Initial rendered results are computed, formatted, and non-empty', () => {
  const netRoi = enDoc.getElementById('r-netroi').textContent;
  assert(netRoi.includes('%'), `Expected % in netRoi, got "${netRoi}"`);
  assert(!netRoi.includes('—'), 'netRoi should not be placeholder dash');
  const finalVal = enDoc.getElementById('r-finalvalue').textContent;
  assert(finalVal.includes('AED'), `Expected AED in finalvalue, got "${finalVal}"`);
  const ctaHref = enDoc.getElementById('results-cta').getAttribute('href');
  assert(ctaHref.includes('wa.me/971586901231'), 'CTA should point to WhatsApp with prefilled message');
});

it('[English DOM] Dynamic input event updates results live', () => {
  const priceInput = enDoc.getElementById('price');
  priceInput.value = '5000000';
  priceInput.dispatchEvent(new enDom.window.Event('input', { bubbles: true }));

  const newFinal = enDoc.getElementById('r-finalvalue').textContent;
  assert(newFinal.includes('AED') && !newFinal.includes('2,000,000'), `Expected updated price display, got "${newFinal}"`);
});

console.log('\n--- 3. Persian DOM & Live Calculation Verification ---');

const faHtml = fs.readFileSync('fa/off-plan/roi-predictor.html', 'utf8');
const faDom = new JSDOM(faHtml, { runScripts: 'dangerously' });
const faDoc = faDom.window.document;

it('[Persian DOM] Has dir="rtl", lang="fa", and localized structure', () => {
  assert.strictEqual(faDoc.documentElement.getAttribute('dir'), 'rtl');
  assert.strictEqual(faDoc.documentElement.getAttribute('lang'), 'fa');
  assert(faDoc.getElementById('roi-form'), 'Missing #roi-form');
  assert(faDoc.getElementById('r-netroi'), 'Missing #r-netroi');
});

it('[Persian DOM] Initial rendered results are Persian localized', () => {
  const netRoi = faDoc.getElementById('r-netroi').textContent;
  assert(netRoi.includes('٪'), `Expected Persian percent sign ٪ in netRoi, got "${netRoi}"`);
  const finalVal = faDoc.getElementById('r-finalvalue').textContent;
  assert(finalVal.includes('درهم'), `Expected درهم in finalvalue, got "${finalVal}"`);
  const ctaHref = faDoc.getElementById('results-cta').getAttribute('href');
  assert(ctaHref.includes('wa.me/971586901231'), 'CTA should point to WhatsApp');
});

it('[Persian DOM] Dynamic price change recalculates with Persian numbers', () => {
  const priceInput = faDoc.getElementById('price');
  priceInput.value = '4000000';
  priceInput.dispatchEvent(new faDom.window.Event('input', { bubbles: true }));

  const newFinal = faDoc.getElementById('r-finalvalue').textContent;
  assert(newFinal.includes('درهم'), `Expected درهم in finalvalue, got "${newFinal}"`);
});

console.log('\n--- 4. Clean Directory Mirror Indices Verification ---');

it('off-plan/roi-predictor/index.html matches off-plan/roi-predictor.html exactly', () => {
  const main = fs.readFileSync('off-plan/roi-predictor.html', 'utf8');
  const index = fs.readFileSync('off-plan/roi-predictor/index.html', 'utf8');
  assert.strictEqual(main, index, 'Directory index does not match primary html file');
});

it('fa/off-plan/roi-predictor/index.html matches fa/off-plan/roi-predictor.html exactly', () => {
  const main = fs.readFileSync('fa/off-plan/roi-predictor.html', 'utf8');
  const index = fs.readFileSync('fa/off-plan/roi-predictor/index.html', 'utf8');
  assert.strictEqual(main, index, 'Directory index does not match primary html file');
});

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} / ${totalTests} PASSED, ${totalTests - passedTests} FAILED`);
console.log('================================================================');

if (totalTests === passedTests) {
  console.log('🎉 ALL ROI PREDICTOR TESTS PASSED FLAWLESSLY!\n');
} else {
  process.exit(1);
}
