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
let updatedCount = 0;

for (const f of files) {
  let html = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Replace English properties#townhouses
  if (html.includes('/properties#townhouses')) {
    html = html.replace(/href="\/properties#townhouses"/g, 'href="/townhouses-for-sale-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/properties-for-sale#townhouses"')) {
    html = html.replace(/href="\/properties-for-sale#townhouses"/g, 'href="/townhouses-for-sale-in-dubai"');
    changed = true;
  }

  // Replace Persian fa/properties#townhouses
  if (html.includes('/fa/properties#townhouses')) {
    html = html.replace(/href="\/fa\/properties#townhouses"/g, 'href="/fa/townhouses-for-sale-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/fa/properties-for-sale#townhouses"')) {
    html = html.replace(/href="\/fa\/properties-for-sale#townhouses"/g, 'href="/fa/townhouses-for-sale-in-dubai"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, html, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated Townhouses navigation link in ${updatedCount} HTML files!`);
