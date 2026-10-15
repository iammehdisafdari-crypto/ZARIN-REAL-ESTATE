import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const { translations } = await import('../scripts/i18n.js');
const fa = translations.fa || {};

['properties.html', 'off-plan.html', 'areas.html'].forEach(file => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /data-i18n="([^"]+)"/g;
  let match;
  const missing = [];
  const found = [];
  while ((match = regex.exec(content)) !== null) {
    const k = match[1];
    if (fa[k] === undefined) {
      if (!missing.includes(k)) missing.push(k);
    } else {
      if (!found.includes(k)) found.push(k);
    }
  }
  console.log(file, 'found keys:', found.length, 'missing keys:', missing.length);
  if (missing.length > 0) {
    console.log('  missing keys:', missing);
  }
});
