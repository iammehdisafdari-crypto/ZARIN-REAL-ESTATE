import fs from 'fs';
import { JSDOM } from 'jsdom';

console.log('================================================================');
console.log('BURJ KHALIFA VIEW - ROUTING & HEADER VERIFICATION');
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

// 1. Check HTML Header classes and elements
console.log('--- 1. Header Structure & CSS Classes in Burj View Files ---');
const files = [
  'burj-khalifa-view-properties.html',
  'burj-khalifa-view-properties/index.html',
  'fa/burj-khalifa-view-properties.html',
  'fa/burj-khalifa-view-properties/index.html'
];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  assert(!content.includes('href="/styles/header.css"'), `[${f}] Does NOT link to /styles/header.css (which caused margin-left: auto shift)`);
  assert(content.includes('@tailwindcss/browser') || content.includes('tailwindcss'), `[${f}] Includes Tailwind`);
  assert(content.includes('flex items-center justify-between'), `[${f}] Header flex container has justify-between`);
}

// 2. Scenario: User on English page (e.g. /properties) with stale localStorage='fa'
console.log('\n--- 2. Runtime Simulation: English page with localStorage = "fa" ---');
const enContent = fs.readFileSync('burj-khalifa-view-properties.html', 'utf8');
const domEn = new JSDOM(enContent, {
  url: 'https://zarinrealestate.com/burj-khalifa-view-properties',
  runScripts: 'outside-only'
});

domEn.window.localStorage.setItem('zarin_lang', 'fa');

const navModule = await import('./scripts/nav.js');
const i18nModule = await import('./scripts/i18n.js');

navModule.initNavigation(domEn.window.document);

assert(domEn.window.document.documentElement.lang === 'en', 'HTML lang is "en"');
assert(domEn.window.document.documentElement.dir === 'ltr', 'HTML dir is "ltr"');
assert(domEn.window.localStorage.getItem('zarin_lang') === 'en', 'localStorage synchronized to "en"');

const enBurjLink = domEn.window.document.querySelector('#properties-mega-panel a[href="/burj-khalifa-view-properties"]');
assert(enBurjLink !== null, 'Properties mega menu link points to English /burj-khalifa-view-properties');

const enAnyFaLink = domEn.window.document.querySelector('header a[href^="/fa/burj"]');
assert(enAnyFaLink === null, 'No /fa/burj link in English header');

// 3. Scenario: User on Persian page
console.log('\n--- 3. Runtime Simulation: Persian page ---');
const faContent = fs.readFileSync('fa/burj-khalifa-view-properties.html', 'utf8');
const domFa = new JSDOM(faContent, {
  url: 'https://zarinrealestate.com/fa/burj-khalifa-view-properties',
  runScripts: 'outside-only'
});

navModule.initNavigation(domFa.window.document);

assert(domFa.window.document.documentElement.lang === 'fa', 'FA HTML lang is "fa"');
assert(domFa.window.document.documentElement.dir === 'rtl', 'FA HTML dir is "rtl"');
assert(domFa.window.localStorage.getItem('zarin_lang') === 'fa', 'FA localStorage synchronized to "fa"');

const faBurjLink = domFa.window.document.querySelector('#properties-mega-panel a[href="/fa/burj-khalifa-view-properties"]');
assert(faBurjLink !== null, 'FA Properties mega menu link points to Persian /fa/burj-khalifa-view-properties');

console.log(`\n================================================================`);
console.log(`TOTAL: ${passed} PASSED, ${failed} FAILED`);
console.log(`================================================================\n`);

if (failed > 0) process.exit(1);
