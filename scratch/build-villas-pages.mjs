import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// Read index.html to extract canonical header and mobile menu
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

// Prepare English Header with active state on Villas and Properties
const enHeaderClone = JSDOM.fragment(enHeaderEl.outerHTML).querySelector('#site-header');
const enPropLink = enHeaderClone.querySelector('#properties-nav-link');
if (enPropLink) {
  enPropLink.setAttribute('aria-current', 'page');
  enPropLink.classList.remove('text-ash');
  enPropLink.classList.add('text-gold-400');
}
const enVillasLink = enHeaderClone.querySelector('a[href="/villas-for-sale-in-dubai"]');
if (enVillasLink) {
  enVillasLink.setAttribute('aria-current', 'page');
  enVillasLink.classList.remove('text-ash');
  enVillasLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare English Mobile Menu with active state
const enMobileClone = JSDOM.fragment(enMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const enVillasMobileLink = enMobileClone.querySelector('a[href="/villas-for-sale-in-dubai"]');
if (enVillasMobileLink) {
  enVillasMobileLink.classList.remove('text-ash');
  enVillasMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Header with active state
const faHeaderClone = JSDOM.fragment(faHeaderEl.outerHTML).querySelector('#site-header');
const faPropLink = faHeaderClone.querySelector('#properties-nav-link');
if (faPropLink) {
  faPropLink.setAttribute('aria-current', 'page');
  faPropLink.classList.remove('text-ash');
  faPropLink.classList.add('text-gold-400');
}
const faVillasLink = faHeaderClone.querySelector('a[href="/fa/villas-for-sale-in-dubai"]');
if (faVillasLink) {
  faVillasLink.setAttribute('aria-current', 'page');
  faVillasLink.classList.remove('text-ash');
  faVillasLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Mobile Menu with active state
const faMobileClone = JSDOM.fragment(faMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const faVillasMobileLink = faMobileClone.querySelector('a[href="/fa/villas-for-sale-in-dubai"]');
if (faVillasMobileLink) {
  faVillasMobileLink.classList.remove('text-ash');
  faVillasMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// ==========================================
// 1. ASSEMBLE ENGLISH VILLAS HTML
// ==========================================
const enVillasHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>Villas for Sale in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Villas for sale in Dubai — Palm Jumeirah, Emirates Hills, Dubai Hills, Arabian Ranches, Jumeirah Islands. Plot sizes, built-up area, private pools, gardens, staff quarters.">
  <meta name="keywords" content="villas for sale in Dubai, Dubai villa for sale, Palm Jumeirah villas, Emirates Hills villas, Dubai Hills villas, Arabian Ranches villas, Jumeirah Islands villas, Tilal Al Ghaf villas, buy villa Dubai, mansion Dubai">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/villas-for-sale-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/villas-for-sale-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/villas-for-sale-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/villas-for-sale-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Villas for Sale in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Standalone villas across Palm Jumeirah, Emirates Hills, Dubai Hills, Arabian Ranches, Jumeirah Islands, Tilal Al Ghaf. Inspected by ZARIN advisors.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Villa for sale in Dubai with private pool">
  <meta property="og:url" content="https://zarinrealestate.com/villas-for-sale-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Villas for Sale in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Standalone villas across Dubai's prime villa communities. Curated by ZARIN advisors.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80">

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

  <link rel="stylesheet" href="/styles/main.css">

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
    .filter-chip{transition:all .2s;cursor:pointer;user-select:none}.filter-chip.active{background:#C8AB83;color:#0A0B0E;border-color:#C8AB83;font-weight:700}
    .sticky-whatsapp{display:none}@media(max-width:1024px){.sticky-whatsapp{display:flex}}
    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
    }
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://zarinrealestate.com/"},
    {"@type":"ListItem","position":2,"name":"Properties","item":"https://zarinrealestate.com/properties"},
    {"@type":"ListItem","position":3,"name":"For Sale","item":"https://zarinrealestate.com/properties-for-sale"},
    {"@type":"ListItem","position":4,"name":"Villas","item":"https://zarinrealestate.com/villas-for-sale-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/villas-for-sale-in-dubai#collectionpage",
    "name":"Villas for Sale in Dubai","url":"https://zarinrealestate.com/villas-for-sale-in-dubai",
    "description":"Standalone villas for sale across Palm Jumeirah, Emirates Hills, Dubai Hills, Arabian Ranches, Jumeirah Islands, and Tilal Al Ghaf. Curated and personally inspected by ZARIN Real Estate advisors.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"5BR Villa — Palm Jumeirah Frond K","url":"https://zarinrealestate.com/properties/5br-palm-frondk-001","image":"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"15500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"6BR Mansion — Emirates Hills Sector W","url":"https://zarinrealestate.com/properties/6br-eh-sector-w-001","image":"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"32000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"4BR Villa — Dubai Hills Maple","url":"https://zarinrealestate.com/properties/4br-dh-maple-001","image":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"7500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"5BR Villa — Arabian Ranches Mirador","url":"https://zarinrealestate.com/properties/5br-ar-mirador-001","image":"https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"9200000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"4BR Villa — Jumeirah Islands","url":"https://zarinrealestate.com/properties/4br-ji-lakeview-001","image":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"11000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"6BR Villa — Tilal Al Ghaf Lagoon","url":"https://zarinrealestate.com/properties/6br-tag-lagoon-001","image":"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"18000000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/villas-for-sale-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"What is the average price of a villa in Dubai in 2026?","acceptedAnswer":{"@type":"Answer","text":"As of late 2026, the average price of a 4-bedroom villa in Dubai ranges from AED 3.5M in communities like Dubai South and Tilal Al Ghaf to AED 18M+ in Emirates Hills and Palm Jumeirah fronds. A mid-tier 4BR villa in Arabian Ranches or Dubai Hills Estate typically trades between AED 5.5M and AED 9M, while 5BR villas start around AED 8M and reach AED 25M in prime golf-front locations. 6BR+ mansions on Emirates Hills Sector W or Palm fronds regularly exceed AED 30M, with trophy assets transacting above AED 80M. ZARIN advisors share current comparables for every community during consultation."}},
      {"@type":"Question","name":"Which communities are best for buying villas in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Dubai's villa market is concentrated in six core communities. Palm Jumeirah leads for beachfront villas with private beach access on the fronds. Emirates Hills is the established trophy enclave with golf-course frontage and the highest plot values in the city. Dubai Hills Estate offers the strongest balance of family infrastructure, golf views, and modern construction. Arabian Ranches remains the mature family favourite with larger plots and a strong community feel. Jumeirah Islands delivers lake-front villas at a discount to Palm Jumeirah. Tilal Al Ghaf is the newest masterplan with a 70,000 sqm lagoon and contemporary architecture. ZARIN advisors match your priorities — beach, golf, schools, plot size — to the right community."}},
      {"@type":"Question","name":"Can foreigners buy freehold villas in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Yes. All six communities featured on this page — Palm Jumeirah, Emirates Hills, Dubai Hills Estate, Arabian Ranches, Jumeirah Islands, and Tilal Al Ghaf — are designated freehold areas where foreign nationals of any country can buy outright freehold villas in their own name. There are no nationality restrictions and no requirement for a UAE residency visa to purchase. Title deeds are issued by Dubai Land Department in the buyer's name and can be inherited, mortgaged, or sold without restriction. The Golden Visa (10-year residency) is automatically triggered by a villa purchase of AED 2M or more, with the title deed serving as primary evidence. ZARIN handles the full transfer process including KYC, NOC, and DLD registration."}},
      {"@type":"Question","name":"What is the difference between a villa and a townhouse in Dubai?","acceptedAnswer":{"@type":"Answer","text":"A standalone villa in Dubai sits on its own plot with no shared walls and typically includes a private garden, private pool, and dedicated parking for 2-4 vehicles. Built-up areas range from 3,500 sqft for a 3BR to 15,000+ sqft for a 6BR mansion. A townhouse, by contrast, shares side walls with neighbouring units in a row of three to five properties, with smaller private gardens (typically 800-1,500 sqft) and shared community pools. Townhouses in communities like Arabian Ranches 2, Dubai Hills, and Tilal Al Ghaf start from AED 2.2M versus AED 3.5M for an equivalent standalone villa. ZARIN advisors help you decide between the two based on budget, privacy needs, and long-term family plans."}},
      {"@type":"Question","name":"Do Dubai villas come with private pools and gardens?","acceptedAnswer":{"@type":"Answer","text":"Most standalone villas in Dubai's freehold communities come with a private garden included on the title plot, and a high proportion include a private pool — either pre-installed by the developer or retrofitted by the previous owner. On Palm Jumeirah fronds, every villa has both a private pool and private beach access. In Dubai Hills, Arabian Ranches, and Tilal Al Ghaf, the developer typically delivers the pool shell and landscaping at handover. In Emirates Hills, pools and gardens are owner-installed, so quality varies significantly between plots. Annual garden maintenance in Dubai runs AED 18,000-45,000 and pool servicing AED 12,000-28,000 depending on size. ZARIN's advisory includes a full landscape and pool condition audit before offer."}},
      {"@type":"Question","name":"What are the annual maintenance costs for a Dubai villa?","acceptedAnswer":{"@type":"Answer","text":"Annual maintenance for a Dubai villa includes community service charges (AED 8-18 per sqft of built-up area depending on community), district cooling (AED 12,000-32,000/year for a 5BR), garden and landscape upkeep (AED 18,000-45,000), pool servicing (AED 12,000-28,000), and AC maintenance (AED 4,000-8,000). Total running costs for a 5BR villa typically run AED 120,000-220,000 per year before mortgage. Emirates Hills and Palm Jumeirah command the highest community fees; Arabian Ranches and Jumeirah Islands are mid-tier; Tilal Al Ghaf and Dubai Hills are at the lower end of the range. ZARIN provides a full ownership cost model including sinking fund, insurance, and DEWA for every villa we shortlist."}},
      {"@type":"Question","name":"Are Dubai villas a good investment compared to apartments?","acceptedAnswer":{"@type":"Answer","text":"Dubai villas typically deliver lower gross rental yields (3.5-5%) than apartments (6-8%) but stronger capital appreciation over 5-10 year horizons. Between 2020 and 2025, prime villa communities saw 70-110% price growth versus 35-55% for equivalent apartments. Villa supply in Dubai is constrained — only 12% of total residential stock is villas, and freehold villa land releases have effectively stopped — which supports long-term value. Villas also appeal to a broader tenant pool: families, embassy staff, and senior executives who pay premiums for private outdoor space. The investment case depends on entry price, plot size, and exit timing. ZARIN provides a 5-year total-return model for every villa mandate, including rental projections, vacancy assumptions, and exit liquidity analysis."}},
      {"@type":"Question","name":"What should I check when buying a villa in Dubai?","acceptedAnswer":{"@type":"Answer","text":"A villa purchase in Dubai requires checks beyond a standard apartment inspection. Verify the plot size on the title deed matches the marketing material — Dubai Land Department plot numbers are definitive. Inspect the structural condition (cracks, foundation settlement, roof leaks) with a qualified surveyor. Audit the pool shell, pump room, and filtration system. Review the landscape irrigation and drainage — poor drainage is the most common defect in older Arabian Ranches villas. Confirm the community's service charge history and any pending major works (painting, roof replacement). Check the staff quarters or maid's room configuration against your household needs. ZARIN advisors personally walk every villa with a 47-point inspection checklist before any offer is submitted."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/villas-for-sale-in-dubai#webpage",
    "url":"https://zarinrealestate.com/villas-for-sale-in-dubai","name":"Villas for Sale in Dubai | ZARIN Real Estate",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "speakable":{"@type":"SpeakableSpecification","cssSelector":["#hero-headline","#tldr-summary"]}}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">Skip to main content</a>

  <!-- ═══ HEADER ═══ -->
  ${enHeaderClone.outerHTML}

  <!-- Mobile Menu Drawer -->
  ${enMobileClone.outerHTML}

  <main id="main">

  <!-- 1. HERO + TL;DR -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Villas for sale hero">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">For Sale &middot; Standalone Villas</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6">Villas<br>for <span class="text-gold-gradient">Sale in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">Standalone villas with private gardens, pools, and staff quarters across Palm Jumeirah, Emirates Hills, Dubai Hills Estate, Arabian Ranches, Jumeirah Islands, and Tilal Al Ghaf. Every villa on this page has been personally inspected by a ZARIN advisor — plot measured, pool audited, service charges verified. Browse current mandates below, then book a viewing.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#villa-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse villas"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>Browse Villas</a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to a villa advisor">Speak to Advisor</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">450+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Villa Listings</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">AED 12.5M</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Avg Villa Price</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">4BR &amp; 5BR</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Top Bedroom Types</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">6</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Top Villa Communities</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. FILTER BAR (sticky) -->
  <section class="sticky top-0 z-50 glass border-b border-white-line py-4" aria-label="Villa filters">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-wrap items-center gap-3">
        <div class="text-xs uppercase tracking-[0.2em] text-slate font-semibold mr-2">Filter:</div>
        <button type="button" class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash" data-filter-type="bedroom" data-filter-val="all" aria-pressed="true">All</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="3" aria-pressed="false">3BR</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="4" aria-pressed="false">4BR</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="5" aria-pressed="false">5BR</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="6" aria-pressed="false">6BR+</button>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="under-5m" aria-pressed="false">Under AED 5M</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="5m-15m" aria-pressed="false">5M-15M</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="15m-30m" aria-pressed="false">15M-30M</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="above-30m" aria-pressed="false">30M+</button>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="palm-jumeirah" aria-pressed="false">Palm Jumeirah</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="emirates-hills" aria-pressed="false">Emirates Hills</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="dubai-hills" aria-pressed="false">Dubai Hills</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="arabian-ranches" aria-pressed="false">Arabian Ranches</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="jumeirah-islands" aria-pressed="false">Jumeirah Islands</button>
        <div class="hidden md:block flex-1"></div>
        <a href="/consultation" class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="Custom villa search request">Custom Search →</a>
      </div>
    </div>
  </section>

  <!-- 3. VILLA LISTINGS GRID -->
  <section id="villa-grid" class="bg-ink-900 py-16 md:py-20" aria-label="Villa listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">Featured Villas</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">Curated Villa Mandates</h2>
        </div>
        <p class="text-sm text-ash max-w-md">A selection of current ZARIN-mandated villas across Dubai's six prime villa communities. Each property has been personally inspected by an advisor — plot measured, pool and garden audited, service charges verified against the latest Oqood and title-deed records. For our complete villa inventory, request a custom search.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="villa-cards-container">

        <!-- Listing 1: 5BR Villa Palm Jumeirah Frond K -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="5" data-price="15500000" data-area="palm-jumeirah" data-price-range="15m-30m">
          <a href="/properties/5br-palm-frondk-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 5BR villa on Palm Jumeirah Frond K">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="5-bedroom beachfront villa on Palm Jumeirah Frond K with private pool and beach" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Beachfront</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 15.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">5BR Villa &middot; Frond K</h3>
            <div class="text-sm text-ash mb-4">Palm Jumeirah &middot; 6,200 sqft plot</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">5</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">6</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,258</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 6BR Mansion Emirates Hills Sector W -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="6" data-price="32000000" data-area="emirates-hills" data-price-range="above-30m">
          <a href="/properties/6br-eh-sector-w-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 6BR mansion in Emirates Hills Sector W">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="6-bedroom mansion in Emirates Hills Sector W overlooking the golf course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Golf View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 32M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">6BR Mansion &middot; Sector W</h3>
            <div class="text-sm text-ash mb-4">Emirates Hills &middot; 14,500 sqft plot</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">6</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">8</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,207</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 4BR Villa Dubai Hills Maple -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="4" data-price="7500000" data-area="dubai-hills" data-price-range="5m-15m">
          <a href="/properties/4br-dh-maple-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR villa in Dubai Hills Maple">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="4-bedroom villa in Dubai Hills Estate Maple with private pool and garden" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Private Pool</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 7.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Villa &middot; Maple</h3>
            <div class="text-sm text-ash mb-4">Dubai Hills Estate &middot; 4,800 sqft plot</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,563</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 5BR Villa Arabian Ranches Mirador -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="5" data-price="9200000" data-area="arabian-ranches" data-price-range="5m-15m">
          <a href="/properties/5br-ar-mirador-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 5BR villa in Arabian Ranches Mirador">
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" alt="5-bedroom villa in Arabian Ranches Mirador with mature garden" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Mature Garden</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 9.2M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">5BR Villa &middot; Mirador</h3>
            <div class="text-sm text-ash mb-4">Arabian Ranches &middot; 5,500 sqft plot</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">5</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">6</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,673</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 4BR Villa Jumeirah Islands -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="4" data-price="11000000" data-area="jumeirah-islands" data-price-range="5m-15m">
          <a href="/properties/4br-ji-lakeview-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR villa in Jumeirah Islands">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="4-bedroom villa in Jumeirah Islands overlooking the lake" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Lake View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 11M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Villa &middot; Island 14</h3>
            <div class="text-sm text-ash mb-4">Jumeirah Islands &middot; 6,800 sqft plot</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,618</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 6BR Villa Tilal Al Ghaf Lagoon -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="6" data-price="18000000" data-area="tilal-al-ghaf" data-price-range="15m-30m">
          <a href="/properties/6br-tag-lagoon-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 6BR villa in Tilal Al Ghaf Lagoon">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="6-bedroom villa in Tilal Al Ghaf overlooking the lagoon" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Lagoon View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 18M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">6BR Villa &middot; Lagoon District</h3>
            <div class="text-sm text-ash mb-4">Tilal Al Ghaf &middot; 9,500 sqft plot</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">6</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">7</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,895</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- No match fallback state -->
      <div id="no-match-state" class="hidden text-center py-16 bg-ink-850 border border-white-line rounded-sm mt-8">
        <p class="text-bone font-semibold text-lg mb-2">No villas match your exact filter selection.</p>
        <p class="text-ash text-sm mb-6">We have 450+ off-market and unlisted villas across Dubai.</p>
        <button type="button" id="reset-filter-link" class="px-6 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase rounded-xs hover:bg-gold-300 transition-colors">Reset All Filters</button>
      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">This is a curated sample. We have access to 450+ active villa listings across Dubai's six prime villa communities. Tell us your bedroom count, plot size, and budget — we'll send a tailored shortlist within 24 hours.</p>
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request custom villa search">Request Custom Search<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. BROWSE BY BEDROOM COUNT -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Browse by bedroom count">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by Bedrooms</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Find Your Villa Size</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Dubai's villa stock clusters around four bedroom configurations. A 3BR villa typically serves a young family with one or two children and a budget under AED 5M. A 4BR villa — Dubai's most-transacted size — accommodates two to three children, a live-in helper, and a home office, with prices from AED 3.5M to AED 14M. A 5BR villa adds a dedicated majlis, second living room, or guest suite, and is the entry point for Emirates Hills and Palm fronds. 6BR+ mansions represent Dubai's trophy tier — plots above 12,000 sqft, double-height entrances, and staff accommodation for two or more. ZARIN advisors match your household profile to the right configuration before any viewing is booked.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block cursor-pointer" data-filter-target="3">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80" alt="3-bedroom villa in Dubai with garden" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">3BR Villas</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Compact standalone villas in Arabian Ranches 2, Dubai Hills, and Tilal Al Ghaf. Ideal for first-time villa buyers and young families.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 3.5M</span>
              <span class="text-slate">120+ listings</span>
            </div>
          </div>
        </div>
        <div class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block cursor-pointer" data-filter-target="4">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" alt="4-bedroom villa in Dubai Hills with pool" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">4BR Villas</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">The most-transacted villa size. Family-sized plots in Dubai Hills, Arabian Ranches, Jumeirah Islands, and Palm Jumeirah trunk.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 5M</span>
              <span class="text-slate">180+ listings</span>
            </div>
          </div>
        </div>
        <div class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block cursor-pointer" data-filter-target="5">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80" alt="5-bedroom villa on Palm Jumeirah frond" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">5BR Villas</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Premium villas with majlis, guest suite, and larger plots. The entry tier for Emirates Hills, Palm fronds, and Tilal Al Ghaf lagoon front.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 8M</span>
              <span class="text-slate">95+ listings</span>
            </div>
          </div>
        </div>
        <div class="bedroom-card-link group bg-ink-900 border border-gold-line rounded-sm overflow-hidden card-lift block bg-gold-soft cursor-pointer" data-filter-target="6">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80" alt="6-bedroom mansion in Emirates Hills" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">6BR+ Mansions</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Trophy-tier mansions on plots above 12,000 sqft. Emirates Hills Sectors, Palm fronds, Jumeirah Bay Island — managed by our Private Office.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 25M</span>
              <span class="text-slate">55+ listings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. BROWSE BY COMMUNITY -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Browse by villa community">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by Community</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Dubai's Six Villa Communities</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Each of Dubai's six prime villa communities has its own character, price band, and ownership profile. Palm Jumeirah leads for beachfront with private beach on the fronds. Emirates Hills is the established trophy enclave with golf-frontage plots and the highest per-square-foot villa values in the city. Dubai Hills Estate offers the strongest balance of family infrastructure, modern construction, and golf-front opportunities. Arabian Ranches remains the mature family favourite with larger plots and a strong community feel. Jumeirah Islands delivers lake-front villas at a discount to Palm Jumeirah. Tilal Al Ghaf is the newest masterplan with a 70,000 sqm lagoon and contemporary architecture. Click a community to see current villa mandates.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/areas/palm-jumeirah" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View villas on Palm Jumeirah">
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="Palm Jumeirah frond villa aerial view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Beachfront</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Palm Jumeirah</h3>
            <p class="text-xs text-ash mb-3">Iconic frond villas with private beach and pool. Trunk villas and apartments with sea view.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 8M – 80M</span>
              <span class="text-ash">95+ villas</span>
            </div>
          </div>
        </a>
        <a href="/areas/emirates-hills" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View villas in Emirates Hills">
          <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="Emirates Hills golf-front mansion" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Trophy</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Emirates Hills</h3>
            <p class="text-xs text-ash mb-3">Dubai's most established trophy enclave. Golf-front plots, owner-built mansions.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 15M – 120M</span>
              <span class="text-ash">65+ villas</span>
            </div>
          </div>
        </a>
        <a href="/areas/dubai-hills-estate" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View villas in Dubai Hills Estate">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Dubai Hills Estate villa community" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Family</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Dubai Hills Estate</h3>
            <p class="text-xs text-ash mb-3">Modern villas around an 18-hole championship golf course. Strong schools and parks.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 3.5M – 35M</span>
              <span class="text-ash">120+ villas</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View villas in Arabian Ranches">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" alt="Arabian Ranches mature villa community" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Established</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Arabian Ranches</h3>
            <p class="text-xs text-ash mb-3">Mature family community with large plots and mature landscaping. Strong resale liquidity.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 4M – 22M</span>
              <span class="text-ash">85+ villas</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View villas in Jumeirah Islands">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Jumeirah Islands lake-front villa" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Lake View</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Jumeirah Islands</h3>
            <p class="text-xs text-ash mb-3">46-island lake community. Lake-front villas at a meaningful discount to Palm Jumeirah.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 7M – 35M</span>
              <span class="text-ash">50+ villas</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View villas in Tilal Al Ghaf">
          <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="Tilal Al Ghaf lagoon villa community" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">New Masterplan</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Tilal Al Ghaf</h3>
            <p class="text-xs text-ash mb-3">Newest villa masterplan with a 70,000 sqm crystal lagoon. Contemporary architecture.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 5M – 40M</span>
              <span class="text-ash">40+ villas</span>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center mt-10"><a href="/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="View all Dubai areas">View All 45+ Areas<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 6. WHY BUY A VILLA WITH ZARIN -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Why buy a villa with ZARIN">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why ZARIN for Villas</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">A Villa Advisor Who Actually Walks the Plot</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">Villa purchases carry risks that apartment purchases do not. Plot boundaries can be misreported, pools can hide structural defects, and the gap between a great villa and a poor one on the same street can be 25% in value. ZARIN advisors personally inspect every villa we share — measuring the plot against the title deed, auditing the pool and landscape condition, reviewing community service-charge history, and assessing staff accommodation against your household needs. If a villa isn't right for you, we tell you before you waste a viewing.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Plot inspection against title deed</div><div class="text-xs text-slate mt-1">We measure the actual plot, not the marketing figure.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Community research &amp; resale trends</div><div class="text-xs text-slate mt-1">Recent comparables, days-on-market, and exit liquidity analysed.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Staff accommodation analysis</div><div class="text-xs text-slate mt-1">Maid's room, driver's room, and live-in staff configuration reviewed.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Pool, landscape &amp; AC condition audit</div><div class="text-xs text-slate mt-1">Hidden defects flagged before offer, not after handover.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">2% standard commission, no hidden fees</div><div class="text-xs text-slate mt-1">Published, transparent, RERA-compliant.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Trilingual advisory: EN, AR, FA</div><div class="text-xs text-slate mt-1">Direct communication in your preferred language.</div></div></div>
          </div>
          <a href="/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Learn more about ZARIN">Learn More About ZARIN<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-ink-900 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">450+</div><div class="text-sm font-bold text-bone mb-1">Verified Villa Listings</div><div class="text-xs text-slate">Inspected by advisors</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">2%</div><div class="text-sm font-bold text-bone mb-1">Buyer Commission</div><div class="text-xs text-slate">Standard, RERA-aligned</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">24hr</div><div class="text-sm font-bold text-bone mb-1">Shortlist Delivery</div><div class="text-xs text-slate">After consultation</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">20+</div><div class="text-sm font-bold text-bone mb-1">Years in Dubai</div><div class="text-xs text-slate">Founder since 2005</div></div>
          </div>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="flex items-center gap-2 mb-2"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">RERA Licensed</div></div><div class="text-xs text-slate">Regulated by Dubai Land Department</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="flex items-center gap-2 mb-2"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">24hr Response</div></div><div class="text-xs text-slate">Shortlist within one business day</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="flex items-center gap-2 mb-2"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Trilingual EN/AR/FA</div></div><div class="text-xs text-slate">Direct advisor in your language</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="flex items-center gap-2 mb-2"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">No Obligation</div></div><div class="text-xs text-slate">Free consultation, no commitment</div></div>
          </div>
          <div class="mt-4 bg-ink-900 border border-white-line rounded-sm p-6">
            <div class="text-xs uppercase tracking-wider text-slate mb-2">Speak to a villa advisor today</div>
            <div class="flex flex-wrap items-center gap-4 text-sm">
              <a href="tel:+971586901231" class="inline-flex items-center gap-2 text-bone hover:text-gold-400 transition-colors" aria-label="Call +971 58 690 1231"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>+971 58 690 1231</a>
              <a href="https://wa.me/971586901231" class="inline-flex items-center gap-2 text-bone hover:text-gold-400 transition-colors" aria-label="WhatsApp us"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>WhatsApp</a>
              <a href="mailto:advisory@zarinrealestate.com" class="inline-flex items-center gap-2 text-bone hover:text-gold-400 transition-colors" aria-label="Email advisory@zarinrealestate.com"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. FAQ -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Villa buying FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Villa Buying FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Common Villa Buyer Questions</h2>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-850 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the average price of a villa in Dubai in 2026?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">As of late 2026, the average price of a 4-bedroom villa in Dubai ranges from AED 3.5M in communities like Dubai South and Tilal Al Ghaf to AED 18M+ in Emirates Hills and Palm Jumeirah fronds. A mid-tier 4BR villa in Arabian Ranches or Dubai Hills Estate typically trades between AED 5.5M and AED 9M, while 5BR villas start around AED 8M and reach AED 25M in prime golf-front locations. 6BR+ mansions on Emirates Hills Sector W or Palm fronds regularly exceed AED 30M, with trophy assets transacting above AED 80M. ZARIN advisors share current comparables for every community during consultation.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Which communities are best for buying villas in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Dubai's villa market is concentrated in six core communities. Palm Jumeirah leads for beachfront villas with private beach access on the fronds. Emirates Hills is the established trophy enclave with golf-course frontage and the highest plot values in the city. Dubai Hills Estate offers the strongest balance of family infrastructure, golf views, and modern construction. Arabian Ranches remains the mature family favourite with larger plots and a strong community feel. Jumeirah Islands delivers lake-front villas at a discount to Palm Jumeirah. Tilal Al Ghaf is the newest masterplan with a 70,000 sqm lagoon and contemporary architecture. ZARIN advisors match your priorities — beach, golf, schools, plot size — to the right community.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can foreigners buy freehold villas in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes. All six communities featured on this page — Palm Jumeirah, Emirates Hills, Dubai Hills Estate, Arabian Ranches, Jumeirah Islands, and Tilal Al Ghaf — are designated freehold areas where foreign nationals of any country can buy outright freehold villas in their own name. There are no nationality restrictions and no requirement for a UAE residency visa to purchase. Title deeds are issued by Dubai Land Department in the buyer's name and can be inherited, mortgaged, or sold without restriction. The Golden Visa (10-year residency) is automatically triggered by a villa purchase of AED 2M or more, with the title deed serving as primary evidence. ZARIN handles the full transfer process including KYC, NOC, and DLD registration.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the difference between a villa and a townhouse in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">A standalone villa in Dubai sits on its own plot with no shared walls and typically includes a private garden, private pool, and dedicated parking for 2-4 vehicles. Built-up areas range from 3,500 sqft for a 3BR to 15,000+ sqft for a 6BR mansion. A townhouse, by contrast, shares side walls with neighbouring units in a row of three to five properties, with smaller private gardens (typically 800-1,500 sqft) and shared community pools. Townhouses in communities like Arabian Ranches 2, Dubai Hills, and Tilal Al Ghaf start from AED 2.2M versus AED 3.5M for an equivalent standalone villa. ZARIN advisors help you decide between the two based on budget, privacy needs, and long-term family plans.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Do Dubai villas come with private pools and gardens?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Most standalone villas in Dubai's freehold communities come with a private garden included on the title plot, and a high proportion include a private pool — either pre-installed by the developer or retrofitted by the previous owner. On Palm Jumeirah fronds, every villa has both a private pool and private beach access. In Dubai Hills, Arabian Ranches, and Tilal Al Ghaf, the developer typically delivers the pool shell and landscaping at handover. In Emirates Hills, pools and gardens are owner-installed, so quality varies significantly between plots. Annual garden maintenance in Dubai runs AED 18,000-45,000 and pool servicing AED 12,000-28,000 depending on size. ZARIN's advisory includes a full landscape and pool condition audit before offer.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What are the annual maintenance costs for a Dubai villa?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Annual maintenance for a Dubai villa includes community service charges (AED 8-18 per sqft of built-up area depending on community), district cooling (AED 12,000-32,000/year for a 5BR), garden and landscape upkeep (AED 18,000-45,000), pool servicing (AED 12,000-28,000), and AC maintenance (AED 4,000-8,000). Total running costs for a 5BR villa typically run AED 120,000-220,000 per year before mortgage. Emirates Hills and Palm Jumeirah command the highest community fees; Arabian Ranches and Jumeirah Islands are mid-tier; Tilal Al Ghaf and Dubai Hills are at the lower end of the range. ZARIN provides a full ownership cost model including sinking fund, insurance, and DEWA for every villa we shortlist.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Are Dubai villas a good investment compared to apartments?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Dubai villas typically deliver lower gross rental yields (3.5-5%) than apartments (6-8%) but stronger capital appreciation over 5-10 year horizons. Between 2020 and 2025, prime villa communities saw 70-110% price growth versus 35-55% for equivalent apartments. Villa supply in Dubai is constrained — only 12% of total residential stock is villas, and freehold villa land releases have effectively stopped — which supports long-term value. Villas also appeal to a broader tenant pool: families, embassy staff, and senior executives who pay premiums for private outdoor space. The investment case depends on entry price, plot size, and exit timing. ZARIN provides a 5-year total-return model for every villa mandate, including rental projections, vacancy assumptions, and exit liquidity analysis.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What should I check when buying a villa in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">A villa purchase in Dubai requires checks beyond a standard apartment inspection. Verify the plot size on the title deed matches the marketing material — Dubai Land Department plot numbers are definitive. Inspect the structural condition (cracks, foundation settlement, roof leaks) with a qualified surveyor. Audit the pool shell, pump room, and filtration system. Review the landscape irrigation and drainage — poor drainage is the most common defect in older Arabian Ranches villas. Confirm the community's service charge history and any pending major works (painting, roof replacement). Check the staff quarters or maid's room configuration against your household needs. ZARIN advisors personally walk every villa with a 47-point inspection checklist before any offer is submitted.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">Still have questions? <a href="/consultation" class="text-gold-400 font-semibold hover:underline">Book a free consultation</a> or <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">WhatsApp us</a>.</p></div>
    </div>
  </section>

  </main>

  <!-- ═══ FOOTER ═══ -->
  ${enFooterEl.outerHTML}

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 right-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="WhatsApp us"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script>
    // Interactive Client-Side Villa Filter System
    const activeFilters = { bedroom: 'all', price: 'all', area: 'all' };
    const filterChips = document.querySelectorAll('.filter-chip');
    const cards = document.querySelectorAll('.villa-card');
    const noMatchBox = document.getElementById('no-match-state');
    const resetLink = document.getElementById('reset-filter-link');

    function applyFilters() {
      let visibleCount = 0;
      cards.forEach(card => {
        const cBed = card.getAttribute('data-bedroom');
        const cPrice = parseInt(card.getAttribute('data-price'), 10);
        const cArea = card.getAttribute('data-area');

        let bedMatch = activeFilters.bedroom === 'all' || activeFilters.bedroom === cBed;
        let areaMatch = activeFilters.area === 'all' || activeFilters.area === cArea;
        let priceMatch = true;

        if (activeFilters.price === 'under-5m') priceMatch = cPrice < 5000000;
        else if (activeFilters.price === '5m-15m') priceMatch = cPrice >= 5000000 && cPrice <= 15000000;
        else if (activeFilters.price === '15m-30m') priceMatch = cPrice > 15000000 && cPrice <= 30000000;
        else if (activeFilters.price === 'above-30m') priceMatch = cPrice > 30000000;

        if (bedMatch && areaMatch && priceMatch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (noMatchBox) {
        if (visibleCount === 0) noMatchBox.classList.remove('hidden');
        else noMatchBox.classList.add('hidden');
      }
    }

    function resetAll() {
      activeFilters.bedroom = 'all';
      activeFilters.price = 'all';
      activeFilters.area = 'all';
      filterChips.forEach(c => {
        const isAll = c.getAttribute('data-filter-val') === 'all';
        c.classList.toggle('active', isAll);
        c.setAttribute('aria-pressed', isAll ? 'true' : 'false');
      });
      applyFilters();
    }

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const type = chip.getAttribute('data-filter-type');
        const val = chip.getAttribute('data-filter-val');

        if (type === 'bedroom') {
          if (val === 'all') {
            document.querySelectorAll('.filter-chip[data-filter-type="bedroom"]').forEach(c => {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
            activeFilters.bedroom = 'all';
          } else {
            const isCurrentlyActive = activeFilters.bedroom === val;
            document.querySelectorAll('.filter-chip[data-filter-type="bedroom"]').forEach(c => {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            });
            if (isCurrentlyActive) {
              const allChip = document.querySelector('.filter-chip[data-filter-type="bedroom"][data-filter-val="all"]');
              if (allChip) {
                allChip.classList.add('active');
                allChip.setAttribute('aria-pressed', 'true');
              }
              activeFilters.bedroom = 'all';
            } else {
              chip.classList.add('active');
              chip.setAttribute('aria-pressed', 'true');
              activeFilters.bedroom = val;
            }
          }
        } else if (type === 'price') {
          if (activeFilters.price === val) {
            chip.classList.remove('active');
            chip.setAttribute('aria-pressed', 'false');
            activeFilters.price = 'all';
          } else {
            document.querySelectorAll('.filter-chip[data-filter-type="price"]').forEach(c => {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
            activeFilters.price = val;
          }
        } else if (type === 'area') {
          if (activeFilters.area === val) {
            chip.classList.remove('active');
            chip.setAttribute('aria-pressed', 'false');
            activeFilters.area = 'all';
          } else {
            document.querySelectorAll('.filter-chip[data-filter-type="area"]').forEach(c => {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
            activeFilters.area = val;
          }
        }
        applyFilters();
      });
    });

    resetLink?.addEventListener('click', resetAll);

    // Bedroom Type Cards Quick-Filter Linkage
    document.querySelectorAll('.bedroom-card-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetVal = link.getAttribute('data-filter-target');
        const matchingChip = document.querySelector(\`.filter-chip[data-filter-type="bedroom"][data-filter-val="\${targetVal}"]\`);
        if (matchingChip) {
          matchingChip.click();
          const grid = document.getElementById('villa-grid');
          if (grid && typeof grid.scrollIntoView === 'function') {
            grid.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Check URL parameters (e.g. ?beds=4)
    const urlParams = new URLSearchParams(window.location.search);
    const bedParam = urlParams.get('beds');
    if (bedParam) {
      const targetChip = document.querySelector(\`.filter-chip[data-filter-type="bedroom"][data-filter-val="\${bedParam}"]\`);
      if (targetChip) targetChip.click();
    }
  </script>
  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>
`;

// ==========================================
// 2. ASSEMBLE PERSIAN VILLAS HTML
// ==========================================
const faVillasHtml = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>خرید ویلا در دبی | املاک و مستغلات زرین</title>
  <meta name="description" content="مجموعه ویلاهای مستقل و مجلل برای خرید در دبی — پالم جمیرا، امارات هیلز، دبی هیلز، عربین رنچز، جمیرا آیلندز و تلال الغاف. استخرهای اختصاصی، باغ‌های سرسبز و کارشناسی رسمی توسط مشاوران زرین.">
  <meta name="keywords" content="خرید ویلا در دبی, ویلا دبی, قیمت ویلا در دبی, ویلاهای پالم جمیرا, امارات هیلز, دبی هیلز استیت, عربین رنچز, جمیرا آیلندز, عمارت لوکس دبی">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/fa/villas-for-sale-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/villas-for-sale-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/villas-for-sale-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/villas-for-sale-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="خرید ویلا در دبی | املاک و مستغلات زرین">
  <meta property="og:description" content="ویلاهای مستقل و باشکوه در پالم جمیرا، امارات هیلز، دبی هیلز و مناطق شاخص دبی. ممیزی و کارشناسی‌شده توسط مشاوران زرین.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="خرید ویلا در دبی با استخر اختصاصی">
  <meta property="og:url" content="https://zarinrealestate.com/fa/villas-for-sale-in-dubai">
  <meta property="og:site_name" content="املاک و مستغلات زرین">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="خرید ویلا در دبی | املاک و مستغلات زرین">
  <meta name="twitter:description" content="ویلاهای مستقل در مناطق برتر ویلایی دبی. مشاوره تخصصی و همراهی کامل با زرین.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80">

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

  <link rel="stylesheet" href="/styles/main.css">

  <style>
    html{scroll-behavior:smooth}body{font-family:"Vazirmatn","Source Sans 3",-apple-system,sans-serif;background:#0A0B0E;color:#F8F9FA;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}
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
    .filter-chip{transition:all .2s;cursor:pointer;user-select:none}.filter-chip.active{background:#C8AB83;color:#0A0B0E;border-color:#C8AB83;font-weight:700}
    .sticky-whatsapp{display:none}@media(max-width:1024px){.sticky-whatsapp{display:flex}}
    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
    }
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"صفحه اصلی","item":"https://zarinrealestate.com/fa"},
    {"@type":"ListItem","position":2,"name":"املاک","item":"https://zarinrealestate.com/fa/properties"},
    {"@type":"ListItem","position":3,"name":"برای فروش","item":"https://zarinrealestate.com/fa/properties-for-sale"},
    {"@type":"ListItem","position":4,"name":"ویلاها","item":"https://zarinrealestate.com/fa/villas-for-sale-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/fa/villas-for-sale-in-dubai#collectionpage",
    "name":"خرید ویلا در دبی","url":"https://zarinrealestate.com/fa/villas-for-sale-in-dubai",
    "description":"ویلاهای مستقل برای فروش در پالم جمیرا، امارات هیلز، دبی هیلز، عربین رنچز، جمیرا آیلندز و تلال الغاف. کارشناسی رسمی توسط مشاوران زرین.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"ویلا ۵ خوابه — پالم جمیرا فروند K","url":"https://zarinrealestate.com/fa/properties/5br-palm-frondk-001","image":"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"15500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"عمارت ۶ خوابه — امارات هیلز سکشن W","url":"https://zarinrealestate.com/fa/properties/6br-eh-sector-w-001","image":"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"32000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"ویلا ۴ خوابه — دبی هیلز میپل","url":"https://zarinrealestate.com/fa/properties/4br-dh-maple-001","image":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"7500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"ویلا ۵ خوابه — عربین رنچز میرادور","url":"https://zarinrealestate.com/fa/properties/5br-ar-mirador-001","image":"https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"9200000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"ویلا ۴ خوابه — جمیرا آیلندز","url":"https://zarinrealestate.com/fa/properties/4br-ji-lakeview-001","image":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"11000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"ویلا ۶ خوابه — تلال الغاف لاگون","url":"https://zarinrealestate.com/fa/properties/6br-tag-lagoon-001","image":"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"18000000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/fa/villas-for-sale-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"میانگین قیمت ویلا در دبی در سال ۲۰۲۶ چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"در اواخر سال ۲۰۲۶، میانگین قیمت یک ویلای ۴ خوابه در دبی از حدود ۳.۵ میلیون درهم در شهرک‌های در حال توسعه نظیر دبی ساوث و تلال الغاف آغاز شده و در پالم جمیرا و امارات هیلز به بیش از ۱۸ میلیون درهم می‌رسد. ویلاهای استاندارد در عربین رنچز یا دبی هیلز بین ۵.۵ تا ۹ میلیون درهم معامله می‌شوند، در حالی که ویلاهای ۵ خوابه از ۸ میلیون درهم شروع می‌شوند. عمارت‌های ۶ خوابه و بالاتر در امارات هیلز یا شاخه‌های پالم بیش از ۳۰ میلیون درهم و تا ۸۰ میلیون درهم قیمت دارند."}},
      {"@type":"Question","name":"بهترین مناطق برای خرید ویلا در دبی کدامند؟","acceptedAnswer":{"@type":"Answer","text":"بازار ویلاهای دبی در شش منطقه اصلی متمرکز است: پالم جمیرا برای ویلاهای ساحلی با دسترسی اختصاصی به دریا؛ امارات هیلز به عنوان معتبرترین شهرک اعیان‌نشین با ویلاهای مشرف به زمین گلف؛ دبی هیلز استیت با توازن عالی میان امکانات خانوادگی و ساخت مدرن؛ عربین رنچز به عنوان شهرکی اصیل و سرسبز با زمین‌های وسیع؛ جمیرا آیلندز با ویلاهای مشرف به دریاچه؛ و تلال الغاف با لاگون کریستالی ۷۰ هزار متری و معماری مدرن."}},
      {"@type":"Question","name":"آیا اتباع خارجی می‌توانند ویلای سند شش‌دانگ (Freehold) در دبی بخرند؟","acceptedAnswer":{"@type":"Answer","text":"بله. تمامی شش منطقه معرفی‌شده در این صفحه مناطق تملک آزاد (Freehold) هستند و اتباع خارجی از هر کشوری می‌توانند سند مالکیت ۱۰۰٪ قطعی به نام خود دریافت کنند. خرید ویلا با ارزش ۲ میلیون درهم یا بیشتر، اقامت ۱۰ ساله طلایی (Golden Visa) امارات را برای خریدار و اعضای خانواده به همراه دارد."}},
      {"@type":"Question","name":"تفاوت ویلای مستقل (Standalone Villa) با تاون‌هاوس چیست؟","acceptedAnswer":{"@type":"Answer","text":"ویلای مستقل روی قطعه زمین اختصاصی بدون دیوار مشترک با همسایه قرار دارد و معمولاً دارای حیاط بزرگ، استخر خصوصی و پارکینگ مسقف ۲ تا ۴ خودرو است. در مقابل، تاون‌هاوس دارای دیوارهای مشترک با واحدهای مجاور بوده و حیاط و استخر مشترک در سطح شهرک دارد."}},
      {"@type":"Question","name":"آیا ویلاهای دبی همراه با استخر و باغچه اختصاصی هستند؟","acceptedAnswer":{"@type":"Answer","text":"اکثر ویلاهای مستقل در مناطق مسکونی دبی دارای باغچه اختصاصی در سند هستند و درصد بالایی از آنها استخر اختصاصی دارند. در پالم جمیرا، تمام ویلاها استخر و ساحل اختصاصی دارند. در دبی هیلز و تلال الغاف معمولاً استخر توسط سازنده تحویل می‌شود. مشاوران زرین پیش از ارائه هرگونه پیشنهاد، وضعیت فنی استخر و فضای سبز را ممیزی می‌کنند."}},
      {"@type":"Question","name":"هزینه‌های سالانه نگهداری و شارژ ویلا در دبی چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"هزینه‌های نگهداری سالانه شامل حق شارژ شهرک (۸ تا ۱۸ درهم بر فوت مربع مساحت بنا)، سرمایش، رسیدگی به باغ و محوطه (۱۸ تا ۴۵ هزار درهم سالانه)، سرویس و فیلتراسیون استخر (۱۲ تا ۲۸ هزار درهم) و نگهداری سیستم تهویه است. تیم زرین پیش از نهایی‌سازی خرید، مدل مالی کامل هزینه‌های سالانه ملک را در اختیار شما می‌گذارد."}},
      {"@type":"Question","name":"آیا خرید ویلا در مقایسه با آپارتمان سرمایه‌گذاری مناسب‌تری است؟","acceptedAnswer":{"@type":"Answer","text":"ویلاها معمولاً بازدهی اجاره ناخالص بین ۳.۵ تا ۵ درصد دارند (در مقایسه با ۶ تا ۸ درصد برای آپارتمان‌ها)، اما رشد ارزش سرمایه‌ای بالاتری در افق‌های ۵ تا ۱۰ ساله نشان داده‌اند. به دلیل محدودیت شدید عرضه زمین‌های ویلایی جدید در دبی (تنها ۱۲٪ از کل بافت مسکونی)، ویلاها حفظ ارزش فوق‌العاده‌ای در برابر نوسانات بازار دارند."}},
      {"@type":"Question","name":"هنگام خرید ویلا در دبی چه مواردی را باید بررسی کرد؟","acceptedAnswer":{"@type":"Answer","text":"باید ابعاد دقیق زمین با سند اداره ثبت اراضی دبی (DLD) مطابقت داده شود، ساختار فونداسیون و سقف بازرسی شود، تاسیسات استخر و سیستم پمپاژ بررسی گردد، سوابق تسویه‌حساب شارژ شهرک استعلام شود و چیدمان اتاق پرسنل و خدمتکار با نیازهای خانواده شما هماهنگ باشد. مشاوران زرین بازرسی ۴۷ مرحله‌ای کامل را پیش از امضای قرارداد انجام می‌دهند."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/fa/villas-for-sale-in-dubai#webpage",
    "url":"https://zarinrealestate.com/fa/villas-for-sale-in-dubai","name":"خرید ویلا در دبی | املاک و مستغلات زرین",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "speakable":{"@type":"SpeakableSpecification","cssSelector":["#hero-headline","#tldr-summary"]}}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">پرش به محتوای اصلی</a>

  <!-- ═══ HEADER ═══ -->
  ${faHeaderClone.outerHTML}

  <!-- Mobile Menu Drawer -->
  ${faMobileClone.outerHTML}

  <main id="main">

  <!-- 1. HERO + TL;DR -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Hero section">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">برای فروش • ویلاهای مستقل و مجلل</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-bone mb-6">خرید ویلا<br>در <span class="text-gold-gradient">دبی</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">ویلاهای مستقل با باغ و استخر اختصاصی، اتاق خدمتکار و راننده در پالم جمیرا، امارات هیلز، دبی هیلز استیت، عربین رنچز، جمیرا آیلندز و تلال الغاف. تمام ویلاهای این صفحه شخصاً توسط مشاوران ارشد زرین کارشناسی و بررسی شده‌اند — متراژ زمین بازبینی شده، استخر و تاسیسات ممیزی گردیده و هزینه‌های شارژ سالانه با سوابق رسمی تطبیق داده شده‌اند. مجموعه ویلاهای زیر را بررسی نمایید یا جهت هماهنگی بازدید اقدام فرمایید.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#villa-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="مشاهده ویلاها"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>مشاهده ویلاها</a>
          <a href="/fa/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="گفتگو با مشاور ارشد ویلا">مشاوره تخصصی خرید</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۴۵۰</div><div class="text-xs text-slate uppercase tracking-wider mt-1">فایل فعال ویلا</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۱۲.۵M AED</div><div class="text-xs text-slate uppercase tracking-wider mt-1">میانگین قیمت ویلا</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۴ و ۵ خوابه</div><div class="text-xs text-slate uppercase tracking-wider mt-1">پرتراکنش‌ترین متراژها</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۶</div><div class="text-xs text-slate uppercase tracking-wider mt-1">شهرک‌های شاخص ویلایی</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. FILTER BAR (sticky) -->
  <section class="sticky top-0 z-50 glass border-b border-white-line py-4" aria-label="فیلتر ویلاها">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-wrap items-center gap-3">
        <div class="text-xs uppercase tracking-[0.1em] text-slate font-semibold ml-2">فیلتر:</div>
        <button type="button" class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash" data-filter-type="bedroom" data-filter-val="all" aria-pressed="true">همه</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="3" aria-pressed="false">۳ خوابه</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="4" aria-pressed="false">۴ خوابه</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="5" aria-pressed="false">۵ خوابه</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="6" aria-pressed="false">۶ خوابه به بالا</button>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="under-5m" aria-pressed="false">زیر ۵ میلیون درهم</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="5m-15m" aria-pressed="false">۵ تا ۱۵ میلیون</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="15m-30m" aria-pressed="false">۱۵ تا ۳۰ میلیون</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="above-30m" aria-pressed="false">بالای ۳۰ میلیون</button>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="palm-jumeirah" aria-pressed="false">پالم جمیرا</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="emirates-hills" aria-pressed="false">امارات هیلز</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="dubai-hills" aria-pressed="false">دبی هیلز</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="arabian-ranches" aria-pressed="false">عربین رنچز</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="jumeirah-islands" aria-pressed="false">جمیرا آیلندز</button>
        <div class="hidden md:block flex-1"></div>
        <a href="/fa/consultation" class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="درخواست جستجوی اختصاصی">جستجوی اختصاصی ←</a>
      </div>
    </div>
  </section>

  <!-- 3. VILLA LISTINGS GRID -->
  <section id="villa-grid" class="bg-ink-900 py-16 md:py-20" aria-label="فهرست ویلاها">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">ویلاهای برگزیده</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">مجموعه ویلاهای کارشناسی‌شده زرین</h2>
        </div>
        <p class="text-sm text-ash max-w-md">منتخبی از ویلاهای انحصاری زرین در شش منطقه شاخص دبی. تمامی املاک شخصاً توسط مشاوران ارشد بررسی، مساحت زمین اعتبارسنجی و وضعیت اسناد و شارژها مطابق آخرین استعلامات رسمی DLD تایید شده‌اند.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="villa-cards-container">

        <!-- Listing 1: 5BR Villa Palm Jumeirah Frond K -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="5" data-price="15500000" data-area="palm-jumeirah" data-price-range="15m-30m">
          <a href="/fa/properties/5br-palm-frondk-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلا ۵ خوابه پالم جمیرا">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="ویلا ساحلی ۵ خوابه در فروند K پالم جمیرا با استخر و ساحل اختصاصی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحلی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۵.۵ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلا ۵ خوابه • فروند K</h3>
            <div class="text-sm text-ash mb-4">پالم جمیرا • ۶٬۲۰۰ فوت مربع زمین</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۵</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۶</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۲٬۲۵۸ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 6BR Mansion Emirates Hills Sector W -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="6" data-price="32000000" data-area="emirates-hills" data-price-range="above-30m">
          <a href="/fa/properties/6br-eh-sector-w-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده عمارت ۶ خوابه امارات هیلز">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="عمارت ۶ خوابه در امارات هیلز سکشن W مشرف به زمین گلف" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید زمین گلف</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۳۲ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">عمارت</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">عمارت ۶ خوابه • سکشن W</h3>
            <div class="text-sm text-ash mb-4">امارات هیلز • ۱۴٬۵۰۰ فوت مربع زمین</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۶</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۸</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۲٬۲۰۷ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 4BR Villa Dubai Hills Maple -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="4" data-price="7500000" data-area="dubai-hills" data-price-range="5m-15m">
          <a href="/fa/properties/4br-dh-maple-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلا ۴ خوابه دبی هیلز میپل">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="ویلا ۴ خوابه در دبی هیلز استیت میپل با استخر و حیاط اختصاصی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">استخر خصوصی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۷.۵ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلا ۴ خوابه • میپل</h3>
            <div class="text-sm text-ash mb-4">دبی هیلز استیت • ۴٬۸۰۰ فوت مربع زمین</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۱٬۵۶۳ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 5BR Villa Arabian Ranches Mirador -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="5" data-price="9200000" data-area="arabian-ranches" data-price-range="5m-15m">
          <a href="/fa/properties/5br-ar-mirador-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلا ۵ خوابه عربین رنچز">
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" alt="ویلا ۵ خوابه در عربین رنچز میرادور با باغچه مشجر" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">باغ مشجر</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۹.۲ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلا ۵ خوابه • میرادور</h3>
            <div class="text-sm text-ash mb-4">عربین رنچز • ۵٬۵۰۰ فوت مربع زمین</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۵</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۶</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۱٬۶۷۳ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 4BR Villa Jumeirah Islands -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="4" data-price="11000000" data-area="jumeirah-islands" data-price-range="5m-15m">
          <a href="/fa/properties/4br-ji-lakeview-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلا ۴ خوابه جمیرا آیلندز">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="ویلا ۴ خوابه در جمیرا آیلندز مشرف به دریاچه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید دریاچه</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۱ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلا ۴ خوابه • آیلند ۱۴</h3>
            <div class="text-sm text-ash mb-4">جمیرا آیلندز • ۶٬۸۰۰ فوت مربع زمین</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۱٬۶۱۸ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 6BR Villa Tilal Al Ghaf Lagoon -->
        <article class="villa-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-bedroom="6" data-price="18000000" data-area="tilal-al-ghaf" data-price-range="15m-30m">
          <a href="/fa/properties/6br-tag-lagoon-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلا ۶ خوابه تلال الغاف">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="ویلا ۶ خوابه در تلال الغاف مشرف به لاگون" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید لاگون</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۸ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلا ۶ خوابه • لاگون دیستریکت</h3>
            <div class="text-sm text-ash mb-4">تلال الغاف • ۹٬۵۰۰ فوت مربع زمین</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۶</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۷</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۱٬۸۹۵ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- No match fallback state -->
      <div id="no-match-state" class="hidden text-center py-16 bg-ink-850 border border-white-line rounded-sm mt-8">
        <p class="text-bone font-semibold text-lg mb-2">موردی با معیارهای انتخابی شما در این بخش یافت نشد.</p>
        <p class="text-ash text-sm mb-6">ما بیش از ۴۵۰ فایل ویلای انحصاری و غیرعلنی (Off-Market) در اختیار داریم.</p>
        <button type="button" id="reset-filter-link" class="px-6 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase rounded-xs hover:bg-gold-300 transition-colors">تنظیم مجدد تمام فیلترها</button>
      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">این مجموعه نمونه‌ای برگزیده است. ما به بیش از ۴۵۰ ویلای فعال در شش شهرک اصلی دبی دسترسی داریم. تعداد خواب، متراژ زمین و بودجه مدنظر خود را مشخص کنید تا ظرف ۲۴ ساعت فهرست اختصاصی برای شما ارسال شود.</p>
        <a href="/fa/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="درخواست جستجوی اختصاصی ویلا">درخواست جستجوی سفارشی<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. BROWSE BY BEDROOM COUNT -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="جستجو بر اساس تعداد خواب">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">انتخاب بر اساس تعداد خواب</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">ویلا با متراژ ایده‌آل خود را بیابید</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">بازار ویلاهای دبی به چهار دسته‌بندی اصلی تفکیک می‌شود: ویلاهای ۳ خوابه برای خانواده‌های نوپا با بودجه زیر ۵ میلیون درهم؛ ویلاهای ۴ خوابه به عنوان پرمعامله‌ترین گروه برای خانواده‌های مقیم؛ ویلاهای ۵ خوابه با مجلس و سوئیت مجزا؛ و عمارت‌های ۶ خوابه به بالا به عنوان املاک تراز اول و شاخص امارات هیلز و پالم جمیرا.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block cursor-pointer" data-filter-target="3">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80" alt="ویلا ۳ خوابه در دبی با باغچه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">ویلاهای ۳ خوابه</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">ویلاهای مستقل جمع‌وجور در عربین رنچز ۲، دبی هیلز و تلال الغاف. انتخابی ایده‌آل برای اولین سرمایه‌گذاری ویلایی.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۳.۵M درهم</span>
              <span class="text-slate">+۱۲۰ فایل</span>
            </div>
          </div>
        </div>
        <div class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block cursor-pointer" data-filter-target="4">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" alt="ویلا ۴ خوابه در دبی هیلز با استخر" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">ویلاهای ۴ خوابه</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">پرمعامله‌ترین متراژ ویلایی در دبی هیلز، عربین رنچز، جمیرا آیلندز و تنه پالم جمیرا با حیاط خانوادگی عالی.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۵M درهم</span>
              <span class="text-slate">+۱۸۰ فایل</span>
            </div>
          </div>
        </div>
        <div class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block cursor-pointer" data-filter-target="5">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80" alt="ویلا ۵ خوابه در شاخه‌های پالم جمیرا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">ویلاهای ۵ خوابه</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">ویلاهای لوکس و وسیع با مجلس و سوئیت مهمان. مناسب امارات هیلز، شاخه‌های پالم و لاگون تلال الغاف.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۸M درهم</span>
              <span class="text-slate">+۹۵ فایل</span>
            </div>
          </div>
        </div>
        <div class="bedroom-card-link group bg-ink-900 border border-gold-line rounded-sm overflow-hidden card-lift block bg-gold-soft cursor-pointer" data-filter-target="6">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80" alt="عمارت ۶ خوابه در امارات هیلز" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">عمارت‌های ۶ خوابه+</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">املاک تراز اول (Trophy) در قطعات بالای ۱۲ هزار فوت مربع، مدیریت‌شده به‌طور اختصاصی توسط Private Office زرین.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۲۵M درهم</span>
              <span class="text-slate">+۵۵ فایل</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. BROWSE BY COMMUNITY -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="شهرک‌های شاخص ویلایی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">بر اساس منطقه و شهرک</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">شش شهرک برتر ویلایی دبی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">هر یک از این شش شهرک ممتاز هویت، امکانات و مشخصات سرمایه‌گذاری متمایزی دارند. روی منطقه موردنظر کلیک نمایید تا فایل‌های فعال آن را مشاهده کنید.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/fa/areas/palm-jumeirah" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="ویلاهای پالم جمیرا">
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="نمای هوایی ویلاهای پالم جمیرا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحلی</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">پالم جمیرا</h3>
            <p class="text-xs text-ash mb-3">ویلاهای نمادین در شاخه‌های پالم با ساحل و استخر اختصاصی.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۸ تا ۸۰ میلیون درهم</span>
              <span class="text-ash">+۹۵ ویلا</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas/emirates-hills" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="ویلاهای امارات هیلز">
          <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="عمارت رو به زمین گلف امارات هیلز" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">تراز اول (Trophy)</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">امارات هیلز</h3>
            <p class="text-xs text-ash mb-3">اصیل‌ترین شهرک اعیان‌نشین دبی با قطعات مشرف به گلف و عمارت‌های باشکوه.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱۵ تا ۱۲۰ میلیون درهم</span>
              <span class="text-ash">+۶۵ ویلا</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas/dubai-hills-estate" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="ویلاهای دبی هیلز استیت">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="شهرک ویلایی دبی هیلز استیت" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">خانوادگی و مدرن</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">دبی هیلز استیت</h3>
            <p class="text-xs text-ash mb-3">ویلاهای مدرن پیرامون زمین گلف قهرمانی ۱۸ حفره‌ای با پارک‌ها و مدارس بین‌المللی.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۳.۵ تا ۳۵ میلیون درهم</span>
              <span class="text-ash">+۱۲۰ ویلا</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="ویلاهای عربین رنچز">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" alt="شهرک ویلایی سرسبز عربین رنچز" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">سرسبز و با اصالت</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">عربین رنچز</h3>
            <p class="text-xs text-ash mb-3">شهرکی اصیل با قطعات وسیع و فضای سبز متراکم، همراه با نقدشوندگی عالی در فروش مجدد.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۴ تا ۲۲ میلیون درهم</span>
              <span class="text-ash">+۸۵ ویلا</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="ویلاهای جمیرا آیلندز">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="ویلاهای رو به دریاچه جمیرا آیلندز" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">رو به دریاچه</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">جمیرا آیلندز</h3>
            <p class="text-xs text-ash mb-3">مجموعه ۴۶ جزیره با ویلاهای مشرف به آب، با قیمتی بسیار مقرون‌به‌صرفه‌تر از پالم جمیرا.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۷ تا ۳۵ میلیون درهم</span>
              <span class="text-ash">+۵۰ ویلا</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="ویلاهای تلال الغاف">
          <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="شهرک ویلایی تلال الغاف با لاگون کریستالی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">طرح جامع نوین</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">تلال الغاف</h3>
            <p class="text-xs text-ash mb-3">جدیدترین طرح جامع با لاگون کریستالی ۷۰ هزار متری و معماری مدرن فوق‌العاده زیبا.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۵ تا ۴۰ میلیون درهم</span>
              <span class="text-ash">+۴۰ ویلا</span>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center mt-10"><a href="/fa/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="مشاهده تمام مناطق دبی">مشاهده تمام ۴۵+ منطقه دبی<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 6. WHY BUY A VILLA WITH ZARIN -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="چرا خرید ویلا با زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">تمایز خدمات زرین در معاملات ویلا</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">مشاوری که زمین و بنا را شخصاً گزینش و ممیزی می‌کند</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">خرید ویلا ریسک‌هایی فراتر از خرید آپارتمان دارد. حدود اربعه زمین ممکن است با تبلیغات مغایر باشد، استخرها می‌توانند ایرادات عایق‌بندی و پمپاژ پنهان داشته باشند و اختلاف قیمت میان دو ویلا در یک کوچه گاه به ۲۵٪ می‌رسد. مشاوران زرین شخصاً هر ویلا را بازرسی می‌کنند — متراژ واقعی زمین را با سند رسمی ثبتی تطبیق می‌دهند، زهکشی و عایق استخر را ممیزی کرده، سوابق تسویه‌حساب شارژ شهرک را استعلام نموده و فضاهای خدماتی را ارزیابی می‌کنند. اگر ویلایی مناسب شما نباشد، پیش از اتلاف وقت در بازدید به شما خواهیم گفت.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">ممیزی ابعاد زمین با سند رسمی ثبتی</div><div class="text-xs text-slate mt-1">ما متراژ واقعی زمین را متر می‌کنیم، نه صرفاً اعداد بروشورها را.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">تحلیل بازار شهرک و نقدشوندگی فروش مجدد</div><div class="text-xs text-slate mt-1">بررسی داده‌های واقعی معاملات قطعی اخیر و میانگین زمان نقدشوندگی.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">ارزیابی فضاهای پرسنل و خدمتکار</div><div class="text-xs text-slate mt-1">بررسی اتاق خدمتکار، اتاق راننده و دسترسی‌های مجزای خدماتی.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">ممیزی استخر، تاسیسات سرمایشی و محوطه</div><div class="text-xs text-slate mt-1">شناسایی ایرادات احتمالی پیش از ارائه پیشنهاد قیمت و امضای توافق.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">کارمزد استاندارد ۲٪ بدون هزینه‌های پنهان</div><div class="text-xs text-slate mt-1">شفاف، مصوب و کاملاً منطبق با مقررات سازمان املاک دبی (RERA).</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه: فارسی، انگلیسی، عربی</div><div class="text-xs text-slate mt-1">ارتباط مستقیم و بدون واسطه با مشاوران ارشد به زبان مادری شما.</div></div></div>
          </div>
          <a href="/fa/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="آشنایی بیشتر با زرین">آشنایی با تاریخچه و پیشینه زرین<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-ink-900 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۴۵۰</div><div class="text-sm font-bold text-bone mb-1">فایل معتبر ویلا</div><div class="text-xs text-slate">کارشناسی‌شده توسط مشاوران</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲٪</div><div class="text-sm font-bold text-bone mb-1">کارمزد خرید</div><div class="text-xs text-slate">استاندارد مصوب RERA</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲۴h</div><div class="text-sm font-bold text-bone mb-1">ارسال فهرست اختصاصی</div><div class="text-xs text-slate">پس از جلسه مشاوره اولیه</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۲۰</div><div class="text-sm font-bold text-bone mb-1">سال حضور در دبی</div><div class="text-xs text-slate">پیشینه فعالیت از ۲۰۰۵</div></div>
          </div>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="flex items-center gap-2 mb-2"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دارای مجوز رسمی RERA</div></div><div class="text-xs text-slate">تحت نظارت اداره اراضی دبی</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="flex items-center gap-2 mb-2"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پاسخگویی سریع ۲۴h</div></div><div class="text-xs text-slate">ارائه تحلیل ظرف یک روز کاری</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="flex items-center gap-2 mb-2"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">سه‌زبانه (FA/EN/AR)</div></div><div class="text-xs text-slate">مشاوره تخصصی به زبان مادری</div></div>
            <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="flex items-center gap-2 mb-2"><svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">بدون تعهد اجباری</div></div><div class="text-xs text-slate">جلسه مشاوره کاملاً رایگان</div></div>
          </div>
          <div class="mt-4 bg-ink-900 border border-white-line rounded-sm p-6">
            <div class="text-xs uppercase tracking-wider text-slate mb-2">همین امروز با مشاوران ویلای زرین گفتگو کنید</div>
            <div class="flex flex-wrap items-center gap-4 text-sm">
              <a href="tel:+971586901231" class="inline-flex items-center gap-2 text-bone hover:text-gold-400 transition-colors" aria-label="تماس با +971 58 690 1231"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg><span dir="ltr">+971 58 690 1231</span></a>
              <a href="https://wa.me/971586901231" class="inline-flex items-center gap-2 text-bone hover:text-gold-400 transition-colors" aria-label="پیام در واتس‌اپ"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>واتس‌اپ</a>
              <a href="mailto:advisory@zarinrealestate.com" class="inline-flex items-center gap-2 text-bone hover:text-gold-400 transition-colors" aria-label="ارسال ایمیل"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>ایمیل مستقیم</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. FAQ -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="پرسش‌های متداول خرید ویلا">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پرسش‌های پرتکرار خریداران ویلا</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">پاسخ شفاف به مهم‌ترین سوالات خرید ویلا در دبی</h2>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-850 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">میانگین قیمت ویلا در دبی در سال ۲۰۲۶ چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">در اواخر سال ۲۰۲۶، میانگین قیمت یک ویلای ۴ خوابه در دبی از حدود ۳.۵ میلیون درهم در شهرک‌های در حال توسعه نظیر دبی ساوث و تلال الغاف آغاز شده و در پالم جمیرا و امارات هیلز به بیش از ۱۸ میلیون درهم می‌رسد. ویلاهای استاندارد در عربین رنچز یا دبی هیلز بین ۵.۵ تا ۹ میلیون درهم معامله می‌شوند، در حالی که ویلاهای ۵ خوابه از ۸ میلیون درهم شروع می‌شوند. عمارت‌های ۶ خوابه و بالاتر در امارات هیلز یا شاخه‌های پالم بیش از ۳۰ میلیون درهم و تا ۸۰ میلیون درهم قیمت دارند.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">بهترین مناطق برای خرید ویلا در دبی کدامند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بازار ویلاهای دبی در شش منطقه اصلی متمرکز است: پالم جمیرا برای ویلاهای ساحلی با دسترسی اختصاصی به دریا؛ امارات هیلز به عنوان معتبرترین شهرک اعیان‌نشین با ویلاهای مشرف به زمین گلف؛ دبی هیلز استیت با توازن عالی میان امکانات خانوادگی و ساخت مدرن؛ عربین رنچز به عنوان شهرکی اصیل و سرسبز با زمین‌های وسیع؛ جمیرا آیلندز با ویلاهای مشرف به دریاچه؛ و تلال الغاف با لاگون کریستالی ۷۰ هزار متری و معماری مدرن.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا افراد خارجی می‌توانند در دبی ویلای سند ملکی شش‌دانگ (Freehold) بخرند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله. تمامی شش منطقه معرفی‌شده در این صفحه مناطق تملک آزاد (Freehold) هستند و اتباع خارجی از هر کشوری می‌توانند سند مالکیت ۱۰۰٪ قطعی به نام خود دریافت کنند. سند به نام خریدار صادر می‌شود و قابل انتقال، ارث و رهن بانکی است. خرید ویلا با ارزش ۲ میلیون درهم یا بیشتر، اقامت ۱۰ ساله طلایی (Golden Visa) امارات را برای خریدار و اعضای خانواده به همراه دارد.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">تفاوت ویلای مستقل (Standalone Villa) با تاون‌هاوس در چیست؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">ویلای مستقل روی قطعه زمین اختصاصی بدون دیوار مشترک با همسایه قرار دارد و معمولاً دارای حیاط بزرگ، استخر خصوصی و پارکینگ مسقف ۲ تا ۴ خودرو است. در مقابل، تاون‌هاوس دارای دیوارهای مشترک با واحدهای مجاور بوده و حیاط و استخر مشترک در سطح شهرک دارد.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا ویلاهای دبی با استخر و حیاط اختصاصی تحویل داده می‌شوند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">اکثر ویلاهای مستقل در مناطق مسکونی دبی دارای باغچه اختصاصی در سند هستند و درصد بالایی از آنها استخر اختصاصی دارند. در پالم جمیرا، تمام ویلاها استخر و ساحل اختصاصی دارند. در دبی هیلز و تلال الغاف معمولاً استخر توسط سازنده تحویل می‌شود. مشاوران زرین پیش از ارائه هرگونه پیشنهاد، وضعیت فنی استخر و فضای سبز را ممیزی می‌کنند.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">هزینه‌های سالانه نگهداری و شارژ ویلا در دبی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">هزینه‌های نگهداری سالانه شامل حق شارژ شهرک (۸ تا ۱۸ درهم بر فوت مربع مساحت بنا)، سرمایش، رسیدگی به باغ و محوطه (۱۸ تا ۴۵ هزار درهم سالانه)، سرویس و فیلتراسیون استخر (۱۲ تا ۲۸ هزار درهم) و نگهداری سیستم تهویه است. تیم زرین پیش از نهایی‌سازی خرید، مدل مالی کامل هزینه‌های سالانه ملک را در اختیار شما می‌گذارد.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا خرید ویلا در مقایسه با آپارتمان سرمایه‌گذاری مناسبی است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">ویلاها معمولاً بازدهی اجاره ناخالص بین ۳.۵ تا ۵ درصد دارند (در مقایسه با ۶ تا ۸ درصد برای آپارتمان‌ها)، اما رشد ارزش سرمایه‌ای بالاتری در افق‌های ۵ تا ۱۰ ساله نشان داده‌اند. به دلیل محدودیت شدید عرضه زمین‌های ویلایی جدید در دبی (تنها ۱۲٪ از کل بافت مسکونی)، ویلاها حفظ ارزش فوق‌العاده‌ای در برابر نوسانات بازار دارند.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">هنگام خرید ویلا در دبی چه مواردی را باید بازرسی و بررسی کرد؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">باید ابعاد دقیق زمین با سند اداره ثبت اراضی دبی (DLD) مطابقت داده شود، ساختار فونداسیون و سقف بازرسی شود، تاسیسات استخر و سیستم پمپاژ بررسی گردد، سوابق تسویه‌حساب شارژ شهرک استعلام شود و چیدمان اتاق پرسنل و خدمتکار با نیازهای خانواده شما هماهنگ باشد. مشاوران زرین بازرسی ۴۷ مرحله‌ای کامل را پیش از امضای قرارداد انجام می‌دهند.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">سوال دیگری دارید؟ <a href="/fa/consultation" class="text-gold-400 font-semibold hover:underline">رزرو وقت مشاوره رایگان</a> یا <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">گفتگو در واتس‌اپ</a>.</p></div>
    </div>
  </section>

  </main>

  <!-- ═══ FOOTER ═══ -->
  ${faFooterEl.outerHTML}

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 left-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="واتس‌اپ"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script>
    // Interactive Client-Side Villa Filter System (FA)
    const activeFilters = { bedroom: 'all', price: 'all', area: 'all' };
    const filterChips = document.querySelectorAll('.filter-chip');
    const cards = document.querySelectorAll('.villa-card');
    const noMatchBox = document.getElementById('no-match-state');
    const resetLink = document.getElementById('reset-filter-link');

    function applyFilters() {
      let visibleCount = 0;
      cards.forEach(card => {
        const cBed = card.getAttribute('data-bedroom');
        const cPrice = parseInt(card.getAttribute('data-price'), 10);
        const cArea = card.getAttribute('data-area');

        let bedMatch = activeFilters.bedroom === 'all' || activeFilters.bedroom === cBed;
        let areaMatch = activeFilters.area === 'all' || activeFilters.area === cArea;
        let priceMatch = true;

        if (activeFilters.price === 'under-5m') priceMatch = cPrice < 5000000;
        else if (activeFilters.price === '5m-15m') priceMatch = cPrice >= 5000000 && cPrice <= 15000000;
        else if (activeFilters.price === '15m-30m') priceMatch = cPrice > 15000000 && cPrice <= 30000000;
        else if (activeFilters.price === 'above-30m') priceMatch = cPrice > 30000000;

        if (bedMatch && areaMatch && priceMatch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (noMatchBox) {
        if (visibleCount === 0) noMatchBox.classList.remove('hidden');
        else noMatchBox.classList.add('hidden');
      }
    }

    function resetAll() {
      activeFilters.bedroom = 'all';
      activeFilters.price = 'all';
      activeFilters.area = 'all';
      filterChips.forEach(c => {
        const isAll = c.getAttribute('data-filter-val') === 'all';
        c.classList.toggle('active', isAll);
        c.setAttribute('aria-pressed', isAll ? 'true' : 'false');
      });
      applyFilters();
    }

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const type = chip.getAttribute('data-filter-type');
        const val = chip.getAttribute('data-filter-val');

        if (type === 'bedroom') {
          if (val === 'all') {
            document.querySelectorAll('.filter-chip[data-filter-type="bedroom"]').forEach(c => {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
            activeFilters.bedroom = 'all';
          } else {
            const isCurrentlyActive = activeFilters.bedroom === val;
            document.querySelectorAll('.filter-chip[data-filter-type="bedroom"]').forEach(c => {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            });
            if (isCurrentlyActive) {
              const allChip = document.querySelector('.filter-chip[data-filter-type="bedroom"][data-filter-val="all"]');
              if (allChip) {
                allChip.classList.add('active');
                allChip.setAttribute('aria-pressed', 'true');
              }
              activeFilters.bedroom = 'all';
            } else {
              chip.classList.add('active');
              chip.setAttribute('aria-pressed', 'true');
              activeFilters.bedroom = val;
            }
          }
        } else if (type === 'price') {
          if (activeFilters.price === val) {
            chip.classList.remove('active');
            chip.setAttribute('aria-pressed', 'false');
            activeFilters.price = 'all';
          } else {
            document.querySelectorAll('.filter-chip[data-filter-type="price"]').forEach(c => {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
            activeFilters.price = val;
          }
        } else if (type === 'area') {
          if (activeFilters.area === val) {
            chip.classList.remove('active');
            chip.setAttribute('aria-pressed', 'false');
            activeFilters.area = 'all';
          } else {
            document.querySelectorAll('.filter-chip[data-filter-type="area"]').forEach(c => {
              c.classList.remove('active');
              c.setAttribute('aria-pressed', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
            activeFilters.area = val;
          }
        }
        applyFilters();
      });
    });

    resetLink?.addEventListener('click', resetAll);

    // Bedroom Type Cards Quick-Filter Linkage
    document.querySelectorAll('.bedroom-card-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetVal = link.getAttribute('data-filter-target');
        const matchingChip = document.querySelector(\`.filter-chip[data-filter-type="bedroom"][data-filter-val="\${targetVal}"]\`);
        if (matchingChip) {
          matchingChip.click();
          const grid = document.getElementById('villa-grid');
          if (grid && typeof grid.scrollIntoView === 'function') {
            grid.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Check URL parameters (e.g. ?beds=4)
    const urlParams = new URLSearchParams(window.location.search);
    const bedParam = urlParams.get('beds');
    if (bedParam) {
      const targetChip = document.querySelector(\`.filter-chip[data-filter-type="bedroom"][data-filter-val="\${bedParam}"]\`);
      if (targetChip) targetChip.click();
    }
  </script>
  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>
`;

// Ensure directories exist
fs.mkdirSync('villas-for-sale-in-dubai', { recursive: true });
fs.mkdirSync('fa/villas-for-sale-in-dubai', { recursive: true });

// Write English files
fs.writeFileSync('villas-for-sale-in-dubai.html', enVillasHtml, 'utf8');
fs.writeFileSync('villas-for-sale-in-dubai/index.html', enVillasHtml, 'utf8');
console.log('Created villas-for-sale-in-dubai.html and villas-for-sale-in-dubai/index.html');

// Write Persian files
fs.writeFileSync('fa/villas-for-sale-in-dubai.html', faVillasHtml, 'utf8');
fs.writeFileSync('fa/villas-for-sale-in-dubai/index.html', faVillasHtml, 'utf8');
console.log('Created fa/villas-for-sale-in-dubai.html and fa/villas-for-sale-in-dubai/index.html');
