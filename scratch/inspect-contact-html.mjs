import fs from 'fs';

const pages = [
  'fa/index.html',
  'fa/properties.html',
  'fa/off-plan.html',
  'fa/areas.html',
  'fa/services.html',
  'fa/private-office.html',
  'fa/consultation.html',
  'fa/heritage.html',
  'fa/visas.html',
  'fa/insights.html'
];

for (const p of pages) {
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const matches = content.match(/<a[^>]*href=["'](?:tel:|https:\/\/wa\.me)[^>]*>[\s\S]*?<\/a>/gi);
    console.log(`\n=================== ${p} ===================`);
    if (matches) {
      matches.forEach(m => console.log(m.trim()));
    } else {
      console.log('No matches');
    }
  }
}
