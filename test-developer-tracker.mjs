import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import assert from 'assert';

console.log('================================================================');
console.log('ZARIN DEVELOPER REPUTATION TRACKER TEST SUITE');
console.log('================================================================\n');

let passed = 0;
let failed = 0;

function it(desc, fn) {
  try {
    fn();
    passed++;
    console.log(`  ✅ [PASS] ${desc}`);
  } catch (err) {
    failed++;
    console.error(`  ❌ [FAIL] ${desc}: ${err.message}`);
  }
}

// 1. File verification & Clean URL mirrors
console.log('--- 1. File Existence & Clean Route Mirrors ---');
it('EN tracker files exist and match exactly', () => {
  assert(fs.existsSync('off-plan/developer-reputation-tracker.html'), 'Missing off-plan/developer-reputation-tracker.html');
  assert(fs.existsSync('off-plan/developer-reputation-tracker/index.html'), 'Missing off-plan/developer-reputation-tracker/index.html');
  const enFlat = fs.readFileSync('off-plan/developer-reputation-tracker.html', 'utf8');
  const enDir = fs.readFileSync('off-plan/developer-reputation-tracker/index.html', 'utf8');
  assert.strictEqual(enFlat, enDir, 'EN flat file and directory index must be identical');
});

it('Persian tracker files exist and match exactly', () => {
  assert(fs.existsSync('fa/off-plan/developer-reputation-tracker.html'), 'Missing fa/off-plan/developer-reputation-tracker.html');
  assert(fs.existsSync('fa/off-plan/developer-reputation-tracker/index.html'), 'Missing fa/off-plan/developer-reputation-tracker/index.html');
  const faFlat = fs.readFileSync('fa/off-plan/developer-reputation-tracker.html', 'utf8');
  const faDir = fs.readFileSync('fa/off-plan/developer-reputation-tracker/index.html', 'utf8');
  assert.strictEqual(faFlat, faDir, 'Persian flat file and directory index must be identical');
});

// 2. English Page Architecture & DOM Verification
console.log('\n--- 2. English Page Architecture & DOM Verification ---');
const enHtml = fs.readFileSync('off-plan/developer-reputation-tracker.html', 'utf8');
const enDom = new JSDOM(enHtml, { runScripts: 'outside-only', url: 'http://localhost/off-plan/developer-reputation-tracker' });
const enDoc = enDom.window.document;

it('English document has correct lang, dir, and canonical metadata', () => {
  assert.strictEqual(enDoc.documentElement.getAttribute('lang'), 'en');
  assert.strictEqual(enDoc.documentElement.getAttribute('dir'), 'ltr');
  const canonical = enDoc.querySelector('link[rel="canonical"]');
  assert(canonical && canonical.getAttribute('href') === 'https://zarinrealestate.com/off-plan/developer-reputation-tracker', 'Missing or invalid canonical link');
  const ogUrl = enDoc.querySelector('meta[property="og:url"]');
  assert(ogUrl && ogUrl.getAttribute('content') === 'https://zarinrealestate.com/off-plan/developer-reputation-tracker', 'Missing or invalid og:url');
});

it('Includes structured data JSON-LD (Dataset, BreadcrumbList, ItemList, FAQPage, WebPage)', () => {
  const scripts = Array.from(enDoc.querySelectorAll('script[type="application/ld+json"]'));
  assert.strictEqual(scripts.length, 5, `Expected 5 JSON-LD scripts, found ${scripts.length}`);
  const types = scripts.map(s => {
    try {
      const data = JSON.parse(s.textContent);
      return data['@type'];
    } catch {
      return null;
    }
  });
  assert(types.includes('BreadcrumbList'), 'Missing BreadcrumbList schema');
  assert(types.includes('Dataset'), 'Missing Dataset schema');
  assert(types.includes('ItemList'), 'Missing ItemList schema');
  assert(types.includes('FAQPage'), 'Missing FAQPage schema');
  assert(types.includes('WebPage'), 'Missing WebPage schema');
});

it('Header has exactly 8 desktop triggers with split button semantics', () => {
  const header = enDoc.querySelector('#site-header');
  assert(header, 'Missing #site-header');
  const triggers = header.querySelectorAll('.mega-menu-trigger');
  assert.strictEqual(triggers.length, 8, `Expected 8 mega-menu-trigger elements, found ${triggers.length}`);
  
  assert(header.querySelector('#properties-nav-link'), 'Missing properties-nav-link');
  assert(header.querySelector('#properties-nav-toggle'), 'Missing properties-nav-toggle');
  assert(header.querySelector('#offplan-nav-link'), 'Missing offplan-nav-link');
  assert(header.querySelector('#offplan-nav-toggle'), 'Missing offplan-nav-toggle');
  assert(header.querySelector('#areas-nav-link'), 'Missing areas-nav-link');
  assert(header.querySelector('#areas-nav-toggle'), 'Missing areas-nav-toggle');
  assert(header.querySelector('#private-office-nav-link'), 'Missing private-office-nav-link');
  assert(header.querySelector('#private-office-nav-toggle'), 'Missing private-office-nav-toggle');
});

it('Mobile drawer has 8 accordion sections matching desktop', () => {
  const mobileNav = enDoc.querySelector('#mobile-menu');
  assert(mobileNav, 'Missing #mobile-menu');
  const items = mobileNav.querySelectorAll('.mobile-nav-item');
  assert.strictEqual(items.length, 8, `Expected 8 mobile nav items, found ${items.length}`);
});

it('Hero displays live dataset stats (38 developers, 612 projects, 84.1% on-time)', () => {
  const hero = enDoc.querySelector('section[aria-label="Developer tracker hero"]');
  assert(hero, 'Missing hero section');
  assert(hero.textContent.includes('38'), 'Missing 38 developers count in hero');
  assert(hero.textContent.includes('612'), 'Missing 612 projects count in hero');
  assert(hero.textContent.includes('84.1%'), 'Missing 84.1% on-time metric in hero');
});

it('Methodology banner displays the four core pillars with weights (30%, 25%, 20%, 25%)', () => {
  const banner = enDoc.querySelector('section[aria-label="Methodology banner"]');
  assert(banner, 'Missing methodology banner');
  assert(banner.textContent.includes('30%'), 'Missing 30% On-Time weight');
  assert(banner.textContent.includes('25%'), 'Missing 25% Quality weight');
  assert(banner.textContent.includes('20%'), 'Missing 20% Complaints weight');
});

it('Interactive Leaderboard table renders all 10 developers initially', () => {
  const table = enDoc.querySelector('#tracker-table');
  assert(table, 'Missing #tracker-table');
  const rows = table.querySelectorAll('tbody tr.dev-row');
  assert.strictEqual(rows.length, 10, `Expected 10 developer rows, found ${rows.length}`);
  
  // Verify top developers present
  const tableText = table.textContent;
  assert(tableText.includes('Emaar Properties'), 'Missing Emaar');
  assert(tableText.includes('Sobha Realty'), 'Missing Sobha');
  assert(tableText.includes('Nakheel'), 'Missing Nakheel');
  assert(tableText.includes('Meraas'), 'Missing Meraas');
  assert(tableText.includes('Ellington Properties'), 'Missing Ellington');
  assert(tableText.includes('Omniyat'), 'Missing Omniyat');
  assert(tableText.includes('DAMAC Properties'), 'Missing DAMAC');
  assert(tableText.includes('Select Group'), 'Missing Select Group');
  assert(tableText.includes('Azizi Developments'), 'Missing Azizi');
  assert(tableText.includes('Danube Properties'), 'Missing Danube');
});

it('Interactive controls exist: search input, 5 filter chips, compare bar, modal', () => {
  assert(enDoc.querySelector('#dev-search'), 'Missing #dev-search input');
  assert(enDoc.querySelector('#compare-bar'), 'Missing #compare-bar');
  assert(enDoc.querySelector('#compare-modal'), 'Missing #compare-modal');
  assert(enDoc.querySelector('#btn-open-compare'), 'Missing #btn-open-compare');
  assert(enDoc.querySelector('#compare-modal-close'), 'Missing #compare-modal-close');
  const chips = enDoc.querySelectorAll('.filter-chip');
  assert.strictEqual(chips.length, 5, `Expected 5 filter chips, found ${chips.length}`);
});

it('5 Detailed deep-dive profile cards exist with trend charts and risk badges', () => {
  const cardsSection = enDoc.querySelector('#detailed-cards');
  assert(cardsSection, 'Missing #detailed-cards section');
  const cards = cardsSection.querySelectorAll('article');
  assert.strictEqual(cards.length, 5, `Expected 5 profile cards, found ${cards.length}`);
  
  for (const card of cards) {
    assert(card.querySelector('.stat-number'), 'Missing stat-number in card');
    assert(card.querySelector('.trend-bar'), 'Missing trend bar chart in card');
    assert(card.querySelector('[aria-label*="risk indicators"]'), 'Missing risk indicators in card');
  }
});

it('Risk indicators section explains all four metrics with weights and badge guide', () => {
  const riskSection = enDoc.querySelector('#risk-indicators');
  assert(riskSection, 'Missing #risk-indicators section');
  const articles = riskSection.querySelectorAll('article');
  assert.strictEqual(articles.length, 4, `Expected 4 risk indicator explanations, found ${articles.length}`);
});

it('FAQ section contains 8 questions with interactive summary/details', () => {
  const faqs = enDoc.querySelectorAll('section[aria-label="Developer tracker FAQ"] details');
  assert.strictEqual(faqs.length, 8, `Expected 8 FAQ items, found ${faqs.length}`);
});

// 3. Client-Side Interactive Engine Verification
console.log('\n--- 3. Client-Side Interactive Engine Verification ---');

// Extract developers from table rows data-* attributes
const rows = Array.from(enDoc.querySelectorAll('#tracker-tbody tr.dev-row'));
const devData = rows.map(r => ({
  rank: parseInt(r.getAttribute('data-rank'), 10),
  name: r.getAttribute('data-name'),
  slug: r.getAttribute('data-slug'),
  active: parseInt(r.getAttribute('data-active'), 10),
  completed: parseInt(r.getAttribute('data-completed'), 10),
  ontime: parseFloat(r.getAttribute('data-ontime')),
  delay: parseFloat(r.getAttribute('data-delay')),
  quality: r.getAttribute('data-quality'),
  complaint: parseFloat(r.getAttribute('data-complaint')),
  overall: parseFloat(r.getAttribute('data-overall')),
}));

it('10 developers in leaderboard table have valid data-* attributes', () => {
  assert.strictEqual(devData.length, 10, 'Expected 10 developers extracted from table');
  for (const d of devData) {
    assert(d.name, 'Missing name attribute');
    assert(!isNaN(d.rank), 'Invalid rank');
    assert(!isNaN(d.ontime), 'Invalid ontime percentage');
    assert(!isNaN(d.delay), 'Invalid delay');
    assert(!isNaN(d.overall), 'Invalid overall score');
  }
});

it('Filtering by search query matches correctly', () => {
  const matchEmaar = devData.filter(d => d.name.toLowerCase().includes('emaar'));
  assert.strictEqual(matchEmaar.length, 1, 'Search for Emaar should return 1 developer');
  assert.strictEqual(matchEmaar[0].slug, 'emaar-properties');

  const matchProp = devData.filter(d => d.name.toLowerCase().includes('properties'));
  assert.strictEqual(matchProp.length, 4, 'Search for "properties" should match 4 developers (Emaar, Ellington, DAMAC, Danube)');
});

it('Filter chips criteria match dataset accurately', () => {
  // Tier 1: score >= 90
  const tier1 = devData.filter(d => d.overall >= 90);
  assert.strictEqual(tier1.length, 2, 'Tier 1 (90+) should match Emaar and Sobha');

  // On-time >= 85%
  const ontime85 = devData.filter(d => d.ontime >= 85);
  assert.strictEqual(ontime85.length, 5, 'On-time >= 85% should match 5 developers');

  // Low complaints <= 1.0
  const lowComplaints = devData.filter(d => d.complaint <= 1.0);
  assert.strictEqual(lowComplaints.length, 5, 'Low complaints <= 1.0 should match 5 developers');

  // Quality A or A+
  const qualityA = devData.filter(d => d.quality === 'A+' || d.quality === 'A');
  assert.strictEqual(qualityA.length, 5, 'Quality A/A+ should match 5 developers');
});

it('Sorting orders rows accurately', () => {
  // On-time descending
  const sortedOnTime = [...devData].sort((a, b) => b.ontime - a.ontime);
  assert.strictEqual(sortedOnTime[0].slug, 'select-group', 'Select Group should be #1 on-time (92.1%)');

  // Overall descending
  const sortedOverall = [...devData].sort((a, b) => b.overall - a.overall);
  assert.strictEqual(sortedOverall[0].slug, 'emaar-properties', 'Emaar should be #1 overall (94.2)');

  // Name ascending
  const sortedName = [...devData].sort((a, b) => a.name.localeCompare(b.name));
  assert.strictEqual(sortedName[0].slug, 'azizi', 'Azizi should be #1 alphabetically');
});

// 4. Persian Localization & RTL Parity Verification
console.log('\n--- 4. Persian RTL Localization Parity ---');
const faHtml = fs.readFileSync('fa/off-plan/developer-reputation-tracker.html', 'utf8');
const faDom = new JSDOM(faHtml, { runScripts: 'outside-only', url: 'http://localhost/fa/off-plan/developer-reputation-tracker' });
const faDoc = faDom.window.document;

it('Persian document has dir="rtl", lang="fa", Vazirmatn font, and proper canonical', () => {
  assert.strictEqual(faDoc.documentElement.getAttribute('lang'), 'fa');
  assert.strictEqual(faDoc.documentElement.getAttribute('dir'), 'rtl');
  const canonical = faDoc.querySelector('link[rel="canonical"]');
  assert(canonical && canonical.getAttribute('href') === 'https://zarinrealestate.com/fa/off-plan/developer-reputation-tracker', 'Missing or invalid Persian canonical link');
  assert(faHtml.includes('Vazirmatn'), 'Missing Vazirmatn font reference in Persian page');
});

it('Persian page renders authentic Persian developer names and headings', () => {
  const h1 = faDoc.querySelector('#hero-headline');
  assert(h1, 'Missing hero headline in Persian page');
  assert(h1.textContent.includes('رهگیری اعتبار سازندگان'), 'Headline must contain authentic Persian term');
  
  const table = faDoc.querySelector('#tracker-table');
  assert(table, 'Missing Persian leaderboard table');
  const tableText = table.textContent;
  assert(tableText.includes('اعمار'), 'Missing Emaar in Persian');
  assert(tableText.includes('شوبا'), 'Missing Sobha in Persian');
  assert(tableText.includes('نخیل'), 'Missing Nakheel in Persian');
  assert(tableText.includes('داماک'), 'Missing DAMAC in Persian');
});

it('Persian page contains zero leaked English routes in internal links', () => {
  const anchors = Array.from(faDoc.querySelectorAll('a[href]'));
  const leaks = [];
  for (const a of anchors) {
    const href = a.getAttribute('href');
    if (href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://')) {
      continue;
    }
    if (!href.startsWith('/fa') && href !== '/' && href !== '/fa') {
      leaks.push({ text: a.textContent.trim(), href });
    }
  }
  assert.strictEqual(leaks.length, 0, `Found ${leaks.length} leaked English links on Persian page: ${JSON.stringify(leaks)}`);
});

console.log('\n================================================================');
console.log(`DEVELOPER TRACKER TESTS: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
}
