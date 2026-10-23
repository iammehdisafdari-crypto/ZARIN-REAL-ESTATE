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
let enUpdated = 0;
let faUpdated = 0;

for (const f of htmlFiles) {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  if (content.includes('/properties#apartments')) {
    content = content.replaceAll('/properties#apartments', '/apartments-for-sale-in-dubai');
    changed = true;
    enUpdated++;
  }

  if (content.includes('/fa/properties#apartments')) {
    content = content.replaceAll('/fa/properties#apartments', '/fa/apartments-for-sale-in-dubai');
    changed = true;
    faUpdated++;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
  }
}

console.log(`Updated ${enUpdated} files for English link (/properties#apartments -> /apartments-for-sale-in-dubai)`);
console.log(`Updated ${faUpdated} files for Persian link (/fa/properties#apartments -> /fa/apartments-for-sale-in-dubai)`);
