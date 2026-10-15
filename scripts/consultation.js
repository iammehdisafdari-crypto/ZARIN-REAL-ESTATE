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

  // Also initialize full page consultation form if present
  initConsultationPageForm();
}

/**
 * Full page consultation form engine with accessible validation,
 * state handling, duplicate prevention, and backend dispatch.
 */
export function initConsultationPageForm(doc = (typeof document !== "undefined" ? document : null)) {
  if (!doc) return;
  const form = doc.getElementById("consultation-form");
  if (!form || form.dataset.boundConsultation) return;
  form.dataset.boundConsultation = "true";

  const nameInput = doc.getElementById("name");
  const emailInput = doc.getElementById("email");
  const phoneInput = doc.getElementById("phone");
  const nationalityInput = doc.getElementById("nationality");
  const budgetInput = doc.getElementById("budget");
  const interestInput = doc.getElementById("interest");
  const messageInput = doc.getElementById("message");
  const submitBtn = doc.getElementById("consultation-submit-btn");
  const btnText = doc.getElementById("btn-text");
  const btnSpinner = doc.getElementById("btn-spinner");
  const formStatus = doc.getElementById("form-status");

  const nameError = doc.getElementById("name-error");
  const emailError = doc.getElementById("email-error");
  const phoneError = doc.getElementById("phone-error");

  let hasAttemptedSubmit = false;
  let isSubmitting = false;

  const isFa = () => (doc.documentElement.lang === "fa");

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim());
  }

  function validatePhone(val) {
    const cleaned = val.replace(/[\s\-\(\)\.]/g, "");
    return cleaned.length >= 7 && /^[\+]?[0-9]{7,15}$/.test(cleaned);
  }

  function setError(input, errorEl, message) {
    if (!input || !errorEl) return;
    input.classList.remove("border-white-line");
    input.classList.add("border-danger");
    input.setAttribute("aria-invalid", "true");
    errorEl.textContent = message;
    errorEl.classList.remove("hidden");
  }

  function clearError(input, errorEl) {
    if (!input || !errorEl) return;
    input.classList.remove("border-danger");
    input.classList.add("border-white-line");
    input.removeAttribute("aria-invalid");
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
  }

  function validateField(field) {
    if (!hasAttemptedSubmit) return true;
    if (field === nameInput) {
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setError(nameInput, nameError, isFa() ? "لطفاً نام کامل خود را وارد کنید (حداقل ۲ نویسه)." : "Please enter your full name (at least 2 characters).");
        return false;
      }
      clearError(nameInput, nameError);
      return true;
    }
    if (field === emailInput) {
      if (!emailInput.value.trim()) {
        setError(emailInput, emailError, isFa() ? "لطفاً آدرس ایمیل خود را وارد کنید." : "Please enter your email address.");
        return false;
      } else if (!validateEmail(emailInput.value)) {
        setError(emailInput, emailError, isFa() ? "لطفاً یک آدرس ایمیل معتبر وارد نمایید." : "Please enter a valid email address (e.g. name@example.com).");
        return false;
      }
      clearError(emailInput, emailError);
      return true;
    }
    if (field === phoneInput) {
      if (!phoneInput.value.trim()) {
        setError(phoneInput, phoneError, isFa() ? "لطفاً شماره تماس یا واتس‌اپ خود را وارد کنید." : "Please enter your phone or WhatsApp number.");
        return false;
      } else if (!validatePhone(phoneInput.value)) {
        setError(phoneInput, phoneError, isFa() ? "لطفاً شماره تماس معتبر با پیش‌شماره کشور وارد کنید." : "Please enter a valid phone number with country code.");
        return false;
      }
      clearError(phoneInput, phoneError);
      return true;
    }
    return true;
  }

  [nameInput, emailInput, phoneInput].forEach(input => {
    if (!input) return;
    input.addEventListener("input", () => validateField(input));
    input.addEventListener("blur", () => {
      if (hasAttemptedSubmit) validateField(input);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    hasAttemptedSubmit = true;
    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isPhoneValid = validateField(phoneInput);

    if (!isNameValid || !isEmailValid || !isPhoneValid) {
      const firstInvalid = !isNameValid ? nameInput : (!isEmailValid ? emailInput : phoneInput);
      firstInvalid?.focus();
      return;
    }

    isSubmitting = true;
    if (submitBtn) submitBtn.disabled = true;
    if (btnSpinner) btnSpinner.classList.remove("hidden");
    if (btnText) btnText.textContent = isFa() ? "در حال ثبت درخواست..." : "Submitting Mandate...";
    if (formStatus) {
      formStatus.classList.add("hidden");
      formStatus.innerHTML = "";
    }

    const preferredMethod = form.querySelector('input[name="contact-method"]:checked')?.value || "phone";
    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      nationality: nationalityInput?.value || "",
      budget: budgetInput?.value || "",
      interest: interestInput?.value || "",
      message: messageInput?.value.trim() || "",
      contact_method: preferredMethod,
      submitted_at: new Date().toISOString()
    };

    try {
      const response = await fetch("/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json, text/html"
        },
        body: new URLSearchParams(payload).toString()
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      if (formStatus) {
        const fa = isFa();
        const contactMethodLabel = preferredMethod === "whatsapp" ? "WhatsApp" : (preferredMethod === "email" ? "Email" : "Phone");
        const waMsg = encodeURIComponent(
          fa
            ? `درود. من هم‌اکنون فرم مشاوره خصوصی را در سایت زرین ثبت کردم.\nنام: ${payload.name}\nبودجه: ${payload.budget || 'مشخص نشده'}\nموضوع: ${payload.interest || 'عمومی'}`
            : `Hello. I have just submitted a consultation request on the ZARIN website.\nName: ${payload.name}\nBudget: ${payload.budget || 'Not specified'}\nInterest: ${payload.interest || 'General'}`
        );

        formStatus.className = "mb-6 p-6 rounded-xs bg-ink-900 border border-gold-line text-left animate-fade-in-up";
        formStatus.innerHTML = `
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-gold-soft border border-gold-line flex items-center justify-center flex-shrink-0 text-success">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="text-base font-bold text-bone mb-1">${fa ? 'درخواست مشاوره خصوصی با موفقیت ثبت شد' : 'Consultation Request Received'}</h3>
              <p class="text-xs text-ash leading-relaxed mb-4">
                ${fa
                  ? `با تشکر از شما جناب/سرکار ${payload.name}. اطلاعات شما با بالاترین سطح محرمانگی ثبت شد. مشاور ارشد زرین ظرف ۲۴ ساعت آینده از طریق ${contactMethodLabel} با شما تماس خواهد گرفت.`
                  : `Thank you, ${payload.name}. Your mandate has been registered under strict confidentiality. A senior ZARIN advisor will review your criteria and contact you via ${contactMethodLabel} within 24 hours.`
                }
              </p>
              <div class="flex flex-wrap items-center gap-3">
                <a href="https://wa.me/971586901231?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-ink-900 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-gold-300 transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span>${fa ? 'پیگیری سریع در واتس‌اپ' : 'Instant WhatsApp Dispatch'}</span>
                </a>
              </div>
            </div>
          </div>
        `;
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      form.reset();
      hasAttemptedSubmit = false;
      [nameInput, emailInput, phoneInput].forEach(inp => clearError(inp, doc.getElementById(`${inp.id}-error`)));

    } catch (err) {
      console.warn("[Consultation Form] Network submission error:", err);
      if (formStatus) {
        const fa = isFa();
        formStatus.className = "mb-6 p-4 rounded-xs bg-ink-900 border border-danger/60 text-left animate-fade-in-up";
        formStatus.innerHTML = `
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-danger/10 text-danger flex items-center justify-center flex-shrink-0 mt-0.5">!</div>
            <div class="text-xs text-bone">
              <span class="font-bold block mb-1">${fa ? 'خطا در برقراری ارتباط با سرور' : 'Direct Connection Advisory'}</span>
              <span>${fa
                ? 'ارسال آنلاین فرم در این لحظه ممکن نشد. می‌توانید با کلیک بر روی واتس‌اپ یا تماس با +971586901231 مستقیماً با ما ارتباط برقرار کنید.'
                : 'Unable to deliver request online. Please contact our desk directly via <a href="https://wa.me/971586901231" class="text-gold-400 underline">WhatsApp</a> or call <a href="tel:+971586901231" class="text-gold-400 underline">+971 58 690 1231</a>.'
              }</span>
            </div>
          </div>
        `;
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } finally {
      isSubmitting = false;
      if (submitBtn) submitBtn.disabled = false;
      if (btnSpinner) btnSpinner.classList.add("hidden");
      if (btnText) btnText.textContent = isFa() ? "ثبت درخواست مشاوره خصوصی" : "Request Private Consultation";
    }
  });
}
