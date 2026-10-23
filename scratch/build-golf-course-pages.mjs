import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// Read index.html to extract canonical English header, mobile menu, and footer
const enIndexHtml = fs.readFileSync('index.html', 'utf8');
const enDom = new JSDOM(enIndexHtml);
const enHeaderEl = enDom.window.document.querySelector('#site-header');
const enMobileMenuEl = enDom.window.document.querySelector('#mobile-menu');
const enFooterEl = enDom.window.document.querySelector('footer');

// Read fa/index.html to extract canonical Persian header, mobile menu, and footer
const faIndexHtml = fs.readFileSync('fa/index.html', 'utf8');
const faDom = new JSDOM(faIndexHtml);
const faHeaderEl = faDom.window.document.querySelector('#site-header');
const faMobileMenuEl = faDom.window.document.querySelector('#mobile-menu');
const faFooterEl = faDom.window.document.querySelector('footer');

// Prepare English Header with active state on Golf Course and Properties
const enHeaderClone = JSDOM.fragment(enHeaderEl.outerHTML).querySelector('#site-header');
const enPropLink = enHeaderClone.querySelector('#properties-nav-link');
if (enPropLink) {
  enPropLink.setAttribute('aria-current', 'page');
  enPropLink.classList.remove('text-ash');
  enPropLink.classList.add('text-gold-400');
}
const enGolfLink = enHeaderClone.querySelector('a[href="/golf-course-properties-in-dubai"]');
if (enGolfLink) {
  enGolfLink.setAttribute('aria-current', 'page');
  enGolfLink.classList.remove('text-ash');
  enGolfLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare English Mobile Menu with active state
const enMobileClone = JSDOM.fragment(enMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const enGolfMobileLink = enMobileClone.querySelector('a[href="/golf-course-properties-in-dubai"]');
if (enGolfMobileLink) {
  enGolfMobileLink.classList.remove('text-ash');
  enGolfMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Header with active state
const faHeaderClone = JSDOM.fragment(faHeaderEl.outerHTML).querySelector('#site-header');
const faPropLink = faHeaderClone.querySelector('#properties-nav-link');
if (faPropLink) {
  faPropLink.setAttribute('aria-current', 'page');
  faPropLink.classList.remove('text-ash');
  faPropLink.classList.add('text-gold-400');
}
const faGolfLink = faHeaderClone.querySelector('a[href="/fa/golf-course-properties-in-dubai"]');
if (faGolfLink) {
  faGolfLink.setAttribute('aria-current', 'page');
  faGolfLink.classList.remove('text-ash');
  faGolfLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Mobile Menu with active state
const faMobileClone = JSDOM.fragment(faMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const faGolfMobileLink = faMobileClone.querySelector('a[href="/fa/golf-course-properties-in-dubai"]');
if (faGolfMobileLink) {
  faGolfMobileLink.classList.remove('text-ash');
  faGolfMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// ==========================================
// 1. ASSEMBLE ENGLISH GOLF COURSE HTML
// ==========================================
const enGolfHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>Golf Course Properties in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Golf course properties in Dubai — villas and townhouses in Emirates Hills, Dubai Hills Estate, Jumeirah Golf Estates, Arabian Ranches, and Tilal Al Ghaf overlooking championship fairways.">
  <meta name="keywords" content="golf course properties Dubai, Emirates Hills villas, Dubai Hills Estate golf, Jumeirah Golf Estates, Arabian Ranches Golf, Tilal Al Ghaf Els Club, golf view villas Dubai">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/golf-course-properties-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/golf-course-properties-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/golf-course-properties-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/golf-course-properties-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Golf Course Properties in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Villas and townhouses overlooking Dubai's championship golf courses — Emirates Hills, Dubai Hills, Jumeirah Golf Estates, Arabian Ranches, and Tilal Al Ghaf.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Golf course properties in Dubai">
  <meta property="og:url" content="https://zarinrealestate.com/golf-course-properties-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Golf Course Properties in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Villas and townhouses overlooking Dubai's championship golf courses.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>

  <style type="text/tailwindcss">
    @theme {
      --color-ink-950:#050507;--color-ink-900:#0A0B0E;--color-ink-850:#0E1015;--color-ink-800:#111318;--color-ink-700:#181B22;--color-ink-600:#20242D;--color-ink-500:#2A2E37;
      --color-gold-100:#F5E9D4;--color-gold-300:#DFC49E;--color-gold-400:#C8AB83;--color-gold-500:#B89868;--color-gold-700:#8B7048;
      --color-gold-soft:rgba(200,171,131,0.08);--color-gold-tint:rgba(200,171,131,0.15);--color-gold-line:rgba(200,171,131,0.32);--color-gold-border:rgba(200,171,131,0.45);--color-gold-glow:rgba(200,171,131,0.20);
      --color-bone:#F8F9FA;--color-pearl:#E8EAED;--color-ash:#9FA6B2;--color-slate:#676E7D;
      --color-white-soft:rgba(255,255,255,0.04);--color-white-line:rgba(255,255,255,0.08);--color-white-tint:rgba(255,255,255,0.12);
      --color-glass:rgba(10,11,14,0.78);
      --color-success:#4ADE80;--color-warning:#FBBF24;--color-info:#60A5FA;--color-danger:#F87171;
      --font-sans:"Source Sans 3","Vazirmatn",-apple-system,sans-serif;
      --container-narrow:1040px;--container-default:1380px;--container-wide:1600px;
      --radius-xs:2px;--radius-sm:4px;--radius-md:8px;--radius-lg:12px;
      --shadow-subtle:0 4px 20px rgba(0,0,0,0.35);--shadow-monolith:0 24px 60px rgba(0,0,0,0.65);--shadow-gold:0 10px 30px rgba(200,171,131,0.12);
      --ease-editorial:cubic-bezier(0.16,1,0.3,1);
    }
  </style>

  <style>
    html{scroll-behavior:smooth}body{font-family:"Source Sans 3","Vazirmatn",-apple-system,sans-serif;background:#0A0B0E;color:#F8F9FA;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}
    ::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#0A0B0E}::-webkit-scrollbar-thumb{background:#C8AB83;border-radius:4px}
    ::selection{background:rgba(200,171,131,0.3);color:#F8F9FA}
    .glass{background:rgba(10,11,14,0.78);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
    .text-gold-gradient{background:linear-gradient(135deg,#DFC49E 0%,#C8AB83 50%,#A88D66 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
    .stat-number{font-variant-numeric:tabular-nums;letter-spacing:-.02em}
    .mobile-menu{transform:translateX(100%);transition:transform .4s cubic-bezier(.16,1,.3,1)}.mobile-menu.open{transform:translateX(0)}
    .img-zoom{overflow:hidden}.img-zoom img{transition:transform .8s cubic-bezier(.16,1,.3,1)}.img-zoom:hover img{transform:scale(1.05)}
    .card-lift{transition:transform .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1)}.card-lift:hover{transform:translateY(-4px);box-shadow:0 24px 60px rgba(0,0,0,0.5)}
    details summary{list-style:none;cursor:pointer}details summary::-webkit-details-marker{display:none}details[open] .faq-icon{transform:rotate(45deg)}.faq-icon{transition:transform .3s cubic-bezier(.16,1,.3,1)}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    .animate-fade-in-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    .filter-chip{transition:all .2s}.filter-chip.active{background:#C8AB83;color:#0A0B0E;border-color:#C8AB83}
    .sticky-whatsapp{display:none}@media(max-width:1024px){.sticky-whatsapp{display:flex}}
  </style>
  <link rel="stylesheet" href="/styles/main.css">

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://zarinrealestate.com/"},
    {"@type":"ListItem","position":2,"name":"Properties","item":"https://zarinrealestate.com/properties"},
    {"@type":"ListItem","position":3,"name":"Golf Course","item":"https://zarinrealestate.com/golf-course-properties-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/golf-course-properties-in-dubai#collectionpage",
    "name":"Golf Course Properties in Dubai","url":"https://zarinrealestate.com/golf-course-properties-in-dubai",
    "description":"Golf course villas and townhouses overlooking Dubai's championship fairways — Emirates Hills, Dubai Hills Estate, Jumeirah Golf Estates, Arabian Ranches, and Tilal Al Ghaf.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"7BR Golf View Villa — Emirates Hills Sector E","offers":{"@type":"Offer","price":"42000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"5BR Golf View Villa — Dubai Hills Estate Park Heights","offers":{"@type":"Offer","price":"18500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"4BR Golf View Townhouse — Jumeirah Golf Estates Earth Course","offers":{"@type":"Offer","price":"9800000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"4BR Golf View Villa — Arabian Ranches Golf Community","offers":{"@type":"Offer","price":"7400000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"5BR Golf View Villa — Tilal Al Ghaf Els Club","offers":{"@type":"Offer","price":"14500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"6BR Golf View Mansion — Emirates Hills Sector M","offers":{"@type":"Offer","price":"68500000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/golf-course-properties-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"What is the price premium for golf course properties in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Golf course properties in Dubai typically trade at a 20-35% premium per square foot compared to equivalent non-golf properties in the same community. A 4-bedroom villa overlooking the Earth Course at Jumeirah Golf Estates sells at AED 1,800-2,400 per sqft, while the same villa on an interior plot trades at AED 1,400-1,800 per sqft. Emirates Hills golf-view villas command an even higher premium — AED 3,200-4,500 per sqft versus AED 2,400-3,000 for non-golf-view plots. The premium reflects the scarcity of fairway frontage, unobstructed green views, and the lifestyle cachet of golf community membership."}},
      {"@type":"Question","name":"Which golf communities are best for property investment?","acceptedAnswer":{"@type":"Answer","text":"The strongest investment cases are Emirates Hills for capital preservation, Dubai Hills Estate for balanced growth and yield, and Jumeirah Golf Estates for entry-level golf view ownership. Emirates Hills has appreciated 60-85% since 2020 with very low turnover, reflecting its status as Dubai's most established gated golf enclave. Dubai Hills Estate has seen 45-65% appreciation over the same period thanks to the new Dubai Hills Mall and Downtown Dubai proximity. Jumeirah Golf Estates offers the most accessible entry point from AED 4M for a golf view townhouse, with Earth Course frontage the most sought-after. ZARIN's advisory models each community's 5-year total return including rental, capital growth, and exit liquidity."}},
      {"@type":"Question","name":"Can non-golfers buy properties in golf communities?","acceptedAnswer":{"@type":"Answer","text":"Yes — most residents in Dubai's golf communities are not active golfers. The appeal extends well beyond the sport itself: golf communities offer manicured green outlooks, low-density master planning, strong security, controlled traffic, and a residential demographic of senior executives and family buyers. Property owners typically receive preferred golf club membership terms and discounted green fees, but membership is never mandatory. Many buyers cite the unobstructed fairway view and the absence of neighbouring towers as the primary draw, with golf itself a secondary benefit. ZARIN advisors help non-golfers evaluate the lifestyle, community fees, and view corridors of each golf community on its own merits."}},
      {"@type":"Question","name":"Are golf course properties a good investment in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Golf course properties have been among Dubai's strongest-performing residential sub-segments since 2020. Capital appreciation of 50-85% has been recorded across Emirates Hills, Jumeirah Golf Estates, and Dubai Hills Estate, driven by scarcity of fairway frontage and strong international demand from golf-playing buyers in the UK, Europe, and South Asia. Rental yields run 4-5% gross for villas and 5-6% for townhouses, with golf view adding 15-25% to achievable rent. The investment case rests on the finite supply of golf community plots — Dubai has 9 championship courses and almost no new golf masterplans in advanced development. ZARIN provides a 5-year total return model for every golf view mandate."}},
      {"@type":"Question","name":"What are the best golf clubs in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Dubai's six championship golf clubs each have distinct character. Emirates Golf Club hosts the annual Dubai Desert Classic on its Majlis Course, with the Faldo Course offering a floodlit 18-hole alternative. Dubai Hills Golf Club is a 71-par championship course designed by European Golf Design, set against the Burj Khalifa skyline. Jumeirah Golf Estates features two Greg Norman-designed courses — Earth (host of the DP World Tour Championship) and Fire. Arabian Ranches Golf Club offers an 18-hole desert-style course designed by Ian Baker-Finch. The Els Club at Dubai Sports City was designed by Ernie Els, and the Address Montgomerie is a Colin Montgomerie signature course. ZARIN advisors can arrange trial rounds and membership introductions."}},
      {"@type":"Question","name":"Do golf community properties come with golf club membership?","acceptedAnswer":{"@type":"Answer","text":"Not automatically. Property ownership in a golf community does not include golf club membership, but most clubs offer preferred membership categories and discounted joining fees for residents. At Jumeirah Golf Estates, property owners receive a 30-40% discount on the standard AED 35,000-65,000 annual membership. Emirates Golf Club offers resident-tier memberships for residents of surrounding communities. The Els Club at Dubai Sports City and Address Montgomerie offer similar resident rates. Membership is always optional — many property owners never play golf. ZARIN provides a full breakdown of membership categories, fees, and residency-based discounts for each golf community before purchase."}},
      {"@type":"Question","name":"What is the average price of a villa in Emirates Hills?","acceptedAnswer":{"@type":"Answer","text":"Emirates Hills villa prices range from AED 15 million for a 4-bedroom original-condition villa on a smaller interior plot to AED 200+ million for a golf view mansion on Sector E or Sector M. The median transaction in 2024-2025 was approximately AED 28 million for a 6-bedroom villa. Golf-view plots (those backing onto the Emirates Golf Club Majlis Course) command AED 3,200-4,500 per sqft, while interior plots trade at AED 2,400-3,000 per sqft. Plot sizes range from 8,000 sqft to over 60,000 sqft, so absolute prices vary widely. Emirates Hills is Dubai's most established gated golf enclave and the lowest-turnover trophy community in the city — typical holding periods exceed 12 years."}},
      {"@type":"Question","name":"Can foreigners buy freehold properties in Dubai golf communities?","acceptedAnswer":{"@type":"Answer","text":"Yes — all five major golf communities (Emirates Hills, Dubai Hills Estate, Jumeirah Golf Estates, Arabian Ranches, and Tilal Al Ghaf) are designated freehold areas where foreign nationals of any country can buy outright freehold title in their own name. There are no nationality restrictions and no requirement for a UAE residency visa. Title deeds are issued by Dubai Land Department and the property can be inherited, sold, or mortgaged like any other freehold asset. Emirates Hills and Jumeirah Golf Estates have been freehold since their original launches in 2003 and 2007 respectively, while Dubai Hills Estate and Tilal Al Ghaf are newer freehold masterplans. ZARIN handles the full transfer process including KYC, NOC, and DLD registration."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/golf-course-properties-in-dubai#webpage",
    "url":"https://zarinrealestate.com/golf-course-properties-in-dubai","name":"Golf Course Properties in Dubai | ZARIN Real Estate",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "speakable":{"@type":"SpeakableSpecification","cssSelector":["#hero-headline","#tldr-summary"]}}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">Skip to main content</a>

  ${enHeaderClone.outerHTML}

  ${enMobileClone.outerHTML}

  <main id="main">

  <!-- 1. HERO + TL;DR -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Golf course properties hero">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">For Sale &middot; Golf Course</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6">Golf Course<br><span class="text-gold-gradient">Properties in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">Villas and townhouses overlooking Dubai's championship fairways — Emirates Hills, Dubai Hills Estate, Jumeirah Golf Estates, Arabian Ranches, and Tilal Al Ghaf. Every golf view listing is personally inspected by a ZARIN advisor — we verify the actual fairway outlook, community fees, and club membership terms before sharing it. No inflated prices, no stale inventory.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#featured-listings" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse golf course listings"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>Browse Properties</a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to a golf properties advisor">Speak to Advisor</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">240+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Golf Community Listings</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">AED 9.2M</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Avg Golf View Price</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">9</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Championship Courses</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">20-35%</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Capital Appreciation</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. GOLF COMMUNITIES SHOWCASE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Golf communities showcase">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Golf Communities</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Five Fairway Frontiers</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Dubai's golf property market is concentrated across five communities, each anchored by a championship golf course designed by a globally recognised architect. Some communities offer direct fairway frontage on your title deed; others provide elevated views across the course from a townhouse balcony. The choice shapes both lifestyle and investment case — an Emirates Hills mansion on the Majlis Course behaves very differently from a Jumeirah Golf Estates townhouse on the Earth Course. ZARIN advisors have walked every community and can speak to view corridors, plot orientations, and recent resale trends in each.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Emirates Hills -->
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View golf properties in Emirates Hills">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="Emirates Hills golf view villa overlooking the Majlis Course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Majlis Course</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Emirates Hills</h3>
            <p class="text-xs text-ash mb-2">Emirates Golf Club &middot; designed by Karl Litten (1988). Dubai's most established gated golf enclave, freehold since 2003.</p>
            <p class="text-[11px] text-slate mb-3">Course designer: Karl Litten &middot; 18 holes &middot; Par 72</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 15M – 200M</span>
              <span class="text-ash">85+ listings</span>
            </div>
          </div>
        </a>

        <!-- Dubai Hills Estate -->
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View golf properties in Dubai Hills Estate">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Dubai Hills Estate golf view villa overlooking the championship course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Championship Course</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Dubai Hills Estate</h3>
            <p class="text-xs text-ash mb-2">Dubai Hills Golf Club &middot; designed by European Golf Design. 18-hole championship course with Burj Khalifa skyline views.</p>
            <p class="text-[11px] text-slate mb-3">Course designer: European Golf Design &middot; 18 holes &middot; Par 71</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 4M – 90M</span>
              <span class="text-ash">120+ listings</span>
            </div>
          </div>
        </a>

        <!-- Jumeirah Golf Estates -->
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View golf properties in Jumeirah Golf Estates">
          <img src="https://images.unsplash.com/photo-1535131749006-b7f5839301ea?auto=format&fit=crop&w=800&q=80" alt="Jumeirah Golf Estates fairway view villa" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Earth &amp; Fire Courses</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Jumeirah Golf Estates</h3>
            <p class="text-xs text-ash mb-2">Two Greg Norman signature courses &middot; host of the DP World Tour Championship. Freehold since 2007.</p>
            <p class="text-[11px] text-slate mb-3">Course designer: Greg Norman &middot; 36 holes &middot; Par 72</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 4M – 55M</span>
              <span class="text-ash">95+ listings</span>
            </div>
          </div>
        </a>

        <!-- Arabian Ranches -->
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View golf properties in Arabian Ranches">
          <img src="https://images.unsplash.com/photo-1593111774240-d536f83f9e25?auto=format&fit=crop&w=800&q=80" alt="Arabian Ranches golf view villa overlooking the desert-style course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Desert Course</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Arabian Ranches</h3>
            <p class="text-xs text-ash mb-2">Arabian Ranches Golf Club &middot; designed by Ian Baker-Finn. 18-hole desert-style course established 2004.</p>
            <p class="text-[11px] text-slate mb-3">Course designer: Ian Baker-Finch &middot; 18 holes &middot; Par 72</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 3.5M – 25M</span>
              <span class="text-ash">70+ listings</span>
            </div>
          </div>
        </a>

        <!-- Tilal Al Ghaf -->
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View golf properties in Tilal Al Ghaf">
          <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="Tilal Al Ghaf modern villa overlooking the Els Club fairway" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Els Club</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Tilal Al Ghaf</h3>
            <p class="text-xs text-ash mb-2">Els Club at Dubai Sports City &middot; Ernie Els signature course. Majid Al Futtaim masterplan, newest golf community.</p>
            <p class="text-[11px] text-slate mb-3">Course designer: Ernie Els &middot; 18 holes &middot; Par 72</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 4.5M – 45M</span>
              <span class="text-ash">55+ listings</span>
            </div>
          </div>
        </a>

        <!-- Membership Advisory Card -->
        <div class="group relative aspect-[16/10] rounded-sm overflow-hidden border border-gold-line bg-ink-900 p-8 flex flex-col justify-between" aria-label="Golf course membership advisory">
          <div>
            <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-3">Membership Advisory</div>
            <h3 class="text-2xl font-bold text-bone mb-3">Golf Club Membership?</h3>
            <p class="text-xs text-ash mb-4 leading-relaxed">Property ownership does not include golf membership, but resident-tier rates apply at every Dubai golf club. ZARIN provides full membership category, fee, and discount breakdown before purchase.</p>
          </div>
          <a href="/consultation" class="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Request membership advisory">Request Advisory<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>

      </div>
      <div class="text-center mt-10"><a href="/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="View all Dubai areas">View All 45+ Areas<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 3. FEATURED GOLF VIEW LISTINGS -->
  <section id="featured-listings" class="bg-ink-900 py-16 md:py-20" aria-label="Featured golf view listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">Featured Listings</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">Curated Golf View Mandates</h2>
        </div>
        <p class="text-sm text-ash max-w-md">A selection of current ZARIN-mandated golf view listings. Each property has been personally inspected by an advisor — including the actual fairway outlook, view corridor, and community-fee audit. For our complete inventory, request a custom search.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Listing 1: 7BR Villa Emirates Hills -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 7BR golf view villa in Emirates Hills Sector E">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="7-bedroom golf view mansion in Emirates Hills Sector E overlooking the Majlis Course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Golf View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 42M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Emirates Hills</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">7BR Villa &middot; Sector E</h3>
            <div class="text-sm text-ash mb-4">12,400 sqft &middot; Majlis Course frontage</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">7</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">9</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 3,387</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 5BR Villa Dubai Hills Estate -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 5BR golf view villa in Dubai Hills Estate">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="5-bedroom golf view villa in Dubai Hills Estate overlooking the championship course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Golf View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 18.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Dubai Hills</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">5BR Villa &middot; Park Heights</h3>
            <div class="text-sm text-ash mb-4">6,800 sqft &middot; Fairway frontage</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">5</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">6</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,720</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 4BR Townhouse Jumeirah Golf Estates -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR golf view townhouse in Jumeirah Golf Estates">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="4-bedroom golf view townhouse in Jumeirah Golf Estates overlooking the Earth Course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Golf View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 9.8M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Townhouse</div><div class="text-xs text-slate">JGE</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Townhouse &middot; Earth Course</h3>
            <div class="text-sm text-ash mb-4">4,200 sqft &middot; Greg Norman fairway view</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,333</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 4BR Villa Arabian Ranches -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR golf view villa in Arabian Ranches Golf Community">
            <img src="https://images.unsplash.com/photo-1593111774240-d536f83f9e25?auto=format&fit=crop&w=800&q=80" alt="4-bedroom golf view villa in Arabian Ranches overlooking the desert-style course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Golf View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 7.4M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Arabian Ranches</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Villa &middot; Alma 2</h3>
            <div class="text-sm text-ash mb-4">3,650 sqft &middot; Ian Baker-Finch fairway</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,027</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 5BR Villa Tilal Al Ghaf -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 5BR golf view villa in Tilal Al Ghaf overlooking the Els Club">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="5-bedroom golf view villa in Tilal Al Ghaf overlooking the Els Club fairway" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Golf View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 14.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Tilal Al Ghaf</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">5BR Villa &middot; Els Club Frontage</h3>
            <div class="text-sm text-ash mb-4">5,800 sqft &middot; Ernie Els signature course</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">5</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">6</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,500</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 6BR Mansion Emirates Hills Sector M -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 6BR golf view mansion in Emirates Hills Sector M">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="6-bedroom golf view mansion in Emirates Hills Sector M overlooking the championship fairway" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Golf View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 68.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Mansion</div><div class="text-xs text-slate">Emirates Hills</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">6BR Mansion &middot; Sector M</h3>
            <div class="text-sm text-ash mb-4">22,800 sqft &middot; 30m fairway frontage</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">6</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">8</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 3,004</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">This is a curated sample. ZARIN has access to 240+ active golf view listings across Dubai's five championship communities — including off-market fairway frontage mandates not listed publicly. Tell us your budget and golf community preference and we'll send a tailored shortlist within 24 hours.</p>
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request custom golf view search">Request Custom Search<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. WHY GOLF PROPERTIES -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Why golf properties">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why Golf Properties</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">The Case for Golf Course Property</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Dubai's golf property is a finite, asymmetric asset class. Only 5% of the city's residential supply sits within a championship golf community, and almost no new golf masterplan land has been released since Tilal Al Ghaf. That scarcity — combined with lifestyle, capital appreciation, and rental premium dynamics — makes golf view property one of the strongest sub-segments of Dubai residential for the next 5-7 years. Below are the four reasons ZARIN mandates golf course property for clients seeking both lifestyle and capital preservation.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 01</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Scarcity</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Dubai has 9 championship golf courses, of which only 5 are surrounded by freehold residential development. Emirates Hills, Dubai Hills Estate, Jumeirah Golf Estates, Arabian Ranches, and Tilal Al Ghaf account for the entire fairway-frontage villa and townhouse supply. No new golf masterplans have been released since Tilal Al Ghaf launched in 2018 — golf community land is finite by definition.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">5% of Dubai supply</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 02</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Lifestyle</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Golf community living in Dubai is not symbolic — it means an unobstructed fairway view from your living room, low-density master planning, gated security, controlled traffic, and a residential demographic of senior executives and family buyers. Residents report measurably higher wellbeing scores, with daily access to green space and walking trails, particularly families with children and remote-working professionals.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">Year-round green outlook</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 03</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Capital Appreciation</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Emirates Hills golf view villas have appreciated 60-85% since 2020, Dubai Hills Estate villas 45-65%, and Jumeirah Golf Estates townhouses 50-70%. Capital growth outpaces the broader Dubai residential market by 1.5-2.5x. The appreciation premium reflects both scarcity and rising international demand for golf community property from UK, European, and South Asian buyers post-pandemic.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+60-85% since 2020</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 04</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Rental Premium</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Golf view properties command 15-25% higher rents than equivalent non-golf properties in the same community. A 4-bedroom Jumeirah Golf Estates Earth Course townhouse rents at AED 380,000/year; the same townhouse on an interior plot rents at AED 290,000/year. Golf view also commands a premium on short-term holiday lets during the November-March peak season.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+15-25% rents</div>
        </article>

      </div>
    </div>
  </section>

  <!-- 5. DUBAI'S GOLF COURSES -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Dubai's golf courses">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Dubai's Golf Courses</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Six Championship Fairways</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Dubai has built one of the world's most concentrated golf course ecosystems — nine 18-hole championship courses within a 30-minute drive of the city centre. Six of these anchor freehold residential communities and shape the surrounding property market. Each course has its own character, designer signature, and tournament history. Below is a summary of the six courses most relevant to golf view property buyers, with the communities and price brackets they anchor.</p>
      </div>
      <div class="space-y-6">

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Course 01</div>
              <h3 class="text-2xl font-bold text-bone mb-2">Emirates Golf Club</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">Majlis &amp; Faldo Courses</p>
              <p class="text-xs text-slate">Est. 1988 &middot; Dubai's oldest 18-hole course</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">Emirates Golf Club is the original anchor of Dubai golf, opened in 1988 with the Majlis Course designed by Karl Litten. The Majlis hosts the annual Dubai Desert Classic — the European Tour's longest-running Middle East event. The Faldo Course, added in 1996, offers floodlit night golf and a links-style challenge. The club sits within the Emirates Hills freehold community, where villas backing onto the Majlis fairway trade at AED 3,200-4,500 per sqft — the highest golf view premium in Dubai. Resident-tier membership is available to Emirates Hills and surrounding community residents at preferred rates.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">Designer</div><div>Karl Litten</div></div>
                <div><div class="text-bone font-semibold mb-1">Holes</div><div>36 (Majlis 18 + Faldo 18)</div></div>
                <div><div class="text-bone font-semibold mb-1">Anchors</div><div>Emirates Hills</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Course 02</div>
              <h3 class="text-2xl font-bold text-bone mb-2">Dubai Hills Golf Club</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">Championship Course</p>
              <p class="text-xs text-slate">Est. 2019 &middot; Emaar Properties masterplan</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">Dubai Hills Golf Club opened in 2019 as the centrepiece of Emaar's Dubai Hills Estate masterplan, designed by European Golf Design in collaboration with Greg Norman's design team. The 71-par championship course runs 7,300 yards with the Burj Khalifa skyline visible from elevated fairways. Property surrounding the course has appreciated 45-65% since opening, with golf view villas in Park Heights and Sidra districts commanding the steepest premium. The club offers full practice facilities, a golf academy, and resident-tier membership rates for Dubai Hills Estate property owners.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">Designer</div><div>European Golf Design</div></div>
                <div><div class="text-bone font-semibold mb-1">Holes</div><div>18 &middot; Par 71</div></div>
                <div><div class="text-bone font-semibold mb-1">Anchors</div><div>Dubai Hills Estate</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Course 03</div>
              <h3 class="text-2xl font-bold text-bone mb-2">Jumeirah Golf Estates</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">Earth &amp; Fire Courses</p>
              <p class="text-xs text-slate">Est. 2007 &middot; Greg Norman signature</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">Jumeirah Golf Estates features two Greg Norman-designed championship courses — the Earth Course, host of the DP World Tour Championship season finale since 2009, and the Fire Course, a more forgiving layout for handicap play. The community offers the most accessible entry point for golf view ownership, with townhouses overlooking the Earth Course from AED 4M and villas from AED 8M. Freehold since 2007, the community has matured into one of Dubai's most established golf residential enclaves, with full retail, school, and club facilities on-site.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">Designer</div><div>Greg Norman</div></div>
                <div><div class="text-bone font-semibold mb-1">Holes</div><div>36 (Earth 18 + Fire 18)</div></div>
                <div><div class="text-bone font-semibold mb-1">Anchors</div><div>Jumeirah Golf Estates</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Course 04</div>
              <h3 class="text-2xl font-bold text-bone mb-2">Arabian Ranches Golf Club</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">Desert-Style Course</p>
              <p class="text-xs text-slate">Est. 2004 &middot; Ian Baker-Finch design</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">Arabian Ranches Golf Club opened in 2004 as one of Dubai's first desert-style courses, designed by Ian Baker-Finn with a links feel and dramatic sand waste areas. The 18-hole, par-72 layout sits within the Arabian Ranches freehold community, with golf view villas in Alma, Mirador, and Saheel districts commanding a 15-20% premium over interior plots. The club offers full floodlit night golf, a Golf Digest academy, and resident-tier membership for Arabian Ranches property owners. Arabian Ranches remains one of Dubai's most family-friendly golf communities.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">Designer</div><div>Ian Baker-Finch</div></div>
                <div><div class="text-bone font-semibold mb-1">Holes</div><div>18 &middot; Par 72</div></div>
                <div><div class="text-bone font-semibold mb-1">Anchors</div><div>Arabian Ranches</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Course 05</div>
              <h3 class="text-2xl font-bold text-bone mb-2">Els Club at Dubai Sports City</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">Ernie Els Signature</p>
              <p class="text-xs text-slate">Est. 2008 &middot; Tilal Al Ghaf adjacent</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">The Els Club at Dubai Sports City opened in 2008 as Ernie Els' first signature course in the Middle East, a 7,538-yard championship layout that has hosted the European Tour's Dubai Golf Trophy. While technically located within Dubai Sports City, the Els Club anchors the adjacent Tilal Al Ghaf masterplan by Majid Al Futtaim, where new golf view villas launch from AED 4.5M. The combination of an established championship course and a brand-new residential masterplan makes Tilal Al Ghaf the highest-growth golf community in Dubai in 2024-2025.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">Designer</div><div>Ernie Els</div></div>
                <div><div class="text-bone font-semibold mb-1">Holes</div><div>18 &middot; Par 72</div></div>
                <div><div class="text-bone font-semibold mb-1">Anchors</div><div>Tilal Al Ghaf</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Course 06</div>
              <h3 class="text-2xl font-bold text-bone mb-2">Address Montgomerie</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">Colin Montgomerie Signature</p>
              <p class="text-xs text-slate">Est. 2002 &middot; Emirates Hills adjacent</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">The Address Montgomerie Dubai, opened in 2002, is a Colin Montgomerie signature course set within the Emirates Hills precinct. The 18-hole, par-72 layout is one of Dubai's most scenic courses, with dramatic elevation changes and the Burj Al Arab skyline visible from elevated tees. While not surrounded by freehold residential, the Address Montgomerie complements Emirates Hills as a secondary course option for residents and is included in many resident-tier membership packages. ZARIN advisors can arrange tee times and trial rounds at all six courses for clients evaluating golf community purchase.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">Designer</div><div>Colin Montgomerie</div></div>
                <div><div class="text-bone font-semibold mb-1">Holes</div><div>18 &middot; Par 72</div></div>
                <div><div class="text-bone font-semibold mb-1">Anchors</div><div>Emirates Hills precinct</div></div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- 6. WHY BUY WITH ZARIN -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Why buy with ZARIN">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why ZARIN</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">An Advisor Who Actually Walks the Fairway</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">Golf view listings have one of the highest rates of misrepresentation in Dubai real estate — "golf view" claims that turn out to be partial or future-blocked, community fees understated, and golf club membership terms miscommunicated. ZARIN advisors personally inspect every golf view property before sharing it. We walk the actual fairway outlook, verify the view corridor against masterplans, audit the latest community-fee statement, and confirm whether the title includes direct fairway frontage or partial view. If the asking price isn't justified by comparables, we tell you before you waste a viewing.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Every golf view listing physically inspected</div><div class="text-xs text-slate mt-1">We walk the fairway outlook, not just the villa.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">View corridor verified against masterplan</div><div class="text-xs text-slate mt-1">No future towers blocking your fairway view in 5 years.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Community fees &amp; golf club terms audited</div><div class="text-xs text-slate mt-1">Last 3 years audited, membership discounts confirmed.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Trilingual advisory: EN, AR, FA</div><div class="text-xs text-slate mt-1">Direct communication in your preferred language.</div></div></div>
          </div>
          <a href="/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Learn more about ZARIN">Learn More About ZARIN<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-900 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">240+</div><div class="text-sm font-bold text-bone mb-1">Golf View Listings</div><div class="text-xs text-slate">Inspected by advisors</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">2%</div><div class="text-sm font-bold text-bone mb-1">Buyer Commission</div><div class="text-xs text-slate">Standard, RERA-aligned</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">24hr</div><div class="text-sm font-bold text-bone mb-1">Shortlist Delivery</div><div class="text-xs text-slate">After consultation</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">20+</div><div class="text-sm font-bold text-bone mb-1">Years in Dubai</div><div class="text-xs text-slate">Founder since 2005</div></div>
        </div>
      </div>
      <div class="mt-16 pt-12 border-t border-white-line">
        <div class="text-center mb-8">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">Trust Badges</div>
          <h3 class="text-2xl font-bold text-bone">Why Clients Choose ZARIN</h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div><div class="text-sm font-bold text-bone">RERA Licensed</div><div class="text-xs text-slate mt-1">Regulated advisory</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">24hr Response</div><div class="text-xs text-slate mt-1">Shortlist within a day</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg></div><div class="text-sm font-bold text-bone">Trilingual EN/AR/FA</div><div class="text-xs text-slate mt-1">Direct advisor contact</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">No Obligation</div><div class="text-xs text-slate mt-1">First consultation free</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. FAQ -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Golf course properties FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Golf Properties FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Common Golf Property Questions</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Eight questions ZARIN advisors hear most often from golf course property buyers. If yours isn't covered, message us on WhatsApp for a direct answer — typically within an hour during business hours.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-850 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the price premium for golf course properties in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Golf course properties in Dubai typically trade at a 20-35% premium per square foot compared to equivalent non-golf properties in the same community. A 4-bedroom villa overlooking the Earth Course at Jumeirah Golf Estates sells at AED 1,800-2,400 per sqft, while the same villa on an interior plot trades at AED 1,400-1,800 per sqft. Emirates Hills golf-view villas command an even higher premium — AED 3,200-4,500 per sqft versus AED 2,400-3,000 for non-golf-view plots. The premium reflects the scarcity of fairway frontage, unobstructed green views, and the lifestyle cachet of golf community membership.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Which golf communities are best for property investment?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">The strongest investment cases are Emirates Hills for capital preservation, Dubai Hills Estate for balanced growth and yield, and Jumeirah Golf Estates for entry-level golf view ownership. Emirates Hills has appreciated 60-85% since 2020 with very low turnover, reflecting its status as Dubai's most established gated golf enclave. Dubai Hills Estate has seen 45-65% appreciation over the same period thanks to the new Dubai Hills Mall and Downtown Dubai proximity. Jumeirah Golf Estates offers the most accessible entry point from AED 4M for a golf view townhouse, with Earth Course frontage the most sought-after. ZARIN's advisory models each community's 5-year total return including rental, capital growth, and exit liquidity.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can non-golfers buy properties in golf communities?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes — most residents in Dubai's golf communities are not active golfers. The appeal extends well beyond the sport itself: golf communities offer manicured green outlooks, low-density master planning, strong security, controlled traffic, and a residential demographic of senior executives and family buyers. Property owners typically receive preferred golf club membership terms and discounted green fees, but membership is never mandatory. Many buyers cite the unobstructed fairway view and the absence of neighbouring towers as the primary draw, with golf itself a secondary benefit. ZARIN advisors help non-golfers evaluate the lifestyle, community fees, and view corridors of each golf community on its own merits.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Are golf course properties a good investment in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Golf course properties have been among Dubai's strongest-performing residential sub-segments since 2020. Capital appreciation of 50-85% has been recorded across Emirates Hills, Jumeirah Golf Estates, and Dubai Hills Estate, driven by scarcity of fairway frontage and strong international demand from golf-playing buyers in the UK, Europe, and South Asia. Rental yields run 4-5% gross for villas and 5-6% for townhouses, with golf view adding 15-25% to achievable rent. The investment case rests on the finite supply of golf community plots — Dubai has 9 championship courses and almost no new golf masterplans in advanced development. ZARIN provides a 5-year total return model for every golf view mandate.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What are the best golf clubs in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Dubai's six championship golf clubs each have distinct character. Emirates Golf Club hosts the annual Dubai Desert Classic on its Majlis Course, with the Faldo Course offering a floodlit 18-hole alternative. Dubai Hills Golf Club is a 71-par championship course designed by European Golf Design, set against the Burj Khalifa skyline. Jumeirah Golf Estates features two Greg Norman-designed courses — Earth (host of the DP World Tour Championship) and Fire. Arabian Ranches Golf Club offers an 18-hole desert-style course designed by Ian Baker-Finch. The Els Club at Dubai Sports City was designed by Ernie Els, and the Address Montgomerie is a Colin Montgomerie signature course. ZARIN advisors can arrange trial rounds and membership introductions.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Do golf community properties come with golf club membership?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Not automatically. Property ownership in a golf community does not include golf club membership, but most clubs offer preferred membership categories and discounted joining fees for residents. At Jumeirah Golf Estates, property owners receive a 30-40% discount on the standard AED 35,000-65,000 annual membership. Emirates Golf Club offers resident-tier memberships for residents of surrounding communities. The Els Club at Dubai Sports City and Address Montgomerie offer similar resident rates. Membership is always optional — many property owners never play golf. ZARIN provides a full breakdown of membership categories, fees, and residency-based discounts for each golf community before purchase.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the average price of a villa in Emirates Hills?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Emirates Hills villa prices range from AED 15 million for a 4-bedroom original-condition villa on a smaller interior plot to AED 200+ million for a golf view mansion on Sector E or Sector M. The median transaction in 2024-2025 was approximately AED 28 million for a 6-bedroom villa. Golf-view plots (those backing onto the Emirates Golf Club Majlis Course) command AED 3,200-4,500 per sqft, while interior plots trade at AED 2,400-3,000 per sqft. Plot sizes range from 8,000 sqft to over 60,000 sqft, so absolute prices vary widely. Emirates Hills is Dubai's most established gated golf enclave and the lowest-turnover trophy community in the city — typical holding periods exceed 12 years.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can foreigners buy freehold properties in Dubai golf communities?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes — all five major golf communities (Emirates Hills, Dubai Hills Estate, Jumeirah Golf Estates, Arabian Ranches, and Tilal Al Ghaf) are designated freehold areas where foreign nationals of any country can buy outright freehold title in their own name. There are no nationality restrictions and no requirement for a UAE residency visa. Title deeds are issued by Dubai Land Department and the property can be inherited, sold, or mortgaged like any other freehold asset. Emirates Hills and Jumeirah Golf Estates have been freehold since their original launches in 2003 and 2007 respectively, while Dubai Hills Estate and Tilal Al Ghaf are newer freehold masterplans. ZARIN handles the full transfer process including KYC, NOC, and DLD registration.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">Still have questions? <a href="/consultation" class="text-gold-400 font-semibold hover:underline">Book a free consultation</a> or <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">WhatsApp us</a>.</p></div>
    </div>
  </section>

  </main>

  ${enFooterEl.outerHTML}

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 right-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="WhatsApp us"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script type="module" src="/scripts/nav.js"></script>
  <script type="module" src="/scripts/i18n.js"></script>
</body>
</html>
`;

// ==========================================
// 2. ASSEMBLE PERSIAN GOLF COURSE HTML
// ==========================================
const faGolfHtml = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>املاک رو به زمین گلف در دبی | املاک زرین</title>
  <meta name="description" content="خرید ویلا و تاون‌هاوس با دید مستقیم زمین گلف در دبی — امارات هیلز، دبی هیلز، جمیرا گلف استیتس، عربین رنچز و تلال الغاف مشرف به فیروی‌های مسابقاتی. تایید شده توسط زرین.">
  <meta name="keywords" content="املاک زمین گلف دبی, ویلاهای امارات هیلز, خرید ویلا دبی هیلز, جمیرا گلف استیتس, عربین رنچز دبی, تلال الغاف, ویلا با دید زمین گلف دبی">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/fa/golf-course-properties-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/golf-course-properties-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/golf-course-properties-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/golf-course-properties-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="املاک رو به زمین گلف در دبی | املاک زرین">
  <meta property="og:description" content="ویلاها و تاون‌هاوس‌های مشرف به زمین‌های گلف مسابقاتی دبی — امارات هیلز، دبی هیلز، جمیرا گلف استیتس، عربین رنچز و تلال الغاف.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="املاک رو به زمین گلف در دبی">
  <meta property="og:url" content="https://zarinrealestate.com/fa/golf-course-properties-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="املاک رو به زمین گلف در دبی | املاک زرین">
  <meta name="twitter:description" content="ویلاها و تاون‌هاوس‌های مشرف به زمین‌های مسابقاتی گلف دبی تایید شده توسط زرین.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>

  <style type="text/tailwindcss">
    @theme {
      --color-ink-950:#050507;--color-ink-900:#0A0B0E;--color-ink-850:#0E1015;--color-ink-800:#111318;--color-ink-700:#181B22;--color-ink-600:#20242D;--color-ink-500:#2A2E37;
      --color-gold-100:#F5E9D4;--color-gold-300:#DFC49E;--color-gold-400:#C8AB83;--color-gold-500:#B89868;--color-gold-700:#8B7048;
      --color-gold-soft:rgba(200,171,131,0.08);--color-gold-tint:rgba(200,171,131,0.15);--color-gold-line:rgba(200,171,131,0.32);--color-gold-border:rgba(200,171,131,0.45);--color-gold-glow:rgba(200,171,131,0.20);
      --color-bone:#F8F9FA;--color-pearl:#E8EAED;--color-ash:#9FA6B2;--color-slate:#676E7D;
      --color-white-soft:rgba(255,255,255,0.04);--color-white-line:rgba(255,255,255,0.08);--color-white-tint:rgba(255,255,255,0.12);
      --color-glass:rgba(10,11,14,0.78);
      --color-success:#4ADE80;--color-warning:#FBBF24;--color-info:#60A5FA;--color-danger:#F87171;
      --font-sans:"Vazirmatn","Source Sans 3",-apple-system,sans-serif;
      --container-narrow:1040px;--container-default:1380px;--container-wide:1600px;
      --radius-xs:2px;--radius-sm:4px;--radius-md:8px;--radius-lg:12px;
      --shadow-subtle:0 4px 20px rgba(0,0,0,0.35);--shadow-monolith:0 24px 60px rgba(0,0,0,0.65);--shadow-gold:0 10px 30px rgba(200,171,131,0.12);
      --ease-editorial:cubic-bezier(0.16,1,0.3,1);
    }
  </style>

  <style>
    html{scroll-behavior:smooth}body{font-family:"Vazirmatn","Source Sans 3",-apple-system,sans-serif;background:#0A0B0E;color:#F8F9FA;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}
    ::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#0A0B0E}::-webkit-scrollbar-thumb{background:#C8AB83;border-radius:4px}
    ::selection{background:rgba(200,171,131,0.3);color:#F8F9FA}
    .glass{background:rgba(10,11,14,0.78);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
    .text-gold-gradient{background:linear-gradient(135deg,#DFC49E 0%,#C8AB83 50%,#A88D66 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
    .stat-number{font-variant-numeric:tabular-nums;letter-spacing:-.02em}
    .mobile-menu{transform:translateX(-100%);transition:transform .4s cubic-bezier(.16,1,.3,1)}.mobile-menu.open{transform:translateX(0)}
    .img-zoom{overflow:hidden}.img-zoom img{transition:transform .8s cubic-bezier(.16,1,.3,1)}.img-zoom:hover img{transform:scale(1.05)}
    .card-lift{transition:transform .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1)}.card-lift:hover{transform:translateY(-4px);box-shadow:0 24px 60px rgba(0,0,0,0.5)}
    details summary{list-style:none;cursor:pointer}details summary::-webkit-details-marker{display:none}details[open] .faq-icon{transform:rotate(45deg)}.faq-icon{transition:transform .3s cubic-bezier(.16,1,.3,1)}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    .animate-fade-in-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    .filter-chip{transition:all .2s}.filter-chip.active{background:#C8AB83;color:#0A0B0E;border-color:#C8AB83}
    .sticky-whatsapp{display:none}@media(max-width:1024px){.sticky-whatsapp{display:flex}}
  </style>
  <link rel="stylesheet" href="/styles/main.css">

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"صفحه اصلی","item":"https://zarinrealestate.com/fa/"},
    {"@type":"ListItem","position":2,"name":"املاک برگزیده","item":"https://zarinrealestate.com/fa/properties"},
    {"@type":"ListItem","position":3,"name":"رو به زمین گلف","item":"https://zarinrealestate.com/fa/golf-course-properties-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/fa/golf-course-properties-in-dubai#collectionpage",
    "name":"املاک رو به زمین گلف در دبی","url":"https://zarinrealestate.com/fa/golf-course-properties-in-dubai",
    "description":"ویلاها و تاون‌هاوس‌های مشرف به فیروی‌های مسابقاتی قهرمانی دبی — امارات هیلز، دبی هیلز، جمیرا گلف استیتس، عربین رنچز و تلال الغاف.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"ویلای ۷ خوابه دید گلف — سکتور E امارات هیلز","offers":{"@type":"Offer","price":"42000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"ویلای ۵ خوابه دید گلف — پارک هایتس دبی هیلز","offers":{"@type":"Offer","price":"18500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"تاون‌هاوس ۴ خوابه دید گلف — کورس ارت جمیرا گلف استیتس","offers":{"@type":"Offer","price":"9800000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"ویلای ۴ خوابه دید گلف — مجمع گلف عربین رنچز","offers":{"@type":"Offer","price":"7400000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"ویلای ۵ خوابه دید گلف — کلوپ اِلس تلال الغاف","offers":{"@type":"Offer","price":"14500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"عمارت ۶ خوابه دید گلف — سکتور M امارات هیلز","offers":{"@type":"Offer","price":"68500000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/fa/golf-course-properties-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"پرمیوم قیمت املاک رو به زمین گلف در دبی چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"املاک مشرف به زمین گلف در دبی معمولاً با ۲۰ تا ۳۵ درصد پرمیوم در هر فوت مربع نسبت به املاک مشابه غیر گلف در همان مجمع معامله می‌شوند. برای مثال، یک ویلای ۴ خوابه رو به زمین Earth در جمیرا گلف استیتس بین ۱,۸۰۰ تا ۲,۴۰۰ درهم به ازای هر فوت مربع به فروش می‌رسد، در حالی که همان ویلا در ردیف داخلی با ۱,۴۰۰ تا ۱,۸۰۰ درهم معامله می‌شود. در امارات هیلز این پرمیوم به ۳,۲۰۰ تا ۴,۵۰۰ درهم در برابر ۲,۴۰۰ تا ۳,۰۰۰ درهم می‌رسد. این اختلاف قیمت ناشی از کمیابی زمین‌های برِ فیروی، دید سبز بدون مانع و پرستیژ عضویت در مجامع ورزشی لوکس است."}},
      {"@type":"Question","name":"کدام مجامع مسکونی گلف برای سرمایه‌گذاری ملکی مناسب‌ترند؟","acceptedAnswer":{"@type":"Answer","text":"قوی‌ترین گزینه‌های سرمایه‌گذاری عبارتند از امارات هیلز برای حفظ قطعی ارزش سرمایه، دبی هیلز استیت برای رشد متوازن و بازدهی و جمیرا گلف استیتس برای ورود با مبالغ منطقی‌تر به املاک دید گلف. امارات هیلز از سال ۲۰۲۰ رشد ۶۰ تا ۸۵ درصدی ثبت کرده و کمترین نرخ جابجایی مالکیت را دارد. دبی هیلز با افتتاح دبی هیلز مال و نزدیکی به داون‌تاون رشد ۴۵ تا ۶۵ درصدی را تجربه کرده است. جمیرا گلف استیتس نیز با نقطه شروع حدود ۴ میلیون درهم برای تاون‌هاوس‌های دید گلف، نقدشوندگی بالایی دارد."}},
      {"@type":"Question","name":"آیا افراد غیرگلف‌باز هم می‌توانند در مجامع گلف ملک بخرند؟","acceptedAnswer":{"@type":"Answer","text":"بله — در واقع اکثریت ساکنان مجامع گلف دبی بازیکنان حرفه‌ای گلف نیستند. جذابیت این محله‌ها فراتر از خود ورزش است: چشم‌انداز سبز همیشگی و آراسته، تراکم ساختمانی بسیار پایین، نگهبانی ۲۴ ساعته، ترافیک کنترل‌شده و بافت جمعیتی متشکل از مدیران ارشد و خانواده‌ها. مالکان معمولاً شرایط ویژه و تخفیف‌های قابل‌توجهی برای عضویت کلوپ دریافت می‌کنند، اما عضویت هرگز اجباری نیست. نبود برج‌های مشرف و آرامش بصری مهم‌ترین انگیزه خریداران است."}},
      {"@type":"Question","name":"آیا املاک زمین گلف سرمایه‌گذاری مناسبی در دبی هستند؟","acceptedAnswer":{"@type":"Answer","text":"املاک زمین گلف از سال ۲۰۲۰ جزو پربازده‌ترین زیربخش‌های بازار مسکن دبی بوده‌اند و رشد سرمایه‌ای بین ۵۰ تا ۸۵ درصد را ثبت کرده‌اند که ناشی از کمیابی قطعات بر اصلی فیروی و تقاضای پرشور بین‌المللی خریداران اروپایی و بریتانیایی است. بازدهی ناخالص اجاره برای ویلاها ۴ تا ۵ درصد و برای تاون‌هاوس‌ها ۵ تا ۶ درصد است و دید گلف ۱۵ تا ۲۵ درصد اجاره‌بها را افزایش می‌دهد. دبی تنها ۹ زمین قهرمانی دارد و عرضه زمین‌های جدید تقریباً به صفر رسیده است."}},
      {"@type":"Question","name":"بهترین کلوپ‌های گلف دبی کدامند؟","acceptedAnswer":{"@type":"Answer","text":"شش کلوپ قهرمانی دبی هویت‌های متفاوتی دارند: کلوپ گلف امارات میزبان تورنمنت سالانه Dubai Desert Classic بر روی زمین Majlis است و زمین Faldo نیز امکان بازی شبانه زیر نورافکن را دارد. کلوپ دبی هیلز زمین ۷۱-پار طراحی اروپایی با پس‌زمینه برج خلیفه است. جمیرا گلف استیتس دو زمین طراحی گرگ نورمن (Earth و Fire) دارد. عربین رنچز زمین ۱۸ حفره بیابانی یان بیکر فینچ است و کلوپ اِلس توسط ارنی اِلس طراحی شده است. مشاوران زرین امکان هماهنگی بازی آزمایشی را برای مشتریان فراهم می‌سازند."}},
      {"@type":"Question","name":"آیا خرید ملک در مجامع گلف شامل عضویت کلوپ گلف می‌شود؟","acceptedAnswer":{"@type":"Answer","text":"خیر، به صورت خودکار شامل نمی‌شود. مالکیت ملک عضویت را به طور مستقیم به همراه ندارد، اما اکثر کلوپ‌ها تعرفه‌های ساکنان (Resident-Tier) و تخفیف‌های ۳۰ تا ۴۰ درصدی روی حق عضویت سالانه ۳۵,۰۰۰ تا ۶۵,۰۰۰ درهمی ارائه می‌دهند. عضویت همیشه اختیاری است و بسیاری از مالکان هرگز بازی نمی‌کنند. زرین جدول کامل دسته‌بندی عضویت و هزینه‌های شارژ را پیش از خرید در اختیار شما می‌گذارد."}},
      {"@type":"Question","name":"میانگین قیمت ویلا در امارات هیلز دبی چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"قیمت ویلاهای امارات هیلز از حدود ۱۵ میلیون درهم برای یک ویلای ۴ خوابه در قطعات داخلی کوچکتر آغاز شده و تا بیش از ۲۰۰ میلیون درهم برای عمارات با دید مستقیم فیروی در سکتور E یا سکتور M ادامه دارد. میانه معاملات در سال‌های ۲۰۲۴-۲۰۲۵ حدود ۲۸ میلیون درهم برای ویلاهای ۶ خوابه بوده است. زمین‌های رو به فیروی Majlis با نرخ ۳,۲۰۰ تا ۴,۵۰۰ درهم در هر فوت مربع معامله می‌شوند و متراژ زمین‌ها از ۸,۰۰۰ تا بیش از ۶۰,۰۰۰ فوت مربع متغیر است."}},
      {"@type":"Question","name":"آیا اتباع خارجی می‌توانند در مجامع گلف دبی ملک فری‌هولد بخرند؟","acceptedAnswer":{"@type":"Answer","text":"بله — هر پنج مجمع اصلی گلف (امارات هیلز، دبی هیلز، جمیرا گلف استیتس، عربین رنچز و تلال الغاف) جزو مناطق مجاز فری‌هولد هستند که در آنها اتباع خارجی با هر تابعیتی می‌توانند مالکیت صددرصدی سند قطعی به نام خود ثبت نمایند. سند مالکیت رسمی توسط اداره اراضی دبی (DLD) صادر شده و قابلیت انتقال، توارث یا رهن بانکی را دارد. زرین کلیه تشریفات انتقال سند، تسویه NOC و ثبت DLD را به صورت جامع هدایت می‌کند."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/fa/golf-course-properties-in-dubai#webpage",
    "url":"https://zarinrealestate.com/fa/golf-course-properties-in-dubai","name":"املاک رو به زمین گلف در دبی | املاک زرین",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "speakable":{"@type":"SpeakableSpecification","cssSelector":["#hero-headline","#tldr-summary"]}}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">پرش به محتوای اصلی</a>

  ${faHeaderClone.outerHTML}

  ${faMobileClone.outerHTML}

  <main id="main">

  <!-- 1. HERO + TL;DR -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="بخش معرفی املاک رو به زمین گلف">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">برای فروش &middot; رو به زمین گلف</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-bone mb-6">املاک رو به<br><span class="text-gold-gradient">زمین گلف در دبی</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">ویلاها و تاون‌هوس‌های مشرف به فیروی‌های مسابقاتی قهرمانی دبی — امارات هیلز، دبی هیلز استیت، جمیرا گلف استیتس، عربین رنچز و تلال الغاف. کلیه فایل‌های دارای دید گلف پیش از معرفی، توسط مشاوران ارشد زرین بازرسی میدانی می‌شوند — ما زاویه دید واقعی به چمن، صورت‌حساب‌های شارژ و شرایط عضویت در کلوپ گلف را راستی‌آزمایی می‌کنیم. قیمت‌های واقعی، بدون فایل‌های نامعتبر.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#featured-listings" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="مشاهده املاک رو به زمین گلف"><svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>مشاهده املاک</a>
          <a href="/fa/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="گفتگو با مشاور تخصصی املاک گلف">گفتگو با مشاور تخصصی</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۲۴۰</div><div class="text-xs text-slate uppercase tracking-wider mt-1">فایل در شهرک‌های گلف</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۹.۲ م درهم</div><div class="text-xs text-slate uppercase tracking-wider mt-1">میانگین قیمت دید گلف</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۹</div><div class="text-xs text-slate uppercase tracking-wider mt-1">زمین قهرمانی بین‌المللی</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۲۰-۳۵٪</div><div class="text-xs text-slate uppercase tracking-wider mt-1">پرمیوم رشد سرمایه‌ای</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. GOLF COMMUNITIES SHOWCASE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="معرفی مجامع مسکونی گلف دبی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">مجامع مسکونی گلف</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">پنج مرز زمردین فیروی‌ها</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">بازار املاک گلف دبی در پنج مجمع برجسته متمرکز است که هر یک پیرامون یک زمین مسابقاتی قهرمانی با طراحی معماران بین‌المللی شکل گرفته‌اند. برخی ویلاها دارای برِ مستقیم به فیروی چمن روی سند مالکیت هستند؛ در حالی که برخی دیگر چشم‌انداز مرتفع پانوراما را از تراس ارائه می‌دهند. مشاوران زرین در تمامی این مجامع حضور داشته و راهنمای دقیق زاویه دید، جهات زمین و معاملات اخیر هستند.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Emirates Hills -->
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک گلف امارات هیلز">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="ویلای دید گلف در امارات هیلز مشرف به زمین مجلس" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">زمین مسابقاتی مجلس</div>
          <div class="absolute bottom-6 right-6 left-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">امارات هیلز</h3>
            <p class="text-xs text-ash mb-2">کلوپ گلف امارات &middot; طراحی کارل لیتن (۱۹۸۸). بااصالت‌ترین محله ویلایی گیتد دبی، فری‌هولد از ۲۰۰۳.</p>
            <p class="text-[11px] text-slate mb-3">طراح زمین: کارل لیتن &middot; ۱۸ حفره &middot; پار ۷۲</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱۵ تا ۲۰۰ م درهم</span>
              <span class="text-ash">+۸۵ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- Dubai Hills Estate -->
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک گلف دبی هیلز استیت">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="ویلای دید گلف در دبی هیلز استیت مشرف به زمین چمپیونشیپ" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">زمین قهرمانی چمپیونشیپ</div>
          <div class="absolute bottom-6 right-6 left-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">دبی هیلز استیت</h3>
            <p class="text-xs text-ash mb-2">کلوپ گلف دبی هیلز &middot; طراحی European Golf Design. زمین ۱۸ حفره قهرمانی با چشم‌انداز افق برج خلیفه.</p>
            <p class="text-[11px] text-slate mb-3">طراح زمین: European Golf Design &middot; ۱۸ حفره &middot; پار ۷۱</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۴ تا ۹۰ م درهم</span>
              <span class="text-ash">+۱۲۰ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- Jumeirah Golf Estates -->
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک جمیرا گلف استیتس">
          <img src="https://images.unsplash.com/photo-1535131749006-b7f5839301ea?auto=format&fit=crop&w=800&q=80" alt="ویلای دید فیروی در جمیرا گلف استیتس" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">زمین‌های Earth و Fire</div>
          <div class="absolute bottom-6 right-6 left-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">جمیرا گلف استیتس</h3>
            <p class="text-xs text-ash mb-2">دو زمین اختصاصی با امضای گرگ نورمن &middot; میزبان تورنمنت قهرمانی جهان DP World Tour. فری‌هولد از ۲۰۰۷.</p>
            <p class="text-[11px] text-slate mb-3">طراح زمین: گرگ نورمن &middot; ۳۶ حفره &middot; پار ۷۲</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۴ تا ۵۵ م درهم</span>
              <span class="text-ash">+۹۵ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- Arabian Ranches -->
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک گلف عربین رنچز">
          <img src="https://images.unsplash.com/photo-1593111774240-d536f83f9e25?auto=format&fit=crop&w=800&q=80" alt="ویلای دید گلف در عربین رنچز مشرف به زمین بیابانی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">زمین بیابانی</div>
          <div class="absolute bottom-6 right-6 left-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">عربین رنچز</h3>
            <p class="text-xs text-ash mb-2">کلوپ گلف عربین رنچز &middot; طراحی یان بیکر فینچ. زمین ۱۸ حفره به سبک دیزرت با سابقه تأسیس از ۲۰۰۴.</p>
            <p class="text-[11px] text-slate mb-3">طراح زمین: یان بیکر فینچ &middot; ۱۸ حفره &middot; پار ۷۲</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۳.۵ تا ۲۵ م درهم</span>
              <span class="text-ash">+۷۰ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- Tilal Al Ghaf -->
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک تلال الغاف">
          <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="ویلای مدرن تلال الغاف مشرف به فیروی کلوپ اِلس" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">کلوپ اِلس (Els Club)</div>
          <div class="absolute bottom-6 right-6 left-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">تلال الغاف</h3>
            <p class="text-xs text-ash mb-2">کلوپ اِلس در شهرک ورزشی دبی &middot; امضای ارنی اِلس. مسترپلان مدرن مجید الفطیم و نوپاترین مجمع گلف دبی.</p>
            <p class="text-[11px] text-slate mb-3">طراح زمین: ارنی اِلس &middot; ۱۸ حفره &middot; پار ۷۲</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۴.۵ تا ۴۵ م درهم</span>
              <span class="text-ash">+۵۵ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- Membership Advisory Card -->
        <div class="group relative aspect-[16/10] rounded-sm overflow-hidden border border-gold-line bg-ink-900 p-8 flex flex-col justify-between text-right" aria-label="مشاوره عضویت کلوپ گلف">
          <div>
            <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-3">مشاوره عضویت</div>
            <h3 class="text-2xl font-bold text-bone mb-3">عضویت در کلوپ گلف؟</h3>
            <p class="text-xs text-ash mb-4 leading-relaxed">مالکیت ملک به خودی خود شامل عضویت گلف نمی‌شود، اما نرخ‌های ویژه ساکنان در کلیه کلوپ‌های دبی برقرار است. زرین جزئیات کامل رده‌های عضویت و تخفیف‌ها را پیش از خرید ارائه می‌دهد.</p>
          </div>
          <a href="/fa/consultation" class="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="درخواست مشاوره عضویت کلوپ">درخواست مشاوره<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>

      </div>
      <div class="text-center mt-10"><a href="/fa/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="مشاهده تمام مناطق دبی">مشاهده تمامی ۴۵+ منطقه دبی<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 3. FEATURED GOLF VIEW LISTINGS -->
  <section id="featured-listings" class="bg-ink-900 py-16 md:py-20" aria-label="فایل‌های برگزیده دید گلف">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-right">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">فایل‌های منتخب</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">قراردادهای انحصاری دید گلف</h2>
        </div>
        <p class="text-sm text-ash max-w-md">گزیده‌ای از فایل‌های اختصاصی زرین با دید گلف. هر ملک توسط مشاور بازرسی فیزیکی شده است — شامل راستی‌آزمایی خط دید، کریدور عدم ساخت در آینده و ممیزی شارژ سالانه. جهت بررسی کاتالوگ محرمانه، درخواست جستجو ثبت کنید.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Listing 1: 7BR Villa Emirates Hills -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلای ۷ خوابه سکتور E امارات هیلز">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="عمارت ۷ خوابه دید گلف در سکتور E امارات هیلز مشرف به زمین مجلس" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل گلف</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۴۲ م درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">امارات هیلز</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلای ۷ خوابه &middot; سکتور E</h3>
            <div class="text-sm text-ash mb-4">۱۲,۴۰۰ فوت² &middot; بر مستقیم فیروی Majlis</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۷</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۹</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۳,۳۸۷ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 5BR Villa Dubai Hills Estate -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلای ۵ خوابه دبی هیلز استیت">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="ویلای ۵ خوابه دید گلف در دبی هیلز استیت مشرف به زمین چمپیونشیپ" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل گلف</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۸.۵ م درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">دبی هیلز</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلای ۵ خوابه &middot; پارک هایتس</h3>
            <div class="text-sm text-ash mb-4">۶,۸۰۰ فوت² &middot; بر مستقیم فیروی چمپیونشیپ</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۵</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۶</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۲,۷۲۰ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 4BR Townhouse Jumeirah Golf Estates -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده تاون‌هاوس ۴ خوابه جمیرا گلف استیتس">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس ۴ خوابه دید گلف در جمیرا گلف استیتس مشرف به زمین Earth" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل گلف</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۹.۸ م درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تاون‌هاوس</div><div class="text-xs text-slate">JGE</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">تاون‌هاوس ۴ خوابه &middot; کورس Earth</h3>
            <div class="text-sm text-ash mb-4">۴,۲۰۰ فوت² &middot; دید فیروی گرگ نورمن</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۲,۳۳۳ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 4BR Villa Arabian Ranches -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلای ۴ خوابه عربین رنچز">
            <img src="https://images.unsplash.com/photo-1593111774240-d536f83f9e25?auto=format&fit=crop&w=800&q=80" alt="ویلای ۴ خوابه دید گلف در عربین رنچز مشرف به زمین بیابانی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل گلف</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۷.۴ م درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">عربین رنچز</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلای ۴ خوابه &middot; آلما ۲</h3>
            <div class="text-sm text-ash mb-4">۳,۶۵۰ فوت² &middot; فیروی یان بیکر فینچ</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۲,۰۲۷ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 5BR Villa Tilal Al Ghaf -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلای ۵ خوابه تلال الغاف">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="ویلای ۵ خوابه دید گلف در تلال الغاف مشرف به فیروی کلوپ اِلس" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل گلف</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۴.۵ م درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">تلال الغاف</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلای ۵ خوابه &middot; برِ کلوپ اِلس</h3>
            <div class="text-sm text-ash mb-4">۵,۸۰۰ فوت² &middot; کورس اختصاصی ارنی اِلس</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۵</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۶</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۲,۵۰۰ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 6BR Mansion Emirates Hills Sector M -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده عمارت ۶ خوابه سکتور M امارات هیلز">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="عمارت ۶ خوابه دید گلف در سکتور M امارات هیلز مشرف به فیروی قهرمانی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل گلف</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۶۸.۵ م درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">عمارت تراز اول</div><div class="text-xs text-slate">امارات هیلز</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">عمارت ۶ خوابه &middot; سکتور M</h3>
            <div class="text-sm text-ash mb-4">۲۲,۸۰۰ فوت² &middot; ۳۰ متر برِ مستقیم فیروی</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۶</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۸</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۳,۰۰۴ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">این مجموعه نمونه‌ای گزیده از موجودی ماست. مشاوران زرین به بیش از ۲۴۰ فایل فعال دید گلف در پنج مجمع برتر دبی دسترسی دارند — از جمله پرونده‌های انحصاری خارج از بازار (Off-Market). بودجه و ترجیحات خود را بفرمایید تا فهرست سفارشی ظرف ۲۴ ساعت برای شما آماده شود.</p>
        <a href="/fa/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="درخواست جستجوی اختصاصی ویلای دید گلف">درخواست جستجوی اختصاصی<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. WHY GOLF PROPERTIES -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="دلایل انتخاب املاک گلف">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">چرا املاک گلف</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">منطق اقتصادی و سرمایه‌گذاری املاک زمین گلف</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">املاک زمین گلف دبی یک کلاس دارایی متناهی و نامتقارن است. تنها ۵ درصد از کل عرضه مسکونی شهر در داخل یک مجمع گلف قهرمانی قرار دارد و پس از تلال الغاف تقریباً هیچ زمین گلف جدیدی به بازار عرضه نشده است. این کمیابی در ترکیب با سبک زندگی ممتاز و رشد مداوم، املاک دید گلف را به یکی از قوی‌ترین زیرمجموعه‌های بازار مسکن دبی بدل کرده است.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل ۰۱</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">کمیابی مطلق</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">دبی ۹ زمین گلف قهرمانی دارد که تنها ۵ مورد از آنها دارای مجامع مسکونی فری‌هولد در حریم خود هستند. امارات هیلز، دبی هیلز، جمیرا گلف استیتس، عربین رنچز و تلال الغاف کل این عرضه محدود را تشکیل می‌دهند. زمین‌های با دید مستقیم فیروی ذاتاً متناهی و تجدیدناپذیر هستند.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">۵٪ کل عرضه مسکونی دبی</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل ۰۲</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">سبک زندگی برتر</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">زندگی در شهرک گلف در دبی نمایشی نیست؛ یعنی بیدار شدن با چشم‌انداز باز به چمنزارهای آراسته، تراکم ساختمانی بسیار کم، گیت‌های حراست پیشرفته و ترافیک کنترل‌شده. این محله‌ها ایده‌آل‌ترین بافت خانوادگی و آرامش را در دبی مهیا می‌سازند.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">چشم‌انداز سبز چهارفصل</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل ۰۳</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">رشد ارزش سرمایه‌ای</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">ویلاهای دید گلف امارات هیلز از سال ۲۰۲۰ رشد ۶۰ تا ۸۵ درصدی، دبی هیلز ۴۵ تا ۶۵ درصدی و تاون‌هاوس‌های جمیرا گلف استیتس ۵۰ تا ۷۰ درصدی را تجربه کرده‌اند که رشدی معادل ۱.۵ تا ۲.۵ برابر نرخ عمومی بازار مسکن دبی است.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+۶۰-۸۵٪ رشد ارزش از ۲۰۲۰</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل ۰۴</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">پرمیوم نرخ اجاره</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">املاک با دید گلف ۱۵ تا ۲۵ درصد نرخ اجاره بالاتری نسبت به املاک غیرگلف همان شهرک دریافت می‌کنند. برای مثال، تاون‌هاوس ۴ خوابه روی چمن Earth با اجاره سالانه ۳۸۰,۰۰۰ درهم در برابر ۲۹۰,۰۰۰ درهم قطعات داخلی معامله می‌گردد.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+۱۵-۲۵٪ اجاره‌بهای بالاتر</div>
        </article>

      </div>
    </div>
  </section>

  <!-- 5. DUBAI'S GOLF COURSES -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="زمین‌های گلف مسابقاتی دبی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">زمین‌های گلف دبی</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">شش فیروی مسابقاتی قهرمانی دبی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">دبی دارای یکی از متمرکزترین اکوسیستم‌های ورزش گلف جهان است — ۹ زمین مسابقاتی ۱۸ حفره در فاصله حداکثر ۳۰ دقیقه‌ای از مرکز شهر. شش مورد از این زمین‌ها در قلب مجامع مسکونی فری‌هولد واقع شده و نبض بازار املاک اطراف را شکل می‌دهند.</p>
      </div>
      <div class="space-y-6">

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all text-right">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">زمین ۰۱</div>
              <h3 class="text-2xl font-bold text-bone mb-2">کلوپ گلف امارات</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">زمین‌های Majlis و Faldo</p>
              <p class="text-xs text-slate">تأسیس ۱۹۸۸ &middot; کهن‌ترین زمین ۱۸ حفره دبی</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">کلوپ گلف امارات نماد اصالت گلف در دبی است که در سال ۱۹۸۸ با زمین مجلس به طراحی کارل لیتن افتتاح شد. این زمین میزبان سالانه مسابقات دبی دزرت کلاسیک است. زمین فالدو نیز در سال ۱۹۹۶ برای بازی شبانه با نورافکن افزوده شد. ویلاهای برِ فیروی مجلس در امارات هیلز بالاترین پرمیوم قیمت را در دبی به خود اختصاص داده‌اند.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">طراح</div><div>کارل لیتن</div></div>
                <div><div class="text-bone font-semibold mb-1">حفره‌ها</div><div>۳۶ حفره (۱۸ مجلس + ۱۸ فالدو)</div></div>
                <div><div class="text-bone font-semibold mb-1">محله مسکونی</div><div>امارات هیلز</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all text-right">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">زمین ۰۲</div>
              <h3 class="text-2xl font-bold text-bone mb-2">کلوپ گلف دبی هیلز</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">زمین مسابقاتی قهرمانی</p>
              <p class="text-xs text-slate">تأسیس ۲۰۱۹ &middot; مسترپلان شرکت اعمار</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">کلوپ گلف دبی هیلز در سال ۲۰۱۹ در قلب مسترپلان مدرن دبی هیلز توسط European Golf Design گشایش یافت. این زمین ۷۱-پار مسابقاتی دارای چشم‌انداز مستقیم به خط افق آسمان‌خراش‌های داون‌تاون و برج خلیفه است. ویلاهای فیروی پارک هایتس و سدرا بالاترین رشد ارزش سرمایه‌ای را تجربه کرده‌اند.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">طراح</div><div>European Golf Design</div></div>
                <div><div class="text-bone font-semibold mb-1">حفره‌ها</div><div>۱۸ حفره &middot; پار ۷۱</div></div>
                <div><div class="text-bone font-semibold mb-1">محله مسکونی</div><div>دبی هیلز استیت</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all text-right">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">زمین ۰۳</div>
              <h3 class="text-2xl font-bold text-bone mb-2">جمیرا گلف استیتس</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">زمین‌های Earth و Fire</p>
              <p class="text-xs text-slate">تأسیس ۲۰۰۷ &middot; امضای گرگ نورمن</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">جمیرا گلف استیتس دارای دو زمین اختصاصی مسابقاتی قهرمانی است — زمین Earth میزبان فینال سالانه مسابقات جهانی DP World Tour از سال ۲۰۰۹ است و زمین Fire فضایی آرام‌تر برای هندیکپ‌های مختلف ارائه می‌دهد. تاون‌هاوس‌های Earth از حدود ۴ میلیون درهم در دسترس متقاضیان قرار دارند.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">طراح</div><div>گرگ نورمن</div></div>
                <div><div class="text-bone font-semibold mb-1">حفره‌ها</div><div>۳۶ حفره (۱۸ Earth + ۱۸ Fire)</div></div>
                <div><div class="text-bone font-semibold mb-1">محله مسکونی</div><div>جمیرا گلف استیتس</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all text-right">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">زمین ۰۴</div>
              <h3 class="text-2xl font-bold text-bone mb-2">کلوپ گلف عربین رنچز</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">زمین گلف به سبک بیابانی</p>
              <p class="text-xs text-slate">تأسیس ۲۰۰۴ &middot; طراحی یان بیکر فینچ</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">کلوپ گلف عربین رنچز در سال ۲۰۰۴ به عنوان یکی از نخستین زمین‌های سبک بیابانی دبی به همراه محوطه‌های ماسه‌ای چشم‌نواز آغاز به کار کرد. ویلاهای فیروی محله‌های آلما، میرادور و سهیل با پرمیوم ۱۵ تا ۲۰ درصدی نسبت به قطعات داخلی معامله می‌شوند و کلوپ دارای آکادمی گلف دایجست است.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">طراح</div><div>یان بیکر فینچ</div></div>
                <div><div class="text-bone font-semibold mb-1">حفره‌ها</div><div>۱۸ حفره &middot; پار ۷۲</div></div>
                <div><div class="text-bone font-semibold mb-1">محله مسکونی</div><div>عربین رنچز</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all text-right">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">زمین ۰۵</div>
              <h3 class="text-2xl font-bold text-bone mb-2">کلوپ اِلس (The Els Club)</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">امضای اختصاصی ارنی اِلس</p>
              <p class="text-xs text-slate">تأسیس ۲۰۰۸ &middot; همجوار تلال الغاف</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">کلوپ اِلس در شهرک ورزشی دبی در سال ۲۰۰۸ به عنوان نخستین زمین با امضای ارنی اِلس در خاورمیانه احداث شد. این زمین مسابقاتی قهرمانی با ۷,۵۳۸ یارد، پیوند مستقیمی با مسترپلان مدرن تلال الغاف شرکت مجید الفطیم برقرار کرده که ویلاهای لوکس آن با قیمت پایه ۴.۵ میلیون درهم عرضه می‌شوند.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">طراح</div><div>ارنی اِلس</div></div>
                <div><div class="text-bone font-semibold mb-1">حفره‌ها</div><div>۱۸ حفره &middot; پار ۷۲</div></div>
                <div><div class="text-bone font-semibold mb-1">محله مسکونی</div><div>تلال الغاف / اسپورتس سیتی</div></div>
              </div>
            </div>
          </div>
        </article>

        <article class="bg-ink-850 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all text-right">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-1">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">زمین ۰۶</div>
              <h3 class="text-2xl font-bold text-bone mb-2">د آدرس مونتگومری</h3>
              <p class="text-sm text-gold-400 font-semibold mb-2">امضای کالین مونتگومری</p>
              <p class="text-xs text-slate">تأسیس ۲۰۰۲ &middot; در حریم امارات هیلز</p>
            </div>
            <div class="lg:col-span-2">
              <p class="text-sm text-ash leading-relaxed mb-4">زمین Address Montgomerie Dubai در سال ۲۰۰۲ با امضای کالین مونتگومری در محدوده امارات هیلز گشایش یافت. این زمین ۱۸ حفره پار-۷۲ به دلیل تپه‌ماهورهای سرسبز و دید به برج العرب شهرت دارد و گزینه‌ای ایده‌آل و متمم برای ساکنان عمارات امارات هیلز محسوب می‌شود.</p>
              <div class="grid grid-cols-3 gap-4 text-xs text-slate border-t border-white-line pt-4">
                <div><div class="text-bone font-semibold mb-1">طراح</div><div>کالین مونتگومری</div></div>
                <div><div class="text-bone font-semibold mb-1">حفره‌ها</div><div>۱۸ حفره &middot; پار ۷۲</div></div>
                <div><div class="text-bone font-semibold mb-1">محله مسکونی</div><div>حریم امارات هیلز</div></div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- 6. WHY BUY WITH ZARIN -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="چرا خرید با زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="text-right">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">چرا زرین</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">مشاوری که شخصاً روی فیروی قدم می‌زند</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">املاک دید گلف دارای بالاترین نرخ اطلاعات ناصحیح در بازار مسکن دبی هستند — ادعای دید کامل که در عمل نیمه‌مسدود است یا برج‌های آینده دید آن را مسدود می‌کنند، برآورد کمتر از واقع هزینه‌های شارژ و عدم شفافیت در شرایط عضویت کلوپ. مشاوران زرین تک‌تک املاک دید گلف را پیش از معرفی شخصاً بازرسی می‌کنند؛ ما خط دید واقعی به زمین، استعلام حریم ساخت‌وسازهای آینده و صورت‌حساب‌های شارژ ۳ سال اخیر را کنترل می‌کنیم.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">بازرسی فیزیکی و دقیق تک‌تک فایل‌های دید گلف</div><div class="text-xs text-slate mt-1">بررسی دید واقعی از بالکن و محوطه، نه فقط فضای داخلی ویلا.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">راستی‌آزمایی کریدور دید در مسترپلان توسعه</div><div class="text-xs text-slate mt-1">اطمینان از عدم ساخت برج یا بناهای مسدودکننده در آینده.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">ممیزی هزینه‌های شارژ و ضوابط عضویت کلوپ</div><div class="text-xs text-slate mt-1">بررسی حسابرسی ۳ سال گذشته و تایید تخفیف‌های ویژه ساکنان.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه مستقیم: انگلیسی، عربی، فارسی</div><div class="text-xs text-slate mt-1">ارتباط مستقیم با مشاور ارشد بدون واسطه.</div></div></div>
          </div>
          <a href="/fa/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="آشنایی با اصالت و پیشینه زرین">درباره پیشینه و اصالت زرین بیشتر بدانید<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-900 border border-gold-line rounded-sm p-6 bg-gold-soft text-right"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۲۴۰</div><div class="text-sm font-bold text-bone mb-1">فایل دید گلف</div><div class="text-xs text-slate">کارشناسی و ممیزی شده</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6 text-right"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲٪</div><div class="text-sm font-bold text-bone mb-1">کمیسیون خریدار</div><div class="text-xs text-slate">استاندارد قانونی RERA</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6 text-right"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲۴ ساعت</div><div class="text-sm font-bold text-bone mb-1">ارائه لیست گزیده</div><div class="text-xs text-slate">پس از جلسه مشاوره</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6 text-right"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۲۰ سال</div><div class="text-sm font-bold text-bone mb-1">تجربه در دبی</div><div class="text-xs text-slate">سابقه مؤسس از ۲۰۰۵</div></div>
        </div>
      </div>
      <div class="mt-16 pt-12 border-t border-white-line">
        <div class="text-center mb-8">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">نشان‌های اعتماد و اعتبار</div>
          <h3 class="text-2xl font-bold text-bone">چرا مشتریان زرین را برمی‌گزینند</h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div><div class="text-sm font-bold text-bone">لایسنس رسمی RERA</div><div class="text-xs text-slate mt-1">مشاوره قانونی تحت نظارت</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">پاسخگویی ۲۴ ساعته</div><div class="text-xs text-slate mt-1">تهیه فهرست در یک روز</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg></div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه</div><div class="text-xs text-slate mt-1">انگلیسی، فارسی، عربی</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">بدون تعهد اجباری</div><div class="text-xs text-slate mt-1">جلسه اول کاملاً رایگان</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. FAQ -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="سوالات متداول املاک رو به زمین گلف">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پرسش‌های متداول</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">سوالات متداول خریداران املاک زمین گلف</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">هشت پرسشی که خریداران پیش از انتخاب ویلای دید گلف بیش از همه مطرح می‌کنند. در صورت تمایل به کسب اطلاعات تکمیلی، از طریق واتس‌اپ یا فرم مشاوره با ما در ارتباط باشید.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-850 border border-white-line rounded-sm text-right" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">پرمیوم قیمت املاک رو به زمین گلف در دبی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">املاک مشرف به زمین گلف در دبی معمولاً با ۲۰ تا ۳۵ درصد پرمیوم در هر فوت مربع نسبت به املاک مشابه غیر گلف در همان مجمع معامله می‌شوند. برای مثال، یک ویلای ۴ خوابه رو به زمین Earth در جمیرا گلف استیتس بین ۱,۸۰۰ تا ۲,۴۰۰ درهم به ازای هر فوت مربع به فروش می‌رسد، در حالی که همان ویلا در ردیف داخلی با ۱,۴۰۰ تا ۱,۸۰۰ درهم معامله می‌شود. در امارات هیلز این پرمیوم به ۳,۲۰۰ تا ۴,۵۰۰ درهم در برابر ۲,۴۰۰ تا ۳,۰۰۰ درهم می‌رسد. این اختلاف قیمت ناشی از کمیابی زمین‌های برِ فیروی، دید سبز بدون مانع و پرستیژ عضویت در مجامع ورزشی لوکس است.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">کدام مجامع مسکونی گلف برای سرمایه‌گذاری ملکی مناسب‌ترند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">قوی‌ترین گزینه‌های سرمایه‌گذاری عبارتند از امارات هیلز برای حفظ قطعی ارزش سرمایه، دبی هیلز استیت برای رشد متوازن و بازدهی و جمیرا گلف استیتس برای ورود با مبالغ منطقی‌تر به املاک دید گلف. امارات هیلز از سال ۲۰۲۰ رشد ۶۰ تا ۸۵ درصدی ثبت کرده و کمترین نرخ جابجایی مالکیت را دارد. دبی هیلز با افتتاح دبی هیلز مال و نزدیکی به داون‌تاون رشد ۴۵ تا ۶۵ درصدی را تجربه کرده است. جمیرا گلف استیتس نیز با نقطه شروع حدود ۴ میلیون درهم برای تاون‌هاوس‌های دید گلف، نقدشوندگی بالایی دارد.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا افراد غیرگلف‌باز هم می‌توانند در مجامع گلف ملک بخرند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله — در واقع اکثریت ساکنان مجامع گلف دبی بازیکنان حرفه‌ای گلف نیستند. جذابیت این محله‌ها فراتر از خود ورزش است: چشم‌انداز سبز همیشگی و آراسته، تراکم ساختمانی بسیار پایین، نگهبانی ۲۴ ساعته، ترافیک کنترل‌شده و بافت جمعیتی متشکل از مدیران ارشد و خانواده‌ها. مالکان معمولاً شرایط ویژه و تخفیف‌های قابل‌توجهی برای عضویت کلوپ دریافت می‌کنند، اما عضویت هرگز اجباری نیست. نبود برج‌های مشرف و آرامش بصری مهم‌ترین انگیزه خریداران است.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا املاک زمین گلف سرمایه‌گذاری مناسبی در دبی هستند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">املاک زمین گلف از سال ۲۰۲۰ جزو پربازده‌ترین زیربخش‌های بازار مسکن دبی بوده‌اند و رشد سرمایه‌ای بین ۵۰ تا ۸۵ درصد را ثبت کرده‌اند که ناشی از کمیابی قطعات بر اصلی فیروی و تقاضای پرشور بین‌المللی خریداران اروپایی و بریتانیایی است. بازدهی ناخالص اجاره برای ویلاها ۴ تا ۵ درصد و برای تاون‌هاوس‌ها ۵ تا ۶ درصد است و دید گلف ۱۵ تا ۲۵ درصد اجاره‌بها را افزایش می‌دهد. دبی تنها ۹ زمین قهرمانی دارد و عرضه زمین‌های جدید تقریباً به صفر رسیده است.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">بهترین کلوپ‌های گلف دبی کدامند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">شش کلوپ قهرمانی دبی هویت‌های متفاوتی دارند: کلوپ گلف امارات میزبان تورنمنت سالانه Dubai Desert Classic بر روی زمین Majlis است و زمین Faldo نیز امکان بازی شبانه زیر نورافکن را دارد. کلوپ دبی هیلز زمین ۷۱-پار طراحی اروپایی با پس‌زمینه برج خلیفه است. جمیرا گلف استیتس دو زمین طراحی گرگ نورمن (Earth و Fire) دارد. عربین رنچز زمین ۱۸ حفره بیابانی یان بیکر فینچ است و کلوپ اِلس توسط ارنی اِلس طراحی شده است. مشاوران زرین امکان هماهنگی بازی آزمایشی را برای مشتریان فراهم می‌سازند.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا خرید ملک در مجامع گلف شامل عضویت کلوپ گلف می‌شود؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">خیر، به صورت خودکار شامل نمی‌شود. مالکیت ملک عضویت را به طور مستقیم به همراه ندارد، اما اکثر کلوپ‌ها تعرفه‌های ساکنان (Resident-Tier) و تخفیف‌های ۳۰ تا ۴۰ درصدی روی حق عضویت سالانه ۳۵,۰۰۰ تا ۶۵,۰۰۰ درهمی ارائه می‌دهند. عضویت همیشه اختیاری است و بسیاری از مالکان هرگز بازی نمی‌کنند. زرین جدول کامل دسته‌بندی عضویت و هزینه‌های شارژ را پیش از خرید در اختیار شما می‌گذارد.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">میانگین قیمت ویلا در امارات هیلز دبی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">قیمت ویلاهای امارات هیلز از حدود ۱۵ میلیون درهم برای یک ویلای ۴ خوابه در قطعات داخلی کوچکتر آغاز شده و تا بیش از ۲۰۰ میلیون درهم برای عمارات با دید مستقیم فیروی در سکتور E یا سکتور M ادامه دارد. میانه معاملات در سال‌های ۲۰۲۴-۲۰۲۵ حدود ۲۸ میلیون درهم برای ویلاهای ۶ خوابه بوده است. زمین‌های رو به فیروی Majlis با نرخ ۳,۲۰۰ تا ۴,۵۰۰ درهم در هر فوت مربع معامله می‌شوند و متراژ زمین‌ها از ۸,۰۰۰ تا بیش از ۶۰,۰۰۰ فوت مربع متغیر است.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا اتباع خارجی می‌توانند در مجامع گلف دبی ملک فری‌هولد بخرند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله — هر پنج مجمع اصلی گلف (امارات هیلز، دبی هیلز، جمیرا گلف استیتس، عربین رنچز و تلال الغاف) جزو مناطق مجاز فری‌هولد هستند که در آنها اتباع خارجی با هر تابعیتی می‌توانند مالکیت صددرصدی سند قطعی به نام خود ثبت نمایند. سند مالکیت رسمی توسط اداره اراضی دبی (DLD) صادر شده و قابلیت انتقال، توارث یا رهن بانکی را دارد. زرین کلیه تشریفات انتقال سند، تسویه NOC و ثبت DLD را به صورت جامع هدایت می‌کند.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">سوال دیگری دارید؟ <a href="/fa/consultation" class="text-gold-400 font-semibold hover:underline">درخواست مشاوره رایگان</a> یا <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">گفتگو در واتس‌اپ</a>.</p></div>
    </div>
  </section>

  </main>

  ${faFooterEl.outerHTML}

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 left-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="WhatsApp us"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script type="module" src="/scripts/nav.js"></script>
  <script type="module" src="/scripts/i18n.js"></script>
</body>
</html>
`;

// Write English pages (both .html and /index.html)
fs.writeFileSync('golf-course-properties-in-dubai.html', enGolfHtml, 'utf8');
if (!fs.existsSync('golf-course-properties-in-dubai')) {
  fs.mkdirSync('golf-course-properties-in-dubai', { recursive: true });
}
fs.writeFileSync(path.join('golf-course-properties-in-dubai', 'index.html'), enGolfHtml, 'utf8');

// Write Persian pages (both .html and /index.html)
if (!fs.existsSync('fa')) fs.mkdirSync('fa', { recursive: true });
fs.writeFileSync(path.join('fa', 'golf-course-properties-in-dubai.html'), faGolfHtml, 'utf8');
if (!fs.existsSync(path.join('fa', 'golf-course-properties-in-dubai'))) {
  fs.mkdirSync(path.join('fa', 'golf-course-properties-in-dubai'), { recursive: true });
}
fs.writeFileSync(path.join('fa', 'golf-course-properties-in-dubai', 'index.html'), faGolfHtml, 'utf8');

console.log('Golf Course pages generated successfully for both EN and FA (both .html and /index.html)!');
