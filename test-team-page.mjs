import fs from 'fs';
import path from 'path';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('=== RUNNING TESTS FOR OUR TEAM PAGE ===\n');

// 1. Files Existence & Mirror Parity
console.log('Test Suite 1: File Existence & Directory Mirror Parity');
const enFile = 'heritage/team.html';
const enMirror = 'heritage/team/index.html';
const faFile = 'fa/heritage/team.html';
const faMirror = 'fa/heritage/team/index.html';

assert(fs.existsSync(enFile), 'heritage/team.html exists');
assert(fs.existsSync(enMirror), 'heritage/team/index.html exists');
assert(fs.existsSync(faFile), 'fa/heritage/team.html exists');
assert(fs.existsSync(faMirror), 'fa/heritage/team/index.html exists');

const enContent = fs.readFileSync(enFile, 'utf8');
const enMirrorContent = fs.readFileSync(enMirror, 'utf8');
const faContent = fs.readFileSync(faFile, 'utf8');
const faMirrorContent = fs.readFileSync(faMirror, 'utf8');

assert(enContent === enMirrorContent, 'English file and directory mirror are 100% identical');
assert(faContent === faMirrorContent, 'Persian file and directory mirror are 100% identical');

// 2. English Page Validation
console.log('\nTest Suite 2: English Page Architecture & Semantics');
assert(enContent.includes('<html lang="en" dir="ltr">'), 'English HTML lang="en" and dir="ltr"');
assert(enContent.includes('<link rel="canonical" href="https://zarinrealestate.com/heritage/team">'), 'Canonical URL is /heritage/team');
assert(enContent.includes('<link rel="alternate" hreflang="en" href="https://zarinrealestate.com/heritage/team">'), 'Hreflang en points to /heritage/team');
assert(enContent.includes('<link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/heritage/team">'), 'Hreflang fa points to /fa/heritage/team');
assert(enContent.includes('<link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/heritage/team">'), 'Hreflang x-default points to /heritage/team');
assert(enContent.includes('<title>ZARIN\'s Dubai Real Estate Advisory Team | ZARIN</title>'), 'Correct English title');
assert(enContent.includes('<link rel="stylesheet" href="/styles/main.css">'), 'Main CSS stylesheet included');
assert(enContent.includes('<script type="module" src="/scripts/nav.js"></script>'), 'nav.js module included');
assert(!enContent.includes('class="page-home"'), 'No page-home class on internal page');

// Nav active state
assert(enContent.includes('href="/heritage/team"') && enContent.includes('aria-current="page"'), 'Header has active Our Team item with aria-current="page"');
assert(enContent.includes('id="mobile-menu"'), 'Mobile menu drawer present');

// 10 Content sections
const expectedSections = [
  'hero',
  'tldr',
  'why-small',
  'the-four-people',
  'country-desks',
  'credentials',
  'six-stages',
  'coverage',
  'faq',
  'cta'
];

expectedSections.forEach(id => {
  assert(enContent.includes(`id="${id}"`), `Section #${id} present in English page`);
});

// Headline stats
assert(enContent.includes('The People Behind') && enContent.includes('the Advice'), 'Hero headline present');
assert(enContent.includes('Senior People') && enContent.includes('>4<'), 'Stat: 4 Senior People present');
assert(enContent.includes('Advisor, End-to-End') && enContent.includes('>1<'), 'Stat: 1 Advisor End-to-End present');
assert(enContent.includes('EN &middot; AR &middot; FA') && enContent.includes('>3<'), 'Stat: 3 Languages present');
assert(enContent.includes('Founder Active Since') && enContent.includes('>2005<'), 'Stat: Founder Active Since 2005 present');
assert(enContent.includes('id="tldr-summary"'), 'TL;DR summary element present');

// Four people
assert(enContent.includes('ZARIN Founder'), 'Profile: ZARIN Founder present');
assert(enContent.includes('Rohit Kapoor'), 'Profile: Rohit Kapoor present');
assert(enContent.includes('Emma Whitfield'), 'Profile: Emma Whitfield present');
assert(enContent.includes('Li Hong'), 'Profile: Li Hong present');

// Country desks
assert(enContent.includes('India Desk'), 'Desk: India Desk present');
assert(enContent.includes('UK Desk'), 'Desk: UK Desk present');
assert(enContent.includes('China Desk'), 'Desk: China Desk present');
assert(enContent.includes('Iran &amp; GCC Desk') || enContent.includes('Iran & GCC Desk'), 'Desk: Iran & GCC Desk present');

// Six stages
assert(enContent.includes('Understand Mandate'), 'Stage 1: Understand Mandate present');
assert(enContent.includes('Unbiased Filtering'), 'Stage 2: Unbiased Filtering present');
assert(enContent.includes('Due Diligence'), 'Stage 3: Due Diligence present');
assert(enContent.includes('Negotiate &amp; Structure') || enContent.includes('Negotiate & Structure'), 'Stage 4: Negotiate & Structure present');
assert(enContent.includes('Conveyancing &amp; Closing') || enContent.includes('Conveyancing & Closing'), 'Stage 5: Conveyancing & Closing present');
assert(enContent.includes('Stay Supported'), 'Stage 6: Stay Supported present');

// 8 FAQs and open state
const enFaqMatches = [...enContent.matchAll(/<details[^>]*>/g)].map(m => m[0]);
assert(enFaqMatches.length === 8, `English FAQ has 8 questions (found ${enFaqMatches.length})`);
assert(enFaqMatches[0].includes('open'), 'First FAQ item is open by default');
for (let i = 1; i < enFaqMatches.length; i++) {
  assert(!enFaqMatches[i].includes('open'), `FAQ item #${i + 1} is closed by default`);
}

// Schemas in English
assert(enContent.includes('"@type": "BreadcrumbList"'), 'BreadcrumbList schema present');
assert(enContent.includes('"@type": "AboutPage"'), 'AboutPage schema present');
assert(enContent.includes('"@type": "FAQPage"'), 'FAQPage schema present');
assert(enContent.includes('"@type": "WebPage"'), 'WebPage schema present');

// 3. Persian Page Validation
console.log('\nTest Suite 3: Persian Page Architecture & Localization Parity');
assert(faContent.includes('<html lang="fa" dir="rtl">'), 'Persian HTML lang="fa" and dir="rtl"');
assert(faContent.includes('<link rel="canonical" href="https://zarinrealestate.com/fa/heritage/team">'), 'Canonical URL is /fa/heritage/team');
assert(faContent.includes('<link rel="alternate" hreflang="en" href="https://zarinrealestate.com/heritage/team">'), 'Hreflang en points to /heritage/team');
assert(faContent.includes('<link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/heritage/team">'), 'Hreflang fa points to /fa/heritage/team');
assert(faContent.includes('<link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/heritage/team">'), 'Hreflang x-default points to /heritage/team');
assert(faContent.includes('<title>تیم مشاوران ارشد املاک زرین دبی | ZARIN</title>'), 'Correct Persian title');
assert(faContent.includes('<link rel="stylesheet" href="/styles/main.css">'), 'Main CSS stylesheet included');
assert(faContent.includes('<script type="module" src="/scripts/nav.js"></script>'), 'nav.js module included');
assert(!faContent.includes('class="page-home"'), 'No page-home class on internal page');

// Nav active state
assert(faContent.includes('href="/fa/heritage/team"') && faContent.includes('aria-current="page"'), 'Header has active Our Team item with aria-current="page"');
assert(faContent.includes('id="mobile-menu"'), 'Mobile menu drawer present in Persian');

// 10 Content sections in Persian
expectedSections.forEach(id => {
  assert(faContent.includes(`id="${id}"`), `Section #${id} present in Persian page`);
});

// Persian stats
assert(faContent.includes('>۴<'), 'Persian Stat: ۴ Senior People present');
assert(faContent.includes('>۱<'), 'Persian Stat: ۱ Advisor End-to-End present');
assert(faContent.includes('>۳<'), 'Persian Stat: ۳ Languages present');
assert(faContent.includes('>۲۰۰۵<'), 'Persian Stat: ۲۰۰۵ Founder Active Since present');

// Persian profiles
assert(faContent.includes('مؤسس زرین'), 'Persian Profile: مؤسس زرین present');
assert(faContent.includes('روهیت کاپور'), 'Persian Profile: روهیت کاپور present');
assert(faContent.includes('اما ویتفیلد'), 'Persian Profile: اما ویتفیلد present');
assert(faContent.includes('لی هونگ'), 'Persian Profile: لی هونگ present');

// Persian desks
assert(faContent.includes('دسک هند'), 'Persian Desk: دسک هند present');
assert(faContent.includes('دسک بریتانیا'), 'Persian Desk: دسک بریتانیا present');
assert(faContent.includes('دسک چین'), 'Persian Desk: دسک چین present');
assert(faContent.includes('دسک ایران و حوزه خلیج فارس'), 'Persian Desk: دسک ایران و حوزه خلیج فارس present');

// Persian 8 FAQs
const faFaqMatches = [...faContent.matchAll(/<details[^>]*>/g)].map(m => m[0]);
assert(faFaqMatches.length === 8, `Persian FAQ has 8 questions (found ${faFaqMatches.length})`);
assert(faFaqMatches[0].includes('open'), 'First Persian FAQ item is open by default');
for (let i = 1; i < faFaqMatches.length; i++) {
  assert(!faFaqMatches[i].includes('open'), `Persian FAQ item #${i + 1} is closed by default`);
}

// Schemas in Persian
assert(faContent.includes('"@type": "BreadcrumbList"'), 'Persian BreadcrumbList schema present');
assert(faContent.includes('"@type": "AboutPage"'), 'Persian AboutPage schema present');
assert(faContent.includes('"@type": "FAQPage"'), 'Persian FAQPage schema present');
assert(faContent.includes('"@type": "WebPage"'), 'Persian WebPage schema present');

console.log(`\n========================================`);
console.log(`TOTAL: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log(`========================================`);

if (failed > 0) {
  process.exit(1);
}

