/**
 * ZARIN — Lifestyle Section Interaction Controller
 * Connects: Lifestyle Chapter → Location → Property Inventory
 */

export function initLifestyle() {
  const chapterButtons = document.querySelectorAll('.chapter-nav-btn');
  const scenes = document.querySelectorAll('.lifestyle-scene');
  const propertyLinks = document.querySelectorAll('[data-lifestyle-category]');

  if (!scenes.length) return;

  // 1. Chapter Scroll Tracking via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -40% 0px',
    threshold: 0.2
  };

  const sceneObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sceneId = entry.target.id;
        const chapterNum = entry.target.dataset.chapter;

        // Update active navigation button
        chapterButtons.forEach(btn => {
          const isActive = btn.dataset.target === sceneId;
          btn.classList.toggle('is-active', isActive);
          if (isActive) {
            // Scroll nav into view if overflowed on mobile
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        });
      }
    });
  }, observerOptions);

  scenes.forEach(scene => sceneObserver.observe(scene));

  // 2. Click Navigation on Chapter Buttons
  chapterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.dataset.target;
      const targetScene = document.getElementById(targetId);
      if (targetScene) {
        const headerOffset = 110;
        const elementPosition = targetScene.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. Direct Connection: Lifestyle → Property Portfolio Filter
  propertyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const category = link.dataset.lifestyleCategory;
      const targetFilterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
      
      if (targetFilterBtn) {
        // Trigger the filter button click
        targetFilterBtn.click();
      }

      // Smooth scroll to property section
      const propSection = document.getElementById('properties');
      if (propSection) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = propSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
