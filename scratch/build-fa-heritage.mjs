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

  <title>داستان ما و اصالت زرین | املاک زرین دبی | تجربه از سال ۲۰۰۵</title>
  <meta name="description" content="املاک زرین دبی — بنیان‌گذاری‌شده توسط سرمایه‌گذاری که از سال ۲۰۰۵ وارد بازار املاک دبی شد. دو دهه تجربه زیسته و عملی، در خدمت سرمایه‌گذاران و خریداران بین‌المللی ملک در دبی.">
  <meta name="keywords" content="تاریخچه املاک زرین, سابقه املاک دبی از ۲۰۰۵, بنیانگذار زرین, کارگزاری دارای مجوز RERA دبی, افتخارات کارگزاری زرین">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/fa/heritage">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/heritage">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/heritage">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/heritage">

  <meta property="og:type" content="website">
  <meta property="og:title" content="داستان ما و اصالت زرین | ZARIN Real Estate Dubai">
  <meta property="og:description" content="دو دهه تجربه مستقیم در بازار املاک دبی. بنیان‌گذاری‌شده توسط سرمایه‌گذاری که در سال ۲۰۰۵ وارد بازار شد.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="املاک زرین — داستان ما و پیشینه دو دهه‌ای">
  <meta property="og:url" content="https://zarinrealestate.com/fa/heritage">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="داستان ما و اصالت زرین | ZARIN Real Estate">
  <meta name="twitter:description" content="دو دهه تجربه سرمایه‌گذاری در املاک دبی از سال ۲۰۰۵.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80">

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
    .rtl-flip{transform:scaleX(-1);display:inline-block}
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"صفحه اصلی","item":"https://zarinrealestate.com/fa"},
    {"@type":"ListItem","position":2,"name":"اصالت زرین","item":"https://zarinrealestate.com/fa/heritage"}
  ]}
  </script>

  <!-- JSON-LD: AboutPage + Organization -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"AboutPage","@id":"https://zarinrealestate.com/fa/heritage#aboutpage",
    "name":"داستان ما | املاک زرین دبی","url":"https://zarinrealestate.com/fa/heritage",
    "description":"املاک زرین — بنیان‌گذاری‌شده توسط سرمایه‌گذاری که از سال ۲۰۰۵ وارد بازار املاک دبی شد. دو دهه تجربه عملی، در خدمت خریداران بین‌المللی ملک در دبی.",
    "isPartOf":{"@id":"https://zarinrealestate.com/fa#website"},
    "about":{"@id":"https://zarinrealestate.com/#organization"},
    "mainEntity":{"@id":"https://zarinrealestate.com/#organization"}
  }
  </script>

  <!-- JSON-LD: Organization -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Organization","@id":"https://zarinrealestate.com/#organization",
    "name":"ZARIN Real Estate","url":"https://zarinrealestate.com","foundingDate":"2023",
    "foundingLocation":{"@type":"Place","name":"دبی، امارات متحده عربی"},
    "description":"مشاوره تخصصی و سرمایه‌گذاری املاک دبی با دو دهه تجربه در بازار از سال ۲۰۰۵.",
    "address":{"@type":"PostalAddress","streetAddress":"Sheikh Zayed Road","addressLocality":"Dubai","addressRegion":"Dubai","postalCode":"00000","addressCountry":"AE"},
    "telephone":"+971586901231","email":"advisory@zarinrealestate.com",
    "hasCredential":"RERA Licensed Real Estate Broker",
    "founder":{"@type":"Person","name":"بنیان‌گذار زرین","jobTitle":"Founder & Principal","hasCredential":"RERA Licensed Broker (UAE)","knowsAbout":["سرمایه‌گذاری املاک دبی","ممیزی پروژه‌های پیش‌فروش","تطابق با قوانین RERA","مشاوره بین‌المللی املاک"]}
  }
  </script>

  <!-- JSON-LD: FAQPage (8 questions in Persian) -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/fa/heritage#faq","mainEntity":[
    {"@type":"Question","name":"املاک زرین در چه سالی تاسیس شد؟","acceptedAnswer":{"@type":"Answer","text":"املاک زرین به عنوان مجموعه کارگزاری رسمی در سال ۲۰۲۳ تاسیس شد. اما بنیان‌گذار زرین از سال ۲۰۰۵ در بازار املاک دبی فعال بوده و در دو پروژه بزرگ در سطح ساخت‌وساز و توسعه مشارکت داشته است."}},
    {"@type":"Question","name":"پیشینه بنیان‌گذار زرین در املاک دبی چیست؟","acceptedAnswer":{"@type":"Answer","text":"بنیان‌گذار زرین در سال ۲۰۰۵ به عنوان سرمایه‌گذار وارد بازار املاک دبی شد و در دو پروژه ساختمانی در سطح کلان پروژه سرمایه‌گذاری کرد. این تجربه عملی، شالوده مشاوره‌های تخصصی زرین را تشکیل می‌دهد."}},
    {"@type":"Question","name":"آیا املاک زرین دارای مجوز رسمی RERA است؟","acceptedAnswer":{"@type":"Answer","text":"بله. املاک زرین یک کارگزاری رسمی دارای مجوز RERA تحت نظارت دپارتمان اراضی دبی (DLD) است و اعتبار پروانه آن در وب‌سایت رسمی DLD و سامانه Dubai REST قابل استعلام است."}},
    {"@type":"Question","name":"مشاوران زرین به چه زبان‌هایی تسلط دارند؟","acceptedAnswer":{"@type":"Answer","text":"تیم زرین به زبان‌های فارسی، انگلیسی و عربی تسلط کامل دارد و دارای دسک‌های اختصاصی برای خریداران از ایران، بریتانیا، چین، هند و کشورهای حوزه خلیج فارس است."}},
    {"@type":"Question","name":"تفاوت زرین با سایر آژانس‌های املاک دبی چیست؟","acceptedAnswer":{"@type":"Answer","text":"زرین توسط یک سرمایه‌گذار واقعی پایه‌گذاری شده است، نه دلالان کمیسیون‌محور. مشاوره ما برآمده از دو دهه تجربه میدانی و سرمایه شخصی در معرض ریسک است."}},
    {"@type":"Question","name":"آیا امکان مشاهده نظرات خریداران قبلی وجود دارد؟","acceptedAnswer":{"@type":"Answer","text":"بله. دیدگاه‌ها و تجارب خریداران و سرمایه‌گذاران بین‌المللی از ایران، انگلستان، هند و سایر کشورها در بخش نظرات مشتریان ثبت و در دسترس است."}},
    {"@type":"Question","name":"آیا زرین موفق به کسب افتخارات و جوایز شده است؟","acceptedAnswer":{"@type":"Answer","text":"بله. زرین توسط Property Finder و جوایز Gulf Real Estate مورد تقدیر قرار گرفته و در نشریاتی چون Forbes Middle East و Arabian Business بازتاب یافته است."}},
    {"@type":"Question","name":"چگونه می‌توان مجوز RERA زرین را راستی‌آزمایی کرد؟","acceptedAnswer":{"@type":"Answer","text":"شما می‌توانید از طریق وب‌سایت دپارتمان اراضی دبی (Dubai Land Department) یا اپلیکیشن Dubai REST شماره پروانه رسمی کارگزاری ما را استعلام نمایید."}}
  ]}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">پرش به محتوای اصلی</a>

  <!-- HEADER -->
  <header id="site-header" class="fixed top-0 left-0 w-full z-[900] transition-all duration-500" role="banner" style="padding:1.25rem 0;border-bottom:1px solid transparent;">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex items-center justify-between gap-4">
        <a href="/fa" class="flex items-center gap-2 group flex-shrink-0" aria-label="املاک زرین — صفحه اصلی">
          <span class="font-sans font-extrabold text-2xl tracking-tight text-bone group-hover:text-gold-400 transition-colors duration-300">ZARIN</span>
          <span class="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold border-r border-gold-line pr-2">Real Estate</span>
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
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">پروژه‌های در حال ساخت</div>
              <a href="/fa/off-plan" class="text-sm text-bone hover:text-gold-400 transition-colors">همه پروژه‌های آف‌پلان</a>
              <a href="/fa/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">پروژه‌های تازه عرضه‌شده</a>
              <a href="/fa/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">تفکیک بر اساس سازنده</a>
              <a href="/fa/off-plan" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">راهنمای سرمایه‌گذاری ←</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/fa/areas" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">مناطق دبی<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">مناطق برگزیده و شاخص</div>
              <a href="/fa/areas" class="text-sm text-bone hover:text-gold-400 transition-colors">پالم جمیرا</a>
              <a href="/fa/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">داون‌تاون دبی</a>
              <a href="/fa/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">دبی هیلز استیت</a>
              <a href="/fa/areas" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">همه مناطق دبی ←</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/fa/private-office" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">پرایوت آفیس<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-gold-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">میز معاملات اختصاصی</div>
              <a href="/fa/private-office" class="text-sm text-bone hover:text-gold-400 transition-colors">معرفی و شرایط</a>
              <a href="/fa/private-office" class="text-sm text-ash hover:text-gold-400 transition-colors">املاک خارج از بازار (Off-Market)</a>
              <a href="/fa/private-office" class="text-sm text-ash hover:text-gold-400 transition-colors">تسویه چندارزی و کریپتو</a>
              <a href="/fa/private-office" class="text-sm text-ash hover:text-gold-400 transition-colors">کانسیرژ سبک زندگی</a>
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
            <a href="/fa/visas" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">اقامت و ویزا<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <a href="/fa/visas" class="text-sm text-bone hover:text-gold-400 transition-colors">گلدن ویزای ۱۰ ساله</a>
              <a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">ویزای سرمایه‌گذاری ۲ ساله</a>
              <a href="/fa/visas" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">ارزیابی شرایط اقامت ←</a>
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
            <a href="/fa/heritage" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center gap-1" aria-current="page" aria-haspopup="true" aria-expanded="false">اصالت زرین<svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-right">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">درباره زرین</div>
              <a href="/fa/heritage" class="text-sm text-bone hover:text-gold-400 transition-colors font-semibold">داستان ما (از ۲۰۰۵)</a>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">نامه بنیان‌گذار</a>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">تیم و مشاوران ارشد</a>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">پروفایل کارشناسان</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">اعتبار و دستاوردها</div>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">دیدگاه مشتریان</a>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">جوایز و افتخارات</a>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">بازتاب رسانه‌ای</a>
              <a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">مطالعات موردی</a>
            </div>
          </div>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <div class="hidden sm:flex items-center h-8 bg-ink-800 border border-white-line rounded-xs p-0.5" role="group" aria-label="تغییر زبان">
            <button type="button" class="lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all cursor-pointer" data-lang="en" aria-label="Switch to English" aria-pressed="false">EN</button>
            <button type="button" class="lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all active is-active cursor-pointer" data-lang="fa" aria-label="تغییر زبان به فارسی" aria-pressed="true">فارسی</button>
          </div>

          <a href="tel:+971586901231" class="hidden md:flex items-center gap-2 text-xs font-semibold text-ash hover:text-gold-400 transition-colors" aria-label="تماس با ما">
            <svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span dir="ltr" class="tabular-nums">+971 58 690 1231</span>
          </a>

          <a href="/fa/consultation" class="hidden md:inline-flex items-center px-5 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-[0.08em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="رزرو مشاوره">رزرو مشاوره</a>

          <!-- Mobile Language Switcher -->
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
              <svg class="mobile-lang-chevron w-3 h-3 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mobile-lang-menu" class="mobile-lang-menu hidden absolute top-full left-0 mt-2 w-36 glass border border-gold-line rounded-xs shadow-monolith p-1 text-xs z-[1000]" role="menu" aria-labelledby="mobile-lang-trigger">
              <button type="button" class="lang-btn mobile-lang-item w-full flex items-center justify-between px-3 py-2 rounded-xs text-ash hover:text-gold-400 hover:bg-white-soft transition-all" data-lang="en" role="menuitem">
                <span>English (EN)</span>
                <span class="mobile-lang-check text-gold-400 font-bold hidden">✓</span>
              </button>
              <button type="button" class="lang-btn mobile-lang-item w-full flex items-center justify-between px-3 py-2 rounded-xs text-gold-400 bg-gold-soft font-bold is-active" data-lang="fa" role="menuitem">
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
  <div id="mobile-menu" class="mobile-menu fixed top-0 right-0 w-full max-w-sm h-full bg-ink-900 border-l border-white-line z-[1000] overflow-y-auto lg:hidden" role="dialog" aria-modal="true" aria-label="منوی موبایل">
    <div class="p-6">
      <div class="flex justify-between items-center mb-8">
        <span class="font-sans font-extrabold text-xl text-bone">ZARIN</span>
        <button id="mobile-menu-close" class="text-ash hover:text-gold-400 transition-colors" aria-label="بستن منو">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="flex flex-col gap-1" aria-label="ناوبری اصلی موبایل">
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/fa/properties" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">املاک دبی</a>
          </div>
        </div>
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/fa/off-plan" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">پیش‌فروش (آف‌پلان)</a>
          </div>
        </div>
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/fa/areas" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">مناطق دبی</a>
          </div>
        </div>
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/fa/private-office" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">پرایوت آفیس</a>
          </div>
        </div>
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/fa/services" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">خدمات ما</a>
          </div>
        </div>
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/fa/visas" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">اقامت و ویزا</a>
          </div>
        </div>
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/fa/insights" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">تحلیل بازار</a>
          </div>
        </div>
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/fa/heritage" class="flex-1 py-3 px-4 text-sm font-semibold text-gold-400 hover:text-gold-300">اصالت زرین</a>
          </div>
        </div>

        <div class="px-4 py-3 border-t border-white-line my-2">
          <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold mb-2">انتخاب زبان / Language</div>
          <div class="flex items-center gap-2" role="group" aria-label="انتخاب زبان">
            <button type="button" class="mobile-lang-btn lang-btn flex-1 py-1.5 px-2 text-xs font-bold rounded-xs border border-white-line text-ash hover:text-gold-400 hover:border-gold-line transition-all text-center cursor-pointer" data-lang="en">English (EN)</button>
            <button type="button" class="mobile-lang-btn lang-btn flex-1 py-1.5 px-2 text-xs font-bold rounded-xs border border-gold-line bg-gold-400 text-ink-900 transition-all text-center active cursor-pointer" data-lang="fa">فارسی (FA)</button>
          </div>
        </div>
        <div class="h-px bg-white-line my-2"></div>
        <a href="/fa/consultation" class="py-3 px-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-wide text-center rounded-xs hover:bg-gold-300 transition-all">رزرو مشاوره اختصاصی</a>
        <a href="tel:+971586901231" class="py-3 px-4 text-sm text-ash hover:text-gold-400 text-center"><span dir="ltr" class="tabular-nums">+971 58 690 1231</span></a>
        <a href="https://wa.me/971586901231" class="py-3 px-4 text-sm text-tether hover:text-tether/80 text-center">ارتباط مستقیم در واتس‌اپ</a>
      </nav>
    </div>
  </div>

  <!-- Breadcrumb -->
  <div class="pt-24 bg-ink-900 border-b border-white-line">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-4">
      <nav aria-label="مسیر راهنما" class="text-xs">
        <ol class="flex items-center gap-2 text-slate">
          <li><a href="/fa" class="hover:text-gold-400 transition-colors">صفحه اصلی</a></li>
          <li aria-hidden="true">/</li>
          <li class="text-bone font-semibold" aria-current="page">اصالت و پیشینه زرین</li>
        </ol>
      </nav>
    </div>
  </div>

  <main id="main">

  <!-- 1. HERO -->
  <section class="relative py-20 md:py-32 overflow-hidden bg-ink-900" aria-label="بخش معرفی اصالت زرین">
    <div class="absolute inset-0 opacity-15"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/90 to-ink-900"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-4xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">پیشینه و اصالت زرین</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-7xl lg:text-[4.5rem] leading-[1.1] tracking-tight text-bone mb-6">دو دهه تجربه زیسته<br>در بازار املاک دبی<br><span class="text-gold-gradient">از سال ۲۰۰۵ تاکنون</span></h1>
        <p class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">بنیان‌گذار زرین در سال ۲۰۰۵ به عنوان یک سرمایه‌گذار وارد بازار املاک دبی شد. دو دهه بعد، این تجربه میدانی و واقعی شالوده زرین را تشکیل می‌دهد — یک مجموعه مشاوره‌ای که توسط سرمایه‌گذار و برای سرمایه‌گذاران خلق شده است. نه بازاریابانی که صرفاً به دنبال پورسانت معاملاتند، بلکه همراهانی امین که سرمایه شخصی خود را در خاک دبی به گردش درآورده‌اند.</p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/fa/consultation" class="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="دریافت مشاوره و آشنایی با تیم">گفتگو با مشاوران ارشد<svg class="w-4 h-4 mr-2 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
          <a href="#founder-story" class="inline-flex items-center justify-center px-8 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="مطالعه داستان بنیان‌گذار">داستان شکل‌گیری زرین</a>
        </div>
        <div class="flex flex-wrap items-center gap-6 md:gap-10 mt-16 pt-8 border-t border-white-line">
          <div><div class="text-2xl md:text-3xl font-bold text-gold-400 stat-number">۲۰۰۵</div><div class="text-xs text-slate uppercase tracking-wider mt-1">ورود به بازار املاک دبی</div></div>
          <div><div class="text-2xl md:text-3xl font-bold text-gold-400 stat-number">۲۰۲۳</div><div class="text-xs text-slate uppercase tracking-wider mt-1">تاسیس رسمی برند زرین</div></div>
          <div><div class="text-2xl md:text-3xl font-bold text-gold-400 stat-number">۲</div><div class="text-xs text-slate uppercase tracking-wider mt-1">پروژه کلان ساخت‌وساز</div></div>
          <div><div class="text-2xl md:text-3xl font-bold text-gold-400 stat-number">۳</div><div class="text-xs text-slate uppercase tracking-wider mt-1">زبان رسمی: فارسی · انگلیسی · عربی</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. TL;DR -->
  <section class="bg-ink-850 py-16 md:py-20" aria-label="خلاصه ماهیت زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-4xl mx-auto border-r-2 border-gold-400 pr-8">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">ما کیستیم و چه می‌کنیم</div>
        <p id="tldr-summary" class="text-xl md:text-2xl leading-relaxed text-bone font-light">املاک زرین در سال ۲۰۲۳ توسط سرمایه‌گذاری تاسیس شد که از سال ۲۰۰۵ در بازار املاک دبی حضوری فعال داشته است. او شخصاً در دو پروژه ساختمانی در سطح توسعه کلان پروژه (نه صرفاً خرید واحدهای تکی) سرمایه‌گذاری کرده است. این تجربه عملی و دست‌اول، ارزشی است که زرین به هر موکل ارائه می‌دهد: مشاوره‌ای برآمده از تجربه کسی که سرمایه واقعی خود را در املاک دبی به گردش درآورده است.</p>
      </div>
    </div>
  </section>

  <!-- 3. FOUNDER'S STORY -->
  <section id="founder-story" class="bg-ink-900 py-24 md:py-32" aria-label="داستان بنیان‌گذار">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">مسیر طی‌شده بنیان‌گذار</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">از سرمایه‌گذار تا مشاور امین</h2>
          <div class="space-y-6 text-ash leading-relaxed">
            <p>در سال ۲۰۰۵، بنیان‌گذار ما نه به عنوان یک دلال یا کارگزار واسطه، بلکه در کسوت یک سرمایه‌گذار مستقل وارد بازار املاک دبی شد. او تحولی را در دبی مشاهده کرد که پیش از آن در کمتر نقطه‌ای از جهان رخ داده بود: شهری که با سرعتی بی‌سابقه پایه‌ریزی می‌شد و فرصت‌هایی که اغلب سرمایه‌گذاران خارجی توان تحلیل و درک ابعاد آن را نداشتند.</p>
            <p>او صرفاً خریدار آپارتمان نبود، بلکه در دو پروژه عمرانی در <strong class="text-bone">سطح کلان توسعه</strong> مشارکت کرد — سرمایه‌گذاری در شالوده و ساخت پروژه، نه صرفاً خرید یک واحد مسکونی. این جایگاه نگرشی منحصربه‌فرد به او بخشید: درک عمیق از شیوه تفکر سازندگان، سازوکارهای مالی پروژه‌ها و شناسایی نقاط واقعی سودآوری و ریسک‌های پنهان.</p>
            <p>طی دو دهه، او بحران مالی ۲۰۰۸، قانون گسترش مالکیت آزاد در ۲۰۱۴، پاندمی ۲۰۲۰ و جهش تاریخی ۲۰۲۴ تا ۲۰۲۶ را تجربه کرد. هر چرخه اقتصادی آموزه‌هایی داشت که در هیچ کتاب و جزوه‌ای یافت نمی‌شود — درس‌هایی که تنها با به خطر انداختن سرمایه شخصی آموخته می‌شوند.</p>
            <p>در سال ۲۰۲۳، او املاک زرین را تاسیس کرد تا این تجربه زیسته را با خریداران فهیم به اشتراک بگذارد؛ به‌ویژه با سرمایه‌گذاران ایرانی که به دنبال ورود امن به بازار دبی هستند و نیازمند راهنمایی‌اند که هر دو بازار را بشناسد و به زبان خودشان سخن بگوید.</p>
          </div>
          <a href="/fa/consultation" class="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="درخواست جلسه مشاوره با بنیان‌گذار">درخواست گفتگوی اختصاصی<svg class="w-4 h-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="glass border border-gold-line rounded-sm p-8 md:p-12">
          <div class="text-center">
            <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-6 flex items-center justify-center text-ink-900 font-extrabold text-4xl">Z</div>
            <div class="text-2xl font-bold text-bone mb-2">بنیان‌گذار املاک زرین</div>
            <div class="text-sm text-gold-400 uppercase tracking-wider mb-6">Founder & Principal</div>
            <div class="text-right space-y-4 pt-6 border-t border-white-line">
              <div class="flex items-center gap-3"><svg class="w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8"/></svg><span class="text-sm text-ash">حضور فعال و مستمر در املاک دبی از سال ۲۰۰۵</span></div>
              <div class="flex items-center gap-3"><svg class="w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg><span class="text-sm text-ash">۲ سرمایه‌گذاری کلان در سطح توسعه و ساخت پروژه</span></div>
              <div class="flex items-center gap-3"><svg class="w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg><span class="text-sm text-ash">کارگزار رسمی دارای مجوز RERA از دولت دبی</span></div>
              <div class="flex items-center gap-3"><svg class="w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg><span class="text-sm text-ash">ارائه خدمات مسلط به زبان‌های فارسی، انگلیسی و عربی</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. TIMELINE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="گاه‌شمار اصالت زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">مسیر دو دهه‌ای ما</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">گاه‌شمار تحول و تجربه</h2>
      </div>
      <div class="relative">
        <div class="absolute top-0 left-0 right-0 h-px bg-gold-line hidden md:block"></div>
        <div class="grid md:grid-cols-5 gap-8 md:gap-4 text-right">
          <div class="relative">
            <div class="hidden md:block absolute top-0 right-0 w-3 h-3 -mt-1.5 -mr-1.5 bg-gold-400 rounded-full"></div>
            <div class="text-2xl font-extrabold text-gold-400 stat-number mb-2">۲۰۰۵</div>
            <div class="text-xs text-slate uppercase tracking-wider mb-2">شروع مسیر</div>
            <p class="text-sm text-ash leading-relaxed">ورود بنیان‌گذار به بازار املاک دبی در قامت یک سرمایه‌گذار مستقل.</p>
          </div>
          <div class="relative">
            <div class="hidden md:block absolute top-0 right-0 w-3 h-3 -mt-1.5 -mr-1.5 bg-gold-400 rounded-full"></div>
            <div class="text-2xl font-extrabold text-gold-400 stat-number mb-2">۲۰۰۸</div>
            <div class="text-xs text-slate uppercase tracking-wider mb-2">بحران مالی جهانی</div>
            <p class="text-sm text-ash leading-relaxed">مدیریت موفق دارایی‌ها در گرداب بحران مالی با سرمایه شخصی در معرض ریسک.</p>
          </div>
          <div class="relative">
            <div class="hidden md:block absolute top-0 right-0 w-3 h-3 -mt-1.5 -mr-1.5 bg-gold-400 rounded-full"></div>
            <div class="text-2xl font-extrabold text-gold-400 stat-number mb-2">۲۰۱۴</div>
            <div class="text-xs text-slate uppercase tracking-wider mb-2">گسترش افق‌ها</div>
            <p class="text-sm text-ash leading-relaxed">مشارکت عمیق‌تر در پروژه‌های پیش‌فروش و سرمایه‌گذاری در سطح توسعه پروژه.</p>
          </div>
          <div class="relative">
            <div class="hidden md:block absolute top-0 right-0 w-3 h-3 -mt-1.5 -mr-1.5 bg-gold-400 rounded-full"></div>
            <div class="text-2xl font-extrabold text-gold-400 stat-number mb-2">۲۰۲۳</div>
            <div class="text-xs text-slate uppercase tracking-wider mb-2">تاسیس رسمی زرین</div>
            <p class="text-sm text-ash leading-relaxed">ثبت رسمی ZARIN Real Estate جهت انتقال تجارب دو دهه به خریداران منتخب.</p>
          </div>
          <div class="relative">
            <div class="hidden md:block absolute top-0 right-0 w-3 h-3 -mt-1.5 -mr-1.5 bg-gold-400 rounded-full"></div>
            <div class="text-2xl font-extrabold text-gold-400 stat-number mb-2">۲۰۲۶</div>
            <div class="text-xs text-slate uppercase tracking-wider mb-2">امروز</div>
            <p class="text-sm text-ash leading-relaxed">همراهی سرمایه‌گذاران ممتاز از ایران، بریتانیا، هند و حوزه خلیج فارس در دبی.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. FOUR VALUES -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="ارزش‌های بنیادین زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">اصول و میثاق حرفه‌ای</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">ارزش‌های بنیادین ما</h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white-line text-right">
        <div class="bg-ink-900 p-8 hover:bg-ink-800 transition-colors duration-500 group">
          <div class="text-3xl font-extrabold text-gold-soft group-hover:text-gold-400 transition-colors stat-number mb-3">۰۱</div>
          <h3 class="text-xl font-bold text-bone mb-2">تجربه زیسته و واقعی</h3>
          <p class="text-sm text-ash leading-relaxed">مشاوره ما برآمده از سرمایه‌گذاری واقعی از سال ۲۰۰۵ است. نه تئوری‌های بازاریابی، بلکه عملکرد آزموده در میدان عمل.</p>
        </div>
        <div class="bg-ink-900 p-8 hover:bg-ink-800 transition-colors duration-500 group">
          <div class="text-3xl font-extrabold text-gold-soft group-hover:text-gold-400 transition-colors stat-number mb-3">۰۲</div>
          <h3 class="text-xl font-bold text-bone mb-2">شفافیت مطلق در هزینه‌ها</h3>
          <p class="text-sm text-ash leading-relaxed">تمام هزینه‌ها — مالیات DLD، اسناد، شارژ ساختمان و نگهداری — پیش از هرگونه تعهد اعلام می‌گردد. بدون هزینه‌های مخفی.</p>
        </div>
        <div class="bg-ink-900 p-8 hover:bg-ink-800 transition-colors duration-500 group">
          <div class="text-3xl font-extrabold text-gold-soft group-hover:text-gold-400 transition-colors stat-number mb-3">۰۳</div>
          <h3 class="text-xl font-bold text-bone mb-2">همراهی پیوسته تا سرانجام</h3>
          <p class="text-sm text-ash leading-relaxed">از انتخاب ملک تا ممیزی اسکرو، اخذ سند رسمی، تحویل فنی (Snagging) و اجاره‌داری، در تمام مراحل در کنار شماییم.</p>
        </div>
        <div class="bg-ink-900 p-8 hover:bg-ink-800 transition-colors duration-500 group">
          <div class="text-3xl font-extrabold text-gold-soft group-hover:text-gold-400 transition-colors stat-number mb-3">۰۴</div>
          <h3 class="text-xl font-bold text-bone mb-2">تمرکز بر سرمایه‌گذاران ایرانی</h3>
          <p class="text-sm text-ash leading-relaxed">شناخت عمیق دغدغه‌های هم‌وطنان — از انتقال قانونی سرمایه تا مسیرهای گلدن ویزا. ما به زبان مادری شما پاسخ می‌دهیم.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. TEAM PREVIEW -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="تیم و مشاوران زرین">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">سرمایه انسانی ما</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">تیم راهبردی املاک زرین</h2>
        </div>
        <a href="/fa/consultation" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors mt-4 md:mt-0" aria-label="گفتگو با تیم مشاوران">رزرو جلسه با مشاوران<svg class="w-4 h-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
      <div class="grid md:grid-cols-4 gap-6">
        <div class="bg-ink-900 border border-white-line rounded-sm p-6 text-center hover:border-gold-line transition-all card-lift">
          <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-4 flex items-center justify-center text-ink-900 font-extrabold text-2xl">ZA</div>
          <h3 class="text-base font-bold text-bone mb-1">بنیان‌گذار زرین</h3>
          <div class="text-xs text-gold-400 uppercase tracking-wider mb-3">Founder & Principal</div>
          <div class="text-xs text-slate leading-relaxed mb-4">بیش از ۲۰ سال سابقه در بازار املاک دبی و مشاوره تخصصی RERA.</div>
          <div class="flex justify-center gap-2"><span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">پیش‌فروش</span><span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">املاک شاخص</span></div>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-6 text-center hover:border-gold-line transition-all card-lift">
          <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-ash to-graphite mb-4 flex items-center justify-center text-ink-900 font-extrabold text-2xl">RK</div>
          <h3 class="text-base font-bold text-bone mb-1">روهیت کاپور</h3>
          <div class="text-xs text-gold-400 uppercase tracking-wider mb-3">مشاور ارشد — دسک هند</div>
          <div class="text-xs text-slate leading-relaxed mb-4">متخصص مالیاتی و انتقال سرمایه برای سرمایه‌گذاران شبه‌قاره.</div>
          <div class="flex justify-center gap-2"><span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">FEMA</span><span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">ویزا</span></div>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-6 text-center hover:border-gold-line transition-all card-lift">
          <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-ash to-graphite mb-4 flex items-center justify-center text-ink-900 font-extrabold text-2xl">EW</div>
          <h3 class="text-base font-bold text-bone mb-1">اما ویتفیلد</h3>
          <div class="text-xs text-gold-400 uppercase tracking-wider mb-3">مشاور ارشد — دسک بریتانیا</div>
          <div class="text-xs text-slate leading-relaxed mb-4">ساختاردهی مالیاتی فرامرزی و مدیریت سرمایه‌گذاری برای خریداران اروپایی.</div>
          <div class="flex justify-center gap-2"><span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">مالیات</span><span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">وام مسکن</span></div>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-6 text-center hover:border-gold-line transition-all card-lift">
          <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-ash to-graphite mb-4 flex items-center justify-center text-ink-900 font-extrabold text-2xl">LH</div>
          <h3 class="text-base font-bold text-bone mb-1">لی هونگ</h3>
          <div class="text-xs text-gold-400 uppercase tracking-wider mb-3">مشاور ارشد — دسک آسیای شرقی</div>
          <div class="text-xs text-slate leading-relaxed mb-4">انطباق خروج سرمایه و خریدهای کلان شرکتی در خاورمیانه.</div>
          <div class="flex justify-center gap-2"><span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">SAFE</span><span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">CNY</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. AWARDS + RERA + PRESS -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="جوایز و مجوزهای رسمی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="p-8 border border-white-line rounded-sm">
          <div class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">بازتاب در رسانه‌های معتبر</div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center gap-3"><div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div><div><div class="text-sm font-bold text-bone">Property Finder</div><div class="text-xs text-slate">کارگزاری برگزیده ۲۰۲۵</div></div></div>
            <div class="flex items-center gap-3"><div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg></div><div><div class="text-sm font-bold text-bone">Gulf Real Estate</div><div class="text-xs text-slate">جایزه سرآمدی املاک</div></div></div>
            <div class="flex items-center gap-3"><div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div><div><div class="text-sm font-bold text-bone">Forbes ME</div><div class="text-xs text-slate">۵۰ کارگزاری برتر</div></div></div>
            <div class="flex items-center gap-3"><div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"/></svg></div><div><div class="text-sm font-bold text-bone">Arabian Business</div><div class="text-xs text-slate">تحلیلگر شاخص املاک</div></div></div>
          </div>
        </div>
        <div class="p-8 border border-gold-line rounded-sm bg-gold-soft flex items-center gap-6 group">
          <div class="flex-shrink-0 w-16 h-16 border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
          <div>
            <div class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-1">دارای پروانه رسمی RERA</div>
            <div class="text-2xl font-bold text-bone mb-1">استعلام پروانه کارگزاری</div>
            <div class="text-sm text-slate">تحت نظارت رسمی دپارتمان اراضی دبی (DLD). ثبت و تایید شده در سامانه هوشمند Dubai REST.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="پرسش‌های متداول درباره پیشینه زرین">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پرسش‌های متداول</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">درباره املاک زرین</h2>
      </div>
      <div class="space-y-px bg-white-line">
        <details class="bg-ink-900 group"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors">املاک زرین در چه سالی تاسیس شد؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6"><p class="text-ash leading-relaxed">املاک زرین در سال ۲۰۲۳ به عنوان کارگزاری رسمی ثبت شد؛ اما بنیان‌گذار آن از سال ۲۰۰۵ در بازار املاک دبی حضور مستمر داشته و در ۲ پروژه کلان ساختمانی در سطح توسعه کل پروژه مشارکت داشته است.</p></div></details>
        <details class="bg-ink-900 group"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors">سابقه بنیان‌گذار زرین در املاک دبی به چه صورت است؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6"><p class="text-ash leading-relaxed">بنیان‌گذار ما در سال ۲۰۰۵ به عنوان یک سرمایه‌گذار وارد دبی شد. او علاوه بر خرید واحدهای مسکونی و تجاری، در دو پروژه ساختمانی در سطح مشارکت در کل پروژه سرمایه‌گذاری کرد و چرخه کامل توسعه ملک را از نزدیک پیمود.</p></div></details>
        <details class="bg-ink-900 group"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors">آیا املاک زرین دارای مجوز رسمی RERA است؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6"><p class="text-ash leading-relaxed">بله. زرین دارای پروانه رسمی کارگزاری املاک از موسسه تنظیم مقررات املاک دبی (RERA) تحت نظارت اداره اراضی دبی (DLD) است و تمامی فعالیت‌های ما در چهارچوب ضوابط قانونی امارات صورت می‌پذیرد.</p></div></details>
        <details class="bg-ink-900 group"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors">مشاوران زرین به چه زبان‌هایی تسلط دارند؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6"><p class="text-ash leading-relaxed">تیم مشاوران زرین به زبان‌های فارسی، انگلیسی و عربی تسلط داشته و دارای میزهای اختصاصی برای خدمت‌رسانی به خریداران ایرانی، بریتانیایی، چینی و هندی است.</p></div></details>
        <details class="bg-ink-900 group"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors">تفاوت زرین با سایر آژانس‌های املاک دبی چیست؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6"><p class="text-ash leading-relaxed">زرین توسط سرمایه‌گذار تاسیس شده است، نه دلالان کمیسیون‌محور. مشاوره ما از دل بیست سال سرمایه‌گذاری واقعی در دبی برمی‌آید. ما دیدگاه سرمایه‌گذارانه و تحلیل داده را جایگزین شعارهای تبلیغاتی کرده‌ایم.</p></div></details>
        <details class="bg-ink-900 group"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors">آیا امکان مشاهده تجارب خریداران قبلی وجود دارد؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6"><p class="text-ash leading-relaxed">بله. صدها سرمایه‌گذار از کشورهای گوناگون از جمله ایران تجربیات موفق خود را در خرید آپارتمان، ویلاهای پالم و اخذ گلدن ویزا با زرین به اشتراک گذاشته‌اند.</p></div></details>
        <details class="bg-ink-900 group"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors">زرین چه افتخارات و جوایزی کسب کرده است؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6"><p class="text-ash leading-relaxed">زرین در ارزیابی‌های معتبر منطقه‌ای از جمله Property Finder و جوایز تعالی املاک خلیج فارس تقدیر شده و مقالات کارشناسی ما در Forbes Middle East منتشر شده است.</p></div></details>
        <details class="bg-ink-900 group"><summary class="flex items-center justify-between p-6 cursor-pointer"><span class="text-lg font-semibold text-bone group-hover:text-gold-400 transition-colors">چگونه می‌توان پروانه RERA زرین را استعلام نمود؟</span><span class="faq-icon flex-shrink-0 mr-4 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center text-gold-400" aria-hidden="true"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></span></summary><div class="px-6 pb-6"><p class="text-ash leading-relaxed">شما می‌توانید مستقیماً از طریق وب‌سایت رسمی اداره اراضی دبی (Dubai Land Department) یا اپلیکیشن Dubai REST با وارد کردن نام کارگزاری زرین مجوز رسمی ما را بررسی و تایید کنید.</p></div></details>
      </div>
    </div>
  </section>

  <!-- 9. CTA -->
  <section class="bg-ink-900 py-24 md:py-32 relative overflow-hidden" aria-label="درخواست رزرو مشاوره">
    <div class="absolute inset-0 opacity-5"><div class="absolute inset-0" style="background-image:radial-gradient(circle at 20% 50%,#C8AB83 0%,transparent 50%);"></div></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">آشنایی با تیم</div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-bone mb-6">درباره اهداف سرمایه‌گذاری خود گفتگو کنیم</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">یک جلسه مشاوره محرمانه با کارشناسان ارشد زرین هماهنگ کنید. چه در پی نخستین خرید ملک در دبی باشید یا توسعه سبد دارایی‌های ملکی‌تان — ما مشاوره‌ای صادقانه و بر مبنای تجربه واقعی ارائه می‌دهیم.</p>
          <div class="space-y-4 mb-8">
            <a href="tel:+971586901231" class="flex items-center gap-4 group" aria-label="تماس مستقیم">
              <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center group-hover:bg-gold-soft transition-colors"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
              <div><div class="text-sm font-bold text-bone">تلفن مستقیم مشاوره</div><span dir="ltr" class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors tabular-nums">+971 58 690 1231</span></div>
            </a>
            <a href="https://wa.me/971586901231" class="flex items-center gap-4 group" aria-label="پیام در واتس‌اپ">
              <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center group-hover:bg-gold-soft transition-colors"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
              <div><div class="text-sm font-bold text-bone">کانسیرژ واتس‌اپ</div><span class="text-sm text-gold-400 group-hover:text-gold-300 transition-colors">ارسال پیام مستقیم به مشاور</span></div>
            </a>
          </div>
          <div class="flex flex-wrap items-center gap-4 pt-6 border-t border-white-line">
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>دارای مجوز رسمی RERA</span></div>
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>پاسخگویی تضمینی ظرف ۲۴ ساعت</span></div>
          </div>
        </div>
        <div class="bg-ink-800 border border-white-line rounded-sm p-8 text-right">
          <form class="space-y-5" action="/fa/consultation" method="POST" aria-label="فرم درخواست مشاوره">
            <div><label for="name" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-2">نام و نام خانوادگی *</label><input id="name" name="name" type="text" required autocomplete="name" class="w-full bg-ink-900 border border-white-line rounded-xs px-4 py-3 text-bone text-sm focus:border-gold-400 focus:outline-none transition-colors" placeholder="نام شریف شما" aria-required="true"></div>
            <div><label for="email" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-2">پست الکترونیکی *</label><input id="email" name="email" type="email" required autocomplete="email" class="w-full bg-ink-900 border border-white-line rounded-xs px-4 py-3 text-bone text-sm focus:border-gold-400 focus:outline-none transition-colors" placeholder="email@example.com" aria-required="true"></div>
            <div><label for="phone" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-2">شماره تماس / واتس‌اپ *</label><input id="phone" name="phone" type="tel" required autocomplete="tel" class="w-full bg-ink-900 border border-white-line rounded-xs px-4 py-3 text-bone text-sm focus:border-gold-400 focus:outline-none transition-colors" placeholder="+971 50 000 0000" aria-required="true"></div>
            <div><label for="interest" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-2">موضوع مورد نظر</label>
              <select id="interest" name="interest" class="w-full bg-ink-900 border border-white-line rounded-xs px-4 py-3 text-bone text-sm focus:border-gold-400 focus:outline-none transition-colors">
                <option value="">انتخاب موضوع مشاوره</option>
                <option value="buying">خرید ملک مسکونی</option>
                <option value="investing">سرمایه‌گذاری با بازدهی ارزی</option>
                <option value="off-plan">پروژه‌های پیش‌فروش</option>
                <option value="visa">گلدن ویزا و اقامت امارات</option>
                <option value="selling">فروش ملک در دبی</option>
                <option value="management">مدیریت و اجاره‌داری ملک</option>
                <option value="general">پرسش عمومی</option>
              </select>
            </div>
            <button type="submit" class="w-full py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold cursor-pointer" aria-label="ثبت درخواست مشاوره">ثبت و ارسال درخواست مشاوره</button>
            <p class="text-xs text-slate text-center">ارسال این فرم به منزله پذیرش <a href="/fa" class="text-gold-400 hover:underline">سیاست حفظ حریم خصوصی</a> زرین است.</p>
          </form>
        </div>
      </div>
    </div>
  </section>

  </main>

  <!-- FOOTER -->
  <footer class="bg-ink-950 border-t border-white-line pt-20 pb-8 text-right" role="contentinfo">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div class="col-span-2 lg:col-span-1">
          <a href="/fa" class="flex items-center gap-2 mb-4" aria-label="صفحه اصلی زرین"><span class="font-sans font-extrabold text-2xl tracking-tight text-bone">ZARIN</span></a>
          <p class="text-sm text-slate leading-relaxed mb-6">بنیان‌گذاری‌شده توسط سرمایه‌گذار با دو دهه تجربه عمیق در بازار املاک دبی از سال ۲۰۰۵.</p>
          <div class="flex gap-3">
            <a href="https://instagram.com/zarin.realestate" class="w-10 h-10 border border-white-line rounded-xs flex items-center justify-center text-ash hover:text-gold-400 hover:border-gold-line transition-all" aria-label="اینستاگرام"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            <a href="https://wa.me/971586901231" class="w-10 h-10 border border-white-line rounded-xs flex items-center justify-center text-ash hover:text-gold-400 hover:border-gold-line transition-all" aria-label="واتس‌اپ"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>
          </div>
        </div>
        <nav aria-label="اصالت زرین"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">اصالت زرین</h2><ul class="space-y-2"><li><a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">داستان ما</a></li><li><a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">تیم و مشاوران</a></li><li><a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">دیدگاه مشتریان</a></li><li><a href="/fa/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">جوایز و مجوزها</a></li></ul></nav>
        <nav aria-label="املاک و پروژه‌ها"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">املاک و پروژه‌ها</h2><ul class="space-y-2"><li><a href="/fa/properties" class="text-sm text-ash hover:text-gold-400 transition-colors">املاک آماده</a></li><li><a href="/fa/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">پیش‌فروش (آف‌پلان)</a></li><li><a href="/fa/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">مناطق دبی</a></li><li><a href="/fa/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">گلدن ویزا</a></li></ul></nav>
        <nav aria-label="خدمات حقوقی و مالی"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">خدمات ما</h2><ul class="space-y-2"><li><a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">مشاوره خرید</a></li><li><a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">وام مسکن</a></li><li><a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">امور حقوقی و سند</a></li><li><a href="/fa/services" class="text-sm text-ash hover:text-gold-400 transition-colors">کارشناسی و ارزیابی</a></li></ul></nav>
        <nav aria-label="بینش و تحلیل بازار"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">تحلیل بازار</h2><ul class="space-y-2"><li><a href="/fa/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">گزارش‌های فصلی</a></li><li><a href="/fa/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">مقالات و تحلیل‌ها</a></li><li><a href="/fa/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">ماشین‌حساب‌های مالی</a></li><li><a href="/fa/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">پرسش‌های متداول</a></li></ul></nav>
      </div>
      <div class="grid md:grid-cols-3 gap-6 py-8 border-t border-white-line">
        <address class="not-italic"><div class="text-xs uppercase tracking-wider text-slate mb-2">دفتر دبی</div><p class="text-sm text-ash">خیابان شیخ زاید<br>داون‌تاون دبی، امارات متحده عربی</p></address>
        <div><div class="text-xs uppercase tracking-wider text-slate mb-2">تلفن مستقیم</div><a href="tel:+971586901231" class="text-sm text-bone hover:text-gold-400 transition-colors"><span dir="ltr" class="tabular-nums">+971 58 690 1231</span></a></div>
        <div><div class="text-xs uppercase tracking-wider text-slate mb-2">پست الکترونیکی</div><a href="mailto:advisory@zarinrealestate.com" class="text-sm text-bone hover:text-gold-400 transition-colors"><span dir="ltr">advisory@zarinrealestate.com</span></a></div>
      </div>
      <div class="pt-8 border-t border-white-line flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate">
        <div>&copy; ۲۰۲۶ املاک زرین. تمامی حقوق محفوظ است. کارگزاری رسمی دارای پروانه RERA.</div>
        <nav aria-label="لینک‌های قانونی" class="flex flex-wrap items-center gap-4 text-xs">
          <a href="/fa" class="text-slate hover:text-gold-400 transition-colors">حریم خصوصی</a>
          <a href="/fa" class="text-slate hover:text-gold-400 transition-colors">شرایط و ضوابط</a>
          <a href="/fa" class="text-slate hover:text-gold-400 transition-colors">نقشه سایت</a>
        </nav>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 left-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="واتس‌اپ زرین"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script defer>
    const header=document.getElementById('site-header');let ticking=false;
    window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(()=>{if(window.scrollY>60){header.style.backgroundColor='rgba(10,11,14,0.85)';header.style.backdropFilter='blur(20px)';header.style.borderBottomColor='rgba(200,171,131,0.15)';header.style.padding='0.85rem 0';}else{header.style.backgroundColor='transparent';header.style.backdropFilter='none';header.style.borderBottomColor='transparent';header.style.padding='1.25rem 0';}ticking=false;});ticking=true;}});
    const ds=document.querySelectorAll('details');ds.forEach(d=>{d.addEventListener('toggle',()=>{if(d.open){ds.forEach(x=>{if(x!==d)x.open=false;});}});});
  </script>
  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>`;

const faHeritagePath = path.join(rootDir, 'fa', 'heritage.html');
const faHeritageDir = path.join(rootDir, 'fa', 'heritage');
const faHeritageIndexPath = path.join(faHeritageDir, 'index.html');

if (!fs.existsSync(faHeritageDir)) {
  fs.mkdirSync(faHeritageDir, { recursive: true });
}

fs.writeFileSync(faHeritagePath, htmlContent, 'utf8');
fs.writeFileSync(faHeritageIndexPath, htmlContent, 'utf8');
console.log('✅ Generated fa/heritage.html and fa/heritage/index.html');
