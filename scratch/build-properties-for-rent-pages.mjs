import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. English HTML Builder
function getEnPage() {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <!-- ═══ PRIMARY META ═══ -->
  <title data-i18n="prop_rent_meta_title">Properties for Rent in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Browse Dubai properties for rent — apartments, villas, and townhouses. Annual and short-term rentals. Verified listings by ZARIN advisors.">
  <meta name="keywords" content="properties for rent Dubai, Dubai apartments for rent, villa rentals Dubai, Dubai annual rent, Dubai short-term rental">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/properties-for-rent">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/properties-for-rent">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/properties-for-rent">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/properties-for-rent">

  <!-- ═══ OPEN GRAPH ═══ -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Properties for Rent in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Browse Dubai properties for rent — annual and short-term rentals. Verified by ZARIN advisors.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Dubai properties for rent">
  <meta property="og:url" content="https://zarinrealestate.com/properties-for-rent">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Properties for Rent in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Browse Dubai properties for rent — verified by ZARIN advisors.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80">

  <!-- ═══ FAVICON ═══ -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <!-- ═══ RESOURCE PRELOADS ═══ -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://unpkg.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="/styles/main.css">

  <style>
    html { scroll-behavior: smooth; }
    body { font-family: "Source Sans 3", "Vazirmatn", -apple-system, sans-serif; background: #0A0B0E; color: #F8F9FA; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; overflow-x: hidden; }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #0A0B0E; }
    ::-webkit-scrollbar-thumb { background: #C8AB83; border-radius: 4px; }
    ::selection { background: rgba(200, 171, 131, 0.3); color: #F8F9FA; }
    .glass { background: rgba(10, 11, 14, 0.78); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
    .text-gold-gradient { background: linear-gradient(135deg, #DFC49E 0%, #C8AB83 50%, #A88D66 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
    .stat-number { font-variant-numeric: tabular-nums; letter-spacing: -0.02em; }
    .mega-menu-trigger { position: relative; }
    .mega-menu-panel { opacity: 0; visibility: hidden; transform: translateY(8px); transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s; }
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
    .card-lift { transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
    .card-lift:hover { transform: translateY(-4px); box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5); }
    details summary { list-style: none; cursor: pointer; }
    details summary::-webkit-details-marker { display: none; }
    details[open] .faq-icon { transform: rotate(45deg); }
    .faq-icon { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .filter-chip { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; }
    .filter-chip.active { background: #C8AB83; color: #0A0B0E; border-color: #C8AB83; font-weight: 700; }
    .sticky-whatsapp { display: none; }
    @media (max-width: 1024px) { .sticky-whatsapp { display: flex; } }
  </style>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://zarinrealestate.com/"},
      {"@type": "ListItem", "position": 2, "name": "Properties", "item": "https://zarinrealestate.com/properties"},
      {"@type": "ListItem", "position": 3, "name": "For Rent", "item": "https://zarinrealestate.com/properties-for-rent"}
    ]
  }
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://zarinrealestate.com/properties-for-rent#collectionpage",
    "name": "Properties for Rent in Dubai",
    "url": "https://zarinrealestate.com/properties-for-rent",
    "description": "Browse Dubai properties for rent — apartments, villas, and townhouses, annual and short-term. Verified by ZARIN Real Estate advisors.",
    "isPartOf": {"@id": "https://zarinrealestate.com/#website"},
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "1BR Apartment — Dubai Marina", "url": "https://zarinrealestate.com/rent/1br-marina-001", "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "95000", "priceCurrency": "AED"}}},
        {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "3BR Villa — Palm Jumeirah", "url": "https://zarinrealestate.com/rent/3br-palm-001", "image": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "480000", "priceCurrency": "AED"}}},
        {"@type": "ListItem", "position": 3, "item": {"@type": "Product", "name": "Studio — JVC", "url": "https://zarinrealestate.com/rent/studio-jvc-001", "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "45000", "priceCurrency": "AED"}}},
        {"@type": "ListItem", "position": 4, "item": {"@type": "Product", "name": "2BR Apartment — Downtown Dubai", "url": "https://zarinrealestate.com/rent/2br-downtown-001", "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "165000", "priceCurrency": "AED"}}},
        {"@type": "ListItem", "position": 5, "item": {"@type": "Product", "name": "4BR Townhouse — Dubai Hills", "url": "https://zarinrealestate.com/rent/4br-dh-001", "image": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "320000", "priceCurrency": "AED"}}},
        {"@type": "ListItem", "position": 6, "item": {"@type": "Product", "name": "2BR Apartment — Business Bay", "url": "https://zarinrealestate.com/rent/2br-bb-001", "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", "offers": {"@type": "Offer", "price": "125000", "priceCurrency": "AED"}}}
      ]
    }
  }
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://zarinrealestate.com/properties-for-rent#faqpage",
    "mainEntity": [
      {"@type": "Question", "name": "What is the typical annual rent in Dubai in 2026?", "acceptedAnswer": {"@type": "Answer", "text": "Annual rents in Dubai in 2026 vary widely by area and unit size. Studios start around AED 40,000-60,000 in JVC and Discovery Gardens. 1-bedroom apartments in Dubai Marina or Downtown Dubai range from AED 85,000-130,000. 2-bedroom units typically rent for AED 130,000-200,000 in prime areas. Family villas start around AED 220,000 and can exceed AED 500,000 for premium Palm Jumeirah or Emirates Hills locations."}},
      {"@type": "Question", "name": "What is the standard tenancy contract duration in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "The standard residential tenancy contract in Dubai is 12 months, renewable annually. Commercial leases run 1-3 years, sometimes up to 5. Short-term rentals (daily/weekly) require a holiday home permit from Dubai Tourism (DET). All contracts must be registered with Ejari, the Dubai Land Department's tenancy registration system."}},
      {"@type": "Question", "name": "What are the costs involved in renting property in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "For annual rentals: 5% agency commission (residential) or 7% (commercial), refundable security deposit (5% of annual rent for unfurnished, 10% for furnished), Ejari registration fee AED 220, and Dewa (utility) connection deposit AED 2,000-4,000. Short-term rentals include daily rate, 7% municipality fee, and tourism dirham fee per night."}},
      {"@type": "Question", "name": "Are rents paid monthly or annually in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "Residential annual rents are typically paid via 1, 2, 3, or 4 cheques spread evenly through the year. More cheques usually means slightly higher total rent. Some landlords accept 6 or 12 cheques at a premium. Commercial leases often accept quarterly payments. Short-term rentals are paid per stay."}},
      {"@type": "Question", "name": "Can a tenant be evicted before the contract ends?", "acceptedAnswer": {"@type": "Answer", "text": "No. Tenants in Dubai have strong protections under the Tenancy Law. Landlords cannot evict a tenant during the contract term unless the tenant breaches the agreement. Even non-renewal at end of term requires 12 months' written notice via notarized letter or registered mail, and only on specific grounds: sale of property, owner's own use, or major renovation."}},
      {"@type": "Question", "name": "What is the maximum annual rent increase allowed in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "Dubai's RERA Rent Index sets maximum annual rent increases based on average market rents for the area and unit type. As of 2026: 0% increase if rent is 11%+ below market, 5% if 6-10% below, 10% if up to 5% below, 15% if at or slightly below market. Tenants exceeding market rate see no increase allowed."}},
      {"@type": "Question", "name": "Do you handle short-term holiday rentals?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ZARIN manages a portfolio of DET-licensed holiday homes in Dubai Marina, Downtown, Palm Jumeirah, and Business Bay. Minimum stay is typically 1-2 nights. Pricing varies by season — peak (Nov-Mar) commands 40-60% premium over summer. We handle check-in, cleaning, and guest communication."}},
      {"@type": "Question", "name": "What documents do I need to rent in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "For UAE residents: passport copy, Emirates ID, residence visa copy, salary certificate or proof of income, and post-dated cheques for the full tenancy. For non-residents: passport copy, proof of income, and full advance payment in some cases. Tourist visa holders can rent short-term. ZARIN guides you through requirements."}},
      {"@type": "Question", "name": "Can I rent in Dubai if I'm not yet a resident?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, with conditions. Non-residents can rent annual leases if they have an active visa application or employment offer letter. Some landlords accept 1-cheque (full-year upfront) payments from non-residents. Short-term rentals are open to anyone with a valid passport. ZARIN assists with the documentation and landlord negotiation."}}
    ]
  }
  </script>

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://zarinrealestate.com/properties-for-rent#webpage",
    "url": "https://zarinrealestate.com/properties-for-rent",
    "name": "Properties for Rent in Dubai | ZARIN Real Estate",
    "isPartOf": {"@id": "https://zarinrealestate.com/#website"},
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#hero-headline", "#tldr-summary"]
    }
  }
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold" data-i18n="skip_to_content">Skip to main content</a>

  <!-- ════════════════════════════════════════════════════════════════
       HEADER
       ════════════════════════════════════════════════════════════════ -->
  <header id="site-header" class="fixed top-0 left-0 w-full z-[900] transition-all duration-500" role="banner" style="padding: 1.15rem 0;">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex items-center justify-between gap-4">

        <a href="/" class="flex items-center gap-2 group flex-shrink-0" aria-label="ZARIN Real Estate — Home">
          <span class="font-sans font-extrabold text-2xl tracking-tight text-bone group-hover:text-gold-400 transition-colors duration-300">ZARIN</span>
          <span class="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold border-l border-gold-line pl-2" data-i18n="brand_sub">Real Estate</span>
        </a>

        <nav class="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">

          <div class="mega-menu-trigger flex items-center group/prop">
            <a href="/properties" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300" id="properties-nav-link" aria-current="page" data-i18n="nav_properties">Properties</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-300" id="properties-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="properties-mega-panel" aria-label="Toggle Properties submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="properties-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[640px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-3 gap-x-6 gap-y-3" role="region" aria-label="Properties submenu">
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_for_sale">For Sale</div>
              <a href="/properties-for-sale" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_properties_for_sale">All Properties for Sale</a>
              <a href="/properties#apartments" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_apartments">Apartments</a>
              <a href="/properties#villas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_villas">Villas</a>
              <a href="/properties#penthouses" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_penthouses">Penthouses</a>
              <a href="/properties#townhouses" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_townhouses">Townhouses</a>
              <a href="/trophy-residences" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold" data-i18n="filter_trophy">Trophy Residences →</a>
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_for_rent">For Rent</div>
              <a href="/properties-for-rent" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_rentals">All Rentals</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_by_lifestyle">By Lifestyle</div>
              <a href="/properties#beachfront" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_beachfront">Beachfront</a>
              <a href="/properties#burj-view" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_burj_view">Burj View</a>
              <a href="/properties#golf-course" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_golf_course">Golf Course</a>
              <a href="/branded-residences-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_branded_residences">Branded Residences</a>
              <a href="/commercial-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_commercial">Commercial</a>
            </div>
          </div>

          <div class="mega-menu-trigger flex items-center group/offplan">
            <a href="/off-plan" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300" id="offplan-nav-link" data-i18n="nav_offplan">Off-Plan</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-ash hover:text-gold-400 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-400" id="offplan-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="offplan-mega-panel" aria-label="Toggle Off-Plan submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="offplan-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3" role="region" aria-label="Off-Plan submenu">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_discover">Discover</div>
              <a href="/off-plan" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_offplan">All Off-Plan Projects</a>
              <a href="/off-plan/new-launches" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_new_launches">New Launches</a>
              <a href="/off-plan/coming-soon" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_coming_soon">Coming Soon</a>
              <a href="/off-plan/by-developer" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_by_developer">By Developer</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_investment_tools">Investment Tools</div>
              <a href="/off-plan/investment-guide" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_investment_guide">Investment Guide</a>
              <a href="/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_payment_calculator">Payment Calculator</a>
              <a href="/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_roi_predictor">ROI Predictor</a>
              <a href="/off-plan/developer-reputation-tracker" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold" data-i18n="nav_developer_tracker">Developer Tracker →</a>
            </div>
          </div>

          <div class="mega-menu-trigger flex items-center group/areas">
            <a href="/areas" class="pl-3 pr-1 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300" id="areas-nav-link" data-i18n="nav_areas">Areas</a>
            <button type="button" class="mega-menu-toggle-btn pr-3 pl-1 py-2 text-ash hover:text-gold-400 transition-colors duration-300 flex items-center justify-center focus:outline-none focus-visible:text-gold-400" id="areas-nav-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="areas-mega-panel" aria-label="Toggle Areas submenu">
              <svg class="w-3 h-3 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="areas-mega-panel" class="mega-menu-panel absolute top-full left-0 mt-2 w-[640px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-3 gap-x-6 gap-y-3" role="region" aria-label="Areas submenu">
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_featured_areas">Featured Areas</div>
              <a href="/areas/palm-jumeirah" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_palm_jumeirah">Palm Jumeirah</a>
              <a href="/areas/downtown-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_downtown_dubai">Downtown Dubai</a>
              <a href="/areas/dubai-hills-estate" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_dubai_hills_estate">Dubai Hills Estate</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_dubai_marina">Dubai Marina</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_business_bay">Business Bay</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_creek_harbour">Creek Harbour</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_jumeirah_bay_island">Jumeirah Bay Island</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_emirates_hills">Emirates Hills</a>
              <a href="/areas" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold" data-i18n="nav_all_areas">All Areas →</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/private-office" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              <span data-i18n="nav_private_office">Private Office</span>
              <svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-gold-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_the_private_office">The Private Office</div>
              <a href="/private-office" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_overview">Overview</a>
              <a href="/private-office/discretion" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_discretion_protocol">Discretion Protocol</a>
              <a href="/private-office/off-market" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_off_market_listings">Off-Market Listings</a>
              <a href="/private-office/multi-currency" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_multi_currency">Multi-Currency Pricing</a>
              <a href="/private-office/crypto-payments" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_crypto_payments">Crypto Payments</a>
              <a href="/private-office/concierge" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_lifestyle_concierge">Lifestyle Concierge</a>
              <a href="/private-office/yacht-aviation" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_yacht_aviation">Yacht &amp; Aviation</a>
              <a href="/private-office/cross-border-tax" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_cross_border_tax">Cross-Border Tax</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/services" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              <span data-i18n="nav_services">Services</span>
              <svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_buying_selling">Buying &amp; Selling</div>
              <a href="/services/buying" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_buying_advisory">Buying Advisory</a>
              <a href="/services/selling" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_selling_advisory">Selling Advisory</a>
              <a href="/services/mortgage" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_mortgage_advisory">Mortgage Advisory</a>
              <a href="/services/valuation" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_free_valuation">Free Valuation</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_management_legal">Management &amp; Legal</div>
              <a href="/services/property-management" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_property_management">Property Management</a>
              <a href="/services/legal" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_legal_conveyancing">Legal &amp; Conveyancing</a>
              <a href="/services/insurance" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_property_insurance">Property Insurance</a>
              <a href="/services/after-sales" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_after_sales">After-Sales Support</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/visas" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              <span data-i18n="nav_visas">Visas</span>
              <svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_visa_types">Visa Types</div>
              <a href="/visas" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_visas_hub">All Visas Hub</a>
              <a href="/visas/golden-visa" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_golden_visa">Golden Visa (10-Year)</a>
              <a href="/visas/investor-visa" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_investor_visa">Investor Visa (2-Year)</a>
              <a href="/visas/retirement-visa" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_retirement_visa">Retirement Visa (5-Year)</a>
              <a href="/visas/remote-work-visa" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_remote_work_visa">Remote Work Visa</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_by_nationality">By Nationality</div>
              <a href="/visas/for-indian-buyers" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_for_indian_buyers">For Indian Buyers</a>
              <a href="/visas/for-uk-buyers" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_for_uk_buyers">For UK Buyers</a>
              <a href="/visas/for-chinese-buyers" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_for_chinese_buyers">For Chinese Buyers</a>
              <a href="/visas/eligibility-checker" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold" data-i18n="nav_check_eligibility">Check Eligibility →</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/insights" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              <span data-i18n="nav_insights">Insights</span>
              <svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_content_hub">Content Hub</div>
              <a href="/insights" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_all_insights">All Insights</a>
              <a href="/insights/blog" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_blog_articles">Blog Articles</a>
              <a href="/insights/market-reports" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_market_reports">Market Reports</a>
              <a href="/insights/podcast" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_podcast">Podcast</a>
              <a href="/insights/guides" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_buyers_guides">Buyer's Guides</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_tools_reference">Tools &amp; Reference</div>
              <a href="/insights/calculators" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_all_calculators">All Calculators</a>
              <a href="/insights/faq" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_faq_hub">FAQ Hub</a>
              <a href="/insights/glossary" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_glossary">Glossary</a>
              <a href="/insights/market-data" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_market_data">Market Data</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <a href="/heritage" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              <span data-i18n="nav_heritage">Heritage</span>
              <svg class="w-3 h-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line" data-i18n="nav_about_zarin">About ZARIN</div>
              <a href="/heritage" class="text-sm text-bone hover:text-gold-400 transition-colors" data-i18n="nav_our_story">Our Story (since 2005)</a>
              <a href="/heritage/founder" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_founders_letter">Founder's Letter</a>
              <a href="/heritage/team" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_our_team">Our Team</a>
              <a href="/heritage/authors" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_author_profiles">Author Profiles</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2" data-i18n="nav_trust_proof">Trust &amp; Proof</div>
              <a href="/heritage/testimonials" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_testimonials">Testimonials</a>
              <a href="/heritage/awards" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_awards">Awards</a>
              <a href="/heritage/press" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_press_media">Press &amp; Media</a>
              <a href="/heritage/case-studies" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_case_studies">Case Studies</a>
            </div>
          </div>
        </nav>

        <div class="header-action-cluster flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <a href="tel:+971586901231" class="hidden xl:flex items-center gap-2 text-xs font-semibold text-ash hover:text-gold-400 transition-colors whitespace-nowrap" aria-label="Call us at +971 58 690 1231">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span dir="ltr" class="tabular-nums">+971 58 690 1231</span>
          </a>

          <a href="/consultation" class="header-cta hidden lg:inline-flex items-center justify-center h-[34px] px-4 md:px-5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-[0.06em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold whitespace-nowrap" aria-label="Book a consultation" data-i18n="nav_cta">
            Book Consultation
          </a>

          <div class="lang-switch hidden lg:inline-flex items-center h-[34px] bg-white/[0.04] border border-white-line rounded-xs p-0.5" role="group" aria-label="Language selection">
            <button type="button" class="lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all active is-active" data-lang="en" aria-label="Switch to English" aria-pressed="true">EN</button>
            <button type="button" class="lang-btn h-full px-2 text-[11px] font-semibold rounded-xs transition-all" data-lang="fa" aria-label="تغییر زبان به فارسی" aria-pressed="false">فارسی</button>
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
              <button type="button" class="lang-btn mobile-lang-item" data-lang="fa" role="menuitem" aria-label="تغییر به زبان فارسی">
                <span>فارسی (FA)</span>
                <span class="mobile-lang-check text-gold-400 font-bold hidden">✓</span>
              </button>
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
        <!-- 1. Properties -->
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/properties" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400" data-i18n="nav_properties">Properties</a>
            <button type="button" id="mobile-properties-toggle" aria-expanded="false" aria-controls="mobile-properties-submenu" aria-label="Toggle Properties submenu" class="p-3 text-ash hover:text-gold-400 focus:outline-none">
              <svg class="w-4 h-4 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
          <div id="mobile-properties-submenu" class="hidden pl-6 pr-4 py-2 flex flex-col gap-2 border-l border-white-line ml-4 my-1">
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-1" data-i18n="nav_for_sale">For Sale</div>
            <a href="/properties-for-sale" class="text-xs text-bone hover:text-gold-400 py-1" data-i18n="nav_all_properties_for_sale">All Properties for Sale</a>
            <a href="/properties#apartments" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_apartments">Apartments</a>
            <a href="/properties#villas" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_villas">Villas</a>
            <a href="/properties#penthouses" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_penthouses">Penthouses</a>
            <a href="/properties#townhouses" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="filter_townhouses">Townhouses</a>
            <a href="/trophy-residences" class="text-xs text-gold-400 font-semibold py-1" data-i18n="filter_trophy">Trophy Residences →</a>
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-2" data-i18n="nav_for_rent">For Rent</div>
            <a href="/properties-for-rent" class="text-xs text-bone hover:text-gold-400 py-1" data-i18n="nav_all_rentals">All Rentals</a>
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-2" data-i18n="nav_by_lifestyle">By Lifestyle</div>
            <a href="/properties#beachfront" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_beachfront">Beachfront</a>
            <a href="/properties#burj-view" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_burj_view">Burj View</a>
            <a href="/properties#golf-course" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_golf_course">Golf Course</a>
            <a href="/branded-residences-in-dubai" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_branded_residences">Branded Residences</a>
            <a href="/commercial-properties-in-dubai" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_commercial">Commercial</a>
          </div>
        </div>

        <!-- 2. Off-Plan -->
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/off-plan" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400" data-i18n="nav_offplan">Off-Plan</a>
            <button type="button" id="mobile-offplan-toggle" aria-expanded="false" aria-controls="mobile-offplan-submenu" aria-label="Toggle Off-Plan submenu" class="p-3 text-ash hover:text-gold-400 focus:outline-none">
              <svg class="w-4 h-4 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
          <div id="mobile-offplan-submenu" class="hidden pl-6 pr-4 py-2 flex flex-col gap-2 border-l border-white-line ml-4 my-1">
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-1" data-i18n="nav_discover">Discover</div>
            <a href="/off-plan" class="text-xs text-bone hover:text-gold-400 py-1" data-i18n="nav_all_offplan">All Off-Plan Projects</a>
            <a href="/off-plan/new-launches" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_new_launches">New Launches</a>
            <a href="/off-plan/by-developer" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_by_developer">By Developer</a>
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-2" data-i18n="nav_investment_tools">Investment Tools</div>
            <a href="/off-plan/investment-guide" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_investment_guide">Investment Guide</a>
          </div>
        </div>

        <!-- 3. Areas -->
        <div class="mobile-nav-item">
          <div class="flex items-center justify-between hover:bg-white-soft rounded-xs transition-all">
            <a href="/areas" class="flex-1 py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400" data-i18n="nav_areas">Areas</a>
            <button type="button" id="mobile-areas-toggle" aria-expanded="false" aria-controls="mobile-areas-submenu" aria-label="Toggle Areas submenu" class="p-3 text-ash hover:text-gold-400 focus:outline-none">
              <svg class="w-4 h-4 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
          <div id="mobile-areas-submenu" class="hidden pl-6 pr-4 py-2 flex flex-col gap-2 border-l border-white-line ml-4 my-1">
            <div class="text-[10px] uppercase tracking-wider text-gold-400 font-semibold pt-1" data-i18n="nav_featured_areas">Featured Areas</div>
            <a href="/areas" class="text-xs text-bone hover:text-gold-400 py-1" data-i18n="nav_all_areas">All Areas →</a>
            <a href="/areas/palm-jumeirah" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_palm_jumeirah">Palm Jumeirah</a>
            <a href="/areas/downtown-dubai" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_downtown_dubai">Downtown Dubai</a>
            <a href="/areas/dubai-hills-estate" class="text-xs text-ash hover:text-gold-400 py-1" data-i18n="nav_dubai_hills_estate">Dubai Hills Estate</a>
          </div>
        </div>

        <a href="/private-office" class="py-3 px-4 text-sm font-semibold text-gold-400 hover:bg-white-soft rounded-xs transition-all" data-i18n="nav_private_office">Private Office</a>
        <a href="/services" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all" data-i18n="nav_services">Services</a>
        <a href="/visas" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all" data-i18n="nav_visas">Visas</a>
        <a href="/insights" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all" data-i18n="nav_insights">Insights</a>
        <a href="/heritage" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all" data-i18n="nav_heritage">Heritage</a>
        <div class="h-px bg-white-line my-4"></div>
        <a href="/consultation" class="py-3 px-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-wide text-center rounded-xs hover:bg-gold-300 transition-all" data-i18n="nav_cta">Book Consultation</a>
        <a href="tel:+971586901231" class="py-3 px-4 text-sm text-ash hover:text-gold-400 text-center">+971 58 690 1231</a>
      </nav>
    </div>
  </div>

  <main id="main">

  <!-- 1. HERO -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Properties for rent hero">
    <div class="absolute inset-0 opacity-25"><img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold" data-i18n="prop_rent_hero_eyebrow">For Rent &middot; Annual &amp; Short-Term</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6" data-i18n="prop_rent_hero_h1">Properties<br>for <span class="text-gold-gradient">Rent in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-8 font-light" data-i18n="prop_rent_tldr">Apartments, villas, and townhouses available for annual lease or short-term stay. Every rental is verified by a ZARIN advisor — Ejari-registered, fair-priced, and move-in ready. Browse below or request a tailored shortlist.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#rental-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse rentals" data-i18n="prop_rent_browse_rentals"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>Browse Rentals</a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to a rental advisor" data-i18n="prop_rent_speak_advisor">Speak to Advisor</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line">
          <div><div class="text-3xl font-bold text-gold-400 stat-number" data-i18n="prop_rent_stat_active_val">1,800+</div><div class="text-xs text-slate uppercase tracking-wider mt-1" data-i18n="prop_rent_stat_active_lbl">Active Rentals</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number" data-i18n="prop_rent_stat_entry_val">AED 40K+</div><div class="text-xs text-slate uppercase tracking-wider mt-1" data-i18n="prop_rent_stat_entry_lbl">Entry Annual Rent</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number" data-i18n="prop_rent_stat_cheques_val">1–12</div><div class="text-xs text-slate uppercase tracking-wider mt-1" data-i18n="prop_rent_stat_cheques_lbl">Cheque Options</div></div>
          <div><div class="text-3xl font-bold text-gold-400 stat-number" data-i18n="prop_rent_stat_fee_val">5%</div><div class="text-xs text-slate uppercase tracking-wider mt-1" data-i18n="prop_rent_stat_fee_lbl">Agency Fee</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. FILTER BAR -->
  <section class="sticky top-0 z-50 glass border-b border-white-line py-4" aria-label="Rental filters" id="filter-bar">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-wrap items-center gap-3">
        <div class="text-xs uppercase tracking-[0.2em] text-slate font-semibold mr-2" data-i18n="filter_label">Filter:</div>
        <button type="button" class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash" data-filter="all" aria-pressed="true" data-i18n="filter_all_types">All Types</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter="apartment" aria-pressed="false" data-i18n="filter_apartments">Apartment</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter="villa" aria-pressed="false" data-i18n="filter_villas">Villa</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter="townhouse" aria-pressed="false" data-i18n="filter_townhouses">Townhouse</button>
        <div class="hidden md:block w-px h-6 bg-white-line mx-2"></div>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-term="annual" aria-pressed="false" data-i18n="filter_annual">Annual</button>
        <button type="button" class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-term="short-term" aria-pressed="false" data-i18n="filter_short_term">Short-term</button>
        <div class="hidden md:block flex-1"></div>
        <a href="/consultation" class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="Custom rental search" data-i18n="filter_custom_search">Custom Search →</a>
      </div>
    </div>
  </section>

  <!-- 3. RENTAL GRID -->
  <section id="rental-grid" class="bg-ink-900 py-16 md:py-20" aria-label="Rental listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2" data-i18n="prop_rent_curated_eyebrow">Featured Rentals</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone" data-i18n="prop_rent_curated_title">Available Now in Dubai</h2>
        </div>
        <p class="text-sm text-ash max-w-md" data-i18n="prop_rent_curated_desc">A curated sample of current ZARIN-managed rentals. Each property is verified, Ejari-registered, and ready for move-in. For our full inventory, request a custom search.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="rental-listings-container">
        
        <!-- Listing 1 -->
        <article class="rental-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-type="apartment" data-term="annual">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 1-bedroom apartment in Dubai Marina">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" alt="1-bedroom apartment in Dubai Marina" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold" data-i18n="prop_rent_card1_tag">AED 95K/yr</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold" data-i18n="prop_rent_type_apartment">Apartment</div>
              <div class="text-xs text-slate" data-i18n="prop_rent_term_annual">Annual</div>
            </div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors" data-i18n="prop_rent_card1_title">1BR Apartment &middot; Marina Gate</h3>
            <div class="text-sm text-ash mb-4" data-i18n="prop_rent_card1_loc">Dubai Marina &middot; 720 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">1</div><div data-i18n="prop_rent_bedrooms">Bedrooms</div></div>
              <div><div class="text-bone font-semibold">2</div><div data-i18n="prop_rent_bathrooms">Bathrooms</div></div>
              <div><div class="text-bone font-semibold" data-i18n="prop_rent_card1_price">AED 95,000</div><div data-i18n="prop_rent_per_year">per year</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2 -->
        <article class="rental-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-type="villa" data-term="annual">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3-bedroom villa on Palm Jumeirah">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="3-bedroom villa on Palm Jumeirah" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold" data-i18n="prop_rent_badge_premium">Premium</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold" data-i18n="prop_rent_card2_tag">AED 480K/yr</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold" data-i18n="prop_rent_type_villa">Villa</div>
              <div class="text-xs text-slate" data-i18n="prop_rent_term_annual">Annual</div>
            </div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors" data-i18n="prop_rent_card2_title">3BR Villa &middot; Frond M</h3>
            <div class="text-sm text-ash mb-4" data-i18n="prop_rent_card2_loc">Palm Jumeirah &middot; 4,200 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div data-i18n="prop_rent_bedrooms">Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div data-i18n="prop_rent_bathrooms">Bathrooms</div></div>
              <div><div class="text-bone font-semibold" data-i18n="prop_rent_card2_price">AED 480,000</div><div data-i18n="prop_rent_per_year">per year</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3 -->
        <article class="rental-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-type="apartment" data-term="annual">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View Studio apartment in JVC">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="Studio apartment in JVC" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold" data-i18n="prop_rent_card3_tag">AED 45K/yr</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold" data-i18n="prop_rent_type_studio">Studio</div>
              <div class="text-xs text-slate" data-i18n="prop_rent_term_annual">Annual</div>
            </div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors" data-i18n="prop_rent_card3_title">Studio &middot; Belgravia</h3>
            <div class="text-sm text-ash mb-4" data-i18n="prop_rent_card3_loc">JVC &middot; 440 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold" data-i18n="prop_rent_type_studio">Studio</div><div data-i18n="prop_rent_bedrooms">Bedrooms</div></div>
              <div><div class="text-bone font-semibold">1</div><div data-i18n="prop_rent_bathrooms">Bathrooms</div></div>
              <div><div class="text-bone font-semibold" data-i18n="prop_rent_card3_price">AED 45,000</div><div data-i18n="prop_rent_per_year">per year</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4 -->
        <article class="rental-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-type="apartment" data-term="annual">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 2-bedroom apartment in Downtown Dubai">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="2-bedroom apartment in Downtown Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold" data-i18n="prop_rent_card4_tag">AED 165K/yr</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold" data-i18n="prop_rent_type_apartment">Apartment</div>
              <div class="text-xs text-slate" data-i18n="prop_rent_term_annual">Annual</div>
            </div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors" data-i18n="prop_rent_card4_title">2BR Apartment &middot; Burj Vista</h3>
            <div class="text-sm text-ash mb-4" data-i18n="prop_rent_card4_loc">Downtown Dubai &middot; 1,300 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">2</div><div data-i18n="prop_rent_bedrooms">Bedrooms</div></div>
              <div><div class="text-bone font-semibold">3</div><div data-i18n="prop_rent_bathrooms">Bathrooms</div></div>
              <div><div class="text-bone font-semibold" data-i18n="prop_rent_card4_price">AED 165,000</div><div data-i18n="prop_rent_per_year">per year</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5 -->
        <article class="rental-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-type="townhouse" data-term="annual">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4-bedroom townhouse in Dubai Hills">
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" alt="4-bedroom townhouse in Dubai Hills" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold" data-i18n="prop_rent_card5_tag">AED 320K/yr</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold" data-i18n="prop_rent_type_townhouse">Townhouse</div>
              <div class="text-xs text-slate" data-i18n="prop_rent_term_annual">Annual</div>
            </div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors" data-i18n="prop_rent_card5_title">4BR Townhouse &middot; Park Heights</h3>
            <div class="text-sm text-ash mb-4" data-i18n="prop_rent_card5_loc">Dubai Hills &middot; 2,800 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div data-i18n="prop_rent_bedrooms">Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div data-i18n="prop_rent_bathrooms">Bathrooms</div></div>
              <div><div class="text-bone font-semibold" data-i18n="prop_rent_card5_price">AED 320,000</div><div data-i18n="prop_rent_per_year">per year</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6 -->
        <article class="rental-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" data-type="apartment" data-term="annual">
          <a href="/consultation" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 2-bedroom apartment in Business Bay">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="2-bedroom apartment in Business Bay" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold" data-i18n="prop_rent_card6_tag">AED 125K/yr</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold" data-i18n="prop_rent_type_apartment">Apartment</div>
              <div class="text-xs text-slate" data-i18n="prop_rent_term_annual">Annual</div>
            </div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors" data-i18n="prop_rent_card6_title">2BR Apartment &middot; Executive Tower</h3>
            <div class="text-sm text-ash mb-4" data-i18n="prop_rent_card6_loc">Business Bay &middot; 1,100 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">2</div><div data-i18n="prop_rent_bedrooms">Bedrooms</div></div>
              <div><div class="text-bone font-semibold">3</div><div data-i18n="prop_rent_bathrooms">Bathrooms</div></div>
              <div><div class="text-bone font-semibold" data-i18n="prop_rent_card6_price">AED 125,000</div><div data-i18n="prop_rent_per_year">per year</div></div>
            </div>
          </div>
        </article>

      </div>
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6" data-i18n="prop_rent_sample_notice">Don't see what you need? We have 1,800+ active rentals across Dubai. Tell us your budget and area preferences — we'll send a tailored shortlist within 24 hours.</p>
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request custom rental search" data-i18n="prop_rent_request_custom">Request Custom Search<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. RENTAL TYPES -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Rental types">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4" data-i18n="prop_rent_types_eyebrow">Rental Types</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone" data-i18n="prop_rent_types_title">Two Ways to Rent in Dubai</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto" data-i18n="prop_rent_types_sub">Choose the structure that fits your situation. Each has different costs, flexibility, and documentation requirements.</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Annual -->
        <article class="bg-ink-900 border border-gold-line rounded-sm p-8 lg:p-10 bg-gold-soft">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-gold-400 text-ink-900 rounded-xs flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold" data-i18n="prop_rent_type_annual_badge">Annual Lease</div>
              <h3 class="text-2xl font-bold text-bone" data-i18n="prop_rent_type_annual_title">12-Month Tenancy</h3>
            </div>
          </div>
          <p class="text-sm text-ash leading-relaxed mb-6" data-i18n="prop_rent_type_annual_desc">The standard residential structure. Cheque-based payments spread across the year (1, 2, 3, 4, 6, or 12 cheques). Ejari-registered. Strong tenant protections under Dubai Tenancy Law. Best for residents settling in Dubai.</p>
          <div class="space-y-3 mb-6">
            <div class="flex items-start gap-3"><svg class="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-sm text-bone" data-i18n="prop_rent_type_annual_b1">Best rental rates — annual contracts are cheaper than monthly</span></div>
            <div class="flex items-start gap-3"><svg class="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-sm text-bone" data-i18n="prop_rent_type_annual_b2">Ejari-registered, legally protected tenancy</span></div>
            <div class="flex items-start gap-3"><svg class="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-sm text-bone" data-i18n="prop_rent_type_annual_b3">Capped annual increases per RERA Rent Index</span></div>
            <div class="flex items-start gap-3"><svg class="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-sm text-bone" data-i18n="prop_rent_type_annual_b4">Suitable for Golden Visa eligibility (AED 100K+ rent in some cases)</span></div>
          </div>
          <div class="bg-ink-850 border border-white-line rounded-xs p-4 mb-6">
            <div class="text-xs uppercase tracking-wider text-slate mb-2" data-i18n="prop_rent_costs_title">Typical Costs</div>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="flex justify-between text-ash"><span data-i18n="prop_rent_costs_c1_lbl">Agency commission</span><span class="text-bone font-semibold" data-i18n="prop_rent_costs_c1_val">5%</span></div>
              <div class="flex justify-between text-ash"><span data-i18n="prop_rent_costs_c2_lbl">Security deposit</span><span class="text-bone font-semibold" data-i18n="prop_rent_costs_c2_val">5-10%</span></div>
              <div class="flex justify-between text-ash"><span data-i18n="prop_rent_costs_c3_lbl">Ejari fee</span><span class="text-bone font-semibold" data-i18n="prop_rent_costs_c3_val">AED 220</span></div>
              <div class="flex justify-between text-ash"><span data-i18n="prop_rent_costs_c4_lbl">DEWA deposit</span><span class="text-bone font-semibold" data-i18n="prop_rent_costs_c4_val">AED 2K-4K</span></div>
            </div>
          </div>
          <a href="/consultation" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Find annual rental" data-i18n="prop_rent_find_annual">Find Annual Rental<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </article>

        <!-- Short-term -->
        <article class="bg-ink-900 border border-white-line rounded-sm p-8 lg:p-10">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 border border-gold-line bg-gold-soft rounded-xs flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold" data-i18n="prop_rent_type_short_badge">Short-Term</div>
              <h3 class="text-2xl font-bold text-bone" data-i18n="prop_rent_type_short_title">Daily &amp; Weekly Stays</h3>
            </div>
          </div>
          <p class="text-sm text-ash leading-relaxed mb-6" data-i18n="prop_rent_type_short_desc">Licensed holiday homes for travelers, business visitors, and short-stay professionals. Fully furnished, hotel-grade amenities, and flexible check-in. DET-licensed (Dubai Department of Economy and Tourism).</p>
          <div class="space-y-3 mb-6">
            <div class="flex items-start gap-3"><svg class="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-sm text-bone" data-i18n="prop_rent_type_short_b1">Fully furnished and equipped — just bring your suitcase</span></div>
            <div class="flex items-start gap-3"><svg class="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-sm text-bone" data-i18n="prop_rent_type_short_b2">Flexible check-in, no long-term commitment</span></div>
            <div class="flex items-start gap-3"><svg class="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-sm text-bone" data-i18n="prop_rent_type_short_b3">Premium locations: Marina, Downtown, Palm, Business Bay</span></div>
            <div class="flex items-start gap-3"><svg class="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-sm text-bone" data-i18n="prop_rent_type_short_b4">No Ejari needed — open to tourist visa holders</span></div>
          </div>
          <div class="bg-ink-850 border border-white-line rounded-xs p-4 mb-6">
            <div class="text-xs uppercase tracking-wider text-slate mb-2" data-i18n="prop_rent_rates_title">Typical Rates (per night)</div>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="flex justify-between text-ash"><span data-i18n="prop_rent_rates_r1_lbl">Studio (summer)</span><span class="text-bone font-semibold" data-i18n="prop_rent_rates_r1_val">AED 350-500</span></div>
              <div class="flex justify-between text-ash"><span data-i18n="prop_rent_rates_r2_lbl">Studio (peak)</span><span class="text-bone font-semibold" data-i18n="prop_rent_rates_r2_val">AED 600-900</span></div>
              <div class="flex justify-between text-ash"><span data-i18n="prop_rent_rates_r3_lbl">1BR (peak)</span><span class="text-bone font-semibold" data-i18n="prop_rent_rates_r3_val">AED 900-1,500</span></div>
              <div class="flex justify-between text-ash"><span data-i18n="prop_rent_rates_r4_lbl">3BR Villa (peak)</span><span class="text-bone font-semibold" data-i18n="prop_rent_rates_r4_val">AED 2,500-4,500</span></div>
            </div>
          </div>
          <a href="/consultation" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Find short-term rental" data-i18n="prop_rent_find_short">Find Short-Term Rental<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </article>
      </div>
    </div>
  </section>

  <!-- 5. WHY RENT WITH ZARIN -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Why rent with ZARIN">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4" data-i18n="why_zarin_eyebrow">Why ZARIN</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6" data-i18n="prop_rent_why_title">A Rental Advisor Who Cares About the Move-In</h2>
          <p class="text-lg text-ash leading-relaxed mb-8" data-i18n="prop_rent_why_desc">Finding a rental is only the first step. Setting up utilities, getting Ejari, sourcing furniture, and registering with the building — that's where most tenants get stuck. ZARIN advisors walk you through every step, including the small print most agents skip.</p>
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div>
              <div><div class="text-sm font-bold text-bone" data-i18n="prop_rent_why_p1_title">Every rental Ejari-registered</div><div class="text-xs text-slate mt-1" data-i18n="prop_rent_why_p1_desc">Legal protection, school enrolment, visa sponsorship-ready.</div></div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div>
              <div><div class="text-sm font-bold text-bone" data-i18n="prop_rent_why_p2_title">Full move-in coordination</div><div class="text-xs text-slate mt-1" data-i18n="prop_rent_why_p2_desc">DEWA setup, internet, building registration, furniture sourcing.</div></div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div>
              <div><div class="text-sm font-bold text-bone" data-i18n="prop_rent_why_p3_title">RERA Rent Index check on every property</div><div class="text-xs text-slate mt-1" data-i18n="prop_rent_why_p3_desc">We tell you if the asking rent is above market.</div></div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div>
              <div><div class="text-sm font-bold text-bone" data-i18n="prop_rent_why_p4_title">5% standard commission, transparent fees</div><div class="text-xs text-slate mt-1" data-i18n="prop_rent_why_p4_desc">No hidden charges, RERA-aligned.</div></div>
            </div>
          </div>
          <a href="/services/property-management" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Explore property management" data-i18n="prop_rent_why_cta">Explore Property Management<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-ink-850 border border-gold-line rounded-sm p-6 bg-gold-soft"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2" data-i18n="prop_rent_why_s1_val">1,800+</div><div class="text-sm font-bold text-bone mb-1" data-i18n="prop_rent_why_s1_title">Active Rentals</div><div class="text-xs text-slate" data-i18n="prop_rent_why_s1_desc">Annual &amp; short-term</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2" data-i18n="prop_rent_why_s2_val">5%</div><div class="text-sm font-bold text-bone mb-1" data-i18n="prop_rent_why_s2_title">Agency Commission</div><div class="text-xs text-slate" data-i18n="prop_rent_why_s2_desc">Standard residential</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2" data-i18n="prop_rent_why_s3_val">24hr</div><div class="text-sm font-bold text-bone mb-1" data-i18n="prop_rent_why_s3_title">Shortlist Delivery</div><div class="text-xs text-slate" data-i18n="prop_rent_why_s3_desc">After consultation</div></div>
          <div class="bg-ink-850 border border-white-line rounded-sm p-6"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2" data-i18n="prop_rent_why_s4_val">Free</div><div class="text-sm font-bold text-bone mb-1" data-i18n="prop_rent_why_s4_title">Move-In Coordination</div><div class="text-xs text-slate" data-i18n="prop_rent_why_s4_desc">For ZARIN tenants</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Renting FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4" data-i18n="prop_rent_faq_eyebrow">Renting FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone" data-i18n="prop_rent_faq_title">Common Tenant Questions</h2>
      </div>
      <div class="space-y-3">
        <details class="bg-ink-900 border border-white-line rounded-sm" open>
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone" data-i18n="prop_rent_faq_q1">What is the typical annual rent in Dubai in 2026?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed" data-i18n="prop_rent_faq_a1">Annual rents in Dubai in 2026 vary widely by area and unit size. Studios start around AED 40,000-60,000 in JVC and Discovery Gardens. 1-bedroom apartments in Dubai Marina or Downtown Dubai range from AED 85,000-130,000. 2-bedroom units typically rent for AED 130,000-200,000 in prime areas. Family villas start around AED 220,000 and can exceed AED 500,000 for premium Palm Jumeirah or Emirates Hills locations.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone" data-i18n="prop_rent_faq_q2">What is the standard tenancy contract duration in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed" data-i18n="prop_rent_faq_a2">The standard residential tenancy contract in Dubai is 12 months, renewable annually. Commercial leases run 1-3 years, sometimes up to 5. Short-term rentals (daily/weekly) require a holiday home permit from Dubai Department of Economy and Tourism (DET). All residential contracts must be registered with Ejari, the Dubai Land Department's tenancy registration system.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone" data-i18n="prop_rent_faq_q3">What are the costs involved in renting property in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed" data-i18n="prop_rent_faq_a3">For annual rentals: 5% agency commission (residential) or 7% (commercial), refundable security deposit (5% of annual rent for unfurnished, 10% for furnished), Ejari registration fee AED 220, and Dewa (utility) connection deposit AED 2,000-4,000. Short-term rentals include the daily rate, 7% municipality fee, and tourism dirham fee per night.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone" data-i18n="prop_rent_faq_q4">Are rents paid monthly or annually in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed" data-i18n="prop_rent_faq_a4">Residential annual rents are typically paid via 1, 2, 3, 4, or 6 cheques spread evenly through the year. More cheques usually means slightly higher total rent (a premium for flexibility). Some landlords accept 12 cheques at a meaningful premium. Commercial leases often accept quarterly payments. Short-term rentals are paid per stay.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone" data-i18n="prop_rent_faq_q5">Can a tenant be evicted before the contract ends?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed" data-i18n="prop_rent_faq_a5">No. Tenants in Dubai have strong protections under the Tenancy Law. Landlords cannot evict a tenant during the contract term unless the tenant breaches the agreement. Even non-renewal at end of term requires 12 months' written notice via notarized letter or registered mail, and only on specific grounds: sale of property, owner's own use, or major renovation requiring vacant possession.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone" data-i18n="prop_rent_faq_q6">What is the maximum annual rent increase allowed in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed" data-i18n="prop_rent_faq_a6">Dubai's RERA Rent Index sets maximum annual rent increases based on average market rents for the area and unit type. As of 2026: 0% increase if rent is 11%+ below market, 5% if 6-10% below, 10% if up to 5% below, 15% if at or slightly below market. Tenants paying at or above market rate see no increase allowed.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone" data-i18n="prop_rent_faq_q7">Do you handle short-term holiday rentals?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed" data-i18n="prop_rent_faq_a7">Yes. ZARIN manages a portfolio of DET-licensed holiday homes in Dubai Marina, Downtown, Palm Jumeirah, and Business Bay. Minimum stay is typically 1-2 nights. Pricing varies by season — peak (Nov-Mar) commands 40-60% premium over summer. We handle check-in, cleaning, and guest communication.</div>
        </details>
        <details class="bg-ink-900 border border-white-line rounded-sm">
          <summary class="flex items-center justify-between p-6 cursor-pointer"><h3 class="text-base font-semibold text-bone" data-i18n="prop_rent_faq_q8">What documents do I need to rent in Dubai?</h3><svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed" data-i18n="prop_rent_faq_a8">For UAE residents: passport copy, Emirates ID, residence visa copy, salary certificate or proof of income, and post-dated cheques for the full tenancy. For non-residents: passport copy, proof of income, and full advance payment in some cases. Tourist visa holders can rent short-term. ZARIN guides you through the exact requirements based on your situation.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">Still have questions? <a href="/consultation" class="text-gold-400 font-semibold hover:underline" data-i18n="nav_cta">Book a free consultation</a> or <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">WhatsApp us</a>.</p></div>
    </div>
  </section>

  </main>

  <!-- ════════════════════════════════════════════════════════════════
       FOOTER
       ════════════════════════════════════════════════════════════════ -->
  <footer class="bg-ink-950 border-t border-white-line pt-20 pb-8" role="contentinfo">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div class="col-span-2 lg:col-span-1">
          <a href="/" class="flex items-center gap-2 mb-4" aria-label="ZARIN Real Estate home"><span class="font-sans font-extrabold text-2xl tracking-tight text-bone">ZARIN</span></a>
          <p class="text-sm text-slate leading-relaxed mb-6" data-i18n="footer_tagline">Dubai real estate advisory since 2005.</p>
          <div class="flex gap-3">
            <a href="https://instagram.com/zarin.realestate" class="w-10 h-10 border border-white-line rounded-xs flex items-center justify-center text-ash hover:text-gold-400 hover:border-gold-line transition-all" aria-label="Instagram"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            <a href="https://wa.me/971586901231" class="w-10 h-10 border border-white-line rounded-xs flex items-center justify-center text-ash hover:text-gold-400 hover:border-gold-line transition-all" aria-label="WhatsApp"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>
          </div>
        </div>
        <nav aria-label="Properties footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4" data-i18n="nav_properties">Properties</h2><ul class="space-y-2"><li><a href="/properties-for-sale" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_for_sale">For Sale</a></li><li><a href="/properties-for-rent" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_for_rent">For Rent</a></li><li><a href="/trophy-residences" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="filter_trophy">Trophy Residences</a></li><li><a href="/properties#beachfront" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_beachfront">Beachfront</a></li><li><a href="/branded-residences-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_branded_residences">Branded Residences</a></li><li><a href="/commercial-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_commercial">Commercial</a></li></ul></nav>
        <nav aria-label="Services footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4" data-i18n="nav_services">Services</h2><ul class="space-y-2"><li><a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_all_services">All Services</a></li><li><a href="/visas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_all_visas">Visas &amp; Citizenship</a></li><li><a href="/consultation" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_cta">Book Consultation</a></li><li><a href="/contact" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_contact">Contact</a></li></ul></nav>
        <nav aria-label="Insights footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4" data-i18n="nav_insights">Insights</h2><ul class="space-y-2"><li><a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_all_insights">All Insights</a></li><li><a href="/off-plan/investment-guide" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_investment_guide">Investment Guide</a></li><li><a href="/off-plan/developer-reputation-tracker" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_developer_tracker">Developer Tracker</a></li><li><a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_all_areas">Area Guides</a></li></ul></nav>
        <nav aria-label="Heritage footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4" data-i18n="nav_heritage">Heritage</h2><ul class="space-y-2"><li><a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="nav_our_story">Our Story</a></li><li><a href="/legal/privacy" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="footer_privacy">Privacy Policy</a></li><li><a href="/legal/terms" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="footer_terms">Terms of Service</a></li><li><a href="/legal/ai-disclosure" class="text-sm text-ash hover:text-gold-400 transition-colors" data-i18n="footer_ai_disclosure">AI Disclosure</a></li></ul></nav>
      </div>
      <div class="grid md:grid-cols-3 gap-6 py-8 border-t border-white-line">
        <address class="not-italic"><div class="text-xs uppercase tracking-wider text-slate mb-2" data-i18n="footer_address_title">Dubai Office</div><p class="text-sm text-ash" data-i18n="footer_address_body">Sheikh Zayed Road<br>Downtown Dubai, UAE</p></address>
        <div><div class="text-xs uppercase tracking-wider text-slate mb-2" data-i18n="footer_phone_title">Phone</div><a href="tel:+971586901231" class="text-sm text-bone hover:text-gold-400 transition-colors">+971 58 690 1231</a></div>
        <div><div class="text-xs uppercase tracking-wider text-slate mb-2" data-i18n="footer_email_title">Email</div><a href="mailto:advisory@zarinrealestate.com" class="text-sm text-bone hover:text-gold-400 transition-colors">advisory@zarinrealestate.com</a></div>
      </div>
      <div class="pt-8 border-t border-white-line flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap items-center gap-4 text-xs text-slate"><span>&copy; 2026 ZARIN Real Estate. All rights reserved.</span><span class="hidden md:inline w-1 h-1 bg-slate rounded-full" aria-hidden="true"></span><span data-i18n="footer_rera">RERA Licensed</span></div>
        <nav aria-label="Legal links" class="flex flex-wrap items-center gap-4 text-xs"><a href="/legal/privacy" class="text-slate hover:text-gold-400 transition-colors" data-i18n="footer_privacy">Privacy</a><a href="/legal/terms" class="text-slate hover:text-gold-400 transition-colors" data-i18n="footer_terms">Terms</a><a href="/legal/cookies" class="text-slate hover:text-gold-400 transition-colors" data-i18n="footer_cookies">Cookies</a><a href="/legal/ai-disclosure" class="text-slate hover:text-gold-400 transition-colors" data-i18n="footer_ai_disclosure">AI Disclosure</a><a href="/legal/dmca" class="text-slate hover:text-gold-400 transition-colors" data-i18n="footer_dmca">DMCA</a><a href="/sitemap" class="text-slate hover:text-gold-400 transition-colors" data-i18n="footer_sitemap">Sitemap</a></nav>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 right-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="WhatsApp us"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script>
    // Header scroll background effect
    const header = document.getElementById('site-header');
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 60) {
            header.style.backgroundColor = 'rgba(10,11,14,0.85)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.borderBottom = '1px solid rgba(200,171,131,0.15)';
            header.style.padding = '0.85rem 0';
          } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.borderBottom = '1px solid transparent';
            header.style.padding = '1.15rem 0';
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    // Client-side interactive property filtering
    const typeChips = document.querySelectorAll('.filter-chip[data-filter]');
    const termChips = document.querySelectorAll('.filter-chip[data-term]');
    const cards = document.querySelectorAll('.rental-card');

    let currentType = 'all';
    let currentTerm = 'all';

    function filterCards() {
      cards.forEach(card => {
        const type = card.getAttribute('data-type');
        const term = card.getAttribute('data-term');

        let typeMatch = (currentType === 'all') || (type === currentType);
        let termMatch = (currentTerm === 'all') || (term === currentTerm);

        if (typeMatch && termMatch) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    typeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        typeChips.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');
        currentType = chip.getAttribute('data-filter') || 'all';
        filterCards();
      });
    });

    termChips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (chip.classList.contains('active')) {
          chip.classList.remove('active');
          chip.setAttribute('aria-pressed', 'false');
          currentTerm = 'all';
        } else {
          termChips.forEach(c => {
            c.classList.remove('active');
            c.setAttribute('aria-pressed', 'false');
          });
          chip.classList.add('active');
          chip.setAttribute('aria-pressed', 'true');
          currentTerm = chip.getAttribute('data-term') || 'all';
        }
        filterCards();
      });
    });
  </script>
  <script type="module" src="/scripts/i18n.js"></script>
  <script type="module" src="/scripts/nav.js"></script>
</body>
</html>`;
}

// 2. Persian HTML Builder
async function getFaPage() {
  const { JSDOM } = await import('jsdom');
  const { translations } = await import('../scripts/i18n.js');
  const faDict = translations.fa;

  const enHtml = getEnPage();
  const dom = new JSDOM(enHtml);
  const doc = dom.window.document;

  // Set html lang & dir
  doc.documentElement.setAttribute('lang', 'fa');
  doc.documentElement.setAttribute('dir', 'rtl');

  // Title & Meta
  doc.title = faDict.prop_rent_meta_title || 'اجاره ملک و خانه در دبی | املاک و مستغلات زرین';

  const metaDesc = doc.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', faDict.prop_rent_meta_desc || 'مجموعه املاک اجاره‌ای دبی — آپارتمان، ویلا و تاون‌هاوس با قرارداد سالانه یا اقامت کوتاه‌مدت. ثبت رسمی اجاری (Ejari) و راستی‌آزمایی‌شده توسط مشاوران زرین.');

  const metaKeywords = doc.querySelector('meta[name="keywords"]');
  if (metaKeywords) metaKeywords.setAttribute('content', 'اجاره ملک در دبی, اجاره آپارتمان در دبی, اجاره ویلا دبی, اجاره سالانه دبی, اجاره روزانه دبی, قرارداد اجاری دبی');

  // Canonical & Hreflang
  const canonical = doc.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', 'https://zarinrealestate.com/fa/properties-for-rent');

  doc.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
  const head = doc.head;

  const hrFa = doc.createElement('link');
  hrFa.setAttribute('rel', 'alternate');
  hrFa.setAttribute('hreflang', 'fa');
  hrFa.setAttribute('href', 'https://zarinrealestate.com/fa/properties-for-rent');
  head.appendChild(hrFa);

  const hrEn = doc.createElement('link');
  hrEn.setAttribute('rel', 'alternate');
  hrEn.setAttribute('hreflang', 'en');
  hrEn.setAttribute('href', 'https://zarinrealestate.com/properties-for-rent');
  head.appendChild(hrEn);

  const hrDef = doc.createElement('link');
  hrDef.setAttribute('rel', 'alternate');
  hrDef.setAttribute('hreflang', 'x-default');
  hrDef.setAttribute('href', 'https://zarinrealestate.com/properties-for-rent');
  head.appendChild(hrDef);

  // Open Graph & Twitter
  const ogTitle = doc.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', doc.title);
  const ogDesc = doc.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', metaDesc.getAttribute('content'));
  const ogUrl = doc.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', 'https://zarinrealestate.com/fa/properties-for-rent');
  const ogLocale = doc.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', 'fa_IR');

  const twTitle = doc.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', doc.title);
  const twDesc = doc.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', metaDesc.getAttribute('content'));

  // Update Breadcrumb JSON-LD
  const scripts = doc.querySelectorAll('script[type="application/ld+json"]');
  scripts.forEach(script => {
    try {
      const data = JSON.parse(script.textContent);
      if (data['@type'] === 'BreadcrumbList') {
        data.itemListElement = [
          {"@type": "ListItem", "position": 1, "name": "صفحه اصلی", "item": "https://zarinrealestate.com/fa/"},
          {"@type": "ListItem", "position": 2, "name": "املاک", "item": "https://zarinrealestate.com/fa/properties"},
          {"@type": "ListItem", "position": 3, "name": "املاک برای اجاره", "item": "https://zarinrealestate.com/fa/properties-for-rent"}
        ];
        script.textContent = JSON.stringify(data, null, 2);
      } else if (data['@type'] === 'CollectionPage') {
        data.name = "املاک برای اجاره در دبی | املاک و مستغلات زرین";
        data.url = "https://zarinrealestate.com/fa/properties-for-rent";
        data.description = metaDesc.getAttribute('content');
        script.textContent = JSON.stringify(data, null, 2);
      } else if (data['@type'] === 'WebPage') {
        data.url = "https://zarinrealestate.com/fa/properties-for-rent";
        data.name = doc.title;
        script.textContent = JSON.stringify(data, null, 2);
      }
    } catch (e) {}
  });

  // Translate all [data-i18n] attributes using faDict
  doc.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (faDict[key]) {
      if (el.innerHTML.includes('<') && faDict[key].includes('<')) {
        el.innerHTML = faDict[key];
      } else if (el.children.length === 0) {
        el.textContent = faDict[key];
      } else {
        // If element has icon or child tags, replace text nodes
        let replaced = false;
        for (const child of el.childNodes) {
          if (child.nodeType === 3 && child.textContent.trim().length > 0) {
            child.textContent = faDict[key];
            replaced = true;
            break;
          }
        }
        if (!replaced) el.textContent = faDict[key];
      }
    }
  });

  // Switch all internal links to Persian routes
  doc.querySelectorAll('a[href]').forEach(a => {
    let href = a.getAttribute('href');
    if (
      href &&
      href.startsWith('/') &&
      !href.startsWith('/fa') &&
      !href.startsWith('/styles') &&
      !href.startsWith('/scripts') &&
      !href.startsWith('/public') &&
      !href.startsWith('/images') &&
      !href.startsWith('/api') &&
      !href.startsWith('/admin') &&
      !href.includes('.')
    ) {
      if (href === '/') {
        a.setAttribute('href', '/fa');
      } else {
        a.setAttribute('href', '/fa' + href);
      }
    }
  });

  // Update Language Switcher UI for Persian
  const enBtn = doc.querySelector('.lang-btn[data-lang="en"]');
  const faBtn = doc.querySelector('.lang-btn[data-lang="fa"]');
  if (enBtn && faBtn) {
    enBtn.classList.remove('active', 'is-active');
    enBtn.setAttribute('aria-pressed', 'false');
    faBtn.classList.add('active', 'is-active');
    faBtn.setAttribute('aria-pressed', 'true');
  }

  const mobileLangLabel = doc.getElementById('mobile-lang-label');
  if (mobileLangLabel) mobileLangLabel.textContent = 'فارسی';

  const mEnItem = doc.querySelector('.mobile-lang-item[data-lang="en"]');
  const mFaItem = doc.querySelector('.mobile-lang-item[data-lang="fa"]');
  if (mEnItem && mFaItem) {
    mEnItem.classList.remove('is-active');
    const enCheck = mEnItem.querySelector('.mobile-lang-check');
    if (enCheck) enCheck.classList.add('hidden');

    mFaItem.classList.add('is-active');
    const faCheck = mFaItem.querySelector('.mobile-lang-check');
    if (faCheck) faCheck.classList.remove('hidden');
  }

  return '<!DOCTYPE html>\n' + doc.documentElement.outerHTML;
}

// 3. Execution & Writing Files
console.log('Building English and Persian properties-for-rent pages...');

const enHtml = getEnPage();
fs.writeFileSync(path.join(rootDir, 'properties-for-rent.html'), enHtml, 'utf8');

if (!fs.existsSync(path.join(rootDir, 'properties-for-rent'))) {
  fs.mkdirSync(path.join(rootDir, 'properties-for-rent'), { recursive: true });
}
fs.writeFileSync(path.join(rootDir, 'properties-for-rent', 'index.html'), enHtml, 'utf8');
console.log('✅ Generated properties-for-rent.html & properties-for-rent/index.html');

const faHtml = await getFaPage();
fs.writeFileSync(path.join(rootDir, 'fa', 'properties-for-rent.html'), faHtml, 'utf8');

if (!fs.existsSync(path.join(rootDir, 'fa', 'properties-for-rent'))) {
  fs.mkdirSync(path.join(rootDir, 'fa', 'properties-for-rent'), { recursive: true });
}
fs.writeFileSync(path.join(rootDir, 'fa', 'properties-for-rent', 'index.html'), faHtml, 'utf8');
console.log('✅ Generated fa/properties-for-rent.html & fa/properties-for-rent/index.html');
