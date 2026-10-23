import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

console.log('================================================================');
console.log('ZARIN COMMERCIAL INTEGRATION & MEGA-MENU VERIFICATION SUITE');
console.log('================================================================\n');

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

// --- 1. File Existence & Clean URLs ---
console.log('--- 1. File Existence & Clean URLs ---');
const filesToCheck = [
  'commercial-properties-in-dubai.html',
  'commercial-properties-in-dubai/index.html',
  'fa/commercial-properties-in-dubai.html',
  'fa/commercial-properties-in-dubai/index.html'
];

for (const file of filesToCheck) {
  assert(fs.existsSync(file), `File exists: ${file}`);
}

const enRoot = fs.readFileSync('commercial-properties-in-dubai.html', 'utf8');
const enIndex = fs.readFileSync('commercial-properties-in-dubai/index.html', 'utf8');
assert(enRoot === enIndex, 'EN root .html and /index.html are completely identical');

const faRoot = fs.readFileSync('fa/commercial-properties-in-dubai.html', 'utf8');
const faIndex = fs.readFileSync('fa/commercial-properties-in-dubai/index.html', 'utf8');
assert(faRoot === faIndex, 'FA root .html and /index.html are completely identical');

// --- 2. Mega-Menu & Mobile Nav Linkage ---
console.log('\n--- 2. Mega-Menu & Mobile Nav Linkage ---');
const samplePages = [
  { path: 'index.html', lang: 'en' },
  { path: 'properties.html', lang: 'en' },
  { path: 'properties-for-sale.html', lang: 'en' },
  { path: 'properties-for-rent.html', lang: 'en' },
  { path: 'villas-for-sale-in-dubai.html', lang: 'en' },
  { path: 'penthouses-for-sale-in-dubai.html', lang: 'en' },
  { path: 'townhouses-for-sale-in-dubai.html', lang: 'en' },
  { path: 'beachfront-properties-in-dubai.html', lang: 'en' },
  { path: 'branded-residences-in-dubai.html', lang: 'en' },
  { path: 'burj-khalifa-view-properties.html', lang: 'en' },
  { path: 'commercial-properties-in-dubai.html', lang: 'en' },
  { path: 'fa/index.html', lang: 'fa' },
  { path: 'fa/properties.html', lang: 'fa' },
  { path: 'fa/properties-for-rent.html', lang: 'fa' },
  { path: 'fa/beachfront-properties-in-dubai.html', lang: 'fa' },
  { path: 'fa/branded-residences-in-dubai.html', lang: 'fa' },
  { path: 'fa/burj-khalifa-view-properties.html', lang: 'fa' },
  { path: 'fa/commercial-properties-in-dubai.html', lang: 'fa' }
];

for (const page of samplePages) {
  const content = fs.readFileSync(page.path, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  if (page.lang === 'en') {
    const desktopLink = doc.querySelector('#site-header a[href="/commercial-properties-in-dubai"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /commercial-properties-in-dubai`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/commercial-properties-in-dubai"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /commercial-properties-in-dubai`);
  } else {
    const desktopLink = doc.querySelector('#site-header a[href="/fa/commercial-properties-in-dubai"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /fa/commercial-properties-in-dubai`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/fa/commercial-properties-in-dubai"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /fa/commercial-properties-in-dubai`);
  }
}

// --- 3. Active Nav States ---
console.log('\n--- 3. Active Navigation State ---');
const enDom = new JSDOM(enRoot);
const enDoc = enDom.window.document;

const enPropLink = enDoc.querySelector('#properties-nav-link');
assert(enPropLink && enPropLink.getAttribute('aria-current') === 'page', 'EN #properties-nav-link has aria-current="page"');
assert(enPropLink && enPropLink.classList.contains('text-gold-400'), 'EN #properties-nav-link has active color text-gold-400');

const enCommMenuLink = enDoc.querySelector('#site-header a[href="/commercial-properties-in-dubai"]');
assert(enCommMenuLink && enCommMenuLink.getAttribute('aria-current') === 'page', 'EN Commercial mega menu link has aria-current="page"');
assert(enCommMenuLink && enCommMenuLink.classList.contains('text-gold-400'), 'EN Commercial mega menu link has active color');

const faDom = new JSDOM(faRoot);
const faDoc = faDom.window.document;

const faPropLink = faDoc.querySelector('#properties-nav-link');
assert(faPropLink && faPropLink.getAttribute('aria-current') === 'page', 'FA #properties-nav-link has aria-current="page"');
assert(faPropLink && faPropLink.classList.contains('text-gold-400'), 'FA #properties-nav-link has active color text-gold-400');

const faCommMenuLink = faDoc.querySelector('#site-header a[href="/fa/commercial-properties-in-dubai"]');
assert(faCommMenuLink && faCommMenuLink.getAttribute('aria-current') === 'page', 'FA Commercial mega menu link has aria-current="page"');
assert(faCommMenuLink && faCommMenuLink.classList.contains('text-gold-400'), 'FA Commercial mega menu link has active color');

// --- 4. Structural Content & Fidelity ---
console.log('\n--- 4. Structural Content & Fidelity (Zero Fabrication) ---');

// EN Sections
assert(enDoc.querySelector('section[aria-label="Commercial hero"]') !== null, 'EN has Commercial hero section');
assert(enDoc.querySelector('section[aria-label="Commercial categories"]') !== null, 'EN has Commercial categories section');
assert(enDoc.querySelector('section#commercial-grid') !== null, 'EN has Featured Commercial Listings section with id commercial-grid');
assert(enDoc.querySelector('section[aria-label="Commercial areas"]') !== null, 'EN has Commercial areas section');
assert(enDoc.querySelector('section[aria-label="Why ZARIN commercial"]') !== null, 'EN has Why ZARIN commercial section');
assert(enDoc.querySelector('section[aria-label="Commercial FAQ"]') !== null, 'EN has Commercial FAQ section');

// 3 Asset Classes
const enCategories = enDoc.querySelectorAll('section[aria-label="Commercial categories"] article');
assert(enCategories.length === 3, `EN contains exactly 3 commercial category articles (found ${enCategories.length})`);

// 6 Mandates
const enListings = enDoc.querySelectorAll('section#commercial-grid article');
assert(enListings.length === 6, `EN contains exactly 6 commercial mandate listings (found ${enListings.length})`);

// 4 Commercial Zones
const enZones = enDoc.querySelectorAll('section[aria-label="Commercial areas"] a[href="/areas"]');
assert(enZones.length === 4, `EN contains exactly 4 commercial zones linking to /areas (found ${enZones.length})`);

// 8 FAQs
const enFaqs = enDoc.querySelectorAll('section[aria-label="Commercial FAQ"] details');
assert(enFaqs.length === 8, `EN contains exactly 8 FAQ accordion details items (found ${enFaqs.length})`);

// FA Sections
assert(faDoc.querySelector('section[aria-label="بخش معرفی املاک تجاری دبی"]') !== null, 'FA has Commercial hero section');
assert(faDoc.querySelector('section[aria-label="دسته‌بندی‌های تجاری"]') !== null, 'FA has Commercial categories section');
assert(faDoc.querySelector('section#commercial-grid') !== null, 'FA has Featured Commercial Listings section with id commercial-grid');
assert(faDoc.querySelector('section[aria-label="مناطق تجاری دبی"]') !== null, 'FA has Commercial areas section');
assert(faDoc.querySelector('section[aria-label="مزایای مشاوره املاک تجاری زرین"]') !== null, 'FA has Why ZARIN commercial section');
assert(faDoc.querySelector('section[aria-label="سوالات متداول املاک تجاری"]') !== null, 'FA has Commercial FAQ section');

// 3 Persian Asset Classes
const faCategories = faDoc.querySelectorAll('section[aria-label="دسته‌بندی‌های تجاری"] article');
assert(faCategories.length === 3, `FA contains exactly 3 commercial category articles (found ${faCategories.length})`);

// 6 Persian Mandates
const faListings = faDoc.querySelectorAll('section#commercial-grid article');
assert(faListings.length === 6, `FA contains exactly 6 commercial mandate listings (found ${faListings.length})`);

// 4 Persian Commercial Zones
const faZones = faDoc.querySelectorAll('section[aria-label="مناطق تجاری دبی"] a[href="/fa/areas"]');
assert(faZones.length === 4, `FA contains exactly 4 commercial zones linking to /fa/areas (found ${faZones.length})`);

// 8 Persian FAQs
const faFaqs = faDoc.querySelectorAll('section[aria-label="سوالات متداول املاک تجاری"] details');
assert(faFaqs.length === 8, `FA contains exactly 8 FAQ accordion details items (found ${faFaqs.length})`);

// --- 5. SEO, Schemas & Canonical URLs ---
console.log('\n--- 5. SEO, Schemas & Canonical URLs ---');

assert(enDoc.querySelector('link[rel="canonical"]')?.getAttribute('href') === 'https://zarinrealestate.com/commercial-properties-in-dubai', 'EN canonical URL is correct');
assert(faDoc.querySelector('link[rel="canonical"]')?.getAttribute('href') === 'https://zarinrealestate.com/fa/commercial-properties-in-dubai', 'FA canonical URL is correct');

assert(enDoc.querySelector('link[rel="alternate"][hreflang="fa"]')?.getAttribute('href') === 'https://zarinrealestate.com/fa/commercial-properties-in-dubai', 'EN has alternate hreflang="fa"');
assert(faDoc.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href') === 'https://zarinrealestate.com/commercial-properties-in-dubai', 'FA has alternate hreflang="en"');

const enJsonLdScripts = enDoc.querySelectorAll('script[type="application/ld+json"]');
assert(enJsonLdScripts.length >= 4, `EN has at least 4 JSON-LD script tags (found ${enJsonLdScripts.length})`);

const faJsonLdScripts = faDoc.querySelectorAll('script[type="application/ld+json"]');
assert(faJsonLdScripts.length >= 4, `FA has at least 4 JSON-LD script tags (found ${faJsonLdScripts.length})`);

console.log('\n================================================================');
console.log(`TEST SUMMARY: ${passed} passed, ${failed} failed`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
}
