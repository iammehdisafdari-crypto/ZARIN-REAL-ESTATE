import fs from 'node:fs';
import { JSDOM } from 'jsdom';

const pages = [
  'index.html',
  'properties.html',
  'services.html',
  'visas.html',
  'areas.html',
  'off-plan.html',
  'private-office.html',
  'insights.html',
  'heritage.html',
  'consultation.html'
];

for (const p of pages) {
  if (fs.existsSync(p)) {
    const dom = new JSDOM(fs.readFileSync(p, 'utf8'));
    const nav = dom.window.document.querySelector('header nav');
    if (!nav) {
      console.log(`${p}: No header nav found`);
      continue;
    }
    const triggers = nav.querySelectorAll('.mega-menu-trigger');
    const triggerSummaries = [];
    triggers.forEach(t => {
      const a = t.querySelector('a');
      const b = t.querySelector('button');
      const directTag = t.firstElementChild?.tagName;
      const text = (a || b || t).textContent.trim().split(/\s+/)[0];
      const href = a?.getAttribute('href') || null;
      triggerSummaries.push(`${text}(${directTag}${href ? ':' + href : ''})`);
    });
    console.log(`${p}:\n  ${triggerSummaries.join(', ')}`);
  }
}
