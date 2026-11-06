import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

console.log('================================================================');
console.log('ZARIN TESTIMONIALS PAGE — COMPREHENSIVE VERIFICATION SUITE');
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

// 1. Files & Directory Mirrors
const files = [
  { path: 'heritage/testimonials.html', name: 'English Testimonials HTML' },
  { path: 'heritage/testimonials/index.html', name: 'English Testimonials Mirror' },
  { path: 'fa/heritage/testimonials.html', name: 'Persian Testimonials HTML' },
  { path: 'fa/heritage/testimonials/index.html', name: 'Persian Testimonials Mirror' },
];

console.log('\n--- 1. File Existence & Clean URL Mirror Integrity ---');
for (const f of files) {
  const fullPath = path.join(rootDir, f.path);
  assert(fs.existsSync(fullPath), `${f.name} exists at ${f.path}`);
}

const enHtml = fs.readFileSync(path.join(rootDir, 'heritage/testimonials.html'), 'utf8');
const enMirrorHtml = fs.readFileSync(path.join(rootDir, 'heritage/testimonials/index.html'), 'utf8');
const faHtml = fs.readFileSync(path.join(rootDir, 'fa/heritage/testimonials.html'), 'utf8');
const faMirrorHtml = fs.readFileSync(path.join(rootDir, 'fa/heritage/testimonials/index.html'), 'utf8');

assert(enHtml === enMirrorHtml, 'English HTML and its directory index mirror are 100% byte-identical');
assert(faHtml === faMirrorHtml, 'Persian HTML and its directory index mirror are 100% byte-identical');

// 2. DOM Parsing & Inspection
const domEn = new JSDOM(enHtml);
const docEn = domEn.window.document;
const domFa = new JSDOM(faHtml);
const docFa = domFa.window.document;

console.log('\n--- 2. Metadata, HTML Attributes & SEO Parity ---');
assert(docEn.documentElement.getAttribute('lang') === 'en', 'English page has lang="en"');
assert(docEn.documentElement.getAttribute('dir') === 'ltr', 'English page has dir="ltr"');
assert(docFa.documentElement.getAttribute('lang') === 'fa', 'Persian page has lang="fa"');
assert(docFa.documentElement.getAttribute('dir') === 'rtl', 'Persian page has dir="rtl"');

// Canonical & Hreflang
const enCanonical = docEn.querySelector('link[rel="canonical"]')?.getAttribute('href');
const faCanonical = docFa.querySelector('link[rel="canonical"]')?.getAttribute('href');
assert(enCanonical === 'https://zarinrealestate.com/heritage/testimonials', 'English canonical is correct');
assert(faCanonical === 'https://zarinrealestate.com/fa/heritage/testimonials', 'Persian canonical is correct');

const enHreflangs = Array.from(docEn.querySelectorAll('link[rel="alternate"][hreflang]')).map(el => ({
  hreflang: el.getAttribute('hreflang'),
  href: el.getAttribute('href')
}));
const faHreflangs = Array.from(docFa.querySelectorAll('link[rel="alternate"][hreflang]')).map(el => ({
  hreflang: el.getAttribute('hreflang'),
  href: el.getAttribute('href')
}));

assert(enHreflangs.some(h => h.hreflang === 'en' && h.href === 'https://zarinrealestate.com/heritage/testimonials'), 'English hreflang en present');
assert(enHreflangs.some(h => h.hreflang === 'fa' && h.href === 'https://zarinrealestate.com/fa/heritage/testimonials'), 'English hreflang fa present');
assert(enHreflangs.some(h => h.hreflang === 'x-default' && h.href === 'https://zarinrealestate.com/heritage/testimonials'), 'English hreflang x-default present');

assert(faHreflangs.some(h => h.hreflang === 'en' && h.href === 'https://zarinrealestate.com/heritage/testimonials'), 'Persian hreflang en present');
assert(faHreflangs.some(h => h.hreflang === 'fa' && h.href === 'https://zarinrealestate.com/fa/heritage/testimonials'), 'Persian hreflang fa present');
assert(faHreflangs.some(h => h.hreflang === 'x-default' && h.href === 'https://zarinrealestate.com/heritage/testimonials'), 'Persian hreflang x-default present');

console.log('\n--- 3. Required Content Sections ---');
const requiredSections = [
  'hero',
  'tldr',
  'how-to-read',
  'buying-journeys',
  'financing-visa-journeys',
  'off-plan-journeys',
  'selling-after-sales',
  'pushback',
  'faq',
  'cta-band'
];

for (const secId of requiredSections) {
  assert(docEn.getElementById(secId) !== null, `English has section #${secId}`);
  assert(docFa.getElementById(secId) !== null, `Persian has section #${secId}`);
}

assert(docEn.getElementById('tldr-summary') !== null, 'English has #tldr-summary element');
assert(docFa.getElementById('tldr-summary') !== null, 'Persian has #tldr-summary element');

console.log('\n--- 4. Headline Stats Parity ---');
const enStats = Array.from(docEn.querySelectorAll('#hero .stat-number')).map(el => el.textContent.trim());
const faStats = Array.from(docFa.querySelectorAll('#hero .stat-number')).map(el => el.textContent.trim());

assert(enStats.includes('12'), 'English hero stats include 12 client voices');
assert(enStats.includes('0'), 'English hero stats include 0 invented names');
assert(enStats.includes('3'), 'English hero stats include 3 criticisms');
assert(enStats.includes('2005'), 'English hero stats include 2005 founder active since');

assert(faStats.includes('۱۲'), 'Persian hero stats include ۱۲ client voices');
assert(faStats.includes('۰'), 'Persian hero stats include ۰ invented names');
assert(faStats.includes('۳'), 'Persian hero stats include ۳ criticisms');
assert(faStats.includes('۲۰۰۵'), 'Persian hero stats include ۲۰۰۵ founder active since');

console.log('\n--- 5. Testimonial Cards & Pushback Cards Count ---');
// 3 in buying-journeys, 3 in financing-visa-journeys, 3 in off-plan-journeys, 3 in selling-after-sales = 12 total testimonials
const enBuyingCards = docEn.querySelectorAll('#buying-journeys article').length;
const faBuyingCards = docFa.querySelectorAll('#buying-journeys article').length;
assert(enBuyingCards === 3 && faBuyingCards === 3, 'Both EN and FA have 3 Buying Journey testimonial cards');

const enFinanceCards = docEn.querySelectorAll('#financing-visa-journeys article').length;
const faFinanceCards = docFa.querySelectorAll('#financing-visa-journeys article').length;
assert(enFinanceCards === 3 && faFinanceCards === 3, 'Both EN and FA have 3 Financing & Visa testimonial cards');

const enOffPlanCards = docEn.querySelectorAll('#off-plan-journeys article').length;
const faOffPlanCards = docFa.querySelectorAll('#off-plan-journeys article').length;
assert(enOffPlanCards === 3 && faOffPlanCards === 3, 'Both EN and FA have 3 Off-Plan testimonial cards');

const enSellingCards = docEn.querySelectorAll('#selling-after-sales article').length;
const faSellingCards = docFa.querySelectorAll('#selling-after-sales article').length;
assert(enSellingCards === 3 && faSellingCards === 3, 'Both EN and FA have 3 Selling & After-Sales testimonial cards');

const enPushbackCards = docEn.querySelectorAll('#pushback article').length;
const faPushbackCards = docFa.querySelectorAll('#pushback article').length;
assert(enPushbackCards === 3 && faPushbackCards === 3, 'Both EN and FA have 3 Honest Criticism (Pushback) cards');

console.log('\n--- 6. FAQ Accordion Logic ---');
const enFaqs = docEn.querySelectorAll('#faq details');
const faFaqs = docFa.querySelectorAll('#faq details');
assert(enFaqs.length === 8, `English has 8 FAQ items (found ${enFaqs.length})`);
assert(faFaqs.length === 8, `Persian has 8 FAQ items (found ${faFaqs.length})`);

assert(enFaqs[0].hasAttribute('open'), 'English FAQ Item 1 is open by default');
for (let i = 1; i < enFaqs.length; i++) {
  assert(!enFaqs[i].hasAttribute('open'), `English FAQ Item ${i + 1} is closed by default`);
}

assert(faFaqs[0].hasAttribute('open'), 'Persian FAQ Item 1 is open by default');
for (let i = 1; i < faFaqs.length; i++) {
  assert(!faFaqs[i].hasAttribute('open'), `Persian FAQ Item ${i + 1} is closed by default`);
}

console.log('\n--- 7. JSON-LD Structured Data ---');
function extractSchemas(doc) {
  return Array.from(doc.querySelectorAll('script[type="application/ld+json"]')).map(el => {
    try {
      return JSON.parse(el.textContent);
    } catch (e) {
      return null;
    }
  }).filter(Boolean);
}

const enSchemas = extractSchemas(docEn);
const faSchemas = extractSchemas(docFa);

const enTypes = enSchemas.map(s => s['@type']);
const faTypes = faSchemas.map(s => s['@type']);

assert(enTypes.includes('BreadcrumbList'), 'English has BreadcrumbList JSON-LD');
assert(faTypes.includes('BreadcrumbList'), 'Persian has BreadcrumbList JSON-LD');
assert(enTypes.includes('AboutPage'), 'English has AboutPage JSON-LD');
assert(faTypes.includes('AboutPage'), 'Persian has AboutPage JSON-LD');
assert(enTypes.includes('FAQPage'), 'English has FAQPage JSON-LD');
assert(faTypes.includes('FAQPage'), 'Persian has FAQPage JSON-LD');
assert(enTypes.includes('WebPage'), 'English has WebPage JSON-LD');
assert(faTypes.includes('WebPage'), 'Persian has WebPage JSON-LD');

const enFaqSchema = enSchemas.find(s => s['@type'] === 'FAQPage');
const faFaqSchema = faSchemas.find(s => s['@type'] === 'FAQPage');
assert(enFaqSchema && enFaqSchema.mainEntity.length === 8, 'English FAQPage schema contains 8 questions');
assert(faFaqSchema && faFaqSchema.mainEntity.length === 8, 'Persian FAQPage schema contains 8 questions');

console.log('\n--- 8. Header & Mobile Navigation Integrity ---');
assert(docEn.getElementById('site-header') !== null, 'English has #site-header');
assert(docFa.getElementById('site-header') !== null, 'Persian has #site-header');
assert(docEn.getElementById('mobile-menu') !== null, 'English has #mobile-menu');
assert(docFa.getElementById('mobile-menu') !== null, 'Persian has #mobile-menu');

assert(docEn.getElementById('properties-nav-toggle') !== null, 'English has #properties-nav-toggle');
assert(docEn.getElementById('offplan-nav-toggle') !== null, 'English has #offplan-nav-toggle');
assert(docEn.getElementById('areas-nav-toggle') !== null, 'English has #areas-nav-toggle');

assert(docFa.getElementById('properties-nav-toggle') !== null, 'Persian has #properties-nav-toggle');
assert(docFa.getElementById('offplan-nav-toggle') !== null, 'Persian has #offplan-nav-toggle');
assert(docFa.getElementById('areas-nav-toggle') !== null, 'Persian has #areas-nav-toggle');

const mobileAccordionIds = [
  'mobile-properties-toggle',
  'mobile-offplan-toggle',
  'mobile-areas-toggle',
  'mobile-services-toggle',
  'mobile-insights-toggle',
  'mobile-heritage-toggle'
];

for (const id of mobileAccordionIds) {
  assert(docEn.getElementById(id) !== null, `English mobile menu has #${id}`);
  assert(docFa.getElementById(id) !== null, `Persian mobile menu has #${id}`);
}

// Current page indicator
const enCurrentHeritage = docEn.querySelector('nav a[href="/heritage/testimonials"][aria-current="page"]');
const faCurrentHeritage = docFa.querySelector('nav a[href="/fa/heritage/testimonials"][aria-current="page"]');
assert(enCurrentHeritage !== null, 'English Testimonials navigation item has aria-current="page"');
assert(faCurrentHeritage !== null, 'Persian Testimonials navigation item has aria-current="page"');

console.log('\n================================================================');
console.log(`TOTAL CHECKS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL TESTIMONIALS SUITE CHECKS PASSED PERFECTLY!\n');
}

