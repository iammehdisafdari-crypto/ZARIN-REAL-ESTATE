import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const { translations } = await import('../scripts/i18n.js');
const faDict = translations.fa;

const dom = new JSDOM(indexHtml);
const doc = dom.window.document;

// 1. Language & Direction
doc.documentElement.setAttribute('lang', 'fa');
doc.documentElement.setAttribute('dir', 'rtl');

// 2. Head & SEO
const canonical = doc.querySelector('link[rel="canonical"]');
if (canonical) {
  canonical.setAttribute('href', 'https://zarinrealestate.com/fa/');
}

// Remove old hreflang if any, and add standard bidirectional hreflang tags
doc.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

const head = doc.head;
const hrFa = doc.createElement('link');
hrFa.setAttribute('rel', 'alternate');
hrFa.setAttribute('hreflang', 'fa');
hrFa.setAttribute('href', 'https://zarinrealestate.com/fa/');
head.appendChild(hrFa);

const hrEn = doc.createElement('link');
hrEn.setAttribute('rel', 'alternate');
hrEn.setAttribute('hreflang', 'en');
hrEn.setAttribute('href', 'https://zarinrealestate.com/');
head.appendChild(hrEn);

const hrDef = doc.createElement('link');
hrDef.setAttribute('rel', 'alternate');
hrDef.setAttribute('hreflang', 'x-default');
hrDef.setAttribute('href', 'https://zarinrealestate.com/');
head.appendChild(hrDef);

// 3. Pre-render all translations
doc.querySelectorAll('[data-i18n]').forEach(el => {
  const k = el.getAttribute('data-i18n');
  if (faDict[k] !== undefined) {
    if (typeof faDict[k] === 'string' && faDict[k].includes('<') && faDict[k].includes('>')) {
      el.innerHTML = faDict[k];
    } else {
      el.textContent = faDict[k];
    }
  }
});

doc.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
  const k = el.getAttribute('data-i18n-placeholder');
  if (faDict[k] !== undefined) {
    el.setAttribute('placeholder', faDict[k]);
  }
});

doc.querySelectorAll('[data-i18n-title]').forEach(el => {
  const k = el.getAttribute('data-i18n-title');
  if (faDict[k] !== undefined) {
    el.setAttribute('title', faDict[k]);
  }
});

doc.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
  const k = el.getAttribute('data-i18n-aria-label');
  if (faDict[k] !== undefined) {
    el.setAttribute('aria-label', faDict[k]);
  }
});

// 4. Update Internal Links to Persian routes
doc.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (
    href &&
    href.startsWith('/') &&
    !href.startsWith('/fa') &&
    !href.startsWith('/styles') &&
    !href.startsWith('/scripts') &&
    !href.startsWith('/public') &&
    !href.startsWith('/images') &&
    !href.startsWith('/api') &&
    !href.startsWith('/admin') &&
    !href.includes('.')
  ) {
    if (href === '/') {
      a.setAttribute('href', '/fa');
    } else {
      a.setAttribute('href', '/fa' + href);
    }
  }
});

// 5. Language Switcher State
doc.querySelectorAll('.lang-btn').forEach(btn => {
  const isFa = btn.dataset.lang === 'fa';
  btn.classList.toggle('active', isFa);
  btn.classList.toggle('is-active', isFa);
  btn.setAttribute('aria-pressed', isFa ? 'true' : 'false');
});

const mobileLabel = doc.getElementById('mobile-lang-label');
if (mobileLabel) mobileLabel.textContent = 'FA';

doc.querySelectorAll('#mobile-lang-menu .mobile-lang-check').forEach(chk => {
  const parent = chk.closest('button');
  if (parent) {
    chk.classList.toggle('hidden', parent.dataset.lang !== 'fa');
  }
});

// 6. Ensure Skip Link is translated
const skipLink = doc.querySelector('a.sr-only');
if (skipLink) {
  skipLink.textContent = 'پرش به محتوای اصلی';
}

// 7. Mirror arrow SVG icons in RTL
doc.querySelectorAll('svg').forEach(svg => {
  const path = svg.querySelector('path');
  if (path) {
    const d = path.getAttribute('d') || '';
    if (d.includes('M17 8l4 4m0 0l-4 4m4-4H3') || d.includes('M9 5l7 7-7 7') || d.includes('M14 5l7 7m0 0l-7 7m7-7H3')) {
      svg.classList.add('rtl-flip');
    }
  }
});

// Add rtl-flip CSS if not present
const styleTag = doc.createElement('style');
styleTag.textContent = `.rtl-flip { transform: scaleX(-1); } [dir="rtl"] .border-l { border-right-width: 1px; border-left-width: 0; } [dir="rtl"] .border-r { border-left-width: 1px; border-right-width: 0; } [dir="rtl"] .pl-8 { padding-right: 2rem; padding-left: 0; } [dir="rtl"] .pr-8 { padding-left: 2rem; padding-right: 0; }`;
doc.head.appendChild(styleTag);

// Write to fa/index.html
fs.mkdirSync(path.join(rootDir, 'fa'), { recursive: true });
fs.writeFileSync(path.join(rootDir, 'fa', 'index.html'), dom.serialize(), 'utf8');

console.log('Successfully generated fa/index.html with pre-rendered Persian translations and RTL layout!');
