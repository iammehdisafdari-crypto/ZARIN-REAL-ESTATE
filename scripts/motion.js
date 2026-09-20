/**
 * ZARIN — Motion & Scroll Dynamics
 */

export function initMotion() {
  // 1. Scroll-Triggered Reveals
  const revealElements = document.querySelectorAll(".reveal-up");
  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("is-revealed"));
  }

  // 2. Header Dynamics on Scroll
  const header = document.querySelector(".site-header");
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add("is-scrolled");
    } else {
      header?.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // 3. Editorial Navigation Drawer
  const navToggles = document.querySelectorAll(".nav-toggle-btn, .mobile-toggle, [data-nav-toggle]");
  const siteDrawer = document.querySelector(".site-drawer, .mobile-drawer");
  const drawerCloseBtns = document.querySelectorAll("[data-drawer-close]");
  const drawerLinks = document.querySelectorAll(".drawer-nav-link, .mobile-nav-link");

  const openDrawer = () => {
    if (!siteDrawer) return;
    siteDrawer.classList.add("is-active");
    siteDrawer.setAttribute("aria-hidden", "false");
    navToggles.forEach(t => {
      t.classList.add("is-open");
      t.setAttribute("aria-expanded", "true");
    });
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    if (!siteDrawer) return;
    siteDrawer.classList.remove("is-active");
    siteDrawer.setAttribute("aria-hidden", "true");
    navToggles.forEach(t => {
      t.classList.remove("is-open");
      t.setAttribute("aria-expanded", "false");
    });
    document.body.style.overflow = "";
  };

  navToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const isActive = siteDrawer?.classList.contains("is-active");
      if (isActive) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  });

  drawerCloseBtns.forEach(btn => {
    btn.addEventListener("click", closeDrawer);
  });

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && siteDrawer?.classList.contains("is-active")) {
      closeDrawer();
    }
  });
}
