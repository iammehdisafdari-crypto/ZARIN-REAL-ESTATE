import fs from 'fs';
import path from 'path';
import assert from 'assert';
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
console.log('TEST SUITE: RESTORE "FAQ HUB" IN CONTENT HUB (EN + FA)');
console.log('================================================================');

// 1. Check nav-data.js English
test('nav-data.js English insights has FAQ Hub under Content Hub after Buyer Guides', () => {
  const insights = NAVIGATION_DATA.en.find(item => item.id === 'insights');
  assert(insights, 'insights item exists in NAVIGATION_DATA.en');
  
  const contentHub = insights.categories.find(c => c.title === 'Content Hub' || c.i18n === 'nav_content_hub');
  assert(contentHub, 'Content Hub category exists in English insights');
  assert.strictEqual(contentHub.links.length, 5, 'Content Hub should have exactly 5 links');
  
  const faqLink = contentHub.links[4];
  assert(faqLink, '5th link in Content Hub exists');
  assert.strictEqual(faqLink.label, 'FAQ Hub', 'Link label is "FAQ Hub"');
  assert.strictEqual(faqLink.href, '/insights/faq', 'Link href is "/insights/faq"');
  assert.strictEqual(faqLink.i18n, 'nav_faq_hub', 'Link i18n is "nav_faq_hub"');

  // Verify Tools & Reference does NOT have FAQ Hub
  const toolsRef = insights.categories.find(c => c.title === 'Tools & Reference' || c.i18n === 'nav_tools_reference');
  assert(toolsRef, 'Tools & Reference category exists');
  const faqInTools = toolsRef.links.find(l => l.href === '/insights/faq' || l.label === 'FAQ Hub');
  assert.strictEqual(faqInTools, undefined, 'FAQ Hub must NOT exist in Tools & Reference');
  assert.strictEqual(toolsRef.links.length, 3, 'Tools & Reference should have exactly 3 links');
});

// 2. Check nav-data.js Persian
test('nav-data.js Persian insights has FAQ Hub under Content Hub after Buyer Guides', () => {
  const insights = NAVIGATION_DATA.fa.find(item => item.id === 'insights');
  assert(insights, 'insights item exists in NAVIGATION_DATA.fa');
  
  const contentHub = insights.categories.find(c => c.i18n === 'nav_content_hub');
  assert(contentHub, 'Content Hub category exists in Persian insights');
  assert.strictEqual(contentHub.links.length, 5, 'Content Hub should have exactly 5 links');
  
  const faqLink = contentHub.links[4];
  assert(faqLink, '5th link in Persian Content Hub exists');
  assert.strictEqual(faqLink.label, 'مرکز پرسش‌های پرتکرار', 'Persian link label is "مرکز پرسش‌های پرتکرار"');
  assert.strictEqual(faqLink.href, '/fa/insights/faq', 'Persian link href is "/fa/insights/faq"');
  assert.strictEqual(faqLink.i18n, 'nav_faq_hub', 'Persian link i18n is "nav_faq_hub"');

  // Verify Persian Tools & Reference does NOT have FAQ Hub
  const toolsRef = insights.categories.find(c => c.i18n === 'nav_tools_reference');
  assert(toolsRef, 'Tools & Reference category exists');
  const faqInTools = toolsRef.links.find(l => l.href === '/fa/insights/faq' || l.label === 'مرکز پرسش‌های پرتکرار');
  assert.strictEqual(faqInTools, undefined, 'FAQ Hub must NOT exist in Persian Tools & Reference');
  assert.strictEqual(toolsRef.links.length, 3, 'Persian Tools & Reference should have exactly 3 links');
});

const allHtmlFiles = walk('.');

// 3. Check desktop header across all HTML files
test('HTML files with Content Hub in desktop header contain FAQ Hub in Content Hub', () => {
  let contentHubCount = 0;
  let faqPresentCount = 0;
  const missingFiles = [];

  allHtmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const headerMatch = content.match(/<header id="site-header"[\s\S]*?<\/header>/);
    if (!headerMatch) return;
    const header = headerMatch[0];

    // Check if this header has Content Hub mega menu
    if (header.includes('nav_content_hub') || header.includes('Content Hub') || header.includes('پایگاه دانش و تحلیل') || header.includes('مرکز محتوا و داده') || header.includes('مرکز تحلیل و اطلاعات')) {
      contentHubCount++;
      const hasFaq = header.includes('/insights/faq') || header.includes('/fa/insights/faq');
      if (hasFaq) {
        faqPresentCount++;
        // Verify it is NOT under Tools & Reference
        const toolsRefMatch = header.match(/<div class="nav-mega-group">\s*<div[^>]*data-i18n="nav_tools_reference"[\s\S]*?<\/ul>/);
        if (toolsRefMatch) {
          assert(!toolsRefMatch[0].includes('faq'), `${file}: Tools & Reference must NOT contain FAQ Hub`);
        }
      } else {
        missingFiles.push(file);
      }
    }
  });

  console.log(`    Found ${contentHubCount} files with Content Hub in desktop header, ${faqPresentCount} have FAQ Hub`);
  assert.strictEqual(missingFiles.length, 0, `Missing FAQ Hub in desktop header of: ${missingFiles.slice(0, 5).join(', ')}`);
  assert(contentHubCount >= 360, `Expected at least 360 files with Content Hub, got ${contentHubCount}`);
});

// 4. Check mobile submenu across all HTML files
test('HTML files with mobile insights submenu contain FAQ Hub in Content Hub', () => {
  let mobileInsightsCount = 0;
  let faqPresentCount = 0;
  const missingFiles = [];

  allHtmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const mobileMatch = content.match(/<div id="mobile-insights-submenu"[\s\S]*?(?=<div id="mobile-heritage-submenu"|<\/nav>)/);
    if (!mobileMatch) return;
    const mobile = mobileMatch[0];

    mobileInsightsCount++;
    const hasFaq = mobile.includes('/insights/faq') || mobile.includes('/fa/insights/faq');
    if (hasFaq) {
      faqPresentCount++;
      // Verify it is NOT under Tools & Reference
      const toolsRefMatch = mobile.match(/<div class="mobile-nav-group-label"[^>]*data-i18n="nav_tools_reference"[\s\S]*?(?=<div class="mobile-nav-group-label"|<\/div>\s*<\/div>)/);
      if (toolsRefMatch) {
        assert(!toolsRefMatch[0].includes('faq'), `${file}: Mobile Tools & Reference must NOT contain FAQ Hub`);
      }
    } else {
      missingFiles.push(file);
    }
  });

  console.log(`    Found ${mobileInsightsCount} files with mobile insights submenu, ${faqPresentCount} have FAQ Hub`);
  assert.strictEqual(missingFiles.length, 0, `Missing FAQ Hub in mobile submenu of: ${missingFiles.slice(0, 5).join(', ')}`);
  assert(mobileInsightsCount >= 360, `Expected at least 360 files with mobile insights submenu, got ${mobileInsightsCount}`);
});

// 5. English FAQ Hub page files verification
test('English FAQ Hub pages (insights/faq.html and insights/faq/index.html) are complete and valid', () => {
  const enFiles = ['insights/faq.html', 'insights/faq/index.html'];
  enFiles.forEach(relPath => {
    assert(fs.existsSync(relPath), `${relPath} exists`);
    const content = fs.readFileSync(relPath, 'utf8');
    assert(content.length > 50000, `${relPath} has complete content (>50KB)`);
    assert(content.includes('<title>Dubai Property FAQ — Answers Hub | ZARIN</title>'), 'Title matches canonical specification');
    assert(content.includes('href="https://zarinrealestate.com/insights/faq"'), 'Canonical URL matches');
    assert(!content.includes('page-home'), 'Must NOT have page-home class on body');
    assert(content.includes('style="padding: 1.15rem 0;"'), 'Header has standard subpage padding');
    assert(content.includes('nav.js'), 'Includes nav.js');
    assert(content.includes('i18n.js'), 'Includes i18n.js');
    // Check 37 questions
    const questionMatches = content.match(/<details\b/g) || [];
    assert.strictEqual(questionMatches.length, 37, `Must have exactly 37 questions (got ${questionMatches.length})`);
    // Check 6 topics
    assert(content.includes('Buying &amp; Costs'), 'Has Buying & Costs topic');
    assert(content.includes('Off-Plan Questions'), 'Has Off-Plan topic');
    assert(content.includes('Visas &amp; Residency'), 'Has Visas topic');
    assert(content.includes('Areas &amp; Yields'), 'Has Areas & Yields topic');
    assert(content.includes('ZARIN Services'), 'Has ZARIN Services topic');
    assert(content.includes('Market Data'), 'Has Market Data topic');
    // Ensure exactly 1 breadcrumb and no extraneous breadcrumbs
    const breadcrumbs = [...content.matchAll(/<nav[^>]*aria-label="Breadcrumb"[^>]*>[\s\S]*?<\/nav>/gi)];
    assert.strictEqual(breadcrumbs.length, 1, 'Exactly one breadcrumb exists');
    assert(!breadcrumbs[0][0].includes('Market Price Assessment'), 'Extraneous breadcrumb removed');
  });
});

// 6. Persian FAQ Hub page files verification
test('Persian FAQ Hub pages (fa/insights/faq.html and fa/insights/faq/index.html) are complete and valid', () => {
  const faFiles = ['fa/insights/faq.html', 'fa/insights/faq/index.html'];
  faFiles.forEach(relPath => {
    assert(fs.existsSync(relPath), `${relPath} exists`);
    const content = fs.readFileSync(relPath, 'utf8');
    assert(content.length > 50000, `${relPath} has complete content (>50KB)`);
    assert(content.includes('lang="fa" dir="rtl"'), 'HTML has lang="fa" dir="rtl"');
    assert(content.includes('<title>مرکز پاسخ و پرسش‌های متداول املاک دبی | ZARIN</title>'), 'Persian title matches specification');
    assert(content.includes('href="https://zarinrealestate.com/fa/insights/faq"'), 'Persian canonical URL matches');
    assert(!content.includes('page-home'), 'Must NOT have page-home class on body');
    assert(content.includes('style="padding: 1.15rem 0;"'), 'Header has standard subpage padding');
    assert(content.includes('/scripts/nav.js'), 'Includes /scripts/nav.js');
    assert(content.includes('/scripts/i18n.js'), 'Includes /scripts/i18n.js');
    // Check 37 questions
    const questionMatches = content.match(/<details\b/g) || [];
    assert.strictEqual(questionMatches.length, 37, `Must have exactly 37 Persian questions (got ${questionMatches.length})`);
    // Check Persian topics
    assert(content.includes('هزینه‌ها و فرآیند خرید'), 'Has Persian Buying & Costs topic');
    assert(content.includes('پروژه‌های پیش‌فروش و آف‌پلان'), 'Has Persian Off-Plan topic');
    assert(content.includes('ویزا و اقامت ملکی'), 'Has Persian Visas topic');
    assert(content.includes('مناطق و بازدهی سرمایه‌گذاری'), 'Has Persian Areas & Yields topic');
    assert(content.includes('خدمات تخصصی زرین'), 'Has Persian ZARIN Services topic');
    assert(content.includes('داده‌های آماری بازار'), 'Has Persian Market Data topic');
  });
});

// 7. Strict preservation of other items in navigation
test('Strict preservation: All Insights is absent from navigation, All Calculators is present', () => {
  allHtmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const headerMatch = content.match(/<header id="site-header"[\s\S]*?<\/header>/);
    if (headerMatch) {
      const header = headerMatch[0];
      const lines = header.split('\n');
      lines.forEach(l => {
        if (
          (l.includes('href="/insights"') || l.includes('href="/fa/insights"')) &&
          (l.includes('All Insights') || l.includes('همه تحلیل‌ها') || l.includes('همه مقالات و گزارش‌ها'))
        ) {
          assert.fail(`${file} header contains All Insights: ${l.trim()}`);
        }
      });
    }

    const mobileMatch = content.match(/<div id="mobile-insights-submenu"[\s\S]*?(?=<div id="mobile-heritage-submenu"|<\/nav>)/);
    if (mobileMatch) {
      const mobile = mobileMatch[0];
      const lines = mobile.split('\n');
      lines.forEach(l => {
        if (
          (l.includes('href="/insights"') || l.includes('href="/fa/insights"')) &&
          (l.includes('All Insights') || l.includes('همه تحلیل‌ها') || l.includes('همه مقالات و گزارش‌ها'))
        ) {
          assert.fail(`${file} mobile submenu contains All Insights: ${l.trim()}`);
        }
      });
    }
  });

  const enIndex = fs.readFileSync('index.html', 'utf8');
  assert(enIndex.includes('/insights/calculators'), 'All Calculators must be present in index.html');

  const faIndex = fs.readFileSync('fa/index.html', 'utf8');
  assert(faIndex.includes('/fa/insights/calculators'), 'All Calculators must be present in fa/index.html');
});

// 8. Footer FAQ links preserved
test('Footer FAQ links preserved across the site', () => {
  let totalFooterFaq = 0;
  allHtmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/);
    if (footerMatch && footerMatch[0].includes('faq')) {
      const matches = footerMatch[0].match(/<a[^>]*href=["'][^"']*faq[^"']*["'][^>]*>[\s\S]*?<\/a>/gi) || [];
      totalFooterFaq += matches.length;
    }
  });
  console.log(`    Preserved ${totalFooterFaq} footer FAQ links across all HTML files`);
  assert(totalFooterFaq >= 150, `Expected at least 150 footer FAQ links, got ${totalFooterFaq}`);
});

console.log('================================================================');
console.log(`SUMMARY: ${passed} / ${passed + failed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) process.exit(1);
