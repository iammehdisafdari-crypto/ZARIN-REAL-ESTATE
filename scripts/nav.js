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
}

export function initDesktopNav() {
  // Desktop Properties dropdown toggle & keyboard accessibility
  const propNavTrigger = document.querySelector('.mega-menu-trigger.group\\/prop');
  const propNavToggle = document.getElementById('properties-nav-toggle');

  if (propNavToggle && propNavTrigger && !propNavToggle.dataset.boundNav) {
    propNavToggle.dataset.boundNav = 'true';
    propNavToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = propNavTrigger.classList.contains('is-open');
      if (isOpen) {
        propNavTrigger.classList.remove('is-open');
        propNavTrigger.classList.add('is-closed');
        propNavToggle.setAttribute('aria-expanded', 'false');
      } else {
        propNavTrigger.classList.add('is-open');
        propNavTrigger.classList.remove('is-closed');
        propNavToggle.setAttribute('aria-expanded', 'true');
      }
    });

    propNavTrigger.addEventListener('mouseleave', () => {
      propNavTrigger.classList.remove('is-closed');
    });

    document.addEventListener('click', (e) => {
      if (!propNavTrigger.contains(e.target)) {
        propNavTrigger.classList.remove('is-open', 'is-closed');
        propNavToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && propNavTrigger.classList.contains('is-open')) {
        propNavTrigger.classList.remove('is-open');
        propNavTrigger.classList.add('is-closed');
        propNavToggle.setAttribute('aria-expanded', 'false');
        propNavToggle.focus();
      }
    });
  }

  // Desktop Off-Plan dropdown toggle & keyboard accessibility
  const offplanNavTrigger = document.querySelector('.mega-menu-trigger.group\\/offplan');
  const offplanNavToggle = document.getElementById('offplan-nav-toggle');

  if (offplanNavToggle && offplanNavTrigger && !offplanNavToggle.dataset.boundNav) {
    offplanNavToggle.dataset.boundNav = 'true';
    offplanNavToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = offplanNavTrigger.classList.contains('is-open');
      if (isOpen) {
        offplanNavTrigger.classList.remove('is-open');
        offplanNavTrigger.classList.add('is-closed');
        offplanNavToggle.setAttribute('aria-expanded', 'false');
      } else {
        offplanNavTrigger.classList.add('is-open');
        offplanNavTrigger.classList.remove('is-closed');
        offplanNavToggle.setAttribute('aria-expanded', 'true');
      }
    });

    offplanNavTrigger.addEventListener('mouseleave', () => {
      offplanNavTrigger.classList.remove('is-closed');
    });

    document.addEventListener('click', (e) => {
      if (!offplanNavTrigger.contains(e.target)) {
        offplanNavTrigger.classList.remove('is-open', 'is-closed');
        offplanNavToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && offplanNavTrigger.classList.contains('is-open')) {
        offplanNavTrigger.classList.remove('is-open');
        offplanNavTrigger.classList.add('is-closed');
        offplanNavToggle.setAttribute('aria-expanded', 'false');
        offplanNavToggle.focus();
      }
    });
  }

  // Desktop Areas dropdown toggle & keyboard accessibility
  const areasNavTrigger = document.querySelector('.mega-menu-trigger.group\\/areas');
  const areasNavToggle = document.getElementById('areas-nav-toggle');

  if (areasNavToggle && areasNavTrigger && !areasNavToggle.dataset.boundNav) {
    areasNavToggle.dataset.boundNav = 'true';
    areasNavToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = areasNavTrigger.classList.contains('is-open');
      if (isOpen) {
        areasNavTrigger.classList.remove('is-open');
        areasNavTrigger.classList.add('is-closed');
        areasNavToggle.setAttribute('aria-expanded', 'false');
      } else {
        areasNavTrigger.classList.add('is-open');
        areasNavTrigger.classList.remove('is-closed');
        areasNavToggle.setAttribute('aria-expanded', 'true');
      }
    });

    areasNavTrigger.addEventListener('mouseleave', () => {
      areasNavTrigger.classList.remove('is-closed');
    });

    document.addEventListener('click', (e) => {
      if (!areasNavTrigger.contains(e.target)) {
        areasNavTrigger.classList.remove('is-open', 'is-closed');
        areasNavToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && areasNavTrigger.classList.contains('is-open')) {
        areasNavTrigger.classList.remove('is-open');
        areasNavTrigger.classList.add('is-closed');
        areasNavToggle.setAttribute('aria-expanded', 'false');
        areasNavToggle.focus();
      }
    });
  }

  // Desktop Private Office dropdown toggle & keyboard accessibility
  const poNavTrigger = document.querySelector('.mega-menu-trigger.group\\/po');
  const poNavToggle = document.getElementById('private-office-nav-toggle');

  if (poNavToggle && poNavTrigger && !poNavToggle.dataset.boundNav) {
    poNavToggle.dataset.boundNav = 'true';
    poNavToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = poNavTrigger.classList.contains('is-open');
      if (isOpen) {
        poNavTrigger.classList.remove('is-open');
        poNavTrigger.classList.add('is-closed');
        poNavToggle.setAttribute('aria-expanded', 'false');
      } else {
        poNavTrigger.classList.add('is-open');
        poNavTrigger.classList.remove('is-closed');
        poNavToggle.setAttribute('aria-expanded', 'true');
      }
    });

    poNavTrigger.addEventListener('mouseleave', () => {
      poNavTrigger.classList.remove('is-closed');
    });

    document.addEventListener('click', (e) => {
      if (!poNavTrigger.contains(e.target)) {
        poNavTrigger.classList.remove('is-open', 'is-closed');
        poNavToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && poNavTrigger.classList.contains('is-open')) {
        poNavTrigger.classList.remove('is-open');
        poNavTrigger.classList.add('is-closed');
        poNavToggle.setAttribute('aria-expanded', 'false');
        poNavToggle.focus();
      }
    });
  }

  // Mega menu accessibility for other items
  document.querySelectorAll('.mega-menu-trigger:not(.group\\/prop):not(.group\\/offplan):not(.group\\/areas):not(.group\\/po)').forEach(trigger => {
    const button = trigger.querySelector('button');
    if (button && !button.dataset.boundNav) {
      button.dataset.boundNav = 'true';
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        }
      });
    }
  });

  // Header scroll blur effect
  const header = document.getElementById('site-header');
  if (header && !header.dataset.boundScroll) {
    header.dataset.boundScroll = 'true';
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
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

export function initFaqAccordion() {
  const details = document.querySelectorAll('details');
  details.forEach(detail => {
    if (!detail.dataset.boundFaq) {
      detail.dataset.boundFaq = 'true';
      detail.addEventListener('toggle', () => {
        if (detail.open) {
          details.forEach(d => { if (d !== detail) d.open = false; });
        }
      });
    }
  });
}

export function initNavigation() {
  initMobileNav();
  initDesktopNav();
  initFaqAccordion();
}

// Auto-initialize when loaded
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
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
    initNavigation
  };
}
