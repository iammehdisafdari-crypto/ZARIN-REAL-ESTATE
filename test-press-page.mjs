import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

console.log('================================================================');
console.log('ZARIN PRESS & MEDIA PAGE DEDICATED VERIFICATION SUITE');
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

// 1. Check file existence & exact mirror sync
console.log('\n--- 1. File Existence & Clean Mirror Integrity ---');
const files = [
  'heritage/press.html',
  'heritage/press/index.html',
  'fa/heritage/press.html',
  'fa/heritage/press/index.html'
];

for (const file of files) {
  assert(fs.existsSync(path.join(rootDir, file)), `File exists: ${file}`);
}

const enFile = fs.readFileSync(path.join(rootDir, 'heritage/press.html'), 'utf8');
const enMirror = fs.readFileSync(path.join(rootDir, 'heritage/press/index.html'), 'utf8');
assert(enFile === enMirror, 'English mirror (heritage/press/index.html) is 100% byte-for-byte identical to heritage/press.html');

const faFile = fs.readFileSync(path.join(rootDir, 'fa/heritage/press.html'), 'utf8');
const faMirror = fs.readFileSync(path.join(rootDir, 'fa/heritage/press/index.html'), 'utf8');
assert(faFile === faMirror, 'Persian mirror (fa/heritage/press/index.html) is 100% byte-for-byte identical to fa/heritage/press.html');

// DOM Verification
const enDom = new JSDOM(enFile);
const faDom = new JSDOM(faFile);
const enDoc = enDom.window.document;
const faDoc = faDom.window.document;

console.log('\n--- 2. Document & Language Attributes ---');
assert(enDoc.documentElement.getAttribute('lang') === 'en', 'EN lang attribute is "en"');
assert(enDoc.documentElement.getAttribute('dir') === 'ltr', 'EN dir attribute is "ltr"');
assert(faDoc.documentElement.getAttribute('lang') === 'fa', 'FA lang attribute is "fa"');
assert(faDoc.documentElement.getAttribute('dir') === 'rtl', 'FA dir attribute is "rtl"');

console.log('\n--- 3. SEO Meta Tags & Bidirectional Hreflang ---');
function checkSeo(doc, lang, canonicalExpected) {
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href');
  assert(canonical === canonicalExpected, `[${lang}] Canonical URL is correct: ${canonical}`);

  const hreflangEn = doc.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href');
  const hreflangFa = doc.querySelector('link[rel="alternate"][hreflang="fa"]')?.getAttribute('href');
  const hreflangX = doc.querySelector('link[rel="alternate"][hreflang="x-default"]')?.getAttribute('href');

  assert(hreflangEn === 'https://zarinrealestate.com/heritage/press', `[${lang}] hreflang="en" is correct`);
  assert(hreflangFa === 'https://zarinrealestate.com/fa/heritage/press', `[${lang}] hreflang="fa" is correct`);
  assert(hreflangX === 'https://zarinrealestate.com/heritage/press', `[${lang}] hreflang="x-default" is correct`);

  const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content');
  assert(ogTitle && ogTitle.length > 10, `[${lang}] og:title is populated: ${ogTitle}`);

  const ogDesc = doc.querySelector('meta[property="og:description"]')?.getAttribute('content');
  assert(ogDesc && ogDesc.length > 20, `[${lang}] og:description is populated`);

  const twitterCard = doc.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
  assert(twitterCard === 'summary_large_image', `[${lang}] twitter:card is summary_large_image`);
}

checkSeo(enDoc, 'EN', 'https://zarinrealestate.com/heritage/press');
checkSeo(faDoc, 'FA', 'https://zarinrealestate.com/fa/heritage/press');

console.log('\n--- 4. All 10 Required Sections Verification ---');
const sectionIds = [
  'hero',
  'tldr',
  'outlets',
  'commentary-themes',
  'commenting-rules',
  'media-kit',
  'press-contact',
  'interview-formats',
  'faq',
  'cta-band'
];

for (const id of sectionIds) {
  assert(enDoc.getElementById(id) !== null, `[EN] Section #${id} is present in document`);
  assert(faDoc.getElementById(id) !== null, `[FA] Section #${id} is present in document`);
}

console.log('\n--- 5. Content Elements & Statistics Integrity ---');
function checkSectionContents(doc, lang) {
  // Hero stats (4 stats)
  const heroStats = doc.querySelectorAll('#hero .stat-number');
  assert(heroStats.length >= 4, `[${lang}] Hero contains at least 4 stat numbers (found: ${heroStats.length})`);

  // TLDR section
  const tldrSummary = doc.querySelector('#tldr-summary');
  assert(tldrSummary && tldrSummary.textContent.trim().length > 100, `[${lang}] #tldr-summary exists and has rich editorial content`);

  // Outlets section (4 cards)
  const outletCards = doc.querySelectorAll('#outlets article[role="listitem"]');
  assert(outletCards.length === 4, `[${lang}] Outlets section contains exactly 4 outlet cards (found: ${outletCards.length})`);

  // Commentary themes (4 themes)
  const themeCards = doc.querySelectorAll('#commentary-themes article[role="listitem"]');
  assert(themeCards.length === 4, `[${lang}] Commentary themes contains exactly 4 themes (found: ${themeCards.length})`);

  // Benchmark table
  const tableRows = doc.querySelectorAll('#commentary-themes table tbody tr');
  assert(tableRows.length === 9, `[${lang}] Benchmark table contains 8 districts + 1 citywide average row (found: ${tableRows.length})`);

  // House Rules (3 rules)
  const ruleCards = doc.querySelectorAll('#commenting-rules article[role="listitem"]');
  assert(ruleCards.length === 3, `[${lang}] Commenting rules contains exactly 3 rules (found: ${ruleCards.length})`);

  // Media kit (3 columns: boilerplate, logo, facts)
  const mediaKitCols = doc.querySelectorAll('#media-kit .grid > article');
  assert(mediaKitCols.length === 3, `[${lang}] Media kit contains 3 columns (boilerplate, logo, key facts)`);

  // Press contact (email and phone present)
  const pressContactSec = doc.getElementById('press-contact');
  assert(pressContactSec.innerHTML.includes('advisory@zarinrealestate.com'), `[${lang}] Press contact has advisory@zarinrealestate.com`);
  assert(pressContactSec.innerHTML.includes('971 58 690 1231'), `[${lang}] Press contact has phone +971 58 690 1231`);

  // Interview formats (3 formats)
  const interviewFormats = doc.querySelectorAll('#interview-formats article[role="listitem"]');
  assert(interviewFormats.length === 3, `[${lang}] Interview formats section contains exactly 3 formats (found: ${interviewFormats.length})`);

  // FAQ (8 accordions, item 1 open, 2-8 closed)
  const faqAccordions = doc.querySelectorAll('#faq details.faq-accordion');
  assert(faqAccordions.length === 8, `[${lang}] FAQ section contains exactly 8 accordions (found: ${faqAccordions.length})`);
  assert(faqAccordions[0].hasAttribute('open'), `[${lang}] FAQ item 1 has 'open' attribute`);
  for (let i = 1; i < 8; i++) {
    assert(!faqAccordions[i].hasAttribute('open'), `[${lang}] FAQ item ${i + 1} is closed by default`);
  }

  // CTA band
  const ctaBand = doc.getElementById('cta-band');
  assert(ctaBand.querySelector('a[href*="consultation"]') !== null, `[${lang}] CTA band has consultation link`);
  assert(ctaBand.querySelector('a[href*="contact"]') !== null, `[${lang}] CTA band has contact link`);
}

checkSectionContents(enDoc, 'EN');
checkSectionContents(faDoc, 'FA');

console.log('\n--- 6. JSON-LD Schemas Verification ---');
function checkJsonLd(doc, lang) {
  const scripts = Array.from(doc.querySelectorAll('script[type="application/ld+json"]'));
  assert(scripts.length >= 4, `[${lang}] Contains at least 4 JSON-LD script blocks (found: ${scripts.length})`);

  const schemas = scripts.map(s => {
    try {
      return JSON.parse(s.textContent);
    } catch (e) {
      return null;
    }
  }).filter(Boolean);

  const breadcrumb = schemas.find(s => s['@type'] === 'BreadcrumbList');
  assert(breadcrumb && breadcrumb.itemListElement.length === 3, `[${lang}] BreadcrumbList schema exists with 3 items`);

  const aboutPage = schemas.find(s => s['@type'] === 'AboutPage');
  assert(aboutPage !== undefined, `[${lang}] AboutPage schema exists`);

  const faqPage = schemas.find(s => s['@type'] === 'FAQPage');
  assert(faqPage && faqPage.mainEntity.length === 8, `[${lang}] FAQPage schema exists with 8 mainEntity questions`);

  const webPage = schemas.find(s => s['@type'] === 'WebPage');
  assert(webPage && webPage.speakable !== undefined, `[${lang}] WebPage schema exists with speakable specification`);
}

checkJsonLd(enDoc, 'EN');
checkJsonLd(faDoc, 'FA');

console.log('\n--- 7. Navigation, Header & Footer Parity ---');
function checkNavigation(doc, lang) {
  // Mega menu triggers
  const megaTriggers = doc.querySelectorAll('#site-header .mega-menu-trigger');
  assert(megaTriggers.length === 6, `[${lang}] Header contains all 6 mega-menu triggers (Properties, Off-Plan, Areas, Services, Insights, Heritage)`);

  // Mobile menu items
  const mobileNavItems = doc.querySelectorAll('#mobile-menu .mobile-nav-item');
  assert(mobileNavItems.length === 6, `[${lang}] Mobile menu contains 6 accordion items`);

  // Active state on Heritage
  const heritageHeaderLink = doc.querySelector('#site-header a[href*="heritage"][aria-current="page"]');
  assert(heritageHeaderLink !== null, `[${lang}] Heritage header link has aria-current="page"`);

  // Nav module script
  const navScript = doc.querySelector('script[src="/scripts/nav.js"][type="module"]');
  assert(navScript !== null, `[${lang}] References <script type="module" src="/scripts/nav.js">`);
}

checkNavigation(enDoc, 'EN');
checkNavigation(faDoc, 'FA');

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} passed, ${failed} failed.`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 PRESS & MEDIA PAGE FULLY VALIDATED WITH ZERO ERRORS!');
}

