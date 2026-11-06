import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { JSDOM } from 'jsdom';
import * as navModule from './scripts/nav.js';

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✅ [PASS] ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${name}: ${err.message}`);
    failed++;
  }
}

console.log('================================================================');
console.log('TEST SUITE: MOBILE MENU SEGMENTED LANGUAGE SELECTOR (EN + FA)');
console.log('================================================================\n');

const css = fs.readFileSync('styles/main.css', 'utf8');

// 1. Verify strict CSS scoping to #mobile-menu
test('All new segmented language switcher CSS rules are strictly scoped to #mobile-menu', () => {
  const marker = '/* ═══ Mobile Menu Drawer Segmented Language Switcher ═══ */';
  const startIdx = css.indexOf(marker);
  assert(startIdx !== -1, 'Mobile Menu Drawer Segmented Language Switcher section exists in styles/main.css');
  const endMarker = '/* Header action cluster CTA */';
  const endIdx = css.indexOf(endMarker, startIdx);
  assert(endIdx !== -1, 'Section end marker found in styles/main.css');

  const sectionCss = css.slice(startIdx, endIdx);
  const selectorBlocks = [...sectionCss.matchAll(/([^{}]+)\{/g)].map(m => m[1].trim());
  assert(selectorBlocks.length >= 6, `Found ${selectorBlocks.length} selector blocks`);

  for (const block of selectorBlocks) {
    const individualSelectors = block.split(',').map(s => s.trim()).filter(Boolean);
    for (const sel of individualSelectors) {
      const cleanSel = sel.replace(/\/\*[\s\S]*?\*\//g, '').trim();
      assert(
        cleanSel.startsWith('#mobile-menu '),
        `Selector "${cleanSel}" must start with "#mobile-menu " for strict scoping`
      );
    }
  }
});

// 2. Verify desktop .lang-switch and header .mobile-lang-container rules are untouched
test('Desktop .lang-switch and header .mobile-lang-container rules remain intact', () => {
  assert(css.includes('.lang-switch {'), 'Desktop .lang-switch rule intact');
  assert(css.includes('.mobile-lang-container {'), 'Header .mobile-lang-container rule intact');
  assert(css.includes('.mobile-lang-trigger {'), 'Header .mobile-lang-trigger rule intact');
  assert(css.includes('.mobile-lang-menu {'), 'Header .mobile-lang-menu rule intact');
});

// 3. Verify equal-width 2-column grid & visual properties in CSS
test('Segmented container defines 2 equal-width columns (repeat(2, minmax(0, 1fr))) and refined styling', () => {
  assert(
    css.includes('grid-template-columns: repeat(2, minmax(0, 1fr));'),
    'Uses repeat(2, minmax(0, 1fr)) for two equal-width language options'
  );
  assert(
    css.includes('background-color: rgba(200, 171, 131, 0.16);') &&
    css.includes('border-color: rgba(200, 171, 131, 0.42);') &&
    css.includes('color: #DFC49E;'),
    'Active language uses champagne-gold accent'
  );
});

// 4. Verify DOM structure & attributes of mobile menu language selector in EN & FA
test('English (index.html) and Persian (fa/index.html) mobile menu language selector DOM and attributes are intact', () => {
  const enHtml = fs.readFileSync('index.html', 'utf8');
  const faHtml = fs.readFileSync('fa/index.html', 'utf8');

  const enDom = new JSDOM(enHtml);
  const faDom = new JSDOM(faHtml);

  const enBtns = enDom.window.document.querySelectorAll('#mobile-menu .mobile-lang-btn.lang-btn');
  const faBtns = faDom.window.document.querySelectorAll('#mobile-menu .mobile-lang-btn.lang-btn');

  assert.strictEqual(enBtns.length, 2, 'EN mobile menu has 2 .mobile-lang-btn buttons');
  assert.strictEqual(faBtns.length, 2, 'FA mobile menu has 2 .mobile-lang-btn buttons');

  assert.strictEqual(enBtns[0].dataset.lang, 'en');
  assert.strictEqual(enBtns[0].textContent.trim(), 'English (EN)');
  assert(enBtns[0].classList.contains('active'), 'EN button is active on index.html');

  assert.strictEqual(enBtns[1].dataset.lang, 'fa');
  assert.strictEqual(enBtns[1].textContent.trim(), 'فارسی (FA)');
  assert(!enBtns[1].classList.contains('active'), 'FA button is inactive on index.html');

  assert.strictEqual(faBtns[0].dataset.lang, 'en');
  assert.strictEqual(faBtns[0].textContent.trim(), 'English (EN)');
  assert(!faBtns[0].classList.contains('active'), 'EN button is inactive on fa/index.html');

  assert.strictEqual(faBtns[1].dataset.lang, 'fa');
  assert.strictEqual(faBtns[1].textContent.trim(), 'فارسی (FA)');
  assert(faBtns[1].classList.contains('active'), 'FA button is active on fa/index.html');
});

// 5. Verify zero regression on mobile menu open/close, Heritage submenu accordion, and language switching
test('Mobile menu opens/closes, Heritage submenu expands/collapses, and language selection works without breaking menu', () => {
  for (const [file, url, initialLang] of [
    ['index.html', 'https://zarinrealestate.com/', 'en'],
    ['fa/index.html', 'https://zarinrealestate.com/fa', 'fa']
  ]) {
    const html = fs.readFileSync(file, 'utf8');
    const dom = new JSDOM(html, { url });
    const doc = dom.window.document;

    navModule.initNavigation(doc);

    const toggle = doc.getElementById('mobile-menu-toggle');
    const closeBtn = doc.getElementById('mobile-menu-close');
    const drawer = doc.getElementById('mobile-menu');
    const heritageToggle = doc.getElementById('mobile-heritage-toggle');
    const heritageSubmenu = doc.getElementById('mobile-heritage-submenu');

    // Open mobile menu
    toggle.click();
    assert(drawer.classList.contains('open'), `[${file}] Mobile menu opens`);

    // Expand Heritage submenu
    heritageToggle.click();
    assert(!heritageSubmenu.classList.contains('hidden'), `[${file}] Heritage submenu expands`);
    assert.strictEqual(heritageToggle.getAttribute('aria-expanded'), 'true');

    // Collapse Heritage submenu
    heritageToggle.click();
    assert(heritageSubmenu.classList.contains('hidden'), `[${file}] Heritage submenu collapses`);
    assert.strictEqual(heritageToggle.getAttribute('aria-expanded'), 'false');

    // Check active language button state
    const enBtn = doc.querySelector('#mobile-menu .mobile-lang-btn[data-lang="en"]');
    const faBtn = doc.querySelector('#mobile-menu .mobile-lang-btn[data-lang="fa"]');
    assert(enBtn && faBtn, `[${file}] Both language buttons exist`);

    if (initialLang === 'en') {
      assert(enBtn.classList.contains('active') && enBtn.getAttribute('aria-pressed') === 'true', '[index.html] EN active');
      assert(!faBtn.classList.contains('active') && faBtn.getAttribute('aria-pressed') === 'false', '[index.html] FA inactive');
    } else {
      assert(faBtn.classList.contains('active') && faBtn.getAttribute('aria-pressed') === 'true', '[fa/index.html] FA active');
      assert(!enBtn.classList.contains('active') && enBtn.getAttribute('aria-pressed') === 'false', '[fa/index.html] EN inactive');
    }

    // Clicking active language button does not close the mobile drawer
    const activeBtn = initialLang === 'en' ? enBtn : faBtn;
    activeBtn.click();
    assert(drawer.classList.contains('open'), `[${file}] Clicking language button does not unexpectedly close mobile menu`);

    // Close mobile menu
    closeBtn.click();
    assert(!drawer.classList.contains('open'), `[${file}] Mobile menu closes cleanly`);
  }
});

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} / ${passed + failed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) process.exit(1);

