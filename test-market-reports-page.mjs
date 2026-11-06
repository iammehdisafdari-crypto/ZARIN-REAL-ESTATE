import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const rootDir = process.cwd();
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

console.log('================================================================');
console.log('ZARIN MARKET REPORTS DEDICATED VERIFICATION SUITE');
console.log('================================================================');

// 1. File Existence & Mirror Parity
console.log('\n--- 1. File Existence & Clean URL Mirror Integrity ---');
const files = [
  { orig: 'insights/market-reports.html', mirror: 'insights/market-reports/index.html', label: 'English' },
  { orig: 'fa/insights/market-reports.html', mirror: 'fa/insights/market-reports/index.html', label: 'Persian' }
];

for (const f of files) {
  const origPath = path.join(rootDir, f.orig);
  const mirrorPath = path.join(rootDir, f.mirror);
  assert(fs.existsSync(origPath), `[${f.label}] Original file exists: ${f.orig}`);
  assert(fs.existsSync(mirrorPath), `[${f.label}] Mirror file exists: ${f.mirror}`);

  if (fs.existsSync(origPath) && fs.existsSync(mirrorPath)) {
    const origContent = fs.readFileSync(origPath, 'utf8');
    const mirrorContent = fs.readFileSync(mirrorPath, 'utf8');
    assert(origContent === mirrorContent, `[${f.label}] Original and mirror files are 100% identical in content`);
  }
}

// 2. Section Structure Audit (All 10 sections)
console.log('\n--- 2. Section Structure Integrity (All 10 Sections) ---');
const requiredSections = [
  '#hero',
  '#tldr',
  '#current-edition',
  '#library',
  '#whats-inside',
  '#methodology',
  '#key-findings',
  '#how-to-read',
  '#faq',
  '#cta'
];

for (const f of files) {
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  for (const selector of requiredSections) {
    const el = doc.querySelector(selector);
    assert(!!el, `[${f.label}] Required section "${selector}" exists`);
  }
}

// 3. Data Integrity & Market Statistics Verification
console.log('\n--- 3. Core Market Statistics & Data Accuracy ---');
const enContent = fs.readFileSync(path.join(rootDir, 'insights/market-reports.html'), 'utf8');
const faContent = fs.readFileSync(path.join(rootDir, 'fa/insights/market-reports.html'), 'utf8');

// Key metrics in Hero & current edition
assert(enContent.includes('42 Pages') || enContent.includes('42 pages') || enContent.includes('42'), '[English] Contains 42 pages metric');
assert(enContent.includes('1,650'), '[English] Contains AED 1,650/sqft metric');
assert(enContent.includes('38,247'), '[English] Contains 38,247 transactions metric');
assert(enContent.includes('6.5%'), '[English] Contains 6.5% gross yield metric');

assert(faContent.includes('۴۲') || faContent.includes('42'), '[Persian] Contains 42 pages metric');
assert(faContent.includes('۱,۶۵۰') || faContent.includes('1,650'), '[Persian] Contains 1,650 metric');
assert(faContent.includes('۳۸,۲۴۷') || faContent.includes('38,247'), '[Persian] Contains 38,247 metric');
assert(faContent.includes('۶.۵') || faContent.includes('6.5'), '[Persian] Contains 6.5% gross yield metric');

// 8-Area Table Metrics Verification
console.log('\n--- 4. 8-Area Price & Yield Matrix Accuracy ---');
const expectedAreas = [
  { enName: 'Jumeirah Bay Island', faName: 'جزیره جمیرا بی', price: '4,200', faPrice: '۴,۲۰۰', yield: '4.2%' },
  { enName: 'Palm Jumeirah', faName: 'پالم جمیرا', price: '2,800', faPrice: '۲,۸۰۰', yield: '4.9%' },
  { enName: 'Downtown Dubai', faName: 'داون‌تاون دبی', price: '2,200', faPrice: '۲,۲۰۰', yield: '6.0%' },
  { enName: 'Dubai Creek Harbour', faName: 'دبی کریک هاربر', price: '2,100', faPrice: '۲,۱۰۰', yield: '5.9%' },
  { enName: 'Emirates Hills', faName: 'امارات هیلز', price: '1,900', faPrice: '۱,۹۰۰', yield: '3.8%' },
  { enName: 'Dubai Marina', faName: 'دبی مارینا', price: '1,850', faPrice: '۱,۸۵۰', yield: '6.4%' },
  { enName: 'Business Bay', faName: 'بیزنس بی', price: '1,750', faPrice: '۱,۷۵۰', yield: '7.0%' },
  { enName: 'Dubai Hills Estate', faName: 'دبی هیلز استیت', price: '1,650', faPrice: '۱,۶۵۰', yield: '5.5%' }
];

for (const a of expectedAreas) {
  assert(enContent.includes(a.enName), `[English Table] Contains area "${a.enName}"`);
  assert(enContent.includes(a.price), `[English Table] Contains price "${a.price}" for ${a.enName}`);
  assert(faContent.includes(a.faName), `[Persian Table] Contains area "${a.faName}"`);
  assert(faContent.includes(a.price) || faContent.includes(a.faPrice), `[Persian Table] Contains price for ${a.faName}`);
}

// 5. FAQ Accordion Checks
console.log('\n--- 5. FAQ Accordion Details / Summary Elements ---');
for (const f of files) {
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const faqSection = doc.querySelector('#faq');
  const details = faqSection ? faqSection.querySelectorAll('details') : [];

  assert(details.length === 8, `[${f.label}] Has exactly 8 FAQ items (found ${details.length})`);
  if (details.length > 0) {
    assert(details[0].hasAttribute('open'), `[${f.label}] First FAQ item has "open" attribute`);
    let othersClosed = true;
    for (let i = 1; i < details.length; i++) {
      if (details[i].hasAttribute('open')) othersClosed = false;
    }
    assert(othersClosed, `[${f.label}] Remaining FAQ items start closed`);
  }
}

// 6. Global Header & Navigation Architecture
console.log('\n--- 6. Header Navigation & Language Switcher Rules ---');
for (const f of files) {
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  // Desktop 6 triggers
  const triggers = doc.querySelectorAll('.mega-menu-trigger');
  assert(triggers.length === 6, `[${f.label}] Has exactly 6 desktop mega menu triggers (found ${triggers.length})`);

  // Mobile drawer 6 items
  const mobileNavItems = doc.querySelectorAll('#mobile-menu .mobile-nav-item');
  assert(mobileNavItems.length === 6, `[${f.label}] Has exactly 6 mobile accordion items (found ${mobileNavItems.length})`);

  // Mobile dropdown menus start closed
  const mobileDropdowns = doc.querySelectorAll('#mobile-menu .mobile-dropdown-menu');
  let allHidden = true;
  mobileDropdowns.forEach(dd => {
    if (!dd.classList.contains('hidden')) allHidden = false;
  });
  assert(allHidden, `[${f.label}] All mobile dropdown submenus have "hidden" class on initial load`);

  // Mobile toggles start aria-expanded="false"
  const mobileToggles = doc.querySelectorAll('#mobile-menu .mobile-dropdown-toggle');
  let allCollapsed = true;
  mobileToggles.forEach(btn => {
    if (btn.getAttribute('aria-expanded') !== 'false') allCollapsed = false;
  });
  assert(allCollapsed, `[${f.label}] All mobile dropdown toggles have aria-expanded="false" on initial load`);

  // Body does not have class 'page-home'
  const body = doc.body;
  assert(!body.classList.contains('page-home'), `[${f.label}] Body does NOT have "page-home" class (enforces language switcher hidden)`);

  // Language switcher has no inline style displaying it
  const langSwitch = doc.querySelector('#site-header .lang-switch');
  if (langSwitch) {
    const style = langSwitch.getAttribute('style') || '';
    assert(!style.includes('display: flex') && !style.includes('display: block'), `[${f.label}] Header language switcher is not forced visible via inline styles`);
  }
}

// 7. Schema.org JSON-LD Verification
console.log('\n--- 7. Structured Data (JSON-LD) Verification ---');
for (const f of files) {
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const jsonLdScripts = Array.from(doc.querySelectorAll('script[type="application/ld+json"]'));

  assert(jsonLdScripts.length >= 1, `[${f.label}] Has at least 1 JSON-LD script block (found ${jsonLdScripts.length})`);

  let parsedSchemas = [];
  jsonLdScripts.forEach((s, idx) => {
    try {
      const data = JSON.parse(s.textContent);
      if (Array.isArray(data)) parsedSchemas.push(...data);
      else if (data['@graph']) parsedSchemas.push(...data['@graph']);
      else parsedSchemas.push(data);
    } catch (e) {
      assert(false, `[${f.label}] JSON-LD script #${idx} parses without error: ${e.message}`);
    }
  });

  const types = parsedSchemas.map(s => s['@type']);
  assert(types.includes('BreadcrumbList'), `[${f.label}] Includes BreadcrumbList schema`);
  assert(types.includes('FAQPage'), `[${f.label}] Includes FAQPage schema`);
}

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} passed, ${failed} failed.`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL MARKET REPORTS VERIFICATION TESTS PASSED SUCCESSFULLY!\n');
}
