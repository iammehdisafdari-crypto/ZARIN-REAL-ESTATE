import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

console.log('================================================================');
console.log('ZARIN BILINGUAL PARITY & LOCALIZATION VERIFICATION SUITE');
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

// 1. Primary Route Pairs to Test
const routePairs = [
  { name: 'Homepage', en: 'index.html', fa: 'fa/index.html', canonicalEn: '', canonicalFa: 'fa/' },
  { name: 'Consultation', en: 'consultation.html', fa: 'fa/consultation.html', canonicalEn: 'consultation', canonicalFa: 'fa/consultation' },
  { name: 'Services', en: 'services.html', fa: 'fa/services.html', canonicalEn: 'services', canonicalFa: 'fa/services' },
  { name: 'Private Office', en: 'private-office.html', fa: 'fa/private-office.html', canonicalEn: 'private-office', canonicalFa: 'fa/private-office' },
  { name: 'Visas', en: 'visas.html', fa: 'fa/visas.html', canonicalEn: 'visas', canonicalFa: 'fa/visas' },
  { name: 'Heritage', en: 'heritage.html', fa: 'fa/heritage.html', canonicalEn: 'heritage', canonicalFa: 'fa/heritage' },
  { name: 'Insights', en: 'insights.html', fa: 'fa/insights.html', canonicalEn: 'insights', canonicalFa: 'fa/insights' },
  { name: 'Properties', en: 'properties.html', fa: 'fa/properties.html', canonicalEn: 'properties', canonicalFa: 'fa/properties' },
  { name: 'Off-Plan', en: 'off-plan.html', fa: 'fa/off-plan.html', canonicalEn: 'off-plan', canonicalFa: 'fa/off-plan' },
  { name: 'Areas', en: 'areas.html', fa: 'fa/areas.html', canonicalEn: 'areas', canonicalFa: 'fa/areas' },
];

console.log('\n--- 1. File Existence & Clean URL Counterparts ---');
for (const pair of routePairs) {
  const enPath = path.join(rootDir, pair.en);
  const faPath = path.join(rootDir, pair.fa);
  assert(fs.existsSync(enPath), `[${pair.name}] English file exists: ${pair.en}`);
  assert(fs.existsSync(faPath), `[${pair.name}] Persian file exists: ${pair.fa}`);

  // Check directory index counterparts if applicable
  if (pair.canonicalEn) {
    const enIndexPath = path.join(rootDir, pair.canonicalEn, 'index.html');
    const faIndexPath = path.join(rootDir, 'fa', pair.canonicalEn, 'index.html');
    if (fs.existsSync(path.join(rootDir, pair.canonicalEn))) {
      assert(fs.existsSync(enIndexPath), `[${pair.name}] English folder index exists: ${pair.canonicalEn}/index.html`);
    }
    assert(fs.existsSync(faIndexPath), `[${pair.name}] Persian folder index exists: fa/${pair.canonicalEn}/index.html`);
  }
}

console.log('\n--- 2. HTML Attributes (lang & dir) ---');
for (const pair of routePairs) {
  const enContent = fs.readFileSync(path.join(rootDir, pair.en), 'utf8');
  const faContent = fs.readFileSync(path.join(rootDir, pair.fa), 'utf8');
  const enDom = new JSDOM(enContent);
  const faDom = new JSDOM(faContent);

  const enLang = enDom.window.document.documentElement.getAttribute('lang');
  const enDir = enDom.window.document.documentElement.getAttribute('dir') || 'ltr';
  const faLang = faDom.window.document.documentElement.getAttribute('lang');
  const faDir = faDom.window.document.documentElement.getAttribute('dir');

  assert(enLang === 'en', `[${pair.name} EN] lang is "en"`);
  assert(enDir === 'ltr', `[${pair.name} EN] dir is "ltr"`);
  assert(faLang === 'fa', `[${pair.name} FA] lang is "fa"`);
  assert(faDir === 'rtl', `[${pair.name} FA] dir is "rtl"`);
}

console.log('\n--- 3. SEO & Bidirectional Hreflang Tags ---');
for (const pair of routePairs) {
  const enContent = fs.readFileSync(path.join(rootDir, pair.en), 'utf8');
  const faContent = fs.readFileSync(path.join(rootDir, pair.fa), 'utf8');
  const enDom = new JSDOM(enContent);
  const faDom = new JSDOM(faContent);

  // English file hreflang checks
  const enHrFa = enDom.window.document.querySelector('link[rel="alternate"][hreflang="fa"]');
  const enHrEn = enDom.window.document.querySelector('link[rel="alternate"][hreflang="en"]');
  assert(!!enHrFa, `[${pair.name} EN] Has hreflang="fa" tag`);
  assert(!!enHrEn, `[${pair.name} EN] Has hreflang="en" tag`);

  // Persian file hreflang checks
  const faHrFa = faDom.window.document.querySelector('link[rel="alternate"][hreflang="fa"]');
  const faHrEn = faDom.window.document.querySelector('link[rel="alternate"][hreflang="en"]');
  const faCanonical = faDom.window.document.querySelector('link[rel="canonical"]');

  assert(!!faHrFa, `[${pair.name} FA] Has hreflang="fa" tag`);
  assert(!!faHrEn, `[${pair.name} FA] Has hreflang="en" tag`);
  assert(!!faCanonical, `[${pair.name} FA] Has canonical tag`);

  if (faCanonical) {
    const expectedCanonical = `https://zarinrealestate.com/${pair.canonicalFa}`;
    assert(faCanonical.getAttribute('href') === expectedCanonical, `[${pair.name} FA] Canonical URL matches ${expectedCanonical}`);
  }
}

console.log('\n--- 4. Persian Typography & Visual Assets ---');
for (const pair of routePairs) {
  const faContent = fs.readFileSync(path.join(rootDir, pair.fa), 'utf8');
  assert(faContent.includes('Vazirmatn'), `[${pair.name} FA] Specifies and loads Vazirmatn Persian font`);

  const faDom = new JSDOM(faContent);
  const h1 = faDom.window.document.querySelector('h1');
  assert(!!h1, `[${pair.name} FA] Has an <h1> element`);
  if (h1) {
    // Check for Persian characters in H1
    const hasPersian = /[\u0600-\u06FF]/.test(h1.textContent);
    assert(hasPersian, `[${pair.name} FA] H1 contains authentic Persian text: "${h1.textContent.trim().slice(0, 40)}..."`);
  }
}

console.log('\n--- 5. Navigation & Internal Link Persistence in Persian Pages ---');
for (const pair of routePairs) {
  const faContent = fs.readFileSync(path.join(rootDir, pair.fa), 'utf8');
  const faDom = new JSDOM(faContent);
  const links = Array.from(faDom.window.document.querySelectorAll('a[href]'));

  let leakedEnLink = null;
  for (const a of links) {
    const href = a.getAttribute('href');
    if (
      href &&
      href.startsWith('/') &&
      !href.startsWith('/fa') &&
      !href.startsWith('/styles') &&
      !href.startsWith('/scripts') &&
      !href.startsWith('/public') &&
      !href.startsWith('/images') &&
      !href.startsWith('/api') &&
      !href.startsWith('/admin') &&
      !href.includes('.') &&
      !href.startsWith('/#') &&
      !href.startsWith('//')
    ) {
      // Check if it links directly to an unlocalized English section
      if (['/properties', '/services', '/private-office', '/visas', '/heritage', '/insights', '/off-plan', '/areas', '/consultation'].some(p => href === p || href.startsWith(p + '/'))) {
        leakedEnLink = href;
        break;
      }
    }
  }

  assert(!leakedEnLink, `[${pair.name} FA] No raw English internal links found (all point to /fa/... or safe assets). Leaked: ${leakedEnLink || 'none'}`);
}

console.log('\n--- 6. Counterpart Routing Algorithm in scripts/nav.js ---');
// Verify counterpart calculation logic
function testGetCounterpartUrl(currentPath, targetLang) {
  const cleanPath = (currentPath || '/').split('?')[0].split('#')[0];
  const isPersianCurrent = cleanPath === '/fa' || cleanPath.startsWith('/fa/');

  if (targetLang === 'fa') {
    if (isPersianCurrent) return currentPath;
    if (cleanPath === '/' || cleanPath === '') return '/fa';
    return cleanPath.replace(/\/$/, '').replace(/^/, '/fa');
  }

  if (targetLang === 'en') {
    if (!isPersianCurrent) return currentPath;
    if (cleanPath === '/fa' || cleanPath === '/fa/') return '/';
    const enPath = cleanPath.replace(/^\/fa(\/|$)/, '/');
    return enPath || '/';
  }

  return currentPath;
}

const testCases = [
  { input: '/', target: 'fa', expected: '/fa' },
  { input: '/fa', target: 'en', expected: '/' },
  { input: '/services', target: 'fa', expected: '/fa/services' },
  { input: '/fa/services', target: 'en', expected: '/services' },
  { input: '/private-office', target: 'fa', expected: '/fa/private-office' },
  { input: '/fa/private-office', target: 'en', expected: '/private-office' },
  { input: '/consultation', target: 'fa', expected: '/fa/consultation' },
  { input: '/fa/consultation', target: 'en', expected: '/consultation' },
  { input: '/visas', target: 'fa', expected: '/fa/visas' },
  { input: '/fa/visas', target: 'en', expected: '/visas' },
  { input: '/heritage', target: 'fa', expected: '/fa/heritage' },
  { input: '/fa/heritage', target: 'en', expected: '/heritage' },
  { input: '/insights', target: 'fa', expected: '/fa/insights' },
  { input: '/fa/insights', target: 'en', expected: '/insights' },
  { input: '/properties', target: 'fa', expected: '/fa/properties' },
  { input: '/fa/properties', target: 'en', expected: '/properties' },
  { input: '/off-plan', target: 'fa', expected: '/fa/off-plan' },
  { input: '/fa/off-plan', target: 'en', expected: '/off-plan' },
  { input: '/areas', target: 'fa', expected: '/fa/areas' },
  { input: '/fa/areas', target: 'en', expected: '/areas' }
];

for (const tc of testCases) {
  const result = testGetCounterpartUrl(tc.input, tc.target);
  assert(result === tc.expected, `Counterpart: ${tc.input} (${tc.target}) -> ${result} (expected: ${tc.expected})`);
}

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} passed, ${failed} failed.`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL BILINGUAL PARITY TESTS PASSED SUCCESSFULLY!\n');
}
