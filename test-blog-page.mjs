import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

console.log('================================================================');
console.log('ZARIN BLOG PAGE DEDICATED VERIFICATION SUITE');
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

// 1. Files existence check
const filesToCheck = [
  'insights/blog.html',
  'insights/blog/index.html',
  'fa/insights/blog.html',
  'fa/insights/blog/index.html',
  // Blog article aliases
  'insights/blog/non-resident-buyers-blueprint.html',
  'insights/blog/non-resident-buyers-blueprint/index.html',
  'insights/blog/entry-price-vs-replacement-cost.html',
  'insights/blog/entry-price-vs-replacement-cost/index.html',
  'insights/blog/golden-visa-aed-2m-pathway.html',
  'insights/blog/golden-visa-aed-2m-pathway/index.html',
  'insights/blog/dubai-hills-estate-investment-case.html',
  'insights/blog/dubai-hills-estate-investment-case/index.html',
  'insights/blog/off-plan-vs-ready-2026.html',
  'insights/blog/off-plan-vs-ready-2026/index.html',
  'insights/blog/service-charges-explained.html',
  'insights/blog/service-charges-explained/index.html',
  // Persian blog article aliases
  'fa/insights/blog/non-resident-buyers-blueprint.html',
  'fa/insights/blog/non-resident-buyers-blueprint/index.html',
  'fa/insights/blog/entry-price-vs-replacement-cost.html',
  'fa/insights/blog/entry-price-vs-replacement-cost/index.html',
  'fa/insights/blog/golden-visa-aed-2m-pathway.html',
  'fa/insights/blog/golden-visa-aed-2m-pathway/index.html',
  'fa/insights/blog/dubai-hills-estate-investment-case.html',
  'fa/insights/blog/dubai-hills-estate-investment-case/index.html',
  'fa/insights/blog/off-plan-vs-ready-2026.html',
  'fa/insights/blog/off-plan-vs-ready-2026/index.html',
  'fa/insights/blog/service-charges-explained.html',
  'fa/insights/blog/service-charges-explained/index.html',
];

console.log('\n--- 1. File & Directory Mirror Existence ---');
for (const f of filesToCheck) {
  const p = path.join(rootDir, f);
  assert(fs.existsSync(p), `File exists: ${f}`);
}

// 2. Parity between .html and /index.html
console.log('\n--- 2. Direct HTML vs Directory Index Parity ---');
const parityPairs = [
  ['insights/blog.html', 'insights/blog/index.html'],
  ['fa/insights/blog.html', 'fa/insights/blog/index.html'],
];
for (const [f1, f2] of parityPairs) {
  const c1 = fs.readFileSync(path.join(rootDir, f1), 'utf8');
  const c2 = fs.readFileSync(path.join(rootDir, f2), 'utf8');
  assert(c1 === c2, `Content identical between ${f1} and ${f2}`);
}

// 3. Inspect English Blog Page
console.log('\n--- 3. English Blog Page Structural & Functional Checks ---');
const enHtml = fs.readFileSync(path.join(rootDir, 'insights/blog.html'), 'utf8');
const enDom = new JSDOM(enHtml);
const enDoc = enDom.window.document;

assert(enDoc.documentElement.getAttribute('lang') === 'en', 'EN html has lang="en"');
assert(enDoc.documentElement.getAttribute('dir') === 'ltr', 'EN html has dir="ltr"');

// Title & SEO
assert(enDoc.title.includes('Dubai Real Estate Blog'), 'EN title has Dubai Real Estate Blog');
const enCanonical = enDoc.querySelector('link[rel="canonical"]')?.getAttribute('href');
assert(enCanonical === 'https://zarinrealestate.com/insights/blog', 'EN canonical URL is correct');
const enHreflangEn = enDoc.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href');
const enHreflangFa = enDoc.querySelector('link[rel="alternate"][hreflang="fa"]')?.getAttribute('href');
assert(enHreflangEn === 'https://zarinrealestate.com/insights/blog', 'EN alternate hreflang="en" is correct');
assert(enHreflangFa === 'https://zarinrealestate.com/fa/insights/blog', 'EN alternate hreflang="fa" is correct');

// Permanent Global Header Rule: Language switcher hidden on internal pages
const enLangToggle = enDoc.querySelector('.header-lang-toggle, [data-lang-toggle]');
const enLangDisplay = enLangToggle ? enLangToggle.style.display || enLangToggle.getAttribute('style') : null;
assert(!enLangToggle || (enLangDisplay && enLangDisplay.includes('none')), 'EN header language selector is hidden per global rule');

// Header nav structure: 6 standard triggers
const enTriggers = enDoc.querySelectorAll('.mega-menu-trigger');
assert(enTriggers.length === 6, `EN header has standard 6 desktop triggers (found: ${enTriggers.length})`);
for (const trigger of enTriggers) {
  const toggleEl = trigger.querySelector('[aria-expanded]');
  const label = trigger.querySelector('a')?.textContent.trim() || 'Trigger';
  assert(toggleEl && toggleEl.getAttribute('aria-expanded') === 'false', `Desktop trigger "${label}" starts with aria-expanded="false"`);
}

// Mobile drawer starts closed
const enMobileDrawer = enDoc.getElementById('mobile-menu');
assert(enMobileDrawer !== null, 'EN mobile drawer #mobile-menu exists');
assert(!enMobileDrawer?.classList.contains('open'), 'EN mobile drawer is initially closed (does not contain .open)');
const enMobileItems = enDoc.querySelectorAll('.mobile-nav-item');
assert(enMobileItems.length === 6, `EN mobile menu has exactly 6 accordion items (found: ${enMobileItems.length})`);

// Section IDs check (11 sections)
const expectedSections = [
  'hero',
  'tldr',
  'featured-articles',
  'topics',
  'library',
  'standards',
  'founder',
  'start-here',
  'faq',
  'newsletter'
];
for (const secId of expectedSections) {
  const el = enDoc.getElementById(secId);
  assert(el !== null, `EN section #${secId} exists`);
}

// FAQ accordions check (using details/summary)
const enFaqDetails = enDoc.querySelectorAll('#faq details');
assert(enFaqDetails.length >= 6, `EN FAQ has >= 6 questions (found ${enFaqDetails.length})`);

// 4. Inspect Persian Blog Page
console.log('\n--- 4. Persian Blog Page Structural & Localization Checks ---');
const faHtml = fs.readFileSync(path.join(rootDir, 'fa/insights/blog.html'), 'utf8');
const faDom = new JSDOM(faHtml);
const faDoc = faDom.window.document;

assert(faDoc.documentElement.getAttribute('lang') === 'fa', 'FA html has lang="fa"');
assert(faDoc.documentElement.getAttribute('dir') === 'rtl', 'FA html has dir="rtl"');

// Typography
assert(faHtml.includes('Vazirmatn'), 'FA loads Vazirmatn font');

// Title & SEO
assert(faDoc.title.includes('املاک دبی') && faDoc.title.includes('زرین'), 'FA title contains Persian headline & branding');
const faCanonical = faDoc.querySelector('link[rel="canonical"]')?.getAttribute('href');
assert(faCanonical === 'https://zarinrealestate.com/fa/insights/blog', 'FA canonical URL is correct');
const faHreflangEn = faDoc.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href');
const faHreflangFa = faDoc.querySelector('link[rel="alternate"][hreflang="fa"]')?.getAttribute('href');
assert(faHreflangEn === 'https://zarinrealestate.com/insights/blog', 'FA alternate hreflang="en" is correct');
assert(faHreflangFa === 'https://zarinrealestate.com/fa/insights/blog', 'FA alternate hreflang="fa" is correct');

// Permanent Global Header Rule: Language switcher hidden on internal pages
const faLangToggle = faDoc.querySelector('.header-lang-toggle, [data-lang-toggle]');
const faLangDisplay = faLangToggle ? faLangToggle.style.display || faLangToggle.getAttribute('style') : null;
assert(!faLangToggle || (faLangDisplay && faLangDisplay.includes('none')), 'FA header language selector is hidden per global rule');

// Header nav structure: 6 standard triggers
const faTriggers = faDoc.querySelectorAll('.mega-menu-trigger');
assert(faTriggers.length === 6, `FA header has standard 6 desktop triggers (found: ${faTriggers.length})`);
for (const trigger of faTriggers) {
  const toggleEl = trigger.querySelector('[aria-expanded]');
  const label = trigger.querySelector('a')?.textContent.trim() || 'Trigger';
  assert(toggleEl && toggleEl.getAttribute('aria-expanded') === 'false', `FA desktop trigger "${label}" starts with aria-expanded="false"`);
}

// Mobile drawer starts closed
const faMobileDrawer = faDoc.getElementById('mobile-menu');
assert(faMobileDrawer !== null, 'FA mobile drawer #mobile-menu exists');
assert(!faMobileDrawer?.classList.contains('open'), 'FA mobile drawer is initially closed (does not contain .open)');
const faMobileItems = faDoc.querySelectorAll('.mobile-nav-item');
assert(faMobileItems.length === 6, `FA mobile menu has exactly 6 accordion items (found: ${faMobileItems.length})`);

// Section IDs check
for (const secId of expectedSections) {
  const el = faDoc.getElementById(secId);
  assert(el !== null, `FA section #${secId} exists`);
}

// Check JSON-LD
const enJsonLd = enDoc.querySelectorAll('script[type="application/ld+json"]');
const faJsonLd = faDoc.querySelectorAll('script[type="application/ld+json"]');
assert(enJsonLd.length >= 2, `EN has >= 2 JSON-LD schemas (found ${enJsonLd.length})`);
assert(faJsonLd.length >= 2, `FA has >= 2 JSON-LD schemas (found ${faJsonLd.length})`);

// Check Scripts
assert(enHtml.includes('/scripts/i18n.js'), 'EN loads /scripts/i18n.js');
assert(enHtml.includes('/scripts/nav.js'), 'EN loads /scripts/nav.js');
assert(faHtml.includes('/scripts/i18n.js'), 'FA loads /scripts/i18n.js');
assert(faHtml.includes('/scripts/nav.js'), 'FA loads /scripts/nav.js');

console.log('================================================================');
console.log(`SUMMARY: ${passed} passed, ${failed} failed.`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL BLOG PAGE TESTS PASSED!');
}
