import fs from 'fs';

const content = fs.readFileSync('fa/index.html', 'utf8');
const contactLinks = content.match(/<a[^>]*href=["'](?:tel:|https:\/\/wa\.me|mailto:)[^"']*["'][^>]*>[\s\S]*?<\/a>/gi);
console.log('Count:', contactLinks ? contactLinks.length : 0);
if (contactLinks) {
  contactLinks.forEach((c, idx) => console.log(idx, c.replace(/\s+/g, ' ').slice(0, 150)));
}
