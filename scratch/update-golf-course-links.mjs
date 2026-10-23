import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.name === 'node_modules' || file.name === 'dist' || file.name === '.git' || file.name === 'cms-laravel') continue;
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (file.isFile() && file.name.endsWith('.html')) {
      callback(fullPath);
    }
  }
}

let enCount = 0;
let faCount = 0;

walkDir('.', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace Persian /fa/properties#golf-course
  if (content.includes('/fa/properties#golf-course')) {
    content = content.replaceAll('/fa/properties#golf-course', '/fa/golf-course-properties-in-dubai');
    changed = true;
    faCount++;
  }

  // Replace English /properties#golf-course
  if (content.includes('/properties#golf-course')) {
    content = content.replaceAll('/properties#golf-course', '/golf-course-properties-in-dubai');
    changed = true;
    enCount++;
  }

  // Also check if any page has /properties-for-sale?lifestyle=golf
  if (content.includes('/properties-for-sale?lifestyle=golf')) {
    content = content.replaceAll('/properties-for-sale?lifestyle=golf', '/golf-course-properties-in-dubai');
    changed = true;
    enCount++;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
});

console.log(`Done! Updated ${enCount} EN link occurrences and ${faCount} FA link occurrences.`);
