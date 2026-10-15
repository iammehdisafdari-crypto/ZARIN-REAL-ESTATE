import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const targetFiles = [
  path.join(rootDir, 'fa/areas.html'),
  path.join(rootDir, 'fa/areas/index.html')
];

for (const filePath of targetFiles) {
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Desktop Nav / Mega Menu translations
  content = content.replace(
    `<a href="/fa/properties" class="text-sm text-bone hover:text-gold-400 transition-colors">All Properties</a>`,
    `<a href="/fa/properties" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_properties">تمامی املاک دبی</a>`
  );
  content = content.replace(
    `<a href="/fa/properties#trophy-residences" class="text-sm text-ash hover:text-gold-400 transition-colors">Trophy Residences</a>`,
    `<a href="/fa/properties#trophy-residences" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_trophy">املاک تراز اول (Trophy) ←</a>`
  );
  content = content.replace(
    `<a href="/fa/properties#branded-residences" class="text-sm text-ash hover:text-gold-400 transition-colors">Branded Residences</a>`,
    `<a href="/fa/properties#branded-residences" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="footer_branded">املاک دارای برند</a>`
  );
  content = content.replace(
    `<a href="/fa/properties#commercial" class="text-sm text-ash hover:text-gold-400 transition-colors">Commercial</a>`,
    `<a href="/fa/properties#commercial" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="footer_commercial">املاک تجاری</a>`
  );

  content = content.replace(
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Discover</div>`,
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_discover">کشف پروژه‌ها</div>`
  );
  content = content.replace(
    `<a href="/fa/off-plan" class="text-sm text-bone hover:text-gold-400 transition-colors">All Off-Plan</a>`,
    `<a href="/fa/off-plan" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_offplan">همه پروژه‌های پیش‌فروش</a>`
  );
  content = content.replace(
    `<a href="/fa/off-plan/new-launches" class="text-sm text-ash hover:text-gold-400 transition-colors">New Launches</a>`,
    `<a href="/fa/off-plan/new-launches" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_new_launches">پروژه‌های تازه راه‌اندازی‌شده</a>`
  );
  content = content.replace(
    `<a href="/fa/off-plan/by-developer" class="text-sm text-ash hover:text-gold-400 transition-colors">By Developer</a>`,
    `<a href="/fa/off-plan/by-developer" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_by_developer">بر اساس سازنده</a>`
  );
  content = content.replace(
    `<a href="/fa/off-plan/investment-guide" class="text-sm text-ash hover:text-gold-400 transition-colors">Investment Guide</a>`,
    `<a href="/fa/off-plan/investment-guide" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_investment_guide">راهنمای سرمایه‌گذاری</a>`
  );

  content = content.replace(
    `<a href="/fa/areas/jumeirah-bay-island" class="text-sm text-ash hover:text-gold-400 transition-colors">Jumeirah Bay Island</a>`,
    `<a href="/fa/areas/jumeirah-bay-island" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_jumeirah_bay_island">جزیره جمیرا بی</a>`
  );
  content = content.replace(
    `<a href="/fa/areas/emirates-hills" class="text-sm text-ash hover:text-gold-400 transition-colors">Emirates Hills</a>`,
    `<a href="/fa/areas/emirates-hills" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_emirates_hills">امارات هیلز</a>`
  );
  content = content.replace(
    `<div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">City Comparisons</div>`,
    `<div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">مقایسه با سایر شهرهای جهان</div>`
  );
  content = content.replace(
    `<a href="/fa/areas/compare/dubai-vs-london" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai vs London</a>`,
    `<a href="/fa/areas/compare/dubai-vs-london" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="areas_vs_london">دبی در برابر لندن</a>`
  );
  content = content.replace(
    `<a href="/fa/areas/compare/dubai-vs-singapore" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai vs Singapore</a>`,
    `<a href="/fa/areas/compare/dubai-vs-singapore" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="areas_vs_singapore">دبی در برابر سنگاپور</a>`
  );
  content = content.replace(
    `<a href="/fa/areas/compare/dubai-vs-new-york" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai vs New York</a>`,
    `<a href="/fa/areas/compare/dubai-vs-new-york" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="areas_vs_newyork">دبی در برابر نیویورک</a>`
  );

  content = content.replace(
    `<a href="/fa/private-office" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false"><span>Private Office</span>`,
    `<a href="/fa/private-office" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false"><span data-i18n="nav_private_office">دفتر اختصاصی</span>`
  );
  content = content.replace(
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">The Private Office</div>`,
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_the_private_office">دفتر اختصاصی زرین</div>`
  );
  content = content.replace(
    `<a href="/fa/private-office" class="text-sm text-bone hover:text-gold-400 transition-colors">Overview</a>`,
    `<a href="/fa/private-office" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_overview">مرور کلی</a>`
  );
  content = content.replace(
    `<a href="/fa/private-office/off-market" class="text-sm text-ash hover:text-gold-400 transition-colors">Off-Market Listings</a>`,
    `<a href="/fa/private-office/off-market" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_off_market_listings">فایل‌های ثبت‌نشده (Off-Market)</a>`
  );
  content = content.replace(
    `<a href="/fa/private-office/multi-currency" class="text-sm text-ash hover:text-gold-400 transition-colors">Multi-Currency</a>`,
    `<a href="/fa/private-office/multi-currency" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_multi_currency">قیمت‌گذاری چند ارزی</a>`
  );
  content = content.replace(
    `<a href="/fa/private-office/crypto-payments" class="text-sm text-ash hover:text-gold-400 transition-colors">Crypto Payments</a>`,
    `<a href="/fa/private-office/crypto-payments" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_crypto_payments">پرداخت با رمزارز</a>`
  );

  content = content.replace(
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Buying &amp; Selling</div>`,
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_buying_selling">خرید و فروش</div>`
  );
  content = content.replace(
    `<a href="/fa/services/buying" class="text-sm text-bone hover:text-gold-400 transition-colors">Buying Advisory</a>`,
    `<a href="/fa/services/buying" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_buying_advisory">مشاوره تخصصی خرید</a>`
  );
  content = content.replace(
    `<a href="/fa/services/mortgage" class="text-sm text-ash hover:text-gold-400 transition-colors">Mortgage</a>`,
    `<a href="/fa/services/mortgage" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_mortgage_advisory">مشاوره وام بانکی</a>`
  );
  content = content.replace(
    `<a href="/fa/services/valuation" class="text-sm text-ash hover:text-gold-400 transition-colors">Valuation</a>`,
    `<a href="/fa/services/valuation" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_free_valuation">کارشناسی رایگان ارزش ملک</a>`
  );
  content = content.replace(
    `<a href="/fa/services/legal" class="text-sm text-ash hover:text-gold-400 transition-colors">Legal</a>`,
    `<a href="/fa/services/legal" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_legal_conveyancing">امور حقوقی و انتقال سند</a>`
  );

  content = content.replace(
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Visa Types</div>`,
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_visa_types">انواع ویزای اقامت</div>`
  );
  content = content.replace(
    `<a href="/fa/visas/golden-visa" class="text-sm text-bone hover:text-gold-400 transition-colors">Golden Visa</a>`,
    `<a href="/fa/visas/golden-visa" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_golden_visa">ویزای طلایی (۱۰ ساله)</a>`
  );
  content = content.replace(
    `<a href="/fa/visas/eligibility-checker" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">Check Eligibility →</a>`,
    `<a href="/fa/visas/eligibility-checker" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold" data-i18n="nav_check_eligibility">بررسی شرایط و احراز هویت ←</a>`
  );

  content = content.replace(
    `<a href="/fa/insights" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false"><span>Insights</span>`,
    `<a href="/fa/insights" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false"><span data-i18n="nav_insights">تحلیل و گزارش‌ها</span>`
  );
  content = content.replace(
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Content Hub</div>`,
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_content_hub">پایگاه دانش و تحلیل</div>`
  );
  content = content.replace(
    `<a href="/fa/insights/blog" class="text-sm text-bone hover:text-gold-400 transition-colors">Blog</a>`,
    `<a href="/fa/insights/blog" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_blog_articles">مقالات تحلیلی وبلاگ</a>`
  );
  content = content.replace(
    `<a href="/fa/insights/market-reports" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Reports</a>`,
    `<a href="/fa/insights/market-reports" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_market_reports">گزارش‌های فصلی بازار</a>`
  );
  content = content.replace(
    `<a href="/fa/insights/calculators" class="text-sm text-ash hover:text-gold-400 transition-colors">Calculators</a>`,
    `<a href="/fa/insights/calculators" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_all_calculators">تمام ماشین‌حساب‌های سرمایه‌گذاری</a>`
  );
  content = content.replace(
    `<a href="/fa/insights/faq" class="text-sm text-ash hover:text-gold-400 transition-colors">FAQ</a>`,
    `<a href="/fa/insights/faq" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_faq_hub">مرکز پرسش‌های پرتکرار</a>`
  );

  content = content.replace(
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">About ZARIN</div>`,
    `<div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_about_zarin">درباره زرین</div>`
  );
  content = content.replace(
    `<a href="/fa/heritage" class="text-sm text-bone hover:text-gold-400 transition-colors">Our Story</a>`,
    `<a href="/fa/heritage" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_our_story">داستان ما (از سال ۲۰۰۵)</a>`
  );
  content = content.replace(
    `<a href="/fa/heritage/team" class="text-sm text-ash hover:text-gold-400 transition-colors">Team</a>`,
    `<a href="/fa/heritage/team" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_team">تیم متخصصان</a>`
  );
  content = content.replace(
    `<a href="/fa/heritage/testimonials" class="text-sm text-ash hover:text-gold-400 transition-colors">Testimonials</a>`,
    `<a href="/fa/heritage/testimonials" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_testimonials">دیدگاه‌ها و رضایت موکلان</a>`
  );
  content = content.replace(
    `<a href="/fa/heritage/awards" class="text-sm text-ash hover:text-gold-400 transition-colors">Awards</a>`,
    `<a href="/fa/heritage/awards" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_awards">جوایز و افتخارات</a>`
  );

  // 2. Breadcrumbs
  content = content.replace(
    `<li><a href="/fa" class="hover:text-gold-400 transition-colors">Home</a></li>
          <li aria-hidden="true">/</li>
          <li class="text-bone font-semibold" aria-current="page">Areas</li>`,
    `<li><a href="/fa" class="hover:text-gold-400 transition-colors" data-i18n="breadcrumb_home">خانه</a></li>
          <li aria-hidden="true">/</li>
          <li class="text-bone font-semibold" aria-current="page" data-i18n="nav_areas">مناطق</li>`
  );

  // 3. Section 2 TL;DR RTL border
  content = content.replace(
    `<div class="max-w-4xl mx-auto border-l-2 border-gold-400 pl-8">`,
    `<div class="max-w-4xl mx-auto border-r-2 border-gold-400 pr-8 border-l-0 pl-0 text-right">`
  );

  // 4. Comparison table links and category tags
  content = content.replaceAll(
    `">View →</a>`,
    `">مشاهده ←</a>`
  );
  content = content.replace(
    `<td class="py-4 px-4 text-right text-slate text-xs">Trophy asset</td>`,
    `<td class="py-4 px-4 text-right text-slate text-xs">ملک شاخص (تروفی)</td>`
  );
  content = content.replace(
    `<td class="py-4 px-4 text-right text-slate text-xs">Capital growth</td>`,
    `<td class="py-4 px-4 text-right text-slate text-xs">رشد ارزش سرمایه</td>`
  );
  content = content.replace(
    `<td class="py-4 px-4 text-right text-slate text-xs">Family living</td>`,
    `<td class="py-4 px-4 text-right text-slate text-xs">سکونت خانوادگی</td>`
  );
  content = content.replace(
    `<td class="py-4 px-4 text-right text-slate text-xs">Balanced returns</td>`,
    `<td class="py-4 px-4 text-right text-slate text-xs">بازدهی متوازن</td>`
  );
  content = content.replace(
    `<td class="py-4 px-4 text-right text-slate text-xs">Best yield</td>`,
    `<td class="py-4 px-4 text-right text-slate text-xs">بالاترین بازدهی</td>`
  );
  content = content.replace(
    `<td class="py-4 px-4 text-right text-slate text-xs">Future growth</td>`,
    `<td class="py-4 px-4 text-right text-slate text-xs">رشد پرشتاب آتی</td>`
  );

  // FAQ icons in RTL
  content = content.replaceAll(
    'class="faq-icon flex-shrink-0 ml-4',
    'class="faq-icon flex-shrink-0 mr-4'
  );

  // 5. CTA Section
  content = content.replace(
    `<span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">+971 58 690 1231</span>`,
    `<span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors inline-block tabular-nums">+971 58 690 1231</span>`
  );
  content = content.replace(
    `placeholder="+1 234 567 890"`,
    `placeholder="+971 50 ... یا +98 912 ..."`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated:', filePath);
}
