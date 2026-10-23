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

// Prepare English Header with active state on Penthouses and Properties
const enHeaderClone = JSDOM.fragment(enHeaderEl.outerHTML).querySelector('#site-header');
const enPropLink = enHeaderClone.querySelector('#properties-nav-link');
if (enPropLink) {
  enPropLink.setAttribute('aria-current', 'page');
  enPropLink.classList.remove('text-ash');
  enPropLink.classList.add('text-gold-400');
}
const enPhLink = enHeaderClone.querySelector('a[href="/penthouses-for-sale-in-dubai"]');
if (enPhLink) {
  enPhLink.setAttribute('aria-current', 'page');
  enPhLink.classList.remove('text-ash');
  enPhLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare English Mobile Menu with active state
const enMobileClone = JSDOM.fragment(enMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const enPhMobileLink = enMobileClone.querySelector('a[href="/penthouses-for-sale-in-dubai"]');
if (enPhMobileLink) {
  enPhMobileLink.classList.remove('text-ash');
  enPhMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Header with active state
const faHeaderClone = JSDOM.fragment(faHeaderEl.outerHTML).querySelector('#site-header');
const faPropLink = faHeaderClone.querySelector('#properties-nav-link');
if (faPropLink) {
  faPropLink.setAttribute('aria-current', 'page');
  faPropLink.classList.remove('text-ash');
  faPropLink.classList.add('text-gold-400');
}
const faPhLink = faHeaderClone.querySelector('a[href="/fa/penthouses-for-sale-in-dubai"]');
if (faPhLink) {
  faPhLink.setAttribute('aria-current', 'page');
  faPhLink.classList.remove('text-ash');
  faPhLink.classList.add('text-gold-400', 'font-semibold');
}

// Prepare Persian Mobile Menu with active state
const faMobileClone = JSDOM.fragment(faMobileMenuEl.outerHTML).querySelector('#mobile-menu');
const faPhMobileLink = faMobileClone.querySelector('a[href="/fa/penthouses-for-sale-in-dubai"]');
if (faPhMobileLink) {
  faPhMobileLink.classList.remove('text-ash');
  faPhMobileLink.classList.add('text-gold-400', 'font-semibold');
}

// ==========================================
// 1. ASSEMBLE ENGLISH PENTHOUSES HTML
// ==========================================
const enPenthousesHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>Penthouses for Sale in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Browse Dubai penthouses for sale — sky homes with private elevators, panoramic views, and wraparound terraces. Filter by area, price, and bedrooms. Curated by ZARIN advisors.">
  <meta name="keywords" content="penthouses for sale in Dubai, Dubai penthouses, buy penthouse Dubai, Downtown Dubai penthouse, Marina penthouse, Bluewaters penthouse, Palm Jumeirah penthouse">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/penthouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/penthouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/penthouses-for-sale-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Penthouses for Sale in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Browse Dubai penthouses for sale — sky homes with private elevators, panoramic views, and wraparound terraces. Curated by ZARIN advisors.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Penthouses for sale in Dubai">
  <meta property="og:url" content="https://zarinrealestate.com/penthouses-for-sale-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Penthouses for Sale in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Browse Dubai penthouses for sale — curated by ZARIN advisors.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80">

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
{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://zarinrealestate.com/"}, {"@type": "ListItem", "position": 2, "name": "Properties", "item": "https://zarinrealestate.com/properties"}, {"@type": "ListItem", "position": 3, "name": "For Sale", "item": "https://zarinrealestate.com/properties-for-sale"}, {"@type": "ListItem", "position": 4, "name": "Penthouses", "item": "https://zarinrealestate.com/penthouses-for-sale-in-dubai"}]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
{"@context": "https://schema.org", "@type": "CollectionPage", "@id": "https://zarinrealestate.com/penthouses-for-sale-in-dubai#collectionpage", "name": "Penthouses for Sale in Dubai", "url": "https://zarinrealestate.com/penthouses-for-sale-in-dubai", "description": "Browse Dubai penthouses for sale — sky homes with private elevators, panoramic views, and wraparound terraces across Downtown, Marina, Bluewaters, Palm Jumeirah, and Business Bay.", "isPartOf": {"@id": "https://zarinrealestate.com/#website"}, "mainEntity": {"@type": "ItemList", "numberOfItems": 6, "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "4BR Penthouse — Burj Vista", "url": "https://zarinrealestate.com/properties/ph-burj-vista-001", "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", "description": "Burj Khalifa fountain views from two terraces, private foyer, and a library.", "offers": {"@type": "Offer", "price": "8900000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "5BR Penthouse — Signature Sky Home", "url": "https://zarinrealestate.com/properties/ph-bluewaters-signature-002", "image": "https://images.unsplash.com/photo-1600596542815-fffd6beb5bf1?auto=format&fit=crop&w=800&q=80", "description": "Private elevator, infinity terrace, double-height living, panoramic sea and skyline.", "offers": {"@type": "Offer", "price": "32000000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 3, "item": {"@type": "Product", "name": "3BR Penthouse — Marina Gate Sky Home", "url": "https://zarinrealestate.com/properties/ph-marina-gate-003", "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", "description": "Direct elevator entry, wraparound terrace, and full marina skyline frontage.", "offers": {"@type": "Offer", "price": "12500000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 4, "item": {"@type": "Product", "name": "5BR Penthouse — Palm Crescent Sky Palace", "url": "https://zarinrealestate.com/properties/ph-palm-crescent-004", "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", "description": "Top-floor sky palace with private pool terrace, 360° sea views, and staff wing.", "offers": {"@type": "Offer", "price": "45000000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 5, "item": {"@type": "Product", "name": "3BR Penthouse — Bluewaters Crown", "url": "https://zarinrealestate.com/properties/ph-bluewaters-crown-005", "image": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80", "description": "Crown-level penthouse with private lift lobby, sea-facing terrace, and home cinema.", "offers": {"@type": "Offer", "price": "16500000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 6, "item": {"@type": "Product", "name": "4BR Penthouse — Burj Vista Signature", "url": "https://zarinrealestate.com/properties/ph-burj-vista-signature-006", "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", "description": "Unobstructed Burj Khalifa fountain views, two terraces, library, private foyer.", "offers": {"@type": "Offer", "price": "18500000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}]}}
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
{"@context": "https://schema.org", "@type": "FAQPage", "@id": "https://zarinrealestate.com/penthouses-for-sale-in-dubai#faqpage", "mainEntity": [{"@type": "Question", "name": "What is the average price of a penthouse in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "As of late 2026, the average price of a Dubai penthouse sits around AED 18 million, with the entry-level penthouses starting at AED 6 million in Business Bay and JVC. Mid-tier penthouses in Marina and Downtown typically range from AED 8 million to AED 25 million, while ultra-prime sky palaces on Palm Jumeirah, Bluewaters, and Burj Khalifa can exceed AED 30 million. Price per square foot for penthouses tends to run 25-50% higher than comparable standard apartments in the same tower, reflecting exclusivity and outdoor space."}}, {"@type": "Question", "name": "What is the difference between an apartment and a penthouse in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "An apartment is any residential unit within a tower, regardless of floor. A penthouse is specifically the top residential unit — typically the entire top floor or a corner portion of it — with premium features such as a private elevator lobby, larger built-up area, wraparound terrace, double-height ceilings, and panoramic views. Penthouses also often include premium finishing, dedicated service access, and roof-level amenities. The distinction is both physical and marketing-related, and RERA rules require accurate representation in listing materials."}}, {"@type": "Question", "name": "Do Dubai penthouses come with private elevators?", "acceptedAnswer": {"@type": "Answer", "text": "Most premium Dubai penthouses built since 2015 include some form of private elevator access — either a dedicated key-activated lift landing that opens directly into the residence, or a fully private lift car serving only the penthouse floor. Older towers in Dubai Marina and JBR may only offer a semi-private landing. ZARIN advisors confirm elevator arrangements during the first viewing call, since direct elevator access is a key consideration for many discerning buyers seeking privacy and security."}}, {"@type": "Question", "name": "Which areas in Dubai have the best penthouses?", "acceptedAnswer": {"@type": "Answer", "text": "Dubai's strongest penthouse clusters are Downtown Dubai (Burj Vista, Burj Khalifa, The Address Sky View), Bluewaters Island (signature sky homes with sea and skyline views), Palm Jumeirah (Crescent penthouse palaces), Dubai Marina (Marina Gate, Princess Tower, Cayan), and Business Bay (Sentimo, Madison Residences). Each area has a distinct price band and lifestyle: Downtown for Burj views, Bluewaters for sea and skyline, Palm for beachfront privacy, Marina for nightlife access, and Business Bay for value entry."}}, {"@type": "Question", "name": "Are penthouses a good investment in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "Dubai penthouses can deliver strong investment outcomes, but performance varies significantly by tower, view, and entry price. Prime penthouses in Downtown and Palm Jumeirah have historically delivered 8-15% annual capital appreciation over the past five years, alongside rental yields of 4-6%. However, penthouses in oversupplied areas like Business Bay may face weaker resale liquidity. ZARIN provides a candid, data-driven assessment per listing — covering comparables, service charges, days on market, and exit liquidity — before any commitment."}}, {"@type": "Question", "name": "What is the minimum price for a penthouse in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "The minimum entry price for a genuine penthouse in Dubai is around AED 6 million, typically a 2- or 3-bedroom top-floor unit in Business Bay or JVC. Below this threshold, listings marketed as 'penthouses' are usually top-floor apartments without the defining penthouse features (private elevator, terrace, double-height space). For a true penthouse experience — with private lift, wraparound terrace, and panoramic views — expect to budget from AED 10 million in Marina and from AED 15 million in Downtown or Bluewaters."}}, {"@type": "Question", "name": "What amenities do Dubai penthouses typically include?", "acceptedAnswer": {"@type": "Answer", "text": "Standard amenities in Dubai penthouses include private elevator access, dedicated service entrance, wraparound or large terrace, smart home automation, premium imported kitchens (Miele, Gaggenau, or equivalent), and at least two covered parking spaces. Higher-spec penthouses add private plunge pools, rooftop gardens, double-height living, dedicated staff rooms, cinema rooms, and integrated security with biometric entry. The building itself typically adds a pool, gym, concierge, and 24-hour security — services that anchor long-term resale value."}}, {"@type": "Question", "name": "Can I customize a penthouse before purchase?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — but the degree of customization depends on whether you buy ready or off-plan. For ready penthouses, you can usually reconfigure internal non-structural walls, change finishes, and upgrade MEP within DLD and strata rules; structural changes are typically prohibited. For off-plan penthouses purchased early in construction, developers often allow layout customization, kitchen and bathroom selection, and smart-home integration. ZARIN coordinates with developers and contractors to scope customization options before the contract is signed."}}]}
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
{"@context": "https://schema.org", "@type": "WebPage", "@id": "https://zarinrealestate.com/penthouses-for-sale-in-dubai#webpage", "url": "https://zarinrealestate.com/penthouses-for-sale-in-dubai", "name": "Penthouses for Sale in Dubai | ZARIN Real Estate", "isPartOf": {"@id": "https://zarinrealestate.com/#website"}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#hero-headline", "#tldr-summary"]}}
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
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Penthouses for sale hero">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">Penthouses &middot; Sky-High Living</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6">Penthouses<br>for <span class="text-gold-gradient">Sale in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-6 font-light">Sky homes with private elevators, panoramic views, and wraparound terraces across Downtown, Marina, Bluewaters, Palm Jumeirah, and Business Bay. Every penthouse on this page has been personally inspected by a ZARIN advisor — no stale inventory, no inflated prices.</p>
        <p class="text-sm text-ash max-w-2xl leading-relaxed mb-8">Penthouses in Dubai start from around AED 6 million in Business Bay and JVC, with mid-tier sky homes in Marina and Downtown typically ranging from AED 8 million to AED 25 million. Ultra-prime penthouses on Palm Jumeirah, Bluewaters, and Burj Khalifa can exceed AED 30 million, with the rarest sky palaces trading above AED 80 million. Our advisors apply a strict five-feature definition — top-floor position, private elevator, wraparound terrace, panoramic glazing, and architectural ceiling height — so every listing here is a true penthouse, not just a top-floor apartment priced at a premium.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#penthouse-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse penthouses">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
            Browse Penthouses
          </a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to a penthouse advisor">Speak to Advisor</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">85+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Penthouse Listings</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">AED 18M</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Avg Penthouse Price</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">5,400 sqft</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Avg Built-up Area</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">5</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Top Penthouse Areas</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. FILTER BAR (sticky) -->
  <section class="sticky top-0 z-50 glass border-b border-white-line py-4" aria-label="Penthouse filters">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex items-center gap-2 flex-wrap"><div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold mr-1">Bedrooms:</div>
          <button type="button" class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="bedrooms" data-value="All">All</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="2BR">2BR</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="3BR">3BR</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="4BR">4BR</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="5BR+">5BR+</button></div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <div class="flex items-center gap-2 flex-wrap"><div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold mr-1">Price:</div>
          <button type="button" class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="price" data-value="Any Price">Any Price</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="Under AED 8M">Under AED 8M</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="8M – 15M">8M – 15M</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="15M – 30M">15M – 30M</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="30M+">30M+</button></div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <div class="flex items-center gap-2 flex-wrap"><div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold mr-1">Area:</div>
          <button type="button" class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="area" data-value="All Areas">All Areas</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Marina">Marina</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Downtown">Downtown</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Bluewaters">Bluewaters</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Palm Jumeirah">Palm Jumeirah</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Business Bay">Business Bay</button></div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <div class="hidden md:block flex-1"></div>
        <a href="/consultation" class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="Request a custom penthouse search">Custom Search →</a>
      </div>
      <p class="mt-3 text-xs text-slate">Showing 6 featured penthouses. Filter chips below narrow by bedroom count, price band, or area — for our full inventory of 85+ penthouse listings, request a custom shortlist within 24 hours.</p>
    </div>
  </section>

  <!-- 3. PENTHOUSE LISTINGS GRID -->
  <section id="penthouse-grid" class="bg-ink-900 py-16 md:py-20" aria-label="Penthouse listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">Featured Penthouses</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">Curated Sky Homes</h2>
        </div>
        <p class="text-sm text-ash max-w-md">A selection of current ZARIN-mandated penthouses across Dubai's most prestigious towers. Each residence has been personally inspected by an advisor. For our complete inventory of 85+ penthouse listings, request a custom search.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="penthouse-cards-container">

        <!-- Listing 1: 4BR Penthouse Burj Vista -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="4" data-price="8900000" data-area="downtown-dubai">
          <a href="/properties/ph-burj-vista-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR Penthouse — Burj Vista">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="4-bedroom penthouse in Downtown Dubai with Burj Khalifa view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Sky Home</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 8.9M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Penthouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Penthouse &middot; Burj Vista</h3>
            <div class="text-sm text-ash mb-3">Downtown Dubai &middot; 4,800 sqft</div>
            <p class="text-xs text-slate leading-relaxed mb-4">Burj Khalifa fountain views from two terraces, private foyer, and a library.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,854</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 5BR Penthouse Signature Sky Home -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="5" data-price="32000000" data-area="bluewaters-island">
          <a href="/properties/ph-bluewaters-signature-002" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 5BR Penthouse — Signature Sky Home">
            <img src="https://images.unsplash.com/photo-1600596542815-fffd6beb5bf1?auto=format&fit=crop&w=800&q=80" alt="5-bedroom penthouse on Bluewaters Island with 360-degree sea and skyline views" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">360° View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 32M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Penthouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">5BR Penthouse &middot; Signature Sky Home</h3>
            <div class="text-sm text-ash mb-3">Bluewaters Island &middot; 8,200 sqft</div>
            <p class="text-xs text-slate leading-relaxed mb-4">Private elevator, infinity terrace, double-height living, panoramic sea and skyline.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">5</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">6</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 3,900</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 3BR Penthouse Marina Gate Sky Home -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="3" data-price="12500000" data-area="dubai-marina">
          <a href="/properties/ph-marina-gate-003" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR Penthouse — Marina Gate Sky Home">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="3-bedroom penthouse in Dubai Marina with private elevator and sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Private Elevator</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 12.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Penthouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Penthouse &middot; Marina Gate Sky Home</h3>
            <div class="text-sm text-ash mb-3">Dubai Marina &middot; 3,600 sqft</div>
            <p class="text-xs text-slate leading-relaxed mb-4">Direct elevator entry, wraparound terrace, and full marina skyline frontage.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 3,472</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 5BR Penthouse Palm Crescent Sky Palace -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="5" data-price="45000000" data-area="palm-jumeirah">
          <a href="/properties/ph-palm-crescent-004" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 5BR Penthouse — Palm Crescent Sky Palace">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="5-bedroom penthouse on Palm Jumeirah Crescent with sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Sky Palace</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 45M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Penthouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">5BR Penthouse &middot; Palm Crescent Sky Palace</h3>
            <div class="text-sm text-ash mb-3">Palm Jumeirah &middot; 11,200 sqft</div>
            <p class="text-xs text-slate leading-relaxed mb-4">Top-floor sky palace with private pool terrace, 360° sea views, and staff wing.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">5</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">7</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 4,018</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 3BR Penthouse Bluewaters Crown -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="3" data-price="16500000" data-area="bluewaters-island">
          <a href="/properties/ph-bluewaters-crown-005" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3BR Penthouse — Bluewaters Crown">
            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80" alt="3-bedroom penthouse on Bluewaters Island with sea view and private elevator" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Sea View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 16.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Penthouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Penthouse &middot; Bluewaters Crown</h3>
            <div class="text-sm text-ash mb-3">Bluewaters Island &middot; 4,100 sqft</div>
            <p class="text-xs text-slate leading-relaxed mb-4">Crown-level penthouse with private lift lobby, sea-facing terrace, and home cinema.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 4,024</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 4BR Penthouse Burj Vista Signature -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="4" data-price="18500000" data-area="downtown-dubai">
          <a href="/properties/ph-burj-vista-signature-006" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4BR Penthouse — Burj Vista Signature">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="4-bedroom penthouse in Downtown Dubai with unobstructed Burj Khalifa view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">Burj View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 18.5M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Penthouse</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Penthouse &middot; Burj Vista Signature</h3>
            <div class="text-sm text-ash mb-3">Downtown Dubai &middot; 4,800 sqft</div>
            <p class="text-xs text-slate leading-relaxed mb-4">Unobstructed Burj Khalifa fountain views, two terraces, library, private foyer.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 3,854</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- No match fallback state -->
      <div id="no-match-state" class="hidden text-center py-16 bg-ink-850 border border-white-line rounded-sm mt-8">
        <p class="text-bone font-semibold text-lg mb-2">No penthouses match your selected filters.</p>
        <p class="text-ash text-sm mb-6">We have access to 85+ active and off-market penthouse listings across Dubai's prime towers.</p>
        <button type="button" id="reset-filter-btn" class="px-6 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase rounded-xs hover:bg-gold-300 transition-colors">Reset All Filters</button>
      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">This is a curated sample. ZARIN has access to 85+ active penthouse listings across Dubai's prime towers. Tell us your criteria — bedrooms, view, area, budget — and we'll deliver a tailored shortlist within 24 hours.</p>
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request custom penthouse search">
          Request Custom Search
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- 4. BROWSE BY VIEW -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Browse penthouses by view">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by View</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Choose Your Sky</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">A penthouse is defined as much by what it looks out on as by what it contains. These are the five view profiles that consistently drive penthouse demand in Dubai — each with its own price band, neighbourhood cluster, and lifestyle character.</p>
        <p class="text-ash mt-4 max-w-3xl mx-auto text-sm">Burj Khalifa view penthouses are concentrated in Downtown towers like Burj Vista, Burj Khalifa itself, and The Address Sky View, and they command a 15-25% premium over comparable non-view units. Sea view penthouses cluster on Bluewaters, Palm Jumeirah Crescent, and JBR seafront — they hold resale value well but require careful service-charge analysis. Marina view penthouses in Marina Gate, Princess Tower, and Cayan offer skyline and yacht-berth panoramas at a more accessible entry point. Skyline view penthouses span Business Bay and Downtown fringes, while golf course view penthouses — mostly in Dubai Hills and Emirates Hills — appeal to buyers seeking quiet, green outlooks rather than urban drama.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/penthouses-for-sale-in-dubai?view=burj-khalifa-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="View penthouses with burj khalifa view">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="Burj Khalifa fountain view from a penthouse terrace" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Burj Khalifa View</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Penthouses with unobstructed Burj Khalifa and fountain views in Downtown Dubai.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 8.9M</span>
              <span class="text-slate">28+ listings</span>
            </div>
          </div>
        </a>

        <a href="/penthouses-for-sale-in-dubai?view=sea-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="View penthouses with sea view">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Penthouse terrace with panoramic Arabian Gulf sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Sea View</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Sea-facing penthouses on Palm Jumeirah, Bluewaters, and JBR fronts.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 12.5M</span>
              <span class="text-slate">19+ listings</span>
            </div>
          </div>
        </a>

        <a href="/penthouses-for-sale-in-dubai?view=marina-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="View penthouses with marina view">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="Dubai Marina skyline view from a penthouse balcony" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Marina View</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Sky homes overlooking the Dubai Marina skyline and yacht berths.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 9.2M</span>
              <span class="text-slate">16+ listings</span>
            </div>
          </div>
        </a>

        <a href="/penthouses-for-sale-in-dubai?view=skyline-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="View penthouses with skyline view">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80" alt="Dubai skyline view from a high-floor Business Bay penthouse" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Skyline View</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Panoramic Dubai skyline penthouses across Business Bay and Downtown fringes.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 7.8M</span>
              <span class="text-slate">12+ listings</span>
            </div>
          </div>
        </a>

        <a href="/penthouses-for-sale-in-dubai?view=golf-course-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="View penthouses with golf course view">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="Golf course view from a penthouse terrace overlooking Dubai Hills" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Golf Course View</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Penthouses overlooking Dubai Hills golf fairways and greens — quiet, elevated aspect.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 11.5M</span>
              <span class="text-slate">10+ listings</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 5. BROWSE BY AREA -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Browse by area">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by Area</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Dubai's Penthouse Districts</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Five neighbourhoods dominate Dubai's penthouse market — each with its own price band, view profile, and lifestyle tempo. Click to see what is currently available in each district.</p>
        <p class="text-ash mt-4 max-w-3xl mx-auto text-sm">Downtown Dubai remains the gravitational centre of Dubai's penthouse market, anchored by Burj Khalifa, Burj Vista, and The Address Sky View — Burj and fountain views here command the city's highest per-square-foot pricing. Dubai Marina offers the broadest penthouse inventory with the most accessible entry points, particularly in Marina Gate, Princess Tower, and Cayan Tower. Bluewaters Island hosts a small but ultra-premium collection of sky homes with full sea and skyline exposure. Palm Jumeirah penthouses — concentrated on the Crescent and in signature towers like Palm Tower and Six Senses — combine beachfront access with elevated views. Business Bay rounds out the list as the value entry district, with strong new-build penthouse stock at lower per-square-foot pricing.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View penthouses in Downtown Dubai">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="Downtown Dubai with Burj Khalifa" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Downtown Dubai</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 8M – 45M</span>
              <span class="text-ash">28+ penthouses</span>
            </div>
          </div>
        </a>

        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View penthouses in Dubai Marina">
          <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80" alt="Dubai Marina skyline at dusk" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Dubai Marina</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 6M – 25M</span>
              <span class="text-ash">22+ penthouses</span>
            </div>
          </div>
        </a>

        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View penthouses in Bluewaters Island">
          <img src="https://images.unsplash.com/photo-1600596542815-fffd6beb5bf1?auto=format&fit=crop&w=800&q=80" alt="Bluewaters Island residences" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Bluewaters Island</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 12M – 35M</span>
              <span class="text-ash">9+ penthouses</span>
            </div>
          </div>
        </a>

        <a href="/areas/palm-jumeirah" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View penthouses in Palm Jumeirah">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Palm Jumeirah aerial sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Palm Jumeirah</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 15M – 80M</span>
              <span class="text-ash">14+ penthouses</span>
            </div>
          </div>
        </a>

        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View penthouses in Business Bay">
          <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80" alt="Business Bay skyline" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Business Bay</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 5M – 18M</span>
              <span class="text-ash">12+ penthouses</span>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center mt-10"><a href="/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="View all Dubai areas">View All 45+ Areas<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 6. WHAT MAKES A DUBAI PENTHOUSE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="What makes a Dubai penthouse">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 mb-16">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Penthouse Anatomy</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">What Makes a Dubai Penthouse</h2>
          <p class="text-lg text-ash leading-relaxed mb-6">In Dubai, the word "penthouse" is sometimes used loosely — top-floor apartments are regularly marketed as penthouses even when they lack the defining features. ZARIN advisors apply a stricter test: a genuine penthouse combines top-floor position, private elevator access, generous outdoor terrace, panoramic glazing, and architectural drama. Anything less is simply a top-floor apartment priced at a premium.</p>
          <p class="text-sm text-ash leading-relaxed mb-6">Each of the five features below contributes to long-term value. A penthouse missing two or more of these features is unlikely to command the resale premium that defines a true penthouse asset — and we will tell you so before you commit. Our advisors walk every listed penthouse with these criteria in mind and document the findings in a written inspection report.</p>
          <p class="text-sm text-ash leading-relaxed">Founded in 2023 by an advisor who has been active in Dubai real estate since 2005, ZARIN applies consistent definitions across our entire penthouse inventory. Discerning buyers rely on this consistency when comparing options across towers and neighbourhoods.</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="bg-ink-900 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">5</div><div class="text-sm font-bold text-bone mb-1">Defining Features</div><div class="text-xs text-slate">Top floor, lift, terrace, glazing, ceiling height</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">AED 6M+</div><div class="text-sm font-bold text-bone mb-1">True Penthouse Floor</div><div class="text-xs text-slate">Below this is a top-floor apartment</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">800+ sqft</div><div class="text-sm font-bold text-bone mb-1">Typical Terrace</div><div class="text-xs text-slate">Outdoor living is non-negotiable</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">5.5-7m</div><div class="text-sm font-bold text-bone mb-1">Ceiling Height</div><div class="text-xs text-slate">For double-height living</div></div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">Top-Floor Position</h3>
          <p class="text-sm text-ash leading-relaxed">A true penthouse sits on the highest residential floor of its tower — often with roof-level access, private lobby, and no neighbours above. This exclusivity defines the asset class and underpins resale value.</p>
        </div>

        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8V4m0 0h4M4 4v4m8-4v4m0-4h4m-4 0v4m8 0v4m0-4h-4m4 0v4m-8 4v4m0-4h4m-4 0v4m8 0v4m0-4h-4m4 0v4"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">Private Elevator</h3>
          <p class="text-sm text-ash leading-relaxed">Most premium Dubai penthouses include a dedicated lift landing — direct, key-activated entry into the residence. Some developments even install a private lift car exclusively for the penthouse floor.</p>
        </div>

        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">Wraparound Terrace</h3>
          <p class="text-sm text-ash leading-relaxed">Outdoor living is a hallmark of Dubai penthouses — expect deep wraparound terraces of 800 sqft or more, often with plunge pool or lounging space, and panoramic views of the city, sea, or both.</p>
        </div>

        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">Panoramic Glazing</h3>
          <p class="text-sm text-ash leading-relaxed">Floor-to-ceiling windows on at least two sides are standard — often three or four — bringing in daylight from dawn to dusk and framing Dubai's skyline as a living artwork inside the residence.</p>
        </div>

        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">Double-Height Ceilings</h3>
          <p class="text-sm text-ash leading-relaxed">Many Dubai penthouses feature double-height living spaces of 5.5 to 7 metres — architectural drama that distinguishes the penthouse from the apartments below and increases the sense of arrival.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. WHY BUY A PENTHOUSE WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Why buy a penthouse with ZARIN">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why ZARIN</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">An Advisor Who Has Actually Walked the Sky Home</h2>
          <p class="text-lg text-ash leading-relaxed mb-6">Penthouse transactions are too consequential to leave to stock photography and remote viewings. Every penthouse ZARIN lists has been physically inspected by one of our advisors — we walk the floor, photograph the view at three different times of day, test the elevator access, and assess the service-charge economics before we present it to a client.</p>
          <p class="text-sm text-ash leading-relaxed mb-8">Our founder has been active in Dubai real estate since 2005, and the firm was established in 2023 as a dedicated advisory for discerning buyers. We work in English, Arabic, and Farsi; we charge a transparent 2% buyer commission aligned with RERA guidance; and we deliver a tailored shortlist within 24 hours of consultation. For premium buyers seeking a true penthouse rather than a marketing exercise, this is the difference that matters.</p>
          <div class="space-y-3 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Every penthouse personally inspected</div><div class="text-xs text-slate mt-1">We don't list a penthouse we haven't walked.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">View-verified photography</div><div class="text-xs text-slate mt-1">Real photos at three times of day, not stock renders.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">2% standard commission, no hidden fees</div><div class="text-xs text-slate mt-1">Published, transparent, RERA-compliant.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Trilingual advisory: EN, AR, FA</div><div class="text-xs text-slate mt-1">Direct communication in your preferred language.</div></div></div>
          </div>
          <div class="grid grid-cols-2 gap-3 mb-8">
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>RERA Licensed</div>
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>24-Hour Response</div>
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Trilingual EN / AR / FA</div>
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>No Obligation</div>
          </div>
          <a href="/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Learn more about ZARIN">Learn More About ZARIN<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-900 border border-gold-line bg-gold-soft rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">85+</div><div class="text-sm font-bold text-bone mb-1">Penthouses Inspected</div><div class="text-xs text-slate">Personally verified by advisors</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">AED 18M</div><div class="text-sm font-bold text-bone mb-1">Avg Penthouse Sold</div><div class="text-xs text-slate">Across our mandate history</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">24hr</div><div class="text-sm font-bold text-bone mb-1">Shortlist Delivery</div><div class="text-xs text-slate">After consultation</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">since 2005</div><div class="text-sm font-bold text-bone mb-1">Dubai Experience</div><div class="text-xs text-slate">Founder-led advisory</div></div>
        </div>
      </div>
      <div class="mt-16 grid md:grid-cols-3 gap-6 pt-12 border-t border-white-line">
        <div>
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Phone</div>
          <a href="tel:+971586901231" class="text-lg font-bold text-bone hover:text-gold-400 transition-colors" aria-label="Call us at +971 58 690 1231">+971 58 690 1231</a>
        </div>
        <div>
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Email</div>
          <a href="mailto:advisory@zarinrealestate.com" class="text-lg font-bold text-bone hover:text-gold-400 transition-colors" aria-label="Email us at advisory@zarinrealestate.com">advisory@zarinrealestate.com</a>
        </div>
        <div>
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">WhatsApp</div>
          <a href="https://wa.me/971586901231" class="text-lg font-bold text-bone hover:text-gold-400 transition-colors" aria-label="Message us on WhatsApp">Chat on WhatsApp →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. FAQ -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Penthouse buying FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Penthouse Buying FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Common Penthouse Questions</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">Eight questions we hear most often from premium buyers considering a Dubai penthouse. Each answer reflects current 2026 market conditions and is consistent with the FAQPage schema embedded in this page.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-850 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the average price of a penthouse in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">As of late 2026, the average price of a Dubai penthouse sits around AED 18 million, with the entry-level penthouses starting at AED 6 million in Business Bay and JVC. Mid-tier penthouses in Marina and Downtown typically range from AED 8 million to AED 25 million, while ultra-prime sky palaces on Palm Jumeirah, Bluewaters, and Burj Khalifa can exceed AED 30 million. Price per square foot for penthouses tends to run 25-50% higher than comparable standard apartments in the same tower, reflecting exclusivity and outdoor space.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the difference between an apartment and a penthouse in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">An apartment is any residential unit within a tower, regardless of floor. A penthouse is specifically the top residential unit — typically the entire top floor or a corner portion of it — with premium features such as a private elevator lobby, larger built-up area, wraparound terrace, double-height ceilings, and panoramic views. Penthouses also often include premium finishing, dedicated service access, and roof-level amenities. The distinction is both physical and marketing-related, and RERA rules require accurate representation in listing materials.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Do Dubai penthouses come with private elevators?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Most premium Dubai penthouses built since 2015 include some form of private elevator access — either a dedicated key-activated lift landing that opens directly into the residence, or a fully private lift car serving only the penthouse floor. Older towers in Dubai Marina and JBR may only offer a semi-private landing. ZARIN advisors confirm elevator arrangements during the first viewing call, since direct elevator access is a key consideration for many discerning buyers seeking privacy and security.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Which areas in Dubai have the best penthouses?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Dubai's strongest penthouse clusters are Downtown Dubai (Burj Vista, Burj Khalifa, The Address Sky View), Bluewaters Island (signature sky homes with sea and skyline views), Palm Jumeirah (Crescent penthouse palaces), Dubai Marina (Marina Gate, Princess Tower, Cayan), and Business Bay (Sentimo, Madison Residences). Each area has a distinct price band and lifestyle: Downtown for Burj views, Bluewaters for sea and skyline, Palm for beachfront privacy, Marina for nightlife access, and Business Bay for value entry.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Are penthouses a good investment in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Dubai penthouses can deliver strong investment outcomes, but performance varies significantly by tower, view, and entry price. Prime penthouses in Downtown and Palm Jumeirah have historically delivered 8-15% annual capital appreciation over the past five years, alongside rental yields of 4-6%. However, penthouses in oversupplied areas like Business Bay may face weaker resale liquidity. ZARIN provides a candid, data-driven assessment per listing — covering comparables, service charges, days on market, and exit liquidity — before any commitment.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What is the minimum price for a penthouse in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">The minimum entry price for a genuine penthouse in Dubai is around AED 6 million, typically a 2- or 3-bedroom top-floor unit in Business Bay or JVC. Below this threshold, listings marketed as 'penthouses' are usually top-floor apartments without the defining penthouse features (private elevator, terrace, double-height space). For a true penthouse experience — with private lift, wraparound terrace, and panoramic views — expect to budget from AED 10 million in Marina and from AED 15 million in Downtown or Bluewaters.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">What amenities do Dubai penthouses typically include?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Standard amenities in Dubai penthouses include private elevator access, dedicated service entrance, wraparound or large terrace, smart home automation, premium imported kitchens (Miele, Gaggenau, or equivalent), and at least two covered parking spaces. Higher-spec penthouses add private plunge pools, rooftop gardens, double-height living, dedicated staff rooms, cinema rooms, and integrated security with biometric entry. The building itself typically adds a pool, gym, concierge, and 24-hour security — services that anchor long-term resale value.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">Can I customize a penthouse before purchase?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes — but the degree of customization depends on whether you buy ready or off-plan. For ready penthouses, you can usually reconfigure internal non-structural walls, change finishes, and upgrade MEP within DLD and strata rules; structural changes are typically prohibited. For off-plan penthouses purchased early in construction, developers often allow layout customization, kitchen and bathroom selection, and smart-home integration. ZARIN coordinates with developers and contractors to scope customization options before the contract is signed.</div>
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
    (function(){
      const chips = document.querySelectorAll('.filter-chip');
      const cards = document.querySelectorAll('.penthouse-card');
      const noMatchState = document.getElementById('no-match-state');
      const resetBtn = document.getElementById('reset-filter-btn');

      function parsePrice(card) {
        const pAttr = card.getAttribute('data-price');
        if (pAttr) return parseInt(pAttr, 10);
        const priceEl = card.querySelector('.absolute.top-3.right-3');
        if (!priceEl) return 0;
        const m = priceEl.textContent.match(/AED\\s*([\\d,.]+)\\s*([MK])/i);
        if (!m) return 0;
        let n = parseFloat(m[1].replace(/,/g, ''));
        if (m[2].toUpperCase() === 'M') n *= 1000000;
        return n;
      }

      function applyFilters() {
        const active = {};
        chips.forEach(c => {
          if (c.classList.contains('active')) {
            active[c.dataset.group] = c.dataset.value;
          }
        });

        let visibleCount = 0;
        cards.forEach(card => {
          let show = true;
          // bedrooms
          const cardBeds = parseInt(card.dataset.bedrooms, 10);
          const bedFilter = active['bedrooms'] || 'All';
          if (bedFilter !== 'All') {
            if (bedFilter === '5BR+') { if (cardBeds < 5) show = false; }
            else { const n = parseInt(bedFilter, 10); if (cardBeds !== n) show = false; }
          }
          // price
          const priceFilter = active['price'] || 'Any Price';
          if (priceFilter !== 'Any Price') {
            const priceNum = parsePrice(card);
            if (priceFilter === 'Under AED 8M') { if (priceNum >= 8000000) show = false; }
            else if (priceFilter === '8M – 15M') { if (priceNum < 8000000 || priceNum > 15000000) show = false; }
            else if (priceFilter === '15M – 30M') { if (priceNum < 15000000 || priceNum > 30000000) show = false; }
            else if (priceFilter === '30M+') { if (priceNum < 30000000) show = false; }
          }
          // area
          const areaFilter = active['area'] || 'All Areas';
          if (areaFilter !== 'All Areas') {
            const cardArea = (card.dataset.area || '').replace(/-/g, ' ').toLowerCase();
            const filterArea = areaFilter.toLowerCase();
            if (!cardArea.includes(filterArea)) show = false;
          }

          if (show) {
            card.classList.remove('hidden-card');
            visibleCount++;
          } else {
            card.classList.add('hidden-card');
          }
        });

        if (noMatchState) {
          if (visibleCount === 0) noMatchState.classList.remove('hidden');
          else noMatchState.classList.add('hidden');
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
          applyFilters();
        });
      });

      resetBtn?.addEventListener('click', () => {
        ['bedrooms', 'price', 'area'].forEach(grp => {
          chips.forEach(c => {
            if (c.dataset.group === grp) {
              const isDefault = c.dataset.value === 'All' || c.dataset.value === 'Any Price' || c.dataset.value === 'All Areas';
              c.classList.toggle('active', isDefault);
              c.setAttribute('aria-pressed', isDefault ? 'true' : 'false');
            }
          });
        });
        applyFilters();
      });
    })();
  </script>
  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>
`;

// ==========================================
// 2. ASSEMBLE PERSIAN PENTHOUSES HTML
// ==========================================
const faPenthousesHtml = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>خرید پنت‌هاوس در دبی | املاک و مستغلات زرین</title>
  <meta name="description" content="مجموعه پنت‌هاوس‌های مجلل و اختصاصی برای خرید در دبی — خانه‌های آسمانی با آسانسور اختصاصی، چشم‌انداز پانوراما و تراس‌های سرتاسری در داون‌تاون، مارینا، بلوواترز و پالم جمیرا.">
  <meta name="keywords" content="خرید پنت‌هاوس در دبی, پنت‌هاوس دبی, قیمت پنت‌هاوس در دبی, پنت‌هاوس داون‌تاون, پنت‌هاوس مارینا, پنت‌هاوس پالم جمیرا, پنت‌هاوس بلوواترز">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/penthouses-for-sale-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/penthouses-for-sale-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="خرید پنت‌هاوس در دبی | املاک و مستغلات زرین">
  <meta property="og:description" content="مجموعه پنت‌هاوس‌های مجلل و لوکس در دبی — با آسانسور اختصاصی، دید پانوراما و تراس‌های عمیق. کارشناسی‌شده توسط مشاوران زرین.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="خرید پنت‌هاوس در دبی">
  <meta property="og:url" content="https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai">
  <meta property="og:site_name" content="املاک و مستغلات زرین">
  <meta property="og:locale" content="fa_IR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="خرید پنت‌هاوس در دبی | املاک و مستغلات زرین">
  <meta name="twitter:description" content="مجموعه پنت‌هاوس‌های مجلل و لوکس در دبی — کارشناسی‌شده توسط مشاوران زرین.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80">

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
{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "صفحه اصلی", "item": "https://zarinrealestate.com/fa/"}, {"@type": "ListItem", "position": 2, "name": "املاک", "item": "https://zarinrealestate.com/fa/properties"}, {"@type": "ListItem", "position": 3, "name": "برای خرید", "item": "https://zarinrealestate.com/fa/properties-for-sale"}, {"@type": "ListItem", "position": 4, "name": "پنت‌هاوس‌ها", "item": "https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai"}]}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
{"@context": "https://schema.org", "@type": "CollectionPage", "@id": "https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai#collectionpage", "name": "خرید پنت‌هاوس در دبی", "url": "https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai", "description": "مجموعه پنت‌هاوس‌های مجلل و اختصاصی برای خرید در دبی — با آسانسور اختصاصی، چشم‌انداز پانوراما و تراس‌های سرتاسری.", "isPartOf": {"@id": "https://zarinrealestate.com/#website"}, "mainEntity": {"@type": "ItemList", "numberOfItems": 6, "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "پنت‌هاوس ۴ خوابه — برج ویستا", "url": "https://zarinrealestate.com/fa/properties/ph-burj-vista-001", "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "8900000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "پنت‌هاوس ۵ خوابه — سیگنیچر اسکای هوم", "url": "https://zarinrealestate.com/fa/properties/ph-bluewaters-signature-002", "image": "https://images.unsplash.com/photo-1600596542815-fffd6beb5bf1?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "32000000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 3, "item": {"@type": "Product", "name": "پنت‌هاوس ۳ خوابه — مارینا گیت", "url": "https://zarinrealestate.com/fa/properties/ph-marina-gate-003", "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "12500000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 4, "item": {"@type": "Product", "name": "پنت‌هاوس ۵ خوابه — کاخ آسمانی پالم کرسنت", "url": "https://zarinrealestate.com/fa/properties/ph-palm-crescent-004", "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "45000000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 5, "item": {"@type": "Product", "name": "پنت‌هاوس ۳ خوابه — بلوواترز کراون", "url": "https://zarinrealestate.com/fa/properties/ph-bluewaters-crown-005", "image": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "16500000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}, {"@type": "ListItem", "position": 6, "item": {"@type": "Product", "name": "پنت‌هاوس ۴ خوابه — برج ویستا سیگنیچر", "url": "https://zarinrealestate.com/fa/properties/ph-burj-vista-signature-006", "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "18500000", "priceCurrency": "AED", "availability": "https://schema.org/InStock"}}}]}}
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
{"@context": "https://schema.org", "@type": "FAQPage", "@id": "https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai#faqpage", "mainEntity": [{"@type": "Question", "name": "میانگین قیمت پنت‌هاوس در دبی در سال ۲۰۲۶ چقدر است؟", "acceptedAnswer": {"@type": "Answer", "text": "در اواخر سال ۲۰۲۶، میانگین قیمت پنت‌هاوس در دبی حدود ۱۸ میلیون درهم است. پنت‌هاوس‌های اقتصادی‌تر از ۶ میلیون درهم در بیزنس بی آغاز می‌شوند، در حالی که در مارینا و داون‌تاون بین ۸ تا ۲۵ میلیون درهم و در پالم جمیرا و بلوواترز عمارت‌های آسمانی به بالای ۳۰ تا ۸۰ میلیون درهم می‌رسند."}}, {"@type": "Question", "name": "تفاوت آپارتمان معمولی با پنت‌هاوس در دبی در چیست؟", "acceptedAnswer": {"@type": "Answer", "text": "پنت‌هاوس به‌طور خاص به واحد مسکونی بالاترین طبقه برج اطلاق می‌شود که ویژگی‌های متمایزی مانند لابی آسانسور اختصاصی، تراس‌های سرتاسری وسیع، سقف‌های دابل‌هیت (ارتفاع دوبل) و دید ۳۶۰ درجه پانوراما دارد."}}, {"@type": "Question", "name": "آیا پنت‌هاوس‌های دبی دارای آسانسور با ورودی اختصاصی هستند؟", "acceptedAnswer": {"@type": "Answer", "text": "اکثر پنت‌هاوس‌های مجلل دبی که از سال ۲۰۱۵ به بعد ساخته شده‌اند، دارای آسانسور اختصاصی با کلید هوشمند هستند که مستقیماً داخل واحد یا لابی ورودی خصوصی باز می‌شود."}}, {"@type": "Question", "name": "کدام مناطق دبی بهترین پنت‌هاوس‌ها را دارند؟", "acceptedAnswer": {"@type": "Answer", "text": "داون‌تاون دبی (برج خلیفه و برج ویستا)، جزیره بلوواترز، پالم جمیرا، دبی مارینا (مارینا گیت) و بیزنس بی شاخص‌ترین قطب‌های پنت‌هاوس در دبی هستند."}}, {"@type": "Question", "name": "آیا خرید پنت‌هاوس در دبی سرمایه‌گذاری مناسبی است؟", "acceptedAnswer": {"@type": "Answer", "text": "پنت‌هاوس‌های اصیل در مناطق شاخص دبی طی پنج سال گذشته رشد ارزش سرمایه‌ای سالانه ۸ تا ۱۵ درصد و بازده اجاره‌ای ۴ تا ۶ درصد به ثبت رسانده‌اند و به دلیل نایاب بودن موقعیت بالاترین طبقه، ارزش خود را به‌خوبی حفظ می‌کنند."}}, {"@type": "Question", "name": "کف قیمت ورود برای خرید یک پنت‌هاوس واقعی در دبی چقدر است؟", "acceptedAnswer": {"@type": "Answer", "text": "کف قیمت ورود برای یک پنت‌هاوس واقعی در دبی با استانداردهای رسمی حدود ۶ میلیون درهم در بیزنس بی است؛ برای پنت‌هاوس‌های شاخص با تراس‌های عمیق و آسانسور مستقیم در مارینا از ۱۰ میلیون و در داون‌تاون یا بلوواترز از ۱۵ میلیون درهم شروع می‌شود."}}, {"@type": "Question", "name": "پنت‌هاوس‌های دبی معمولاً شامل چه امکاناتی هستند؟", "acceptedAnswer": {"@type": "Answer", "text": "امکانات استاندارد شامل آسانسور اختصاصی، ورودی پرسنل مجزا، تراس بزرگ، آشپزخانه برندهای لوکس آلمانی، اتوماسیون خانه هوشمند، استخر خصوصی در تراس، سوئیت خدمتکار و حداقل دو تا چهار پارکینگ مسقف است."}}, {"@type": "Question", "name": "آیا امکان شخصی‌سازی پلان و دکوراسیون پنت‌هاوس قبل از خرید وجود دارد؟", "acceptedAnswer": {"@type": "Answer", "text": "بله؛ در پروژه‌های پیش‌فروش (Off-Plan) امکان سفارشی‌سازی نقشه داخلی و متریال با هماهنگی سازنده وجود دارد و در واحدهای آماده نیز تغییرات معماری داخلی طبق ضوابط DLD میسر است."}}]}
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
{"@context": "https://schema.org", "@type": "WebPage", "@id": "https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai#webpage", "url": "https://zarinrealestate.com/fa/penthouses-for-sale-in-dubai", "name": "خرید پنت‌هاوس در دبی | املاک و مستغلات زرین", "isPartOf": {"@id": "https://zarinrealestate.com/#website"}, "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#hero-headline", "#tldr-summary"]}}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">پرش به محتوای اصلی</a>

  <!-- ═══ HEADER ═══ -->
  ${faHeaderClone.outerHTML}

  <!-- Mobile Menu Drawer -->
  ${faMobileClone.outerHTML}

  <main id="main">

  <!-- 1. HERO + TL;DR -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="خرید پنت‌هاوس در دبی">
    <div class="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-ink-900 via-ink-900/85 to-ink-900/40"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">پنت‌هاوس‌ها &middot; زندگی بر فراز آسمان دبی</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-bone mb-6">خرید پنت‌هاوس<br>در <span class="text-gold-gradient">دبی</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-6 font-light">خانه‌های آسمانی با آسانسور اختصاصی، چشم‌اندازهای پانورامای ۳۶۰ درجه و تراس‌های وسیع در داون‌تاون، مارینا، بلوواترز، پالم جمیرا و بیزنس بی. تمامی پنت‌هاوس‌های این صفحه شخصاً توسط مشاوران زرین ممیزی و کارشناسی شده‌اند — بدون فایل‌های غیرواقعی و قیمت‌های حباب‌دار.</p>
        <p class="text-sm text-ash max-w-2xl leading-relaxed mb-8">قیمت پنت‌هاوس در دبی از حدود ۶ میلیون درهم در بیزنس بی شروع می‌شود، در حالی که واحدهای طبقه آخر در مارینا و داون‌تاون بین ۸ تا ۲۵ میلیون درهم معامله می‌شوند. در پالم جمیرا و بلوواترز عمارت‌های آسمانی تا بیش از ۳۰ و حتی ۸۰ میلیون درهم قیمت‌گذاری شده‌اند. مشاوران زرین تعریف دقیق ۵ شاخص اصلی را اعمال می‌کنند تا مطمئن شوید ملکی که خریداری می‌کنید یک پنت‌هاوس اصیل است، نه صرفاً یک آپارتمان معمولی در طبقه آخر با قیمت اضافه.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#penthouse-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="مشاهده پنت‌هاوس‌ها">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
            مشاهده پنت‌هاوس‌ها
          </a>
          <a href="/fa/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="گفتگو با مشاور تخصصی">گفتگو با مشاور تخصصی</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number">+۸۵</div><div class="text-xs text-slate uppercase tracking-wider mt-1">فایل معتبر پنت‌هاوس</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۱۸M AED</div><div class="text-xs text-slate uppercase tracking-wider mt-1">میانگین قیمت</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۵٬۴۰۰ sqft</div><div class="text-xs text-slate uppercase tracking-wider mt-1">میانگین متراژ بنا</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number">۵</div><div class="text-xs text-slate uppercase tracking-wider mt-1">منطقه برتر پنت‌هاوس</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. FILTER BAR (sticky) -->
  <section class="sticky top-0 z-50 glass border-b border-white-line py-4" aria-label="فیلترهای پنت‌هاوس">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex items-center gap-2 flex-wrap"><div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold ml-1">تعداد خواب:</div>
          <button type="button" class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="bedrooms" data-value="All">همه</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="2BR">۲ خواب</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="3BR">۳ خواب</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="4BR">۴ خواب</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="bedrooms" data-value="5BR+">۵ خواب+</button></div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <div class="flex items-center gap-2 flex-wrap"><div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold ml-1">محدوده قیمت:</div>
          <button type="button" class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="price" data-value="Any Price">همه قیمت‌ها</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="Under AED 8M">زیر ۸ میلیون درهم</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="8M – 15M">۸ تا ۱۵ میلیون</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="15M – 30M">۱۵ تا ۳۰ میلیون</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="price" data-value="30M+">+۳۰ میلیون</button></div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <div class="flex items-center gap-2 flex-wrap"><div class="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold ml-1">منطقه:</div>
          <button type="button" class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="true" data-group="area" data-value="All Areas">همه مناطق</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Marina">مارینا</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Downtown">داون‌تاون</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Bluewaters">بلوواترز</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Palm Jumeirah">پالم جمیرا</button>
          <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" aria-pressed="false" data-group="area" data-value="Business Bay">بیزنس بی</button></div>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <div class="hidden md:block flex-1"></div>
        <a href="/fa/consultation" class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="درخواست جستجوی سفارشی پنت‌هاوس">جستجوی سفارشی ←</a>
      </div>
      <p class="mt-3 text-xs text-slate">نمایش ۶ پنت‌هاوس منتخب. با فیلترهای بالا بر اساس خواب، قیمت و منطقه جستجو کنید — برای دسترسی به بیش از ۸۵ فایل فعال و غیرعلنی با مشاوران ما تماس بگیرید.</p>
    </div>
  </section>

  <!-- 3. PENTHOUSE LISTINGS GRID -->
  <section id="penthouse-grid" class="bg-ink-900 py-16 md:py-20" aria-label="فهرست پنت‌هاوس‌ها">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">پنت‌هاوس‌های شاخص</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">مجموعه برگزیده عمارت‌های آسمانی</h2>
        </div>
        <p class="text-sm text-ash max-w-md">مجموعه‌ای از پنت‌هاوس‌های اختصاصی دارای انحصار فروش با زرین در معتبرترین برج‌های دبی. هر واحد شخصاً توسط کارشناسان ما بازرسی شده است.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="penthouse-cards-container">

        <!-- Listing 1: 4BR Penthouse Burj Vista -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="4" data-price="8900000" data-area="downtown-dubai">
          <a href="/fa/properties/ph-burj-vista-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۴ خوابه برج ویستا">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۴ خوابه در داون‌تاون دبی با دید برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">خانه آسمانی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۸.۹ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پنت‌هاوس ۴ خوابه &middot; برج ویستا</h3>
            <div class="text-sm text-ash mb-3">داون‌تاون دبی &middot; ۴٬۸۰۰ فوت مربع</div>
            <p class="text-xs text-slate leading-relaxed mb-4">دید مستقیم فواره و برج خلیفه از دو تراس عمیق، لابی ورودی خصوصی و اتاق مطالعه اختصاصی.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۱٬۸۵۴ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 5BR Penthouse Signature Sky Home -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="5" data-price="32000000" data-area="bluewaters-island">
          <a href="/fa/properties/ph-bluewaters-signature-002" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۵ خوابه سیگنیچر بلوواترز">
            <img src="https://images.unsplash.com/photo-1600596542815-fffd6beb5bf1?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۵ خوابه در جزیره بلوواترز با دید ۳۶۰ درجه دریا و خط افق دبی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">دید ۳۶۰ درجه</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۳۲ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پنت‌هاوس ۵ خوابه &middot; سیگنیچر اسکای هوم</h3>
            <div class="text-sm text-ash mb-3">جزیره بلوواترز &middot; ۸٬۲۰۰ فوت مربع</div>
            <p class="text-xs text-slate leading-relaxed mb-4">آسانسور اختصاصی، تراس اینفینیتی، سالن با سقف دابل‌هیت و چشم‌انداز پانورامای خلیج فارس.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۵</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۶</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۳٬۹۰۰ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 3BR Penthouse Marina Gate Sky Home -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="3" data-price="12500000" data-area="dubai-marina">
          <a href="/fa/properties/ph-marina-gate-003" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۳ خوابه مارینا گیت">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۳ خوابه در دبی مارینا با آسانسور اختصاصی و دید دریا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">آسانسور اختصاصی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۲.۵ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پنت‌هاوس ۳ خوابه &middot; مارینا گیت</h3>
            <div class="text-sm text-ash mb-3">دبی مارینا &middot; ۳٬۶۰۰ فوت مربع</div>
            <p class="text-xs text-slate leading-relaxed mb-4">ورود مستقیم با آسانسور، تراس سرتاسری و اشراف کامل به مارینا و قایق‌های لوکس.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۳٬۴۷۲ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 5BR Penthouse Palm Crescent Sky Palace -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="5" data-price="45000000" data-area="palm-jumeirah">
          <a href="/fa/properties/ph-palm-crescent-004" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۵ خوابه پالم کرسنت">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۵ خوابه در هلال پالم جمیرا با استخر اختصاصی و دید دریا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">کاخ آسمانی</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۴۵ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پنت‌هاوس ۵ خوابه &middot; پالم کرسنت</h3>
            <div class="text-sm text-ash mb-3">پالم جمیرا &middot; ۱۱٬۲۰۰ فوت مربع</div>
            <p class="text-xs text-slate leading-relaxed mb-4">کاخ آسمانی طبقه آخر با استخر اختصاصی در تراس، دید ۳۶۰ درجه دریا و بخش مجزای پرسنل.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۵</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۷</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۴٬۰۱۸ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 3BR Penthouse Bluewaters Crown -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="3" data-price="16500000" data-area="bluewaters-island">
          <a href="/fa/properties/ph-bluewaters-crown-005" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۳ خوابه بلوواترز کراون">
            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۳ خوابه در جزیره بلوواترز با دید دریا و آسانسور اختصاصی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">دید دریا</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۶.۵ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پنت‌هاوس ۳ خوابه &middot; بلوواترز کراون</h3>
            <div class="text-sm text-ash mb-3">جزیره بلوواترز &middot; ۴٬۱۰۰ فوت مربع</div>
            <p class="text-xs text-slate leading-relaxed mb-4">پنت‌هاوس تاج برج با لابی آسانسور اختصاصی، تراس رو به دریا و سالن سینمای خانگی خصوصی.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۳</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۴</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۴٬۰۲۴ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 4BR Penthouse Burj Vista Signature -->
        <article class="bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group penthouse-card" data-bedrooms="4" data-price="18500000" data-area="downtown-dubai">
          <a href="/fa/properties/ph-burj-vista-signature-006" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="مشاهده پنت‌هاوس ۴ خوابه برج ویستا سیگنیچر">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="پنت‌هاوس ۴ خوابه در داون‌تاون دبی با دید بدون مانع برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-gold-line text-gold-400 rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">دید برج خلیفه</div>
            <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">۱۸.۵ میلیون درهم</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">پنت‌هاوس</div><div class="text-xs text-slate">آماده تحویل</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پنت‌هاوس ۴ خوابه &middot; برج ویستا سیگنیچر</h3>
            <div class="text-sm text-ash mb-3">داون‌تاون دبی &middot; ۴٬۸۰۰ فوت مربع</div>
            <p class="text-xs text-slate leading-relaxed mb-4">دید کامل و بدون مانع فواره‌های موزیکال و برج خلیفه، دو تراس بزرگ، اتاق مطالعه و پیش‌ورودی مجلل.</p>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">۴</div><div>خواب</div></div>
              <div><div class="text-bone font-semibold">۵</div><div>سرویس</div></div>
              <div><div class="text-bone font-semibold">۳٬۸۵۴ AED</div><div>هر فوت مربع</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- No match fallback state -->
      <div id="no-match-state" class="hidden text-center py-16 bg-ink-850 border border-white-line rounded-sm mt-8">
        <p class="text-bone font-semibold text-lg mb-2">موردی با معیارهای انتخابی شما در این بخش یافت نشد.</p>
        <p class="text-ash text-sm mb-6">ما به بیش از ۸۵ فایل فعال و غیرعلنی (Off-Market) پنت‌هاوس در برج‌های شاخص دبی دسترسی داریم.</p>
        <button type="button" id="reset-filter-btn" class="px-6 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase rounded-xs hover:bg-gold-300 transition-colors">تنظیم مجدد تمام فیلترها</button>
      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">این مجموعه نمونه‌ای برگزیده است. زرین به بیش از ۸۵ فایل فعال پنت‌هاوس در برترین برج‌های دبی دسترسی دارد. معیارهای خود اعم از تعداد خواب، چشم‌انداز، منطقه و بودجه را با ما در میان بگذارید تا فهرست اختصاصی ظرف ۲۴ ساعت برای شما آماده شود.</p>
        <a href="/fa/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.05em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="درخواست جستجوی سفارشی پنت‌هاوس">
          درخواست جستجوی سفارشی
          <svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- 4. BROWSE BY VIEW -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="جستجو بر اساس چشم‌انداز">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">انتخاب بر اساس چشم‌انداز</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">آسمان دلخواه خود را برگزینید</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">ارزش و هویت یک پنت‌هاوس پیش از هر چیز با چشم‌اندازی که رو به آن گشوده می‌شود تعریف می‌گردد. این پنج شاخص دید بیشترین تقاضا را در بازار پنت‌هاوس دبی به خود اختصاص داده‌اند.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/fa/penthouses-for-sale-in-dubai?view=burj-khalifa-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="پنت‌هاوس‌های رو به برج خلیفه">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="دید فواره و برج خلیفه از تراس پنت‌هاوس" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">دید برج خلیفه</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">پنت‌هاوس‌های مجلل با دید بدون مانع به نماد شهر دبی و فواره‌های موزیکال در داون‌تاون.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۸.۹M درهم</span>
              <span class="text-slate">+۲۸ فایل</span>
            </div>
          </div>
        </a>

        <a href="/fa/penthouses-for-sale-in-dubai?view=sea-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="پنت‌هاوس‌های رو به دریا">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="تراس پنت‌هاوس با دید پانورامای خلیج فارس" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">دید دریا و خلیج فارس</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">پنت‌هاوس‌های رو به افق نیلگون دریا در پالم جمیرا، جزیره بلوواترز و خط ساحلی جی‌بی‌آر.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۱۲.۵M درهم</span>
              <span class="text-slate">+۱۹ فایل</span>
            </div>
          </div>
        </a>

        <a href="/fa/penthouses-for-sale-in-dubai?view=marina-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="پنت‌هاوس‌های رو به دبی مارینا">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="دید آسمان‌خراش‌ها و قایق‌های دبی مارینا از بالکن پنت‌هاوس" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">دید دبی مارینا</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">خانه‌های آسمانی مشرف به کانال آب مارینا، اسکله‌های لوکس و نورپردازی شبانه برج‌ها.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۹.۲M درهم</span>
              <span class="text-slate">+۱۶ فایل</span>
            </div>
          </div>
        </a>

        <a href="/fa/penthouses-for-sale-in-dubai?view=skyline-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="پنت‌هاوس‌های رو به خط افق دبی">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80" alt="دید خط افق دبی از طبقات فوقانی بیزنس بی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">دید خط افق (Skyline)</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">چشم‌انداز پانورامیک به جنگل آسمان‌خراش‌های دبی در منطقه بیزنس بی و حاشیه داون‌تاون.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۷.۸M درهم</span>
              <span class="text-slate">+۱۲ فایل</span>
            </div>
          </div>
        </a>

        <a href="/fa/penthouses-for-sale-in-dubai?view=golf-course-view" class="group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" aria-label="پنت‌هاوس‌های رو به زمین گلف">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="چشم‌انداز سبز زمین گلف دبی هیلز از تراس پنت‌هاوس" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">دید زمین گلف</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">پنت‌هاوس‌های آرام و مشرف به پهنه‌های سبز زمین‌های گلف بین‌المللی در دبی هیلز و امارات هیلز.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">شروع از ۱۱.۵M درهم</span>
              <span class="text-slate">+۱۰ فایل</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 5. BROWSE BY AREA -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="مناطق شاخص پنت‌هاوس">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">مناطق برتر پنت‌هاوس</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">محله‌های اعیان‌نشین آسمانی دبی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">پنج محله اصلی بر بازار پنت‌هاوس‌های دبی حکومت می‌کنند؛ هرکدام با دامنه قیمتی، سبک زندگی و چشم‌اندازهای ویژه خود.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/fa/areas/downtown-dubai" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="پنت‌هاوس‌های داون‌تاون دبی">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="داون‌تاون دبی و برج خلیفه" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">داون‌تاون دبی</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۸ تا ۴۵ میلیون درهم</span>
              <span class="text-ash">+۲۸ پنت‌هاوس</span>
            </div>
          </div>
        </a>

        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="پنت‌هاوس‌های دبی مارینا">
          <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80" alt="غروب دبی مارینا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">دبی مارینا</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۶ تا ۲۵ میلیون درهم</span>
              <span class="text-ash">+۲۲ پنت‌هاوس</span>
            </div>
          </div>
        </a>

        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="پنت‌هاوس‌های جزیره بلوواترز">
          <img src="https://images.unsplash.com/photo-1600596542815-fffd6beb5bf1?auto=format&fit=crop&w=800&q=80" alt="مجتمع‌های مسکونی جزیره بلوواترز" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">جزیره بلوواترز</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱۲ تا ۳۵ میلیون درهم</span>
              <span class="text-ash">+۹ پنت‌هاوس</span>
            </div>
          </div>
        </a>

        <a href="/fa/areas/palm-jumeirah" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="پنت‌هاوس‌های پالم جمیرا">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="نمای هوایی نخل جمیرا" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">پالم جمیرا</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۱۵ تا ۸۰ میلیون درهم</span>
              <span class="text-ash">+۱۴ پنت‌هاوس</span>
            </div>
          </div>
        </a>

        <a href="/fa/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="پنت‌هاوس‌های بیزنس بی">
          <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80" alt="آسمان‌خراش‌های منطقه بیزنس بی" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">بیزنس بی</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">۵ تا ۱۸ میلیون درهم</span>
              <span class="text-ash">+۱۲ پنت‌هاوس</span>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center mt-10"><a href="/fa/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="مشاهده تمام مناطق دبی">مشاهده تمام ۴۵+ منطقه دبی<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 6. WHAT MAKES A DUBAI PENTHOUSE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="شاخص‌های بنیادین پنت‌هاوس در دبی">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 mb-16">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">کالبدشناسی پنت‌هاوس</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">چه چیزی یک واحد را به «پنت‌هاوس واقعی» بدل می‌سازد؟</h2>
          <p class="text-lg text-ash leading-relaxed mb-6">در بازار دبی، واژه پنت‌هاوس گاهی به اشتباه و صرفاً برای اهداف تبلیغاتی به کار می‌رود؛ واحدهای طبقه آخر بدون ویژگی‌های معماری اختصاصی اغلب با قیمت‌های حباب‌دار عرضه می‌شوند. مشاوران زرین معیاری سخت‌گیرانه‌تر اعمال می‌کنند: یک پنت‌هاوس اصیل باید تلفیقی از بالاترین موقعیت طبقاتی، لابی آسانسور اختصاصی، تراس عمیق، پنجره‌های قدی پانورامیک و ارتفاع سقف باشکوه باشد.</p>
          <p class="text-sm text-ash leading-relaxed mb-6">هر یک از این ۵ شاخص، سهم مستقیمی در حفظ ارزش و نقدشوندگی فروش مجدد ملک در درازمدت ایفا می‌کنند. مشاوران ما تک‌تک پنت‌هاوس‌های موجود را بر اساس این چک‌لیست بازرسی فیزیکی نموده و گزارش فنی مستند ارائه می‌دهند.</p>
          <p class="text-sm text-ash leading-relaxed">زرین از سال ۲۰۰۵ با تکیه بر تجربه زیسته بنیان‌گذار خود در بازار دبی، شفافیت مطلق و استانداردهای سخت‌گیرانه را در اختیار خریداران هوشمند قرار می‌دهد.</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="bg-ink-900 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۵</div><div class="text-sm font-bold text-bone mb-1">شاخص بنیادین</div><div class="text-xs text-slate">بالاترین طبقه، آسانسور، تراس، شیشه، سقف بلند</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۶M درهم</div><div class="text-sm font-bold text-bone mb-1">کف قیمت پنت‌هاوس واقعی</div><div class="text-xs text-slate">کمتر از این صرفاً آپارتمان طبقه آخر است</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۸۰۰ sqft</div><div class="text-sm font-bold text-bone mb-1">تراس اختصاصی</div><div class="text-xs text-slate">فضای باز وسیع جزء جدایی‌ناپذیر است</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۵.۵ تا ۷m</div><div class="text-sm font-bold text-bone mb-1">ارتفاع سقف سالن</div><div class="text-xs text-slate">معماری دوبل باشکوه</div></div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">موقعیت در بالاترین طبقه</h3>
          <p class="text-sm text-ash leading-relaxed">پنت‌هاوس حقیقی در بالاترین طبقه مسکونی قرار دارد — بدون هیچ همسایه‌ای در بالای سر، همراه با دسترسی خصوصی به بام و لابی اختصاصی که پرستیژ ملک را تضمین می‌کند.</p>
        </div>

        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8V4m0 0h4M4 4v4m8-4v4m0-4h4m-4 0v4m8 0v4m0-4h-4m4 0v4m-8 4v4m0-4h4m-4 0v4m8 0v4m0-4h-4m4 0v4"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">آسانسور با دسترسی اختصاصی</h3>
          <p class="text-sm text-ash leading-relaxed">پنت‌هاوس‌های تراز اول مجهز به آسانسور کلیددار اختصاصی هستند که مستقیماً داخل واحد یا لابی خصوصی باز شده و محرمانگی کامل اقامت را تامین می‌نمایند.</p>
        </div>

        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">تراس‌های سرتاسری و عمیق</h3>
          <p class="text-sm text-ash leading-relaxed">زندگی در فضای باز امضای پنت‌هاوس‌های دبی است؛ تراس‌های وسیع بالای ۸۰۰ فوت با فضای نشیمن، جکوزی یا استخر اختصاصی و اشراف کامل به زیبایی‌های شهر.</p>
        </div>

        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">پنجره‌های قدی پانورامیک</h3>
          <p class="text-sm text-ash leading-relaxed">شیشه‌های کف تا سقف در دست‌کم دو تا چهار جهت، نور طبیعی را از طلوع تا غروب وارد خانه کرده و افق بی‌کران دبی را مانند یک تابلوی زنده نقاشی قاب می‌گیرند.</p>
        </div>

        <div class="bg-ink-900 border border-white-line rounded-sm p-6 card-lift">
          <div class="w-10 h-10 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft mb-4">
            <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
          <h3 class="text-lg font-bold text-bone mb-2">سقف‌های مرتفع و دوبل</h3>
          <p class="text-sm text-ash leading-relaxed">بسیاری از پنت‌هاوس‌ها دارای سالن‌های پذیرایی با ارتفاع سقف ۵.۵ تا ۷ متر هستند که جلوه‌ای شاهانه به ورود بخشیده و واحد را کاملاً از طبقات دیگر متمایز می‌کند.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. WHY BUY A PENTHOUSE WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="چرا خرید پنت‌هاوس با زرین">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">تمایز خدمات زرین</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">مشاوری که شخصاً در بلندترین طبقات حضور یافته است</h2>
          <p class="text-lg text-ash leading-relaxed mb-6">معاملات پنت‌هاوس حساس‌تر از آن هستند که به عکس‌های کاتالوگی یا بازدیدهای مجازی بسنده شود. تک‌تک پنت‌هاوس‌های زرین شخصاً توسط مشاوران ارشد ما بازدید شده‌اند — ما دید ملک را در ۳ زمان مختلف روز عکاسی می‌کنیم، کارکرد آسانسور اختصاصی را می‌سنجیم و تراز مالی هزینه‌های شارژ را پیش از ارائه ممیزی می‌نماییم.</p>
          <p class="text-sm text-ash leading-relaxed mb-8">پیشینه فعالیت از ۲۰۰۵ در املاک دبی، کارمزد شفاف ۲٪ منطبق با ضوابط مصوب RERA و ارائه مشاوره تخصصی به زبان مادری شما (فارسی، انگلیسی، عربی)، آرامش خاطر مطلق را در سرمایه‌گذاری رقم می‌زند.</p>
          <div class="space-y-3 mb-8">
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">ممیزی و بازرسی حضوری تمام پنت‌هاوس‌ها</div><div class="text-xs text-slate mt-1">ما ملکی را که شخصاً بازرسی نکرده باشیم عرضه نمی‌کنیم.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">تصاویر تاییدشده از چشم‌انداز واقعی</div><div class="text-xs text-slate mt-1">عکاسی در سه نوبت صبح، عصر و شب بدون رندرهای گمراه‌کننده.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">کارمزد قانونی ۲٪ بدون هزینه‌های پنهان</div><div class="text-xs text-slate mt-1">شفاف، مصوب و منطبق بر استانداردهای رسمی RERA دبی.</div></div></div>
            <div class="flex items-start gap-3"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">مشاوره سه‌زبانه مستقیم: FA / EN / AR</div><div class="text-xs text-slate mt-1">ارتباط مستقیم با مشاوران ارشد به زبان مادری شما.</div></div></div>
          </div>
          <div class="grid grid-cols-2 gap-3 mb-8">
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>دارای مجوز رسمی RERA</div>
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>پاسخگویی سریع ۲۴ ساعته</div>
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>مشاوره سه‌زبانه FA / EN / AR</div>
            <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>بدون تعهد اجباری</div>
          </div>
          <a href="/fa/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="آشنایی بیشتر با زرین">آشنایی با تاریخچه و پیشینه زرین<svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-900 border border-gold-line bg-gold-soft rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">+۸۵</div><div class="text-sm font-bold text-bone mb-1">پنت‌هاوس کارشناسی‌شده</div><div class="text-xs text-slate">ممیزی‌شده توسط مشاوران</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۱۸M درهم</div><div class="text-sm font-bold text-bone mb-1">میانگین فروش پنت‌هاوس</div><div class="text-xs text-slate">در کارنامه معاملات زرین</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">۲۴h</div><div class="text-sm font-bold text-bone mb-1">ارسال فهرست اختصاصی</div><div class="text-xs text-slate">پس از جلسه مشاوره اول</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">از ۲۰۰۵</div><div class="text-sm font-bold text-bone mb-1">تجربه زیسته در دبی</div><div class="text-xs text-slate">مشاوره تخصصی و متعهدانه</div></div>
        </div>
      </div>
      <div class="mt-16 grid md:grid-cols-3 gap-6 pt-12 border-t border-white-line">
        <div>
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">تماس تلفنی</div>
          <a href="tel:+971586901231" class="text-lg font-bold text-bone hover:text-gold-400 transition-colors" aria-label="تماس با ما"><span dir="ltr">+971 58 690 1231</span></a>
        </div>
        <div>
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">ایمیل مستقیم</div>
          <a href="mailto:advisory@zarinrealestate.com" class="text-lg font-bold text-bone hover:text-gold-400 transition-colors" aria-label="ارسال ایمیل">advisory@zarinrealestate.com</a>
        </div>
        <div>
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">واتس‌اپ</div>
          <a href="https://wa.me/971586901231" class="text-lg font-bold text-bone hover:text-gold-400 transition-colors" aria-label="پیام در واتس‌اپ">گفتگو در واتس‌اپ ←</a>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. FAQ -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="پرسش‌های متداول خرید پنت‌هاوس">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">پرسش‌های پرتکرار خریداران پنت‌هاوس</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">پاسخ شفاف به هشت پرسش کلیدی خرید پنت‌هاوس در دبی</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto">هشت پرسشی که خریداران طراز اول پیش از اقدام برای خرید پنت‌هاوس در دبی مطرح می‌کنند، همراه با پاسخ‌های مستند به وضعیت بازار در سال ۲۰۲۶.</p>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-850 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">میانگین قیمت پنت‌هاوس در دبی در سال ۲۰۲۶ چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">در اواخر سال ۲۰۲۶، میانگین قیمت پنت‌هاوس در دبی حدود ۱۸ میلیون درهم است. پنت‌هاوس‌های اقتصادی‌تر از ۶ میلیون درهم در بیزنس بی آغاز می‌شوند، در حالی که در مارینا و داون‌تاون بین ۸ تا ۲۵ میلیون درهم و در پالم جمیرا و بلوواترز عمارت‌های آسمانی به بالای ۳۰ تا ۸۰ میلیون درهم می‌رسند.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">تفاوت آپارتمان معمولی با پنت‌هاوس در دبی در چیست؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">پنت‌هاوس به‌طور خاص به واحد مسکونی بالاترین طبقه برج اطلاق می‌شود که ویژگی‌های متمایزی مانند لابی آسانسور اختصاصی، تراس‌های سرتاسری وسیع، سقف‌های دابل‌هیت (ارتفاع دوبل) و دید ۳۶۰ درجه پانوراما دارد.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا پنت‌هاوس‌های دبی دارای آسانسور با ورودی اختصاصی هستند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">اکثر پنت‌هاوس‌های مجلل دبی که از سال ۲۰۱۵ به بعد ساخته شده‌اند، دارای آسانسور اختصاصی با کلید هوشمند هستند که مستقیماً داخل واحد یا لابی ورودی خصوصی باز می‌شود.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">کدام مناطق دبی بهترین پنت‌هاوس‌ها را دارند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">داون‌تاون دبی (برج خلیفه و برج ویستا)، جزیره بلوواترز، پالم جمیرا، دبی مارینا (مارینا گیت) و بیزنس بی شاخص‌ترین قطب‌های پنت‌هاوس در دبی هستند.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا خرید پنت‌هاوس در دبی سرمایه‌گذاری مناسبی است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">پنت‌هاوس‌های اصیل در مناطق شاخص دبی طی پنج سال گذشته رشد ارزش سرمایه‌ای سالانه ۸ تا ۱۵ درصد و بازده اجاره‌ای ۴ تا ۶ درصد به ثبت رسانده‌اند و به دلیل نایاب بودن موقعیت بالاترین طبقه، ارزش خود را به‌خوبی حفظ می‌کنند.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">کف قیمت ورود برای خرید یک پنت‌هاوس واقعی در دبی چقدر است؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">کف قیمت ورود برای یک پنت‌هاوس واقعی در دبی با استانداردهای رسمی حدود ۶ میلیون درهم در بیزنس بی است؛ برای پنت‌هاوس‌های شاخص با تراس‌های عمیق و آسانسور مستقیم در مارینا از ۱۰ میلیون و در داون‌تاون یا بلوواترز از ۱۵ میلیون درهم شروع می‌شود.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">پنت‌هاوس‌های دبی معمولاً شامل چه امکاناتی هستند؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">امکانات استاندارد شامل آسانسور اختصاصی، ورودی پرسنل مجزا، تراس بزرگ، آشپزخانه برندهای لوکس آلمانی، اتوماسیون خانه هوشمند، استخر خصوصی در تراس، سوئیت خدمتکار و حداقل دو تا چهار پارکینگ مسقف است.</div>
        </details>

        <details class="bg-ink-850 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone">آیا امکان شخصی‌سازی پلان و دکوراسیون پنت‌هاوس قبل از خرید وجود دارد؟</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">بله؛ در پروژه‌های پیش‌فروش (Off-Plan) امکان سفارشی‌سازی نقشه داخلی و متریال با هماهنگی سازنده وجود دارد و در واحدهای آماده نیز تغییرات معماری داخلی طبق ضوابط DLD میسر است.</div>
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
    (function(){
      const chips = document.querySelectorAll('.filter-chip');
      const cards = document.querySelectorAll('.penthouse-card');
      const noMatchState = document.getElementById('no-match-state');
      const resetBtn = document.getElementById('reset-filter-btn');

      function parsePrice(card) {
        const pAttr = card.getAttribute('data-price');
        if (pAttr) return parseInt(pAttr, 10);
        return 0;
      }

      function applyFilters() {
        const active = {};
        chips.forEach(c => {
          if (c.classList.contains('active')) {
            active[c.dataset.group] = c.dataset.value;
          }
        });

        let visibleCount = 0;
        cards.forEach(card => {
          let show = true;
          // bedrooms
          const cardBeds = parseInt(card.dataset.bedrooms, 10);
          const bedFilter = active['bedrooms'] || 'All';
          if (bedFilter !== 'All') {
            if (bedFilter === '5BR+') { if (cardBeds < 5) show = false; }
            else { const n = parseInt(bedFilter, 10); if (cardBeds !== n) show = false; }
          }
          // price
          const priceFilter = active['price'] || 'Any Price';
          if (priceFilter !== 'Any Price') {
            const priceNum = parsePrice(card);
            if (priceFilter === 'Under AED 8M') { if (priceNum >= 8000000) show = false; }
            else if (priceFilter === '8M – 15M') { if (priceNum < 8000000 || priceNum > 15000000) show = false; }
            else if (priceFilter === '15M – 30M') { if (priceNum < 15000000 || priceNum > 30000000) show = false; }
            else if (priceFilter === '30M+') { if (priceNum < 30000000) show = false; }
          }
          // area
          const areaFilter = active['area'] || 'All Areas';
          if (areaFilter !== 'All Areas') {
            const cardArea = (card.dataset.area || '').replace(/-/g, ' ').toLowerCase();
            const filterArea = areaFilter.toLowerCase();
            if (!cardArea.includes(filterArea)) show = false;
          }

          if (show) {
            card.classList.remove('hidden-card');
            visibleCount++;
          } else {
            card.classList.add('hidden-card');
          }
        });

        if (noMatchState) {
          if (visibleCount === 0) noMatchState.classList.remove('hidden');
          else noMatchState.classList.add('hidden');
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
          applyFilters();
        });
      });

      resetBtn?.addEventListener('click', () => {
        ['bedrooms', 'price', 'area'].forEach(grp => {
          chips.forEach(c => {
            if (c.dataset.group === grp) {
              const isDefault = c.dataset.value === 'All' || c.dataset.value === 'Any Price' || c.dataset.value === 'All Areas';
              c.classList.toggle('active', isDefault);
              c.setAttribute('aria-pressed', isDefault ? 'true' : 'false');
            }
          });
        });
        applyFilters();
      });
    })();
  </script>
  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>
`;

// Ensure directories exist
fs.mkdirSync('penthouses-for-sale-in-dubai', { recursive: true });
fs.mkdirSync('fa/penthouses-for-sale-in-dubai', { recursive: true });

// Write English files
fs.writeFileSync('penthouses-for-sale-in-dubai.html', enPenthousesHtml, 'utf8');
fs.writeFileSync('penthouses-for-sale-in-dubai/index.html', enPenthousesHtml, 'utf8');
console.log('Created penthouses-for-sale-in-dubai.html and penthouses-for-sale-in-dubai/index.html');

// Write Persian files
fs.writeFileSync('fa/penthouses-for-sale-in-dubai.html', faPenthousesHtml, 'utf8');
fs.writeFileSync('fa/penthouses-for-sale-in-dubai/index.html', faPenthousesHtml, 'utf8');
console.log('Created fa/penthouses-for-sale-in-dubai.html and fa/penthouses-for-sale-in-dubai/index.html');
