import fs from 'fs';
import { JSDOM } from 'jsdom';

const enHtml = fs.readFileSync('villas-for-sale-in-dubai.html', 'utf8');
const dom = new JSDOM(enHtml, { runScripts: 'dangerously' });
const doc = dom.window.document;

console.log('Testing interactive filters in DOM...');
const chip5BR = doc.querySelector('.filter-chip[data-filter-val="5"]');
const chipAll = doc.querySelector('.filter-chip[data-filter-val="all"]');
const cards = doc.querySelectorAll('.villa-card');

const initialCount = Array.from(cards).filter(c => !c.classList.contains('hidden')).length;
console.log('Initial visible cards count:', initialCount);
if (initialCount !== 6) throw new Error('Expected 6 initially visible cards');

// Click 5BR
chip5BR.click();
const visibleAfter5BR = Array.from(cards).filter(c => !c.classList.contains('hidden')).length;
console.log('Visible cards after clicking 5BR:', visibleAfter5BR);
if (visibleAfter5BR !== 2) throw new Error(`Expected 2 visible cards for 5BR (Frond K and Mirador), got ${visibleAfter5BR}`);

// Click All
chipAll.click();
const visibleAfterAll = Array.from(cards).filter(c => !c.classList.contains('hidden')).length;
console.log('Visible cards after clicking All:', visibleAfterAll);
if (visibleAfterAll !== 6) throw new Error(`Expected 6 visible cards after reset, got ${visibleAfterAll}`);

// Test quick-filter from bedroom card
const bedCard4 = doc.querySelector('.bedroom-card-link[data-filter-target="4"]');
bedCard4.click();
const visibleAfterBedCard4 = Array.from(cards).filter(c => !c.classList.contains('hidden')).length;
console.log('Visible cards after clicking 4BR card:', visibleAfterBedCard4);
if (visibleAfterBedCard4 !== 2) throw new Error(`Expected 2 visible cards for 4BR (Maple and Jumeirah Islands), got ${visibleAfterBedCard4}`);

console.log('✅ ALL DOM INTERACTION TESTS PASSED!');
