/**
 * ZARIN Real Estate — Universal Navigation Controller
 * Handles mobile drawer toggling, accordion submenus, keyboard accessibility,
 * and bfcache page restorations across all site pages.
 */

export function initMobileNav(doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc) return;
  const win = doc.defaultView || (typeof window !== 'undefined' ? window : null);
  const mobileMenuToggle = doc.getElementById('mobile-menu-toggle');
  const mobileMenuClose = doc.getElementById('mobile-menu-close');
  const mobileMenu = doc.getElementById('mobile-menu');

  if (!mobileMenu || !mobileMenuToggle) return;

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    if (doc.body) doc.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    if (doc.body) doc.body.style.overflow = '';
  }

  function toggleMenu() {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Ensure clean initial state
  closeMenu();

  // Bind hamburger button toggle (idempotent)
  if (!mobileMenuToggle.dataset.boundNav) {
    mobileMenuToggle.dataset.boundNav = 'true';
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Bind drawer close button
  if (mobileMenuClose && !mobileMenuClose.dataset.boundNav) {
    mobileMenuClose.dataset.boundNav = 'true';
    mobileMenuClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Bind all navigation links inside mobile menu: close drawer on navigation
  mobileMenu.querySelectorAll('a').forEach(link => {
    if (!link.dataset.boundNav) {
      link.dataset.boundNav = 'true';
      link.addEventListener('click', () => {
        closeMenu();
      });
    }
  });

  // Tap outside mobile drawer to close
  if (!doc.documentElement.dataset.boundNavOutside) {
    doc.documentElement.dataset.boundNavOutside = 'true';
    doc.addEventListener('click', (e) => {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Escape key closes mobile menu
    doc.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
        mobileMenuToggle.focus();
      }
    });

    // BFCache / History Navigation restoration handler
    if (win) {
      win.addEventListener('pageshow', () => {
        closeMenu();
      });
    }
  }

  // Universal Mobile Accordion Toggle Handler (all 8 items)
  doc.querySelectorAll('.mobile-nav-item').forEach(item => {
    const toggle = item.querySelector('button[id$="-toggle"]');
    const submenu = item.querySelector('div[id$="-submenu"]');
    if (toggle && submenu && !toggle.dataset.boundNav) {
      toggle.dataset.boundNav = 'true';
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        submenu.classList.toggle('hidden', isExpanded);
      });
    }
  });

  // Normalize internal links in mobile drawer to guarantee absolute root paths
  mobileMenu.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:')) {
      a.setAttribute('href', '/' + href);
    }
  });
}

export function initDesktopNav(doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc) return;
  const win = doc.defaultView || (typeof window !== 'undefined' ? window : null);

  // Normalize all internal header links to prevent unwanted relative paths (e.g. /consultation/properties)
  doc.querySelectorAll('#site-header nav a, .site-header nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:')) {
      a.setAttribute('href', '/' + href);
    }
  });

  // Canonical route mapping for universal resilient navigation fallback
  const CANONICAL_SECTION_ROUTES = {
    'properties': '/properties',
    'off-plan': '/off-plan',
    'offplan': '/off-plan',
    'areas': '/areas',
    'private office': '/private-office',
    'private-office': '/private-office',
    'services': '/services',
    'visas': '/visas',
    'insights': '/insights',
    'heritage': '/heritage'
  };

  const triggers = Array.from(doc.querySelectorAll('.mega-menu-trigger, #site-header nav > div, .site-header nav > div, header nav > div'));

  let activeTrigger = null;
  let leaveTimeout = null;

  const CLOSE_DELAY = 200; // Configurable debounce delay (150-250ms) per UX standard

  function clearPendingClose() {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      leaveTimeout = null;
    }
  }

  function closeTrigger(trigger) {
    if (!trigger) return;
    trigger.classList.remove('is-open');
    trigger.classList.remove('is-closed');
    const toggleBtn = trigger.querySelector('.mega-menu-toggle-btn') || trigger.querySelector('button[id$="-toggle"]');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    const panel = trigger.querySelector('.mega-menu-panel');
    if (panel) {
      panel.classList.remove('is-open');
    }
    if (activeTrigger === trigger) {
      activeTrigger = null;
    }
  }

  function closeAllTriggers(exceptTrigger = null) {
    triggers.forEach(trigger => {
      if (trigger !== exceptTrigger) {
        closeTrigger(trigger);
      }
    });
  }

  function openTrigger(trigger) {
    if (!trigger) return;
    clearPendingClose();

    // Close all other open triggers first
    closeAllTriggers(trigger);

    trigger.classList.add('is-open');
    trigger.classList.remove('is-closed');
    const toggleBtn = trigger.querySelector('.mega-menu-toggle-btn') || trigger.querySelector('button[id$="-toggle"]');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    const panel = trigger.querySelector('.mega-menu-panel');
    if (panel) {
      panel.classList.add('is-open');
    }
    activeTrigger = trigger;
  }

  function scheduleClose(trigger) {
    clearPendingClose();
    leaveTimeout = setTimeout(() => {
      closeTrigger(trigger);
    }, CLOSE_DELAY);
  }

  triggers.forEach(trigger => {
    const toggleBtn = trigger.querySelector('.mega-menu-toggle-btn') || trigger.querySelector('button[id$="-toggle"]');
    const primaryLink = trigger.querySelector(':scope > a') || trigger.querySelector('a[id$="-link"]');
    const panel = trigger.querySelector('.mega-menu-panel');

    // 1. Mouse enters a trigger: cancel pending close, open this menu, close others
    trigger.addEventListener('mouseenter', () => {
      clearPendingClose();
      if (panel) {
        openTrigger(trigger);
      } else {
        closeAllTriggers();
      }
    });

    trigger.addEventListener('pointerenter', () => {
      clearPendingClose();
      if (panel) {
        openTrigger(trigger);
      } else {
        closeAllTriggers();
      }
    });

    // 2. Mouse leaves trigger: schedule close ONLY if pointer genuinely leaves trigger & panel
    trigger.addEventListener('mouseleave', (e) => {
      trigger.classList.remove('is-closed');
      const related = e.relatedTarget;
      if (related && (trigger.contains(related) || (panel && panel.contains(related)))) {
        return; // still moving within trigger or entering dropdown panel
      }
      scheduleClose(trigger);
    });

    // 3. Panel coordination: ensure moving into/within panel keeps menu open and cancels any pending close
    if (panel) {
      panel.addEventListener('mouseenter', () => {
        clearPendingClose();
        openTrigger(trigger);
      });

      panel.addEventListener('pointerenter', () => {
        clearPendingClose();
        openTrigger(trigger);
      });

      panel.addEventListener('mouseleave', (e) => {
        const related = e.relatedTarget;
        if (related && (trigger.contains(related) || panel.contains(related))) {
          return; // moving back to trigger button or between submenu elements
        }
        scheduleClose(trigger);
      });
    }

    // 4. Toggle button click (if present)
    if (toggleBtn && !toggleBtn.dataset.boundNav) {
      toggleBtn.dataset.boundNav = 'true';
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (trigger.classList.contains('is-open')) {
          closeTrigger(trigger);
          trigger.classList.add('is-closed');
        } else {
          openTrigger(trigger);
        }
      });
    }

    // 5. Focus enters trigger: open this trigger and close others
    trigger.addEventListener('focusin', () => {
      if (trigger.classList.contains('is-closed')) return;
      clearPendingClose();
      if (panel) {
        openTrigger(trigger);
      } else {
        closeAllTriggers();
      }
    });

    trigger.addEventListener('focusout', (e) => {
      const related = e.relatedTarget;
      if (!related || (!trigger.contains(related) && (!panel || !panel.contains(related)))) {
        trigger.classList.remove('is-closed');
        scheduleClose(trigger);
      }
    });

    // 5. ArrowDown key on primary link opens panel and focuses first item
    if (primaryLink && !primaryLink.dataset.boundNavKey) {
      primaryLink.dataset.boundNavKey = 'true';
      primaryLink.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' && panel) {
          e.preventDefault();
          openTrigger(trigger);
          const firstLink = panel.querySelector('a');
          if (firstLink) firstLink.focus();
        }
      });
    }

    // 6. When any link inside the panel is clicked: close all menus immediately
    if (panel) {
      panel.querySelectorAll('a').forEach(link => {
        if (!link.dataset.boundPanelLink) {
          link.dataset.boundPanelLink = 'true';
          link.addEventListener('click', () => {
            closeAllTriggers();
          });
        }
      });
    }

    // 7. Defensive fallback for button-only triggers
    const buttonOnly = trigger.querySelector(':scope > button:not(.mega-menu-toggle-btn)');
    if (buttonOnly && !primaryLink && !buttonOnly.dataset.boundFallback) {
      buttonOnly.dataset.boundFallback = 'true';
      const rawText = buttonOnly.textContent.replace(/[\n\r]+/g, ' ').trim().toLowerCase();
      let matchedRoute = buttonOnly.getAttribute('data-href');
      if (!matchedRoute) {
        for (const [key, route] of Object.entries(CANONICAL_SECTION_ROUTES)) {
          if (rawText.startsWith(key)) {
            matchedRoute = route;
            break;
          }
        }
      }
      if (matchedRoute) {
        const isFa = doc.documentElement.lang === 'fa' || (win && win.location && (win.location.pathname === '/fa' || win.location.pathname.startsWith('/fa/') || win.location.pathname.startsWith('/fa.')));
        const finalRoute = (isFa && !matchedRoute.startsWith('/fa')) ? ('/fa' + matchedRoute) : matchedRoute;
        buttonOnly.dataset.fallbackRoute = finalRoute;
        buttonOnly.addEventListener('click', (e) => {
          if (win && win.location) {
            win.location.href = finalRoute;
          }
        });
      }
    }
  });

  // Global outside click & Escape handling
  if (!doc.documentElement.dataset.boundDesktopOutside) {
    doc.documentElement.dataset.boundDesktopOutside = 'true';
    doc.addEventListener('click', (e) => {
      const clickedInsideTrigger = triggers.some(t => t.contains(e.target));
      if (!clickedInsideTrigger) {
        closeAllTriggers();
      }
    });

    doc.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openTrig = triggers.find(t => t.classList.contains('is-open'));
        if (openTrig) {
          closeAllTriggers();
          openTrig.classList.add('is-closed');
          const toggleBtn = openTrig.querySelector('.mega-menu-toggle-btn') || openTrig.querySelector('button[id$="-toggle"]');
          if (toggleBtn) {
            toggleBtn.focus();
          } else {
            const link = openTrig.querySelector('a');
            if (link) link.focus();
          }
        }
      }
    });
  }

  // Header scroll blur effect
  const header = doc.getElementById('site-header');
  if (header && win && !header.dataset.boundScroll) {
    header.dataset.boundScroll = 'true';
    let ticking = false;
    win.addEventListener('scroll', () => {
      if (!ticking) {
        win.requestAnimationFrame(() => {
          if (win.scrollY > 40) {
            header.style.backgroundColor = 'rgba(10, 11, 14, 0.92)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.webkitBackdropFilter = 'blur(20px)';
            header.style.borderBottomColor = 'rgba(200, 171, 131, 0.2)';
            header.style.padding = '0.75rem 0';
          } else {
            header.style.backgroundColor = 'rgba(10, 11, 14, 0.55)';
            header.style.backdropFilter = 'blur(16px)';
            header.style.webkitBackdropFilter = 'blur(16px)';
            header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
            header.style.padding = '1.15rem 0';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
}

export function initFaqAccordion(doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc) return;

  const detailsList = doc.querySelectorAll('details');
  if (!detailsList.length) return;

  const win = doc.defaultView || (typeof window !== 'undefined' ? window : null);
  const prefersReduced = () => {
    try {
      return !!(win && win.matchMedia && win.matchMedia('(prefers-reduced-motion: reduce)').matches);
    } catch (_) {
      return false;
    }
  };

  detailsList.forEach((detail, index) => {
    if (detail.dataset.faqEnhanced === 'true') return;
    detail.dataset.faqEnhanced = 'true';

    const summary = detail.querySelector('summary');
    if (!summary) return;

    let answer = detail.querySelector('[itemprop="acceptedAnswer"]');
    if (!answer) {
      for (let i = 0; i < detail.children.length; i++) {
        const child = detail.children[i];
        if (child !== summary && !child.classList?.contains('faq-accordion-panel')) {
          answer = child;
          break;
        }
      }
    }
    if (!answer) return;

    // Wrap answer into panel and content containers if not already wrapped
    let panel = detail.querySelector(':scope > .faq-accordion-panel');
    let content = panel ? panel.querySelector(':scope > .faq-accordion-content') : null;

    if (!panel) {
      panel = doc.createElement('div');
      panel.className = 'faq-accordion-panel';

      content = doc.createElement('div');
      content.className = 'faq-accordion-content';

      detail.insertBefore(panel, answer);
      content.appendChild(answer);
      panel.appendChild(content);
    }

    // Set up stable IDs and WAI-ARIA accessibility attributes
    const panelId = answer.id || `faq-panel-${index + 1}`;
    const summaryId = summary.id || `faq-summary-${index + 1}`;

    summary.id = summaryId;
    summary.setAttribute('aria-controls', panelId);
    summary.setAttribute('role', 'button');
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', summaryId);

    if (detail.hasAttribute('open')) {
      detail.classList.add('is-open');
      panel.classList.add('is-open');
      summary.setAttribute('aria-expanded', 'true');
    } else {
      detail.classList.remove('is-open', 'is-closing');
      panel.classList.remove('is-open');
      summary.setAttribute('aria-expanded', 'false');
    }

    const closeItem = (d, p, s, isReduced = prefersReduced()) => {
      if (!d.hasAttribute('open') && !d.classList.contains('is-open')) return;

      s.setAttribute('aria-expanded', 'false');
      d.classList.remove('is-open');
      p.classList.remove('is-open');

      if (isReduced) {
        d.removeAttribute('open');
        d.classList.remove('is-closing');
        return;
      }

      d.classList.add('is-closing');

      let closed = false;
      const finishClose = () => {
        if (closed) return;
        closed = true;
        p.removeEventListener('transitionend', onTransitionEnd);
        clearTimeout(fallbackTimer);
        d.removeAttribute('open');
        d.classList.remove('is-closing');
      };

      const onTransitionEnd = (e) => {
        if (e.target === p && (!e.propertyName || e.propertyName === 'grid-template-rows')) {
          finishClose();
        }
      };

      p.addEventListener('transitionend', onTransitionEnd);
      const fallbackTimer = setTimeout(finishClose, 320);
    };

    const openItem = (d, p, s, isReduced = prefersReduced()) => {
      // Single-open accordion: close open siblings in same container
      const parent = d.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll('details');
        siblings.forEach(sibling => {
          if (sibling !== d && (sibling.hasAttribute('open') || sibling.classList.contains('is-open'))) {
            const sibSummary = sibling.querySelector('summary');
            const sibPanel = sibling.querySelector(':scope > .faq-accordion-panel');
            if (sibSummary && sibPanel) {
              closeItem(sibling, sibPanel, sibSummary, isReduced);
            } else {
              sibling.removeAttribute('open');
            }
          }
        });
      }

      if (isReduced) {
        d.setAttribute('open', '');
        d.classList.add('is-open');
        d.classList.remove('is-closing');
        p.classList.add('is-open');
        s.setAttribute('aria-expanded', 'true');
        return;
      }

      d.classList.remove('is-closing');
      d.setAttribute('open', '');

      // Force layout calculation if in DOM
      if (typeof p.offsetHeight === 'number') {
        void p.offsetHeight;
      }

      d.classList.add('is-open');
      p.classList.add('is-open');
      s.setAttribute('aria-expanded', 'true');
    };

    const handleToggle = (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      const isReduced = prefersReduced();
      const isOpen = detail.classList.contains('is-open') && !detail.classList.contains('is-closing');

      if (isOpen) {
        closeItem(detail, panel, summary, isReduced);
      } else {
        openItem(detail, panel, summary, isReduced);
      }
    };

    summary.addEventListener('click', handleToggle);
    summary.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        if (typeof e.preventDefault === 'function') e.preventDefault();
        handleToggle(e);
      }
    });
  });
}

export function getCounterpartUrl(currentPath, targetLang) {
  let clean = (currentPath || '/').split('?')[0].split('#')[0];
  if (!clean.startsWith('/')) clean = '/' + clean;
  clean = clean.replace(/\/index\.html$/, '').replace(/\.html$/, '');
  if (clean === '') clean = '/';

  if (targetLang === 'fa') {
    if (clean === '/' || clean === '') return '/fa';
    if (clean === '/fa' || clean.startsWith('/fa/')) return clean;
    return '/fa' + clean;
  } else {
    if (clean === '/fa' || clean === '/fa/') return '/';
    if (clean.startsWith('/fa/')) {
      const stripped = clean.substring(3);
      return stripped || '/';
    }
    return clean;
  }
}

export function initGlobalLanguageState(doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc) return;
  const win = doc.defaultView || (typeof window !== 'undefined' ? window : null);

  let storage = null;
  try {
    storage = (win && win.localStorage) || (typeof localStorage !== 'undefined' ? localStorage : null);
  } catch (_) {
    storage = null;
  }

  let savedLang = 'en';
  try {
    if (storage) {
      savedLang = storage.getItem('zarin_lang') || doc.documentElement.lang || 'en';
    } else {
      savedLang = doc.documentElement.lang || 'en';
    }
  } catch (_) {
    savedLang = doc.documentElement.lang || 'en';
  }

  // If current URL is explicitly /fa or starts with /fa/, lock savedLang to 'fa'
  if (win && win.location) {
    const curPath = (win.location.pathname || '').replace(/\/$/, '');
    if (curPath === '/fa' || curPath.startsWith('/fa/') || curPath.startsWith('/fa.')) {
      savedLang = 'fa';
      try { if (storage) storage.setItem('zarin_lang', 'fa'); } catch (_) {}
    }
  }
  if (doc.documentElement && doc.documentElement.lang === 'fa') {
    savedLang = 'fa';
    try { if (storage) storage.setItem('zarin_lang', 'fa'); } catch (_) {}
  }

  // Maintain document dir and lang attributes
  if (doc.documentElement) {
    doc.documentElement.lang = savedLang;
    doc.documentElement.dir = savedLang === 'fa' ? 'rtl' : 'ltr';
  }

  // 1. Synchronize active state of all language switcher buttons
  doc.querySelectorAll('.lang-btn').forEach(btn => {
    const isTarget = btn.dataset.lang === savedLang;
    btn.classList.toggle('active', isTarget);
    btn.classList.toggle('is-active', isTarget);
    btn.setAttribute('aria-pressed', isTarget ? 'true' : 'false');

    if (!btn.dataset.boundLang) {
      btn.dataset.boundLang = 'true';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const l = btn.dataset.lang;
        if (!l) return;
        try {
          if (storage) {
            storage.setItem('zarin_lang', l);
          }
        } catch (_) {}

        // Route cleanly to counterpart URL across all site routes
        if (win && win.location) {
          const targetUrl = getCounterpartUrl(win.location.pathname, l);
          const curPath = (win.location.pathname || '').replace(/\/$/, '') || '/';
          const normTarget = targetUrl.replace(/\/$/, '') || '/';
          if (curPath !== normTarget) {
            win.location.href = targetUrl;
            return;
          }
        }

        if (win && win.ZARIN_I18N && typeof win.ZARIN_I18N.setLanguage === 'function') {
          win.ZARIN_I18N.setLanguage(l, { userAction: true });
        } else {
          doc.documentElement.lang = l;
          doc.documentElement.dir = l === 'fa' ? 'rtl' : 'ltr';
          initGlobalLanguageState(doc);
        }
      });
    }
  });

  // 2. Synchronize mobile language trigger label & checkmarks
  const mobileLabel = doc.getElementById('mobile-lang-label');
  if (mobileLabel) {
    mobileLabel.textContent = savedLang === 'fa' ? 'FA' : 'EN';
  }
  doc.querySelectorAll('#mobile-lang-menu .mobile-lang-check').forEach(chk => {
    const parent = chk.closest('button');
    if (parent) {
      chk.classList.toggle('hidden', parent.dataset.lang !== savedLang);
    }
  });

  // 3. Ensure all internal navigation links respect active language
  if (savedLang === 'fa') {
    doc.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
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
        !href.startsWith('/#') &&
        !href.startsWith('//')
      ) {
        if (href.includes('.') && !href.endsWith('.html')) {
          return;
        }
        if (href === '/') {
          a.setAttribute('href', '/fa');
        } else {
          a.setAttribute('href', '/fa' + href);
        }
      }
    });

    // Ensure all navigation items remain in Persian
    const faNavLabels = {
      'nav_properties': 'املاک برگزیده',
      'nav_offplan': 'پیش‌فروش و آف‌پلان',
      'nav_areas': 'مناطق',
      'nav_private_office': 'دفتر اختصاصی',
      'nav_services': 'خدمات',
      'nav_visas': 'ویزای اقامت',
      'nav_insights': 'تحلیل و گزارش‌ها',
      'nav_heritage': 'اصالت و پیشینه',
      'nav_cta': 'رزرو مشاوره'
    };
    doc.querySelectorAll('header [data-i18n], #mobile-menu [data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (faNavLabels[key]) {
        el.textContent = faNavLabels[key];
      }
    });

    // Guard Private Office specifically across header & mobile menu
    doc.querySelectorAll('header a[href*="private-office"], #mobile-menu a[href*="private-office"]').forEach(el => {
      const span = el.querySelector('span');
      if (span && (span.textContent.trim() === 'Private Office' || span.textContent.trim() === 'The Private Office')) {
        span.textContent = 'دفتر اختصاصی';
      } else if (el.textContent.trim() === 'Private Office' || el.textContent.trim() === 'The Private Office') {
        el.textContent = 'دفتر اختصاصی';
      }
    });
  } else {
    doc.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (href && (href === '/fa' || href.startsWith('/fa/'))) {
        const enHref = href === '/fa' ? '/' : href.replace(/^\/fa/, '');
        a.setAttribute('href', enHref || '/');
      }
    });
  }
}

export function initNavigation(doc = (typeof document !== 'undefined' ? document : null)) {
  initMobileNav(doc);
  initDesktopNav(doc);
  initFaqAccordion(doc);
  initGlobalLanguageState(doc);
}

// Auto-initialize when loaded
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initNavigation());
  } else {
    initNavigation();
  }
}

// Expose globally
if (typeof window !== 'undefined') {
  window.ZARIN_NAV = {
    initMobileNav,
    initDesktopNav,
    initFaqAccordion,
    initGlobalLanguageState,
    initNavigation
  };
}


