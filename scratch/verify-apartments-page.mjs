import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';
import { initFaqAccordion } from '../scripts/nav.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('Testing apartments-for-sale-in-dubai page...');

const htmlPath = path.join(rootDir, 'apartments-for-sale-in-dubai.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const dom = new JSDOM(html, { runScripts: 'outside-only' });
const doc = dom.window.document;

function assert(condition, msg) {
  if (condition) {
    console.log('  ✅ [PASS] ' + msg);
  } else {
    console.error('  ❌ [FAIL] ' + msg);
    process.exitCode = 1;
  }
}

// 1. Header & Navigation Structure
const desktopNav = doc.querySelector('header nav');
assert(!!desktopNav, 'Header desktop nav exists');

const directTriggers = Array.from(desktopNav.children);
assert(directTriggers.length === 8, 'Desktop nav has 8 direct triggers (found ' + directTriggers.length + ')');

const canonicalRoutes = ['/properties', '/off-plan', '/areas', '/private-office', '/services', '/visas', '/insights', '/heritage'];
canonicalRoutes.forEach(route => {
  const link = desktopNav.querySelector('a[href="' + route + '"]');
  assert(!!link, 'Desktop nav has link to ' + route);
});

const mobileDrawer = doc.querySelector('#mobile-menu');
assert(!!mobileDrawer, 'Mobile drawer #mobile-menu exists');

// 2. Relative Link Audit
const allLinks = Array.from(doc.querySelectorAll('a[href]'));
let invalidRelative = 0;
allLinks.forEach(a => {
  const href = a.getAttribute('href');
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
  if (!href.startsWith('/')) {
    invalidRelative++;
    console.warn('    Warning: non-root link: ' + href);
  }
});
assert(invalidRelative === 0, 'Zero invalid relative links (all root-absolute)');

// 3. FAQ Accordion Compliance
initFaqAccordion(doc);
const details = doc.querySelectorAll('details');
assert(details.length === 8, 'Found 8 FAQ items (found ' + details.length + ')');

details.forEach((det, i) => {
  const sum = det.querySelector('summary');
  const panel = det.querySelector(':scope > .faq-accordion-panel');
  const content = panel ? panel.querySelector(':scope > .faq-accordion-content') : null;
  assert(!!sum, 'Item ' + (i+1) + ' has <summary>');
  assert(!!panel, 'Item ' + (i+1) + ' has .faq-accordion-panel');
  assert(!!content, 'Item ' + (i+1) + ' has .faq-accordion-content');
  assert(sum.getAttribute('aria-expanded') === 'false', 'Item ' + (i+1) + ' aria-expanded="false"');
  assert(panel.id === sum.getAttribute('aria-controls'), 'Item ' + (i+1) + ' panel.id matches aria-controls');
  assert(panel.getAttribute('role') === 'region', 'Item ' + (i+1) + ' panel has role="region"');
});

// 4. Interactive Components Exist
assert(!!doc.getElementById('search-input'), 'Search input exists');
assert(!!doc.getElementById('area-select'), 'Area select exists');
assert(!!doc.getElementById('price-select'), 'Price select exists');
assert(!!doc.getElementById('status-select'), 'Status select exists');
assert(!!doc.getElementById('sort-select'), 'Sort select exists');
assert(!!doc.getElementById('reset-filters-btn'), 'Reset filters button exists');
assert(!!doc.getElementById('results-count'), 'Results counter exists');
assert(!!doc.getElementById('apartment-inquiry-modal'), 'Inquiry modal exists');

const cards = doc.querySelectorAll('.apartment-card');
assert(cards.length === 6, 'Found 6 curated apartment cards (found ' + cards.length + ')');

console.log('Finished testing apartments-for-sale-in-dubai.');
