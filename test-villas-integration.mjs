import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

console.log('================================================================');
console.log('ZARIN VILLAS PAGE INTEGRATION & MEGA-MENU VERIFICATION SUITE');
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

// 1. Files existence & Clean URL structure
console.log('\n--- 1. File Existence & Clean URLs ---');
const filesToCheck = [
  'villas-for-sale-in-dubai.html',
  'villas-for-sale-in-dubai/index.html',
  'fa/villas-for-sale-in-dubai.html',
  'fa/villas-for-sale-in-dubai/index.html'
];
for (const file of filesToCheck) {
  assert(fs.existsSync(path.join(rootDir, file)), `File exists: ${file}`);
}

// Check content parity between root .html and folder /index.html
const enRoot = fs.readFileSync(path.join(rootDir, 'villas-for-sale-in-dubai.html'), 'utf8');
const enIndex = fs.readFileSync(path.join(rootDir, 'villas-for-sale-in-dubai/index.html'), 'utf8');
assert(enRoot === enIndex, 'EN root .html and /index.html are completely identical');

const faRoot = fs.readFileSync(path.join(rootDir, 'fa/villas-for-sale-in-dubai.html'), 'utf8');
const faIndex = fs.readFileSync(path.join(rootDir, 'fa/villas-for-sale-in-dubai/index.html'), 'utf8');
assert(faRoot === faIndex, 'FA root .html and /index.html are completely identical');

// 2. Properties Mega Menu & Mobile Nav Linkage across pages
console.log('\n--- 2. Mega-Menu & Mobile Nav Linkage ---');
const testPages = [
  { file: 'index.html', lang: 'en' },
  { file: 'properties.html', lang: 'en' },
  { file: 'off-plan.html', lang: 'en' },
  { file: 'apartments-for-sale-in-dubai.html', lang: 'en' },
  { file: 'villas-for-sale-in-dubai.html', lang: 'en' },
  { file: 'fa/index.html', lang: 'fa' },
  { file: 'fa/properties.html', lang: 'fa' },
  { file: 'fa/off-plan.html', lang: 'fa' },
  { file: 'fa/apartments-for-sale-in-dubai.html', lang: 'fa' },
  { file: 'fa/villas-for-sale-in-dubai.html', lang: 'fa' },
];

for (const p of testPages) {
  const content = fs.readFileSync(path.join(rootDir, p.file), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  const expectedHref = p.lang === 'en' ? '/villas-for-sale-in-dubai' : '/fa/villas-for-sale-in-dubai';

  // Desktop mega menu Villas link
  const desktopVillasLink = doc.querySelector(`header .mega-menu-panel a[href="${expectedHref}"]`);
  assert(desktopVillasLink !== null, `[${p.file}] Desktop Properties mega menu links to ${expectedHref}`);

  // Mobile navigation Villas link
  const mobileVillasLink = doc.querySelector(`#mobile-menu a[href="${expectedHref}"]`);
  assert(mobileVillasLink !== null, `[${p.file}] Mobile drawer links to ${expectedHref}`);
}

// 3. Section Completeness in English Villas Page
console.log('\n--- 3. English Villas Page Sections ---');
const enDom = new JSDOM(enRoot);
const enDoc = enDom.window.document;

assert(enDoc.querySelector('header#site-header') !== null, '[EN] Shared #site-header present');
assert(enDoc.querySelector('#mobile-menu') !== null, '[EN] Shared #mobile-menu present');
assert(enDoc.querySelector('footer') !== null, '[EN] Shared footer present');

// Hero section
const heroH1 = enDoc.querySelector('h1#hero-headline');
assert(heroH1 && heroH1.textContent.includes('Villas'), '[EN] Hero H1 contains "Villas"');
const tldr = enDoc.querySelector('p#tldr-summary');
assert(tldr && tldr.textContent.includes('Standalone villas'), '[EN] TL;DR summary contains "Standalone villas"');

// Filter section
const filterChips = enDoc.querySelectorAll('.filter-chip');
assert(filterChips.length >= 13, `[EN] Sticky filter bar contains ${filterChips.length} filter chips`);

// Listings grid
const villaCards = enDoc.querySelectorAll('article.villa-card');
assert(villaCards.length === 6, `[EN] Villa grid contains exactly 6 curated villa cards (found ${villaCards.length})`);
const cardTitles = Array.from(villaCards).map(c => c.querySelector('h3')?.textContent?.trim());
assert(cardTitles[0]?.includes('Frond K'), '[EN] Card 1 is Palm Jumeirah Frond K');
assert(cardTitles[1]?.includes('Sector W'), '[EN] Card 2 is Emirates Hills Sector W');
assert(cardTitles[2]?.includes('Maple'), '[EN] Card 3 is Dubai Hills Maple');
assert(cardTitles[3]?.includes('Mirador'), '[EN] Card 4 is Arabian Ranches Mirador');
assert(cardTitles[4]?.includes('Island 14'), '[EN] Card 5 is Jumeirah Islands');
assert(cardTitles[5]?.includes('Lagoon District'), '[EN] Card 6 is Tilal Al Ghaf Lagoon');

// Bedrooms section
const bedroomCards = enDoc.querySelectorAll('.bedroom-card-link');
assert(bedroomCards.length === 4, `[EN] Browse by bedroom count contains 4 cards (found ${bedroomCards.length})`);

// Communities section
const communityLinks = enDoc.querySelectorAll('section[aria-label="Browse by villa community"] a[href^="/areas"]');
assert(communityLinks.length >= 6, `[EN] Browse by community contains ${communityLinks.length} community cards`);

// Why ZARIN section
const whySection = enDoc.querySelector('section[aria-label="Why buy a villa with ZARIN"]');
assert(whySection !== null, '[EN] "Why buy a villa with ZARIN" section present');
assert(whySection?.textContent?.includes('450+'), '[EN] Why section includes 450+ listing stat');

// FAQs
const faqs = enDoc.querySelectorAll('section[aria-label="Villa buying FAQ"] details');
assert(faqs.length === 8, `[EN] Exactly 8 FAQ items present (found ${faqs.length})`);

// Structured Data
const jsonLdScripts = Array.from(enDoc.querySelectorAll('script[type="application/ld+json"]'));
assert(jsonLdScripts.length >= 4, `[EN] Contains ${jsonLdScripts.length} JSON-LD schemas`);
const jsonLdTypes = jsonLdScripts.map(s => {
  try { return JSON.parse(s.textContent)['@type']; } catch(e) { return null; }
});
assert(jsonLdTypes.includes('BreadcrumbList'), '[EN] JSON-LD BreadcrumbList present');
assert(jsonLdTypes.includes('CollectionPage'), '[EN] JSON-LD CollectionPage present');
assert(jsonLdTypes.includes('FAQPage'), '[EN] JSON-LD FAQPage present');
assert(jsonLdTypes.includes('WebPage'), '[EN] JSON-LD WebPage present');

// 4. Section Completeness in Persian Villas Page
console.log('\n--- 4. Persian Villas Page Sections ---');
const faDom = new JSDOM(faRoot);
const faDoc = faDom.window.document;

assert(faDoc.documentElement.getAttribute('lang') === 'fa', '[FA] html lang="fa"');
assert(faDoc.documentElement.getAttribute('dir') === 'rtl', '[FA] html dir="rtl"');
assert(faDoc.querySelector('header#site-header') !== null, '[FA] Shared #site-header present');
assert(faDoc.querySelector('#mobile-menu') !== null, '[FA] Shared #mobile-menu present');
assert(faDoc.querySelector('footer') !== null, '[FA] Shared footer present');

// Hero section
const faHeroH1 = faDoc.querySelector('h1#hero-headline');
assert(faHeroH1 && faHeroH1.textContent.includes('ویلا'), '[FA] Hero H1 contains "ویلا"');
const faTldr = faDoc.querySelector('p#tldr-summary');
assert(faTldr && faTldr.textContent.includes('ویلاهای مستقل'), '[FA] TL;DR summary contains "ویلاهای مستقل"');

// Filter section
const faFilterChips = faDoc.querySelectorAll('.filter-chip');
assert(faFilterChips.length >= 13, `[FA] Sticky filter bar contains ${faFilterChips.length} filter chips`);

// Listings grid
const faVillaCards = faDoc.querySelectorAll('article.villa-card');
assert(faVillaCards.length === 6, `[FA] Villa grid contains exactly 6 curated villa cards (found ${faVillaCards.length})`);

// Bedrooms section
const faBedroomCards = faDoc.querySelectorAll('.bedroom-card-link');
assert(faBedroomCards.length === 4, `[FA] Browse by bedroom count contains 4 cards (found ${faBedroomCards.length})`);

// Communities section
const faCommunityLinks = faDoc.querySelectorAll('section[aria-label="شهرک‌های شاخص ویلایی"] a[href^="/fa/areas"]');
assert(faCommunityLinks.length >= 6, `[FA] Browse by community contains ${faCommunityLinks.length} community cards`);

// Why ZARIN section
const faWhySection = faDoc.querySelector('section[aria-label="چرا خرید ویلا با زرین"]');
assert(faWhySection !== null, '[FA] "چرا خرید ویلا با زرین" section present');
assert(faWhySection?.textContent?.includes('۴۵۰'), '[FA] Why section includes ۴۵۰ listing stat');

// FAQs
const faFaqs = faDoc.querySelectorAll('section[aria-label="پرسش‌های متداول خرید ویلا"] details');
assert(faFaqs.length === 8, `[FA] Exactly 8 FAQ items present (found ${faFaqs.length})`);

// Canonical and hreflang
console.log('\n--- 5. Canonical & Hreflang Validation ---');
const enCanonical = enDoc.querySelector('link[rel="canonical"]')?.getAttribute('href');
assert(enCanonical === 'https://zarinrealestate.com/villas-for-sale-in-dubai', `[EN] Canonical is correct: ${enCanonical}`);

const faCanonical = faDoc.querySelector('link[rel="canonical"]')?.getAttribute('href');
assert(faCanonical === 'https://zarinrealestate.com/fa/villas-for-sale-in-dubai', `[FA] Canonical is correct: ${faCanonical}`);

const enAltFa = enDoc.querySelector('link[rel="alternate"][hreflang="fa"]')?.getAttribute('href');
const enAltEn = enDoc.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href');
assert(enAltFa === 'https://zarinrealestate.com/fa/villas-for-sale-in-dubai', `[EN] Alternate fa matches: ${enAltFa}`);
assert(enAltEn === 'https://zarinrealestate.com/villas-for-sale-in-dubai', `[EN] Alternate en matches: ${enAltEn}`);

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');
if (failed > 0) process.exit(1);
