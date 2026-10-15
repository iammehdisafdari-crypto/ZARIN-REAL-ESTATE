import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

function scan(dir) {
  let hashLinks = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (['node_modules', 'dist', 'cms-laravel', '.git', 'scratch'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      hashLinks = hashLinks.concat(scan(full));
    } else if (entry.name.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const dom = new JSDOM(content);
      const links = Array.from(dom.window.document.querySelectorAll('a[href]'));
      const hashes = links.filter(a => a.getAttribute('href') === '#');
      if (hashes.length > 0) {
        hashLinks.push({
          file: full,
          count: hashes.length,
          texts: hashes.map(a => a.textContent.trim().slice(0, 30))
        });
      }
    }
  }
  return hashLinks;
}

const res = scan('.');
console.log('Files with href="#" links:', res.length);
if (res.length > 0) {
  console.log(JSON.stringify(res, null, 2));
}
