import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html);
const doc = dom.window.document;

const win = doc.defaultView;
console.log('Testing doc.querySelectorAll(".lang-btn")...');
doc.querySelectorAll('.lang-btn');
console.log('Testing doc.getElementById("mobile-lang-label")...');
doc.getElementById('mobile-lang-label');
console.log('Testing doc.querySelectorAll("#mobile-lang-menu .mobile-lang-check")...');
doc.querySelectorAll('#mobile-lang-menu .mobile-lang-check');
console.log('Testing doc.querySelectorAll("a[href]")...');
doc.querySelectorAll('a[href]');
console.log('Testing doc.querySelectorAll("header [data-i18n], #mobile-menu [data-i18n]")...');
doc.querySelectorAll('header [data-i18n], #mobile-menu [data-i18n]');
console.log('Testing doc.querySelectorAll(\'header a[href*="private-office"], #mobile-menu a[href*="private-office"]\')...');
doc.querySelectorAll('header a[href*="private-office"], #mobile-menu a[href*="private-office"]');
console.log('All selectors passed!');
