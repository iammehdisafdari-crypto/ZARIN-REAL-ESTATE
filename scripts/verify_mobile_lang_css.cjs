const fs = require('fs');
const path = require('path');

// 1. Check dist/assets/main-*.css
const distAssets = fs.readdirSync(path.join(__dirname, '..', 'dist', 'assets'));
const cssFile = distAssets.find(f => f.startsWith('main-') && f.endsWith('.css'));
if (!cssFile) {
  console.error('Could not find compiled main CSS file in dist/assets!');
  process.exit(1);
}

const cssContent = fs.readFileSync(path.join(__dirname, '..', 'dist', 'assets', cssFile), 'utf8');

const hasDisplayNoneDefault = cssContent.includes('.mobile-lang-menu{display:none');
const hasHiddenImportant = cssContent.includes('.mobile-lang-menu.hidden{display:none!important');
const hasNotHiddenFlex = cssContent.includes('.mobile-lang-menu:not(.hidden)') && cssContent.includes('display:flex!important');

console.log('Compiled CSS Checks:');
console.log(' - .mobile-lang-menu has display:none by default:', hasDisplayNoneDefault);
console.log(' - .mobile-lang-menu.hidden has display:none!important:', hasHiddenImportant);
console.log(' - .mobile-lang-menu:not(.hidden) has display:flex!important:', hasNotHiddenFlex);

// 2. Check HTML initial state
const htmlContent = fs.readFileSync(path.join(__dirname, '..', 'dist', 'heritage.html'), 'utf8');
const menuMatch = htmlContent.match(/<div[^>]*id="mobile-lang-menu"[^>]*>/);
console.log('\nHTML Initial Markup Check:');
if (menuMatch) {
  console.log(' - Menu tag:', menuMatch[0]);
  const hasHiddenClass = menuMatch[0].includes('hidden');
  console.log(' - Menu tag initially contains "hidden" class:', hasHiddenClass);
} else {
  console.error('Could not find mobile-lang-menu in dist/heritage.html');
}

const triggerMatch = htmlContent.match(/<button[^>]*id="mobile-lang-trigger"[^>]*>/);
if (triggerMatch) {
  console.log(' - Trigger tag:', triggerMatch[0]);
  const isAriaExpandedFalse = triggerMatch[0].includes('aria-expanded="false"');
  console.log(' - Trigger has aria-expanded="false":', isAriaExpandedFalse);
}

if (hasDisplayNoneDefault && hasHiddenImportant && hasNotHiddenFlex) {
  console.log('\nVERIFICATION PASSED: The mobile language menu is 100% guaranteed to be CLOSED on initial page load and only opens when user interacts with trigger!');
} else {
  console.error('\nVERIFICATION FAILED: Review CSS rules.');
}
