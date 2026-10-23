import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

console.log('================================================================');
console.log('ZARIN BURJ VIEW INTEGRATION & MEGA-MENU VERIFICATION SUITE');
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
  'burj-khalifa-view-properties.html',
  'burj-khalifa-view-properties/index.html',
  'fa/burj-khalifa-view-properties.html',
  'fa/burj-khalifa-view-properties/index.html'
];

for (const file of filesToCheck) {
  assert(fs.existsSync(file), `File exists: ${file}`);
}

const enRoot = fs.readFileSync('burj-khalifa-view-properties.html', 'utf8');
const enIndex = fs.readFileSync('burj-khalifa-view-properties/index.html', 'utf8');
assert(enRoot === enIndex, 'EN root .html and /index.html are completely identical');

const faRoot = fs.readFileSync('fa/burj-khalifa-view-properties.html', 'utf8');
const faIndex = fs.readFileSync('fa/burj-khalifa-view-properties/index.html', 'utf8');
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
  { path: 'fa/index.html', lang: 'fa' },
  { path: 'fa/properties.html', lang: 'fa' },
  { path: 'fa/properties-for-rent.html', lang: 'fa' },
  { path: 'fa/beachfront-properties-in-dubai.html', lang: 'fa' },
  { path: 'fa/branded-residences-in-dubai.html', lang: 'fa' },
  { path: 'fa/burj-khalifa-view-properties.html', lang: 'fa' }
];

for (const page of samplePages) {
  const content = fs.readFileSync(page.path, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  if (page.lang === 'en') {
    const desktopLink = doc.querySelector('#site-header a[href="/burj-khalifa-view-properties"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /burj-khalifa-view-properties`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/burj-khalifa-view-properties"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /burj-khalifa-view-properties`);
  } else {
    const desktopLink = doc.querySelector('#site-header a[href="/fa/burj-khalifa-view-properties"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /fa/burj-khalifa-view-properties`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/fa/burj-khalifa-view-properties"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /fa/burj-khalifa-view-properties`);
  }
}

// --- 3. English Burj View Page Content ---
console.log('\n--- 3. English Burj View Page Content ---');
const enDom = new JSDOM(enRoot);
const enDoc = enDom.window.document;

assert(enDoc.querySelector('#site-header') !== null, '[EN] Shared #site-header present');
assert(enDoc.querySelector('#mobile-menu') !== null, '[EN] Shared #mobile-menu present');
assert(enDoc.querySelector('footer') !== null, '[EN] Shared footer present');

// Active navigation
const enPropActive = enDoc.querySelector('#properties-nav-link');
assert(enPropActive && enPropActive.getAttribute('aria-current') === 'page', '[EN] Properties nav link has aria-current="page"');
const enBurjActive = enDoc.querySelector('#properties-mega-panel a[href="/burj-khalifa-view-properties"]');
assert(enBurjActive && enBurjActive.getAttribute('aria-current') === 'page', '[EN] Mega menu Burj View link has aria-current="page"');

// Hero
const enH1 = enDoc.querySelector('h1#hero-headline');
assert(enH1 && enH1.textContent.includes('Burj') && enH1.textContent.includes('Properties'), '[EN] Hero H1 contains "Burj" and "Properties"');
const enTldr = enDoc.querySelector('#tldr-summary');
assert(enTldr && enTldr.textContent.includes('Downtown Dubai'), '[EN] TL;DR contains "Downtown Dubai"');

// 6 Communities
const commLinks = enDoc.querySelectorAll('section[aria-label="Burj view communities showcase"] a.group');
assert(commLinks.length === 6, `[EN] Exactly 6 Burj View Communities found (got ${commLinks.length})`);

// 6 Listings
const listings = enDoc.querySelectorAll('#featured-listings article');
assert(listings.length === 6, `[EN] Exactly 6 Curated Listings found (got ${listings.length})`);
assert(listings[0]?.textContent.includes('Burj Vista') && listings[0]?.textContent.includes('AED 6.5M'), '[EN] Listing 1 is Burj Vista AED 6.5M');
assert(listings[1]?.textContent.includes('Address Blvd') && listings[1]?.textContent.includes('AED 4.8M'), '[EN] Listing 2 is Address Blvd AED 4.8M');
assert(listings[2]?.textContent.includes('Downtown') && listings[2]?.textContent.includes('AED 22M'), '[EN] Listing 3 is Downtown Penthouse AED 22M');
assert(listings[3]?.textContent.includes('Business Bay') && listings[3]?.textContent.includes('AED 3.2M'), '[EN] Listing 4 is Business Bay AED 3.2M');
assert(listings[4]?.textContent.includes('Opera District') && listings[4]?.textContent.includes('AED 8.2M'), '[EN] Listing 5 is Opera District AED 8.2M');
assert(listings[5]?.textContent.includes('Address Sky View') && listings[5]?.textContent.includes('AED 38M'), '[EN] Listing 6 is Address Sky View AED 38M');

// 4 Reasons
const reasons = enDoc.querySelectorAll('section[aria-label="Why Burj view"] .card-lift');
assert(reasons.length === 4, `[EN] Exactly 4 reasons found (got ${reasons.length})`);

// 8 FAQs
const faqs = enDoc.querySelectorAll('section[aria-label="Burj view FAQ"] details');
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

// --- 4. Persian Burj View Page Content ---
console.log('\n--- 4. Persian Burj View Page Content ---');
const faDom = new JSDOM(faRoot);
const faDoc = faDom.window.document;

assert(faDoc.documentElement.getAttribute('lang') === 'fa', '[FA] html lang="fa"');
assert(faDoc.documentElement.getAttribute('dir') === 'rtl', '[FA] html dir="rtl"');
assert(faRoot.includes('Vazirmatn'), '[FA] Loads Vazirmatn font');

const faH1 = faDoc.querySelector('h1#hero-headline');
assert(faH1 && /[\u0600-\u06FF]/.test(faH1.textContent), '[FA] Hero H1 has Persian text');

const faCommunities = faDoc.querySelectorAll('section[aria-label="مناطق شاخص با دید برج خلیفه"] a.group');
assert(faCommunities.length === 6, `[FA] Exactly 6 Communities found in Persian (got ${faCommunities.length})`);

const faListings = faDoc.querySelectorAll('#featured-listings article');
assert(faListings.length === 6, `[FA] Exactly 6 Curated Listings found in Persian (got ${faListings.length})`);

const faReasons = faDoc.querySelectorAll('section[aria-label="دلایل خرید ملک با دید برج خلیفه"] .card-lift');
assert(faReasons.length === 4, `[FA] Exactly 4 Reasons found in Persian (got ${faReasons.length})`);

const faFaqs = faDoc.querySelectorAll('section[aria-label="سوالات متداول املاک دید برج خلیفه"] details');
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
    if (['/properties', '/services', '/private-office', '/visas', '/heritage', '/insights', '/off-plan', '/areas', '/consultation', '/beachfront-properties-in-dubai', '/branded-residences-in-dubai', '/burj-khalifa-view-properties'].some(p => href === p || href.startsWith(p + '/'))) {
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
