/**
 * ZARIN — Consultation & Private Advisory Lead Engine
 */

export function initConsultation() {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalCloseBtn = document.querySelector(".modal-close-btn");
  const consultationTriggers = document.querySelectorAll("[data-open-consultation]");
  const intakeForm = document.getElementById("intake-form");
  const modalForm = document.getElementById("modal-consultation-form");

  // Open Modal
  const openModal = (e) => {
    if (e) e.preventDefault();
    if (modalBackdrop) {
      modalBackdrop.classList.add("is-active");
      document.body.style.overflow = "hidden";
    }
  };

  // Close Modal
  const closeModal = () => {
    if (modalBackdrop) {
      modalBackdrop.classList.remove("is-active");
      document.body.style.overflow = "";
    }
  };

  consultationTriggers.forEach(btn => {
    btn.addEventListener("click", openModal);
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Escape key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop?.classList.contains("is-active")) {
      closeModal();
    }
  });

  // Handle In-Page Intake Form
  if (intakeForm) {
    intakeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("intake-name")?.value || "";
      const contact = document.getElementById("intake-contact")?.value || "";
      const intent = document.getElementById("intake-intent")?.value || "";
      const budget = document.getElementById("intake-budget")?.value || "";

      // Show refined success feedback
      const submitBtn = intakeForm.querySelector("button[type='submit']");
      if (submitBtn) {
        const isFa = document.documentElement.lang === 'fa';
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>${isFa ? '✓ درخواست مشاوره ثبت شد' : '✓ Consultation Requested'}</span>`;
        submitBtn.style.backgroundColor = "#10B981";
        submitBtn.style.color = "#FFFFFF";

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.backgroundColor = "";
          submitBtn.style.color = "";
          intakeForm.reset();
        }, 4000);
      }
    });
  }

  // Handle Modal Form
  if (modalForm) {
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = modalForm.querySelector("button[type='submit']");
      if (submitBtn) {
        const isFa = document.documentElement.lang === 'fa';
        submitBtn.innerHTML = `<span>${isFa ? '✓ درخواست تایید شد' : '✓ Request Confirmed'}</span>`;
        submitBtn.style.backgroundColor = "#10B981";
        submitBtn.style.color = "#FFFFFF";

        setTimeout(() => {
          closeModal();
          modalForm.reset();
          submitBtn.innerHTML = `<span>${isFa ? 'رزرو مشاوره اختصاصی' : 'Schedule Private Consultation'}</span>`;
          submitBtn.style.backgroundColor = "";
          submitBtn.style.color = "";
        }, 1800);
      }
    });
  }

  // WhatsApp Concierge Link Builder
  const whatsappButtons = document.querySelectorAll("[data-whatsapp-concierge]");
  whatsappButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const currentLang = document.documentElement.lang || "en";
      const intentSelect = document.getElementById("intake-intent");
      const budgetSelect = document.getElementById("intake-budget");
      
      let intentText = "";
      if (intentSelect && intentSelect.value) {
        intentText = intentSelect.options[intentSelect.selectedIndex]?.text || "";
      }

      let budgetText = "";
      if (budgetSelect && budgetSelect.value) {
        budgetText = budgetSelect.options[budgetSelect.selectedIndex]?.text || "";
      }

      let message = "";
      if (currentLang === "fa") {
        message = `درود. مایل به دریافت مشاوره اختصاصی و محرمانه با مشاور ارشد زرین دبی هستم.\n` +
          (intentText ? `• هدف: ${intentText}\n` : "") +
          (budgetText ? `• بودجه مد نظر: ${budgetText}\n` : "");
      } else {
        message = `Hello. I would like to arrange a confidential private consultation with a senior ZARIN advisor regarding Dubai prime opportunities.\n` +
          (intentText ? `• Objective: ${intentText}\n` : "") +
          (budgetText ? `• Investment Level: ${budgetText}\n` : "");
      }
      
      const encodedMsg = encodeURIComponent(message.trim());
      // Official WhatsApp Concierge Line
      window.open(`https://wa.me/971586901231?text=${encodedMsg}`, "_blank");
    });
  });
}
