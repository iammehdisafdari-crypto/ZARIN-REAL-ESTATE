import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

function findHtmlFiles(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'scratch') continue;
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(findHtmlFiles(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const files = findHtmlFiles('.');
console.log('Total files found:', files.length);

const report = {
  missingMainCss: [],
  missingNavJs: [],
  hasInlineMegaStyle: [],
  hasConflictingInlineScript: [],
  hasBareButtons: [],
  missingPropToggle: [],
  missingOffplanToggle: [],
  not8Triggers: []
};

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  if (!html.includes('/styles/main.css')) {
    report.missingMainCss.push(f);
  }

  if (!html.includes('/scripts/nav.js')) {
    report.missingNavJs.push(f);
  }

  const styles = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join('\n');
  if (styles.includes('.mega-menu-panel') || styles.includes('.mega-menu-trigger')) {
    report.hasInlineMegaStyle.push(f);
  }

  const scripts = Array.from(doc.querySelectorAll('script:not([src])')).map(s => s.textContent).join('\n');
  if (scripts.includes('propNavToggle') || scripts.includes('offplanNavToggle') || scripts.includes('areasNavToggle')) {
    report.hasConflictingInlineScript.push(f);
  }

  const nav = doc.querySelector('#site-header nav, .site-header nav');
  if (nav) {
    const triggers = Array.from(nav.children).filter(c => c.classList.contains('mega-menu-trigger') || c.tagName === 'DIV');
    if (triggers.length !== 8) {
      report.not8Triggers.push({ file: f, count: triggers.length });
    }

    const bareButtons = triggers.filter(t => {
      const btn = t.querySelector(':scope > button:not(.mega-menu-toggle-btn)');
      const a = t.querySelector(':scope > a');
      return btn && !a;
    });
    if (bareButtons.length > 0) {
      report.hasBareButtons.push({ file: f, count: bareButtons.length });
    }

    const hasProp = triggers.some(t => t.classList.contains('group/prop') || t.querySelector('#properties-nav-toggle'));
    if (!hasProp) {
      report.missingPropToggle.push(f);
    }

    const hasOffplan = triggers.some(t => t.classList.contains('group/offplan') || t.querySelector('#offplan-nav-toggle'));
    if (!hasOffplan) {
      report.missingOffplanToggle.push(f);
    }
  }
}

console.log('--- AUDIT SUMMARY ---');
console.log('missingMainCss:', report.missingMainCss.length);
console.log('missingNavJs:', report.missingNavJs.length);
console.log('hasInlineMegaStyle:', report.hasInlineMegaStyle.length);
console.log('hasConflictingInlineScript:', report.hasConflictingInlineScript.length);
console.log('hasBareButtons:', report.hasBareButtons.length);
console.log('missingPropToggle:', report.missingPropToggle.length);
console.log('missingOffplanToggle:', report.missingOffplanToggle.length);
console.log('not8Triggers:', report.not8Triggers.length);
