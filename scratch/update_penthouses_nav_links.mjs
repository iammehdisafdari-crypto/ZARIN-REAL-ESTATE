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

  // Replace English properties#penthouses
  if (html.includes('/properties#penthouses')) {
    html = html.replace(/href="\/properties#penthouses"/g, 'href="/penthouses-for-sale-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/properties-for-sale#penthouses"')) {
    html = html.replace(/href="\/properties-for-sale#penthouses"/g, 'href="/penthouses-for-sale-in-dubai"');
    changed = true;
  }

  // Replace Persian fa/properties#penthouses
  if (html.includes('/fa/properties#penthouses')) {
    html = html.replace(/href="\/fa\/properties#penthouses"/g, 'href="/fa/penthouses-for-sale-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/fa/properties-for-sale#penthouses"')) {
    html = html.replace(/href="\/fa\/properties-for-sale#penthouses"/g, 'href="/fa/penthouses-for-sale-in-dubai"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, html, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated Penthouses navigation link in ${updatedCount} HTML files!`);
