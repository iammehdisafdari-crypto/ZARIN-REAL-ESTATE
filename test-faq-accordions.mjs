import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';
import { initFaqAccordion } from './scripts/nav.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

console.log('================================================================');
console.log('ZARIN FAQ ACCORDION VERIFICATION SUITE');
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

// All 20 FAQ pages across the site
const faqPages = [
  { name: 'Homepage (EN)', file: 'index.html', lang: 'en', dir: 'ltr' },
  { name: 'Homepage (FA)', file: 'fa/index.html', lang: 'fa', dir: 'rtl' },
  { name: 'Services (EN)', file: 'services.html', lang: 'en', dir: 'ltr' },
  { name: 'Services (FA)', file: 'fa/services.html', lang: 'fa', dir: 'rtl' },
  { name: 'Properties (EN)', file: 'properties.html', lang: 'en', dir: 'ltr' },
  { name: 'Properties (FA)', file: 'fa/properties.html', lang: 'fa', dir: 'rtl' },
  { name: 'Properties For Sale (EN)', file: 'properties-for-sale.html', lang: 'en', dir: 'ltr' },
  { name: 'Properties For Sale (FA)', file: 'fa/properties-for-sale.html', lang: 'fa', dir: 'rtl' },
  { name: 'Off-Plan (EN)', file: 'off-plan.html', lang: 'en', dir: 'ltr' },
  { name: 'Off-Plan (FA)', file: 'fa/off-plan.html', lang: 'fa', dir: 'rtl' },
  { name: 'Private Office (EN)', file: 'private-office.html', lang: 'en', dir: 'ltr' },
  { name: 'Private Office (FA)', file: 'fa/private-office.html', lang: 'fa', dir: 'rtl' },
  { name: 'Visas (EN)', file: 'visas.html', lang: 'en', dir: 'ltr' },
  { name: 'Visas (FA)', file: 'fa/visas.html', lang: 'fa', dir: 'rtl' },
  { name: 'Heritage (EN)', file: 'heritage.html', lang: 'en', dir: 'ltr' },
  { name: 'Heritage (FA)', file: 'fa/heritage.html', lang: 'fa', dir: 'rtl' },
  { name: 'Insights (EN)', file: 'insights.html', lang: 'en', dir: 'ltr' },
  { name: 'Insights (FA)', file: 'fa/insights.html', lang: 'fa', dir: 'rtl' },
  { name: 'Areas (EN)', file: 'areas.html', lang: 'en', dir: 'ltr' },
  { name: 'Areas (FA)', file: 'fa/areas.html', lang: 'fa', dir: 'rtl' },
];

console.log('\n--- 1. Testing FAQ Initialization & WAI-ARIA Markup on All Pages ---');
for (const p of faqPages) {
  const filePath = path.join(rootDir, p.file);
  assert(fs.existsSync(filePath), `File exists: ${p.file}`);

  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  const doc = dom.window.document;

  // Initialize FAQ Accordion on this document
  initFaqAccordion(doc);

  const detailsList = doc.querySelectorAll('details');
  assert(detailsList.length > 0, `[${p.name}] Found ${detailsList.length} FAQ items`);

  detailsList.forEach((detail, idx) => {
    const summary = detail.querySelector('summary');
    assert(summary !== null, `[${p.name}] Item ${idx + 1} has <summary> tag`);

    const panel = detail.querySelector(':scope > .faq-accordion-panel');
    assert(panel !== null, `[${p.name}] Item ${idx + 1} has .faq-accordion-panel wrapper`);

    const content = panel ? panel.querySelector(':scope > .faq-accordion-content') : null;
    assert(content !== null, `[${p.name}] Item ${idx + 1} has .faq-accordion-content wrapper`);

    assert(summary && summary.getAttribute('aria-expanded') === 'false', `[${p.name}] Item ${idx + 1} aria-expanded="false" initially`);
    assert(summary && summary.hasAttribute('aria-controls'), `[${p.name}] Item ${idx + 1} summary has aria-controls`);

    const controlsId = summary ? summary.getAttribute('aria-controls') : null;
    assert(panel && panel.id === controlsId, `[${p.name}] Item ${idx + 1} panel.id matches aria-controls (${controlsId})`);
    assert(panel && panel.getAttribute('role') === 'region', `[${p.name}] Item ${idx + 1} panel has role="region"`);
    assert(panel && panel.getAttribute('aria-labelledby') === summary.id, `[${p.name}] Item ${idx + 1} panel aria-labelledby matches summary.id`);
  });
}

console.log('\n--- 2. Testing Open, Single-Open, and Close Interactions ---');
for (const p of [faqPages[0], faqPages[1], faqPages[2], faqPages[3]]) {
  const filePath = path.join(rootDir, p.file);
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  const doc = dom.window.document;

  initFaqAccordion(doc);

  const detailsList = doc.querySelectorAll('details');
  const summaries = doc.querySelectorAll('summary');

  // Test Click Item 1 to open
  summaries[0].dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));

  assert(detailsList[0].hasAttribute('open'), `[${p.name}] Item 1 has [open] attribute after click`);
  assert(detailsList[0].classList.contains('is-open'), `[${p.name}] Item 1 has .is-open class after click`);
  assert(summaries[0].getAttribute('aria-expanded') === 'true', `[${p.name}] Item 1 aria-expanded="true" after click`);

  // Test Single-Open Behavior: Click Item 2 to open while Item 1 is open
  summaries[1].dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));

  assert(detailsList[1].hasAttribute('open'), `[${p.name}] Item 2 has [open] attribute after click`);
  assert(detailsList[1].classList.contains('is-open'), `[${p.name}] Item 2 has .is-open class`);
  assert(summaries[1].getAttribute('aria-expanded') === 'true', `[${p.name}] Item 2 aria-expanded="true"`);

  // Item 1 should now be transitioning closed
  assert(summaries[0].getAttribute('aria-expanded') === 'false', `[${p.name}] Item 1 aria-expanded reverted to "false"`);
  assert(detailsList[0].classList.contains('is-closing'), `[${p.name}] Item 1 is transitioning closed (.is-closing)`);

  // Trigger transitionend on Item 1's panel to complete closing
  const panel1 = detailsList[0].querySelector('.faq-accordion-panel');
  panel1.dispatchEvent(new dom.window.Event('transitionend'));

  assert(!detailsList[0].hasAttribute('open'), `[${p.name}] Item 1 [open] removed after closing transition`);
  assert(!detailsList[0].classList.contains('is-closing'), `[${p.name}] Item 1 .is-closing cleared`);

  // Test Self-Closing: Click Item 2 again to close
  summaries[1].dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  assert(summaries[1].getAttribute('aria-expanded') === 'false', `[${p.name}] Item 2 aria-expanded="false" after self-close click`);
  assert(detailsList[1].classList.contains('is-closing'), `[${p.name}] Item 2 is transitioning closed`);

  const panel2 = detailsList[1].querySelector('.faq-accordion-panel');
  panel2.dispatchEvent(new dom.window.Event('transitionend'));
  assert(!detailsList[1].hasAttribute('open'), `[${p.name}] Item 2 [open] removed after self-closing transition`);
}

console.log('\n--- 3. Testing Keyboard Accessibility (Enter & Space) ---');
{
  const filePath = path.join(rootDir, 'visas.html');
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  const doc = dom.window.document;

  initFaqAccordion(doc);

  const detailsList = doc.querySelectorAll('details');
  const summaries = doc.querySelectorAll('summary');

  // Spacebar test
  summaries[0].dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));
  assert(detailsList[0].hasAttribute('open'), '[Keyboard] Space key opens FAQ item');
  assert(summaries[0].getAttribute('aria-expanded') === 'true', '[Keyboard] Space key sets aria-expanded="true"');

  // Spacebar test close
  summaries[0].dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));
  assert(summaries[0].getAttribute('aria-expanded') === 'false', '[Keyboard] Space key initiates close and sets aria-expanded="false"');

  // Enter key test (native summary dispatches click)
  summaries[1].dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  assert(detailsList[1].hasAttribute('open'), '[Keyboard] Enter/Click opens FAQ item');
  assert(summaries[1].getAttribute('aria-expanded') === 'true', '[Keyboard] Enter/Click sets aria-expanded="true"');
}

console.log('\n--- 4. Testing CSS Stylesheet Tokens & Prefers-Reduced-Motion ---');
{
  const cssPath = path.join(rootDir, 'styles/main.css');
  assert(fs.existsSync(cssPath), 'styles/main.css exists');
  const css = fs.readFileSync(cssPath, 'utf8');

  assert(css.includes('.faq-accordion-panel'), 'main.css contains .faq-accordion-panel');
  assert(css.includes('grid-template-rows: 0fr'), 'main.css specifies grid-template-rows: 0fr for closed state');
  assert(css.includes('grid-template-rows: 1fr'), 'main.css specifies grid-template-rows: 1fr for open state');
  assert(css.includes('.faq-accordion-content'), 'main.css contains .faq-accordion-content');
  assert(css.includes('opacity: 0'), 'main.css specifies opacity: 0 for closed content');
  assert(css.includes('opacity: 1'), 'main.css specifies opacity: 1 for open content');
  assert(css.includes('transform: rotate(45deg)'), 'main.css animates .faq-icon to 45deg');
  assert(css.includes('@media (prefers-reduced-motion: reduce)'), 'main.css contains prefers-reduced-motion media query');
  assert(css.includes('transition: none !important'), 'main.css disables transitions under reduced motion');
}

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} passed, ${failed} failed.`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL FAQ ACCORDION VERIFICATION TESTS PASSED!\n');
}
