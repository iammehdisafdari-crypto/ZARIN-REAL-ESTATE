import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('private-office.html', 'utf8');
const regex = /href=["']([^"'#]+)["']/g;
const links = new Set();
let m;
while ((m = regex.exec(html)) !== null) {
  links.add(m[1]);
}

const list = Array.from(links).sort();
console.log('Total unique non-hash hrefs:', list.length);

const internalLinks = list.filter(l => l.startsWith('/'));
console.log('\n--- Internal Routes ---');
for (const l of internalLinks) {
  // check if file exists in project or dist
  const p1 = path.join(process.cwd(), l + '.html');
  const p2 = path.join(process.cwd(), l, 'index.html');
  const p3 = path.join(process.cwd(), l);
  const exists = fs.existsSync(p1) || fs.existsSync(p2) || fs.existsSync(p3);
  console.log(`${l} -> ${exists ? 'EXISTS' : 'NOT FOUND (Placeholder/Future Route)'}`);
}
