import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const htmlContent = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>اخذ اقامت و گلدن ویزای دبی از طریق خرید ملک | زرین (ZARIN)</title>
  <meta name="description" content="راهنمای جامع اخذ اقامت امارات با خرید ملک: گلدن ویزای ۱۰ ساله، ویزای سرمایه‌گذاری ۲ ساله، ویزای بازنشستگی و دورکاری. ارزیابی شرایط، مشاوره حقوقی و فرآیند اخذ سند با نظارت دپارتمان اراضی دبی.">
  <meta name="keywords" content="گلدن ویزای دبی, اقامت امارات با خرید ملک, ویزای ۱۰ ساله دبی, خرید ملک ۲ میلیون درهم دبی, شرایط ویزای طلایی امارات">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/fa/visas">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/visas">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/visas">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/visas">

  <meta property="og:type" content="website">
  <meta property="og:title" content="اخذ اقامت و گلدن ویزای دبی از طریق خرید ملک | ZARIN">
  <meta property="og:description" content="اقامت دبی از طریق سرمایه‌گذاری ملکی: گلدن ویزای ۱۰ ساله، ویزای سرمایه‌گذاری ۲ ساله و ارزیابی شرایط.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="راهنمای گلدن ویزای دبی از طریق خرید ملک">
  <meta property="og:url" content="https://zarinrealestate.com/fa/visas">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="اخذ اقامت و گلدن ویزای دبی از طریق خرید ملک | ZARIN">
  <meta name="twitter:description" content="راهنمای جامع گلدن ویزای ۱۰ ساله امارات از طریق خرید ملک با زرین.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles/main.css">

  <style>
    html{scroll-behavior:smooth}body{font-family:"Vazirmatn","Source Sans 3",-apple-system,sans-serif;background:#0A0B0E;color:#F8F9FA;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}
    ::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#0A0B0E}::-webkit-scrollbar-thumb{background:#C8AB83;border-radius:4px}
    ::selection{background:rgba(200,171,131,0.3);color:#F8F9FA}
    .glass{background:rgba(10,11,14,0.78);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
    .gold-glow{transition:box-shadow .5s cubic-bezier(.16,1,.3,1),border-color .5s cubic-bezier(.16,1,.3,1)}
    .gold-glow:hover{box-shadow:0 10px 30px rgba(200,171,131,.15);border-color:rgba(200,171,131,.45)}
    .text-gold-gradient{background:linear-gradient(135deg,#DFC49E 0%,#C8AB83 50%,#A88D66 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
    .stat-number{font-variant-numeric:tabular-nums;letter-spacing:-.02em}
    .mega-menu-trigger{position:relative}
    .mega-menu-panel{opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .3s cubic-bezier(.16,1,.3,1),transform .3s cubic-bezier(.16,1,.3,1),visibility .3s;z-index:950}
    .mega-menu-panel::before{content:'';position:absolute;top:-12px;left:0;right:0;height:12px}
    .mega-menu-trigger:hover .mega-menu-panel,.mega-menu-trigger:focus-within .mega-menu-panel{opacity:1;visibility:visible;transform:translateY(0)}
    .card-lift{transition:transform .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1)}
    .card-lift:hover{transform:translateY(-4px);box-shadow:0 24px 60px rgba(0,0,0,.5)}
    .img-zoom{overflow:hidden}.img-zoom img{transition:transform .8s cubic-bezier(.16,1,.3,1)}.img-zoom:hover img{transform:scale(1.05)}
    .mobile-menu{transform:translateX(100%);transition:transform .4s cubic-bezier(.16,1,.3,1)}.mobile-menu.open{transform:translateX(0)}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    .animate-fade-in-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    details summary{list-style:none;cursor:pointer}details summary::-webkit-details-marker{display:none}
    details[open] .faq-icon{transform:rotate(45deg)}.faq-icon{transition:transform .3s cubic-bezier(.16,1,.3,1)}
    .sticky-whatsapp{display:none}@media(max-width:1024px){.sticky-whatsapp{display:flex}}
    .rtl-flip{transform:scaleX(-1)}
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"خانه","item":"https://zarinrealestate.com/fa"},
    {"@type":"ListItem","position":2,"name":"اقامت و ویزا","item":"https://zarinrealestate.com/fa/visas"}
  ]}
  </script>

  <!-- JSON-LD: Service + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Service","@id":"https://zarinrealestate.com/fa/visas#service",
    "name":"مشاوره تخصصی ویزا و اقامت دبی با خرید ملک — املاک زرین",
    "url":"https://zarinrealestate.com/fa/visas",
    "description":"اخذ اقامت امارات از طریق سرمایه‌گذاری در املاک دبی: گلدن ویزای ۱۰ ساله، ویزای سرمایه‌گذاری ۲ ساله، ویزای بازنشستگی و دورکاری.",
    "provider":{"@id":"https://zarinrealestate.com/#organization"},
    "areaServed":{"@type":"Country","name":"امارات متحده عربی"},
    "hasOfferCatalog":{"@type":"OfferCatalog","name":"انواع ویزای اقامتی دبی","itemListElement":[
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"گلدن ویزای ۱۰ ساله امارات","url":"https://zarinrealestate.com/fa/visas#golden-visa"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"ویزای سرمایه‌گذار ۲ ساله","url":"https://zarinrealestate.com/fa/visas#investor-visa"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"ویزای بازنشستگی ۵ ساله","url":"https://zarinrealestate.com/fa/visas#retirement-visa"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"ویزای دورکاری دبی","url":"https://zarinrealestate.com/fa/visas#remote-work-visa"}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/fa/visas#faq","mainEntity":[
    {"@type":"Question","name":"گلدن ویزای ۱۰ ساله دبی چیست؟","acceptedAnswer":{"@type":"Answer","text":"گلدن ویزای امارات، اقامت بلندمدت ۱۰ ساله قابل تمدید است که به خریداران ملکی با ارزش حداقل ۲ میلیون درهم تعلق می‌گیرد. این ویزا شامل سرمایه‌گذار، همسر و تمامی فرزندان می‌شود."}},
    {"@type":"Question","name":"حداقل سرمایه‌گذاری مورد نیاز برای دریافت گلدن ویزا چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"حداقل ارزش ملک برای گلدن ویزا ۲ میلیون درهم (معادل تقریبی ۵۴۵ هزار دلار آمریکا) است. ملک می‌تواند یک واحد مستقل یا مجموعه‌ای از املاک باشد."}},
    {"@type":"Question","name":"آیا برای حفظ گلدن ویزا شرط حداقل روز اقامت در سال وجود دارد؟","acceptedAnswer":{"@type":"Answer","text":"خیر. بر خلاف ویزاهای معمولی که هر ۶ ماه یکبار ورود به خاک امارات الزامی است، دارندگان گلدن ویزا هیچ محدودیت زمانی در خروج از امارات ندارند و اقامت آنها باطل نمی‌شود."}},
    {"@type":"Question","name":"فرآیند اداری اخذ گلدن ویزا چقدر زمان می‌برد؟","acceptedAnswer":{"@type":"Answer","text":"پس از انتقال رسمی سند مالکیت در اداره اراضی دبی (DLD)، کل پروسه اداری، معاینات پزشکی و صدور کارت ملی امارات (Emirates ID) توسط تیم زرین ظرف ۲ تا ۳ هفته کاری انجام می‌شود."}}
  ]}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">پرش به محتوای اصلی</a>

  <!-- HEADER -->
  <header id="site-header" class="fixed top-0 left-0 w-full z-[900] transition-all duration-500" role="banner" style="padding:1.25rem 0;border-bottom:1px solid transparent;">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex items-center justify-between gap-4">
        <!-- Logo -->
        <a href="/fa" class="flex items-center gap-2 group flex-shrink-0" aria-label="املاک زرین — صفحه اصلی">
          <span class="font-sans font-extrabold text-2xl tracking-tight text-bone group-hover:text-gold-400 transition-colors duration-300">ZARIN</span>
          <span class="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold border-r border-gold-line pr-2">املاک لوکس دبی</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1" aria-label="ناوبری اصلی">
          <div class="mega-menu-trigger">
            <a href="/fa/properties" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">املاک دبی<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">املاک آماده و تحویل‌شده</div>
              <a href="/fa/properties" class="text-sm text-bone hover:text-gold-400 transition-colors">همه املاک دبی</a>
              <a href="/fa/properties" class="text-sm text-ash hover:text-gold-400 transition-colors">املاک سوپرلوکس شاخص</a>
              <a href="/fa/properties" class="text-sm text-ash hover:text-gold-400 transition-colors">اقامتگاه‌های برندینگ‌شده</a>
              <a href="/fa/properties" class="text-sm text-ash hover:text-gold-400 transition-colors">املاک تجاری و اداری</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/fa/off-plan" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">پیش‌فروش (آف‌پلان)<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <a href="/fa/off-plan" class="text-sm text-bone hover:text-gold-400 transition-colors">همه پروژه‌های آف‌پلان</a>
              <a href="/fa/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">پروژه‌های تازه عرضه‌شده</a>
              <a href="/fa/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">تفکیک بر اساس سازنده</a>
              <a href="/fa/off-plan" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">راهنمای سرمایه‌گذاری ←</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/fa/areas" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">مناطق دبی<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <a href="/fa/areas" class="text-sm text-bone hover:text-gold-400 transition-colors">پالم جمیرا</a>
              <a href="/fa/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">داون‌تاون دبی</a>
              <a href="/fa/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">دبی هیلز استیت</a>
              <a href="/fa/areas" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">همه مناطق دبی ←</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/fa/private-office" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">پرایوت آفیس<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-gold-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <a href="/fa/private-office" class="text-sm text-bone hover:text-gold-400 transition-colors font-semibold">معرفی و شرایط</a>
              <a href="/fa/private-office" class="text-sm text-ash hover:text-gold-400 transition-colors">املاک خارج از بازار (Off-Market)</a>
              <a href="/fa/private-office" class="text-sm text-ash hover:text-gold-400 transition-colors">قیمت‌گذاری چندارزی</a>
              <a href="/fa/private-office" class="text-sm text-ash hover:text-gold-400 transition-colors">تسویه کریپتو</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/fa/services" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">خدمات ما<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <a href="/fa/services" class="text-sm text-bone hover:text-gold-400 transition-colors">مشاوره خرید ملک</a>
              <a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">تسهیلات و وام مسکن</a>
              <a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">امور حقوقی و سند</a>
              <a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">کارشناسی و ارزیابی</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/fa/visas" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center gap-1" aria-current="page" aria-haspopup="true" aria-expanded="false">اقامت و ویزا<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">انواع ویزا</div>
              <a href="/fa/visas" class="text-sm text-bone hover:text-gold-400 transition-colors">گلدن ویزای ۱۰ ساله</a>
              <a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">ویزای سرمایه‌گذاری ۲ ساله</a>
              <a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">ویزای بازنشستگی ۵ ساله</a>
              <a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">ویزای دورکاری</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">بر اساس ملیت</div>
              <a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">سرمایه‌گذاران خاورمیانه و ایران</a>
              <a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">خریداران اروپایی و بریتانیا</a>
              <a href="/fa/visas" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">ارزیابی آنلاین شرایط ←</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/fa/insights" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">تحلیل بازار<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <a href="/fa/insights" class="text-sm text-bone hover:text-gold-400 transition-colors">گزارش‌های فصلی بازار</a>
              <a href="/fa/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">مقالات و تحلیل‌ها</a>
              <a href="/fa/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">ماشین‌حساب‌های مالی</a>
              <a href="/fa/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">پرسش‌های متداول</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/fa/heritage" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">اصالت زرین<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <a href="/fa/heritage" class="text-sm text-bone hover:text-gold-400 transition-colors">داستان ما (از ۲۰۰۵)</a>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">تیم و مشاوران ارشد</a>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">دیدگاه مشتریان</a>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">مجوزها و افتخارات</a>
            </div>
          </div>
        </nav>

        <!-- Header Actions -->
        <div class="flex items-center gap-3">
          <div class="hidden sm:flex items-center h-8 bg-ink-800 border border-white-line rounded-xs p-0.5" role="group" aria-label="تغییر زبان">
            <button type="button" class="lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all cursor-pointer" data-lang="en" aria-label="Switch to English" aria-pressed="false">EN</button>
            <button type="button" class="lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all active is-active cursor-pointer" data-lang="fa" aria-label="تغییر زبان به فارسی" aria-pressed="true">فارسی</button>
          </div>

          <a href="tel:+971586901231" class="hidden md:flex items-center gap-2 text-xs font-semibold text-ash hover:text-gold-400 transition-colors" aria-label="تماس تلفنی">
            <svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span dir="ltr" class="tabular-nums">+971 58 690 1231</span>
          </a>

          <a href="/fa/consultation" class="hidden md:inline-flex items-center px-5 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-[0.08em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="رزرو مشاوره">رزرو مشاوره</a>

          <div class="mobile-lang-container relative lg:hidden" id="mobile-lang-container">
            <button
              type="button"
              id="mobile-lang-trigger"
              class="mobile-lang-trigger flex items-center gap-1 px-2.5 py-1.5 rounded-xs border border-white-line text-xs font-bold text-bone hover:border-gold-line transition-all"
              aria-label="انتخاب زبان"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="mobile-lang-menu"
            >
              <span id="mobile-lang-label">FA</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mobile-lang-menu" class="mobile-lang-menu hidden absolute top-full left-0 mt-2 w-36 bg-ink-850 border border-gold-line rounded-xs shadow-monolith py-1 z-[1100]" role="menu" aria-labelledby="mobile-lang-trigger">
              <button type="button" class="lang-btn mobile-lang-item w-full px-3 py-2 text-right text-xs text-ash hover:text-gold-400 flex items-center justify-between cursor-pointer" data-lang="en" role="menuitem" aria-label="Switch to English">
                <span>English (EN)</span>
                <span class="mobile-lang-check text-gold-400 font-bold hidden">✓</span>
              </button>
              <button type="button" class="lang-btn mobile-lang-item w-full px-3 py-2 text-right text-xs text-ash hover:text-gold-400 flex items-center justify-between cursor-pointer active is-active" data-lang="fa" role="menuitem" aria-label="تغییر به زبان فارسی">
                <span>فارسی (FA)</span>
                <span class="mobile-lang-check text-gold-400 font-bold">✓</span>
              </button>
            </div>
          </div>

          <button id="mobile-menu-toggle" class="lg:hidden text-bone hover:text-gold-400 transition-colors p-2" aria-label="باز کردن منو" aria-expanded="false" aria-controls="mobile-menu">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Menu Drawer -->
  <div id="mobile-menu" class="mobile-menu fixed top-0 right-0 w-full max-w-sm h-full bg-ink-900 border-l border-white-line z-[1000] overflow-y-auto lg:hidden" role="dialog" aria-modal="true" aria-label="منوی همراه">
    <div class="p-6">
      <div class="flex justify-between items-center mb-8">
        <span class="font-sans font-extrabold text-xl text-bone">ZARIN</span>
        <button id="mobile-menu-close" class="text-ash hover:text-gold-400 transition-colors" aria-label="بستن منو">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="flex flex-col gap-1" aria-label="ناوبری اصلی موبایل">
        <div class="mobile-nav-item"><a href="/fa/properties" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">املاک دبی</a></div>
        <div class="mobile-nav-item"><a href="/fa/off-plan" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">پیش‌فروش (آف‌پلان)</a></div>
        <div class="mobile-nav-item"><a href="/fa/areas" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">مناطق دبی</a></div>
        <div class="mobile-nav-item"><a href="/fa/private-office" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">پرایوت آفیس</a></div>
        <div class="mobile-nav-item"><a href="/fa/services" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">خدمات ما</a></div>
        <div class="mobile-nav-item"><a href="/fa/visas" class="flex-1 py-3 px-4 text-sm font-semibold text-gold-400">اقامت و ویزا</a></div>
        <div class="mobile-nav-item"><a href="/fa/insights" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">تحلیل بازار</a></div>
        <div class="mobile-nav-item"><a href="/fa/heritage" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">اصالت زرین</a></div>
        <div class="h-px bg-white-line my-3"></div>
        <a href="/fa/consultation" class="py-3 px-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-wide text-center rounded-xs hover:bg-gold-300 transition-all">رزرو وقت مشاوره</a>
        <a href="tel:+971586901231" class="py-3 px-4 text-sm text-ash hover:text-gold-400 text-center"><span dir="ltr" class="tabular-nums">+971 58 690 1231</span></a>
      </nav>
    </div>
  </div>

  <!-- Breadcrumb -->
  <div class="pt-24 bg-ink-900 border-b border-white-line">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-4">
      <nav aria-label="مسیر صفحه" class="text-xs">
        <ol class="flex items-center gap-2 text-slate">
          <li><a href="/fa" class="hover:text-gold-400 transition-colors">خانه</a></li>
          <li aria-hidden="true">/</li>
          <li class="text-bone font-semibold" aria-current="page">اقامت و گلدن ویزای دبی</li>
        </ol>
      </nav>
    </div>
  </div>

  <main id="main">

  <!-- 1. HERO -->
  <section class="relative py-20 md:py-32 overflow-hidden bg-ink-950" aria-label="بخش هدر ویزا">
    <div class="absolute inset-0 opacity-10"><img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-ink-950 via-ink-950/95 to-ink-950/80"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">اقامت استراتژیک دبی</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-4xl sm:text-6xl lg:text-[4.75rem] leading-[1.1] tracking-tight text-bone mb-6">اخذ گلدن ویزای دبی<br>با <span class="text-gold-gradient">سرمایه‌گذاری ملکی</span></h1>
        <p class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">مسیر قانونی و تضمین‌شده دریافت اقامت بلندمدت امارات متحده عربی. گلدن ویزای ۱۰ ساله برای خریدار، همسر و فرزندان با حداقل خرید ۲ میلیون درهم — بدون الزام به حضور مداوم در دبی، همراه با افتتاح حساب بانکی بین‌المللی و معافیت کامل مالیاتی بر درآمد شخصی.</p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#eligibility" class="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="ارزیابی آنلاین شرایط اقامت">ارزیابی آنلاین شرایط شما<svg class="w-4 h-4 mr-2 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
          <a href="#visa-types" class="inline-flex items-center justify-center px-8 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="مقایسه انواع ویزا">مقایسه انواع ویزاها</a>
        </div>
        <div class="flex flex-wrap items-center gap-6 md:gap-10 mt-16 pt-8 border-t border-white-line">
          <div><div class="text-2xl md:text-3xl font-bold text-gold-400 stat-number">۱۰ ساله</div><div class="text-xs text-slate uppercase tracking-wider mt-1">مدت اعتبار گلدن ویزا</div></div>
          <div><div class="text-2xl md:text-3xl font-bold text-gold-400 stat-number">۲ میلیون درهم</div><div class="text-xs text-slate uppercase tracking-wider mt-1">حداقل ارزش سرمایه‌گذاری</div></div>
          <div><div class="text-2xl md:text-3xl font-bold text-gold-400 stat-number">۲ تا ۳ هفته</div><div class="text-xs text-slate uppercase tracking-wider mt-1">زمان پردازش اداری</div></div>
          <div><div class="text-2xl md:text-3xl font-bold text-gold-400 stat-number">۱۰۰٪</div><div class="text-xs text-slate uppercase tracking-wider mt-1">پوشش کامل خانواده</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. TL;DR -->
  <section class="bg-ink-850 py-16 md:py-20" aria-label="خلاصه اقامت ویزای ملکی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-4xl mx-auto border-r-2 border-gold-400 pr-8">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">خلاصه قوانین اقامت ملکی دبی</div>
        <p id="tldr-summary" class="text-xl md:text-2xl leading-relaxed text-bone font-light">دولت امارات متحده عربی مسیرهای متعددی را برای اقامت سرمایه‌گذاران ملکی فراهم کرده است: گلدن ویزای ۱۰ ساله برای خریدهای ۲ میلیون درهم به بالا، ویزای سرمایه‌گذار ۲ ساله برای خریدهای ۷۵۰ هزار درهم به بالا، و ویزای بازنشستگی ۵ ساله برای افراد بالای ۵۵ سال. دپارتمان تخصصی ویزای زرین کلیه مراحل کارشناسی سند در اداره اراضی دبی (DLD) و اداره مهاجرت (GDRFA) را از ابتدا تا صدور کارت شناسایی مدیریت می‌کند.</p>
      </div>
    </div>
  </section>

  <!-- 3. VISA COMPARISON TABLE -->
  <section id="visa-types" class="bg-ink-900 py-24 md:py-32" aria-label="جدول مقایسه ویزاها">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">مقایسه گزینه‌ها</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">چهار مسیر قانونی جهت اقامت در دبی</h2>
        <p class="text-ash max-w-2xl mx-auto mt-4 leading-relaxed">مقایسه طول مدت، سقف سرمایه‌گذاری، شمول اعضای خانواده و حق کار در دبی.</p>
      </div>
      <div class="overflow-x-auto bg-ink-800 border border-white-line rounded-sm">
        <table class="w-full text-sm text-right">
          <thead><tr class="border-b border-gold-line">
            <th class="py-4 px-4 text-xs uppercase tracking-wider text-gold-400 font-semibold">نوع ویزا</th>
            <th class="py-4 px-4 text-xs uppercase tracking-wider text-gold-400 font-semibold">مدت اعتبار</th>
            <th class="py-4 px-4 text-xs uppercase tracking-wider text-gold-400 font-semibold">حداقل سرمایه</th>
            <th class="py-4 px-4 text-xs uppercase tracking-wider text-gold-400 font-semibold">شمول خانواده</th>
            <th class="py-4 px-4 text-xs uppercase tracking-wider text-gold-400 font-semibold">حق کار و تجارت</th>
            <th class="py-4 px-4 text-xs uppercase tracking-wider text-gold-400 font-semibold">اقدام</th>
          </tr></thead>
          <tbody class="divide-y divide-white-line">
            <tr class="hover:bg-white-soft transition-colors bg-gold-soft">
              <td class="py-4 px-4"><div class="flex items-center gap-2"><span class="text-bone font-semibold">گلدن ویزای طلایی</span><span class="px-2 py-0.5 bg-gold-400 text-ink-900 rounded-xs text-[10px] font-bold uppercase">بهترین گزینه</span></div></td>
              <td class="py-4 px-4 text-gold-400 font-bold stat-number">۱۰ سال (قابل تمدید)</td>
              <td class="py-4 px-4 text-ash stat-number">۲ میلیون درهم (۵۴۵ هزار دلار)</td>
              <td class="py-4 px-4 text-emerald-400">بله (همسر، فرزندان و والدین)</td>
              <td class="py-4 px-4 text-emerald-400">کامل و بدون نیاز به اسپانسر</td>
              <td class="py-4 px-4"><a href="#apply" class="text-gold-400 hover:underline text-xs">درخواست مشاوره ←</a></td>
            </tr>
            <tr class="hover:bg-white-soft transition-colors">
              <td class="py-4 px-4 text-bone font-semibold">ویزای سرمایه‌گذار ملکی</td>
              <td class="py-4 px-4 text-gold-400 font-bold stat-number">۲ سال (قابل تمدید)</td>
              <td class="py-4 px-4 text-ash stat-number">۷۵۰ هزار درهم (۲۰۵ هزار دلار)</td>
              <td class="py-4 px-4 text-emerald-400">بله (همسر و فرزندان)</td>
              <td class="py-4 px-4 text-emerald-400">کامل</td>
              <td class="py-4 px-4"><a href="#apply" class="text-gold-400 hover:underline text-xs">درخواست مشاوره ←</a></td>
            </tr>
            <tr class="hover:bg-white-soft transition-colors">
              <td class="py-4 px-4 text-bone font-semibold">ویزای بازنشستگی</td>
              <td class="py-4 px-4 text-gold-400 font-bold stat-number">۵ سال</td>
              <td class="py-4 px-4 text-ash stat-number">ملک ۲ میلیون درهمی (سن +۵۵)</td>
              <td class="py-4 px-4 text-amber-400">همسر</td>
              <td class="py-4 px-4 text-slate">خیر (اقامت بازنشستگی)</td>
              <td class="py-4 px-4"><a href="#apply" class="text-gold-400 hover:underline text-xs">درخواست مشاوره ←</a></td>
            </tr>
            <tr class="hover:bg-white-soft transition-colors">
              <td class="py-4 px-4 text-bone font-semibold">ویزای کار از راه دور (Virtual Work)</td>
              <td class="py-4 px-4 text-gold-400 font-bold stat-number">۱ سال</td>
              <td class="py-4 px-4 text-ash stat-number">بدون نیاز به خرید ملک (درآمد ۳۵۰۰ دلار)</td>
              <td class="py-4 px-4 text-amber-400">وابستگان درجه یک</td>
              <td class="py-4 px-4 text-emerald-400">کار از راه دور برای شرکت خارجی</td>
              <td class="py-4 px-4"><a href="#apply" class="text-gold-400 hover:underline text-xs">اطلاعات بیشتر ←</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-slate mt-4 max-w-3xl">بر اساس جدیدترین بخشنامه‌های رسمی اداره اقامت و امور اتباع خارجی دبی (GDRFA) و دپارتمان اراضی (DLD).</p>
    </div>
  </section>

  <!-- 4. GOLDEN VISA DEEP-DIVE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="جزئیات گلدن ویزای ۱۰ ساله">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="inline-flex items-center gap-2 mb-6"><span class="px-3 py-1 bg-gold-400 text-ink-900 rounded-xs text-[10px] font-bold uppercase tracking-wider">محبوب‌ترین مسیر</span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">گلدن ویزای امارات</span></div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">مسیر اقامت ۱۰ ساله طلایی با سند ملک</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">گلدن ویزا بالاترین سطح اعتبار اقامتی را برای سرمایه‌گذاران خارجی در امارات به همراه دارد. با تجمیع ارزش یک یا چند ملک به میزان ۲ میلیون درهم (اعم از آماده یا پروژه‌های آف‌پلان معتبر با شرایط قانونی)، سرمایه‌گذار از اقامت خودکار ده‌ساله با امکان تمدید نامحدود برخوردار خواهد شد.</p>
          <div class="grid sm:grid-cols-2 gap-4 mb-8">
            <div class="p-4 border border-gold-line rounded-xs bg-gold-soft">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">مدت زمان اعتبار</div>
              <div class="text-2xl font-bold text-bone stat-number">۱۰ سال</div>
              <div class="text-xs text-slate mt-1">تجدید خودکار در صورت حفظ ملک</div>
            </div>
            <div class="p-4 border border-white-line rounded-xs">
              <div class="text-xs uppercase tracking-wider text-slate font-semibold mb-1">حداقل سرمایه</div>
              <div class="text-2xl font-bold text-bone stat-number">۲ میلیون درهم</div>
              <div class="text-xs text-slate mt-1">معادل ۵۴۵ هزار دلار</div>
            </div>
            <div class="p-4 border border-white-line rounded-xs">
              <div class="text-xs uppercase tracking-wider text-slate font-semibold mb-1">مدت زمان صدور</div>
              <div class="text-2xl font-bold text-bone stat-number">۲ تا ۳ هفته</div>
              <div class="text-xs text-slate mt-1">پس از صدور سند رسمی</div>
            </div>
            <div class="p-4 border border-white-line rounded-xs">
              <div class="text-xs uppercase tracking-wider text-slate font-semibold mb-1">شرط حضور فیزیکی</div>
              <div class="text-2xl font-bold text-bone stat-number">بدون شرط</div>
              <div class="text-xs text-slate mt-1">بدون ابطال با غیبت بیش از ۶ ماه</div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#apply" class="inline-flex items-center justify-center px-6 py-3 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-wider rounded-xs hover:bg-gold-300 transition-all" aria-label="درخواست گلدن ویزا">درخواست اخذ گلدن ویزا</a>
            <a href="#eligibility" class="inline-flex items-center justify-center px-6 py-3 border border-gold-line text-bone text-sm font-bold uppercase tracking-wider rounded-xs hover:bg-gold-soft transition-all" aria-label="بررسی آنلاین شرایط">بررسی آنلاین شرایط</a>
          </div>
        </div>
        <div class="space-y-4">
          <div class="bg-ink-900 border border-white-line rounded-sm p-6">
            <div class="flex items-center gap-4 mb-4"><div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><span class="text-lg font-bold text-gold-400 stat-number">۱</span></div><h3 class="text-lg font-bold text-bone">انتخاب و خرید ملک واجد شرایط (۲M+ درهم)</h3></div>
            <p class="text-sm text-ash leading-relaxed">ملک آماده یا پیش‌فروش با ارزش کل حداقل ۲ میلیون درهم خریداری و اسناد پرداخت تسویه می‌شود.</p>
          </div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6">
            <div class="flex items-center gap-4 mb-4"><div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><span class="text-lg font-bold text-gold-400 stat-number">۲</span></div><h3 class="text-lg font-bold text-bone">صدور سند قطعی از دپارتمان اراضی (DLD)</h3></div>
            <p class="text-sm text-ash leading-relaxed">سند مالکیت رسمی (Title Deed) با استعلام برخط و درج در سامانه‌های دولتی دبی صادر می‌گردد.</p>
          </div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6">
            <div class="flex items-center gap-4 mb-4"><div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><span class="text-lg font-bold text-gold-400 stat-number">۳</span></div><h3 class="text-lg font-bold text-bone">ثبت پرونده و معاینات پزشکی</h3></div>
            <p class="text-sm text-ash leading-relaxed">تیم حقوقی زرین پرونده شما را در GDRFA ثبت کرده و نوبت آزمایش مدیکال و بیومتریک را هماهنگ می‌کند.</p>
          </div>
          <div class="bg-ink-900 border border-gold-line rounded-sm p-6 bg-gold-soft">
            <div class="flex items-center gap-4 mb-4"><div class="w-10 h-10 border border-gold-border rounded-xs flex items-center justify-center bg-gold-soft"><span class="text-lg font-bold text-gold-400 stat-number">۴</span></div><h3 class="text-lg font-bold text-bone">دریافت کارت اقامت ۱۰ ساله (Emirates ID)</h3></div>
            <p class="text-sm text-ash leading-relaxed">کارت هویت امارات صادر و ویزای طلایی برای شما و خانواده ثبت نهایی می‌گردد.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. ELIGIBILITY CHECKER -->
  <section id="eligibility" class="bg-ink-900 py-24 md:py-32" aria-label="ارزیابی آنلاین ویزا">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">ابزار سنجش صلاحیت</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">کدام ویزا با اهداف شما منطبق است؟</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">با پاسخ به چند پرسش ساده درباره بودجه و قصد سرمایه‌گذاری، بهترین گزینه اقامتی را بیابید و از مشاوره رایگان کارشناسان زرین بهره‌مند شوید.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-4"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><span class="text-sm text-bone">بدون هزینه و بدون تعهد اولیه</span></div>
            <div class="flex items-center gap-4"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><span class="text-sm text-bone">بررسی فوری و راهنمایی تخصصی</span></div>
            <div class="flex items-center gap-4"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><span class="text-sm text-bone">محرمانه و تحت ضوابط امنیتی زرین</span></div>
          </div>
        </div>
        <div class="glass border border-gold-line rounded-sm p-8">
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-6 pb-6 border-b border-white-line">ارزیابی سریع شرایط اقامت</div>
          <form class="space-y-5" action="/fa/consultation" method="POST" aria-label="فرم ارزیابی اقامت">
            <div>
              <label for="name" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-2">نام و نام خانوادگی *</label>
              <input id="name" name="name" type="text" required class="w-full bg-ink-900 border border-white-line rounded-xs px-4 py-3 text-bone text-sm focus:border-gold-400 focus:outline-none transition-colors" placeholder="نام شما" aria-required="true">
            </div>
            <div>
              <label for="phone" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-2">شماره تماس / واتس‌اپ *</label>
              <input id="phone" name="phone" type="tel" dir="ltr" required class="w-full bg-ink-900 border border-white-line rounded-xs px-4 py-3 text-bone text-sm focus:border-gold-400 focus:outline-none transition-colors" placeholder="+971 50 000 0000" aria-required="true">
            </div>
            <div>
              <label for="budget-visa" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-2">بودجه مدنظر برای خرید ملک *</label>
              <select id="budget-visa" name="budget" required class="w-full bg-ink-900 border border-white-line rounded-xs px-4 py-3 text-bone text-sm focus:border-gold-400 focus:outline-none transition-colors" aria-required="true">
                <option value="">انتخاب بازه بودجه</option>
                <option value="under-750K">کمتر از ۷۵۰ هزار درهم (ویزای کار یا سرمایه‌گذاری خارج از ملک)</option>
                <option value="750K-2M">۷۵۰ هزار تا ۲ میلیون درهم (ویزای ۲ ساله سرمایه‌گذار)</option>
                <option value="2M-5M">۲ تا ۵ میلیون درهم (واجد شرایط گلدن ویزای ۱۰ ساله)</option>
                <option value="5M+">بیش از ۵ میلیون درهم (گلدن ویزای ویژه و پرایوت آفیس)</option>
              </select>
            </div>
            <div>
              <label for="goal" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-2">هدف اصلی شما</label>
              <select id="goal" name="goal" class="w-full bg-ink-900 border border-white-line rounded-xs px-4 py-3 text-bone text-sm focus:border-gold-400 focus:outline-none transition-colors">
                <option value="residency">اقامت دائم و خانوادگی</option>
                <option value="investment">سرمایه‌گذاری با بازدهی دلاری و اخذ اقامت</option>
                <option value="banking">افتتاح حساب بانکی و معافیت مالیاتی</option>
                <option value="retirement">بازنشستگی در دبی</option>
              </select>
            </div>
            <button type="submit" class="w-full py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="ثبت و دریافت مشاوره">بررسی و درخواست مشاوره</button>
            <p class="text-xs text-slate text-center">مشاوره اولیه کاملاً رایگان و محرمانه انجام می‌شود.</p>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="پرسش‌های متداول ویزا">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پرسش‌های پرتکرار</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">سوالات متداول اقامت و گلدن ویزای دبی</h2>
      </div>
      <div class="space-y-px bg-white-line" itemscope itemtype="https://schema.org/FAQPage">
        <details class="bg-ink-900 group" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">گلدن ویزای ۱۰ ساله دبی چیست؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"><p class="text-ash leading-relaxed" itemprop="text">گلدن ویزای امارات، اقامت بلندمدت ۱۰ ساله قابل تمدید است که به خریداران ملکی با ارزش حداقل ۲ میلیون درهم تعلق می‌گیرد. این ویزا شامل سرمایه‌گذار، همسر و تمامی فرزندان می‌شود.</p></div></details>
        <details class="bg-ink-900 group" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">حداقل سرمایه‌گذاری مورد نیاز برای دریافت گلدن ویزا چقدر است؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"><p class="text-ash leading-relaxed" itemprop="text">حداقل ارزش ملک برای گلدن ویزا ۲ میلیون درهم (معادل تقریبی ۵۴۵ هزار دلار آمریکا) است. ملک می‌تواند یک واحد مستقل یا مجموعه‌ای از املاک باشد.</p></div></details>
        <details class="bg-ink-900 group" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">آیا برای حفظ گلدن ویزا شرط حداقل روز اقامت در سال وجود دارد؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"><p class="text-ash leading-relaxed" itemprop="text">خیر. بر خلاف ویزاهای معمولی که هر ۶ ماه یکبار ورود به خاک امارات الزامی است، دارندگان گلدن ویزا هیچ محدودیت زمانی در خروج از امارات ندارند و اقامت آنها باطل نمی‌شود.</p></div></details>
        <details class="bg-ink-900 group" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors" itemprop="name">فرآیند اداری اخذ گلدن ویزا چقدر زمان می‌برد؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"><p class="text-ash leading-relaxed" itemprop="text">پس از انتقال رسمی سند مالکیت در اداره اراضی دبی (DLD)، کل پروسه اداری، معاینات پزشکی و صدور کارت ملی امارات (Emirates ID) توسط تیم زرین ظرف ۲ تا ۳ هفته کاری انجام می‌شود.</p></div></details>
      </div>
    </div>
  </section>

  <!-- 7. CTA BANNER -->
  <section id="apply" class="bg-ink-950 py-24 md:py-32 relative overflow-hidden" aria-label="رزرو مشاوره اقامتی">
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20 text-center">
      <div class="max-w-3xl mx-auto">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">آغاز مسیر اقامت امارات</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">اقامت ۱۰ ساله خود و خانواده‌تان را محقق کنید</h2>
        <p class="text-lg text-ash leading-relaxed mb-8">مشاوران ارشد زرین بر اساس دارایی و بودجه شما، بهترین پروژه‌های سودآور واجد شرایط گلدن ویزا را گزینش نموده و در تمامی مراحل اداری و قانونی در کنار شما هستند.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/fa/consultation" class="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="رزرو مشاوره حضوری یا ویدیویی">رزرو مشاوره تخصصی</a>
          <a href="https://wa.me/971586901231" class="inline-flex items-center justify-center px-8 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft transition-all duration-300" aria-label="گفتگو در واتس‌اپ">ارتباط مستقیم در واتس‌اپ</a>
        </div>
      </div>
    </div>
  </section>

  </main>

  <!-- FOOTER -->
  <footer class="bg-ink-950 border-t border-white-line pt-20 pb-8" role="contentinfo">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div class="col-span-2 lg:col-span-1">
          <a href="/fa" class="flex items-center gap-2 mb-4" aria-label="صفحه اصلی زرین">
            <span class="font-sans font-extrabold text-2xl tracking-tight text-bone">ZARIN</span>
          </a>
          <p class="text-sm text-slate leading-relaxed mb-6">مشاوره تخصصی ویزا و سرمایه‌گذاری ملکی در دبی تحت نظارت مستقیم RERA.</p>
        </div>
        <nav aria-label="انواع ویزا">
          <h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">انواع ویزای دبی</h2>
          <ul class="space-y-2">
            <li><a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">گلدن ویزای ۱۰ ساله</a></li>
            <li><a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">ویزای سرمایه‌گذار ۲ ساله</a></li>
            <li><a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">ویزای بازنشستگی</a></li>
            <li><a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">ویزای دورکاری</a></li>
          </ul>
        </nav>
        <nav aria-label="املاک و پروژه‌ها">
          <h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">املاک دبی</h2>
          <ul class="space-y-2">
            <li><a href="/fa/properties" class="text-sm text-ash hover:text-gold-400 transition-colors">املاک آماده تحویل</a></li>
            <li><a href="/fa/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">پروژه‌های پیش‌فروش</a></li>
            <li><a href="/fa/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">مناطق سرمایه‌گذاری</a></li>
            <li><a href="/fa/private-office" class="text-sm text-ash hover:text-gold-400 transition-colors">پرایوت آفیس</a></li>
          </ul>
        </nav>
        <nav aria-label="خدمات">
          <h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">خدمات حقوقی</h2>
          <ul class="space-y-2">
            <li><a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">مشاوره خرید ملک</a></li>
            <li><a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">انتقال سند رسمی</a></li>
            <li><a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">وام مسکن دبی</a></li>
            <li><a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">کارشناسی و ارزیابی</a></li>
          </ul>
        </nav>
        <nav aria-label="تحلیل و ارتباط">
          <h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">ارتباط و اصالت</h2>
          <ul class="space-y-2">
            <li><a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">تاریخچه زرین (از ۲۰۰۵)</a></li>
            <li><a href="/fa/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">گزارش‌های فصلی بازار</a></li>
            <li><a href="/fa/consultation" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">رزرو وقت مشاوره</a></li>
          </ul>
        </nav>
      </div>

      <div class="grid md:grid-cols-3 gap-6 py-8 border-t border-white-line">
        <address class="not-italic">
          <div class="text-xs uppercase tracking-wider text-slate mb-2">دفتر دبی</div>
          <p class="text-sm text-ash">خیابان شیخ زاید<br>داون‌تاون دبی، امارات متحده عربی</p>
        </address>
        <div>
          <div class="text-xs uppercase tracking-wider text-slate mb-2">تلفن مستقیم</div>
          <a href="tel:+971586901231" class="text-sm text-bone hover:text-gold-400 transition-colors"><span dir="ltr" class="tabular-nums">+971 58 690 1231</span></a>
        </div>
        <div>
          <div class="text-xs uppercase tracking-wider text-slate mb-2">پست الکترونیکی</div>
          <a href="mailto:advisory@zarinrealestate.com" class="text-sm text-bone hover:text-gold-400 transition-colors"><span dir="ltr">advisory@zarinrealestate.com</span></a>
        </div>
      </div>

      <div class="pt-8 border-t border-white-line flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate">
        <div>&copy; ۲۰۲۶ املاک زرین. کلیه حقوق محفوظ است. دارنده پروانه رسمی کارگزاری از سازمان نظارت بر املاک دبی (RERA).</div>
        <div class="flex items-center gap-4">
          <a href="/fa" class="hover:text-gold-400 transition-colors">قوانین و مقررات</a>
          <a href="/fa" class="hover:text-gold-400 transition-colors">حریم خصوصی</a>
          <a href="/fa" class="hover:text-gold-400 transition-colors">نقشه سایت</a>
        </div>
      </div>
    </div>
  </footer>

  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>
`;

// Write to fa/visas.html
fs.writeFileSync(path.join(rootDir, 'fa', 'visas.html'), htmlContent, 'utf8');

// Write to fa/visas/index.html
fs.mkdirSync(path.join(rootDir, 'fa', 'visas'), { recursive: true });
fs.writeFileSync(path.join(rootDir, 'fa', 'visas', 'index.html'), htmlContent, 'utf8');

console.log('Successfully created fa/visas.html and fa/visas/index.html');
