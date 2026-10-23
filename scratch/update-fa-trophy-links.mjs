import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function walk(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const faFiles = walk(path.join(rootDir, 'fa'));
let modifiedCount = 0;

for (const f of faFiles) {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('/fa/properties#trophy-residences')) {
    content = content.replaceAll('/fa/properties#trophy-residences', '/fa/trophy-residences');
    fs.writeFileSync(f, content, 'utf8');
    modifiedCount++;
    console.log(`Updated: ${path.relative(rootDir, f)}`);
  }
}

console.log(`Total FA files updated: ${modifiedCount}`);
