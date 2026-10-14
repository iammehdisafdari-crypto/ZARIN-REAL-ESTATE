import fs from 'fs';
import path from 'path';

const missingRoutes = [
  { route: '/areas/downtown-dubai', title: 'Downtown Dubai Guide', desc: 'Prime residences surrounding the Burj Khalifa and Dubai Mall.' },
  { route: '/areas/dubai-hills-estate', title: 'Dubai Hills Estate Guide', desc: 'Master-planned golf community with luxury villas and green spaces.' },
  { route: '/areas/palm-jumeirah', title: 'Palm Jumeirah Guide', desc: 'World-renowned beachfront villas, penthouses, and private estates.' },
  { route: '/branded-residences-in-dubai', title: 'Branded Residences Dubai', desc: 'Iconic partnerships with the world\'s leading hospitality and fashion brands.' },
  { route: '/commercial-properties-in-dubai', title: 'Commercial Real Estate Dubai', desc: 'Grade-A office suites, retail flagships, and prime hospitality assets.' },
  { route: '/consultation', title: 'Book a Private Consultation', desc: 'Confidential advisory with ZARIN senior partners.' },
  { route: '/heritage', title: 'Heritage & Legacy', desc: 'The history, values, and vision of ZARIN Real Estate.' },
  { route: '/heritage/awards', title: 'Industry Awards & Recognition', desc: 'Honors and accolades received for real estate advisory excellence.' },
  { route: '/heritage/team', title: 'Leadership & Private Office Team', desc: 'Meet our senior property advisors and acquisitions specialists.' },
  { route: '/heritage/testimonials', title: 'Client Testimonials', desc: 'Confidential endorsements from private office clients and institutional partners.' },
  { route: '/insights', title: 'Market Insights & Research', desc: 'Macroeconomic analysis and intelligence for the Dubai prime property sector.' },
  { route: '/insights/blog', title: 'Market Journal & Articles', desc: 'Editorial commentary on ultra-luxury property trends and global wealth flows.' },
  { route: '/insights/calculators', title: 'Financial & ROI Calculators', desc: 'Interactive valuation, rental yield, and mortgage computation tools.' },
  { route: '/insights/faq', title: 'Frequently Asked Questions', desc: 'Essential answers for buyers, investors, and international clients.' },
  { route: '/insights/market-reports', title: 'Quarterly Market Reports', desc: 'Data-driven transaction indices and capital growth forecasts.' },
  { route: '/legal/cookies', title: 'Cookie Policy', desc: 'Information on cookie technologies utilized across ZARIN digital services.' },
  { route: '/legal/privacy', title: 'Privacy Policy', desc: 'Our rigorous commitment to client confidentiality and data protection.' },
  { route: '/legal/terms', title: 'Terms of Service', desc: 'Terms and regulatory parameters governing use of ZARIN services.' },
  { route: '/off-plan/by-developer', title: 'Off-Plan by Developer', desc: 'Curated projects by Emaar, Meraas, Omniyat, Sobha, and Nakheel.' },
  { route: '/off-plan/investment-guide', title: 'Off-Plan Investment Guide', desc: 'Payment plans, construction milestone schedules, and escrow safety.' },
  { route: '/off-plan/new-launches', title: 'New Off-Plan Launches', desc: 'First-access allocations for recently announced Dubai developments.' },
  { route: '/private-office/concierge', title: 'Lifestyle Concierge', desc: 'Aviation, yacht charters, schooling, and private family management.' },
  { route: '/private-office/cross-border-tax', title: 'Cross-Border Tax Advisory', desc: 'Treaty optimization, residency planning, and corporate ownership holding structures.' },
  { route: '/private-office/crypto-payments', title: 'Cryptocurrency Transactions', desc: 'Regulated virtual asset settlement for luxury Dubai real estate.' },
  { route: '/private-office/multi-currency', title: 'Multi-Currency Settlement', desc: 'Real-time conversion across 8 major fiat currencies with zero exchange friction.' },
  { route: '/private-office/off-market', title: 'Off-Market Property Portfolio', desc: 'Discreet acquisition access to private residences exceeding AED 25M.' },
  { route: '/private-office/yacht-aviation', title: 'Yacht & Aviation Partnerships', desc: 'Integrated luxury maritime and private jet mobility partnerships.' },
  { route: '/services', title: 'Advisory Services', desc: 'End-to-end real estate representation for acquisition, valuation, and conveyancing.' },
  { route: '/services/buying', title: 'Acquisition & Buying Advisory', desc: 'Fiduciary representation throughout property selection, negotiation, and title deed transfer.' },
  { route: '/services/legal', title: 'Legal & Conveyancing Services', desc: 'Dubai Land Department registration, contracts, and dispute avoidance.' },
  { route: '/services/mortgage', title: 'Prime Mortgage Advisory', desc: 'Bespoke financing solutions with leading UAE and international private banks.' },
  { route: '/services/valuation', title: 'Property Valuation & Appraisal', desc: 'RICS-standard valuation and investment asset condition audits.' },
  { route: '/sitemap', title: 'Site Directory', desc: 'Complete navigational architecture of ZARIN Real Estate portals.' },
  { route: '/trophy-residences', title: 'Trophy Residences', desc: 'One-of-a-kind architectural landmarks and ultra-prime Dubai estates.' },
  { route: '/visas', title: 'UAE Residency & Golden Visas', desc: '10-year investor visa facilitation through qualifying property acquisitions.' },
  { route: '/visas/eligibility-checker', title: 'Golden Visa Eligibility Checker', desc: 'Interactive assessment tool for UAE real estate investor residency.' },
  { route: '/visas/golden-visa', title: 'UAE 10-Year Golden Visa Guide', desc: 'Criteria, application procedures, and family sponsorship benefits.' }
];

const template = (title, desc, currentRoute) => `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">
  <title>${title} | ZARIN</title>
  <meta name="description" content="${desc}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://zarinrealestate.com${currentRoute}">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0B0E'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23C8AB83' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700;800;900&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
  <style type="text/tailwindcss">
    @theme {
      --color-ink-950:#050507;--color-ink-900:#0A0B0E;--color-ink-850:#0E1015;--color-ink-800:#111318;--color-ink-700:#181B22;--color-ink-600:#20242D;--color-ink-500:#2A2E37;--color-ink-400:#3A3F4A;--color-ink-300:#4A5160;
      --color-gold-100:#F5E9D4;--color-gold-200:#E8D4B0;--color-gold-300:#DFC49E;--color-gold-400:#C8AB83;--color-gold-500:#B89868;--color-gold-600:#A88D66;--color-gold-700:#8B7048;--color-gold-800:#6B5638;
      --color-gold-soft:rgba(200,171,131,0.08);--color-gold-tint:rgba(200,171,131,0.15);--color-gold-line:rgba(200,171,131,0.32);--color-gold-border:rgba(200,171,131,0.45);--color-gold-glow:rgba(200,171,131,0.20);
      --color-bone:#F8F9FA;--color-pearl:#E8EAED;--color-ash:#9FA6B2;--color-slate:#676E7D;--color-graphite:#4A5160;
      --color-white-soft:rgba(255,255,255,0.04);--color-white-line:rgba(255,255,255,0.08);--color-white-tint:rgba(255,255,255,0.12);
      --color-glass:rgba(10,11,14,0.78);--color-glass-light:rgba(10,11,14,0.92);
      --color-success:#4ADE80;--color-warning:#FBBF24;--color-info:#60A5FA;--color-danger:#F87171;
      --font-sans:"Source Sans 3","Vazirmatn",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      --shadow-subtle:0 4px 20px rgba(0,0,0,0.35);--shadow-monolith:0 24px 60px rgba(0,0,0,0.65);--shadow-gold:0 10px 30px rgba(200,171,131,0.12);
    }
  </style>
  <style>
    html{scroll-behavior:smooth}body{font-family:"Source Sans 3","Vazirmatn",-apple-system,sans-serif;background:#0A0B0E;color:#F8F9FA;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}
    .glass{background:rgba(10,11,14,0.78);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
    .mega-menu-trigger{position:relative}
    .mega-menu-panel{opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .3s cubic-bezier(.16,1,.3,1),transform .3s cubic-bezier(.16,1,.3,1),visibility .3s;z-index:950}
    .mega-menu-panel::before{content:'';position:absolute;top:-12px;left:0;right:0;height:12px}
    .mega-menu-trigger:hover .mega-menu-panel,.mega-menu-trigger:focus-within .mega-menu-panel{opacity:1;visibility:visible;transform:translateY(0)}
    .mobile-menu{transform:translateX(100%);transition:transform .4s cubic-bezier(.16,1,.3,1)}.mobile-menu.open{transform:translateX(0)}
    .sticky-whatsapp{display:none}@media(max-width:1024px){.sticky-whatsapp{display:flex}}
  </style>
</head>
<body class="bg-ink-900 text-bone antialiased min-h-screen flex flex-col justify-between">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">Skip to main content</a>

  <!-- HEADER -->
  <header id="site-header" class="fixed top-0 left-0 w-full z-[900] transition-all duration-500" role="banner" style="padding:1.25rem 0;border-bottom:1px solid transparent;">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex items-center justify-between gap-4">
        <a href="/" class="flex items-center gap-2 group flex-shrink-0" aria-label="ZARIN Real Estate — Home">
          <span class="font-sans font-extrabold text-2xl tracking-tight text-bone group-hover:text-gold-400 transition-colors duration-300">ZARIN</span>
          <span class="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold border-l border-gold-line pl-2">Real Estate</span>
        </a>
        <nav class="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
          <div class="mega-menu-trigger"><a href="/properties-for-sale" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Properties<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">For Sale</div>
              <a href="/properties-for-sale" class="text-sm text-bone hover:text-gold-400 transition-colors">All Properties</a>
              <a href="/trophy-residences" class="text-sm text-ash hover:text-gold-400 transition-colors">Trophy Residences</a>
              <a href="/branded-residences-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Branded Residences</a>
              <a href="/commercial-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Commercial</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/off-plan" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Off-Plan<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Discover</div>
              <a href="/off-plan" class="text-sm text-bone hover:text-gold-400 transition-colors">All Off-Plan</a>
              <a href="/off-plan/new-launches" class="text-sm text-ash hover:text-gold-400 transition-colors">New Launches</a>
              <a href="/off-plan/by-developer" class="text-sm text-ash hover:text-gold-400 transition-colors">By Developer</a>
              <a href="/off-plan/investment-guide" class="text-sm text-ash hover:text-gold-400 transition-colors">Investment Guide</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/areas" class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Areas<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Featured Areas</div>
              <a href="/areas/palm-jumeirah" class="text-sm text-bone hover:text-gold-400 transition-colors">Palm Jumeirah</a>
              <a href="/areas/downtown-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Downtown Dubai</a>
              <a href="/areas/dubai-hills-estate" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai Hills</a>
              <a href="/areas" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">All Areas →</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/private-office" class="px-3 py-2 text-[13px] font-semibold tracking-wide ${currentRoute.startsWith('/private-office') ? 'text-gold-400' : 'text-ash'} hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Private Office<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-gold-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">The Private Office</div>
              <a href="/private-office" class="text-sm text-bone hover:text-gold-400 transition-colors font-semibold">Overview</a>
              <a href="/private-office/off-market" class="text-sm text-ash hover:text-gold-400 transition-colors">Off-Market Listings</a>
              <a href="/private-office/multi-currency" class="text-sm text-ash hover:text-gold-400 transition-colors">Multi-Currency</a>
              <a href="/private-office/crypto-payments" class="text-sm text-ash hover:text-gold-400 transition-colors">Crypto Payments</a>
              <a href="/private-office/concierge" class="text-sm text-ash hover:text-gold-400 transition-colors">Concierge</a>
              <a href="/private-office/cross-border-tax" class="text-sm text-ash hover:text-gold-400 transition-colors">Cross-Border Tax</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/services" class="px-3 py-2 text-[13px] font-semibold tracking-wide ${currentRoute.startsWith('/services') ? 'text-gold-400' : 'text-ash'} hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Services<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Buying & Selling</div>
              <a href="/services/buying" class="text-sm text-bone hover:text-gold-400 transition-colors">Buying Advisory</a>
              <a href="/services/mortgage" class="text-sm text-ash hover:text-gold-400 transition-colors">Mortgage</a>
              <a href="/services/valuation" class="text-sm text-ash hover:text-gold-400 transition-colors">Valuation</a>
              <a href="/services/legal" class="text-sm text-ash hover:text-gold-400 transition-colors">Legal</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/visas" class="px-3 py-2 text-[13px] font-semibold tracking-wide ${currentRoute.startsWith('/visas') ? 'text-gold-400' : 'text-ash'} hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Visas<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Visa Types</div>
              <a href="/visas/golden-visa" class="text-sm text-bone hover:text-gold-400 transition-colors">Golden Visa</a>
              <a href="/visas/eligibility-checker" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">Check Eligibility →</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/insights" class="px-3 py-2 text-[13px] font-semibold tracking-wide ${currentRoute.startsWith('/insights') ? 'text-gold-400' : 'text-ash'} hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Insights<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <a href="/insights/blog" class="text-sm text-bone hover:text-gold-400 transition-colors">Blog</a>
              <a href="/insights/market-reports" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Reports</a>
              <a href="/insights/calculators" class="text-sm text-ash hover:text-gold-400 transition-colors">Calculators</a>
              <a href="/insights/faq" class="text-sm text-ash hover:text-gold-400 transition-colors">FAQ</a>
            </div>
          </div>
          <div class="mega-menu-trigger"><a href="/heritage" class="px-3 py-2 text-[13px] font-semibold tracking-wide ${currentRoute.startsWith('/heritage') ? 'text-gold-400' : 'text-ash'} hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true">Heritage<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></a>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <a href="/heritage" class="text-sm text-bone hover:text-gold-400 transition-colors">Our Story</a>
              <a href="/heritage/team" class="text-sm text-ash hover:text-gold-400 transition-colors">Team</a>
              <a href="/heritage/testimonials" class="text-sm text-ash hover:text-gold-400 transition-colors">Testimonials</a>
              <a href="/heritage/awards" class="text-sm text-ash hover:text-gold-400 transition-colors">Awards</a>
            </div>
          </div>
        </nav>
        <div class="flex items-center gap-3">
          <a href="tel:+971586901231" class="hidden md:flex items-center gap-2 text-xs font-semibold text-ash hover:text-gold-400 transition-colors" aria-label="Call +971 58 690 1231"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg><span>+971 58 690 1231</span></a>
          <a href="/consultation" class="hidden md:inline-flex items-center px-5 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-[0.08em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Book consultation">Book Consultation</a>
          <button id="mobile-menu-toggle" class="lg:hidden text-bone hover:text-gold-400 transition-colors p-2" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="mobile-menu fixed top-0 right-0 w-full max-w-sm h-full bg-ink-900 border-l border-white-line z-[1000] overflow-y-auto lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <div class="p-6">
      <div class="flex justify-between items-center mb-8"><span class="font-sans font-extrabold text-xl text-bone">ZARIN</span><button id="mobile-menu-close" class="text-ash hover:text-gold-400 transition-colors" aria-label="Close menu"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg></button></div>
      <nav class="flex flex-col gap-1" aria-label="Mobile primary navigation">
        <a href="/properties-for-sale" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Properties</a>
        <a href="/off-plan" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Off-Plan</a>
        <a href="/areas" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Areas</a>
        <a href="/private-office" class="py-3 px-4 text-sm font-semibold text-gold-400 hover:bg-white-soft rounded-xs transition-all">Private Office</a>
        <a href="/services" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Services</a>
        <a href="/visas" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Visas</a>
        <a href="/insights" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Insights</a>
        <a href="/heritage" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Heritage</a>
        <div class="h-px bg-white-line my-4"></div>
        <a href="/consultation" class="py-3 px-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-wide text-center rounded-xs hover:bg-gold-300 transition-all">Book Consultation</a>
        <a href="https://wa.me/971586901231" class="py-3 px-4 text-sm text-gold-400 text-center">WhatsApp</a>
      </nav>
    </div>
  </div>

  <div class="pt-24 bg-ink-900 border-b border-white-line">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-4">
      <nav aria-label="Breadcrumb" class="text-xs"><ol class="flex items-center gap-2 text-slate"><li><a href="/" class="hover:text-gold-400 transition-colors">Home</a></li><li aria-hidden="true">/</li><li class="text-bone font-semibold" aria-current="page">${title}</li></ol></nav>
    </div>
  </div>

  <main id="main" class="flex-grow flex items-center justify-center py-24 md:py-36 px-6 bg-ink-950">
    <div class="max-w-3xl text-center">
      <div class="inline-flex items-center gap-2 mb-6"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">ZARIN Advisory</span><span class="w-8 h-px bg-gold-400"></span></div>
      <h1 class="font-sans font-extrabold text-4xl md:text-6xl text-bone mb-6 tracking-tight">${title}</h1>
      <p class="text-ash text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">${desc}</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/consultation" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all shadow-gold">Book Consultation</a>
        <a href="/private-office" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-gold-line text-bone text-xs font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft transition-all">Private Office</a>
      </div>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="bg-ink-950 border-t border-white-line pt-20 pb-8" role="contentinfo">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div class="col-span-2 lg:col-span-1">
          <a href="/" class="flex items-center gap-2 mb-4" aria-label="ZARIN Real Estate home"><span class="font-sans font-extrabold text-2xl tracking-tight text-bone">ZARIN</span></a>
          <p class="text-sm text-slate leading-relaxed mb-6">Private Office for premium Dubai real estate acquisitions.</p>
        </div>
        <nav aria-label="Private Office footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Private Office</h2><ul class="space-y-2"><li><a href="/private-office/off-market" class="text-sm text-ash hover:text-gold-400 transition-colors">Off-Market Listings</a></li><li><a href="/private-office/multi-currency" class="text-sm text-ash hover:text-gold-400 transition-colors">Multi-Currency</a></li><li><a href="/private-office/crypto-payments" class="text-sm text-ash hover:text-gold-400 transition-colors">Crypto Payments</a></li><li><a href="/private-office/concierge" class="text-sm text-ash hover:text-gold-400 transition-colors">Concierge</a></li></ul></nav>
        <nav aria-label="Discover footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Discover</h2><ul class="space-y-2"><li><a href="/properties-for-sale" class="text-sm text-ash hover:text-gold-400 transition-colors">Properties</a></li><li><a href="/off-plan" class="text-sm text-ash hover:text-gold-400 transition-colors">Off-Plan</a></li><li><a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Areas</a></li><li><a href="/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">Visas</a></li></ul></nav>
        <nav aria-label="Services footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Services</h2><ul class="space-y-2"><li><a href="/services/buying" class="text-sm text-ash hover:text-gold-400 transition-colors">Buying Advisory</a></li><li><a href="/services/mortgage" class="text-sm text-ash hover:text-gold-400 transition-colors">Mortgage</a></li><li><a href="/services/valuation" class="text-sm text-ash hover:text-gold-400 transition-colors">Valuation</a></li><li><a href="/services/legal" class="text-sm text-ash hover:text-gold-400 transition-colors">Legal</a></li></ul></nav>
        <nav aria-label="Insights footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Insights</h2><ul class="space-y-2"><li><a href="/insights/blog" class="text-sm text-ash hover:text-gold-400 transition-colors">Blog</a></li><li><a href="/insights/market-reports" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Reports</a></li><li><a href="/insights/calculators" class="text-sm text-ash hover:text-gold-400 transition-colors">Calculators</a></li><li><a href="/insights/faq" class="text-sm text-ash hover:text-gold-400 transition-colors">FAQ</a></li></ul></nav>
      </div>
      <div class="pt-8 border-t border-white-line flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap items-center gap-4 text-xs text-slate"><span>&copy; 2026 ZARIN Real Estate. All rights reserved.</span></div>
        <nav aria-label="Legal links" class="flex flex-wrap items-center gap-4 text-xs"><a href="/legal/privacy" class="text-slate hover:text-gold-400 transition-colors">Privacy</a><a href="/legal/terms" class="text-slate hover:text-gold-400 transition-colors">Terms</a><a href="/legal/cookies" class="text-slate hover:text-gold-400 transition-colors">Cookies</a><a href="/sitemap" class="text-slate hover:text-gold-400 transition-colors">Sitemap</a></nav>
      </div>
    </div>
  </footer>

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

for (const item of missingRoutes) {
  const relPath = item.route.replace(/^\//, '');
  const dirPath = path.join(process.cwd(), relPath);
  const filePathHtml = path.join(process.cwd(), `${relPath}.html`);
  const fileDirIndex = path.join(dirPath, 'index.html');

  fs.mkdirSync(dirPath, { recursive: true });
  fs.mkdirSync(path.dirname(filePathHtml), { recursive: true });

  const content = template(item.title, item.desc, item.route);
  fs.writeFileSync(filePathHtml, content, 'utf8');
  fs.writeFileSync(fileDirIndex, content, 'utf8');
}

console.log(`Successfully generated ${missingRoutes.length} placeholder routes (both .html and /index.html)!`);
