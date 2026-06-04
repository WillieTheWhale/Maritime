(function () {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  window.dauntlessTrack = function dauntlessTrack(eventName, payload) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...(payload || {}) });
  };

  const header = $(".site-header");
  let scrollTicking = false;

  const updateScrollState = () => {
    const y = window.scrollY || 0;
    if (header) {
      header.classList.toggle("is-scrolled", y > 24);
    }
    scrollTicking = false;
  };

  const requestScrollUpdate = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateScrollState);
  };

  updateScrollState();
  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate, { passive: true });

  const menuButton = $(".menu-button");
  const mobilePanel = $(".mobile-panel");
  const setMenuOpen = (isOpen) => {
    if (!menuButton || !mobilePanel) return;
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    mobilePanel.dataset.open = String(isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  };

  if (menuButton && mobilePanel) {
    menuButton.addEventListener("click", () => {
      setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });

    $$(".mobile-panel a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    });
  }

  $$("[data-track]").forEach((el) => {
    el.addEventListener("click", () => {
      window.dauntlessTrack(el.dataset.track, {
        label: el.textContent.trim(),
        href: el.getAttribute("href") || undefined
      });
    });
  });

  $$(".faq-question").forEach((button) => {
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    if (!answer) return;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      answer.hidden = expanded;
      if (!expanded) {
        window.dauntlessTrack("faq_expand", { question: button.textContent.trim() });
      }
    });
  });

  const pins = $$(".map-pin");
  const mapDetail = $(".map-detail");
  if (pins.length && mapDetail) {
    const renderMapDetail = (pin) => {
      const status = document.createElement("span");
      status.className = "kicker";
      status.textContent = pin.dataset.status || "";

      const heading = document.createElement("h3");
      heading.textContent = pin.dataset.name || "";

      const description = document.createElement("p");
      description.textContent = pin.dataset.description || "";

      const note = document.createElement("p");
      note.className = "subtle";
      note.textContent = pin.dataset.note || "";

      const children = [status, heading, description, note];

      if (pin.dataset.link) {
        const linkPara = document.createElement("p");
        const link = document.createElement("a");
        link.href = pin.dataset.link;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = pin.dataset.linkLabel || "More information";
        linkPara.appendChild(link);
        children.push(linkPara);
      }

      mapDetail.replaceChildren(...children);
    };

    pins.forEach((pin) => {
      pin.addEventListener("click", () => {
        pins.forEach((item) => item.setAttribute("aria-pressed", "false"));
        pin.setAttribute("aria-pressed", "true");
        renderMapDetail(pin);
        window.dauntlessTrack("map_marker_click", { location: pin.dataset.id });
      });
    });
  }

  const form = $(".inquiry-form");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const interest = params.get("interest");
  const cruiseSelect = form.elements.namedItem("cruiseType");
  if (interest && cruiseSelect) {
    cruiseSelect.value = interest;
  }

  const preferredDate = form.elements.namedItem("preferredDate");
  if (preferredDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    preferredDate.min = `${today.getFullYear()}-${month}-${day}`;
  }

  let formStarted = false;
  $$("input, select, textarea", form).forEach((field) => {
    field.addEventListener("input", () => {
      if (formStarted) return;
      formStarted = true;
      window.dauntlessTrack("form_start", { source: form.dataset.source || "unknown" });
    }, { once: true });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errors = validateForm(form);
    renderErrors(form, errors);

    if (Object.keys(errors).length > 0) {
      setStatus("Please correct the highlighted fields before sending the inquiry.", "error-state");
      window.dauntlessTrack("form_submit_error", { errors: Object.keys(errors) });
      return;
    }

    const endpoint = form.dataset.endpoint;
    if (endpoint) {
      submitToEndpoint(form, endpoint);
      return;
    }

    setStatus("The inquiry form is temporarily unavailable. Please use the contact details below.", "error-state");
    window.dauntlessTrack("form_submit_error", { mode: "missing_endpoint" });
  });

  function validateForm(formEl) {
    const data = new FormData(formEl);
    const errors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (data.get("website")) {
      errors.website = "Spam check failed.";
    }

    if (!String(data.get("name") || "").trim()) {
      errors.name = "Name is required.";
    }

    const email = String(data.get("email") || "").trim();
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!String(data.get("cruiseType") || "").trim()) {
      errors.cruiseType = "Choose a cruise type.";
    }

    const guests = Number(data.get("guests"));
    if (!Number.isInteger(guests) || guests < 1 || guests > 6) {
      errors.guests = "Guest count must be 1 to 6.";
    }

    const dateValue = String(data.get("preferredDate") || "");
    if (dateValue) {
      const requested = new Date(`${dateValue}T00:00:00`);
      if (requested < today) {
        errors.preferredDate = "Choose today or a future date.";
      }
    }

    const notes = String(data.get("notes") || "");
    if (notes.length > 2000) {
      errors.notes = "Notes must be 2,000 characters or fewer.";
    }

    if (!data.get("weatherConsent")) {
      errors.weatherConsent = "Confirm weather, dock access, and captain approval.";
    }

    if (!data.get("wildlifeConsent")) {
      errors.wildlifeConsent = "Confirm wildlife sightings cannot be guaranteed.";
    }

    return errors;
  }

  function renderErrors(formEl, errors) {
    $$(".error", formEl).forEach((el) => {
      el.textContent = "";
    });
    $$("[aria-invalid]", formEl).forEach((field) => {
      field.setAttribute("aria-invalid", "false");
    });

    Object.entries(errors).forEach(([name, message]) => {
      const field = formEl.elements.namedItem(name);
      const errorEl = $(`[data-error-for="${name}"]`, formEl);
      if (field && "setAttribute" in field) {
        field.setAttribute("aria-invalid", "true");
      }
      if (errorEl) {
        errorEl.textContent = message;
      }
    });
  }

  function setStatus(message, state) {
    const status = $(".form-status", form);
    if (!status) return;
    status.textContent = message;
    status.className = `form-status ${state || ""}`;
  }

  function submitToEndpoint(formEl, endpoint) {
    const payload = new FormData(formEl);
    payload.set("_subject", "CHARTER INQUIRY");
    fetch(endpoint, {
      method: "POST",
      body: payload,
      headers: { Accept: "application/json" }
    })
      .then((response) => {
        if (!response.ok) throw new Error("Form submission failed");
        setStatus("Thank you. Your inquiry has been sent, and Dauntless will follow up after captain review.", "success");
        window.dauntlessTrack("form_submit_success", { mode: "endpoint" });
        formEl.reset();
      })
      .catch(() => {
        setStatus("The form could not send right now. Please try again or use the contact details once confirmed.", "error-state");
        window.dauntlessTrack("form_submit_error", { mode: "endpoint" });
      });
  }
})();
