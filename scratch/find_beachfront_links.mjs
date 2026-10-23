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
const matches = new Map();
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const found = content.match(/href=["'][^"']*beachfront[^"']*["']/g);
  if (found) {
    found.forEach(m => {
      matches.set(m, (matches.get(m) || 0) + 1);
    });
  }
}
console.log('Unique beachfront hrefs and counts:');
for (const [m, count] of matches.entries()) {
  console.log(`  ${m}: ${count}`);
}
