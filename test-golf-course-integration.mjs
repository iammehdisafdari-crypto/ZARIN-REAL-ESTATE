import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

console.log('================================================================');
console.log('ZARIN GOLF COURSE INTEGRATION & MEGA-MENU VERIFICATION SUITE');
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
  'golf-course-properties-in-dubai.html',
  'golf-course-properties-in-dubai/index.html',
  'fa/golf-course-properties-in-dubai.html',
  'fa/golf-course-properties-in-dubai/index.html'
];

for (const file of filesToCheck) {
  assert(fs.existsSync(file), `File exists: ${file}`);
}

const enRoot = fs.readFileSync('golf-course-properties-in-dubai.html', 'utf8');
const enIndex = fs.readFileSync('golf-course-properties-in-dubai/index.html', 'utf8');
assert(enRoot === enIndex, 'EN root .html and /index.html are completely identical');

const faRoot = fs.readFileSync('fa/golf-course-properties-in-dubai.html', 'utf8');
const faIndex = fs.readFileSync('fa/golf-course-properties-in-dubai/index.html', 'utf8');
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
  { path: 'golf-course-properties-in-dubai.html', lang: 'en' },
  { path: 'fa/index.html', lang: 'fa' },
  { path: 'fa/properties.html', lang: 'fa' },
  { path: 'fa/properties-for-rent.html', lang: 'fa' },
  { path: 'fa/beachfront-properties-in-dubai.html', lang: 'fa' },
  { path: 'fa/branded-residences-in-dubai.html', lang: 'fa' },
  { path: 'fa/burj-khalifa-view-properties.html', lang: 'fa' },
  { path: 'fa/commercial-properties-in-dubai.html', lang: 'fa' },
  { path: 'fa/golf-course-properties-in-dubai.html', lang: 'fa' }
];

for (const page of samplePages) {
  const content = fs.readFileSync(page.path, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  if (page.lang === 'en') {
    const desktopLink = doc.querySelector('#site-header a[href="/golf-course-properties-in-dubai"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /golf-course-properties-in-dubai`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/golf-course-properties-in-dubai"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /golf-course-properties-in-dubai`);
  } else {
    const desktopLink = doc.querySelector('#site-header a[href="/fa/golf-course-properties-in-dubai"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /fa/golf-course-properties-in-dubai`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/fa/golf-course-properties-in-dubai"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /fa/golf-course-properties-in-dubai`);
  }
}

// --- 3. Active Nav States ---
console.log('\n--- 3. Active Navigation State ---');
const enDom = new JSDOM(enRoot);
const enDoc = enDom.window.document;

const enPropLink = enDoc.querySelector('#properties-nav-link');
assert(enPropLink && enPropLink.getAttribute('aria-current') === 'page', 'EN #properties-nav-link has aria-current="page"');
assert(enPropLink && enPropLink.classList.contains('text-gold-400'), 'EN #properties-nav-link has active color text-gold-400');

const enGolfMenuLink = enDoc.querySelector('#site-header a[href="/golf-course-properties-in-dubai"]');
assert(enGolfMenuLink && enGolfMenuLink.getAttribute('aria-current') === 'page', 'EN Golf Course mega menu link has aria-current="page"');
assert(enGolfMenuLink && enGolfMenuLink.classList.contains('text-gold-400'), 'EN Golf Course mega menu link has active color');

const faDom = new JSDOM(faRoot);
const faDoc = faDom.window.document;

const faPropLink = faDoc.querySelector('#properties-nav-link');
assert(faPropLink && faPropLink.getAttribute('aria-current') === 'page', 'FA #properties-nav-link has aria-current="page"');
assert(faPropLink && faPropLink.classList.contains('text-gold-400'), 'FA #properties-nav-link has active color text-gold-400');

const faGolfMenuLink = faDoc.querySelector('#site-header a[href="/fa/golf-course-properties-in-dubai"]');
assert(faGolfMenuLink && faGolfMenuLink.getAttribute('aria-current') === 'page', 'FA Golf Course mega menu link has aria-current="page"');
assert(faGolfMenuLink && faGolfMenuLink.classList.contains('text-gold-400'), 'FA Golf Course mega menu link has active color');

// --- 4. Structural Content & Fidelity ---
console.log('\n--- 4. Structural Content & Fidelity (Zero Fabrication) ---');

// EN Sections
assert(enDoc.querySelector('section[aria-label="Golf course properties hero"]') !== null, 'EN has Golf Course hero section');
assert(enDoc.querySelector('section[aria-label="Golf communities showcase"]') !== null, 'EN has Golf communities showcase section');
assert(enDoc.querySelector('section#featured-listings') !== null, 'EN has Featured listings section with id featured-listings');
assert(enDoc.querySelector('section[aria-label="Why golf properties"]') !== null, 'EN has Why golf properties section');
assert(enDoc.querySelector('section[aria-label="Dubai\'s golf courses"]') !== null, 'EN has Dubai\'s golf courses section');
assert(enDoc.querySelector('section[aria-label="Why buy with ZARIN"]') !== null, 'EN has Why buy with ZARIN section');
assert(enDoc.querySelector('section[aria-label="Golf course properties FAQ"]') !== null, 'EN has Golf course properties FAQ section');

// 5 Communities (+1 Advisory Card = 6 items in communities section)
const enCommunityCards = enDoc.querySelectorAll('section[aria-label="Golf communities showcase"] .grid > *');
assert(enCommunityCards.length === 6, `EN contains 5 communities + 1 advisory card (found ${enCommunityCards.length})`);

// 6 Mandates
const enListings = enDoc.querySelectorAll('section#featured-listings article');
assert(enListings.length === 6, `EN contains exactly 6 golf course mandate listings (found ${enListings.length})`);

// 4 Pillars of Value
const enPillars = enDoc.querySelectorAll('section[aria-label="Why golf properties"] article');
assert(enPillars.length === 4, `EN contains exactly 4 why golf property pillars (found ${enPillars.length})`);

// 6 Fairway Courses
const enCourses = enDoc.querySelectorAll('section[aria-label="Dubai\'s golf courses"] article');
assert(enCourses.length === 6, `EN contains exactly 6 championship golf courses (found ${enCourses.length})`);

// 8 FAQs
const enFaqs = enDoc.querySelectorAll('section[aria-label="Golf course properties FAQ"] details');
assert(enFaqs.length === 8, `EN contains exactly 8 FAQ accordion details items (found ${enFaqs.length})`);

// FA Sections
assert(faDoc.querySelector('section[aria-label="بخش معرفی املاک رو به زمین گلف"]') !== null, 'FA has Golf Course hero section');
assert(faDoc.querySelector('section[aria-label="معرفی مجامع مسکونی گلف دبی"]') !== null, 'FA has Golf communities showcase section');
assert(faDoc.querySelector('section#featured-listings') !== null, 'FA has Featured listings section with id featured-listings');
assert(faDoc.querySelector('section[aria-label="دلایل انتخاب املاک گلف"]') !== null, 'FA has Why golf properties section');
assert(faDoc.querySelector('section[aria-label="زمین‌های گلف مسابقاتی دبی"]') !== null, 'FA has Dubai\'s golf courses section');
assert(faDoc.querySelector('section[aria-label="چرا خرید با زرین"]') !== null, 'FA has Why buy with ZARIN section');
assert(faDoc.querySelector('section[aria-label="سوالات متداول املاک رو به زمین گلف"]') !== null, 'FA has Golf course properties FAQ section');

// 5 Persian Communities (+1 Advisory Card = 6 items)
const faCommunityCards = faDoc.querySelectorAll('section[aria-label="معرفی مجامع مسکونی گلف دبی"] .grid > *');
assert(faCommunityCards.length === 6, `FA contains 5 communities + 1 advisory card (found ${faCommunityCards.length})`);

// 6 Persian Mandates
const faListings = faDoc.querySelectorAll('section#featured-listings article');
assert(faListings.length === 6, `FA contains exactly 6 golf course mandate listings (found ${faListings.length})`);

// 4 Persian Pillars of Value
const faPillars = faDoc.querySelectorAll('section[aria-label="دلایل انتخاب املاک گلف"] article');
assert(faPillars.length === 4, `FA contains exactly 4 why golf property pillars (found ${faPillars.length})`);

// 6 Persian Fairway Courses
const faCourses = faDoc.querySelectorAll('section[aria-label="زمین‌های گلف مسابقاتی دبی"] article');
assert(faCourses.length === 6, `FA contains exactly 6 championship golf courses (found ${faCourses.length})`);

// 8 Persian FAQs
const faFaqs = faDoc.querySelectorAll('section[aria-label="سوالات متداول املاک رو به زمین گلف"] details');
assert(faFaqs.length === 8, `FA contains exactly 8 FAQ accordion details items (found ${faFaqs.length})`);

// --- 5. SEO, Schemas & Canonical URLs ---
console.log('\n--- 5. SEO, Schemas & Canonical URLs ---');

assert(enDoc.querySelector('link[rel="canonical"]')?.getAttribute('href') === 'https://zarinrealestate.com/golf-course-properties-in-dubai', 'EN canonical URL is correct');
assert(faDoc.querySelector('link[rel="canonical"]')?.getAttribute('href') === 'https://zarinrealestate.com/fa/golf-course-properties-in-dubai', 'FA canonical URL is correct');

assert(enDoc.querySelector('link[rel="alternate"][hreflang="fa"]')?.getAttribute('href') === 'https://zarinrealestate.com/fa/golf-course-properties-in-dubai', 'EN has alternate hreflang="fa"');
assert(faDoc.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href') === 'https://zarinrealestate.com/golf-course-properties-in-dubai', 'FA has alternate hreflang="en"');

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
