import fs from 'fs';
import { JSDOM } from 'jsdom';

console.log('================================================================');
console.log('PHASE 4 VERIFICATION: REMOVE "LIVE TRACKER" FROM ALL OFF-PLAN HERO');
console.log('================================================================\n');

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

const enFiles = [
  'off-plan/projects.html',
  'off-plan/projects/index.html'
];

const faFiles = [
  'fa/off-plan/projects.html',
  'fa/off-plan/projects/index.html'
];

console.log('--- 1. English All Off-Plan Page Verification ---');
for (const f of enFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  assert(!content.toLowerCase().includes('live tracker'), `[${f}] "Live tracker" text removed completely`);
  assert(doc.querySelector('.live-dot') === null, `[${f}] .live-dot element removed`);

  // Eyebrow label verification
  const eyebrow = doc.querySelector('main section:first-of-type .inline-flex');
  assert(eyebrow !== null, `[${f}] Eyebrow container exists`);
  assert(eyebrow && eyebrow.textContent.includes('Off-Plan · All Active Projects'), `[${f}] Eyebrow has "Off-Plan · All Active Projects" text`);
  assert(eyebrow && eyebrow.querySelector('.bg-gold-400') !== null, `[${f}] Gold accent line intact`);

  // Hero content preservation
  const h1 = doc.querySelector('#hero-headline');
  assert(h1 !== null && h1.textContent.includes('All Off-Plan'), `[${f}] Hero H1 preserved`);
  const tldr = doc.querySelector('#tldr-summary');
  assert(tldr !== null && tldr.textContent.length > 50, `[${f}] TL;DR summary preserved`);

  // Developer tracker link in nav preserved
  const devTracker = doc.querySelector('a[href="/off-plan/developer-reputation-tracker"]');
  assert(devTracker !== null, `[${f}] Developer Reputation Tracker menu link preserved`);
}

console.log('\n--- 2. Persian All Off-Plan Page Verification ---');
for (const f of faFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  assert(!content.includes('ردیاب زنده'), `[${f}] Persian "ردیاب زنده" removed completely`);
  assert(!content.toLowerCase().includes('live tracker'), `[${f}] "Live tracker" absent in Persian file`);
  assert(doc.querySelector('.live-dot') === null, `[${f}] .live-dot element removed`);

  // Eyebrow label verification
  const eyebrow = doc.querySelector('main section:first-of-type .inline-flex');
  assert(eyebrow !== null, `[${f}] Eyebrow container exists in RTL`);
  assert(eyebrow && eyebrow.textContent.includes('تمامی پروژه‌های فعال'), `[${f}] Eyebrow has Persian text`);
  assert(eyebrow && eyebrow.querySelector('.bg-gold-400') !== null, `[${f}] Gold accent line intact`);

  // Hero content preservation
  const h1 = doc.querySelector('#hero-headline');
  assert(h1 !== null && h1.textContent.includes('پیش‌فروش'), `[${f}] Persian Hero H1 preserved`);
  const tldr = doc.querySelector('#tldr-summary');
  assert(tldr !== null && tldr.textContent.length > 50, `[${f}] Persian TL;DR summary preserved`);

  // Developer tracker link in nav preserved
  const devTracker = doc.querySelector('a[href="/fa/off-plan/developer-reputation-tracker"]');
  assert(devTracker !== null, `[${f}] Persian Developer Reputation Tracker menu link preserved`);
}

console.log('\n--- 3. Clean URL Parity ---');
const enRoot = fs.readFileSync('off-plan/projects.html', 'utf8');
const enIndex = fs.readFileSync('off-plan/projects/index.html', 'utf8');
assert(enRoot === enIndex, 'English root .html and /index.html are completely identical');

const faRoot = fs.readFileSync('fa/off-plan/projects.html', 'utf8');
const faIndex = fs.readFileSync('fa/off-plan/projects/index.html', 'utf8');
assert(faRoot === faIndex, 'Persian root .html and /index.html are completely identical');

console.log(`\n================================================================`);
console.log(`TOTAL: ${passed} PASSED, ${failed} FAILED`);
console.log(`================================================================\n`);

if (failed > 0) process.exit(1);
