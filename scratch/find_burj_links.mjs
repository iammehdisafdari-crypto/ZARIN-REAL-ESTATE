import fs from 'fs';
import path from 'path';

function walk(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', 'cms-laravel', '.vscode', 'scratch'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

const files = walk('.');
let propBurj = 0;
let faPropBurj = 0;
let bareBurj = 0;

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('/properties#burj-view')) propBurj++;
  if (content.includes('/fa/properties#burj-view')) faPropBurj++;
  if (content.includes('href="#burj-view"')) bareBurj++;
}

console.log('Files with /properties#burj-view:', propBurj);
console.log('Files with /fa/properties#burj-view:', faPropBurj);
console.log('Files with href="#burj-view":', bareBurj);
