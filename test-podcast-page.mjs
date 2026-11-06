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
console.log('ZARIN PODCAST DEDICATED VERIFICATION SUITE');
console.log('================================================================');

// 1. File Existence & Mirror Parity
console.log('\n--- 1. File Existence & Clean URL Mirror Integrity ---');
const files = [
  { orig: 'insights/podcast.html', mirror: 'insights/podcast/index.html', label: 'English' },
  { orig: 'fa/insights/podcast.html', mirror: 'fa/insights/podcast/index.html', label: 'Persian' }
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
  '#about',
  '#latest-episodes',
  '#episode-list',
  '#formats',
  '#how-we-record',
  '#where-to-listen',
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

// 3. Core Podcast Statistics & Content
console.log('\n--- 3. Core Statistics & Episode Verification ---');
const enContent = fs.readFileSync(path.join(rootDir, 'insights/podcast.html'), 'utf8');
const faContent = fs.readFileSync(path.join(rootDir, 'fa/insights/podcast.html'), 'utf8');

// Key metrics
assert(enContent.includes('24'), '[English] Contains 24 episodes metric');
assert(enContent.includes('2–3') || enContent.includes('2&ndash;3'), '[English] Contains 2–3 episodes/mo metric');
assert(enContent.includes('30–50') || enContent.includes('30&ndash;50'), '[English] Contains 30–50 min/ep metric');

assert(faContent.includes('۲۴') || faContent.includes('24'), '[Persian] Contains 24 episodes metric');
assert(faContent.includes('۲–۳') || faContent.includes('۲&ndash;۳') || faContent.includes('۲ الی ۳'), '[Persian] Contains 2–3 episodes/mo metric');
assert(faContent.includes('۳۰–۵۰') || faContent.includes('۳۰&ndash;۵۰') || faContent.includes('۳۰ الی ۵۰'), '[Persian] Contains 30–50 min/ep metric');

// 4. 24 Episodes in Catalogue
console.log('\n--- 4. Episode Catalogue Verification ---');
for (const f of files) {
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const episodeSection = doc.querySelector('#episode-list');
  const episodeRows = episodeSection ? episodeSection.querySelectorAll('[role="listitem"]') : [];

  assert(episodeRows.length === 24, `[${f.label}] Has exactly 24 episode catalogue items (found ${episodeRows.length})`);
}

// 5. Latest 3 Episodes
console.log('\n--- 5. Latest Episodes Verification ---');
for (const f of files) {
  const content = fs.readFileSync(path.join(rootDir, f.orig), 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const latestSection = doc.querySelector('#latest-episodes');
  const articles = latestSection ? latestSection.querySelectorAll('article') : [];

  assert(articles.length === 3, `[${f.label}] Has exactly 3 featured latest episodes (found ${articles.length})`);
}

// 6. FAQ Accordion Checks
console.log('\n--- 6. FAQ Accordion Details / Summary Elements ---');
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
    assert(othersClosed, `[${f.label}] Remaining 7 FAQ items start closed`);
  }
}

// 7. Global Header & Navigation Architecture
console.log('\n--- 7. Header Navigation & Language Switcher Rules ---');
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
  const mobileDropdowns = doc.querySelectorAll('#mobile-menu .mobile-dropdown-menu, #mobile-menu [id$="-submenu"]');
  let allHidden = true;
  mobileDropdowns.forEach(dd => {
    if (!dd.classList.contains('hidden')) allHidden = false;
  });
  assert(allHidden, `[${f.label}] All mobile dropdown submenus have "hidden" class on initial load`);

  // Mobile toggles start aria-expanded="false"
  const mobileToggles = doc.querySelectorAll('#mobile-menu .mobile-accordion-toggle, #mobile-menu .mobile-dropdown-toggle');
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

// 8. Structured Data (JSON-LD) Verification
console.log('\n--- 8. Structured Data (JSON-LD) Verification ---');
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
  assert(types.includes('CollectionPage'), `[${f.label}] Includes CollectionPage schema`);
  assert(types.includes('FAQPage'), `[${f.label}] Includes FAQPage schema`);
  assert(types.includes('WebPage'), `[${f.label}] Includes WebPage schema`);
}

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} passed, ${failed} failed.`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL PODCAST VERIFICATION TESTS PASSED SUCCESSFULLY!\n');
}

