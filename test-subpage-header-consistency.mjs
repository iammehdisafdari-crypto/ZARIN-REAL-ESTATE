import fs from 'fs';
import { JSDOM } from 'jsdom';
import assert from 'assert';

console.log('================================================================');
console.log('TEST SUITE: SUBPAGE HEADER BEHAVIORAL CONSISTENCY WITH HOMEPAGE');
console.log('================================================================\n');

const navModule = await import('./scripts/nav.js');
const { initNavigation } = navModule;

// Load main.css to verify style rules
const mainCss = fs.readFileSync('styles/main.css', 'utf8');

let totalTests = 0;
let passedTests = 0;

function it(desc, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✅ [PASS] ${desc}`);
  } catch (err) {
    console.error(`  ❌ [FAIL] ${desc}: ${err.message}`);
  }
}

// Check CSS rules in main.css
console.log('--- 1. CSS Hover Bridge & Cursor Semantics in main.css ---');
it('main.css defines 20px ::before hover bridge for .mega-menu-panel', () => {
  assert(mainCss.includes('.mega-menu-panel::before'), 'Missing .mega-menu-panel::before selector');
  assert(mainCss.includes('top: -20px'), 'Missing top: -20px on hover bridge');
  assert(mainCss.includes('height: 20px'), 'Missing height: 20px on hover bridge');
});

it('main.css sets cursor: default on .mega-menu-panel and bridge to prevent non-interactive pointers', () => {
  assert(mainCss.includes('.mega-menu-panel {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  cursor: default;'), 'Missing cursor: default on panel');
});

it('main.css sets cursor: pointer !important on genuine interactive elements only', () => {
  assert(mainCss.includes('.mega-menu-trigger > a'), 'Missing .mega-menu-trigger > a cursor');
  assert(mainCss.includes('.mega-menu-toggle-btn'), 'Missing .mega-menu-toggle-btn cursor');
  assert(mainCss.includes('.mega-menu-panel a'), 'Missing .mega-menu-panel a cursor');
  assert(mainCss.includes('cursor: pointer !important'), 'Missing cursor: pointer !important');
});

const subpagesToTest = [
  { file: 'index.html', name: 'Homepage (Source of Truth)', lang: 'en', dir: 'ltr' },
  { file: 'off-plan.html', name: 'Off-Plan (EN)', lang: 'en', dir: 'ltr' },
  { file: 'apartments-for-sale-in-dubai/index.html', name: 'Apartments (EN)', lang: 'en', dir: 'ltr' },
  { file: 'areas/index.html', name: 'Areas (EN)', lang: 'en', dir: 'ltr' },
  { file: 'fa/index.html', name: 'Homepage (FA Source of Truth)', lang: 'fa', dir: 'rtl' },
  { file: 'fa/off-plan.html', name: 'Off-Plan (FA)', lang: 'fa', dir: 'rtl' },
  { file: 'fa/apartments-for-sale-in-dubai.html', name: 'Apartments (FA)', lang: 'fa', dir: 'rtl' }
];

console.log('\n--- 2. Structural & Interaction Parity Across Subpages ---');

for (const { file, name, lang, dir } of subpagesToTest) {
  const html = fs.readFileSync(file, 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'http://localhost/' });
  const doc = dom.window.document;
  initNavigation(doc);

  const header = doc.querySelector('#site-header');
  assert(header, `Header missing in ${file}`);
  const nav = header.querySelector('nav');
  assert(nav, `Nav missing in ${file}`);
  const triggers = Array.from(nav.children).filter(c => c.classList.contains('mega-menu-trigger') || c.tagName === 'DIV');

  it(`[${name}] Has exactly 8 primary navigation items matching Homepage`, () => {
    assert.strictEqual(triggers.length, 8, `Expected 8 triggers, found ${triggers.length}`);
  });

  it(`[${name}] All primary items have semantic <a> links (no bare unclickable <button> headers)`, () => {
    triggers.forEach((t, idx) => {
      const a = t.querySelector(':scope > a');
      assert(a, `Trigger [${idx}] missing direct <a> link`);
      assert(a.getAttribute('href'), `Trigger [${idx}] <a> link missing href`);
    });
  });

  it(`[${name}] Properties item has split anchor/button trigger controls`, () => {
    const propTrigger = triggers[0];
    const link = propTrigger.querySelector('a#properties-nav-link');
    const toggle = propTrigger.querySelector('button#properties-nav-toggle');
    assert(link, 'Missing a#properties-nav-link');
    assert(toggle, 'Missing button#properties-nav-toggle');
    assert.strictEqual(toggle.getAttribute('aria-expanded'), 'false');
  });

  it(`[${name}] Off-Plan item has split anchor/button trigger controls`, () => {
    const offplanTrigger = triggers[1];
    const link = offplanTrigger.querySelector('a#offplan-nav-link');
    const toggle = offplanTrigger.querySelector('button#offplan-nav-toggle');
    assert(link, 'Missing a#offplan-nav-link');
    assert(toggle, 'Missing button#offplan-nav-toggle');
  });

  it(`[${name}] Hovering Properties trigger opens submenu (.is-open and aria-expanded="true")`, () => {
    const propTrigger = triggers[0];
    const toggle = propTrigger.querySelector('button#properties-nav-toggle');
    propTrigger.dispatchEvent(new dom.window.MouseEvent('mouseenter'));
    assert(propTrigger.classList.contains('is-open'), 'Properties trigger should have .is-open on mouseenter');
    assert.strictEqual(toggle.getAttribute('aria-expanded'), 'true');
  });

  it(`[${name}] Moving pointer to Off-Plan triggers mutual exclusion: Off-Plan opens, Properties closes`, () => {
    const propTrigger = triggers[0];
    const offplanTrigger = triggers[1];
    const propToggle = propTrigger.querySelector('button#properties-nav-toggle');
    const offplanToggle = offplanTrigger.querySelector('button#offplan-nav-toggle');

    offplanTrigger.dispatchEvent(new dom.window.MouseEvent('mouseenter'));
    assert(offplanTrigger.classList.contains('is-open'), 'Off-Plan trigger should be open');
    assert.strictEqual(offplanToggle.getAttribute('aria-expanded'), 'true');
    assert(!propTrigger.classList.contains('is-open'), 'Properties trigger should have closed automatically');
    assert.strictEqual(propToggle.getAttribute('aria-expanded'), 'false');
  });

  it(`[${name}] Moving pointer into submenu panel keeps the menu open`, () => {
    const offplanTrigger = triggers[1];
    const panel = offplanTrigger.querySelector('.mega-menu-panel');
    assert(panel, 'Missing .mega-menu-panel in Off-Plan');
    panel.dispatchEvent(new dom.window.MouseEvent('mouseenter'));
    assert(offplanTrigger.classList.contains('is-open'), 'Off-Plan trigger should remain open inside panel');
  });

  it(`[${name}] Clicking outside closes all mega menus`, () => {
    doc.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    triggers.forEach(t => {
      assert(!t.classList.contains('is-open'), 'Trigger should be closed after clicking outside');
    });
  });

  it(`[${name}] Mobile drawer #mobile-menu exists and includes all 8 accordion sections`, () => {
    const mobileMenu = doc.getElementById('mobile-menu');
    assert(mobileMenu, 'Missing #mobile-menu');
    const accordions = mobileMenu.querySelectorAll('.mobile-nav-item');
    assert.strictEqual(accordions.length, 8, `Expected 8 mobile accordions, found ${accordions.length}`);
  });
}

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} / ${totalTests} PASSED, ${totalTests - passedTests} FAILED`);
console.log('================================================================\n');

if (passedTests === totalTests) {
  console.log('🎉 ALL SUBPAGE CONSISTENCY TESTS PASSED PERFECTLY!');
  process.exit(0);
} else {
  process.exit(1);
}
