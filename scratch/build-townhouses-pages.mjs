import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// Read index.html to extract canonical header, mobile menu, and footer
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

// Prepare English Header with active state on Townhouses and Properties
const enHeaderClone = JSDOM.fragment(enHeaderEl.outerHTML).querySelector('#site-header');
const enPropLink = enHeaderClone.querySelector('#properties-nav-link');
if (enPropLink) {
  enPropLink.setAttribute('aria-current', 'page');
  enPropLink.classList.remove('text-ash');
  enPropLink.classList.add('text-gold-400');
}
const enThLink = enHeaderClone.querySelector('a[href="/townhouses-for-sale-in-dubai"]');
if (enThLink) {
  enThLink.setAttribute('aria-current', 'page');
  enThLink.classList.remove('text-ash');
  enThLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare English Mobile Menu with active state
const enMobileClone = JSDOM.fragment(enMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const enThMobileLink = enMobileClone.querySelector('a[href="/townhouses-for-sale-in-dubai"]');
if (enThMobileLink) {
  enThMobileLink.classList.remove('text-ash');
  enThMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Header with active state
const faHeaderClone = JSDOM.fragment(faHeaderEl.outerHTML).querySelector('#site-header');
const faPropLink = faHeaderClone.querySelector('#properties-nav-link');
if (faPropLink) {
  faPropLink.setAttribute('aria-current', 'page');
  faPropLink.classList.remove('text-ash');
  faPropLink.classList.add('text-gold-400');
}
const faThLink = faHeaderClone.querySelector('a[href="/fa/townhouses-for-sale-in-dubai"]');
if (faThLink) {
  faThLink.setAttribute('aria-current', 'page');
  faThLink.classList.remove('text-ash');
  faThLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Mobile Menu with active state
const faMobileClone = JSDOM.fragment(faMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const faThMobileLink = faMobileClone.querySelector('a[href="/fa/townhouses-for-sale-in-dubai"]');
if (faThMobileLink) {
  faThMobileLink.classList.remove('text-ash');
  faThMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// ==========================================
// 1. ASSEMBLE ENGLISH TOWNHOUSES HTML
// ==========================================
const enTownhousesHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>Townhouses for Sale in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Townhouses for sale in Dubai — 3BR, 4BR & 5BR family homes across Arabian Ranches, Dubai Hills, JVC, Tilal Al Ghaf and Town Square. By ZARIN.">
  <meta name="keywords" content="townhouses for sale in Dubai, Dubai townhouses, 3BR townhouse Dubai, 4BR townhouse Dubai, Arabian Ranches townhouse, Dubai Hills townhouse, JVC townhouse, Tilal Al Ghaf townhouse, Town Square townhouse">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/townhouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/townhouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/townhouses-for-sale-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Townhouses for Sale in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Family townhouses across Dubai's top master-planned communities — Arabian Ranches, Dubai Hills, JVC, Tilal Al Ghaf, Town Square. By ZARIN.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Modern townhouse in a Dubai master-planned community">
  <meta property="og:url" content="https://zarinrealestate.com/townhouses-for-sale-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Townhouses for Sale in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Family townhouses across Dubai's top master-planned communities. Curated by ZARIN advisors.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles/main.css">
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
    .img-zoom{overflow:hidden}.img-zoom img{transition:transform .8s cubic-bezier(.16,1,.3,1)}.img-zoom:hover img{transform:scale(1.05)}
    .card-lift{transition:transform .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1)}.card-lift:hover{transform:translateY(-4px);box-shadow:0 24px 60px rgba(0,0,0,0.5)}
    details summary{list-style:none;cursor:pointer}details summary::-webkit-details-marker{display:none}details[open] .faq-icon{transform:rotate(45deg)}.faq-icon{transition:transform .3s cubic-bezier(.16,1,.3,1)}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    .animate-fade-in-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    .filter-chip{transition:all .2s}.filter-chip.active{background:#C8AB83;color:#0A0B0E;border-color:#C8AB83}
    .sticky-whatsapp{display:none}@media(max-width:1024px){.sticky-whatsapp{display:flex}}
    .hidden-card{display:none !important}
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://zarinrealestate.com/"},
    {"@type":"ListItem","position":2,"name":"Properties","item":"https://zarinrealestate.com/properties"},
    {"@type":"ListItem","position":3,"name":"For Sale","item":"https://zarinrealestate.com/properties-for-sale"},
    {"@type":"ListItem","position":4,"name":"Townhouses","item":"https://zarinrealestate.com/townhouses-for-sale-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/townhouses-for-sale-in-dubai#collectionpage",
    "name":"Townhouses for Sale in Dubai","url":"https://zarinrealestate.com/townhouses-for-sale-in-dubai",
    "description":"Family townhouses for sale across Dubai's premier master-planned communities — Arabian Ranches, Dubai Hills Estate, JVC, Tilal Al Ghaf, Town Square, and Mudon. Curated by ZARIN Real Estate advisors.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","numberOfItems":6,"itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"3BR Townhouse — Arabian Ranches Mirador","url":"https://zarinrealestate.com/properties/3br-ranches-mirador-001","image":"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"4200000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"4BR Townhouse — Dubai Hills Maple","url":"https://zarinrealestate.com/properties/4br-dubaihills-maple-001","image":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"6800000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"3BR Townhouse — JVC Belgravia","url":"https://zarinrealestate.com/properties/3br-jvc-belgravia-001","image":"https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"2400000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"4BR Townhouse — Dubai Hills Sidra Corner","url":"https://zarinrealestate.com/properties/4br-dubaihills-sidra-corner-001","image":"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"7200000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"3BR Townhouse — Tilal Al Ghaf Lagoons","url":"https://zarinrealestate.com/properties/3br-tilal-lagoons-001","image":"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"4600000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"3BR Townhouse — Town Square Naseem","url":"https://zarinrealestate.com/properties/3br-townsq-naseem-001","image":"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"2200000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/townhouses-for-sale-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"What is the average price of a townhouse in Dubai in 2026?","acceptedAnswer":{"@type":"Answer","text":"As of late 2026, the average price of a 3-bedroom townhouse in Dubai ranges from AED 2.2M in emerging family communities like JVC and Town Square, to AED 5-7M in established masterplans like Arabian Ranches and Dubai Hills Estate. Premium 4-5BR townhouses in Tilal Al Ghaf, Palm Jumeirah, and Dubai Hills Sidra trade at AED 7-12M. The overall average across all townhouse sales in 2026 sits around AED 3.5M, with the median 3BR transaction at AED 2.8M. ZARIN advisors provide current community-specific pricing trends during consultation."}},
      {"@type":"Question","name":"What is the difference between a townhouse and a villa in Dubai?","acceptedAnswer":{"@type":"Answer","text":"A townhouse in Dubai is a multi-storey attached property sharing one or two party walls with neighboring units, typically with a small private garden and 2 covered parking spaces. A villa is a fully detached standalone property on its own plot with gardens on all four sides. Townhouses typically range from 1,800-3,500 sqft built-up area while villas range from 4,000-15,000 sqft. Townhouses cost 30-50% less than equivalent-bedroom villas in the same community, making them the natural step up from apartment living for growing families. Service charges for townhouses are also typically lower since they share walls and infrastructure."}},
      {"@type":"Question","name":"Which communities are best for families buying townhouses?","acceptedAnswer":{"@type":"Answer","text":"The top family-focused townhouse communities in Dubai are Arabian Ranches (Emaar's established 1,650-home masterplan with golf, schools, and parks), Dubai Hills Estate (Emaar's flagship with 18-hole golf course and Dubai Hills Mall), JVC (affordable entry point with 30+ parks), Tilal Al Ghaf (Majid Al Futtaim's newer lagoon community with private beach), Town Square (NSHAMA's value-focused family masterplan), and Mudon (Dubai Properties' gated community next to Remraam). All six offer 3-4BR townhouses, gated access, schools within the community, and strong family tenant demand for rental exits. ZARIN matches families to communities based on schooling plans, commute, and budget."}},
      {"@type":"Question","name":"Are townhouses a good investment in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Yes. Townhouses have been one of Dubai's strongest-performing property categories since 2021, with capital appreciation of 60-110% in established communities like Arabian Ranches and Dubai Hills between 2020 and 2025. Gross rental yields of 5-7% are typical for 3BR townhouses, higher than equivalent villas (3-4%) because the absolute price is lower while rents are comparable. Dubai's population continues to grow at 4-5% annually, with families driving the townhouse demand. ZARIN provides a 5-year total-return model for every townhouse mandate, factoring in service charges, vacancy, and exit liquidity."}},
      {"@type":"Question","name":"Do Dubai townhouses come with gardens?","acceptedAnswer":{"@type":"Answer","text":"Yes. Virtually all townhouses in Dubai include a private rear garden, typically 200-500 sqft for a 3BR unit and 400-800 sqft for a 4BR. Front setbacks are usually communal landscaping rather than private garden. End-terrace and corner townhouses command a 10-20% premium because they offer larger side gardens and more natural light. Newer masterplans like Tilal Al Ghaf and Dubai Hills Sidra tend to offer larger garden plots than older communities like JVC. Garden orientation matters: south-facing gardens in Dubai get afternoon sun (hot in summer), while north-facing gardens stay cooler. ZARIN advisors check orientation during physical inspection."}},
      {"@type":"Question","name":"What are the service charges for townhouses in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Townhouse service charges in Dubai typically range from AED 8-15 per sqft annually, significantly lower than apartment towers (AED 14-22) and villas (AED 12-20). A 3BR townhouse of 2,500 sqft in Arabian Ranches pays approximately AED 25,000-32,000 per year in service charges plus AED 5,000-8,000 in district cooling. Dubai Hills townhouses run slightly higher at AED 12-16 per sqft due to premium landscaping and golf course access. JVC townhouses are typically AED 8-12 per sqft. ZARIN obtains the last 3 years of audited service charge statements before any offer, so buyers see the true carrying cost."}},
      {"@type":"Question","name":"Can foreigners buy freehold townhouses in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Yes. All major townhouse communities in Dubai (Arabian Ranches, Dubai Hills Estate, JVC, Tilal Al Ghaf, Town Square, Mudon, The Springs, The Meadows, and others) are designated freehold areas where foreign nationals of any country can buy outright freehold title in their own name. There are no nationality restrictions and no UAE residency visa requirement. Title deeds are issued by Dubai Land Department and the property can be inherited, sold, or mortgaged like any freehold asset. ZARIN handles the full transfer process including KYC, NOC, mortgage coordination, and DLD registration."}},
      {"@type":"Question","name":"What should I look for when buying a townhouse in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Key factors: position (end-terrace and corner units command a premium but offer larger gardens, more light, and better resale; mid-terrace is the value play); orientation (north-facing gardens stay cooler in Dubai summers, south-facing gets afternoon sun); condition (check for subsidence cracks more common in pre-2010 communities, roof condition, and AC ducting age); service charge trend (request last 3 years audited statements; rising charges signal deferred maintenance); community amenities (proximity to parks, pools, schools within the masterplan); and comparables (recent transaction data for the same community and unit type). ZARIN advisors check all six factors during physical inspection."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/townhouses-for-sale-in-dubai#webpage",
    "url":"https://zarinrealestate.com/townhouses-for-sale-in-dubai","name":"Townhouses for Sale in Dubai | ZARIN Real Estate",
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
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-labelledby="hero-headline" aria-label="Townhouses for sale hero">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">For Sale &middot; Family Townhouses</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6">Townhouses<br>for <span class="text-gold-gradient">Sale in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">Family-sized 3BR, 4BR, and 5BR townhouses across Dubai's most sought-after master-planned communities — Arabian Ranches, Dubai Hills Estate, JVC, Tilal Al Ghaf, and Town Square. Every listing is personally inspected by a ZARIN advisor for garden orientation, school proximity, and honest asking price. No stale inventory, no inflated prices.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#townhouse-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse townhouse listings"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>Browse Townhouses</a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to a family-townhouse advisor">Speak to Advisor</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">380+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Townhouse Listings</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">AED 3.2M</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Avg 3BR Price</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">3 &amp; 4BR</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Popular Layouts</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">6</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Top Family Communities</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. STICKY FILTER BAR -->
  <section class="sticky top-0 z-50 glass border-b border-white-line py-4" aria-label="Townhouse filters">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex items-center gap-2 flex-wrap">
          <div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold mr-1">Bedrooms:</div>
          <button class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="bedrooms" data-value="All">All</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="2BR">2BR</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="3BR">3BR</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="4BR">4BR</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="5BR">5BR</button>
        </div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2" aria-hidden="true"></div>
        <div class="flex items-center gap-2 flex-wrap">
          <div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold mr-1">Price:</div>
          <button class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="price" data-value="Any Price">Any Price</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="Under AED 2M">Under AED 2M</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="2M-4M">2M-4M</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="4M-7M">4M-7M</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="7M+">7M+</button>
        </div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2" aria-hidden="true"></div>
        <div class="flex items-center gap-2 flex-wrap">
          <div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold mr-1">Community:</div>
          <button class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="community" data-value="All Communities">All Communities</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="Arabian Ranches">Arabian Ranches</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="Dubai Hills">Dubai Hills</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="JVC">JVC</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="Tilal Al Ghaf">Tilal Al Ghaf</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="Town Square">Town Square</button>
        </div>
        <div class="hidden md:block flex-1"></div>
        <a href="/consultation" class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="Request a custom townhouse search">Custom Search &rarr;</a>
      </div>
    </div>
  </section>

  <!-- 3. TOWNHOUSE LISTINGS GRID -->
  <section id="townhouse-grid" class="bg-ink-900 py-16 md:py-20" aria-labelledby="listings-heading" aria-label="Townhouse listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">Featured Townhouses</div>
          <h2 id="listings-heading" class="text-3xl md:text-4xl font-bold tracking-tight text-bone">Family Townhouses, Personally Inspected</h2>
        </div>
        <p class="text-sm text-ash max-w-md">A selection of current ZARIN-mandated townhouse listings across Dubai's top family communities. Each property has been physically inspected by an advisor — including garden orientation, parking, and condition. For our complete townhouse inventory, request a custom search.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="townhouse-cards-container">

        <!-- Listing 1: 3BR Mirador Arabian Ranches -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-1-title" data-bedrooms="3" data-price="4200000" data-community="arabian-ranches">
          <a href="/properties/3br-ranches-mirador-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR townhouse in Arabian Ranches Mirador">
            <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="3-bedroom townhouse in Arabian Ranches Mirador with private garden" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Family Community</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 4.2M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Townhouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 id="listing-1-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Townhouse &middot; Mirador</h3>
            <div class="text-sm text-ash mb-4">Arabian Ranches &middot; 2,650 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,585</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 4BR Maple Dubai Hills -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-2-title" data-bedrooms="4" data-price="6800000" data-community="dubai-hills">
          <a href="/properties/4br-dubaihills-maple-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR townhouse in Dubai Hills Maple">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="4-bedroom townhouse in Dubai Hills Maple with rear garden" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Garden</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 6.8M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Townhouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 id="listing-2-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Townhouse &middot; Maple</h3>
            <div class="text-sm text-ash mb-4">Dubai Hills Estate &middot; 3,200 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,125</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 3BR Belgravia JVC -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-3-title" data-bedrooms="3" data-price="2400000" data-community="jvc">
          <a href="/properties/3br-jvc-belgravia-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR townhouse in JVC Belgravia">
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80" alt="3-bedroom townhouse in JVC Belgravia with communal park access" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Family Community</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 2.4M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Townhouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 id="listing-3-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Townhouse &middot; Belgravia</h3>
            <div class="text-sm text-ash mb-4">JVC &middot; 2,100 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,143</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 4BR Sidra Dubai Hills Corner -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-4-title" data-bedrooms="4" data-price="7200000" data-community="dubai-hills">
          <a href="/properties/4br-dubaihills-sidra-corner-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR corner townhouse in Dubai Hills Sidra">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="4-bedroom corner townhouse in Dubai Hills Sidra with wraparound garden" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Corner Unit</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 7.2M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Townhouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 id="listing-4-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Townhouse &middot; Sidra</h3>
            <div class="text-sm text-ash mb-4">Dubai Hills Estate &middot; 3,500 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,057</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 3BR Lagoons Tilal Al Ghaf -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-5-title" data-bedrooms="3" data-price="4600000" data-community="tilal-al-ghaf">
          <a href="/properties/3br-tilal-lagoons-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR townhouse in Tilal Al Ghaf Lagoons">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="3-bedroom townhouse in Tilal Al Ghaf Lagoons with landscaped garden" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Garden</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 4.6M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Townhouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 id="listing-5-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Townhouse &middot; Lagoons</h3>
            <div class="text-sm text-ash mb-4">Tilal Al Ghaf &middot; 2,400 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,917</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 3BR Naseem Town Square -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-6-title" data-bedrooms="3" data-price="2200000" data-community="town-square">
          <a href="/properties/3br-townsq-naseem-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR townhouse in Town Square Naseem">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="3-bedroom townhouse in Town Square Naseem with community park access" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Family Community</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 2.2M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Townhouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 id="listing-6-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Townhouse &middot; Naseem</h3>
            <div class="text-sm text-ash mb-4">Town Square &middot; 2,150 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,023</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- No match fallback state -->
      <div id="no-match-state" class="hidden text-center py-12 px-6 border border-white-line rounded-sm bg-ink-850 mt-6">
        <svg class="w-12 h-12 text-gold-400 mx-auto mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <h3 class="text-lg font-bold text-bone mb-2">No Featured Townhouses Match Your Current Filter</h3>
        <p class="text-sm text-ash max-w-md mx-auto mb-6">We have over 380+ active townhouse mandates across Dubai. Reset filters or request a bespoke search tailored to your precise criteria.</p>
        <button id="reset-filters-btn" class="px-5 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-gold-300 transition-colors">Reset All Filters</button>
      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">This is a curated sample of our 380+ active townhouse listings across Dubai. Tell us your bedroom count, community, and budget — we'll send a tailored shortlist within 24 hours.</p>
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request custom townhouse search">Request Custom Search<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. BROWSE BY BEDROOM COUNT -->
  <section class="bg-ink-850 py-24 md:py-32" aria-labelledby="bedroom-heading" aria-label="Browse by bedroom count">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by Bedrooms</div>
        <h2 id="bedroom-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Find Your Townhouse Size</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Townhouses in Dubai range from compact 2-bedroom starter homes to spacious 5-bedroom family residences. The 3BR is the workhorse of the market — the right balance of space, price, and resale liquidity for most buyers. 4BR and 5BR townhouses suit larger families and those wanting garden space approaching villa territory without the villa price tag.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/townhouses-for-sale-in-dubai?beds=2" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="View 2-bedroom townhouses">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80" alt="2-bedroom townhouse in Dubai family community" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">2BR Townhouses</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Starter townhouses for young families or investors. Compact 1,400-1,800 sqft layouts with 2 beds, 3 baths, and small rear garden.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 1.8M</span>
              <span class="text-slate">60+ listings</span>
            </div>
          </div>
        </a>
        <a href="/townhouses-for-sale-in-dubai?beds=3" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="View 3-bedroom townhouses">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80" alt="3-bedroom townhouse with garden in Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">3BR Townhouses</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">The market workhorse. 2,000-2,800 sqft with 3 beds, 4 baths, maids room, and 300-500 sqft garden across Arabian Ranches, Dubai Hills, and JVC.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 2.2M</span>
              <span class="text-slate">180+ listings</span>
            </div>
          </div>
        </a>
        <a href="/townhouses-for-sale-in-dubai?beds=4" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="View 4-bedroom townhouses">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" alt="4-bedroom townhouse in Dubai Hills with rear garden" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">4BR Townhouses</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Family-sized residences with maids room, double garage, and larger gardens. 3,000-3,800 sqft across Dubai Hills Sidra, Tilal Al Ghaf, and Arabian Ranches 2.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 3.8M</span>
              <span class="text-slate">110+ listings</span>
            </div>
          </div>
        </a>
        <a href="/townhouses-for-sale-in-dubai?beds=5" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="View 5-bedroom townhouses">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="5-bedroom townhouse in Dubai with large garden" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">5BR Townhouses</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Villa-scale townhouses on corner plots with 4,000+ sqft built-up. Premium pricing — Tilal Al Ghaf, Palm Jumeirah, and Dubai Hills Golf Place.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 6.5M</span>
              <span class="text-slate">30+ listings</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 5. BROWSE BY COMMUNITY -->
  <section class="bg-ink-900 py-24 md:py-32" aria-labelledby="community-heading" aria-label="Browse by community">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by Community</div>
        <h2 id="community-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Dubai's Family Communities</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Six master-planned communities dominate the family townhouse market in Dubai. Each has its own character, developer pedigree, school offering, and price band. Arabian Ranches is the established favourite for schools and golf; Dubai Hills is the new flagship with the Mall and 18-hole course; JVC offers the most affordable entry point; Tilal Al Ghaf is the newest lagoon community; Town Square is value-focused; Mudon sits quietly next to Remraam for established family living. ZARIN advisors walk each community regularly and know the micro-streets and sub-developments.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View townhouses in Arabian Ranches">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" alt="Arabian Ranches townhouse community with parks" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Golf &amp; Schools</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Arabian Ranches</h3>
            <p class="text-xs text-ash mb-3">Emaar's established 1,650-home family masterplan with 18-hole golf, JESS school, and mature landscaping.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 2.5M – 8M</span>
              <span class="text-ash">90+ listings</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View townhouses in Dubai Hills Estate">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Dubai Hills Estate townhouse community with golf course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Flagship Masterplan</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Dubai Hills Estate</h3>
            <p class="text-xs text-ash mb-3">Emaar flagship with 18-hole golf course, Dubai Hills Mall, and King's Road neighbourhoods: Maple, Sidra, Sidra 2.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 2.8M – 12M</span>
              <span class="text-ash">140+ listings</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View townhouses in JVC">
          <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80" alt="JVC townhouse with park access" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Value Entry</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Jumeirah Village Circle</h3>
            <p class="text-xs text-ash mb-3">Affordable family living with 30+ parks, Belgravia and La Rosa sub-developments offering 3BR townhouses from AED 1.8M.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.8M – 5M</span>
              <span class="text-ash">180+ listings</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View townhouses in Tilal Al Ghaf">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Tilal Al Ghaf lagoon community townhouses" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Lagoon Living</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Tilal Al Ghaf</h3>
            <p class="text-xs text-ash mb-3">Majid Al Futtaim's newer masterplan with 70m lagoon beach, palm-lined streets, and premium 3-4BR townhouses in Lagoons sub-development.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 3.5M – 9M</span>
              <span class="text-ash">45+ listings</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View townhouses in Town Square">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Town Square NSHAMA family community townhouses" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Value Family</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Town Square</h3>
            <p class="text-xs text-ash mb-3">NSHAMA's 750-acre family masterplan with 600+ parks, schools, and Naseem / Zahra / Rawda 3BR townhouses from AED 1.9M.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.9M – 4.5M</span>
              <span class="text-ash">75+ listings</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View townhouses in Mudon">
          <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="Mudon gated family community townhouses" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Gated &amp; Quiet</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Mudon</h3>
            <p class="text-xs text-ash mb-3">Dubai Properties' gated family community next to Remraam. 3-4BR townhouses with central park, community centre, and Al Salam school.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 2.2M – 5.5M</span>
              <span class="text-ash">50+ listings</span>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center mt-10"><a href="/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="View all Dubai areas">View All 45+ Areas<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 6. WHY TOWNHOUSES ARE POPULAR -->
  <section class="bg-ink-850 py-24 md:py-32" aria-labelledby="why-popular-heading" aria-label="Why townhouses are popular in Dubai">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why Townhouses</div>
        <h2 id="why-popular-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Why Townhouses are Popular in Dubai</h2>
        <p class="text-ash mt-4 max-w-3xl mx-auto">Townhouses have become Dubai's most-wanted property category for families since 2021, with prices rising 60-110% across established communities. They sit perfectly between apartment and villa — enough space, garden, and parking for a family, without the AED 8M+ price tag of an equivalent villa. Below are the four reasons ZARIN advisors consistently hear from family buyers who chose a townhouse over an apartment or villa.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <article class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-labelledby="reason-1-title">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft">
              <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <div>
              <h3 id="reason-1-title" class="text-xl font-bold text-bone mb-2">Family-Friendly Layouts</h3>
              <p class="text-sm text-ash leading-relaxed">A 3-bedroom townhouse in Dubai typically offers 2,000-2,800 sqft of built-up area across two or three storeys — bedrooms upstairs, living downstairs, maids room, and 2 covered parking bays. The split-level layout means parents have privacy from children's play areas, and the maids room with separate entrance supports live-in help common to Dubai families. Apartment living at this density is impractical and villa pricing starts at AED 8M+ for a similar bedroom count. Townhouses deliver the right square footage for a family of 4-6 at the right price point of AED 2.5M-5M.</p>
            </div>
          </div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-labelledby="reason-2-title">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft">
              <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            <div>
              <h3 id="reason-2-title" class="text-xl font-bold text-bone mb-2">Master-Planned Community Amenities</h3>
              <p class="text-sm text-ash leading-relaxed">Townhouse communities in Dubai are master-planned, meaning parks, pools, schools, retail, and clinics are designed into the neighbourhood from day one — not bolted on later. Arabian Ranches offers the Ranches Souk, JESS school, and 18-hole golf course within walking distance. Dubai Hills has the 2.5M sqft Dubai Hills Mall, two schools, and 18-hole championship golf. Town Square packs in 600+ parks and a community centre. JVC has 30+ parks and three schools. The amenities are gated, walkable, and family-safe in a way apartment towers in Business Bay or Marina simply cannot match.</p>
            </div>
          </div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-labelledby="reason-3-title">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft">
              <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h3 id="reason-3-title" class="text-xl font-bold text-bone mb-2">Value vs. Villas</h3>
              <p class="text-sm text-ash leading-relaxed">A 4-bedroom townhouse in Dubai Hills Sidra trades at AED 6-8M; an equivalent 4-bedroom detached villa in the same community starts at AED 12-15M — roughly double the price for 30% more square footage and a larger garden. For most families, the townhouse delivers 80% of the villa experience at 50% of the cost. The same applies to Arabian Ranches (3BR townhouse AED 4M vs 4BR villa AED 7M+), JVC (3BR townhouse AED 2.4M vs 4BR villa AED 5M+), and Tilal Al Ghaf. Townhouse rental yields of 5-7% also outperform villa yields of 3-4%, making them a stronger investment case.</p>
            </div>
          </div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-labelledby="reason-4-title">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft">
              <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div>
              <h3 id="reason-4-title" class="text-xl font-bold text-bone mb-2">Gated, Low-Traffic Streets</h3>
              <p class="text-sm text-ash leading-relaxed">All six top townhouse communities in Dubai are gated masterplans with controlled access, 30km/h internal speed limits, and through-traffic eliminated. Children can walk to parks, school bus stops, and neighbours' houses without crossing major roads. Arabian Ranches, Dubai Hills, Tilal Al Ghaf, Mudon, and Town Square all have perimeter walls, 24-hour security at gated entry, and pedestrianised cores. This is a meaningful safety upgrade versus apartment towers where children share lobbies, lifts, and podium car parks with the general public. The community feel — neighbours knowing each other, kids playing in cul-de-sacs — is what converts apartment families to townhouse buyers.</p>
            </div>
          </div>
        </article>
      </div>

      <div class="bg-ink-900 border border-gold-line rounded-sm p-8 bg-gold-soft" aria-label="Townhouse market insight">
        <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div class="flex-shrink-0 w-14 h-14 border border-gold-line rounded-xs flex items-center justify-center bg-ink-850">
            <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-bone mb-2">2026 Townhouse Market Outlook</h3>
            <p class="text-sm text-ash leading-relaxed">Townhouse prices in Dubai's top six family communities appreciated 8-15% in 2025 and are projected to add a further 6-10% in 2026, supported by 4-5% annual population growth and continuing shortage of family-ready inventory. Supply is constrained — only 2,800 new townhouse units will complete across these six communities in 2026 versus 18,000 new apartment units. ZARIN's market outlook report (free on request) breaks down per-community price trends, rental yield forecasts, and the off-plan vs. ready decision for 2026 buyers.</p>
          </div>
          <a href="/consultation" class="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="Request the 2026 townhouse outlook report">Get the Report &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. WHY BUY A TOWNHOUSE WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-labelledby="why-zarin-heading" aria-label="Why buy a townhouse with ZARIN">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why ZARIN</div>
          <h2 id="why-zarin-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">A Family-Focused Townhouse Advisor</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">Most online townhouse listings are stale, duplicate, or priced above market. Many show floorplans that don't match the actual unit, gardens smaller than advertised, or omit that the property backs onto a noisy main road. ZARIN advisors personally inspect every townhouse before sharing it — walking the actual garden, measuring the parking, checking the neighbour profile, and assessing the school-run route. If the asking price isn't justified by recent townhouse comparables, we tell you before you waste a viewing.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Every townhouse personally inspected</div><div class="text-xs text-slate mt-1">Garden orientation, parking, neighbour profile checked.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">School-run and commute assessed</div><div class="text-xs text-slate mt-1">We drive the route to your shortlisted schools before you commit.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Honest price analysis vs. townhouse comparables</div><div class="text-xs text-slate mt-1">Recent same-community transactions, not asking prices.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">2% standard commission, no hidden fees</div><div class="text-xs text-slate mt-1">Published, transparent, RERA-compliant.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Trilingual family advisory: EN, AR, FA</div><div class="text-xs text-slate mt-1">Direct communication with both parents in their preferred language.</div></div></div>
          </div>
          <a href="/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Learn more about ZARIN">Learn More About ZARIN<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">380+</div><div class="text-sm font-bold text-bone mb-1">Townhouse Listings</div><div class="text-xs text-slate">Inspected by advisors</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">2%</div><div class="text-sm font-bold text-bone mb-1">Buyer Commission</div><div class="text-xs text-slate">Standard, RERA-aligned</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">24hr</div><div class="text-sm font-bold text-bone mb-1">Shortlist Delivery</div><div class="text-xs text-slate">After consultation</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">20+</div><div class="text-sm font-bold text-bone mb-1">Years in Dubai</div><div class="text-xs text-slate">Founder since 2005</div></div>
        </div>
      </div>
      <div class="mt-16 pt-12 border-t border-white-line">
        <div class="text-center mb-8">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">Trust Badges</div>
          <h3 class="text-2xl font-bold text-bone">Why Families Choose ZARIN</h3>
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

  <!-- 8. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-labelledby="faq-heading" aria-label="Townhouse buying FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Townhouse FAQ</div>
        <h2 id="faq-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Common Townhouse Questions</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Eight questions ZARIN advisors hear most often from families buying townhouses in Dubai. If yours isn't covered, message us on WhatsApp for a direct answer — typically within an hour during business hours.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-900 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the average price of a townhouse in Dubai in 2026?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">As of late 2026, the average price of a 3-bedroom townhouse in Dubai ranges from AED 2.2M in emerging family communities like JVC and Town Square, to AED 5-7M in established masterplans like Arabian Ranches and Dubai Hills Estate. Premium 4-5BR townhouses in Tilal Al Ghaf, Palm Jumeirah, and Dubai Hills Sidra trade at AED 7-12M. The overall average across all townhouse sales in 2026 sits around AED 3.5M, with the median 3BR transaction at AED 2.8M. ZARIN advisors provide current community-specific pricing trends during consultation.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the difference between a townhouse and a villa in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">A townhouse in Dubai is a multi-storey attached property sharing one or two party walls with neighboring units, typically with a small private garden and 2 covered parking spaces. A villa is a fully detached standalone property on its own plot with gardens on all four sides. Townhouses typically range from 1,800-3,500 sqft built-up area while villas range from 4,000-15,000 sqft. Townhouses cost 30-50% less than equivalent-bedroom villas in the same community, making them the natural step up from apartment living for growing families. Service charges for townhouses are also typically lower since they share walls and infrastructure.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Which communities are best for families buying townhouses?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">The top family-focused townhouse communities in Dubai are Arabian Ranches (Emaar's established 1,650-home masterplan with golf, schools, and parks), Dubai Hills Estate (Emaar's flagship with 18-hole golf course and Dubai Hills Mall), JVC (affordable entry point with 30+ parks), Tilal Al Ghaf (Majid Al Futtaim's newer lagoon community with private beach), Town Square (NSHAMA's value-focused family masterplan), and Mudon (Dubai Properties' gated community next to Remraam). All six offer 3-4BR townhouses, gated access, schools within the community, and strong family tenant demand for rental exits. ZARIN matches families to communities based on schooling plans, commute, and budget.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Are townhouses a good investment in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes. Townhouses have been one of Dubai's strongest-performing property categories since 2021, with capital appreciation of 60-110% in established communities like Arabian Ranches and Dubai Hills between 2020 and 2025. Gross rental yields of 5-7% are typical for 3BR townhouses, higher than equivalent villas (3-4%) because the absolute price is lower while rents are comparable. Dubai's population continues to grow at 4-5% annually, with families driving the townhouse demand. ZARIN provides a 5-year total-return model for every townhouse mandate, factoring in service charges, vacancy, and exit liquidity.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Do Dubai townhouses come with gardens?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes. Virtually all townhouses in Dubai include a private rear garden, typically 200-500 sqft for a 3BR unit and 400-800 sqft for a 4BR. Front setbacks are usually communal landscaping rather than private garden. End-terrace and corner townhouses command a 10-20% premium because they offer larger side gardens and more natural light. Newer masterplans like Tilal Al Ghaf and Dubai Hills Sidra tend to offer larger garden plots than older communities like JVC. Garden orientation matters: south-facing gardens in Dubai get afternoon sun (hot in summer), while north-facing gardens stay cooler. ZARIN advisors check orientation during physical inspection.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What are the service charges for townhouses in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Townhouse service charges in Dubai typically range from AED 8-15 per sqft annually, significantly lower than apartment towers (AED 14-22) and villas (AED 12-20). A 3BR townhouse of 2,500 sqft in Arabian Ranches pays approximately AED 25,000-32,000 per year in service charges plus AED 5,000-8,000 in district cooling. Dubai Hills townhouses run slightly higher at AED 12-16 per sqft due to premium landscaping and golf course access. JVC townhouses are typically AED 8-12 per sqft. ZARIN obtains the last 3 years of audited service charge statements before any offer, so buyers see the true carrying cost.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can foreigners buy freehold townhouses in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes. All major townhouse communities in Dubai (Arabian Ranches, Dubai Hills Estate, JVC, Tilal Al Ghaf, Town Square, Mudon, The Springs, The Meadows, and others) are designated freehold areas where foreign nationals of any country can buy outright freehold title in their own name. There are no nationality restrictions and no UAE residency visa requirement. Title deeds are issued by Dubai Land Department and the property can be inherited, sold, or mortgaged like any freehold asset. ZARIN handles the full transfer process including KYC, NOC, mortgage coordination, and DLD registration.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What should I look for when buying a townhouse in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Key factors: position (end-terrace and corner units command a premium but offer larger gardens, more light, and better resale; mid-terrace is the value play); orientation (north-facing gardens stay cooler in Dubai summers, south-facing gets afternoon sun); condition (check for subsidence cracks more common in pre-2010 communities, roof condition, and AC ducting age); service charge trend (request last 3 years audited statements; rising charges signal deferred maintenance); community amenities (proximity to parks, pools, schools within the masterplan); and comparables (recent transaction data for the same community and unit type). ZARIN advisors check all six factors during physical inspection.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">Still have questions? <a href="/consultation" class="text-gold-400 font-semibold hover:underline">Book a free consultation</a> or <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">WhatsApp us</a>.</p></div>
    </div>
  </section>

  </main>

  ${enFooterEl.outerHTML}

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 right-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="WhatsApp us"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script type="module" src="/scripts/nav.js"></script>

  <!-- Client-side filter interaction -->
  <script>
    (function(){
      const chips = document.querySelectorAll('.filter-chip');
      const cards = document.querySelectorAll('.townhouse-card');
      const noMatch = document.getElementById('no-match-state');
      const resetBtn = document.getElementById('reset-filters-btn');

      function filterCards() {
        const active = {};
        chips.forEach(c => {
          if (c.classList.contains('active')) {
            active[c.dataset.group] = c.dataset.value;
          }
        });

        let visibleCount = 0;
        cards.forEach(card => {
          let show = true;
          // Bedrooms filter
          const bedVal = active['bedrooms'] || 'All';
          if (bedVal !== 'All') {
            const cardBeds = card.dataset.bedrooms;
            const targetBeds = bedVal.replace('BR', '');
            if (cardBeds !== targetBeds) show = false;
          }
          // Price filter
          const priceVal = active['price'] || 'Any Price';
          if (priceVal !== 'Any Price') {
            const cardPrice = parseFloat(card.dataset.price);
            if (priceVal === 'Under AED 2M' && cardPrice >= 2000000) show = false;
            else if (priceVal === '2M-4M' && (cardPrice < 2000000 || cardPrice > 4000000)) show = false;
            else if (priceVal === '4M-7M' && (cardPrice < 4000000 || cardPrice > 7000000)) show = false;
            else if (priceVal === '7M+' && cardPrice < 7000000) show = false;
          }
          // Community filter
          const commVal = active['community'] || 'All Communities';
          if (commVal !== 'All Communities') {
            const cardComm = card.dataset.community;
            const targetComm = commVal.toLowerCase().replace(/\\s+/g, '-');
            if (cardComm !== targetComm) show = false;
          }

          if (show) {
            card.classList.remove('hidden-card');
            visibleCount++;
          } else {
            card.classList.add('hidden-card');
          }
        });

        if (noMatch) {
          noMatch.classList.toggle('hidden', visibleCount > 0);
        }
      }

      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const group = chip.dataset.group;
          chips.forEach(c => {
            if (c.dataset.group === group) {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            }
          });
          chip.classList.add('active');
          chip.setAttribute('aria-pressed', 'true');
          filterCards();
        });
      });

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          chips.forEach(c => {
            if (c.dataset.value === 'All' || c.dataset.value === 'Any Price' || c.dataset.value === 'All Communities') {
              c.classList.add('active');
              c.setAttribute('aria-pressed', 'true');
            } else {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            }
          });
          filterCards();
        });
      }
    })();
  </script>
</body>
</html>
`;

// ==========================================
// 2. ASSEMBLE PERSIAN TOWNHOUSES HTML
// ==========================================
const faTownhousesHtml = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>تاون‌هاوس برای فروش در دبی | املاک زرین</title>
  <meta name="description" content="خرید تاون‌هاوس در دبی — خانه‌های ویلایی ۳، ۴ و ۵ خوابه در بهترین شهرک‌های خانوادگی دبی شامل اربین رنچز، دبی هیلز، جی‌وی‌سی، تلال الغاف و تاون اسکوئر با مشاوره زرین.">
  <meta name="keywords" content="خرید تاون هاوس در دبی, تاون هاوس دبی, قیمت تاون هاوس در دبی, تاون هاوس اربین رنچز, تاون هاوس دبی هیلز, تاون هاوس جی وی سی, تاون هاوس تلال الغاف, املاک دبی">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="املاک زرین دبی">
  <link rel="canonical" href="https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/townhouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/townhouses-for-sale-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="تاون‌هاوس برای فروش در دبی | املاک زرین">
  <meta property="og:description" content="مجموعه تاون‌هاوس‌های خانوادگی در برترین شهرک‌های مسکونی دبی — اربین رنچز، دبی هیلز، جی‌وی‌سی، تلال الغاف و تاون اسکوئر. کارشناسی شده توسط مشاوران زرین.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="تاون‌هاوس‌های مدرن خانوادگی در شهرک‌های دبی">
  <meta property="og:url" content="https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai">
  <meta property="og:site_name" content="املاک زرین دبی">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="تاون‌هاوس برای فروش در دبی | املاک زرین">
  <meta name="twitter:description" content="مجموعه تاون‌هاوس‌های خانوادگی در برترین شهرک‌های دبی. کارشناسی شده توسط مشاوران زرین.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles/main.css">
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
    .img-zoom{overflow:hidden}.img-zoom img{transition:transform .8s cubic-bezier(.16,1,.3,1)}.img-zoom:hover img{transform:scale(1.05)}
    .card-lift{transition:transform .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1)}.card-lift:hover{transform:translateY(-4px);box-shadow:0 24px 60px rgba(0,0,0,0.5)}
    details summary{list-style:none;cursor:pointer}details summary::-webkit-details-marker{display:none}details[open] .faq-icon{transform:rotate(45deg)}.faq-icon{transition:transform .3s cubic-bezier(.16,1,.3,1)}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    .animate-fade-in-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    .filter-chip{transition:all .2s}.filter-chip.active{background:#C8AB83;color:#0A0B0E;border-color:#C8AB83}
    .sticky-whatsapp{display:none}@media(max-width:1024px){.sticky-whatsapp{display:flex}}
    .hidden-card{display:none !important}
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"صفحه اصلی","item":"https://zarinrealestate.com/fa/"},
    {"@type":"ListItem","position":2,"name":"املاک","item":"https://zarinrealestate.com/fa/properties"},
    {"@type":"ListItem","position":3,"name":"برای فروش","item":"https://zarinrealestate.com/fa/properties-for-sale"},
    {"@type":"ListItem","position":4,"name":"تاون‌هاوس‌ها","item":"https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai#collectionpage",
    "name":"تاون‌هاوس برای فروش در دبی | املاک زرین","url":"https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai",
    "description":"مجموعه تاون‌هاوس‌های خانوادگی برای فروش در برترین شهرک‌های دبی — اربین رنچز، دبی هیلز استیت، جی‌وی‌سی، تلال الغاف، تاون اسکوئر و مودون. با کارشناسی تخصصی مشاوران املاک زرین.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","numberOfItems":6,"itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"تاون‌هاوس ۳ خوابه — میرادور اربین رنچز","url":"https://zarinrealestate.com/fa/properties/3br-ranches-mirador-001","image":"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"4200000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"تاون‌هاوس ۴ خوابه — میپل دبی هیلز","url":"https://zarinrealestate.com/fa/properties/4br-dubaihills-maple-001","image":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"6800000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"تاون‌هاوس ۳ خوابه — بلگراویا جی‌وی‌سی","url":"https://zarinrealestate.com/fa/properties/3br-jvc-belgravia-001","image":"https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"2400000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"تاون‌هاوس ۴ خوابه نبش — سدره دبی هیلز","url":"https://zarinrealestate.com/fa/properties/4br-dubaihills-sidra-corner-001","image":"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"7200000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"تاون‌هاوس ۳ خوابه — لاگونز تلال الغاف","url":"https://zarinrealestate.com/fa/properties/3br-tilal-lagoons-001","image":"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"4600000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"تاون‌هاوس ۳ خوابه — نسیم تاون اسکوئر","url":"https://zarinrealestate.com/fa/properties/3br-townsq-naseem-001","image":"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"2200000","priceCurrency":"AED","availability":"https://schema.org/InStock"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"میانگین قیمت تاون‌هاوس در دبی در سال ۲۰۲۶ چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"تا اواخر سال ۲۰۲۶، میانگین قیمت یک تاون‌هاوس ۳ خوابه در دبی از ۲.۲ میلیون درهم در شهرک‌های خانوادگی در حال توسعه مانند جی‌وی‌سی و تاون اسکوئر آغاز شده و تا ۵ الی ۷ میلیون درهم در پروژه‌های تثبیت‌شده مانند اربین رنچز و دبی هیلز استیت می‌رسد. تاون‌هاوس‌های ممتاز ۴ و ۵ خوابه در تلال الغاف، پالم جمیرا و سدره دبی هیلز بین ۷ تا ۱۲ میلیون درهم معامله می‌شوند. میانگین قیمت کلی معاملات تاون‌هاوس در دبی حدود ۳.۵ میلیون درهم و میانه قیمت ۳ خوابه‌ها حدود ۲.۸ میلیون درهم است."}},
      {"@type":"Question","name":"تفاوت تاون‌هاوس با ویلا در دبی چیست؟","acceptedAnswer":{"@type":"Answer","text":"تاون‌هاوس در دبی یک واحد مسکونی چندطبقه متصل است که از یک یا دو طرف دارای دیوار مشترک با همسایگان بوده و به طور معمول دارای باغچه خصوصی و ۲ جای پارک مسقف است. ویلا یک ملک کاملاً مستقل روی پلاک اختصاصی خود با حیاط و فضای سبز در هر چهار جهت است. تاون‌هاوس‌ها بین ۱,۸۰۰ تا ۳,۵۰۰ فوت مربع زیربنا دارند، در حالی که ویلاها بین ۴,۰۰۰ تا ۱۵,۰۰۰ فوت مربع هستند. قیمت تاون‌هاوس ۳۰ تا ۵۰ درصد کمتر از ویلای هم‌تعداد اتاق در همان شهرک است و شارژ نگهداری آن نیز به مراتب پایین‌تر است."}},
      {"@type":"Question","name":"کدام شهرک‌های دبی برای سکونت خانواده‌ها بهترین انتخاب هستند؟","acceptedAnswer":{"@type":"Answer","text":"برترین شهرک‌های خانوادگی دبی عبارتند از اربین رنچز (پروژه اعمار با ۱,۶۵۰ خانه، زمین گلف، مدارس بین‌المللی و پارک‌های سرسبز)، دبی هیلز استیت (شهرک شاخص اعمار با زمین گلف ۱۸ حفره و مرکز خرید دبی هیلز)، جی‌وی‌سی (گزینه‌ای بسیار مقرون‌به‌صرفه با بیش از ۳۰ پارک محلی)، تلال الغاف (پروژه مجید الفطیم با دریاچه تفریحی شنی ۷۰ متری)، تاون اسکوئر (شهرک ارزش‌محور نشاما با پارک‌های متعدد) و مودون (پروژه محصور دبی پراپرتیز در مجاورت رمرام)."}},
      {"@type":"Question","name":"آیا تاون‌هاوس‌ها سرمایه‌گذاری مناسبی در دبی هستند؟","acceptedAnswer":{"@type":"Answer","text":"بله. تاون‌هاوس‌ها از سال ۲۰۲۱ تا کنون یکی از پربازده‌ترین دارایی‌های ملکی در دبی بوده‌اند و در پروژه‌های جاافتاده مانند اربین رنچز و دبی هیلز رشد سرمایه‌ای معادل ۶۰ تا ۱۱۰ درصد ثبت کرده‌اند. بازده ناخالص اجاره تاون‌هاوس‌های ۳ خوابه معمولاً بین ۵ تا ۷ درصد است که بالاتر از بازده ویلاها (۳ تا ۴ درصد) می‌باشد. رشد پیوسته جمعیت دبی و تمایل خانواده‌ها به فضاهای سبز موجب تقاضای مستمر برای اجاره و خرید این دسته از املاک شده است."}},
      {"@type":"Question","name":"آیا تاون‌هاوس‌های دبی دارای باغ و حیاط اختصاصی هستند؟","acceptedAnswer":{"@type":"Answer","text":"بله. تقریباً تمام تاون‌هاوس‌ها در دبی دارای باغچه خصوصی پشت ساختمان هستند که مساحت آن در واحدهای ۳ خوابه ۲۰۰ تا ۵۰۰ فوت مربع و در واحدهای ۴ خوابه ۴۰۰ تا ۸۰۰ فوت مربع است. واحدهای نبش و گوشه‌ای (Corner) به دلیل برخورداری از حیاط بزرگ‌تر و نورگیری بیشتر، ۱۰ تا ۲۰ درصد ارزش بالاتری دارند. مشاوران زرین جهت‌گیری نور خورشید را در بازدیدهای حضوری بررسی می‌کنند."}},
      {"@type":"Question","name":"هزینه‌های شارژ و نگهداری تاون‌هاوس‌ها در دبی چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"شارژ سالانه تاون‌هاوس‌ها در دبی معمولاً بین ۸ تا ۱۵ درهم به ازای هر فوت مربع است که بسیار پایین‌تر از برج‌های آپارتمانی (۱۴ تا ۲۲ درهم) و ویلاها (۱۲ تا ۲۰ درهم) می‌باشد. به عنوان مثال، یک تاون‌هاوس ۳ خوابه با متراژ ۲,۵۰۰ فوت مربع در اربین رنچز حدود ۲۵,۰۰۰ تا ۳۲,۰۰۰ درهم در سال بابت خدمات شهرک پرداخت می‌کند. مشاوران زرین صورت‌حساب‌های رسمی ۳ سال اخیر را پیش از هر خریدی استعلام می‌نمایند."}},
      {"@type":"Question","name":"آیا اتباع خارجی می‌توانند تاون‌هاوس دارای سند ملکی قطعی (Freehold) در دبی بخرند؟","acceptedAnswer":{"@type":"Answer","text":"بله. تمامی شهرک‌های شاخص تاون‌هاوس در دبی (اربین رنچز، دبی هیلز، جی‌وی‌سی، تلال الغاف، تاون اسکوئر، مودون و د اسپرینگز) در مناطق آزاد ملکی (Freehold) واقع شده‌اند و تمامی اتباع خارجی بدون محدودیت ملیت می‌توانند سند مالکیت ۱۰۰٪ صددرصدی و قطعی دریافت کنند. سند توسط اداره اراضی دبی (DLD) صادر شده و قابلیت ارث، فروش و دریافت وام بانکی را دارد."}},
      {"@type":"Question","name":"هنگام خرید تاون‌هاوس در دبی باید به چه نکاتی توجه کرد؟","acceptedAnswer":{"@type":"Answer","text":"مهم‌ترین عوامل: موقعیت در ردیف (واحدهای نبش نور و حیاط بهتری دارند اما واحدهای میانی قیمت مناسب‌تری دارند)، جهت‌گیری باغ (باغ‌های رو به شمال خنک‌ترند و باغ‌های رو به جنوب آفتاب عصرگاهی دارند)، سلامت سازه و سیستم تهویه، روند هزینه‌های شارژ، نزدیکی به مدارس و امکانات شهرک، و داده‌های واقعی معاملات اخیر همسایگان. کارشناسان زرین تمامی این موارد را در گزارش کتبی بازدید قید می‌کنند."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai#webpage",
    "url":"https://zarinrealestate.com/fa/townhouses-for-sale-in-dubai","name":"تاون‌هاوس برای فروش در دبی | املاک زرین",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "speakable":{"@type":"SpeakableSpecification","cssSelector":["#hero-headline","#tldr-summary"]}}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased" dir="rtl">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">پرش به محتوای اصلی</a>

  ${faHeaderClone.outerHTML}
  ${faMobileClone.outerHTML}

  <main id="main">

  <!-- 1. HERO + TL;DR -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-labelledby="hero-headline" aria-label="بخش سربرگ تاون‌هاوس برای فروش">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">برای فروش &middot; تاون‌هاوس‌های خانوادگی دبی</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-bone mb-6">تاون‌هاوس برای<br><span class="text-gold-gradient">فروش در دبی</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">خانه‌های ویلایی خانوادگی ۳، ۴ و ۵ خوابه در پرطرفدارترین شهرک‌های جامع و برنامه‌ریزی‌شده دبی — اربین رنچز، دبی هیلز استیت، جی‌وی‌سی، تلال الغاف و تاون اسکوئر. تمامی فایل‌ها توسط مشاوران زرین از نظر جهت تابش آفتاب در باغ، دسترسی به مدارس برتر و قیمت‌گذاری منصفانه شخصاً کارشناسی شده‌اند. بدون فایل‌های تکراری، بدون قیمت‌های غیرواقعی.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#townhouse-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="مشاهده تاون‌هاوس‌ها"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>مشاهده تاون‌هاوس‌ها</a>
          <a href="/fa/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="گفتگو با مشاور خانواده">گفتگو با مشاور تخصصی</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۳۸۰+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">فایل فعال تاون‌هاوس</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۳.۲M درهم</div><div class="text-xs text-slate uppercase tracking-wider mt-1">میانگین قیمت ۳ خوابه</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۳ و ۴ خوابه</div><div class="text-xs text-slate uppercase tracking-wider mt-1">محبوب‌ترین نقشه‌ها</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۶</div><div class="text-xs text-slate uppercase tracking-wider mt-1">برترین شهرک خانوادگی</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. STICKY FILTER BAR -->
  <section class="sticky top-0 z-50 glass border-b border-white-line py-4" aria-label="فیلترهای تاون‌هاوس">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex items-center gap-2 flex-wrap">
          <div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold ml-1">تعداد اتاق:</div>
          <button class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="bedrooms" data-value="All">همه</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="2BR">۲ خوابه</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="3BR">۳ خوابه</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="4BR">۴ خوابه</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="5BR">۵ خوابه</button>
        </div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2" aria-hidden="true"></div>
        <div class="flex items-center gap-2 flex-wrap">
          <div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold ml-1">بازه قیمت:</div>
          <button class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="price" data-value="Any Price">هر قیمتی</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="Under AED 2M">زیر ۲ میلیون</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="2M-4M">۲ تا ۴ میلیون</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="4M-7M">۴ تا ۷ میلیون</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="7M+">بالای ۷ میلیون</button>
        </div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2" aria-hidden="true"></div>
        <div class="flex items-center gap-2 flex-wrap">
          <div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold ml-1">شهرک:</div>
          <button class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="community" data-value="All Communities">همه شهرک‌ها</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="Arabian Ranches">اربین رنچز</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="Dubai Hills">دبی هیلز</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="JVC">جی‌وی‌سی</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="Tilal Al Ghaf">تلال الغاف</button>
          <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="community" data-value="Town Square">تاون اسکوئر</button>
        </div>
        <div class="hidden md:block flex-1"></div>
        <a href="/fa/consultation" class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="درخواست جستجوی اختصاصی">جستجوی اختصاصی &larr;</a>
      </div>
    </div>
  </section>

  <!-- 3. TOWNHOUSE LISTINGS GRID -->
  <section id="townhouse-grid" class="bg-ink-900 py-16 md:py-20" aria-labelledby="listings-heading" aria-label="فهرست تاون‌هاوس‌ها">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">تاون‌هاوس‌های برگزیده</div>
          <h2 id="listings-heading" class="text-3xl md:text-4xl font-bold tracking-tight text-bone">تاون‌هاوس‌های خانوادگی با کارشناسی حضوری</h2>
        </div>
        <p class="text-sm text-ash max-w-md">مجموعه‌ای گلچین‌شده از فایل‌های فعال تاون‌هاوس با نمایندگی مستقیم زرین در معتبرترین شهرک‌های خانوادگی دبی. تمامی املاک از نظر ابعاد حیاط، پارکینگ، کیفیت ساخت و مسیر تردد مدارس کارشناسی شده‌اند.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="townhouse-cards-container">

        <!-- Listing 1: 3BR Mirador Arabian Ranches -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-1-title" data-bedrooms="3" data-price="4200000" data-community="arabian-ranches">
          <a href="/fa/properties/3br-ranches-mirador-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده تاون‌هاوس ۳ خوابه در میرادور اربین رنچز">
            <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس ۳ خوابه در میرادور اربین رنچز با حیاط اختصاصی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">شهرک خانوادگی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۴.۲ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تاون‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 id="listing-1-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">تاون‌هاوس ۳ خوابه &middot; میرادور</h3>
            <div class="text-sm text-ash mb-4">اربین رنچز &middot; ۲,۶۵۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۱,۵۸۵ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 4BR Maple Dubai Hills -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-2-title" data-bedrooms="4" data-price="6800000" data-community="dubai-hills">
          <a href="/fa/properties/4br-dubaihills-maple-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده تاون‌هاوس ۴ خوابه در میپل دبی هیلز">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس ۴ خوابه در میپل دبی هیلز با حیاط پشتی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">حیاط اختصاصی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۶.۸ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تاون‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 id="listing-2-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">تاون‌هاوس ۴ خوابه &middot; میپل</h3>
            <div class="text-sm text-ash mb-4">دبی هیلز استیت &middot; ۳,۲۰۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۲,۱۲۵ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 3BR Belgravia JVC -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-3-title" data-bedrooms="3" data-price="2400000" data-community="jvc">
          <a href="/fa/properties/3br-jvc-belgravia-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده تاون‌هاوس ۳ خوابه در بلگراویا جی‌وی‌سی">
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس ۳ خوابه در بلگراویا جی‌وی‌سی با دسترسی به پارک" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">شهرک خانوادگی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۲.۴ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تاون‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 id="listing-3-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">تاون‌هاوس ۳ خوابه &middot; بلگراویا</h3>
            <div class="text-sm text-ash mb-4">جی‌وی‌سی &middot; ۲,۱۰۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۱,۱۴۳ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 4BR Sidra Dubai Hills Corner -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-4-title" data-bedrooms="4" data-price="7200000" data-community="dubai-hills">
          <a href="/fa/properties/4br-dubaihills-sidra-corner-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده تاون‌هاوس ۴ خوابه نبش در سدره دبی هیلز">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس ۴ خوابه نبش در سدره دبی هیلز با حیاط وسیع" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">واحد نبش</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۷.۲ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تاون‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 id="listing-4-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">تاون‌هاوس ۴ خوابه &middot; سدره</h3>
            <div class="text-sm text-ash mb-4">دبی هیلز استیت &middot; ۳,۵۰۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۲,۰۵۷ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 3BR Lagoons Tilal Al Ghaf -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-5-title" data-bedrooms="3" data-price="4600000" data-community="tilal-al-ghaf">
          <a href="/fa/properties/3br-tilal-lagoons-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده تاون‌هاوس ۳ خوابه در لاگونز تلال الغاف">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس ۳ خوابه در لاگونز تلال الغاف با فضای سبز" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">حیاط اختصاصی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۴.۶ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تاون‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 id="listing-5-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">تاون‌هاوس ۳ خوابه &middot; لاگونز</h3>
            <div class="text-sm text-ash mb-4">تلال الغاف &middot; ۲,۴۰۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۱,۹۱۷ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 3BR Naseem Town Square -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group townhouse-card" aria-labelledby="listing-6-title" data-bedrooms="3" data-price="2200000" data-community="town-square">
          <a href="/fa/properties/3br-townsq-naseem-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده تاون‌هاوس ۳ خوابه در نسیم تاون اسکوئر">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس ۳ خوابه در نسیم تاون اسکوئر با دسترسی به پارک" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">شهرک خانوادگی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۲.۲ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تاون‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 id="listing-6-title" class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">تاون‌هاوس ۳ خوابه &middot; نسیم</h3>
            <div class="text-sm text-ash mb-4">تاون اسکوئر &middot; ۲,۱۵۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۱,۰۲۳ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- No match fallback state -->
      <div id="no-match-state" class="hidden text-center py-12 px-6 border border-white-line rounded-sm bg-ink-850 mt-6">
        <svg class="w-12 h-12 text-gold-400 mx-auto mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <h3 class="text-lg font-bold text-bone mb-2">موردی با فیلترهای انتخابی شما در بین فایل‌های برگزیده یافت نشد</h3>
        <p class="text-sm text-ash max-w-md mx-auto mb-6">ما بیش از ۳۸۰ فایل فعال تاون‌هاوس در سراسر دبی داریم. فیلترها را بازنشانی کنید یا درخواست جستجوی اختصاصی ثبت فرمایید.</p>
        <button id="reset-filters-btn" class="px-5 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-gold-300 transition-colors">بازنشانی تمام فیلترها</button>
      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">این مجموعه نمونه‌ای از ۳۸۰+ فایل فعال تاون‌هاوس ما در دبی است. تعداد خواب، شهرک و بودجه مدنظرتان را اعلام کنید تا ظرف ۲۴ ساعت فهرستی متناسب دریافت نمایید.</p>
        <a href="/fa/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="درخواست جستجوی اختصاصی تاون‌هاوس">درخواست جستجوی اختصاصی<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. BROWSE BY BEDROOM COUNT -->
  <section class="bg-ink-850 py-24 md:py-32" aria-labelledby="bedroom-heading" aria-label="دسته‌بندی بر اساس تعداد خواب">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">دسته‌بندی بر اساس تعداد خواب</div>
        <h2 id="bedroom-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone">متراژ و نقشه دلخواه خود را بیابید</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">تاون‌هاوس‌ها در دبی از واحدهای جمع‌وجور ۲ خوابه تا خانه‌های خانوادگی وسیع ۵ خوابه گسترده شده‌اند. واحدهای ۳ خوابه ستون فقرات بازار هستند و تعادل ایده‌آلی میان فضا، قیمت و نقدشوندگی ایجاد می‌کنند. واحدهای ۴ و ۵ خوابه تجربه‌ای بسیار نزدیک به ویلاهای مستقل را با نصف قیمت فراهم می‌سازند.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/fa/townhouses-for-sale-in-dubai?beds=2" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="مشاهده تاون‌هاوس‌های ۲ خوابه">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80" alt="تاون‌هاوس ۲ خوابه در شهرک خانوادگی دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">تاون‌هاوس‌های ۲ خوابه</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">مناسب خانواده‌های جوان یا سرمایه‌گذاران. متراژ ۱,۴۰۰ تا ۱,۸۰۰ فوت مربع با ۲ خواب، ۳ سرویس و حیاط دنج.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۱.۸M درهم</span>
              <span class="text-slate">۶۰+ فایل</span>
            </div>
          </div>
        </a>
        <a href="/fa/townhouses-for-sale-in-dubai?beds=3" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="مشاهده تاون‌هاوس‌های ۳ خوابه">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80" alt="تاون‌هاوس ۳ خوابه با حیاط در دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">تاون‌هاوس‌های ۳ خوابه</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">محبوب‌ترین گزینه بازار. ۲,۰۰۰ تا ۲,۸۰۰ فوت مربع با ۳ خواب، ۴ سرویس، اتاق خدمتکار و باغچه در اربین رنچز، دبی هیلز و جی‌وی‌سی.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۲.۲M درهم</span>
              <span class="text-slate">۱۸۰+ فایل</span>
            </div>
          </div>
        </a>
        <a href="/fa/townhouses-for-sale-in-dubai?beds=4" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="مشاهده تاون‌هاوس‌های ۴ خوابه">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" alt="تاون‌هاوس ۴ خوابه در دبی هیلز با حیاط" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">تاون‌هاوس‌های ۴ خوابه</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">واحدهای بزرگ خانوادگی با اتاق خدمتکار، گاراژ دوبل و حیاط وسیع‌تر. ۳,۰۰۰ تا ۳,۸۰۰ فوت مربع در دبی هیلز، تلال الغاف و رنچز ۲.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۳.۸M درهم</span>
              <span class="text-slate">۱۱۰+ فایل</span>
            </div>
          </div>
        </a>
        <a href="/fa/townhouses-for-sale-in-dubai?beds=5" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="مشاهده تاون‌هاوس‌های ۵ خوابه">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="تاون‌هاوس ۵ خوابه در دبی با باغچه بزرگ" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">تاون‌هاوس‌های ۵ خوابه</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">خانه‌هایی در مقیاس ویلا روی پلاک‌های نبش با بیش از ۴,۰۰۰ فوت مربع زیربنا در تلال الغاف، پالم جمیرا و دبی هیلز گلف پلیس.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۶.۵M درهم</span>
              <span class="text-slate">۳۰+ فایل</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 5. BROWSE BY COMMUNITY -->
  <section class="bg-ink-900 py-24 md:py-32" aria-labelledby="community-heading" aria-label="شهرک‌های خانوادگی دبی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">بر اساس شهرک</div>
        <h2 id="community-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone">شهرک‌های خانوادگی دبی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">شش شهرک برنامه‌ریزی‌شده و جامع بازار تاون‌هاوس‌های دبی را شکل می‌دهند. هر شهرک هویت، سازنده، مدارس و بازه قیمتی ویژه‌ای دارد. مشاوران زرین به‌طور مستمر در این مناطق حضور داشته و به ریزه‌کاری‌های هر فاز مسلط هستند.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده تاون‌هاوس‌های اربین رنچز">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" alt="شهرک تاون‌هاوس اربین رنچز با فضای سبز" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">گلف و مدارس برتر</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">اربین رنچز (Arabian Ranches)</h3>
            <p class="text-xs text-ash mb-3">شهرک تثبیت‌شده اعمار با ۱,۶۵۰ خانه، زمین گلف ۱۸ حفره، مدرسه معتبر JESS و فضای سبز دلنشین.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۲.۵ تا ۸ میلیون درهم</span>
              <span class="text-ash">۹۰+ فایل</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده تاون‌هاوس‌های دبی هیلز استیت">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="شهرک تاون‌هاوس دبی هیلز استیت با زمین گلف" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">شهرک پرچمدار اعمار</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">دبی هیلز استیت (Dubai Hills Estate)</h3>
            <p class="text-xs text-ash mb-3">پروژه مدرن اعمار با زمین گلف قهرمانی، دبی هیلز مال و محله‌های محبوب میپل و سدره.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۲.۸ تا ۱۲ میلیون درهم</span>
              <span class="text-ash">۱۴۰+ فایل</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده تاون‌هاوس‌های جی‌وی‌سی">
          <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس جی‌وی‌سی با دسترسی به پارک" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ورود با ارزش عالی</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">جمیرا ویلیج سیرکل (JVC)</h3>
            <p class="text-xs text-ash mb-3">زندگی خانوادگی با قیمت مناسب با بیش از ۳۰ پارک، پروژه‌های بلگراویا و لاروزا با ۳ خوابه از ۱.۸ میلیون درهم.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱.۸ تا ۵ میلیون درهم</span>
              <span class="text-ash">۱۸۰+ فایل</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده تاون‌هاوس‌های تلال الغاف">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس‌های شهرک تلال الغاف با لاگون شنی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">زندگی در کنار لاگون</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">تلال الغاف (Tilal Al Ghaf)</h3>
            <p class="text-xs text-ash mb-3">شهرک نوساز مجید الفطیم با دریاچه لاگون شنی ۷۰ متری، خیابان‌های پوشیده از نخل و واحدهای لوکس لاگونز.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۳.۵ تا ۹ میلیون درهم</span>
              <span class="text-ash">۴۵+ فایل</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده تاون‌هاوس‌های تاون اسکوئر">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="شهرک خانوادگی تاون اسکوئر نشاما" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">شهرک ارزش‌محور</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">تاون اسکوئر (Town Square)</h3>
            <p class="text-xs text-ash mb-3">شهرک ۷۵۰ هکتاری نشاما با صدها بوستان، مدارس و تاون‌هاوس‌های ۳ خوابه نسیم، زهرا و روضه از ۱.۹M درهم.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱.۹ تا ۴.۵ میلیون درهم</span>
              <span class="text-ash">۷۵+ فایل</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده تاون‌هاوس‌های مودون">
          <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="شهرک محصور و آرام مودون" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">محصور و آرام</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">مودون (Mudon)</h3>
            <p class="text-xs text-ash mb-3">شهرک محصور دبی پراپرتیز با پارک مرکزی بزرگ، مرکز خدمات و مدرسه السلام، مناسب خانواده‌های جویای آرامش.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۲.۲ تا ۵.۵ میلیون درهم</span>
              <span class="text-ash">۵۰+ فایل</span>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center mt-10"><a href="/fa/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="مشاهده تمامی مناطق دبی">مشاهده تمامی ۴۵+ منطقه دبی<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 6. WHY TOWNHOUSES ARE POPULAR -->
  <section class="bg-ink-850 py-24 md:py-32" aria-labelledby="why-popular-heading" aria-label="دلایل محبوبیت تاون‌هاوس در دبی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">دلایل محبوبیت تاون‌هاوس</div>
        <h2 id="why-popular-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone">چرا تاون‌هاوس‌ها در دبی پرطرفدار هستند؟</h2>
        <p class="text-ash mt-4 max-w-3xl mx-auto">تاون‌هاوس‌ها از سال ۲۰۲۱ به پرطرفدارترین دسته‌بندی ملکی برای خانواده‌ها در دبی تبدیل شده‌اند و قیمت آن‌ها در شهرک‌های تثبیت‌شده ۶۰ تا ۱۱۰ درصد رشد کرده است. این خانه‌ها توازن بی‌نقصی میان آپارتمان و ویلا ایجاد می‌کنند — حیاط، پارکینگ و فضای کافی برای یک خانواده، بدون قیمت‌های سنگین ویلاهای مستقل بالای ۸ میلیون درهم.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <article class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-labelledby="reason-1-title">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft">
              <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <div>
              <h3 id="reason-1-title" class="text-xl font-bold text-bone mb-2">نقشه‌های متناسب با نیاز خانواده‌ها</h3>
              <p class="text-sm text-ash leading-relaxed">یک تاون‌هاوس ۳ خوابه در دبی معمولاً ۲,۰۰۰ تا ۲,۸۰۰ فوت مربع زیربنا در دو یا سه طبقه ارائه می‌دهد — اتاق‌های خواب در طبقه بالا، نشیمن و آشپزخانه در طبقه پایین، اتاق خدمتکار و ۲ جای پارک مسقف. تفکیک طبقات حریم خصوصی والدین را از فضای بازی کودکان تضمین می‌کند و اتاق خدمتکار با ورودی مجزا نیاز به نیروی کمکی مقیم را برطرف می‌سازد.</p>
            </div>
          </div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-labelledby="reason-2-title">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft">
              <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            <div>
              <h3 id="reason-2-title" class="text-xl font-bold text-bone mb-2">امکانات رفاهی یکپارچه در شهرک‌های جامع</h3>
              <p class="text-sm text-ash leading-relaxed">شهرک‌های تاون‌هاوس دبی از ابتدا با بوستان‌ها، استخرها، مدارس، درمانگاه‌ها و مراکز خرید طراحی شده‌اند نه اینکه بعدها به محله اضافه شوند. اربین رنچز دارای مرکز خرید رنچز سوق، مدرسه JESS و باشگاه گلف با فاصله پیاده‌روی است. دبی هیلز دارای مرکز خرید ۲.۵ میلیون فوت مربعی دبی هیلز مال و مدارس بین‌المللی است.</p>
            </div>
          </div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-labelledby="reason-3-title">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft">
              <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h3 id="reason-3-title" class="text-xl font-bold text-bone mb-2">ارزش خرید بسیار بالاتر در قیاس با ویلا</h3>
              <p class="text-sm text-ash leading-relaxed">یک تاون‌هاوس ۴ خوابه در سدره دبی هیلز بین ۶ تا ۸ میلیون درهم معامله می‌شود، در حالی که یک ویلای مستقل ۴ خوابه مشابه در همان شهرک از ۱۲ تا ۱۵ میلیون درهم آغاز می‌شود — یعنی تقریباً دو برابر قیمت برای ۳۰٪ متراژ بیشتر. تاون‌هاوس ۸۰٪ از تجربه ویلانشینی را با ۵۰٪ قیمت ارائه می‌دهد و بازده اجاره‌ای ۵ تا ۷ درصدی آن بسیار بالاتر از بازده ۳ تا ۴ درصدی ویلاهاست.</p>
            </div>
          </div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-labelledby="reason-4-title">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft">
              <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div>
              <h3 id="reason-4-title" class="text-xl font-bold text-bone mb-2">خیابان‌های امن، محصور و کم‌تردد</h3>
              <p class="text-sm text-ash leading-relaxed">تمامی شش شهرک برتر تاون‌هاوس در دبی دارای گیت ورودی با حراست ۲۴ ساعته و سرعت مجاز داخلی ۳۰ کیلومتر بر ساعت هستند. عبور و مرور خودروهای متفرقه به کل حذف شده است و کودکان می‌توانند با خیالی آسوده تا بوستان، ایستگاه سرویس مدرسه یا خانه دوستانشان پیاده‌روی کنند، بر خلاف برج‌های آپارتمانی که لابی و پارکینگ مشترک با عموم دارند.</p>
            </div>
          </div>
        </article>
      </div>

      <div class="bg-ink-900 border border-gold-line rounded-sm p-8 bg-gold-soft" aria-label="تحلیل بازار تاون‌هاوس دبی">
        <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div class="flex-shrink-0 w-14 h-14 border border-gold-line rounded-xs flex items-center justify-center bg-ink-850">
            <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-bone mb-2">چشم‌انداز بازار تاون‌هاوس دبی در سال ۲۰۲۶</h3>
            <p class="text-sm text-ash leading-relaxed">قیمت تاون‌هاوس‌ها در شش شهرک خانوادگی برتر دبی در سال ۲۰۲۵ بین ۸ تا ۱۵ درصد رشد داشته و با رشد سالانه ۴ تا ۵ درصدی جمعیت و تداوم کمبود واحدهای آماده تحویل خانوادگی، برای سال ۲۰۲۶ نیز رشد ۶ تا ۱۰ درصدی پیش‌بینی می‌شود. عرضه تاون‌هاوس‌ها محدود است — در سال ۲۰۲۶ تنها ۲,۸۰۰ واحد تاون‌هاوس جدید در این شش شهرک تکمیل می‌شود در حالی که بیش از ۱۸,۰۰۰ واحد آپارتمان وارد بازار خواهد شد.</p>
          </div>
          <a href="/fa/consultation" class="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="دریافت گزارش بازار تاون‌هاوس">دریافت گزارش کامل بازار &larr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. WHY BUY A TOWNHOUSE WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-labelledby="why-zarin-heading" aria-label="چرا خرید تاون‌هاوس با زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">چرا املاک زرین</div>
          <h2 id="why-zarin-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">مشاور امین خانواده‌ها برای خرید تاون‌هاوس</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">بسیاری از آگهی‌های اینترنتی تاون‌هاوس تاریخ‌گذشته، تکراری یا بالاتر از قیمت منصفانه بازار هستند. برخی نقشه‌هایی را نشان می‌دهند که با واحد واقعی همخوانی ندارد یا ابعاد حیاط را بیش از واقعیت نشان می‌دهند. مشاوران زرین تک‌تک تاون‌هاوس‌ها را پیش از معرفی شخصاً بازدید و کارشناسی می‌کنند — قدم‌زدن در حیاط، بررسی ابعاد پارکینگ، کیفیت همسایگی و سنجش مسیر تا مدارس. اگر قیمت درخواستی با معاملات واقعی اخیر همخوانی نداشته باشد، قبل از اتلاف وقت به شما اطلاع می‌دهیم.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">کارشناسی حضوری تک‌تک املاک</div><div class="text-xs text-slate mt-1">بررسی جهت آفتاب در باغ، پارکینگ و وضعیت همسایگان.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">ارزیابی مسیر تردد به مدارس برتر</div><div class="text-xs text-slate mt-1">پیش از تصمیم‌گیری نهایی، شخصاً مسیر مدرسه فرزندانتان را رانندگی و ارزیابی می‌کنیم.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">تحلیل منصفانه قیمت در برابر معاملات واقعی</div><div class="text-xs text-slate mt-1">استناد به معاملات ثبت‌شده رسمی همان شهرک، نه قیمت‌های دلبخواهی آگهی‌ها.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">کارمزد استاندارد ۲٪ بدون هزینه‌های پنهان</div><div class="text-xs text-slate mt-1">شفاف، مصوب و کاملاً منطبق با مقررات رسمی اداره اراضی دبی (RERA).</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه خانواده: فارسی، انگلیسی، عربی</div><div class="text-xs text-slate mt-1">ارتباط مستقیم و روان به زبان مادری شما با همراهی و پاسخگویی کامل.</div></div></div>
          </div>
          <a href="/fa/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="درباره پیشینه املاک زرین">درباره پیشینه املاک زرین بیشتر بدانید<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۳۸۰+</div><div class="text-sm font-bold text-bone mb-1">فایل فعال تاون‌هاوس</div><div class="text-xs text-slate">کارشناسی شده توسط مشاوران</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲٪</div><div class="text-sm font-bold text-bone mb-1">کارمزد خریدار</div><div class="text-xs text-slate">استاندارد مصوب RERA</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲۴ ساعت</div><div class="text-sm font-bold text-bone mb-1">ارسال فهرست اختصاصی</div><div class="text-xs text-slate">پس از جلسه مشاوره اولیه</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲۰+ سال</div><div class="text-sm font-bold text-bone mb-1">تجربه در بازار دبی</div><div class="text-xs text-slate">فعالیت مؤسس از سال ۲۰۰۵</div></div>
        </div>
      </div>
      <div class="mt-16 pt-12 border-t border-white-line">
        <div class="text-center mb-8">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">نشان‌های اعتماد و اعتبار</div>
          <h3 class="text-2xl font-bold text-bone">چرا خانواده‌ها زرین را انتخاب می‌کنند؟</h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div><div class="text-sm font-bold text-bone">دارای مجوز رسمی RERA</div><div class="text-xs text-slate mt-1">مشاوره قانونی و تحت نظارت دولت</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">پاسخگویی سریع ۲۴ ساعته</div><div class="text-xs text-slate mt-1">ارائه گزینه‌ها ظرف ۱ روز کاری</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg></div><div class="text-sm font-bold text-bone">تسلط سه‌زبانه EN/FA/AR</div><div class="text-xs text-slate mt-1">ارتباط مستقیم بدون واسطه</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">بدون هیچ‌گونه تعهد اولیه</div><div class="text-xs text-slate mt-1">مشاوره نخستین کاملاً رایگان</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-labelledby="faq-heading" aria-label="پرسش‌های متداول تاون‌هاوس">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پرسش‌های پرتکرار تاون‌هاوس</div>
        <h2 id="faq-heading" class="text-4xl md:text-5xl font-bold tracking-tight text-bone">پرسش‌های متداول خریداران تاون‌هاوس در دبی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">هشت پرسشی که مشاوران زرین به‌طور مکرر از خریداران خانواده می‌شنوند. چنانچه پرسش دیگری مد نظر دارید، از طریق واتس‌اپ پیام ارسال فرمایید تا ظرف کمتر از یک ساعت پاسخ داده شود.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-900 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">میانگین قیمت تاون‌هاوس در دبی در سال ۲۰۲۶ چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">تا اواخر سال ۲۰۲۶، میانگین قیمت یک تاون‌هاوس ۳ خوابه در دبی از ۲.۲ میلیون درهم در شهرک‌های خانوادگی در حال توسعه مانند جی‌وی‌سی و تاون اسکوئر آغاز شده و تا ۵ الی ۷ میلیون درهم در پروژه‌های تثبیت‌شده مانند اربین رنچز و دبی هیلز استیت می‌رسد. تاون‌هاوس‌های ممتاز ۴ و ۵ خوابه در تلال الغاف، پالم جمیرا و سدره دبی هیلز بین ۷ تا ۱۲ میلیون درهم معامله می‌شوند. میانگین قیمت کلی معاملات تاون‌هاوس در دبی حدود ۳.۵ میلیون درهم و میانه قیمت ۳ خوابه‌ها حدود ۲.۸ میلیون درهم است.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">تفاوت تاون‌هاوس با ویلا در دبی چیست؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">تاون‌هاوس در دبی یک واحد مسکونی چندطبقه متصل است که از یک یا دو طرف دارای دیوار مشترک با همسایگان بوده و به طور معمول دارای باغچه خصوصی و ۲ جای پارک مسقف است. ویلا یک ملک کاملاً مستقل روی پلاک اختصاصی خود با حیاط و فضای سبز در هر چهار جهت است. تاون‌هاوس‌ها بین ۱,۸۰۰ تا ۳,۵۰۰ فوت مربع زیربنا دارند، در حالی که ویلاها بین ۴,۰۰۰ تا ۱۵,۰۰۰ فوت مربع هستند. قیمت تاون‌هاوس ۳۰ تا ۵۰ درصد کمتر از ویلای هم‌تعداد اتاق در همان شهرک است و شارژ نگهداری آن نیز به مراتب پایین‌تر است.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">کدام شهرک‌های دبی برای سکونت خانواده‌ها بهترین انتخاب هستند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">برترین شهرک‌های خانوادگی دبی عبارتند از اربین رنچز (پروژه اعمار با ۱,۶۵۰ خانه، زمین گلف، مدارس بین‌المللی و پارک‌های سرسبز)، دبی هیلز استیت (شهرک شاخص اعمار با زمین گلف ۱۸ حفره و مرکز خرید دبی هیلز)، جی‌وی‌سی (گزینه‌ای بسیار مقرون‌به‌صرفه با بیش از ۳۰ پارک محلی)، تلال الغاف (پروژه مجید الفطیم با دریاچه تفریحی شنی ۷۰ متری)، تاون اسکوئر (شهرک ارزش‌محور نشاما با پارک‌های متعدد) و مودون (پروژه محصور دبی پراپرتیز در مجاورت رمرام).</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا تاون‌هاوس‌ها سرمایه‌گذاری مناسبی در دبی هستند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله. تاون‌هاوس‌ها از سال ۲۰۲۱ تا کنون یکی از پربازده‌ترین دارایی‌های ملکی در دبی بوده‌اند و در پروژه‌های جاافتاده مانند اربین رنچز و دبی هیلز رشد سرمایه‌ای معادل ۶۰ تا ۱۱۰ درصد ثبت کرده‌اند. بازده ناخالص اجاره تاون‌هاوس‌های ۳ خوابه معمولاً بین ۵ تا ۷ درصد است که بالاتر از بازده ویلاها (۳ تا ۴ درصد) می‌باشد. رشد پیوسته جمعیت دبی و تمایل خانواده‌ها به فضاهای سبز موجب تقاضای مستمر برای اجاره و خرید این دسته از املاک شده است.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا تاون‌هاوس‌های دبی دارای باغ و حیاط اختصاصی هستند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله. تقریباً تمام تاون‌هاوس‌ها در دبی دارای باغچه خصوصی پشت ساختمان هستند که مساحت آن در واحدهای ۳ خوابه ۲۰۰ تا ۵۰۰ فوت مربع و در واحدهای ۴ خوابه ۴۰۰ تا ۸۰۰ فوت مربع است. واحدهای نبش و گوشه‌ای (Corner) به دلیل برخورداری از حیاط بزرگ‌تر و نورگیری بیشتر، ۱۰ تا ۲۰ درصد ارزش بالاتری دارند. مشاوران زرین جهت‌گیری نور خورشید را در بازدیدهای حضوری بررسی می‌کنند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">هزینه‌های شارژ و نگهداری تاون‌هاوس‌ها در دبی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">شارژ سالانه تاون‌هاوس‌ها در دبی معمولاً بین ۸ تا ۱۵ درهم به ازای هر فوت مربع است که بسیار پایین‌تر از برج‌های آپارتمانی (۱۴ تا ۲۲ درهم) و ویلاها (۱۲ تا ۲۰ درهم) می‌باشد. به عنوان مثال، یک تاون‌هاوس ۳ خوابه با متراژ ۲,۵۰۰ فوت مربع در اربین رنچز حدود ۲۵,۰۰۰ تا ۳۲,۰۰۰ درهم در سال بابت خدمات شهرک پرداخت می‌کند. مشاوران زرین صورت‌حساب‌های رسمی ۳ سال اخیر را پیش از هر خریدی استعلام می‌نمایند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا اتباع خارجی می‌توانند تاون‌هاوس دارای سند ملکی قطعی (Freehold) در دبی بخرند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله. تمامی شهرک‌های شاخص تاون‌هاوس در دبی (اربین رنچز، دبی هیلز، جی‌وی‌سی، تلال الغاف، تاون اسکوئر، مودون و د اسپرینگز) در مناطق آزاد ملکی (Freehold) واقع شده‌اند و تمامی اتباع خارجی بدون محدودیت ملیت می‌توانند سند مالکیت ۱۰۰٪ صددرصدی و قطعی دریافت کنند. سند توسط اداره اراضی دبی (DLD) صادر شده و قابلیت ارث، فروش و دریافت وام بانکی را دارد.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">هنگام خرید تاون‌هاوس در دبی باید به چه نکاتی توجه کرد؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">مهم‌ترین عوامل: موقعیت در ردیف (واحدهای نبش نور و حیاط بهتری دارند اما واحدهای میانی قیمت مناسب‌تری دارند)، جهت‌گیری باغ (باغ‌های رو به شمال خنک‌ترند و باغ‌های رو به جنوب آفتاب عصرگاهی دارند)، سلامت سازه و سیستم تهویه، روند هزینه‌های شارژ، نزدیکی به مدارس و امکانات شهرک، و داده‌های واقعی معاملات اخیر همسایگان. کارشناسان زرین تمامی این موارد را در گزارش کتبی بازدید قید می‌کنند.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">هنوز پرسشی دارید؟ <a href="/fa/consultation" class="text-gold-400 font-semibold hover:underline">رزرو وقت مشاوره رایگان</a> یا <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">ارتباط در واتس‌اپ</a>.</p></div>
    </div>
  </section>

  </main>

  ${faFooterEl.outerHTML}

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 right-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="ارتباط در واتس‌اپ"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script type="module" src="/scripts/nav.js"></script>

  <!-- Client-side filter interaction -->
  <script>
    (function(){
      const chips = document.querySelectorAll('.filter-chip');
      const cards = document.querySelectorAll('.townhouse-card');
      const noMatch = document.getElementById('no-match-state');
      const resetBtn = document.getElementById('reset-filters-btn');

      function filterCards() {
        const active = {};
        chips.forEach(c => {
          if (c.classList.contains('active')) {
            active[c.dataset.group] = c.dataset.value;
          }
        });

        let visibleCount = 0;
        cards.forEach(card => {
          let show = true;
          // Bedrooms filter
          const bedVal = active['bedrooms'] || 'All';
          if (bedVal !== 'All') {
            const cardBeds = card.dataset.bedrooms;
            const targetBeds = bedVal.replace('BR', '');
            if (cardBeds !== targetBeds) show = false;
          }
          // Price filter
          const priceVal = active['price'] || 'Any Price';
          if (priceVal !== 'Any Price') {
            const cardPrice = parseFloat(card.dataset.price);
            if (priceVal === 'Under AED 2M' && cardPrice >= 2000000) show = false;
            else if (priceVal === '2M-4M' && (cardPrice < 2000000 || cardPrice > 4000000)) show = false;
            else if (priceVal === '4M-7M' && (cardPrice < 4000000 || cardPrice > 7000000)) show = false;
            else if (priceVal === '7M+' && cardPrice < 7000000) show = false;
          }
          // Community filter
          const commVal = active['community'] || 'All Communities';
          if (commVal !== 'All Communities') {
            const cardComm = card.dataset.community;
            const targetComm = commVal.toLowerCase().replace(/\\s+/g, '-');
            if (cardComm !== targetComm) show = false;
          }

          if (show) {
            card.classList.remove('hidden-card');
            visibleCount++;
          } else {
            card.classList.add('hidden-card');
          }
        });

        if (noMatch) {
          noMatch.classList.toggle('hidden', visibleCount > 0);
        }
      }

      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const group = chip.dataset.group;
          chips.forEach(c => {
            if (c.dataset.group === group) {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            }
          });
          chip.classList.add('active');
          chip.setAttribute('aria-pressed', 'true');
          filterCards();
        });
      });

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          chips.forEach(c => {
            if (c.dataset.value === 'All' || c.dataset.value === 'Any Price' || c.dataset.value === 'All Communities') {
              c.classList.add('active');
              c.setAttribute('aria-pressed', 'true');
            } else {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            }
          });
          filterCards();
        });
      }
    })();
  </script>
</body>
</html>
`;

// ==========================================
// 3. WRITE BOTH ROOT AND /INDEX.HTML FILES
// ==========================================
// English
fs.writeFileSync('townhouses-for-sale-in-dubai.html', enTownhousesHtml, 'utf8');
fs.mkdirSync('townhouses-for-sale-in-dubai', { recursive: true });
fs.writeFileSync(path.join('townhouses-for-sale-in-dubai', 'index.html'), enTownhousesHtml, 'utf8');

// Persian
fs.writeFileSync(path.join('fa', 'townhouses-for-sale-in-dubai.html'), faTownhousesHtml, 'utf8');
fs.mkdirSync(path.join('fa', 'townhouses-for-sale-in-dubai'), { recursive: true });
fs.writeFileSync(path.join('fa', 'townhouses-for-sale-in-dubai', 'index.html'), faTownhousesHtml, 'utf8');

console.log('Townhouses pages generated successfully for both EN and FA!');
