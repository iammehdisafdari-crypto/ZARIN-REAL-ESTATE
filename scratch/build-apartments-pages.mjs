import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('Building apartments-for-sale-in-dubai pages...');

const apartmentsHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <!-- ═══ PRIMARY META ═══ -->
  <title>Apartments for Sale in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Browse apartments for sale in Dubai — studios, 1BR, 2BR, 3BR and 4BR+ units across Dubai Marina, Downtown, Business Bay, JVC, Dubai Hills and Bluewaters. Personally inspected by ZARIN advisors.">
  <meta name="keywords" content="apartments for sale in Dubai, buy apartment Dubai, Dubai studio for sale, 1 bedroom apartment Dubai, 2BR apartment Marina, 3BR apartment Downtown, 4BR apartment Dubai, luxury apartments Dubai">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/apartments-for-sale-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/apartments-for-sale-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/apartments-for-sale-in-dubai">

  <!-- ═══ OPEN GRAPH ═══ -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Apartments for Sale in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Browse apartments for sale in Dubai — studios, 1BR, 2BR, 3BR and 4BR+ units across Dubai's prime communities. Curated and inspected by ZARIN advisors.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Apartments for sale in Dubai Marina with sea view">
  <meta property="og:url" content="https://zarinrealestate.com/apartments-for-sale-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">

  <!-- ═══ TWITTER CARD ═══ -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Apartments for Sale in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Browse apartments for sale in Dubai — curated and personally inspected by ZARIN advisors.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80">

  <!-- ═══ FAVICON ═══ -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <!-- ═══ RESOURCE PRELOADS ═══ -->
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
    html { scroll-behavior: smooth; }
    body { font-family: "Source Sans 3", "Vazirmatn", -apple-system, sans-serif; background: #0A0B0E; color: #F8F9FA; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; overflow-x: hidden; }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #0A0B0E; }
    ::-webkit-scrollbar-thumb { background: #C8AB83; border-radius: 4px; }
    ::selection { background: rgba(200, 171, 131, 0.3); color: #F8F9FA; }
    .glass { background: rgba(10, 11, 14, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
    .text-gold-gradient { background: linear-gradient(135deg, #DFC49E 0%, #C8AB83 50%, #A88D66 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
    .stat-number { font-variant-numeric: tabular-nums; letter-spacing: -0.02em; }
    .mega-menu-trigger { position: relative; }
    .mega-menu-panel { opacity: 0; visibility: hidden; transform: translateY(8px); transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s; z-index: 950; }
    .mega-menu-trigger:not(.is-closed):hover .mega-menu-panel,
    .mega-menu-trigger:not(.is-closed):focus-within .mega-menu-panel,
    .mega-menu-trigger.is-open .mega-menu-panel,
    .mega-menu-panel.is-open { opacity: 1; visibility: visible; transform: translateY(0); }
    .mega-menu-toggle-btn[aria-expanded="true"] svg,
    .mega-menu-trigger.is-open .mega-menu-toggle-btn svg,
    #mobile-properties-toggle[aria-expanded="true"] svg,
    #mobile-offplan-toggle[aria-expanded="true"] svg,
    #mobile-areas-toggle[aria-expanded="true"] svg { transform: rotate(180deg); }
    .mobile-menu { transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
    .mobile-menu.open { transform: translateX(0); }
    .img-zoom { overflow: hidden; }
    .img-zoom img { transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
    .img-zoom:hover img { transform: scale(1.05); }
    .card-lift { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease; }
    .card-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55); border-color: rgba(200, 171, 131, 0.35); }
    details summary { list-style: none; cursor: pointer; }
    details summary::-webkit-details-marker { display: none; }
    details[open] .faq-icon { transform: rotate(45deg); }
    .faq-icon { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    .faq-accordion-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1); }
    details.is-open .faq-accordion-panel,
    details[open].is-open .faq-accordion-panel,
    .faq-accordion-panel.is-open { grid-template-rows: 1fr; }
    details.is-closing .faq-accordion-panel { grid-template-rows: 0fr; }
    .faq-accordion-content { overflow: hidden; opacity: 0; transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    details.is-open .faq-accordion-content,
    details[open].is-open .faq-accordion-content,
    .faq-accordion-panel.is-open .faq-accordion-content { opacity: 1; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .filter-chip { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; user-select: none; }
    .filter-chip.active { background: #C8AB83; color: #0A0B0E; border-color: #C8AB83; font-weight: 700; }
    .sticky-whatsapp { display: none; }
    @media (max-width: 1024px) { .sticky-whatsapp { display: flex; } }
    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
    }
  </style>

  <!-- ═══ JSON-LD: BreadcrumbList ═══ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zarinrealestate.com/" },
      { "@type": "ListItem", "position": 2, "name": "Properties", "item": "https://zarinrealestate.com/properties" },
      { "@type": "ListItem", "position": 3, "name": "For Sale", "item": "https://zarinrealestate.com/properties-for-sale" },
      { "@type": "ListItem", "position": 4, "name": "Apartments", "item": "https://zarinrealestate.com/apartments-for-sale-in-dubai" }
    ]
  }
  </script>

  <!-- ═══ JSON-LD: CollectionPage + ItemList ═══ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://zarinrealestate.com/apartments-for-sale-in-dubai#collectionpage",
    "name": "Apartments for Sale in Dubai",
    "url": "https://zarinrealestate.com/apartments-for-sale-in-dubai",
    "description": "Browse apartments for sale in Dubai — studios, 1BR, 2BR, 3BR and 4BR+ units across Dubai Marina, Downtown, Business Bay, JVC, Dubai Hills and Bluewaters. Curated by ZARIN Real Estate advisors.",
    "isPartOf": { "@id": "https://zarinrealestate.com/#website" },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Studio Apartment — Belgravia II, JVC",
            "url": "https://zarinrealestate.com/apartments/studio-jvc-001",
            "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
            "offers": { "@type": "Offer", "price": "380000", "priceCurrency": "AED", "availability": "https://schema.org/InStock" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "1BR Apartment — Executive Tower, Business Bay",
            "url": "https://zarinrealestate.com/apartments/1br-bb-001",
            "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
            "offers": { "@type": "Offer", "price": "980000", "priceCurrency": "AED", "availability": "https://schema.org/InStock" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "2BR Apartment — Marina Gate, Dubai Marina",
            "url": "https://zarinrealestate.com/apartments/2br-marina-001",
            "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
            "offers": { "@type": "Offer", "price": "2400000", "priceCurrency": "AED", "availability": "https://schema.org/InStock" }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Product",
            "name": "3BR Apartment — Burj Vista, Downtown Dubai",
            "url": "https://zarinrealestate.com/apartments/3br-downtown-001",
            "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            "offers": { "@type": "Offer", "price": "4600000", "priceCurrency": "AED", "availability": "https://schema.org/InStock" }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Product",
            "name": "4BR Apartment — Bluewaters Residences, Bluewaters Island",
            "url": "https://zarinrealestate.com/apartments/4br-bluewaters-001",
            "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
            "offers": { "@type": "Offer", "price": "7800000", "priceCurrency": "AED", "availability": "https://schema.org/InStock" }
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Product",
            "name": "3BR Sky Apartment — Palm Tower, Palm Jumeirah",
            "url": "https://zarinrealestate.com/apartments/3br-palm-001",
            "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
            "offers": { "@type": "Offer", "price": "6200000", "priceCurrency": "AED", "availability": "https://schema.org/InStock" }
          }
        }
      ]
    }
  }
  </script>

  <!-- ═══ JSON-LD: FAQPage ═══ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://zarinrealestate.com/apartments-for-sale-in-dubai#faqpage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the average price of an apartment in Dubai in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As of late 2026, Dubai apartment prices span a wide band depending on location, finish and view. Studios in emerging areas like JVC, Dubai Sports City and Discovery Gardens start at AED 350,000-500,000, while 1-bedroom units in the same communities trade between AED 600,000 and AED 900,000. In prime areas — Dubai Marina, Downtown, Palm Jumeirah — a 1-bedroom typically runs AED 1.2M-1.8M and a 2-bedroom AED 2.2M-3.5M. The weighted average across all bedroom types sits around AED 1,800 per sqft, with sea-view and Burj-view units commanding a 15-30% premium over comparable inland layouts. ZARIN advisors share a current neighbourhood-specific price matrix during every consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Dubai are best for buying apartments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The right area depends on your mandate — end-use, rental yield or capital growth. Dubai Marina and Downtown remain the flagship apartment districts, offering liquidity, brand recognition and strong short-term-let demand. Business Bay and JVC deliver higher gross yields (6.5-8%) at lower entry prices, popular with first-time investors. Bluewaters, Palm Jumeirah and Emaar Beachfront appeal to buyers prioritising waterfront lifestyle and long-term appreciation. Dubai Hills Estate and Creek Harbour are master-planned communities where families gravitate for schools, parks and larger 3-4BR layouts. ZARIN helps you match an area to your budget, hold horizon and lifestyle expectations rather than chasing whatever is trending on listing portals."
        }
      },
      {
        "@type": "Question",
        "name": "Can foreigners buy apartments in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Since the 2002 Freehold Decree, foreigners of any nationality can buy apartments on a freehold basis in more than 70 designated areas across Dubai — including Dubai Marina, Downtown, Business Bay, JVC, Palm Jumeirah, Bluewaters, Dubai Hills and Creek Harbour. There are no restrictions on nationality, residency status or currency brought into the purchase. The title deed is issued in your personal name by the Dubai Land Department and is recognised internationally. Leasehold (up to 99 years) exists in a small number of older districts, but every modern apartment development ZARIN lists is freehold. We advise on the right ownership structure — personal, corporate or via a holding company — based on your estate-planning and tax-residency situation."
        }
      },
      {
        "@type": "Question",
        "name": "What are the additional costs when buying an apartment in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beyond the agreed purchase price, budget approximately 5-7% on top for transaction costs. The Dubai Land Department transfer fee is 4% of the sale price (historically split between buyer and seller, but in practice paid by the buyer). Agency commission is 2% of the price for buyers. Add an admin fee of AED 4,000 for properties above AED 500,000, plus AED 580 for the title deed issuance and a small mortgage arrangement fee (typically 0.5-1% of the loan) if financing. Service charges — the annual building maintenance contribution — are settled pro-rata between buyer and seller at handover. ZARIN provides a complete, itemised cost sheet for every shortlisted apartment before any offer is signed, so there are no surprises at transfer."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical service charge for Dubai apartments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Service charges in Dubai are calculated per square foot and billed annually in advance by the building's owners association (or its appointed management company). As of 2026, studios and 1BR units typically pay AED 12-18 per sqft, mid-tier buildings AED 18-25 per sqft, and luxury towers with extensive amenities (concierge, pools, gyms, sky lounges) AED 25-45 per sqft. For a 1,000 sqft 2BR, that translates to roughly AED 18,000-35,000 per year. Service charges fund common-area cleaning, security, lift maintenance, chiller (cooling) and amenities. ZARIN obtains the most recent audited service-charge statement for every apartment we list, so you can verify the figure against the developer's projections and budget accordingly."
        }
      },
      {
        "@type": "Question",
        "name": "What rental yield can I expect from a Dubai apartment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dubai apartments typically deliver 6-8% gross rental yield, with the higher end concentrated in JVC, Business Bay and Dubai Production City. Marina and Downtown average 5-6.5% gross, while ultra-prime waterfront (Palm Jumeirah, Bluewaters) sits at 4-5.5% — lower yield but stronger capital appreciation. Net yield (after service charges, agent fees, DEWA and maintenance reserve) runs about 1.5-2 percentage points below gross. Long-let (12-month) contracts give stable, predictable income; short-term-let via a licensed operator can lift yields by 25-40% but requires active management. ZARIN shares rent comparables for the specific building you are considering — not generic area averages — so the underwriting reflects actual achievable rents in that tower."
        }
      },
      {
        "@type": "Question",
        "name": "Are off-plan apartments a good investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Off-plan apartments can deliver strong returns — typically 20-30% capital gain between launch and handover — but the strategy carries real risks. The benefits include lower entry price, flexible 40-60% payment plans spread over 2-4 years, brand-new build quality and often premium views at pre-completion rates. The risks are developer delivery delays, design changes between brochure and delivered product, and the possibility of over-supply in the specific sub-market at handover. ZARIN only recommends off-plan projects from developers we have personally vetted — typically Emaar, Damac, Nakheel, Meraas, Sobha, Ellington and Select Group — and we review the Escrow Account, RERA registration, build-track record and current sales velocity before any client commits. Off-plan suits buyers with a 3-5 year hold horizon; for shorter horizons, ready inventory is safer."
        }
      },
      {
        "@type": "Question",
        "name": "What documents do I need to buy an apartment in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For UAE residents: passport copy, Emirates ID, proof of funds (recent bank statement) and a mortgage pre-approval letter if financing. For non-resident buyers: passport copy, proof of funds and a local UAE bank account (which ZARIN helps you open during a single bank branch visit). Off-plan purchases require a signed booking form, KYC documents and the passport copy. At the actual transfer appointment at the Dubai Land Department Trust Office, both parties (or their representatives via Power of Attorney) must attend with the original IDs, the signed Form F (Memorandum of Understanding) and the manager's cheque for the purchase price. ZARIN handles the document checklist, DLD appointment booking and trustee office coordination end-to-end."
        }
      }
    ]
  }
  </script>

  <!-- ═══ JSON-LD: WebPage + Speakable ═══ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://zarinrealestate.com/apartments-for-sale-in-dubai#webpage",
    "url": "https://zarinrealestate.com/apartments-for-sale-in-dubai",
    "name": "Apartments for Sale in Dubai | ZARIN Real Estate",
    "isPartOf": { "@id": "https://zarinrealestate.com/#website" },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [ "#hero-headline", "#tldr-summary" ]
    }
  }
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">Skip to main content</a>

  <!-- ════════════════════════════════════════════════════════════════
       HEADER (STANDARDIZED 8-TRIGGER NAVIGATION)
       ════════════════════════════════════════════════════════════════ -->
  <header id="site-header" class="fixed top-0 left-0 w-full z-[900] transition-all duration-500" role="banner" style="padding: 1.15rem 0; border-bottom: 1px solid transparent;">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex items-center justify-between gap-4">

        <a href="/" class="flex items-center gap-2 group flex-shrink-0" aria-label="ZARIN Real Estate — Home">
          <span class="font-sans font-extrabold text-2xl tracking-tight text-bone group-hover:text-gold-400 transition-colors duration-300">ZARIN</span>
          <span class="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold border-l border-gold-line pl-2">Real Estate</span>
        </a>

        <nav class="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">

          <!-- 1. Properties -->
          <div class="mega-menu-trigger flex items-center group/prop">
            <a href="/properties" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300" id="properties-nav-link" aria-current="page">Properties</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-300" id="properties-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="properties-mega-panel" aria-label="Toggle Properties submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="properties-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[640px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-3 gap-x-6 gap-y-3" role="region" aria-label="Properties submenu">
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">For Sale</div>
              <a href="/properties-for-sale" class="text-sm text-bone hover:text-gold-400 transition-colors">All Properties for Sale</a>
              <a href="/apartments-for-sale-in-dubai" class="text-sm text-gold-400 font-semibold hover:text-gold-300 transition-colors" aria-current="page">Apartments</a>
              <a href="/properties#villas" class="text-sm text-ash hover:text-gold-400 transition-colors">Villas</a>
              <a href="/properties#penthouses" class="text-sm text-ash hover:text-gold-400 transition-colors">Penthouses</a>
              <a href="/properties#townhouses" class="text-sm text-ash hover:text-gold-400 transition-colors">Townhouses</a>
              <a href="/trophy-residences" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">Trophy Residences →</a>
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">For Rent</div>
              <a href="/properties-for-rent" class="text-sm text-bone hover:text-gold-400 transition-colors">All Rentals</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">By Lifestyle</div>
              <a href="/properties#beachfront" class="text-sm text-ash hover:text-gold-400 transition-colors">Beachfront</a>
              <a href="/properties#burj-view" class="text-sm text-ash hover:text-gold-400 transition-colors">Burj View</a>
              <a href="/properties#golf-course" class="text-sm text-ash hover:text-gold-400 transition-colors">Golf Course</a>
              <a href="/branded-residences-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Branded Residences</a>
              <a href="/commercial-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Commercial</a>
            </div>
          </div>

          <!-- 2. Off-Plan -->
          <div class="mega-menu-trigger flex items-center group/offplan">
            <a href="/off-plan" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300" id="offplan-nav-link">Off-Plan</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-ash hover:text-gold-400 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-400" id="offplan-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="offplan-mega-panel" aria-label="Toggle Off-Plan submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="offplan-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3" role="region" aria-label="Off-Plan submenu">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Discover</div>
              <a href="/off-plan" class="text-sm text-bone hover:text-gold-400 transition-colors">All Off-Plan Projects</a>
              <a href="/off-plan/new-launches" class="text-sm text-ash hover:text-gold-400 transition-colors">New Launches</a>
              <a href="/off-plan/coming-soon" class="text-sm text-ash hover:text-gold-400 transition-colors">Coming Soon</a>
              <a href="/off-plan/by-developer" class="text-sm text-ash hover:text-gold-400 transition-colors">By Developer</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">Investment Tools</div>
              <a href="/off-plan/investment-guide" class="text-sm text-ash hover:text-gold-400 transition-colors">Investment Guide</a>
              <a href="/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">Payment Calculator</a>
              <a href="/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">ROI Predictor</a>
              <a href="/off-plan/developer-reputation-tracker" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">Developer Tracker →</a>
            </div>
          </div>

          <!-- 3. Areas -->
          <div class="mega-menu-trigger flex items-center group/areas">
            <a href="/areas" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300" id="areas-nav-link">Areas</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-ash hover:text-gold-400 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-400" id="areas-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="areas-mega-panel" aria-label="Toggle Areas submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="areas-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[640px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-3 gap-x-6 gap-y-3" role="region" aria-label="Areas submenu">
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Featured Areas</div>
              <a href="/areas/palm-jumeirah" class="text-sm text-bone hover:text-gold-400 transition-colors">Palm Jumeirah</a>
              <a href="/areas/downtown-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Downtown Dubai</a>
              <a href="/areas/dubai-hills-estate" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai Hills Estate</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai Marina</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Business Bay</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Creek Harbour</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Jumeirah Bay Island</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Emirates Hills</a>
              <a href="/areas" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">All Areas →</a>
            </div>
          </div>

          <!-- 4. Private Office -->
          <div class="mega-menu-trigger flex items-center group/po">
            <a href="/private-office" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300" id="private-office-nav-link">Private Office</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-300" id="private-office-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="po-mega-panel" aria-label="Toggle Private Office submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="po-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-gold-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3" role="region" aria-label="Private Office submenu">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">The Private Office (AED 25M+)</div>
              <a href="/private-office" class="text-sm text-bone hover:text-gold-400 transition-colors">Overview</a>
              <a href="/private-office/off-market" class="text-sm text-ash hover:text-gold-400 transition-colors">Off-Market Listings</a>
              <a href="/private-office/multi-currency" class="text-sm text-ash hover:text-gold-400 transition-colors">Multi-Currency Pricing</a>
              <a href="/private-office/crypto-payments" class="text-sm text-ash hover:text-gold-400 transition-colors">Crypto Payments</a>
              <a href="/private-office/concierge" class="text-sm text-ash hover:text-gold-400 transition-colors">Lifestyle Concierge</a>
              <a href="/private-office/yacht-aviation" class="text-sm text-ash hover:text-gold-400 transition-colors">Yacht &amp; Aviation</a>
              <a href="/private-office/cross-border-tax" class="text-sm text-ash hover:text-gold-400 transition-colors">Cross-Border Tax</a>
            </div>
          </div>

          <!-- 5. Services -->
          <div class="mega-menu-trigger flex items-center group/services">
            <a href="/services" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300" id="services-nav-link">Services</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-ash hover:text-gold-400 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-400" id="services-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="services-mega-panel" aria-label="Toggle Services submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="services-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3" role="region" aria-label="Services submenu">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Buying &amp; Selling</div>
              <a href="/services/buying" class="text-sm text-bone hover:text-gold-400 transition-colors">Buying Advisory</a>
              <a href="/services/selling" class="text-sm text-ash hover:text-gold-400 transition-colors">Selling Advisory</a>
              <a href="/services/mortgage" class="text-sm text-ash hover:text-gold-400 transition-colors">Mortgage Advisory</a>
              <a href="/services/valuation" class="text-sm text-ash hover:text-gold-400 transition-colors">Free Valuation</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">Management &amp; Legal</div>
              <a href="/services/property-management" class="text-sm text-ash hover:text-gold-400 transition-colors">Property Management</a>
              <a href="/services/legal" class="text-sm text-ash hover:text-gold-400 transition-colors">Legal &amp; Conveyancing</a>
              <a href="/services/insurance" class="text-sm text-ash hover:text-gold-400 transition-colors">Property Insurance</a>
              <a href="/services/after-sales" class="text-sm text-ash hover:text-gold-400 transition-colors">After-Sales Support</a>
            </div>
          </div>

          <!-- 6. Visas -->
          <div class="mega-menu-trigger flex items-center group/visas">
            <a href="/visas" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300" id="visas-nav-link">Visas &amp; Residency</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-ash hover:text-gold-400 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-400" id="visas-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="visas-mega-panel" aria-label="Toggle Visas submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="visas-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3" role="region" aria-label="Visas submenu">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Visa Types</div>
              <a href="/visas" class="text-sm text-bone hover:text-gold-400 transition-colors">All Visas Hub</a>
              <a href="/visas/golden-visa" class="text-sm text-ash hover:text-gold-400 transition-colors">Golden Visa (10-Year)</a>
              <a href="/visas/investor-visa" class="text-sm text-ash hover:text-gold-400 transition-colors">Investor Visa (2-Year)</a>
              <a href="/visas/retirement-visa" class="text-sm text-ash hover:text-gold-400 transition-colors">Retirement Visa (5-Year)</a>
              <a href="/visas/remote-work-visa" class="text-sm text-ash hover:text-gold-400 transition-colors">Remote Work Visa</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">By Nationality</div>
              <a href="/visas/for-indian-buyers" class="text-sm text-ash hover:text-gold-400 transition-colors">For Indian Buyers</a>
              <a href="/visas/for-uk-buyers" class="text-sm text-ash hover:text-gold-400 transition-colors">For UK Buyers</a>
              <a href="/visas/for-chinese-buyers" class="text-sm text-ash hover:text-gold-400 transition-colors">For Chinese Buyers</a>
              <a href="/visas/eligibility-checker" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">Check Eligibility →</a>
            </div>
          </div>

          <!-- 7. Market Insights -->
          <div class="mega-menu-trigger flex items-center group/insights">
            <a href="/insights" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300" id="insights-nav-link">Market Insights</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-ash hover:text-gold-400 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-400" id="insights-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="insights-mega-panel" aria-label="Toggle Insights submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="insights-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3" role="region" aria-label="Insights submenu">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Content Hub</div>
              <a href="/insights" class="text-sm text-bone hover:text-gold-400 transition-colors">All Insights</a>
              <a href="/insights/blog" class="text-sm text-ash hover:text-gold-400 transition-colors">Blog Articles</a>
              <a href="/insights/market-reports" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Reports</a>
              <a href="/insights/podcast" class="text-sm text-ash hover:text-gold-400 transition-colors">Podcast</a>
              <a href="/insights/guides" class="text-sm text-ash hover:text-gold-400 transition-colors">Buyer's Guides</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">Tools &amp; Reference</div>
              <a href="/insights/calculators" class="text-sm text-ash hover:text-gold-400 transition-colors">All Calculators</a>
              <a href="/insights/faq" class="text-sm text-ash hover:text-gold-400 transition-colors">FAQ Hub</a>
              <a href="/insights/glossary" class="text-sm text-ash hover:text-gold-400 transition-colors">Glossary</a>
              <a href="/insights/market-data" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Data</a>
            </div>
          </div>

          <!-- 8. Heritage -->
          <div class="mega-menu-trigger flex items-center group/heritage">
            <a href="/heritage" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300" id="heritage-nav-link">Heritage</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-ash hover:text-gold-400 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-400" id="heritage-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="heritage-mega-panel" aria-label="Toggle Heritage submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="heritage-mega-panel" class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3" role="region" aria-label="Heritage submenu">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">About ZARIN</div>
              <a href="/heritage" class="text-sm text-bone hover:text-gold-400 transition-colors">Our Story</a>
              <a href="/heritage/founder" class="text-sm text-ash hover:text-gold-400 transition-colors">Founder's Letter</a>
              <a href="/heritage/team" class="text-sm text-ash hover:text-gold-400 transition-colors">Our Team</a>
              <a href="/heritage/authors" class="text-sm text-ash hover:text-gold-400 transition-colors">Author Profiles</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">Trust &amp; Proof</div>
              <a href="/heritage/testimonials" class="text-sm text-ash hover:text-gold-400 transition-colors">Testimonials</a>
              <a href="/heritage/awards" class="text-sm text-ash hover:text-gold-400 transition-colors">Awards</a>
              <a href="/heritage/press" class="text-sm text-ash hover:text-gold-400 transition-colors">Press &amp; Media</a>
              <a href="/heritage/case-studies" class="text-sm text-ash hover:text-gold-400 transition-colors">Case Studies</a>
            </div>
          </div>
        </nav>

        <!-- Header Actions -->
        <div class="header-action-cluster flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <a href="tel:+971586901231" class="hidden xl:flex items-center gap-2 text-xs font-semibold text-ash hover:text-gold-400 transition-colors whitespace-nowrap" aria-label="Call us at +971 58 690 1231">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span dir="ltr" class="tabular-nums">+971 58 690 1231</span>
          </a>

          <a href="/consultation" class="header-cta hidden lg:inline-flex items-center justify-center h-[34px] px-4 md:px-5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-[0.06em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold whitespace-nowrap" aria-label="Book a consultation">
            Book Consultation
          </a>

          <div class="lang-switch hidden lg:inline-flex items-center h-[34px] bg-white/[0.04] border border-white-line rounded-xs p-0.5" role="group" aria-label="Language selection">
            <button type="button" class="lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all active is-active" data-lang="en" aria-label="Switch to English" aria-pressed="true">EN</button>
            <a href="/fa/properties" class="lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all flex items-center justify-center text-ash hover:text-gold-300" data-lang="fa" aria-label="تغییر زبان به فارسی" aria-pressed="false">فارسی</a>
          </div>

          <div class="mobile-lang-container relative lg:hidden" id="mobile-lang-container">
            <button type="button" id="mobile-lang-trigger" class="mobile-lang-trigger" aria-label="Select language / تغییر زبان" aria-haspopup="true" aria-expanded="false" aria-controls="mobile-lang-menu">
              <span id="mobile-lang-label">EN</span>
              <svg class="mobile-lang-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mobile-lang-menu" class="mobile-lang-menu hidden" role="menu" aria-labelledby="mobile-lang-trigger">
              <button type="button" class="lang-btn mobile-lang-item is-active" data-lang="en" role="menuitem" aria-label="Switch to English">
                <span>English (EN)</span>
                <span class="mobile-lang-check text-gold-400 font-bold">✓</span>
              </button>
              <a href="/fa/properties" class="lang-btn mobile-lang-item flex items-center justify-between" data-lang="fa" role="menuitem" aria-label="تغییر به زبان فارسی">
                <span>فارسی (FA)</span>
              </a>
            </div>
          </div>

          <button id="mobile-menu-toggle" class="lg:hidden text-bone hover:text-gold-400 transition-colors p-2" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- ════════════════════════════════════════════════════════════════
       MOBILE MENU DRAWER
       ════════════════════════════════════════════════════════════════ -->
  <div id="mobile-menu" class="mobile-menu fixed top-0 right-0 w-full max-w-sm h-full bg-ink-900 border-l border-white-line z-[1000] overflow-y-auto lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <div class="p-6">
      <div class="flex justify-between items-center mb-8">
        <span class="font-sans font-extrabold text-xl text-bone">ZARIN</span>
        <button id="mobile-menu-close" class="text-ash hover:text-gold-400 transition-colors" aria-label="Close menu">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <nav class="flex flex-col gap-1" aria-label="Mobile primary navigation">
        <!-- 1. Properties Accordion -->
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/properties" class="flex-1 py-3 px-4 text-sm font-semibold text-gold-400">Properties</a>
            <button type="button" id="mobile-properties-toggle" aria-expanded="false" aria-controls="mobile-properties-submenu" aria-label="Toggle Properties submenu" class="p-3 text-gold-400 hover:text-gold-300 focus:outline-none">
              <svg class="w-4 h-4 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
          <div id="mobile-properties-submenu" class="hidden pl-6 pr-4 py-2 flex flex-col gap-2 border-l border-white-line ml-4 my-1">
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-1">For Sale</div>
            <a href="/properties-for-sale" class="text-xs text-bone hover:text-gold-400 py-1">All Properties for Sale</a>
            <a href="/apartments-for-sale-in-dubai" class="text-xs text-gold-400 font-semibold py-1">Apartments</a>
            <a href="/properties#villas" class="text-xs text-ash hover:text-gold-400 py-1">Villas</a>
            <a href="/properties#penthouses" class="text-xs text-ash hover:text-gold-400 py-1">Penthouses</a>
            <a href="/properties#townhouses" class="text-xs text-ash hover:text-gold-400 py-1">Townhouses</a>
            <a href="/trophy-residences" class="text-xs text-gold-400 font-semibold py-1">Trophy Residences →</a>
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-2">For Rent</div>
            <a href="/properties-for-rent" class="text-xs text-bone hover:text-gold-400 py-1">All Rentals</a>
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-2">By Lifestyle</div>
            <a href="/properties#beachfront" class="text-xs text-ash hover:text-gold-400 py-1">Beachfront</a>
            <a href="/properties#burj-view" class="text-xs text-ash hover:text-gold-400 py-1">Burj View</a>
            <a href="/properties#golf-course" class="text-xs text-ash hover:text-gold-400 py-1">Golf Course</a>
            <a href="/branded-residences-in-dubai" class="text-xs text-ash hover:text-gold-400 py-1">Branded Residences</a>
            <a href="/commercial-properties-in-dubai" class="text-xs text-ash hover:text-gold-400 py-1">Commercial</a>
          </div>
        </div>

        <!-- 2. Off-Plan Accordion -->
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/off-plan" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">Off-Plan</a>
            <button type="button" id="mobile-offplan-toggle" aria-expanded="false" aria-controls="mobile-offplan-submenu" aria-label="Toggle Off-Plan submenu" class="p-3 text-ash hover:text-gold-400 focus:outline-none">
              <svg class="w-4 h-4 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
          <div id="mobile-offplan-submenu" class="hidden pl-6 pr-4 py-2 flex flex-col gap-2 border-l border-white-line ml-4 my-1">
            <a href="/off-plan" class="text-xs text-bone hover:text-gold-400 py-1">All Off-Plan Projects</a>
            <a href="/off-plan/new-launches" class="text-xs text-ash hover:text-gold-400 py-1">New Launches</a>
            <a href="/off-plan/by-developer" class="text-xs text-ash hover:text-gold-400 py-1">By Developer</a>
            <a href="/off-plan/investment-guide" class="text-xs text-ash hover:text-gold-400 py-1">Investment Guide</a>
          </div>
        </div>

        <!-- 3. Areas Accordion -->
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/areas" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400">Areas</a>
            <button type="button" id="mobile-areas-toggle" aria-expanded="false" aria-controls="mobile-areas-submenu" aria-label="Toggle Areas submenu" class="p-3 text-ash hover:text-gold-400 focus:outline-none">
              <svg class="w-4 h-4 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
          <div id="mobile-areas-submenu" class="hidden pl-6 pr-4 py-2 flex flex-col gap-2 border-l border-white-line ml-4 my-1">
            <a href="/areas/palm-jumeirah" class="text-xs text-bone hover:text-gold-400 py-1">Palm Jumeirah</a>
            <a href="/areas/downtown-dubai" class="text-xs text-ash hover:text-gold-400 py-1">Downtown Dubai</a>
            <a href="/areas/dubai-hills-estate" class="text-xs text-ash hover:text-gold-400 py-1">Dubai Hills Estate</a>
            <a href="/areas" class="text-xs text-gold-400 font-semibold py-1">All Areas →</a>
          </div>
        </div>

        <a href="/private-office" class="py-3 px-4 text-sm font-semibold text-gold-400 hover:bg-white-soft rounded-xs transition-all">Private Office</a>
        <a href="/services" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Services</a>
        <a href="/visas" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Visas &amp; Residency</a>
        <a href="/insights" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Market Insights</a>
        <a href="/heritage" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Heritage</a>

        <div class="h-px bg-white-line my-4"></div>
        <a href="/consultation" class="py-3 px-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-wide text-center rounded-xs hover:bg-gold-300 transition-all shadow-gold">Book Consultation</a>
        <a href="tel:+971586901231" class="py-2.5 px-4 text-xs text-ash hover:text-gold-400 text-center font-medium">+971 58 690 1231</a>
        <a href="https://wa.me/971586901231" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 text-xs text-tether hover:text-tether/80 text-center font-semibold">WhatsApp Advisory</a>
      </nav>
    </div>
  </div>

  <main id="main">

    <!-- ════════════════════════════════════════════════════════════════
         0. BREADCRUMB
         ════════════════════════════════════════════════════════════════ -->
    <div class="bg-ink-950/60 border-b border-white-line/50 pt-24 pb-3">
      <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center flex-wrap gap-2 text-xs text-ash">
            <li><a href="/" class="hover:text-gold-400 transition-colors">Home</a></li>
            <li class="text-slate select-none" aria-hidden="true">/</li>
            <li><a href="/properties" class="hover:text-gold-400 transition-colors">Properties</a></li>
            <li class="text-slate select-none" aria-hidden="true">/</li>
            <li><a href="/properties-for-sale" class="hover:text-gold-400 transition-colors">For Sale</a></li>
            <li class="text-slate select-none" aria-hidden="true">/</li>
            <li class="text-gold-400 font-semibold" aria-current="page">Apartments</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════════════════
         1. HERO SECTION
         ════════════════════════════════════════════════════════════════ -->
    <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Apartments for sale hero">
      <div class="absolute inset-0 opacity-25" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080">
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/90 to-ink-900/60" aria-hidden="true"></div>

      <div class="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="max-w-3xl animate-fade-in-up">
          <div class="inline-flex items-center gap-2 mb-6" aria-hidden="true">
            <span class="w-8 h-px bg-gold-400"></span>
            <span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">Apartments &middot; Studios to 4BR+</span>
          </div>

          <h1 id="hero-headline" class="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-bone mb-6">
            Apartments<br>for <span class="text-gold-gradient">Sale in Dubai</span>
          </h1>

          <p id="tldr-summary" class="text-base sm:text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-4 font-light">
            Studios, 1-bedroom, 2-bedroom, 3-bedroom, and 4+ bedroom apartments across Dubai's most liquid residential communities. Every listing in our network is personally inspected by a ZARIN advisor — floor plan verified, service charge audited, view confirmed, and recent comparable transactions extracted directly from the Dubai Land Department database.
          </p>

          <p class="text-sm sm:text-base text-slate max-w-2xl leading-relaxed mb-8">
            Filter the curated sample below by bedroom layout, budget range, or neighbourhood. Whether you are acquiring for end-use residence, dollar-denominated rental yields, or long-term capital preservation, your advisor tailors the search to your specific mandate — without algorithmic portal noise or stale inventory.
          </p>

          <div class="flex flex-wrap gap-4">
            <a href="#apartment-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse apartment listings">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
              Browse Apartments
            </a>
            <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to an apartment advisor">
              Speak to Advisor
            </a>
            <button type="button" id="hero-custom-search-btn" class="inline-flex items-center gap-2 px-5 py-4 text-xs uppercase tracking-wider text-gold-400 hover:text-gold-300 font-semibold transition-colors">
              Request Shortlist within 24h →
            </button>
          </div>

          <!-- Market Statistics -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line" role="list" aria-label="Dubai apartment market benchmark data">
            <div role="listitem">
              <div class="text-3xl font-bold text-gold-400 stat-number">1,200+</div>
              <div class="text-xs text-slate uppercase tracking-wider mt-1">Active Network Units</div>
            </div>
            <div role="listitem">
              <div class="text-3xl font-bold text-gold-400 stat-number">AED 1,800</div>
              <div class="text-xs text-slate uppercase tracking-wider mt-1">Avg Market Price / sqft</div>
            </div>
            <div role="listitem">
              <div class="text-3xl font-bold text-gold-400 stat-number">2BR &amp; 3BR</div>
              <div class="text-xs text-slate uppercase tracking-wider mt-1">High-Liquidity Layouts</div>
            </div>
            <div role="listitem">
              <div class="text-3xl font-bold text-gold-400 stat-number">12</div>
              <div class="text-xs text-slate uppercase tracking-wider mt-1">Prime Communities</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════════════
         2. INTERACTIVE FILTER & SEARCH TOOLBAR (STICKY GLASS)
         ════════════════════════════════════════════════════════════════ -->
    <section id="filter-bar" class="sticky top-0 z-50 glass border-y border-white-line py-4" aria-label="Apartment search and filters">
      <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 space-y-3">

        <!-- Search Input + Dropdown Selectors Row -->
        <div class="flex flex-col md:flex-row items-stretch md:items-center gap-3">

          <!-- Search Keyword -->
          <div class="relative flex-1">
            <label for="search-input" class="sr-only">Search apartments by keyword, community, or building</label>
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate" aria-hidden="true">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <input type="text" id="search-input" placeholder="Search by building, area, layout (e.g. Marina Gate, JVC, Burj View)..." class="w-full bg-ink-850 border border-white-line rounded-xs pl-10 pr-10 py-2.5 text-xs text-bone placeholder-slate focus:outline-none focus:border-gold-line focus:ring-1 focus:ring-gold-400 transition-all">
            <button type="button" id="search-clear-btn" class="hidden absolute inset-y-0 right-0 pr-3 flex items-center text-slate hover:text-gold-400 text-xs" aria-label="Clear search input">✕</button>
          </div>

          <!-- Area Dropdown -->
          <div class="w-full md:w-48">
            <label for="area-select" class="sr-only">Filter by neighbourhood</label>
            <select id="area-select" class="w-full bg-ink-850 border border-white-line rounded-xs px-3 py-2.5 text-xs text-bone focus:outline-none focus:border-gold-line focus:ring-1 focus:ring-gold-400 transition-all cursor-pointer">
              <option value="all">All Prime Areas</option>
              <option value="marina">Dubai Marina</option>
              <option value="downtown">Downtown Dubai</option>
              <option value="business-bay">Business Bay</option>
              <option value="jvc">Jumeirah Village Circle (JVC)</option>
              <option value="dubai-hills">Dubai Hills Estate</option>
              <option value="bluewaters">Bluewaters Island</option>
              <option value="palm">Palm Jumeirah</option>
            </select>
          </div>

          <!-- Price Range Dropdown -->
          <div class="w-full md:w-44">
            <label for="price-select" class="sr-only">Filter by price range</label>
            <select id="price-select" class="w-full bg-ink-850 border border-white-line rounded-xs px-3 py-2.5 text-xs text-bone focus:outline-none focus:border-gold-line focus:ring-1 focus:ring-gold-400 transition-all cursor-pointer">
              <option value="all">Any Price Band</option>
              <option value="under-1m">Under AED 1M</option>
              <option value="1m-3m">AED 1M – 3M</option>
              <option value="3m-5m">AED 3M – 5M</option>
              <option value="5m-plus">AED 5M+</option>
            </select>
          </div>

          <!-- Status Dropdown -->
          <div class="w-full md:w-36">
            <label for="status-select" class="sr-only">Filter by construction status</label>
            <select id="status-select" class="w-full bg-ink-850 border border-white-line rounded-xs px-3 py-2.5 text-xs text-bone focus:outline-none focus:border-gold-line focus:ring-1 focus:ring-gold-400 transition-all cursor-pointer">
              <option value="all">All Statuses</option>
              <option value="ready">Ready Units</option>
              <option value="offplan">Off-Plan Launches</option>
            </select>
          </div>

          <!-- Reset Button -->
          <button type="button" id="reset-filters-btn" class="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 border border-white-line hover:border-gold-line rounded-xs text-xs font-semibold text-ash hover:text-gold-400 transition-colors whitespace-nowrap" aria-label="Reset all search filters">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            <span>Reset</span>
          </button>
        </div>

        <!-- Bedroom Quick Chips & Sorting Toolbar -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white-line/40">
          <!-- Bedroom Chips -->
          <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Filter apartments by bedroom count">
            <span class="text-[11px] uppercase tracking-[0.2em] text-slate font-semibold mr-1" aria-hidden="true">Bedrooms:</span>
            <button type="button" class="filter-chip active px-3 py-1.5 border border-white-line rounded-xs text-xs font-semibold text-ash" data-bed="all" aria-pressed="true">All Layouts</button>
            <button type="button" class="filter-chip px-3 py-1.5 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-bed="studio" aria-pressed="false">Studio</button>
            <button type="button" class="filter-chip px-3 py-1.5 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-bed="1br" aria-pressed="false">1BR</button>
            <button type="button" class="filter-chip px-3 py-1.5 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-bed="2br" aria-pressed="false">2BR</button>
            <button type="button" class="filter-chip px-3 py-1.5 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-bed="3br" aria-pressed="false">3BR</button>
            <button type="button" class="filter-chip px-3 py-1.5 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-bed="4br" aria-pressed="false">4BR+</button>
          </div>

          <!-- Results Count & Sorting -->
          <div class="flex items-center gap-4 text-xs ml-auto">
            <span id="results-count" class="text-ash font-medium" aria-live="polite">Showing 6 verified apartments</span>
            <div class="flex items-center gap-1.5">
              <label for="sort-select" class="text-slate font-medium">Sort:</label>
              <select id="sort-select" class="bg-ink-850 border border-white-line rounded-xs px-2.5 py-1.5 text-xs text-bone focus:outline-none focus:border-gold-line transition-colors cursor-pointer">
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-desc">Area: Largest First</option>
                <option value="beds-asc">Bedrooms: Min to Max</option>
              </select>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════════════
         3. APARTMENT LISTINGS GRID
         ════════════════════════════════════════════════════════════════ -->
    <section id="apartment-grid" class="bg-ink-900 py-16 md:py-20" aria-label="Apartment listings">
      <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">Curated Portfolio</div>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">Inspected Apartments Across Dubai</h2>
          </div>
          <p class="text-sm text-ash max-w-md leading-relaxed">
            Every apartment in this showcase has been physically verified by a senior advisor. Asking prices are benchmarked against official land registry records to ensure honest valuation.
          </p>
        </div>

        <!-- Grid Container -->
        <div id="apartments-container" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Dubai apartment listings">

          <!-- Card 1: Studio JVC -->
          <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group flex flex-col justify-between" role="listitem"
            data-id="apt-001"
            data-bed="studio"
            data-beds-num="0"
            data-area="jvc"
            data-price="380000"
            data-size="410"
            data-status="ready"
            data-title="Studio · Belgravia II"
            data-location="Jumeirah Village Circle">
            <div>
              <div class="block img-zoom relative aspect-[4/3] overflow-hidden bg-ink-950">
                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="Studio apartment in Belgravia II, Jumeirah Village Circle" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'">
                <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Entry-Level Yield</div>
                <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 380K</div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Studio &middot; Apartment</div>
                  <span class="inline-flex items-center gap-1 text-[11px] text-success font-medium"><span class="w-1.5 h-1.5 rounded-full bg-success"></span>Ready</span>
                </div>
                <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Studio &middot; Belgravia II</h3>
                <div class="text-sm text-ash mb-4">Jumeirah Village Circle &middot; 410 sqft</div>
                <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4 mb-4">
                  <div><div class="text-bone font-semibold">Studio</div><div>Layout</div></div>
                  <div><div class="text-bone font-semibold">1</div><div>Bathroom</div></div>
                  <div><div class="text-bone font-semibold">AED 927</div><div>per sqft</div></div>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6 pt-0 flex items-center justify-between border-t border-white-line/40 mt-auto pt-4">
              <div>
                <div class="text-xs text-slate uppercase tracking-wider">Asking Price</div>
                <div class="text-base font-bold text-gold-400">AED 380,000 <span class="text-xs text-slate font-normal">(~$103,500)</span></div>
              </div>
              <button type="button" class="inquiry-trigger-btn px-4 py-2 border border-gold-line rounded-xs text-xs font-bold uppercase text-bone hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" data-property="Studio · Belgravia II (JVC)">
                Enquire
              </button>
            </div>
          </article>

          <!-- Card 2: 1BR Business Bay -->
          <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group flex flex-col justify-between" role="listitem"
            data-id="apt-002"
            data-bed="1br"
            data-beds-num="1"
            data-area="business-bay"
            data-price="980000"
            data-size="720"
            data-status="ready"
            data-title="1BR Apartment · Executive Tower"
            data-location="Business Bay">
            <div>
              <div class="block img-zoom relative aspect-[4/3] overflow-hidden bg-ink-950">
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" alt="1-bedroom apartment in Executive Tower, Business Bay with skyline view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'">
                <div class="absolute top-3 left-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">City View</div>
                <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 980K</div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">1 Bedroom &middot; Apartment</div>
                  <span class="inline-flex items-center gap-1 text-[11px] text-success font-medium"><span class="w-1.5 h-1.5 rounded-full bg-success"></span>Ready</span>
                </div>
                <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">1BR Apartment &middot; Executive Tower</h3>
                <div class="text-sm text-ash mb-4">Business Bay &middot; 720 sqft</div>
                <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4 mb-4">
                  <div><div class="text-bone font-semibold">1</div><div>Bedroom</div></div>
                  <div><div class="text-bone font-semibold">2</div><div>Bathrooms</div></div>
                  <div><div class="text-bone font-semibold">AED 1,361</div><div>per sqft</div></div>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6 pt-0 flex items-center justify-between border-t border-white-line/40 mt-auto pt-4">
              <div>
                <div class="text-xs text-slate uppercase tracking-wider">Asking Price</div>
                <div class="text-base font-bold text-gold-400">AED 980,000 <span class="text-xs text-slate font-normal">(~$266,800)</span></div>
              </div>
              <button type="button" class="inquiry-trigger-btn px-4 py-2 border border-gold-line rounded-xs text-xs font-bold uppercase text-bone hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" data-property="1BR Apartment · Executive Tower (Business Bay)">
                Enquire
              </button>
            </div>
          </article>

          <!-- Card 3: 2BR Marina Sea View -->
          <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group flex flex-col justify-between" role="listitem"
            data-id="apt-003"
            data-bed="2br"
            data-beds-num="2"
            data-area="marina"
            data-price="2400000"
            data-size="1320"
            data-status="ready"
            data-title="2BR Apartment · Marina Gate"
            data-location="Dubai Marina">
            <div>
              <div class="block img-zoom relative aspect-[4/3] overflow-hidden bg-ink-950">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="2-bedroom apartment in Marina Gate, Dubai Marina with sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'">
                <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Sea View</div>
                <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 2.40M</div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">2 Bedrooms &middot; Apartment</div>
                  <span class="inline-flex items-center gap-1 text-[11px] text-success font-medium"><span class="w-1.5 h-1.5 rounded-full bg-success"></span>Ready</span>
                </div>
                <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">2BR Apartment &middot; Marina Gate</h3>
                <div class="text-sm text-ash mb-4">Dubai Marina &middot; 1,320 sqft</div>
                <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4 mb-4">
                  <div><div class="text-bone font-semibold">2</div><div>Bedrooms</div></div>
                  <div><div class="text-bone font-semibold">3</div><div>Bathrooms</div></div>
                  <div><div class="text-bone font-semibold">AED 1,818</div><div>per sqft</div></div>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6 pt-0 flex items-center justify-between border-t border-white-line/40 mt-auto pt-4">
              <div>
                <div class="text-xs text-slate uppercase tracking-wider">Asking Price</div>
                <div class="text-base font-bold text-gold-400">AED 2.40M <span class="text-xs text-slate font-normal">(~$653,500)</span></div>
              </div>
              <button type="button" class="inquiry-trigger-btn px-4 py-2 border border-gold-line rounded-xs text-xs font-bold uppercase text-bone hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" data-property="2BR Apartment · Marina Gate (Dubai Marina)">
                Enquire
              </button>
            </div>
          </article>

          <!-- Card 4: 3BR Downtown Burj View -->
          <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group flex flex-col justify-between" role="listitem"
            data-id="apt-004"
            data-bed="3br"
            data-beds-num="3"
            data-area="downtown"
            data-price="4600000"
            data-size="1950"
            data-status="ready"
            data-title="3BR Apartment · Burj Vista"
            data-location="Downtown Dubai">
            <div>
              <div class="block img-zoom relative aspect-[4/3] overflow-hidden bg-ink-950">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="3-bedroom apartment in Burj Vista, Downtown Dubai with Burj Khalifa view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'">
                <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Burj View</div>
                <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 4.60M</div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">3 Bedrooms &middot; Apartment</div>
                  <span class="inline-flex items-center gap-1 text-[11px] text-success font-medium"><span class="w-1.5 h-1.5 rounded-full bg-success"></span>Ready</span>
                </div>
                <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Apartment &middot; Burj Vista</h3>
                <div class="text-sm text-ash mb-4">Downtown Dubai &middot; 1,950 sqft</div>
                <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4 mb-4">
                  <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
                  <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
                  <div><div class="text-bone font-semibold">AED 2,359</div><div>per sqft</div></div>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6 pt-0 flex items-center justify-between border-t border-white-line/40 mt-auto pt-4">
              <div>
                <div class="text-xs text-slate uppercase tracking-wider">Asking Price</div>
                <div class="text-base font-bold text-gold-400">AED 4.60M <span class="text-xs text-slate font-normal">(~$1,252,500)</span></div>
              </div>
              <button type="button" class="inquiry-trigger-btn px-4 py-2 border border-gold-line rounded-xs text-xs font-bold uppercase text-bone hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" data-property="3BR Apartment · Burj Vista (Downtown Dubai)">
                Enquire
              </button>
            </div>
          </article>

          <!-- Card 5: 4BR Bluewaters Residences -->
          <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group flex flex-col justify-between" role="listitem"
            data-id="apt-005"
            data-bed="4br"
            data-beds-num="4"
            data-area="bluewaters"
            data-price="7800000"
            data-size="3100"
            data-status="ready"
            data-title="4BR Apartment · Bluewaters Residences"
            data-location="Bluewaters Island">
            <div>
              <div class="block img-zoom relative aspect-[4/3] overflow-hidden bg-ink-950">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="4-bedroom apartment in Bluewaters Residences with sea and island view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'">
                <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Island Living</div>
                <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 7.80M</div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">4 Bedrooms &middot; Apartment</div>
                  <span class="inline-flex items-center gap-1 text-[11px] text-success font-medium"><span class="w-1.5 h-1.5 rounded-full bg-success"></span>Ready</span>
                </div>
                <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Apartment &middot; Bluewaters</h3>
                <div class="text-sm text-ash mb-4">Bluewaters Island &middot; 3,100 sqft</div>
                <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4 mb-4">
                  <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
                  <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
                  <div><div class="text-bone font-semibold">AED 2,516</div><div>per sqft</div></div>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6 pt-0 flex items-center justify-between border-t border-white-line/40 mt-auto pt-4">
              <div>
                <div class="text-xs text-slate uppercase tracking-wider">Asking Price</div>
                <div class="text-base font-bold text-gold-400">AED 7.80M <span class="text-xs text-slate font-normal">(~$2,123,800)</span></div>
              </div>
              <button type="button" class="inquiry-trigger-btn px-4 py-2 border border-gold-line rounded-xs text-xs font-bold uppercase text-bone hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" data-property="4BR Apartment · Bluewaters Residences">
                Enquire
              </button>
            </div>
          </article>

          <!-- Card 6: 3BR Palm Tower Sky Apartment -->
          <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group flex flex-col justify-between" role="listitem"
            data-id="apt-006"
            data-bed="3br"
            data-beds-num="3"
            data-area="palm"
            data-price="6200000"
            data-size="2400"
            data-status="ready"
            data-title="3BR Sky Apartment · Palm Tower"
            data-location="Palm Jumeirah">
            <div>
              <div class="block img-zoom relative aspect-[4/3] overflow-hidden bg-ink-950">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" alt="3-bedroom sky apartment in Palm Tower, Palm Jumeirah with panoramic sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'">
                <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Palm Skyline</div>
                <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 6.20M</div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">3 Bedrooms &middot; Sky Apartment</div>
                  <span class="inline-flex items-center gap-1 text-[11px] text-success font-medium"><span class="w-1.5 h-1.5 rounded-full bg-success"></span>Ready</span>
                </div>
                <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Sky Apartment &middot; Palm Tower</h3>
                <div class="text-sm text-ash mb-4">Palm Jumeirah &middot; 2,400 sqft</div>
                <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4 mb-4">
                  <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
                  <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
                  <div><div class="text-bone font-semibold">AED 2,583</div><div>per sqft</div></div>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6 pt-0 flex items-center justify-between border-t border-white-line/40 mt-auto pt-4">
              <div>
                <div class="text-xs text-slate uppercase tracking-wider">Asking Price</div>
                <div class="text-base font-bold text-gold-400">AED 6.20M <span class="text-xs text-slate font-normal">(~$1,688,200)</span></div>
              </div>
              <button type="button" class="inquiry-trigger-btn px-4 py-2 border border-gold-line rounded-xs text-xs font-bold uppercase text-bone hover:bg-gold-400 hover:text-ink-900 transition-all duration-300" data-property="3BR Sky Apartment · Palm Tower (Palm Jumeirah)">
                Enquire
              </button>
            </div>
          </article>

        </div>

        <!-- Empty State (Hidden by default) -->
        <div id="no-results-state" class="hidden text-center py-16 px-6 bg-ink-850 border border-white-line rounded-sm mt-6">
          <div class="w-14 h-14 mx-auto mb-4 border border-gold-line rounded-xs flex items-center justify-center text-gold-400 bg-gold-soft">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-bone mb-2">No Matching Apartments in Sample Grid</h3>
          <p class="text-sm text-ash max-w-md mx-auto mb-6">
            We couldn't find an apartment matching your exact filter combination in this sample collection. ZARIN maintains over 1,200 active and off-market apartment units across Dubai.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <button type="button" id="empty-reset-btn" class="px-6 py-3 bg-white-soft border border-white-line text-xs font-bold uppercase tracking-wider text-bone hover:border-gold-line transition-colors rounded-xs">
              Reset Filters
            </button>
            <a href="/consultation" class="px-6 py-3 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-gold-300 transition-colors shadow-gold">
              Request Off-Market Shortlist
            </a>
          </div>
        </div>

        <!-- Curated Inventory Footer Notice -->
        <div class="mt-12 text-center p-8 border border-white-line rounded-sm bg-ink-850/50">
          <p class="text-sm text-slate mb-6 max-w-2xl mx-auto leading-relaxed">
            This showcase represents a verified sample of current allocations. ZARIN advisors have direct access to 1,200+ apartment listings, developer inventory, and private off-market assignments across Dubai. Tell us your target criteria and receive an advisor-curated shortlist within 24 hours.
          </p>
          <button type="button" id="grid-custom-search-btn" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request tailored apartment shortlist">
            Request Bespoke Shortlist
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>

      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════════════
         4. BROWSE BY BEDROOM TYPE
         ════════════════════════════════════════════════════════════════ -->
    <section class="bg-ink-850 py-24 md:py-32" aria-label="Browse by bedroom layout">
      <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="text-center mb-16">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by Bedroom Type</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Find Your Optimal Layout</h2>
          <p class="text-ash mt-4 max-w-2xl mx-auto leading-relaxed font-light">
            Dubai apartments span five principal layout archetypes, each with distinct yield profiles, liquidity thresholds, and buyer demographics. Select a layout below to refine current listings.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          <!-- Studio -->
          <div class="quick-bed-card group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift cursor-pointer" data-quick-bed="studio" tabindex="0" role="button" aria-label="Filter by Studio apartments">
            <div class="aspect-[4/3] img-zoom overflow-hidden bg-ink-950">
              <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" alt="Studio apartment interior in Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Studio</h3>
              <p class="text-sm text-ash leading-relaxed mb-4">350–500 sqft compact open-plan layouts. Strong gross rental yield, ideal entry point for capital deployment.</p>
              <div class="flex items-center justify-between text-xs pt-3 border-t border-white-line/40">
                <span class="text-gold-400 font-semibold">From AED 350K</span>
                <span class="text-slate font-medium">Yield Focus →</span>
              </div>
            </div>
          </div>

          <!-- 1 Bedroom -->
          <div class="quick-bed-card group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift cursor-pointer" data-quick-bed="1br" tabindex="0" role="button" aria-label="Filter by 1 Bedroom apartments">
            <div class="aspect-[4/3] img-zoom overflow-hidden bg-ink-950">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80" alt="1-bedroom apartment interior in Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">1 Bedroom</h3>
              <p class="text-sm text-ash leading-relaxed mb-4">650–900 sqft layouts with dedicated bedroom. Core liquidity driver across Business Bay and Dubai Marina.</p>
              <div class="flex items-center justify-between text-xs pt-3 border-t border-white-line/40">
                <span class="text-gold-400 font-semibold">From AED 800K</span>
                <span class="text-slate font-medium">Core Market →</span>
              </div>
            </div>
          </div>

          <!-- 2 Bedroom -->
          <div class="quick-bed-card group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift cursor-pointer" data-quick-bed="2br" tabindex="0" role="button" aria-label="Filter by 2 Bedroom apartments">
            <div class="aspect-[4/3] img-zoom overflow-hidden bg-ink-950">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" alt="2-bedroom apartment interior in Dubai Marina" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">2 Bedroom</h3>
              <p class="text-sm text-ash leading-relaxed mb-4">1,100–1,500 sqft layouts. The preferred benchmark for end-user couples, professionals, and long-term tenancies.</p>
              <div class="flex items-center justify-between text-xs pt-3 border-t border-white-line/40">
                <span class="text-gold-400 font-semibold">From AED 1.6M</span>
                <span class="text-slate font-medium">End-User Core →</span>
              </div>
            </div>
          </div>

          <!-- 3 Bedroom -->
          <div class="quick-bed-card group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift cursor-pointer" data-quick-bed="3br" tabindex="0" role="button" aria-label="Filter by 3 Bedroom apartments">
            <div class="aspect-[4/3] img-zoom overflow-hidden bg-ink-950">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="3-bedroom apartment interior in Downtown Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">3 Bedroom</h3>
              <p class="text-sm text-ash leading-relaxed mb-4">1,700–2,200 sqft family-sized residences. Typically includes maid's quarters, study, and panoramic balcony views.</p>
              <div class="flex items-center justify-between text-xs pt-3 border-t border-white-line/40">
                <span class="text-gold-400 font-semibold">From AED 3.2M</span>
                <span class="text-slate font-medium">Family Living →</span>
              </div>
            </div>
          </div>

          <!-- 4BR+ / Sky Apt -->
          <div class="quick-bed-card group bg-ink-900 border border-gold-line rounded-sm overflow-hidden card-lift cursor-pointer" data-quick-bed="4br" tabindex="0" role="button" aria-label="Filter by 4BR and Sky apartments">
            <div class="aspect-[4/3] img-zoom overflow-hidden bg-ink-950">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="4-bedroom sky apartment interior with sea view in Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">4BR+ / Sky Apt</h3>
              <p class="text-sm text-ash leading-relaxed mb-4">2,800+ sqft sky residences and full-floor units. Premium waterfront or skyline vistas with dedicated service elevator.</p>
              <div class="flex items-center justify-between text-xs pt-3 border-t border-white-line/40">
                <span class="text-gold-400 font-semibold">From AED 5.5M</span>
                <span class="text-gold-300 font-medium">Ultra-Prime →</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════════════
         5. BROWSE BY PRIME APARTMENT COMMUNITIES
         ════════════════════════════════════════════════════════════════ -->
    <section class="bg-ink-900 py-24 md:py-32" aria-label="Browse apartments by Dubai community">
      <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="text-center mb-16">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by Area</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Dubai's Flagship Apartment Districts</h2>
          <p class="text-ash mt-4 max-w-2xl mx-auto leading-relaxed font-light">
            Each neighbourhood represents a distinctive lifestyle, service-charge band, and investment thesis. Click any district to filter live listings or explore neighbourhood dynamics.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Dubai Marina -->
          <div class="quick-area-card group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block cursor-pointer border border-white-line" data-quick-area="marina" tabindex="0" role="button" aria-label="Filter apartments in Dubai Marina">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80" alt="Dubai Marina skyline apartment towers along the canal" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
            <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Dubai Marina</h3>
              <div class="flex items-center justify-between text-xs">
                <span class="text-gold-400 font-semibold">AED 600K – 12M</span>
                <span class="text-ash">High Global Liquidity</span>
              </div>
            </div>
          </div>

          <!-- Downtown Dubai -->
          <div class="quick-area-card group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block cursor-pointer border border-white-line" data-quick-area="downtown" tabindex="0" role="button" aria-label="Filter apartments in Downtown Dubai">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="Downtown Dubai apartment towers with Burj Khalifa" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
            <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Downtown Dubai</h3>
              <div class="flex items-center justify-between text-xs">
                <span class="text-gold-400 font-semibold">AED 1.2M – 18M</span>
                <span class="text-ash">Flagship Sovereign Asset</span>
              </div>
            </div>
          </div>

          <!-- Business Bay -->
          <div class="quick-area-card group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block cursor-pointer border border-white-line" data-quick-area="business-bay" tabindex="0" role="button" aria-label="Filter apartments in Business Bay">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Business Bay apartment towers along Dubai Water Canal" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
            <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Business Bay</h3>
              <div class="flex items-center justify-between text-xs">
                <span class="text-gold-400 font-semibold">AED 500K – 7M</span>
                <span class="text-ash">Corporate Yield Hub</span>
              </div>
            </div>
          </div>

          <!-- Jumeirah Village Circle -->
          <div class="quick-area-card group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block cursor-pointer border border-white-line" data-quick-area="jvc" tabindex="0" role="button" aria-label="Filter apartments in Jumeirah Village Circle">
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80" alt="Jumeirah Village Circle modern mid-rise apartment buildings" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
            <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Jumeirah Village Circle (JVC)</h3>
              <div class="flex items-center justify-between text-xs">
                <span class="text-gold-400 font-semibold">AED 350K – 3M</span>
                <span class="text-ash">High Cash Flow Yields</span>
              </div>
            </div>
          </div>

          <!-- Dubai Hills Estate -->
          <div class="quick-area-card group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block cursor-pointer border border-white-line" data-quick-area="dubai-hills" tabindex="0" role="button" aria-label="Filter apartments in Dubai Hills Estate">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Dubai Hills Estate apartment residences around championship golf course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
            <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Dubai Hills Estate</h3>
              <div class="flex items-center justify-between text-xs">
                <span class="text-gold-400 font-semibold">AED 1.4M – 9M</span>
                <span class="text-ash">Master-Planned Family Living</span>
              </div>
            </div>
          </div>

          <!-- Bluewaters Island -->
          <div class="quick-area-card group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block cursor-pointer border border-white-line" data-quick-area="bluewaters" tabindex="0" role="button" aria-label="Filter apartments on Bluewaters Island">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Bluewaters Island waterfront residences overlooking the Arabian Gulf" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
            <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-2xl font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Bluewaters Island</h3>
              <div class="flex items-center justify-between text-xs">
                <span class="text-gold-400 font-semibold">AED 1.8M – 15M</span>
                <span class="text-ash">Prime Waterfront Haven</span>
              </div>
            </div>
          </div>

        </div>

        <div class="text-center mt-12">
          <a href="/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="View all Dubai area profiles">
            <span>Explore All 45+ Community Deep-Dives</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════════════
         6. WHY BUY AN APARTMENT WITH ZARIN
         ════════════════════════════════════════════════════════════════ -->
    <section class="bg-ink-850 py-24 md:py-32" aria-label="Why buy an apartment with ZARIN">
      <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Advisory Principles</div>
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">An Advisor Who Personally Inspects the Property</h2>
            <p class="text-base sm:text-lg text-ash leading-relaxed mb-8 font-light">
              Many online apartment listings are duplicated, outdated, or priced based on hopeful seller expectations rather than actual building registry closings. ZARIN advisors conduct thorough preliminary due diligence before recommending any unit: physical site walk-throughs, audited building service-charge statements, title deed verification, and comparable sales analysis from the Dubai Land Department.
            </p>

            <div class="space-y-4 mb-8" role="list" aria-label="ZARIN apartment advisory guarantees">
              <div class="flex items-start gap-3.5" role="listitem">
                <div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft text-gold-400" aria-hidden="true">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <div class="text-sm font-bold text-bone">Every Unit Personally Inspected</div>
                  <div class="text-xs text-slate mt-1 leading-relaxed">We physically verify floor finishes, ceiling height, noise exposure, view corridors, and parking bay allocation.</div>
                </div>
              </div>

              <div class="flex items-start gap-3.5" role="listitem">
                <div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft text-gold-400" aria-hidden="true">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <div class="text-sm font-bold text-bone">Floor Plan &amp; Service Charge Audited</div>
                  <div class="text-xs text-slate mt-1 leading-relaxed">We confirm official Mollak service-charge figures and net usable square footage before drafting offer sheets.</div>
                </div>
              </div>

              <div class="flex items-start gap-3.5" role="listitem">
                <div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft text-gold-400" aria-hidden="true">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <div class="text-sm font-bold text-bone">Transparent 2% Standard Commission</div>
                  <div class="text-xs text-slate mt-1 leading-relaxed">Strict adherence to RERA regulatory frameworks with zero hidden administrative markups.</div>
                </div>
              </div>

              <div class="flex items-start gap-3.5" role="listitem">
                <div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft text-gold-400" aria-hidden="true">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <div class="text-sm font-bold text-bone">Trilingual Advisory: English, Arabic, Persian</div>
                  <div class="text-xs text-slate mt-1 leading-relaxed">Direct, native communication with senior brokers through negotiation, Form F contracts, and trustee office closing.</div>
                </div>
              </div>
            </div>

            <a href="/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Learn about ZARIN advisory heritage">
              <span>Our Two-Decade Advisory Track Record</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-4" role="list" aria-label="ZARIN operational benchmarks">
            <div class="bg-ink-900 border border-gold-line rounded-sm p-6 bg-gold-soft" role="listitem">
              <div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">1,200+</div>
              <div class="text-sm font-bold text-bone mb-1">Network Inventory</div>
              <div class="text-xs text-slate">Curated across Dubai</div>
            </div>

            <div class="bg-ink-900 border border-white-line rounded-sm p-6" role="listitem">
              <div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">2%</div>
              <div class="text-sm font-bold text-bone mb-1">Standard Commission</div>
              <div class="text-xs text-slate">RERA compliant &amp; clear</div>
            </div>

            <div class="bg-ink-900 border border-white-line rounded-sm p-6" role="listitem">
              <div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">24h</div>
              <div class="text-sm font-bold text-bone mb-1">Shortlist Turnaround</div>
              <div class="text-xs text-slate">Personalized to mandate</div>
            </div>

            <div class="bg-ink-900 border border-white-line rounded-sm p-6" role="listitem">
              <div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">2005</div>
              <div class="text-sm font-bold text-bone mb-1">Market Experience</div>
              <div class="text-xs text-slate">Founder investing in UAE</div>
            </div>
          </div>
        </div>

        <!-- Trust Badges Row -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white-line" aria-label="Regulatory trust credentials">
          <div class="flex items-center gap-2 text-xs text-slate">
            <svg class="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            <span class="text-bone font-semibold">RERA Licensed Agency</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-slate">
            <svg class="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span class="text-bone font-semibold">24h Advisor Response</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-slate">
            <svg class="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.134 15.181 3 18"/></svg>
            <span class="text-bone font-semibold">Trilingual EN / AR / FA</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-slate">
            <svg class="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span class="text-bone font-semibold">Non-Binding Consultation</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════════════
         7. APARTMENT BUYING FAQ (WAI-ARIA COMPLIANT ACCORDION)
         ════════════════════════════════════════════════════════════════ -->
    <section class="bg-ink-900 py-24 md:py-32" aria-label="Apartment buying frequently asked questions">
      <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="text-center mb-16">
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Apartment Buyer Intelligence</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Frequently Asked Questions</h2>
          <p class="text-ash mt-4 max-w-2xl mx-auto leading-relaxed font-light">
            Clear, data-grounded answers to essential buyer questions regarding pricing benchmarks, freehold rights, service charges, and transaction costs.
          </p>
        </div>

        <div class="space-y-3" role="list" aria-label="Apartment acquisition FAQ">

          <!-- FAQ 1 -->
          <details class="faq-item bg-ink-850 border border-white-line rounded-sm transition-all" role="listitem">
            <summary id="faq-summary-1" class="flex items-center justify-between p-6 cursor-pointer select-none" aria-controls="faq-panel-1" aria-expanded="false" aria-label="What is the average price of an apartment in Dubai in 2026?">
              <h3 class="text-base font-semibold text-bone pr-4">What is the average price of an apartment in Dubai in 2026?</h3>
              <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <div id="faq-panel-1" class="faq-accordion-panel" role="region" aria-labelledby="faq-summary-1">
              <div class="faq-accordion-content px-6 pb-6 text-sm text-ash leading-relaxed">
                As of late 2026, Dubai apartment prices span a wide band depending on location, finish and view. Studios in emerging areas like JVC, Dubai Sports City and Discovery Gardens start at AED 350,000-500,000, while 1-bedroom units in the same communities trade between AED 600,000 and AED 900,000. In prime areas — Dubai Marina, Downtown, Palm Jumeirah — a 1-bedroom typically runs AED 1.2M-1.8M and a 2-bedroom AED 2.2M-3.5M. The weighted average across all bedroom types sits around AED 1,800 per sqft, with sea-view and Burj-view units commanding a 15-30% premium over comparable inland layouts. ZARIN advisors share a current neighbourhood-specific price matrix during every consultation.
              </div>
            </div>
          </details>

          <!-- FAQ 2 -->
          <details class="faq-item bg-ink-850 border border-white-line rounded-sm transition-all" role="listitem">
            <summary id="faq-summary-2" class="flex items-center justify-between p-6 cursor-pointer select-none" aria-controls="faq-panel-2" aria-expanded="false" aria-label="Which areas in Dubai are best for buying apartments?">
              <h3 class="text-base font-semibold text-bone pr-4">Which areas in Dubai are best for buying apartments?</h3>
              <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <div id="faq-panel-2" class="faq-accordion-panel" role="region" aria-labelledby="faq-summary-2">
              <div class="faq-accordion-content px-6 pb-6 text-sm text-ash leading-relaxed">
                The right area depends on your mandate — end-use, rental yield or capital growth. Dubai Marina and Downtown remain the flagship apartment districts, offering liquidity, brand recognition and strong short-term-let demand. Business Bay and JVC deliver higher gross yields (6.5-8%) at lower entry prices, popular with first-time investors. Bluewaters, Palm Jumeirah and Emaar Beachfront appeal to buyers prioritising waterfront lifestyle and long-term appreciation. Dubai Hills Estate and Creek Harbour are master-planned communities where families gravitate for schools, parks and larger 3-4BR layouts. ZARIN helps you match an area to your budget, hold horizon and lifestyle expectations rather than chasing whatever is trending on listing portals.
              </div>
            </div>
          </details>

          <!-- FAQ 3 -->
          <details class="faq-item bg-ink-850 border border-white-line rounded-sm transition-all" role="listitem">
            <summary id="faq-summary-3" class="flex items-center justify-between p-6 cursor-pointer select-none" aria-controls="faq-panel-3" aria-expanded="false" aria-label="Can foreigners buy apartments in Dubai?">
              <h3 class="text-base font-semibold text-bone pr-4">Can foreigners buy apartments in Dubai?</h3>
              <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <div id="faq-panel-3" class="faq-accordion-panel" role="region" aria-labelledby="faq-summary-3">
              <div class="faq-accordion-content px-6 pb-6 text-sm text-ash leading-relaxed">
                Yes. Since the 2002 Freehold Decree, foreigners of any nationality can buy apartments on a freehold basis in more than 70 designated areas across Dubai — including Dubai Marina, Downtown, Business Bay, JVC, Palm Jumeirah, Bluewaters, Dubai Hills and Creek Harbour. There are no restrictions on nationality, residency status or currency brought into the purchase. The title deed is issued in your personal name by the Dubai Land Department and is recognised internationally. Leasehold (up to 99 years) exists in a small number of older districts, but every modern apartment development ZARIN lists is freehold. We advise on the right ownership structure — personal, corporate or via a holding company — based on your estate-planning and tax-residency situation.
              </div>
            </div>
          </details>

          <!-- FAQ 4 -->
          <details class="faq-item bg-ink-850 border border-white-line rounded-sm transition-all" role="listitem">
            <summary id="faq-summary-4" class="flex items-center justify-between p-6 cursor-pointer select-none" aria-controls="faq-panel-4" aria-expanded="false" aria-label="What are the additional costs when buying an apartment in Dubai?">
              <h3 class="text-base font-semibold text-bone pr-4">What are the additional costs when buying an apartment in Dubai?</h3>
              <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <div id="faq-panel-4" class="faq-accordion-panel" role="region" aria-labelledby="faq-summary-4">
              <div class="faq-accordion-content px-6 pb-6 text-sm text-ash leading-relaxed">
                Beyond the agreed purchase price, budget approximately 5-7% on top for transaction costs. The Dubai Land Department transfer fee is 4% of the sale price (historically split between buyer and seller, but in practice paid by the buyer). Agency commission is 2% of the price for buyers. Add an admin fee of AED 4,000 for properties above AED 500,000, plus AED 580 for the title deed issuance and a small mortgage arrangement fee (typically 0.5-1% of the loan) if financing. Service charges — the annual building maintenance contribution — are settled pro-rata between buyer and seller at handover. ZARIN provides a complete, itemised cost sheet for every shortlisted apartment before any offer is signed, so there are no surprises at transfer.
              </div>
            </div>
          </details>

          <!-- FAQ 5 -->
          <details class="faq-item bg-ink-850 border border-white-line rounded-sm transition-all" role="listitem">
            <summary id="faq-summary-5" class="flex items-center justify-between p-6 cursor-pointer select-none" aria-controls="faq-panel-5" aria-expanded="false" aria-label="What is the typical service charge for Dubai apartments?">
              <h3 class="text-base font-semibold text-bone pr-4">What is the typical service charge for Dubai apartments?</h3>
              <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <div id="faq-panel-5" class="faq-accordion-panel" role="region" aria-labelledby="faq-summary-5">
              <div class="faq-accordion-content px-6 pb-6 text-sm text-ash leading-relaxed">
                Service charges in Dubai are calculated per square foot and billed annually in advance by the building's owners association (or its appointed management company). As of 2026, studios and 1BR units typically pay AED 12-18 per sqft, mid-tier buildings AED 18-25 per sqft, and luxury towers with extensive amenities (concierge, pools, gyms, sky lounges) AED 25-45 per sqft. For a 1,000 sqft 2BR, that translates to roughly AED 18,000-35,000 per year. Service charges fund common-area cleaning, security, lift maintenance, chiller (cooling) and amenities. ZARIN obtains the most recent audited service-charge statement for every apartment we list, so you can verify the figure against the developer's projections and budget accordingly.
              </div>
            </div>
          </details>

          <!-- FAQ 6 -->
          <details class="faq-item bg-ink-850 border border-white-line rounded-sm transition-all" role="listitem">
            <summary id="faq-summary-6" class="flex items-center justify-between p-6 cursor-pointer select-none" aria-controls="faq-panel-6" aria-expanded="false" aria-label="What rental yield can I expect from a Dubai apartment?">
              <h3 class="text-base font-semibold text-bone pr-4">What rental yield can I expect from a Dubai apartment?</h3>
              <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <div id="faq-panel-6" class="faq-accordion-panel" role="region" aria-labelledby="faq-summary-6">
              <div class="faq-accordion-content px-6 pb-6 text-sm text-ash leading-relaxed">
                Dubai apartments typically deliver 6-8% gross rental yield, with the higher end concentrated in JVC, Business Bay and Dubai Production City. Marina and Downtown average 5-6.5% gross, while ultra-prime waterfront (Palm Jumeirah, Bluewaters) sits at 4-5.5% — lower yield but stronger capital appreciation. Net yield (after service charges, agent fees, DEWA and maintenance reserve) runs about 1.5-2 percentage points below gross. Long-let (12-month) contracts give stable, predictable income; short-term-let via a licensed operator can lift yields by 25-40% but requires active management. ZARIN shares rent comparables for the specific building you are considering — not generic area averages — so the underwriting reflects actual achievable rents in that tower.
              </div>
            </div>
          </details>

          <!-- FAQ 7 -->
          <details class="faq-item bg-ink-850 border border-white-line rounded-sm transition-all" role="listitem">
            <summary id="faq-summary-7" class="flex items-center justify-between p-6 cursor-pointer select-none" aria-controls="faq-panel-7" aria-expanded="false" aria-label="Are off-plan apartments a good investment?">
              <h3 class="text-base font-semibold text-bone pr-4">Are off-plan apartments a good investment?</h3>
              <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <div id="faq-panel-7" class="faq-accordion-panel" role="region" aria-labelledby="faq-summary-7">
              <div class="faq-accordion-content px-6 pb-6 text-sm text-ash leading-relaxed">
                Off-plan apartments can deliver strong returns — typically 20-30% capital gain between launch and handover — but the strategy carries real risks. The benefits include lower entry price, flexible 40-60% payment plans spread over 2-4 years, brand-new build quality and often premium views at pre-completion rates. The risks are developer delivery delays, design changes between brochure and delivered product, and the possibility of over-supply in the specific sub-market at handover. ZARIN only recommends off-plan projects from developers we have personally vetted — typically Emaar, Damac, Nakheel, Meraas, Sobha, Ellington and Select Group — and we review the Escrow Account, RERA registration, build-track record and current sales velocity before any client commits. Off-plan suits buyers with a 3-5 year hold horizon; for shorter horizons, ready inventory is safer.
              </div>
            </div>
          </details>

          <!-- FAQ 8 -->
          <details class="faq-item bg-ink-850 border border-white-line rounded-sm transition-all" role="listitem">
            <summary id="faq-summary-8" class="flex items-center justify-between p-6 cursor-pointer select-none" aria-controls="faq-panel-8" aria-expanded="false" aria-label="What documents do I need to buy an apartment in Dubai?">
              <h3 class="text-base font-semibold text-bone pr-4">What documents do I need to buy an apartment in Dubai?</h3>
              <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <div id="faq-panel-8" class="faq-accordion-panel" role="region" aria-labelledby="faq-summary-8">
              <div class="faq-accordion-content px-6 pb-6 text-sm text-ash leading-relaxed">
                For UAE residents: passport copy, Emirates ID, proof of funds (recent bank statement) and a mortgage pre-approval letter if financing. For non-resident buyers: passport copy, proof of funds and a local UAE bank account (which ZARIN helps you open during a single bank branch visit). Off-plan purchases require a signed booking form, KYC documents and the passport copy. At the actual transfer appointment at the Dubai Land Department Trust Office, both parties (or their representatives via Power of Attorney) must attend with the original IDs, the signed Form F (Memorandum of Understanding) and the manager's cheque for the purchase price. ZARIN handles the document checklist, DLD appointment booking and trustee office coordination end-to-end.
              </div>
            </div>
          </details>

        </div>

        <div class="text-center mt-12">
          <p class="text-sm text-slate">
            Have a specific building, service charge, or mortgage inquiry?
            <a href="/consultation" class="text-gold-400 font-semibold hover:underline ml-1">Book an advisor consultation</a>
            or
            <a href="https://wa.me/971586901231" target="_blank" rel="noopener noreferrer" class="text-gold-400 font-semibold hover:underline ml-1">WhatsApp our team</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════════════
         8. BESPOKE SHORTLIST MODAL & CONSULTATION TRIGGER
         ════════════════════════════════════════════════════════════════ -->
    <div id="apartment-inquiry-modal" class="fixed inset-0 z-[1100] hidden items-center justify-center p-4 bg-black/80 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="relative w-full max-w-lg bg-ink-900 border border-gold-line rounded-sm p-6 sm:p-8 shadow-monolith max-h-[90vh] overflow-y-auto">
        <button type="button" id="modal-close-btn" class="absolute top-4 right-4 text-ash hover:text-gold-400 transition-colors p-2" aria-label="Close modal">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div class="inline-flex items-center gap-2 mb-3">
          <span class="w-6 h-px bg-gold-400"></span>
          <span class="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold">Private Advisory</span>
        </div>
        <h3 id="modal-headline" class="text-2xl font-bold text-bone mb-2">Apartment Inquiry &amp; Custom Shortlist</h3>
        <p class="text-xs text-ash leading-relaxed mb-6">
          Specify your investment mandate. A senior advisor will review vetted ready inventory and pre-market allocations, sending an itemised shortlist within 24 hours.
        </p>

        <form id="apartment-inquiry-form" class="space-y-4" action="/consultation" method="POST">
          <div>
            <label for="form-property" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-1">Target Property / Reference</label>
            <input type="text" id="form-property" name="property" value="General Apartment Search" class="w-full bg-ink-850 border border-white-line rounded-xs px-3.5 py-2.5 text-xs text-bone focus:outline-none focus:border-gold-line">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label for="form-name" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-1">Full Name *</label>
              <input type="text" id="form-name" name="name" required placeholder="Your name" class="w-full bg-ink-850 border border-white-line rounded-xs px-3.5 py-2.5 text-xs text-bone focus:outline-none focus:border-gold-line">
            </div>
            <div>
              <label for="form-phone" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-1">WhatsApp / Phone *</label>
              <input type="tel" id="form-phone" name="phone" required placeholder="+971..." class="w-full bg-ink-850 border border-white-line rounded-xs px-3.5 py-2.5 text-xs text-bone focus:outline-none focus:border-gold-line">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label for="form-email" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-1">Email Address *</label>
              <input type="email" id="form-email" name="email" required placeholder="you@domain.com" class="w-full bg-ink-850 border border-white-line rounded-xs px-3.5 py-2.5 text-xs text-bone focus:outline-none focus:border-gold-line">
            </div>
            <div>
              <label for="form-budget" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-1">Budget Target</label>
              <select id="form-budget" name="budget" class="w-full bg-ink-850 border border-white-line rounded-xs px-3.5 py-2.5 text-xs text-bone focus:outline-none focus:border-gold-line">
                <option value="Under AED 1M">Under AED 1M ($270K)</option>
                <option value="AED 1M - 2.5M" selected>AED 1M – 2.5M ($270K–$680K)</option>
                <option value="AED 2.5M - 5M">AED 2.5M – 5M ($680K–$1.36M)</option>
                <option value="AED 5M - 10M">AED 5M – 10M ($1.36M–$2.7M)</option>
                <option value="AED 10M+">AED 10M+ ($2.7M+)</option>
              </select>
            </div>
          </div>

          <div>
            <label for="form-notes" class="block text-xs uppercase tracking-wider text-slate font-semibold mb-1">Preferred Areas &amp; Requirements</label>
            <textarea id="form-notes" name="notes" rows="3" placeholder="e.g. Marina sea view, 2 bedrooms, ready to move in, mortgage financing..." class="w-full bg-ink-850 border border-white-line rounded-xs px-3.5 py-2 text-xs text-bone focus:outline-none focus:border-gold-line"></textarea>
          </div>

          <div id="modal-feedback" class="hidden text-xs text-success font-medium py-1">
            ✓ Inquiry dispatched. An advisor will review current inventory and reach out shortly.
          </div>

          <button type="submit" class="w-full py-3.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold">
            Submit Request &middot; 24h Shortlist
          </button>
        </form>
      </div>
    </div>

  </main>

  <!-- ════════════════════════════════════════════════════════════════
       FOOTER (STANDARDIZED ZARIN FOOTER)
       ════════════════════════════════════════════════════════════════ -->
  <footer class="bg-ink-950 border-t border-white-line pt-20 pb-8" role="contentinfo">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div class="col-span-2 lg:col-span-1">
          <a href="/" class="flex items-center gap-2 mb-4" aria-label="ZARIN Real Estate home">
            <span class="font-sans font-extrabold text-2xl tracking-tight text-bone">ZARIN</span>
          </a>
          <p class="text-sm text-slate leading-relaxed mb-6">Dubai real estate advisory since 2005.</p>
          <div class="flex gap-3">
            <a href="https://instagram.com/zarin.realestate" target="_blank" rel="noopener noreferrer" class="w-10 h-10 border border-white-line rounded-xs flex items-center justify-center text-ash hover:text-gold-400 hover:border-gold-line transition-all" aria-label="Instagram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://wa.me/971586901231" target="_blank" rel="noopener noreferrer" class="w-10 h-10 border border-white-line rounded-xs flex items-center justify-center text-ash hover:text-gold-400 hover:border-gold-line transition-all" aria-label="WhatsApp">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
          </div>
        </div>

        <nav aria-label="Properties footer">
          <h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Properties</h2>
          <ul class="space-y-2">
            <li><a href="/properties-for-sale" class="text-sm text-ash hover:text-gold-400 transition-colors">For Sale</a></li>
            <li><a href="/apartments-for-sale-in-dubai" class="text-sm text-gold-400 hover:text-gold-300 transition-colors">Apartments</a></li>
            <li><a href="/properties-for-rent" class="text-sm text-ash hover:text-gold-400 transition-colors">For Rent</a></li>
            <li><a href="/trophy-residences" class="text-sm text-ash hover:text-gold-400 transition-colors">Trophy Residences</a></li>
            <li><a href="/branded-residences-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Branded Residences</a></li>
            <li><a href="/commercial-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Commercial</a></li>
          </ul>
        </nav>

        <nav aria-label="Services footer">
          <h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Services</h2>
          <ul class="space-y-2">
            <li><a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors">All Services</a></li>
            <li><a href="/services/buying" class="text-sm text-ash hover:text-gold-400 transition-colors">Buying Advisory</a></li>
            <li><a href="/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">Visas &amp; Residency</a></li>
            <li><a href="/consultation" class="text-sm text-ash hover:text-gold-400 transition-colors">Book Consultation</a></li>
          </ul>
        </nav>

        <nav aria-label="Insights footer">
          <h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Insights</h2>
          <ul class="space-y-2">
            <li><a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">All Insights</a></li>
            <li><a href="/off-plan/investment-guide" class="text-sm text-ash hover:text-gold-400 transition-colors">Investment Guide</a></li>
            <li><a href="/off-plan/developer-reputation-tracker" class="text-sm text-ash hover:text-gold-400 transition-colors">Developer Tracker</a></li>
            <li><a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Area Guides</a></li>
          </ul>
        </nav>

        <nav aria-label="Heritage footer">
          <h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Heritage</h2>
          <ul class="space-y-2">
            <li><a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Our Story</a></li>
            <li><a href="/legal/privacy" class="text-sm text-ash hover:text-gold-400 transition-colors">Privacy Policy</a></li>
            <li><a href="/legal/terms" class="text-sm text-ash hover:text-gold-400 transition-colors">Terms of Service</a></li>
            <li><a href="/legal/ai-disclosure" class="text-sm text-ash hover:text-gold-400 transition-colors">AI Disclosure</a></li>
          </ul>
        </nav>
      </div>

      <div class="grid md:grid-cols-3 gap-6 py-8 border-t border-white-line">
        <address class="not-italic">
          <div class="text-xs uppercase tracking-wider text-slate mb-2">Dubai Office</div>
          <p class="text-sm text-ash">Sheikh Zayed Road<br>Downtown Dubai, UAE</p>
        </address>
        <div>
          <div class="text-xs uppercase tracking-wider text-slate mb-2">Telephone</div>
          <a href="tel:+971586901231" class="text-sm text-bone hover:text-gold-400 transition-colors">+971 58 690 1231</a>
        </div>
        <div>
          <div class="text-xs uppercase tracking-wider text-slate mb-2">Direct Advisory</div>
          <a href="mailto:advisory@zarinrealestate.com" class="text-sm text-bone hover:text-gold-400 transition-colors">advisory@zarinrealestate.com</a>
        </div>
      </div>

      <div class="pt-8 border-t border-white-line flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap items-center gap-4 text-xs text-slate">
          <span>&copy; 2026 ZARIN Real Estate. All rights reserved.</span>
          <span class="hidden md:inline w-1 h-1 bg-slate rounded-full" aria-hidden="true"></span>
          <span>RERA Licensed</span>
        </div>
        <nav aria-label="Legal links" class="flex flex-wrap items-center gap-4 text-xs">
          <a href="/legal/privacy" class="text-slate hover:text-gold-400 transition-colors">Privacy</a>
          <a href="/legal/terms" class="text-slate hover:text-gold-400 transition-colors">Terms</a>
          <a href="/legal/cookies" class="text-slate hover:text-gold-400 transition-colors">Cookies</a>
          <a href="/legal/ai-disclosure" class="text-slate hover:text-gold-400 transition-colors">AI Disclosure</a>
          <a href="/legal/dmca" class="text-slate hover:text-gold-400 transition-colors">DMCA</a>
          <a href="/sitemap" class="text-slate hover:text-gold-400 transition-colors">Sitemap</a>
        </nav>
      </div>
    </div>
  </footer>

  <!-- WhatsApp Floating Trigger -->
  <a href="https://wa.me/971586901231" target="_blank" rel="noopener noreferrer" class="sticky-whatsapp fixed bottom-6 right-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="Contact ZARIN on WhatsApp">
    <svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
  </a>

  <!-- ════════════════════════════════════════════════════════════════
       CLIENT-SIDE INTERACTIVE ENGINE
       ════════════════════════════════════════════════════════════════ -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Header Scroll Glass Transition
      const header = document.getElementById('site-header');
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (window.scrollY > 50) {
              header.style.backgroundColor = 'rgba(10, 11, 14, 0.92)';
              header.style.backdropFilter = 'blur(20px)';
              header.style.webkitBackdropFilter = 'blur(20px)';
              header.style.borderBottomColor = 'rgba(200, 171, 131, 0.2)';
              header.style.padding = '0.85rem 0';
            } else {
              header.style.backgroundColor = 'transparent';
              header.style.backdropFilter = 'none';
              header.style.webkitBackdropFilter = 'none';
              header.style.borderBottomColor = 'transparent';
              header.style.padding = '1.15rem 0';
            }
            ticking = false;
          });
          ticking = true;
        }
      });

      // 2. Interactive Filtering & Sorting Engine
      const searchInput = document.getElementById('search-input');
      const searchClearBtn = document.getElementById('search-clear-btn');
      const areaSelect = document.getElementById('area-select');
      const priceSelect = document.getElementById('price-select');
      const statusSelect = document.getElementById('status-select');
      const sortSelect = document.getElementById('sort-select');
      const resetBtn = document.getElementById('reset-filters-btn');
      const emptyResetBtn = document.getElementById('empty-reset-btn');
      const resultsCountEl = document.getElementById('results-count');
      const container = document.getElementById('apartments-container');
      const noResultsState = document.getElementById('no-results-state');
      const bedChips = document.querySelectorAll('.filter-chip[data-bed]');

      let currentBed = 'all';

      function filterAndSortCards() {
        const query = (searchInput?.value || '').trim().toLowerCase();
        const selectedArea = areaSelect?.value || 'all';
        const selectedPrice = priceSelect?.value || 'all';
        const selectedStatus = statusSelect?.value || 'all';
        const sortOption = sortSelect?.value || 'featured';

        // Toggle clear search button
        if (searchClearBtn) {
          if (query.length > 0) {
            searchClearBtn.classList.remove('hidden');
          } else {
            searchClearBtn.classList.add('hidden');
          }
        }

        const cards = Array.from(document.querySelectorAll('.apartment-card'));
        let visibleCount = 0;

        cards.forEach(card => {
          const cardBed = card.getAttribute('data-bed') || '';
          const cardArea = card.getAttribute('data-area') || '';
          const cardPrice = parseInt(card.getAttribute('data-price') || '0', 10);
          const cardStatus = card.getAttribute('data-status') || '';
          const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();
          const cardLoc = (card.getAttribute('data-location') || '').toLowerCase();

          // Match query
          const matchQuery = !query || cardTitle.includes(query) || cardLoc.includes(query) || cardBed.includes(query);

          // Match bed
          const matchBed = (currentBed === 'all') || (cardBed === currentBed);

          // Match area
          const matchArea = (selectedArea === 'all') || (cardArea === selectedArea);

          // Match status
          const matchStatus = (selectedStatus === 'all') || (cardStatus === selectedStatus);

          // Match price
          let matchPrice = true;
          if (selectedPrice === 'under-1m') {
            matchPrice = cardPrice < 1000000;
          } else if (selectedPrice === '1m-3m') {
            matchPrice = cardPrice >= 1000000 && cardPrice <= 3000000;
          } else if (selectedPrice === '3m-5m') {
            matchPrice = cardPrice > 3000000 && cardPrice <= 5000000;
          } else if (selectedPrice === '5m-plus') {
            matchPrice = cardPrice > 5000000;
          }

          if (matchQuery && matchBed && matchArea && matchStatus && matchPrice) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Update count
        if (resultsCountEl) {
          resultsCountEl.textContent = \`Showing \${visibleCount} of \${cards.length} verified apartments\`;
        }

        // Toggle empty state
        if (noResultsState && container) {
          if (visibleCount === 0) {
            noResultsState.classList.remove('hidden');
          } else {
            noResultsState.classList.add('hidden');
          }
        }

        // Sorting
        cards.sort((a, b) => {
          const priceA = parseInt(a.getAttribute('data-price') || '0', 10);
          const priceB = parseInt(b.getAttribute('data-price') || '0', 10);
          const sizeA = parseInt(a.getAttribute('data-size') || '0', 10);
          const sizeB = parseInt(b.getAttribute('data-size') || '0', 10);
          const bedsA = parseInt(a.getAttribute('data-beds-num') || '0', 10);
          const bedsB = parseInt(b.getAttribute('data-beds-num') || '0', 10);

          if (sortOption === 'price-asc') return priceA - priceB;
          if (sortOption === 'price-desc') return priceB - priceA;
          if (sortOption === 'size-desc') return sizeB - sizeA;
          if (sortOption === 'beds-asc') return bedsA - bedsB;
          return 0; // Default featured order
        });

        cards.forEach(card => container.appendChild(card));
      }

      // Event Listeners for Toolbar
      searchInput?.addEventListener('input', filterAndSortCards);
      searchClearBtn?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        filterAndSortCards();
        searchInput?.focus();
      });

      areaSelect?.addEventListener('change', filterAndSortCards);
      priceSelect?.addEventListener('change', filterAndSortCards);
      statusSelect?.addEventListener('change', filterAndSortCards);
      sortSelect?.addEventListener('change', filterAndSortCards);

      // Bedroom chip click handlers
      bedChips.forEach(chip => {
        chip.addEventListener('click', () => {
          bedChips.forEach(c => {
            c.classList.remove('active');
            c.setAttribute('aria-pressed', 'false');
          });
          chip.classList.add('active');
          chip.setAttribute('aria-pressed', 'true');
          currentBed = chip.getAttribute('data-bed') || 'all';
          filterAndSortCards();
        });
      });

      // Reset All Filters
      function resetAllFilters() {
        if (searchInput) searchInput.value = '';
        if (areaSelect) areaSelect.value = 'all';
        if (priceSelect) priceSelect.value = 'all';
        if (statusSelect) statusSelect.value = 'all';
        if (sortSelect) sortSelect.value = 'featured';

        bedChips.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        const allBedChip = document.querySelector('.filter-chip[data-bed="all"]');
        if (allBedChip) {
          allBedChip.classList.add('active');
          allBedChip.setAttribute('aria-pressed', 'true');
        }
        currentBed = 'all';
        filterAndSortCards();
      }

      resetBtn?.addEventListener('click', resetAllFilters);
      emptyResetBtn?.addEventListener('click', resetAllFilters);

      // Quick Bedroom Cards (Section 4)
      document.querySelectorAll('.quick-bed-card').forEach(card => {
        const handler = () => {
          const bed = card.getAttribute('data-quick-bed');
          if (bed) {
            currentBed = bed;
            bedChips.forEach(c => {
              const matches = (c.getAttribute('data-bed') === bed);
              c.classList.toggle('active', matches);
              c.setAttribute('aria-pressed', matches ? 'true' : 'false');
            });
            filterAndSortCards();
            const filterBar = document.getElementById('filter-bar');
            filterBar?.scrollIntoView({ behavior: 'smooth' });
          }
        };
        card.addEventListener('click', handler);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handler();
          }
        });
      });

      // Quick Area Cards (Section 5)
      document.querySelectorAll('.quick-area-card').forEach(card => {
        const handler = () => {
          const area = card.getAttribute('data-quick-area');
          if (area && areaSelect) {
            areaSelect.value = area;
            filterAndSortCards();
            const filterBar = document.getElementById('filter-bar');
            filterBar?.scrollIntoView({ behavior: 'smooth' });
          }
        };
        card.addEventListener('click', handler);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handler();
          }
        });
      });

      // 3. Inquiry Modal Handlers
      const modal = document.getElementById('apartment-inquiry-modal');
      const modalCloseBtn = document.getElementById('modal-close-btn');
      const formPropertyInput = document.getElementById('form-property');
      const inquiryForm = document.getElementById('apartment-inquiry-form');
      const modalFeedback = document.getElementById('modal-feedback');

      function openModal(propertyName = 'General Apartment Inquiry') {
        if (formPropertyInput) formPropertyInput.value = propertyName;
        if (modal) {
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          document.body.style.overflow = 'hidden';
          document.getElementById('form-name')?.focus();
        }
      }

      function closeModal() {
        if (modal) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          document.body.style.overflow = '';
        }
      }

      document.querySelectorAll('.inquiry-trigger-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const propTitle = btn.getAttribute('data-property') || 'Apartment Inquiry';
          openModal(propTitle);
        });
      });

      document.getElementById('hero-custom-search-btn')?.addEventListener('click', () => openModal('Custom Apartment Search — 24h Shortlist'));
      document.getElementById('grid-custom-search-btn')?.addEventListener('click', () => openModal('Tailored Apartment Shortlist Request'));

      modalCloseBtn?.addEventListener('click', closeModal);
      modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });

      inquiryForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (modalFeedback) {
          modalFeedback.classList.remove('hidden');
        }
        setTimeout(() => {
          closeModal();
          inquiryForm.reset();
          if (modalFeedback) modalFeedback.classList.add('hidden');
        }, 2200);
      });
    });
  </script>

  <!-- Module Scripts -->
  <script type="module" src="/scripts/i18n.js"></script>
  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>
`;

// Write to apartments-for-sale-in-dubai.html
const apartmentsFilePath = path.join(rootDir, 'apartments-for-sale-in-dubai.html');
fs.writeFileSync(apartmentsFilePath, apartmentsHtml, 'utf8');

// Write to apartments-for-sale-in-dubai/index.html
const apartmentsDir = path.join(rootDir, 'apartments-for-sale-in-dubai');
if (!fs.existsSync(apartmentsDir)) {
  fs.mkdirSync(apartmentsDir, { recursive: true });
}
const apartmentsDirPath = path.join(apartmentsDir, 'index.html');
fs.writeFileSync(apartmentsDirPath, apartmentsHtml, 'utf8');

console.log('✅ Generated apartments-for-sale-in-dubai.html and apartments-for-sale-in-dubai/index.html');
