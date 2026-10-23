import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function getHtmlFiles(dir) {
  let results = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory() && !full.includes('node_modules') && !full.includes('.git')) {
      results = results.concat(getHtmlFiles(full));
    } else if (item.isFile() && item.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log(`Scanning ${htmlFiles.length} HTML files...`);

let brokenFiles = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Look for: id="properties-mega-panel"
  // If the panel closing </div> is immediately followed by <div class="mega-menu-trigger ... group/offplan"
  // without a </div> closing the group/prop trigger.
  const regex = /(<div id="properties-mega-panel"[\s\S]*?<\/div>)\s*(<div class="mega-menu-trigger[^"]*group\/offplan)/;
  if (regex.test(content)) {
    brokenFiles.push(file);
  }
}

console.log(`Found ${brokenFiles.length} files where properties-mega-panel is unclosed before offplan trigger!`);
brokenFiles.slice(0, 10).forEach(f => console.log(' - ' + path.relative(rootDir, f)));
