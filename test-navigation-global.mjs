import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('================================================================');
console.log('TESTING GLOBAL NAVIGATION INTEGRITY & CONSULTATION ROUTING');
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

// Check key pages
const testPages = [
  'consultation.html',
  'consultation/index.html',
  'index.html',
  'properties.html',
  'services.html',
  'areas.html',
  'private-office.html',
  'visas.html'
];

const canonicalExpectedRoutes = [
  { text: 'Properties', href: '/properties' },
  { text: 'Off-Plan', href: '/off-plan' },
  { text: 'Areas', href: '/areas' },
  { text: 'Private Office', href: '/private-office' },
  { text: 'Services', href: '/services' },
  { text: 'Visas & Residency', href: '/visas' },
  { text: 'Market Insights', href: '/insights' },
  { text: 'Heritage', href: '/heritage' }
];

for (const relPath of testPages) {
  const fullPath = path.join(__dirname, relPath);
  if (!fs.existsSync(fullPath)) {
    assert(false, `File exists: ${relPath}`);
    continue;
  }
  const html = fs.readFileSync(fullPath, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  console.log(`\nTesting page: ${relPath}`);

  // 1. Logo
  const logo = doc.querySelector('header a[href="/"]');
  assert(!!logo, `[${relPath}] Has home link on logo: href="/"`);

  // 2. Desktop Navigation Items
  const desktopNav = doc.querySelector('header nav.hidden.xl\\:flex, header nav');
  assert(!!desktopNav, `[${relPath}] Desktop <nav> exists in header`);

  if (desktopNav) {
    const desktopLinks = Array.from(desktopNav.querySelectorAll('a[href]'));
    for (const expected of canonicalExpectedRoutes) {
      const match = desktopLinks.find(a => 
        a.getAttribute('href') === expected.href || 
        a.textContent.trim().includes(expected.text)
      );
      assert(!!match && match.getAttribute('href') === expected.href, 
        `[${relPath}] Desktop nav contains exact link to ${expected.href} ("${expected.text}")`);
    }

    // Check no trigger buttons without hrefs exist as primary nav links
    const buttons = Array.from(desktopNav.children).filter(el => el.tagName === 'BUTTON');
    assert(buttons.length === 0, `[${relPath}] No bare <button> triggers in top-level desktop nav`);
  }

  // 3. Mobile Navigation items
  const mobileNav = doc.querySelector('#mobile-menu');
  assert(!!mobileNav, `[${relPath}] Mobile drawer #mobile-menu exists`);
  if (mobileNav) {
    const mobileLinks = Array.from(mobileNav.querySelectorAll('a[href]')).map(a => a.getAttribute('href'));
    for (const expected of canonicalExpectedRoutes) {
      const hasRoute = mobileLinks.some(href => href === expected.href || href.startsWith(expected.href));
      assert(hasRoute, `[${relPath}] Mobile menu contains route ${expected.href}`);
    }
  }

  // 4. CTA button in header
  const headerCta = doc.querySelector('header a[href="/consultation"]');
  assert(!!headerCta, `[${relPath}] Header contains "Book Consultation" CTA link to /consultation`);

  // 5. Check all internal links are root-relative (start with / or # or mailto or tel)
  const allLinks = Array.from(doc.querySelectorAll('a[href]'));
  let invalidRelative = 0;
  for (const a of allLinks) {
    const href = a.getAttribute('href');
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      continue;
    }
    if (href.startsWith('#')) {
      // In-page hash link
      continue;
    }
    if (!href.startsWith('/')) {
      invalidRelative++;
      console.warn(`    Warning: non-root internal link found in ${relPath}: ${href}`);
    }
  }
  assert(invalidRelative === 0, `[${relPath}] Zero relative links that could break in subpaths (all root-absolute)`);
}

// 6. Test nav.js runtime normalization & dynamic trigger routing
console.log('\nTesting nav.js runtime behavior...');
import('./scripts/nav.js').then(({ initDesktopNav, initMobileNav }) => {
  // Create simulated DOM with button triggers to verify defensive fallback
  const simulatedHtml = `
    <!DOCTYPE html>
    <html>
      <body>
        <header id="site-header">
          <nav class="hidden xl:flex items-center space-x-1">
            <div class="relative group/prop">
              <button class="nav-link">Properties</button>
            </div>
            <div class="relative group/offplan">
              <button class="nav-link">Off-Plan</button>
            </div>
          </nav>
        </header>
        <button id="mobile-menu-toggle" aria-expanded="false"></button>
        <div id="mobile-menu" class="hidden">
          <a href="properties">Properties Relative</a>
        </div>
      </body>
    </html>
  `;
  const dom = new JSDOM(simulatedHtml, { url: 'https://zarinrealestate.com/consultation' });
  const doc = dom.window.document;

  initDesktopNav(doc);
  initMobileNav(doc);

  // Check normalization on mobile link
  const mobA = doc.querySelector('#mobile-menu a');
  assert(mobA.getAttribute('href') === '/properties', 'nav.js automatically normalized relative link "properties" -> "/properties"');

  // Check fallback routing data on button
  const btn = doc.querySelector('.group\\/prop button');
  assert(btn.dataset.fallbackRoute === '/properties', 'nav.js defensive fallback bound route "/properties" to button');

  console.log('\n================================================================');
  console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('================================================================');
  if (failed > 0) {
    process.exit(1);
  }
}).catch(err => {
  console.error(err);
  process.exit(1);
});
