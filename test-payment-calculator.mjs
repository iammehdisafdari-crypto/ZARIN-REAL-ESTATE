import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('================================================================');
console.log('ZARIN OFF-PLAN PAYMENT CALCULATOR VERIFICATION SUITE');
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

// 1. Test calculation engine logic
console.log('--- 1. Mathematical Accuracy & Reconciliations ---');

const PLAN_TEMPLATES = {
  "60-40": [
    { milestone: "Booking", trigger: "Sales agreement signed", pct: 10, offsetMonths: 0, isBooking: true },
    { milestone: "Construction Start", trigger: "Site mobilization", pct: 10, offsetMonths: 1 },
    { milestone: "20% Construction", trigger: "Foundation complete", pct: 10, offsetMonths: 6 },
    { milestone: "60% Construction", trigger: "Structure topped out", pct: 20, offsetMonths: 18 },
    { milestone: "80% Construction", trigger: "Facade complete", pct: 10, offsetMonths: 24 },
    { milestone: "Handover", trigger: "Keys handed over", pct: 40, offsetMonths: null }
  ],
  "70-30": [
    { milestone: "Booking", trigger: "Sales agreement signed", pct: 20, offsetMonths: 0, isBooking: true },
    { milestone: "Construction Start", trigger: "Site mobilization", pct: 20, offsetMonths: 1 },
    { milestone: "40% Construction", trigger: "Foundation complete", pct: 15, offsetMonths: 8 },
    { milestone: "70% Construction", trigger: "Structure topped out", pct: 15, offsetMonths: 20 },
    { milestone: "Handover", trigger: "Keys handed over", pct: 30, offsetMonths: null }
  ],
  "50-50": [
    { milestone: "Booking", trigger: "Sales agreement signed", pct: 10, offsetMonths: 0, isBooking: true },
    { milestone: "Construction Start", trigger: "Site mobilization", pct: 20, offsetMonths: 1 },
    { milestone: "50% Construction", trigger: "Mid-construction", pct: 20, offsetMonths: 12 },
    { milestone: "Handover", trigger: "Keys handed over", pct: 50, offsetMonths: null }
  ],
  "post-handover-50-50": [
    { milestone: "Booking", trigger: "Sales agreement signed", pct: 10, offsetMonths: 0, isBooking: true },
    { milestone: "Construction Start", trigger: "Site mobilization", pct: 15, offsetMonths: 1 },
    { milestone: "50% Construction", trigger: "Mid-construction", pct: 15, offsetMonths: 12 },
    { milestone: "Handover", trigger: "Keys handed over", pct: 10, offsetMonths: null },
    { milestone: "Post-Handover Year 1", trigger: "12 months after handover", pct: 25, offsetMonths: null, postHandover: 12 },
    { milestone: "Post-Handover Year 2", trigger: "24 months after handover", pct: 25, offsetMonths: null, postHandover: 24 }
  ],
  "1-percent-monthly": [
    { milestone: "Booking (10%)", trigger: "Sales agreement signed", pct: 10, offsetMonths: 0, isBooking: true },
    { milestone: "Construction Start (40%)", trigger: "Site mobilization", pct: 40, offsetMonths: 1 },
    { milestone: "Monthly 1% (50 months)", trigger: "1% per month during construction", pct: 50, offsetMonths: 2, isMonthly: true }
  ]
};

const DLD_FEE_RATE = 0.04;
const COMMISSION_RATE = 0.02;
const VAT_ON_COMMISSION = 0.05;
const ADMIN_FEE = 4000;
const TITLE_DEED_FEE = 580;

function computeSchedule(price, plan, duration, postHandover, includeDld, includeCommission) {
  // Clamping
  let p = Math.max(500000, Math.min(50000000, Number(price) || 2000000));
  let dur = Math.max(12, Math.min(60, parseInt(duration, 10) || 36));
  let ph = Math.max(12, Math.min(36, parseInt(postHandover, 10) || 24));

  const template = PLAN_TEMPLATES[plan] || PLAN_TEMPLATES["60-40"];
  let cumulativePct = 0;
  let schedule = [];

  template.forEach(m => {
    cumulativePct += m.pct;
    schedule.push({
      milestone: m.milestone,
      pct: m.pct,
      amount: p * (m.pct / 100),
      cumulativePct,
      isBooking: !!m.isBooking,
      isPostHandover: !!m.postHandover,
      isHandover: m.offsetMonths === null && !m.postHandover
    });
  });

  const booking = schedule[0];
  let constructionMilestones = 0;
  let postHandoverTotal = 0;

  schedule.forEach(r => {
    if (!r.isBooking && !r.isPostHandover && !r.isHandover) {
      constructionMilestones += r.amount;
    } else if (r.isPostHandover) {
      postHandoverTotal += r.amount;
    }
  });

  const dldFee = includeDld ? p * DLD_FEE_RATE : 0;
  const commission = includeCommission ? p * COMMISSION_RATE : 0;
  const vat = commission * VAT_ON_COMMISSION;
  const totalCost = p + dldFee + commission + vat + ADMIN_FEE + TITLE_DEED_FEE;
  const monthlyAvg = constructionMilestones / dur;

  return {
    price: p,
    duration: dur,
    postHandover: ph,
    downPayment: booking.amount,
    constructionMilestones,
    postHandoverTotal,
    totalCost,
    monthlyAvg,
    dldFee,
    commission,
    vat,
    adminFee: ADMIN_FEE,
    titleDeedFee: TITLE_DEED_FEE,
    finalCumulativePct: cumulativePct,
    schedule
  };
}

it('Every template reconciles to exactly 100% milestone allocation', () => {
  for (const [key, template] of Object.entries(PLAN_TEMPLATES)) {
    const sum = template.reduce((acc, m) => acc + m.pct, 0);
    if (sum !== 100) throw new Error(`Template ${key} totals ${sum}%, not 100%`);
  }
});

it('Test Case 1: Standard 60/40 plan @ AED 2,000,000 for 36 months', () => {
  const res = computeSchedule(2000000, '60-40', 36, 24, true, true);
  if (res.downPayment !== 200000) throw new Error(`Expected downPayment 200,000, got ${res.downPayment}`);
  if (res.constructionMilestones !== 1000000) throw new Error(`Expected construction 1,000,000, got ${res.constructionMilestones}`);
  const expectedMonthly = 1000000 / 36;
  if (Math.abs(res.monthlyAvg - expectedMonthly) > 0.01) throw new Error(`Monthly avg mismatch: ${res.monthlyAvg}`);
  if (Math.round(res.monthlyAvg) !== 27778) throw new Error(`Rounded monthly avg mismatch: ${Math.round(res.monthlyAvg)}`);
  if (res.dldFee !== 80000) throw new Error(`DLD mismatch: ${res.dldFee}`);
  if (res.commission !== 40000) throw new Error(`Commission mismatch: ${res.commission}`);
  if (res.vat !== 2000) throw new Error(`VAT mismatch: ${res.vat}`);
  if (res.totalCost !== 2126580) throw new Error(`Total cost mismatch: ${res.totalCost}`);
});

it('Test Case 2: 70/30 plan @ AED 5,000,000 for 48 months', () => {
  const res = computeSchedule(5000000, '70-30', 48, 24, true, true);
  if (res.downPayment !== 1000000) throw new Error(`Down payment mismatch: ${res.downPayment}`);
  if (res.constructionMilestones !== 2500000) throw new Error(`Construction milestones mismatch: ${res.constructionMilestones}`);
  if (Math.round(res.monthlyAvg) !== 52083) throw new Error(`Monthly avg mismatch: ${Math.round(res.monthlyAvg)}`);
  if (res.dldFee !== 200000) throw new Error(`DLD fee mismatch: ${res.dldFee}`);
  if (res.commission !== 100000) throw new Error(`Commission mismatch: ${res.commission}`);
  if (res.vat !== 5000) throw new Error(`VAT mismatch: ${res.vat}`);
  if (res.totalCost !== 5309580) throw new Error(`Total cost mismatch: ${res.totalCost}`);
});

it('Test Case 3: Post-handover 50/50 @ AED 3,000,000 for 36mo build + 24mo post-handover', () => {
  const res = computeSchedule(3000000, 'post-handover-50-50', 36, 24, true, true);
  if (res.downPayment !== 300000) throw new Error(`Down payment mismatch: ${res.downPayment}`);
  if (res.postHandoverTotal !== 1500000) throw new Error(`Post handover total mismatch: ${res.postHandoverTotal}`);
  if (res.finalCumulativePct !== 100) throw new Error(`Cumulative pct mismatch: ${res.finalCumulativePct}`);
});

it('Test Case 4: Fee toggles (DLD-free promotion & zero commission)', () => {
  const resNoDld = computeSchedule(2000000, '60-40', 36, 24, false, true);
  if (resNoDld.dldFee !== 0) throw new Error(`DLD should be 0, got ${resNoDld.dldFee}`);
  if (resNoDld.totalCost !== 2000000 + 40000 + 2000 + 4000 + 580) throw new Error(`Total cost mismatch without DLD: ${resNoDld.totalCost}`);

  const resNet = computeSchedule(2000000, '60-40', 36, 24, false, false);
  if (resNet.dldFee !== 0 || resNet.commission !== 0 || resNet.vat !== 0) throw new Error('Fees should be zeroed');
  if (resNet.totalCost !== 2000000 + 4000 + 580) throw new Error(`Net total cost mismatch: ${resNet.totalCost}`);
});

it('Test Case 5: Clamping boundaries and NaN safety', () => {
  const resLow = computeSchedule(100, '60-40', 2, 5, true, true);
  if (resLow.price !== 500000) throw new Error(`Price should be clamped to 500,000, got ${resLow.price}`);
  if (resLow.duration !== 12) throw new Error(`Duration should be clamped to 12, got ${resLow.duration}`);
  if (resLow.postHandover !== 12) throw new Error(`Post handover should be clamped to 12, got ${resLow.postHandover}`);

  const resHigh = computeSchedule(100000000, '60-40', 100, 100, true, true);
  if (resHigh.price !== 50000000) throw new Error(`Price should be clamped to 50,000,000, got ${resHigh.price}`);
  if (resHigh.duration !== 60) throw new Error(`Duration should be clamped to 60, got ${resHigh.duration}`);
  if (resHigh.postHandover !== 36) throw new Error(`Post handover should be clamped to 36, got ${resHigh.postHandover}`);

  const resNan = computeSchedule('invalid', '60-40', 'xyz', 'foo', true, true);
  if (isNaN(resNan.totalCost) || !isFinite(resNan.totalCost)) throw new Error('NaN or Infinite result produced');
  if (isNaN(resNan.monthlyAvg) || !isFinite(resNan.monthlyAvg)) throw new Error('NaN or Infinite monthlyAvg');
});

// 2. DOM inspection of actual generated files
console.log('\n--- 2. DOM & Functional Element Verification ---');

const enHtml = fs.readFileSync(path.join(__dirname, 'off-plan/payment-calculator.html'), 'utf8');
const faHtml = fs.readFileSync(path.join(__dirname, 'fa/off-plan/payment-calculator.html'), 'utf8');

const enDom = new JSDOM(enHtml, { runScripts: 'dangerously' });
const faDom = new JSDOM(faHtml, { runScripts: 'dangerously' });

it('[EN DOM] Interactive calculator inputs and result elements are present', () => {
  const doc = enDom.window.document;
  if (!doc.getElementById('price-input')) throw new Error('Missing #price-input');
  if (!doc.getElementById('price-slider')) throw new Error('Missing #price-slider');
  if (!doc.getElementById('duration-input')) throw new Error('Missing #duration-input');
  if (!doc.getElementById('plan-select')) throw new Error('Missing #plan-select');
  if (!doc.getElementById('dld-toggle')) throw new Error('Missing #dld-toggle');
  if (!doc.getElementById('commission-toggle')) throw new Error('Missing #commission-toggle');
  if (!doc.getElementById('metric-downpayment')) throw new Error('Missing #metric-downpayment');
  if (!doc.getElementById('metric-construction')) throw new Error('Missing #metric-construction');
  if (!doc.getElementById('metric-total')) throw new Error('Missing #metric-total');
  if (!doc.getElementById('metric-monthly')) throw new Error('Missing #metric-monthly');
  if (!doc.getElementById('schedule-tbody')) throw new Error('Missing #schedule-tbody');
});

it('[EN DOM] Default calculation initialized correctly in DOM', () => {
  const doc = enDom.window.document;
  const downPayment = doc.getElementById('metric-downpayment').textContent.trim();
  const construction = doc.getElementById('metric-construction').textContent.trim();
  const total = doc.getElementById('metric-total').textContent.trim();
  const monthly = doc.getElementById('metric-monthly').textContent.trim();

  if (downPayment !== 'AED 200,000') throw new Error(`Initial downpayment: expected AED 200,000, got "${downPayment}"`);
  if (construction !== 'AED 1,000,000') throw new Error(`Initial construction: expected AED 1,000,000, got "${construction}"`);
  if (total !== 'AED 2,126,580') throw new Error(`Initial total: expected AED 2,126,580, got "${total}"`);
  if (monthly !== 'AED 27,778') throw new Error(`Initial monthly: expected AED 27,778, got "${monthly}"`);
});

it('[FA DOM] Persian interactive calculator inputs and result elements are present', () => {
  const doc = faDom.window.document;
  if (!doc.getElementById('price-input')) throw new Error('Missing #price-input');
  if (!doc.getElementById('price-slider')) throw new Error('Missing #price-slider');
  if (!doc.getElementById('duration-input')) throw new Error('Missing #duration-input');
  if (!doc.getElementById('plan-select')) throw new Error('Missing #plan-select');
  if (!doc.getElementById('dld-toggle')) throw new Error('Missing #dld-toggle');
  if (!doc.getElementById('commission-toggle')) throw new Error('Missing #commission-toggle');
  if (!doc.getElementById('metric-downpayment')) throw new Error('Missing #metric-downpayment');
  if (!doc.getElementById('metric-construction')) throw new Error('Missing #metric-construction');
  if (!doc.getElementById('metric-total')) throw new Error('Missing #metric-total');
  if (!doc.getElementById('metric-monthly')) throw new Error('Missing #metric-monthly');
  if (!doc.getElementById('schedule-tbody')) throw new Error('Missing #schedule-tbody');
});

it('[FA DOM] Persian initial calculation rendered in DOM', () => {
  const doc = faDom.window.document;
  const downPayment = doc.getElementById('metric-downpayment').textContent.trim();
  const construction = doc.getElementById('metric-construction').textContent.trim();
  const total = doc.getElementById('metric-total').textContent.trim();
  const monthly = doc.getElementById('metric-monthly').textContent.trim();

  if (downPayment !== 'AED 200,000') throw new Error(`Initial downpayment: expected AED 200,000, got "${downPayment}"`);
  if (construction !== 'AED 1,000,000') throw new Error(`Initial construction: expected AED 1,000,000, got "${construction}"`);
  if (total !== 'AED 2,126,580') throw new Error(`Initial total: expected AED 2,126,580, got "${total}"`);
  if (monthly !== 'AED 27,778') throw new Error(`Initial monthly: expected AED 27,778, got "${monthly}"`);
});

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} / ${totalTests} PASSED, ${totalTests - passedTests} FAILED`);
console.log('================================================================\n');

if (passedTests === totalTests) {
  console.log('🎉 ALL PAYMENT CALCULATOR VERIFICATION TESTS PASSED!');
  process.exit(0);
} else {
  process.exit(1);
}
