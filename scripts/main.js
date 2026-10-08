import { translations, setLanguage as i18nSetLanguage, getCurrentLanguage } from './i18n.js';
import { propertiesData, formatCurrency } from './properties.js';
import { initMotion } from './motion.js';
import { initConsultation } from './consultation.js';
import { initLifestyle } from './lifestyle.js';
import { startLiveRatesPolling, subscribeToRates, liveRates } from './rates.js';

let currentLang = getCurrentLanguage();
let currentCurrency = 'AED';
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

  initCurrencyDropdown();
}

export function setCurrency(code) {
  if (!code) return;
  currentCurrency = code;

  // 1. Update all dropdown trigger labels
  document.querySelectorAll('.currency-trigger-code').forEach(el => {
    el.textContent = code;
  });

  // 2. Update active states on custom dropdown options
  document.querySelectorAll('.currency-option').forEach(opt => {
    opt.classList.toggle('is-active', opt.dataset.value === code);
  });

  // 3. Update drawer currency pills
  document.querySelectorAll('.drawer-curr-pill').forEach(pill => {
    pill.classList.toggle('is-active', pill.dataset.currencyVal === code);
  });

  // 4. Update native select if present for backward compatibility
  document.querySelectorAll('.currency-select').forEach(sel => {
    sel.value = code;
  });

  // 5. Re-render all property listings with newly selected currency
  renderProperties();
}

function initCurrencyDropdown() {
  const dropdowns = document.querySelectorAll('[data-currency-dropdown]');

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.currency-trigger');
    const options = dropdown.querySelectorAll('.currency-option');

    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      dropdowns.forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('is-open');
          other.querySelector('.currency-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });
    });

    options.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = opt.dataset.value;
        if (val) {
          setCurrency(val);
          dropdown.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  // Drawer currency pills support
  document.querySelectorAll('.drawer-curr-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const val = pill.dataset.currencyVal;
      if (val) {
        setCurrency(val);
      }
    });
  });

  // Native select change event fallback
  document.querySelectorAll('.currency-select').forEach(select => {
    select.addEventListener('change', (e) => {
      setCurrency(e.target.value);
    });
  });

  // Close dropdowns on click outside
  document.addEventListener('click', () => {
    dropdowns.forEach(d => {
      d.classList.remove('is-open');
      d.querySelector('.currency-trigger')?.setAttribute('aria-expanded', 'false');
    });
  });

  // Close dropdowns on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach(d => {
        d.classList.remove('is-open');
        d.querySelector('.currency-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

export function setLanguage(lang) {
  currentLang = lang;
  i18nSetLanguage(lang);
  renderProperties();
  updateLiveBadge(liveRates);
}

// Live Rates Controller (TGJU.org WebSocket/Poller)
function initLiveRates() {
  // Poll TGJU live rates every 30 seconds for balanced freshness and performance.
  startLiveRatesPolling(30000);

  subscribeToRates((rates) => {
    updateLiveBadge(rates);
    // If user is currently viewing IRR, USD, or EUR, re-render to reflect live price ticks
    if (currentCurrency === 'IRR' || currentCurrency === 'USD' || currentCurrency === 'EUR') {
      renderProperties();
    }
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
    badgeTextEl.textContent = `TGJU زنده: ۱ درهم = ${rates.aed_irr.toLocaleString('fa-IR')} ریال (${rates.last_updated || 'هم‌اکنون'})`;
  } else {
    badgeTextEl.textContent = `TGJU Live: 1 AED = ${rates.aed_irr.toLocaleString('en-US')} IRR (${rates.last_updated_en || 'Live'})`;
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
    const formattedPrice = formatCurrency(item.price_aed, currentCurrency, currentLang);
    const tgjuNote = currentCurrency === 'IRR'
      ? (liveRates.aed_irr
        ? `<span class="currency-tgju-tag" style="font-size: 0.68rem; color: var(--color-gold-base); display: block; margin-top: 0.35rem; font-weight: 500;">${isRtl ? `معادل‌سازی لحظه‌ای TGJU: ۱ درهم = ${liveRates.aed_irr.toLocaleString('fa-IR')} ریال (${liveRates.last_updated || 'هم‌اکنون'})` : `Real-time TGJU feed: 1 AED = ${liveRates.aed_irr.toLocaleString('en-US')} IRR (${liveRates.last_updated_en || 'Live'})`}</span>`
        : `<span class="currency-tgju-tag" style="font-size: 0.65rem; color: rgba(200, 171, 131, 0.75); display: block; margin-top: 0.35rem; font-weight: 400;">${isRtl ? 'در انتظار دریافت نرخ از TGJU.org...' : 'Connecting to TGJU.org...'}</span>`)
      : (currentCurrency === 'USD' || currentCurrency === 'EUR')
      ? `<span class="currency-tgju-tag" style="font-size: 0.65rem; color: rgba(200, 171, 131, 0.75); display: block; margin-top: 0.35rem; font-weight: 400;">${isRtl ? `برابری ارزی متصل به TGJU.org (${liveRates.last_updated || 'لحظه‌ای'})` : `Live cross-rate via TGJU.org (${liveRates.last_updated_en || 'Live'})`}</span>`
      : '';

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
              <span class="price-main">${formattedPrice}</span>
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

  // Update hero teaser price
  const heroPriceEl = document.getElementById('hero-teaser-price');
  if (heroPriceEl) {
    heroPriceEl.textContent = formatCurrency(32500000, currentCurrency, currentLang);
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
