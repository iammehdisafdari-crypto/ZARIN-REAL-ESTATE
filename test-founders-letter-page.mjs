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

console.log('=== ZARIN FOUNDER\'S LETTER VERIFICATION ===\n');

const enFiles = [
  'heritage/founders-letter.html',
  'heritage/founders-letter/index.html',
  'heritage/founder.html',
  'heritage/founder/index.html'
];
const faFiles = [
  'fa/heritage/founders-letter.html',
  'fa/heritage/founders-letter/index.html',
  'fa/heritage/founder.html',
  'fa/heritage/founder/index.html'
];

// 1. File existence & mirror parity
console.log('1. Checking file existence and directory index mirrors...');
for (const f of [...enFiles, ...faFiles]) {
  assert(fs.existsSync(path.join(root, f)), `${f} exists`);
}

const enHtml = fs.readFileSync(path.join(root, enFiles[0]), 'utf8');
const faHtml = fs.readFileSync(path.join(root, faFiles[0]), 'utf8');

for (const f of enFiles.slice(1)) {
  assert(fs.readFileSync(path.join(root, f), 'utf8') === enHtml, `${f} is byte-identical to ${enFiles[0]}`);
}
for (const f of faFiles.slice(1)) {
  assert(fs.readFileSync(path.join(root, f), 'utf8') === faHtml, `${f} is byte-identical to ${faFiles[0]}`);
}

// 2. Exact <main> reproduction check against supplied HTML
console.log('2. Checking byte-for-byte <main> reproduction against supplied source...');
const supplied = fs.readFileSync('C:\\Users\\Fatima\\.gemini\\antigravity\\brain\\66e081b3-7988-43c4-84ba-c582ccb5528a\\scratch\\supplied_founders_letter.html', 'utf8');
const suppliedMain = supplied.match(/<main[\s\S]*?<\/main>/)[0];
const enMain = enHtml.match(/<main[\s\S]*?<\/main>/)[0];
assert(enMain === suppliedMain, 'EN <main> is 100% byte-identical to supplied HTML <main>');

// 3. HTML attributes, canonical, hreflang
console.log('3. Checking HTML attributes, canonical URLs, and hreflang...');
assert(enHtml.includes('<html lang="en" dir="ltr">'), 'EN html lang="en" dir="ltr"');
assert(faHtml.includes('<html lang="fa" dir="rtl">'), 'FA html lang="fa" dir="rtl"');
assert(enHtml.includes('<link rel="canonical" href="https://zarinrealestate.com/heritage/founders-letter">'), 'EN canonical');
assert(faHtml.includes('<link rel="canonical" href="https://zarinrealestate.com/fa/heritage/founders-letter">'), 'FA canonical');

const hreflangEn = '<link rel="alternate" hreflang="en" href="https://zarinrealestate.com/heritage/founders-letter">';
const hreflangFa = '<link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/heritage/founders-letter">';
const hreflangX = '<link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/heritage/founders-letter">';

assert(enHtml.includes(hreflangEn) && enHtml.includes(hreflangFa) && enHtml.includes(hreflangX), 'EN reciprocal hreflang tags');
assert(faHtml.includes(hreflangEn) && faHtml.includes(hreflangFa) && faHtml.includes(hreflangX), 'FA reciprocal hreflang tags');

// 4. Navigation & Active state
console.log('4. Checking Heritage submenu active state & shared scripts...');
assert(/href="\/heritage\/founder"[^>]*aria-current="page"/.test(enHtml), 'EN desktop/mobile/footer nav marks /heritage/founder as aria-current="page"');
assert(/href="\/fa\/heritage\/founder"[^>]*aria-current="page"/.test(faHtml), 'FA desktop/mobile/footer nav marks /fa/heritage/founder as aria-current="page"');
assert(!/href="\/heritage\/authors"[^>]*aria-current="page"/.test(enHtml), 'EN nav does NOT mark /heritage/authors as aria-current="page"');
assert(!/href="\/fa\/heritage\/authors"[^>]*aria-current="page"/.test(faHtml), 'FA nav does NOT mark /fa/heritage/authors as aria-current="page"');
assert(enHtml.includes('<script type="module" src="/scripts/nav.js"></script>'), 'EN includes /scripts/nav.js');
assert(faHtml.includes('<script type="module" src="/scripts/nav.js"></script>'), 'FA includes /scripts/nav.js');

// 5. All 10 Required Section IDs
console.log('5. Checking all 10 required section IDs...');
const sectionIds = [
  'id="hero"',
  'id="tldr"',
  'id="the-letter"',
  'id="market-cycles"',
  'id="why-zarin-exists"',
  'id="what-we-promise"',
  'id="how-we-charge"',
  'id="who-we-serve"',
  'id="faq"',
  'id="cta"'
];
for (const sec of sectionIds) {
  assert(enHtml.includes(sec), `EN has section ${sec}`);
  assert(faHtml.includes(sec), `FA has section ${sec}`);
}
assert(enHtml.includes('id="tldr-summary"'), 'EN has #tldr-summary in hero');
assert(faHtml.includes('id="tldr-summary"'), 'FA has #tldr-summary in hero');

// 6. Headline Stats (2005, 2, 4, 2023)
console.log('6. Checking Hero stats...');
for (const stat of ['>2005<', '>2<', '>4<', '>2023<']) {
  assert(enHtml.includes(stat), `EN hero contains stat ${stat}`);
}
for (const stat of ['>۲۰۰۵<', '>۲<', '>۴<', '>۲۰۲۳<']) {
  assert(faHtml.includes(stat), `FA hero contains stat ${stat}`);
}

// 7. The Letter (9 paragraphs, date, signature)
console.log('7. Checking The Letter (9 paragraphs, date, signature)...');
const faDigits = ['۱','۲','۳','۴','۵','۶','۷','۸','۹'];
for (let i = 1; i <= 9; i++) {
  assert(enHtml.includes(`aria-label="Letter paragraph ${i} of 9"`), `EN has Letter paragraph ${i} of 9`);
  assert(faHtml.includes(`aria-label="پاراگراف ${faDigits[i-1]} از ۹ نامه"`), `FA has Letter paragraph ${i} of 9`);
}
assert(enHtml.includes('Dubai, November 2026') && enHtml.includes('&mdash; The Founder, ZARIN Real Estate'), 'EN letter has date and signature');
assert(faHtml.includes('دبی، نوامبر ۲۰۲۶') && faHtml.includes('&mdash; مؤسس، املاک زرین (ZARIN Real Estate)'), 'FA letter has date and signature');

// 8. Market Cycles (2008, 2014, 2020, 2024–26)
console.log('8. Checking 4 Market Cycles...');
for (const c of ['>2008<', '>2014<', '>2020<', '>2024&ndash;26<']) {
  assert(enHtml.includes(c), `EN has market cycle ${c}`);
}
for (const cFa of ['>۲۰۰۸<', '>۲۰۱۴<', '>۲۰۲۰<', '>۲۰۲۴&ndash;۲۶<']) {
  assert(faHtml.includes(cFa), `FA has market cycle ${cFa}`);
}

// 9. How We Charge (Fee Table + 2 Worked Examples)
console.log('9. Checking Fee Table and 2 Worked Examples...');
for (const fee of ['2% of the purchase price', '4% of the purchase price', 'AED 4,580', '&asymp; 30 days', 'AED 124,580', 'AED 132,830']) {
  assert(enHtml.includes(fee), `EN has fee item ${fee}`);
}
for (const feeFa of ['۲٪ قیمت خرید', '۴٪ قیمت خرید', '۴,۵۸۰ درهم', '&asymp; ۳۰ روز', '۱۲۴,۵۸۰ درهم', '۱۳۲,۸۳۰ درهم']) {
  assert(faHtml.includes(feeFa), `FA has fee item ${feeFa}`);
}

// 10. Who We Serve (5 Country Desks)
console.log('10. Checking 5 Country Desks...');
for (const desk of ['Iran &amp; Farsi-Speaking Desk', 'India Desk', 'UK Desk', 'China Desk', 'GCC &amp; Wider Region']) {
  assert(enHtml.includes(desk), `EN has desk ${desk}`);
}
for (const deskFa of ['دسک ایران و فارسی‌زبانان', 'دسک هند (India Desk)', 'دسک بریتانیا (UK Desk)', 'دسک چین (China Desk)', 'کشورهای خلیج فارس و منطقه']) {
  assert(faHtml.includes(deskFa), `FA has desk ${deskFa}`);
}

// 11. FAQ Section (8 questions, 1st open, 2-8 closed)
console.log('11. Checking FAQ section (8 questions, 1st open)...');
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

// 12. JSON-LD Schemas (4 valid JSON-LD blocks)
console.log('12. Checking 4 JSON-LD structured data blocks...');
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
