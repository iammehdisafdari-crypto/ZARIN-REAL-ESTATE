import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.name === 'node_modules' || file.name === 'dist' || file.name === '.git') continue;
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (file.isFile() && file.name.endsWith('.html')) {
      callback(fullPath);
    }
  }
}

let updatedCount = 0;

walkDir('fa', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('/fa/properties#commercial')) {
    const updated = content.replaceAll('/fa/properties#commercial', '/fa/commercial-properties-in-dubai');
    fs.writeFileSync(filePath, updated, 'utf8');
    updatedCount++;
    console.log(`Updated: ${filePath}`);
  }
});

console.log(`Done! Updated ${updatedCount} Persian HTML files.`);
