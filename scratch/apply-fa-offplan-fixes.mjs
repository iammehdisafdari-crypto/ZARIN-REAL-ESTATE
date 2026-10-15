import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const targetFiles = [
  path.join(rootDir, 'fa/off-plan.html'),
  path.join(rootDir, 'fa/off-plan/index.html')
];

for (const filePath of targetFiles) {
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Hero headline
  const oldH1 = `<h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] tracking-tight text-bone mb-6">Dubai's Most<br><span class="text-gold-gradient" data-i18n="offplan_hero_title_2">موردانتظارترین</span><br>Developments</h1>`;
  const newH1 = `<h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] tracking-tight text-bone mb-6">
          شاخص‌ترین و<br><span class="text-gold-gradient" data-i18n="offplan_hero_title_2">موردانتظارترین پروژه‌های پیش‌فروش</span><br>دبی
        </h1>`;
  content = content.replace(oldH1, newH1);

  // 2. Hero button
  const oldHeroBtn = `<a href="/fa/consultation" class="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Register interest">Register Interest<svg class="w-4 h-4 ml-2 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a>`;
  const newHeroBtn = `<a href="/fa/consultation" class="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="ثبت تمایل به خرید">ثبت تمایل به خرید<svg class="w-4 h-4 mr-2 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a>`;
  content = content.replace(oldHeroBtn, newHeroBtn);

  // 3. Section 2 TL;DR RTL border
  content = content.replace(
    `<div class="max-w-4xl mx-auto border-l-2 border-gold-400 pl-8">`,
    `<div class="max-w-4xl mx-auto border-r-2 border-gold-400 pr-8 border-l-0 pl-0 text-right">`
  );

  // 4. Section 3 New launches button
  content = content.replace(
    `aria-label="View all new launches">View All New Launches<svg class="w-4 h-4 rtl-flip"`,
    `aria-label="مشاهده تمام پروژه‌های جدید">مشاهده تمام پروژه‌های جدید<svg class="w-4 h-4 mr-2 rtl-flip"`
  );

  // 5. Section 4 Coming Soon bullets & texts
  content = content.replace(
    `<div><div class="text-sm font-bold text-bone">Priority Unit Selection</div><div class="text-xs text-slate mt-1">Choose from the best units before public release</div></div>`,
    `<div><div class="text-sm font-bold text-bone">اولویت در انتخاب واحد</div><div class="text-xs text-slate mt-1">امکان انتخاب بهترین واحدها پیش از آغاز عرضه عمومی</div></div>`
  );
  content = content.replace(
    `<div><div class="text-sm font-bold text-bone">Early-Bird Pricing</div><div class="text-xs text-slate mt-1">Save 5-10% compared to launch-day pricing</div></div>`,
    `<div><div class="text-sm font-bold text-bone">قیمت‌گذاری در مرحله اول فروش</div><div class="text-xs text-slate mt-1">۵ تا ۱۰ درصد صرفه‌جویی در مقایسه با نرخ‌های روز افتتاحیه</div></div>`
  );
  content = content.replace(
    `<div><div class="text-sm font-bold text-bone">Flexible Payment Plans</div><div class="text-xs text-slate mt-1">Negotiate custom payment structures with developers</div></div>`,
    `<div><div class="text-sm font-bold text-bone">برنامه‌های پرداخت منعطف</div><div class="text-xs text-slate mt-1">امکان مذاکره برای ساختار پرداخت اختصاصی با سازندگان</div></div>`
  );

  content = content.replace(
    `<a href="/fa/off-plan/coming-soon" class="inline-flex items-center px-8 py-4 border border-gold-line text-gold-400 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" aria-label="Register for pre-launch access">Register for Pre-Launch Access<svg class="w-4 h-4 ml-2 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a>`,
    `<a href="/fa/off-plan/coming-soon" class="inline-flex items-center px-8 py-4 border border-gold-line text-gold-400 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" aria-label="ثبت‌نام برای دسترسی به مرحله پیش‌عرضه">ثبت‌نام برای دسترسی به مرحله پیش‌عرضه<svg class="w-4 h-4 mr-2 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a>`
  );

  // Coming soon cards
  content = content.replace(
    `<p class="text-sm text-ash mb-4">By Binghatti · Downtown Dubai · 2-4 BR apartments from AED 4.2M</p>`,
    `<p class="text-sm text-ash mb-4">سازنده: بن‌غاطی · داون‌تاون دبی · آپارتمان‌های ۲ تا ۴ خوابه از ۴.۲ میلیون درهم</p>`
  );
  content = content.replace(
    `<p class="text-sm text-ash mb-4">By Vista · Palm Jumeirah · 3-5 BR penthouses from AED 22M</p>`,
    `<p class="text-sm text-ash mb-4">سازنده: ویستا · پالم جمیرا · پنت‌هاوس‌های ۳ تا ۵ خوابه از ۲۲ میلیون درهم</p>`
  );
  content = content.replace(
    `<p class="text-sm text-ash mb-4">By Binghatti · Business Bay · 2-4 BR branded apartments from AED 12M</p>`,
    `<p class="text-sm text-ash mb-4">سازنده: بن‌غاطی · بیزنس بی · آپارتمان‌های ۲ تا ۴ خوابه برندینگ از ۱۲ میلیون درهم</p>`
  );

  content = content.replace('<span>From AED 4.2M</span>', '<span>شروع از ۴.۲ میلیون درهم</span>');
  content = content.replace('<span>From AED 22M</span>', '<span>شروع از ۲۲ میلیون درهم</span>');
  content = content.replace('<span>From AED 12M</span>', '<span>شروع از ۱۲ میلیون درهم</span>');

  // 6. Section 5 Developers
  content = content.replace('★ Top Rated Developer', '★ سازنده برگزیده و رتبه اول');
  content = content.replace(
    `aria-label="View all developers">View All Developers<svg class="w-4 h-4 rtl-flip"`,
    `aria-label="مشاهده همه سازندگان">مشاهده همه سازندگان<svg class="w-4 h-4 mr-2 rtl-flip"`
  );

  // 7. Section 6 Investment Thesis
  content = content.replace(
    `<p class="text-xs text-slate mt-6">Source: Dubai Land Department construction cost index, Q3 2026.`,
    `<p class="text-xs text-slate mt-6">منبع: شاخص رسمی هزینه ساخت دایره اراضی دبی (DLD)، سه‌ماهه سوم ۲۰۲۶.`
  );
  content = content.replace(
    `<div><h4 class="text-lg font-bold text-bone">Payment Plan Leverage</h4><p class="text-sm text-slate">Pay 60-70% over 24-36 months, not upfront</p></div>`,
    `<div><h4 class="text-lg font-bold text-bone">اهرم مالی از طریق جدول پرداخت</h4><p class="text-sm text-slate">پرداخت ۶۰ تا ۷۰ درصد مبلغ در بازه ۲۴ تا ۳۶ ماه، بدون نیاز به پرداخت یکجا</p></div>`
  );
  content = content.replace(
    `<div><h4 class="text-lg font-bold text-bone">Capital Appreciation</h4><p class="text-sm text-slate">Property value rises during construction period</p></div>`,
    `<div><h4 class="text-lg font-bold text-bone">افزایش ارزش سرمایه در طول دوره ساخت</h4><p class="text-sm text-slate">رشد طبیعی ارزش ملک همگام با پیشرفت فیزیکی پروژه</p></div>`
  );
  content = content.replace(
    `<div><h4 class="text-lg font-bold text-bone">Escrow Protection</h4><p class="text-sm text-slate">RERA-monitored escrow accounts safeguard your funds</p></div>`,
    `<div><h4 class="text-lg font-bold text-bone">حفاظت با حساب‌های امانی رسمی</h4><p class="text-sm text-slate">نظارت رسمی RERA بر حساب‌های امانی اسکرو جهت صیانت کامل از سرمایه شما</p></div>`
  );
  content = content.replace(
    `<div><h4 class="text-lg font-bold text-bone">Lower Entry Threshold</h4><p class="text-sm text-slate">Enter the market with 10-20% down payment only</p></div>`,
    `<div><h4 class="text-lg font-bold text-bone">آستانه ورود پایین‌تر برای سرمایه‌گذاری</h4><p class="text-sm text-slate">ورود به بازار املاک تنها با پرداخت ۱۰ تا ۲۰ درصد پیش‌پرداخت اولیه</p></div>`
  );

  // 8. Section 7 Payment plans
  content = content.replace(
    `<div class="flex justify-between text-ash"><span>During construction</span><span class="font-bold text-bone stat-number">50%</span></div><div class="flex justify-between text-ash"><span>On handover</span><span class="font-bold text-bone stat-number">20%</span></div>`,
    `<div class="flex justify-between text-ash"><span data-i18n="plan_during">در طول دوره ساخت</span><span class="font-bold text-bone stat-number">50%</span></div><div class="flex justify-between text-ash"><span data-i18n="plan_handover">هنگام تحویل کلید</span><span class="font-bold text-bone stat-number">20%</span></div>`
  );
  content = content.replace(
    `aria-label="Calculate your payment plan">Calculate Your Payment Plan<svg class="w-4 h-4 ml-2"`,
    `aria-label="محاسبه جدول اقساط شما">محاسبه جدول اقساط شما<svg class="w-4 h-4 mr-2" rtl-flip`
  );

  // 9. Section 9 table note
  content = content.replace(
    `Source: Dubai Land Department (DLD) project completion data, Q3 2026. Ratings based on handover delay rate (40%), escrow health (30%), and after-sales survey (30%).`,
    `منبع: داده‌های تکمیل پروژه دایره اراضی دبی (DLD)، سه‌ماهه سوم ۲۰۲۶. رتبه‌بندی‌ها بر اساس نرخ تأخیر تحویل (۴۰٪)، سلامت حساب امانی (۳۰٪) و نظرسنجی خدمات پس از فروش (۳۰٪).`
  );

  // 10. Section 11 FAQ (8 questions and answers)
  // Q1
  content = content.replace(
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">Is off-plan property in Dubai a good investment?</span>`,
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">آیا خرید ملک پیش‌فروش در دبی سرمایه‌گذاری مناسبی است؟</span>`
  );
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Yes. Dubai off-plan properties in 2026 are priced 15-22% below replacement cost. Combined with structured payment plans, this creates built-in equity before handover. <a href="/fa/off-plan/investment-guide" class="text-gold-400 hover:underline" data-i18n="link_read_inv_guide">مطالعه راهنمای سرمایه‌گذاری ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">بله. املاک پیش‌فروش دبی در سال ۲۰۲۶ با قیمتی حدود ۱۵ تا ۲۲ درصد پایین‌تر از هزینه بازتولید و ساخت عرضه می‌شوند. این اختلاف قیمت همراه با اقساط مرحله‌ای، ارزش افزوده ذاتی تضمین‌شده‌ای را پیش از تحویل کلید خلق می‌کند. <a href="/fa/off-plan/investment-guide" class="text-gold-400 hover:underline" data-i18n="link_read_inv_guide">مطالعه راهنمای سرمایه‌گذاری ←</a></p>`
  );

  // Q2
  content = content.replace(
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">How does the escrow system protect off-plan buyers?</span>`,
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">حساب‌های امانی (اسکرو) چگونه از خریداران پیش‌فروش محافظت می‌کنند؟</span>`
  );
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">The Escrow Law (Law No. 8 of 2007) requires developers to deposit buyer funds into RERA-monitored escrow accounts. Funds are released only at verified construction milestones. <a href="/fa/insights/guides" class="text-gold-400 hover:underline" data-i18n="link_read_buyer_guide">مطالعه راهنمای خریدار ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">قانون حساب‌های امانی (قانون شماره ۸ سال ۲۰۰۷) سازندگان را ملزم می‌دارد که کلیه وجوه دریافتی از خریداران را به حساب‌های امانی تحت نظارت مستقیم RERA واریز نمایند. آزادسازی این وجوه تنها متناسب با مراحل پیشرفت فیزیکی و تأییدشده پروژه انجام می‌گیرد. <a href="/fa/insights/guides" class="text-gold-400 hover:underline" data-i18n="link_read_buyer_guide">مطالعه راهنمای خریدار ←</a></p>`
  );

  // Q3
  content = content.replace(
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">What are the most common payment plans?</span>`,
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">متداول‌ترین جداول و شرایط پرداخت اقساطی کدامند؟</span>`
  );
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Common plans are 60/40 (60% during construction, 40% on handover), 70/30, and post-handover plans where 20-30% is paid after key handover over 2-3 years. <a href="/fa/off-plan/payment-plan-calculator" class="text-gold-400 hover:underline" data-i18n="link_calc_plan">محاسبه جدول اقساط شما ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">طرح‌های متداول شامل ۶۰/۴۰ (۶۰٪ در طول دوره ساخت و ۴۰٪ هنگام تحویل)، ۷۰/۳۰ و همچنین طرح‌های پس از تحویل کلید است که در آن ۲۰ تا ۳۰ درصد مبلغ طی بازه ۲ تا ۳ ساله پس از تحویل اقساط می‌گردد. <a href="/fa/off-plan/payment-plan-calculator" class="text-gold-400 hover:underline" data-i18n="link_calc_plan">محاسبه جدول اقساط شما ←</a></p>`
  );

  // Q4
  content = content.replace(
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">What is the expected ROI on Dubai off-plan properties?</span>`,
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">میزان بازدهی مورد انتظار سرمایه‌گذاری (ROI) در املاک پیش‌فروش دبی چقدر است؟</span>`
  );
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Expected ROI ranges 6-8.5% gross yield. Prime areas yield 5-6%, emerging areas reach 7-9%. Off-plan typically offers 15-22% capital appreciation at handover. <a href="/fa/off-plan/roi-predictor" class="text-gold-400 hover:underline" data-i18n="link_predict_roi">پیش‌بینی بازدهی سرمایه‌گذاری ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">بازدهی ناخالص اجاره پیش‌بینی‌شده بین ۶ تا ۸.۵ درصد است. مناطق مرکزی و پرچم‌دار بازدهی ۵ تا ۶ درصدی و مناطق نوساز و در حال توسعه بازدهی ۷ تا ۹ درصدی به همراه دارند. املاک پیش‌فروش همچنین به طور معمول ۱۵ تا ۲۲ درصد سود سرمایه‌ای تا زمان تحویل به ارمغان می‌آورند. <a href="/fa/off-plan/roi-predictor" class="text-gold-400 hover:underline" data-i18n="link_predict_roi">پیش‌بینی بازدهی سرمایه‌گذاری ←</a></p>`
  );

  // Q5
  content = content.replace(
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">How long does off-plan construction take?</span>`,
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">دوره ساخت و تکمیل پروژه‌های پیش‌فروش معمولاً چقدر زمان می‌برد؟</span>`
  );
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Construction typically takes 24-36 months. ZARIN-vetted developers have a 96% on-time handover rate. Payment plans are structured around construction milestones. <a href="/fa/off-plan/developer-reputation-tracker" class="text-gold-400 hover:underline" data-i18n="link_view_dev_tracker">مشاهده کارنامه سازنده ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">دوره ساخت به طور معمول ۲۴ تا ۳۶ ماه طول می‌کشد. سازندگان تأییدشده توسط زرین دارای نرخ ۹۶٪ تحویل به‌موقع هستند و برنامه‌های پرداخت دقیقاً متناسب با پیشرفت پروژه تنظیم شده‌اند. <a href="/fa/off-plan/developer-reputation-tracker" class="text-gold-400 hover:underline" data-i18n="link_view_dev_tracker">مشاهده کارنامه سازنده ←</a></p>`
  );

  // Q6
  content = content.replace(
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">Can I sell my off-plan property before handover?</span>`,
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">آیا امکان فروش یا واگذاری ملک پیش‌فروش پیش از تحویل کلید وجود دارد؟</span>`
  );
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Yes. You can sell before handover if the developer allows assignment (usually after 30-40% of payment plan is paid). This is called flipping and can generate capital gains. <a href="/fa/services/selling" class="text-gold-400 hover:underline" data-i18n="link_learn_selling">راهنمای واگذاری و فروش ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">بله. در صورتی که سازنده امکان انتقال قرارداد (Assignment) را مجاز بداند (معمولاً پس از پرداخت ۳۰ تا ۴۰ درصد از کل ارزش ملک)، خریدار می‌تواند واحد خود را پیش از تحویل با سود واگذار نماید. <a href="/fa/services/selling" class="text-gold-400 hover:underline" data-i18n="link_learn_selling">راهنمای واگذاری و فروش ←</a></p>`
  );

  // Q7
  content = content.replace(
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">What is the difference between off-plan and ready property?</span>`,
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">تفاوت اصلی ملک پیش‌فروش با ملک آماده چیست؟</span>`
  );
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Off-plan is bought from developers before construction completes, with payment plans and lower entry prices. Ready properties are completed and available immediately but cost 15-22% more. <a href="/fa/properties" class="text-gold-400 hover:underline" data-i18n="link_view_ready">مشاهده املاک آماده تحویل ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">ملک پیش‌فروش از سازنده و پیش از پایان ساخت همراه با جداول پرداخت منعطف و قیمت ۱۵ تا ۲۲ درصد ارزان‌تر خریداری می‌شود. در مقابل، ملک آماده بلافاصله قابل سکونت است اما نیازمند پرداخت نقدی یا وام با قیمت کامل بازار می‌باشد. <a href="/fa/properties" class="text-gold-400 hover:underline" data-i18n="link_view_ready">مشاهده املاک آماده تحویل ←</a></p>`
  );

  // Q8
  content = content.replace(
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">Which Dubai developers are most reliable?</span>`,
    `<span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">کدام سازندگان دبی بیشترین قابلیت اطمینان و اعتبار را دارند؟</span>`
  );
  content = content.replace(
    `<p class="text-ash leading-relaxed" itemprop="text">Top-rated developers include Emaar (98% on-time), Sobha (95%), Meraas (93%), DAMAC (92%), Nakheel (90%), and Binghatti (89%). ZARIN's Developer Reputation Tracker monitors each. <a href="/fa/off-plan/developer-reputation-tracker" class="text-gold-400 hover:underline" data-i18n="tracker_link">مشاهده کامل جدول عملکرد ←</a></p>`,
    `<p class="text-ash leading-relaxed" itemprop="text">سازندگان برتر دارای بالاترین رتبه شامل اعمار (۹۸٪ تحویل به‌موقع)، شوبا (۹۵٪)، مراس (۹۳٪)، داماك (۹۲٪)، نخیل (۹۰٪) و بن‌غاطی (۸۹٪) هستند که همگی در رصدخانه عملکرد زرین پایش می‌شوند. <a href="/fa/off-plan/developer-reputation-tracker" class="text-gold-400 hover:underline" data-i18n="tracker_link">مشاهده کامل جدول عملکرد ←</a></p>`
  );

  // FAQ icons
  content = content.replaceAll(
    'class="faq-icon flex-shrink-0 ml-4',
    'class="faq-icon flex-shrink-0 mr-4'
  );

  // 11. Section 12 (CTA)
  content = content.replace(
    `<span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">+971 58 690 1231</span>`,
    `<span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors inline-block tabular-nums">+971 58 690 1231</span>`
  );
  content = content.replace(
    `<p class="text-xs text-slate text-center">By submitting, you agree to our <a href="/fa/legal/privacy" class="text-gold-400 hover:underline" data-i18n="link_privacy_policy">سیاست حفظ حریم خصوصی</a>.</p>`,
    `<p class="text-xs text-slate text-center">با ارسال این فرم، با <a href="/fa/legal/privacy" class="text-gold-400 hover:underline" data-i18n="link_privacy_policy">سیاست حفظ حریم خصوصی</a> ما موافقت می‌نمایید.</p>`
  );

  // 12. Footer text
  content = content.replace(
    `<p class="text-sm text-slate leading-relaxed mb-6">Dubai off-plan properties and investment advisory.</p>`,
    `<p class="text-sm text-slate leading-relaxed mb-6" data-i18n="footer_sub_text">مجموعه پروژه‌های پیش‌فروش و مشاوره تخصصی سرمایه‌گذاری در دبی.</p>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated:', filePath);
}
