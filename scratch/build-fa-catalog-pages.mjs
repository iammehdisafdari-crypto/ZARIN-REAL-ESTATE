import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const { translations } = await import('../scripts/i18n.js');
const faDict = translations.fa;

const pagesToBuild = [
  {
    src: 'properties.html',
    dest: 'fa/properties.html',
    destIndexDir: 'fa/properties',
    canonicalPath: 'properties',
    aliases: ['fa/properties-for-sale.html'],
    metaTitleKey: 'prop_meta_title',
    metaDesc: 'مجموعه گزیده و انحصاری املاک لوکس برای خرید در دبی — پنت‌هاوس‌ها، ویلاهای ساحلی پالم جمیرا، اقامتگاه‌های برندینگ‌شده و آپارتمان‌های شاخص در داون‌تاون و دبی هیلز استیت.'
  },
  {
    src: 'off-plan.html',
    dest: 'fa/off-plan.html',
    destIndexDir: 'fa/off-plan',
    canonicalPath: 'off-plan',
    aliases: [],
    metaTitleKey: 'offplan_meta_title',
    metaDesc: 'پروژه‌های پیش‌فروش (آف‌پلان) و در حال ساخت معتبر دبی در سال ۲۰۲۶. ممیزی حساب‌های امانی اسکرو، شرایط اقساط سازندگان و راهنمای سرمایه‌گذاری با زرین.'
  },
  {
    src: 'areas.html',
    dest: 'fa/areas.html',
    destIndexDir: 'fa/areas',
    canonicalPath: 'areas',
    aliases: [],
    metaTitleKey: 'areas_meta_title',
    metaDesc: 'راهنمای جامع مناطق و محله‌های دبی — تحلیل قیمت هر فوت مربع، بازدهی اجاره، زیرساخت‌ها و سبک زندگی در پالم جمیرا، داون‌تاون، دبی هیلز و دبی مارینا.'
  }
];

// Helper to update hreflang on English pages
function updateEnglishHreflang(relPath, canonicalPath) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');

  // Check if hreflang already present
  if (!content.includes('hreflang="fa"')) {
    const canonicalTag = `<link rel="canonical" href="https://zarinrealestate.com/${canonicalPath}">`;
    const replacement = `${canonicalTag}
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/${canonicalPath}">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/${canonicalPath}">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/${canonicalPath}">`;

    if (content.includes(canonicalTag)) {
      content = content.replace(canonicalTag, replacement);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`  Added hreflang to English file: ${relPath}`);
    }
  }
}

for (const item of pagesToBuild) {
  console.log(`\nBuilding Persian page for: ${item.src} -> ${item.dest}`);
  
  // 1. Update English files
  updateEnglishHreflang(item.src, item.canonicalPath);
  if (fs.existsSync(path.join(rootDir, item.canonicalPath, 'index.html'))) {
    updateEnglishHreflang(`${item.canonicalPath}/index.html`, item.canonicalPath);
  }
  if (item.src === 'properties.html') {
    updateEnglishHreflang('properties-for-sale.html', 'properties-for-sale');
  }

  // 2. Read English source
  const srcContent = fs.readFileSync(path.join(rootDir, item.src), 'utf8');
  const dom = new JSDOM(srcContent);
  const doc = dom.window.document;

  // Language & Direction
  doc.documentElement.setAttribute('lang', 'fa');
  doc.documentElement.setAttribute('dir', 'rtl');

  // Title & Meta
  if (item.metaTitleKey && faDict[item.metaTitleKey]) {
    doc.title = faDict[item.metaTitleKey];
    const ogTitle = doc.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', faDict[item.metaTitleKey]);
    const twTitle = doc.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', faDict[item.metaTitleKey]);
  }

  if (item.metaDesc) {
    const metaDesc = doc.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', item.metaDesc);
    const ogDesc = doc.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', item.metaDesc);
    const twDesc = doc.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', item.metaDesc);
  }

  // Canonical & Hreflang
  const canonical = doc.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', `https://zarinrealestate.com/fa/${item.canonicalPath}`);
  }

  doc.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
  const head = doc.head;

  const hrFa = doc.createElement('link');
  hrFa.setAttribute('rel', 'alternate');
  hrFa.setAttribute('hreflang', 'fa');
  hrFa.setAttribute('href', `https://zarinrealestate.com/fa/${item.canonicalPath}`);
  head.appendChild(hrFa);

  const hrEn = doc.createElement('link');
  hrEn.setAttribute('rel', 'alternate');
  hrEn.setAttribute('hreflang', 'en');
  hrEn.setAttribute('href', `https://zarinrealestate.com/${item.canonicalPath}`);
  head.appendChild(hrEn);

  const hrDef = doc.createElement('link');
  hrDef.setAttribute('rel', 'alternate');
  hrDef.setAttribute('hreflang', 'x-default');
  hrDef.setAttribute('href', `https://zarinrealestate.com/${item.canonicalPath}`);
  head.appendChild(hrDef);

  // Pre-render all translations
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

  // Skip link
  const skipLink = doc.querySelector('a.sr-only');
  if (skipLink) {
    skipLink.textContent = 'پرش به محتوای اصلی';
  }

  // Update internal links
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

  // Form actions
  doc.querySelectorAll('form[action]').forEach(form => {
    const act = form.getAttribute('action');
    if (act && act.startsWith('/') && !act.startsWith('/fa') && !act.startsWith('/api')) {
      form.setAttribute('action', '/fa' + act);
    }
  });

  // Language switcher active state
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

  // Mirror arrow SVGs in RTL
  doc.querySelectorAll('svg').forEach(svg => {
    const pathEl = svg.querySelector('path');
    if (pathEl) {
      const d = pathEl.getAttribute('d') || '';
      if (d.includes('M17 8l4 4m0 0l-4 4m4-4H3') || d.includes('M9 5l7 7-7 7') || d.includes('M14 5l7 7m0 0l-7 7m7-7H3')) {
        svg.classList.add('rtl-flip');
      }
    }
  });

  // RTL typography and styling override
  const customStyle = doc.createElement('style');
  customStyle.textContent = `
    body { font-family: "Vazirmatn", "Source Sans 3", -apple-system, sans-serif !important; }
    .rtl-flip { transform: scaleX(-1); display: inline-block; }
    [dir="rtl"] .border-l { border-right-width: 1px; border-left-width: 0; }
    [dir="rtl"] .border-r { border-left-width: 1px; border-right-width: 0; }
  `;
  doc.head.appendChild(customStyle);

  // Write files
  const destPath = path.join(rootDir, item.dest);
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const serialized = dom.serialize();
  fs.writeFileSync(destPath, serialized, 'utf8');
  console.log(`  ✅ Written: ${item.dest}`);

  if (item.destIndexDir) {
    const fullIndexDir = path.join(rootDir, item.destIndexDir);
    if (!fs.existsSync(fullIndexDir)) fs.mkdirSync(fullIndexDir, { recursive: true });
    fs.writeFileSync(path.join(fullIndexDir, 'index.html'), serialized, 'utf8');
    console.log(`  ✅ Written: ${item.destIndexDir}/index.html`);
  }

  for (const alias of item.aliases) {
    fs.writeFileSync(path.join(rootDir, alias), serialized, 'utf8');
    console.log(`  ✅ Written alias: ${alias}`);
  }
}

console.log('\nAll catalog pages successfully built in Persian with pre-rendered content and RTL layout!');
