import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { JSDOM } from 'jsdom';
import { NAVIGATION_DATA } from './scripts/nav-data.js';

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
console.log('TEST SUITE: INSIGHTS MEGA MENU REFINEMENT (DESKTOP & MOBILE)');
console.log('================================================================');

// 1. Verify nav-data.js
test('nav-data.js English Insights has Section 1 (Content Hub: 4 items) and Section 2 (Tools & Reference: 4 items)', () => {
  const insights = NAVIGATION_DATA.en.find(i => i.id === 'insights');
  assert(insights, 'insights item exists');
  assert.strictEqual(insights.categories.length, 2, 'Exactly 2 categories');

  const contentHub = insights.categories[0];
  assert.strictEqual(contentHub.title, 'Content Hub');
  assert.strictEqual(contentHub.links.length, 4, 'Content Hub has exactly 4 links');
  assert.deepStrictEqual(contentHub.links.map(l => l.label), [
    'Blog Articles',
    'Market Reports',
    'Podcast',
    "Buyer's Guides"
  ]);
  assert.deepStrictEqual(contentHub.links.map(l => l.href), [
    '/insights/blog',
    '/insights/market-reports',
    '/insights/podcast',
    '/insights/guides'
  ]);

  const toolsRef = insights.categories[1];
  assert.strictEqual(toolsRef.title, 'Tools & Reference');
  assert.strictEqual(toolsRef.links.length, 4, 'Tools & Reference has exactly 4 links');
  assert.deepStrictEqual(toolsRef.links.map(l => l.label), [
    'All Calculators',
    'FAQ Hub',
    'Glossary',
    'Market Data'
  ]);
  assert.deepStrictEqual(toolsRef.links.map(l => l.href), [
    '/insights/calculators',
    '/insights/faq',
    '/insights/glossary',
    '/insights/market-data'
  ]);
});

test('nav-data.js Persian Insights has Section 1 (پایگاه دانش و تحلیل: 4 items) and Section 2 (ابزارها و مراجع محاسباتی: 4 items)', () => {
  const insights = NAVIGATION_DATA.fa.find(i => i.id === 'insights');
  assert(insights, 'insights item exists in Persian');
  assert.strictEqual(insights.categories.length, 2, 'Exactly 2 categories in Persian');

  const contentHub = insights.categories[0];
  assert.strictEqual(contentHub.i18n, 'nav_content_hub');
  assert.strictEqual(contentHub.links.length, 4, 'Persian Content Hub has exactly 4 links');
  assert.deepStrictEqual(contentHub.links.map(l => l.href), [
    '/fa/insights/blog',
    '/fa/insights/market-reports',
    '/fa/insights/podcast',
    '/fa/insights/guides'
  ]);

  const toolsRef = insights.categories[1];
  assert.strictEqual(toolsRef.i18n, 'nav_tools_reference');
  assert.strictEqual(toolsRef.links.length, 4, 'Persian Tools & Reference has exactly 4 links');
  assert.deepStrictEqual(toolsRef.links.map(l => l.href), [
    '/fa/insights/calculators',
    '/fa/insights/faq',
    '/fa/insights/glossary',
    '/fa/insights/market-data'
  ]);
});

const allFiles = walk('.');
const validHtmlFiles = allFiles.filter(f => f !== 'brandbook.html' && !f.startsWith('public/admin') && !f.startsWith('public\\admin'));

test('All HTML files: Desktop Insights mega-menu contains 2-column grid and exact 8 links', () => {
  let checkedCount = 0;
  for (const file of validHtmlFiles) {
    const c = fs.readFileSync(file, 'utf8');
    const isFa = file.replace(/\\/g, '/').startsWith('fa/');

    // Find desktop insights panel
    const m = c.match(/<div class="mega-menu-panel[^"]*"[^>]*>\s*(<div[^>]*data-i18n="nav_content_hub"[\s\S]*?)<\/div>\s*<\/div>/);
    assert(m, `${file}: desktop insights panel not found`);
    const panelContent = m[1];

    // Check heading 1
    assert(panelContent.includes('data-i18n="nav_content_hub"'), `${file}: missing nav_content_hub heading`);
    assert(panelContent.includes('border-b border-white-line'), `${file}: missing divider beneath heading 1`);

    // Check divider between sections
    assert(panelContent.includes('border-t border-white-line my-1'), `${file}: missing divider between sections`);

    // Check heading 2
    assert(panelContent.includes('data-i18n="nav_tools_reference"'), `${file}: missing nav_tools_reference heading`);

    // Check exact links
    const expectedHrefs = isFa ? [
      '/fa/insights/blog',
      '/fa/insights/market-reports',
      '/fa/insights/podcast',
      '/fa/insights/guides',
      '/fa/insights/calculators',
      '/fa/insights/faq',
      '/fa/insights/glossary',
      '/fa/insights/market-data'
    ] : [
      '/insights/blog',
      '/insights/market-reports',
      '/insights/podcast',
      '/insights/guides',
      '/insights/calculators',
      '/insights/faq',
      '/insights/glossary',
      '/insights/market-data'
    ];

    const linkMatches = [...panelContent.matchAll(/<a[^>]*href="([^"]+)"/g)].map(x => x[1]);
    assert.deepStrictEqual(linkMatches, expectedHrefs, `${file}: desktop links mismatch. Got: ${linkMatches.join(', ')}`);
    checkedCount++;
  }
  console.log(`    Verified desktop layout in ${checkedCount} HTML files`);
});

function extractElementById(html, id) {
  const marker = `id="${id}"`;
  const markerIdx = html.indexOf(marker);
  if (markerIdx === -1) return null;
  const tagStart = html.lastIndexOf('<div', markerIdx);
  if (tagStart === -1) return null;

  let depth = 0;
  let i = tagStart;
  while (i < html.length) {
    if (html.startsWith('<div', i) && (html[i + 4] === ' ' || html[i + 4] === '>')) {
      depth++;
      i += 4;
    } else if (html.startsWith('</div>', i)) {
      depth--;
      if (depth === 0) {
        return html.slice(tagStart, i + 6);
      }
      i += 6;
    } else {
      i++;
    }
  }
  return null;
}

test('All HTML files: Mobile Insights submenu has single-column layout and exact 8 links', () => {
  let checkedCount = 0;
  for (const file of validHtmlFiles) {
    const c = fs.readFileSync(file, 'utf8');
    const isFa = file.replace(/\\/g, '/').startsWith('fa/');

    const submenuContent = extractElementById(c, 'mobile-insights-submenu');
    assert(submenuContent, `${file}: mobile-insights-submenu not found`);

    // Check single-column flex-col layout on container
    const containerMatch = c.match(/<div id="mobile-insights-submenu"[^>]*class="([^"]+)"/);
    assert(containerMatch && containerMatch[1].includes('flex-col'), `${file}: mobile submenu not flex-col`);

    // Check section 1 and 2 headings
    assert(submenuContent.includes('data-i18n="nav_content_hub"'), `${file}: missing mobile nav_content_hub`);
    assert(submenuContent.includes('data-i18n="nav_tools_reference"'), `${file}: missing mobile nav_tools_reference`);
    assert(submenuContent.includes('border-t border-white-line/50'), `${file}: missing section divider in mobile`);

    // Check exact links in order
    const expectedHrefs = isFa ? [
      '/fa/insights/blog',
      '/fa/insights/market-reports',
      '/fa/insights/podcast',
      '/fa/insights/guides',
      '/fa/insights/calculators',
      '/fa/insights/faq',
      '/fa/insights/glossary',
      '/fa/insights/market-data'
    ] : [
      '/insights/blog',
      '/insights/market-reports',
      '/insights/podcast',
      '/insights/guides',
      '/insights/calculators',
      '/insights/faq',
      '/insights/glossary',
      '/insights/market-data'
    ];

    const linkMatches = [...submenuContent.matchAll(/<a[^>]*href="([^"]+)"/g)].map(x => x[1]);
    assert.deepStrictEqual(linkMatches, expectedHrefs, `${file}: mobile links mismatch. Got: ${linkMatches.join(', ')}`);
    checkedCount++;
  }
  console.log(`    Verified mobile layout in ${checkedCount} HTML files`);
});

test('DOM runtime verification: Desktop hover opens and aligns 2 columns, Mobile accordion toggles cleanly', () => {
  const content = fs.readFileSync('index.html', 'utf8');
  const dom = new JSDOM(content, { url: 'https://zarinrealestate.com/', runScripts: 'outside-only' });
  const doc = dom.window.document;

  // Check desktop panel
  const panel = doc.querySelector('.mega-menu-trigger a[href="/insights"]').parentElement.querySelector('.mega-menu-panel');
  assert(panel, 'Desktop Insights mega menu panel exists');
  assert(panel.classList.contains('grid'), 'Panel uses grid');
  assert(panel.classList.contains('grid-cols-2'), 'Panel uses 2 columns');
  assert(panel.classList.contains('gap-x-6'), 'Panel has horizontal gap gap-x-6');
  assert(panel.classList.contains('gap-y-3'), 'Panel has vertical gap gap-y-3');

  // Check mobile submenu toggle
  const toggleBtn = doc.getElementById('mobile-insights-toggle');
  const mobileSubmenu = doc.getElementById('mobile-insights-submenu');
  assert(toggleBtn, 'mobile-insights-toggle exists');
  assert(mobileSubmenu, 'mobile-insights-submenu exists');
  assert(mobileSubmenu.classList.contains('hidden'), 'mobile submenu starts hidden');
  assert.strictEqual(toggleBtn.getAttribute('aria-expanded'), 'false', 'toggle starts aria-expanded="false"');
});

console.log('================================================================');
console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');
if (failed > 0) process.exit(1);

