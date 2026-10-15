import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const targetFiles = [
  path.join(rootDir, 'fa/properties.html'),
  path.join(rootDir, 'fa/properties/index.html'),
  path.join(rootDir, 'fa/properties-for-sale.html')
];

for (const filePath of targetFiles) {
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Hero headline
  const oldH1 = `<h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] tracking-tight text-bone mb-6">
          Curated Dubai<br>
          <span class="text-gold-gradient" data-i18n="nav_properties">املاک برگزیده</span>
        </h1>`;
  const newH1 = `<h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] tracking-tight text-bone mb-6">
          مجموعه املاک برگزیده<br>
          <span class="text-gold-gradient">لوکس و تراز اول دبی</span>
        </h1>`;
  content = content.replace(oldH1, newH1);

  // 2. Hero supporting copy
  const oldHeroCopy = `<p class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-10 font-light">
          Browse ZARIN's portfolio of Dubai properties for sale — penthouses, villas, branded residences, and trophy apartments in Palm Jumeirah, Downtown, Dubai Hills, and Business Bay. Each listing includes verified ROI analysis, payment plans, and developer due diligence.
        </p>`;
  const newHeroCopy = `<p class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-10 font-light">
          مجموعه املاک منتخب زرین برای فروش در دبی را بررسی نمایید — پنت‌هاوس‌ها، ویلاها، اقامتگاه‌های دارای نشان تجاری برتر و آپارتمان‌های شاخص در پالم جمیرا، داون‌تاون، دبی هیلز و بیزنس بی. هر فایل شامل تحلیل موثق بازدهی سرمایه‌گذاری (ROI)، برنامه‌های پرداخت منعطف و راستی‌آزمایی جامع سازنده است.
        </p>`;
  content = content.replace(oldHeroCopy, newHeroCopy);

  // 3. Properties Overview (Section 2)
  const oldOverview = `<div class="max-w-4xl mx-auto border-l-2 border-gold-400 pl-8">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4" data-i18n="prop_overview_eyebrow">نمای کلی املاک</div>
        <p id="tldr-summary" class="text-xl md:text-2xl leading-relaxed text-bone font-light">
          ZARIN's property portfolio features 247 active listings across Dubai's prime areas — from AED 2.8M apartments in Business Bay to AED 85M trophy villas on Jumeirah Bay Island. Every listing is RERA-verified, includes developer due diligence, and comes with transparent cost breakdowns (DLD fees, service charges, and commission disclosed upfront).
        </p>
      </div>`;
  const newOverview = `<div class="max-w-4xl mx-auto border-r-2 border-gold-400 pr-8 border-l-0 pl-0 text-right">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4" data-i18n="prop_overview_eyebrow">نمای کلی املاک</div>
        <p id="tldr-summary" class="text-xl md:text-2xl leading-relaxed text-bone font-light">
          پورتفولیوی املاک زرین شامل ۲۴۷ فایل فعال در مناطق تراز اول دبی است — از آپارتمان‌های ۲.۸ میلیون درهمی در بیزنس بی تا ویلاهای شاخص و تروفی ۸۵ میلیون درهمی در جزیره جمیرا بی. تمامی فایل‌ها دارای تأییدیه رسمی RERA، بررسی پیشینه سازنده و تفکیک کاملاً شفاف هزینه‌ها (عوارض دایره اراضی دبی (DLD)، هزینه‌های شارژ خدمات سالیانه و کمیسیون شفاف و اعلام‌شده از ابتدا) می‌باشند.
        </p>
      </div>`;
  content = content.replace(oldOverview, newOverview);

  // 4. Off-Market Access (Section 10)
  const oldOffMarket = `<h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-bone mb-6">
            Looking for Properties Above <span class="text-gold-gradient">AED 25M?</span>
          </h2>
          <p class="text-lg text-ash leading-relaxed mb-8">
            Many of Dubai's most exclusive properties never reach public portals. ZARIN's Private Office maintains a portfolio of off-market trophy residences available exclusively to qualified buyers. Apply for access to view these confidential listings.
          </p>
          <div class="grid sm:grid-cols-3 gap-4 mb-8">
            <div class="border border-gold-line rounded-xs p-4 bg-gold-soft">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1" data-i18n="active_offmarket_label">فعال</div>
              <div class="text-2xl font-bold text-bone stat-number">38</div>
              <div class="text-xs text-slate mt-1" data-i18n="offmarket_listings_sub">فایل اختصاصی خارج از بازار</div>
            </div>
            <div class="border border-white-line rounded-xs p-4">
              <div class="text-xs uppercase tracking-wider text-slate font-semibold mb-1" data-i18n="avg_size_label">میانگین حجم</div>
              <div class="text-2xl font-bold text-bone stat-number">AED 47M</div>
              <div class="text-xs text-slate mt-1" data-i18n="acq_val_sub">ارزش هر معامله</div>
            </div>
            <div class="border border-white-line rounded-xs p-4">
              <div class="text-xs uppercase tracking-wider text-slate font-semibold mb-1">Discretion</div>
              <div class="text-2xl font-bold text-gold-400 stat-number">AAA</div>
              <div class="text-xs text-slate mt-1" data-i18n="discretion_sub">سطح اعتبار</div>
            </div>
          </div>
          <a href="/fa/private-office" class="inline-flex items-center px-8 py-4 border border-gold-line text-gold-400 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" aria-label="Apply for private office access">
            Apply for Private Office Access
            <svg class="w-4 h-4 ml-2 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>`;

  const newOffMarket = `<h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-bone mb-6">
            به دنبال املاک بالاتر از <span class="text-gold-gradient">۲۵ میلیون درهم هستید؟</span>
          </h2>
          <p class="text-lg text-ash leading-relaxed mb-8">
            بسیاری از انحصاری‌ترین املاک دبی هرگز در پورتال‌های عمومی عرضه نمی‌شوند. دفتر معاملات اختصاصی (پرایوت آفیس) زرین مجموعه‌ای محرمانه از املاک تراز اول خارج از بازار را منحصراً در اختیار خریداران واجد شرایط قرار می‌دهد. برای دسترسی به این فایل‌های انحصاری درخواست خود را ثبت نمایید.
          </p>
          <div class="grid sm:grid-cols-3 gap-4 mb-8">
            <div class="border border-gold-line rounded-xs p-4 bg-gold-soft">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1" data-i18n="active_offmarket_label">فعال</div>
              <div class="text-2xl font-bold text-bone stat-number">38</div>
              <div class="text-xs text-slate mt-1" data-i18n="offmarket_listings_sub">فایل اختصاصی خارج از بازار</div>
            </div>
            <div class="border border-white-line rounded-xs p-4">
              <div class="text-xs uppercase tracking-wider text-slate font-semibold mb-1" data-i18n="avg_size_label">میانگین حجم</div>
              <div class="text-2xl font-bold text-bone stat-number">AED 47M</div>
              <div class="text-xs text-slate mt-1" data-i18n="acq_val_sub">ارزش هر معامله</div>
            </div>
            <div class="border border-white-line rounded-xs p-4">
              <div class="text-xs uppercase tracking-wider text-slate font-semibold mb-1">محرمانگی و امانتداری</div>
              <div class="text-2xl font-bold text-gold-400 stat-number">AAA</div>
              <div class="text-xs text-slate mt-1" data-i18n="discretion_sub">سطح اعتبار</div>
            </div>
          </div>
          <a href="/fa/private-office" class="inline-flex items-center px-8 py-4 border border-gold-line text-gold-400 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" aria-label="درخواست دسترسی به دفتر اختصاصی">
            درخواست دسترسی به دفتر اختصاصی
            <svg class="w-4 h-4 mr-2 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>`;
  content = content.replace(oldOffMarket, newOffMarket);

  // 5. FAQ Answers & icon margins
  // Q1
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Dubai offers apartments, villas, penthouses, townhouses, and branded residences. ZARIN's portfolio includes trophy properties in Palm Jumeirah, Downtown Dubai, Dubai Hills, and Business Bay. <a href="/fa/insights/guides" class="text-gold-400 hover:underline" data-i18n="link_read_buyer_guide">مطالعه راهنمای خریدار ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">دبی تنوع گسترده‌ای از آپارتمان‌ها، ویلاها، پنت‌هاوس‌ها، تاون‌هاوس‌ها و اقامتگاه‌های دارای نشان تجاری برتر را ارائه می‌دهد. مجموعه زرین شامل املاک شاخص در پالم جمیرا، داون‌تاون دبی، دبی هیلز و بیزنس بی است. <a href="/fa/insights/guides" class="text-gold-400 hover:underline" data-i18n="link_read_buyer_guide">مطالعه راهنمای خریدار ←</a></p>`
  );

  // Q2
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Luxury properties in Dubai range from AED 5M ($1.4M) for high-end apartments to AED 50M+ ($13.6M) for trophy villas and penthouses. Prime areas like Palm Jumeirah average AED 2,400 per sqft. <a href="/fa/insights/calculators" class="text-gold-400 hover:underline" data-i18n="link_use_calc">استفاده از ماشین‌حساب هزینه‌ها ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">قیمت املاک لوکس در دبی از ۵ میلیون درهم (۱.۴ میلیون دلار) برای آپارتمان‌های ممتاز تا بیش از ۵۰ میلیون درهم (۱۳.۶ میلیون دلار) برای ویلاها و پنت‌هاوس‌های تراز اول متغیر است. در مناطق ویژه نظیر پالم جمیرا میانگین قیمت هر فوت مربع حدود ۲,۴۰۰ درهم می‌باشد. <a href="/fa/insights/calculators" class="text-gold-400 hover:underline" data-i18n="link_use_calc">استفاده از ماشین‌حساب هزینه‌ها ←</a></p>`
  );

  // Q3
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Top investment areas include Palm Jumeirah (5.5% yield), Dubai Marina (6.8%), Downtown Dubai (6.2%), and Business Bay (7.5%). Each offers different yield-to-entry ratios. <a href="/fa/areas" class="text-gold-400 hover:underline" data-i18n="link_comp_areas">مقایسه تمامی مناطق ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">برترین مناطق سرمایه‌گذاری شامل پالم جمیرا (۵.۵٪ بازدهی اجاره)، دبی مارینا (۶.۸٪)، داون‌تاون دبی (۶.۲٪) و بیزنس بی (۷.۵٪) هستند. هر یک از این مناطق نسبت‌های متفاوتی از نظر بازدهی اجاره و میزان سرمایه ورودی ارائه می‌دهند. <a href="/fa/areas" class="text-gold-400 hover:underline" data-i18n="link_comp_areas">مقایسه تمامی مناطق ←</a></p>`
  );

  // Q4
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Yes. Since the 2002 Freehold Decree, foreigners can own freehold property in designated Dubai areas. Title deeds are issued by the Dubai Land Department (DLD). <a href="/fa/insights/guides/non-resident-buyer" class="text-gold-400 hover:underline" data-i18n="link_non_res_guide">مطالعه راهنمای غیرمقیمان ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">بله. از زمان صدور فرمان مالکیت آزاد در سال ۲۰۰۲، اتباع خارجی حق تملک ۱۰۰٪ قطعی (فری‌هلد) ملک را در مناطق تعیین‌شده دبی دارند. اسناد رسمی مالکیت توسط دایره اراضی دبی (DLD) صادر و ثبت می‌گردد. <a href="/fa/insights/guides/non-resident-buyer" class="text-gold-400 hover:underline" data-i18n="link_non_res_guide">مطالعه راهنمای غیرمقیمان ←</a></p>`
  );

  // Q5
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Branded residences are luxury properties developed in partnership with premium brands like Bugatti, Armani, Cavalli, Bentley, Mercedes-Benz, and Aston Martin. They offer brand-managed services and design. <a href="/fa/branded-residences-in-dubai" class="text-gold-400 hover:underline" data-i18n="link_view_branded">مشاهده املاک برندینگ ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">اقامتگاه‌های دارای نشان تجاری، پروژه‌های بسیار مجللی هستند که با همکاری برندهای تراز اول بین‌المللی نظیر بوگاتی، آرمانی، کاوالی، بنتلی، مرسدس بنز و استون مارتین ساخته می‌شوند. این پروژه‌ها از معماری شاخص و خدمات مدیریتی برند بهره‌مند هستند. <a href="/fa/branded-residences-in-dubai" class="text-gold-400 hover:underline" data-i18n="link_view_branded">مشاهده املاک برندینگ ←</a></p>`
  );

  // Q6
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Off-plan properties are bought directly from developers before construction completes, often with payment plans. Ready properties are completed and available for immediate move-in. Off-plan typically costs 15-22% less. <a href="/fa/off-plan" class="text-gold-400 hover:underline" data-i18n="link_view_offplan">مشاهده پروژه‌های پیش‌فروش ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">املاک پیش‌فروش مستقیماً از سازندگان پیش از اتمام ساخت و اغلب با برنامه‌های پرداخت اقساطی خریداری می‌شوند. املاک آماده کاملاً تکمیل شده و بلافاصله قابل سکونت یا اجاره هستند. واحدهای پیش‌فروش معمولاً ۱۵ تا ۲۲ درصد ارزان‌تر از پروژه‌های آماده عرضه می‌شوند. <a href="/fa/off-plan" class="text-gold-400 hover:underline" data-i18n="link_view_offplan">مشاهده پروژه‌های پیش‌فروش ←</a></p>`
  );

  // Q7
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">The 10-year Golden Visa requires a minimum property investment of AED 2 million (USD 545,000), verified by the Dubai Land Department. <a href="/fa/visas/golden-visa" class="text-gold-400 hover:underline" data-i18n="link_check_elig">بررسی شرایط و صلاحیت ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">اخذ ویزای طلایی ۱۰ ساله نیازمند حداقل سرمایه‌گذاری ملکی به ارزش ۲ میلیون درهم (۵۴۵,۰۰۰ دلار آمریکا) با تأیید رسمی دایره اراضی دبی (DLD) است. <a href="/fa/visas/golden-visa" class="text-gold-400 hover:underline" data-i18n="link_check_elig">بررسی شرایط و صلاحیت ←</a></p>`
  );

  // Q8
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Yes. ZARIN offers 360-degree virtual tours and video viewings for most properties. We also provide detailed floor plans, payment schedules, and ROI analysis before any in-person visit. <a href="/fa/consultation" class="text-gold-400 hover:underline" data-i18n="link_req_virtual">درخواست بازدید مجازی ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">بله. زرین برای اکثر املاک تورهای مجازی ۳۶۰ درجه و بازدیدهای زنده ویدئویی ارائه می‌دهد. همچنین نقشه‌های تفصیلی پلان، جدول پرداخت و تحلیل بازدهی سرمایه‌گذاری پیش از هرگونه سفر در اختیارتان قرار می‌گیرد. <a href="/fa/consultation" class="text-gold-400 hover:underline" data-i18n="link_req_virtual">درخواست بازدید مجازی ←</a></p>`
  );

  // FAQ icons margin in RTL
  content = content.replaceAll(
    'class="faq-icon flex-shrink-0 ml-4',
    'class="faq-icon flex-shrink-0 mr-4'
  );

  // 6. Final CTA Section (Section 12)
  const oldCTA = `<div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4" data-i18n="cta_eyebrow">مشاوره اختصاصی</div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-bone mb-6" data-i18n="prop_cant_find">ملک مد نظر خود را پیدا نکردید؟</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">
            Schedule a confidential consultation with a ZARIN advisor. Tell us your investment thesis, lifestyle requirements, and budget — we'll curate a shortlist of properties aligned with your mandate, including off-market opportunities.
          </p>

          <div class="space-y-4 mb-8">
            <a href="tel:+971586901231" class="flex items-center gap-4 group" aria-label="Call us">
              <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center group-hover:bg-gold-soft transition-colors">
                <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <div class="text-sm font-bold text-bone" data-i18n="contact_phone_title">تلفن مستقیم</div>
                <span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">+971 58 690 1231</span>
              </div>
            </a>
            <a href="https://wa.me/971586901231" class="flex items-center gap-4 group" aria-label="WhatsApp us">
              <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center group-hover:bg-gold-soft transition-colors">
                <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <div class="text-sm font-bold text-bone" data-i18n="contact_wa_title">واتس‌اپ</div>
                <span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors" data-i18n="contact_msg_directly">ارسال مستقیم پیام به مشاور</span>
              </div>
            </a>
          </div>`;

  const newCTA = `<div class="text-right">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4" data-i18n="cta_eyebrow">مشاوره اختصاصی</div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-bone mb-6" data-i18n="prop_cant_find">ملک مد نظر خود را پیدا نکردید؟</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">
            یک جلسه مشاوره محرمانه با مشاوران ارشد زرین تنظیم نمایید. چشم‌انداز سرمایه‌گذاری، معیارهای سبک زندگی و بودجه خود را با ما در میان بگذارید — ما فهرستی گزینش‌شده از املاک متناسب با نیازهای شما، شامل فایل‌های ویژه و خارج از بازار را در اختیارتان قرار خواهیم داد.
          </p>

          <div class="space-y-4 mb-8">
            <a href="tel:+971586901231" class="flex items-center gap-4 group" aria-label="تماس تلفنی مستقیم">
              <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center group-hover:bg-gold-soft transition-colors">
                <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div class="text-right">
                <div class="text-sm font-bold text-bone" data-i18n="contact_phone_title">تلفن مستقیم</div>
                <span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors inline-block tabular-nums">+971 58 690 1231</span>
              </div>
            </a>
            <a href="https://wa.me/971586901231" class="flex items-center gap-4 group" aria-label="ارتباط در واتس‌اپ">
              <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center group-hover:bg-gold-soft transition-colors">
                <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div class="text-right">
                <div class="text-sm font-bold text-bone" data-i18n="contact_wa_title">واتس‌اپ</div>
                <span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors" data-i18n="contact_msg_directly">ارسال مستقیم پیام به مشاور</span>
              </div>
            </a>
          </div>`;
  content = content.replace(oldCTA, newCTA);

  // Privacy note
  content = content.replace(
    `<p class="text-xs text-slate text-center">By submitting, you agree to our <a href="/fa/legal/privacy" class="text-gold-400 hover:underline" data-i18n="link_privacy_policy">سیاست حفظ حریم خصوصی</a>.</p>`,
    `<p class="text-xs text-slate text-center">با ارسال این فرم، با <a href="/fa/legal/privacy" class="text-gold-400 hover:underline" data-i18n="link_privacy_policy">سیاست حفظ حریم خصوصی</a> ما موافقت می‌نمایید.</p>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated:', filePath);
}
