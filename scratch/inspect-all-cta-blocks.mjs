import fs from 'fs';
import path from 'path';

const files = [
  'fa/index.html',
  'fa/properties.html',
  'fa/properties/index.html',
  'fa/properties-for-sale.html',
  'fa/off-plan.html',
  'fa/off-plan/index.html',
  'fa/areas.html',
  'fa/areas/index.html',
  'fa/services.html',
  'fa/services/index.html',
  'fa/private-office.html',
  'fa/private-office/index.html',
  'fa/consultation.html',
  'fa/consultation/index.html',
  'fa/heritage.html',
  'fa/heritage/index.html'
];

for (const f of files) {
  if (!fs.existsSync(f)) {
    console.log('MISSING:', f);
    continue;
  }
  const content = fs.readFileSync(f, 'utf8');
  // Match the block containing space-y-4 mb-8 with contact cards
  const match = content.match(/<div class="space-y-4 mb-8">([\s\S]*?)<\/div>\s*<div class="flex flex-wrap/i)
    || content.match(/<div class="space-y-4 mb-8">([\s\S]*?)<\/div>\s*<!-- Trust/i);
  console.log(`\n=================== ${f} ===================`);
  if (match) {
    console.log(match[0].slice(0, 300) + '...');
  } else {
    console.log('No direct space-y-4 mb-8 before trust badges matched');
  }
}
