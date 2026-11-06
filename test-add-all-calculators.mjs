import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { JSDOM } from 'jsdom';
import { NAVIGATION_DATA } from './scripts/nav-data.js';

console.log('================================================================');
console.log('TEST SUITE: ADD "ALL CALCULATORS" TO INSIGHTS DROPDOWN (EN + FA)');
console.log('================================================================');

let totalTests = 0;
let passedTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✅ [PASS] ${name}`);
  } catch (err) {
    console.error(`  ❌ [FAIL] ${name}:`, err.message);
  }
}

// 1. Verify shared nav-data.js
test('nav-data.js English primary insights contains "All Calculators" at the end of Tools & Reference', () => {
  const insights = NAVIGATION_DATA.en.find(item => item.id === 'insights');
  assert(insights, 'insights item exists in NAVIGATION_DATA.en');
  const toolsRef = insights.categories.find(c => c.title === 'Tools & Reference' || c.i18n === 'nav_tools_reference');
  assert(toolsRef, 'Tools & Reference category exists');
  assert.strictEqual(toolsRef.links.length, 3, 'Tools & Reference should have exactly 3 links');
  const lastLink = toolsRef.links[2];
  assert.strictEqual(lastLink.label, 'All Calculators');
  assert.strictEqual(lastLink.href, '/insights/calculators');
  assert.strictEqual(lastLink.i18n, 'nav_all_calculators');
});

test('nav-data.js English primary insights preserves order of items: Glossary, Market Data, All Calculators', () => {
  const insights = NAVIGATION_DATA.en.find(item => item.id === 'insights');
  const toolsRef = insights.categories.find(c => c.i18n === 'nav_tools_reference');
  const labels = toolsRef.links.map(l => l.label);
  assert.deepStrictEqual(labels, ['Glossary', 'Market Data', 'All Calculators']);
});

test('nav-data.js Persian primary insights contains "همه ماشینحسابها" at the end of Tools & Reference', () => {
  const insights = NAVIGATION_DATA.fa.find(item => item.id === 'insights');
  assert(insights, 'insights item exists in NAVIGATION_DATA.fa');
  const toolsRef = insights.categories.find(c => c.i18n === 'nav_tools_reference');
  assert(toolsRef, 'Tools & Reference category exists');
  assert.strictEqual(toolsRef.links.length, 3, 'Tools & Reference should have exactly 3 links');
  const lastLink = toolsRef.links[2];
  assert.strictEqual(lastLink.label, 'همه ماشینحسابها');
  assert.strictEqual(lastLink.href, '/fa/insights/calculators');
  assert.strictEqual(lastLink.i18n, 'nav_all_calculators');
});

test('nav-data.js Persian primary insights preserves order of items: Glossary, Market Data, All Calculators', () => {
  const insights = NAVIGATION_DATA.fa.find(item => item.id === 'insights');
  const toolsRef = insights.categories.find(c => c.i18n === 'nav_tools_reference');
  const hrefs = toolsRef.links.map(l => l.href);
  assert.deepStrictEqual(hrefs, ['/fa/insights/glossary', '/fa/insights/market-data', '/fa/insights/calculators']);
});

// 2. Scan all HTML files for desktop and mobile navigation
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (['node_modules', 'dist', '.git', 'cms-laravel', 'scratch'].includes(file)) return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) results = results.concat(walk(fullPath));
    else if (file.endsWith('.html')) results.push(fullPath);
  });
  return results;
}

const htmlFiles = walk('.');

test(`All ${htmlFiles.length} HTML files: desktop header navigation contains "All Calculators" / "همه ماشینحسابها"`, () => {
  const failures = [];
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
    if (!headerMatch) return;
    const header = headerMatch[0];
    const hasEn = header.includes('href="/insights/calculators"');
    const hasFa = header.includes('href="/fa/insights/calculators"');
    if (!hasEn && !hasFa) {
      failures.push(file);
    }
  });
  assert.strictEqual(failures.length, 0, `Missing desktop calculators link in: ${failures.join(', ')}`);
});

test(`All HTML files with mobile-insights-submenu contain "All Calculators" / "همه ماشینحسابها"`, () => {
  const failures = [];
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const mobileMatch = content.match(/id=["']mobile-insights-submenu["'][\s\S]*?<\/div>\s*<\/div>/);
    if (!mobileMatch) return;
    const block = mobileMatch[0];
    const hasEn = block.includes('href="/insights/calculators"');
    const hasFa = block.includes('href="/fa/insights/calculators"');
    if (!hasEn && !hasFa) {
      failures.push(file);
    }
  });
  assert.strictEqual(failures.length, 0, `Missing mobile calculators link in: ${failures.join(', ')}`);
});

test('No file has duplicate "All Calculators" in desktop or mobile navigation', () => {
  const failures = [];
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
    if (headerMatch) {
      const header = headerMatch[0];
      const countEn = (header.match(/href="\/insights\/calculators"/g) || []).length;
      const countFa = (header.match(/href="\/fa\/insights\/calculators"/g) || []).length;
      if (countEn > 1 || countFa > 1 || (countEn > 0 && countFa > 0)) {
        failures.push(`${file} (desktop: en=${countEn}, fa=${countFa})`);
      }
    }
    const mobileMatch = content.match(/id=["']mobile-insights-submenu["'][\s\S]*?<\/div>\s*<\/div>/);
    if (mobileMatch) {
      const block = mobileMatch[0];
      const countEn = (block.match(/href="\/insights\/calculators"/g) || []).length;
      const countFa = (block.match(/href="\/fa\/insights\/calculators"/g) || []).length;
      if (countEn > 1 || countFa > 1 || (countEn > 0 && countFa > 0)) {
        failures.push(`${file} (mobile: en=${countEn}, fa=${countFa})`);
      }
    }
  });
  assert.strictEqual(failures.length, 0, `Found duplicate occurrences: ${failures.join(', ')}`);
});

// 3. Preservation of Off-Plan Payment Calculator
test('Off-Plan Payment Calculator is preserved across English and Persian pages', () => {
  const enHome = fs.readFileSync('index.html', 'utf8');
  assert(enHome.includes('/off-plan/payment-calculator'), 'EN homepage retains /off-plan/payment-calculator');
  const faHome = fs.readFileSync('fa/index.html', 'utf8');
  assert(faHome.includes('/fa/off-plan/payment-calculator'), 'FA homepage retains /fa/off-plan/payment-calculator');
});

// 4. Sample page DOM checks
const samplePages = [
  { file: 'index.html', lang: 'en', name: 'Homepage EN' },
  { file: 'fa/index.html', lang: 'fa', name: 'Homepage FA' },
  { file: 'insights/guides.html', lang: 'en', name: "Buyer's Guides EN" },
  { file: 'fa/insights/guides.html', lang: 'fa', name: "Buyer's Guides FA" },
  { file: 'insights/blog.html', lang: 'en', name: 'Blog EN' },
  { file: 'fa/insights/blog.html', lang: 'fa', name: 'Blog FA' },
  { file: 'insights/market-reports.html', lang: 'en', name: 'Market Reports EN' },
  { file: 'fa/insights/market-reports.html', lang: 'fa', name: 'Market Reports FA' },
  { file: 'insights/podcast.html', lang: 'en', name: 'Podcast EN' },
  { file: 'fa/insights/podcast.html', lang: 'fa', name: 'Podcast FA' },
  { file: 'insights/calculators.html', lang: 'en', name: 'Calculators Hub EN' },
  { file: 'off-plan/coming-soon.html', lang: 'en', name: 'Coming Soon EN' },
  { file: 'fa/off-plan/coming-soon.html', lang: 'fa', name: 'Coming Soon FA' },
  { file: 'off-plan/payment-calculator.html', lang: 'en', name: 'Payment Calculator EN' },
  { file: 'fa/off-plan/payment-calculator.html', lang: 'fa', name: 'Payment Calculator FA' },
  { file: 'off-plan/projects.html', lang: 'en', name: 'Projects EN' },
  { file: 'fa/off-plan/projects.html', lang: 'fa', name: 'Projects FA' }
];

samplePages.forEach(p => {
  test(`[${p.name}] Desktop and mobile navigation contains All Calculators under Insights`, () => {
    const html = fs.readFileSync(p.file, 'utf8');
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const prefix = p.lang === 'fa' ? '/fa' : '';
    const targetHref = `${prefix}/insights/calculators`;

    // Desktop
    const desktopLink = doc.querySelector(`#site-header a[href="${targetHref}"]`);
    assert(desktopLink, `Desktop header must contain link to ${targetHref}`);
    if (p.lang === 'en') {
      assert.strictEqual(desktopLink.textContent.trim(), 'All Calculators');
    } else {
      assert(desktopLink.textContent.trim().includes('ماشین'), 'Persian desktop link must contain Persian label');
    }

    // Mobile
    const mobileSubmenu = doc.getElementById('mobile-insights-submenu');
    if (mobileSubmenu) {
      const mobileLink = mobileSubmenu.querySelector(`a[href="${targetHref}"]`);
      assert(mobileLink, `Mobile submenu must contain link to ${targetHref}`);
      assert(mobileSubmenu.classList.contains('hidden'), 'Mobile submenu must be closed by default');
    }
  });
});

// 5. Existing Calculator page files intact
test('Underlying Calculator page files are intact', () => {
  assert(fs.existsSync('insights/calculators.html'), 'insights/calculators.html must exist');
  assert(fs.existsSync('insights/calculators/index.html'), 'insights/calculators/index.html must exist');
});

console.log('================================================================');
console.log(`SUMMARY: ${passedTests} / ${totalTests} PASSED, ${totalTests - passedTests} FAILED`);
console.log('================================================================');

if (totalTests - passedTests > 0) process.exit(1);

