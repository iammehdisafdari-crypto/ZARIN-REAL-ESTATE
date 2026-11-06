import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';
import * as navModule from './scripts/nav.js';
import { NAVIGATION_DATA } from './scripts/nav-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('================================================================');
console.log('TEST SUITE: COMPLETE RESPONSIVE NAVIGATION REFACTORING');
console.log('================================================================\n');

let totalTests = 0;
let passedTests = 0;

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

// -------------------------------------------------------------------------
// 1. Audit Desktop vs Mobile Structure Parity
// -------------------------------------------------------------------------
console.log('--- 1. Desktop vs Mobile Structure Parity ---');

['en', 'fa'].forEach(lang => {
  const isFa = lang === 'fa';
  const sampleFile = isFa ? 'fa/index.html' : 'index.html';
  const html = fs.readFileSync(path.join(__dirname, sampleFile), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  const doc = dom.window.document;

  const desktopTriggers = doc.querySelectorAll('.mega-menu-trigger');
  const mobileItems = doc.querySelectorAll('.mobile-nav-item');

  assert(desktopTriggers.length === 6, `[${lang}] Desktop has exactly 6 primary triggers (found ${desktopTriggers.length})`);
  assert(mobileItems.length === 6, `[${lang}] Mobile has exactly 6 primary accordion items (found ${mobileItems.length})`);

  const data = NAVIGATION_DATA[lang];

  data.forEach((section, idx) => {
    const dTrigger = desktopTriggers[idx];
    const mItem = mobileItems[idx];

    // Check parent link
    const dLink = dTrigger.querySelector(':scope > a');
    const mLink = mItem.querySelector(':scope > div > a');
    assert(dLink !== null, `[${lang}] Desktop ${section.id} has parent link`);
    assert(mLink !== null, `[${lang}] Mobile ${section.id} has parent link`);
    assert(dLink.getAttribute('href') === section.href, `[${lang}] Desktop ${section.id} link href is "${section.href}"`);
    assert(mLink.getAttribute('href') === section.href, `[${lang}] Mobile ${section.id} link href matches Desktop "${section.href}"`);

    // Check mobile toggle button
    const mToggle = mItem.querySelector(`#mobile-${section.id}-toggle`);
    assert(mToggle !== null, `[${lang}] Mobile ${section.id} has separate toggle button #mobile-${section.id}-toggle`);
    assert(mToggle.getAttribute('aria-expanded') === 'false', `[${lang}] Mobile ${section.id} toggle starts with aria-expanded="false"`);

    // Check mobile submenu container
    const mSubmenu = mItem.querySelector(`#mobile-${section.id}-submenu`);
    assert(mSubmenu !== null, `[${lang}] Mobile ${section.id} has submenu container #mobile-${section.id}-submenu`);
    assert(mSubmenu.classList.contains('hidden'), `[${lang}] Mobile ${section.id} submenu is CLOSED by default (has 'hidden' class)`);

    // Check that mobile submenu appears directly beneath its parent
    assert(mItem.children[0].contains(mLink) && mItem.children[0].contains(mToggle), `[${lang}] Parent row contains both link and toggle`);
    assert(mItem.children[1] === mSubmenu, `[${lang}] Submenu is direct second child of mobile-nav-item (directly beneath parent)`);

    // Check sub-links parity
    const mLinks = Array.from(mSubmenu.querySelectorAll('a'));
    const expectedLinks = section.categories.flatMap(c => c.links);
    assert(mLinks.length === expectedLinks.length, `[${lang}] Mobile ${section.id} has ${expectedLinks.length} links (found ${mLinks.length})`);

    expectedLinks.forEach((expected, lIdx) => {
      const actual = mLinks[lIdx];
      assert(actual.getAttribute('href') === expected.href, `[${lang}] Link ${lIdx + 1} href matches "${expected.href}"`);
      assert(actual.textContent.trim() === expected.label, `[${lang}] Link ${lIdx + 1} text matches "${expected.label}"`);
    });
  });
});

// -------------------------------------------------------------------------
// 2. Mobile Accordion Interactive Behavior (Mutual Exclusivity & Reset)
// -------------------------------------------------------------------------
console.log('\n--- 2. Mobile Accordion Interactive Behavior & Mutual Exclusivity ---');

function testAccordionInteractions(filePath, lang) {
  const html = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://zarinrealestate.com/' });
  const doc = dom.window.document;
  navModule.initMobileNav(doc);

  const drawerToggle = doc.getElementById('mobile-menu-toggle');
  const drawer = doc.getElementById('mobile-menu');
  const drawerClose = doc.getElementById('mobile-menu-close');

  assert(drawerToggle !== null, `[${filePath}] Drawer toggle exists`);
  assert(drawer !== null, `[${filePath}] Drawer exists`);
  assert(!drawer.classList.contains('open'), `[${filePath}] Drawer initially closed`);

  // Open drawer
  drawerToggle.click();
  assert(drawer.classList.contains('open'), `[${filePath}] Drawer opens on click`);
  assert(doc.body.style.overflow === 'hidden', `[${filePath}] Body scroll locked when drawer open`);

  // Verify all submenus are closed upon initial drawer opening
  const allSubmenus = doc.querySelectorAll('.mobile-nav-item div[id$="-submenu"]');
  const allToggles = doc.querySelectorAll('.mobile-nav-item button[id$="-toggle"]');
  allSubmenus.forEach(s => {
    assert(s.classList.contains('hidden'), `[${filePath}] Submenu ${s.id} is closed on drawer open`);
  });
  allToggles.forEach(t => {
    assert(t.getAttribute('aria-expanded') === 'false', `[${filePath}] Toggle ${t.id} aria-expanded="false" on drawer open`);
  });

  // Tap Properties toggle -> expands Properties
  const propToggle = doc.getElementById('mobile-properties-toggle');
  const propSubmenu = doc.getElementById('mobile-properties-submenu');
  propToggle.click();
  assert(!propSubmenu.classList.contains('hidden'), `[${filePath}] Properties submenu expands on click`);
  assert(propToggle.getAttribute('aria-expanded') === 'true', `[${filePath}] Properties toggle aria-expanded="true"`);

  // Tap Off-Plan toggle -> expands Off-Plan AND CLOSES Properties (Mutual Exclusivity)
  const offplanToggle = doc.getElementById('mobile-offplan-toggle');
  const offplanSubmenu = doc.getElementById('mobile-offplan-submenu');
  offplanToggle.click();
  assert(!offplanSubmenu.classList.contains('hidden'), `[${filePath}] Off-Plan submenu expands on click`);
  assert(offplanToggle.getAttribute('aria-expanded') === 'true', `[${filePath}] Off-Plan toggle aria-expanded="true"`);
  assert(propSubmenu.classList.contains('hidden'), `[${filePath}] Properties submenu closed when Off-Plan opened (Accordion mutual exclusivity)`);
  assert(propToggle.getAttribute('aria-expanded') === 'false', `[${filePath}] Properties toggle resets to aria-expanded="false"`);

  // Tap Off-Plan toggle AGAIN -> collapses Off-Plan
  offplanToggle.click();
  assert(offplanSubmenu.classList.contains('hidden'), `[${filePath}] Off-Plan submenu collapses on second click`);
  assert(offplanToggle.getAttribute('aria-expanded') === 'false', `[${filePath}] Off-Plan toggle aria-expanded="false"`);

  // Tap Areas toggle -> expands Areas
  const areasToggle = doc.getElementById('mobile-areas-toggle');
  const areasSubmenu = doc.getElementById('mobile-areas-submenu');
  areasToggle.click();
  assert(!areasSubmenu.classList.contains('hidden'), `[${filePath}] Areas submenu expands on click`);

  // Close mobile drawer -> verify all expanded states are reset
  drawerClose.click();
  assert(!drawer.classList.contains('open'), `[${filePath}] Drawer closed via close button`);
  assert(doc.body.style.overflow === '', `[${filePath}] Body scroll unlocked`);
  assert(areasSubmenu.classList.contains('hidden'), `[${filePath}] Areas submenu reset to hidden on drawer close`);
  assert(areasToggle.getAttribute('aria-expanded') === 'false', `[${filePath}] Areas toggle reset to aria-expanded="false" on drawer close`);

  // Re-open drawer -> verify all submenus remain strictly closed
  drawerToggle.click();
  assert(drawer.classList.contains('open'), `[${filePath}] Drawer reopened`);
  allSubmenus.forEach(s => {
    assert(s.classList.contains('hidden'), `[${filePath}] Reopened drawer: Submenu ${s.id} is closed`);
  });

  // Tap link navigation: clicking a sub-link closes drawer
  const firstSubLink = propSubmenu.querySelector('a');
  firstSubLink.click();
  assert(!drawer.classList.contains('open'), `[${filePath}] Clicking sub-link navigates and closes drawer`);
}

testAccordionInteractions('index.html', 'en');
testAccordionInteractions('fa/index.html', 'fa');
testAccordionInteractions('services/buying.html', 'en');
testAccordionInteractions('fa/services/buying.html', 'fa');

// -------------------------------------------------------------------------
// 3. Strict Absence Verification (Private Office, Palm Jumeirah, Visas)
// -------------------------------------------------------------------------
console.log('\n--- 3. Strict Absence Verification across Nav Menus ---');

const sampleFiles = [
  'index.html', 'fa/index.html',
  'properties.html', 'fa/properties.html',
  'areas.html', 'fa/areas.html',
  'services.html', 'fa/services.html',
  'services/buying.html', 'fa/services/buying.html',
  'services/selling.html', 'fa/services/selling.html',
  'services/valuation.html', 'fa/services/valuation.html',
  'services/after-sales.html', 'fa/services/after-sales.html'
];

sampleFiles.forEach(f => {
  const html = fs.readFileSync(path.join(__dirname, f), 'utf8');

  // Desktop nav check
  const dStart = html.indexOf('<nav class="hidden lg:flex');
  if (dStart !== -1) {
    const dEnd = html.indexOf('</nav>', dStart);
    const dNav = html.substring(dStart, dEnd);

    assert(!dNav.includes('private-office'), `[${f}] Private Office absent from Desktop navigation`);
    assert(!dNav.includes('href="/visas"') && !dNav.includes('href="/fa/visas"'), `[${f}] Visas absent from Desktop navigation`);
    assert(!dNav.includes('palm-jumeirah'), `[${f}] Palm Jumeirah absent from Desktop Areas submenu`);
  }

  // Mobile nav check
  const mStart = html.indexOf('id="mobile-menu"');
  if (mStart !== -1) {
    const mEnd = html.indexOf('</div>\n  </div>', mStart);
    const mNav = html.substring(mStart, mEnd !== -1 ? mEnd : mStart + 8000);

    assert(!mNav.includes('private-office'), `[${f}] Private Office absent from Mobile navigation`);
    assert(!mNav.includes('href="/visas"') && !mNav.includes('href="/fa/visas"'), `[${f}] Visas absent from Mobile navigation`);
    assert(!mNav.includes('palm-jumeirah'), `[${f}] Palm Jumeirah absent from Mobile Areas submenu`);
  }
});

// -------------------------------------------------------------------------
// 4. Services Submenu: Exactly 4 pages in 2 categories
// -------------------------------------------------------------------------
console.log('\n--- 4. Services Submenu Exact 4 Pages Parity ---');

['index.html', 'fa/index.html'].forEach(f => {
  const html = fs.readFileSync(path.join(__dirname, f), 'utf8');
  const isFa = f.startsWith('fa');
  const prefix = isFa ? '/fa' : '';

  const dom = new JSDOM(html);
  const mSub = dom.window.document.getElementById('mobile-services-submenu');
  assert(mSub !== null, `[${f}] #mobile-services-submenu found`);

  const links = Array.from(mSub.querySelectorAll('a')).map(a => a.getAttribute('href'));
  assert(links.length === 4, `[${f}] Mobile Services submenu has exactly 4 links (found ${links.length})`);
  assert(links[0] === `${prefix}/services/buying`, `[${f}] Link 1 is ${prefix}/services/buying`);
  assert(links[1] === `${prefix}/services/selling`, `[${f}] Link 2 is ${prefix}/services/selling`);
  assert(links[2] === `${prefix}/services/valuation`, `[${f}] Link 3 is ${prefix}/services/valuation`);
  assert(links[3] === `${prefix}/services/after-sales`, `[${f}] Link 4 is ${prefix}/services/after-sales`);
});

// -------------------------------------------------------------------------
// 5. Language Switcher: Visible ONLY on Homepage
// -------------------------------------------------------------------------
console.log('\n--- 5. Language Switcher Visibility ---');

// Homepage has language section in mobile drawer
const homeHtml = fs.readFileSync('index.html', 'utf8');
assert(homeHtml.includes('mobile-lang-btn'), '[index.html] Homepage mobile drawer contains language buttons');

// Subpages DO NOT have language section in mobile drawer
const subpageHtml = fs.readFileSync('services/buying.html', 'utf8');
const subMatch = subpageHtml.match(/id="mobile-menu"[\s\S]*?<\/div>\s*<\/div>/);
assert(subMatch && !subMatch[0].includes('mobile-lang-btn'), '[services/buying.html] Subpage mobile drawer DOES NOT contain language switch buttons');

console.log('\n================================================================');
console.log(`ALL TESTS PASSED! (${passedTests}/${totalTests} assertions succeeded)`);
console.log('================================================================\n');
