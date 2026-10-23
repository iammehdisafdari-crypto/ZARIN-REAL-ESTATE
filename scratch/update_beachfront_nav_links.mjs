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

  // Replace English properties#beachfront
  if (html.includes('/properties#beachfront')) {
    html = html.replace(/href="\/properties#beachfront"/g, 'href="/beachfront-properties-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/properties-for-rent#beachfront"')) {
    html = html.replace(/href="\/properties-for-rent#beachfront"/g, 'href="/beachfront-properties-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/properties-for-sale#beachfront"')) {
    html = html.replace(/href="\/properties-for-sale#beachfront"/g, 'href="/beachfront-properties-in-dubai"');
    changed = true;
  }

  // Replace Persian fa/properties#beachfront
  if (html.includes('/fa/properties#beachfront')) {
    html = html.replace(/href="\/fa\/properties#beachfront"/g, 'href="/fa/beachfront-properties-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/fa/properties-for-rent#beachfront"')) {
    html = html.replace(/href="\/fa\/properties-for-rent#beachfront"/g, 'href="/fa/beachfront-properties-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/fa/properties-for-sale#beachfront"')) {
    html = html.replace(/href="\/fa\/properties-for-sale#beachfront"/g, 'href="/fa/beachfront-properties-in-dubai"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, html, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated Beachfront navigation links in ${updatedCount} HTML files!`);
