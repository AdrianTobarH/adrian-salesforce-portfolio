/* ══════════════════════════════════════════
   PORTFOLIO SCRIPT — Adrian Tobar Hanze v2.0
   ══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

  /* ─── NAVBAR SCROLL ─── */
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  /* ─── SCROLL REVEAL ─── */
  const reveals = document.querySelectorAll(".reveal");
  function checkReveals() {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", checkReveals, { passive: true });
  checkReveals();

  /* ─── CERT ROTATOR ─── */
  const certs = [
    "Salesforce Certified Administrator",
    "Salesforce Platform App Builder",
    "Platform Developer I & II",
    "Agentforce Specialist",
    "Integration Architecture Experience"
  ];
  let certIndex = 0;
  const rotatorEl = document.getElementById("cert-rotator");
  if (rotatorEl) {
    setInterval(() => {
      rotatorEl.style.opacity = "0";
      setTimeout(() => {
        certIndex = (certIndex + 1) % certs.length;
        rotatorEl.innerText = certs[certIndex];
        rotatorEl.style.opacity = "1";
      }, 300);
    }, 2500);
  }

  /* ─── ARCHITECTURE LAYER DIMMING ─── */
  document.querySelectorAll(".arch-layer").forEach(layer => {
    layer.addEventListener("mouseenter", () => {
      document.querySelectorAll(".arch-layer").forEach(l => {
        if (l !== layer) l.style.opacity = "0.45";
      });
    });
    layer.addEventListener("mouseleave", () => {
      document.querySelectorAll(".arch-layer").forEach(l => l.style.opacity = "1");
    });
  });

  /* ─── INTERACTIVE ARCHITECTURE DIAGRAM ─── */
  const diagNodes  = document.querySelectorAll(".diag-node");
  const diagPanels = document.querySelectorAll(".diag-panel");

  function closeAllPanels() {
    diagPanels.forEach(p => p.classList.remove("open"));
    diagNodes.forEach(n => n.classList.remove("active"));
  }

  diagNodes.forEach(node => {
    node.addEventListener("click", () => {
      const key = node.dataset.node;
      const panel = document.querySelector(`.diag-panel[data-panel="${key}"]`);
      const isOpen = panel && panel.classList.contains("open");

      closeAllPanels();

      if (!isOpen && panel) {
        panel.classList.add("open");
        node.classList.add("active");
        // Smooth scroll to panel
        setTimeout(() => {
          panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 50);
      }
    });
  });

  // Close button inside each panel
  document.querySelectorAll(".panel-close").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllPanels();
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllPanels();
  });

  /* ─── LANGUAGE SWITCHER ─── */
  const translations = {
    en: {
      headline:         "Architect-Level Automation\nfor Enterprise Scale",
      architectureTitle:"Enterprise Salesforce Architecture Strategy",
      flowMatrix:       "Flow vs Apex Decision Matrix",
      decisionPanel:    "Architecture Decision Review Panel",
      metricsTitle:     "Architecture Metrics Impact",
      ctaTitle:         "Let's Build Enterprise-Grade\nSalesforce Automation Together",
      availability:     "Available for Remote Roles",
      availabilityDesc: "Available for remote Salesforce Platform Engineer (Flow + Apex + Integrations) roles across US-aligned timezones.\nDesigning scalable automation frameworks that balance admin maintainability, developer extensibility, and integration reliability."
    },
    es: {
      headline:         "Automatización Nivel Architect\npara Escala Empresarial",
      architectureTitle:"Estrategia de Arquitectura Empresarial Salesforce",
      flowMatrix:       "Matriz de Decisión Flow vs Apex",
      decisionPanel:    "Panel de Revisión de Decisiones Arquitectónicas",
      metricsTitle:     "Impacto de Métricas Arquitectónicas",
      ctaTitle:         "Construyamos Automatización\nSalesforce Empresarial Juntos",
      availability:     "Disponible para Roles Remotos",
      availabilityDesc: "Disponible para roles remotos de Salesforce Platform Engineer en zonas horarias de EE.UU.\nDiseñando frameworks de automatización escalables que equilibran mantenibilidad, extensibilidad y confiabilidad de integración."
    },
    fr: {
      headline:         "Automatisation Niveau Architecte\npour Échelle Entreprise",
      architectureTitle:"Stratégie d'Architecture Salesforce Entreprise",
      flowMatrix:       "Matrice de Décision Flow vs Apex",
      decisionPanel:    "Panel de Décision Architecture",
      metricsTitle:     "Impact des Métriques Architecture",
      ctaTitle:         "Construisons une Automatisation\nSalesforce Entreprise Ensemble",
      availability:     "Disponible pour Rôles Remote",
      availabilityDesc: "Disponible pour rôles Salesforce Platform Engineer remote sur fuseaux horaires US.\nConception de frameworks d'automatisation scalables équilibrant maintenabilité, extensibilité et fiabilité d'intégration."
    }
  };

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
      if (el && t[key] !== undefined) el.innerText = t[key];
    });
  };

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      setLanguage(btn.dataset.lang);
    });
  });

});
