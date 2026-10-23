import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Read English apartments-for-sale-in-dubai.html
let enHtml = fs.readFileSync(path.join(rootDir, 'apartments-for-sale-in-dubai.html'), 'utf8');

// First update English file to link language switcher to Persian apartments page
enHtml = enHtml.replace(
  /<a href="\/fa\/properties" class="lang-btn h-full px-2 text-\[11px\] font-semibold rounded-xs transition-all flex items-center justify-center text-ash hover:text-gold-300" data-lang="fa" aria-label="تغییر زبان به فارسی" aria-pressed="false">فارسی<\/a>/g,
  '<a href="/fa/apartments-for-sale-in-dubai" class="lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all flex items-center justify-center text-ash hover:text-gold-300" data-lang="fa" aria-label="تغییر زبان به فارسی" aria-pressed="false">فارسی</a>'
);
enHtml = enHtml.replace(
  /<a href="\/fa\/properties" class="lang-btn mobile-lang-item flex items-center justify-between" data-lang="fa" role="menuitem" aria-label="تغییر به زبان فارسی">/g,
  '<a href="/fa/apartments-for-sale-in-dubai" class="lang-btn mobile-lang-item flex items-center justify-between" data-lang="fa" role="menuitem" aria-label="تغییر به زبان فارسی">'
);

// Add hreflang tags if not present
if (!enHtml.includes('hreflang="fa"')) {
  enHtml = enHtml.replace(
    /<link rel="canonical" href="https:\/\/zarinrealestate\.com\/apartments-for-sale-in-dubai">/,
    '<link rel="canonical" href="https://zarinrealestate.com/apartments-for-sale-in-dubai">\n  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/apartments-for-sale-in-dubai">\n  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/apartments-for-sale-in-dubai">\n  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/apartments-for-sale-in-dubai">'
  );
}

fs.writeFileSync(path.join(rootDir, 'apartments-for-sale-in-dubai.html'), enHtml, 'utf8');
fs.writeFileSync(path.join(rootDir, 'apartments-for-sale-in-dubai', 'index.html'), enHtml, 'utf8');
console.log('Updated English apartments-for-sale-in-dubai.html & directory index');

// 2. Build Persian Version
const dom = new JSDOM(enHtml);
const doc = dom.window.document;

doc.documentElement.setAttribute('lang', 'fa');
doc.documentElement.setAttribute('dir', 'rtl');

const faTitle = 'خرید آپارتمان در دبی | املاک و مستغلات زرین';
const faDesc = 'مجموعه آپارتمان‌های فروشی در دبی — سوئیت، ۱، ۲، ۳ و ۴ خوابه در دبی مارینا، داون‌تاون، بیزنس بی، جی‌وی‌سی، دبی هیلز و بلوواترز با اصالت کارشناسی‌شده توسط مشاوران ارشد زرین.';

doc.title = faTitle;

const metaDesc = doc.querySelector('meta[name="description"]');
if (metaDesc) metaDesc.setAttribute('content', faDesc);

const metaKeywords = doc.querySelector('meta[name="keywords"]');
if (metaKeywords) metaKeywords.setAttribute('content', 'خرید آپارتمان در دبی, قیمت آپارتمان دبی, سوئیت دبی, آپارتمان ۱ خوابه دبی, خرید آپارتمان مارینا, آپارتمان داون تاون دبی');

const canonical = doc.querySelector('link[rel="canonical"]');
if (canonical) canonical.setAttribute('href', 'https://zarinrealestate.com/fa/apartments-for-sale-in-dubai');

// Hreflang
doc.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
const head = doc.head;

const hrFa = doc.createElement('link');
hrFa.setAttribute('rel', 'alternate');
hrFa.setAttribute('hreflang', 'fa');
hrFa.setAttribute('href', 'https://zarinrealestate.com/fa/apartments-for-sale-in-dubai');
head.appendChild(hrFa);

const hrEn = doc.createElement('link');
hrEn.setAttribute('rel', 'alternate');
hrEn.setAttribute('hreflang', 'en');
hrEn.setAttribute('href', 'https://zarinrealestate.com/apartments-for-sale-in-dubai');
head.appendChild(hrEn);

const hrDef = doc.createElement('link');
hrDef.setAttribute('rel', 'alternate');
hrDef.setAttribute('hreflang', 'x-default');
hrDef.setAttribute('href', 'https://zarinrealestate.com/apartments-for-sale-in-dubai');
head.appendChild(hrDef);

// Open Graph
const ogTitle = doc.querySelector('meta[property="og:title"]');
if (ogTitle) ogTitle.setAttribute('content', faTitle);
const ogDesc = doc.querySelector('meta[property="og:description"]');
if (ogDesc) ogDesc.setAttribute('content', faDesc);
const ogUrl = doc.querySelector('meta[property="og:url"]');
if (ogUrl) ogUrl.setAttribute('content', 'https://zarinrealestate.com/fa/apartments-for-sale-in-dubai');
const ogLocale = doc.querySelector('meta[property="og:locale"]');
if (ogLocale) ogLocale.setAttribute('content', 'fa_IR');

// Twitter
const twTitle = doc.querySelector('meta[name="twitter:title"]');
if (twTitle) twTitle.setAttribute('content', faTitle);
const twDesc = doc.querySelector('meta[name="twitter:description"]');
if (twDesc) twDesc.setAttribute('content', faDesc);

// Extract canonical Persian Header Nav, Mobile Menu, and Footer from fa/trophy-residences.html
const trophyFaHtml = fs.readFileSync(path.join(rootDir, 'fa', 'trophy-residences.html'), 'utf8');
const trophyDom = new JSDOM(trophyFaHtml);
const trophyDoc = trophyDom.window.document;

// Replace Header Nav
const currentNav = doc.querySelector('header nav');
const canonicalNav = trophyDoc.querySelector('header nav');
if (currentNav && canonicalNav) {
  // Update Apartments link in canonical nav to be active
  const aptLink = canonicalNav.querySelector('a[href="/fa/apartments-for-sale-in-dubai"]');
  if (aptLink) {
    aptLink.className = 'text-sm text-gold-400 font-semibold hover:text-gold-300 transition-colors';
    aptLink.setAttribute('aria-current', 'page');
  }
  // Demote Trophy link to normal text-ash
  const trophyLink = canonicalNav.querySelector('a[href="/fa/trophy-residences"]');
  if (trophyLink) {
    trophyLink.className = 'text-sm text-ash hover:text-gold-400 transition-colors';
    trophyLink.removeAttribute('aria-current');
  }
  currentNav.innerHTML = canonicalNav.innerHTML;
}

// Replace Mobile Menu Drawer
const currentMobileMenu = doc.querySelector('#mobile-menu');
const canonicalMobileMenu = trophyDoc.querySelector('#mobile-menu');
if (currentMobileMenu && canonicalMobileMenu) {
  const aptMobileLink = canonicalMobileMenu.querySelector('a[href="/fa/apartments-for-sale-in-dubai"]');
  if (aptMobileLink) {
    aptMobileLink.className = 'text-xs text-gold-400 font-semibold py-1';
  }
  const trophyMobileLink = canonicalMobileMenu.querySelector('a[href="/fa/trophy-residences"]');
  if (trophyMobileLink) {
    trophyMobileLink.className = 'text-xs text-ash hover:text-gold-400 py-1';
  }
  currentMobileMenu.innerHTML = canonicalMobileMenu.innerHTML;
}

// Replace Footer
const currentFooter = doc.querySelector('footer');
const canonicalFooter = trophyDoc.querySelector('footer');
if (currentFooter && canonicalFooter) {
  currentFooter.innerHTML = canonicalFooter.innerHTML;
}


// Language Switcher in Header
const langSwitchEnBtn = doc.querySelector('.lang-switch button[data-lang="en"]');
const langSwitchFaLink = doc.querySelector('.lang-switch a[data-lang="fa"]');
if (langSwitchEnBtn && langSwitchFaLink) {
  // Convert button to link for EN
  const enLink = doc.createElement('a');
  enLink.href = '/apartments-for-sale-in-dubai';
  enLink.className = 'lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all flex items-center justify-center text-ash hover:text-gold-300';
  enLink.setAttribute('data-lang', 'en');
  enLink.setAttribute('aria-label', 'Switch to English');
  enLink.textContent = 'EN';

  // Convert link to button for FA
  const faBtn = doc.createElement('button');
  faBtn.type = 'button';
  faBtn.className = 'lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all active is-active text-ink-900 bg-gold-400 font-bold';
  faBtn.setAttribute('data-lang', 'fa');
  faBtn.setAttribute('aria-label', 'زبان فعلی فارسی');
  faBtn.setAttribute('aria-pressed', 'true');
  faBtn.textContent = 'فارسی';

  const container = langSwitchEnBtn.parentElement;
  container.innerHTML = '';
  container.appendChild(enLink);
  container.appendChild(faBtn);
}

// Mobile Language Selector
const mobileLangLabel = doc.querySelector('#mobile-lang-label');
if (mobileLangLabel) mobileLangLabel.textContent = 'FA';

const mobileLangMenu = doc.querySelector('#mobile-lang-menu');
if (mobileLangMenu) {
  mobileLangMenu.innerHTML = `
    <a href="/apartments-for-sale-in-dubai" class="lang-btn mobile-lang-item flex items-center justify-between" data-lang="en" role="menuitem" aria-label="Switch to English">
      <span>English (EN)</span>
    </a>
    <button type="button" class="lang-btn mobile-lang-item is-active" data-lang="fa" role="menuitem" aria-label="زبان فعلی فارسی">
      <span>فارسی (FA)</span>
      <span class="mobile-lang-check text-gold-400 font-bold">✓</span>
    </button>
  `;
}

// Breadcrumbs
const breadcrumbContainer = doc.querySelector('nav[aria-label="Breadcrumb"]');
if (breadcrumbContainer) {
  breadcrumbContainer.innerHTML = `
    <ol class="flex flex-wrap items-center gap-2 text-xs text-ash" role="list">
      <li role="listitem"><a href="/fa" class="hover:text-gold-400 transition-colors">صفحه اصلی</a></li>
      <li role="listitem" class="text-slate" aria-hidden="true">/</li>
      <li role="listitem"><a href="/fa/properties" class="hover:text-gold-400 transition-colors">املاک</a></li>
      <li role="listitem" class="text-slate" aria-hidden="true">/</li>
      <li role="listitem"><a href="/fa/properties-for-sale" class="hover:text-gold-400 transition-colors">برای فروش</a></li>
      <li role="listitem" class="text-slate" aria-hidden="true">/</li>
      <li role="listitem" class="text-gold-400 font-semibold" aria-current="page">آپارتمان‌ها</li>
    </ol>
  `;
}

// Hero Section
const heroBadge = doc.querySelector('section[aria-label="Apartments for sale hero"] span.uppercase');
if (heroBadge) heroBadge.textContent = 'آپارتمان‌ها · از سوئیت تا ۴ خوابه لوکس';

const heroH1 = doc.querySelector('#hero-headline');
if (heroH1) heroH1.innerHTML = 'خرید آپارتمان<br>در <span class="text-gold-gradient">دبی</span>';

const heroTldr = doc.querySelector('#tldr-summary');
if (heroTldr) {
  heroTldr.textContent = 'مجموعه‌ای گزیده از سوئیت‌ها و آپارتمان‌های ۱ خوابه، ۲ خوابه، ۳ خوابه و ۴+ خوابه در برترین و معتبرترین شهرک‌های مسکونی دبی. کلیه فایل‌ها توسط مشاوران ارشد زرین به‌صورت فیزیکی و میدانی بررسی شده‌اند — نقشه‌ها تطبیق داده شده، صورت‌حساب شارژ سالانه استعلام شده، دید مستقیم ارزیابی گشته و قیمت بر مبنای آخرین معاملات رسمی ثبت‌شده در اداره اراضی دبی (DLD) راستی‌آزمایی شده است.';
}

const heroSub = doc.querySelector('#hero-subtext');
if (heroSub) {
  heroSub.textContent = 'گزیده‌ای از آپارتمان‌های زیر را بررسی کنید یا با فیلتر اتاق، قیمت و منطقه جستجو نمایید. چه به قصد سکونت اختصاصی خرید کنید و چه با هدف بازدهی اجاره یا رشد ارزش بلندمدت، مشاوران زرین پیشنهادی متناسب با شرایط شما آماده می‌کنند.';
}

// Hero CTAs
const heroBrowseBtn = doc.querySelector('a[href="#apartment-grid"]');
if (heroBrowseBtn) {
  heroBrowseBtn.innerHTML = `
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
    مشاهده آپارتمان‌ها
  `;
}

// Stat bar
const statItems = doc.querySelectorAll('section[aria-label="Apartments for sale hero"] [role="listitem"]');
if (statItems.length >= 4) {
  statItems[0].querySelector('.text-slate').textContent = 'فایل فعال آپارتمان';
  statItems[1].querySelector('.text-slate').textContent = 'متوسط قیمت هر فوت مربع';
  statItems[2].querySelector('.text-slate').textContent = 'محبوب‌ترین تیپ‌های متراژ';
  statItems[3].querySelector('.text-slate').textContent = 'منطقه تحت پوشش';
}

// Filter Bar Labels
const filterLabel = doc.querySelector('.filter-label');
if (filterLabel) filterLabel.textContent = 'فیلتر:';

const searchInput = doc.querySelector('#apartment-search');
if (searchInput) searchInput.setAttribute('placeholder', 'جستجو بر اساس محله، برج یا نام پروژه...');

const filterChips = doc.querySelectorAll('.filter-chip');
const chipTranslations = {
  'All': 'همه',
  'Studio': 'سوئیت',
  '1BR': '۱ خوابه',
  '2BR': '۲ خوابه',
  '3BR': '۳ خوابه',
  '4BR+': '۴+ خوابه',
  'Under AED 1M': 'زیر ۱ میلیون درهم',
  'AED 1M-3M': '۱ تا ۳ میلیون درهم',
  'AED 3M-5M': '۳ تا ۵ میلیون درهم',
  'AED 5M+': 'بالای ۵ میلیون درهم',
  'Marina': 'دبی مارینا',
  'Downtown': 'داون‌تاون',
  'Business Bay': 'بیزنس بی',
  'JVC': 'جی‌وی‌سی',
  'Dubai Hills': 'دبی هیلز',
  'Bluewaters': 'بلوواترز'
};

filterChips.forEach(chip => {
  const text = chip.textContent.trim();
  if (chipTranslations[text]) {
    chip.textContent = chipTranslations[text];
  }
});

const resetBtn = doc.querySelector('#reset-filters-btn');
if (resetBtn) resetBtn.textContent = 'پاک کردن فیلترها';

const customSearchBtn = doc.querySelector('a.custom-search-btn');
if (customSearchBtn) customSearchBtn.textContent = 'درخواست جستجوی اختصاصی ←';

// Section Header
const gridSectionHeader = doc.querySelector('#apartment-grid h2');
if (gridSectionHeader) gridSectionHeader.textContent = 'آپارتمان‌های برگزیده با کارشناسی حضوری';

const gridSub = doc.querySelector('#apartment-grid p.text-sm');
if (gridSub) gridSub.textContent = 'نمونه‌ای گزیده از واحدهای دارای حکم انحصاری زرین در انواع متراژ سوئیت تا ۴ خوابه. هر واحد شخصاً توسط کارشناسان ارزیابی شده است.';

// Persian FAQ Data
const faqs = [
  {
    q: 'متوسط قیمت آپارتمان در دبی در سال ۲۰۲۶ چقدر است؟',
    a: 'در اواخر سال ۲۰۲۶، قیمت آپارتمان‌ها در دبی بسته به موقعیت مکانی، دید و امکانات برج در بازه متنوعی قرار دارد. سوئیت‌ها در مناطقی نظیر JVC و دبی ساوت از حدود ۳۵۰ تا ۵۰۰ هزار درهم آغاز می‌شوند. واحدهای یک‌خوابه در مناطق میان‌رده بین ۶۰۰ تا ۹۰۰ هزار درهم و در مناطق شاخص نظیر دبی مارینا و داون‌تاون بین ۱.۲ تا ۱.۸ میلیون درهم معامله می‌گردند. نرخ متوسط هر فوت مربع در حدود ۱٬۸۰۰ درهم است که واحدهای دارای دید کامل دریا یا برج خلیفه مشمول پرمیوم ۱۵ تا ۳۰ درصدی می‌شوند.'
  },
  {
    q: 'کدام مناطق دبی برای خرید آپارتمان مناسب‌تر هستند؟',
    a: 'انتخاب بهترین منطقه به استراتژی شما بستگی دارد: برای بیشترین بازدهی اجاره ناخالص (۶.۵ تا ۸ درصد)، بیزنس بی و JVC انتخابی عالی هستند. برای سبک زندگی لوکس و نقدشوندگی بسیار بالا، دبی مارینا، داون‌تاون و پالم جمیرا پیشتازند. برای خانواده‌ها نیز شهرک‌های جامع نظیر دبی هیلز استیت و خور دبی (Creek Harbour) به دلیل وجود مدارس و فضاهای سبز اولویت دارند.'
  },
  {
    q: 'آیا خریداران خارجی و ایرانیان می‌توانند در دبی آپارتمان بخرند؟',
    a: 'بله. مطابق قانون رسمی مالکیت، کلیه اتباع خارجی می‌توانند در بیش از ۷۰ منطقه معین‌شده (Freehold) دبی مالکیت قطعی ۱۰۰٪ صددرصدی و سند رسمی تک‌برگ از اداره اراضی دبی (DLD) دریافت کنند. خریداران ایرانی بدون محدودیت قانونی قادر به ثبت ملک، افتتاح حساب بانکی محلی و دریافت اقامت یا گلدن ویزا برای خود و خانواده هستند.'
  },
  {
    q: 'هزینه‌های جانبی خرید آپارتمان در دبی چقدر است؟',
    a: 'به‌طور کلی باید حدود ۵ تا ۷ درصد به قیمت پایه ملک بابت هزینه‌های جانبی اضافه کنید: ۴٪ هزینه انتقال سند اداره ثبت اراضی (DLD)، ۲٪ کارمزد کارگزاری خریدار، ۴٬۰۰۰ درهم هزینه ثبت تراستی اداری، ۵۸۰ درهم صدور سند رسمی و در صورت استفاده از وام بانکی، حدود ۰.۵ تا ۱٪ کارمزد اداری بانک.'
  },
  {
    q: 'هزینه شارژ سالانه (Service Charge) آپارتمان‌ها چقدر است؟',
    a: 'شارژ سالانه بر اساس هر فوت مربع مساحت محاسبه می‌شود. در ساختمان‌های معمولی سالانه بین ۱۲ تا ۱۸ درهم بر فوت مربع، در ساختمان‌های میان‌رده ۱۸ تا ۲۵ درهم و در برج‌های لوکس دارای خدمات هتلینگ ۲۵ تا ۴۵ درهم بر فوت مربع است. برای یک واحد ۲ خوابه ۱٬۰۰۰ فوتی، شارژ سالانه معمولاً حدود ۱۸ تا ۳۰ هزار درهم خواهد بود.'
  },
  {
    q: 'چه میزان بازدهی اجاره (Rental Yield) از آپارتمان در دبی می‌توان انتظار داشت؟',
    a: 'بازدهی ناخالص اجاره آپارتمان در دبی به‌طور متوسط ۶ تا ۸ درصد است که در مناطق اقتصادی نظیر JVC به بیش از ۸٪ نیز می‌رسد. در مناطق ساحلی و داون‌تاون بازدهی ناخالص بین ۵ تا ۶.۵ درصد همراه با رشد ارزش سرمایه‌ای بالاتر است. اجاره کوتاه‌مدت (هالیدی‌هوم) می‌تواند درآمد سالانه را تا ۲۵ الی ۴۰ درصد افزایش دهد.'
  },
  {
    q: 'آیا خرید آپارتمان پیش‌فروش (Off-Plan) گزینه مناسبی است؟',
    a: 'پیش‌فروش امکان ورود با پیش‌پرداخت ۱۰ تا ۲۰ درصد و اقساط منعطف ۲ تا ۴ ساله بدون بهره را فراهم می‌کند و معمولاً رشد قیمتی ۲۰ تا ۳۰ درصدی تا زمان تحویل دارد. برای مصون ماندن از ریسک تاخیر یا تغییرات طرح، زرین تنها پروژه‌های سازندگان معتبر دولتی و تراز اول (نظیر ایمار، مرآس، صبحا، الینگتون) با حساب امانی قانونی (Escrow) را پیشنهاد می‌دهد.'
  },
  {
    q: 'برای خرید آپارتمان چه مدارکی لازم است؟',
    a: 'برای افراد غیرمقیم تنها گذرنامه معتبر و اثبات تمکن مالی کافی است. تیم حقوقی زرین مراحل افتتاح حساب بانکی امارات، عقد قرارداد رسمی Form F، استعلام گواهی عدم اعتراض (NOC) و حضور در دفترخانه رسمی ثبت اسناد دبی را به‌طور کامل مدیریت و همراهی می‌کند.'
  }
];

// Update FAQ Elements
const faqItems = doc.querySelectorAll('.faq-item');
faqItems.forEach((item, idx) => {
  if (faqs[idx]) {
    const summary = item.querySelector('summary h3');
    if (summary) summary.textContent = faqs[idx].q;
    const content = item.querySelector('.faq-accordion-content');
    if (content) content.textContent = faqs[idx].a;
  }
});

// JSON-LD Updates
const jsonLdScripts = doc.querySelectorAll('script[type="application/ld+json"]');
jsonLdScripts.forEach(script => {
  try {
    const data = JSON.parse(script.textContent);
    if (data['@type'] === 'BreadcrumbList') {
      data.itemListElement = [
        { "@type": "ListItem", "position": 1, "name": "صفحه اصلی", "item": "https://zarinrealestate.com/fa" },
        { "@type": "ListItem", "position": 2, "name": "املاک", "item": "https://zarinrealestate.com/fa/properties" },
        { "@type": "ListItem", "position": 3, "name": "برای فروش", "item": "https://zarinrealestate.com/fa/properties-for-sale" },
        { "@type": "ListItem", "position": 4, "name": "آپارتمان‌ها", "item": "https://zarinrealestate.com/fa/apartments-for-sale-in-dubai" }
      ];
      script.textContent = JSON.stringify(data, null, 2);
    } else if (data['@type'] === 'FAQPage') {
      data.mainEntity = faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }));
      script.textContent = JSON.stringify(data, null, 2);
    } else if (data['@type'] === 'CollectionPage') {
      data.name = 'خرید آپارتمان در دبی | املاک و مستغلات زرین';
      data.url = 'https://zarinrealestate.com/fa/apartments-for-sale-in-dubai';
      data['@id'] = 'https://zarinrealestate.com/fa/apartments-for-sale-in-dubai#collectionpage';
      data.description = faDesc;
      script.textContent = JSON.stringify(data, null, 2);
    } else if (data['@type'] === 'WebPage') {
      data.name = 'خرید آپارتمان در دبی | املاک و مستغلات زرین';
      data.url = 'https://zarinrealestate.com/fa/apartments-for-sale-in-dubai';
      data['@id'] = 'https://zarinrealestate.com/fa/apartments-for-sale-in-dubai#webpage';
      script.textContent = JSON.stringify(data, null, 2);
    }
  } catch (e) {
    console.error('Failed to parse json-ld', e);
  }
});

// Ensure all internal links in Persian page are prefixed with /fa
doc.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (
    href &&
    href.startsWith('/') &&
    !href.startsWith('/fa') &&
    !href.startsWith('/#') &&
    !href.startsWith('//') &&
    !href.startsWith('/styles') &&
    !href.startsWith('/scripts') &&
    !href.startsWith('/images') &&
    !href.startsWith('/public') &&
    !href.endsWith('.webp') &&
    !href.endsWith('.jpg') &&
    !href.endsWith('.png') &&
    !href.endsWith('.svg')
  ) {
    if (href === '/') {
      a.setAttribute('href', '/fa');
    } else {
      a.setAttribute('href', '/fa' + href);
    }
  }
});

// Output serialized HTML
const faHtml = dom.serialize();

// Ensure fa/apartments-for-sale-in-dubai directory exists
const faDir = path.join(rootDir, 'fa', 'apartments-for-sale-in-dubai');
if (!fs.existsSync(faDir)) {
  fs.mkdirSync(faDir, { recursive: true });
}

fs.writeFileSync(path.join(rootDir, 'fa', 'apartments-for-sale-in-dubai.html'), faHtml, 'utf8');
fs.writeFileSync(path.join(faDir, 'index.html'), faHtml, 'utf8');

console.log('Successfully generated fa/apartments-for-sale-in-dubai.html and fa/apartments-for-sale-in-dubai/index.html');
