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

// Prepare English Header with active state on Branded Residences and Properties
const enHeaderClone = JSDOM.fragment(enHeaderEl.outerHTML).querySelector('#site-header');
const enPropLink = enHeaderClone.querySelector('#properties-nav-link');
if (enPropLink) {
  enPropLink.setAttribute('aria-current', 'page');
  enPropLink.classList.remove('text-ash');
  enPropLink.classList.add('text-gold-400');
}
const enBrLink = enHeaderClone.querySelector('a[href="/branded-residences-in-dubai"]');
if (enBrLink) {
  enBrLink.setAttribute('aria-current', 'page');
  enBrLink.classList.remove('text-ash');
  enBrLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare English Mobile Menu with active state
const enMobileClone = JSDOM.fragment(enMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const enBrMobileLink = enMobileClone.querySelector('a[href="/branded-residences-in-dubai"]');
if (enBrMobileLink) {
  enBrMobileLink.classList.remove('text-ash');
  enBrMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Header with active state
const faHeaderClone = JSDOM.fragment(faHeaderEl.outerHTML).querySelector('#site-header');
const faPropLink = faHeaderClone.querySelector('#properties-nav-link');
if (faPropLink) {
  faPropLink.setAttribute('aria-current', 'page');
  faPropLink.classList.remove('text-ash');
  faPropLink.classList.add('text-gold-400');
}
const faBrLink = faHeaderClone.querySelector('a[href="/fa/branded-residences-in-dubai"]');
if (faBrLink) {
  faBrLink.setAttribute('aria-current', 'page');
  faBrLink.classList.remove('text-ash');
  faBrLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Mobile Menu with active state
const faMobileClone = JSDOM.fragment(faMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const faBrMobileLink = faMobileClone.querySelector('a[href="/fa/branded-residences-in-dubai"]');
if (faBrMobileLink) {
  faBrMobileLink.classList.remove('text-ash');
  faBrMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// ==========================================
// 1. ASSEMBLE ENGLISH BRANDED RESIDENCES HTML
// ==========================================
const enBrandedHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>Branded Residences in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Branded residences in Dubai — Bulgari, Six Senses, Cavalli, Bugatti, Armani, Versace, Mercedes-Benz. Hotel-grade service, brand-curate interiors, premium locations.">
  <meta name="keywords" content="branded residences Dubai, Bulgari Residences Dubai, Six Senses Residences Palm Jumeirah, Cavalli Tower Dubai, Bugatti Residences Dubai, Armani Residences Burj Khalifa, Palazzo Versace Dubai, Mercedes-Benz Places Dubai">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/branded-residences-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/branded-residences-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/branded-residences-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/branded-residences-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Branded Residences in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Branded residences in Dubai — Bulgari, Six Senses, Cavalli, Bugatti, Armani, Versace, Mercedes-Benz. Hotel-grade service and brand-curated interiors.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Branded residences in Dubai">
  <meta property="og:url" content="https://zarinrealestate.com/branded-residences-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Branded Residences in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Bulgari, Six Senses, Cavalli, Bugatti, Armani, Versace, Mercedes-Benz — branded residences in Dubai, curated by ZARIN advisors.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80">

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
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://zarinrealestate.com/"},
    {"@type":"ListItem","position":2,"name":"Properties","item":"https://zarinrealestate.com/properties"},
    {"@type":"ListItem","position":3,"name":"Branded Residences","item":"https://zarinrealestate.com/branded-residences-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/branded-residences-in-dubai#collectionpage",
    "name":"Branded Residences in Dubai","url":"https://zarinrealestate.com/branded-residences-in-dubai",
    "description":"Branded residences in Dubai — Bulgari, Six Senses, Cavalli, Bugatti, Armani, Versace, Mercedes-Benz. Hotel-grade service and brand-curated interiors, curated by ZARIN Real Estate advisors.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"2BR Bulgari Apartment — Jumeirah Bay Island","url":"https://zarinrealestate.com/branded/bulgari-2br-001","image":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"18000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"4BR Penthouse — Cavalli Tower","url":"https://zarinrealestate.com/branded/cavalli-ph-001","image":"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"32000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"3BR Villa — Six Senses Residences Palm Jumeirah","url":"https://zarinrealestate.com/branded/six-senses-3br-001","image":"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"45000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"Bugatti Sky Mansion — Business Bay","url":"https://zarinrealestate.com/branded/bugatti-5br-001","image":"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"70000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"2BR Suite — Armani Residences Burj Khalifa","url":"https://zarinrealestate.com/branded/armani-2br-001","image":"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"12000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"3BR Penthouse — Cavalli Couture Palm Jumeirah","url":"https://zarinrealestate.com/branded/cavalli-couture-3br-001","image":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"28000000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/branded-residences-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"What are branded residences in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Branded residences are homes inside Dubai towers or villa communities operated under a global luxury brand — Bulgari, Six Senses, Cavalli, Bugatti, Armani, Versace, or Mercedes-Benz, among others. The brand is responsible for interior design, fit-out specifications, and ongoing service standards. Owners receive a private home with the staff, amenities, and brand experience normally associated with a five-star hotel. ZARIN curates verified branded inventory across all major Dubai projects."}},
      {"@type":"Question","name":"Which branded residence projects are available in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Active Dubai branded projects include Bulgari Residences on Jumeirah Bay Island, Six Senses Residences on Palm Jumeirah, Cavalli Tower and Cavalli Couture, Bugatti Residences in Business Bay by Binghatti, Armani Residences inside Burj Khalifa, Palazzo Versace in Culture Village, and Mercedes-Benz Places in Downtown Dubai. Each has a different price band, handover date, and brand philosophy. ZARIN advisors track every active project and can shortlist based on your brief."}},
      {"@type":"Question","name":"What is the price premium for branded residences?","acceptedAnswer":{"@type":"Answer","text":"Branded residences typically trade at a 25-60% premium per square foot versus comparable non-branded inventory in the same area. The premium reflects the brand licence, the higher fit-out specification, the integrated hotel service, and restricted supply. Historical resale data shows branded units hold value better in soft markets, but they are not a short-term flip — exit liquidity is concentrated among a smaller pool of brand-aware buyers. ZARIN provides comparable sale evidence before any commitment."}},
      {"@type":"Question","name":"Do branded residences come with hotel services?","acceptedAnswer":{"@type":"Answer","text":"Yes. Hotel-branded residences (Bulgari, Six Senses, Armani, Versace) typically include 24/7 concierge, daily housekeeping on request, in-residence dining from the hotel kitchen, spa and pool access, valet parking, and bell desk. Automotive-branded projects (Bugatti, Mercedes-Benz) instead focus on brand-led design, smart-home technology, and car-related amenities such as residence-to-lobby car lifts. Service level varies by brand — ZARIN details exactly what is and is not included for each project."}},
      {"@type":"Question","name":"Are branded residences a good investment?","acceptedAnswer":{"@type":"Answer","text":"Branded residences can be a strong investment for buyers who value liquidity of brand equity, international demand, and long holding periods. Dubai branded stock has historically shown lower price volatility and stronger capital preservation than non-branded peers in the same community, partly because the brand licence limits new competing supply. Yields are typically 4-6% gross, lower than mass-market apartments but with steadier tenant demand from corporate and diplomatic lessees. ZARIN models each project on a 5-10 year hold before recommending."}},
      {"@type":"Question","name":"Can foreigners buy branded residences in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Yes. All branded residence projects in Dubai are located in designated freehold areas, so foreign nationals of any country can buy with full freehold ownership. The purchase process, DLD transfer fee (4%), and title deed issuance are identical to any other Dubai freehold transaction. Many branded projects also qualify buyers for the 10-year Golden Visa when the purchase price meets the AED 2 million threshold. ZARIN advises on the visa, banking, and KYC steps specific to your nationality."}},
      {"@type":"Question","name":"What are the typical service charges for branded residences?","acceptedAnswer":{"@type":"Answer","text":"Service charges for branded residences are materially higher than standard Dubai apartments because they include the brand service fee, hotel-grade staff, premium amenities, and ongoing brand licence contribution. Expect AED 35-65 per square foot per year for hotel-branded residences (Bulgari, Six Senses, Armani, Versace) and AED 22-38 per square foot for automotive- and fashion-branded projects (Bugatti, Cavalli, Mercedes-Benz). ZARIN obtains the latest audited service charge schedules from the owners' association before you commit."}},
      {"@type":"Question","name":"How do I qualify to view a branded residence?","acceptedAnswer":{"@type":"Answer","text":"Most branded residence developers and hotel operators require prospective buyers to be pre-qualified before granting access to show units or off-plan sales galleries. ZARIN manages this for you: we submit your proof of funds, arrange NDAs where the brand requires confidentiality, schedule private viewings with the brand's sales director, and accompany you on tour. International buyers can complete initial qualification remotely and travel to Dubai for the in-person viewing and selection — typically a 3-5 day visit."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/branded-residences-in-dubai#webpage",
    "url":"https://zarinrealestate.com/branded-residences-in-dubai","name":"Branded Residences in Dubai | ZARIN Real Estate",
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
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Branded residences hero">
    <div class="absolute inset-0 opacity-25"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">Branded &middot; Hotel-Grade Living</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6">Branded<br>Residences <span class="text-gold-gradient">in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">Private homes in towers and villas operated by Bulgari, Six Senses, Cavalli, Bugatti, Armani, Versace, and Mercedes-Benz. Each residence carries the brand's interior design, fit-out standard, and hotel-grade service agreement. ZARIN manages access, negotiation, and after-sales on every active Dubai branded project.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#branded-listings" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse branded listings"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>Browse Listings</a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to a branded residences advisor">Speak to Advisor</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">8+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Active Brands</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">12+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Projects</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">AED 8M+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Entry Price</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">25-60%</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Brand Premium</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. BRANDED BRANDS SHOWCASE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Branded residence brands in Dubai">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-12 mb-16 items-end">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Active Brands in Dubai</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-4">Eight Global Luxury Brands.<br>One Curated Hub.</h2>
        </div>
        <p class="text-lg text-ash leading-relaxed">Dubai is now the world's most concentrated market for branded residences — eight international luxury brands operate active projects across the city. Each brand brings its own design language, service philosophy, and target buyer profile. ZARIN maintains direct relationships with every brand's sales team and tracks inventory, handover status, and resale activity across all eight. We do not represent any single developer — we represent you, the buyer.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group" aria-label="Bulgari Residences branded residences overview">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="Brand status">Brand Verified</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Bulgari Residences</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Jumeirah Bay Island</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">AED 18M – 80M</div><div>Price Range</div></div>
            <div><div class="text-bone font-semibold text-sm">165 units</div><div>Inventory</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group" aria-label="Six Senses Residences branded residences overview">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="Brand status">Brand Verified</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Six Senses Residences</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Palm Jumeirah</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">AED 12M – 60M</div><div>Price Range</div></div>
            <div><div class="text-bone font-semibold text-sm">121 units</div><div>Inventory</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group" aria-label="Cavalli Tower branded residences overview">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="Brand status">Brand Verified</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Cavalli Tower</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Dubai Marina</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">AED 9M – 50M</div><div>Price Range</div></div>
            <div><div class="text-bone font-semibold text-sm">486 units</div><div>Inventory</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group" aria-label="Cavalli Couture branded residences overview">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M3 12h18M3 18h18"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="Brand status">Brand Verified</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Cavalli Couture</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Palm Jumeirah</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">AED 22M – 75M</div><div>Price Range</div></div>
            <div><div class="text-bone font-semibold text-sm">70 units</div><div>Inventory</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group" aria-label="Bugatti Residences branded residences overview">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12l7-7 7 7M5 12l7 7 7-7"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="Brand status">Brand Verified</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Bugatti Residences</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Business Bay</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">AED 18M – 120M</div><div>Price Range</div></div>
            <div><div class="text-bone font-semibold text-sm">171 units</div><div>Inventory</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group" aria-label="Palazzo Versace branded residences overview">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2l3 7h7l-5.5 4 2 8L12 17l-6.5 4 2-8L2 9h7z"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="Brand status">Brand Verified</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Palazzo Versace</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Culture Village</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">AED 6M – 35M</div><div>Price Range</div></div>
            <div><div class="text-bone font-semibold text-sm">169 units</div><div>Inventory</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group" aria-label="Armani Residences branded residences overview">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20M4 7l8-5 8 5M4 17l8 5 8-5"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="Brand status">Brand Verified</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Armani Residences</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Burj Khalifa, Downtown</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">AED 9M – 45M</div><div>Price Range</div></div>
            <div><div class="text-bone font-semibold text-sm">144 units</div><div>Inventory</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group" aria-label="Mercedes-Benz Places branded residences overview">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h18M12 3v18M7 7l10 10M17 7L7 17"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="Brand status">Brand Verified</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Mercedes-Benz Places</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Downtown Dubai</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">AED 7M – 55M</div><div>Price Range</div></div>
            <div><div class="text-bone font-semibold text-sm">65 floors</div><div>Inventory</div></div>
          </div>
        </article>
      </div>
      <div class="mt-12 grid md:grid-cols-3 gap-6 bg-ink-900 border border-gold-line rounded-sm p-8 bg-gold-soft" aria-label="Branded residences market context">
        <div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Hotel Brands</div><p class="text-sm text-ash leading-relaxed">Bulgari, Six Senses, Armani, and Versace operate full-service hotel components within or adjacent to the residence tower, with shared spa, dining, and concierge teams servicing both hotel guests and residence owners.</p></div>
        <div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Automotive Brands</div><p class="text-sm text-ash leading-relaxed">Bugatti Residences and Mercedes-Benz Places translate automotive design language into residential architecture — swept forms, driver-grade materials, and signature features like Bugatti's residence-to-lobby car lift.</p></div>
        <div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Fashion Brands</div><p class="text-sm text-ash leading-relaxed">Cavalli Tower and Cavalli Couture extend the Roberto Cavalli atelier aesthetic into private homes — bold prints, gold leaf detail, animalier motifs, and the brand's signature colour palette throughout.</p></div>
      </div>
    </div>
  </section>

  <!-- 3. FEATURED BRANDED LISTINGS -->
  <section id="branded-listings" class="bg-ink-900 py-16 md:py-20" aria-label="Featured branded residence listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">Featured Branded Listings</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">Brand-Certified, Advisor-Verified</h2>
        </div>
        <p class="text-sm text-ash max-w-md">A selection of currently available branded residences across Dubai. Each listing has been verified against the brand's official inventory and inspected by a ZARIN advisor. For full availability across all eight brands, request a custom shortlist.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/branded/bulgari-2br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 2-bedroom Bulgari apartment on Jumeirah Bay Island">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="2-bedroom Bulgari apartment on Jumeirah Bay Island with sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Brand New</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 18M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Branded Apartment</div><div class="text-xs text-slate">Verified</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">2BR Apartment &middot; Bulgari Residences</h3>
            <div class="text-sm text-ash mb-4">Jumeirah Bay Island &middot; 2,180 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">2</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">3</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 8,257</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/branded/cavalli-ph-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4-bedroom Cavalli Tower penthouse in Dubai Marina">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="4-bedroom penthouse in Cavalli Tower Dubai Marina with skyline view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Trophy</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 32M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Branded Penthouse</div><div class="text-xs text-slate">Verified</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Penthouse &middot; Cavalli Tower</h3>
            <div class="text-sm text-ash mb-4">Dubai Marina &middot; 6,400 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 5,000</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/branded/six-senses-3br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3-bedroom Six Senses villa on Palm Jumeirah">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="3-bedroom villa at Six Senses Residences Palm Jumeirah with private pool" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Trophy</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 45M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Branded Villa</div><div class="text-xs text-slate">Verified</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Villa &middot; Six Senses The Palm</h3>
            <div class="text-sm text-ash mb-4">Palm Jumeirah &middot; 8,200 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 5,488</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/branded/bugatti-5br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 5-bedroom Bugatti Sky Mansion in Business Bay">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="5-bedroom Bugatti Sky Mansion in Business Bay with car lift" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-white-line text-bone rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Off-Plan</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 70M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Branded Sky Mansion</div><div class="text-xs text-slate">Verified</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">5BR Sky Mansion &middot; Bugatti Residences</h3>
            <div class="text-sm text-ash mb-4">Business Bay &middot; 12,500 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">5</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">7</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 5,600</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/branded/armani-2br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 2-bedroom Armani residence suite in Burj Khalifa">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="2-bedroom Armani residence suite inside Burj Khalifa Downtown Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-white-line text-bone rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Resale</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 12M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Branded Suite</div><div class="text-xs text-slate">Verified</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">2BR Suite &middot; Armani Residences</h3>
            <div class="text-sm text-ash mb-4">Burj Khalifa &middot; 1,950 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">2</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">3</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 6,154</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/branded/cavalli-couture-3br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3-bedroom Cavalli Couture penthouse on Palm Jumeirah">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="3-bedroom penthouse at Cavalli Couture Palm Jumeirah with private terrace" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-white-line text-bone rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Off-Plan</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 28M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Branded Penthouse</div><div class="text-xs text-slate">Verified</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Penthouse &middot; Cavalli Couture</h3>
            <div class="text-sm text-ash mb-4">Palm Jumeirah &middot; 5,200 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 5,385</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">This is a curated sample. ZARIN has access to every branded residence on the Dubai market, including off-market and pre-launch inventory. Tell us your preferred brand, location, and budget — we'll send a tailored shortlist within 24 hours.</p>
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request custom branded residence search">Request Custom Shortlist<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. WHY BRANDED RESIDENCES -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Why buy a branded residence">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why Branded</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-4">What Makes Branded Residences Different</h2>
        <p class="text-ash max-w-2xl mx-auto leading-relaxed">A branded residence is not just a luxury apartment with a famous name on the door. It is a structurally different product — a private home backed by the brand's design system, service standards, and global reputation. Below are the four reasons buyers tell us they chose branded over comparable non-branded inventory.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-label="Brand Prestige">
          <div class="w-12 h-12 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft mb-6" aria-hidden="true">
            <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-bone mb-3">Brand Prestige</h3>
          <p class="text-sm text-ash leading-relaxed">A Bulgari, Armani, or Versace home carries global brand equity that transfers to the title deed. Owners benefit from immediate international recognition, a consistent design language across continents, and the assurance that the brand's reputation rides on every unit delivered.</p>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-label="Hotel-Grade Service">
          <div class="w-12 h-12 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft mb-6" aria-hidden="true">
            <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <h3 class="text-xl font-bold text-bone mb-3">Hotel-Grade Service</h3>
          <p class="text-sm text-ash leading-relaxed">Hotel-branded residences include 24/7 concierge, daily housekeeping on request, in-residence dining, spa access, valet parking, and bell desk — the full service stack of a five-star hotel, delivered to a private home. Automotive- and fashion-branded projects focus on technology and amenity design instead.</p>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-label="Global Demand">
          <div class="w-12 h-12 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft mb-6" aria-hidden="true">
            <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-bone mb-3">Global Demand</h3>
          <p class="text-sm text-ash leading-relaxed">Branded residences attract a genuinely international buyer pool — corporate executives, diplomats, brand loyalists, and international families who recognise the brand in any city. This broad demand supports both rental liquidity and resale depth beyond what comparable non-branded stock typically commands.</p>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift" aria-label="Capital Preservation">
          <div class="w-12 h-12 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft mb-6" aria-hidden="true">
            <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-bone mb-3">Capital Preservation</h3>
          <p class="text-sm text-ash leading-relaxed">Brand licences limit competing supply and create a permanent quality floor. Historical Dubai resale data shows branded residences hold value better in soft markets and recover faster in up-cycles, with lower price volatility than non-branded peers in the same community. They suit long-hold investors, not short flippers.</p>
        </div>
      </div>
      <div class="mt-16 max-w-3xl mx-auto text-center">
        <p class="text-sm text-slate leading-relaxed">Branded residences are not the right answer for every buyer. The brand premium, higher service charges, and longer exit timeline make them a strong fit for some mandates and a poor fit for others. A ZARIN advisor will tell you honestly whether branded stock suits your goals — and which specific project matches your brief.</p>
      </div>
    </div>
  </section>

  <!-- 5. WHY BUY WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Why buy a branded residence with ZARIN">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why ZARIN for Branded</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">Independent Advice on Brand-Backed Homes</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">Branded residences are sold by the brand's own sales team, who represent the developer — not you. ZARIN sits on your side of the table: we verify brand claims against the actual specification document, negotiate on price and payment terms where possible, and audit the service-charge budget before you commit. Our founder has been investing in Dubai real estate since 2005; the company was established in 2023 to bring that institutional rigour to private buyers.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Direct relationships with all eight brand sales teams</div><div class="text-xs text-slate mt-1">Priority allocations on off-plan launches and resales.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Spec-sheet audit against the brand's marketing brochure</div><div class="text-xs text-slate mt-1">We check fit-out, appliances, finishes, and service inclusions line by line.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">2% standard commission, no brand kickbacks</div><div class="text-xs text-slate mt-1">Published, transparent, RERA-compliant. We disclose every payment.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Trilingual advisory: EN, AR, FA</div><div class="text-xs text-slate mt-1">Direct communication with brand teams in English, Arabic, or Farsi.</div></div></div>
          </div>
          <div class="flex flex-wrap gap-3 mb-6">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold-line rounded-xs text-[11px] uppercase tracking-wider text-gold-400 font-semibold" aria-label="RERA Licensed">RERA Licensed</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white-line rounded-xs text-[11px] uppercase tracking-wider text-ash font-semibold" aria-label="24 hour response">24hr Response</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white-line rounded-xs text-[11px] uppercase tracking-wider text-ash font-semibold" aria-label="Trilingual EN AR FA">Trilingual EN/AR/FA</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white-line rounded-xs text-[11px] uppercase tracking-wider text-ash font-semibold" aria-label="No obligation">No Obligation</span>
          </div>
          <a href="/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Learn more about ZARIN">Learn More About ZARIN<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">8+</div><div class="text-sm font-bold text-bone mb-1">Brands Represented</div><div class="text-xs text-slate">Direct relationships</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">AED 8M+</div><div class="text-sm font-bold text-bone mb-1">Entry Price</div><div class="text-xs text-slate">Branded market floor</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">24hr</div><div class="text-sm font-bold text-bone mb-1">Shortlist Delivery</div><div class="text-xs text-slate">After consultation</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">20+</div><div class="text-sm font-bold text-bone mb-1">Years in Dubai</div><div class="text-xs text-slate">Founder since 2005</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Branded residences FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Branded Residences FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Common Buyer Questions</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto leading-relaxed">Eight questions ZARIN advisors are asked most often about branded residences in Dubai — what they are, how they price, who can buy, and what the service stack actually delivers. If your question is not listed, ask us directly on WhatsApp or book a consultation.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-850 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What are branded residences in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Branded residences are private homes inside Dubai towers or villa communities operated under a global luxury brand — Bulgari, Six Senses, Cavalli, Bugatti, Armani, Versace, or Mercedes-Benz, among others. The brand is responsible for interior design, fit-out specifications, and ongoing service standards, while the developer constructs and delivers the building. Owners receive a freehold home with the staff, amenities, and brand experience normally associated with a five-star hotel. ZARIN curates verified branded inventory across all active Dubai projects.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Which branded residence projects are available in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Active Dubai branded projects include Bulgari Residences on Jumeirah Bay Island, Six Senses Residences on Palm Jumeirah, Cavalli Tower and Cavalli Couture, Bugatti Residences in Business Bay by Binghatti, Armani Residences inside Burj Khalifa, Palazzo Versace in Culture Village, and Mercedes-Benz Places in Downtown Dubai by Binghatti. Each has a different price band, handover date, and brand philosophy. ZARIN advisors track every active project and shortlist based on your brief — location, budget, handover timeline, and brand preference.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the price premium for branded residences?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Branded residences typically trade at a 25-60% premium per square foot versus comparable non-branded inventory in the same area. The premium reflects the brand licence fee, the higher fit-out specification, the integrated hotel service stack, and restricted supply. Historical resale data shows branded units hold value better in soft markets, but they are not a short-term flip — exit liquidity is concentrated among a smaller pool of brand-aware buyers. ZARIN provides comparable sale evidence before any commitment, so the premium is always justified in numbers, not marketing.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Do branded residences come with hotel services?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Hotel-branded residences (Bulgari, Six Senses, Armani, Versace) typically include 24/7 concierge, daily housekeeping on request, in-residence dining from the hotel kitchen, spa and pool access, valet parking, and bell desk. Automotive-branded projects (Bugatti, Mercedes-Benz) instead focus on brand-led design, smart-home technology, and car-related amenities such as Bugatti's residence-to-lobby car lift. Fashion-branded projects (Cavalli) sit in between, with design-forward interiors and selective concierge services. Service level varies by brand and project — ZARIN details exactly what is and is not included.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Are branded residences a good investment?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Branded residences can be a strong investment for buyers who value brand equity, international demand, and long holding periods. Dubai branded stock has historically shown lower price volatility and stronger capital preservation than non-branded peers in the same community, partly because the brand licence limits new competing supply. Yields are typically 4-6% gross, lower than mass-market apartments but with steadier tenant demand from corporate and diplomatic lessees. They suit owners who plan to hold for five to ten years, not flippers seeking a 12-month exit. ZARIN models each project on a 5-10 year hold before recommending.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can foreigners buy branded residences in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes. All branded residence projects in Dubai are located in designated freehold areas, so foreign nationals of any country can buy with full freehold ownership. The purchase process, DLD transfer fee (4% of price), and title deed issuance are identical to any other Dubai freehold transaction. Many branded projects also qualify buyers for the 10-year Golden Visa when the purchase price meets the AED 2 million threshold — Bulgari, Bugatti, and Six Senses units typically qualify by default. ZARIN advises on the visa, banking, and KYC steps specific to your nationality and residency status.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What are the typical service charges for branded residences?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Service charges for branded residences are materially higher than standard Dubai apartments because they include the brand service fee, hotel-grade staff, premium amenities, and the ongoing brand licence contribution. Expect AED 35-65 per square foot per year for hotel-branded residences (Bulgari, Six Senses, Armani, Versace) and AED 22-38 per square foot for automotive- and fashion-branded projects (Bugatti, Cavalli, Mercedes-Benz). For a 2,000 sqft Bulgari apartment, that translates to roughly AED 70,000-130,000 per year in service charges alone. ZARIN obtains the latest audited service charge schedules from the owners' association before you commit.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">How do I qualify to view a branded residence?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Most branded residence developers and hotel operators require prospective buyers to be pre-qualified before granting access to show units or off-plan sales galleries. This protects the brand's privacy standards and ensures the sales team's time is spent with serious buyers. ZARIN manages this for you: we submit your proof of funds, arrange NDAs where the brand requires confidentiality, schedule private viewings with the brand's sales director, and accompany you on tour. International buyers can complete initial qualification remotely and travel to Dubai for the in-person viewing and selection — typically a 3-5 day visit.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">Still have questions? <a href="/consultation" class="text-gold-400 font-semibold hover:underline">Book a free consultation</a> or <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">WhatsApp us</a>.</p></div>
    </div>
  </section>

  </main>

  ${enFooterEl.outerHTML}

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 right-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="WhatsApp us"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script defer>
    const header=document.getElementById('site-header');let ticking=false;
    window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(()=>{if(window.scrollY>60){header.style.backgroundColor='rgba(10,11,14,0.85)';header.style.backdropFilter='blur(20px)';header.style.borderBottomColor='rgba(200,171,131,0.15)';header.style.padding='0.85rem 0';}else{header.style.backgroundColor='transparent';header.style.backdropFilter='none';header.style.borderBottomColor='transparent';header.style.padding='1.25rem 0';}ticking=false;});ticking=true;}});
    const mt=document.getElementById('mobile-menu-toggle'),mc=document.getElementById('mobile-menu-close'),mm=document.getElementById('mobile-menu');
    mt?.addEventListener('click',()=>{mm.classList.add('open');mt.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';});
    mc?.addEventListener('click',()=>{mm.classList.remove('open');mt.setAttribute('aria-expanded','false');document.body.style.overflow='';});
    mm?.querySelectorAll('a').forEach(l=>{l.addEventListener('click',()=>{mm.classList.remove('open');mt.setAttribute('aria-expanded','false');document.body.style.overflow='';});});
  </script>
  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>
`;

// ==========================================
// 2. ASSEMBLE PERSIAN BRANDED RESIDENCES HTML
// ==========================================
const faBrandedHtml = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>اقامتگاه‌های برند در دبی | املاک و مستغلات زرین</title>
  <meta name="description" content="اقامتگاه‌های برند در دبی — بولگاری، سیکس سنسز، کاوالی، بوگاتی، آرمانی، ورساچه، مرسدس بنز. خدمات در سطح هتل ۵ ستاره و طراحی داخلی انحصاری برند.">
  <meta name="keywords" content="اقامتگاه‌های برند دبی, اقامتگاه بولگاری دبی, رزیدنس سیکس سنسز پالم جمیرا, کاوالی تاور دبی, رزیدنس بوگاتی دبی, آرمانی رزیدنس برج خلیفه, پالاتزو ورساچه دبی, مرسدس بنز پلسز دبی">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/fa/branded-residences-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/branded-residences-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/branded-residences-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/branded-residences-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="اقامتگاه‌های برند در دبی | املاک و مستغلات زرین">
  <meta property="og:description" content="اقامتگاه‌های برند در دبی — بولگاری، سیکس سنسز، کاوالی، بوگاتی، آرمانی، ورساچه، مرسدس بنز. خدمات پنج‌ستاره و طراحی اختصاصی برندها.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="اقامتگاه‌های برند در دبی">
  <meta property="og:url" content="https://zarinrealestate.com/fa/branded-residences-in-dubai">
  <meta property="og:site_name" content="املاک و مستغلات زرین">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="اقامتگاه‌های برند در دبی | املاک و مستغلات زرین">
  <meta name="twitter:description" content="بولگاری، سیکس سنسز، کاوالی، بوگاتی، آرمانی، ورساچه، مرسدس بنز — اقامتگاه‌های برند در دبی با مشاوره زارین.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80">

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
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"صفحه اصلی","item":"https://zarinrealestate.com/fa/"},
    {"@type":"ListItem","position":2,"name":"املاک","item":"https://zarinrealestate.com/fa/properties"},
    {"@type":"ListItem","position":3,"name":"اقامتگاه‌های برند","item":"https://zarinrealestate.com/fa/branded-residences-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/fa/branded-residences-in-dubai#collectionpage",
    "name":"اقامتگاه‌های برند در دبی","url":"https://zarinrealestate.com/fa/branded-residences-in-dubai",
    "description":"مجموعه اقامتگاه‌های برند در دبی — بولگاری، سیکس سنسز، کاوالی، بوگاتی، آرمانی، ورساچه، مرسدس بنز با خدمات لوکس هتل ۵ ستاره و طراحی اختصاصی برندها.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"آپارتمان ۲ خوابه بولگاری — جزیره خلیج جمیرا","url":"https://zarinrealestate.com/fa/branded/bulgari-2br-001","image":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"18000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"پنت‌هاوس ۴ خوابه — برج کاوالی","url":"https://zarinrealestate.com/fa/branded/cavalli-ph-001","image":"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"32000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"ویلای ۳ خوابه — رزیدنس سیکس سنسز پالم جمیرا","url":"https://zarinrealestate.com/fa/branded/six-senses-3br-001","image":"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"45000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"اسکای منشن بوگاتی — بیزنس بی","url":"https://zarinrealestate.com/fa/branded/bugatti-5br-001","image":"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"70000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"سوئیت ۲ خوابه — آرمانی رزیدنس برج خلیفه","url":"https://zarinrealestate.com/fa/branded/armani-2br-001","image":"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"12000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"پنت‌هاوس ۳ خوابه — کاوالی کوتور پالم جمیرا","url":"https://zarinrealestate.com/fa/branded/cavalli-couture-3br-001","image":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"28000000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/fa/branded-residences-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"اقامتگاه‌های برند (Branded Residences) در دبی چیستند؟","acceptedAnswer":{"@type":"Answer","text":"اقامتگاه‌های برند، واحدهای مسکونی اختصاصی داخل برج‌ها یا مجتمع‌های ویلایی هستند که با مشارکت رسمی و تحت مدیریت یکی از برندهای سرشناس لوکس جهانی — نظیر بولگاری، سیکس سنسز، کاوالی، بوگاتی، آرمانی، ورساچه و مرسدس بنز — توسعه یافته‌اند. این برندها مسئولیت طراحی داخلی، استانداردهای ساخت و ارائه خدمات هتل‌های پنج ستاره را به ساکنان تضمین می‌کنند."}},
      {"@type":"Question","name":"کدام پروژه‌های اقامتگاه برند در حال حاضر در دبی فعال هستند؟","acceptedAnswer":{"@type":"Answer","text":"شاخص‌ترین پروژه‌های فعال شامل رزیدنس بولگاری در جزیره خلیج جمیرا، سیکس سنسز در پالم جمیرا، کاوالی تاور در مارینا و کاوالی کوتور، بوگاتی رزیدنسز در بیزنس بی، آرمانی رزیدنس در برج خلیفه، پالاتزو ورساچه در کالچر ویلیج، و مرسدس بنز پلسز در داون‌تاون هستند. هر پروژه بازه قیمتی، زمان تحویل و فلسفه طراحی متفاوتی دارد."}},
      {"@type":"Question","name":"پرمیوم قیمتی املاک برند نسبت به املاک غیربرند در همان منطقه چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"املاک برند معمولاً با ۲۵ تا ۶۰ درصد پرمیوم در هر فوت مربع نسبت به املاک غیربرند مشابه در همان منطقه معامله می‌شوند. این تفاوت قیمت ناشی از هزینه لایسنس رسمی برند، متریال درجه یک سفارشی، تیم خدمات هتلینگ اختصاصی و عرضه محدود است. داده‌های تاریخی نشان می‌دهند که املاک برند در شرایط رکود بازار ثبات ارزش بسیار بهتری دارند."}},
      {"@type":"Question","name":"آیا اقامتگاه‌های برند شامل خدمات هتلی می‌شوند؟","acceptedAnswer":{"@type":"Answer","text":"بله. پروژه‌های برندهای هتلی (بولگاری، سیکس سنسز، آرمانی، ورساچه) خدمات ۲۴ ساعته کانسیرژ، نظافت روزانه به درخواست، سرو غذا در واحد از آشپزخانه هتل، اسپا، استخر و پارکبان ارائه می‌دهند. برندهای خودرویی (بوگاتی، مرسدس بنز) بیشتر بر طراحی های‌تک، خانه‌های هوشمند و امکاناتی نظیر آسانسور حمل اتومبیل به داخل واحد تمرکز دارند."}},
      {"@type":"Question","name":"آیا خرید اقامتگاه‌های برند سرمایه‌گذاری مناسبی محسوب می‌شود؟","acceptedAnswer":{"@type":"Answer","text":"برای خریدارانی که به دنبال اعتبار بین‌المللی برند، تقاضای پایدار از سوی دیپلمات‌ها و مدیران ارشد و نگهداری بلندمدت سرمایه هستند، انتخابی استثنایی است. نوسان قیمتی این واحدها کمتر از بازار عمومی است و بازده اجاره‌ای ناخالص بین ۴ تا ۶ درصد با مستاجران تراز اول بین‌المللی حاصل می‌شود."}},
      {"@type":"Question","name":"آیا اتباع خارجی می‌توانند در دبی اقامتگاه برند بخرند؟","acceptedAnswer":{"@type":"Answer","text":"بله. تمامی پروژه‌های اقامتگاه‌های برند دبی در مناطق مالکیت قطعی (فری‌هولد) قرار دارند و اتباع تمام کشورها می‌توانند با سند قطعی تک‌برگ صددرصد مالک شوند. این خریدها در صورت رسیدن به حد نصاب ۲ میلیون درهم، خریدار و خانواده‌اش را واجد شرایط دریافت گلدن ویزای ۱۰ ساله دبی می‌کنند."}},
      {"@type":"Question","name":"شارژ خدمات سالیانه (Service Charges) اقامتگاه‌های برند چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"هزینه شارژ خدمات به دلیل حضور پرسنل هتلی و نگهداری امکانات رفاهی درجه یک بالاتر است. برای پروژه‌های هتلینگ لوکس (مانند بولگاری و سیکس سنسز) سالیانه بین ۳۵ تا ۶۵ درهم به ازای هر فوت مربع و برای برندهای فشن و خودرویی بین ۲۲ تا ۳۸ درهم در هر فوت مربع است."}},
      {"@type":"Question","name":"شرایط احراز صلاحیت برای بازدید از اقامتگاه‌های برند چیست؟","acceptedAnswer":{"@type":"Answer","text":"اغلب سازندگان و اپراتورهای برند لوکس نیازمند احراز صلاحیت اولیه مالی خریداران پیش از ورود به شو روم‌ها یا گالری‌های اختصاصی هستند تا حریم خصوصی حفظ شود. مشاوران زرین کلیه مراحل ثبت صلاحیت، امضای تفاهم‌نامه‌های محرمانگی (NDA) و هماهنگی تورهای خصوصی با مدیران فروش برند را برای شما انجام می‌دهند."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/fa/branded-residences-in-dubai#webpage",
    "url":"https://zarinrealestate.com/fa/branded-residences-in-dubai","name":"اقامتگاه‌های برند در دبی | املاک و مستغلات زرین",
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
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="بخش معرفی اقامتگاه‌های برند">
    <div class="absolute inset-0 opacity-25"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">اقامتگاه‌های برند &middot; زندگی با خدمات هتل ۵ ستاره</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-bone mb-6">اقامتگاه‌های برند<br><span class="text-gold-gradient">در دبی</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">خانه‌های اختصاصی در برج‌ها و ویلاهایی تحت مدیریت برندهای جهانی بولگاری، سیکس سنسز، کاوالی، بوگاتی، آرمانی، ورساچه و مرسدس بنز. هر اقامتگاه دارای دیزاین داخلی اختصاصی برند، استانداردهای ساخت بی‌نقص و قرارداد خدمات هتلی است. مشاوران زرین دسترسی به فایل‌های خارج از بازار، مذاکره شرایط پرداخت و خدمات پس از فروش را تضمین می‌کنند.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#branded-listings" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="مشاهده پروژه‌های برند"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>مشاهده فایل‌های برند</a>
          <a href="/fa/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="گفتگو با مشاور تخصصی">گفتگو با مشاور تخصصی</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۸</div><div class="text-xs text-slate uppercase tracking-wider mt-1">برند بین‌المللی فعال</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۱۲</div><div class="text-xs text-slate uppercase tracking-wider mt-1">پروژه شاخص در دبی</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۸M AED</div><div class="text-xs text-slate uppercase tracking-wider mt-1">کف قیمت ورود</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۲۵-۶۰٪</div><div class="text-xs text-slate uppercase tracking-wider mt-1">پرمیوم ارزش برند</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. BRANDED BRANDS SHOWCASE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="برندهای مسکونی شاخص در دبی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-12 mb-16 items-end">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">برندهای فعال در دبی</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-4">هشت نماد برتر لوکس جهانی.<br>در یک پلتفرم منسجم.</h2>
        </div>
        <p class="text-lg text-ash leading-relaxed">دبی در حال حاضر متمرکزترین بازار اقامتگاه‌های برند در سراسر جهان است؛ هشت برند پرآوازه بین‌المللی پروژه‌های فعال مسکونی در این شهر دارند. هر برند زبان طراحی، فلسفه هتلینگ و قشر خاصی از خریداران را هدف قرار می‌دهد. مشاوران زرین ارتباط بی‌واسطه با دفاتر فروش تمامی برندها دارند و موجودی، پیشرفت پروژه و معاملات ثانویه را رصد می‌کنند. ما تنها به عنوان نماینده مستقل شما عمل می‌کنیم.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group text-right" aria-label="معرفی رزیدنس بولگاری دبی">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="وضعیت برند">تأییدشده رسمی</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">رزیدنس بولگاری</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>جزیره خلیج جمیرا</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">۱۸M تا ۸۰M AED</div><div>بازه قیمت</div></div>
            <div><div class="text-bone font-semibold text-sm">۱۶۵ واحد</div><div>موجودی</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group text-right" aria-label="معرفی رزیدنس سیکس سنسز دبی">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="وضعیت برند">تأییدشده رسمی</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">رزیدنس سیکس سنسز</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>پالم جمیرا</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">۱۲M تا ۶۰M AED</div><div>بازه قیمت</div></div>
            <div><div class="text-bone font-semibold text-sm">۱۲۱ واحد</div><div>موجودی</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group text-right" aria-label="معرفی برج کاوالی دبی">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="وضعیت برند">تأییدشده رسمی</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">برج کاوالی (Cavalli)</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>دبی مارینا</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">۹M تا ۵۰M AED</div><div>بازه قیمت</div></div>
            <div><div class="text-bone font-semibold text-sm">۴۸۶ واحد</div><div>موجودی</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group text-right" aria-label="معرفی کاوالی کوتور دبی">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M3 12h18M3 18h18"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="وضعیت برند">تأییدشده رسمی</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">کاوالی کوتور</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>پالم جمیرا</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">۲۲M تا ۷۵M AED</div><div>بازه قیمت</div></div>
            <div><div class="text-bone font-semibold text-sm">۷۰ واحد</div><div>موجودی</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group text-right" aria-label="معرفی رزیدنس بوگاتی دبی">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12l7-7 7 7M5 12l7 7 7-7"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="وضعیت برند">تأییدشده رسمی</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">بوگاتی رزیدنسز</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>بیزنس بی</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">۱۸M تا ۱۲۰M AED</div><div>بازه قیمت</div></div>
            <div><div class="text-bone font-semibold text-sm">۱۷۱ واحد</div><div>موجودی</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group text-right" aria-label="معرفی پالاتزو ورساچه دبی">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2l3 7h7l-5.5 4 2 8L12 17l-6.5 4 2-8L2 9h7z"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="وضعیت برند">تأییدشده رسمی</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پالاتزو ورساچه</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>کالچر ویلیج</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">۶M تا ۳۵M AED</div><div>بازه قیمت</div></div>
            <div><div class="text-bone font-semibold text-sm">۱۶۹ واحد</div><div>موجودی</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group text-right" aria-label="معرفی آرمانی رزیدنس دبی">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20M4 7l8-5 8 5M4 17l8 5 8-5"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="وضعیت برند">تأییدشده رسمی</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">آرمانی رزیدنس</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>برج خلیفه، داون‌تاون</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">۹M تا ۴۵M AED</div><div>بازه قیمت</div></div>
            <div><div class="text-bone font-semibold text-sm">۱۴۴ واحد</div><div>موجودی</div></div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm p-6 card-lift group text-right" aria-label="معرفی مرسدس بنز پلسز دبی">
          <div class="flex items-center justify-between mb-5">
            <div class="w-14 h-14 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft" aria-hidden="true">
              <svg class="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h18M12 3v18M7 7l10 10M17 7L7 17"/></svg>
            </div>
            <span class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-line rounded-xs px-2 py-1" aria-label="وضعیت برند">تأییدشده رسمی</span>
          </div>
          <h3 class="text-xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">مرسدس بنز پلسز</h3>
          <div class="text-sm text-ash mb-4 flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>داون‌تاون دبی</div>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold text-sm">۷M تا ۵۵M AED</div><div>بازه قیمت</div></div>
            <div><div class="text-bone font-semibold text-sm">۶۵ طبقه</div><div>موجودی</div></div>
          </div>
        </article>
      </div>
      <div class="mt-12 grid md:grid-cols-3 gap-6 bg-ink-900 border border-gold-line rounded-sm p-8 bg-gold-soft text-right" aria-label="دسته‌بندی برندها در بازار دبی">
        <div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">برندهای هتلینگ</div><p class="text-sm text-ash leading-relaxed">بولگاری، سیکس سنسز، آرمانی و ورساچه با بهره‌گیری از هتل‌های مجلل اختصاصی خود در کنار برج‌ها، امکاناتی نظیر اسپا، رستوران‌های میشلن و خدمات تشریفات ۲۴ ساعته را به ساکنان ارائه می‌دهند.</p></div>
        <div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">برندهای خودرویی</div><p class="text-sm text-ash leading-relaxed">بوگاتی رزیدنسز و مرسدس بنز پلسز زبان طراحی آیرودینامیک و متریال پیشرفته خودروهای سوپراسپرت را به معماری تبدیل کرده‌اند — همراه با امکاناتی نظیر آسانسور انتقال خودرو به لابی اختصاصی واحد.</p></div>
        <div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">برندهای فشن و مد</div><p class="text-sm text-ash leading-relaxed">کاوالی تاور و کاوالی کوتور امضای بی‌همتای روبرتو کاوالی در طراحی مد را وارد فضای مسکونی کرده‌اند؛ با بهره‌گیری از نقوش جسورانه، ورق‌های طلا و پالت‌های رنگی انحصاری این خانه مد ایتالیایی.</p></div>
      </div>
    </div>
  </section>

  <!-- 3. FEATURED BRANDED LISTINGS -->
  <section id="branded-listings" class="bg-ink-900 py-16 md:py-20" aria-label="فهرست برگزیده اقامتگاه‌های برند">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">فایل‌های منتخب برند</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">مورد تایید برند، کارشناسی‌شده توسط زرین</h2>
        </div>
        <p class="text-sm text-ash max-w-md">گزیده‌ای از املاک برند موجود در سراسر دبی. هر فایل بر اساس فهرست رسمی برند راستی‌آزمایی شده و شخصاً توسط مشاوران ارشد زرین بازرسی شده است.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/branded/bulgari-2br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده آپارتمان ۲ خوابه بولگاری">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="آپارتمان ۲ خوابه بولگاری در جزیره خلیج جمیرا با دید دریا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">کلید نخورده</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۸M درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">آپارتمان برند</div><div class="text-xs text-slate">کارشناسی‌شده</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">آپارتمان ۲ خوابه &middot; رزیدنس بولگاری</h3>
            <div class="text-sm text-ash mb-4">جزیره خلیج جمیرا &middot; ۲٬۱۸۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۲</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۳</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۸٬۲۵۷ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/branded/cavalli-ph-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۴ خوابه کاوالی تاور">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۴ خوابه در برج کاوالی دبی مارینا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Trophy Residence</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۳۲M درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس برند</div><div class="text-xs text-slate">کارشناسی‌شده</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پنت‌هاوس ۴ خوابه &middot; برج کاوالی</h3>
            <div class="text-sm text-ash mb-4">دبی مارینا &middot; ۶٬۴۰۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۵٬۰۰۰ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/branded/six-senses-3br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلای ۳ خوابه سیکس سنسز">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="ویلای ۳ خوابه در سیکس سنسز پالم جمیرا با استخر اختصاصی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Trophy Residence</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۴۵M درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلای برند</div><div class="text-xs text-slate">کارشناسی‌شده</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلای ۳ خوابه &middot; سیکس سنسز پالم</h3>
            <div class="text-sm text-ash mb-4">پالم جمیرا &middot; ۸٬۲۰۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۵٬۴۸۸ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/branded/bugatti-5br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده اسکای منشن ۵ خوابه بوگاتی">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="اسکای منشن ۵ خوابه بوگاتی در بیزنس بی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line text-bone rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">پیش‌فروش</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۷۰M درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">عمارت آسمانی برند</div><div class="text-xs text-slate">کارشناسی‌شده</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">اسکای منشن ۵ خوابه &middot; بوگاتی رزیدنسز</h3>
            <div class="text-sm text-ash mb-4">بیزنس بی &middot; ۱۲٬۵۰۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۵</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۷</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۵٬۶۰۰ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/branded/armani-2br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده سوئیت ۲ خوابه آرمانی برج خلیفه">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="سوئیت ۲ خوابه آرمانی داخل برج خلیفه داون‌تاون دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line text-bone rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">بازار ثانویه</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۲M درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">سوئیت برند</div><div class="text-xs text-slate">کارشناسی‌شده</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">سوئیت ۲ خوابه &middot; آرمانی رزیدنس</h3>
            <div class="text-sm text-ash mb-4">برج خلیفه &middot; ۱٬۹۵۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۲</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۳</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۶٬۱۵۴ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/branded/cavalli-couture-3br-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۳ خوابه کاوالی کوتور">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۳ خوابه در کاوالی کوتور پالم جمیرا با تراس خصوصی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line text-bone rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">پیش‌فروش</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۲۸M درهم</div>
          </a>
          <div class="p-6 text-right">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس برند</div><div class="text-xs text-slate">کارشناسی‌شده</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پنت‌هاوس ۳ خوابه &middot; کاوالی کوتور</h3>
            <div class="text-sm text-ash mb-4">پالم جمیرا &middot; ۵٬۲۰۰ فوت مربع</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۵٬۳۸۵ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">این لیست گزیده‌ای از پروژه‌های فعال است. مشاوران زرین به تمامی اقامتگاه‌های برند بازار دبی، از جمله پروژه‌های در آستانه پیش‌فروش یا خارج از بازار دسترسی دارند. برند، محله و بودجه مدنظرتان را اعلام کنید تا شورت‌لیست اختصاصی شما ظرف ۲۴ ساعت تدوین شود.</p>
        <a href="/fa/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="درخواست شورت‌لیست اختصاصی">درخواست شورت‌لیست اختصاصی املاک برند<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. WHY BRANDED RESIDENCES -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="چرا اقامتگاه‌های برند">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">مزایای اقامتگاه‌های برند</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-4">تمایز ساختاری املاک تحت لایسنس برند</h2>
        <p class="text-ash max-w-2xl mx-auto leading-relaxed">یک اقامتگاه برند صرفاً یک آپارتمان لوکس با نامی مشهور بر روی سردر نیست؛ بلکه دارایی منحصربه‌فردی است که توسط استانداردهای طراحی، سطح هتلینگ و اعتبار بین‌المللی برند پشتیبانی می‌شود. در ادامه چهار دلیل اصلی متقاضیان این خانه‌ها را مرور می‌کنیم.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift text-right" aria-label="اعتبار برند">
          <div class="w-12 h-12 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft mb-6" aria-hidden="true">
            <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-bone mb-3">اعتبار جهانی برند</h3>
          <p class="text-sm text-ash leading-relaxed">خانه‌ای با نام بولگاری، آرمانی یا ورساچه ارزش برند بین‌المللی را مستقیماً به سند ملکی منتقل می‌کند. مالکان از شناخته‌شدگی فوری در تمام دنیا و تعهد بی‌قیدوشرط کیفیت توسط برند سود می‌برند.</p>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift text-right" aria-label="خدمات هتل ۵ ستاره">
          <div class="w-12 h-12 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft mb-6" aria-hidden="true">
            <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <h3 class="text-xl font-bold text-bone mb-3">خدمات هتل ۵ ستاره</h3>
          <p class="text-sm text-ash leading-relaxed">اقامتگاه‌های هتلینگ شامل کانسیرژ ۲۴ ساعته، نظافت روزانه به درخواست، سرو غذا در واحد، اسپا، استخر و پارکبان هستند — کل پکیج خدماتی یک هتل لوکس بین‌المللی در اختیار خانه خصوصی شماست.</p>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift text-right" aria-label="تقاضای جهانی">
          <div class="w-12 h-12 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft mb-6" aria-hidden="true">
            <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-bone mb-3">تقاضای پایدار جهانی</h3>
          <p class="text-sm text-ash leading-relaxed">این خانه‌ها جامعه‌ای کاملاً فراملی از متقاضیان را جذب می‌کنند — مدیران بین‌المللی، دیپلمات‌ها و مشتریان پروپاقرص برند که در هر کشوری این نشان‌ها را می‌شناسند و نقدشوندگی اجاره و فروش را تضمین می‌کنند.</p>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-8 card-lift text-right" aria-label="حفظ ارزش سرمایه">
          <div class="w-12 h-12 border border-gold-line rounded-sm flex items-center justify-center bg-gold-soft mb-6" aria-hidden="true">
            <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-bone mb-3">حفظ و رشد ارزش سرمایه</h3>
          <p class="text-sm text-ash leading-relaxed">محدودیت عرضه برندها کف کیفیتی دائمی ایجاد می‌کند. آمار معاملات بازار دبی اثبات کرده که املاک برند در شرایط رکود ارزش خود را بسیار بهتر حفظ کرده و نوسان قیمتی کمتری دارند.</p>
        </div>
      </div>
      <div class="mt-16 max-w-3xl mx-auto text-center">
        <p class="text-sm text-slate leading-relaxed">اقامتگاه‌های برند انتخاب مناسبی برای هر نوع خریداری نیستند؛ پرمیوم قیمتی و شارژ خدمات بالاتر مستلزم افق دید سرمایه‌گذاری میان‌مدت و بلندمدت است. مشاوران زرین با صداقت کامل به شما خواهند گفت که آیا این دسته از املاک با اهداف مالی و سبک زندگی شما همخوانی دارد یا خیر.</p>
      </div>
    </div>
  </section>

  <!-- 5. WHY BUY WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="چرا خرید با زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">چرا زرین برای املاک برند</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">مشاوره کاملاً مستقل در خرید املاک برند</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">اقامتگاه‌های برند معمولاً توسط تیم فروش داخلی سازنده فروخته می‌شوند که منافع توسعه‌دهنده را دنبال می‌کنند، نه خریدار را. زرین در سمت شما قرار دارد: ما بروشورهای بازاریابی را با مشخصات فنی واقعی تطبیق می‌دهیم، بر سر قیمت و پلن اقساط مذاکره می‌کنیم و بودجه شارژ سالیانه را پیش از تعهد ممیزی می‌کنیم. موسس زرین از سال ۲۰۰۵ در دبی فعال است و رویکردی نهادی به خریداران خصوصی ارائه می‌دهد.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">روابط مستقیم با تیم‌های فروش هر ۸ برند لوکس</div><div class="text-xs text-slate mt-1">تخصیص اولویت در پیش‌فروش‌ها و دسترسی به فایل‌های بازار ثانویه.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">ممیزی بند به بند مشخصات متریال و خدمات هتلینگ</div><div class="text-xs text-slate mt-1">بررسی دقیق برند لوازم خانگی، نوع فینیشینگ و لیست خدمات مشمول.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">کمیسیون استاندارد ۲٪ بدون دریافت پورسانت پنهان از برندها</div><div class="text-xs text-slate mt-1">شفاف، منطبق بر ضوابط RERA و اعلام صریح تمامی تبادلات مالی.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه مستقیم: فارسی، انگلیسی و عربی</div><div class="text-xs text-slate mt-1">ارتباط بی‌واسطه و مذاکره حرفه‌ای با تیم‌های فروش بین‌المللی.</div></div></div>
          </div>
          <div class="flex flex-wrap gap-3 mb-6">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold-line rounded-xs text-[11px] uppercase tracking-wider text-gold-400 font-semibold" aria-label="دارای مجوز ررا">دارای مجوز RERA</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white-line rounded-xs text-[11px] uppercase tracking-wider text-ash font-semibold" aria-label="پاسخ در ۲۴ ساعت">پاسخ در ۲۴ ساعت</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white-line rounded-xs text-[11px] uppercase tracking-wider text-ash font-semibold" aria-label="مشاوره سه‌زبانه">مشاوره سه‌زبانه</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white-line rounded-xs text-[11px] uppercase tracking-wider text-ash font-semibold" aria-label="بدون تعهد مالی اولیه">بدون تعهد مالی اولیه</span>
          </div>
          <a href="/fa/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="درباره زرین">بیشتر درباره زرین بدانید<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft text-right"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۸</div><div class="text-sm font-bold text-bone mb-1">برند نمایندگی‌شده</div><div class="text-xs text-slate">ارتباط بدون واسطه</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6 text-right"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۸M AED</div><div class="text-sm font-bold text-bone mb-1">کف قیمت بازار</div><div class="text-xs text-slate">ورود به املاک برند</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6 text-right"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲۴ ساعت</div><div class="text-sm font-bold text-bone mb-1">ارائه شورت‌لیست</div><div class="text-xs text-slate">پس از جلسه مشاوره</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6 text-right"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۲۰ سال</div><div class="text-sm font-bold text-bone mb-1">سابقه در بازار دبی</div><div class="text-xs text-slate">فعالیت از سال ۲۰۰۵</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="سوالات متداول اقامتگاه‌های برند">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">سوالات متداول اقامتگاه‌های برند</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">پرسش‌های پرتکرار خریداران</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto leading-relaxed">هشت پرسش متداولی که مشاوران زرین درباره اقامتگاه‌های برند دبی، نحوه قیمت‌گذاری و بسته‌های خدمات دریافت می‌کنند. در صورت تمایل به دریافت پاسخ مستقیم، از طریق واتس‌اپ با ما در ارتباط باشید.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-850 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">اقامتگاه‌های برند (Branded Residences) در دبی چیستند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">اقامتگاه‌های برند، واحدهای مسکونی اختصاصی داخل برج‌ها یا مجتمع‌های ویلایی هستند که با مشارکت رسمی و تحت مدیریت یکی از برندهای سرشناس لوکس جهانی — نظیر بولگاری، سیکس سنسز، کاوالی، بوگاتی، آرمانی، ورساچه و مرسدس بنز — توسعه یافته‌اند. این برندها مسئولیت طراحی داخلی، استانداردهای ساخت و ارائه خدمات هتل‌های پنج ستاره را به ساکنان تضمین می‌کنند.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">کدام پروژه‌های اقامتگاه برند در حال حاضر در دبی فعال هستند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">شاخص‌ترین پروژه‌های فعال شامل رزیدنس بولگاری در جزیره خلیج جمیرا، سیکس سنسز در پالم جمیرا، کاوالی تاور در مارینا و کاوالی کوتور، بوگاتی رزیدنسز در بیزنس بی، آرمانی رزیدنس در برج خلیفه، پالاتزو ورساچه در کالچر ویلیج، و مرسدس بنز پلسز در داون‌تاون هستند. هر پروژه بازه قیمتی، زمان تحویل و فلسفه طراحی متفاوتی دارد.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">پرمیوم قیمتی املاک برند نسبت به املاک غیربرند در همان منطقه چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">املاک برند معمولاً با ۲۵ تا ۶۰ درصد پرمیوم در هر فوت مربع نسبت به املاک غیربرند مشابه در همان منطقه معامله می‌شوند. این تفاوت قیمت ناشی از هزینه لایسنس رسمی برند، متریال درجه یک سفارشی، تیم خدمات هتلینگ اختصاصی و عرضه محدود است. داده‌های تاریخی نشان می‌دهند که املاک برند در شرایط رکود بازار ثبات ارزش بسیار بهتری دارند.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا اقامتگاه‌های برند شامل خدمات هتلی می‌شوند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله. پروژه‌های برندهای هتلی (بولگاری، سیکس سنسز، آرمانی، ورساچه) خدمات ۲۴ ساعته کانسیرژ، نظافت روزانه به درخواست، سرو غذا در واحد از آشپزخانه هتل، اسپا، استخر و پارکبان ارائه می‌دهند. برندهای خودرویی (بوگاتی، مرسدس بنز) بیشتر بر طراحی های‌تک، خانه‌های هوشمند و امکاناتی نظیر آسانسور حمل اتومبیل به داخل واحد تمرکز دارند.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا خرید اقامتگاه‌های برند سرمایه‌گذاری مناسبی محسوب می‌شود؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">برای خریدارانی که به دنبال اعتبار بین‌المللی برند، تقاضای پایدار از سوی دیپلمات‌ها و مدیران ارشد و نگهداری بلندمدت سرمایه هستند، انتخابی استثنایی است. نوسان قیمتی این واحدها کمتر از بازار عمومی است و بازده اجاره‌ای ناخالص بین ۴ تا ۶ درصد با مستاجران تراز اول بین‌المللی حاصل می‌شود.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا اتباع خارجی می‌توانند در دبی اقامتگاه برند بخرند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله. تمامی پروژه‌های اقامتگاه‌های برند دبی در مناطق مالکیت قطعی (فری‌هولد) قرار دارند و اتباع تمام کشورها می‌توانند با سند قطعی تک‌برگ صددرصد مالک شوند. این خریدها در صورت رسیدن به حد نصاب ۲ میلیون درهم، خریدار و خانواده‌اش را واجد شرایط دریافت گلدن ویزای ۱۰ ساله دبی می‌کنند.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">شارژ خدمات سالیانه (Service Charges) اقامتگاه‌های برند چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">هزینه شارژ خدمات به دلیل حضور پرسنل هتلی و نگهداری امکانات رفاهی درجه یک بالاتر است. برای پروژه‌های هتلینگ لوکس (مانند بولگاری و سیکس سنسز) سالیانه بین ۳۵ تا ۶۵ درهم به ازای هر فوت مربع و برای برندهای فشن و خودرویی بین ۲۲ تا ۳۸ درهم در هر فوت مربع است.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">شرایط احراز صلاحیت برای بازدید از اقامتگاه‌های برند چیست؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">اغلب سازندگان و اپراتورهای برند لوکس نیازمند احراز صلاحیت اولیه مالی خریداران پیش از ورود به شو روم‌ها یا گالری‌های اختصاصی هستند تا حریم خصوصی حفظ شود. مشاوران زرین کلیه مراحل ثبت صلاحیت، امضای تفاهم‌نامه‌های محرمانگی (NDA) و هماهنگی تورهای خصوصی با مدیران فروش برند را برای شما انجام می‌دهند.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">هنوز سوالی دارید؟ <a href="/fa/consultation" class="text-gold-400 font-semibold hover:underline">رزرو جلسه رایگان مشاوره</a> یا <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">ارتباط در واتس‌اپ</a>.</p></div>
    </div>
  </section>

  </main>

  ${faFooterEl.outerHTML}

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 left-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="ارتباط در واتس‌اپ"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script defer>
    const header=document.getElementById('site-header');let ticking=false;
    window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(()=>{if(window.scrollY>60){header.style.backgroundColor='rgba(10,11,14,0.85)';header.style.backdropFilter='blur(20px)';header.style.borderBottomColor='rgba(200,171,131,0.15)';header.style.padding='0.85rem 0';}else{header.style.backgroundColor='transparent';header.style.backdropFilter='none';header.style.borderBottomColor='transparent';header.style.padding='1.25rem 0';}ticking=false;});ticking=true;}});
    const mt=document.getElementById('mobile-menu-toggle'),mc=document.getElementById('mobile-menu-close'),mm=document.getElementById('mobile-menu');
    mt?.addEventListener('click',()=>{mm.classList.add('open');mt.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';});
    mc?.addEventListener('click',()=>{mm.classList.remove('open');mt.setAttribute('aria-expanded','false');document.body.style.overflow='';});
    mm?.querySelectorAll('a').forEach(l=>{l.addEventListener('click',()=>{mm.classList.remove('open');mt.setAttribute('aria-expanded','false');document.body.style.overflow='';});});
  </script>
  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>
`;

// ==========================================
// 3. WRITE BOTH ROOT AND /INDEX.HTML FILES
// ==========================================
// English
fs.writeFileSync('branded-residences-in-dubai.html', enBrandedHtml, 'utf8');
fs.mkdirSync('branded-residences-in-dubai', { recursive: true });
fs.writeFileSync(path.join('branded-residences-in-dubai', 'index.html'), enBrandedHtml, 'utf8');

// Persian
fs.writeFileSync(path.join('fa', 'branded-residences-in-dubai.html'), faBrandedHtml, 'utf8');
fs.mkdirSync(path.join('fa', 'branded-residences-in-dubai'), { recursive: true });
fs.writeFileSync(path.join('fa', 'branded-residences-in-dubai', 'index.html'), faBrandedHtml, 'utf8');

console.log('Branded Residences pages generated successfully for both EN and FA (both .html and /index.html)!');
