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
    if (item.isDirectory() && !full.includes('node_modules') && !full.includes('.git') && !full.includes('dist')) {
      results = results.concat(getHtmlFiles(full));
    } else if (item.isFile() && item.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log(`Checking ${htmlFiles.length} HTML files...`);

let updatedCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  const isFa = file.includes('\\fa\\') || file.includes('/fa/') || file.startsWith('fa/') || file.startsWith('fa\\');

  // Replace English references
  if (!isFa) {
    // Desktop:
    content = content.replace(
      /<a href="\/properties#rentals"([^>]*)data-i18n="nav_all_rentals">([^<]*)<\/a>/g,
      '<a href="/properties-for-rent"$1data-i18n="nav_all_rentals">All Rentals</a>'
    );
    // Any remaining /properties#rentals
    content = content.replace(/href="\/properties#rentals"/g, 'href="/properties-for-rent"');
  } else {
    // Persian:
    content = content.replace(
      /<a href="\/fa\/properties#rentals"([^>]*)data-i18n="nav_all_rentals">([^<]*)<\/a>/g,
      '<a href="/fa/properties-for-rent"$1data-i18n="nav_all_rentals">همه‌ی املاک برای اجاره</a>'
    );
    // Any remaining /fa/properties#rentals
    content = content.replace(/href="\/fa\/properties#rentals"/g, 'href="/fa/properties-for-rent"');
    // Also if an untranslated Persian link had "همه‌ی اجاره‌ها" or similar without #rentals, ensure it points to /fa/properties-for-rent and has the standard title
    content = content.replace(
      /<a href="\/fa\/properties-for-rent"([^>]*)data-i18n="nav_all_rentals">([^<]*)<\/a>/g,
      '<a href="/fa/properties-for-rent"$1data-i18n="nav_all_rentals">همه‌ی املاک برای اجاره</a>'
    );
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated submenu in: ${path.relative(rootDir, file)}`);
  }
}

console.log(`Total updated files: ${updatedCount}`);
