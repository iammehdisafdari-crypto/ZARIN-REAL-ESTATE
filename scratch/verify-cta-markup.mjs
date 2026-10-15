import fs from 'fs';

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

let allPassed = true;

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  // Match cta-contact-card links
  const cards = content.match(/<a[^>]*class="[^"]*cta-contact-card[^"]*"[^>]*>[\s\S]*?<\/a>/gi);
  if (!cards || cards.length < 2) {
    console.log(`❌ [FAIL] ${f}: expected at least 2 cta-contact-cards, found ${cards ? cards.length : 0}`);
    allPassed = false;
    continue;
  }

  let fileOk = true;
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // Check Child 1 is icon box (w-12 h-12)
    const hasIconBox = /<div class="flex-shrink-0 w-12 h-12[^>]*>\s*<svg/i.test(card);
    // Check Child 2 is cta-contact-text text-right
    const hasTextBlock = /<div class="cta-contact-text text-right">\s*<div class="text-sm font-bold/i.test(card);
    if (!hasIconBox || !hasTextBlock) {
      console.log(`❌ [FAIL] ${f} card #${i + 1}: hasIconBox=${hasIconBox}, hasTextBlock=${hasTextBlock}`);
      fileOk = false;
      allPassed = false;
    }
  }

  if (fileOk) {
    console.log(`✅ [PASS] ${f} (${cards.length} cards properly structured)`);
  }
}

if (allPassed) {
  console.log('\n🎉 ALL 16 PERSIAN FILES FULLY VERIFIED AND PASSING!');
} else {
  console.log('\n❌ Some files failed verification.');
}
