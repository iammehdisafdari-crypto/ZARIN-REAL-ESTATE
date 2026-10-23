import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const { translations } = await import('../scripts/i18n.js');
const faDict = translations.fa;

// 1. Read English properties-for-sale.html
const enHtml = fs.readFileSync(path.join(rootDir, 'properties-for-sale.html'), 'utf8');
const dom = new JSDOM(enHtml);
const doc = dom.window.document;

// 2. Set html lang & dir
doc.documentElement.setAttribute('lang', 'fa');
doc.documentElement.setAttribute('dir', 'rtl');

// 3. Update Title & Meta
const faTitle = faDict.prop_sale_meta_title || 'خرید ملک و خانه در دبی | املاک و مستغلات زرین';
const faDesc = faDict.prop_sale_meta_desc || 'مجموعه املاک آماده و نوساز دبی برای خرید — آپارتمان، ویلا، پنت‌هاوس و تاون‌هاوس با بازدهی بالا و اصالت کارشناسی‌شده توسط مشاوران ارشد زرین.';

doc.title = faTitle;

const metaDesc = doc.querySelector('meta[name="description"]');
if (metaDesc) metaDesc.setAttribute('content', faDesc);

const metaKeywords = doc.querySelector('meta[name="keywords"]');
if (metaKeywords) metaKeywords.setAttribute('content', 'خرید ملک در دبی, خرید آپارتمان در دبی, خرید ویلا در دبی, پنت هاوس دبی, قیمت خانه در دبی, املاک دبی, سرمایه گذاری املاک دبی');

// Canonical & Hreflang
const canonical = doc.querySelector('link[rel="canonical"]');
if (canonical) canonical.setAttribute('href', 'https://zarinrealestate.com/fa/properties-for-sale');

doc.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
const head = doc.head;

const hrFa = doc.createElement('link');
hrFa.setAttribute('rel', 'alternate');
hrFa.setAttribute('hreflang', 'fa');
hrFa.setAttribute('href', 'https://zarinrealestate.com/fa/properties-for-sale');
head.appendChild(hrFa);

const hrEn = doc.createElement('link');
hrEn.setAttribute('rel', 'alternate');
hrEn.setAttribute('hreflang', 'en');
hrEn.setAttribute('href', 'https://zarinrealestate.com/properties-for-sale');
head.appendChild(hrEn);

const hrDef = doc.createElement('link');
hrDef.setAttribute('rel', 'alternate');
hrDef.setAttribute('hreflang', 'x-default');
hrDef.setAttribute('href', 'https://zarinrealestate.com/properties-for-sale');
head.appendChild(hrDef);

// Open Graph & Twitter
const ogTitle = doc.querySelector('meta[property="og:title"]');
if (ogTitle) ogTitle.setAttribute('content', faTitle);
const ogDesc = doc.querySelector('meta[property="og:description"]');
if (ogDesc) ogDesc.setAttribute('content', faDesc);
const ogUrl = doc.querySelector('meta[property="og:url"]');
if (ogUrl) ogUrl.setAttribute('content', 'https://zarinrealestate.com/fa/properties-for-sale');
const ogLocale = doc.querySelector('meta[property="og:locale"]');
if (ogLocale) ogLocale.setAttribute('content', 'fa_IR');

const twTitle = doc.querySelector('meta[name="twitter:title"]');
if (twTitle) twTitle.setAttribute('content', faTitle);
const twDesc = doc.querySelector('meta[name="twitter:description"]');
if (twDesc) twDesc.setAttribute('content', faDesc);

// Breadcrumb JSON-LD
const breadcrumbScript = doc.querySelector('script[type="application/ld+json"]');
if (breadcrumbScript) {
  try {
    const data = JSON.parse(breadcrumbScript.textContent);
    if (data['@type'] === 'BreadcrumbList') {
      data.itemListElement = [
        { "@type": "ListItem", "position": 1, "name": "صفحه اصلی", "item": "https://zarinrealestate.com/fa" },
        { "@type": "ListItem", "position": 2, "name": "خرید ملک در دبی", "item": "https://zarinrealestate.com/fa/properties-for-sale" }
      ];
      breadcrumbScript.textContent = JSON.stringify(data, null, 2);
    }
  } catch (e) {
    console.error('Failed to update Breadcrumb JSON-LD', e);
  }
}

// Persian FAQ schema & Content
const faqs = [
  {
    q: 'متوسط قیمت هر فوت مربع ملک در دبی در سال ۲۰۲۶ چقدر است؟',
    a: 'در اواخر سال ۲۰۲۶، متوسط قیمت هر فوت مربع در دبی از حدود ۱٬۲۰۰ درهم در مناطق نوظهور مانند JVC و دبی ساوت، تا بیش از ۳٬۵۰۰ درهم در مناطق پرچمدار مانند پالم جمیرا، داون‌تاون دبی و امارات هیلز متغیر است. مناطق میان‌رده مانند بیزنس بی و دبی مارینا عموماً با نرخ ۱٬۶۰۰ تا ۲٬۲۰۰ درهم بر فوت مربع معامله می‌شوند. مشاوران زرین در جلسه مشاوره، آمارهای دقیق و تفکیک‌شده محله‌ها را در اختیارتان قرار می‌دهند.'
  },
  {
    q: 'هزینه‌های جانبی و قانونی خرید ملک در دبی شامل چه مواردی است؟',
    a: 'علاوه بر بهای درج‌شده ملک، خریداران باید موارد زیر را در بودجه‌بندی لحاظ کنند: هزینه انتقال سند در اداره ثبت اراضی دبی (DLD) به میزان ۴٪، حق‌الزحمه استاندارد کارگزاری (۲٪ برای خریدار)، کارمزد ثبت اداری (۴٬۰۰۰ درهم برای املاک بالای ۵۰۰ هزار درهم)، هزینه صدور سند رسمی تک‌برگ (۵۸۰ درهم) و در صورت دریافت وام بانکی، کارمزد اداری وام (معمولاً ۰.۵ تا ۱٪ مبلغ تسهیلات). املاک زرین پیش از هرگونه اقدام، ریز شفاف تمام هزینه‌ها را اعلام می‌کند.'
  },
  {
    q: 'آیا اتباع خارجی می‌توانند مالکیت قطعی ۱۰۰٪ (فری‌هولد) داشته باشند؟',
    a: 'بله. بر اساس قانون مالکیت سال ۲۰۰۲ امارات، کلیه اتباع خارجی با هر تابعیتی می‌توانند در مناطق معین‌شده دبی (شامل دبی مارینا، داون‌تاون، پالم جمیرا، بیزنس بی، JVC، دبی هیلز و ده‌ها منطقه دیگر) ملک را با مالکیت قطعی ۱۰۰٪ صددرصدی (Freehold) و سند رسمی تک‌برگ به نام خود خریداری کنند. همچنین امکان اخذ اقامت و گلدن ویزای امارات از این طریق میسر است.'
  },
  {
    q: 'فرآیند و زمان لازم برای اتمام خرید ملک در دبی چقدر است؟',
    a: 'در معاملات نقدی (Cash)، فرآیند خرید معمولاً ظرف ۳۰ تا ۴۵ روز کاری پس از امضای توافق‌نامه اولیه (Form F)، دریافت گواهی عدم اعتراض (NOC) از سازنده و انتقال نهایی سند در دفاتر رسمی DLD به پایان می‌رسد. در صورت نیاز به وام بانکی، این زمان بین ۴۵ تا ۶۰ روز خواهد بود. خریدهای پیش‌فروش نیز با ثبت آنی قرارداد اولیه (Oqood) انجام می‌پذیرد.'
  },
  {
    q: 'آیا خرید ملک در دبی در سال ۲۰۲۶ هنوز سرمایه‌گذاری پرسودی است؟',
    a: 'دبی همچنان با ارائه بازدهی ناخالص اجاره‌ای ۵ تا ۸ درصد در آپارتمان‌ها و ۴ تا ۶ درصد در ویلاها، معافیت کامل از مالیات بر درآمد و سود سرمایه، و رشد پرشتاب جمعیت، یکی از جذاب‌ترین مقاصد سرمایه‌گذاری جهان است. با این حال، سودآوری نهایی به قیمت ورود، موقعیت پروژه و پتانسیل خروج بستگی دارد. مشاوران زرین با رویکرد داده‌محور، ارزش واقعی هر دارایی را تحلیل می‌کنند.'
  },
  {
    q: 'برای خرید ملک در دبی چه مدارکی لازم است؟',
    a: 'برای افراد غیرمقیم در امارات: گذرنامه معتبر، مدارک احراز نشانی و اثبات منبع وجوه (Proof of Funds). برای ساکنان امارات: کپی گذرنامه، کارت اقامت (Emirates ID)، تأییدیه پیش‌پرداخت وام (در صورت تأمین مالی بانکی). تیم حقوقی زرین تمامی فرم‌ها و رویه‌های قانونی را گام‌به‌گام پیگیری می‌کند.'
  },
  {
    q: 'آیا امکان بازدید آنلاین و خرید غیرحضوری برای خریداران خارج از امارات وجود دارد؟',
    a: 'بله. ما تورهای ویدئویی زنده از طریق واتس‌اپ یا زوم، ویدئوهای باکیفیت از جزییات واحد و محیط پیرامون، و در پروژه‌های منتخب تورهای سه‌بعدی مجازی ۳۶۰ درجه را فراهم می‌کنیم. همچنین امکان اعطای وکالت‌نامه رسمی (POA) برای انتقال سند بدون حضور فیزیکی میسر است.'
  },
  {
    q: 'حداقل بودجه مورد نیاز برای خرید ملک در دبی چقدر است؟',
    a: 'سوئیت‌های مسکونی در مناطقی مانند JVC یا دبی ساوت از حدود ۳۵۰ تا ۵۰۰ هزار درهم شروع می‌شوند. برای آپارتمان یک‌خوابه مرغوب در مناطقی نظیر دبی مارینا حداقل ۱٬۲۰۰٬۰۰۰ درهم و برای ویلاهای مستقل در شهرک‌های اصیل حداقل ۳٬۵۰۰٬۰۰۰ درهم سرمایه اولیه مورد نیاز است. مشاوران زرین متناسب با بودجه واقعی شما، گزینه‌های ایده‌آل را جستجو می‌کنند.'
  }
];

// Update FAQ JSON-LD script
const allJsonLd = doc.querySelectorAll('script[type="application/ld+json"]');
allJsonLd.forEach(s => {
  try {
    const data = JSON.parse(s.textContent);
    if (data['@type'] === 'FAQPage') {
      data.mainEntity = faqs.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }));
      s.textContent = JSON.stringify(data, null, 2);
    }
  } catch (e) {}
});

// 4. Read header & footer from fa/properties.html to ensure 100% parity
const faPropertiesHtml = fs.readFileSync(path.join(rootDir, 'fa/properties.html'), 'utf8');
const faPropertiesDom = new JSDOM(faPropertiesHtml);
const faHeader = faPropertiesDom.window.document.querySelector('header');
const faFooter = faPropertiesDom.window.document.querySelector('footer');

if (faHeader) {
  const currentHeader = doc.querySelector('header');
  if (currentHeader) currentHeader.replaceWith(doc.importNode(faHeader, true));
}

if (faFooter) {
  const currentFooter = doc.querySelector('footer');
  if (currentFooter) currentFooter.replaceWith(doc.importNode(faFooter, true));
}

// 5. Pre-render all [data-i18n]
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
  if (faDict[k] !== undefined) el.setAttribute('placeholder', faDict[k]);
});

doc.querySelectorAll('[data-i18n-title]').forEach(el => {
  const k = el.getAttribute('data-i18n-title');
  if (faDict[k] !== undefined) el.setAttribute('title', faDict[k]);
});

doc.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
  const k = el.getAttribute('data-i18n-aria-label');
  if (faDict[k] !== undefined) el.setAttribute('aria-label', faDict[k]);
});

// Skip link
const skipLink = doc.querySelector('a.sr-only');
if (skipLink) skipLink.textContent = 'پرش به محتوای اصلی';

// 6. Translate Property Cards
const propertyCards = doc.querySelectorAll('.property-card');
const faPropertyDetails = [
  {
    title: 'آپارتمان ۲ خوابه · مارینا گیت',
    loc: 'دبی مارینا · ۱٬۴۲۰ فوت مربع',
    beds: '۲',
    baths: '۳',
    sqftPrice: '۲٬۰۰۸ درهم',
    priceBadge: '۲.۸۵ میلیون درهم'
  },
  {
    title: 'ویلا ۴ خوابه · فروند M',
    loc: 'پالم جمیرا · ۶٬۲۰۰ فوت مربع',
    beds: '۴',
    baths: '۵',
    sqftPrice: '۲٬۰۱۶ درهم',
    priceBadge: '۱۲.۵ میلیون درهم'
  },
  {
    title: 'تاون‌باوس ۳ خوابه · میرادور',
    loc: 'عربین رنچز · ۲٬۶۵۰ فوت مربع',
    beds: '۳',
    baths: '۴',
    sqftPrice: '۱٬۵۸۵ درهم',
    priceBadge: '۴.۲ میلیون درهم'
  },
  {
    title: 'پنت‌هاوس ۴ خوابه · برج ویستا',
    loc: 'داون‌تاون دبی · ۴٬۸۰۰ فوت مربع',
    beds: '۴',
    baths: '۵',
    sqftPrice: '۱٬۸۵۴ درهم',
    priceBadge: '۸.۹ میلیون درهم'
  },
  {
    title: 'سوئیت مسکونی · اگزیستانتیو تاور',
    loc: 'بیزنس بی · ۴۴۰ فوت مربع',
    beds: 'سوئیت',
    baths: '۱',
    sqftPrice: '۱٬۵۴۵ درهم',
    priceBadge: '۶۸۰ هزار درهم'
  },
  {
    title: 'ویلا ۵ خوابه · سکتور W',
    loc: 'امارات هیلز · ۹٬۲۰۰ فوت مربع',
    beds: '۵',
    baths: '۷',
    sqftPrice: '۲٬۰۱۱ درهم',
    priceBadge: '۱۸.۵ میلیون درهم'
  }
];

propertyCards.forEach((card, idx) => {
  const data = faPropertyDetails[idx];
  if (!data) return;
  const titleEl = card.querySelector('h3');
  if (titleEl) titleEl.textContent = data.title;
  const locEl = card.querySelector('.text-sm.text-ash');
  if (locEl) locEl.textContent = data.loc;

  // Price badge in top right
  const badgeTopRight = card.querySelector('.absolute.top-3.right-3');
  if (badgeTopRight) badgeTopRight.textContent = data.priceBadge;

  // Grid numbers
  const numEls = card.querySelectorAll('.grid.grid-cols-3 .text-bone.font-semibold');
  if (numEls[0]) numEls[0].textContent = data.beds;
  if (numEls[1]) numEls[1].textContent = data.baths;
  if (numEls[2]) numEls[2].textContent = data.sqftPrice;
});

// 7. Translate Type section cards
const typeSection = doc.querySelector('section[aria-label="Browse by property type"]');
if (typeSection) {
  const typeCards = typeSection.querySelectorAll('a.group');
  const typeData = [
    {
      desc: 'از استودیو تا واحدهای ۴ خوابه در دبی مارینا، داون‌تاون، بیزنس بی، JVC و فراتر.',
      price: 'شروع از ۳۵۰ هزار درهم',
      count: '۱٬۲۰۰+ فایل'
    },
    {
      desc: 'ویلاهای مستقل و مجلل در پالم جمیرا، امارات هیلز، عربین رنچز و دبی هیلز استیت.',
      price: 'شروع از ۳.۵ میلیون درهم',
      count: '۴۵۰+ فایل'
    },
    {
      desc: 'خانه‌های مدرن خانوادگی در شهرک‌های سرسبز و طراحی‌شده همراه با باغ اختصاصی و پارکینگ.',
      price: 'شروع از ۲.۲ میلیون درهم',
      count: '۳۸۰+ فایل'
    },
    {
      desc: 'پنت‌هاوس‌های مجلل طبقات بالا با آسانسور اختصاصی، تراس وسیع و چشم‌انداز افق دبی یا دریا.',
      price: 'شروع از ۶ میلیون درهم',
      count: '۸۵+ فایل'
    }
  ];

  typeCards.forEach((card, idx) => {
    const data = typeData[idx];
    if (!data) return;
    const p = card.querySelector('p');
    if (p) p.textContent = data.desc;
    const priceEl = card.querySelector('.text-gold-400.font-semibold');
    if (priceEl) priceEl.textContent = data.price;
    const countEl = card.querySelector('.text-slate');
    if (countEl) countEl.textContent = data.count;
  });
}

// 8. Translate Area section cards
const areaSection = doc.querySelector('section[aria-label="Browse by area"]');
if (areaSection) {
  const areaCards = areaSection.querySelectorAll('a.group');
  const areaData = [
    { title: 'دبی مارینا', price: '۱.۲ تا ۸ میلیون درهم', count: '۵۲۰+ فایل' },
    { title: 'داون‌تاون دبی', price: '۱.۵ تا ۲۵ میلیون درهم', count: '۳۴۰+ فایل' },
    { title: 'پالم جمیرا', price: '۲.۵ تا ۸۰ میلیون درهم', count: '۱۹۰+ فایل' },
    { title: 'بیزنس بی', price: '۶۸۰ هزار تا ۱۲ میلیون درهم', count: '۴۱۰+ فایل' },
    { title: 'جمیرا ویلیج سیرکل (JVC)', price: '۳۵۰ هزار تا ۵ میلیون درهم', count: '۶۸۰+ فایل' },
    { title: 'دبی هیلز استیت', price: '۱.۲ تا ۲۵ میلیون درهم', count: '۲۸۰+ فایل' }
  ];

  areaCards.forEach((card, idx) => {
    const data = areaData[idx];
    if (!data) return;
    const h3 = card.querySelector('h3');
    if (h3) h3.textContent = data.title;
    const priceEl = card.querySelector('.text-gold-400.font-semibold');
    if (priceEl) priceEl.textContent = data.price;
    const countEl = card.querySelector('.text-ash');
    if (countEl) countEl.textContent = data.count;
  });
}

// 9. Translate FAQ details elements
const detailsEls = doc.querySelectorAll('section[aria-label="Buying FAQ"] details');
detailsEls.forEach((details, idx) => {
  const item = faqs[idx];
  if (!item) return;
  const h3 = details.querySelector('summary h3');
  if (h3) h3.textContent = item.q;
  const answerDiv = details.querySelector('div.px-6.pb-6');
  if (answerDiv) answerDiv.textContent = item.a;
});

const faqFooterText = doc.querySelector('section[aria-label="Buying FAQ"] .text-center.mt-12 p');
if (faqFooterText) {
  faqFooterText.innerHTML = 'همچنان پرسشی دارید؟ <a href="/fa/consultation" class="text-gold-400 font-semibold hover:underline">رزرو مشاوره رایگان</a> یا <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">ارتباط در واتس‌اپ</a>.';
}

// 10. Update all internal links to /fa/...
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

// Language switcher active state
doc.querySelectorAll('.lang-btn').forEach(btn => {
  const isFa = btn.dataset.lang === 'fa';
  btn.classList.toggle('active', isFa);
  btn.classList.toggle('is-active', isFa);
  btn.setAttribute('aria-pressed', isFa ? 'true' : 'false');
});

// Flip SVGs
doc.querySelectorAll('svg').forEach(svg => {
  const pathEl = svg.querySelector('path');
  if (pathEl) {
    const d = pathEl.getAttribute('d') || '';
    if (d.includes('M17 8l4 4m0 0l-4 4m4-4H3') || d.includes('M9 5l7 7-7 7') || d.includes('M14 5l7 7m0 0l-7 7m7-7H3')) {
      svg.classList.add('rtl-flip');
    }
  }
});

// RTL typography override
const customStyle = doc.createElement('style');
customStyle.textContent = `
  body { font-family: "Vazirmatn", "Source Sans 3", -apple-system, sans-serif !important; }
  .rtl-flip { transform: scaleX(-1); display: inline-block; }
  [dir="rtl"] .border-l { border-right-width: 1px; border-left-width: 0; }
  [dir="rtl"] .border-r { border-left-width: 1px; border-right-width: 0; }
`;
doc.head.appendChild(customStyle);

// 11. Write out Persian files
const faPath = path.join(rootDir, 'fa/properties-for-sale.html');
const faIndexDir = path.join(rootDir, 'fa/properties-for-sale');
if (!fs.existsSync(faIndexDir)) fs.mkdirSync(faIndexDir, { recursive: true });

const serialized = dom.serialize();
fs.writeFileSync(faPath, serialized, 'utf8');
fs.writeFileSync(path.join(faIndexDir, 'index.html'), serialized, 'utf8');

console.log('Successfully generated Persian pages:');
console.log(' - fa/properties-for-sale.html');
console.log(' - fa/properties-for-sale/index.html');
