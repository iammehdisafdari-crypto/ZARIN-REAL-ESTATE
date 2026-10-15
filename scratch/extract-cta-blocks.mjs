import fs from 'fs';

const pages = [
  'index.html', 'fa/index.html',
  'properties.html', 'fa/properties.html',
  'off-plan.html', 'fa/off-plan.html',
  'areas.html', 'fa/areas.html',
  'services.html', 'fa/services.html',
  'private-office.html', 'fa/private-office.html',
  'consultation.html', 'fa/consultation.html',
  'heritage.html', 'fa/heritage.html'
];

for (const p of pages) {
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    // find the contact links with group and flex
    const matches = content.match(/<div class="space-y-4 mb-8">[\s\S]*?<\/div>\s*<div class="flex flex-wrap/i)
      || content.match(/<div class="space-y-4 mb-8">[\s\S]*?<\/div>/i);
    console.log(`\n=================== ${p} ===================`);
    if (matches) {
      console.log(matches[0]);
    } else {
      console.log('No space-y-4 mb-8 match');
      // check other contact blocks
      const alt = content.match(/<a[^>]*href=["'](?:tel:|https:\/\/wa\.me)[^>]*class=["'][^"']*flex items-center gap-4[^"']*["'][\s\S]*?<\/a>/gi);
      if (alt) {
        alt.forEach(a => console.log(a));
      }
    }
  }
}
