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
console.log('Total HTML files to analyze:', files.length);

const homeHtml = fs.readFileSync('index.html', 'utf8');
const homeDom = new JSDOM(homeHtml);
const homeHeader = homeDom.window.document.querySelector('#site-header');
const homeNav = homeDom.window.document.querySelector('#site-header nav');

console.log('Homepage header nav children count:', homeNav.children.length);
for (let i = 0; i < homeNav.children.length; i++) {
  const child = homeNav.children[i];
  const directA = child.querySelector(':scope > a');
  const directBtn = child.querySelector(':scope > button');
  const toggleBtn = child.querySelector('.mega-menu-toggle-btn');
  const panel = child.querySelector('.mega-menu-panel');
  console.log(`Home Nav [${i}]: class="${child.className}"`, {
    hasDirectA: !!directA,
    directAHref: directA?.getAttribute('href'),
    directAText: directA?.textContent.trim().replace(/\s+/g, ' '),
    hasDirectBtn: !!directBtn,
    hasToggleBtn: !!toggleBtn,
    hasPanel: !!panel
  });
}

// Now compare each page against homepage
const anomalies = [];

for (const f of files) {
  if (f === 'index.html') continue;
  const html = fs.readFileSync(f, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const header = doc.querySelector('#site-header, header');
  if (!header) {
    anomalies.push({ file: f, issue: 'No header found' });
    continue;
  }
  const nav = header.querySelector('nav');
  if (!nav) {
    anomalies.push({ file: f, issue: 'No nav in header' });
    continue;
  }

  const triggers = Array.from(nav.children);
  const diffs = [];

  // Check if triggers use <button> instead of <a> for primary links
  const buttonOnlyTriggers = triggers.filter(t => {
    const directBtn = t.querySelector(':scope > button:not(.mega-menu-toggle-btn)');
    const directA = t.querySelector(':scope > a');
    return directBtn && !directA;
  });

  if (buttonOnlyTriggers.length > 0) {
    diffs.push(`${buttonOnlyTriggers.length} triggers use bare <button> instead of <a>`);
  }

  // Check if properties has split button/link
  const propTrigger = triggers.find(t => t.classList.contains('group/prop') || t.textContent.includes('Properties') || t.textContent.includes('املاک'));
  if (propTrigger) {
    const propLink = propTrigger.querySelector('a#properties-nav-link');
    const propToggle = propTrigger.querySelector('button#properties-nav-toggle');
    if (!propLink || !propToggle) {
      diffs.push(`Properties trigger missing #properties-nav-link or #properties-nav-toggle (has link: ${!!propLink}, has toggle: ${!!propToggle})`);
    }
  }

  // Check if off-plan has split button/link
  const offplanTrigger = triggers.find(t => t.classList.contains('group/offplan') || t.textContent.includes('Off-Plan') || t.textContent.includes('آف‌پلان'));
  if (offplanTrigger) {
    const offplanLink = offplanTrigger.querySelector('a#offplan-nav-link');
    const offplanToggle = offplanTrigger.querySelector('button#offplan-nav-toggle');
    if (!offplanLink || !offplanToggle) {
      diffs.push(`Off-Plan trigger missing #offplan-nav-link or #offplan-nav-toggle (has link: ${!!offplanLink}, has toggle: ${!!offplanToggle})`);
    }
  }

  // Check if nav.js is included
  const hasNavJs = html.includes('/scripts/nav.js');
  if (!hasNavJs) {
    diffs.push('Missing /scripts/nav.js');
  }

  // Check if main.css is included
  const hasMainCss = html.includes('/styles/main.css');
  if (!hasMainCss) {
    diffs.push('Missing /styles/main.css');
  }

  // Check if page has inline styles that might override mega-menu
  const inlineStyles = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join('\n');
  if (inlineStyles.includes('.mega-menu-panel')) {
    diffs.push('Has page-specific inline .mega-menu-panel CSS');
  }

  // Check if page has inline script with conflicting mega menu listeners
  const inlineScripts = Array.from(doc.querySelectorAll('script:not([src])')).map(s => s.textContent).join('\n');
  if (inlineScripts.includes('propNavToggle') || inlineScripts.includes('offplanNavToggle')) {
    diffs.push('Has inline script with separate toggle listeners');
  }

  if (diffs.length > 0) {
    anomalies.push({ file: f, diffs });
  }
}

console.log(`\nFound ${anomalies.length} files with header anomalies out of ${files.length} total files.`);

// Group anomalies by diff pattern
const groups = {};
for (const a of anomalies) {
  const key = (a.diffs || [a.issue]).sort().join(' | ');
  if (!groups[key]) groups[key] = [];
  groups[key].push(a.file);
}

for (const [pattern, list] of Object.entries(groups)) {
  console.log(`\n[Pattern: ${pattern}] (count: ${list.length})`);
  console.log('Sample files:', list.slice(0, 5));
}
