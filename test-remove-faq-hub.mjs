import fs from 'fs';
import path from 'path';
import assert from 'assert';

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
console.log('TEST SUITE: REMOVE "FAQ HUB" FROM INSIGHTS DROPDOWN (EN + FA)');
console.log('================================================================');

// 1. Check nav-data.js
import { NAVIGATION_DATA } from './scripts/nav-data.js';

test('nav-data.js English primary insights does not contain FAQ Hub', () => {
  const insights = NAVIGATION_DATA.en.find(item => item.id === 'insights');
  assert(insights, 'insights item exists in NAVIGATION_DATA.en');
  const toolsRef = insights.categories.find(c => c.title === 'Tools & Reference' || c.i18n === 'nav_tools_reference');
  assert(toolsRef, 'Tools & Reference category exists');
  const faqLink = toolsRef.links.find(l => l.href === '/insights/faq' || l.label === 'FAQ Hub' || l.i18n === 'nav_faq_hub');
  assert.strictEqual(faqLink, undefined, 'FAQ Hub link must not exist in Tools & Reference');
  assert.strictEqual(toolsRef.links.length, 3, 'Tools & Reference should have exactly 3 links');
  assert.deepStrictEqual(toolsRef.links.map(l => l.label), ['Glossary', 'Market Data', 'All Calculators']);
});

test('nav-data.js Persian primary insights does not contain FAQ Hub', () => {
  const insights = NAVIGATION_DATA.fa.find(item => item.id === 'insights');
  assert(insights, 'insights item exists in NAVIGATION_DATA.fa');
  const toolsRef = insights.categories.find(c => c.i18n === 'nav_tools_reference');
  assert(toolsRef, 'Tools & Reference category exists');
  const faqLink = toolsRef.links.find(l => l.href === '/fa/insights/faq' || l.label === 'مرکز پرسش‌های پرتکرار' || l.i18n === 'nav_faq_hub');
  assert.strictEqual(faqLink, undefined, 'FAQ Hub link must not exist in Persian Tools & Reference');
  assert.strictEqual(toolsRef.links.length, 3, 'Persian Tools & Reference should have exactly 3 links');
  assert.deepStrictEqual(toolsRef.links.map(l => l.href), ['/fa/insights/glossary', '/fa/insights/market-data', '/fa/insights/calculators']);
});

// Helper to identify FAQ navigation link
function isFaqNavLink(anchorHtml) {
  if (!anchorHtml.startsWith('<a')) return false;
  if (/data-i18n=["']nav_faq_hub["']/.test(anchorHtml)) return true;
  const hrefMatch = anchorHtml.match(/href=["']([^"']+)["']/);
  if (hrefMatch) {
    const href = hrefMatch[1];
    if (href === '/insights/faq' || href === '/fa/insights/faq' || href.endsWith('/insights/faq') || href.endsWith('/fa/insights/faq')) {
      return true;
    }
  }
  const textMatch = anchorHtml.match(/>([^<]+)<\/a>/);
  if (textMatch) {
    const text = textMatch[1].trim();
    if (text === 'FAQ Hub' ||
        text === 'مرکز پرسش‌های پرتکرار' ||
        text === 'مرکز پرسش‌های متداول' ||
        text === 'مرکز سوالات متداول' ||
        text === 'پرسش‌های متداول') {
      return true;
    }
  }
  return false;
}

const allHtmlFiles = walk('.');

test(`All ${allHtmlFiles.length} HTML files: desktop header navigation has 0 FAQ Hub links`, () => {
  const violatingFiles = [];
  allHtmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const headerMatch = content.match(/<header id="site-header"[\s\S]*?<\/header>/);
    if (headerMatch) {
      const anchors = headerMatch[0].match(/<a\b[^>]*>[\s\S]*?<\/a>/gi) || [];
      const faqAnchors = anchors.filter(isFaqNavLink);
      if (faqAnchors.length > 0) {
        violatingFiles.push({ file, count: faqAnchors.length, matches: faqAnchors });
      }
    }
  });
  assert.strictEqual(violatingFiles.length, 0, `Found desktop header FAQ link in ${violatingFiles.length} files: ${JSON.stringify(violatingFiles.slice(0, 5))}`);
});

test(`All HTML files: mobile-insights-submenu has 0 FAQ Hub links`, () => {
  const violatingFiles = [];
  allHtmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const mobileMatch = content.match(/<div id="mobile-insights-submenu"[\s\S]*?(?=<div id="mobile-heritage-submenu"|<\/nav>)/);
    if (mobileMatch) {
      const anchors = mobileMatch[0].match(/<a\b[^>]*>[\s\S]*?<\/a>/gi) || [];
      const faqAnchors = anchors.filter(isFaqNavLink);
      if (faqAnchors.length > 0) {
        violatingFiles.push({ file, count: faqAnchors.length, matches: faqAnchors });
      }
    }
  });
  assert.strictEqual(violatingFiles.length, 0, `Found mobile submenu FAQ link in ${violatingFiles.length} files: ${JSON.stringify(violatingFiles.slice(0, 5))}`);
});

test('Underlying FAQ page files are strictly preserved and accessible', () => {
  const faqEn = path.join('.', 'insights', 'faq.html');
  const faqEnMirror = path.join('.', 'insights', 'faq', 'index.html');
  assert(fs.existsSync(faqEn), 'insights/faq.html exists');
  assert(fs.statSync(faqEn).size > 10000, 'insights/faq.html has content');
  assert(fs.existsSync(faqEnMirror), 'insights/faq/index.html exists');
  assert(fs.statSync(faqEnMirror).size > 10000, 'insights/faq/index.html has content');

  const faqFa = path.join('.', 'fa', 'insights', 'faq.html');
  const faqFaMirror = path.join('.', 'fa', 'insights', 'faq', 'index.html');
  if (fs.existsSync(faqFa)) {
    assert(fs.statSync(faqFa).size > 10000, 'fa/insights/faq.html has content');
  }
  if (fs.existsSync(faqFaMirror)) {
    assert(fs.statSync(faqFaMirror).size > 10000, 'fa/insights/faq/index.html has content');
  }
});

test('Footer FAQ links are strictly preserved in footer', () => {
  const areasIndex = fs.readFileSync(path.join('areas', 'index.html'), 'utf8');
  const areasFooter = areasIndex.match(/<footer[\s\S]*?<\/footer>/);
  assert(areasFooter, 'areas/index.html has footer');
  assert(areasFooter[0].includes('href="/insights/faq"'), 'areas/index.html footer preserves link to /insights/faq');

  let totalFooterFaq = 0;
  allHtmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/);
    if (footerMatch && footerMatch[0].includes('faq')) {
      const matches = footerMatch[0].match(/<a[^>]*href=["'][^"']*faq[^"']*["'][^>]*>[\s\S]*?<\/a>/gi) || [];
      totalFooterFaq += matches.length;
    }
  });
  assert.strictEqual(totalFooterFaq, 152, `Exactly 152 footer FAQ links preserved across the site (got ${totalFooterFaq})`);
});

test('Editorial body links to FAQ are strictly preserved', () => {
  const blogIndex = fs.readFileSync('insights/blog.html', 'utf8');
  assert(blogIndex.includes('/insights/faq'), 'insights/blog.html preserves editorial link to /insights/faq');
  
  const insightsHub = fs.readFileSync('insights.html', 'utf8');
  assert(insightsHub.includes('/insights/faq'), 'insights.html preserves editorial link to /insights/faq');
});

test('Preservation of other Insights items in desktop and mobile (Glossary, Market Data, All Calculators, Blog, Reports, Podcast, Guides)', () => {
  const enIndex = fs.readFileSync('index.html', 'utf8');
  const headerMatch = enIndex.match(/<header id="site-header"[\s\S]*?<\/header>/);
  assert(headerMatch, 'index.html has header');
  assert(headerMatch[0].includes('/insights/glossary'), 'Header has Glossary');
  assert(headerMatch[0].includes('/insights/market-data'), 'Header has Market Data');
  assert(headerMatch[0].includes('/insights/calculators'), 'Header has All Calculators');
  assert(headerMatch[0].includes('/insights/market-reports'), 'Header has Market Reports');
  assert(headerMatch[0].includes('/insights/podcast'), 'Header has Podcast');
  assert(headerMatch[0].includes('/insights/guides'), 'Header has Guides');

  const mobileMatch = enIndex.match(/<div id="mobile-insights-submenu"[\s\S]*?(?=<div id="mobile-heritage-submenu"|<\/nav>)/);
  assert(mobileMatch, 'index.html has mobile submenu');
  assert(mobileMatch[0].includes('/insights/glossary'), 'Mobile submenu has Glossary');
  assert(mobileMatch[0].includes('/insights/market-data'), 'Mobile submenu has Market Data');
  assert(mobileMatch[0].includes('/insights/calculators'), 'Mobile submenu has All Calculators');
});

console.log('================================================================');
console.log(`SUMMARY: ${passed} / ${passed + failed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) process.exit(1);
