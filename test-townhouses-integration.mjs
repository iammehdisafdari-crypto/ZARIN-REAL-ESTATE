import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

console.log('================================================================');
console.log('ZARIN TOWNHOUSES INTEGRATION & MEGA-MENU VERIFICATION SUITE');
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
  'townhouses-for-sale-in-dubai.html',
  'townhouses-for-sale-in-dubai/index.html',
  'fa/townhouses-for-sale-in-dubai.html',
  'fa/townhouses-for-sale-in-dubai/index.html'
];

for (const file of filesToCheck) {
  assert(fs.existsSync(file), `File exists: ${file}`);
}

const enRoot = fs.readFileSync('townhouses-for-sale-in-dubai.html', 'utf8');
const enIndex = fs.readFileSync('townhouses-for-sale-in-dubai/index.html', 'utf8');
assert(enRoot === enIndex, 'EN root .html and /index.html are completely identical');

const faRoot = fs.readFileSync('fa/townhouses-for-sale-in-dubai.html', 'utf8');
const faIndex = fs.readFileSync('fa/townhouses-for-sale-in-dubai/index.html', 'utf8');
assert(faRoot === faIndex, 'FA root .html and /index.html are completely identical');

// --- 2. Mega-Menu & Mobile Nav Linkage ---
console.log('\n--- 2. Mega-Menu & Mobile Nav Linkage ---');
const samplePages = [
  { path: 'index.html', lang: 'en' },
  { path: 'properties.html', lang: 'en' },
  { path: 'properties-for-sale.html', lang: 'en' },
  { path: 'apartments-for-sale-in-dubai.html', lang: 'en' },
  { path: 'villas-for-sale-in-dubai.html', lang: 'en' },
  { path: 'penthouses-for-sale-in-dubai.html', lang: 'en' },
  { path: 'townhouses-for-sale-in-dubai.html', lang: 'en' },
  { path: 'fa/index.html', lang: 'fa' },
  { path: 'fa/properties.html', lang: 'fa' },
  { path: 'fa/properties-for-sale.html', lang: 'fa' },
  { path: 'fa/townhouses-for-sale-in-dubai.html', lang: 'fa' }
];

for (const page of samplePages) {
  const content = fs.readFileSync(page.path, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  if (page.lang === 'en') {
    const desktopLink = doc.querySelector('#site-header a[href="/townhouses-for-sale-in-dubai"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /townhouses-for-sale-in-dubai`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/townhouses-for-sale-in-dubai"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /townhouses-for-sale-in-dubai`);
  } else {
    const desktopLink = doc.querySelector('#site-header a[href="/fa/townhouses-for-sale-in-dubai"]');
    assert(desktopLink !== null, `[${page.path}] Desktop Properties mega menu links to /fa/townhouses-for-sale-in-dubai`);

    const mobileLink = doc.querySelector('#mobile-menu a[href="/fa/townhouses-for-sale-in-dubai"]');
    assert(mobileLink !== null, `[${page.path}] Mobile drawer links to /fa/townhouses-for-sale-in-dubai`);
  }
}

// --- 3. English Townhouses Page Sections ---
console.log('\n--- 3. English Townhouses Page Sections ---');
const enDom = new JSDOM(enRoot);
const enDoc = enDom.window.document;

assert(enDoc.querySelector('#site-header') !== null, '[EN] Shared #site-header present');
assert(enDoc.querySelector('#mobile-menu') !== null, '[EN] Shared #mobile-menu present');
assert(enDoc.querySelector('footer') !== null, '[EN] Shared footer present');

const enH1 = enDoc.querySelector('h1#hero-headline');
assert(enH1 && enH1.textContent.includes('Townhouses'), '[EN] Hero H1 contains "Townhouses"');

const enTldr = enDoc.querySelector('#tldr-summary');
assert(enTldr && enTldr.textContent.includes('Arabian Ranches'), '[EN] TL;DR summary contains communities');

const enFilterChips = enDoc.querySelectorAll('.filter-chip');
assert(enFilterChips.length >= 15, `[EN] Sticky filter bar contains ${enFilterChips.length} filter chips`);

const enCards = enDoc.querySelectorAll('.townhouse-card');
assert(enCards.length === 6, `[EN] Townhouse grid contains exactly 6 curated cards (found ${enCards.length})`);

assert(enCards[0]?.textContent.includes('Mirador'), '[EN] Card 1 is Mirador');
assert(enCards[1]?.textContent.includes('Maple'), '[EN] Card 2 is Maple');
assert(enCards[2]?.textContent.includes('Belgravia'), '[EN] Card 3 is Belgravia');
assert(enCards[3]?.textContent.includes('Sidra'), '[EN] Card 4 is Sidra');
assert(enCards[4]?.textContent.includes('Lagoons'), '[EN] Card 5 is Lagoons');
assert(enCards[5]?.textContent.includes('Naseem'), '[EN] Card 6 is Naseem');

const enBedroomSection = enDoc.querySelector('section[aria-label="Browse by bedroom count"]');
const enBedCards = enBedroomSection ? enBedroomSection.querySelectorAll('a[href*="townhouses-for-sale-in-dubai?beds"]') : [];
assert(enBedCards.length === 4, `[EN] Browse by bedrooms contains 4 size cards (found ${enBedCards.length})`);

const enCommunitySection = enDoc.querySelector('section[aria-label="Browse by community"]');
const enCommCards = enCommunitySection ? enCommunitySection.querySelectorAll('h3') : [];
assert(enCommCards.length >= 6, `[EN] Browse by community contains 6 community cards (found ${enCommCards.length})`);

const enWhyPopular = enDoc.querySelector('section[aria-label="Why townhouses are popular in Dubai"]');
assert(enWhyPopular !== null, '[EN] "Why townhouses are popular" section present');
assert(enWhyPopular?.textContent.includes('2026 Townhouse Market Outlook'), '[EN] Outlook subsection present');

const enWhyZarin = enDoc.querySelector('section[aria-label="Why buy a townhouse with ZARIN"]');
assert(enWhyZarin !== null, '[EN] "Why buy a townhouse with ZARIN" section present');
assert(enWhyZarin?.textContent.includes('380+'), '[EN] Why section includes 380+ listing stat');

const enFaqs = enDoc.querySelectorAll('details');
assert(enFaqs.length === 8, `[EN] Exactly 8 FAQ items present (found ${enFaqs.length})`);

const enSchemas = enDoc.querySelectorAll('script[type="application/ld+json"]');
assert(enSchemas.length === 4, `[EN] Contains 4 JSON-LD schemas (found ${enSchemas.length})`);
assert(enRoot.includes('"@type":"BreadcrumbList"'), '[EN] JSON-LD BreadcrumbList present');
assert(enRoot.includes('"@type":"CollectionPage"'), '[EN] JSON-LD CollectionPage present');
assert(enRoot.includes('"@type":"FAQPage"'), '[EN] JSON-LD FAQPage present');
assert(enRoot.includes('"@type":"WebPage"'), '[EN] JSON-LD WebPage present');

// --- 4. Persian Townhouses Page Sections ---
console.log('\n--- 4. Persian Townhouses Page Sections ---');
const faDom = new JSDOM(faRoot);
const faDoc = faDom.window.document;

assert(faDoc.documentElement.getAttribute('lang') === 'fa', '[FA] html lang="fa"');
assert(faDoc.documentElement.getAttribute('dir') === 'rtl', '[FA] html dir="rtl"');
assert(faDoc.querySelector('#site-header') !== null, '[FA] Shared #site-header present');
assert(faDoc.querySelector('#mobile-menu') !== null, '[FA] Shared #mobile-menu present');
assert(faDoc.querySelector('footer') !== null, '[FA] Shared footer present');

const faH1 = faDoc.querySelector('h1#hero-headline');
assert(faH1 && faH1.textContent.includes('تاون‌هاوس'), '[FA] Hero H1 contains "تاون‌هاوس"');

const faTldr = faDoc.querySelector('#tldr-summary');
assert(faTldr && faTldr.textContent.includes('اربین رنچز'), '[FA] TL;DR summary contains "اربین رنچز"');

const faFilterChips = faDoc.querySelectorAll('.filter-chip');
assert(faFilterChips.length >= 15, `[FA] Sticky filter bar contains ${faFilterChips.length} filter chips`);

const faCards = faDoc.querySelectorAll('.townhouse-card');
assert(faCards.length === 6, `[FA] Townhouse grid contains exactly 6 curated cards (found ${faCards.length})`);

const faBedSection = faDoc.querySelector('section[aria-label="دسته‌بندی بر اساس تعداد خواب"]');
const faBedCards = faBedSection ? faBedSection.querySelectorAll('a[href*="townhouses-for-sale-in-dubai?beds"]') : [];
assert(faBedCards.length === 4, `[FA] Browse by bedrooms contains 4 size cards (found ${faBedCards.length})`);

const faCommSection = faDoc.querySelector('section[aria-label="شهرک‌های خانوادگی دبی"]');
const faCommCards = faCommSection ? faCommSection.querySelectorAll('h3') : [];
assert(faCommCards.length >= 6, `[FA] Browse by community contains 6 community cards (found ${faCommCards.length})`);

const faWhyPopular = faDoc.querySelector('section[aria-label="دلایل محبوبیت تاون‌هاوس در دبی"]');
assert(faWhyPopular !== null, '[FA] "دلایل محبوبیت تاون‌هاوس در دبی" section present');

const faWhyZarin = faDoc.querySelector('section[aria-label="چرا خرید تاون‌هاوس با زرین"]');
assert(faWhyZarin !== null, '[FA] "چرا خرید تاون‌هاوس با زرین" section present');
assert(faWhyZarin?.textContent.includes('۳۸۰+'), '[FA] Why section includes ۳۸۰+ stat');

const faFaqs = faDoc.querySelectorAll('details');
assert(faFaqs.length === 8, `[FA] Exactly 8 FAQ items present (found ${faFaqs.length})`);

// --- 5. Canonical & Hreflang Validation ---
console.log('\n--- 5. Canonical & Hreflang Validation ---');
const enCanonical = enDoc.querySelector('link[rel="canonical"]')?.getAttribute('href');
assert(enCanonical === 'https://zarinrealestate.com/townhouses-for-sale-in-dubai', `[EN] Canonical is correct: ${enCanonical}`);

const faCanonical = faDoc.querySelector('link[rel="canonical"]')?.getAttribute('href');
assert(faCanonical === 'https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai', `[FA] Canonical is correct: ${faCanonical}`);

const enAltFa = enDoc.querySelector('link[rel="alternate"][hreflang="fa"]')?.getAttribute('href');
assert(enAltFa === 'https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai', `[EN] Alternate fa matches: ${enAltFa}`);

const enAltEn = enDoc.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href');
assert(enAltEn === 'https://zarinrealestate.com/townhouses-for-sale-in-dubai', `[EN] Alternate en matches: ${enAltEn}`);

// --- 6. Interactive Filter Simulation ---
console.log('\n--- 6. Interactive Filter Simulation ---');
// Test filtering logic: 4BR should match Maple (Listing 2) and Sidra (Listing 4)
let count4BR = 0;
enCards.forEach(card => {
  if (card.dataset.bedrooms === '4') count4BR++;
});
assert(count4BR === 2, `Filtering by 4BR correctly targets 2 cards (found ${count4BR})`);

let countRanches = 0;
enCards.forEach(card => {
  if (card.dataset.community === 'arabian-ranches') countRanches++;
});
assert(countRanches === 1, `Filtering by Arabian Ranches targets 1 card (found ${countRanches})`);

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) process.exit(1);
