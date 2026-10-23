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

const allFiles = walk('.');
let enCount = 0;
let faCount = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('/properties#burj-view')) {
    content = content.replaceAll('/properties#burj-view', '/burj-khalifa-view-properties');
    changed = true;
    enCount++;
  }

  if (content.includes('/fa/properties#burj-view')) {
    content = content.replaceAll('/fa/properties#burj-view', '/fa/burj-khalifa-view-properties');
    changed = true;
    faCount++;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
}

console.log(`Updated ${enCount} files with English link /burj-khalifa-view-properties.`);
console.log(`Updated ${faCount} files with Persian link /fa/burj-khalifa-view-properties.`);
