import fs from 'fs';
import path from 'path';

function findHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const faFiles = findHtmlFiles('./fa');
console.log(`Found ${faFiles.length} HTML files in ./fa`);

for (const file of faFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Look for contact blocks or phone links inside sections
  const ctaMatches = content.match(/<section[^>]*id=["'](?:consultation|contact|inquiry|book-consultation)[^>]*>[\s\S]*?<\/section>/gi);
  if (ctaMatches) {
    console.log(`\n=== File: ${file} (CTA Section Found: ${ctaMatches.length}) ===`);
    ctaMatches.forEach((sec, idx) => {
      // Find any flex contact items with icons
      const linkMatches = sec.match(/<a[^>]*href=["'](?:tel:|https:\/\/wa\.me|mailto:)[^>]*>[\s\S]*?<\/a>/gi);
      if (linkMatches) {
        console.log(`  CTA #${idx + 1} contact links (${linkMatches.length}):`);
        linkMatches.forEach(l => {
          // print simplified link
          console.log('   ', l.replace(/\s+/g, ' ').slice(0, 150));
        });
      }
    });
  } else {
    // Check if there are contact links elsewhere in main
    const mainMatch = content.match(/<main[^>]*>[\s\S]*?<\/main>/i);
    if (mainMatch) {
      const contactLinks = mainMatch[0].match(/<a[^>]*href=["'](?:tel:|https:\/\/wa\.me)[^>]*class=["'][^"']*group[^"']*["'][^>]*>[\s\S]*?<\/a>/gi);
      if (contactLinks) {
        console.log(`\n=== File: ${file} (Non-section CTA links in main: ${contactLinks.length}) ===`);
        contactLinks.forEach(l => console.log('   ', l.replace(/\s+/g, ' ').slice(0, 150)));
      }
    }
  }
}
