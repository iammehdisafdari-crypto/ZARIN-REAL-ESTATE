import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const apartmentsHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0A0B0E">

  <title>Apartments for Sale in Dubai | ZARIN Real Estate</title>
  <meta name="description" content="Browse apartments for sale in Dubai — studios, 1BR, 2BR, 3BR and 4BR+ units in Marina, Downtown, Business Bay, JVC, Dubai Hills and Bluewaters. Curated by ZARIN advisors.">
  <meta name="keywords" content="apartments for sale in Dubai, buy apartment Dubai, Dubai studio for sale, 1 bedroom apartment Dubai, 2BR apartment Marina, 3BR apartment Downtown, 4BR apartment Dubai">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="ZARIN Real Estate">
  <link rel="canonical" href="https://zarinrealestate.com/apartments-for-sale-in-dubai">
  <link rel="alternate" hreflang="en" href="https://zarinrealestate.com/apartments-for-sale-in-dubai">
  <link rel="alternate" hreflang="fa" href="https://zarinrealestate.com/fa/apartments-for-sale-in-dubai">
  <link rel="alternate" hreflang="x-default" href="https://zarinrealestate.com/apartments-for-sale-in-dubai">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Apartments for Sale in Dubai | ZARIN Real Estate">
  <meta property="og:description" content="Browse apartments for sale in Dubai — studios, 1BR, 2BR, 3BR and 4BR+ units. Curated by ZARIN advisors.">
  <meta property="og:image" content="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Apartment for sale in Dubai Marina with sea view">
  <meta property="og:url" content="https://zarinrealestate.com/apartments-for-sale-in-dubai">
  <meta property="og:site_name" content="ZARIN Real Estate">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Apartments for Sale in Dubai | ZARIN Real Estate">
  <meta name="twitter:description" content="Browse apartments for sale in Dubai — curated by ZARIN advisors.">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80">

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

  <style>
    html{scroll-behavior:smooth}body{font-family:"Source Sans 3","Vazirmatn",-apple-system,sans-serif;background:#0A0B0E;color:#F8F9FA;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}
    ::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#0A0B0E}::-webkit-scrollbar-thumb{background:#C8AB83;border-radius:4px}
    ::selection{background:rgba(200,171,131,0.3);color:#F8F9FA}
    .glass{background:rgba(10,11,14,0.78);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
    .text-gold-gradient{background:linear-gradient(135deg,#DFC49E 0%,#C8AB83 50%,#A88D66 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
    .stat-number{font-variant-numeric:tabular-nums;letter-spacing:-.02em}
    .mega-menu-trigger{position:relative}
    .mega-menu-panel{opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .3s cubic-bezier(.16,1,.3,1),transform .3s cubic-bezier(.16,1,.3,1),visibility .3s;pointer-events:none}
    .mega-menu-trigger:hover .mega-menu-panel,.mega-menu-trigger:focus-within .mega-menu-panel{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}
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
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zarinrealestate.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Properties",
      "item": "https://zarinrealestate.com/properties"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "For Sale",
      "item": "https://zarinrealestate.com/properties-for-sale"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Apartments",
      "item": "https://zarinrealestate.com/apartments-for-sale-in-dubai"
    }
  ]
}
  </script>

  <!-- JSON-LD: CollectionPage + ItemList -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://zarinrealestate.com/apartments-for-sale-in-dubai#collectionpage",
  "name": "Apartments for Sale in Dubai",
  "url": "https://zarinrealestate.com/apartments-for-sale-in-dubai",
  "description": "Browse apartments for sale in Dubai — studios, 1BR, 2BR, 3BR and 4BR+ units across Dubai Marina, Downtown, Business Bay, JVC, Dubai Hills and Bluewaters. Curated by ZARIN Real Estate advisors.",
  "isPartOf": {
    "@id": "https://zarinrealestate.com/#website"
  },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Studio Apartment — Jumeirah Village Circle",
          "url": "https://zarinrealestate.com/apartments/studio-jvc-001",
          "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
          "offers": {
            "@type": "Offer",
            "price": "380000",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "1BR Apartment — Business Bay",
          "url": "https://zarinrealestate.com/apartments/1br-bb-001",
          "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
          "offers": {
            "@type": "Offer",
            "price": "980000",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "2BR Apartment — Dubai Marina (Sea View)",
          "url": "https://zarinrealestate.com/apartments/2br-marina-001",
          "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
          "offers": {
            "@type": "Offer",
            "price": "2400000",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "3BR Apartment — Downtown Dubai (Burj View)",
          "url": "https://zarinrealestate.com/apartments/3br-downtown-001",
          "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
          "offers": {
            "@type": "Offer",
            "price": "4600000",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "4BR Apartment — Bluewaters Island (New)",
          "url": "https://zarinrealestate.com/apartments/4br-bluewaters-001",
          "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
          "offers": {
            "@type": "Offer",
            "price": "7800000",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "3BR Sky Apartment — Palm Jumeirah (Sea View)",
          "url": "https://zarinrealestate.com/apartments/3br-palm-001",
          "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
          "offers": {
            "@type": "Offer",
            "price": "6200000",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
          }
        }
      }
    ]
  }
}
  </script>

  <!-- JSON-LD: FAQPage -->
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

  <!-- JSON-LD: WebPage + Speakable -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zarinrealestate.com/apartments-for-sale-in-dubai#webpage",
  "url": "https://zarinrealestate.com/apartments-for-sale-in-dubai",
  "name": "Apartments for Sale in Dubai | ZARIN Real Estate",
  "isPartOf": {
    "@id": "https://zarinrealestate.com/#website"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      "#hero-headline",
      "#tldr-summary"
    ]
  }
}
  </script>
</head>


<body class="bg-ink-900 text-bone antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-900 focus:rounded-xs focus:text-sm focus:font-bold">Skip to main content</a>

  <!-- HEADER -->
  <header id="site-header" class="fixed top-0 left-0 w-full z-[900] transition-all duration-500" role="banner" style="padding: 1.25rem 0; border-bottom: 1px solid transparent;">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex items-center justify-between gap-4">

        <a href="/" class="flex items-center gap-2 group flex-shrink-0" aria-label="ZARIN Real Estate — Home">
          <span class="font-sans font-extrabold text-2xl tracking-tight text-bone group-hover:text-gold-400 transition-colors duration-300">ZARIN</span>
          <span class="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold border-l border-gold-line pl-2">Real Estate</span>
        </a>

        <nav class="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">

          <div class="mega-menu-trigger">
            <button class="px-3 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false" aria-current="page">
              Properties
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[640px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-3 gap-x-6 gap-y-3">
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">For Sale</div>
              <a href="/properties-for-sale" class="text-sm text-bone hover:text-gold-400 transition-colors">All Properties for Sale</a>
              <a href="/apartments-for-sale-in-dubai" class="text-sm text-gold-400 font-semibold hover:text-gold-300 transition-colors" aria-current="page">Apartments</a>
              <a href="/villas-for-sale-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Villas</a>
              <a href="/penthouses-for-sale-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Penthouses</a>
              <a href="/townhouses-for-sale-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Townhouses</a>
              <a href="/trophy-residences" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">Trophy Residences →</a>
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">For Rent</div>
              <a href="/properties-for-rent" class="text-sm text-bone hover:text-gold-400 transition-colors">All Rentals</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">By Lifestyle</div>
              <a href="/beachfront-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Beachfront</a>
              <a href="/burj-khalifa-view-properties" class="text-sm text-ash hover:text-gold-400 transition-colors">Burj View</a>
              <a href="/golf-course-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Golf Course</a>
              <a href="/branded-residences-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Branded Residences</a>
              <a href="/commercial-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Commercial</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <button class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              Off-Plan
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
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

          <div class="mega-menu-trigger">
            <button class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              Areas
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[640px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-3 gap-x-6 gap-y-3">
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Featured Areas</div>
              <a href="/areas" class="text-sm text-bone hover:text-gold-400 transition-colors">Palm Jumeirah</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Downtown Dubai</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai Hills Estate</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai Marina</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Business Bay</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Creek Harbour</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Jumeirah Bay Island</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Emirates Hills</a>
              <a href="/areas" class="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold">All Areas →</a>
              <div class="col-span-3 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">City Comparisons</div>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai vs London</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai vs Singapore</a>
              <a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Dubai vs New York</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <button class="px-3 py-2 text-[13px] font-semibold tracking-wide text-gold-400 hover:text-gold-300 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              Private Office
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-gold-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">The Private Office (AED 25M+)</div>
              <a href="/private-office" class="text-sm text-bone hover:text-gold-400 transition-colors">Overview</a>
              <a href="/private-office/discretion" class="text-sm text-ash hover:text-gold-400 transition-colors">Discretion Protocol</a>
              <a href="/private-office/off-market" class="text-sm text-ash hover:text-gold-400 transition-colors">Off-Market Listings</a>
              <a href="/private-office/multi-currency" class="text-sm text-ash hover:text-gold-400 transition-colors">Multi-Currency Pricing</a>
              <a href="/private-office/crypto-payments" class="text-sm text-ash hover:text-gold-400 transition-colors">Crypto Payments</a>
              <a href="/private-office/concierge" class="text-sm text-ash hover:text-gold-400 transition-colors">Lifestyle Concierge</a>
              <a href="/private-office/yacht-aviation" class="text-sm text-ash hover:text-gold-400 transition-colors">Yacht & Aviation</a>
              <a href="/private-office/cross-border-tax" class="text-sm text-ash hover:text-gold-400 transition-colors">Cross-Border Tax</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <button class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              Services
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Buying & Selling</div>
              <a href="/services" class="text-sm text-bone hover:text-gold-400 transition-colors">Buying Advisory</a>
              <a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors">Selling Advisory</a>
              <a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors">Mortgage Advisory</a>
              <a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors">Free Valuation</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">Management & Legal</div>
              <a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors">Property Management</a>
              <a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors">Legal & Conveyancing</a>
              <a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors">Property Insurance</a>
              <a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors">After-Sales Support</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <button class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              Visas
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
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

          <div class="mega-menu-trigger">
            <button class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              Insights
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mega-menu-panel absolute top-full left-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">Content Hub</div>
              <a href="/insights" class="text-sm text-bone hover:text-gold-400 transition-colors">All Insights</a>
              <a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">Blog Articles</a>
              <a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Reports</a>
              <a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">Podcast</a>
              <a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">Buyer's Guides</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">Tools & Reference</div>
              <a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">All Calculators</a>
              <a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">FAQ Hub</a>
              <a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">Glossary</a>
              <a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">Market Data</a>
            </div>
          </div>

          <div class="mega-menu-trigger">
            <button class="px-3 py-2 text-[13px] font-semibold tracking-wide text-ash hover:text-gold-400 transition-colors duration-300 flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              Heritage
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="mega-menu-panel absolute top-full right-0 mt-2 w-[480px] glass border border-white-line rounded-sm shadow-monolith p-6 grid grid-cols-2 gap-x-6 gap-y-3">
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line">About ZARIN</div>
              <a href="/heritage" class="text-sm text-bone hover:text-gold-400 transition-colors">Our Story (since 2005)</a>
              <a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Founder's Letter</a>
              <a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Our Team</a>
              <a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Author Profiles</a>
              <div class="col-span-2 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 pb-2 border-b border-white-line mt-2">Trust & Proof</div>
              <a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Testimonials</a>
              <a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Awards</a>
              <a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Press & Media</a>
              <a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Case Studies</a>
            </div>
          </div>
        </nav>

        <div class="flex items-center gap-3">
          <div class="hidden md:flex items-center gap-2 px-3 py-1.5 border border-white-line rounded-xs text-xs font-semibold text-ash hover:text-gold-400 hover:border-gold-line transition-all cursor-pointer" role="button" tabindex="0" aria-label="Select currency">
            <span>USD</span>
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </div>

          <a href="tel:+971586901231" class="hidden md:flex items-center gap-2 text-xs font-semibold text-ash hover:text-gold-400 transition-colors" aria-label="Call us at +971 58 690 1231">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span>+971 58 690 1231</span>
          </a>

          <a href="/consultation" class="hidden md:inline-flex items-center px-5 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-[0.08em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Book a consultation">
            Book Consultation
          </a>

          <button id="mobile-menu-toggle" class="lg:hidden text-bone hover:text-gold-400 transition-colors p-2" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Menu Drawer -->
  <div id="mobile-menu" class="mobile-menu fixed top-0 right-0 w-full max-w-sm h-full bg-ink-900 border-l border-white-line z-[1000] overflow-y-auto lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <div class="p-6">
      <div class="flex justify-between items-center mb-8">
        <span class="font-sans font-extrabold text-xl text-bone">ZARIN</span>
        <button id="mobile-menu-close" class="text-ash hover:text-gold-400 transition-colors" aria-label="Close menu">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="flex flex-col gap-1" aria-label="Mobile primary navigation">
        <a href="/properties-for-sale" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Properties for Sale</a>
        <a href="/apartments-for-sale-in-dubai" class="py-3 px-4 text-sm font-semibold text-gold-400 hover:bg-white-soft rounded-xs transition-all" aria-current="page">Apartments</a>
        <a href="/properties-for-rent" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Properties for Rent</a>
        <a href="/trophy-residences" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Trophy Residences</a>
        <a href="/off-plan" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Off-Plan</a>
        <a href="/areas" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Areas</a>
        <a href="/private-office" class="py-3 px-4 text-sm font-semibold text-gold-400 hover:bg-white-soft rounded-xs transition-all">Private Office</a>
        <a href="/services" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Services</a>
        <a href="/visas" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Visas</a>
        <a href="/insights" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Insights</a>
        <a href="/heritage" class="py-3 px-4 text-sm font-semibold text-bone hover:text-gold-400 hover:bg-white-soft rounded-xs transition-all">Heritage</a>
        <div class="h-px bg-white-line my-4"></div>
        <a href="/consultation" class="py-3 px-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-wide text-center rounded-xs hover:bg-gold-300 transition-all">Book Consultation</a>
        <a href="/contact" class="py-3 px-4 text-sm text-ash hover:text-gold-400 text-center">Contact Us</a>
        <a href="tel:+971586901231" class="py-3 px-4 text-sm text-ash hover:text-gold-400 text-center">+971 58 690 1231</a>
        <a href="https://wa.me/971586901231" class="py-3 px-4 text-sm text-tether hover:text-tether/80 text-center">WhatsApp</a>
      </nav>
    </div>
  </div>

  <main id="main">

  <!-- Breadcrumb Navigation -->
  <div class="bg-ink-900 pt-28 pb-4 border-b border-white-line/50">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <nav aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2 text-xs text-ash" role="list">
          <li role="listitem"><a href="/" class="hover:text-gold-400 transition-colors">Home</a></li>
          <li role="listitem" class="text-slate" aria-hidden="true">/</li>
          <li role="listitem"><a href="/properties" class="hover:text-gold-400 transition-colors">Properties</a></li>
          <li role="listitem" class="text-slate" aria-hidden="true">/</li>
          <li role="listitem"><a href="/properties-for-sale" class="hover:text-gold-400 transition-colors">For Sale</a></li>
          <li role="listitem" class="text-slate" aria-hidden="true">/</li>
          <li role="listitem"><span class="text-gold-400 font-semibold" aria-current="page">Apartments</span></li>
        </ol>
      </nav>
    </div>
  </div>

  <!-- 1. HERO + TL;DR -->
  <section class="relative py-20 md:py-28 overflow-hidden bg-ink-900" aria-label="Apartments for sale hero">
    <div class="absolute inset-0 opacity-25" aria-hidden="true"><img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" alt="" class="w-full h-full object-cover" aria-hidden="true" loading="eager" fetchpriority="high" decoding="async" width="1920" height="1080"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50" aria-hidden="true"></div>
    <div class="relative max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="max-w-3xl animate-fade-in-up">
        <div class="inline-flex items-center gap-2 mb-6" aria-hidden="true"><span class="w-8 h-px bg-gold-400"></span><span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">Apartments &middot; Studios to 4BR+</span></div>
        <h1 id="hero-headline" class="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone mb-6">Apartments<br>for <span class="text-gold-gradient">Sale in Dubai</span></h1>
        <p id="tldr-summary" class="text-lg md:text-xl text-ash max-w-2xl leading-relaxed mb-4 font-light">Studios, 1-bedroom, 2-bedroom, 3-bedroom and 4+ bedroom apartments across Dubai's most sought-after apartment communities. Every listing is personally inspected by a ZARIN advisor — floor plan verified, service charge audited, view confirmed, recent comparables pulled from the Dubai Land Department database. We don't list apartments we haven't walked through, and we won't show you a unit whose asking price isn't justified by what comparable apartments in the same building have actually sold for.</p>
        <p class="text-base text-slate max-w-2xl leading-relaxed mb-8">Browse the curated sample below, filter by bedroom count, budget or area, then request a tailored shortlist within 24 hours. Whether you're buying for end-use, rental yield or long-term capital growth, your advisor tailors the search to your mandate — not to whatever happens to be on a portal's trending list.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#apartment-grid" class="inline-flex items-center gap-3 px-6 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Browse apartments"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>Browse Apartments</a>
          <a href="/consultation" class="inline-flex items-center gap-3 px-6 py-4 border border-gold-line text-bone text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-soft hover:border-gold-border transition-all duration-300" aria-label="Speak to an advisor">Speak to Advisor</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white-line" role="list" aria-label="Apartment market statistics">
          <div role="listitem"><div class="text-3xl font-bold text-gold-400 stat-number">1,200+</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Active Apartment Listings</div></div>
          <div role="listitem"><div class="text-3xl font-bold text-gold-400 stat-number">AED 1,800</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Avg Price / sqft</div></div>
          <div role="listitem"><div class="text-3xl font-bold text-gold-400 stat-number">2BR &amp; 3BR</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Popular Bedroom Types</div></div>
          <div role="listitem"><div class="text-3xl font-bold text-gold-400 stat-number">12</div><div class="text-xs text-slate uppercase tracking-wider mt-1">Featured Areas</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. FILTER BAR (sticky, glass morphism) -->
  <section id="filter-bar" class="sticky top-0 z-50 glass border-b border-white-line py-4" aria-label="Apartment filters">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="flex flex-wrap items-center gap-3" role="group" aria-label="Filter by bedroom type, price and area">
        <div class="text-xs uppercase tracking-[0.2em] text-slate font-semibold mr-2" aria-hidden="true">Filter:</div>
        
        <!-- Filter group: Bedroom -->
        <button class="filter-chip active px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash" data-filter-type="bedroom" data-filter-val="all" aria-pressed="true">All</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="studio" aria-pressed="false">Studio</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="1br" aria-pressed="false">1BR</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="2br" aria-pressed="false">2BR</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="3br" aria-pressed="false">3BR</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="bedroom" data-filter-val="4br" aria-pressed="false">4BR+</button>
        
        <div class="hidden md:block w-px h-6 bg-white-line mx-2" aria-hidden="true"></div>
        
        <!-- Filter group: Price -->
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="under-1m" aria-pressed="false">Under AED 1M</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="1m-3m" aria-pressed="false">AED 1M-3M</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="3m-5m" aria-pressed="false">AED 3M-5M</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="price" data-filter-val="above-5m" aria-pressed="false">AED 5M+</button>
        
        <div class="hidden md:block w-px h-6 bg-white-line mx-2" aria-hidden="true"></div>
        
        <!-- Filter group: Area -->
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="marina" aria-pressed="false">Marina</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="downtown" aria-pressed="false">Downtown</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="business-bay" aria-pressed="false">Business Bay</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="jvc" aria-pressed="false">JVC</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="dubai-hills" aria-pressed="false">Dubai Hills</button>
        <button class="filter-chip px-4 py-2 border border-white-line rounded-xs text-xs font-semibold text-ash hover:border-gold-line transition-colors" data-filter-type="area" data-filter-val="bluewaters" aria-pressed="false">Bluewaters</button>
        
        <div class="hidden md:block flex-1" aria-hidden="true"></div>
        <a href="/consultation" class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wide rounded-xs hover:bg-gold-300 transition-colors" aria-label="Request a custom apartment search">Custom Search →</a>
      </div>
      <p class="text-xs text-slate mt-3 leading-relaxed max-w-3xl">Use the chips above to narrow the curated grid below by bedroom type (Studio, 1BR, 2BR, 3BR, 4BR+), by price band (Under AED 1M, 1M-3M, 3M-5M, 5M+), or by area (Dubai Marina, Downtown, Business Bay, JVC, Dubai Hills, Bluewaters). The chips are sticky and remain visible as you scroll, so you can refine the view without jumping back to the top. For a more tailored shortlist — including off-market apartments, pre-launch developer inventory and units with specific view orientations (sea, Burj, marina, golf) — request a Custom Search and an advisor will reply within 24 hours with a hand-picked shortlist matched to your bedroom, budget, area and amenity preferences. ZARIN advisors cover every freehold apartment community in Dubai and have access to developer-direct pricing, off-market listings and pre-launch allocations that never appear on public portals.</p>
    </div>
  </section>

  <!-- 3. APARTMENT LISTINGS GRID -->
  <section id="apartment-grid" class="bg-ink-900 py-16 md:py-20" aria-label="Apartment listings">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2">Featured Apartments</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-bone">Curated Apartments, Personally Inspected</h2>
        </div>
        <p class="text-sm text-ash max-w-md">A selection of current ZARIN-mandated apartment listings across studios, 1BR, 2BR, 3BR and 4BR+ layouts. Each unit has been physically inspected by an advisor — floor plan verified, service charge audited, view confirmed. For our complete apartment inventory, request a custom search tailored to your bedroom, budget and area criteria.</p>
      </div>

      <!-- Live filter status indicator -->
      <div id="filter-status-row" class="flex items-center justify-between text-xs text-slate mb-6 pb-3 border-b border-white-line/50">
        <div>Showing <span id="visible-count" class="text-gold-400 font-bold stat-number">6</span> of 6 verified sample listings</div>
        <button id="reset-all-filters-btn" class="hidden text-xs text-gold-400 hover:text-gold-300 font-semibold underline underline-offset-4">Reset Filters</button>
      </div>

      <!-- Grid -->
      <div id="cards-container" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Apartment listings">

        <!-- Listing 1: Studio JVC -->
        <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" role="listitem" data-bedroom="studio" data-price="380000" data-area="jvc">
          <a href="/apartments/studio-jvc-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View studio apartment in Jumeirah Village Circle">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="Studio apartment in Jumeirah Village Circle with city view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Entry-Level</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 380K</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment &middot; Studio</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">Studio &middot; Belgravia II</h3>
            <div class="text-sm text-ash mb-4">Jumeirah Village Circle &middot; 410 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">Studio</div><div>Layout</div></div>
              <div><div class="text-bone font-semibold">1</div><div>Bathroom</div></div>
              <div><div class="text-bone font-semibold">AED 927</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 2: 1BR Business Bay -->
        <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" role="listitem" data-bedroom="1br" data-price="980000" data-area="business-bay">
          <a href="/apartments/1br-bb-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 1-bedroom apartment in Business Bay">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" alt="1-bedroom apartment in Business Bay with skyline view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 980K</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment &middot; 1BR</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">1BR Apartment &middot; Executive Tower</h3>
            <div class="text-sm text-ash mb-4">Business Bay &middot; 720 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">1</div><div>Bedroom</div></div>
              <div><div class="text-bone font-semibold">2</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,361</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 3: 2BR Marina Sea View -->
        <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" role="listitem" data-bedroom="2br" data-price="2400000" data-area="marina">
          <a href="/apartments/2br-marina-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 2-bedroom apartment in Dubai Marina with sea view">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="2-bedroom apartment in Dubai Marina with sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Sea View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 2.40M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment &middot; 2BR</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">2BR Apartment &middot; Marina Gate</h3>
            <div class="text-sm text-ash mb-4">Dubai Marina &middot; 1,320 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">2</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">3</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 1,818</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 4: 3BR Downtown Burj View -->
        <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" role="listitem" data-bedroom="3br" data-price="4600000" data-area="downtown">
          <a href="/apartments/3br-downtown-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3-bedroom apartment in Downtown Dubai with Burj Khalifa view">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="3-bedroom apartment in Downtown Dubai with Burj Khalifa view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Burj View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 4.60M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment &middot; 3BR</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Apartment &middot; Burj Vista</h3>
            <div class="text-sm text-ash mb-4">Downtown Dubai &middot; 1,950 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,359</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 5: 4BR Bluewaters (New) -->
        <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" role="listitem" data-bedroom="4br" data-price="7800000" data-area="bluewaters">
          <a href="/apartments/4br-bluewaters-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 4-bedroom apartment on Bluewaters Island">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="4-bedroom apartment on Bluewaters Island with sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">New</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 7.80M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment &middot; 4BR+</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">4BR Apartment &middot; Bluewaters Residences</h3>
            <div class="text-sm text-ash mb-4">Bluewaters Island &middot; 3,100 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">4</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">5</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,516</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

        <!-- Listing 6: 3BR Palm Sky Apartment Sea View -->
        <article class="apartment-card bg-ink-850 border border-white-line rounded-sm overflow-hidden card-lift group" role="listitem" data-bedroom="3br" data-price="6200000" data-area="palm-jumeirah">
          <a href="/apartments/3br-palm-001" class="block img-zoom relative aspect-[4/3] overflow-hidden" aria-label="View 3-bedroom sky apartment on Palm Jumeirah">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" alt="3-bedroom sky apartment on Palm Jumeirah with sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="600">
            <div class="absolute top-3 left-3 glass border border-gold-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Sea View</div>
            <div class="absolute top-3 right-3 glass border border-white-line rounded-xs px-3 py-1 text-[10px] uppercase tracking-wider text-bone font-semibold">AED 6.20M</div>
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2"><div class="text-xs uppercase tracking-wider text-gold-400 font-semibold">Apartment &middot; 3BR</div><div class="text-xs text-slate">Ready</div></div>
            <h3 class="text-lg font-bold text-bone mb-1 group-hover:text-gold-400 transition-colors">3BR Sky Apartment &middot; Palm Tower</h3>
            <div class="text-sm text-ash mb-4">Palm Jumeirah &middot; 2,400 sqft</div>
            <div class="grid grid-cols-3 gap-2 text-xs text-slate border-t border-white-line pt-4">
              <div><div class="text-bone font-semibold">3</div><div>Bedrooms</div></div>
              <div><div class="text-bone font-semibold">4</div><div>Bathrooms</div></div>
              <div><div class="text-bone font-semibold">AED 2,583</div><div>per sqft</div></div>
            </div>
          </div>
        </article>

      </div>

      <!-- Empty state if no filter match -->
      <div id="no-match-state" class="hidden py-16 text-center border border-white-line/50 rounded-sm bg-ink-850/50 mt-6">
        <p class="text-base text-bone font-semibold mb-2">No sample apartments match your selected filters</p>
        <p class="text-xs text-slate mb-4">ZARIN maintains over 1,200 active apartment listings across Dubai. Request a custom search or reset filters to explore.</p>
        <button id="reset-filter-link" class="px-5 py-2.5 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-gold-300 transition-colors">Clear All Filters</button>
      </div>

      <!-- Load more / custom search CTA -->
      <div class="mt-12 text-center">
        <p class="text-sm text-slate mb-6">This is a curated sample. ZARIN has access to 1,200+ active apartment listings across Dubai — studios to 4BR+ sky apartments. Tell us your bedroom count, budget and preferred areas, and we'll send a tailored shortlist within 24 hours.</p>
        <a href="/consultation" class="inline-flex items-center gap-3 px-8 py-4 bg-gold-400 text-ink-900 text-sm font-bold uppercase tracking-[0.1em] rounded-xs hover:bg-gold-300 transition-all duration-300 shadow-gold" aria-label="Request custom apartment search">Request Custom Search<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
  </section>

  <!-- 4. BROWSE BY BEDROOM TYPE -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Browse by bedroom type">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by Bedroom Type</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Find Your Layout</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto leading-relaxed">Dubai apartments span five principal layouts, each with its own price band, rental demand and buyer profile. Studios and 1-bedroom units are popular with investors chasing yield; 2- and 3-bedroom apartments dominate end-user demand from couples and small families; 4BR+ apartments sit at the premium end of the market, often with skyline or sea views and full-service building amenities. Click any layout below to see what's currently available in that bedroom count.</p>
        <p class="text-slate mt-3 max-w-2xl mx-auto leading-relaxed text-sm">The price ranges shown reflect the lowest verified entry point in Dubai as of late 2026 — typically JVC or Dubai South for studios, Business Bay for 1- and 2-bedroom apartments, and Dubai Marina or Creek Harbour for 3- and 4-bedroom layouts. For premium sea-view or Burj-view units, expect to add 20-40% on top of these starting prices. Your ZARIN advisor provides current per-bedroom pricing for any specific building on request.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

        <a href="#filter-bar" class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" data-filter-target="studio" aria-label="View studio apartments">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" alt="Studio apartment interior in Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">Studio</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">Compact open-plan units, 350-500 sqft. Strong rental yield, ideal entry point for first-time investors.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 350K</span>
              <span class="text-slate">280+ listings</span>
            </div>
          </div>
        </a>

        <a href="#filter-bar" class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" data-filter-target="1br" aria-label="View 1-bedroom apartments">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80" alt="1-bedroom apartment interior in Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">1 Bedroom</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">650-900 sqft layouts with separate bedroom. The sweet spot for Marina and Business Bay rental demand.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 800K</span>
              <span class="text-slate">540+ listings</span>
            </div>
          </div>
        </a>

        <a href="#filter-bar" class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" data-filter-target="2br" aria-label="View 2-bedroom apartments">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" alt="2-bedroom apartment interior in Dubai Marina" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">2 Bedroom</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">1,100-1,500 sqft layouts. Most popular end-user size, popular with couples and young families.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 1.6M</span>
              <span class="text-slate">420+ listings</span>
            </div>
          </div>
        </a>

        <a href="#filter-bar" class="bedroom-card-link group bg-ink-900 border border-white-line rounded-sm overflow-hidden card-lift block" data-filter-target="3br" aria-label="View 3-bedroom apartments">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="3-bedroom apartment interior in Downtown Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">3 Bedroom</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">1,700-2,200 sqft layouts. Family-sized apartments with study, maid's room and dual-aspect views.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 3.2M</span>
              <span class="text-slate">180+ listings</span>
            </div>
          </div>
        </a>

        <a href="#filter-bar" class="bedroom-card-link group bg-ink-900 border border-gold-line rounded-sm overflow-hidden card-lift block" data-filter-target="4br" aria-label="View 4-bedroom and larger apartments">
          <div class="aspect-[4/3] img-zoom overflow-hidden"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="4-bedroom apartment interior with sea view in Dubai" class="w-full h-full object-cover" loading="lazy" decoding="async" width="600" height="450"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">4BR+ / Sky Apt</h3>
            <p class="text-sm text-ash leading-relaxed mb-3">2,800+ sqft sky apartments and full-floor units. Trophy layouts with private lift, terrace, sea view.</p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">From AED 5.5M</span>
              <span class="text-slate">95+ listings</span>
            </div>
          </div>
        </a>

      </div>
    </div>
  </section>

  <!-- 5. BROWSE BY AREA -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Browse apartments by area">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Browse by Area</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Dubai's Apartment Communities</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto leading-relaxed">Each Dubai apartment community has its own character, price band and yield profile. Dubai Marina and Downtown remain the flagship apartment districts; Business Bay and JVC deliver higher yields at lower entry prices; Bluewaters and Palm Jumeirah lead on waterfront lifestyle; Dubai Hills Estate attracts families seeking larger 3-4BR layouts in a master-planned setting. Click any area below to see what apartments are currently available there.</p>
        <p class="text-slate mt-3 max-w-2xl mx-auto leading-relaxed text-sm">All listing counts and price ranges shown are drawn from the live Dubai Land Department transaction database and refreshed weekly. They reflect verified, ready apartments currently on the market — not off-plan launches or stale portal listings. Your ZARIN advisor can drill into a specific building, floor range, view orientation or service-charge band within any of these communities.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View apartments in Dubai Marina">
          <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80" alt="Dubai Marina skyline apartment towers" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Dubai Marina</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 600K – 12M</span>
              <span class="text-ash">520+ apartments</span>
            </div>
          </div>
        </a>

        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View apartments in Downtown Dubai">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="Downtown Dubai apartment towers with Burj Khalifa" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Downtown Dubai</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.2M – 18M</span>
              <span class="text-ash">340+ apartments</span>
            </div>
          </div>
        </a>

        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View apartments in Business Bay">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Business Bay apartment towers along the canal" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Business Bay</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 500K – 7M</span>
              <span class="text-ash">410+ apartments</span>
            </div>
          </div>
        </a>

        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View apartments in Jumeirah Village Circle">
          <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80" alt="Jumeirah Village Circle apartment buildings" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Jumeirah Village Circle</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 350K – 3M</span>
              <span class="text-ash">680+ apartments</span>
            </div>
          </div>
        </a>

        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View apartments in Dubai Hills Estate">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Dubai Hills Estate apartment buildings around golf course" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Dubai Hills Estate</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.4M – 9M</span>
              <span class="text-ash">180+ apartments</span>
            </div>
          </div>
        </a>

        <a href="/areas" class="group relative aspect-[16/10] rounded-sm overflow-hidden img-zoom block" aria-label="View apartments on Bluewaters Island">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Bluewaters Island apartment buildings with sea view" class="w-full h-full object-cover" loading="lazy" decoding="async" width="800" height="500">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h3 class="text-2xl font-bold text-bone mb-1">Bluewaters Island</h3>
            <div class="flex items-center justify-between text-xs">
              <span class="text-gold-400 font-semibold">AED 1.8M – 15M</span>
              <span class="text-ash">75+ apartments</span>
            </div>
          </div>
        </a>

      </div>
      <div class="text-center mt-10"><a href="/areas" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="View all Dubai areas">View All 45+ Areas<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a></div>
    </div>
  </section>

  <!-- 6. WHY BUY AN APARTMENT WITH ZARIN -->
  <section class="bg-ink-850 py-24 md:py-32" aria-label="Why buy an apartment with ZARIN">
    <div class="max-w-[1380px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Why ZARIN Apartments</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone mb-6">An Advisor Who Actually Inspects the Apartment</h2>
          <p class="text-lg text-ash leading-relaxed mb-8">Most online apartment listings are stale, duplicated across portals, or priced above what the building's recent sales actually support. ZARIN advisors verify every apartment we share — physical inspection of the unit and the building's common areas, recent comparable sales pulled from the Dubai Land Department database, audited service-charge statement, and a candid take on whether the asking price is justified for that floor, view and layout. If it isn't, we tell you before you waste a viewing — and we'll often negotiate the price down before you even arrive.</p>
          <div class="space-y-4 mb-8" role="list" aria-label="ZARIN apartment buying guarantees">
            <div class="flex items-start gap-3" role="listitem"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft" aria-hidden="true"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Every apartment personally inspected</div><div class="text-xs text-slate mt-1">We don't list apartments we haven't physically walked through — unit, building, amenities and parking.</div></div></div>
            <div class="flex items-start gap-3" role="listitem"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft" aria-hidden="true"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Floor plan verified, service charge audited</div><div class="text-xs text-slate mt-1">Recent comparables, audited service-charge statement and exit liquidity assessed for every unit.</div></div></div>
            <div class="flex items-start gap-3" role="listitem"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft" aria-hidden="true"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">2% standard commission, no hidden fees</div><div class="text-xs text-slate mt-1">Published, transparent, RERA-compliant. We never accept developer kickbacks.</div></div></div>
            <div class="flex items-start gap-3" role="listitem"><div class="flex-shrink-0 w-8 h-8 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft" aria-hidden="true"><svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><div><div class="text-sm font-bold text-bone">Trilingual advisory: EN, AR, FA</div><div class="text-xs text-slate mt-1">Direct communication in your preferred language — no translation friction at offer or transfer.</div></div></div>
          </div>
          <a href="/heritage" class="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors" aria-label="Learn more about ZARIN">Learn More About ZARIN<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
        <div class="grid grid-cols-2 gap-4" role="list" aria-label="ZARIN apartment advisory statistics">
          <div class="bg-ink-900 border border-gold-line rounded-sm p-6 bg-gold-soft" role="listitem"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">1,200+</div><div class="text-sm font-bold text-bone mb-1">Verified Apartments</div><div class="text-xs text-slate">Inspected by advisors</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6" role="listitem"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">2%</div><div class="text-sm font-bold text-bone mb-1">Buyer Commission</div><div class="text-xs text-slate">Standard, RERA-aligned</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6" role="listitem"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">24hr</div><div class="text-sm font-bold text-bone mb-1">Shortlist Delivery</div><div class="text-xs text-slate">After consultation</div></div>
          <div class="bg-ink-900 border border-white-line rounded-sm p-6" role="listitem"><div class="text-3xl font-extrabold text-gold-400 stat-number mb-2">20+</div><div class="text-sm font-bold text-bone mb-1">Years in Dubai</div><div class="text-xs text-slate">Founder investing since 2005</div></div>
        </div>
      </div>
      <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white-line" aria-label="Trust badges">
        <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg><span class="text-bone font-semibold">RERA Licensed</span></div>
        <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span class="text-bone font-semibold">24hr Response</span></div>
        <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.134 15.181 3 18"/></svg><span class="text-bone font-semibold">Trilingual EN/AR/FA</span></div>
        <div class="flex items-center gap-2 text-xs text-slate"><svg class="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-bone font-semibold">No Obligation</span></div>
      </div>
    </div>
  </section>

  <!-- 7. FAQ -->
  <section class="bg-ink-900 py-24 md:py-32" aria-label="Apartment buying FAQ">
    <div class="max-w-[1040px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="text-center mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Apartment Buying FAQ</div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-bone">Common Apartment Buyer Questions</h2>
        <p class="text-ash mt-4 max-w-2xl mx-auto leading-relaxed">The questions below come up in nearly every apartment-buying conversation we have with first-time and repeat buyers alike. The answers reflect current 2026 market conditions and the ZARIN advisory view — candid, data-driven and never salesy. If your question isn't here, just ask us directly via WhatsApp or a free consultation.</p>
      </div>
      <div class="space-y-3" role="list" aria-label="Apartment buying questions">
        <details class="bg-ink-850 border border-white-line rounded-sm" open role="listitem">
          <summary class="flex items-center justify-between p-6 cursor-pointer" aria-label="What is the average price of an apartment in Dubai in 2026?">
            <h3 class="text-base font-semibold text-bone">What is the average price of an apartment in Dubai in 2026?</h3>
            <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">As of late 2026, Dubai apartment prices span a wide band depending on location, finish and view. Studios in emerging areas like JVC, Dubai Sports City and Discovery Gardens start at AED 350,000-500,000, while 1-bedroom units in the same communities trade between AED 600,000 and AED 900,000. In prime areas — Dubai Marina, Downtown, Palm Jumeirah — a 1-bedroom typically runs AED 1.2M-1.8M and a 2-bedroom AED 2.2M-3.5M. The weighted average across all bedroom types sits around AED 1,800 per sqft, with sea-view and Burj-view units commanding a 15-30% premium over comparable inland layouts. ZARIN advisors share a current neighbourhood-specific price matrix during every consultation.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm" role="listitem">
          <summary class="flex items-center justify-between p-6 cursor-pointer" aria-label="Which areas in Dubai are best for buying apartments?">
            <h3 class="text-base font-semibold text-bone">Which areas in Dubai are best for buying apartments?</h3>
            <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">The right area depends on your mandate — end-use, rental yield or capital growth. Dubai Marina and Downtown remain the flagship apartment districts, offering liquidity, brand recognition and strong short-term-let demand. Business Bay and JVC deliver higher gross yields (6.5-8%) at lower entry prices, popular with first-time investors. Bluewaters, Palm Jumeirah and Emaar Beachfront appeal to buyers prioritising waterfront lifestyle and long-term appreciation. Dubai Hills Estate and Creek Harbour are master-planned communities where families gravitate for schools, parks and larger 3-4BR layouts. ZARIN helps you match an area to your budget, hold horizon and lifestyle expectations rather than chasing whatever is trending on listing portals.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm" role="listitem">
          <summary class="flex items-center justify-between p-6 cursor-pointer" aria-label="Can foreigners buy apartments in Dubai?">
            <h3 class="text-base font-semibold text-bone">Can foreigners buy apartments in Dubai?</h3>
            <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Yes. Since the 2002 Freehold Decree, foreigners of any nationality can buy apartments on a freehold basis in more than 70 designated areas across Dubai — including Dubai Marina, Downtown, Business Bay, JVC, Palm Jumeirah, Bluewaters, Dubai Hills and Creek Harbour. There are no restrictions on nationality, residency status or currency brought into the purchase. The title deed is issued in your personal name by the Dubai Land Department and is recognised internationally. Leasehold (up to 99 years) exists in a small number of older districts, but every modern apartment development ZARIN lists is freehold. We advise on the right ownership structure — personal, corporate or via a holding company — based on your estate-planning and tax-residency situation.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm" role="listitem">
          <summary class="flex items-center justify-between p-6 cursor-pointer" aria-label="What are the additional costs when buying an apartment in Dubai?">
            <h3 class="text-base font-semibold text-bone">What are the additional costs when buying an apartment in Dubai?</h3>
            <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Beyond the agreed purchase price, budget approximately 5-7% on top for transaction costs. The Dubai Land Department transfer fee is 4% of the sale price (historically split between buyer and seller, but in practice paid by the buyer). Agency commission is 2% of the price for buyers. Add an admin fee of AED 4,000 for properties above AED 500,000, plus AED 580 for the title deed issuance and a small mortgage arrangement fee (typically 0.5-1% of the loan) if financing. Service charges — the annual building maintenance contribution — are settled pro-rata between buyer and seller at handover. ZARIN provides a complete, itemised cost sheet for every shortlisted apartment before any offer is signed, so there are no surprises at transfer.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm" role="listitem">
          <summary class="flex items-center justify-between p-6 cursor-pointer" aria-label="What is the typical service charge for Dubai apartments?">
            <h3 class="text-base font-semibold text-bone">What is the typical service charge for Dubai apartments?</h3>
            <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Service charges in Dubai are calculated per square foot and billed annually in advance by the building's owners association (or its appointed management company). As of 2026, studios and 1BR units typically pay AED 12-18 per sqft, mid-tier buildings AED 18-25 per sqft, and luxury towers with extensive amenities (concierge, pools, gyms, sky lounges) AED 25-45 per sqft. For a 1,000 sqft 2BR, that translates to roughly AED 18,000-35,000 per year. Service charges fund common-area cleaning, security, lift maintenance, chiller (cooling) and amenities. ZARIN obtains the most recent audited service-charge statement for every apartment we list, so you can verify the figure against the developer's projections and budget accordingly.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm" role="listitem">
          <summary class="flex items-center justify-between p-6 cursor-pointer" aria-label="What rental yield can I expect from a Dubai apartment?">
            <h3 class="text-base font-semibold text-bone">What rental yield can I expect from a Dubai apartment?</h3>
            <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Dubai apartments typically deliver 6-8% gross rental yield, with the higher end concentrated in JVC, Business Bay and Dubai Production City. Marina and Downtown average 5-6.5% gross, while ultra-prime waterfront (Palm Jumeirah, Bluewaters) sits at 4-5.5% — lower yield but stronger capital appreciation. Net yield (after service charges, agent fees, DEWA and maintenance reserve) runs about 1.5-2 percentage points below gross. Long-let (12-month) contracts give stable, predictable income; short-term-let via a licensed operator can lift yields by 25-40% but requires active management. ZARIN shares rent comparables for the specific building you are considering — not generic area averages — so the underwriting reflects actual achievable rents in that tower.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm" role="listitem">
          <summary class="flex items-center justify-between p-6 cursor-pointer" aria-label="Are off-plan apartments a good investment?">
            <h3 class="text-base font-semibold text-bone">Are off-plan apartments a good investment?</h3>
            <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">Off-plan apartments can deliver strong returns — typically 20-30% capital gain between launch and handover — but the strategy carries real risks. The benefits include lower entry price, flexible 40-60% payment plans spread over 2-4 years, brand-new build quality and often premium views at pre-completion rates. The risks are developer delivery delays, design changes between brochure and delivered product, and the possibility of over-supply in the specific sub-market at handover. ZARIN only recommends off-plan projects from developers we have personally vetted — typically Emaar, Damac, Nakheel, Meraas, Sobha, Ellington and Select Group — and we review the Escrow Account, RERA registration, build-track record and current sales velocity before any client commits. Off-plan suits buyers with a 3-5 year hold horizon; for shorter horizons, ready inventory is safer.</div>
        </details>
        <details class="bg-ink-850 border border-white-line rounded-sm" role="listitem">
          <summary class="flex items-center justify-between p-6 cursor-pointer" aria-label="What documents do I need to buy an apartment in Dubai?">
            <h3 class="text-base font-semibold text-bone">What documents do I need to buy an apartment in Dubai?</h3>
            <svg class="faq-icon w-5 h-5 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </summary>
          <div class="px-6 pb-6 text-sm text-ash leading-relaxed">For UAE residents: passport copy, Emirates ID, proof of funds (recent bank statement) and a mortgage pre-approval letter if financing. For non-resident buyers: passport copy, proof of funds and a local UAE bank account (which ZARIN helps you open during a single bank branch visit). Off-plan purchases require a signed booking form, KYC documents and the passport copy. At the actual transfer appointment at the Dubai Land Department Trust Office, both parties (or their representatives via Power of Attorney) must attend with the original IDs, the signed Form F (Memorandum of Understanding) and the manager's cheque for the purchase price. ZARIN handles the document checklist, DLD appointment booking and trustee office coordination end-to-end.</div>
        </details>
      </div>
      <div class="text-center mt-12"><p class="text-sm text-slate">Still have questions? <a href="/consultation" class="text-gold-400 font-semibold hover:underline">Book a free consultation</a> or <a href="https://wa.me/971586901231" class="text-gold-400 font-semibold hover:underline">WhatsApp us</a>.</p></div>
    </div>
  </section>

  </main>

  <!-- FOOTER -->
  <footer class="bg-ink-950 border-t border-white-line pt-20 pb-8" role="contentinfo">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div class="col-span-2 lg:col-span-1">
          <a href="/" class="flex items-center gap-2 mb-4" aria-label="ZARIN Real Estate home"><span class="font-sans font-extrabold text-2xl tracking-tight text-bone">ZARIN</span></a>
          <p class="text-sm text-slate leading-relaxed mb-6">Dubai real estate advisory since 2023.</p>
          <div class="flex gap-3">
            <a href="https://instagram.com/zarin.realestate" class="w-10 h-10 border border-white-line rounded-xs flex items-center justify-center text-ash hover:text-gold-400 hover:border-gold-line transition-all" aria-label="Instagram"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            <a href="https://wa.me/971586901231" class="w-10 h-10 border border-white-line rounded-xs flex items-center justify-center text-ash hover:text-gold-400 hover:border-gold-line transition-all" aria-label="WhatsApp"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>
          </div>
        </div>
        <nav aria-label="Properties footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Properties</h2><ul class="space-y-2"><li><a href="/properties-for-sale" class="text-sm text-ash hover:text-gold-400 transition-colors">For Sale</a></li><li><a href="/properties-for-rent" class="text-sm text-ash hover:text-gold-400 transition-colors">For Rent</a></li><li><a href="/trophy-residences" class="text-sm text-ash hover:text-gold-400 transition-colors">Trophy Residences</a></li><li><a href="/beachfront-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Beachfront</a></li><li><a href="/branded-residences-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Branded Residences</a></li><li><a href="/commercial-properties-in-dubai" class="text-sm text-ash hover:text-gold-400 transition-colors">Commercial</a></li></ul></nav>
        <nav aria-label="Services footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Services</h2><ul class="space-y-2"><li><a href="/services" class="text-sm text-ash hover:text-gold-400 transition-colors">All Services</a></li><li><a href="/visas" class="text-sm text-ash hover:text-gold-400 transition-colors">Visas &amp; Citizenship</a></li><li><a href="/consultation" class="text-sm text-ash hover:text-gold-400 transition-colors">Book Consultation</a></li><li><a href="/contact" class="text-sm text-ash hover:text-gold-400 transition-colors">Contact</a></li></ul></nav>
        <nav aria-label="Insights footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Insights</h2><ul class="space-y-2"><li><a href="/insights" class="text-sm text-ash hover:text-gold-400 transition-colors">All Insights</a></li><li><a href="/off-plan/investment-guide" class="text-sm text-ash hover:text-gold-400 transition-colors">Investment Guide</a></li><li><a href="/off-plan/developer-reputation-tracker" class="text-sm text-ash hover:text-gold-400 transition-colors">Developer Tracker</a></li><li><a href="/areas" class="text-sm text-ash hover:text-gold-400 transition-colors">Area Guides</a></li></ul></nav>
        <nav aria-label="Heritage footer"><h2 class="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">Heritage</h2><ul class="space-y-2"><li><a href="/heritage" class="text-sm text-ash hover:text-gold-400 transition-colors">Our Story</a></li><li><a href="/legal/privacy" class="text-sm text-ash hover:text-gold-400 transition-colors">Privacy Policy</a></li><li><a href="/legal/terms" class="text-sm text-ash hover:text-gold-400 transition-colors">Terms of Service</a></li><li><a href="/legal/ai-disclosure" class="text-sm text-ash hover:text-gold-400 transition-colors">AI Disclosure</a></li></ul></nav>
      </div>
      <div class="grid md:grid-cols-3 gap-6 py-8 border-t border-white-line">
        <address class="not-italic"><div class="text-xs uppercase tracking-wider text-slate mb-2">Dubai Office</div><p class="text-sm text-ash">Sheikh Zayed Road<br>Downtown Dubai, UAE</p></address>
        <div><div class="text-xs uppercase tracking-wider text-slate mb-2">Phone</div><a href="tel:+971586901231" class="text-sm text-bone hover:text-gold-400 transition-colors">+971 58 690 1231</a></div>
        <div><div class="text-xs uppercase tracking-wider text-slate mb-2">Email</div><a href="mailto:advisory@zarinrealestate.com" class="text-sm text-bone hover:text-gold-400 transition-colors">advisory@zarinrealestate.com</a></div>
      </div>
      <div class="pt-8 border-t border-white-line flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap items-center gap-4 text-xs text-slate"><span>&copy; 2026 ZARIN Real Estate. All rights reserved.</span><span class="hidden md:inline w-1 h-1 bg-slate rounded-full" aria-hidden="true"></span><span>RERA Licensed</span></div>
        <nav aria-label="Legal links" class="flex flex-wrap items-center gap-4 text-xs"><a href="/legal/privacy" class="text-slate hover:text-gold-400 transition-colors">Privacy</a><a href="/legal/terms" class="text-slate hover:text-gold-400 transition-colors">Terms</a><a href="/legal/privacy" class="text-slate hover:text-gold-400 transition-colors">Cookies</a><a href="/legal/ai-disclosure" class="text-slate hover:text-gold-400 transition-colors">AI Disclosure</a><a href="/legal/dmca" class="text-slate hover:text-gold-400 transition-colors">DMCA</a><a href="/contact" class="text-slate hover:text-gold-400 transition-colors">Contact</a><a href="/sitemap" class="text-slate hover:text-gold-400 transition-colors">Sitemap</a></nav>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/971586901231" class="sticky-whatsapp fixed bottom-6 right-6 z-[800] w-14 h-14 bg-gold-400 rounded-full shadow-monolith items-center justify-center hover:bg-gold-300 transition-colors" aria-label="WhatsApp us"><svg class="w-7 h-7 text-ink-900 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>

  <script defer>
    // Header Scroll Styling
    const header=document.getElementById('site-header');let ticking=false;
    window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(()=>{if(window.scrollY>60){header.style.backgroundColor='rgba(10,11,14,0.85)';header.style.backdropFilter='blur(20px)';header.style.borderBottomColor='rgba(200,171,131,0.15)';header.style.padding='0.85rem 0';}else{header.style.backgroundColor='transparent';header.style.backdropFilter='none';header.style.borderBottomColor='transparent';header.style.padding='1.25rem 0';}ticking=false;});ticking=true;}});

    // Mobile Menu Drawer Controls
    const mt=document.getElementById('mobile-menu-toggle'),mc=document.getElementById('mobile-menu-close'),mm=document.getElementById('mobile-menu');
    mt?.addEventListener('click',()=>{mm.classList.add('open');mt.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';});
    mc?.addEventListener('click',()=>{mm.classList.remove('open');mt.setAttribute('aria-expanded','false');document.body.style.overflow='';});
    mm?.querySelectorAll('a').forEach(l=>{l.addEventListener('click',()=>{mm.classList.remove('open');mt.setAttribute('aria-expanded','false');document.body.style.overflow='';});});

    // Interactive Filter System
    const activeFilters = { bedroom: 'all', price: 'all', area: 'all' };
    const filterChips = document.querySelectorAll('.filter-chip');
    const cards = document.querySelectorAll('.apartment-card');
    const visibleCountEl = document.getElementById('visible-count');
    const resetBtn = document.getElementById('reset-all-filters-btn');
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

        if (activeFilters.price === 'under-1m') priceMatch = cPrice < 1000000;
        else if (activeFilters.price === '1m-3m') priceMatch = cPrice >= 1000000 && cPrice <= 3000000;
        else if (activeFilters.price === '3m-5m') priceMatch = cPrice > 3000000 && cPrice <= 5000000;
        else if (activeFilters.price === 'above-5m') priceMatch = cPrice > 5000000;

        if (bedMatch && areaMatch && priceMatch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (visibleCountEl) visibleCountEl.textContent = visibleCount;
      if (noMatchBox) {
        if (visibleCount === 0) noMatchBox.classList.remove('hidden');
        else noMatchBox.classList.add('hidden');
      }

      const hasActive = activeFilters.bedroom !== 'all' || activeFilters.price !== 'all' || activeFilters.area !== 'all';
      if (resetBtn) {
        if (hasActive) resetBtn.classList.remove('hidden');
        else resetBtn.classList.add('hidden');
      }
    }

    function resetAll() {
      activeFilters.bedroom = 'all';
      activeFilters.price = 'all';
      activeFilters.area = 'all';
      filterChips.forEach(c => {
        const type = c.getAttribute('data-filter-type');
        const val = c.getAttribute('data-filter-val');
        if (type === 'bedroom' && val === 'all') {
          c.classList.add('active');
          c.setAttribute('aria-pressed', 'true');
        } else {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        }
      });
      applyFilters();
    }

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const type = chip.getAttribute('data-filter-type');
        const val = chip.getAttribute('data-filter-val');

        if (type === 'bedroom') {
          document.querySelectorAll('.filter-chip[data-filter-type="bedroom"]').forEach(c => {
            c.classList.remove('active');
            c.setAttribute('aria-pressed', 'false');
          });
          chip.classList.add('active');
          chip.setAttribute('aria-pressed', 'true');
          activeFilters.bedroom = val;
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

    resetBtn?.addEventListener('click', resetAll);
    resetLink?.addEventListener('click', resetAll);

    // Bedroom Type Cards Quick-Filter Linkage
    document.querySelectorAll('.bedroom-card-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetVal = link.getAttribute('data-filter-target');
        const matchingChip = document.querySelector(\`.filter-chip[data-filter-type="bedroom"][data-filter-val="\${targetVal}"]\`);
        if (matchingChip) {
          matchingChip.click();
        }
      });
    });
  </script>
</body>
</html>
`;

// Write to both root and directory index
fs.writeFileSync(path.join(rootDir, 'apartments-for-sale-in-dubai.html'), apartmentsHtml, 'utf8');

const aptDir = path.join(rootDir, 'apartments-for-sale-in-dubai');
if (!fs.existsSync(aptDir)) {
  fs.mkdirSync(aptDir, { recursive: true });
}
fs.writeFileSync(path.join(aptDir, 'index.html'), apartmentsHtml, 'utf8');

console.log('Successfully applied reference HTML to apartments-for-sale-in-dubai.html and directory index!');
