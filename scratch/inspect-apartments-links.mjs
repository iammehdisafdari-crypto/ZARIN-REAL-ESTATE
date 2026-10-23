import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = findFiles(rootDir);
const snippets = new Set();

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/<a[^>]*href=["'][^"']*properties#apartments["'][^>]*>[\s\S]*?<\/a>/gi);
  if (matches) {
    for (const m of matches) snippets.add(m);
  }
}

console.log('Unique snippets found:', snippets.size);
for (const s of snippets) {
  console.log('---');
  console.log(s);
}
