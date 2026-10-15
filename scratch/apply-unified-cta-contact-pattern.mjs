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

let totalUpdated = 0;

for (const filePath of files) {
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] File not found: ${filePath}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  let originalHtml = html;

  // 1. In fa/index.html:
  if (filePath.includes('fa/index.html')) {
    // Wrap left column in text-right if not already
    html = html.replace(
      `<div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">\n      <div class="grid lg:grid-cols-2 gap-16">\n\n        <div>`,
      `<div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">\n      <div class="grid lg:grid-cols-2 gap-16">\n\n        <div class="text-right">`
    );
  }

  // 2. In fa/off-plan.html and fa/off-plan/index.html:
  if (filePath.includes('off-plan')) {
    html = html.replace(
      `<div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">\n      <div class="grid lg:grid-cols-2 gap-16">\n        <div>`,
      `<div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">\n      <div class="grid lg:grid-cols-2 gap-16">\n        <div class="text-right">`
    );
  }

  // 3. In fa/areas.html and fa/areas/index.html:
  if (filePath.includes('areas')) {
    html = html.replace(
      `<div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">\n      <div class="grid lg:grid-cols-2 gap-16">\n        <div>`,
      `<div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">\n      <div class="grid lg:grid-cols-2 gap-16">\n        <div class="text-right">`
    );
  }

  // 4. In fa/heritage.html and fa/heritage/index.html:
  if (filePath.includes('heritage')) {
    html = html.replace(
      `<div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">\n      <div class="grid lg:grid-cols-2 gap-16">\n        <div>`,
      `<div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">\n      <div class="grid lg:grid-cols-2 gap-16">\n        <div class="text-right">`
    );
  }

  // Standardize the contact card anchors inside space-y-4 mb-8:
  // Add cta-contact-card class to <a href="tel:..." and <a href="https://wa.me/..." and <a href="mailto:..."
  html = html.replace(/<a\s+href="(tel:\+971586901231|https:\/\/wa\.me\/971586901231|mailto:advisory@zarinrealestate\.com)"\s+class="(?:cta-contact-card\s+)?flex items-center gap-4 group"/g,
    '<a href="$1" class="cta-contact-card flex items-center gap-4 group"'
  );

  // Ensure text containers inside cta-contact-card have text-right and cta-contact-text class
  // Case A: <div><div class="text-sm font-bold
  html = html.replace(
    /(<a\s+href="(?:tel:\+971586901231|https:\/\/wa\.me\/971586901231|mailto:advisory@zarinrealestate\.com)"\s+class="cta-contact-card flex items-center gap-4 group"[^>]*>[\s\S]*?<\/div>)\s*<div>\s*(<div class="text-sm font-bold)/g,
    '$1\n              <div class="cta-contact-text text-right">\n                $2'
  );

  // Case B: <div class="text-right"><div class="text-sm font-bold
  html = html.replace(
    /(<a\s+href="(?:tel:\+971586901231|https:\/\/wa\.me\/971586901231|mailto:advisory@zarinrealestate\.com)"\s+class="cta-contact-card flex items-center gap-4 group"[^>]*>[\s\S]*?<\/div>)\s*<div class="text-right">\s*(<div class="text-sm font-bold)/g,
    '$1\n              <div class="cta-contact-text text-right">\n                $2'
  );

  // Standardize phone number span to have dir="ltr" class="cta-contact-value text-sm text-gold-400 group-hover:text-gold-300 transition-colors inline-block tabular-nums"
  html = html.replace(
    /<span\s+dir="ltr"\s+class="([^"]*)">\+971 58 690 1231<\/span>/g,
    (m, classes) => {
      let finalClasses = classes;
      if (!finalClasses.includes('cta-contact-value')) finalClasses = 'cta-contact-value ' + finalClasses;
      if (!finalClasses.includes('inline-block')) finalClasses += ' inline-block';
      if (!finalClasses.includes('tabular-nums')) finalClasses += ' tabular-nums';
      finalClasses = finalClasses.replace(/\s+/g, ' ').trim();
      return `<span dir="ltr" class="${finalClasses}">+971 58 690 1231</span>`;
    }
  );

  // Standardize email span to have dir="ltr" and cta-contact-value
  html = html.replace(
    /<span\s+dir="ltr"\s+class="([^"]*)">advisory@zarinrealestate\.com<\/span>/g,
    (m, classes) => {
      let finalClasses = classes;
      if (!finalClasses.includes('cta-contact-value')) finalClasses = 'cta-contact-value ' + finalClasses;
      if (!finalClasses.includes('inline-block')) finalClasses += ' inline-block';
      finalClasses = finalClasses.replace(/\s+/g, ' ').trim();
      return `<span dir="ltr" class="${finalClasses}">advisory@zarinrealestate.com</span>`;
    }
  );

  if (html !== originalHtml) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`[UPDATED] ${filePath}`);
    totalUpdated++;
  } else {
    console.log(`[NO CHANGE NEEDED] ${filePath}`);
  }
}

console.log(`\nSuccessfully checked all files. Updated: ${totalUpdated}`);
