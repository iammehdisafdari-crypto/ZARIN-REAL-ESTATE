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

  // Replace English properties#branded-residences
  if (html.includes('/properties#branded-residences')) {
    html = html.replace(/href="\/properties#branded-residences"/g, 'href="/branded-residences-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/properties-for-rent#branded-residences"')) {
    html = html.replace(/href="\/properties-for-rent#branded-residences"/g, 'href="/branded-residences-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/properties-for-sale#branded-residences"')) {
    html = html.replace(/href="\/properties-for-sale#branded-residences"/g, 'href="/branded-residences-in-dubai"');
    changed = true;
  }

  // Replace Persian fa/properties#branded-residences
  if (html.includes('/fa/properties#branded-residences')) {
    html = html.replace(/href="\/fa\/properties#branded-residences"/g, 'href="/fa/branded-residences-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/fa/properties-for-rent#branded-residences"')) {
    html = html.replace(/href="\/fa\/properties-for-rent#branded-residences"/g, 'href="/fa/branded-residences-in-dubai"');
    changed = true;
  }
  if (html.includes('href="/fa/properties-for-sale#branded-residences"')) {
    html = html.replace(/href="\/fa\/properties-for-sale#branded-residences"/g, 'href="/fa/branded-residences-in-dubai"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, html, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated Branded Residences navigation links in ${updatedCount} HTML files!`);
