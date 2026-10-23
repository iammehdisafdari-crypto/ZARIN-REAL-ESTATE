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

// Prepare English Header with active state on Commercial and Properties
const enHeaderClone = JSDOM.fragment(enHeaderEl.outerHTML).querySelector('#site-header');
const enPropLink = enHeaderClone.querySelector('#properties-nav-link');
if (enPropLink) {
  enPropLink.setAttribute('aria-current', 'page');
  enPropLink.classList.remove('text-ash');
  enPropLink.classList.add('text-gold-400');
}
const enCommLink = enHeaderClone.querySelector('a[href="/commercial-properties-in-dubai"]');
if (enCommLink) {
  enCommLink.setAttribute('aria-current', 'page');
  enCommLink.classList.remove('text-ash');
  enCommLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare English Mobile Menu with active state
const enMobileClone = JSDOM.fragment(enMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const enCommMobileLink = enMobileClone.querySelector('a[href="/commercial-properties-in-dubai"]');
if (enCommMobileLink) {
  enCommMobileLink.classList.remove('text-ash');
  enCommMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Header with active state
const faHeaderClone = JSDOM.fragment(faHeaderEl.outerHTML).querySelector('#site-header');
const faPropLink = faHeaderClone.querySelector('#properties-nav-link');
if (faPropLink) {
  faPropLink.setAttribute('aria-current', 'page');
  faPropLink.classList.remove('text-ash');
  faPropLink.classList.add('text-gold-400');
}
const faCommLink = faHeaderClone.querySelector('a[href="/fa/commercial-properties-in-dubai"]');
if (faCommLink) {
  faCommLink.setAttribute('aria-current', 'page');
  faCommLink.classList.remove('text-ash');
  faCommLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Mobile Menu with active state
const faMobileClone = JSDOM.fragment(faMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const faCommMobileLink = faMobileClone.querySelector('a[href="/fa/commercial-properties-in-dubai"]');
if (faCommMobileLink) {
  faCommMobileLink.classList.remove('text-ash');
  faCommMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// ==========================================
// 1. ASSEMBLE ENGLISH COMMERCIAL HTML
// ==========================================
const enCommercialHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>Commercial Properties in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Commercial property in Dubai — offices, retail, and industrial spaces for sale and lease. Verified by ZARIN. Business Bay, DIFC, JLT, and Downtown.">
  <meta name="keywords" content="commercial property Dubai, Dubai offices for sale, Dubai retail space, DIFC office, Business Bay commercial, JLT office space">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/commercial-properties-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/commercial-properties-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/commercial-properties-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/commercial-properties-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Commercial Properties in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Commercial property in Dubai — offices, retail, and industrial. Verified by ZARIN advisors.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Commercial properties in Dubai">
  <meta property="og:url" content="https://zarinrealestate.com/commercial-properties-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Commercial Properties in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Commercial property in Dubai — offices, retail, and industrial.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>

  <style type="text/tailwindcss">
    @theme {
      --color-ink-950:#050507;--color-ink-900:#0A0B0E;--color-ink-850:#0E1015;--color-ink-800:#111318;--color-ink-700:#181B22;
      --color-gold-300:#DFC49E;--color-gold-400:#C8AB83;--color-gold-soft:rgba(200,171,131,0.08);--color-gold-tint:rgba(200,171,131,0.15);--color-gold-line:rgba(200,171,131,0.32);--color-gold-border:rgba(200,171,131,0.45);--color-gold-glow:rgba(200,171,131,0.20);
      --color-bone:#F8F9FA;--color-ash:#9FA6B2;--color-slate:#676E7D;
      --color-white-soft:rgba(255,255,255,0.04);--color-white-line:rgba(255,255,255,0.08);
      --color-glass:rgba(10,11,14,0.78);
      --color-success:#4ADE80;--color-warning:#FBBF24;--color-info:#60A5FA;
      --font-sans:"Source Sans 3","Vazirmatn",-apple-system,sans-serif;
      --container-narrow:1040px;--container-default:1380px;--container-wide:1600px;
      --radius-xs:2px;--radius-sm:4px;
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
    {"@type":"ListItem","position":3,"name":"Commercial","item":"https://zarinrealestate.com/commercial-properties-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/commercial-properties-in-dubai#collectionpage",
    "name":"Commercial Properties in Dubai","url":"https://zarinrealestate.com/commercial-properties-in-dubai",
    "description":"Commercial property in Dubai — offices, retail, and industrial spaces for sale and lease.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"Office Floor — DIFC Gate","offers":{"@type":"Offer","price":"18500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"Retail — Downtown Boulevard","offers":{"@type":"Offer","price":"6800000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"Warehouse — Dubai Investment Park","offers":{"@type":"Offer","price":"9500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"Office Floor — JLT Cluster X","offers":{"@type":"Offer","price":"5200000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/commercial-properties-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"What are the best areas in Dubai for commercial property?","acceptedAnswer":{"@type":"Answer","text":"DIFC remains the premier address for financial and professional services, with rents of AED 2,000-3,500 per sqft annually. Business Bay offers mid-tier offices at AED 1,200-2,000 per sqft. JLT clusters provide value at AED 800-1,500 per sqft. Downtown Dubai and City Walk command retail premiums. Industrial buyers look at Dubai Investment Park, Jebel Ali Free Zone, and Ras Al Khor."}},
      {"@type":"Question","name":"Can foreigners buy commercial property in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Yes, foreigners can buy freehold commercial property in designated zones across Dubai, including DIFC, Business Bay, JLT, Downtown, and many free zones. Foreign ownership of 100% of a mainland company has been allowed since 2021 under the amended Commercial Companies Law. ZARIN advises on the right structure based on your business activity."}},
      {"@type":"Question","name":"What are typical commercial rents in Dubai in 2026?","acceptedAnswer":{"@type":"Answer","text":"As of 2026, prime DIFC office rents are AED 2,200-3,500 per sqft per year. Business Bay offices trade at AED 1,400-2,200 per sqft. JLT and Barsha Heights range AED 800-1,500 per sqft. Retail in Downtown and Marina commands AED 3,500-7,000 per sqft annually. Industrial spaces range AED 60-150 per sqft depending on location and fit-out."}},
      {"@type":"Question","name":"Are commercial property yields higher than residential in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Generally yes. Commercial property in Dubai offers net yields of 7-10% (after service charges), compared to 5-7% gross for residential. The higher yield compensates for higher risk — longer void periods, tenant credit risk, and more complex management. Premium DIFC and Downtown commercial assets have lower yields (5-7%) but stronger capital preservation."}},
      {"@type":"Question","name":"What is the standard commercial lease length in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Commercial leases typically run 1-3 years, sometimes up to 5 years for larger spaces. Multi-year leases often include escalation clauses (3-5% annual). Most commercial leases are 'triple net' — the tenant pays service charges, utilities, and maintenance. Registration with Ejari is required for all commercial tenancies."}},
      {"@type":"Question","name":"What documents do I need to buy commercial property in Dubai?","acceptedAnswer":{"@type":"Answer","text":"For corporate buyers: trade license copy, MOA, board resolution authorizing the purchase, and KYC documents for shareholders. For individual buyers: passport copy, Emirates ID, and proof of funds. Free zone property requires a free zone company registration. ZARIN guides you through the exact structure based on your business activity."}},
      {"@type":"Question","name":"Do you handle tenant representation for commercial space?","acceptedAnswer":{"@type":"Answer","text":"Yes. ZARIN provides tenant representation services — finding suitable commercial spaces, negotiating leases, and coordinating fit-out. We represent both landlords and tenants, always disclosing our role. Tenant rep is typically free to the tenant as the landlord pays the commission."}},
      {"@type":"Question","name":"Are free zone commercial properties a good investment?","acceptedAnswer":{"@type":"Answer","text":"Free zone commercial property (DIFC, DMCC, JLT) offers benefits like 100% foreign ownership, no corporate tax for most activities (under UAE Corporate Tax Law 2023, free zone qualifying income may still benefit), and 100% capital repatriation. However, you typically cannot operate a mainland business from a free zone office. The investment case depends on your business structure."}}
    ]
  }
  </script>

  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/commercial-properties-in-dubai#webpage",
    "url":"https://zarinrealestate.com/commercial-properties-in-dubai","name":"Commercial Properties in Dubai | ZARIN Real Estate",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "speakable":{"@type":"SpeakableSpecification","cssSelector":["#hero-headline","#tldr-summary"]}}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">Skip to main content</a>

  ${enHeaderClone.outerHTML}

  ${enMobileClone.outerHTML}

  <main id="main">

  <!-- 1. HERO -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Commercial hero">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">Commercial &middot; Sale &amp; Lease</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6">Commercial<br><span class="text-gold-gradient">Properties in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">Offices, retail spaces, warehouses, and labour camps — for sale or lease across DIFC, Business Bay, JLT, Downtown, and Dubai's industrial zones. ZARIN's commercial team handles tenant representation, landlord leasing, and investment acquisition.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#commercial-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse commercial listings">Browse Listings</a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Contact commercial broker">Contact Broker</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">680+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Active Listings</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">7-10%</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Net Yields</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">12</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Commercial Zones</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">1-5 yr</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Lease Terms</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. COMMERCIAL CATEGORIES -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Commercial categories">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Commercial Categories</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Three Asset Classes</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Each commercial category has its own tenant profile, yield dynamics, and operational considerations. ZARIN's team specializes in each.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Asset 01</div><h3 class="text-2xl font-bold text-bone group-hover:text-gold-400 transition-colors">Office Space</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-6">Grade A office floors in DIFC, Business Bay, JLT, and Downtown. Tenant representation, landlord leasing, and investment sales.</p>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold mb-1">Rent range</div><div>AED 800-3,500/sqft</div></div>
            <div><div class="text-bone font-semibold mb-1">Yield</div><div>6-8%</div></div>
          </div>
        </article>
        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Asset 02</div><h3 class="text-2xl font-bold text-bone group-hover:text-gold-400 transition-colors">Retail Space</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-6">Ground-floor retail units in Downtown, Marina, JBR, and City Walk. F&B, fashion, and services — for sale or lease.</p>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold mb-1">Rent range</div><div>AED 3,500-7,000/sqft</div></div>
            <div><div class="text-bone font-semibold mb-1">Yield</div><div>7-9%</div></div>
          </div>
        </article>
        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Asset 03</div><h3 class="text-2xl font-bold text-bone group-hover:text-gold-400 transition-colors">Industrial</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-6">Warehouses, labour camps, and light industrial units in DIP, Jebel Ali Free Zone, and Ras Al Khor. Logistical access and free zone benefits.</p>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold mb-1">Rent range</div><div>AED 60-150/sqft</div></div>
            <div><div class="text-bone font-semibold mb-1">Yield</div><div>8-10%</div></div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 3. FEATURED LISTINGS -->
  <section id="commercial-grid" class="bg-ink-900 py-24 md:py-32" aria-label="Featured commercial listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Featured Listings</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Current Commercial Mandates</h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Office DIFC -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View DIFC office floor">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" alt="Office floor in DIFC Gate Building" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Grade A</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 18.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Office &middot; Sale</div><div class="text-xs text-slate">DIFC</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Full Office Floor &middot; Gate District 4</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">8,500 sqft fitted Grade A office with DIFC views. Currently leased to a financial services tenant until 2028.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">8,500 sqft</div><div>Area</div></div>
              <div><div class="text-bone font-semibold">AED 2,176</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
        <!-- Retail Downtown -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View Downtown retail">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" alt="Retail space on Downtown Boulevard" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 6.8M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Retail &middot; Sale</div><div class="text-xs text-slate">Downtown</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Ground Floor Retail &middot; Boulevard Plaza</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">1,800 sqft retail unit on busy boulevard. High footfall, suitable for F&amp;B or boutique retail.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">1,800 sqft</div><div>Area</div></div>
              <div><div class="text-bone font-semibold">AED 3,778</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
        <!-- Warehouse DIP -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View DIP warehouse">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" alt="Warehouse in Dubai Investment Park" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 9.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Industrial &middot; Sale</div><div class="text-xs text-slate">DIP</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Warehouse &middot; Dubai Investment Park 1</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">22,000 sqft warehouse with 8m clear height, dock levelers, and office mezzanine. Excellent logistics access.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">22,000 sqft</div><div>Area</div></div>
              <div><div class="text-bone font-semibold">AED 432</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
        <!-- Office JLT -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View JLT office floor">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80" alt="Office floor in JLT Cluster X" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 5.2M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Office &middot; Sale</div><div class="text-xs text-slate">JLT</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Office Floor &middot; Cluster X Tower</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">4,300 sqft shell-and-core office with lake view. Ideal for SME or regional headquarters.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4,300 sqft</div><div>Area</div></div>
              <div><div class="text-bone font-semibold">AED 1,209</div><div>per sqft</div></div>
            </div>
          </div>
        </article>
        <!-- Office Lease DIFC -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View DIFC office lease">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" alt="Office floor available for lease in DIFC" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">For Lease</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 2.8K/sqft</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Office &middot; Lease</div><div class="text-xs text-slate">DIFC</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Fitted Office &middot; Gate Avenue</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">6,200 sqft fitted office with meeting rooms and private cabins. Available immediately.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">6,200 sqft</div><div>Area</div></div>
              <div><div class="text-bone font-semibold">3 yr lease</div><div>Standard</div></div>
            </div>
          </div>
        </article>
        <!-- Retail Lease Marina -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View Marina retail lease">
            <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80" alt="Retail space in Dubai Marina Walk" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">For Lease</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 5.5K/sqft</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Retail &middot; Lease</div><div class="text-xs text-slate">Marina</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">F&amp;B Retail &middot; Marina Walk</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">1,400 sqft waterfront retail with F&amp;B license. Outdoor seating, high pedestrian traffic.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">1,400 sqft</div><div>Area</div></div>
              <div><div class="text-bone font-semibold">F&amp;B</div><div>Approved</div></div>
            </div>
          </div>
        </article>
      </div>
      <div class="mt-12 text-center">
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request commercial property search">Request Custom Search<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. KEY COMMERCIAL AREAS -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Commercial areas">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Commercial Hubs</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Dubai's Commercial Zones</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Each commercial zone has its own tenant profile, license rules, and yield range. Click to see what's currently available.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/areas" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" alt="DIFC commercial district" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">DIFC</h3>
            <p class="text-xs text-ash leading-relaxed mb-3">Financial district. Premier offices for banks, funds, professional services.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 2.2-3.5K/sqft</span>
              <span class="text-slate">120+ listings</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Business Bay commercial towers" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Business Bay</h3>
            <p class="text-xs text-ash leading-relaxed mb-3">Mid-tier offices and mixed-use towers. Strong tenant demand.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.4-2.2K/sqft</span>
              <span class="text-slate">180+ listings</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80" alt="JLT commercial towers" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">JLT</h3>
            <p class="text-xs text-ash leading-relaxed mb-3">Free zone clusters with SME offices and corporate floors.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 800-1.5K/sqft</span>
              <span class="text-slate">240+ listings</span>
            </div>
          </div>
        </a>
        <a href="/areas" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80" alt="Dubai industrial zone" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Industrial</h3>
            <p class="text-xs text-ash leading-relaxed mb-3">DIP, Jebel Ali, Ras Al Khor — warehouses and labour camps.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 60-150/sqft</span>
              <span class="text-slate">140+ listings</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 5. WHY ZARIN COMMERCIAL -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Why ZARIN commercial">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why ZARIN Commercial</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">A Commercial Team That Understands Business</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">Commercial property is fundamentally different from residential — lease structures are more complex, tenant credit matters, and the wrong zone can sink your business before you've even opened. ZARIN's commercial team brings 15+ years of corporate real estate experience to every mandate.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Tenant representation &amp; landlord leasing</div><div class="text-xs text-slate mt-1">We represent both sides, always disclosed.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Free zone vs. mainland advisory</div><div class="text-xs text-slate mt-1">Right structure for your business activity.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Investment yield analysis</div><div class="text-xs text-slate mt-1">Net yields, not gross — service charges deducted.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Lease negotiation &amp; review</div><div class="text-xs text-slate mt-1">Escalation clauses, break options, fit-out periods.</div></div></div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">680+</div><div class="text-sm font-bold text-bone mb-1">Active Listings</div><div class="text-xs text-slate">Sale &amp; lease</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">7-10%</div><div class="text-sm font-bold text-bone mb-1">Net Yields</div><div class="text-xs text-slate">After service charges</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">15+</div><div class="text-sm font-bold text-bone mb-1">Years Experience</div><div class="text-xs text-slate">Commercial team</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">Free</div><div class="text-sm font-bold text-bone mb-1">Tenant Rep</div><div class="text-xs text-slate">Landlord pays</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Commercial FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Commercial FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Common Questions</h2>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-900 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What are the best areas in Dubai for commercial property?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">DIFC remains the premier address for financial and professional services, with rents of AED 2,000-3,500 per sqft annually. Business Bay offers mid-tier offices at AED 1,200-2,000 per sqft. JLT clusters provide value at AED 800-1,500 per sqft. Downtown Dubai and City Walk command retail premiums. Industrial buyers look at Dubai Investment Park, Jebel Ali Free Zone, and Ras Al Khor.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can foreigners buy commercial property in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes, foreigners can buy freehold commercial property in designated zones across Dubai, including DIFC, Business Bay, JLT, Downtown, and many free zones. Foreign ownership of 100% of a mainland company has been allowed since 2021 under the amended Commercial Companies Law. ZARIN advises on the right structure based on your business activity and trade license requirements.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What are typical commercial rents in Dubai in 2026?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">As of 2026, prime DIFC office rents are AED 2,200-3,500 per sqft per year. Business Bay offices trade at AED 1,400-2,200 per sqft. JLT and Barsha Heights range AED 800-1,500 per sqft. Retail in Downtown and Marina commands AED 3,500-7,000 per sqft annually. Industrial spaces range AED 60-150 per sqft depending on location and fit-out.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Are commercial property yields higher than residential in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Generally yes. Commercial property in Dubai offers net yields of 7-10% (after service charges), compared to 5-7% gross for residential. The higher yield compensates for higher risk — longer void periods, tenant credit risk, and more complex management. Premium DIFC and Downtown commercial assets have lower yields (5-7%) but stronger capital preservation.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the standard commercial lease length in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Commercial leases typically run 1-3 years, sometimes up to 5 years for larger spaces. Multi-year leases often include escalation clauses (3-5% annual). Most commercial leases are 'triple net' — the tenant pays service charges, utilities, and maintenance. Registration with Ejari is required for all commercial tenancies.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What documents do I need to buy commercial property in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">For corporate buyers: trade license copy, MOA, board resolution authorizing the purchase, and KYC documents for shareholders. For individual buyers: passport copy, Emirates ID, and proof of funds. Free zone property requires a free zone company registration. ZARIN guides you through the exact structure based on your business activity.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Do you handle tenant representation for commercial space?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes. ZARIN provides tenant representation services — finding suitable commercial spaces, negotiating leases, and coordinating fit-out. We represent both landlords and tenants, always disclosing our role. Tenant rep is typically free to the tenant as the landlord pays the commission. We also handle lease renewals and disposals for existing tenants.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Are free zone commercial properties a good investment?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Free zone commercial property (DIFC, DMCC, JLT) offers benefits like 100% foreign ownership, potential qualifying income tax benefits under UAE Corporate Tax Law 2023, and 100% capital repatriation. However, you typically cannot operate a mainland business from a free zone office. The investment case depends on your business structure and activity.</div>
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
// 2. ASSEMBLE PERSIAN COMMERCIAL HTML
// ==========================================
const faCommercialHtml = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>املاک تجاری در دبی | املاک زرین</title>
  <meta name="description" content="خرید و اجاره املاک تجاری در دبی — دفاتر اداری، واحدهای تجاری و انبار در مناطق دی‌آی‌اف‌سی (DIFC)، بیزنس بی، جی‌ال‌تی (JLT) و داون‌تاون. تایید شده توسط مشاوران زرین.">
  <meta name="keywords" content="املاک تجاری دبی, خرید دفتر اداری دبی, اجاره مغازه دبی, دفاتر DIFC, املاک تجاری بیزنس بی, انبار دبی, سرمایه گذاری تجاری دبی">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/fa/commercial-properties-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/commercial-properties-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/commercial-properties-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/commercial-properties-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="املاک تجاری در دبی | املاک زرین">
  <meta property="og:description" content="خرید و اجاره املاک تجاری در دبی — دفاتر اداری، تجاری و صنعتی تایید شده توسط مشاوران سرمایه‌گذاری زرین.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="املاک تجاری در دبی">
  <meta property="og:url" content="https://zarinrealestate.com/fa/commercial-properties-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="املاک تجاری در دبی | املاک زرین">
  <meta name="twitter:description" content="خرید و اجاره املاک تجاری در دبی — دفاتر اداری، تجاری و صنعتی تایید شده توسط زرین.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>

  <style type="text/tailwindcss">
    @theme {
      --color-ink-950:#050507;--color-ink-900:#0A0B0E;--color-ink-850:#0E1015;--color-ink-800:#111318;--color-ink-700:#181B22;
      --color-gold-300:#DFC49E;--color-gold-400:#C8AB83;--color-gold-soft:rgba(200,171,131,0.08);--color-gold-tint:rgba(200,171,131,0.15);--color-gold-line:rgba(200,171,131,0.32);--color-gold-border:rgba(200,171,131,0.45);--color-gold-glow:rgba(200,171,131,0.20);
      --color-bone:#F8F9FA;--color-ash:#9FA6B2;--color-slate:#676E7D;
      --color-white-soft:rgba(255,255,255,0.04);--color-white-line:rgba(255,255,255,0.08);
      --color-glass:rgba(10,11,14,0.78);
      --color-success:#4ADE80;--color-warning:#FBBF24;--color-info:#60A5FA;
      --font-sans:"Vazirmatn","Source Sans 3",-apple-system,sans-serif;
      --container-narrow:1040px;--container-default:1380px;--container-wide:1600px;
      --radius-xs:2px;--radius-sm:4px;
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
    {"@type":"ListItem","position":3,"name":"املاک تجاری","item":"https://zarinrealestate.com/fa/commercial-properties-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/fa/commercial-properties-in-dubai#collectionpage",
    "name":"املاک تجاری در دبی","url":"https://zarinrealestate.com/fa/commercial-properties-in-dubai",
    "description":"خرید و اجاره املاک تجاری در دبی — دفاتر اداری، فروشگاهی و صنعتی.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"طبقه اداری — گیت DIFC","offers":{"@type":"Offer","price":"18500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"واحد تجاری — بولوار داون‌تاون","offers":{"@type":"Offer","price":"6800000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"انبار و سوله — مجمع سرمایه‌گذاری دبی","offers":{"@type":"Offer","price":"9500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"طبقه اداری — کلاستر X منطقه JLT","offers":{"@type":"Offer","price":"5200000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/fa/commercial-properties-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"بهترین مناطق دبی برای خرید یا اجاره ملک تجاری کدامند؟","acceptedAnswer":{"@type":"Answer","text":"مرکز مالی بین‌المللی دبی (DIFC) همچنان معتبرترین نشانی اداری دبی برای موسسات مالی و شرکت‌های بین‌المللی با نرخ اجاره ۲,۰۰۰ تا ۳,۵۰۰ درهم بر هر فوت‌مربع سالانه است. بیزنس بی (Business Bay) دفاتر مدرن میان‌رده با نرخ ۱,۲۰۰ تا ۲,۰۰۰ درهم عرضه می‌کند. کلاسترهای جی‌ال‌تی (JLT/DMCC) گزینه‌های بسیار ارزنده‌ای بین ۸۰۰ تا ۱,۵۰۰ درهم به ازای هر فوت‌مربع برای شرکت‌ها هستند. در بخش تجاری و فروشگاهی، داون‌تاون و سیتی واک بالاترین نرخ‌ها را دارا هستند و برای کاربری‌های صنعتی و انبارداری، پارک سرمایه‌گذاری دبی (DIP)، منطقه آزاد جبل علی و راس‌الخور کانون‌های اصلی به‌شمار می‌روند."}},
      {"@type":"Question","name":"آیا خریداران خارجی می‌توانند در دبی ملک تجاری بخرند؟","acceptedAnswer":{"@type":"Answer","text":"بله، اتباع خارجی می‌توانند در کلیه مناطق مالکیت قطعی (فری‌هولد) از جمله DIFC، بیزنس بی، JLT، داون‌تاون و عمده مناطق آزاد اقدام به خرید ملک تجاری نمایند. همچنین از سال ۲۰۲۱ طبق اصلاحیه قانون شرکت‌های تجاری امارات، مالکیت ۱۰۰ درصدی شرکت‌های مین‌لند نیز برای خارجیان مجاز شناخته شده است. مشاوران زرین متناسب با موضوع فعالیت لایسنس و ساختار شرکتی شما، مناسب‌ترین سازوکار تملک را پیشنهاد می‌دهند."}},
      {"@type":"Question","name":"نرخ معمول اجاره املاک تجاری دبی در سال ۲۰۲۶ چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"در سال ۲۰۲۶، اجاره دفاتر درجه یک (Grade A) در DIFC بین ۲,۲۰۰ تا ۳,۵۰۰ درهم بر هر فوت‌مربع سالانه است. در بیزنس بی این رقم ۱,۴۰۰ تا ۲,۲۰۰ درهم و در JLT و برشا هایتس حدود ۸۰۰ تا ۱,۵۰۰ درهم در نوسان است. واحدهای تجاری و مغازه در داون‌تاون و مارینا نرخی بین ۳,۵۰۰ تا ۷,۰۰۰ درهم بر هر فوت‌مربع دارند و سوله‌ها و انبارهای صنعتی بسته به فیت‌اوت و موقعیت مکانی با ۶۰ تا ۱۵۰ درهم به ازای هر فوت‌مربع سالانه اجاره می‌شوند."}},
      {"@type":"Question","name":"آیا بازدهی اجاره املاک تجاری در دبی از مسکونی بالاتر است؟","acceptedAnswer":{"@type":"Answer","text":"بله، عموماً املاک تجاری در دبی بازده خالص اجاره‌ای بین ۷ تا ۱۰ درصد (پس از کسر هزینه‌های شارژ و نگهداری) تولید می‌کنند، در حالی که میانگین بازده ناخالص مسکونی ۵ تا ۷ درصد است. این بازدهی بالاتر جبران‌کننده ریسک‌های تجاری نظیر دوره‌های احتمالی خالی ماندن بین قراردادها و پیچیدگی مدیریت اداری است. دارایی‌های تراز اول در DIFC و داون‌تاون ممکن است بازدهی کمتری (۵ تا ۷ درصد) داشته باشند اما بالاترین سطح حفظ ارزش سرمایه را تضمین می‌کنند."}},
      {"@type":"Question","name":"مدت زمان استاندارد قراردادهای اجاره تجاری در دبی چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"قراردادهای تجاری معمولاً ۱ تا ۳ ساله و برای فضاهای بزرگ اداری تا ۵ سال منعقد می‌شوند. قراردادهای چندساله غالباً شامل بندهای افزایش سالانه نرخ اجاره (۳ تا ۵ درصد) هستند. اکثر قراردادهای تجاری دبی به شیوه تریپل نت (Triple Net) تنظیم می‌شوند که در آن مستاجر پرداخت هزینه‌های شارژ، قبوض مصرفی و تعمیرات داخلی را برعهده دارد. ثبت تمامی قراردادهای تجاری در سامانه ایجاری (Ejari) الزامی است."}},
      {"@type":"Question","name":"برای خرید ملک تجاری در دبی به چه مدارکی نیاز است؟","acceptedAnswer":{"@type":"Answer","text":"برای خریداران حقوقی و شرکتی: کپی لایسنس تجاری معتبر، اساسنامه شرکت (MOA)، مصوبه هیئت مدیره مبنی بر تایید خرید ملک و مدارک احراز هویت (KYC) سهامداران. برای خریداران حقیقی: پاسپورت، امارات آی‌دی (در صورت وجود) و گواهی تمکن مالی بانکی. در صورت خرید در مناطق آزاد، مدارک ثبت شرکت در همان منطقه آزاد الزامی است. مشاوران زرین کلیه مراحل اداری و حقوقی را گام‌به‌گام همراهی می‌کنند."}},
      {"@type":"Question","name":"آیا زرین خدمات نمایندگی مستاجران اداری و تجاری را ارائه می‌دهد؟","acceptedAnswer":{"@type":"Answer","text":"بله. تیم زرین خدمات جامع نمایندگی مستاجران را شامل جستجوی بهترین موقعیت اداری یا تجاری، مذاکره شرایط مالی و حقوقی اجاره‌نامه، ارزیابی فنی فضا و هماهنگی مراحل تجهیز (Fit-out) برعهده می‌گیرد. ما هم منافع موجران و هم مستاجران را با شفافیت کامل نمایندگی می‌کنیم. خدمات نمایندگی مستاجر برای متقاضیان رایگان است، چرا که کمیسیون آن مطابق عرف بازار توسط موجر پرداخت می‌شود."}},
      {"@type":"Question","name":"آیا سرمایه‌گذاری در املاک تجاری مناطق آزاد دبی توصیه می‌شود؟","acceptedAnswer":{"@type":"Answer","text":"املاک تجاری در مناطق آزاد معتبر (مانند DIFC، DMCC، JLT) مزایایی چون مالکیت ۱۰۰ درصدی، مزایای مالیاتی بالقوه تحت قانون مالیات بر درآمد شرکت‌های امارات ۲۰۲۳ و خروج آزادانه کامل سرمایه را به همراه دارند. با این حال، معمولاً نمی‌توان یک شرکت مین‌لند (Mainland) را مستقیماً از داخل یک دفتر منطقه آزاد اداره کرد. توجیه‌پذیری سرمایه‌گذاری مستقیماً به نوع ساختار فعالیت تجاری و بازارهای هدف شما بستگی دارد."}}
    ]
  }
  </script>

  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/fa/commercial-properties-in-dubai#webpage",
    "url":"https://zarinrealestate.com/fa/commercial-properties-in-dubai","name":"املاک تجاری در دبی | املاک زرین",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "speakable":{"@type":"SpeakableSpecification","cssSelector":["#hero-headline","#tldr-summary"]}}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">پرش به محتوای اصلی</a>

  ${faHeaderClone.outerHTML}

  ${faMobileClone.outerHTML}

  <main id="main">

  <!-- 1. HERO -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="بخش معرفی املاک تجاری دبی">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">املاک تجاری &middot; خرید و اجاره</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-bone mb-6">املاک تجاری<br><span class="text-gold-gradient">در دبی</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">دفاتر کار، واحدهای تجاری و مغازه، انبارها و کمپ‌های کارگری — جهت خرید یا اجاره در دی‌آی‌اف‌سی (DIFC)، بیزنس بی، جی‌ال‌تی (JLT)، داون‌تاون و زون‌های صنعتی دبی. تیم اختصاصی املاک تجاری زرین کلیه امور نمایندگی مستاجر، اجاره‌داری برای مالکان و تملک سرمایه‌گذاری را پوشش می‌دهد.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#commercial-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="مشاهده فایل‌های تجاری">مشاهده فایل‌ها</a>
          <a href="/fa/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="تماس با مشاور تجاری">تماس با مشاور تجاری</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۶۸۰</div><div class="text-xs text-slate uppercase tracking-wider mt-1">فایل فعال</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۷-۱۰٪</div><div class="text-xs text-slate uppercase tracking-wider mt-1">بازده خالص</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۱۲</div><div class="text-xs text-slate uppercase tracking-wider mt-1">زون تجاری</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۱-۵ سال</div><div class="text-xs text-slate uppercase tracking-wider mt-1">دوره قراردادها</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. COMMERCIAL CATEGORIES -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="دسته‌بندی‌های تجاری">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">دسته‌بندی دارایی‌ها</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">سه دسته دارایی تجاری</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">هر شاخه از املاک تجاری مشخصات مستاجر، محاسبات بازدهی و ملاحظات حقوقی و عملیاتی ویژه خود را دارد. تیم تجاری زرین در هر سه شاخه به طور تخصصی فعالیت می‌کند.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دارایی ۰۱</div><h3 class="text-2xl font-bold text-bone group-hover:text-gold-400 transition-colors">دفاتر اداری</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-6">طبقات اداری درجه یک (Grade A) در DIFC، بیزنس بی، JLT و داون‌تاون دبی. خدمات نمایندگی مستاجران شرکتی، بازاریابی و اجاره‌داری برای مالکان و تملک سرمایه‌گذاری.</p>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold mb-1">دامنه اجاره</div><div>۸۰۰-۳,۵۰۰ درهم/فوت²</div></div>
            <div><div class="text-bone font-semibold mb-1">بازدهی خالص</div><div>۶-۸٪</div></div>
          </div>
        </article>
        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دارایی ۰۲</div><h3 class="text-2xl font-bold text-bone group-hover:text-gold-400 transition-colors">واحدهای تجاری و مغازه</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-6">واحدهای فروشگاهی و خدماتی همکف در داون‌تاون، مارینا، JBR و سیتی واک دبی. ویژه رستوران و کافه (F&amp;B)، فروشگاه‌های مد و خدمات شرکتی — فروش و اجاره.</p>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold mb-1">دامنه اجاره</div><div>۳,۵۰۰-۷,۰۰۰ درهم/فوت²</div></div>
            <div><div class="text-bone font-semibold mb-1">بازدهی خالص</div><div>۷-۹٪</div></div>
          </div>
        </article>
        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دارایی ۰۳</div><h3 class="text-2xl font-bold text-bone group-hover:text-gold-400 transition-colors">صنعتی و انبارداری</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-6">انبارها، سوله‌های مدرن، کمپ‌های کارگری و واحدهای صنعتی سبک در DIP، منطقه آزاد جبل علی و راس‌الخور. دسترسی لجستیکی عالی و مزایای مناطق آزاد.</p>
          <div class="grid grid-cols-2 gap-3 text-xs text-slate border-t border-white-line pt-4">
            <div><div class="text-bone font-semibold mb-1">دامنه اجاره</div><div>۶۰-۱۵۰ درهم/فوت²</div></div>
            <div><div class="text-bone font-semibold mb-1">بازدهی خالص</div><div>۸-۱۰٪</div></div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 3. FEATURED LISTINGS -->
  <section id="commercial-grid" class="bg-ink-900 py-24 md:py-32" aria-label="فایل‌های برگزیده تجاری">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">فایل‌های برگزیده</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">قراردادهای تجاری انحصاری زرین</h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Office DIFC -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده طبقه اداری مرکز مالی DIFC">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" alt="طبقه اداری در ساختمان گیت مرکز مالی DIFC" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">گرید A اداری</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۸.۵ م درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دفتر اداری &middot; فروش</div><div class="text-xs text-slate">مرکز مالی DIFC</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">طبقه کامل اداری &middot; گیت دیستریکت ۴</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">۸,۵۰۰ فوت‌مربع فضای اداری مدرن فیت‌اوت شده با چشم‌انداز DIFC. دارای مستاجر خدمات مالی با قرارداد فعال تا سال ۲۰۲۸.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۸,۵۰۰ فوت²</div><div>متراژ زیربنا</div></div>
              <div><div class="text-bone font-semibold">۲,۱۷۶ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>
        <!-- Retail Downtown -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده واحد تجاری داون‌تاون دبی">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" alt="واحد تجاری در بولوار داون‌تاون دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۶.۸ م درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تجاری &middot; فروش</div><div class="text-xs text-slate">داون‌تاون دبی</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">واحد تجاری همکف &middot; بولوار پلازا</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">۱,۸۰۰ فوت‌مربع واحد فروشگاهی در بولوار پرتردد. پاخور فوق‌العاده بالا، مناسب برای کافه/رستوران (F&amp;B) یا بوتیک برند.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۱,۸۰۰ فوت²</div><div>متراژ زیربنا</div></div>
              <div><div class="text-bone font-semibold">۳,۷۷۸ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>
        <!-- Warehouse DIP -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده سوله و انبار مجمع سرمایه‌گذاری دبی">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" alt="انبار و سوله صنعتی در مجمع سرمایه‌گذاری دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۹.۵ م درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">صنعتی &middot; فروش</div><div class="text-xs text-slate">مجمع DIP</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">سوله و انبار صنعتی &middot; پارک سرمایه‌گذاری دبی ۱</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">۲۲,۰۰۰ فوت‌مربع سوله با ارتفاع سقف ۸ متر، داک‌های بارگیری هیدرولیک و مزنین اداری مبله. دسترسی لجستیکی ممتاز.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۲۲,۰۰۰ فوت²</div><div>متراژ زیربنا</div></div>
              <div><div class="text-bone font-semibold">۴۳۲ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>
        <!-- Office JLT -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده طبقه اداری منطقه آزاد JLT">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80" alt="طبقه اداری در کلاستر X منطقه آزاد JLT" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۵.۲ م درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دفتر اداری &middot; فروش</div><div class="text-xs text-slate">منطقه آزاد JLT</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">طبقه اداری &middot; برج کلاستر X</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">۴,۳۰۰ فوت‌مربع فضای اداری شل اند کور با دید کامل دریاچه. انتخابی ایده‌آل برای شرکت‌های متوسط و دفاتر منطقه‌ای.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴,۳۰۰ فوت²</div><div>متراژ زیربنا</div></div>
              <div><div class="text-bone font-semibold">۱,۲۰۹ درهم</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>
        <!-- Office Lease DIFC -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده دفتر اجاره‌ای مرکز مالی DIFC">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" alt="دفتر اداری آماده اجاره در DIFC" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">جهت اجاره</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۲,۸۰۰ درهم/فوت²</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دفتر اداری &middot; اجاره</div><div class="text-xs text-slate">مرکز مالی DIFC</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">دفتر مبله آماده &middot; گیت اونیو</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">۶,۲۰۰ فوت‌مربع فضای اداری فیت‌اوت شده با اتاق‌های جلسه و اتاق مدیریت. آماده تحویل و بهره‌برداری فوری.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۶,۲۰۰ فوت²</div><div>متراژ زیربنا</div></div>
              <div><div class="text-bone font-semibold">قرارداد ۳ ساله</div><div>استاندارد شرکتی</div></div>
            </div>
          </div>
        </article>
        <!-- Retail Lease Marina -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده واحد تجاری اجاره‌ای مارینا دبی">
            <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80" alt="واحد تجاری در مارینا واک دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">جهت اجاره</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۵,۵۰۰ درهم/فوت²</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تجاری &middot; اجاره</div><div class="text-xs text-slate">دبی مارینا</div></div>
            <h3 class="text-lg font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">واحد تجاری F&amp;B &middot; مارینا واک</h3>
            <p class="text-sm text-ash leading-relaxed mb-4">۱,۴۰۰ فوت‌مربع واحد مشرف به آب با لایسنس رستورانی (F&amp;B). دارای محوطه صندلی در فضای باز و پاخور عابر بسیار عالی.</p>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۱,۴۰۰ فوت²</div><div>متراژ زیربنا</div></div>
              <div><div class="text-bone font-semibold">تاییدیه F&amp;B</div><div>کامل و فعال</div></div>
            </div>
          </div>
        </article>
      </div>
      <div class="mt-12 text-center">
        <a href="/fa/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="درخواست جستجوی اختصاصی ملک تجاری">درخواست جستجوی اختصاصی<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. KEY COMMERCIAL AREAS -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="مناطق تجاری دبی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">قطب‌های تجاری دبی</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">زون‌های تجاری و اداری دبی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">هر زون تجاری مشخصات مستاجران، مقررات لایسنس و بازدهی مخصوص به خود را دارد. جهت بررسی فرصت‌های هر منطقه روی آن کلیک کنید.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/fa/areas" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" alt="منطقه مالی بین‌المللی DIFC" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">DIFC</h3>
            <p class="text-xs text-ash leading-relaxed mb-3">مرکز مالی بین‌المللی. دفاتر درجه یک برای بانک‌ها، صندوق‌ها و شرکت‌های حقوقی.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۲.۲-۳.۵ هزار درهم/فوت²</span>
              <span class="text-slate">+۱۲۰ فایل فعال</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="برج‌های تجاری بیزنس بی دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">بیزنس بی</h3>
            <p class="text-xs text-ash leading-relaxed mb-3">دفاتر مدرن میان‌رده و برج‌های چندمنظوره با تقاضای اجاره بسیار پایدار.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱.۴-۲.۲ هزار درهم/فوت²</span>
              <span class="text-slate">+۱۸۰ فایل فعال</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80" alt="برج‌های اداری کلاستر JLT دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">منطقه آزاد JLT</h3>
            <p class="text-xs text-ash leading-relaxed mb-3">کلاسترهای منطقه آزاد DMCC با دفاتر متنوع برای استارتاپ‌ها و شرکت‌ها.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۸۰۰-۱.۵ هزار درهم/فوت²</span>
              <span class="text-slate">+۲۴۰ فایل فعال</span>
            </div>
          </div>
        </a>
        <a href="/fa/areas" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80" alt="منطقه صنعتی دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">زون‌های صنعتی</h3>
            <p class="text-xs text-ash leading-relaxed mb-3">مجمع DIP، جبل علی و راس‌الخور — انبارها، سوله‌ها و کمپ‌های کارگری.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۶۰-۱۵۰ درهم/فوت²</span>
              <span class="text-slate">+۱۴۰ فایل فعال</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 5. WHY ZARIN COMMERCIAL -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="مزایای مشاوره املاک تجاری زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">چرا املاک تجاری زرین</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">تیم تجاری با بینش عمیق شرکتی و اقتصادی</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">املاک تجاری ماهیتی کاملاً متمایز از املاک مسکونی دارند — ساختار قراردادهای اجاره چندساله پیچیده‌تر است، اعتبارسنجی مالی مستاجر حیاتی است، و انتخاب نادرست میان منطقه آزاد و مین‌لند می‌تواند مانع فعالیت قانونی کسب‌وکار شود. تیم املاک تجاری زرین با تکیه بر بیش از ۱۵ سال تجربه مشاوره به هلدینگ‌ها و شرکت‌های بین‌المللی، هر پرونده را با اشراف کامل بر قوانین RERA، DED و مناطق آزاد هدایت می‌کند.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">نمایندگی مستاجر و اجاره‌داری برای مالکان</div><div class="text-xs text-slate mt-1">ارائه خدمات دوطرفه با افشای کامل نقش و شفافیت حقوقی.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">مشاوره تخصصی مین‌لند در برابر مناطق آزاد</div><div class="text-xs text-slate mt-1">انتخاب بهترین ساختار متناسب با نوع لایسنس و فعالیت تجاری شرکت.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">تحلیل بازدهی خالص سرمایه‌گذاری (Net Yield)</div><div class="text-xs text-slate mt-1">محاسبه سود واقعی سرمایه پس از کسر شارژ ساختمان و هزینه‌های عملیاتی.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">مذاکره و بازبینی تخصصی قراردادهای اجاره</div><div class="text-xs text-slate mt-1">بندهای تعدیل نرخ اجاره، دوره‌های تنفس تجهیز (Fit-out) و حقوق فسخ.</div></div></div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۶۸۰</div><div class="text-sm font-bold text-bone mb-1">فایل فعال</div><div class="text-xs text-slate">فروش و اجاره</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۷-۱۰٪</div><div class="text-sm font-bold text-bone mb-1">بازده خالص</div><div class="text-xs text-slate">پس از کسر شارژ</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۱۵</div><div class="text-sm font-bold text-bone mb-1">سال سابقه</div><div class="text-xs text-slate">تیم املاک تجاری</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">رایگان</div><div class="text-sm font-bold text-bone mb-1">نمایندگی مستاجر</div><div class="text-xs text-slate">کمیسیون با موجر</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="سوالات متداول املاک تجاری">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پرسش‌های متداول</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">سوالات متداول متقاضیان املاک تجاری</h2>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-900 border border-white-line rounded-sm text-right" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">بهترین مناطق دبی برای خرید یا اجاره ملک تجاری کدامند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">مرکز مالی بین‌المللی دبی (DIFC) همچنان معتبرترین نشانی اداری دبی برای موسسات مالی و شرکت‌های بین‌المللی با نرخ اجاره ۲,۰۰۰ تا ۳,۵۰۰ درهم بر هر فوت‌مربع سالانه است. بیزنس بی (Business Bay) دفاتر مدرن میان‌رده با نرخ ۱,۲۰۰ تا ۲,۰۰۰ درهم عرضه می‌کند. کلاسترهای جی‌ال‌تی (JLT/DMCC) گزینه‌های بسیار ارزنده‌ای بین ۸۰۰ تا ۱,۵۰۰ درهم به ازای هر فوت‌مربع برای شرکت‌ها هستند. در بخش تجاری و فروشگاهی، داون‌تاون و سیتی واک بالاترین نرخ‌ها را دارا هستند و برای کاربری‌های صنعتی و انبارداری، پارک سرمایه‌گذاری دبی (DIP)، منطقه آزاد جبل علی و راس‌الخور کانون‌های اصلی به‌شمار می‌روند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا خریداران خارجی می‌توانند در دبی ملک تجاری بخرند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله، اتباع خارجی می‌توانند در کلیه مناطق مالکیت قطعی (فری‌هولد) از جمله DIFC، بیزنس بی، JLT، داون‌تاون و عمده مناطق آزاد اقدام به خرید ملک تجاری نمایند. همچنین از سال ۲۰۲۱ طبق اصلاحیه قانون شرکت‌های تجاری امارات، مالکیت ۱۰۰ درصدی شرکت‌های مین‌لند نیز برای خارجیان مجاز شناخته شده است. مشاوران زرین متناسب با موضوع فعالیت لایسنس و ساختار شرکتی شما، مناسب‌ترین سازوکار تملک را پیشنهاد می‌دهند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">نرخ معمول اجاره املاک تجاری دبی در سال ۲۰۲۶ چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">در سال ۲۰۲۶، اجاره دفاتر درجه یک (Grade A) در DIFC بین ۲,۲۰۰ تا ۳,۵۰۰ درهم بر هر فوت‌مربع سالانه است. در بیزنس بی این رقم ۱,۴۰۰ تا ۲,۲۰۰ درهم و در JLT و برشا هایتس حدود ۸۰۰ تا ۱,۵۰۰ درهم در نوسان است. واحدهای تجاری و مغازه در داون‌تاون و مارینا نرخی بین ۳,۵۰۰ تا ۷,۰۰۰ درهم بر هر فوت‌مربع دارند و سوله‌ها و انبارهای صنعتی بسته به فیت‌اوت و موقعیت مکانی با ۶۰ تا ۱۵۰ درهم به ازای هر فوت‌مربع سالانه اجاره می‌شوند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا بازدهی اجاره املاک تجاری در دبی از مسکونی بالاتر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله، عموماً املاک تجاری در دبی بازده خالص اجاره‌ای بین ۷ تا ۱۰ درصد (پس از کسر هزینه‌های شارژ و نگهداری) تولید می‌کنند، در حالی که میانگین بازده ناخالص مسکونی ۵ تا ۷ درصد است. این بازدهی بالاتر جبران‌کننده ریسک‌های تجاری نظیر دوره‌های احتمالی خالی ماندن بین قراردادها و پیچیدگی مدیریت اداری است. دارایی‌های تراز اول در DIFC و داون‌تاون ممکن است بازدهی کمتری (۵ تا ۷ درصد) داشته باشند اما بالاترین سطح حفظ ارزش سرمایه را تضمین می‌کنند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">مدت زمان استاندارد قراردادهای اجاره تجاری در دبی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">قراردادهای تجاری معمولاً ۱ تا ۳ ساله و برای فضاهای بزرگ اداری تا ۵ سال منعقد می‌شوند. قراردادهای چندساله غالباً شامل بندهای افزایش سالانه نرخ اجاره (۳ تا ۵ درصد) هستند. اکثر قراردادهای تجاری دبی به شیوه تریپل نت (Triple Net) تنظیم می‌شوند که در آن مستاجر پرداخت هزینه‌های شارژ، قبوض مصرفی و تعمیرات داخلی را برعهده دارد. ثبت تمامی قراردادهای تجاری در سامانه ایجاری (Ejari) الزامی است.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">برای خرید ملک تجاری در دبی به چه مدارکی نیاز است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">برای خریداران حقوقی و شرکتی: کپی لایسنس تجاری معتبر، اساسنامه شرکت (MOA)، مصوبه هیئت مدیره مبنی بر تایید خرید ملک و مدارک احراز هویت (KYC) سهامداران. برای خریداران حقیقی: پاسپورت، امارات آی‌دی (در صورت وجود) و گواهی تمکن مالی بانکی. در صورت خرید در مناطق آزاد، مدارک ثبت شرکت در همان منطقه آزاد الزامی است. مشاوران زرین کلیه مراحل اداری و حقوقی را گام‌به‌گام همراهی می‌کنند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا زرین خدمات نمایندگی مستاجران اداری و تجاری را ارائه می‌دهد؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله. تیم زرین خدمات جامع نمایندگی مستاجران را شامل جستجوی بهترین موقعیت اداری یا تجاری، مذاکره شرایط مالی و حقوقی اجاره‌نامه، ارزیابی فنی فضا و هماهنگی مراحل تجهیز (Fit-out) برعهده می‌گیرد. ما هم منافع موجران و هم مستاجران را با شفافیت کامل نمایندگی می‌کنیم. خدمات نمایندگی مستاجر برای متقاضیان رایگان است، چرا که کمیسیون آن مطابق عرف بازار توسط موجر پرداخت می‌شود. ما همچنین تمدید یا واگذاری زودهنگام قراردادهای فعلی را مدیریت می‌کنیم.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm text-right">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا سرمایه‌گذاری در املاک تجاری مناطق آزاد دبی توصیه می‌شود؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">املاک تجاری در مناطق آزاد معتبر (مانند DIFC، DMCC، JLT) مزایایی چون مالکیت ۱۰۰ درصدی، مزایای مالیاتی بالقوه تحت قانون مالیات بر درآمد شرکت‌های امارات ۲۰۲۳ و خروج آزادانه کامل سرمایه را به همراه دارند. با این حال، معمولاً نمی‌توان یک شرکت مین‌لند (Mainland) را مستقیماً از داخل یک دفتر منطقه آزاد اداره کرد. توجیه‌پذیری سرمایه‌گذاری مستقیماً به نوع ساختار فعالیت تجاری و بازارهای هدف شما بستگی دارد.</div>
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
fs.writeFileSync('commercial-properties-in-dubai.html', enCommercialHtml, 'utf8');
if (!fs.existsSync('commercial-properties-in-dubai')) {
  fs.mkdirSync('commercial-properties-in-dubai', { recursive: true });
}
fs.writeFileSync(path.join('commercial-properties-in-dubai', 'index.html'), enCommercialHtml, 'utf8');

// Write Persian pages (both .html and /index.html)
if (!fs.existsSync('fa')) fs.mkdirSync('fa', { recursive: true });
fs.writeFileSync(path.join('fa', 'commercial-properties-in-dubai.html'), faCommercialHtml, 'utf8');
if (!fs.existsSync(path.join('fa', 'commercial-properties-in-dubai'))) {
  fs.mkdirSync(path.join('fa', 'commercial-properties-in-dubai'), { recursive: true });
}
fs.writeFileSync(path.join('fa', 'commercial-properties-in-dubai', 'index.html'), faCommercialHtml, 'utf8');

console.log('Commercial pages generated successfully for both EN and FA (both .html and /index.html)!');
