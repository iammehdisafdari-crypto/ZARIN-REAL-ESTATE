import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

console.log('================================================================');
console.log('ZARIN BEACHFRONT INTEGRATION & MEGA-MENU VERIFICATION SUITE');
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
  'beachfront-properties-in-dubai.html',
  'beachfront-properties-in-dubai/index.html',
  'fa/beachfront-properties-in-dubai.html',
  'fa/beachfront-properties-in-dubai/index.html'
];

for (const file of filesToCheck) {
  assert(fs.existsSync(file), `File exists: ${file}`);
}

const enRoot = fs.readFileSync('beachfront-properties-in-dubai.html', 'utf8');
const enIndex = fs.readFileSync('beachfront-properties-in-dubai/index.html', 'utf8');
assert(enRoot === enIndex, 'EN root .html and /index.html are completely identical');

const faRoot = fs.readFileSync('fa/beachfront-properties-in-dubai.html', 'utf8');
const faIndex = fs.readFileSync('fa/beachfront-properties-in-dubai/index.html', 'utf8');
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
  { path: 'fa/index.html', lang: 'fa' },
  { path: 'fa/properties.html', lang: 'fa' },
  { path: 'fa/properties-for-rent.html', lang: 'fa' },
  { path: 'fa/beachfront-properties-in-dubai.html', lang: 'fa' }
];

for (const page of samplePages) {
  const content = fs.readFileSync(page.path, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  if (page.lang === 'en') {
    const desktopLink = doc.querySelector('#site-header a[href="/beachfront-properties-in-dubai"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /beachfront-properties-in-dubai`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/beachfront-properties-in-dubai"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /beachfront-properties-in-dubai`);
  } else {
    const desktopLink = doc.querySelector('#site-header a[href="/fa/beachfront-properties-in-dubai"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /fa/beachfront-properties-in-dubai`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/fa/beachfront-properties-in-dubai"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /fa/beachfront-properties-in-dubai`);
  }
}

// --- 3. English Beachfront Page Sections & Content ---
console.log('\n--- 3. English Beachfront Page Content ---');
const enDom = new JSDOM(enRoot);
const enDoc = enDom.window.document;

assert(enDoc.querySelector('#site-header') !== null, '[EN] Shared #site-header present');
assert(enDoc.querySelector('#mobile-menu') !== null, '[EN] Shared #mobile-menu present');
assert(enDoc.querySelector('footer') !== null, '[EN] Shared footer present');

// Active navigation
const enPropActive = enDoc.querySelector('#properties-nav-link');
assert(enPropActive && enPropActive.getAttribute('aria-current') === 'page', '[EN] Properties nav link has aria-current="page"');
const enBfActive = enDoc.querySelector('#properties-mega-panel a[href="/beachfront-properties-in-dubai"]');
assert(enBfActive && enBfActive.getAttribute('aria-current') === 'page', '[EN] Mega menu Beachfront link has aria-current="page"');

// Hero
const enH1 = enDoc.querySelector('h1#hero-headline');
assert(enH1 && enH1.textContent.includes('Beachfront'), '[EN] Hero H1 contains "Beachfront"');
const enTldr = enDoc.querySelector('#tldr-summary');
assert(enTldr && enTldr.textContent.includes('Palm Jumeirah'), '[EN] TL;DR contains "Palm Jumeirah"');

// 6 communities
const commLinks = enDoc.querySelectorAll('section[aria-label="Beach communities showcase"] a.group');
assert(commLinks.length === 6, `[EN] Exactly 6 Beach Communities found (got ${commLinks.length})`);

// 6 listings
const listings = enDoc.querySelectorAll('#featured-listings article');
assert(listings.length === 6, `[EN] Exactly 6 Curated Listings found (got ${listings.length})`);
assert(listings[0]?.textContent.includes('5BR Villa') && listings[0]?.textContent.includes('AED 28M'), '[EN] Listing 1 is 5BR Villa AED 28M');
assert(listings[1]?.textContent.includes('3BR Apartment') && listings[1]?.textContent.includes('AED 6.5M'), '[EN] Listing 2 is 3BR Apartment AED 6.5M');
assert(listings[2]?.textContent.includes('2BR Apartment') && listings[2]?.textContent.includes('AED 3.8M'), '[EN] Listing 3 is 2BR Apartment AED 3.8M');
assert(listings[3]?.textContent.includes('4BR Penthouse') && listings[3]?.textContent.includes('AED 18M'), '[EN] Listing 4 is 4BR Penthouse AED 18M');
assert(listings[4]?.textContent.includes('6BR Villa') && listings[4]?.textContent.includes('AED 65M'), '[EN] Listing 5 is 6BR Villa AED 65M');
assert(listings[5]?.textContent.includes('3BR Townhouse') && listings[5]?.textContent.includes('AED 5.2M'), '[EN] Listing 6 is 3BR Townhouse AED 5.2M');

// 4 reasons
const reasons = enDoc.querySelectorAll('section[aria-label="Why beachfront"] article');
assert(reasons.length === 4, `[EN] Exactly 4 reasons found (got ${reasons.length})`);

// 8 FAQs
const faqs = enDoc.querySelectorAll('section[aria-label="Beachfront FAQ"] details');
assert(faqs.length === 8, `[EN] Exactly 8 FAQs found (got ${faqs.length})`);

// JSON-LD Schemas
const jsonLdScripts = enDoc.querySelectorAll('script[type="application/ld+json"]');
assert(jsonLdScripts.length >= 4, `[EN] At least 4 JSON-LD schema blocks found (got ${jsonLdScripts.length})`);
let hasBreadcrumbs = false;
let hasCollection = false;
let hasFaq = false;
let hasWebPage = false;
jsonLdScripts.forEach(s => {
  const txt = s.textContent;
  if (txt.includes('BreadcrumbList')) hasBreadcrumbs = true;
  if (txt.includes('CollectionPage')) hasCollection = true;
  if (txt.includes('FAQPage')) hasFaq = true;
  if (txt.includes('WebPage')) hasWebPage = true;
});
assert(hasBreadcrumbs, '[EN] JSON-LD BreadcrumbList present');
assert(hasCollection, '[EN] JSON-LD CollectionPage/ItemList present');
assert(hasFaq, '[EN] JSON-LD FAQPage present');
assert(hasWebPage, '[EN] JSON-LD WebPage/Speakable present');

// --- 4. Persian Beachfront Page Content ---
console.log('\n--- 4. Persian Beachfront Page Content ---');
const faDom = new JSDOM(faRoot);
const faDoc = faDom.window.document;

assert(faDoc.documentElement.getAttribute('lang') === 'fa', '[FA] html lang="fa"');
assert(faDoc.documentElement.getAttribute('dir') === 'rtl', '[FA] html dir="rtl"');
assert(faRoot.includes('Vazirmatn'), '[FA] Loads Vazirmatn font');

const faH1 = faDoc.querySelector('h1#hero-headline');
assert(faH1 && /[\u0600-\u06FF]/.test(faH1.textContent), '[FA] Hero H1 has Persian text');

const faListings = faDoc.querySelectorAll('#featured-listings article');
assert(faListings.length === 6, `[FA] Exactly 6 Curated Listings found in Persian (got ${faListings.length})`);

const faFaqs = faDoc.querySelectorAll('section[aria-label="سوالات متداول املاک ساحلی"] details');
assert(faFaqs.length === 8, `[FA] Exactly 8 FAQs found in Persian (got ${faFaqs.length})`);

// Check Persian internal links
const faInternalLinks = Array.from(faDoc.querySelectorAll('a[href]'));
let faLeak = null;
for (const a of faInternalLinks) {
  const href = a.getAttribute('href');
  if (
    href &&
    href.startsWith('/') &&
    !href.startsWith('/fa') &&
    !href.startsWith('/styles') &&
    !href.startsWith('/scripts') &&
    !href.startsWith('/images') &&
    !href.includes('.') &&
    !href.startsWith('/#') &&
    !href.startsWith('//')
  ) {
    if (['/properties', '/services', '/private-office', '/visas', '/heritage', '/insights', '/off-plan', '/areas', '/consultation'].some(p => href === p || href.startsWith(p + '/'))) {
      faLeak = href;
      break;
    }
  }
}
assert(!faLeak, `[FA] No English internal link leakage found. Leaked: ${faLeak || 'none'}`);

console.log('\n================================================================');
console.log(`TOTAL: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) process.exit(1);
