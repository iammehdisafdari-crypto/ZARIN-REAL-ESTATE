import fs from 'node:fs';

const lines = fs.readFileSync('brandbook.html', 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.includes('text-xs font-bold uppercase tracking-wider text-bone hover:text-gold-400') || l.includes('text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300')) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});
