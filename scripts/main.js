import { translations, setLanguage as i18nSetLanguage, getCurrentLanguage } from './i18n.js';
import { propertiesData, formatCurrency, getDualPricing, updateAllPriceCards } from './properties.js';
import { initMotion } from './motion.js';
import { initConsultation } from './consultation.js';
import { initLifestyle } from './lifestyle.js';
import { startLiveRatesPolling, subscribeToRates, liveRates } from './rates.js';

let currentLang = getCurrentLanguage();
let currentFilter = 'all';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initProperties();
  initLifestyle();
  initMotion();
  initConsultation();
  initLiveRates();

  window.addEventListener('zarin:languageChange', (e) => {
    currentLang = e.detail.lang;
    renderProperties();
    updateAllPriceCards(currentLang);
    updateLiveBadge(liveRates);
  });
});

// Localization Controller
function initI18n() {
  const langButtons = document.querySelectorAll('.lang-btn');

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });
}

export function setCurrency() {
  // Deprecated: Currencies now follow selected site language automatically
}

export function setLanguage(lang) {
  currentLang = lang;
  i18nSetLanguage(lang);
  renderProperties();
  updateAllPriceCards(lang);
  updateLiveBadge(liveRates);
}

// Live Rates Controller (TGJU.org WebSocket/Poller)
function initLiveRates() {
  // Poll TGJU live rates every 30 seconds for balanced freshness and performance.
  startLiveRatesPolling(30000);

  subscribeToRates((rates) => {
    updateLiveBadge(rates);
    renderProperties();
    updateAllPriceCards(currentLang);
  });
}

function updateLiveBadge(rates) {
  const badgeTextEl = document.getElementById('tgju-badge-text');
  if (!badgeTextEl) return;
  const isRtl = currentLang === 'fa';
  if (!rates || !rates.aed_irr) {
    badgeTextEl.textContent = isRtl ? 'TGJU: در حال دریافت نرخ زنده...' : 'TGJU: Fetching live rate...';
    return;
  }
  if (isRtl) {
    badgeTextEl.textContent = `TGJU زنده: ۱ درهم = ${(rates.aed_irr / 10).toLocaleString('fa-IR')} تومان (${rates.last_updated || 'هم‌اکنون'})`;
  } else {
    badgeTextEl.textContent = `TGJU Live: 1 AED = ${((rates.usd_irr && rates.aed_irr) ? (rates.aed_irr / rates.usd_irr).toFixed(4) : (1 / 3.6725).toFixed(4))} USD (${rates.last_updated_en || 'Live'})`;
  }
}

// Property Showcase & Filtering
function initProperties() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      renderProperties();
    });
  });

  renderProperties();
  updateAllPriceCards(currentLang);
}

function renderProperties() {
  const container = document.getElementById('properties-container');
  if (!container) return;

  const filtered = propertiesData.filter(item => {
    if (currentFilter === 'all') return true;
    if (item.categories && Array.isArray(item.categories)) {
      return item.categories.includes(currentFilter);
    }
    return item.category === currentFilter;
  });

  const isRtl = currentLang === 'fa';

  container.innerHTML = filtered.map((item, idx) => {
    const isReverse = idx % 2 === 1;
    const title = isRtl ? item.title_fa : item.title_en;
    const location = isRtl ? item.location_fa : item.location_en;
    const status = isRtl ? item.status_fa : item.status_en;
    const thesis = isRtl ? item.thesis_fa : item.thesis_en;
    const beds = isRtl ? item.specs.beds_fa : item.specs.beds_en;
    const bua = isRtl ? item.specs.bua_fa : item.specs.bua_en;
    const yieldStrategy = isRtl ? item.specs.yield_fa : item.specs.yield_en;

    const aed = item.price_aed;
    const aedToUsd = (liveRates.aed_irr && liveRates.usd_irr) ? (liveRates.aed_irr / liveRates.usd_irr) : (1 / 3.6725);
    const usd = Math.round(aed * aedToUsd);
    const aedToIrr = liveRates.aed_irr || 730000;
    const aedToIrt = aedToIrr / 10;
    const irt = Math.round(aed * aedToIrt);

    const formattedPricePrimary = isRtl
      ? `${aed.toLocaleString('fa-IR')} درهم`
      : `AED ${aed.toLocaleString('en-US')}`;

    const formattedPriceSecondary = isRtl
      ? `معادل ${irt.toLocaleString('fa-IR')} تومان`
      : `$${usd.toLocaleString('en-US')} USD · AED ${aed.toLocaleString('en-US')}`;

    const tgjuNote = isRtl
      ? (liveRates.aed_irr
        ? `<span class="currency-tgju-tag" style="font-size: 0.68rem; color: var(--color-gold-base); display: block; margin-top: 0.35rem; font-weight: 500;">معادل‌سازی لحظه‌ای TGJU: ۱ درهم = ${(liveRates.aed_irr / 10).toLocaleString('fa-IR')} تومان (${liveRates.last_updated || 'هم‌اکنون'})</span>`
        : `<span class="currency-tgju-tag" style="font-size: 0.65rem; color: rgba(200, 171, 131, 0.75); display: block; margin-top: 0.35rem; font-weight: 400;">در انتظار دریافت نرخ از TGJU.org...</span>`)
      : (liveRates.aed_irr
        ? `<span class="currency-tgju-tag" style="font-size: 0.65rem; color: rgba(200, 171, 131, 0.75); display: block; margin-top: 0.35rem; font-weight: 400;">Live cross-rate via TGJU.org (${liveRates.last_updated_en || 'Live'})</span>`
        : '');

    return `
      <article class="property-monograph ${isReverse ? 'reverse' : ''}" style="animation-delay: ${idx * 0.06}s;">
        <div class="property-visual">
          <img class="property-img" src="${item.image}" alt="${title}" loading="lazy" />
          <span class="property-tag-badge">${status}</span>
          <span class="property-ref-tag">${item.ref}</span>
        </div>
        <div class="property-editorial">
          <div class="property-meta-top">
            <span class="property-location">${location}</span>
            <span class="property-status-indicator">
              <span class="status-dot ${item.status_type}"></span>
              ${item.status_type === 'ready' ? (isRtl ? 'آماده' : 'Ready') : (isRtl ? 'آف‌پلان' : 'Off-Plan')}
            </span>
          </div>

          <h3 class="property-name">${title}</h3>
          <p class="property-thesis">${thesis}</p>

          <div class="property-spec-grid">
            <div class="spec-item">
              <span class="spec-label">${isRtl ? 'تعداد خواب' : 'Configuration'}</span>
              <span class="spec-val">${beds}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">${isRtl ? 'مساحت زیربنا' : 'Built-up Area'}</span>
              <span class="spec-val">${bua}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">${isRtl ? 'رویکرد بازدهی' : 'Yield Thesis'}</span>
              <span class="spec-val">${yieldStrategy}</span>
            </div>
          </div>

          <div class="property-price-row">
            <div class="price-block">
              <span class="price-sub">${isRtl ? 'ارزش تخصیص' : 'Target Allocation'}</span>
              <span class="price-main stat-number">${formattedPricePrimary}</span>
              <span class="price-secondary text-xs text-slate mt-1">${formattedPriceSecondary}</span>
              ${tgjuNote}
            </div>
            <button class="btn btn-secondary" data-open-consultation>
              <span>${isRtl ? 'درخواست شناسنامه ملک' : 'Inquire Privately'}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Update hero teaser price if present
  const heroPriceEl = document.getElementById('hero-teaser-price');
  if (heroPriceEl) {
    const aedToUsd = (liveRates.aed_irr && liveRates.usd_irr) ? (liveRates.aed_irr / liveRates.usd_irr) : (1 / 3.6725);
    const usd = Math.round(32500000 * aedToUsd);
    const aedToIrr = liveRates.aed_irr || 730000;
    const irt = Math.round(32500000 * (aedToIrr / 10));
    heroPriceEl.innerHTML = isRtl
      ? `<span>۳۲,۵۰۰,۰۰۰ درهم</span><span class="block text-xs text-slate mt-0.5">معادل ${irt.toLocaleString('fa-IR')} تومان</span>`
      : `<span>AED 32,500,000</span><span class="block text-xs text-slate mt-0.5">$${usd.toLocaleString('en-US')} USD · AED 32,500,000</span>`;
  }

  // Re-bind modal triggers for newly inserted buttons
  const newTriggers = container.querySelectorAll('[data-open-consultation]');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  newTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalBackdrop?.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });
}
