import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function getHtmlFiles(dir) {
  let results = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory() && !full.includes('node_modules') && !full.includes('.git') && !full.includes('dist')) {
      results = results.concat(getHtmlFiles(full));
    } else if (item.isFile() && item.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log(`Checking ${htmlFiles.length} HTML files for unclosed properties mega-menu-trigger...`);

let fixedCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('id="properties-mega-panel"')) continue;

  // Check if properties-mega-panel is directly followed by another trigger without closing </div>
  // Specifically: <div id="properties-mega-panel" ...> ... </div> \s* <div class="mega-menu-trigger
  const regex = /(<div id="properties-mega-panel"[\s\S]*?<\/div>)(\s*)(<div class="mega-menu-trigger|<div class="lang-switch|<\/nav>)/;
  const match = content.match(regex);
  if (match) {
    // If there is only one </div> before the next trigger, we need to insert another </div>
    // Let's verify by checking how many direct children triggers the nav has
    const domBefore = new JSDOM(content);
    const navBefore = domBefore.window.document.querySelector('header nav');
    if (navBefore) {
      const directBefore = navBefore.querySelectorAll(':scope > .mega-menu-trigger').length;
      const totalTriggers = navBefore.querySelectorAll('.mega-menu-trigger').length;

      if (directBefore < totalTriggers) {
        // Fix by adding </div> after properties-mega-panel
        // Note: match[1] is the panel div
        const fixed = content.replace(regex, `$1\n          </div>\n\n          $3`);
        
        // Verify with JSDOM
        const domAfter = new JSDOM(fixed);
        const navAfter = domAfter.window.document.querySelector('header nav');
        const directAfter = navAfter ? navAfter.querySelectorAll(':scope > .mega-menu-trigger').length : 0;
        
        fs.writeFileSync(file, fixed, 'utf8');
        fixedCount++;
        console.log(`Fixed ${path.relative(rootDir, file)}: direct triggers ${directBefore} -> ${directAfter} (total ${totalTriggers})`);
      }
    }
  }
}

console.log(`\nSuccessfully fixed ${fixedCount} files!`);
