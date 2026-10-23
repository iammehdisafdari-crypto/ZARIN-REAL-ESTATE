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

// Prepare English Header with active state on Burj View and Properties
const enHeaderClone = JSDOM.fragment(enHeaderEl.outerHTML).querySelector('#site-header');
const enPropLink = enHeaderClone.querySelector('#properties-nav-link');
if (enPropLink) {
  enPropLink.setAttribute('aria-current', 'page');
  enPropLink.classList.remove('text-ash');
  enPropLink.classList.add('text-gold-400');
}
const enBurjLink = enHeaderClone.querySelector('a[href="/burj-khalifa-view-properties"]');
if (enBurjLink) {
  enBurjLink.setAttribute('aria-current', 'page');
  enBurjLink.classList.remove('text-ash');
  enBurjLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare English Mobile Menu with active state
const enMobileClone = JSDOM.fragment(enMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const enBurjMobileLink = enMobileClone.querySelector('a[href="/burj-khalifa-view-properties"]');
if (enBurjMobileLink) {
  enBurjMobileLink.classList.remove('text-ash');
  enBurjMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Header with active state
const faHeaderClone = JSDOM.fragment(faHeaderEl.outerHTML).querySelector('#site-header');
const faPropLink = faHeaderClone.querySelector('#properties-nav-link');
if (faPropLink) {
  faPropLink.setAttribute('aria-current', 'page');
  faPropLink.classList.remove('text-ash');
  faPropLink.classList.add('text-gold-400');
}
const faBurjLink = faHeaderClone.querySelector('a[href="/fa/burj-khalifa-view-properties"]');
if (faBurjLink) {
  faBurjLink.setAttribute('aria-current', 'page');
  faBurjLink.classList.remove('text-ash');
  faBurjLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Mobile Menu with active state
const faMobileClone = JSDOM.fragment(faMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const faBurjMobileLink = faMobileClone.querySelector('a[href="/fa/burj-khalifa-view-properties"]');
if (faBurjMobileLink) {
  faBurjMobileLink.classList.remove('text-ash');
  faBurjMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// ==========================================
// 1. ASSEMBLE ENGLISH BURJ VIEW HTML
// ==========================================
const enBurjHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>Burj Khalifa View Properties in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Burj Khalifa view properties in Dubai — apartments and penthouses in Downtown Dubai, Business Bay, Opera District, Burj Vista, and The Address Boulevard with direct Burj sightlines.">
  <meta name="keywords" content="Burj Khalifa view properties Dubai, Downtown Dubai apartments, Burj Vista apartments, The Address Boulevard, Business Bay Burj view, Opera District properties, Dubai Fountain view">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/burj-khalifa-view-properties">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/burj-khalifa-view-properties">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/burj-khalifa-view-properties">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/burj-khalifa-view-properties">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Burj Khalifa View Properties in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Apartments and penthouses with direct Burj Khalifa sightlines across Downtown Dubai, Business Bay, and the Opera District. Curated by ZARIN advisors.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Burj Khalifa view properties in Dubai">
  <meta property="og:url" content="https://zarinrealestate.com/burj-khalifa-view-properties">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Burj Khalifa View Properties in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Apartments and penthouses with direct Burj Khalifa sightlines across Dubai's premier Downtown communities.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles/main.css">
  <link rel="stylesheet" href="/styles/header.css">

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
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://zarinrealestate.com/"},
    {"@type":"ListItem","position":2,"name":"Properties","item":"https://zarinrealestate.com/properties"},
    {"@type":"ListItem","position":3,"name":"Burj Khalifa View","item":"https://zarinrealestate.com/burj-khalifa-view-properties"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/burj-khalifa-view-properties#collectionpage",
    "name":"Burj Khalifa View Properties in Dubai","url":"https://zarinrealestate.com/burj-khalifa-view-properties",
    "description":"Apartments and penthouses with direct Burj Khalifa sightlines across Downtown Dubai, Business Bay, the Opera District, Burj Vista, and The Address Boulevard.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"3BR Burj View Apartment — Burj Vista Tower 1","url":"https://zarinrealestate.com/properties/3br-burj-vista-burj-001","image":"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"6500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"2BR Fountain View Apartment — The Address Boulevard","url":"https://zarinrealestate.com/properties/2br-boulevard-burj-001","image":"https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"4800000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"4BR Burj View Penthouse — Downtown Dubai","url":"https://zarinrealestate.com/properties/ph-downtown-burj-001","image":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"22000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"2BR Side-Burj Apartment — Business Bay","url":"https://zarinrealestate.com/properties/2br-businessbay-burj-001","image":"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"3200000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"3BR Full-Burj Apartment — Opera District","url":"https://zarinrealestate.com/properties/3br-opera-burj-001","image":"https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"8200000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"5BR Sky Penthouse — The Address Sky View","url":"https://zarinrealestate.com/properties/ph-skyview-burj-001","image":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"38000000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/burj-khalifa-view-properties#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"What is the price premium for Burj Khalifa view properties in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Burj Khalifa view properties in Dubai trade at a 25-40% premium per square foot compared to equivalent units with city, road, or rear-facing orientations in the same building. A 3-bedroom apartment in Burj Vista with full Burj view typically commands AED 2,800-3,400 per sqft, while the same line on the opposite side trades at AED 1,900-2,300 per sqft. The premium is highest for front-facing units on high floors (40+) with unobstructed sightlines, and narrows for side-angle views or partially obstructed vistas. Fountain-side apartments in The Address Boulevard command an additional 8-12% over Burj-only views because they capture the Dubai Fountain shows and Burj Khalifa New Year fireworks from the same window. ZARIN advisors track per-floor price curves and help clients identify where the premium is genuinely justified versus where the asking price is inflated."}},
      {"@type":"Question","name":"Which buildings have the best Burj Khalifa views?","acceptedAnswer":{"@type":"Answer","text":"The strongest Burj Khalifa sightlines come from five clusters. Burj Vista Towers 1 and 2 sit directly opposite the Burj on Mohammed bin Rashid Boulevard and offer the closest full-frame view in Dubai — many units are within 250 metres of the tower. The Address Boulevard and Address Sky View provide fountain-and-Burj dual views from high floors. Opera District buildings (Fortune Perla, IL Primo, and Grand Bleu Tower) offer an angled Burj view across the Opera Plaza with less crowding. Belhoul Gardens and Burj Khalifa itself offer the iconic at-the-base perspective. Business Bay towers on the Al Khail Road side (Executive Towers, Blue Bay Tower, and select DAMAC projects) provide a side-profile Burj view at a more accessible price. ZARIN maintains a per-building view-corridor map of every Downtown and Business Bay tower, including which floors clear neighbouring obstructions."}},
      {"@type":"Question","name":"Are Burj view properties a good investment?","acceptedAnswer":{"@type":"Answer","text":"Burj Khalifa view properties have been among the strongest-performing sub-segments of Dubai residential since 2020. Downtown Dubai overall has appreciated 55-75% over the past five years, with front-facing Burj view units consistently outperforming rear-facing equivalents by 12-18 percentage points. Rental demand is robust — Burj view 1- and 2-bedroom apartments are the most requested short-term lettings in Dubai during peak season (November to March), and Airbnb-style operators report 75-85% occupancy for premium Burj view stock. Capital appreciation is supported by finite supply: very few new towers with clear Burj sightlines are being delivered, and existing sightlines are protected by Dubai's view-corridor regulations. ZARIN's advisory includes a 5-year total-return model comparing Burj view, beachfront, and inland alternatives for every mandate."}},
      {"@type":"Question","name":"What is the difference between fountain view and Burj view?","acceptedAnswer":{"@type":"Answer","text":"A Burj view apartment looks directly at the Burj Khalifa tower itself, typically from a Downtown or Business Bay tower with the Burj in the sightline. A fountain view apartment overlooks the Dubai Fountain and Burj Lake, with the Burj Khalifa usually visible behind or alongside the fountain — but the primary visual anchor is the water show rather than the tower. Fountain view apartments in The Address Boulevard and Burj Vista command a 8-15% premium over Burj-only views because they capture the evening fountain shows (every 30 minutes after sunset) and the New Year fireworks. Some units offer both fountain and Burj views simultaneously — these are the most sought-after and trade at the highest price per sqft. ZARIN advisors carry per-floor view diagrams that distinguish full-Burj, partial-Burj, fountain-only, and side-angle units in every Downtown building."}},
      {"@type":"Question","name":"Can I rent out a Burj view property short-term?","acceptedAnswer":{"@type":"Answer","text":"Yes — short-term letting (daily and weekly) of Burj view apartments is permitted across Downtown Dubai, Business Bay, and the Opera District, provided the building is registered with Dubai's Department of Tourism and Commerce Marketing (DTCM) as a holiday home licensee. Most major Downtown towers including Burj Vista, The Address Boulevard, and Burj Khalifa itself are DTCM-registered, but specific unit eligibility depends on the owners' association and building management policy. Short-term rentals of Burj view 1- and 2-bedroom apartments during peak season (November to March) typically yield 6-8% gross annually, versus 4-5% for long-term rentals of the same unit. ZARIN's property management arm operates short-term lettings on behalf of owners and handles DTCM licensing, guest vetting, and 24/7 concierge — typically taking 20% of gross rent."}},
      {"@type":"Question","name":"What are the service charges for Burj view buildings?","acceptedAnswer":{"@type":"Answer","text":"Service charges for Burj view buildings in Downtown Dubai and the Opera District typically run AED 22-32 per sqft annually, higher than the Dubai average of AED 16-22 for inland towers. Burj Vista towers charge around AED 24-28 per sqft, The Address Boulevard around AED 30-34 per sqft (reflecting hotel-grade amenities and concierge), and Burj Khalifa itself AED 95-110 per sqft (the highest in Dubai, reflecting the iconic address and Armani Hotel services). Business Bay towers with side Burj views are lighter — typically AED 16-22 per sqft. Service charges cover district cooling (which is mandatory in Downtown and accounts for 35-45% of the bill), common-area maintenance, lift systems, security, and sinking fund. ZARIN provides a full three-year service-charge audit and sinking-fund projection before any offer is submitted."}},
      {"@type":"Question","name":"Do all apartments in Downtown Dubai have Burj views?","acceptedAnswer":{"@type":"Answer","text":"No — only around 35-45% of apartments in Downtown Dubai have direct Burj Khalifa sightlines. The masterplan has buildings on all four sides of the Burj, and units facing away from the tower (towards Financial Centre Road, Al Asayel Street, or Sheikh Zayed Road) see the city skyline or Business Bay towers instead. Even within a Burj-facing building, only units on the Burj side have the view — the opposite side of the same corridor typically faces the rear courtyard or neighbouring towers. Lower floors in some buildings may have Burj views partially obstructed by adjacent towers; high floors almost always command an unobstructed sightline. ZARIN advisors carry floor-by-floor view diagrams for every Downtown tower and can identify which specific units on which floors genuinely see the Burj before a viewing is booked."}},
      {"@type":"Question","name":"How much does a Burj view penthouse cost in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Burj view penthouses in Dubai range from AED 15M for an entry-level 3-bedroom penthouse with partial Burj view in Business Bay, to AED 120M+ for a full-floor Sky Penthouse in Burj Khalifa itself or The Address Sky View. A typical 4-5 bedroom Burj-facing penthouse in Burj Vista or The Address Boulevard trades at AED 22-45M, while ultra-premium Sky Penthouses in Address Sky View and Burj Khalifa start at AED 35M and reach AED 80-120M for full-floor Sky Collection units. Per-sqft pricing for Burj view penthouses typically runs AED 4,000-5,500, versus AED 2,800-3,400 for lower-floor Burj view apartments in the same building. ZARIN's Private Office maintains a discreet register of off-market Burj view penthouse owners willing to sell to qualified buyers."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/burj-khalifa-view-properties#webpage",
    "url":"https://zarinrealestate.com/burj-khalifa-view-properties","name":"Burj Khalifa View Properties in Dubai | ZARIN Real Estate",
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
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Burj Khalifa view properties hero">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">For Sale &middot; By Lifestyle</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6">Burj Khalifa View<br><span class="text-gold-gradient">Properties in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">Apartments and penthouses with direct Burj Khalifa sightlines across Downtown Dubai, Business Bay, the Opera District, Burj Vista, and The Address Boulevard. Every Burj view listing is personally inspected by a ZARIN advisor — we verify the actual sightline from the unit, check for future obstructions, and audit the service charges before sharing it. No inflated premiums, no rear-facing listings dressed up as Burj view.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#featured-listings" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse Burj view listings"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>Browse Properties</a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to a Burj view advisor">Speak to Advisor</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">240+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Burj View Listings</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">25-40%</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Premium vs. Inland</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">2-3BR</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Popular Layouts</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">5 Towers</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Top View Buildings</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. BURJ VIEW COMMUNITIES SHOWCASE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Burj view communities showcase">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Burj View Communities</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Five Towers, One Iconic Sightline</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Burj Khalifa view property is concentrated across five clusters in central Dubai — Downtown Dubai, the Opera District, Business Bay, Burj Vista, and The Address Boulevard. Each offers a different angle on the Burj: full-frame from across the Boulevard, side-profile from Business Bay, or fountain-and-Burj from the Address line. The choice shapes both lifestyle and capital value, because a fountain-side Burj view in The Address Boulevard trades 8-15% higher than a Burj-only view in Burj Vista. ZARIN advisors carry per-floor view diagrams for every tower and can identify which specific units genuinely see the Burj — and which are marketed as Burj view but face the rear courtyard instead.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Downtown Dubai -->
        <a href="/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View Burj view properties in Downtown Dubai">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="Downtown Dubai Burj Khalifa view skyline at dusk" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Full Burj View</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Downtown Dubai</h3>
            <p class="text-xs text-ash mb-3">The masterplan surrounding the Burj. Highest concentration of front-facing Burj view towers in the city, including Burj Vista and The Address Boulevard.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.8M &ndash; 60M</span>
              <span class="text-ash">140+ listings</span>
            </div>
          </div>
        </a>

        <!-- Opera District -->
        <a href="/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View Burj view properties in the Opera District">
          <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80" alt="Dubai Opera District and Burj Khalifa" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Side Angle</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Opera District</h3>
            <p class="text-xs text-ash mb-3">Newer low-rise enclave between the Opera Plaza and Mohammed bin Rashid Boulevard. Fortune Perla, IL Primo, and Grand Bleu Tower offer angled Burj views.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 2.5M &ndash; 28M</span>
              <span class="text-ash">38+ listings</span>
            </div>
          </div>
        </a>

        <!-- Business Bay -->
        <a href="/areas/business-bay" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View Burj view properties in Business Bay">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Business Bay towers with side-profile Burj Khalifa view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Side Profile</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Business Bay</h3>
            <p class="text-xs text-ash mb-3">Towers on the Al Khail Road side offer a side-profile Burj view at 30-45% lower entry than Downtown. Executive Towers and Blue Bay are popular picks.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.2M &ndash; 22M</span>
              <span class="text-ash">95+ listings</span>
            </div>
          </div>
        </a>

        <!-- Burj Vista -->
        <a href="/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View Burj view properties in Burj Vista">
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="Burj Vista towers facing Burj Khalifa" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Front-Facing</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Burj Vista</h3>
            <p class="text-xs text-ash mb-3">Twin towers directly opposite the Burj on Mohammed bin Rashid Boulevard. The closest full-frame Burj view in Dubai — many units within 250m of the tower.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 3.5M &ndash; 45M</span>
              <span class="text-ash">52+ listings</span>
            </div>
          </div>
        </a>

        <!-- The Address Boulevard -->
        <a href="/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View Burj view properties at The Address Boulevard">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="The Address Boulevard tower with Burj and fountain view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Fountain View</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">The Address Boulevard</h3>
            <p class="text-xs text-ash mb-3">Hotel-branded residences with dual fountain-and-Burj views from high floors. Strongest capital appreciation of any Burj view tower since 2020.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 2.8M &ndash; 38M</span>
              <span class="text-ash">48+ listings</span>
            </div>
          </div>
        </a>

        <!-- Burj Khalifa itself -->
        <a href="/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View residences inside Burj Khalifa">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Burj Khalifa residential entrance and fountain" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">At the Base</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Burj Khalifa Residences</h3>
            <p class="text-xs text-ash mb-3">Inside the icon. Sky Collection full-floor apartments at floors 100+ deliver the most famous address in Dubai. Limited resale stock, high service charges.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 4M &ndash; 120M</span>
              <span class="text-ash">18+ listings</span>
            </div>
          </div>
        </a>

      </div>
      <div class="text-center mt-10"><a href="/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="View all Dubai areas">View All Areas<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 3. FEATURED BURJ VIEW LISTINGS -->
  <section id="featured-listings" class="bg-ink-900 py-16 md:py-20" aria-label="Featured Burj view listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">Featured Listings</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">Curated Burj View Mandates</h2>
        </div>
        <p class="text-sm text-ash max-w-md">A selection of current ZARIN-mandated Burj view listings. Each property has been personally inspected by an advisor — including the actual Burj sightline from the unit, the view-corridor protection status, and the latest service-charge audit. For our complete inventory, request a custom search.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Listing 1: 3BR Burj Vista -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/3br-burj-vista-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR Burj view apartment in Burj Vista Tower 1">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="3-bedroom Burj view apartment in Burj Vista Tower 1 with full-frame Burj Khalifa sightline" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Burj View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 6.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment</div><div class="text-xs text-slate">Burj Vista</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Apartment &middot; Tower 1, Fl. 42</h3>
            <div class="text-sm text-ash mb-4">2,180 sqft &middot; Full Burj view, high floor</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,982</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 2BR Address Boulevard -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/2br-boulevard-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 2BR fountain view apartment at The Address Boulevard">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="2-bedroom apartment at The Address Boulevard with dual fountain and Burj Khalifa view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Fountain + Burj</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 4.8M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment</div><div class="text-xs text-slate">Address Blvd</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">2BR Apartment &middot; Fl. 38</h3>
            <div class="text-sm text-ash mb-4">1,650 sqft &middot; Fountain &amp; Burj view</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">2</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">3</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,909</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 4BR Penthouse Downtown -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/ph-downtown-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR Burj view penthouse in Downtown Dubai">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="4-bedroom penthouse in Downtown Dubai with full Burj Khalifa view from private terrace" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Burj View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 22M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Penthouse</div><div class="text-xs text-slate">Downtown</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Penthouse &middot; Fl. 65</h3>
            <div class="text-sm text-ash mb-4">5,100 sqft &middot; 1,400 sqft terrace</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 4,314</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 2BR Business Bay -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/2br-businessbay-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 2BR side-Burj apartment in Business Bay">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="2-bedroom apartment in Business Bay with side-profile Burj Khalifa view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Side Burj</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 3.2M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment</div><div class="text-xs text-slate">Business Bay</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">2BR Apartment &middot; Executive Towers</h3>
            <div class="text-sm text-ash mb-4">1,420 sqft &middot; Side Burj profile</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">2</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">3</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,254</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 3BR Opera District -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/3br-opera-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR full Burj view apartment in the Opera District">
            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80" alt="3-bedroom apartment in Opera District with full Burj Khalifa view across Opera Plaza" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Burj View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 8.2M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment</div><div class="text-xs text-slate">Opera District</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Apartment &middot; IL Primo</h3>
            <div class="text-sm text-ash mb-4">2,640 sqft &middot; Burj view across Opera Plaza</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 3,106</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 5BR Sky Penthouse Address Sky View -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/ph-skyview-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 5BR Sky Penthouse at The Address Sky View">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="5-bedroom Sky Penthouse at The Address Sky View with panoramic Burj Khalifa and Downtown view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Burj View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 38M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Penthouse</div><div class="text-xs text-slate">Address Sky View</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">5BR Sky Penthouse &middot; Fl. 50</h3>
            <div class="text-sm text-ash mb-4">8,500 sqft &middot; 360&deg; Downtown + Burj view</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">5</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">7</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 4,471</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 text-center bg-ink-850 border border-white-line rounded-sm p-10">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">Looking for Something Specific?</div>
        <h3 class="text-2xl md:text-3xl font-bold text-bone mb-4">Tell Us Your Brief</h3>
        <p class="text-sm text-slate mb-6">This is a curated sample. ZARIN has access to 240+ active Burj view listings across Downtown, Business Bay, the Opera District, and Burj Khalifa itself — including off-market Sky Collection mandates not listed publicly. Tell us your budget, preferred view orientation, and floor preference and we'll send a tailored shortlist within 24 hours.</p>
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request custom Burj view search">Request Custom Search<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. WHY BURJ VIEW -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Why Burj view">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why Burj View</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">The Case for the Burj Sightline</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">A Burj Khalifa view is the most concentrated piece of address equity in Dubai residential. Only 35-45% of Downtown apartments actually see the Burj, and Dubai's view-corridor regulations prevent new towers from blocking existing sightlines — which means the supply of Burj view units is effectively fixed while demand keeps rising. Below are the four reasons ZARIN recommends Burj view mandates to clients seeking both lifestyle and capital preservation in central Dubai.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group card-lift">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a8 8 0 1116 0M3 20a9 9 0 0118 0"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 01</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Iconic Landmark</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">The Burj Khalifa is the world's tallest building and Dubai's single most recognised global icon. Owning a home that looks directly at it — particularly during the evening fountain shows and New Year fireworks — is a permanent lifestyle and status statement that no other Dubai view can replicate. The view itself becomes a primary memory of the home.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">830m of iconography</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group card-lift">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 02</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Premium Pricing</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Burj view units trade at a 25-40% premium per sqft over equivalent rear-facing units in the same building. A 3-bedroom in Burj Vista with full Burj view sells at AED 2,800-3,400 per sqft versus AED 1,900-2,300 for the same line on the opposite side. Fountain-and-Burj dual views in The Address Boulevard command an additional 8-12% over Burj-only views.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+25-40% price premium</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group card-lift">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 03</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Rental Demand</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Burj view apartments — particularly 1- and 2-bedroom units in Downtown towers — are the most requested short-term lettings in Dubai. During peak season (November to March) DTCM-licensed Burj view units run 75-85% occupancy and command 30-50% nightly premiums over comparable inland stock. Long-term rents are also 20-35% higher than rear-facing equivalents.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+30-50% peak rents</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group card-lift">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 04</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Capital Appreciation</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Downtown Dubai overall has appreciated 55-75% since 2020, with front-facing Burj view units outperforming rear-facing equivalents by 12-18 percentage points. Burj Vista and The Address Boulevard have been among the top-five capital appreciation towers in the city. The view-corridor protection makes future supply effectively fixed — appreciation is structurally supported.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+55-75% since 2020</div>
        </article>

      </div>
    </div>
  </section>

  <!-- 5. WHY BUY WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Why buy with ZARIN">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why ZARIN</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">An Advisor Who Checks the Actual Sightline</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">Burj view listings have one of the highest misrepresentation rates in Dubai real estate. Units marketed as &ldquo;Burj view&rdquo; often have a partial or angled sightline, a view that's blocked by a neighbouring tower on lower floors, or — most commonly — a view that faces the rear courtyard with a glimpse of the Burj tip in the distance. ZARIN advisors personally inspect every Burj view property before sharing it. We stand in the unit, photograph the actual sightline, verify which floor the Burj clears neighbouring obstructions, audit the latest service-charge statement, and check the view-corridor protection status. If the asking premium isn't justified by the genuine view quality, we tell you before you waste a viewing.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Every Burj view listing physically inspected</div><div class="text-xs text-slate mt-1">We photograph the actual sightline from the unit.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">View-corridor protection status verified</div><div class="text-xs text-slate mt-1">No future towers blocking your Burj sightline.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Service charges &amp; sinking fund audited</div><div class="text-xs text-slate mt-1">Last 3 years audited before any offer is submitted.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Trilingual advisory: EN, AR, FA</div><div class="text-xs text-slate mt-1">Direct communication in your preferred language.</div></div></div>
          </div>
          <a href="/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Learn more about ZARIN">Learn More About ZARIN<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">240+</div><div class="text-sm font-bold text-bone mb-1">Burj View Listings</div><div class="text-xs text-slate">Inspected by advisors</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">2%</div><div class="text-sm font-bold text-bone mb-1">Buyer Commission</div><div class="text-xs text-slate">Standard, RERA-aligned</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">24hr</div><div class="text-sm font-bold text-bone mb-1">Shortlist Delivery</div><div class="text-xs text-slate">After consultation</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">20+</div><div class="text-sm font-bold text-bone mb-1">Years in Dubai</div><div class="text-xs text-slate">Founder since 2005</div></div>
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

  <!-- 6. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Burj view FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Burj View FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Common Burj View Questions</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Eight questions ZARIN advisors hear most often from Burj view buyers. If yours isn't covered, message us on WhatsApp for a direct answer — typically within an hour during business hours.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-900 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the price premium for Burj Khalifa view properties in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Burj Khalifa view properties in Dubai trade at a 25-40% premium per square foot compared to equivalent units with city, road, or rear-facing orientations in the same building. A 3-bedroom apartment in Burj Vista with full Burj view typically commands AED 2,800-3,400 per sqft, while the same line on the opposite side trades at AED 1,900-2,300 per sqft. The premium is highest for front-facing units on high floors (40+) with unobstructed sightlines, and narrows for side-angle views or partially obstructed vistas. Fountain-side apartments in The Address Boulevard command an additional 8-12% over Burj-only views because they capture the Dubai Fountain shows and Burj Khalifa New Year fireworks from the same window. ZARIN advisors track per-floor price curves and help clients identify where the premium is genuinely justified versus where the asking price is inflated.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Which buildings have the best Burj Khalifa views?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">The strongest Burj Khalifa sightlines come from five clusters. Burj Vista Towers 1 and 2 sit directly opposite the Burj on Mohammed bin Rashid Boulevard and offer the closest full-frame view in Dubai — many units are within 250 metres of the tower. The Address Boulevard and Address Sky View provide fountain-and-Burj dual views from high floors. Opera District buildings (Fortune Perla, IL Primo, and Grand Bleu Tower) offer an angled Burj view across the Opera Plaza with less crowding. Belhoul Gardens and Burj Khalifa itself offer the iconic at-the-base perspective. Business Bay towers on the Al Khail Road side (Executive Towers, Blue Bay Tower, and select DAMAC projects) provide a side-profile Burj view at a more accessible price. ZARIN maintains a per-building view-corridor map of every Downtown and Business Bay tower, including which floors clear neighbouring obstructions.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Are Burj view properties a good investment?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Burj Khalifa view properties have been among the strongest-performing sub-segments of Dubai residential since 2020. Downtown Dubai overall has appreciated 55-75% over the past five years, with front-facing Burj view units consistently outperforming rear-facing equivalents by 12-18 percentage points. Rental demand is robust — Burj view 1- and 2-bedroom apartments are the most requested short-term lettings in Dubai during peak season (November to March), and Airbnb-style operators report 75-85% occupancy for premium Burj view stock. Capital appreciation is supported by finite supply: very few new towers with clear Burj sightlines are being delivered, and existing sightlines are protected by Dubai's view-corridor regulations. ZARIN's advisory includes a 5-year total-return model comparing Burj view, beachfront, and inland alternatives for every mandate.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the difference between fountain view and Burj view?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">A Burj view apartment looks directly at the Burj Khalifa tower itself, typically from a Downtown or Business Bay tower with the Burj in the sightline. A fountain view apartment overlooks the Dubai Fountain and Burj Lake, with the Burj Khalifa usually visible behind or alongside the fountain — but the primary visual anchor is the water show rather than the tower. Fountain view apartments in The Address Boulevard and Burj Vista command a 8-15% premium over Burj-only views because they capture the evening fountain shows (every 30 minutes after sunset) and the New Year fireworks. Some units offer both fountain and Burj views simultaneously — these are the most sought-after and trade at the highest price per sqft. ZARIN advisors carry per-floor view diagrams that distinguish full-Burj, partial-Burj, fountain-only, and side-angle units in every Downtown building.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can I rent out a Burj view property short-term?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes — short-term letting (daily and weekly) of Burj view apartments is permitted across Downtown Dubai, Business Bay, and the Opera District, provided the building is registered with Dubai's Department of Tourism and Commerce Marketing (DTCM) as a holiday home licensee. Most major Downtown towers including Burj Vista, The Address Boulevard, and Burj Khalifa itself are DTCM-registered, but specific unit eligibility depends on the owners' association and building management policy. Short-term rentals of Burj view 1- and 2-bedroom apartments during peak season (November to March) typically yield 6-8% gross annually, versus 4-5% for long-term rentals of the same unit. ZARIN's property management arm operates short-term lettings on behalf of owners and handles DTCM licensing, guest vetting, and 24/7 concierge — typically taking 20% of gross rent.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What are the service charges for Burj view buildings?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Service charges for Burj view buildings in Downtown Dubai and the Opera District typically run AED 22-32 per sqft annually, higher than the Dubai average of AED 16-22 for inland towers. Burj Vista towers charge around AED 24-28 per sqft, The Address Boulevard around AED 30-34 per sqft (reflecting hotel-grade amenities and concierge), and Burj Khalifa itself AED 95-110 per sqft (the highest in Dubai, reflecting the iconic address and Armani Hotel services). Business Bay towers with side Burj views are lighter — typically AED 16-22 per sqft. Service charges cover district cooling (which is mandatory in Downtown and accounts for 35-45% of the bill), common-area maintenance, lift systems, security, and sinking fund. ZARIN provides a full three-year service-charge audit and sinking-fund projection before any offer is submitted.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Do all apartments in Downtown Dubai have Burj views?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">No — only around 35-45% of apartments in Downtown Dubai have direct Burj Khalifa sightlines. The masterplan has buildings on all four sides of the Burj, and units facing away from the tower (towards Financial Centre Road, Al Asayel Street, or Sheikh Zayed Road) see the city skyline or Business Bay towers instead. Even within a Burj-facing building, only units on the Burj side have the view — the opposite side of the same corridor typically faces the rear courtyard or neighbouring towers. Lower floors in some buildings may have Burj views partially obstructed by adjacent towers; high floors almost always command an unobstructed sightline. ZARIN advisors carry floor-by-floor view diagrams for every Downtown tower and can identify which specific units on which floors genuinely see the Burj before a viewing is booked.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">How much does a Burj view penthouse cost in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Burj view penthouses in Dubai range from AED 15M for an entry-level 3-bedroom penthouse with partial Burj view in Business Bay, to AED 120M+ for a full-floor Sky Penthouse in Burj Khalifa itself or The Address Sky View. A typical 4-5 bedroom Burj-facing penthouse in Burj Vista or The Address Boulevard trades at AED 22-45M, while ultra-premium Sky Penthouses in Address Sky View and Burj Khalifa start at AED 35M and reach AED 80-120M for full-floor Sky Collection units. Per-sqft pricing for Burj view penthouses typically runs AED 4,000-5,500, versus AED 2,800-3,400 for lower-floor Burj view apartments in the same building. ZARIN's Private Office maintains a discreet register of off-market Burj view penthouse owners willing to sell to qualified buyers.</div>
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
// 2. ASSEMBLE PERSIAN BURJ VIEW HTML
// ==========================================
const faBurjHtml = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>خرید ملک با دید برج خلیفه در دبی | املاک زرین</title>
  <meta name="description" content="خرید آپارتمان و پنت‌هاوس با دید مستقیم برج خلیفه و فواره دبی در داون‌تاون، بیزنس بی، اپرا، برج ویستا و د آدرس بولوار. کارشناسی زاویه دید و عدم انسداد توسط مشاوران زرین.">
  <meta name="keywords" content="املاک دید برج خلیفه دبی, آپارتمان داون تاون دبی, برج ویستا, آدرس بولوار, خرید ملک دید فواره دبی, پنت هاوس برج خلیفه">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/fa/burj-khalifa-view-properties">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/burj-khalifa-view-properties">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/burj-khalifa-view-properties">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/burj-khalifa-view-properties">

  <meta property="og:type" content="website">
  <meta property="og:title" content="خرید ملک با دید برج خلیفه در دبی | املاک زرین">
  <meta property="og:description" content="آپارتمان‌ها و پنت‌هاوس‌هایی با خط دید مستقیم به برج خلیفه در داون‌تاون دبی، بیزنس بی و منطقه اپرا. کارشناسی‌شده توسط مشاوران زرین.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="املاک با دید برج خلیفه در دبی">
  <meta property="og:url" content="https://zarinrealestate.com/fa/burj-khalifa-view-properties">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="خرید ملک با دید برج خلیفه در دبی | املاک زرین">
  <meta name="twitter:description" content="مجموعه آپارتمان‌ها و پنت‌هاوس‌های لوکس با زاویه دید اختصاصی به برج خلیفه در دبی.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles/main.css">
  <link rel="stylesheet" href="/styles/header.css">

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
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"صفحه اصلی","item":"https://zarinrealestate.com/fa/"},
    {"@type":"ListItem","position":2,"name":"املاک برگزیده","item":"https://zarinrealestate.com/fa/properties"},
    {"@type":"ListItem","position":3,"name":"دید برج خلیفه","item":"https://zarinrealestate.com/fa/burj-khalifa-view-properties"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/fa/burj-khalifa-view-properties#collectionpage",
    "name":"املاک با دید برج خلیفه در دبی","url":"https://zarinrealestate.com/fa/burj-khalifa-view-properties",
    "description":"آپارتمان‌ها و پنت‌هاوس‌هایی با خط دید مستقیم به برج خلیفه در داون‌تاون دبی، بیزنس بی، منطقه اپرا، برج ویستا و د آدرس بولوار.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"آپارتمان ۳ خوابه با دید مستقیم برج — برج ویستا برج ۱","url":"https://zarinrealestate.com/fa/properties/3br-burj-vista-burj-001","image":"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"6500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"آپارتمان ۲ خوابه با دید فواره و برج — د آدرس بولوار","url":"https://zarinrealestate.com/fa/properties/2br-boulevard-burj-001","image":"https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"4800000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"پنت‌هاوس ۴ خوابه با دید پانورامای برج — داون‌تاون دبی","url":"https://zarinrealestate.com/fa/properties/ph-downtown-burj-001","image":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"22000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"آپارتمان ۲ خوابه با دید جانبی برج — بیزنس بی","url":"https://zarinrealestate.com/fa/properties/2br-businessbay-burj-001","image":"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"3200000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"آپارتمان ۳ خوابه با دید روبروی برج — منطقه اپرا","url":"https://zarinrealestate.com/fa/properties/3br-opera-burj-001","image":"https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"8200000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"اسکای پنت‌هاوس ۵ خوابه — د آدرس اسکای ویو","url":"https://zarinrealestate.com/fa/properties/ph-skyview-burj-001","image":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"38000000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/fa/burj-khalifa-view-properties#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"پرمیوم قیمت املاک با دید برج خلیفه در دبی چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"املاک دارای دید مستقیم برج خلیفه در دبی با ۲۵ تا ۴۰ درصد پرمیوم در هر فوت مربع نسبت به واحدهای مشابه با جهت رو به شهر یا حیاط پشتی در همان ساختمان معامله می‌شوند. برای مثال، یک آپارتمان ۳ خوابه در برج ویستا با دید کامل برج معمولاً بین ۲,۸۰۰ تا ۳,۴۰۰ درهم به ازای هر فوت مربع قیمت‌گذاری می‌شود، در حالی که همان لاین در ضلع مقابل با ۱,۹۰۰ تا ۲,۳۰۰ درهم معامله می‌گردد. بالاترین پرمیوم مربوط به طبقات بالا (۴۰ به بالا) با خط دید کاملاً بدون مانع است. واحدهای رو به فواره در د آدرس بولوار نیز ۸ تا ۱۲ درصد ارزش بالاتری نسبت به دید صرفاً برج دارند. مشاوران زرین با بررسی منحنی قیمت هر طبقه، اطمینان حاصل می‌کنند که مبلغ پرداختی متناسب با کیفیت دید واقعی باشد."}},
      {"@type":"Question","name":"کدام ساختمان‌ها بهترین دید را به برج خلیفه دارند؟","acceptedAnswer":{"@type":"Answer","text":"بهترین دیدها متعلق به ۵ منطقه و برج کلیدی است: برج ویستا (برج‌های ۱ و ۲) درست در مقابل برج در بولوار محمد بن راشد قرار دارند و نزدیک‌ترین نمای تمام‌قاب در دبی را با فاصله ۲۵۰ متری ارائه می‌دهند. د آدرس بولوار و آدرس اسکای ویو در طبقات بالا دید همزمان فواره و برج را فراهم می‌کنند. پروژه‌های منطقه اپرا (فورتونا پرلا، ایل پریمو و گرند بلو تاور) نمایی زاویه‌دار و خلوت‌تر از روی میدان اپرا ارائه می‌دهند. برج‌های بیزنس بی در مجاورت جاده الخیل (مانند اگزکیوتیو تاورز و بلو بی تاور) دید جانبی بسیار زیبا را با قیمت‌های بسیار رقابتی‌تر عرضه می‌کنند. زرین نقشه کریدور دید تمام برج‌های منطقه را در اختیار دارد."}},
      {"@type":"Question","name":"آیا خرید ملک با دید برج خلیفه سرمایه‌گذاری مناسبی است؟","acceptedAnswer":{"@type":"Answer","text":"بله، املاک با دید برج خلیفه از سال ۲۰۲۰ جزو پربازده‌ترین زیربخش‌های بازار مسکن دبی بوده‌اند. داون‌تاون دبی طی پنج سال گذشته ۵۵ تا ۷۵ درصد رشد قیمت سرمایه‌ای را ثبت کرده و واحدهای رو به برج همواره ۱۲ تا ۱۸ درصد بالاتر از واحدهای مشابه پشتی رشد کرده‌اند. تقاضای اجاره بسیار بالاست؛ واحدهای ۱ و ۲ خوابه دید برج پرتقاضاترین املاک برای اجاره کوتاه‌مدت (هالیدی هوم) در فصل اوج گردشگری (نوامبر تا مارس) هستند و ضریب اشغال ۷۵ تا ۸۵ درصدی ثبت می‌کنند. محدود بودن عرضه زمین و حفاظت از حریم دید مانع از افت ارزش این املاک در درازمدت می‌شود."}},
      {"@type":"Question","name":"تفاوت میان دید فواره دبی و دید برج خلیفه چیست؟","acceptedAnswer":{"@type":"Answer","text":"آپارتمان با دید برج مستقیماً به سازه آسمان‌خراش نگاه می‌کند، در حالی که آپارتمان با دید فواره مشرف به دریاچه و نمایش‌های آبی فواره دبی است و برج خلیفه معمولاً در پس‌زمینه آن دیده می‌شود. واحدهای دارای دید فواره در د آدرس بولوار و برج ویستا معمولاً ۸ تا ۱۵ درصد گران‌تر از دیدِ صرفاً برج هستند، زیرا رقص فواره‌ها هر ۳۰ دقیقه پس از غروب آفتاب و آتش‌بازی سال نو میلادی را به شکلی استثنایی به تصویر می‌کشند. واحدهایی که به طور همزمان هر دو نما را با هم دارند، بالاترین نرخ هر فوت مربع را به خود اختصاص می‌دهند."}},
      {"@type":"Question","name":"آیا امکان اجاره کوتاه‌مدت (روزانه/هفتگی) املاک دید برج وجود دارد؟","acceptedAnswer":{"@type":"Answer","text":"بله، اجاره کوتاه‌مدت آپارتمان‌های دید برج در داون‌تاون، بیزنس بی و منطقه اپرا با اخذ مجوز خانه تعطیلات از دپارتمان گردشگری دبی (DTCM) کاملاً مجاز است. برج‌هایی نظیر برج ویستا و د آدرس بولوار دارای مجوز DTCM هستند. بازدهی ناخالص اجاره کوتاه‌مدت واحدهای ۱ و ۲ خوابه در فصل اوج معمولاً ۶ تا ۸ درصد سالانه است، در حالی که اجاره سالانه بلندمدت ۴ تا ۵ درصد عاید سرمایه‌گذار می‌کند. بخش مدیریت املاک زرین صفر تا صد تشریفات مجوز، پذیرش مهمان و هتلینگ را برای مالکان انجام می‌دهد."}},
      {"@type":"Question","name":"هزینه‌های شارژ سالانه (Service Charges) برج‌های دید برج چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"شارژ سالانه ساختمان‌های دید برج در داون‌تاون دبی معمولاً بین ۲۲ تا ۳۲ درهم به ازای هر فوت مربع است. برج ویستا حدود ۲۴ تا ۲۸ درهم و د آدرس بولوار به دلیل خدمات هتلی ۵ ستاره بین ۳۰ تا ۳۴ درهم شارژ دریافت می‌کنند. در برج‌های بیزنس بی این رقم پایین‌تر و حدود ۱۶ تا ۲۲ درهم است. هزینه شارژ مواردی چون سرمایش مرکزی منطقه (چیلر)، نگهداری مشاعات، نگهداری آسانسورهای پرسرعت، لابی‌من و صندوق ذخیره ساختمان را پوشش می‌دهد. مشاوران زرین صورت‌حساب‌های ۳ سال اخیر را پیش از هرگونه پیشنهاد خرید بررسی می‌کنند."}},
      {"@type":"Question","name":"آیا تمام آپارتمان‌های داون‌تاون دبی دید برج خلیفه دارند؟","acceptedAnswer":{"@type":"Answer","text":"خیر؛ تنها حدود ۳۵ تا ۴۵ درصد از آپارتمان‌های داون‌تاون دبی دید مستقیم به برج خلیفه دارند. در هر برج، تنها واحدهایی که در وجه رو به برج قرار گرفته‌اند این دید را دارا هستند و واحدهای ضلع پشتی به خیابان‌های مجاور، حیاط یا برج‌های دیگر نگاه می‌کنند. همچنین در طبقات پایینی برخی برج‌ها ممکن است دید تا حدی توسط ساختمان‌های همجوار مسدود باشد. کارشناسان زرین به کمک نقشه‌های طبقاتی بررسی می‌کنند که آیا واحد مدنظر شما در عمل خط دید شفافی دارد یا خیر."}},
      {"@type":"Question","name":"قیمت خرید پنت‌هاوس با دید برج خلیفه در دبی چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"قیمت پنت‌هاوس‌های دید برج از حدود ۱۵ میلیون درهم برای یک پنت‌هاوس ۳ خوابه با دید جانبی در بیزنس بی آغاز شده و تا بیش از ۱۲۰ میلیون درهم برای پنت‌هاوس‌های تمام‌طبقه اسکای کالکشن در داخل خود برج خلیفه یا آدرس اسکای ویو می‌رسد. پنت‌هاوس‌های معمول ۴ و ۵ خوابه در برج ویستا یا د آدرس بولوار بین ۲۲ تا ۴۵ میلیون درهم قیمت دارند و میانگین قیمت هر فوت مربع آنها بین ۴,۰۰۰ تا ۵,۵۰۰ درهم است. دفتر اختصاصی (Private Office) زرین به فایل‌های محرمانه و خارج از بازار مالکان پنت‌هاوس‌ها دسترسی مستقیم دارد."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/fa/burj-khalifa-view-properties#webpage",
    "url":"https://zarinrealestate.com/fa/burj-khalifa-view-properties","name":"خرید ملک با دید برج خلیفه در دبی | املاک زرین",
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
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="بخش معرفی املاک دید برج خلیفه">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">برای فروش &middot; بر اساس سبک زندگی</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-bone mb-6">املاک با دید برج خلیفه<br><span class="text-gold-gradient">در دبی</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">آپارتمان‌ها و پنت‌هاوس‌هایی با خط دید مستقیم به برج خلیفه در داون‌تاون دبی، بیزنس بی، منطقه اپرا، برج ویستا و د آدرس بولوار. هر فایل ملکی با دید برج خلیفه شخصاً توسط مشاوران ارشد زرین کارشناسی و بازرسی فیزیکی می‌شود — ما زاویه دید واقعی، تضمین عدم انسداد افق در آینده و گزارش ۳ ساله شارژ ساختمان را بررسی می‌کنیم. بدون پرداخت پرمیوم کاذب و بدون فایل‌های حیاط پشتی به جای دید مستقیم برج.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#featured-listings" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="مشاهده فایل‌های دید برج خلیفه"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>مشاهده املاک</a>
          <a href="/fa/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="گفتگو با مشاور تخصصی">گفتگو با مشاور تخصصی</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۲۴۰</div><div class="text-xs text-slate uppercase tracking-wider mt-1">فایل کارشناسی‌شده</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۲۵-۴۰٪</div><div class="text-xs text-slate uppercase tracking-wider mt-1">پرمیوم ارزش نسبت به داخل شهر</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۲-۳ خوابه</div><div class="text-xs text-slate uppercase tracking-wider mt-1">پرتقاضاترین پلان‌ها</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۵ برج برتر</div><div class="text-xs text-slate uppercase tracking-wider mt-1">بهترین زاویه دید</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. BURJ VIEW COMMUNITIES SHOWCASE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="مناطق شاخص با دید برج خلیفه">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">مناطق شاخص با دید برج</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">پنج کانون برتر، یک قاب ماندگار</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">املاک با دید برج خلیفه در پنج کانون اصلی در مرکز دبی متمرکز شده‌اند — داون‌تاون، منطقه اپرا، بیزنس بی، برج ویستا و د آدرس بولوار. هر کدام زاویه دید متفاوتی را ارائه می‌دهند: دید تمام‌قاب از روبروی بولوار، نمای جانبی از بیزنس بی، یا دید همزمان برج و فواره از هتل‌برج‌های آدرس. مشاوران زرین نمودار دید طبقه به طبقه تمام برج‌ها را در اختیار دارند و واحدهایی که واقعاً خط دید شفاف دارند را از واحدهای بازاریابی‌شده متمایز می‌کنند.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Downtown Dubai -->
        <a href="/fa/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block text-right" aria-label="مشاهده املاک با دید برج در داون‌تاون دبی">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="افق داون‌تاون دبی و برج خلیفه در غروب آفتاب" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل روبرو</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">داون‌تاون دبی</h3>
            <p class="text-xs text-ash mb-3">قلب تپنده دبی پیرامون برج خلیفه. متمرکزترین پهنه برج‌های مسکونی با دید روبروی برج از جمله برج ویستا و د آدرس بولوار.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱.۸M تا ۶۰M AED</span>
              <span class="text-ash">+۱۴۰ فایل</span>
            </div>
          </div>
        </a>

        <!-- Opera District -->
        <a href="/fa/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block text-right" aria-label="مشاهده املاک با دید برج در منطقه اپرا">
          <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80" alt="منطقه اپرای دبی و برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید زاویه‌دار</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">منطقه اپرا</h3>
            <p class="text-xs text-ash mb-3">محله‌ای مدرن میان میدان اپرا و بولوار محمد بن راشد. پروژه‌های شاخصی نظیر ایل پریمو، فورتونا و گرند بلو دیدی خلوت و اختصاصی ارائه می‌دهند.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۲.۵M تا ۲۸M AED</span>
              <span class="text-ash">+۳۸ فایل</span>
            </div>
          </div>
        </a>

        <!-- Business Bay -->
        <a href="/fa/areas/business-bay" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block text-right" aria-label="مشاهده املاک با دید برج در بیزنس بی">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="برج‌های بیزنس بی با نمای جانبی به برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">نمای جانبی</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">بیزنس بی</h3>
            <p class="text-xs text-ash mb-3">برج‌های مجاور جاده الخیل و کانال دبی، نمای جانبی برج را با ۳۰ تا ۴۵ درصد قیمت ورودی مناسب‌تر نسبت به داون‌تاون فراهم می‌آورند.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱.۲M تا ۲۲M AED</span>
              <span class="text-ash">+۹۵ فایل</span>
            </div>
          </div>
        </a>

        <!-- Burj Vista -->
        <a href="/fa/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block text-right" aria-label="مشاهده املاک در برج ویستا">
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="برج‌های دوقلوی برج ویستا روبروی برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">روبرو و نزدیک</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">برج ویستا</h3>
            <p class="text-xs text-ash mb-3">برج‌های دوقلو در امتداد بولوار که نزدیک‌ترین نمای تمام‌قد به برج را دارا هستند؛ فاصله بسیاری از واحدها تا برج خلیفه کمتر از ۲۵۰ متر است.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۳.۵M تا ۴۵M AED</span>
              <span class="text-ash">+۵۲ فایل</span>
            </div>
          </div>
        </a>

        <!-- The Address Boulevard -->
        <a href="/fa/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block text-right" aria-label="مشاهده املاک در د آدرس بولوار">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="برج د آدرس بولوار با دید فواره و برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید فواره و برج</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">د آدرس بولوار</h3>
            <p class="text-xs text-ash mb-3">اقامتگاه‌های برند هتلی با خدمات ۵ ستاره و دید دوگانه به رقص فواره‌ها و برج خلیفه از طبقات بالا. بالاترین رشد ارزش سرمایه‌ای از سال ۲۰۲۰.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۲.۸M تا ۳۸M AED</span>
              <span class="text-ash">+۴۸ فایل</span>
            </div>
          </div>
        </a>

        <!-- Burj Khalifa itself -->
        <a href="/fa/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block text-right" aria-label="مشاهده اقامتگاه‌های داخل برج خلیفه">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="ورودی اقامتگاه‌های مسکونی برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">در دل نماد دبی</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">اقامتگاه‌های برج خلیفه</h3>
            <p class="text-xs text-ash mb-3">زندگی در بلندترین برج جهان. آپارتمان‌های تمام‌طبقه اسکای کالکشن در طبقات ۱۰۰ به بالا نمادین‌ترین آدرس خاورمیانه به شمار می‌روند.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۴M تا ۱۲۰M AED</span>
              <span class="text-ash">+۱۸ فایل</span>
            </div>
          </div>
        </a>

      </div>
      <div class="text-center mt-10"><a href="/fa/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="مشاهده تمام مناطق دبی">مشاهده تمام مناطق دبی<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg></a></div>
    </div>
  </section>

  <!-- 3. FEATURED BURJ VIEW LISTINGS -->
  <section id="featured-listings" class="bg-ink-900 py-16 md:py-20" aria-label="فایل‌های منتخب دید برج خلیفه">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">فایل‌های منتخب</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">مجموعه برگزیده با دید برج خلیفه</h2>
        </div>
        <p class="text-sm text-ash max-w-md">گزیده‌ای از فایل‌های انحصاری تحت نظارت مشاوران زرین. تمامی املاک به طور فیزیکی بازرسی شده و زاویه دید، وضعیت حریم دید و ممیزی شارژ سالانه آنها تایید گردیده است.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Listing 1: 3BR Burj Vista -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group text-right">
          <a href="/fa/properties/3br-burj-vista-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده آپارتمان ۳ خوابه برج ویستا برج ۱">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="آپارتمان ۳ خوابه برج ویستا با دید روبروی برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل برج</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۶.۵M AED</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">آپارتمان</div><div class="text-xs text-slate">برج ویستا</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">۳ خوابه · برج ۱، طبقه ۴۲</h3>
            <div class="text-sm text-ash mb-4">۲,۱۸۰ فوت مربع &middot; طبقه بالا، دید بدون مانع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۲,۹۸۲ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 2BR Address Boulevard -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group text-right">
          <a href="/fa/properties/2br-boulevard-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده آپارتمان ۲ خوابه د آدرس بولوار">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="آپارتمان ۲ خوابه د آدرس بولوار با دید فواره و برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید فواره + برج</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۴.۸M AED</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">آپارتمان</div><div class="text-xs text-slate">د آدرس بولوار</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">۲ خوابه · طبقه ۳۸</h3>
            <div class="text-sm text-ash mb-4">۱,۶۵۰ فوت مربع &middot; دید دوگانه فواره و برج</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۲</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۳</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۲,۹۰۹ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 4BR Penthouse Downtown -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group text-right">
          <a href="/fa/properties/ph-downtown-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۴ خوابه داون‌تاون دبی">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۴ خوابه داون‌تاون با تراس وسیع رو به برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید مستقیم برج</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۲۲M AED</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس</div><div class="text-xs text-slate">داون‌تاون</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">۴ خوابه · طبقه ۶۵</h3>
            <div class="text-sm text-ash mb-4">۵,۱۰۰ فوت مربع &middot; تراس اختصاصی ۱,۴۰۰ فوتی</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۴,۳۱۴ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 2BR Business Bay -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group text-right">
          <a href="/fa/properties/2br-businessbay-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده آپارتمان ۲ خوابه بیزنس بی">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="آپارتمان ۲ خوابه در بیزنس بی با نمای جانبی به برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید جانبی برج</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۳.۲M AED</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">آپارتمان</div><div class="text-xs text-slate">بیزنس بی</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">۲ خوابه · اگزکیوتیو تاورز</h3>
            <div class="text-sm text-ash mb-4">۱,۴۲۰ فوت مربع &middot; چشم‌انداز کانال و برج</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۲</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۳</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۲,۲۵۴ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 3BR Opera District -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group text-right">
          <a href="/fa/properties/3br-opera-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده آپارتمان ۳ خوابه منطقه اپرا">
            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80" alt="آپارتمان ۳ خوابه ایل پریمو با دید برج خلیفه از روی میدان اپرا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید مستقیم برج</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۸.۲M AED</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">آپارتمان</div><div class="text-xs text-slate">منطقه اپرا</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">۳ خوابه · ایل پریمو</h3>
            <div class="text-sm text-ash mb-4">۲,۶۴۰ فوت مربع &middot; مشرف به میدان اپرا و برج</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۳,۱۰۶ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 5BR Sky Penthouse Address Sky View -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group text-right">
          <a href="/fa/properties/ph-skyview-burj-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده اسکای پنت‌هاوس ۵ خوابه د آدرس اسکای ویو">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="اسکای پنت‌هاوس د آدرس اسکای ویو با دید ۳۶۰ درجه به برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل برج</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۳۸M AED</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس</div><div class="text-xs text-slate">آدرس اسکای ویو</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">۵ خوابه اسکای پنت‌هاوس · طبقه ۵۰</h3>
            <div class="text-sm text-ash mb-4">۸,۵۰۰ فوت مربع &middot; دید ۳۶۰ درجه پانوراما</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۵</div><div>اتاق خواب</div></div>
              <div><div class="text-bone font-semibold">۷</div><div>سرویس بهداشتی</div></div>
              <div><div class="text-bone font-semibold">۴,۴۷۱ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 text-center bg-ink-850 border border-white-line rounded-sm p-10">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">به دنبال ملک خاصی با زاویه دید مشخص هستید؟</div>
        <h3 class="text-2xl md:text-3xl font-bold text-bone mb-4">معیارهای خرید خود را با ما در میان بگذارید</h3>
        <p class="text-sm text-slate mb-6">این مجموعه تنها گزیده‌ای محدود است. زرین به بیش از ۲۴۰ فایل فعال با دید برج در سراسر داون‌تاون، بیزنس بی، اپرا و اسکای کالکشن‌های خارج از بازار دسترسی مستقیم دارد. اولویت‌های دید، بودجه و پلان مورد نظر خود را بفرمایید تا فهرست سفارشی ظرف ۲۴ ساعت برای شما آماده شود.</p>
        <a href="/fa/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="درخواست جستجوی سفارشی دید برج خلیفه">درخواست جستجوی سفارشی<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. WHY BURJ VIEW -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="دلایل خرید ملک با دید برج خلیفه">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">چرا دید برج خلیفه؟</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">ارزش متمایز خط دید به نماد دبی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">دید برج خلیفه متمرکزترین و معتبرترین شناسه ملکی در بازار مسکن دبی است. تنها ۳۵ تا ۴۵ درصد از آپارتمان‌های داون‌تاون این دید را دارند و قوانین حریم دید دبی مانع از ساخت برج‌های مسدودکننده می‌شود. در ادامه ۴ دلیل اصلی انتخاب این املاک توسط خریداران آمده است.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group card-lift text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a8 8 0 1116 0M3 20a9 9 0 0118 0"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل ۰۱</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">نماد تکرارناپذیر</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">برج خلیفه بلندترین آسمان‌خراش جهان و شناخته‌شده‌ترین نماد دبی است. تماشای هرروزه این نماد، به‌ویژه در هنگام رقص فواره‌ها و آتش‌بازی سال نو، پرستیژ و تجربه‌ای ماندگار خلق می‌کند که در هیچ نقطه دیگری از جهان تکرارشدنی نیست.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">۸۳۰ متر شکوه معماری</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group card-lift text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل ۰۲</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">پرمیوم ارزش پایدار</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">واحدهای رو به برج خلیفه ۲۵ تا ۴۰ درصد قیمت هر فوت مربع بالاتری نسبت به واحدهای رو به حیاط پشتی دارند. این پرمیوم در زمان فروش مجدد نیز حفظ شده و خریداران بین‌المللی همواره حاضر به پرداخت این اختلاف بها هستند.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+۲۵ تا ۴۰٪ پرمیوم قیمت</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group card-lift text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل ۰۳</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">تقاضای بالای اجاره</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">واحدهای ۱ و ۲ خوابه دید برج پرتقاضاترین املاک برای اجاره کوتاه‌مدت (Airbnb) هستند. در ماه‌های توریستی سال این واحدها ضریب اشغال بالای ۸۰٪ و نرخ کرایه شبانه تا ۵۰٪ بالاتر از دیگر واحدها دارند.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+۳۰ تا ۵۰٪ اجاره شبانه بالاتر</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group card-lift text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل ۰۴</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">رشد ارزش سرمایه</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">قیمت املاک در داون‌تاون از ۲۰۲۰ بیش از ۵۵ تا ۷۵ درصد رشد داشته است. واحدهای رو به برج به دلیل محدود بودن زمین‌های دارای دید و قوانین حفاظتی شهر، رشد پایدارتر و پایداری قیمت بالاتری را نشان داده‌اند.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+۵۵ تا ۷۵٪ از سال ۲۰۲۰</div>
        </article>

      </div>
    </div>
  </section>

  <!-- 5. WHY BUY WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="مزایای خرید از طریق زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">چرا املاک زرین؟</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">مشاوری که زاویه دید واقعی را بررسی می‌کند</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">ادعای دید برج خلیفه یکی از شایع‌ترین موارد توصیف غیردقیق در بازار دبی است. در بسیاری از موارد واحدهایی که زاویه دید مبهم، مسدودشده توسط برج‌های اطراف در طبقات پایین یا دید ناچیزی به نوک برج دارند، تحت عنوان «دید برج» معرفی می‌شوند. مشاوران زرین شخصاً در داخل واحد حضور یافته، خط دید واقعی را عکاسی می‌کنند، تراز انسداد برج توسط ساختمان‌های مجاور را می‌سنجند و آخرین صورت‌حساب شارژ ساختمان را بررسی می‌کنند.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">بازرسی فیزیکی از داخل واحد</div><div class="text-xs text-slate mt-1">عکاسی و کارشناسی خط دید واقعی بدون اغراق.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">تضمین عدم انسداد حریم دید در آینده</div><div class="text-xs text-slate mt-1">بررسی طرح‌های جامع شهری پیرامون ملک.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">ممیزی شارژ سالانه و صندوق ذخیره ساختمان</div><div class="text-xs text-slate mt-1">بررسی مبالغ واقعی سه سال اخیر قبل از ارائه آفر.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه تخصصی (فارسی، انگلیسی، عربی)</div><div class="text-xs text-slate mt-1">ارتباط بی‌واسطه و شفاف با مشاور مجرب.</div></div></div>
          </div>
          <a href="/fa/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="آشنایی بیشتر با پیشینه زرین">آشنایی با پیشینه زرین<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۲۴۰</div><div class="text-sm font-bold text-bone mb-1">فایل دید برج</div><div class="text-xs text-slate">کارشناسی‌شده</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲٪</div><div class="text-sm font-bold text-bone mb-1">کمیسیون خریدار</div><div class="text-xs text-slate">منطبق بر قوانین RERA</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲۴h</div><div class="text-sm font-bold text-bone mb-1">تحویل فهرست برگزیده</div><div class="text-xs text-slate">پس از جلسه مشاوره</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۲۰</div><div class="text-sm font-bold text-bone mb-1">سال سابقه در دبی</div><div class="text-xs text-slate">موسس از سال ۲۰۰۵</div></div>
        </div>
      </div>
      <div class="mt-16 pt-12 border-t border-white-line">
        <div class="text-center mb-8">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">نشان‌های اعتماد</div>
          <h3 class="text-2xl font-bold text-bone">چرا خریداران بین‌المللی زرین را انتخاب می‌کنند</h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div><div class="text-sm font-bold text-bone">مجوز رسمی RERA</div><div class="text-xs text-slate mt-1">مشاوره قانونی و رگوله‌شده</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">پاسخگویی در ۲۴ ساعت</div><div class="text-xs text-slate mt-1">ارائه شورت‌لیست روزانه</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg></div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه</div><div class="text-xs text-slate mt-1">فارسی، انگلیسی، عربی</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">بدون تعهد اجباری</div><div class="text-xs text-slate mt-1">مشاوره اولیه رایگان</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="سوالات متداول املاک دید برج خلیفه">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پرسش‌های متداول</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">سوالات متداول خریداران دید برج خلیفه</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">هشت پرسشی که خریداران پیش از انتخاب واحد با دید برج بیش از همه مطرح می‌کنند. در صورت تمایل به کسب اطلاعات تکمیلی، از طریق واتس‌اپ یا فرم مشاوره با ما در ارتباط باشید.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-900 border border-white-line rounded-sm text-right" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">پرمیوم قیمت املاک با دید برج خلیفه در دبی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">املاک دارای دید مستقیم برج خلیفه در دبی با ۲۵ تا ۴۰ درصد پرمیوم در هر فوت مربع نسبت به واحدهای مشابه با جهت رو به شهر یا حیاط پشتی در همان ساختمان معامله می‌شوند. برای مثال، یک آپارتمان ۳ خوابه در برج ویستا با دید کامل برج معمولاً بین ۲,۸۰۰ تا ۳,۴۰۰ درهم به ازای هر فوت مربع قیمت‌گذاری می‌شود، در حالی که همان لاین در ضلع مقابل با ۱,۹۰۰ تا ۲,۳۰۰ درهم معامله می‌گردد. بالاترین پرمیوم مربوط به طبقات بالا (۴۰ به بالا) با خط دید کاملاً بدون مانع است. واحدهای رو به فواره در د آدرس بولوار نیز ۸ تا ۱۲ درصد ارزش بالاتری نسبت به دید صرفاً برج دارند. مشاوران زرین با بررسی منحنی قیمت هر طبقه، اطمینان حاصل می‌کنند که مبلغ پرداختی متناسب با کیفیت دید واقعی باشد.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">کدام ساختمان‌ها بهترین دید را به برج خلیفه دارند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بهترین دیدها متعلق به ۵ منطقه و برج کلیدی است: برج ویستا (برج‌های ۱ و ۲) درست در مقابل برج در بولوار محمد بن راشد قرار دارند و نزدیک‌ترین نمای تمام‌قاب در دبی را با فاصله ۲۵۰ متری ارائه می‌دهند. د آدرس بولوار و آدرس اسکای ویو در طبقات بالا دید همزمان فواره و برج را فراهم می‌کنند. پروژه‌های منطقه اپرا (فورتونا پرلا، ایل پریمو و گرند بلو تاور) نمایی زاویه‌دار و خلوت‌تر از روی میدان اپرا ارائه می‌دهند. برج‌های بیزنس بی در مجاورت جاده الخیل (مانند اگزکیوتیو تاورز و بلو بی تاور) دید جانبی بسیار زیبا را با قیمت‌های بسیار رقابتی‌تر عرضه می‌کنند. زرین نقشه کریدور دید تمام برج‌های منطقه را در اختیار دارد.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا خرید ملک با دید برج خلیفه سرمایه‌گذاری مناسبی است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله، املاک با دید برج خلیفه از سال ۲۰۲۰ جزو پربازده‌ترین زیربخش‌های بازار مسکن دبی بوده‌اند. داون‌تاون دبی طی پنج سال گذشته ۵۵ تا ۷۵ درصد رشد قیمت سرمایه‌ای را ثبت کرده و واحدهای رو به برج همواره ۱۲ تا ۱۸ درصد بالاتر از واحدهای مشابه پشتی رشد کرده‌اند. تقاضای اجاره بسیار بالاست؛ واحدهای ۱ و ۲ خوابه دید برج پرتقاضاترین املاک برای اجاره کوتاه‌مدت (هالیدی هوم) در فصل اوج گردشگری (نوامبر تا مارس) هستند و ضریب اشغال ۷۵ تا ۸۵ درصدی ثبت می‌کنند. محدود بودن عرضه زمین و حفاظت از حریم دید مانع از افت ارزش این املاک در درازمدت می‌شود.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">تفاوت میان دید فواره دبی و دید برج خلیفه چیست؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">آپارتمان با دید برج مستقیماً به سازه آسمان‌خراش نگاه می‌کند، در حالی که آپارتمان با دید فواره مشرف به دریاچه و نمایش‌های آبی فواره دبی است و برج خلیفه معمولاً در پس‌زمینه آن دیده می‌شود. واحدهای دارای دید فواره در د آدرس بولوار و برج ویستا معمولاً ۸ تا ۱۵ درصد گران‌تر از دیدِ صرفاً برج هستند، زیرا رقص فواره‌ها هر ۳۰ دقیقه پس از غروب آفتاب و آتش‌بازی سال نو میلادی را به شکلی استثنایی به تصویر می‌کشند. واحدهایی که به طور همزمان هر دو نما را با هم دارند، بالاترین نرخ هر فوت مربع را به خود اختصاص می‌دهند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا امکان اجاره کوتاه‌مدت (روزانه/هفتگی) املاک دید برج وجود دارد؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله، اجاره کوتاه‌مدت آپارتمان‌های دید برج در داون‌تاون، بیزنس بی و منطقه اپرا با اخذ مجوز خانه تعطیلات از دپارتمان گردشگری دبی (DTCM) کاملاً مجاز است. برج‌هایی نظیر برج ویستا و د آدرس بولوار دارای مجوز DTCM هستند. بازدهی ناخالص اجاره کوتاه‌مدت واحدهای ۱ و ۲ خوابه در فصل اوج معمولاً ۶ تا ۸ درصد سالانه است، در حالی که اجاره سالانه بلندمدت ۴ تا ۵ درصد عاید سرمایه‌گذار می‌کند. بخش مدیریت املاک زرین صفر تا صد تشریفات مجوز، پذیرش مهمان و هتلینگ را برای مالکان انجام می‌دهد.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">هزینه‌های شارژ سالانه (Service Charges) برج‌های دید برج چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">شارژ سالانه ساختمان‌های دید برج در داون‌تاون دبی معمولاً بین ۲۲ تا ۳۲ درهم به ازای هر فوت مربع است. برج ویستا حدود ۲۴ تا ۲۸ درهم و د آدرس بولوار به دلیل خدمات هتلی ۵ ستاره بین ۳۰ تا ۳۴ درهم شارژ دریافت می‌کنند. در برج‌های بیزنس بی این رقم پایین‌تر و حدود ۱۶ تا ۲۲ درهم است. هزینه شارژ مواردی چون سرمایش مرکزی منطقه (چیلر)، نگهداری مشاعات، نگهداری آسانسورهای پرسرعت، لابی‌من و صندوق ذخیره ساختمان را پوشش می‌دهد. مشاوران زرین صورت‌حساب‌های ۳ سال اخیر را پیش از هرگونه پیشنهاد خرید بررسی می‌کنند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا تمام آپارتمان‌های داون‌تاون دبی دید برج خلیفه دارند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">خیر؛ تنها حدود ۳۵ تا ۴۵ درصد از آپارتمان‌های داون‌تاون دبی دید مستقیم به برج خلیفه دارند. در هر برج، تنها واحدهایی که در وجه رو به برج قرار گرفته‌اند این دید را دارا هستند و واحدهای ضلع پشتی به خیابان‌های مجاور، حیاط یا برج‌های دیگر نگاه می‌کنند. همچنین در طبقات پایینی برخی برج‌ها ممکن است دید تا حدی توسط ساختمان‌های همجوار مسدود باشد. کارشناسان زرین به کمک نقشه‌های طبقاتی بررسی می‌کنند که آیا واحد مدنظر شما در عمل خط دید شفافی دارد یا خیر.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">قیمت خرید پنت‌هاوس با دید برج خلیفه در دبی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">قیمت پنت‌هاوس‌های دید برج از حدود ۱۵ میلیون درهم برای یک پنت‌هاوس ۳ خوابه با دید جانبی در بیزنس بی آغاز شده و تا بیش از ۱۲۰ میلیون درهم برای پنت‌هاوس‌های تمام‌طبقه اسکای کالکشن در داخل خود برج خلیفه یا آدرس اسکای ویو می‌رسد. پنت‌هاوس‌های معمول ۴ و ۵ خوابه در برج ویستا یا د آدرس بولوار بین ۲۲ تا ۴۵ میلیون درهم قیمت دارند و میانگین قیمت هر فوت مربع آنها بین ۴,۰۰۰ تا ۵,۵۰۰ درهم است. دفتر اختصاصی (Private Office) زرین به فایل‌های محرمانه و خارج از بازار مالکان پنت‌هاوس‌ها دسترسی مستقیم دارد.</div>
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
fs.writeFileSync('burj-khalifa-view-properties.html', enBurjHtml, 'utf8');
if (!fs.existsSync('burj-khalifa-view-properties')) {
  fs.mkdirSync('burj-khalifa-view-properties', { recursive: true });
}
fs.writeFileSync(path.join('burj-khalifa-view-properties', 'index.html'), enBurjHtml, 'utf8');

// Write Persian pages (both .html and /index.html)
if (!fs.existsSync('fa')) fs.mkdirSync('fa', { recursive: true });
fs.writeFileSync(path.join('fa', 'burj-khalifa-view-properties.html'), faBurjHtml, 'utf8');
if (!fs.existsSync(path.join('fa', 'burj-khalifa-view-properties'))) {
  fs.mkdirSync(path.join('fa', 'burj-khalifa-view-properties'), { recursive: true });
}
fs.writeFileSync(path.join('fa', 'burj-khalifa-view-properties', 'index.html'), faBurjHtml, 'utf8');

console.log('Burj View pages generated successfully for both EN and FA (both .html and /index.html)!');
