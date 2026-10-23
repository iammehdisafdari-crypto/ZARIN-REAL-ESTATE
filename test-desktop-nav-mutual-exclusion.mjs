import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';
import { initDesktopNav } from './scripts/nav.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('================================================================');
console.log('TEST SUITE: DESKTOP NAVIGATION MUTUAL EXCLUSION & ISOLATION');
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

// 1. Verify that HTML files have 8 top-level sibling triggers (no nesting)
const samplePages = ['index.html', 'properties.html', 'properties-for-sale.html', 'properties-for-rent.html', 'fa/index.html', 'fa/properties.html', 'fa/properties-for-sale.html', 'fa/properties-for-rent.html'];

console.log('\n--- Test 1: DOM Hierarchy & Trigger Sibling Isolation ---');
for (const p of samplePages) {
  const html = fs.readFileSync(path.join(__dirname, p), 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const nav = doc.querySelector('header nav');
  assert(!!nav, `[${p}] Header <nav> exists`);
  if (nav) {
    const directTriggers = nav.querySelectorAll(':scope > .mega-menu-trigger');
    const allTriggers = nav.querySelectorAll('.mega-menu-trigger');
    assert(directTriggers.length === 8, `[${p}] Has 8 direct sibling triggers in <nav> (found ${directTriggers.length})`);
    assert(directTriggers.length === allTriggers.length, `[${p}] Zero nested triggers (direct: ${directTriggers.length}, all: ${allTriggers.length})`);
  }
}

// 2. Behavioral Testing of Mutual Exclusion in Runtime
console.log('\n--- Test 2: Runtime Mutual Exclusion (Only One Panel Open at a Time) ---');
for (const p of ['index.html', 'fa/properties.html']) {
  const html = fs.readFileSync(path.join(__dirname, p), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  const doc = dom.window.document;

  initDesktopNav(doc);

  const triggers = Array.from(doc.querySelectorAll('.mega-menu-trigger'));
  const propTrigger = triggers.find(t => t.querySelector('#properties-nav-link') || t.querySelector('a[href$="properties"]') || t.querySelector('a[href$="properties-for-sale"]'));
  const offplanTrigger = triggers.find(t => t.querySelector('#offplan-nav-link') || t.querySelector('a[href*="off-plan"]'));
  const areasTrigger = triggers.find(t => t.querySelector('#areas-nav-link') || t.querySelector('a[href*="areas"]'));

  assert(!!propTrigger, `[${p}] Found Properties trigger`);
  assert(!!offplanTrigger, `[${p}] Found Off-Plan trigger`);
  assert(!!areasTrigger, `[${p}] Found Areas trigger`);

  const propBtn = propTrigger ? propTrigger.querySelector('.mega-menu-toggle-btn') : null;
  const offplanBtn = offplanTrigger ? offplanTrigger.querySelector('.mega-menu-toggle-btn') : null;

  // Open Properties via click
  if (propBtn) {
    propBtn.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  } else {
    propTrigger.dispatchEvent(new dom.window.MouseEvent('mouseenter', { bubbles: true, cancelable: true }));
  }

  assert(propTrigger.classList.contains('is-open'), `[${p}] Properties menu opened (.is-open added)`);
  if (propBtn) {
    assert(propBtn.getAttribute('aria-expanded') === 'true', `[${p}] Properties button aria-expanded="true"`);
  }
  assert(!offplanTrigger.classList.contains('is-open'), `[${p}] Off-Plan menu remains closed while Properties is open`);
  assert(!areasTrigger.classList.contains('is-open'), `[${p}] Areas menu remains closed while Properties is open`);

  // Move to Off-Plan (mouseenter on Off-Plan)
  offplanTrigger.dispatchEvent(new dom.window.MouseEvent('mouseenter', { bubbles: true, cancelable: true }));

  assert(offplanTrigger.classList.contains('is-open'), `[${p}] Off-Plan menu opened on mouseenter`);
  assert(!propTrigger.classList.contains('is-open'), `[${p}] Properties menu automatically closed when Off-Plan opened!`);
  if (propBtn) {
    assert(propBtn.getAttribute('aria-expanded') === 'false', `[${p}] Properties button aria-expanded reset to "false"`);
  }
  if (offplanBtn) {
    assert(offplanBtn.getAttribute('aria-expanded') === 'true', `[${p}] Off-Plan button aria-expanded="true"`);
  }

  // Move to Areas
  areasTrigger.dispatchEvent(new dom.window.MouseEvent('mouseenter', { bubbles: true, cancelable: true }));
  assert(areasTrigger.classList.contains('is-open'), `[${p}] Areas menu opened on mouseenter`);
  assert(!offplanTrigger.classList.contains('is-open'), `[${p}] Off-Plan menu automatically closed when Areas opened!`);
  assert(!propTrigger.classList.contains('is-open'), `[${p}] Properties menu still closed`);

  // Test Outside Click Closes All Menus
  doc.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  const openCountAfterOutsideClick = triggers.filter(t => t.classList.contains('is-open')).length;
  assert(openCountAfterOutsideClick === 0, `[${p}] Click outside closed all open menus (open count: ${openCountAfterOutsideClick})`);

  // Re-open Properties, then press Escape
  if (propBtn) {
    propBtn.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  } else {
    propTrigger.dispatchEvent(new dom.window.MouseEvent('mouseenter', { bubbles: true, cancelable: true }));
  }
  assert(propTrigger.classList.contains('is-open'), `[${p}] Properties re-opened`);

  doc.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
  const openCountAfterEscape = triggers.filter(t => t.classList.contains('is-open')).length;
  assert(openCountAfterEscape === 0, `[${p}] Escape key closed all open menus (open count: ${openCountAfterEscape})`);

  // Re-open Properties, then click a link inside the panel
  if (propBtn) {
    propBtn.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  } else {
    propTrigger.dispatchEvent(new dom.window.MouseEvent('mouseenter', { bubbles: true, cancelable: true }));
  }
  assert(propTrigger.classList.contains('is-open'), `[${p}] Properties re-opened for link click test`);
  const panelLink = propTrigger.querySelector('.mega-menu-panel a');
  assert(!!panelLink, `[${p}] Found link inside Properties panel`);
  if (panelLink) {
    panelLink.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  }
  const openCountAfterLinkClick = triggers.filter(t => t.classList.contains('is-open')).length;
  assert(openCountAfterLinkClick === 0, `[${p}] Clicking a link inside panel closed the menu (open count: ${openCountAfterLinkClick})`);
}

// 3. Test Keyboard Focus-In Behavior
console.log('\n--- Test 3: Keyboard Focus-In (Tab Navigation) ---');
{
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  const doc = dom.window.document;
  initDesktopNav(doc);

  const triggers = Array.from(doc.querySelectorAll('.mega-menu-trigger'));
  const propTrigger = triggers[0];
  const offplanTrigger = triggers[1];

  propTrigger.dispatchEvent(new dom.window.FocusEvent('focusin', { bubbles: true }));
  assert(propTrigger.classList.contains('is-open'), 'Tab focus into Properties opens Properties panel');
  assert(!offplanTrigger.classList.contains('is-open'), 'Off-Plan is closed while Properties has focus');

  offplanTrigger.dispatchEvent(new dom.window.FocusEvent('focusin', { bubbles: true }));
  assert(offplanTrigger.classList.contains('is-open'), 'Tab focus into Off-Plan opens Off-Plan panel');
  assert(!propTrigger.classList.contains('is-open'), 'Properties panel closes when focus moves to Off-Plan');
}

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
}
