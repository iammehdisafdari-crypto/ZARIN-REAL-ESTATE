import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { JSDOM } from 'jsdom';
import { NAVIGATION_DATA } from './scripts/nav-data.js';

console.log('================================================================');
console.log('TEST SUITE: REMOVAL OF "ALL INSIGHTS" FROM NAVIGATION');
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
test('nav-data.js English primary insights does not contain "All Insights"', () => {
  const insights = NAVIGATION_DATA.en.find(item => item.id === 'insights');
  assert(insights, 'insights item exists in NAVIGATION_DATA.en');
  const allLinks = insights.categories.flatMap(c => c.links);
  const found = allLinks.find(l => l.label.includes('All Insights') || l.i18n === 'nav_all_insights');
  assert(!found, 'All Insights link should not exist in nav-data.js (EN)');
});

test('nav-data.js English primary insights has 5 Content Hub and 3 Tools & Reference links', () => {
  const insights = NAVIGATION_DATA.en.find(item => item.id === 'insights');
  assert.strictEqual(insights.categories[0].links.length, 5, 'Content Hub should have exactly 5 links');
  assert.strictEqual(insights.categories[1].links.length, 3, 'Tools & Reference should have exactly 3 links');
  const expectedLabels = ['Blog Articles', 'Market Reports', 'Podcast', "Buyer's Guides", 'FAQ Hub'];
  const actualLabels = insights.categories[0].links.map(l => l.label);
  assert.deepStrictEqual(actualLabels, expectedLabels);
});

test('nav-data.js Persian primary insights does not contain "All Insights" or "همه تحلیل‌ها"', () => {
  const insights = NAVIGATION_DATA.fa.find(item => item.id === 'insights');
  assert(insights, 'insights item exists in NAVIGATION_DATA.fa');
  const allLinks = insights.categories.flatMap(c => c.links);
  const found = allLinks.find(l => l.label.includes('همه تحلیل') || l.i18n === 'nav_all_insights');
  assert(!found, 'All Insights link should not exist in nav-data.js (FA)');
});

test('nav-data.js Persian primary insights has 5 Content Hub and 3 Tools & Reference links', () => {
  const insights = NAVIGATION_DATA.fa.find(item => item.id === 'insights');
  assert.strictEqual(insights.categories[0].links.length, 5, 'Content Hub should have exactly 5 links');
  assert.strictEqual(insights.categories[1].links.length, 3, 'Tools & Reference should have exactly 3 links');
});

// 2. Scan all HTML files for desktop and mobile menus
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

test(`All ${htmlFiles.length} HTML files: desktop Insights dropdown does NOT contain "All Insights"`, () => {
  const failures = [];
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
    if (!headerMatch) return;
    const header = headerMatch[0];
    const lines = header.split('\n');
    lines.forEach(l => {
      if (
        (l.includes('href="/insights"') || l.includes('href="/fa/insights"')) &&
        (l.includes('All Insights') || l.includes('همه تحلیل‌ها') || l.includes('همه مقالات و گزارش‌ها'))
      ) {
        failures.push(`${file}: ${l.trim()}`);
      }
    });
  });
  assert.strictEqual(failures.length, 0, `Found desktop occurrences: ${failures.join(', ')}`);
});

test(`All ${htmlFiles.length} HTML files: mobile-insights-submenu does NOT contain "All Insights"`, () => {
  const failures = [];
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const mobileMatch = content.match(/id=["']mobile-insights-submenu["'][\s\S]*?<\/div>\s*<\/div>/);
    if (!mobileMatch) return;
    const lines = mobileMatch[0].split('\n');
    lines.forEach(l => {
      if (
        (l.includes('href="/insights"') || l.includes('href="/fa/insights"')) &&
        (l.includes('All Insights') || l.includes('همه تحلیل‌ها') || l.includes('همه مقالات و گزارش‌ها'))
      ) {
        failures.push(`${file}: ${l.trim()}`);
      }
    });
  });
  assert.strictEqual(failures.length, 0, `Found mobile occurrences: ${failures.join(', ')}`);
});

// 3. Detailed DOM test on key sample pages
const samplePages = [
  { file: 'index.html', lang: 'en', name: 'Homepage EN' },
  { file: 'fa/index.html', lang: 'fa', name: 'Homepage FA' },
  { file: 'insights/guides.html', lang: 'en', name: 'Buyer\'s Guides EN' },
  { file: 'fa/insights/guides.html', lang: 'fa', name: 'Buyer\'s Guides FA' },
  { file: 'insights/blog.html', lang: 'en', name: 'Blog EN' },
  { file: 'fa/insights/blog.html', lang: 'fa', name: 'Blog FA' },
  { file: 'insights/market-reports.html', lang: 'en', name: 'Market Reports EN' },
  { file: 'fa/insights/market-reports.html', lang: 'fa', name: 'Market Reports FA' },
  { file: 'insights/podcast.html', lang: 'en', name: 'Podcast EN' },
  { file: 'fa/insights/podcast.html', lang: 'fa', name: 'Podcast FA' },
  { file: 'off-plan/coming-soon.html', lang: 'en', name: 'Coming Soon EN' },
  { file: 'fa/off-plan/coming-soon.html', lang: 'fa', name: 'Coming Soon FA' },
  { file: 'off-plan/payment-calculator.html', lang: 'en', name: 'Payment Calculator EN' },
  { file: 'fa/off-plan/payment-calculator.html', lang: 'fa', name: 'Payment Calculator FA' },
  { file: 'off-plan/projects.html', lang: 'en', name: 'Projects EN' },
  { file: 'fa/off-plan/projects.html', lang: 'fa', name: 'Projects FA' }
];

samplePages.forEach(p => {
  test(`[${p.name}] Structure & remaining Insights submenu items verification`, () => {
    const html = fs.readFileSync(p.file, 'utf8');
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    // Desktop: exactly 6 triggers
    const triggers = doc.querySelectorAll('#site-header .mega-menu-trigger');
    assert.strictEqual(triggers.length, 6, `Should have 6 desktop triggers, found ${triggers.length}`);

    // Main Insights trigger must exist and have correct link
    const prefix = p.lang === 'fa' ? '/fa' : '';
    const insightsTriggerLink = doc.querySelector(`#site-header a[href="${prefix}/insights"]`);
    assert(insightsTriggerLink, `Main Insights link ${prefix}/insights must exist in header`);

    // Mobile submenu
    const mobileSubmenu = doc.getElementById('mobile-insights-submenu');
    assert(mobileSubmenu, 'mobile-insights-submenu must exist');
    assert(mobileSubmenu.classList.contains('hidden'), 'mobile-insights-submenu must be hidden by default');

    // Check remaining submenu links exist in mobile submenu
    const expectedRoutes = [
      `${prefix}/insights/blog`,
      `${prefix}/insights/market-reports`,
      `${prefix}/insights/podcast`,
      `${prefix}/insights/guides`
    ];

    expectedRoutes.forEach(r => {
      const link = mobileSubmenu.querySelector(`a[href="${r}"]`);
      assert(link, `Mobile insights submenu must contain link to ${r}`);
    });

    // Check that NO link in mobile submenu points to prefix/insights alone
    const exactInsightsLinks = Array.from(mobileSubmenu.querySelectorAll('a')).filter(
      a => a.getAttribute('href') === `${prefix}/insights`
    );
    assert.strictEqual(exactInsightsLinks.length, 0, `No mobile submenu link should point to ${prefix}/insights`);
  });
});

console.log('================================================================');
console.log(`SUMMARY: ${passedTests} / ${totalTests} PASSED, ${totalTests - passedTests} FAILED`);
console.log('================================================================');

if (totalTests - passedTests > 0) process.exit(1);
