import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

console.log('--- RUNNING GLOBAL HEADER LANGUAGE SELECTOR TEST SUITE ---');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  PASS: ${message}`);
    passed++;
  } else {
    console.error(`  FAIL: ${message}`);
    failed++;
  }
}

// 1. Verify CSS rules in styles/main.css
const css = fs.readFileSync('styles/main.css', 'utf8');

assert(
  css.includes('#site-header .lang-switch,') &&
  css.includes('#site-header .mobile-lang-container') &&
  css.includes('display: none !important;'),
  'styles/main.css has base rule hiding .lang-switch and .mobile-lang-container by default'
);

assert(
  css.includes('body.page-home #site-header .lang-switch') &&
  css.includes('display: inline-flex !important;'),
  'styles/main.css unhides .lang-switch on desktop for page-home'
);

assert(
  css.includes('body.page-home #site-header .mobile-lang-container') &&
  css.includes('display: block !important;'),
  'styles/main.css unhides .mobile-lang-container on mobile for page-home'
);

// 2. Verify homepage vs internal page HTML classes
const homeEn = fs.readFileSync('index.html', 'utf8');
const homeFa = fs.readFileSync('fa/index.html', 'utf8');

assert(homeEn.includes('class="page-home home-page') || homeEn.includes('data-page="home"'), 'index.html has home page markers');
assert(homeFa.includes('class="page-home home-page') || homeFa.includes('data-page="home"'), 'fa/index.html has home page markers');

const internalTestPages = [
  'properties.html',
  'fa/properties.html',
  'trophy-residences.html',
  'fa/trophy-residences.html',
  'properties-for-rent.html',
  'fa/properties-for-rent.html',
  'off-plan.html',
  'fa/off-plan.html',
  'off-plan/developer-reputation-tracker.html',
  'fa/off-plan/developer-reputation-tracker.html',
  'off-plan/by-developer.html',
  'fa/off-plan/by-developer.html',
  'off-plan/investment-guide.html',
  'fa/off-plan/investment-guide.html',
  'services/buying.html',
  'fa/services/buying.html',
  'services/valuation.html',
  'fa/services/valuation.html',
  'consultation.html',
  'fa/consultation.html'
];

for (const p of internalTestPages) {
  const content = fs.readFileSync(p, 'utf8');
  assert(!content.includes('page-home') && !content.includes('home-page') && !content.includes('data-page="home"'), `${p} does NOT contain home-page markers`);

  // Check header elements
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const header = doc.querySelector('#site-header');
  assert(header !== null, `${p} has #site-header`);

  // Verify all language switchers in header have standard classes governed by CSS
  const langSwitches = header.querySelectorAll('.lang-switch');
  const mobileLangContainers = header.querySelectorAll('.mobile-lang-container');
  assert(langSwitches.length <= 1, `${p} has at most 1 .lang-switch`);
  assert(mobileLangContainers.length <= 1, `${p} has at most 1 .mobile-lang-container`);

  // Verify NO non-standard unstyled language triggers exist in header
  const allElements = header.querySelectorAll('*');
  let nonStandardCount = 0;
  for (const el of allElements) {
    const aria = (el.getAttribute('aria-label') || '').toLowerCase();
    const text = el.textContent.trim();
    const isLangRelated = 
      aria.includes('lang') || 
      aria.includes('زبان') || 
      text === 'EN' || 
      text === 'FA' || 
      text === 'فارسی';

    if (isLangRelated) {
      const isStandardLangSwitch = el.classList.contains('lang-switch') || el.closest('.lang-switch');
      const isStandardMobileLang = el.classList.contains('mobile-lang-container') || el.closest('.mobile-lang-container');
      if (!isStandardLangSwitch && !isStandardMobileLang) {
        nonStandardCount++;
      }
    }
  }
  assert(nonStandardCount === 0, `${p} has 0 non-standard language elements in header`);
}

// 3. Test nav.js initHeaderLanguageVisibility dynamic behavior
import { initHeaderLanguageVisibility } from './scripts/nav.js';

const testDomEnHome = new JSDOM('<!DOCTYPE html><html><body><header id="site-header"></header></body></html>', {
  url: 'https://zarinrealestate.com/'
});
initHeaderLanguageVisibility(testDomEnHome.window.document);
assert(
  testDomEnHome.window.document.body.classList.contains('page-home') &&
  testDomEnHome.window.document.body.dataset.page === 'home',
  'initHeaderLanguageVisibility adds page-home for root /'
);

const testDomFaHome = new JSDOM('<!DOCTYPE html><html><body><header id="site-header"></header></body></html>', {
  url: 'https://zarinrealestate.com/fa/'
});
initHeaderLanguageVisibility(testDomFaHome.window.document);
assert(
  testDomFaHome.window.document.body.classList.contains('page-home') &&
  testDomFaHome.window.document.body.dataset.page === 'home',
  'initHeaderLanguageVisibility adds page-home for /fa/'
);

const testDomInternal = new JSDOM('<!DOCTYPE html><body class="page-home home-page" data-page="home"><header id="site-header"></header></body></html>', {
  url: 'https://zarinrealestate.com/properties'
});
initHeaderLanguageVisibility(testDomInternal.window.document);
assert(
  !testDomInternal.window.document.body.classList.contains('page-home') &&
  !testDomInternal.window.document.body.classList.contains('home-page') &&
  testDomInternal.window.document.body.dataset.page !== 'home',
  'initHeaderLanguageVisibility strips page-home and data-page on internal page /properties'
);

const testDomFaInternal = new JSDOM('<!DOCTYPE html><body class="page-home home-page" data-page="home"><header id="site-header"></header></body></html>', {
  url: 'https://zarinrealestate.com/fa/off-plan/developer-reputation-tracker'
});
initHeaderLanguageVisibility(testDomFaInternal.window.document);
assert(
  !testDomFaInternal.window.document.body.classList.contains('page-home') &&
  !testDomFaInternal.window.document.body.classList.contains('home-page') &&
  testDomFaInternal.window.document.body.dataset.page !== 'home',
  'initHeaderLanguageVisibility strips page-home and data-page on /fa/off-plan/developer-reputation-tracker'
);

console.log(`\nTEST RESULTS: ${passed} passed, ${failed} failed.`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL TESTS PASSED SUCCESSFULLY.');
}
