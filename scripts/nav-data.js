/**
 * ZARIN Real Estate — Canonical Navigation Data Definition
 * Shared single source of truth for Desktop Mega-Menu and Mobile Accordion Drawer across English and Persian.
 */

export const NAVIGATION_DATA = {
  en: [
    {
      id: 'properties',
      label: 'Properties',
      href: '/properties',
      i18n: 'nav_properties',
      toggleAria: 'Toggle Properties submenu',
      regionAria: 'Properties submenu',
      categories: [
        {
          title: 'For Sale',
          i18n: 'nav_for_sale',
          links: [
            { label: 'All Properties for Sale', href: '/properties-for-sale', i18n: 'nav_all_properties_for_sale', primary: true },
            { label: 'Apartments', href: '/apartments-for-sale-in-dubai', i18n: 'filter_apartments' },
            { label: 'Villas', href: '/villas-for-sale-in-dubai', i18n: 'filter_villas' },
            { label: 'Penthouses', href: '/penthouses-for-sale-in-dubai', i18n: 'filter_penthouses' },
            { label: 'Townhouses', href: '/townhouses-for-sale-in-dubai', i18n: 'filter_townhouses' },
            { label: 'Trophy Residences →', href: '/trophy-residences', i18n: 'filter_trophy', highlight: true }
          ]
        },
        {
          title: 'For Rent',
          i18n: 'nav_for_rent',
          links: [
            { label: 'All Rentals', href: '/properties-for-rent', i18n: 'nav_all_rentals', primary: true }
          ]
        },
        {
          title: 'By Lifestyle',
          i18n: 'nav_by_lifestyle',
          links: [
            { label: 'Beachfront', href: '/beachfront-properties-in-dubai', i18n: 'nav_beachfront' },
            { label: 'Burj View', href: '/burj-khalifa-view-properties', i18n: 'nav_burj_view' },
            { label: 'Golf Course', href: '/golf-course-properties-in-dubai', i18n: 'nav_golf_course' },
            { label: 'Branded Residences', href: '/branded-residences-in-dubai', i18n: 'nav_branded_residences' },
            { label: 'Commercial', href: '/commercial-properties-in-dubai', i18n: 'nav_commercial' }
          ]
        }
      ]
    },
    {
      id: 'offplan',
      label: 'Off-Plan',
      href: '/off-plan',
      i18n: 'nav_offplan',
      toggleAria: 'Toggle Off-Plan submenu',
      regionAria: 'Off-Plan submenu',
      categories: [
        {
          title: 'Discover',
          i18n: 'nav_discover',
          links: [
            { label: 'All Off-Plan Projects', href: '/off-plan/projects', i18n: 'nav_all_offplan', primary: true },
            { label: 'New Launches', href: '/off-plan/new-launches', i18n: 'nav_new_launches' },
            { label: 'Coming Soon', href: '/off-plan/coming-soon', i18n: 'nav_coming_soon' },
            { label: 'By Developer', href: '/off-plan/by-developer', i18n: 'nav_by_developer' }
          ]
        },
        {
          title: 'Investment Tools',
          i18n: 'nav_investment_tools',
          links: [
            { label: 'Investment Guide', href: '/off-plan/investment-guide', i18n: 'nav_investment_guide' },
            { label: 'Payment Calculator', href: '/off-plan/payment-calculator', i18n: 'nav_payment_calculator' },
            { label: 'ROI Predictor', href: '/off-plan/roi-predictor', i18n: 'nav_roi_predictor' },
            { label: 'Developer Tracker →', href: '/off-plan/developer-reputation-tracker', i18n: 'nav_developer_tracker', highlight: true }
          ]
        }
      ]
    },
    {
      id: 'areas',
      label: 'Areas',
      href: '/areas',
      i18n: 'nav_areas',
      toggleAria: 'Toggle Areas submenu',
      regionAria: 'Areas submenu',
      categories: [
        {
          title: 'Featured Areas',
          i18n: 'nav_featured_areas',
          links: [
            { label: 'Downtown Dubai', href: '/areas/downtown-dubai', i18n: 'nav_downtown_dubai', primary: true },
            { label: 'Dubai Hills Estate', href: '/areas/dubai-hills-estate', i18n: 'nav_dubai_hills_estate' },
            { label: 'Dubai Marina', href: '/areas/dubai-marina', i18n: 'nav_dubai_marina' },
            { label: 'Business Bay', href: '/areas/business-bay', i18n: 'nav_business_bay' },
            { label: 'Creek Harbour', href: '/areas/dubai-creek-harbour', i18n: 'nav_creek_harbour' },
            { label: 'Jumeirah Bay Island', href: '/areas/jumeirah-bay-island', i18n: 'nav_jumeirah_bay_island' },
            { label: 'Emirates Hills', href: '/areas/emirates-hills', i18n: 'nav_emirates_hills' },
            { label: 'All Areas →', href: '/areas', i18n: 'nav_all_areas', highlight: true }
          ]
        },
        {
          title: 'City Comparisons',
          i18n: 'nav_city_comparisons',
          links: [
            { label: 'Dubai vs London', href: '/areas/compare/dubai-vs-london', i18n: 'nav_dubai_vs_london' },
            { label: 'Dubai vs Singapore', href: '/areas/compare/dubai-vs-singapore', i18n: 'nav_dubai_vs_singapore' },
            { label: 'Dubai vs New York', href: '/areas/compare/dubai-vs-new-york', i18n: 'nav_dubai_vs_new_york' }
          ]
        }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      href: '/services',
      i18n: 'nav_services',
      toggleAria: 'Toggle Services submenu',
      regionAria: 'Services submenu',
      categories: [
        {
          title: 'Buying & Selling',
          i18n: 'nav_buying_selling',
          links: [
            { label: 'Buying Advisory', href: '/services/buying', i18n: 'footer_buying', primary: true },
            { label: 'Selling Advisory', href: '/services/selling', i18n: 'nav_selling_advisory' }
          ]
        },
        {
          title: 'Management & Legal',
          i18n: 'nav_management_legal',
          links: [
            { label: 'Free Valuation', href: '/services/valuation', i18n: 'nav_free_valuation' },
            { label: 'After Sales Support', href: '/services/after-sales', i18n: 'nav_after_sales' }
          ]
        }
      ]
    },
    {
      id: 'insights',
      label: 'Insights',
      href: '/insights',
      i18n: 'nav_insights',
      toggleAria: 'Toggle Insights submenu',
      regionAria: 'Insights submenu',
      categories: [
        {
          title: 'Content Hub',
          i18n: 'nav_content_hub',
          links: [
            { label: 'Blog Articles', href: '/insights/blog', i18n: 'nav_blog_articles', primary: true },
            { label: 'Market Reports', href: '/insights/market-reports', i18n: 'nav_market_reports' },
            { label: 'Podcast', href: '/insights/podcast', i18n: 'art_podcast_tag' },
            { label: 'Buyer\'s Guides', href: '/insights/guides', i18n: 'nav_buyers_guides' }
          ]
        },
        {
          title: 'Tools & Reference',
          i18n: 'nav_tools_reference',
          links: [
            { label: 'All Calculators', href: '/insights/calculators', i18n: 'nav_all_calculators' },
            { label: 'FAQ Hub', href: '/insights/faq', i18n: 'nav_faq_hub' },
            { label: 'Glossary', href: '/insights/glossary', i18n: 'nav_glossary' },
            { label: 'Market Data', href: '/insights/market-data', i18n: 'nav_market_data' }
          ]
        }
      ]
    },
    {
      id: 'heritage',
      label: 'Heritage',
      href: '/heritage',
      i18n: 'nav_heritage',
      toggleAria: 'Toggle Heritage submenu',
      regionAria: 'Heritage submenu',
      categories: [
        {
          title: 'About ZARIN',
          i18n: 'nav_about_zarin',
          links: [
            { label: 'Our Story (since 2005)', href: '/heritage', i18n: 'nav_our_story', primary: true },
            { label: 'Founder\'s Letter', href: '/heritage/founder', i18n: 'nav_founders_letter' },
            { label: 'Our Team', href: '/heritage/team', i18n: 'nav_team' },
            { label: 'Author Profiles', href: '/heritage/authors', i18n: 'nav_authors' }
          ]
        },
        {
          title: 'Trust & Proof',
          i18n: 'nav_trust_proof',
          links: [
            { label: 'Testimonials', href: '/heritage/testimonials', i18n: 'footer_testimonials' },
            { label: 'Press & Media', href: '/heritage/press', i18n: 'footer_press' }
          ]
        }
      ]
    }
  ],
  fa: [
    {
      id: 'properties',
      label: 'املاک برگزیده',
      href: '/fa/properties',
      i18n: 'nav_properties',
      toggleAria: 'باز و بستن زیرمنوی املاک',
      regionAria: 'زیرمنوی املاک',
      categories: [
        {
          title: 'برای فروش',
          i18n: 'nav_for_sale',
          links: [
            { label: 'همه املاک برای فروش', href: '/fa/properties-for-sale', i18n: 'nav_all_properties_for_sale', primary: true },
            { label: 'آپارتمان‌ها', href: '/fa/apartments-for-sale-in-dubai', i18n: 'filter_apartments' },
            { label: 'ویلاها', href: '/fa/villas-for-sale-in-dubai', i18n: 'filter_villas' },
            { label: 'پنت‌هاوس‌ها', href: '/fa/penthouses-for-sale-in-dubai', i18n: 'filter_penthouses' },
            { label: 'تاون‌هاوس‌ها', href: '/fa/townhouses-for-sale-in-dubai', i18n: 'filter_townhouses' },
            { label: 'املاک تراز اول (Trophy) ←', href: '/fa/trophy-residences', i18n: 'filter_trophy', highlight: true }
          ]
        },
        {
          title: 'برای اجاره',
          i18n: 'nav_for_rent',
          links: [
            { label: 'همه‌ی املاک برای اجاره', href: '/fa/properties-for-rent', i18n: 'nav_all_rentals', primary: true }
          ]
        },
        {
          title: 'بر اساس سبک زندگی',
          i18n: 'nav_by_lifestyle',
          links: [
            { label: 'ساحلی', href: '/fa/beachfront-properties-in-dubai', i18n: 'nav_beachfront' },
            { label: 'دید برج خلیفه', href: '/fa/burj-khalifa-view-properties', i18n: 'nav_burj_view' },
            { label: 'زمین گلف', href: '/fa/golf-course-properties-in-dubai', i18n: 'nav_golf_course' },
            { label: 'اقامتگاه‌های برند', href: '/fa/branded-residences-in-dubai', i18n: 'nav_branded_residences' },
            { label: 'املاک تجاری', href: '/fa/commercial-properties-in-dubai', i18n: 'nav_commercial' }
          ]
        }
      ]
    },
    {
      id: 'offplan',
      label: 'پیش‌فروش و آف‌پلان',
      href: '/fa/off-plan',
      i18n: 'nav_offplan',
      toggleAria: 'باز و بستن زیرمنوی پیش‌فروش',
      regionAria: 'زیرمنوی پیش‌فروش',
      categories: [
        {
          title: 'کشف پروژه‌ها',
          i18n: 'nav_discover',
          links: [
            { label: 'همه پروژه‌های پیش‌فروش', href: '/fa/off-plan/projects', i18n: 'nav_all_offplan', primary: true },
            { label: 'پروژه‌های تازه راه‌اندازی‌شده', href: '/fa/off-plan/new-launches', i18n: 'nav_new_launches' },
            { label: 'به‌زودی', href: '/fa/off-plan/coming-soon', i18n: 'nav_coming_soon' },
            { label: 'بر اساس سازنده', href: '/fa/off-plan/by-developer', i18n: 'nav_by_developer' }
          ]
        },
        {
          title: 'ابزارهای سرمایه‌گذاری',
          i18n: 'nav_investment_tools',
          links: [
            { label: 'راهنمای سرمایه‌گذاری', href: '/fa/off-plan/investment-guide', i18n: 'nav_investment_guide' },
            { label: 'محاسبه‌گر اقساط', href: '/fa/off-plan/payment-calculator', i18n: 'nav_payment_calculator' },
            { label: 'پیش‌بینی‌کننده بازدهی', href: '/fa/off-plan/roi-predictor', i18n: 'nav_roi_predictor' },
            { label: 'رهگیری اعتبار سازندگان ←', href: '/fa/off-plan/developer-reputation-tracker', i18n: 'nav_developer_tracker', highlight: true }
          ]
        }
      ]
    },
    {
      id: 'areas',
      label: 'مناطق',
      href: '/fa/areas',
      i18n: 'nav_areas',
      toggleAria: 'باز و بستن زیرمنوی مناطق',
      regionAria: 'زیرمنوی مناطق',
      categories: [
        {
          title: 'مناطق شاخص',
          i18n: 'nav_featured_areas',
          links: [
            { label: 'داون‌تاون دبی', href: '/fa/areas/downtown-dubai', i18n: 'nav_downtown_dubai', primary: true },
            { label: 'دبی هیلز استیت', href: '/fa/areas/dubai-hills-estate', i18n: 'nav_dubai_hills_estate' },
            { label: 'دبی مارینا', href: '/fa/areas/dubai-marina', i18n: 'nav_dubai_marina' },
            { label: 'بیزنس بی', href: '/fa/areas/business-bay', i18n: 'nav_business_bay' },
            { label: 'کریک هاربر', href: '/fa/areas/dubai-creek-harbour', i18n: 'nav_creek_harbour' },
            { label: 'جزیره جمیرا بی', href: '/fa/areas/jumeirah-bay-island', i18n: 'nav_jumeirah_bay_island' },
            { label: 'امارات هیلز', href: '/fa/areas/emirates-hills', i18n: 'nav_emirates_hills' },
            { label: 'همه مناطق ←', href: '/fa/areas', i18n: 'nav_all_areas', highlight: true }
          ]
        },
        {
          title: 'مقایسه با سایر شهرهای جهان',
          i18n: 'nav_city_comparisons',
          links: [
            { label: 'دبی در مقایسه با لندن', href: '/fa/areas/compare/dubai-vs-london', i18n: 'nav_dubai_vs_london' },
            { label: 'دبی در مقایسه با سنگاپور', href: '/fa/areas/compare/dubai-vs-singapore', i18n: 'nav_dubai_vs_singapore' },
            { label: 'دبی در مقایسه با نیویورک', href: '/fa/areas/compare/dubai-vs-new-york', i18n: 'nav_dubai_vs_new_york' }
          ]
        }
      ]
    },
    {
      id: 'services',
      label: 'خدمات',
      href: '/fa/services',
      i18n: 'nav_services',
      toggleAria: 'باز و بستن زیرمنوی خدمات',
      regionAria: 'زیرمنوی خدمات',
      categories: [
        {
          title: 'خرید و فروش',
          i18n: 'nav_buying_selling',
          links: [
            { label: 'مشاوره خرید', href: '/fa/services/buying', i18n: 'footer_buying', primary: true },
            { label: 'مشاوره فروش', href: '/fa/services/selling', i18n: 'nav_selling_advisory' }
          ]
        },
        {
          title: 'مدیریت و امور حقوقی',
          i18n: 'nav_management_legal',
          links: [
            { label: 'ارزشگذاری رایگان', href: '/fa/services/valuation', i18n: 'nav_free_valuation' },
            { label: 'پشتیبانی پس از فروش', href: '/fa/services/after-sales', i18n: 'nav_after_sales' }
          ]
        }
      ]
    },
    {
      id: 'insights',
      label: 'تحلیل و گزارش‌ها',
      href: '/fa/insights',
      i18n: 'nav_insights',
      toggleAria: 'باز و بستن زیرمنوی تحلیل و گزارش‌ها',
      regionAria: 'زیرمنوی تحلیل و گزارش‌ها',
      categories: [
        {
          title: 'پایگاه دانش و تحلیل',
          i18n: 'nav_content_hub',
          links: [
            { label: 'مقالات تحلیلی وبلاگ', href: '/fa/insights/blog', i18n: 'nav_blog_articles', primary: true },
            { label: 'گزارش‌های فصلی بازار', href: '/fa/insights/market-reports', i18n: 'nav_market_reports' },
            { label: 'پادکست', href: '/fa/insights/podcast', i18n: 'art_podcast_tag' },
            { label: 'راهنماهای جامع خریدار', href: '/fa/insights/guides', i18n: 'nav_buyers_guides' }
          ]
        },
        {
          title: 'ابزارها و مراجع محاسباتی',
          i18n: 'nav_tools_reference',
          links: [
            { label: 'همه ماشینحسابها', href: '/fa/insights/calculators', i18n: 'nav_all_calculators' },
            { label: 'مرکز پرسش‌های پرتکرار', href: '/fa/insights/faq', i18n: 'nav_faq_hub' },
            { label: 'واژه‌نامه اصطلاحات ملکی', href: '/fa/insights/glossary', i18n: 'nav_glossary' },
            { label: 'داده‌ها و آمار زنده بازار', href: '/fa/insights/market-data', i18n: 'nav_market_data' }
          ]
        }
      ]
    },
    {
      id: 'heritage',
      label: 'اصالت و پیشینه',
      href: '/fa/heritage',
      i18n: 'nav_heritage',
      toggleAria: 'باز و بستن زیرمنوی اصالت و پیشینه',
      regionAria: 'زیرمنوی اصالت و پیشینه',
      categories: [
        {
          title: 'درباره زرین',
          i18n: 'nav_about_zarin',
          links: [
            { label: 'داستان ما (از سال ۲۰۰۵)', href: '/fa/heritage', i18n: 'nav_our_story', primary: true },
            { label: 'پیام مؤسس مجموعه', href: '/fa/heritage/founder', i18n: 'nav_founders_letter' },
            { label: 'تیم متخصصان', href: '/fa/heritage/team', i18n: 'nav_team' },
            { label: 'پروفایل نویسندگان', href: '/fa/heritage/authors', i18n: 'nav_authors' }
          ]
        },
        {
          title: 'اعتبار و سوابق اثبات‌شده',
          i18n: 'nav_trust_proof',
          links: [
            { label: 'نظرات موکلان', href: '/fa/heritage/testimonials', i18n: 'footer_testimonials' },
            { label: 'رسانه‌ها و مطبوعات', href: '/fa/heritage/press', i18n: 'footer_press' }
          ]
        }
      ]
    }
  ]
};
