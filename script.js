/* ══════════════════════════════════════════
   PORTFOLIO SCRIPT — Adrian Tobar Hanze
   ══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

  /* ─── NAVBAR SCROLL ─── */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  /* ─── SCROLL REVEAL ─── */
  const reveals = document.querySelectorAll(".reveal");
  function checkReveals() {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", checkReveals);
  checkReveals(); // run on load for above-fold elements

  /* ─── CERT ROTATOR ─── */
  const certs = [
    "Salesforce Certified Administrator",
    "Salesforce Platform App Builder",
    "Flow Automation Specialist",
    "Integration Architecture Experience"
  ];
  let certIndex = 0;
  const rotatorEl = document.getElementById("cert-rotator");

  setInterval(() => {
    if (!rotatorEl) return;
    rotatorEl.style.opacity = "0";
    setTimeout(() => {
      certIndex = (certIndex + 1) % certs.length;
      rotatorEl.innerText = certs[certIndex];
      rotatorEl.style.opacity = "1";
    }, 300);
  }, 2500);

  /* ─── LANGUAGE SWITCHER ─── */
  const translations = {
    en: {
      headline:       "Architect-Level Automation\nfor Enterprise Scale",
      architectureTitle: "Salesforce Layered Architecture Model",
      flowMatrix:     "Flow vs Apex Decision Matrix",
      decisionPanel:  "Architecture Decision Review Panel",
      metricsTitle:   "Architecture Metrics Impact",
      ctaTitle:       "Let's Build Something Together",
      availability:   "Available for Remote Roles",
      availabilityDesc: "Available for remote Salesforce engineering roles across US timezones"
    },
    es: {
      headline:       "Automatización Nivel Architect\npara Escala Empresarial",
      architectureTitle: "Modelo de Arquitectura en Capas Salesforce",
      flowMatrix:     "Matriz de Decisión Flow vs Apex",
      decisionPanel:  "Panel de Revisión de Decisiones Arquitectónicas",
      metricsTitle:   "Impacto de Métricas Arquitectónicas",
      ctaTitle:       "Construyamos algo increíble juntos",
      availability:   "Disponible para Roles Remotos",
      availabilityDesc: "Disponible para roles remotos Salesforce en zonas horarias de EE.UU."
    },
    fr: {
      headline:       "Automatisation Niveau Architecte\npour Échelle Entreprise",
      architectureTitle: "Modèle d'Architecture Salesforce en Couches",
      flowMatrix:     "Matrice de Décision Flow vs Apex",
      decisionPanel:  "Panel de Décision Architecture",
      metricsTitle:   "Impact des Métriques Architecture",
      ctaTitle:       "Construisons quelque chose ensemble",
      availability:   "Disponible pour Rôles Remote",
      availabilityDesc: "Disponible pour rôles Salesforce remote sur fuseaux horaires US"
    }
  };

  // Map translation keys to DOM element IDs
  const domMap = {
    headline:         "headline",
    architectureTitle:"architecture-title",
    flowMatrix:       "flow-matrix-title",
    decisionPanel:    "decision-panel-title",
    metricsTitle:     "metrics-title",
    ctaTitle:         "cta-title",
    availability:     "availability-text",
    availabilityDesc: "availability-desc"
  };

  window.setLanguage = (lang) => {
    const t = translations[lang];
    if (!t) return;
    Object.entries(domMap).forEach(([key, id]) => {
      const el = document.getElementById(id);
      if (el && t[key]) el.innerText = t[key];
    });
  };

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      setLanguage(btn.dataset.lang);
    });
  });

  /* ─── ARCH LAYER INTERACTION ─── */
  document.querySelectorAll(".arch-layer").forEach(layer => {
    layer.addEventListener("mouseenter", () => {
      document.querySelectorAll(".arch-layer").forEach(l => {
        if (l !== layer) l.style.opacity = "0.5";
      });
    });
    layer.addEventListener("mouseleave", () => {
      document.querySelectorAll(".arch-layer").forEach(l => {
        l.style.opacity = "1";
      });
    });
  });

});
