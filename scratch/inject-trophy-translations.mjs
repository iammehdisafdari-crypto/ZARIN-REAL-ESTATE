import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { trophyTranslationsEn, trophyTranslationsFa } from './trophy-translations.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const i18nPath = path.join(rootDir, 'scripts', 'i18n.js');

let i18nContent = fs.readFileSync(i18nPath, 'utf8');

// Insert into translations.en right after '"filter_trophy": "Trophy Residences →",'
const enAnchor = '"filter_trophy": "Trophy Residences →",';
if (!i18nContent.includes('"trophy_meta_title"')) {
  if (i18nContent.includes(enAnchor)) {
    const enLines = Object.entries(trophyTranslationsEn)
      .map(([k, v]) => `    ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
      .join('\n');
    i18nContent = i18nContent.replace(enAnchor, enAnchor + '\n' + enLines);
    console.log('✅ Injected EN trophy translations');
  }

  // Insert into translations.fa
  // Find "filter_trophy" in the fa block
  const faRegex = /"filter_trophy":\s*"[^"]*",/g;
  let matches = [...i18nContent.matchAll(faRegex)];
  if (matches.length > 0) {
    const lastFaMatch = matches[matches.length - 1][0];
    const faLines = Object.entries(trophyTranslationsFa)
      .map(([k, v]) => `    ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
      .join('\n');
    i18nContent = i18nContent.replace(lastFaMatch, lastFaMatch + '\n' + faLines);
    console.log('✅ Injected FA trophy translations');
  }

  fs.writeFileSync(i18nPath, i18nContent, 'utf8');
  console.log('Saved scripts/i18n.js');
} else {
  console.log('Trophy translations already present in scripts/i18n.js');
}
