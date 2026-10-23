import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const enDesktopHtml = `<div id="properties-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[640px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-3 gap-x-6 gap-y-3" role="region" aria-label="Properties submenu">
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_for_sale">For Sale</div>
              <a href="/properties-for-sale" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_properties_for_sale">All Properties for Sale</a>
              <a href="/properties#apartments" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_apartments">Apartments</a>
              <a href="/properties#villas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_villas">Villas</a>
              <a href="/properties#penthouses" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_penthouses">Penthouses</a>
              <a href="/properties#townhouses" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_townhouses">Townhouses</a>
              <a href="/trophy-residences" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold" data-i18n="filter_trophy">Trophy Residences →</a>
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_for_rent">For Rent</div>
              <a href="/properties-for-rent" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_rentals">All Rentals</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_by_lifestyle">By Lifestyle</div>
              <a href="/properties#beachfront" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_beachfront">Beachfront</a>
              <a href="/properties#burj-view" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_burj_view">Burj View</a>
              <a href="/properties#golf-course" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_golf_course">Golf Course</a>
              <a href="/branded-residences-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_branded_residences">Branded Residences</a>
              <a href="/commercial-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_commercial">Commercial</a>
            </div>
          </div>`;

const enMobileHtml = `<div id="mobile-properties-submenu" class="hidden pl-6 pr-4 py-2 flex flex-col gap-2 border-l border-white-line ml-4 my-1">
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-1" data-i18n="nav_for_sale">For Sale</div>
            <a href="/properties-for-sale" class="text-xs text-bone hover:text-gold-400 py-1" data-i18n="nav_all_properties_for_sale">All Properties for Sale</a>
            <a href="/properties#apartments" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_apartments">Apartments</a>
            <a href="/properties#villas" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_villas">Villas</a>
            <a href="/properties#penthouses" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_penthouses">Penthouses</a>
            <a href="/properties#townhouses" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_townhouses">Townhouses</a>
            <a href="/trophy-residences" class="text-xs text-gold-400 font-semibold py-1" data-i18n="filter_trophy">Trophy Residences →</a>
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-2" data-i18n="nav_for_rent">For Rent</div>
            <a href="/properties-for-rent" class="text-xs text-bone hover:text-gold-400 py-1" data-i18n="nav_all_rentals">All Rentals</a>
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-2" data-i18n="nav_by_lifestyle">By Lifestyle</div>
            <a href="/properties#beachfront" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_beachfront">Beachfront</a>
            <a href="/properties#burj-view" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_burj_view">Burj View</a>
            <a href="/properties#golf-course" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_golf_course">Golf Course</a>
            <a href="/branded-residences-in-dubai" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_branded_residences">Branded Residences</a>
            <a href="/commercial-properties-in-dubai" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_commercial">Commercial</a>
          </div>`;

const faDesktopHtml = `<div id="properties-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[640px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-3 gap-x-6 gap-y-3" role="region" aria-label="زیرمنوی املاک">
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_for_sale">برای فروش</div>
              <a href="/fa/properties-for-sale" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_properties_for_sale">همه املاک برای فروش</a>
              <a href="/fa/properties#apartments" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_apartments">آپارتمان‌ها</a>
              <a href="/fa/properties#villas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_villas">ویلاها</a>
              <a href="/fa/properties#penthouses" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_penthouses">پنت‌هاوس‌ها</a>
              <a href="/fa/properties#townhouses" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_townhouses">تاون‌هاوس‌ها</a>
              <a href="/fa/properties#trophy-residences" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold" data-i18n="filter_trophy">املاک تراز اول (Trophy) ←</a>
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_for_rent">برای اجاره</div>
              <a href="/fa/properties-for-rent" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_rentals">همه‌ی املاک برای اجاره</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_by_lifestyle">بر اساس سبک زندگی</div>
              <a href="/fa/properties#beachfront" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_beachfront">ساحلی</a>
              <a href="/fa/properties#burj-view" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_burj_view">دید برج خلیفه</a>
              <a href="/fa/properties#golf-course" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_golf_course">زمین گلف</a>
              <a href="/fa/properties#branded-residences" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_branded_residences">اقامتگاه‌های برند</a>
              <a href="/fa/properties#commercial" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_commercial">املاک تجاری</a>
            </div>
          </div>`;

const faMobileHtml = `<div id="mobile-properties-submenu" class="hidden pl-6 pr-4 py-2 flex flex-col gap-2 border-l border-white-line ml-4 my-1">
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-1" data-i18n="nav_for_sale">برای فروش</div>
            <a href="/fa/properties-for-sale" class="text-xs text-bone hover:text-gold-400 py-1" data-i18n="nav_all_properties_for_sale">همه املاک برای فروش</a>
            <a href="/fa/properties#apartments" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_apartments">آپارتمان‌ها</a>
            <a href="/fa/properties#villas" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_villas">ویلاها</a>
            <a href="/fa/properties#penthouses" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_penthouses">پنت‌هاوس‌ها</a>
            <a href="/fa/properties#townhouses" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_townhouses">تاون‌هاوس‌ها</a>
            <a href="/fa/properties#trophy-residences" class="text-xs text-gold-400 font-semibold py-1" data-i18n="filter_trophy">املاک تراز اول (Trophy) ←</a>
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-2" data-i18n="nav_for_rent">برای اجاره</div>
            <a href="/fa/properties-for-rent" class="text-xs text-bone hover:text-gold-400 py-1" data-i18n="nav_all_rentals">همه‌ی املاک برای اجاره</a>
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-2" data-i18n="nav_by_lifestyle">بر اساس سبک زندگی</div>
            <a href="/fa/properties#beachfront" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_beachfront">ساحلی</a>
            <a href="/fa/properties#burj-view" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_burj_view">دید برج خلیفه</a>
            <a href="/fa/properties#golf-course" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_golf_course">زمین گلف</a>
            <a href="/fa/properties#branded-residences" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_branded_residences">اقامتگاه‌های برند</a>
            <a href="/fa/properties#commercial" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_commercial">املاک تجاری</a>
          </div>`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const isFa = filePath.includes('\\fa\\') || filePath.includes('/fa/') || filePath.startsWith('fa/') || filePath.startsWith('fa\\');
  
  // Replace desktop properties panel
  const desktopRegex = /<div id="properties-mega-panel"[\s\S]*?<\/div>(\s*<\/div>|\s*<\/nav>)/;
  // Match `<div id="properties-mega-panel"[^>]*>[\s\S]*?<\/div>\s*<\/div>`
  const desktopMatch = content.match(/<div id="properties-mega-panel"[\s\S]*?<\/div>\s*(?=<div class="mega-menu-trigger|<div class="lang-switch|<\/nav>)/);
  if (desktopMatch) {
    const replacement = isFa ? faDesktopHtml : enDesktopHtml;
    content = content.replace(desktopMatch[0], replacement + '\n          ');
  }

  // Replace mobile properties submenu
  const mobileMatch = content.match(/<div id="mobile-properties-submenu"[\s\S]*?<\/div>\s*(?=<\/div>\s*<!-- 2|<div class="mobile-nav-item">)/);
  if (mobileMatch) {
    const replacement = isFa ? faMobileHtml : enMobileHtml;
    content = content.replace(mobileMatch[0], replacement + '\n        ');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${path.relative(rootDir, filePath)}`);
}

// Find all HTML files with properties-mega-panel
function scanDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.name.startsWith('.') || file.name === 'node_modules' || file.name === 'dist') continue;
    const full = path.join(dir, file.name);
    if (file.isDirectory()) {
      scanDir(full);
    } else if (file.isFile() && file.name.endsWith('.html')) {
      const text = fs.readFileSync(full, 'utf8');
      if (text.includes('id="properties-mega-panel"') || text.includes('id="mobile-properties-submenu"')) {
        processFile(full);
      }
    }
  }
}

scanDir(rootDir);
console.log('Finished updating properties submenus.');
