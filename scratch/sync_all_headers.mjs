import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// 1. Extract canonical headers and mobile menus
const enIndexHtml = fs.readFileSync('index.html', 'utf8');
const enDom = new JSDOM(enIndexHtml);
const enHeaderEl = enDom.window.document.querySelector('#site-header');
const enMobileMenuEl = enDom.window.document.querySelector('#mobile-menu');

const faIndexHtml = fs.readFileSync('fa/index.html', 'utf8');
const faDom = new JSDOM(faIndexHtml);
const faHeaderEl = faDom.window.document.querySelector('#site-header');
const faMobileMenuEl = faDom.window.document.querySelector('#mobile-menu');

if (!enHeaderEl || !enMobileMenuEl || !faHeaderEl || !faMobileMenuEl) {
  console.error('Failed to locate canonical header or mobile menu in index files');
  process.exit(1);
}

const canonicalEnHeader = enHeaderEl.outerHTML;
const canonicalEnMobileMenu = enMobileMenuEl.outerHTML;
const canonicalFaHeader = faHeaderEl.outerHTML;
const canonicalFaMobileMenu = faMobileMenuEl.outerHTML;

console.log('Canonical templates successfully loaded.');

function findHtmlFiles(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'scratch') continue;
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(findHtmlFiles(full));
    } else if (file.endsWith('.html')) {
      results.push(full.replace(/\\/g, '/'));
    }
  }
  return results;
}

const files = findHtmlFiles('.');
console.log(`Found ${files.length} HTML files to process.`);

// Determine route path from filename
function getRoutePath(filepath) {
  let rel = filepath;
  if (rel.startsWith('./')) rel = rel.slice(2);
  if (rel.endsWith('/index.html')) {
    rel = rel.slice(0, -'/index.html'.length);
  } else if (rel.endsWith('.html')) {
    rel = rel.slice(0, -'.html'.length);
  }
  if (rel === 'index') return '/';
  if (!rel.startsWith('/')) rel = '/' + rel;
  return rel;
}

let modifiedCount = 0;

for (const f of files) {
  // Never touch canonical sources of truth
  if (f === 'index.html' || f === 'fa/index.html') {
    continue;
  }

  const isFa = f.startsWith('fa/') || f.includes('/fa/');
  let html = fs.readFileSync(f, 'utf8');
  const route = getRoutePath(f);

  const targetHeader = isFa ? canonicalFaHeader : canonicalEnHeader;
  const targetMobileMenu = isFa ? canonicalFaMobileMenu : canonicalEnMobileMenu;

  // Create a customized header DOM clone for route-specific aria-current
  const frag = JSDOM.fragment(targetHeader);
  const headerClone = frag.querySelector('#site-header');

  // Mark active primary nav item if route matches
  const sectionKeywords = [
    { prefix: isFa ? '/fa/properties' : '/properties', id: 'properties-nav-link' },
    { prefix: isFa ? '/fa/apartments' : '/apartments', id: 'properties-nav-link' },
    { prefix: isFa ? '/fa/off-plan' : '/off-plan', id: 'offplan-nav-link' },
    { prefix: isFa ? '/fa/areas' : '/areas', id: 'areas-nav-link' },
    { prefix: isFa ? '/fa/private-office' : '/private-office', id: 'private-office-nav-link' },
    { prefix: isFa ? '/fa/services' : '/services', text: isFa ? 'خدمات' : 'Services' },
    { prefix: isFa ? '/fa/visas' : '/visas', text: isFa ? 'ویزای اقامت' : 'Visas' },
    { prefix: isFa ? '/fa/insights' : '/insights', text: isFa ? 'تحلیل و گزارش‌ها' : 'Insights' },
    { prefix: isFa ? '/fa/heritage' : '/heritage', text: isFa ? 'اصالت و پیشینه' : 'Heritage' }
  ];

  for (const s of sectionKeywords) {
    if (route.startsWith(s.prefix)) {
      let linkEl = null;
      if (s.id) linkEl = headerClone.querySelector(`#${s.id}`);
      else if (s.text) {
        linkEl = Array.from(headerClone.querySelectorAll('.mega-menu-trigger > a')).find(a => a.textContent.includes(s.text));
      }
      if (linkEl) {
        linkEl.setAttribute('aria-current', 'page');
        linkEl.classList.remove('text-ash');
        linkEl.classList.add('text-gold-400');
      }
      break;
    }
  }

  // Also check submenu links for exact match
  headerClone.querySelectorAll('.mega-menu-panel a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === route || href === route + '/') {
      a.setAttribute('aria-current', 'page');
      a.classList.remove('text-ash');
      a.classList.add('text-gold-400', 'font-semibold');
    }
  });

  const finalHeaderHtml = headerClone.outerHTML;

  // 1. Ensure <link rel="stylesheet" href="/styles/main.css"> in <head>
  if (!html.includes('/styles/main.css')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="/styles/main.css">\n</head>');
  }

  // 2. Remove conflicting inline .mega-menu-panel / .mega-menu-trigger css in <style>
  // Clean up styles that override mega-menu
  html = html.replace(/<style>([\s\S]*?)<\/style>/g, (match, css) => {
    let cleanCss = css
      .replace(/\.mega-menu-trigger\s*\{[^}]*\}/g, '')
      .replace(/\.mega-menu-panel\s*\{[^}]*\}/g, '')
      .replace(/\.mega-menu-panel::before\s*\{[^}]*\}/g, '')
      .replace(/\.mega-menu-trigger:not\(\.is-closed\):hover\s*\.mega-menu-panel[^}]*\{[^}]*\}/g, '')
      .replace(/\.mega-menu-trigger:not\(\.is-closed\):hover\s*>\s*\.mega-menu-panel[^}]*\{[^}]*\}/g, '')
      .replace(/\.mega-menu-trigger\.is-open\s*\.mega-menu-panel[^}]*\{[^}]*\}/g, '')
      .replace(/\.mega-menu-trigger\.is-open\s*>\s*\.mega-menu-panel[^}]*\{[^}]*\}/g, '')
      .replace(/\.mega-menu-panel\.is-open\s*\{[^}]*\}/g, '')
      .replace(/\.mega-menu-trigger\.is-closed\s*>\s*\.mega-menu-panel\s*\{[^}]*\}/g, '')
      .replace(/\.mega-menu-toggle-btn\[aria-expanded="true"\]\s*svg[^}]*\{[^}]*\}/g, '');
    
    return `<style>${cleanCss}</style>`;
  });

  // 3. Replace <header id="site-header" ...>...</header> or <header ...>...</header>
  const headerRegex = /<header[\s\S]*?<\/header>/i;
  if (headerRegex.test(html)) {
    html = html.replace(headerRegex, finalHeaderHtml);
  } else {
    // If no header tag, inject after <body> or skip-to-content link
    if (html.includes('</a>\n\n  <!-- ═══ HEADER ═══ -->')) {
      html = html.replace('</a>\n\n  <!-- ═══ HEADER ═══ -->', `</a>\n\n  <!-- ═══ HEADER ═══ -->\n  ${finalHeaderHtml}`);
    } else if (html.includes('<body')) {
      html = html.replace(/<body[^>]*>/, `$& \n  ${finalHeaderHtml}`);
    }
  }

  // 4. Replace <div id="mobile-menu" ...>...</div>
  const mobileMenuRegex = /<div id="mobile-menu"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i;
  const standardMobileMenuRegex = /<!-- Mobile Menu Drawer -->[\s\S]*?<main/i;
  
  if (standardMobileMenuRegex.test(html)) {
    html = html.replace(standardMobileMenuRegex, `<!-- Mobile Menu Drawer -->\n  ${targetMobileMenu}\n\n  <main`);
  } else {
    // Look for <div id="mobile-menu"
    const simpleMobileMenuRegex = /<div id="mobile-menu"[\s\S]*?<\/div>(\s*<\/div>)?(\s*<\/div>)?\s*(?=<main)/i;
    if (simpleMobileMenuRegex.test(html)) {
      html = html.replace(simpleMobileMenuRegex, `${targetMobileMenu}\n\n`);
    } else if (html.includes('<main')) {
      // If mobile-menu was absent or before main, place it right before <main
      html = html.replace('<main', `${targetMobileMenu}\n\n  <main`);
    }
  }

  // 5. Remove conflicting inline navigation script blocks
  // e.g. areasNavToggle, offplanNavToggle, propNavToggle listeners
  html = html.replace(/const\s+areasNavToggle[\s\S]*?poNavToggle\.focus\(\);\s*\}\s*\}\);\s*\}\s*\}/g, '');
  html = html.replace(/if\s*\(areasNavToggle\s*&&\s*areasNavTrigger\)[\s\S]*?areasNavToggle\.focus\(\);\s*\}\s*\}\);\s*\}/g, '');

  // 6. Ensure <script type="module" src="/scripts/nav.js"></script> before </body>
  if (!html.includes('/scripts/nav.js')) {
    html = html.replace('</body>', '  <script type="module" src="/scripts/nav.js"></script>\n</body>');
  }

  fs.writeFileSync(f, html, 'utf8');
  modifiedCount++;
}

console.log(`Successfully synchronized ${modifiedCount} HTML files!`);
