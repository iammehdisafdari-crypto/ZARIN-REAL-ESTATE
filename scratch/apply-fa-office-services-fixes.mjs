import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Private Office files
const poFiles = [
  path.join(rootDir, 'fa/private-office.html'),
  path.join(rootDir, 'fa/private-office/index.html')
];

for (const filePath of poFiles) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');

  // Wrap CTA left column in text-right
  content = content.replace(
    `<div class="grid lg:grid-cols-2 gap-16">\n        <div>\n          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پیوستن به پرایوت آفیس</div>`,
    `<div class="grid lg:grid-cols-2 gap-16">\n        <div class="text-right">\n          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پیوستن به پرایوت آفیس</div>`
  );

  // Phone and whatsapp text containers
  content = content.replace(
    `<div><div class="text-sm font-bold text-bone">تماس مستقیم با مدیر پرایوت آفیس</div><span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors font-mono">+971 58 690 1231</span></div>`,
    `<div class="text-right"><div class="text-sm font-bold text-bone">تماس مستقیم با مدیر پرایوت آفیس</div><span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors font-mono inline-block tabular-nums">+971 58 690 1231</span></div>`
  );
  content = content.replace(
    `<div><div class="text-sm font-bold text-bone">ارتباط در واتس‌اپ</div><span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">ارسال پیام مستقیم به میز مشاوره</span></div>`,
    `<div class="text-right"><div class="text-sm font-bold text-bone">ارتباط در واتس‌اپ</div><span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">ارسال پیام مستقیم به میز مشاوره</span></div>`
  );
  content = content.replace(
    `<div><div class="text-sm font-bold text-bone">ایمیل رسمی</div><span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">advisory@zarinrealestate.com</span></div>`,
    `<div class="text-right"><div class="text-sm font-bold text-bone">ایمیل رسمی</div><span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors inline-block">advisory@zarinrealestate.com</span></div>`
  );

  // Form container
  content = content.replace(
    `<div class="bg-ink-800 border border-gold-line rounded-sm p-8 bg-gold-soft">`,
    `<div class="bg-ink-800 border border-gold-line rounded-sm p-8 bg-gold-soft text-right">`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated Private Office file:', filePath);
}

// 2. Services files
const servicesFiles = [
  path.join(rootDir, 'fa/services.html'),
  path.join(rootDir, 'fa/services/index.html')
];

for (const filePath of servicesFiles) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');

  // Wrap CTA left column in text-right
  content = content.replace(
    `<div class="grid lg:grid-cols-2 gap-16 items-start">\n        <div>\n          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">جلسه محرمانه و اختصاصی</div>`,
    `<div class="grid lg:grid-cols-2 gap-16 items-start">\n        <div class="text-right">\n          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">جلسه محرمانه و اختصاصی</div>`
  );

  // Phone and whatsapp text containers
  content = content.replace(
    `<div><div class="text-sm font-bold text-bone">تلفن مستقیم دفتر دبی</div><span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">+971 58 690 1231</span></div>`,
    `<div class="text-right"><div class="text-sm font-bold text-bone">تلفن مستقیم دفتر دبی</div><span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors inline-block tabular-nums">+971 58 690 1231</span></div>`
  );
  content = content.replace(
    `<div><div class="text-sm font-bold text-bone">واتس‌اپ ادوایزری</div><span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">ارسال پیام مستقیم به مشاور</span></div>`,
    `<div class="text-right"><div class="text-sm font-bold text-bone">واتس‌اپ ادوایزری</div><span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">ارسال پیام مستقیم به مشاور</span></div>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated Services file:', filePath);
}
