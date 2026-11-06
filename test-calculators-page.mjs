import fs from 'fs';
import path from 'path';

console.log('================================================================');
console.log('TEST SUITE: ALL CALCULATORS PAGE IMPLEMENTATION (EN + FA)');
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

// 1. Files existence & mirror parity
const enSrc = 'insights/calculators.html';
const enMirror = 'insights/calculators/index.html';
const faSrc = 'fa/insights/calculators.html';
const faMirror = 'fa/insights/calculators/index.html';

assert(fs.existsSync(enSrc), `${enSrc} exists`);
assert(fs.existsSync(enMirror), `${enMirror} exists`);
assert(fs.existsSync(faSrc), `${faSrc} exists`);
assert(fs.existsSync(faMirror), `${faMirror} exists`);

const enContent = fs.readFileSync(enSrc, 'utf8');
const enMirrorContent = fs.readFileSync(enMirror, 'utf8');
const faContent = fs.readFileSync(faSrc, 'utf8');
const faMirrorContent = fs.readFileSync(faMirror, 'utf8');

assert(enContent === enMirrorContent, 'English source and clean-URL mirror are byte-for-byte identical');
assert(faContent === faMirrorContent, 'Persian source and clean-URL mirror are byte-for-byte identical');

// 2. English Page Validation
assert(enContent.includes('<html lang="en" dir="ltr">'), 'English HTML tag has lang="en" dir="ltr"');
assert(enContent.includes('<link rel="canonical" href="https://zarinrealestate.com/insights/calculators">'), 'English canonical link is correct');
assert(enContent.includes('<link rel="alternate" hreflang="en" href="https://zarinrealestate.com/insights/calculators">'), 'English hreflang en is present');
assert(enContent.includes('<link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/insights/calculators">'), 'English hreflang fa is present');
assert(enContent.includes('<link rel="stylesheet" href="/styles/main.css">'), 'English page loads /styles/main.css');

// Verify all 10 sections
const expectedSections = [
  'hero',
  'tldr',
  'tools',
  'bonus-tool',
  'how-the-math-works',
  'worked-examples',
  'choosing',
  'data-sources',
  'faq',
  'cta'
];

expectedSections.forEach(secId => {
  assert(enContent.includes(`id="${secId}"`), `English page contains section #${secId}`);
});

// Verify tools links
const enToolLinks = [
  '/services/buying#mortgage',
  '/off-plan/roi-predictor',
  '/off-plan/payment-calculator',
  '/private-office/multi-currency',
  '/visas/eligibility-checker',
  '/properties',
  '/services/valuation'
];

enToolLinks.forEach(link => {
  assert(enContent.includes(`href="${link}"`), `English page links to ${link}`);
});

// Verify 8 FAQ items
const enFaqMatches = [...enContent.matchAll(/<details/g)];
assert(enFaqMatches.length === 8, `English FAQ has exactly 8 accordion items (found ${enFaqMatches.length})`);
assert(enContent.includes('<details class="bg-ink-850 border border-white-line rounded-sm" open>'), 'English first FAQ item starts open');

// Verify header rules
assert(enContent.includes('id="site-header"'), 'English page has #site-header');
assert(enContent.includes('id="mobile-menu"'), 'English page has #mobile-menu');
assert(!enContent.includes('class="page-home"') && !enContent.includes("class='page-home'"), 'English body does not have page-home');
assert(!enContent.includes('data-page="home"'), 'English body does not have data-page="home"');

// 3. Persian Page Validation
assert(faContent.includes('<html lang="fa" dir="rtl">'), 'Persian HTML tag has lang="fa" dir="rtl"');
assert(faContent.includes('<link rel="canonical" href="https://zarinrealestate.com/fa/insights/calculators">'), 'Persian canonical link is correct');
assert(faContent.includes('<link rel="alternate" hreflang="en" href="https://zarinrealestate.com/insights/calculators">'), 'Persian hreflang en is present');
assert(faContent.includes('<link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/insights/calculators">'), 'Persian hreflang fa is present');
assert(faContent.includes('<link rel="stylesheet" href="/styles/main.css">'), 'Persian page loads /styles/main.css');

expectedSections.forEach(secId => {
  assert(faContent.includes(`id="${secId}"`), `Persian page contains section #${secId}`);
});

// Verify tools Persian links
const faToolLinks = [
  '/fa/services/buying#mortgage',
  '/fa/off-plan/roi-predictor',
  '/fa/off-plan/payment-calculator',
  '/fa/private-office/multi-currency',
  '/fa/visas/eligibility-checker',
  '/fa/properties',
  '/fa/services/valuation'
];

faToolLinks.forEach(link => {
  assert(faContent.includes(`href="${link}"`), `Persian page links to ${link}`);
});

// Verify 8 FAQ items in Persian
const faFaqMatches = [...faContent.matchAll(/<details/g)];
assert(faFaqMatches.length === 8, `Persian FAQ has exactly 8 accordion items (found ${faFaqMatches.length})`);
assert(faContent.includes('<details class="bg-ink-850 border border-white-line rounded-sm" open>'), 'Persian first FAQ item starts open');

// Verify header rules
assert(faContent.includes('id="site-header"'), 'Persian page has #site-header');
assert(faContent.includes('id="mobile-menu"'), 'Persian page has #mobile-menu');
assert(!faContent.includes('class="page-home"') && !faContent.includes("class='page-home'"), 'Persian body does not have page-home');
assert(!faContent.includes('data-page="home"'), 'Persian body does not have data-page="home"');
assert(faContent.includes('fixed bottom-6 left-6'), 'Persian sticky WhatsApp is on left-6 for RTL');

// Summary
console.log('================================================================');
console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) process.exit(1);
