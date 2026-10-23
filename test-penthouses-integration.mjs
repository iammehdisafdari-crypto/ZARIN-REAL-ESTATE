import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

console.log('================================================================');
console.log('ZARIN PENTHOUSES INTEGRATION & MEGA-MENU VERIFICATION SUITE');
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
  'penthouses-for-sale-in-dubai.html',
  'penthouses-for-sale-in-dubai/index.html',
  'fa/penthouses-for-sale-in-dubai.html',
  'fa/penthouses-for-sale-in-dubai/index.html'
];
for (const file of filesToCheck) {
  assert(fs.existsSync(path.join(rootDir, file)), `File exists: ${file}`);
}

const enRoot = fs.readFileSync(path.join(rootDir, 'penthouses-for-sale-in-dubai.html'), 'utf8');
const enIndex = fs.readFileSync(path.join(rootDir, 'penthouses-for-sale-in-dubai/index.html'), 'utf8');
assert(enRoot === enIndex, 'EN root .html and /index.html are completely identical');

const faRoot = fs.readFileSync(path.join(rootDir, 'fa/penthouses-for-sale-in-dubai.html'), 'utf8');
const faIndex = fs.readFileSync(path.join(rootDir, 'fa/penthouses-for-sale-in-dubai/index.html'), 'utf8');
assert(faRoot === faIndex, 'FA root .html and /index.html are completely identical');

// 2. Properties Mega Menu & Mobile Nav Linkage across sample pages
console.log('\n--- 2. Mega-Menu & Mobile Nav Linkage ---');
const testPages = [
  { file: 'index.html', lang: 'en' },
  { file: 'properties.html', lang: 'en' },
  { file: 'properties-for-sale.html', lang: 'en' },
  { file: 'apartments-for-sale-in-dubai.html', lang: 'en' },
  { file: 'villas-for-sale-in-dubai.html', lang: 'en' },
  { file: 'penthouses-for-sale-in-dubai.html', lang: 'en' },
  { file: 'fa/index.html', lang: 'fa' },
  { file: 'fa/properties.html', lang: 'fa' },
  { file: 'fa/properties-for-sale.html', lang: 'fa' },
  { file: 'fa/penthouses-for-sale-in-dubai.html', lang: 'fa' },
];

for (const p of testPages) {
  const content = fs.readFileSync(path.join(rootDir, p.file), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  const expectedHref = p.lang === 'en' ? '/penthouses-for-sale-in-dubai' : '/fa/penthouses-for-sale-in-dubai';

  // Desktop mega menu Penthouses link
  const desktopPhLink = doc.querySelector(`header .mega-menu-panel a[href="${expectedHref}"]`);
  assert(desktopPhLink !== null, `[${p.file}] Desktop Properties mega menu links to ${expectedHref}`);

  // Mobile navigation Penthouses link
  const mobilePhLink = doc.querySelector(`#mobile-menu a[href="${expectedHref}"]`);
  assert(mobilePhLink !== null, `[${p.file}] Mobile drawer links to ${expectedHref}`);
}

// 3. Section Completeness in English Penthouses Page
console.log('\n--- 3. English Penthouses Page Sections ---');
const enDom = new JSDOM(enRoot, { runScripts: 'dangerously' });
const enDoc = enDom.window.document;

assert(enDoc.querySelector('header#site-header') !== null, '[EN] Shared #site-header present');
assert(enDoc.querySelector('#mobile-menu') !== null, '[EN] Shared #mobile-menu present');
assert(enDoc.querySelector('footer') !== null, '[EN] Shared footer present');

// Hero section
const heroH1 = enDoc.querySelector('h1#hero-headline');
assert(heroH1 && heroH1.textContent.includes('Penthouses'), '[EN] Hero H1 contains "Penthouses"');
const tldr = enDoc.querySelector('p#tldr-summary');
assert(tldr && tldr.textContent.includes('Sky homes'), '[EN] TL;DR summary contains "Sky homes"');

// Filter section
const filterChips = enDoc.querySelectorAll('.filter-chip');
assert(filterChips.length >= 15, `[EN] Sticky filter bar contains ${filterChips.length} filter chips across 3 groups`);

// Listings grid
const phCards = enDoc.querySelectorAll('article.penthouse-card');
assert(phCards.length === 6, `[EN] Penthouse grid contains exactly 6 curated cards (found ${phCards.length})`);
const cardTitles = Array.from(phCards).map(c => c.querySelector('h3')?.textContent?.trim());
assert(cardTitles[0]?.includes('Burj Vista'), '[EN] Card 1 is Burj Vista');
assert(cardTitles[1]?.includes('Signature Sky Home'), '[EN] Card 2 is Signature Sky Home');
assert(cardTitles[2]?.includes('Marina Gate'), '[EN] Card 3 is Marina Gate Sky Home');
assert(cardTitles[3]?.includes('Palm Crescent'), '[EN] Card 4 is Palm Crescent Sky Palace');
assert(cardTitles[4]?.includes('Bluewaters Crown'), '[EN] Card 5 is Bluewaters Crown');
assert(cardTitles[5]?.includes('Burj Vista Signature'), '[EN] Card 6 is Burj Vista Signature');

// Browse by View
const viewLinks = enDoc.querySelectorAll('section[aria-label="Browse penthouses by view"] a[href*="view="]');
assert(viewLinks.length === 5, `[EN] Browse by view contains 5 view cards (found ${viewLinks.length})`);

// Browse by Area
const areaCards = enDoc.querySelectorAll('section[aria-label="Browse by area"] a[href^="/areas"]');
assert(areaCards.length >= 5, `[EN] Browse by area contains ${areaCards.length} district cards`);

// What Makes a Dubai Penthouse
const whatSection = enDoc.querySelector('section[aria-label="What makes a Dubai penthouse"]');
assert(whatSection !== null, '[EN] "What Makes a Dubai Penthouse" section present');
assert(whatSection?.textContent?.includes('Defining Features'), '[EN] Contains Defining Features box');

// Why ZARIN section
const whySection = enDoc.querySelector('section[aria-label="Why buy a penthouse with ZARIN"]');
assert(whySection !== null, '[EN] "Why buy a penthouse with ZARIN" section present');
assert(whySection?.textContent?.includes('85+'), '[EN] Why section includes 85+ listing stat');

// FAQs
const faqs = enDoc.querySelectorAll('section[aria-label="Penthouse buying FAQ"] details');
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

// 4. Section Completeness in Persian Penthouses Page
console.log('\n--- 4. Persian Penthouses Page Sections ---');
const faDom = new JSDOM(faRoot, { runScripts: 'dangerously' });
const faDoc = faDom.window.document;

assert(faDoc.documentElement.getAttribute('lang') === 'fa', '[FA] html lang="fa"');
assert(faDoc.documentElement.getAttribute('dir') === 'rtl', '[FA] html dir="rtl"');
assert(faDoc.querySelector('header#site-header') !== null, '[FA] Shared #site-header present');
assert(faDoc.querySelector('#mobile-menu') !== null, '[FA] Shared #mobile-menu present');
assert(faDoc.querySelector('footer') !== null, '[FA] Shared footer present');

// Hero section
const faHeroH1 = faDoc.querySelector('h1#hero-headline');
assert(faHeroH1 && faHeroH1.textContent.includes('پنت‌هاوس'), '[FA] Hero H1 contains "پنت‌هاوس"');
const faTldr = faDoc.querySelector('p#tldr-summary');
assert(faTldr && faTldr.textContent.includes('خانه‌های آسمانی'), '[FA] TL;DR summary contains "خانه‌های آسمانی"');

// Filter section
const faFilterChips = faDoc.querySelectorAll('.filter-chip');
assert(faFilterChips.length >= 15, `[FA] Sticky filter bar contains ${faFilterChips.length} filter chips`);

// Listings grid
const faPhCards = faDoc.querySelectorAll('article.penthouse-card');
assert(faPhCards.length === 6, `[FA] Penthouse grid contains exactly 6 curated cards (found ${faPhCards.length})`);

// Browse by View
const faViewLinks = faDoc.querySelectorAll('section[aria-label="جستجو بر اساس چشم‌انداز"] a[href*="view="]');
assert(faViewLinks.length === 5, `[FA] Browse by view contains 5 view cards (found ${faViewLinks.length})`);

// Browse by Area
const faAreaCards = faDoc.querySelectorAll('section[aria-label="مناطق شاخص پنت‌هاوس"] a[href^="/fa/areas"]');
assert(faAreaCards.length >= 5, `[FA] Browse by area contains ${faAreaCards.length} district cards`);

// What Makes a Dubai Penthouse
const faWhatSection = faDoc.querySelector('section[aria-label="شاخص‌های بنیادین پنت‌هاوس در دبی"]');
assert(faWhatSection !== null, '[FA] "شاخص‌های بنیادین پنت‌هاوس در دبی" section present');

// Why ZARIN section
const faWhySection = faDoc.querySelector('section[aria-label="چرا خرید پنت‌هاوس با زرین"]');
assert(faWhySection !== null, '[FA] "چرا خرید پنت‌هاوس با زرین" section present');
assert(faWhySection?.textContent?.includes('۸۵'), '[FA] Why section includes ۸۵ stat');

// FAQs
const faFaqs = faDoc.querySelectorAll('section[aria-label="پرسش‌های متداول خرید پنت‌هاوس"] details');
assert(faFaqs.length === 8, `[FA] Exactly 8 FAQ items present (found ${faFaqs.length})`);

// 5. Canonical & Hreflang Validation
console.log('\n--- 5. Canonical & Hreflang Validation ---');
const enCanonical = enDoc.querySelector('link[rel="canonical"]')?.getAttribute('href');
assert(enCanonical === 'https://zarinrealestate.com/penthouses-for-sale-in-dubai', `[EN] Canonical is correct: ${enCanonical}`);

const faCanonical = faDoc.querySelector('link[rel="canonical"]')?.getAttribute('href');
assert(faCanonical === 'https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai', `[FA] Canonical is correct: ${faCanonical}`);

const enAltFa = enDoc.querySelector('link[rel="alternate"][hreflang="fa"]')?.getAttribute('href');
const enAltEn = enDoc.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href');
assert(enAltFa === 'https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai', `[EN] Alternate fa matches: ${enAltFa}`);
assert(enAltEn === 'https://zarinrealestate.com/penthouses-for-sale-in-dubai', `[EN] Alternate en matches: ${enAltEn}`);

// 6. Interactive Filter Behavior Simulation
console.log('\n--- 6. Interactive Filter Simulation ---');
const chip3BR = enDoc.querySelector('.filter-chip[data-group="bedrooms"][data-value="3BR"]');
const chipAllBeds = enDoc.querySelector('.filter-chip[data-group="bedrooms"][data-value="All"]');

chip3BR.click();
const visible3BR = Array.from(phCards).filter(c => !c.classList.contains('hidden-card')).length;
assert(visible3BR === 2, `Clicking 3BR filter isolates 2 cards (found ${visible3BR})`);

chipAllBeds.click();
const visibleAll = Array.from(phCards).filter(c => !c.classList.contains('hidden-card')).length;
assert(visibleAll === 6, `Clicking All restores 6 cards (found ${visibleAll})`);

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');
if (failed > 0) process.exit(1);
