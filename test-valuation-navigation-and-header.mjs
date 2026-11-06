import fs from 'fs';
import { JSDOM } from 'jsdom';

console.log('=== TEST SUITE: FREE VALUATION (EN & FA) NAVIGATION & HEADER RULES ===');

let passed = 0;
let failed = 0;

function assert(cond, msg) {
  if (cond) {
    console.log(`  ✅ [PASS] ${msg}`);
    passed++;
  } else {
    console.error(`  ❌ [FAIL] ${msg}`);
    failed++;
  }
}

const pages = [
  { file: 'fa/services/valuation.html', lang: 'fa', name: 'Persian Valuation' },
  { file: 'fa/services/valuation/index.html', lang: 'fa', name: 'Persian Valuation Mirror' },
  { file: 'services/valuation.html', lang: 'en', name: 'English Valuation' },
  { file: 'services/valuation/index.html', lang: 'en', name: 'English Valuation Mirror' }
];

for (const { file, lang, name } of pages) {
  console.log(`\n--- Testing ${name} (${file}) ---`);
  assert(fs.existsSync(file), `${file} exists`);
  const html = fs.readFileSync(file, 'utf8');

  // 1. Check stylesheet & scripts
  assert(html.includes('href="/styles/main.css"'), `${name} links /styles/main.css`);
  assert(html.includes('src="/scripts/nav.js"'), `${name} links /scripts/nav.js`);
  assert(html.includes('src="/scripts/i18n.js"'), `${name} links /scripts/i18n.js`);
  assert(!html.includes('mobile-prop-toggle'), `${name} does NOT contain obsolete inline navigation script`);

  // 2. DOM Parsing
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // 3. Header & Language Rule
  const header = doc.getElementById('site-header');
  assert(header !== null, `${name} has #site-header`);

  const body = doc.body;
  assert(!body.classList.contains('page-home'), `${name} body does not have page-home class`);
  assert(!body.classList.contains('home-page'), `${name} body does not have home-page class`);
  assert(body.getAttribute('data-page') !== 'home', `${name} body does not have data-page="home"`);

  const langSwitch = header.querySelector('.lang-switch');
  assert(langSwitch !== null, `${name} contains standard .lang-switch node for CSS to hide`);

  const mobileLang = header.querySelector('.mobile-lang-container');
  assert(mobileLang !== null, `${name} contains standard .mobile-lang-container node for CSS to hide`);

  // 4. Desktop Dropdown Panels
  const panels = doc.querySelectorAll('.mega-menu-panel');
  assert(panels.length >= 4, `${name} contains at least 4 desktop mega-menu panels (found ${panels.length})`);
  panels.forEach((p, idx) => {
    assert(!p.classList.contains('is-open'), `${name} panel #${idx + 1} does NOT start with .is-open`);
  });

  // 5. Mobile Drawer
  const mobileMenu = doc.getElementById('mobile-menu');
  assert(mobileMenu !== null, `${name} has #mobile-menu drawer`);
  assert(!mobileMenu.classList.contains('open'), `${name} mobile drawer does NOT start with .open class`);

  // 6. Mobile Submenus
  const submenus = [
    'mobile-properties-submenu',
    'mobile-offplan-submenu',
    'mobile-areas-submenu',
    'mobile-services-submenu',
    'mobile-insights-submenu',
    'mobile-heritage-submenu'
  ];

  submenus.forEach(id => {
    const el = doc.getElementById(id);
    assert(el !== null, `${name} has #${id}`);
    if (el) {
      assert(el.classList.contains('hidden'), `${name} #${id} has class 'hidden' (closed by default)`);
    }
  });

  // 7. Mobile Accordion Toggles
  const toggles = [
    'mobile-properties-toggle',
    'mobile-offplan-toggle',
    'mobile-areas-toggle',
    'mobile-services-toggle',
    'mobile-insights-toggle',
    'mobile-heritage-toggle'
  ];

  toggles.forEach(id => {
    const el = doc.getElementById(id);
    assert(el !== null, `${name} has #${id}`);
    if (el) {
      assert(el.getAttribute('aria-expanded') === 'false', `${name} #${id} starts with aria-expanded="false"`);
    }
  });

  // 8. Functional Elements Preserved
  assert(doc.getElementById('instant-valuation') !== null || html.includes('AREA_DATA'), `${name} preserves instant valuation calculator`);
  assert(doc.getElementById('request-valuation') !== null, `${name} preserves valuation request form`);
}

// 9. CSS Specificity & Rules Validation
console.log('\n--- Checking CSS Rules for Internal Page Language Hiding & Panel Closed States ---');
const css = fs.readFileSync('styles/main.css', 'utf8');

assert(
  css.includes('#site-header .lang-switch,') &&
  css.includes('#site-header .mobile-lang-container,') &&
  css.includes('display: none !important;'),
  'styles/main.css has permanent rule hiding .lang-switch & .mobile-lang-container by default on all pages'
);

assert(
  css.includes('.mega-menu-panel {') &&
  css.includes('opacity: 0;') &&
  css.includes('visibility: hidden;'),
  'styles/main.css has .mega-menu-panel closed by default (opacity: 0; visibility: hidden;)'
);

console.log(`\n================================================================`);
console.log(`TEST RESULTS: ${passed} passed, ${failed} failed.`);
console.log(`================================================================\n`);

if (failed > 0) {
  process.exit(1);
}

