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

// Prepare English Header with active state on Beachfront and Properties
const enHeaderClone = JSDOM.fragment(enHeaderEl.outerHTML).querySelector('#site-header');
const enPropLink = enHeaderClone.querySelector('#properties-nav-link');
if (enPropLink) {
  enPropLink.setAttribute('aria-current', 'page');
  enPropLink.classList.remove('text-ash');
  enPropLink.classList.add('text-gold-400');
}
const enBfLink = enHeaderClone.querySelector('a[href="/beachfront-properties-in-dubai"]');
if (enBfLink) {
  enBfLink.setAttribute('aria-current', 'page');
  enBfLink.classList.remove('text-ash');
  enBfLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare English Mobile Menu with active state
const enMobileClone = JSDOM.fragment(enMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const enBfMobileLink = enMobileClone.querySelector('a[href="/beachfront-properties-in-dubai"]');
if (enBfMobileLink) {
  enBfMobileLink.classList.remove('text-ash');
  enBfMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Header with active state
const faHeaderClone = JSDOM.fragment(faHeaderEl.outerHTML).querySelector('#site-header');
const faPropLink = faHeaderClone.querySelector('#properties-nav-link');
if (faPropLink) {
  faPropLink.setAttribute('aria-current', 'page');
  faPropLink.classList.remove('text-ash');
  faPropLink.classList.add('text-gold-400');
}
const faBfLink = faHeaderClone.querySelector('a[href="/fa/beachfront-properties-in-dubai"]');
if (faBfLink) {
  faBfLink.setAttribute('aria-current', 'page');
  faBfLink.classList.remove('text-ash');
  faBfLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Mobile Menu with active state
const faMobileClone = JSDOM.fragment(faMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const faBfMobileLink = faMobileClone.querySelector('a[href="/fa/beachfront-properties-in-dubai"]');
if (faBfMobileLink) {
  faBfMobileLink.classList.remove('text-ash');
  faBfMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// ==========================================
// 1. ASSEMBLE ENGLISH BEACHFRONT HTML
// ==========================================
const enBeachfrontHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>Beachfront Properties in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Beachfront properties in Dubai — villas, apartments, and penthouses on Palm Jumeirah, Bluewaters, JBR, Dubai Islands, Emaar Beachfront, and Jumeirah Bay.">
  <meta name="keywords" content="beachfront properties Dubai, Dubai beachfront villas, Palm Jumeirah beachfront, Emaar Beachfront apartments, JBR sea view, Dubai Islands property, Jumeirah Bay Island villas">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/beachfront-properties-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/beachfront-properties-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/beachfront-properties-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/beachfront-properties-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Beachfront Properties in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Beachfront villas, apartments, and penthouses across Dubai's premier waterfront communities. Curated by ZARIN advisors.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Beachfront properties in Dubai">
  <meta property="og:url" content="https://zarinrealestate.com/beachfront-properties-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Beachfront Properties in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Beachfront villas, apartments, and penthouses across Dubai's waterfront communities.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80">

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
    {"@type":"ListItem","position":3,"name":"Beachfront","item":"https://zarinrealestate.com/beachfront-properties-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/beachfront-properties-in-dubai#collectionpage",
    "name":"Beachfront Properties in Dubai","url":"https://zarinrealestate.com/beachfront-properties-in-dubai",
    "description":"Beachfront villas, apartments, and penthouses across Dubai's premier waterfront communities — Palm Jumeirah, Bluewaters, JBR, Dubai Islands, Emaar Beachfront, and Jumeirah Bay Island.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"5BR Beachfront Villa — Palm Jumeirah Frond M","url":"https://zarinrealestate.com/properties/5br-palm-beach-001","image":"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"28000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"3BR Sea View Apartment — Bluewaters Island","url":"https://zarinrealestate.com/properties/3br-bluewaters-001","image":"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"6500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"2BR Beachfront Apartment — JBR Sadaf","url":"https://zarinrealestate.com/properties/2br-jbr-beach-001","image":"https://images.unsplash.com/photo-1502672023488-5aabfcd1d3f5?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"3800000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"4BR Beachfront Penthouse — Emaar Beachfront","url":"https://zarinrealestate.com/properties/ph-emaar-beach-001","image":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"18000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"6BR Private Beach Villa — Jumeirah Bay Island","url":"https://zarinrealestate.com/properties/6br-jbi-beach-001","image":"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"65000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"3BR Beachfront Townhouse — Dubai Islands","url":"https://zarinrealestate.com/properties/3br-di-beach-001","image":"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"5200000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/beachfront-properties-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"Where can I buy beachfront property in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Beachfront property in Dubai is concentrated across six main communities. Palm Jumeirah offers private beach villas and apartments on the fronds and trunk. Bluewaters Island and JBR provide apartment-style beachfront living with public beach access. Emaar Beachfront is a newer masterplan with a private 1.5km beach shared between two towers. Jumeirah Bay Island is a low-density enclave with private beach villas. Dubai Islands (formerly Deira Islands) is the newest addition with sandy beach townhouses and apartments. ZARIN advisors match your brief — private beach, sea view, or beachfront access — to the right community."}},
      {"@type":"Question","name":"What is the price premium for beachfront vs. non-beachfront?","acceptedAnswer":{"@type":"Answer","text":"Beachfront property in Dubai trades at a 35-45% premium per square foot compared to equivalent non-beachfront property in the same area. A 4-bedroom apartment in JBR with direct sea view typically commands AED 2,800-3,500 per sqft, while the same apartment on the city side trades at AED 1,900-2,300 per sqft. On Palm Jumeirah, frond villas with private beach sell at AED 3,500-5,000 per sqft versus AED 2,400-2,800 for trunk properties without beach access. The premium reflects scarcity — only 6% of Dubai's residential supply is genuinely beachfront."}},
      {"@type":"Question","name":"Can foreigners buy beachfront villas in Dubai?","acceptedAnswer":{"@type":"Answer","text":"Yes. All six beachfront communities — Palm Jumeirah, Bluewaters Island, JBR, Dubai Islands, Emaar Beachfront, and Jumeirah Bay Island — are designated freehold areas where foreign nationals of any country can buy outright freehold title in their own name. There are no nationality restrictions and no requirement for a UAE residency visa. Title deeds are issued by Dubai Land Department and the property can be inherited, sold, or mortgaged like any other freehold asset. ZARIN handles the full transfer process including KYC, NOC, and DLD registration."}},
      {"@type":"Question","name":"What are the best beachfront communities for families?","acceptedAnswer":{"@type":"Answer","text":"For families, the choice depends on schooling plans, space requirements, and lifestyle. Palm Jumeirah frond villas are the perennial favourite — private beach, large plots, and proximity to top schools like Regent International and ASPAM. Emaar Beachfront suits families wanting newer construction, a calmer beach, and direct bridge access to Dubai Marina. Dubai Islands offers more affordable beachfront townhouses for growing families. Bluewaters and JBR are better suited to couples or families with older children who value urban beach access over private outdoor space. ZARIN arranges school-run test drives during property viewings."}},
      {"@type":"Question","name":"Do beachfront properties have higher service charges?","acceptedAnswer":{"@type":"Answer","text":"Yes — beachfront service charges run 20-35% higher than equivalent inland properties. Beachfront towers on Palm Jumeirah and Emaar Beachfront typically charge AED 22-32 per sqft annually, versus AED 16-22 for comparable inland towers in Business Bay or Downtown. The premium reflects seawater desalination, beach maintenance, sea-defence upkeep, and elevated humidity-related wear on building systems. Beachfront villas on Palm fronds carry additional community fees (AED 8-15 per sqft) for private beach access roads and frond-specific infrastructure. ZARIN provides a full service-charge and sinking-fund breakdown before any offer."}},
      {"@type":"Question","name":"Are beachfront properties a good investment?","acceptedAnswer":{"@type":"Answer","text":"Beachfront property in Dubai has historically delivered stronger capital appreciation than inland property, with Palm Jumeirah and Jumeirah Bay Island seeing 60-90% price growth between 2020 and 2025. Rental yields are lower than inland (4-5% gross versus 6-8% for inland apartments) because the absolute price is higher, but capital growth has more than compensated. The investment case rests on scarcity — Dubai's beachfront land supply is finite and no new beachfront masterplans of significance have launched since Emaar Beachfront. ZARIN's advisory includes a 5-year total-return model for every beachfront mandate."}},
      {"@type":"Question","name":"What is the rental yield for beachfront property?","acceptedAnswer":{"@type":"Answer","text":"Beachfront gross rental yields in Dubai typically run 4-5% for apartments and 3-4% for villas, lower than inland equivalents. A 3-bedroom JBR sea-view apartment renting at AED 220,000/year on a AED 5,000,000 sale price yields 4.4% gross. Net yields (after service charges and agent fees) are typically 2.8-3.5%. Beachfront villas on Palm Jumeirah can fetch AED 1.5-3M annually in long-term rent, with short-term holiday rentals potentially pushing gross yields to 6-7% during peak season. ZARIN's property management team can operate short-term lettings where building rules permit."}},
      {"@type":"Question","name":"Can I get a private beach with my Dubai property?","acceptedAnswer":{"@type":"Answer","text":"Yes — but only on Palm Jumeirah frond villas, Jumeirah Bay Island villas, and select Palm Jebel Ali plots (off-plan). These properties have direct beach access on a private plot. Emaar Beachfront and most JBR properties offer shared beach access rather than private. The Dubai government strictly controls beachfront land allocation — no new private-beach plots have been released since the original Palm Jumeirah sale. Private-beach properties are therefore finite supply and command the highest capital values. ZARIN's Private Office maintains a discreet register of private-beach owners willing to sell off-market."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/beachfront-properties-in-dubai#webpage",
    "url":"https://zarinrealestate.com/beachfront-properties-in-dubai","name":"Beachfront Properties in Dubai | ZARIN Real Estate",
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
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Beachfront properties hero">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">For Sale &middot; Waterfront</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6">Beachfront<br><span class="text-gold-gradient">Properties in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">Villas, apartments, and penthouses on Palm Jumeirah, Bluewaters, JBR, Dubai Islands, Emaar Beachfront, and Jumeirah Bay Island. Every beachfront listing is personally inspected by a ZARIN advisor — we check the actual sea view, beach access, and service charges before sharing it. No inflated prices, no stale inventory.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#featured-listings" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse beachfront listings"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>Browse Listings</a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to a beachfront advisor">Speak to Advisor</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">320+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Beachfront Listings</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">AED 8.5M</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Avg Beachfront Price</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">35-45%</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Premium vs. Inland</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">70+ km</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Beach Frontage</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. BEACH COMMUNITIES SHOWCASE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Beach communities showcase">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Beach Communities</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Six Beachfront Frontiers</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Dubai's beachfront property market is concentrated across six communities, each with its own character, price band, and beach type. Some offer private beach on your title deed; others provide shared public beach within walking distance. The choice shapes both lifestyle and investment case — a private-beach villa on Palm Jumeirah behaves very differently from a sea-view apartment on Bluewaters. ZARIN advisors have walked every community and can speak to ground conditions, beach quality, and recent resale trends in each.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Palm Jumeirah -->
        <a href="/areas/palm-jumeirah" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View beachfront properties on Palm Jumeirah">
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="Palm Jumeirah aerial beach view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Private Beach</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Palm Jumeirah</h3>
            <p class="text-xs text-ash mb-3">Iconic frond villas with private beach and trunk apartments with sea view. The original Dubai beachfront masterplan, completed 2006.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 4M – 120M</span>
              <span class="text-ash">190+ listings</span>
            </div>
          </div>
        </a>

        <!-- Bluewaters Island -->
        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View beachfront properties on Bluewaters Island">
          <img src="https://images.unsplash.com/photo-1518534334035-bf3a90b6dd1f?auto=format&fit=crop&w=800&q=80" alt="Bluewaters Island waterfront apartments" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Public Beach</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Bluewaters Island</h3>
            <p class="text-xs text-ash mb-3">Man-made island off JBR with Ain Dubai. Mid-rise residential towers with waterfront promenade and direct beach access.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 2.5M – 30M</span>
              <span class="text-ash">45+ listings</span>
            </div>
          </div>
        </a>

        <!-- JBR -->
        <a href="/areas/jbr" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View beachfront properties in JBR">
          <img src="https://images.unsplash.com/photo-1518534334035-bf3a90b6dd1f?auto=format&fit=crop&w=800&q=80" alt="JBR beachfront towers and The Walk" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Public Beach</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Jumeirah Beach Residence</h3>
            <p class="text-xs text-ash mb-3">35 towers along 1.7km of The Walk. Apartments with direct beach access, vibrant retail, and strong rental demand.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.5M – 25M</span>
              <span class="text-ash">220+ listings</span>
            </div>
          </div>
        </a>

        <!-- Dubai Islands -->
        <a href="/areas/dubai-islands" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View beachfront properties on Dubai Islands">
          <img src="https://images.unsplash.com/photo-1502672023488-5aabfcd1d3f5?auto=format&fit=crop&w=800&q=80" alt="Dubai Islands beach and resort development" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Sandy Beach</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Dubai Islands</h3>
            <p class="text-xs text-ash mb-3">Formerly Deira Islands. 5 reclaimed islands with 21km of beach, new beachfront townhouses and resort apartments.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.2M – 18M</span>
              <span class="text-ash">110+ listings</span>
            </div>
          </div>
        </a>

        <!-- Emaar Beachfront -->
        <a href="/areas/emaar-beachfront" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View beachfront properties at Emaar Beachfront">
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" alt="Emaar Beachfront towers with private beach" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Private Beach</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Emaar Beachfront</h3>
            <p class="text-xs text-ash mb-3">Newest beachfront masterplan between Palm Jumeirah and Dubai Marina. 27 towers sharing a 1.5km private beach.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 2.8M – 45M</span>
              <span class="text-ash">85+ listings</span>
            </div>
          </div>
        </a>

        <!-- Jumeirah Bay Island -->
        <a href="/areas/jumeirah-bay-island" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View beachfront properties on Jumeirah Bay Island">
          <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="Jumeirah Bay Island private beach villa" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Private Beach</div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Jumeirah Bay Island</h3>
            <p class="text-xs text-ash mb-3">Bulgari Resorts enclave. Low-density private beach villas and signature towers on a seahorse-shaped island.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 8M – 150M</span>
              <span class="text-ash">28+ listings</span>
            </div>
          </div>
        </a>

      </div>
      <div class="text-center mt-10"><a href="/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="View all Dubai areas">View All 45+ Areas<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 3. FEATURED BEACHFRONT LISTINGS -->
  <section id="featured-listings" class="bg-ink-900 py-16 md:py-20" aria-label="Featured beachfront listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">Featured Listings</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">Curated Beachfront Mandates</h2>
        </div>
        <p class="text-sm text-ash max-w-md">A selection of current ZARIN-mandated beachfront listings. Each property has been personally inspected by an advisor — including the actual beach, sea view corridor, and service-charge audit. For our complete inventory, request a custom search.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Listing 1: 5BR Villa Palm Jumeirah -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/5br-palm-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 5BR beachfront villa on Palm Jumeirah Frond M">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="5-bedroom beachfront villa on Palm Jumeirah Frond M with private beach" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Private Beach</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 28M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Palm Jumeirah</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">5BR Villa &middot; Frond M</h3>
            <div class="text-sm text-ash mb-4">8,200 sqft &middot; Private beach 30m</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">5</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">7</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 3,415</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 3BR Apartment Bluewaters -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/3br-bluewaters-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR sea view apartment on Bluewaters Island">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="3-bedroom apartment on Bluewaters Island with full sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Sea View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 6.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment</div><div class="text-xs text-slate">Bluewaters</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Apartment &middot; Building 8</h3>
            <div class="text-sm text-ash mb-4">2,150 sqft &middot; Full sea view</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 3,023</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 2BR Apartment JBR -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/2br-jbr-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 2BR beachfront apartment in JBR Sadaf">
            <img src="https://images.unsplash.com/photo-1502672023488-5aabfcd1d3f5?auto=format&fit=crop&w=800&q=80" alt="2-bedroom beachfront apartment in JBR Sadf with direct beach access" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Beachfront</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 3.8M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment</div><div class="text-xs text-slate">JBR Sadaf</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">2BR Apartment &middot; Sadf 5</h3>
            <div class="text-sm text-ash mb-4">1,580 sqft &middot; Direct beach access</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">2</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">3</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,405</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 4BR Penthouse Emaar Beachfront -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/ph-emaar-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR beachfront penthouse at Emaar Beachfront">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="4-bedroom penthouse at Emaar Beachfront with private terrace and beach view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Beachfront</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 18M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Penthouse</div><div class="text-xs text-slate">Emaar Beachfront</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Penthouse &middot; Beach Vista</h3>
            <div class="text-sm text-ash mb-4">5,400 sqft &middot; 2,000 sqft terrace</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 3,333</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 6BR Villa Jumeirah Bay Island -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/6br-jbi-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 6BR private beach villa on Jumeirah Bay Island">
            <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="6-bedroom private beach villa on Jumeirah Bay Island" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Private Beach</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 65M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Villa</div><div class="text-xs text-slate">Jumeirah Bay</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">6BR Villa &middot; Bvlgari Enclave</h3>
            <div class="text-sm text-ash mb-4">14,500 sqft &middot; Private beach 45m</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">6</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">8</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 4,483</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 3BR Townhouse Dubai Islands -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/properties/3br-di-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR beachfront townhouse on Dubai Islands">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="3-bedroom beachfront townhouse on Dubai Islands with sandy beach access" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Beachfront</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 5.2M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Townhouse</div><div class="text-xs text-slate">Dubai Islands</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Townhouse &middot; Central Island</h3>
            <div class="text-sm text-ash mb-4">3,100 sqft &middot; Sandy beach access</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,677</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">This is a curated sample. ZARIN has access to 320+ active beachfront listings across Dubai's six waterfront communities — including off-market private-beach mandates not listed publicly. Tell us your budget and beachfront preference and we'll send a tailored shortlist within 24 hours.</p>
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request custom beachfront search">Request Custom Search<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. WHY BEACHFRONT -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Why beachfront">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why Beachfront</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">The Case for Beachfront</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Dubai's beachfront is a finite, asymmetric asset class. Only 6% of the city's residential supply sits on or near the coastline, and almost no new beachfront masterplan land has been released since Emaar Beachfront. That scarcity — combined with lifestyle, rental, and capital-appreciation dynamics — makes beachfront the strongest sub-segment of Dubai residential for the next 5-7 years. Below are the four reasons ZARIN mandates beachfront for clients seeking both lifestyle and capital preservation.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 01</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Scarcity</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Dubai has 70km of public beach, of which only 18km is allocated to private beachfront residential development. Palm Jumeirah, Bluewaters, JBR, Dubai Islands, Emaar Beachfront, and Jumeirah Bay account for the vast majority. No new private-beach plots have been released since the original Palm Jumeirah sale — beachfront land is finite by definition.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">6% of Dubai supply</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 02</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Lifestyle</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Beachfront living in Dubai is not symbolic — it means a 90-second walk from your door to the water, year-round sea breeze reducing AC dependence, and direct sunset views unobstructed by neighbouring towers. Owners report measurably higher wellbeing scores, particularly families with children and remote-working professionals.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">Year-round access</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 03</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Rental Premium</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Beachfront properties command 25-40% higher rents than equivalent inland properties. A 3-bedroom JBR sea-view apartment rents at AED 220,000/year; the same apartment on the city side rents at AED 160,000/year. Short-term holiday lettings (where permitted) push gross yields to 6-7% during peak season (November to March).</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+25-40% rents</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Reason 04</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">Capital Appreciation</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">Palm Jumeirah frond villas have appreciated 80-95% since 2020, Jumeirah Bay Island villas 65-80%, and Emaar Beachfront 45-60% in three years of trading. Capital growth outpaces the broader Dubai residential market by 2-3x. The appreciation premium reflects both scarcity and rising global demand for coastal property post-pandemic.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+80-95% since 2020</div>
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
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">An Advisor Who Actually Walks the Beach</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">Beachfront listings have the highest rate of misrepresentation in Dubai real estate — sea views blocked by future towers, beach access shared rather than private, service charges understated. ZARIN advisors personally inspect every beachfront property before sharing it. We walk the actual beach, verify the sea-view corridor against masterplans, audit the latest service-charge statement, and confirm whether the title includes private beach or shared access. If the asking price isn't justified by comparables, we tell you before you waste a viewing.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Every beachfront listing physically inspected</div><div class="text-xs text-slate mt-1">We walk the beach, not just the apartment.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Sea-view corridor verified against masterplan</div><div class="text-xs text-slate mt-1">No future towers blocking your view in 5 years.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Service charges &amp; sinking fund audited</div><div class="text-xs text-slate mt-1">Last 3 years audited before offer.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Trilingual advisory: EN, AR, FA</div><div class="text-xs text-slate mt-1">Direct communication in your preferred language.</div></div></div>
          </div>
          <a href="/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Learn more about ZARIN">Learn More About ZARIN<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">320+</div><div class="text-sm font-bold text-bone mb-1">Beachfront Listings</div><div class="text-xs text-slate">Inspected by advisors</div></div>
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
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Beachfront FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Beachfront FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Common Beachfront Questions</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Eight questions ZARIN advisors hear most often from beachfront buyers. If yours isn't covered, message us on WhatsApp for a direct answer — typically within an hour during business hours.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-900 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Where can I buy beachfront property in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Beachfront property in Dubai is concentrated across six main communities. Palm Jumeirah offers private beach villas and apartments on the fronds and trunk. Bluewaters Island and JBR provide apartment-style beachfront living with public beach access. Emaar Beachfront is a newer masterplan with a private 1.5km beach shared between two towers. Jumeirah Bay Island is a low-density enclave with private beach villas. Dubai Islands (formerly Deira Islands) is the newest addition with sandy beach townhouses and apartments. ZARIN advisors match your brief — private beach, sea view, or beachfront access — to the right community.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the price premium for beachfront vs. non-beachfront?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Beachfront property in Dubai trades at a 35-45% premium per square foot compared to equivalent non-beachfront property in the same area. A 4-bedroom apartment in JBR with direct sea view typically commands AED 2,800-3,500 per sqft, while the same apartment on the city side trades at AED 1,900-2,300 per sqft. On Palm Jumeirah, frond villas with private beach sell at AED 3,500-5,000 per sqft versus AED 2,400-2,800 for trunk properties without beach access. The premium reflects scarcity — only 6% of Dubai's residential supply is genuinely beachfront.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can foreigners buy beachfront villas in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes. All six beachfront communities — Palm Jumeirah, Bluewaters Island, JBR, Dubai Islands, Emaar Beachfront, and Jumeirah Bay Island — are designated freehold areas where foreign nationals of any country can buy outright freehold title in their own name. There are no nationality restrictions and no requirement for a UAE residency visa. Title deeds are issued by Dubai Land Department and the property can be inherited, sold, or mortgaged like any other freehold asset. ZARIN handles the full transfer process including KYC, NOC, and DLD registration."</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What are the best beachfront communities for families?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">For families, the choice depends on schooling plans, space requirements, and lifestyle. Palm Jumeirah frond villas are the perennial favourite — private beach, large plots, and proximity to top schools like Regent International and ASPAM. Emaar Beachfront suits families wanting newer construction, a calmer beach, and direct bridge access to Dubai Marina. Dubai Islands offers more affordable beachfront townhouses for growing families. Bluewaters and JBR are better suited to couples or families with older children who value urban beach access over private outdoor space. ZARIN arranges school-run test drives during property viewings.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Do beachfront properties have higher service charges?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes — beachfront service charges run 20-35% higher than equivalent inland properties. Beachfront towers on Palm Jumeirah and Emaar Beachfront typically charge AED 22-32 per sqft annually, versus AED 16-22 for comparable inland towers in Business Bay or Downtown. The premium reflects seawater desalination, beach maintenance, sea-defence upkeep, and elevated humidity-related wear on building systems. Beachfront villas on Palm fronds carry additional community fees (AED 8-15 per sqft) for private beach access roads and frond-specific infrastructure. ZARIN provides a full service-charge and sinking-fund breakdown before any offer.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Are beachfront properties a good investment?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Beachfront property in Dubai has historically delivered stronger capital appreciation than inland property, with Palm Jumeirah and Jumeirah Bay Island seeing 60-90% price growth between 2020 and 2025. Rental yields are lower than inland (4-5% gross versus 6-8% for inland apartments) because the absolute price is higher, but capital growth has more than compensated. The investment case rests on scarcity — Dubai's beachfront land supply is finite and no new beachfront masterplans of significance have launched since Emaar Beachfront. ZARIN's advisory includes a 5-year total-return model for every beachfront mandate.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the rental yield for beachfront property?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Beachfront gross rental yields in Dubai typically run 4-5% for apartments and 3-4% for villas, lower than inland equivalents. A 3-bedroom JBR sea-view apartment renting at AED 220,000/year on a AED 5,000,000 sale price yields 4.4% gross. Net yields (after service charges and agent fees) are typically 2.8-3.5%. Beachfront villas on Palm Jumeirah can fetch AED 1.5-3M annually in long-term rent, with short-term holiday rentals potentially pushing gross yields to 6-7% during peak season. ZARIN's property management team can operate short-term lettings where building rules permit.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can I get a private beach with my Dubai property?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes — but only on Palm Jumeirah frond villas, Jumeirah Bay Island villas, and select Palm Jebel Ali plots (off-plan). These properties have direct beach access on a private plot. Emaar Beachfront and most JBR properties offer shared beach access rather than private. The Dubai government strictly controls beachfront land allocation — no new private-beach plots have been released since the original Palm Jumeirah sale. Private-beach properties are therefore finite supply and command the highest capital values. ZARIN's Private Office maintains a discreet register of private-beach owners willing to sell off-market.</div>
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
// 2. ASSEMBLE PERSIAN BEACHFRONT HTML
// ==========================================
const faBeachfrontHtml = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>املاک ساحلی در دبی | املاک و مستغلات زرین</title>
  <meta name="description" content="املاک ساحلی در دبی — ویلاها، آپارتمان‌ها و پنت‌هاوس‌های مجلل در پالم جمیرا، بلوواترز، جی‌بی‌آر، جزایر دبی، اعمار بیچ‌فرانت و خلیج جمیرا. کارشناسی‌شده توسط مشاوران زرین.">
  <meta name="keywords" content="املاک ساحلی دبی, ویلاهای ساحلی دبی, پالم جمیرا ساحلی, آپارتمان اعمار بیچ فرانت, دید دریا جی بی ار, املاک جزایر دبی, ویلاهای جزیره خلیج جمیرا">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/fa/beachfront-properties-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/beachfront-properties-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/beachfront-properties-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/beachfront-properties-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="املاک ساحلی در دبی | املاک و مستغلات زرین">
  <meta property="og:description" content="ویلاها، آپارتمان‌ها و پنت‌هاوس‌های ساحلی در شاخص‌ترین محله‌های خط ساحلی دبی. کارشناسی‌شده توسط مشاوران زرین.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="املاک ساحلی در دبی">
  <meta property="og:url" content="https://zarinrealestate.com/fa/beachfront-properties-in-dubai">
  <meta property="og:site_name" content="املاک و مستغلات زرین">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="املاک ساحلی در دبی | املاک و مستغلات زرین">
  <meta name="twitter:description" content="ویلاها، آپارتمان‌ها و پنت‌هاوس‌های ساحلی در شاخص‌ترین محله‌های خط ساحلی دبی.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80">

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
    {"@type":"ListItem","position":3,"name":"املاک ساحلی","item":"https://zarinrealestate.com/fa/beachfront-properties-in-dubai"}
  ]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","@id":"https://zarinrealestate.com/fa/beachfront-properties-in-dubai#collectionpage",
    "name":"املاک ساحلی در دبی","url":"https://zarinrealestate.com/fa/beachfront-properties-in-dubai",
    "description":"ویلاها، آپارتمان‌ها و پنت‌هاوس‌های ساحلی در شاخص‌ترین محله‌های خط ساحلی دبی — پالم جمیرا، بلوواترز، جی‌بی‌آر، جزایر دبی، اعمار بیچ‌فرانت و خلیج جمیرا.",
    "isPartOf":{"@id":"https://zarinrealestate.com/#website"},
    "mainEntity":{"@type":"ItemList","itemListElement":[
      {"@type":"ListItem","position":1,"item":{"@type":"Product","name":"ویلا ۵ خوابه ساحلی — پالم جمیرا فروند M","url":"https://zarinrealestate.com/fa/properties/5br-palm-beach-001","image":"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"28000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":2,"item":{"@type":"Product","name":"آپارتمان ۳ خوابه رو به دریا — جزیره بلوواترز","url":"https://zarinrealestate.com/fa/properties/3br-bluewaters-001","image":"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"6500000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":3,"item":{"@type":"Product","name":"آپارتمان ۲ خوابه ساحلی — صدف جی‌بی‌آر","url":"https://zarinrealestate.com/fa/properties/2br-jbr-beach-001","image":"https://images.unsplash.com/photo-1502672023488-5aabfcd1d3f5?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"3800000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":4,"item":{"@type":"Product","name":"پنت‌هاوس ۴ خوابه ساحلی — اعمار بیچ‌فرانت","url":"https://zarinrealestate.com/fa/properties/ph-emaar-beach-001","image":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"18000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":5,"item":{"@type":"Product","name":"ویلا ۶ خوابه با ساحل اختصاصی — جزیره خلیج جمیرا","url":"https://zarinrealestate.com/fa/properties/6br-jbi-beach-001","image":"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"65000000","priceCurrency":"AED"}}},
      {"@type":"ListItem","position":6,"item":{"@type":"Product","name":"تاون‌هاوس ۳ خوابه ساحلی — جزایر دبی","url":"https://zarinrealestate.com/fa/properties/3br-di-beach-001","image":"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80","offers":{"@type":"Offer","price":"5200000","priceCurrency":"AED"}}}
    ]}
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","@id":"https://zarinrealestate.com/fa/beachfront-properties-in-dubai#faqpage",
    "mainEntity":[
      {"@type":"Question","name":"در کدام مناطق دبی می‌توان ملک ساحلی خریداری کرد؟","acceptedAnswer":{"@type":"Answer","text":"املاک ساحلی در دبی در شش منطقه اصلی متمرکز هستند. پالم جمیرا ویلاهای ساحل اختصاصی و آپارتمان‌های لوکس را در شاخه‌ها و تنه اصلی ارائه می‌دهد. جزیره بلوواترز و جی‌بی‌آر زندگی ساحلی آپارتمانی با دسترسی مستقیم به ساحل عمومی را فراهم می‌کنند. اعمار بیچ‌فرانت مسترپلان مدرن‌تری با ۱٫۵ کیلومتر ساحل شنی اختصاصی مشترک بین برج‌هاست. جزیره خلیج جمیرا انحصاری‌ترین محله با ویلاهای ساحل اختصاصی است. جزایر دبی (دیره آیلندز سابق) جدیدترین مقصد با تاون‌هاوس‌ها و آپارتمان‌های ساحلی است. مشاوران زرین ملک مدنظر شما را دقیقاً با منطقه متناسب همگام می‌کنند."}},
      {"@type":"Question","name":"اختلاف قیمت (پرمیوم) املاک ساحلی در مقایسه با املاک غیرساحلی چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"املاک ساحلی در دبی با ۳۵ تا ۴۵ درصد پرمیوم قیمتی در هر فوت مربع نسبت به املاک مشابه غیرساحلی معامله می‌شوند. یک آپارتمان ۴ خوابه در جی‌بی‌آر با دید مستقیم دریا ۲٬۸۰۰ تا ۳٬۵۰۰ درهم در هر فوت مربع قیمت دارد، در حالی که واحد مشابه رو به شهر ۱٬۹۰۰ تا ۲٬۳۰۰ درهم معامله می‌شود. در پالم جمیرا ویلاهای دارای ساحل اختصاصی در بازه ۳٬۵۰۰ تا ۵٬۰۰۰ درهم در هر فوت مربع معامله می‌شوند. این پرمیوم بازتاب‌دهنده نایاب بودن است؛ تنها ۶ درصد عرضه مسکونی دبی ساحلی واقعی است."}},
      {"@type":"Question","name":"آیا اتباع خارجی می‌توانند در دبی ویلای ساحلی بخرند؟","acceptedAnswer":{"@type":"Answer","text":"بله. هر شش منطقه ساحلی اصلی شامل پالم جمیرا، جزیره بلوواترز، جی‌بی‌آر، جزایر دبی، اعمار بیچ‌فرانت و جزیره خلیج جمیرا مناطق صددرصد مالکیت قطعی (فری‌هولد) هستند که خریداران بین‌المللی با هر تابعیتی می‌توانند سند تک‌برگ قطعی و مادام‌العمر به نام خود دریافت کنند. هیچ محدودیتی از نظر ملیت یا پیش‌شرط اقامت وجود ندارد و سند رسمی توسط اداره اراضی دبی (DLD) صادر می‌شود. مشاوران زرین کل فرآیند انتقال، استعلامات و ثبت را مدیریت می‌کنند."}},
      {"@type":"Question","name":"بهترین مناطق ساحلی دبی برای سکونت خانوادگی کدامند؟","acceptedAnswer":{"@type":"Answer","text":"برای خانواده‌ها انتخاب به نزدیکی مدارس، فضای موردنیاز و سبک زندگی بستگی دارد. ویلاهای پالم جمیرا با ساحل اختصاصی، حیاط‌های بزرگ و نزدیکی به برترین مدارس بین‌المللی گزینه اول هستند. اعمار بیچ‌فرانت برای خانواده‌هایی که خواهان برج‌های نوساز، ساحل آرام و اتصال مستقیم به دبی مارینا هستند ایده‌آل است. جزایر دبی تاون‌هاوس‌های ساحلی اقتصادی‌تری برای خانواده‌ها ارائه می‌دهد. بلوواترز و جی‌بی‌آر بیشتر برای زوج‌ها یا فرزندان بزرگ‌تر مناسب است. زرین امکان تست مسیر مدارس را در زمان بازدید هماهنگ می‌کند."}},
      {"@type":"Question","name":"آیا شارژ خدمات (Service Charges) املاک ساحلی بالاتر است؟","acceptedAnswer":{"@type":"Answer","text":"بله؛ هزینه‌های شارژ خدمات نگهداری سالیانه املاک ساحلی معمولاً ۲۰ تا ۳۵ درصد بالاتر از املاک درون‌شهری است. برج‌های ساحلی پالم جمیرا و اعمار بیچ‌فرانت سالیانه ۲۲ تا ۳۲ درهم به ازای هر فوت مربع دریافت می‌کنند (در مقایسه با ۱۶ تا ۲۲ درهم در داون‌تاون یا بیزنس بی). این اختلاف به دلیل نگهداری مداوم ساحل شنی، سیستم‌های شیرین‌سازی آب دریا، مهار فرسایش ساحلی و حفاظت در برابر رطوبت است. زرین صورت‌حساب‌های سه‌ساله حسابرسی‌شده شارژ را پیش از ارائه پیشنهاد بررسی می‌کند."}},
      {"@type":"Question","name":"آیا خرید ملک ساحلی در دبی سرمایه‌گذاری مناسبی محسوب می‌شود؟","acceptedAnswer":{"@type":"Answer","text":"املاک ساحلی در دبی از نظر رشد ارزش سرمایه تاریخی همواره عملکرد درخشان‌تری نسبت به مناطق غیرساحلی ثبت کرده‌اند؛ به‌طوری‌که پالم جمیرا و جزیره خلیج جمیرا بین سال‌های ۲۰۲۰ تا ۲۰۲۵ شاهد ۶۰ تا ۹۰ درصد رشد قیمتی بوده‌اند. هرچند بازده اجاره‌ای جاری به دلیل قیمت پایه بالا در محدوده ۴ تا ۵ درصد ناخالص است، رشد سرمایه‌ای استثنایی آن این موضوع را پوشش داده است. کمیابی مطلق زمین‌های ساحلی ضامن پایداری ارزش این دارایی‌هاست."}},
      {"@type":"Question","name":"بازدهی اجاره‌ای املاک ساحلی در دبی چقدر است؟","acceptedAnswer":{"@type":"Answer","text":"بازدهی ناخالص اجاره املاک ساحلی معمولاً بین ۴ تا ۵ درصد برای آپارتمان‌ها و ۳ تا ۴ درصد برای ویلاها است. یک آپارتمان ۳ خوابه رو به دریا در جی‌بی‌آر با اجاره ۲۲۰٬۰۰۰ درهم در سال بر روی قیمت ۵ میلیون درهم، بازدهی ناخالص ۴٫۴٪ به همراه دارد. در حالت اجاره روزانه و کوتاه‌مدت تفریحی (Holiday Homes) در فصول اوج گردشگری (نوامبر تا مارس)، بازدهی ناخالص به ۶ تا ۷ درصد می‌رسد که تیم مدیریت املاک زرین آماده تصدی آن است."}},
      {"@type":"Question","name":"آیا امکان خرید ملک با ساحل کاملاً خصوصی در دبی وجود دارد؟","acceptedAnswer":{"@type":"Answer","text":"بله؛ اما این امکان فقط در ویلاهای شاخه‌های پالم جمیرا (Fronds)، ویلاهای جزیره خلیج جمیرا و قطعات منتخب پالم جبل علی میسر است. این املاک مستقیماً از داخل حیاط ویلا به ساحل خصوصی باز می‌شوند. برج‌های اعمار بیچ‌فرانت و جی‌بی‌آر دسترسی ساحلی مشترک میان ساکنان دارند. با توجه به عدم عرضه قطعات خصوصی جدید از سوی دولت، املاک ساحل اختصاصی بالاترین ارزش سرمایه‌ای را در دبی دارند و دفتر خصوصی زرین دسترسی به مالکان خارج از بازار (Off-market) را حفظ کرده است."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://zarinrealestate.com/fa/beachfront-properties-in-dubai#webpage",
    "url":"https://zarinrealestate.com/fa/beachfront-properties-in-dubai","name":"املاک ساحلی در دبی | املاک و مستغلات زرین",
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
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="بخش معرفی املاک ساحلی">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">برای فروش &middot; خط ساحلی اختصاصی</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-bone mb-6">املاک ساحلی<br><span class="text-gold-gradient">در دبی</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light">ویلاها، آپارتمان‌ها و پنت‌هاوس‌های مجلل در پالم جمیرا، بلوواترز، جی‌بی‌آر، جزایر دبی، اعمار بیچ‌فرانت و جزیره خلیج جمیرا. هر فایل ساحلی شخصاً توسط مشاوران زرین کارشناسی و ممیزی شده است — زاویه دید واقعی به دریا، نحوه دسترسی به ساحل و شارژ سالیانه پیش از اشتراک‌گذاری بررسی می‌شوند. بدون قیمت‌گذاری حبابی و فایل‌های تاریخ‌گذشته.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#featured-listings" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="مشاهده فایل‌های ساحلی"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>مشاهده املاک ساحلی</a>
          <a href="/fa/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="گفتگو با مشاور تخصصی">گفتگو با مشاور تخصصی</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۳۲۰</div><div class="text-xs text-slate uppercase tracking-wider mt-1">فایل معتبر ساحلی</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۸٫۵M AED</div><div class="text-xs text-slate uppercase tracking-wider mt-1">میانگین قیمت ساحلی</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۳۵-۴۵٪</div><div class="text-xs text-slate uppercase tracking-wider mt-1">پرمیوم نسبت به مرکز شهر</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۷۰ km</div><div class="text-xs text-slate uppercase tracking-wider mt-1">نوار خط ساحلی</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. BEACH COMMUNITIES SHOWCASE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="محله‌های برتر ساحلی دبی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">محله‌های ساحلی دبی</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">شش مرز طلایی خط ساحلی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">بازار املاک ساحلی دبی در شش محله اصلی متمرکز است که هرکدام ویژگی‌های منحصربه‌فرد، بازه قیمتی و نوع ساحل متمایزی دارند. برخی دارای ساحل اختصاصی قیدشده در سند ملکی هستند و برخی دیگر دسترسی عمومی به ساحل را در فاصله چند قدمی میسر می‌سازند. مشاوران زرین وجب به وجب این مناطق را ممیزی کرده‌اند و آماده ارائه تحلیل دقیق وضعیت هر منطقه هستند.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Palm Jumeirah -->
        <a href="/fa/areas/palm-jumeirah" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک پالم جمیرا">
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="نمای هوایی ساحلی پالم جمیرا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحل اختصاصی</div>
          <div class="absolute bottom-6 left-6 right-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">پالم جمیرا</h3>
            <p class="text-xs text-ash mb-3">ویلاهای نمادین در شاخه‌ها با ساحل اختصاصی و آپارتمان‌های لوکس در تنه نخل با دید بی‌پایان به دریا.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۴M تا ۱۲۰M درهم</span>
              <span class="text-ash">+۱۹۰ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- Bluewaters Island -->
        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک جزیره بلوواترز">
          <img src="https://images.unsplash.com/photo-1518534334035-bf3a90b6dd1f?auto=format&fit=crop&w=800&q=80" alt="آپارتمان‌های رو به آب بلوواترز" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحل شهری</div>
          <div class="absolute bottom-6 left-6 right-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">جزیره بلوواترز</h3>
            <p class="text-xs text-ash mb-3">جزیره‌ای دست‌ساز در مجاورت جی‌بی‌آر با چرخ‌وفلک عین دبی؛ برج‌های مسکونی کم‌ارتفاع با بلوار ساحلی و دسترسی مستقیم.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۲٫۵M تا ۳۰M درهم</span>
              <span class="text-ash">+۴۵ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- JBR -->
        <a href="/fa/areas/jbr" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک جی بی ار">
          <img src="https://images.unsplash.com/photo-1518534334035-bf3a90b6dd1f?auto=format&fit=crop&w=800&q=80" alt="برج‌های مسکونی ساحلی جی بی ار" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحل عمومی</div>
          <div class="absolute bottom-6 left-6 right-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">جی‌بی‌آر (JBR)</h3>
            <p class="text-xs text-ash mb-3">۳۵ برج مسکونی در امتداد ۱٫۷ کیلومتری خیابان د واک با دسترسی مستقیم ساحلی، امکانات رفاهی و تقاضای اجاره فوق‌العاده.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱٫۵M تا ۲۵M درهم</span>
              <span class="text-ash">+۲۲۰ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- Dubai Islands -->
        <a href="/fa/areas/dubai-islands" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک جزایر دبی">
          <img src="https://images.unsplash.com/photo-1502672023488-5aabfcd1d3f5?auto=format&fit=crop&w=800&q=80" alt="پروژه‌های تفریحی و ساحلی جزایر دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحل شنی</div>
          <div class="absolute bottom-6 left-6 right-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">جزایر دبی (دیره سابق)</h3>
            <p class="text-xs text-ash mb-3">پنج جزیره مگا با ۲۱ کیلومتر ساحل شنی بکر، تاون‌هاوس‌های ساحلی جدید و آپارتمان‌های ریزورتی لوکس.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱٫۲M تا ۱۸M درهم</span>
              <span class="text-ash">+۱۱۰ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- Emaar Beachfront -->
        <a href="/fa/areas/emaar-beachfront" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک اعمار بیچ فرانت">
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" alt="برج‌های اعمار بیچ فرانت با ساحل خصوصی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحل اختصاصی</div>
          <div class="absolute bottom-6 left-6 right-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">اعمار بیچ‌فرانت</h3>
            <p class="text-xs text-ash mb-3">مدرن‌ترین مسترپلان ساحلی بین پالم جمیرا و دبی مارینا؛ ۲۷ برج لوکس با ۱٫۵ کیلومتر ساحل خصوصی انحصاری.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۲٫۸M تا ۴۵M درهم</span>
              <span class="text-ash">+۸۵ فایل فعال</span>
            </div>
          </div>
        </a>

        <!-- Jumeirah Bay Island -->
        <a href="/fa/areas/jumeirah-bay-island" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="مشاهده املاک جزیره خلیج جمیرا">
          <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="ویلای ساحلی لوکس در جزیره خلیج جمیرا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحل اختصاصی</div>
          <div class="absolute bottom-6 left-6 right-6 text-right">
            <h3 class="text-2xl font-bold text-bone mb-1">جزیره خلیج جمیرا</h3>
            <p class="text-xs text-ash mb-3">انحصاری‌ترین جزیره اسب‌دریایی دبی در مجاورت ریزورت بولگاری؛ ویلاهای ساحل اختصاصی کم‌تراکم و عمارت‌های تراز اول.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۸M تا ۱۵۰M درهم</span>
              <span class="text-ash">+۲۸ فایل فعال</span>
            </div>
          </div>
        </a>

      </div>
      <div class="text-center mt-10"><a href="/fa/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="مشاهده همه مناطق دبی">مشاهده تمام ۴۵+ منطقه دبی<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 3. FEATURED BEACHFRONT LISTINGS -->
  <section id="featured-listings" class="bg-ink-900 py-16 md:py-20" aria-label="فهرست برگزیده املاک ساحلی">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">فایل‌های منتخب</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">مجموعه برگزیده املاک ساحلی</h2>
        </div>
        <p class="text-sm text-ash max-w-md">مجموعه‌ای گلچین‌شده از فایل‌های کارشناسی‌شده زرین در خط ساحلی دبی. هر ملک شخصاً از نظر دسترسی به ساحل، خط افق دید دریا و سلامت شارژهای نگهداری ارزیابی شده است.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Listing 1: 5BR Villa Palm Jumeirah -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/properties/5br-palm-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلا ۵ خوابه پالم جمیرا فروند M">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="ویلا ۵ خوابه ساحلی در فروند M پالم جمیرا با ساحل اختصاصی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحل اختصاصی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۲۸M درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">پالم جمیرا</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلا ۵ خوابه &middot; فروند M</h3>
            <div class="text-sm text-ash mb-4">۸٬۲۰۰ فوت مربع &middot; ساحل اختصاصی ۳۰ متری</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۵</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۷</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۳٬۴۱۵ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 3BR Apartment Bluewaters -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/properties/3br-bluewaters-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده آپارتمان ۳ خوابه بلوواترز">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="آپارتمان ۳ خوابه در جزیره بلوواترز با دید کامل دریا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">دید کامل دریا</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۶٫۵M درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">آپارتمان</div><div class="text-xs text-slate">بلوواترز</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">آپارتمان ۳ خوابه &middot; ساختمان ۸</h3>
            <div class="text-sm text-ash mb-4">۲٬۱۵۰ فوت مربع &middot; دید ۳۶۰ درجه به خلیج فارس</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۳٬۰۲۳ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 2BR Apartment JBR -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/properties/2br-jbr-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده آپارتمان ۲ خوابه جی بی ار">
            <img src="https://images.unsplash.com/photo-1502672023488-5aabfcd1d3f5?auto=format&fit=crop&w=800&q=80" alt="آپارتمان ۲ خوابه در صدف جی بی ار با دسترسی مستقیم ساحل" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">خط اول ساحل</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۳٫۸M درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">آپارتمان</div><div class="text-xs text-slate">جی‌بی‌آر صدف</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">آپارتمان ۲ خوابه &middot; صدف ۵</h3>
            <div class="text-sm text-ash mb-4">۱٬۵۸۰ فوت مربع &middot; دسترسی مستقیم به ساحل</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۲</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۳</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۲٬۴۰۵ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 4BR Penthouse Emaar Beachfront -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/properties/ph-emaar-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۴ خوابه اعمار بیچ فرانت">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۴ خوابه در اعمار بیچ فرانت با تراس اختصاصی و دید ساحل" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس ساحلی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۸M درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس</div><div class="text-xs text-slate">اعمار بیچ‌فرانت</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پنت‌هاوس ۴ خوابه &middot; بیچ ویستا</h3>
            <div class="text-sm text-ash mb-4">۵٬۴۰۰ فوت مربع &middot; ۲٬۰۰۰ فوت تراس اختصاصی</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۳٬۳۳۳ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 6BR Villa Jumeirah Bay Island -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/properties/6br-jbi-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده ویلا ۶ خوابه خلیج جمیرا">
            <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="ویلای ۶ خوابه با ساحل اختصاصی در جزیره خلیج جمیرا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحل اختصاصی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۶۵M درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">ویلا</div><div class="text-xs text-slate">خلیج جمیرا</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">ویلا ۶ خوابه &middot; انکلاو بولگاری</h3>
            <div class="text-sm text-ash mb-4">۱۴٬۵۰۰ فوت مربع &middot; ساحل خصوصی ۴۵ متری</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۶</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۸</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۴٬۴۸۳ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 3BR Townhouse Dubai Islands -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group">
          <a href="/fa/properties/3br-di-beach-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده تاون‌هاوس ۳ خوابه جزایر دبی">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="تاون‌هاوس ۳ خوابه ساحلی در جزایر دبی با دسترسی ساحل شنی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">ساحل شنی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۵٫۲M درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">تاون‌هاوس</div><div class="text-xs text-slate">جزایر دبی</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">تاون‌هاوس ۳ خوابه &middot; سنترال آیلند</h3>
            <div class="text-sm text-ash mb-4">۳٬۱۰۰ فوت مربع &middot; دسترسی به ساحل شنی آرام</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۱٬۶۷۷ AED</div><div>هر فوت</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">این لیست نمونه‌ای برگزیده است. مشاوران زرین به بیش از ۳۲۰ فایل ساحلی فعال در شش منطقه خط ساحلی دبی — از جمله فایل‌های محرمانه خارج از بازار (Off-market) — دسترسی دارند. بودجه و سلیقه خود را بفرمایید تا شورت‌لیست اختصاصی شما ظرف ۲۴ ساعت آماده شود.</p>
        <a href="/fa/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="درخواست جستجوی اختصاصی">درخواست جستجوی اختصاصی ملک ساحلی<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. WHY BEACHFRONT -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="مزایای خرید ملک ساحلی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">چرا املاک ساحلی؟</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">منطق سرمایه‌گذاری در خط ساحلی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">خط ساحلی دبی یک طبقه دارایی محدود، غیرمتقارن و تکرارنشدنی است. تنها ۶ درصد از عرضه مسکونی شهر در حاشیه نوار ساحلی قرار دارد و عملاً هیچ زمین ساحلی جدیدی بعد از اعمار بیچ‌فرانت واگذار نشده است. این کمیابی مطلق در کنار برتری سبک زندگی، املاک ساحلی را به مقاوم‌ترین بخش بازار دبی تبدیل کرده است.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل اول</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">کمیابی مطلق</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">از ۷۰ کیلومتر خط ساحلی دبی، تنها ۱۸ کیلومتر به توسعه املاک مسکونی خصوصی اختصاص داده شده است. از زمان عرضه اولیه پالم جمیرا، هیچ قطعه ساحلی خصوصی جدیدی آزاد نشده است؛ زمین ساحلی از نظر ماهوی محدود است.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">تنها ۶٪ کل مسکن دبی</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل دوم</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">سبک زندگی متمایز</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">زندگی ساحلی در دبی نمادین نیست؛ یعنی ۹۰ ثانیه پیاده‌روی از در خانه تا لمس آب دریا، نسیم خنک دریایی در طول سال و منظره بی‌پایان غروب آفتاب بدون انسداد دید توسط برج‌های مجاور.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">دسترسی ۴ فصل به ساحل</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل سوم</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">پرمیوم اجاره</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">املاک ساحلی ۲۵ تا ۴۰ درصد نرخ اجاره بالاتری نسبت به املاک درون‌شهری دارند. اجاره‌های کوتاه‌مدت تفریحی (Holiday Homes) در فصول طلایی گردشگری بازدهی ناخالص را به ۶ تا ۷ درصد می‌رسانند.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+۲۵-۴۰٪ درآمد اجاره</div>
        </article>

        <article class="bg-ink-900 border border-white-line rounded-sm p-8 hover:border-gold-line transition-all group text-right">
          <div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div><div><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">دلیل چهارم</div><h3 class="text-xl font-bold text-bone group-hover:text-gold-400 transition-colors">رشد ارزش سرمایه</h3></div></div>
          <p class="text-sm text-ash leading-relaxed mb-4">ویلاهای شاخه‌های پالم جمیرا از سال ۲۰۲۰ بیش از ۸۰ تا ۹۵ درصد و جزیره خلیج جمیرا ۶۵ تا ۸۰ درصد رشد قیمت داشته‌اند. رشد سرمایه‌ای املاک ساحلی ۲ تا ۳ برابر میانگین کل بازار مسکن دبی بوده است.</p>
          <div class="text-xs text-gold-400 font-semibold border-t border-white-line pt-4">+۸۰-۹۵٪ رشد از سال ۲۰۲۰</div>
        </article>

      </div>
    </div>
  </section>

  <!-- 5. WHY BUY WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="چرا خرید با زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">مزیت زرین</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">مشاوری که واقعاً ساحل را قدم زده است</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">املاک ساحلی بیشترین نرخ ادعاهای نادرست را در بازار املاک دبی دارند — منظره‌هایی که با ساخت برج‌های آینده مسدود می‌شوند، دسترسی‌های ساحلی که عمومی هستند اما اختصاصی معرفی می‌شوند، یا شارژهای سالیانه‌ای که کمتر اعلام می‌شوند. مشاوران زرین تک‌تک املاک ساحلی را شخصاً ممیزی می‌کنند. ما وضعیت حقیقی ساحل، دالان دید دریا بر اساس طرح جامع شهری و صورت‌حساب‌های شارژ ۳ سال گذشته را پیش از هرگونه پیشنهاد بررسی می‌کنیم.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">بازدید فیزیکی و ممیزی میدانی تمامی فایل‌ها</div><div class="text-xs text-slate mt-1">ما خود ساحل را قدم می‌زنیم، نه فقط داخل آپارتمان را.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">تضمین عدم انسداد دالان دید دریا طبق مسترپلان</div><div class="text-xs text-slate mt-1">هیچ برجی در ۵ یا ۱۰ سال آینده جلوی دید شما ساخته نخواهد شد.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">حسابرسی کامل شارژ خدمات و صندوق ذخیره ساختمان</div><div class="text-xs text-slate mt-1">بررسی شفاف صورت‌حساب‌های ۳ سال اخیر قبل از واریز بیعانه.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه مستقیم: فارسی، انگلیسی و عربی</div><div class="text-xs text-slate mt-1">ارتباط بی‌واسطه و مذاکره حرفه‌ای به زبان دلخواه شما.</div></div></div>
          </div>
          <a href="/fa/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="درباره زرین">بیشتر درباره زرین بدانید<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۳۲۰</div><div class="text-sm font-bold text-bone mb-1">فایل ساحلی فعال</div><div class="text-xs text-slate">کارشناسی‌شده میدانی</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲٪</div><div class="text-sm font-bold text-bone mb-1">کمیسیون رسمی خریدار</div><div class="text-xs text-slate">منطبق بر ضوابط RERA</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲۴ ساعت</div><div class="text-sm font-bold text-bone mb-1">ارائه شورت‌لیست</div><div class="text-xs text-slate">پس از جلسه مشاوره</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۲۰ سال</div><div class="text-sm font-bold text-bone mb-1">سابقه در بازار دبی</div><div class="text-xs text-slate">فعالیت از سال ۲۰۰۵</div></div>
        </div>
      </div>
      <div class="mt-16 pt-12 border-t border-white-line">
        <div class="text-center mb-8">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">نشان‌های اعتماد</div>
          <h3 class="text-2xl font-bold text-bone">چرا مشتریان زرین را انتخاب می‌کنند</h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div><div class="text-sm font-bold text-bone">دارای مجوز رسمی RERA</div><div class="text-xs text-slate mt-1">مشاوره قانونی و رگوله‌شده</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">پاسخ‌گویی در ۲۴ ساعت</div><div class="text-xs text-slate mt-1">پیشنهادهای مدون ظرف یک روز</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg></div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه مستقیم</div><div class="text-xs text-slate mt-1">فارسی، انگلیسی و عربی</div></div>
          <div class="text-center p-6 border border-white-line rounded-sm hover:border-gold-line transition-all"><div class="w-12 h-12 mx-auto mb-3 bg-gold-soft border border-gold-line rounded-xs flex items-center justify-center"><svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div class="text-sm font-bold text-bone">مشاوره اولیه رایگان</div><div class="text-xs text-slate mt-1">بدون هیچ‌گونه تعهد مالی اولیه</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="سوالات متداول املاک ساحلی">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">سوالات متداول ساحلی</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">پرسش‌های پرتکرار خریداران املاک ساحلی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">هشت پرسشی که مشاوران زرین به‌طور مکرر از متقاضیان املاک ساحلی دریافت می‌کنند. در صورت تمایل به دریافت پاسخ مستقیم، از طریق واتس‌اپ با مشاوران ما در ارتباط باشید.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-900 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">در کدام مناطق دبی می‌توان ملک ساحلی خریداری کرد؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">املاک ساحلی در دبی در شش منطقه اصلی متمرکز هستند. پالم جمیرا ویلاهای ساحل اختصاصی و آپارتمان‌های لوکس را در شاخه‌ها و تنه اصلی ارائه می‌دهد. جزیره بلوواترز و جی‌بی‌آر زندگی ساحلی آپارتمانی با دسترسی مستقیم به ساحل عمومی را فراهم می‌کنند. اعمار بیچ‌فرانت مسترپلان مدرن‌تری با ۱٫۵ کیلومتر ساحل شنی اختصاصی مشترک بین برج‌هاست. جزیره خلیج جمیرا انحصاری‌ترین محله با ویلاهای ساحل اختصاصی است. جزایر دبی (دیره آیلندز سابق) جدیدترین مقصد با تاون‌هاوس‌ها و آپارتمان‌های ساحلی است. مشاوران زرین ملک مدنظر شما را دقیقاً با منطقه متناسب همگام می‌کنند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">اختلاف قیمت (پرمیوم) املاک ساحلی در مقایسه با املاک غیرساحلی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">املاک ساحلی در دبی با ۳۵ تا ۴۵ درصد پرمیوم قیمتی در هر فوت مربع نسبت به املاک مشابه غیرساحلی معامله می‌شوند. یک آپارتمان ۴ خوابه در جی‌بی‌آر با دید مستقیم دریا ۲٬۸۰۰ تا ۳٬۵۰۰ درهم در هر فوت مربع قیمت دارد، در حالی که واحد مشابه رو به شهر ۱٬۹۰۰ تا ۲٬۳۰۰ درهم معامله می‌شود. در پالم جمیرا ویلاهای دارای ساحل اختصاصی در بازه ۳٬۵۰۰ تا ۵٬۰۰۰ درهم در هر فوت مربع معامله می‌شوند. این پرمیوم بازتاب‌دهنده نایاب بودن است؛ تنها ۶ درصد عرضه مسکونی دبی ساحلی واقعی است.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا اتباع خارجی می‌توانند در دبی ویلای ساحلی بخرند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله. هر شش منطقه ساحلی اصلی شامل پالم جمیرا، جزیره بلوواترز، جی‌بی‌آر، جزایر دبی، اعمار بیچ‌فرانت و جزیره خلیج جمیرا مناطق صددرصد مالکیت قطعی (فری‌هولد) هستند که خریداران بین‌المللی با هر تابعیتی می‌توانند سند تک‌برگ قطعی و مادام‌العمر به نام خود دریافت کنند. هیچ محدودیتی از نظر ملیت یا پیش‌شرط اقامت وجود ندارد و سند رسمی توسط اداره اراضی دبی (DLD) صادر می‌شود. مشاوران زرین کل فرآیند انتقال، استعلامات و ثبت را مدیریت می‌کنند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">بهترین مناطق ساحلی دبی برای سکونت خانوادگی کدامند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">برای خانواده‌ها انتخاب به نزدیکی مدارس، فضای موردنیاز و سبک زندگی بستگی دارد. ویلاهای پالم جمیرا با ساحل اختصاصی، حیاط‌های بزرگ و نزدیکی به برترین مدارس بین‌المللی گزینه اول هستند. اعمار بیچ‌فرانت برای خانواده‌هایی که خواهان برج‌های نوساز، ساحل آرام و اتصال مستقیم به دبی مارینا هستند ایده‌آل است. جزایر دبی تاون‌هاوس‌های ساحلی اقتصادی‌تری برای خانواده‌ها ارائه می‌دهد. بلوواترز و جی‌بی‌آر بیشتر برای زوج‌ها یا فرزندان بزرگ‌تر مناسب است. زرین امکان تست مسیر مدارس را در زمان بازدید هماهنگ می‌کند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا شارژ خدمات (Service Charges) املاک ساحلی بالاتر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله؛ هزینه‌های شارژ خدمات نگهداری سالیانه املاک ساحلی معمولاً ۲۰ تا ۳۵ درصد بالاتر از املاک درون‌شهری است. برج‌های ساحلی پالم جمیرا و اعمار بیچ‌فرانت سالیانه ۲۲ تا ۳۲ درهم به ازای هر فوت مربع دریافت می‌کنند (در مقایسه با ۱۶ تا ۲۲ درهم در داون‌تاون یا بیزنس بی). این اختلاف به دلیل نگهداری مداوم ساحل شنی، سیستم‌های شیرین‌سازی آب دریا، مهار فرسایش ساحلی و حفاظت در برابر رطوبت است. زرین صورت‌حساب‌های سه‌ساله حسابرسی‌شده شارژ را پیش از ارائه پیشنهاد بررسی می‌کند.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا خرید ملک ساحلی در دبی سرمایه‌گذاری مناسبی محسوب می‌شود؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">املاک ساحلی در دبی از نظر رشد ارزش سرمایه تاریخی همواره عملکرد درخشان‌تری نسبت به مناطق غیرساحلی ثبت کرده‌اند؛ به‌طوری‌که پالم جمیرا و جزیره خلیج جمیرا بین سال‌های ۲۰۲۰ تا ۲۰۲۵ شاهد ۶۰ تا ۹۰ درصد رشد قیمتی بوده‌اند. هرچند بازده اجاره‌ای جاری به دلیل قیمت پایه بالا در محدوده ۴ تا ۵ درصد ناخالص است، رشد سرمایه‌ای استثنایی آن این موضوع را پوشش داده است. کمیابی مطلق زمین‌های ساحلی ضامن پایداری ارزش این دارایی‌هاست.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">بازدهی اجاره‌ای املاک ساحلی در دبی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بازدهی ناخالص اجاره املاک ساحلی معمولاً بین ۴ تا ۵ درصد برای آپارتمان‌ها و ۳ تا ۴ درصد برای ویلاها است. یک آپارتمان ۳ خوابه رو به دریا در جی‌بی‌آر با اجاره ۲۲۰٬۰۰۰ درهم در سال بر روی قیمت ۵ میلیون درهم، بازدهی ناخالص ۴٫۴٪ به همراه دارد. در حالت اجاره روزانه و کوتاه‌مدت تفریحی (Holiday Homes) در فصول اوج گردشگری (نوامبر تا مارس)، بازدهی ناخالص به ۶ تا ۷ درصد می‌رسد که تیم مدیریت املاک زرین آماده تصدی آن است.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا امکان خرید ملک با ساحل کاملاً خصوصی در دبی وجود دارد؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله؛ اما این امکان فقط در ویلاهای شاخه‌های پالم جمیرا (Fronds)، ویلاهای جزیره خلیج جمیرا و قطعات منتخب پالم جبل علی میسر است. این املاک مستقیماً از داخل حیاط ویلا به ساحل خصوصی باز می‌شوند. برج‌های اعمار بیچ‌فرانت و جی‌بی‌آر دسترسی ساحلی مشترک میان ساکنان دارند. با توجه به عدم عرضه قطعات خصوصی جدید از سوی دولت، املاک ساحل اختصاصی بالاترین ارزش سرمایه‌ای را در دبی دارند و دفتر خصوصی زرین دسترسی به مالکان خارج از بازار (Off-market) را حفظ کرده است.</div>
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
fs.writeFileSync('beachfront-properties-in-dubai.html', enBeachfrontHtml, 'utf8');
fs.mkdirSync('beachfront-properties-in-dubai', { recursive: true });
fs.writeFileSync(path.join('beachfront-properties-in-dubai', 'index.html'), enBeachfrontHtml, 'utf8');

// Persian
fs.writeFileSync(path.join('fa', 'beachfront-properties-in-dubai.html'), faBeachfrontHtml, 'utf8');
fs.mkdirSync(path.join('fa', 'beachfront-properties-in-dubai'), { recursive: true });
fs.writeFileSync(path.join('fa', 'beachfront-properties-in-dubai', 'index.html'), faBeachfrontHtml, 'utf8');

console.log('Beachfront pages generated successfully for both EN and FA (both .html and /index.html)!');
