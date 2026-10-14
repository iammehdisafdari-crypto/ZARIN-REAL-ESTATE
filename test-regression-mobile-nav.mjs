import fs from 'fs';
import { JSDOM } from 'jsdom';
import * as navModule from './scripts/nav.js';

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    throw new Error(`Assertion failed: ${message}`);
  }
}

function createPageDom(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html, {
    url: 'https://zarinrealestate.com/',
    runScripts: 'outside-only'
  });
  
  // Attach nav module to window
  dom.window.ZARIN_NAV = navModule;
  navModule.initMobileNav(dom.window.document);
  
  return dom;
}

console.log('================================================================');
console.log('RUNNING REGRESSION TEST SUITE: MOBILE NAVIGATION');
console.log('================================================================\n');

// -------------------------------------------------------------------------
// Test Case 1: Sequence open menu -> select Off-plan -> tap hamburger -> menu opens
// -------------------------------------------------------------------------
console.log('Test Case 1: Standard Navigation Sequence (Home -> Off-Plan -> Reopen)');

// Step 1: User on Home
const homeDom = createPageDom('index.html');
const homeToggle = homeDom.window.document.getElementById('mobile-menu-toggle');
const homeDrawer = homeDom.window.document.getElementById('mobile-menu');

assert(homeToggle !== null, 'Home page has #mobile-menu-toggle');
assert(homeDrawer !== null, 'Home page has #mobile-menu');
assert(!homeDrawer.classList.contains('open'), 'Home menu is initially closed');

// Step 2: Open menu on Home
homeToggle.click();
assert(homeDrawer.classList.contains('open'), 'Menu opens after tapping hamburger on Home');
assert(homeToggle.getAttribute('aria-expanded') === 'true', 'aria-expanded is "true" when open');
assert(homeDom.window.document.body.style.overflow === 'hidden', 'body overflow is "hidden" when open');

// Step 3: Tap "Off-Plan" destination link inside drawer
const offplanLink = homeDrawer.querySelector('a[href="/off-plan"]');
assert(offplanLink !== null, 'Off-Plan destination link exists inside menu');
offplanLink.click();
assert(!homeDrawer.classList.contains('open'), 'Menu closes after tapping Off-Plan link');
assert(homeToggle.getAttribute('aria-expanded') === 'false', 'aria-expanded is "false" after link tap');
assert(homeDom.window.document.body.style.overflow === '', 'body overflow is restored to "" after link tap');

// Step 4: Browser arrives at destination page (/off-plan)
console.log('\nStep 4: Arrive at destination page (off-plan/index.html)');
const offplanDom = createPageDom('off-plan/index.html');
const offplanToggle = offplanDom.window.document.getElementById('mobile-menu-toggle');
const offplanDrawer = offplanDom.window.document.getElementById('mobile-menu');

assert(offplanToggle !== null, 'Off-Plan page has #mobile-menu-toggle');
assert(offplanDrawer !== null, 'Off-Plan page has #mobile-menu');
assert(!offplanDrawer.classList.contains('open'), 'Off-Plan menu is initially closed');

// Step 5: Tap hamburger button on Off-Plan page
console.log('\nStep 5: Tap hamburger button on destination page');
offplanToggle.click();
assert(offplanDrawer.classList.contains('open'), 'Menu opens immediately on destination page (Off-Plan)!');
assert(offplanToggle.getAttribute('aria-expanded') === 'true', 'aria-expanded is "true" on Off-Plan');
assert(offplanDom.window.document.body.style.overflow === 'hidden', 'body overflow is "hidden" on Off-Plan');

// Step 6: Tap hamburger button AGAIN on Off-Plan page (Verify reliable toggle)
console.log('\nStep 6: Tap hamburger button AGAIN to toggle closed');
offplanToggle.click();
assert(!offplanDrawer.classList.contains('open'), 'Menu toggles closed upon second tap');
assert(offplanToggle.getAttribute('aria-expanded') === 'false', 'aria-expanded resets to "false"');
assert(offplanDom.window.document.body.style.overflow === '', 'body overflow restores to ""');

// -------------------------------------------------------------------------
// Test Case 2: Repeat with Services destination
// -------------------------------------------------------------------------
console.log('\n----------------------------------------------------------------');
console.log('Test Case 2: Repeat sequence with Services destination');

// Open on Off-plan again
offplanToggle.click();
assert(offplanDrawer.classList.contains('open'), 'Menu reopens on Off-Plan page');

// Tap Services link
const servicesLink = offplanDrawer.querySelector('a[href="/services"]');
assert(servicesLink !== null, 'Services destination link exists in drawer');
servicesLink.click();
assert(!offplanDrawer.classList.contains('open'), 'Menu closes upon selecting Services');

// Arrive at Services page
console.log('Arrive at services/index.html');
const servicesDom = createPageDom('services/index.html');
const servicesToggle = servicesDom.window.document.getElementById('mobile-menu-toggle');
const servicesDrawer = servicesDom.window.document.getElementById('mobile-menu');

assert(servicesToggle !== null, 'Services page has #mobile-menu-toggle');
servicesToggle.click();
assert(servicesDrawer.classList.contains('open'), 'Menu opens immediately on Services page!');

// -------------------------------------------------------------------------
// Test Case 3: Browser Back/Forward Navigation (BFCache pageshow)
// -------------------------------------------------------------------------
console.log('\n----------------------------------------------------------------');
console.log('Test Case 3: Browser Back Navigation / BFCache Restoration');

// Simulate page restored from bfcache
const pageshowEvent = new servicesDom.window.Event('pageshow');
pageshowEvent.persisted = true;
servicesDom.window.dispatchEvent(pageshowEvent);

assert(!servicesDrawer.classList.contains('open'), 'Menu is clean and closed after pageshow (back navigation)');
assert(servicesDom.window.document.body.style.overflow === '', 'body overflow is clear after back navigation');

// Now tap hamburger on restored page
servicesToggle.click();
assert(servicesDrawer.classList.contains('open'), 'Menu opens cleanly after back navigation!');
servicesToggle.click();
assert(!servicesDrawer.classList.contains('open'), 'Menu closes cleanly after second tap');

// -------------------------------------------------------------------------
// Test Case 4: Rapid Repeated Taps (Toggle idempotency)
// -------------------------------------------------------------------------
console.log('\n----------------------------------------------------------------');
console.log('Test Case 4: Repeated rapid toggling');

for (let i = 1; i <= 6; i++) {
  servicesToggle.click();
  const shouldBeOpen = i % 2 === 1;
  assert(
    servicesDrawer.classList.contains('open') === shouldBeOpen,
    `Tap #${i} correctly results in ${shouldBeOpen ? 'OPEN' : 'CLOSED'} state`
  );
}

// -------------------------------------------------------------------------
// Test Case 5: Accordion Submenu Toggling without Closing Drawer
// -------------------------------------------------------------------------
console.log('\n----------------------------------------------------------------');
console.log('Test Case 5: Accordion Submenu interactions inside drawer');

// Open drawer
servicesToggle.click();
assert(servicesDrawer.classList.contains('open'), 'Drawer open for accordion test');

const servicesAccordionToggle = servicesDrawer.querySelector('#mobile-services-toggle');
const servicesAccordionSubmenu = servicesDrawer.querySelector('#mobile-services-submenu');

assert(servicesAccordionToggle !== null, '#mobile-services-toggle exists');
assert(servicesAccordionSubmenu !== null, '#mobile-services-submenu exists');
assert(servicesAccordionSubmenu.classList.contains('hidden'), 'Submenu initially hidden');

// Tap accordion toggle
servicesAccordionToggle.click();
assert(!servicesAccordionSubmenu.classList.contains('hidden'), 'Submenu expands upon clicking toggle');
assert(servicesAccordionToggle.getAttribute('aria-expanded') === 'true', 'Accordion toggle aria-expanded is "true"');
assert(servicesDrawer.classList.contains('open'), 'Parent drawer REMAINS OPEN after expanding accordion');

// Tap a sub-link (e.g. Selling)
const sellingSubLink = servicesAccordionSubmenu.querySelector('a[href="/services/selling"]');
assert(sellingSubLink !== null, 'Selling sub-link exists');
sellingSubLink.click();
assert(!servicesDrawer.classList.contains('open'), 'Drawer closes when clicking sub-link for navigation');

// -------------------------------------------------------------------------
// Test Case 6: Outside Tap and Escape Key
// -------------------------------------------------------------------------
console.log('\n----------------------------------------------------------------');
console.log('Test Case 6: Outside Tap and Escape Key handling');

// Open drawer
servicesToggle.click();
assert(servicesDrawer.classList.contains('open'), 'Drawer open');

// Press Escape key
const escEvent = new servicesDom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
servicesDom.window.document.dispatchEvent(escEvent);
assert(!servicesDrawer.classList.contains('open'), 'Escape key closes drawer');

// Open drawer again and tap outside
servicesToggle.click();
assert(servicesDrawer.classList.contains('open'), 'Drawer open');
const outsideEl = servicesDom.window.document.body;
outsideEl.click();
assert(!servicesDrawer.classList.contains('open'), 'Outside tap closes drawer');

// -------------------------------------------------------------------------
// Test Case 7: Universal Check across all 8 Major Sections
// -------------------------------------------------------------------------
console.log('\n----------------------------------------------------------------');
console.log('Test Case 7: Universal verification across all 8 major sections');

const sections = [
  { name: 'Home', file: 'index.html' },
  { name: 'Properties', file: 'properties/index.html' },
  { name: 'Off-Plan', file: 'off-plan/index.html' },
  { name: 'Areas', file: 'areas/index.html' },
  { name: 'Services', file: 'services/index.html' },
  { name: 'Private Office', file: 'private-office/index.html' },
  { name: 'Visas', file: 'visas/index.html' },
  { name: 'Heritage', file: 'heritage/index.html' },
  { name: 'Insights', file: 'insights/index.html' }
];

for (const sec of sections) {
  const dom = createPageDom(sec.file);
  const toggle = dom.window.document.getElementById('mobile-menu-toggle');
  const drawer = dom.window.document.getElementById('mobile-menu');

  assert(toggle !== null, `[${sec.name}] has #mobile-menu-toggle`);
  assert(drawer !== null, `[${sec.name}] has #mobile-menu`);
  assert(!drawer.classList.contains('open'), `[${sec.name}] starts with closed menu`);

  // Open
  toggle.click();
  assert(drawer.classList.contains('open'), `[${sec.name}] opens cleanly on click`);
  assert(toggle.getAttribute('aria-expanded') === 'true', `[${sec.name}] aria-expanded is "true"`);

  // Toggle close
  toggle.click();
  assert(!drawer.classList.contains('open'), `[${sec.name}] toggles closed on second click`);
  assert(toggle.getAttribute('aria-expanded') === 'false', `[${sec.name}] aria-expanded is "false"`);
}

console.log('\n================================================================');
console.log(`ALL TESTS PASSED! (${passedTests}/${totalTests} assertions succeeded)`);
console.log('================================================================\n');
