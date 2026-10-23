import fs from 'fs';
import path from 'path';

function findHtmlFiles(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(findHtmlFiles(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const files = findHtmlFiles('.');
console.log('Total HTML files:', files.length);

const headerTypes = {};
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const hasSiteHeader = content.includes('id="site-header"');
  const hasPropertiesNavLink = content.includes('id="properties-nav-link"');
  const hasPropertiesNavToggle = content.includes('id="properties-nav-toggle"');
  const hasButtonTrigger = content.includes('<div class="mega-menu-trigger"><button') || content.includes('<div class="mega-menu-trigger">\n            <button') || content.includes('<div class="mega-menu-trigger">\r\n            <button');
  const hasMainCss = content.includes('/styles/main.css');
  const hasHeaderCss = content.includes('/styles/header.css');
  const hasNavJs = content.includes('/scripts/nav.js');
  
  const key = JSON.stringify({ hasSiteHeader, hasPropertiesNavLink, hasPropertiesNavToggle, hasButtonTrigger, hasMainCss, hasHeaderCss, hasNavJs });
  if (!headerTypes[key]) headerTypes[key] = [];
  headerTypes[key].push(f);
}

for (const [key, list] of Object.entries(headerTypes)) {
  console.log(key, 'count:', list.length, 'sample:', list.slice(0, 3));
}
