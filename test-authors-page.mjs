import fs from 'fs';
import path from 'path';

const root = process.cwd();
let passed = 0;
let failed = 0;

function assert(cond, msg) {
  if (cond) {
    passed++;
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${msg}`);
  }
}

console.log('=== ZARIN AUTHOR PROFILES VERIFICATION ===\n');

const enPath = path.join(root, 'heritage/authors.html');
const enIdxPath = path.join(root, 'heritage/authors/index.html');
const faPath = path.join(root, 'fa/heritage/authors.html');
const faIdxPath = path.join(root, 'fa/heritage/authors/index.html');

// 1. File existence & mirror parity
console.log('1. Checking file existence and directory index mirrors...');
assert(fs.existsSync(enPath), 'heritage/authors.html exists');
assert(fs.existsSync(enIdxPath), 'heritage/authors/index.html exists');
assert(fs.existsSync(faPath), 'fa/heritage/authors.html exists');
assert(fs.existsSync(faIdxPath), 'fa/heritage/authors/index.html exists');

const enHtml = fs.readFileSync(enPath, 'utf8');
const enIdxHtml = fs.readFileSync(enIdxPath, 'utf8');
const faHtml = fs.readFileSync(faPath, 'utf8');
const faIdxHtml = fs.readFileSync(faIdxPath, 'utf8');

assert(enHtml === enIdxHtml, 'EN authors.html and authors/index.html are byte-identical');
assert(faHtml === faIdxHtml, 'FA authors.html and authors/index.html are byte-identical');

// 2. HTML attributes, canonical, hreflang, and meta
console.log('2. Checking HTML attributes, canonical URLs, and hreflang...');
assert(enHtml.includes('<html lang="en" dir="ltr">'), 'EN html lang="en" dir="ltr"');
assert(faHtml.includes('<html lang="fa" dir="rtl">'), 'FA html lang="fa" dir="rtl"');
assert(enHtml.includes('<link rel="canonical" href="https://zarinrealestate.com/heritage/authors">'), 'EN canonical');
assert(faHtml.includes('<link rel="canonical" href="https://zarinrealestate.com/fa/heritage/authors">'), 'FA canonical');

const hreflangEn = '<link rel="alternate" hreflang="en" href="https://zarinrealestate.com/heritage/authors">';
const hreflangFa = '<link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/heritage/authors">';
const hreflangX = '<link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/heritage/authors">';

assert(enHtml.includes(hreflangEn) && enHtml.includes(hreflangFa) && enHtml.includes(hreflangX), 'EN reciprocal hreflang tags');
assert(faHtml.includes(hreflangEn) && faHtml.includes(hreflangFa) && faHtml.includes(hreflangX), 'FA reciprocal hreflang tags');

// 3. Navigation & Active state
console.log('3. Checking Heritage submenu active state & shared scripts...');
assert(/href="\/heritage\/authors"[^>]*aria-current="page"/.test(enHtml), 'EN desktop/mobile nav marks /heritage/authors as aria-current="page"');
assert(/href="\/fa\/heritage\/authors"[^>]*aria-current="page"/.test(faHtml), 'FA desktop/mobile nav marks /fa/heritage/authors as aria-current="page"');
assert(!/href="\/heritage\/team"[^>]*aria-current="page"/.test(enHtml), 'EN nav does NOT mark /heritage/team as aria-current="page"');
assert(!/href="\/fa\/heritage\/team"[^>]*aria-current="page"/.test(faHtml), 'FA nav does NOT mark /fa/heritage/team as aria-current="page"');
assert(enHtml.includes('<script type="module" src="/scripts/nav.js"></script>'), 'EN includes /scripts/nav.js');
assert(faHtml.includes('<script type="module" src="/scripts/nav.js"></script>'), 'FA includes /scripts/nav.js');

// 4. All 10 Required Section IDs
console.log('4. Checking all 10 required section IDs...');
const sectionIds = [
  'id="hero"',
  'id="tldr"',
  'id="why-bylines"',
  'id="the-content-desks"',
  'id="reviewing-advisors"',
  'id="editorial-standards"',
  'id="how-we-use-ai"',
  'id="corrections"',
  'id="faq"',
  'id="cta"'
];
for (const sec of sectionIds) {
  assert(enHtml.includes(sec), `EN has section ${sec}`);
  assert(faHtml.includes(sec), `FA has section ${sec}`);
}
assert(enHtml.includes('id="tldr-summary"'), 'EN has #tldr-summary in hero');
assert(faHtml.includes('id="tldr-summary"'), 'FA has #tldr-summary in hero');

// 5. Headline Stats
console.log('5. Checking Hero stats...');
for (const stat of ['>200+<', '>3<', '>4<', '>Daily<']) {
  assert(enHtml.includes(stat), `EN hero contains stat ${stat}`);
}
for (const stat of ['>+۲۰۰<', '>۳<', '>۴<', '>روزانه<']) {
  assert(faHtml.includes(stat), `FA hero contains stat ${stat}`);
}

// 6. Content Desks (3 desks: Ed, Re, Vi)
console.log('6. Checking 3 Content Desks...');
for (const desk of ['ZARIN Editorial', 'ZARIN Research', 'ZARIN Visa Team', '>Ed<', '>Re<', '>Vi<']) {
  assert(enHtml.includes(desk), `EN contains content desk item ${desk}`);
}
for (const deskFa of ['تحریریه زرین', 'پژوهش زرین', 'تیم ویزای زرین', '>Ed<', '>Re<', '>Vi<']) {
  assert(faHtml.includes(deskFa), `FA contains content desk item ${deskFa}`);
}

// 7. Reviewing Advisors (4 advisors: ZA, RK, EW, LH)
console.log('7. Checking 4 Reviewing Advisors...');
for (const adv of ['ZARIN Founder', 'Rohit Kapoor', 'Emma Whitfield', 'Li Hong', '>ZA<', '>RK<', '>EW<', '>LH<']) {
  assert(enHtml.includes(adv), `EN contains reviewing advisor ${adv}`);
}
for (const advFa of ['مؤسس زرین', 'روهیت کاپور', 'اما ویتفیلد', 'لی هونگ', '>ZA<', '>RK<', '>EW<', '>LH<']) {
  assert(faHtml.includes(advFa), `FA contains reviewing advisor ${advFa}`);
}

// 8. Editorial Standards (4 standards) & Corrections Policy (3 steps)
console.log('8. Checking Editorial Standards (4 items) and Corrections Policy (3 steps)...');
assert(enHtml.includes('Data first, adjectives last') && enHtml.includes('DLD and RERA are primary sources') && enHtml.includes('No paid placements, anywhere') && enHtml.includes('Dates and data bases on every page'), 'EN has 4 editorial standards');
assert(faHtml.includes('اولویت با داده‌ها، نه صفت‌های تبلیغاتی') && faHtml.includes('DLD و RERA منابع اصلی هستند') && faHtml.includes('عدم پذیرش جایگاه پولی و سفارشی') && faHtml.includes('درج تاریخ و مبنای داده در هر صفحه'), 'FA has 4 editorial standards');

assert(enHtml.includes('You challenge') && enHtml.includes('We verify') && enHtml.includes('We correct &amp; log') && enHtml.includes('Why we want your challenges'), 'EN has 3 correction steps and callout');
assert(faHtml.includes('شما به چالش می‌کشید') && faHtml.includes('ما راستی‌آزمایی می‌کنیم') && faHtml.includes('ما اصلاح و ثبت می‌کنیم') && faHtml.includes('چرا از چالش‌های آماری شما استقبال می‌کنیم؟'), 'FA has 3 correction steps and callout');

// 9. How We Use AI (What the tooling does / never does)
console.log('9. Checking How We Use AI section...');
assert(enHtml.includes('What the tooling does') && enHtml.includes('What the tooling never does'), 'EN has AI two-column rules');
assert(faHtml.includes('آنچه ابزار کمکی انجام می‌دهد') && faHtml.includes('آنچه ابزار هرگز انجام نمی‌دهد'), 'FA has AI two-column rules');

// 10. FAQ Section (8 questions, 1st open, 2-8 closed)
console.log('10. Checking FAQ section (8 questions, 1st open)...');
const enDetails = enHtml.match(/<details class="bg-ink-850 border border-white-line rounded-sm"[^>]*>/g) || [];
const faDetails = faHtml.match(/<details class="bg-ink-850 border border-white-line rounded-sm"[^>]*>/g) || [];
assert(enDetails.length === 8, `EN has 8 FAQ details elements (found ${enDetails.length})`);
assert(faDetails.length === 8, `FA has 8 FAQ details elements (found ${faDetails.length})`);
assert(enDetails[0].includes('open'), 'EN 1st FAQ is open by default');
assert(faDetails[0].includes('open'), 'FA 1st FAQ is open by default');
for (let i = 1; i < 8; i++) {
  assert(!enDetails[i].includes('open'), `EN FAQ #${i + 1} is closed by default`);
  assert(!faDetails[i].includes('open'), `FA FAQ #${i + 1} is closed by default`);
}

// 11. JSON-LD Schemas (4 valid JSON-LD blocks)
console.log('11. Checking 4 JSON-LD structured data blocks...');
for (const [label, html] of [['EN', enHtml], ['FA', faHtml]]) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert(scripts.length === 4, `${label} has 4 JSON-LD blocks (found ${scripts.length})`);
  const types = [];
  for (const m of scripts) {
    try {
      const parsed = JSON.parse(m[1]);
      types.push(parsed['@type']);
    } catch (e) {
      assert(false, `${label} JSON-LD parse error: ${e.message}`);
    }
  }
  assert(types.includes('BreadcrumbList'), `${label} has BreadcrumbList schema`);
  assert(types.includes('AboutPage'), `${label} has AboutPage schema`);
  assert(types.includes('FAQPage'), `${label} has FAQPage schema`);
  assert(types.includes('WebPage'), `${label} has WebPage (speakable) schema`);
}

console.log(`\n=== SUMMARY: ${passed} passed, ${failed} failed ===`);
if (failed > 0) process.exit(1);
