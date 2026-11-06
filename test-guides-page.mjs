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
console.log('ZARIN BUYER\'S GUIDES DEDICATED VERIFICATION SUITE');
console.log('================================================================');

// 1. File Existence & Mirror Parity
console.log('\n--- 1. File Existence & Clean URL Mirror Integrity ---');
const files = [
  { orig: 'insights/guides.html', mirror: 'insights/guides/index.html', label: 'English' },
  { orig: 'fa/insights/guides.html', mirror: 'fa/insights/guides/index.html', label: 'Persian' }
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
  '#guide-1',
  '#guide-2',
  '#guide-3',
  '#guide-4',
  '#guide-5',
  '#guide-6',
  '#faq',
  '#cta'
];

for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  for (const selector of requiredSections) {
    const el = doc.querySelector(selector);
    assert(!!el, `[${f.label}] Required section "${selector}" exists`);
  }
}

// 3. Core Buyer's Guide Statistics & Content
console.log('\n--- 3. Core Statistics & Guide Verification ---');
if (fs.existsSync(path.join(rootDir, 'insights/guides.html')) && fs.existsSync(path.join(rootDir, 'fa/insights/guides.html'))) {
  const enContent = fs.readFileSync(path.join(rootDir, 'insights/guides.html'), 'utf8');
  const faContent = fs.readFileSync(path.join(rootDir, 'fa/insights/guides.html'), 'utf8');

  // Key metrics
  assert(enContent.includes('6.2%'), '[English] Contains 6.2% cash cost stack metric');
  assert(enContent.includes('10 yrs') || enContent.includes('10 years'), '[English] Contains 10 yrs Golden Visa metric');
  assert(enContent.includes('30 days') || enContent.includes('30 روز'), '[English] Contains 30 days transfer window metric');

  assert(faContent.includes('۶.۲٪') || faContent.includes('6.2%'), '[Persian] Contains 6.2% cash cost stack metric');
  assert(faContent.includes('۱۰ سال') || faContent.includes('10 سال'), '[Persian] Contains 10 yrs Golden Visa metric');
  assert(faContent.includes('۳۰ روز') || faContent.includes('30 روز'), '[Persian] Contains 30 days transfer window metric');
}

// 4. Guide 1: Six Stages
console.log('\n--- 4. Guide 1 (Six Stages) Verification ---');
for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const guide1Section = doc.querySelector('#guide-1');
  const stageCards = guide1Section ? guide1Section.querySelectorAll('[role="listitem"]') : [];

  assert(stageCards.length === 6, `[${f.label}] Guide 1 has exactly 6 stage cards (found ${stageCards.length})`);
}

// 5. Guide 2: Four Remote Steps
console.log('\n--- 5. Guide 2 (Four Remote Steps) Verification ---');
for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const guide2Section = doc.querySelector('#guide-2');
  const steps = guide2Section ? guide2Section.querySelectorAll('[role="listitem"]') : [];

  assert(steps.length === 4, `[${f.label}] Guide 2 has exactly 4 remote purchase steps (found ${steps.length})`);
}

// 6. Guide 3: Four Off-Plan Mechanisms & Three Tool Links
console.log('\n--- 6. Guide 3 (Off-Plan Mechanisms & Tools) Verification ---');
for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const guide3Section = doc.querySelector('#guide-3');
  const mechanisms = guide3Section ? guide3Section.querySelectorAll('article') : [];
  const tools = guide3Section ? guide3Section.querySelectorAll('div[role="list"] a') : [];

  assert(mechanisms.length === 4, `[${f.label}] Guide 3 has exactly 4 off-plan mechanism cards (found ${mechanisms.length})`);
  assert(tools.length === 3, `[${f.label}] Guide 3 has exactly 3 tool links (found ${tools.length})`);
}

// 7. Guide 4: Tables Verification
console.log('\n--- 7. Guide 4 (Cost Tables) Verification ---');
for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const guide4Section = doc.querySelector('#guide-4');
  const tables = guide4Section ? guide4Section.querySelectorAll('table') : [];

  assert(tables.length === 2, `[${f.label}] Guide 4 has exactly 2 cost breakdown tables (found ${tables.length})`);
}

// 8. Guide 5: Four Visa Routes
console.log('\n--- 8. Guide 5 (Four Visa Routes) Verification ---');
for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const guide5Section = doc.querySelector('#guide-5');
  const visaCards = guide5Section ? guide5Section.querySelectorAll('[role="listitem"]') : [];

  assert(visaCards.length === 4, `[${f.label}] Guide 5 has exactly 4 visa route cards (found ${visaCards.length})`);
}

// 9. Guide 6: Landlord Yield Table & Concerns
console.log('\n--- 9. Guide 6 (Landlord Table & Concerns) Verification ---');
for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const guide6Section = doc.querySelector('#guide-6');
  const yieldTable = guide6Section ? guide6Section.querySelector('table') : null;
  const concerns = guide6Section ? guide6Section.querySelectorAll('.space-y-4 [role="listitem"]') : [];

  assert(!!yieldTable, `[${f.label}] Guide 6 contains the 8-district rental yield table`);
  assert(concerns.length === 3, `[${f.label}] Guide 6 has exactly 3 recurring landlord concerns (found ${concerns.length})`);
}

// 10. FAQ Accordions
console.log('\n--- 10. FAQ Accordion Details / Summary Elements ---');
for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const faqSection = doc.querySelector('#faq');
  const details = faqSection ? faqSection.querySelectorAll('details') : [];

  assert(details.length === 8, `[${f.label}] Has exactly 8 FAQ items (found ${details.length})`);
  if (details.length >= 8) {
    assert(details[0].hasAttribute('open'), `[${f.label}] First FAQ item has "open" attribute`);
    let remainingClosed = true;
    for (let i = 1; i < details.length; i++) {
      if (details[i].hasAttribute('open')) remainingClosed = false;
    }
    assert(remainingClosed, `[${f.label}] Remaining 7 FAQ items start closed`);
  }
}

// 11. Header Navigation & Language Switcher Rules
console.log('\n--- 11. Header Navigation & Language Switcher Rules ---');
for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  const desktopTriggers = doc.querySelectorAll('.mega-menu-trigger');
  assert(desktopTriggers.length === 6, `[${f.label}] Has exactly 6 desktop mega menu triggers (found ${desktopTriggers.length})`);

  const mobileNavItems = doc.querySelectorAll('.mobile-nav-item');
  assert(mobileNavItems.length === 6, `[${f.label}] Has exactly 6 mobile accordion items (found ${mobileNavItems.length})`);

  // Ensure all mobile submenus start closed
  const mobileSubmenus = doc.querySelectorAll('[id^="mobile-"][id$="-submenu"]');
  let allHidden = true;
  mobileSubmenus.forEach(sm => {
    if (!sm.classList.contains('hidden')) allHidden = false;
  });
  assert(allHidden, `[${f.label}] All mobile dropdown submenus have "hidden" class on initial load`);

  const mobileToggles = doc.querySelectorAll('.mobile-accordion-toggle');
  let allCollapsed = true;
  mobileToggles.forEach(btn => {
    if (btn.getAttribute('aria-expanded') !== 'false') allCollapsed = false;
  });
  assert(allCollapsed, `[${f.label}] All mobile dropdown toggles have aria-expanded="false" on initial load`);

  // Check language selector rules
  const body = doc.querySelector('body');
  assert(!body.classList.contains('page-home'), `[${f.label}] Body does NOT have "page-home" class (enforces language switcher hidden)`);

  const langSwitch = doc.querySelector('.lang-switch');
  const mobileLangContainer = doc.querySelector('.mobile-lang-container');
  if (langSwitch) {
    const inlineStyle = langSwitch.getAttribute('style') || '';
    assert(!inlineStyle.includes('display: flex') && !inlineStyle.includes('display: inline-flex'), `[${f.label}] Header language switcher is not forced visible via inline styles`);
  }
}

// 12. Structured Data (JSON-LD) Verification
console.log('\n--- 12. Structured Data (JSON-LD) Verification ---');
for (const f of files) {
  if (!fs.existsSync(path.join(rootDir, f.orig))) continue;
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const jsonLdScripts = doc.querySelectorAll('script[type="application/ld+json"]');

  assert(jsonLdScripts.length >= 1, `[${f.label}] Has at least 1 JSON-LD script block (found ${jsonLdScripts.length})`);

  let hasBreadcrumbs = false;
  let hasCollectionPage = false;
  let hasFaqPage = false;
  let hasWebPage = false;

  jsonLdScripts.forEach(s => {
    try {
      const data = JSON.parse(s.textContent);
      if (data['@type'] === 'BreadcrumbList') hasBreadcrumbs = true;
      if (data['@type'] === 'CollectionPage') hasCollectionPage = true;
      if (data['@type'] === 'FAQPage') hasFaqPage = true;
      if (data['@type'] === 'WebPage') hasWebPage = true;
    } catch (e) {}
  });

  assert(hasBreadcrumbs, `[${f.label}] Includes BreadcrumbList schema`);
  assert(hasCollectionPage, `[${f.label}] Includes CollectionPage schema`);
  assert(hasFaqPage, `[${f.label}] Includes FAQPage schema`);
  assert(hasWebPage, `[${f.label}] Includes WebPage schema`);
}

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} passed, ${failed} failed.`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL BUYER\'S GUIDES VERIFICATION TESTS PASSED SUCCESSFULLY!\n');
}
