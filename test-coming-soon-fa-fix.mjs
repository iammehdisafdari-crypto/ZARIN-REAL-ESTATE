import fs from 'fs';
import { JSDOM } from 'jsdom';

console.log('--- RUNNING COMING SOON PERSIAN FIX VERIFICATION SUITE ---');

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

// 1. Inspect fa/off-plan/coming-soon.html and fa/off-plan/coming-soon/index.html
const targetFiles = [
  'fa/off-plan/coming-soon.html',
  'fa/off-plan/coming-soon/index.html'
];

for (const filePath of targetFiles) {
  assert(fs.existsSync(filePath), `File exists: ${filePath}`);
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // A. Typography Verification
  assert(doc.documentElement.getAttribute('lang') === 'fa', `${filePath}: html lang is "fa"`);
  assert(doc.documentElement.getAttribute('dir') === 'rtl', `${filePath}: html dir is "rtl"`);

  // Check font links in head
  const fontLink = doc.querySelector('link[href*="Vazirmatn"]');
  assert(fontLink !== null, `${filePath}: Vazirmatn font is loaded in <head>`);

  // Zero font-serif occurrences
  const serifElements = doc.querySelectorAll('.font-serif');
  assert(serifElements.length === 0, `${filePath}: Exactly 0 elements with .font-serif (found: ${serifElements.length})`);
  assert(!html.includes('font-serif'), `${filePath}: Raw HTML contains zero occurrences of "font-serif"`);

  // Headings verification
  const h1 = doc.querySelector('h1#hero-headline');
  assert(h1 !== null, `${filePath}: H1 element exists`);
  assert(h1.classList.contains('font-sans') && h1.classList.contains('font-extrabold'), `${filePath}: H1 uses font-sans font-extrabold`);

  const h2s = doc.querySelectorAll('h2');
  assert(h2s.length >= 4, `${filePath}: Contains at least 4 H2 elements`);
  h2s.forEach((h2, idx) => {
    assert(h2.classList.contains('font-bold'), `${filePath}: H2 #${idx + 1} uses font-bold`);
  });

  const h3s = doc.querySelectorAll('h3');
  assert(h3s.length >= 10, `${filePath}: Contains at least 10 H3 elements`);
  h3s.forEach((h3, idx) => {
    assert(h3.classList.contains('font-bold'), `${filePath}: H3 #${idx + 1} uses font-bold`);
  });

  const summaries = doc.querySelectorAll('details summary');
  assert(summaries.length === 8, `${filePath}: Contains 8 FAQ summary elements`);
  summaries.forEach((sum, idx) => {
    assert(sum.classList.contains('font-semibold') && sum.classList.contains('font-sans'), `${filePath}: Summary #${idx + 1} uses font-sans font-semibold`);
  });

  // B. WhatsApp Chatbot Complete Absence
  assert(!html.includes('FLOATING WHATSAPP'), `${filePath}: Zero "FLOATING WHATSAPP" comments or blocks`);
  assert(!html.includes('bg-[#25D366]'), `${filePath}: Zero WhatsApp green button styles (bg-[#25D366])`);
  assert(!html.includes('مشاوره سریع واتساپ'), `${filePath}: Zero floating chatbot label "مشاوره سریع واتساپ"`);

  const floatingButtons = doc.querySelectorAll('.fixed.bottom-6, [class*="fixed bottom-"]');
  assert(floatingButtons.length === 0, `${filePath}: Zero fixed/floating action buttons on page`);

  // C. Header Language Selector Hidden (Global Rule)
  const header = doc.querySelector('#site-header');
  assert(header !== null, `${filePath}: #site-header exists`);
  const body = doc.body;
  assert(!body.classList.contains('page-home') && !body.classList.contains('home-page') && body.dataset.page !== 'home', `${filePath}: body does NOT have home markers`);
}

// 2. Cross-Page Parity with Reference Pages
const refPages = ['fa/properties.html', 'fa/off-plan.html'];
for (const refPath of refPages) {
  const refHtml = fs.readFileSync(refPath, 'utf8');
  assert(refHtml.includes('Vazirmatn'), `${refPath} uses Vazirmatn font`);
  assert(!refHtml.includes('font-serif'), `${refPath} does not use font-serif on Persian text`);
}

// 3. Stylesheet RTL Typography Rule in main.css
const mainCss = fs.readFileSync('styles/main.css', 'utf8');
assert(mainCss.includes('[dir="rtl"] .font-serif') && mainCss.includes('"Vazirmatn"'), 'styles/main.css maps [dir="rtl"] .font-serif to Vazirmatn');

console.log(`\nTEST RESULTS: ${passed} passed, ${failed} failed.`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL COMING SOON PERSIAN FIX TESTS PASSED PERFECTLY!');
}

