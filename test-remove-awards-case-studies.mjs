import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { NAVIGATION_DATA } from './scripts/nav-data.js';

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', 'dist', '.git', 'scratch', 'cms-laravel'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, results);
    else if (entry.name.endsWith('.html')) results.push(full);
  }
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
console.log('VERIFICATION SUITE: REMOVE AWARDS & CASE STUDY FROM HERITAGE NAV');
console.log('================================================================\n');

// 1. Check scripts/nav-data.js (EN & FA)
test('scripts/nav-data.js English Heritage submenu has 0 Awards or Case Studies entries and preserves exact order', () => {
  const heritage = NAVIGATION_DATA.en.find(item => item.id === 'heritage');
  assert(heritage, 'heritage item exists in NAVIGATION_DATA.en');
  assert.strictEqual(heritage.categories.length, 2, 'Heritage has 2 categories (About ZARIN, Trust & Proof)');

  const about = heritage.categories[0];
  assert.strictEqual(about.title, 'About ZARIN');
  assert.deepStrictEqual(
    about.links.map(l => ({ label: l.label, href: l.href })),
    [
      { label: 'Our Story (since 2005)', href: '/heritage' },
      { label: "Founder's Letter", href: '/heritage/founder' },
      { label: 'Our Team', href: '/heritage/team' },
      { label: 'Author Profiles', href: '/heritage/authors' }
    ]
  );

  const trust = heritage.categories[1];
  assert.strictEqual(trust.title, 'Trust & Proof');
  assert.deepStrictEqual(
    trust.links.map(l => ({ label: l.label, href: l.href })),
    [
      { label: 'Testimonials', href: '/heritage/testimonials' },
      { label: 'Press & Media', href: '/heritage/press' }
    ]
  );
});

test('scripts/nav-data.js Persian Heritage submenu has 0 Awards (جوایز) or Case Studies (مطالعات موردی) entries and preserves exact order', () => {
  const heritage = NAVIGATION_DATA.fa.find(item => item.id === 'heritage');
  assert(heritage, 'heritage item exists in NAVIGATION_DATA.fa');
  assert.strictEqual(heritage.categories.length, 2, 'Persian Heritage has 2 categories');

  const about = heritage.categories[0];
  assert.strictEqual(about.title, 'درباره زرین');
  assert.deepStrictEqual(
    about.links.map(l => ({ label: l.label, href: l.href })),
    [
      { label: 'داستان ما (از سال ۲۰۰۵)', href: '/fa/heritage' },
      { label: 'پیام مؤسس مجموعه', href: '/fa/heritage/founder' },
      { label: 'تیم متخصصان', href: '/fa/heritage/team' },
      { label: 'پروفایل نویسندگان', href: '/fa/heritage/authors' }
    ]
  );

  const trust = heritage.categories[1];
  assert.strictEqual(trust.title, 'اعتبار و سوابق اثبات‌شده');
  assert.deepStrictEqual(
    trust.links.map(l => ({ label: l.label, href: l.href })),
    [
      { label: 'نظرات موکلان', href: '/fa/heritage/testimonials' },
      { label: 'رسانه‌ها و مطبوعات', href: '/fa/heritage/press' }
    ]
  );
});

const allHtmlFiles = walk('.');

function isRemovedHeritageLink(anchorHtml) {
  if (/data-i18n=["'](?:footer_awards|nav_case_studies)["']/i.test(anchorHtml)) return true;
  if (/href=["'][^"']*\/heritage\/(?:awards|case-studies)["']/i.test(anchorHtml)) return true;
  const textMatch = anchorHtml.match(/>([^<]+)<\/a>/i);
  if (textMatch) {
    const text = textMatch[1].trim();
    if (
      text === 'Awards' ||
      text === 'Case Study' ||
      text === 'Case Studies' ||
      text === 'جوایز' ||
      text === 'جوایز و افتخارات' ||
      text === 'مطالعات موردی' ||
      text === 'مطالعات موردی سرمایه‌گذاری'
    ) {
      return true;
    }
  }
  return false;
}

// 2. Desktop navigation check across all HTML files
test(`All ${allHtmlFiles.length} HTML files: Desktop <header> navigation has 0 Awards or Case Study entries`, () => {
  const violations = [];
  for (const file of allHtmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const headers = content.match(/<header\b[\s\S]*?<\/header>/gi) || [];
    for (const h of headers) {
      const anchors = h.match(/<a\b[^>]*>[\s\S]*?<\/a>/gi) || [];
      const bad = anchors.filter(isRemovedHeritageLink);
      if (bad.length > 0) violations.push({ file, bad });
    }
  }
  assert.strictEqual(violations.length, 0, `Desktop header violations found: ${JSON.stringify(violations.slice(0, 5))}`);
});

// 3. Mobile navigation check across all HTML files
test(`All ${allHtmlFiles.length} HTML files: Mobile #mobile-menu navigation has 0 Awards or Case Study entries`, () => {
  const violations = [];
  for (const file of allHtmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const mobiles = content.match(/<div\b[^>]*id=["']mobile-menu["'][\s\S]*?<\/nav>/gi) || [];
    for (const m of mobiles) {
      const anchors = m.match(/<a\b[^>]*>[\s\S]*?<\/a>/gi) || [];
      const bad = anchors.filter(isRemovedHeritageLink);
      if (bad.length > 0) violations.push({ file, bad });
    }
  }
  assert.strictEqual(violations.length, 0, `Mobile menu violations found: ${JSON.stringify(violations.slice(0, 5))}`);
});

// 4. Footer navigation check across all HTML files
test(`All ${allHtmlFiles.length} HTML files: <footer> navigation has 0 Awards or Case Study entries`, () => {
  const violations = [];
  for (const file of allHtmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const footers = content.match(/<footer\b[\s\S]*?<\/footer>/gi) || [];
    for (const f of footers) {
      const anchors = f.match(/<a\b[^>]*>[\s\S]*?<\/a>/gi) || [];
      const bad = anchors.filter(isRemovedHeritageLink);
      if (bad.length > 0) violations.push({ file, bad });
    }
  }
  assert.strictEqual(violations.length, 0, `Footer violations found: ${JSON.stringify(violations.slice(0, 5))}`);
});

// 5. Remaining Heritage links order & resolution check in EN and FA
test('All remaining 6 Heritage submenu links exist in exact order and resolve to existing files in EN and FA', () => {
  const expectedEn = [
    '/heritage',
    '/heritage/founder',
    '/heritage/team',
    '/heritage/authors',
    '/heritage/testimonials',
    '/heritage/press'
  ];
  const expectedFa = expectedEn.map(p => `/fa${p}`);

  const enIndex = fs.readFileSync('index.html', 'utf8');
  const enHeader = enIndex.match(/<header\b[\s\S]*?<\/header>/i)[0];
  const enMobileSub = enIndex.match(/<div id="mobile-heritage-submenu"[\s\S]*?<\/div>\s*<\/div>/i)[0];

  const enDesktopHeritageLinks = [...enHeader.matchAll(/href=["'](\/heritage[^"']*)["']/g)]
    .map(m => m[1])
    .slice(1); // skip parent trigger href="/heritage"
  assert.deepStrictEqual(enDesktopHeritageLinks, expectedEn, 'EN desktop Heritage submenu has exact 6 links in order');

  const enMobileHeritageLinks = [...enMobileSub.matchAll(/href=["'](\/heritage[^"']*)["']/g)].map(m => m[1]);
  assert.deepStrictEqual(enMobileHeritageLinks, expectedEn, 'EN mobile Heritage submenu has exact 6 links in order');

  const faIndex = fs.readFileSync('fa/index.html', 'utf8');
  const faHeader = faIndex.match(/<header\b[\s\S]*?<\/header>/i)[0];
  const faMobileSub = faIndex.match(/<div id="mobile-heritage-submenu"[\s\S]*?<\/div>\s*<\/div>/i)[0];

  const faDesktopHeritageLinks = [...faHeader.matchAll(/href=["'](\/fa\/heritage[^"']*)["']/g)]
    .map(m => m[1])
    .slice(1); // skip parent trigger href="/fa/heritage"
  assert.deepStrictEqual(faDesktopHeritageLinks, expectedFa, 'FA desktop Heritage submenu has exact 6 links in order');

  const faMobileHeritageLinks = [...faMobileSub.matchAll(/href=["'](\/fa\/heritage[^"']*)["']/g)].map(m => m[1]);
  assert.deepStrictEqual(faMobileHeritageLinks, expectedFa, 'FA mobile Heritage submenu has exact 6 links in order');

  for (const route of [...expectedEn, ...expectedFa]) {
    const rel = route.replace(/^\//, '');
    const htmlFile = `${rel}.html`;
    const indexFile = path.join(rel, 'index.html');
    assert(
      fs.existsSync(htmlFile) || fs.existsSync(indexFile),
      `Route ${route} resolves on disk (${htmlFile} or ${indexFile})`
    );
  }
});

console.log('\n================================================================');
console.log(`SUMMARY: ${passed} / ${passed + failed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) process.exit(1);

