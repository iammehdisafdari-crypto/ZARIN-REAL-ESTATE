import fs from 'fs';

// Let's compare private-office.html against the source HTML in user prompt
const ourHtml = fs.readFileSync('private-office.html', 'utf8');

// Read the prompt HTML lines
console.log('Total characters in private-office.html:', ourHtml.length);
