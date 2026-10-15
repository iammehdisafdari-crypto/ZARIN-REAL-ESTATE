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
console.log(`Auditing ${faFiles.length} HTML files in ./fa for contact items...\n`);

for (const file of faFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Check for CTA contact blocks (classes with group, items-center, gap-4)
  const contactLinks = content.match(/<a[^>]*href=["'](?:tel:|https:\/\/wa\.me|mailto:)[^>]*class=["'][^"']*group[^"']*["'][^>]*>[\s\S]*?<\/a>/gi);
  if (contactLinks) {
    console.log(`File: ${file} -> Found ${contactLinks.length} contact card(s)`);
    contactLinks.forEach((link, i) => {
      const hasIconFirst = /<a[^>]*>\s*<div[^>]*w-12[^>]*>/i.test(link);
      const hasTextAfter = link.includes('text-sm font-bold');
      const href = link.match(/href=["']([^"']*)["']/)?.[1];
      console.log(`  [${i+1}] href="${href}" | iconFirst: ${hasIconFirst} | hasText: ${hasTextAfter}`);
    });
  }
}
