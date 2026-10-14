import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

const pages = [
  // Articles
  {
    relPath: 'insights/non-resident-buyer-blueprint',
    title: "The Non-Resident Buyer's Blueprint: Escrow, Title Deeds & Banking | ZARIN",
    description: "Comprehensive guide for international property investors acquiring real estate in Dubai. Escrow protections, DLD procedures, and UAE banking setups.",
    badge: "Buyer's Guide · 8 Min Read",
    headline: "The Non-Resident Buyer's Blueprint",
    lead: "Escrow protections, Dubai Land Department (DLD) title transfers, and UAE banking pathways for overseas property investors in 2026.",
    category: "Insights / Articles"
  },
  {
    relPath: 'insights/entry-vs-replacement-cost',
    title: "Entry Price vs Replacement Cost: The 2026 Off-Plan Thesis | ZARIN",
    description: "Analytical research on replacement cost dynamics, contractor margins, and land scarcity in Dubai prime districts.",
    badge: "Market Research · 12 Min Read",
    headline: "Entry Price vs Replacement Cost",
    lead: "Why current prime off-plan launch pricing in Dubai remains fundamentally underpinned by rising construction and replacement costs in 2026.",
    category: "Insights / Articles"
  },
  {
    relPath: 'insights/golden-visa-pathway',
    title: "Golden Visa Through Property: The AED 2M Pathway Explained | ZARIN",
    description: "Detailed roadmap to securing a 10-year UAE Golden Visa via AED 2,000,000+ real estate purchase. Eligibility, family coverage, and GDRFA paperwork.",
    badge: "Visa Advisory · 6 Min Read",
    headline: "Golden Visa Through Property: AED 2M Pathway",
    lead: "Step-by-step procedure to obtaining long-term UAE residency through freehold property investment with full family sponsorship rights.",
    category: "Insights / Articles"
  },
  {
    relPath: 'insights/dubai-hills-investment-case',
    title: "Dubai Hills Estate: The Complete 2026 Investment Case | ZARIN",
    description: "In-depth neighborhood analysis of Dubai Hills Estate: capital appreciation, rental yield projections, school proximity, and golf course villa demand.",
    badge: "Area Analysis · 10 Min Read",
    headline: "Dubai Hills Estate: 2026 Investment Case",
    lead: "Comprehensive intelligence on capital growth, gross yields, and high-net-worth tenant migration into Dubai Hills Estate.",
    category: "Insights / Articles"
  },
  {
    relPath: 'insights/off-plan-vs-ready-2026',
    title: "Off-Plan vs Ready Property: Which Is Better in 2026? | ZARIN",
    description: "Strategic comparison between off-plan payment flexibility and immediate rental income from ready secondary market properties in Dubai.",
    badge: "Investment Strategy · 7 Min Read",
    headline: "Off-Plan vs Ready Property in 2026",
    lead: "Balancing cash flow yield against capital growth upside: making the right decision between handover timelines and immediate rental returns.",
    category: "Insights / Articles"
  },
  {
    relPath: 'insights/service-charges-explained',
    title: "Service Charges Explained: What You Pay Beyond the Price | ZARIN",
    description: "Transparent breakdown of Mollak-regulated service charges, sinking funds, chiller fees, and annual maintenance budgets in Dubai.",
    badge: "Cost Breakdown · 5 Min Read",
    headline: "Dubai Service Charges Explained",
    lead: "Everything property buyers need to know about DLD Mollak indices, building management charges, and factoring maintenance into net yields.",
    category: "Insights / Articles"
  },

  // Market Reports
  {
    relPath: 'insights/market-reports/q3-2026',
    title: "Q3 2026 Dubai Real Estate Market Report | ZARIN",
    description: "Official DLD transaction volume, prime price growth per square foot, and yield metrics for Q3 2026 across Dubai luxury districts.",
    badge: "Quarterly Intelligence · 42 Pages",
    headline: "Q3 2026 Dubai Real Estate Market Report",
    lead: "38,247 transactions recorded with +12% year-on-year price expansion. Download the complete 42-page institutional research paper.",
    category: "Insights / Market Reports"
  },
  {
    relPath: 'insights/market-reports/q2-2026',
    title: "Q2 2026 Dubai Real Estate Market Report | ZARIN",
    description: "Mid-year 2026 prime real estate performance, international buyer origins, and yield analytics across Downtown, Palm Jumeirah, and Dubai Marina.",
    badge: "Quarterly Intelligence · 38 Pages",
    headline: "Q2 2026 Dubai Real Estate Market Report",
    lead: "Comprehensive review of H1 2026 capital trends, prime villa sales velocity, and developer delivery milestones.",
    category: "Insights / Market Reports"
  },
  {
    relPath: 'insights/market-reports/annual-2025',
    title: "Annual 2025 Dubai Real Estate Market Report | ZARIN",
    description: "Complete annual retrospective on Dubai's luxury property market in 2025. Record transactions, price appreciation, and 2026 forecasts.",
    badge: "Annual Report · 86 Pages",
    headline: "Annual 2025 Dubai Real Estate Market Report",
    lead: "86-page macroeconomic compendium evaluating two decades of market evolution and forecasting the 2026-2030 prime property cycle.",
    category: "Insights / Market Reports"
  },

  // Main Hub Subpages
  {
    relPath: 'insights/blog',
    title: "Dubai Real Estate Blog & Market Journal | ZARIN",
    description: "Expert analysis, market commentary, area deep-dives, and regulatory updates from ZARIN's research team.",
    badge: "Editorial & Intelligence",
    headline: "Dubai Real Estate Blog & Journal",
    lead: "In-depth editorial commentary, off-plan analysis, tax structuring insights, and luxury market forecasts for discerning global investors.",
    category: "Insights / Blog"
  },
  {
    relPath: 'insights/market-reports',
    title: "Dubai Real Estate Market Reports & Research Hub | ZARIN",
    description: "Download ZARIN's quarterly and annual Dubai real estate reports with official DLD transaction metrics and yield trends.",
    badge: "Research Publication Hub",
    headline: "Market Reports & Research Hub",
    lead: "Comprehensive quarterly and annual market intelligence publications based on verifiable Dubai Land Department transaction records.",
    category: "Insights / Market Reports"
  },
  {
    relPath: 'insights/calculators',
    title: "Dubai Property Calculators Hub | ZARIN",
    description: "7 free, instant financial calculators: mortgage payments, rental yield & ROI, payment plans, service charges, currency, and visa eligibility.",
    badge: "Interactive Financial Tools",
    headline: "7 Interactive Property Calculators",
    lead: "Model your investments with accuracy: compute mortgage repayments, net rental yields, off-plan cash flows, service charges, and Golden Visa eligibility.",
    category: "Insights / Calculators"
  },
  {
    relPath: 'insights/faq',
    title: "Dubai Real Estate FAQ Hub | ZARIN",
    description: "Answers to 100+ common questions regarding buying freehold property, Golden Visas, mortgages, escrow laws, and developer due diligence in Dubai.",
    badge: "Knowledge Base",
    headline: "Dubai Real Estate FAQ Hub",
    lead: "Authoritative answers to the most frequent legal, financial, and procedural questions asked by domestic and international property buyers.",
    category: "Insights / FAQ"
  },

  // Content Hubs
  {
    relPath: 'insights/podcast',
    title: "ZARIN Podcast | Dubai Real Estate Market Intelligence | ZARIN",
    description: "24 insightful audio and video episodes with top developers, legal advisors, wealth managers, and property market analysts.",
    badge: "Audio & Video · 24 Episodes",
    headline: "ZARIN Real Estate Podcast",
    lead: "Candid conversations on prime acquisitions, off-plan developer due diligence, tax structuring, and Dubai market insider perspectives.",
    category: "Insights / Podcast"
  },
  {
    relPath: 'insights/guides',
    title: "Dubai Property Buyer's Guides | ZARIN",
    description: "Step-by-step master guides for first-time buyers, international investors, family offices, and expatriates in Dubai.",
    badge: "Resource Hub",
    headline: "Dubai Property Buyer's Guides",
    lead: "Exhaustive playbooks covering escrow safeguards, mortgages, Golden Visas, legal conveyancing, and property handover management.",
    category: "Insights / Buyer's Guides"
  },
  {
    relPath: 'insights/glossary',
    title: "Dubai Real Estate Glossary | ZARIN",
    description: "A-to-Z directory of 100+ Dubai real estate terms: DLD, RERA, Mollak, Oqood, Title Deed, EIBOR, Freehold, SPA, and more.",
    badge: "Reference Library · 100+ Terms",
    headline: "Dubai Real Estate Glossary",
    lead: "Clear, authoritative explanations of every legal, financial, and regulatory term you will encounter during property transactions in Dubai.",
    category: "Insights / Glossary"
  },
  {
    relPath: 'insights/brochures',
    title: "Dubai Property Brochures Library | ZARIN",
    description: "Download verified PDF project brochures, floor plans, and investment presentations for Dubai's premier residential towers and villa communities.",
    badge: "Digital Downloads",
    headline: "Property Brochures Library",
    lead: "Official developer brochures, architectural floor plans, master plans, and luxury specification catalogues ready for instant download.",
    category: "Insights / Brochures"
  },
  {
    relPath: 'insights/market-data',
    title: "Live Dubai Real Estate Market Data Dashboard | ZARIN",
    description: "Real-time market analytics tracking Dubai Land Department transaction volumes, average prices per square foot, and rental yields by area.",
    badge: "Live Daily Index",
    headline: "Daily Market Intelligence Dashboard",
    lead: "Direct DLD transaction feeds, historical price trend charts, service charge indices, and district-by-district rental yield benchmarks.",
    category: "Insights / Market Data"
  },

  // Calculators
  {
    relPath: 'insights/calculators/mortgage',
    title: "Dubai Mortgage Calculator | ZARIN",
    description: "Calculate monthly mortgage payments, down payment requirements, loan-to-value (LTV) limits, and interest rates for UAE and non-resident buyers.",
    badge: "Interactive Tool",
    headline: "Dubai Mortgage Calculator",
    lead: "Model monthly repayments, EIBOR interest rates, bank arrangement fees, and life insurance costs tailored for resident and foreign buyers.",
    category: "Insights / Calculators"
  },
  {
    relPath: 'insights/calculators/roi',
    title: "Dubai Property ROI & Rental Yield Calculator | ZARIN",
    description: "Determine gross and net rental yields, cash-on-cash return, service charge deductions, and 5-year capital appreciation forecasts in Dubai.",
    badge: "Interactive Tool",
    headline: "Dubai ROI & Rental Yield Calculator",
    lead: "Calculate true net rental yields by accounting for DLD transfer fees, Mollak service charges, agency management, and void periods.",
    category: "Insights / Calculators"
  },
  {
    relPath: 'insights/calculators/payment-plan',
    title: "Dubai Off-Plan Payment Plan Calculator | ZARIN",
    description: "Plan your construction-linked milestone payments and post-handover payment installments across leading Dubai developers.",
    badge: "Interactive Tool",
    headline: "Off-Plan Payment Plan Calculator",
    lead: "Visualize cash outflow schedules across 60/40, 70/30, and 80/20 payment structures with handover completion forecasts.",
    category: "Insights / Calculators"
  },
  {
    relPath: 'insights/calculators/service-charges',
    title: "Dubai Service Charges Calculator | ZARIN",
    description: "Estimate annual building maintenance and community management costs based on official DLD Mollak indices across Dubai neighborhoods.",
    badge: "Interactive Tool",
    headline: "Service Charges Calculator",
    lead: "Accurately forecast annual service fee liabilities per square foot for apartments, penthouses, and branded residences in Dubai.",
    category: "Insights / Calculators"
  },
  {
    relPath: 'insights/calculators/currency-converter',
    title: "Dubai Property Multi-Currency Converter | ZARIN",
    description: "Convert AED property prices into USD, EUR, GBP, CHF, CAD, INR, CNY, and cryptocurrency with live institutional exchange rates.",
    badge: "Interactive Tool",
    headline: "Multi-Currency Property Converter",
    lead: "Evaluate Dubai real estate values in your local home currency with live FX conversions and international bank wire fee estimates.",
    category: "Insights / Calculators"
  },
  {
    relPath: 'insights/calculators/visa-eligibility',
    title: "Dubai Golden Visa & Property Visa Eligibility Checker | ZARIN",
    description: "Instant check for 10-year Golden Visa, 2-year Investor Visa, and 5-year Retirement Visa based on your real estate investment value.",
    badge: "Interactive Tool",
    headline: "Visa Eligibility Checker",
    lead: "Verify your qualification for long-term UAE residency based on property equity, title deed valuation, and family sponsorship criteria.",
    category: "Insights / Calculators"
  },
  {
    relPath: 'insights/calculators/ai-property-match',
    title: "AI Property Match Tool | ZARIN",
    description: "Smart match algorithm connecting your budget, lifestyle preferences, and expected yield with ideal Dubai properties in seconds.",
    badge: "Interactive Tool",
    headline: "AI Property Match Engine",
    lead: "Answer four brief investment questions to receive a tailored portfolio of recommended ready and off-plan properties in prime Dubai.",
    category: "Insights / Calculators"
  }
];

function generateHtml(page) {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/${page.relPath}">

  <meta property="og:type" content="website">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="https://zarinrealestate.com/${page.relPath}">
  <meta property="og:site_name" content="ZARIN Real Estate">

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles/main.css">

  <style>
    html{scroll-behavior:smooth}body{font-family:"Source Sans 3","Vazirmatn",-apple-system,sans-serif;background:#0A0B0E;color:#F8F9FA;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}
    ::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#0A0B0E}::-webkit-scrollbar-thumb{background:#C8AB83;border-radius:4px}
    ::selection{background:rgba(200,171,131,0.3);color:#F8F9FA}
    .glass{background:rgba(10,11,14,0.78);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
    .text-gold-gradient{background:linear-gradient(135deg,#DFC49E 0%,#C8AB83 50%,#A88D66 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
    .mega-menu-trigger{position:relative}
    .mega-menu-panel{opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .3s cubic-bezier(.16,1,.3,1),transform .3s cubic-bezier(.16,1,.3,1),visibility .3s;z-index:950}
    .mega-menu-panel::before{content:'';position:absolute;top:-12px;left:0;right:0;height:12px}
    .mega-menu-trigger:hover .mega-menu-panel,.mega-menu-trigger:focus-within .mega-menu-panel{opacity:1;visibility:visible;transform:translateY(0)}
    .mobile-menu{transform:translateX(100%);transition:transform .4s cubic-bezier(.16,1,.3,1)}.mobile-menu.open{transform:translateX(0)}
    .sticky-whatsapp{display:none}@media(max-width:1024px){.sticky-whatsapp{display:flex}}
  </style>

  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://zarinrealestate.com/"},
    {"@type":"ListItem","position":2,"name":"Insights","item":"https://zarinrealestate.com/insights"},
    {"@type":"ListItem","position":3,"name":"${page.headline}","item":"https://zarinrealestate.com/${page.relPath}"}
  ]}
  </script>
</head>

<body class="bg-ink-900 text-bone antialiased min-h-screen flex flex-col justify-between">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">Skip to main content</a>

  <!-- HEADER -->
  <header id="site-header" class="fixed top-0 left-0 w-full z-[900] transition-all duration-500" role="banner" style="padding:1.25rem 0;border-bottom:1px solid transparent;">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex items-center justify-between gap-4">
        <a href="/" class="flex items-center gap-2 group flex-shrink-0" aria-label="ZARIN Real Estate — Home"><span class="font-sans font-extrabold text-2xl tracking-tight text-bone group-hover:text-gold-400 transition-colors duration-300">ZARIN</span><span class="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold border-l border-gold-line pl-2">Real Estate</span></a>
        <nav class="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
          <div class="mega-menu-trigger"><a href="/properties-for-sale" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Properties<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <a href="/properties-for-sale" class="text-sm text-bone hover:text-gold-400 transition-colors">All Properties</a>
              <a href="/trophy-residences" class="text-sm text-ash hover:text-gold-400 transition-colors">Trophy Residences</a>
              <a href="/branded-residences-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Branded Residences</a>
              <a href="/commercial-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Commercial</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/off-plan" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Off-Plan<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <a href="/off-plan" class="text-sm text-bone hover:text-gold-400 transition-colors">All Off-Plan</a>
              <a href="/off-plan/new-launches" class="text-sm text-ash hover:text-gold-400 transition-colors">New Launches</a>
              <a href="/off-plan/by-developer" class="text-sm text-ash hover:text-gold-400 transition-colors">By Developer</a>
              <a href="/off-plan/investment-guide" class="text-sm text-ash hover:text-gold-400 transition-colors">Investment Guide</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/areas" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Areas<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <a href="/areas/palm-jumeirah" class="text-sm text-bone hover:text-gold-400 transition-colors">Palm Jumeirah</a>
              <a href="/areas/downtown-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Downtown Dubai</a>
              <a href="/areas" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">All Areas →</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/private-office" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Private Office<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-gold-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <a href="/private-office" class="text-sm text-bone hover:text-gold-400 transition-colors font-semibold">Overview</a>
              <a href="/private-office/off-market" class="text-sm text-ash hover:text-gold-400 transition-colors">Off-Market Listings</a>
              <a href="/private-office/crypto-payments" class="text-sm text-ash hover:text-gold-400 transition-colors">Crypto Payments</a>
              <a href="/private-office/concierge" class="text-sm text-ash hover:text-gold-400 transition-colors">Concierge</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/services" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Services<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <a href="/services/buying" class="text-sm text-bone hover:text-gold-400 transition-colors">Buying Advisory</a>
              <a href="/services/mortgage" class="text-sm text-ash hover:text-gold-400 transition-colors">Mortgage</a>
              <a href="/services/legal" class="text-sm text-ash hover:text-gold-400 transition-colors">Legal</a>
              <a href="/services/valuation" class="text-sm text-ash hover:text-gold-400 transition-colors">Valuation</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/visas" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Visas<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <a href="/visas/golden-visa" class="text-sm text-bone hover:text-gold-400 transition-colors">Golden Visa</a>
              <a href="/visas/eligibility-checker" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">Check Eligibility →</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/insights" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Insights<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Content Hub</div>
              <a href="/insights/blog" class="text-sm text-bone hover:text-gold-400 transition-colors">Blog Articles</a>
              <a href="/insights/market-reports" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Reports</a>
              <a href="/insights/podcast" class="text-sm text-ash hover:text-gold-400 transition-colors">Podcast</a>
              <a href="/insights/guides" class="text-sm text-ash hover:text-gold-400 transition-colors">Buyer's Guides</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">Tools & Reference</div>
              <a href="/insights/calculators" class="text-sm text-ash hover:text-gold-400 transition-colors">All Calculators</a>
              <a href="/insights/faq" class="text-sm text-ash hover:text-gold-400 transition-colors">FAQ Hub</a>
              <a href="/insights/glossary" class="text-sm text-ash hover:text-gold-400 transition-colors">Glossary</a>
              <a href="/insights/market-data" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Data</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/heritage" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Heritage<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <a href="/heritage" class="text-sm text-bone hover:text-gold-400 transition-colors">Our Story</a>
              <a href="/heritage/team" class="text-sm text-ash hover:text-gold-400 transition-colors">Team</a>
              <a href="/heritage/testimonials" class="text-sm text-ash hover:text-gold-400 transition-colors">Testimonials</a>
              <a href="/heritage/awards" class="text-sm text-ash hover:text-gold-400 transition-colors">Awards</a>
            </div>
          </div>
        </nav>
        <div class="flex items-center gap-3">
          <a href="tel:+971586901231" class="hidden md:flex items-center gap-2 text-xs font-semibold text-ash hover:text-gold-400 transition-colors" aria-label="Call +971 58 690 1231"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg><span>+971 58 690 1231</span></a>
          <a href="/consultation" class="hidden md:inline-flex items-center px-5 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-[0.08em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold">Book Consultation</a>
          <button id="mobile-menu-toggle" class="lg:hidden text-bone hover:text-gold-400 transition-colors p-2" aria-label="Open menu"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="mobile-menu fixed top-0 right-0 w-full max-w-sm h-full bg-ink-900 border-l border-white-line z-[1000] overflow-y-auto lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <div class="p-6">
      <div class="flex justify-between items-center mb-8"><span class="font-sans font-extrabold text-xl text-bone">ZARIN</span><button id="mobile-menu-close" class="text-ash hover:text-gold-400 transition-colors" aria-label="Close menu"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg></button></div>
      <nav class="flex flex-col gap-1">
        <a href="/properties-for-sale" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Properties</a>
        <a href="/off-plan" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Off-Plan</a>
        <a href="/areas" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Areas</a>
        <a href="/private-office" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Private Office</a>
        <a href="/services" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Services</a>
        <a href="/visas" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Visas</a>
        <a href="/insights" class="py-3 px-4 text-sm font-semibold text-gold-400 hover:bg-white-soft rounded-xs transition-all">Insights</a>
        <a href="/heritage" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Heritage</a>
        <div class="h-px bg-white-line my-4"></div>
        <a href="/consultation" class="py-3 px-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-wide text-center rounded-xs hover:bg-gold-300 transition-all">Book Consultation</a>
        <a href="https://wa.me/971586901231" class="py-3 px-4 text-sm text-gold-400 text-center">WhatsApp</a>
      </nav>
    </div>
  </div>

  <!-- Breadcrumb -->
  <div class="pt-24 bg-ink-900 border-b border-white-line">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-4">
      <nav aria-label="Breadcrumb" class="text-xs">
        <ol class="flex items-center gap-2 text-slate">
          <li><a href="/" class="hover:text-gold-400 transition-colors">Home</a></li>
          <li aria-hidden="true">/</li>
          <li><a href="/insights" class="hover:text-gold-400 transition-colors">Insights</a></li>
          <li aria-hidden="true">/</li>
          <li class="text-bone font-semibold truncate max-w-xs md:max-w-md" aria-current="page">${page.headline}</li>
        </ol>
      </nav>
    </div>
  </div>

  <!-- MAIN ARTICLE / HUB CONTENT -->
  <main id="main" class="flex-grow py-20 md:py-28 px-6 bg-ink-950">
    <div class="max-w-4xl mx-auto">
      <div class="inline-flex items-center gap-2 mb-6">
        <span class="w-8 h-px bg-gold-400"></span>
        <span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">${page.badge}</span>
      </div>
      <h1 class="font-sans font-extrabold text-4xl md:text-6xl text-bone mb-6 tracking-tight leading-tight">${page.headline}</h1>
      <p class="text-ash text-lg md:text-xl font-light leading-relaxed mb-10 pb-8 border-b border-white-line">${page.lead}</p>

      <div class="bg-ink-900 border border-gold-line rounded-sm p-8 md:p-12 mb-12 bg-gold-soft">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-8 rounded-xs border border-gold-line flex items-center justify-center text-gold-400">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <span class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Executive Advisory Intelligence</span>
        </div>
        <p class="text-sm md:text-base text-bone/90 leading-relaxed mb-6">${page.description}</p>
        <div class="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white-line">
          <a href="/consultation" class="inline-flex items-center justify-center px-6 py-3.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-gold-300 transition-all shadow-gold">Request Bespoke Advisory</a>
          <a href="/insights" class="inline-flex items-center justify-center px-6 py-3.5 border border-gold-line text-bone text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-gold-soft transition-all">Back to Intelligence Hub →</a>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 pt-6 border-t border-white-line text-left">
        <div class="bg-ink-900 border border-white-line rounded-sm p-6">
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Verified Data</div>
          <p class="text-xs text-ash leading-relaxed">Cross-referenced with Dubai Land Department (DLD) and official RERA escrow ledgers.</p>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-6">
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Private Office Advisory</div>
          <p class="text-xs text-ash leading-relaxed">Confidential advisory across ultra-prime acquisitions exceeding AED 10M+.</p>
        </div>
        <div class="bg-ink-900 border border-white-line rounded-sm p-6">
          <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Multi-Currency & Tax</div>
          <p class="text-xs text-ash leading-relaxed">Guidance on foreign remittance, banking compliance, and international tax structuring.</p>
        </div>
      </div>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="bg-ink-950 border-t border-white-line pt-20 pb-8" role="contentinfo">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div class="col-span-2 lg:col-span-1">
          <a href="/" class="flex items-center gap-2 mb-4" aria-label="ZARIN Real Estate home"><span class="font-sans font-extrabold text-2xl tracking-tight text-bone">ZARIN</span></a>
          <p class="text-sm text-slate leading-relaxed mb-6">Dubai real estate intelligence and market data.</p>
        </div>
        <nav aria-label="Insights footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Insights</h2><ul class="space-y-2"><li><a href="/insights/blog" class="text-sm text-ash hover:text-gold-400 transition-colors">Blog</a></li><li><a href="/insights/market-reports" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Reports</a></li><li><a href="/insights/podcast" class="text-sm text-ash hover:text-gold-400 transition-colors">Podcast</a></li><li><a href="/insights/calculators" class="text-sm text-ash hover:text-gold-400 transition-colors">Calculators</a></li></ul></nav>
        <nav aria-label="Discover footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Discover</h2><ul class="space-y-2"><li><a href="/properties-for-sale" class="text-sm text-ash hover:text-gold-400 transition-colors">Properties</a></li><li><a href="/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">Off-Plan</a></li><li><a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Areas</a></li><li><a href="/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">Visas</a></li></ul></nav>
        <nav aria-label="Services footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Services</h2><ul class="space-y-2"><li><a href="/services/buying" class="text-sm text-ash hover:text-gold-400 transition-colors">Buying Advisory</a></li><li><a href="/services/mortgage" class="text-sm text-ash hover:text-gold-400 transition-colors">Mortgage</a></li><li><a href="/services/legal" class="text-sm text-ash hover:text-gold-400 transition-colors">Legal</a></li><li><a href="/services/valuation" class="text-sm text-ash hover:text-gold-400 transition-colors">Valuation</a></li></ul></nav>
        <nav aria-label="Heritage footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Heritage</h2><ul class="space-y-2"><li><a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Our Story</a></li><li><a href="/heritage/team" class="text-sm text-ash hover:text-gold-400 transition-colors">Team</a></li><li><a href="/heritage/testimonials" class="text-sm text-ash hover:text-gold-400 transition-colors">Testimonials</a></li><li><a href="/heritage/awards" class="text-sm text-ash hover:text-gold-400 transition-colors">Awards</a></li></ul></nav>
      </div>
      <div class="pt-8 border-t border-white-line flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap items-center gap-4 text-xs text-slate"><span>&copy; 2026 ZARIN Real Estate. All rights reserved.</span><span class="hidden md:inline w-1 h-1 bg-slate rounded-full" aria-hidden="true"></span><span>RERA Licensed</span></div>
        <nav aria-label="Legal links" class="flex flex-wrap items-center gap-4 text-xs"><a href="/legal/privacy" class="text-slate hover:text-gold-400 transition-colors">Privacy</a><a href="/legal/terms" class="text-slate hover:text-gold-400 transition-colors">Terms</a><a href="/legal/cookies" class="text-slate hover:text-gold-400 transition-colors">Cookies</a><a href="/sitemap" class="text-slate hover:text-gold-400 transition-colors">Sitemap</a></nav>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 right-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="WhatsApp us"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script defer>
    const header=document.getElementById('site-header');let ticking=false;
    window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(()=>{if(window.scrollY>60){header.style.backgroundColor='rgba(10,11,14,0.85)';header.style.backdropFilter='blur(20px)';header.style.borderBottomColor='rgba(200,171,131,0.15)';header.style.padding='0.85rem 0';}else{header.style.backgroundColor='transparent';header.style.backdropFilter='none';header.style.borderBottomColor='transparent';header.style.padding='1.25rem 0';}ticking=false;});ticking=true;}});
    const mt=document.getElementById('mobile-menu-toggle'),mc=document.getElementById('mobile-menu-close'),mm=document.getElementById('mobile-menu');
    mt?.addEventListener('click',()=>{mm.classList.add('open');mt.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';});
    mc?.addEventListener('click',()=>{mm.classList.remove('open');mt.setAttribute('aria-expanded','false');document.body.style.overflow='';});
    mm?.querySelectorAll('a').forEach(l=>{l.addEventListener('click',()=>{mm.classList.remove('open');mt.setAttribute('aria-expanded','false');document.body.style.overflow='';});});
  </script>
</body>
</html>`;
}

for (const page of pages) {
  const content = generateHtml(page);
  
  // 1. Write <slug>.html
  const filePath1 = path.join(projectRoot, `${page.relPath}.html`);
  const dir1 = path.dirname(filePath1);
  if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
  fs.writeFileSync(filePath1, content, 'utf-8');

  // 2. Write <slug>/index.html
  const filePath2 = path.join(projectRoot, page.relPath, 'index.html');
  const dir2 = path.dirname(filePath2);
  if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });
  fs.writeFileSync(filePath2, content, 'utf-8');

  console.log(`Generated: ${page.relPath}.html and ${page.relPath}/index.html`);
}

console.log('Successfully generated all insights subpages!');
