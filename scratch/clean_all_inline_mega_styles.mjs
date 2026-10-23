import fs from 'fs';
import path from 'path';

function findHtmlFiles(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'scratch') continue;
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(findHtmlFiles(full));
    } else if (file.endsWith('.html')) {
      results.push(full.replace(/\\/g, '/'));
    }
  }
  return results;
}

const files = findHtmlFiles('.');
let cleanedFiles = 0;

for (const f of files) {
  if (f === 'index.html' || f === 'fa/index.html') continue;

  let html = fs.readFileSync(f, 'utf8');
  let changed = false;

  const newHtml = html.replace(/<style>([\s\S]*?)<\/style>/g, (styleMatch, cssContent) => {
    if (!cssContent.includes('.mega-menu')) return styleMatch;
    
    // Split css into lines or rules, filter out anything referencing mega-menu
    const lines = cssContent.split('\n');
    const filteredLines = lines.filter(line => !line.includes('.mega-menu'));
    
    // Also if lines are compressed, remove any remaining .mega-menu rules
    let cleaned = filteredLines.join('\n')
      .replace(/\.mega-menu[^{}]*\{[^}]*\}/g, '')
      .replace(/\.mega-menu[^\n;{}]*/g, '');

    changed = true;
    return `<style>${cleaned}</style>`;
  });

  if (changed) {
    fs.writeFileSync(f, newHtml, 'utf8');
    cleanedFiles++;
  }
}

console.log(`Cleaned inline mega-menu styles in ${cleanedFiles} files.`);
