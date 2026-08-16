/* ══════════════════════════════════════════
   PORTFOLIO SCRIPT — Adrian Tobar Hanze v3.0
   Shared across index.html and projects/*.html
   ══════════════════════════════════════════ */

/* ─── i18n DICTIONARY ───
   Technology/product/certification names (LWC, Apex, REST, Flow, cert titles,
   tech-stack badges) are intentionally kept in English in every language —
   they are literal names, not prose, and mixing translated/untranslated
   labels inside the same badge row would look broken. Everything else
   (headings, paragraphs, list items, buttons, nav, footer) is fully translated. */
const translations = {
  en: {
    "nav.architecture": "Architecture",
    "nav.diagram": "Diagram",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.backToPortfolio": "← Back to Portfolio",
    "nav.timezone": "GMT-5 · PT overlap",
    "nav.available": "Available for Remote Roles",

    "footer.projects": "Projects",
    "footer.diagram": "Diagram",
    "footer.architecture": "Architecture",
    "footer.contact": "Contact",

    "common.backAllProjects": "← All Architecture Projects",
    "common.downloadResume": "Download Resume ↓",
    "common.viewArchitecture": "View Architecture →",
    "common.viewFullCaseStudy": "View Full Case Study →",
    "common.close": "Close",
    "common.connectLinkedin": "Connect on LinkedIn ↗",
    "common.caseStudyDisclosure": "Composite case study based on real Salesforce production work. Client-specific details have been anonymized and generalized; some elements combine patterns from multiple engagements.",

    "headline": "I design Salesforce systems<br>built to hold up at scale.",
    "architectureTitle": "Enterprise Salesforce Architecture Strategy",
    "flowMatrixTitle": "Flow vs Apex Decision Matrix",
    "decisionPanelTitle": "Architecture Decision Review Panel",
    "metricsTitle": "Architecture Design Highlights",
    "ctaTitle": "Let's Build Enterprise-Grade<br>Salesforce Automation Together",
    "idx.hero.eyebrow": "Salesforce Technical Consultant",
    "idx.hero.sub": "Flow and Apex where each earns its place · sharing designed around the org, not a template · integrations that fail loudly, not silently.",
    "idx.hero.ctaProjects": "View Architecture Projects",

    "idx.certs.tag": "Credentials",
    "idx.certs.title": "Salesforce Certifications",

    "idx.arch.tag": "Architecture",
    "idx.arch.intro": "Designing scalable Flow orchestration frameworks, reusable Apex service layers, and enterprise-grade integration architectures across Sales Cloud environments. Focused on performance, governance alignment, and maintainable automation at scale.",
    "idx.arch.layer1.name": "Experience Layer",
    "idx.arch.layer1.desc": "Lightning UI · LWC Dashboards · Executive Visibility Components — Delivers role-based interaction surfaces designed for operational clarity and adoption acceleration.",
    "idx.arch.layer2.name": "Orchestration Layer",
    "idx.arch.layer2.desc": "Flow Orchestration · Screen Flows · Record-Triggered Flows — Coordinates business processes declaratively while maintaining flexibility for admin-level iteration.",
    "idx.arch.layer3.name": "Service Layer",
    "idx.arch.layer3.desc": "Reusable Apex Services · Invocable Methods · Async Processing — Encapsulates transaction-level logic for performance-critical workflows and integration mediation.",
    "idx.arch.layer4.name": "Data & Governance Layer",
    "idx.arch.layer4.desc": "Objects · Validation Rules · Permission Models · Sharing Strategy — Implements enterprise-ready security alignment and structured data lifecycle governance.",
    "idx.arch.layer5.name": "Integration Layer",
    "idx.arch.layer5.desc": "REST APIs · Named Credentials · External Services — Provides secure authentication abstraction and reusable connectivity across system boundaries.",

    "idx.diagram.tag": "Interactive",
    "idx.diagram.title": "Architecture Diagram",
    "idx.diagram.intro": "Click each layer node to expand its technical scope, responsibilities, and design rationale.",
    "idx.diagram.node.experience": "Experience",
    "idx.diagram.node.orchestration": "Orchestration",
    "idx.diagram.node.service": "Service",
    "idx.diagram.node.data": "Data",
    "idx.diagram.node.integration": "Integration",

    "idx.diagram.panel.experience.title": "Experience Layer",
    "idx.diagram.panel.experience.resp1": "Role-based interaction surfaces via Lightning FlexiPages",
    "idx.diagram.panel.experience.resp2": "LWC components with reactive @wire data bindings",
    "idx.diagram.panel.experience.resp3": "Executive visibility dashboards with real-time KPIs",
    "idx.diagram.panel.experience.resp4": "Dynamic filtering and conditional rendering by profile",
    "idx.diagram.panel.experience.principle": "Deliver role-based interaction surfaces designed for operational clarity and adoption acceleration. Components stay data-agnostic — they consume services, never write them.",

    "idx.diagram.panel.orchestration.title": "Orchestration Layer",
    "idx.diagram.panel.orchestration.resp1": "Record-triggered Flow as the primary automation entry point",
    "idx.diagram.panel.orchestration.resp2": "Scheduled Flows for SLA monitoring and time-based logic",
    "idx.diagram.panel.orchestration.resp3": "Screen Flows for guided user journeys within the UI",
    "idx.diagram.panel.orchestration.resp4": "Platform Events for decoupled async process coordination",
    "idx.diagram.panel.orchestration.principle": "Flow owns orchestration and human-readable process logic by default. Apex earns its place when transaction control, reuse, performance, or an integration boundary makes the added engineering lifecycle cost worth it.",

    "idx.diagram.panel.service.title": "Service Layer",
    "idx.diagram.panel.service.resp1": "Invocable Apex methods callable from Flow orchestration",
    "idx.diagram.panel.service.resp2": "Queueable chains for retry-safe async callout execution",
    "idx.diagram.panel.service.resp3": "Batch Apex for high-volume bulk data processing jobs",
    "idx.diagram.panel.service.resp4": "Service class architecture enforcing single-responsibility",
    "idx.diagram.panel.service.principle": "Encapsulate transaction-level logic for performance-critical workflows and integration mediation. Services are stateless, bulkification-safe, and independently testable.",

    "idx.diagram.panel.data.title": "Data & Governance Layer",
    "idx.diagram.panel.data.resp1": "Custom object schema aligned to business domain model",
    "idx.diagram.panel.data.resp2": "Validation rules enforcing data integrity at write time",
    "idx.diagram.panel.data.resp3": "RBAC via Permission Sets and Permission Set Groups",
    "idx.diagram.panel.data.resp4": "Sharing rules and OWD modeling for record-level security",
    "idx.diagram.panel.data.principle": "Implement enterprise-ready security alignment and structured data lifecycle governance. The data layer is the source of truth — access is earned, not assumed.",

    "idx.diagram.panel.integration.title": "Integration Layer",
    "idx.diagram.panel.integration.resp1": "Named Credentials as authentication abstraction — zero secrets in Apex",
    "idx.diagram.panel.integration.resp2": "OAuth 2.0 Auth Providers for token lifecycle management",
    "idx.diagram.panel.integration.resp3": "Reusable HttpCallout service class across all external systems",
    "idx.diagram.panel.integration.resp4": "Error-resilient retry architecture via Queueable chaining",
    "idx.diagram.panel.integration.principle": "Provide secure authentication abstraction and reusable connectivity across system boundaries. One integration framework supports all external systems — not one bespoke class per API.",

    "idx.diagram.gov.title": "Architecture Governance Strategy",
    "idx.diagram.gov.pill1": "Separation of orchestration & execution",
    "idx.diagram.gov.pill2": "Reusable service abstraction",
    "idx.diagram.gov.pill3": "Admin-friendly declarative surfaces",
    "idx.diagram.gov.pill4": "Integration security standardization",
    "idx.diagram.gov.pill5": "Performance-aware transaction handling",

    "idx.matrix.tag": "Decision Framework",
    "idx.matrix.flow.title": "Use Flow When",
    "idx.matrix.flow.li1": "Admin maintainability is required",
    "idx.matrix.flow.li2": "Rapid iteration cycles are expected",
    "idx.matrix.flow.li3": "Declarative orchestration is sufficient",
    "idx.matrix.flow.li4": "Business logic transparency improves adoption",
    "idx.matrix.flow.tag": "Declarative",
    "idx.matrix.apex.title": "Use Apex When",
    "idx.matrix.apex.li1": "Transaction-level control is necessary",
    "idx.matrix.apex.li2": "Complex integrations must be coordinated",
    "idx.matrix.apex.li3": "Bulk processing logic is performance-sensitive",
    "idx.matrix.apex.li4": "Reusable service abstraction improves clarity",
    "idx.matrix.apex.tag": "Programmatic",
    "idx.matrix.hybrid.title": "Hybrid Pattern",
    "idx.matrix.hybrid.li1": "Flow orchestration layer on top",
    "idx.matrix.hybrid.li2": "Apex service execution layer below",
    "idx.matrix.hybrid.li3": "Shared integration framework",
    "idx.matrix.hybrid.li4": "Maximum maintainability + enterprise scale",
    "idx.matrix.hybrid.tag": "Recommended",

    "idx.projects.tag": "Case Studies",
    "idx.projects.intro": "Real production-style solution patterns applied across portfolio implementations.",
    "idx.projects.card1.title": "Case Automation Architecture",
    "idx.projects.card1.desc": "Automated routing strategy designed to reduce manual workload and accelerate SLA response time with reusable assignment logic services.",
    "idx.projects.card1.metricLabel": "escalation tiers automated",
    "idx.projects.card2.title": "LWC Dashboard Architecture",
    "idx.projects.card2.desc": "Executive-ready Lightning dashboards built for operational adoption with dynamic Apex data providers and role-based UI visibility strategy.",
    "idx.projects.card2.metricLabel": "real-time data sync",
    "idx.projects.card3.title": "API Integration Architecture",
    "idx.projects.card3.desc": "Reusable Named Credential integration model supporting secure external system communication with error-resilient service execution.",
    "idx.projects.card3.metricLabel": "reusable integration layer",
    "idx.projects.card4.title": "Enterprise Automation Deep Dive",
    "idx.projects.card4.desc": "Full architecture decision record — context, constraints, tradeoffs, solution layers, security model, and measured business impact.",
    "idx.projects.card4.metricLabel": "architecture decision record",

    "idx.metrics.tag": "Design Highlights",
    "idx.metrics.intro": "What each architecture decision was actually built to do.",
    "idx.metrics.card1.label": "Case routing automated with Record-Triggered Flow, replacing manual assignment",
    "idx.metrics.card1.domain": "⚙ Automation Speed",
    "idx.metrics.card2.label": "Executive dashboards rebuilt on Lightning Web Components with live data",
    "idx.metrics.card2.domain": "◫ Executive Adoption",
    "idx.metrics.card3.label": "One reusable Named Credential integration pattern applied across external services",
    "idx.metrics.card3.domain": "⬡ Integration Reliability",
    "idx.metrics.card4.label": "Enterprise-ready permission modeling applied across automation layers",
    "idx.metrics.card4.domain": "⬢ Security Alignment",

    "idx.stack.tag": "Summary",
    "idx.stack.title": "Enterprise Architecture Stack",
    "idx.stack.row1": "UX Layer",
    "idx.stack.row2": "Automation Layer",
    "idx.stack.row3": "Service Layer",
    "idx.stack.row4": "Data Layer",
    "idx.stack.row5": "Integration Layer",

    "idx.cta.sub": "Available for remote Salesforce Platform Engineer (Flow + Apex + Integrations) roles across US-aligned timezones.<br>Designing scalable automation frameworks that balance admin maintainability, developer extensibility, and integration reliability.",

    "pca.title": "Enterprise Case Automation<br>Architecture",
    "pca.summary": "Flow-driven intelligent routing, multi-tier escalation guardrails, and validation frameworks for enterprise case management at scale — eliminating manual intervention across the resolution lifecycle.",
    "pca.impact2": "Escalation tiers automated",
    "pca.impact3": "Manual routing touchpoints",
    "pca.b1.tag": "Context", "pca.b1.title": "Business Problem",
    "pca.b1.li1": "Manual case assignment causing significant delay in first response times",
    "pca.b1.li2": "No escalation logic — cases stalling without SLA enforcement",
    "pca.b1.li3": "Inconsistent validation at case creation causing data quality issues",
    "pca.b1.li4": "No executive visibility into resolution pipeline performance",
    "pca.b2.tag": "Architecture Strategy", "pca.b2.title": "Solution Design",
    "pca.b2.li1": "Record-Triggered Flow for intake validation and initial routing logic",
    "pca.b2.li2": "Time-based SLA monitoring and escalation implemented with Salesforce Flow",
    "pca.b2.li3": "Flow-invoked Apex for complex routing decisions at scale",
    "pca.b2.li4": "Custom metadata for configurable routing rules without code changes",
    "pca.b3.tag": "Flow Orchestration", "pca.b3.title": "Implementation Layers",
    "pca.b3.li1": "Entry criteria gates preventing invalid record progression",
    "pca.b3.li2": "Assignment routing via queue-based ownership transfer",
    "pca.b3.li3": "Multi-branch escalation logic implemented with Salesforce Flow",
    "pca.b3.li4": "Auto-close logic for stale cases meeting resolution criteria",
    "pca.b4.tag": "Security Model", "pca.b4.title": "Access & Compliance",
    "pca.b4.li1": "OWD set to Private; sharing rules for cross-team visibility",
    "pca.b4.li2": "Queue-based assignment preserving full audit trail integrity",
    "pca.b4.li3": "Field-level security on sensitive case fields by profile",
    "pca.b4.li4": "Flow run-as context enforced for proper record access",
    "pca.b5.tag": "Scalability", "pca.b5.title": "Growth Architecture",
    "pca.b5.li1": "Custom metadata routing table — zero code changes for new rules",
    "pca.b5.li2": "Bulkification-safe Apex invocable methods for batch processing",
    "pca.b5.li3": "Flow subflow architecture for modular, reusable logic components",
    "pca.b5.li4": "Platform events for decoupled async escalation notifications",
    "pca.b6.tag": "Business Impact", "pca.b6.title": "Delivered Outcomes",
    "pca.b6.li1": "Reduced average case routing time by replacing manual assignment with automated routing",
    "pca.b6.li2": "3-tier escalation matrix eliminating SLA breaches",
    "pca.b6.li3": "Executive dashboard surfaces real-time case throughput metrics",
    "pca.b6.li4": "Validation guardrails reduced data quality incidents to near zero",

    "plwc.title": "LWC Executive<br>Dashboard Architecture",
    "plwc.summary": "Real-time executive dashboards built on Lightning Web Components with dynamic Apex data providers, cross-object reporting, and role-based UI visibility strategy — transforming raw data into decision-ready insights.",
    "plwc.impact2": "Exec personas served",
    "plwc.impact3": "Real-time data sync",
    "plwc.b1.tag": "Context", "plwc.b1.title": "Business Problem",
    "plwc.b1.li1": "Executives relying on weekly spreadsheet exports for pipeline visibility",
    "plwc.b1.li2": "No real-time cross-object reporting across Cases, Opportunities, Accounts",
    "plwc.b1.li3": "Generic report layouts not aligned to exec decision-making workflows",
    "plwc.b1.li4": "Low adoption of native Salesforce reports — perceived as too complex",
    "plwc.b2.tag": "Architecture Strategy", "plwc.b2.title": "Solution Design",
    "plwc.b2.li1": "LWC component architecture with @wire adapters for live data binding",
    "plwc.b2.li2": "Apex controller layer for complex cross-object SOQL aggregations",
    "plwc.b2.li3": "FlexiPage layouts with dynamic visibility rules per user profile",
    "plwc.b2.li4": "Custom property editor for non-developer dashboard configuration",
    "plwc.b3.tag": "Component Architecture", "plwc.b3.title": "LWC Implementation",
    "plwc.b3.li1": "Parent-child component communication via custom events and @api",
    "plwc.b3.li2": "Dynamic filtering using @track reactive properties",
    "plwc.b3.li3": "KPI visualization integration within LWC components",
    "plwc.b3.li4": "Conditional rendering with template directives for role-based views",
    "plwc.b4.tag": "Security Model", "plwc.b4.title": "Access Architecture",
    "plwc.b4.li1": "Apex with-sharing enforced — data filtered by running user's access",
    "plwc.b4.li2": "FlexiPage visibility rules gating sensitive KPIs by permission set",
    "plwc.b4.li3": "Field-level security respected at SOQL query level via schema checks",
    "plwc.b4.li4": "Read-only profiles for dashboard consumers, no write risk surface",
    "plwc.b5.tag": "Scalability", "plwc.b5.title": "Growth Architecture",
    "plwc.b5.li1": "SOQL aggregated queries to minimize data volume at scale",
    "plwc.b5.li2": "Server-side filtering reducing payload to LWC components",
    "plwc.b5.li3": "Modular component design — new KPI cards added without refactoring",
    "plwc.b5.li4": "Custom labels for all strings enabling multilingual exec personas",
    "plwc.b6.tag": "Business Impact", "plwc.b6.title": "Delivered Outcomes",
    "plwc.b6.li1": "Replaced weekly spreadsheet exports with a live executive dashboard within 30 days of launch",
    "plwc.b6.li2": "Real-time pipeline visibility replacing 5 manually curated reports",
    "plwc.b6.li3": "Exec decision cycles reduced from weekly to daily cadence",
    "plwc.b6.li4": "Zero IT dependency for dashboard layout adjustments post-launch",

    "papi.title": "Enterprise API<br>Integration Layer",
    "papi.summary": "Reusable Named Credential architecture with secure REST endpoints, OAuth 2.0 Auth Providers, and real-time sync layers — building an integration foundation that scales across all external system boundaries.",
    "papi.impact1": "Reusable credential layer",
    "papi.impact2": "Secrets stored in Apex code",
    "papi.impact3": "Real-time sync",
    "papi.b1.tag": "Context", "papi.b1.title": "Business Problem",
    "papi.b1.li1": "API credentials hardcoded in Apex — critical security vulnerability",
    "papi.b1.li2": "No reusable integration pattern — each system required bespoke code",
    "papi.b1.li3": "External data sync running on nightly batch only — no real-time option",
    "papi.b1.li4": "Zero error handling — failed callouts silent with no retry mechanism",
    "papi.b2.tag": "Architecture Strategy", "papi.b2.title": "Solution Design",
    "papi.b2.li1": "Named Credentials + Auth Provider for zero-secret Apex callouts",
    "papi.b2.li2": "Apex HttpCallout service class — single integration point for all APIs",
    "papi.b2.li3": "Platform Events for async real-time sync decoupled from transactions",
    "papi.b2.li4": "Custom object logging layer for callout auditing and retry management",
    "papi.b3.tag": "Integration Layers", "papi.b3.title": "Technical Implementation",
    "papi.b3.li1": "OAuth 2.0 Auth Provider managing token refresh automatically",
    "papi.b3.li2": "Named Credential as abstraction layer — no URL or credential in code",
    "papi.b3.li3": "Apex Queueable chain for retry-safe async callout architecture",
    "papi.b3.li4": "External Services for no-code API schema registration where viable",
    "papi.b4.tag": "Security Model", "papi.b4.title": "Credential Architecture",
    "papi.b4.li1": "All credentials stored in Named Credentials — zero exposure in Apex",
    "papi.b4.li2": "Per-user credential delegation via User-level Named Credentials",
    "papi.b4.li3": "CSP Trusted Sites and CORS configured for outbound security",
    "papi.b4.li4": "Callout log with field-level encryption on sensitive response data",
    "papi.b5.tag": "Scalability", "papi.b5.title": "Reusable Architecture",
    "papi.b5.li1": "Single HttpCallout service class supports any REST endpoint via config",
    "papi.b5.li2": "Custom metadata for endpoint registration — new APIs without code",
    "papi.b5.li3": "Platform Event bus absorbs volume spikes without governor limit risk",
    "papi.b5.li4": "Retry queue with exponential backoff for transient failure resilience",
    "papi.b6.tag": "Business Impact", "papi.b6.title": "Delivered Outcomes",
    "papi.b6.li1": "API secrets moved out of Apex code and into Named Credentials",
    "papi.b6.li2": "Reusable layer reduced new integration time from weeks to days",
    "papi.b6.li3": "Real-time sync replaced nightly batch — latency cut from 24h to seconds",
    "papi.b6.li4": "Callout logging surfaces integration health in executive dashboard",

    "padr.title": "Enterprise Automation<br>Deep Dive",
    "padr.summary": "A complete Architecture Decision Record (ADR) — covering context, problem statement, constraints, decision rationale, solution layers, security model, scalability architecture, tradeoffs, and business impact.",
    "padr.impact1": "Architecture Decision Record",
    "padr.impact3": "Architecture decisions documented",
    "padr.b1.num": "01 · Context", "padr.b1.title": "Organizational Context",
    "padr.b1.p1": "Support teams processed high volumes of incoming cases with manual assignment routing, inconsistent ownership tracking, and SLA visibility gaps affecting overall response performance and executive reporting capability.",
    "padr.b1.p2": "The existing process required agents to manually triage, assign, and escalate cases — creating bottlenecks at every handoff point and making SLA compliance entirely dependent on individual discipline rather than systemic enforcement.",
    "padr.b2.num": "02 · Problem Statement", "padr.b2.title": "Core Failure Points",
    "padr.b2.li1": "Manual routing created ownership delays that regularly missed the SLA target",
    "padr.b2.li2": "No structured escalation model — cases stalled without automated path",
    "padr.b2.li3": "SLA compliance visibility was limited to manual dashboard review",
    "padr.b2.li4": "Leadership lacked real-time reporting on resolution pipeline throughput",
    "padr.b2.li5": "Inconsistent validation at intake causing downstream data quality issues",
    "padr.b3.num": "03 · Constraints", "padr.b3.title": "Architecture Constraints",
    "padr.b3.li1": "Required admin-maintainable automation — Apex-only solution not viable",
    "padr.b3.li2": "Scalable architecture for future queue expansion without logic duplication",
    "padr.b3.li3": "Avoid Apex unless declarative pattern insufficient for the requirement",
    "padr.b3.li4": "Integration-ready structure for potential future ITSM system connection",
    "padr.b3.li5": "Deployment within existing Salesforce org — no new license investment",
    "padr.b4.num": "04 · Architecture Decision", "padr.b4.title": "Chosen Strategy: Hybrid Flow-First with Apex Service Layer",
    "padr.b4.p1": "Designed a Flow-first orchestration model supported by modular subflows enabling assignment routing logic reuse across service processes while preserving declarative maintainability for the admin team.",
    "padr.b4.p2": "Apex was introduced at the service boundary only — as invocable methods called by Flow for operations exceeding declarative limits: complex bulk routing logic, callout-dependent routing decisions, and custom exception handling.",
    "padr.b5.num": "05 · Solution Layers", "padr.b5.title": "Implementation Architecture",
    "padr.b5.li1": "Record-Triggered Flow as the primary orchestration entry point on Case creation",
    "padr.b5.li2": "Reusable assignment routing subflow — callable across any queue-based process",
    "padr.b5.li3": "Status transition validation controls preventing invalid case state progressions",
    "padr.b5.li4": "Time-based SLA monitoring and automated escalation implemented with Salesforce Flow",
    "padr.b5.li5": "Leadership reporting dashboards with real-time pipeline visibility components",
    "padr.b6.num": "06 · Architecture Tradeoffs", "padr.b6.title": "Decision Rationale",
    "padr.b6.c1.label": "✓ Selected: Flow-first orchestration",
    "padr.b6.c1.p": "Maximizes admin maintainability. Business stakeholders can adjust routing logic without developer dependency. Reduces change cycle time from weeks to hours.",
    "padr.b6.c2.label": "○ Considered: Full Apex trigger",
    "padr.b6.c2.p": "Higher performance ceiling but eliminates admin visibility. Requires developer for every routing rule change. Selected against due to team structure and maintenance cost.",
    "padr.b6.c3.label": "✓ Selected: Modular subflow pattern",
    "padr.b6.c3.p": "Routing logic reusable across multiple case queues without duplication. Enables consistent behavior enforcement across all process entry points.",
    "padr.b6.c4.label": "○ Considered: Monolithic Flow",
    "padr.b6.c4.p": "Simpler initial build but becomes unmaintainable at scale. Logic duplication required for each new queue. Selected against to preserve long-term architectural integrity.",
    "padr.b7.num": "07 · Security Model", "padr.b7.title": "Security & Compliance Architecture",
    "padr.b7.li1": "Role hierarchy-based record visibility — agents see only their queue's cases",
    "padr.b7.li2": "Field-level security enforcement on sensitive case data by profile assignment",
    "padr.b7.li3": "Audit-safe ownership transitions — all assignments logged in history tracking",
    "padr.b7.li4": "Flow run-as user context configured for proper record sharing behavior",
    "padr.b7.li5": "Queue-based ownership preserving compliance audit trail across escalations",
    "padr.b8.num": "08 · Scalability Model", "padr.b8.title": "Growth Architecture",
    "padr.b8.p1": "The reusable modular subflow architecture supports expansion across additional service queues without introducing logic duplication or Apex dependency. New routing rules are registered in Custom Metadata — zero code deployment required.",
    "padr.b8.li1": "Custom Metadata routing table enables rule changes without Flow or Apex modification",
    "padr.b8.li2": "Bulkification-safe Apex invocable methods handle batch-level routing scenarios",
    "padr.b8.li3": "Platform Events enable future async escalation notifications to external systems",
    "padr.b8.li4": "Architecture supports horizontal queue expansion without introducing logic duplication",
    "padr.b9.num": "09 · Business Impact", "padr.b9.title": "Measured Outcomes",
    "padr.b9.li1": "Replaced manual assignment workload with automated routing within the first 30 days",
    "padr.b9.li2": "Improved SLA tracking visibility — compliance now measurable in real time",
    "padr.b9.li3": "Enabled leadership-level reporting dashboards with live pipeline metrics",
    "padr.b9.li4": "Validation guardrails eliminated recurring data quality incidents at intake",
    "padr.b9.li5": "Admin team now owns routing rule changes independently — zero developer dependency"
  },

  es: {
    "nav.architecture": "Arquitectura",
    "nav.diagram": "Diagrama",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.backToPortfolio": "← Volver al Portfolio",
    "nav.timezone": "GMT-5 · superposición PT",
    "nav.available": "Disponible para Roles Remotos",

    "footer.projects": "Proyectos",
    "footer.diagram": "Diagrama",
    "footer.architecture": "Arquitectura",
    "footer.contact": "Contacto",

    "common.backAllProjects": "← Todos los Proyectos de Arquitectura",
    "common.downloadResume": "Descargar CV ↓",
    "common.viewArchitecture": "Ver Arquitectura →",
    "common.viewFullCaseStudy": "Ver Estudio de Caso Completo →",
    "common.close": "Cerrar",
    "common.connectLinkedin": "Conectemos en LinkedIn ↗",
    "common.caseStudyDisclosure": "Estudio de caso compuesto, basado en trabajo real de producción en Salesforce. Los detalles específicos de clientes fueron anonimizados y generalizados; algunos elementos combinan patrones de múltiples proyectos.",

    "headline": "Diseño sistemas Salesforce<br>construidos para sostenerse a escala.",
    "architectureTitle": "Estrategia de Arquitectura Empresarial Salesforce",
    "flowMatrixTitle": "Matriz de Decisión Flow vs Apex",
    "decisionPanelTitle": "Panel de Revisión de Decisiones Arquitectónicas",
    "metricsTitle": "Aspectos Destacados del Diseño de Arquitectura",
    "ctaTitle": "Construyamos Automatización<br>Salesforce Empresarial Juntos",
    "idx.hero.eyebrow": "Consultor Técnico Salesforce",
    "idx.hero.sub": "Flow y Apex donde cada uno se gana su lugar · sharing pensado para la organización, no una plantilla · integraciones que fallan de forma visible, no en silencio.",
    "idx.hero.ctaProjects": "Ver Proyectos de Arquitectura",

    "idx.certs.tag": "Credenciales",
    "idx.certs.title": "Certificaciones Salesforce",

    "idx.arch.tag": "Arquitectura",
    "idx.arch.intro": "Diseño de frameworks de orquestación Flow escalables, capas de servicio Apex reutilizables y arquitecturas de integración de nivel empresarial en entornos Sales Cloud. Enfocado en rendimiento, alineación de gobernanza y automatización mantenible a escala.",
    "idx.arch.layer1.name": "Capa de Experiencia",
    "idx.arch.layer1.desc": "Lightning UI · LWC Dashboards · Executive Visibility Components — Ofrece superficies de interacción basadas en roles, diseñadas para mejorar la claridad operativa y acelerar la adopción.",
    "idx.arch.layer2.name": "Capa de Orquestación",
    "idx.arch.layer2.desc": "Flow Orchestration · Screen Flows · Record-Triggered Flows — Coordina procesos de negocio de forma declarativa, manteniendo flexibilidad para la iteración a nivel de administración.",
    "idx.arch.layer3.name": "Capa de Servicio",
    "idx.arch.layer3.desc": "Reusable Apex Services · Invocable Methods · Async Processing — Encapsula la lógica a nivel de transacción para flujos de trabajo críticos en rendimiento y mediación de integraciones.",
    "idx.arch.layer4.name": "Capa de Datos y Gobernanza",
    "idx.arch.layer4.desc": "Objects · Validation Rules · Permission Models · Sharing Strategy — Implementa una alineación de seguridad lista para nivel empresarial y una gobernanza estructurada del ciclo de vida de los datos.",
    "idx.arch.layer5.name": "Capa de Integración",
    "idx.arch.layer5.desc": "REST APIs · Named Credentials · External Services — Ofrece una abstracción de autenticación segura y conectividad reutilizable entre los límites de los sistemas.",

    "idx.diagram.tag": "Interactivo",
    "idx.diagram.title": "Diagrama de Arquitectura",
    "idx.diagram.intro": "Haz clic en cada nodo de capa para expandir su alcance técnico, responsabilidades y justificación de diseño.",
    "idx.diagram.node.experience": "Experiencia",
    "idx.diagram.node.orchestration": "Orquestación",
    "idx.diagram.node.service": "Servicio",
    "idx.diagram.node.data": "Datos",
    "idx.diagram.node.integration": "Integración",

    "idx.diagram.panel.experience.title": "Capa de Experiencia",
    "idx.diagram.panel.experience.resp1": "Superficies de interacción basadas en roles mediante Lightning FlexiPages",
    "idx.diagram.panel.experience.resp2": "Componentes LWC con enlaces de datos reactivos @wire",
    "idx.diagram.panel.experience.resp3": "Dashboards de visibilidad ejecutiva con KPIs en tiempo real",
    "idx.diagram.panel.experience.resp4": "Filtrado dinámico y renderizado condicional por perfil",
    "idx.diagram.panel.experience.principle": "Ofrecer superficies de interacción basadas en roles, diseñadas para la claridad operativa y la aceleración de la adopción. Los componentes se mantienen agnósticos a los datos: consumen servicios, nunca los escriben.",

    "idx.diagram.panel.orchestration.title": "Capa de Orquestación",
    "idx.diagram.panel.orchestration.resp1": "Record-Triggered Flow como punto de entrada principal de la automatización",
    "idx.diagram.panel.orchestration.resp2": "Scheduled Flows para el monitoreo de SLA y lógica basada en tiempo",
    "idx.diagram.panel.orchestration.resp3": "Screen Flows para recorridos guiados del usuario dentro de la interfaz",
    "idx.diagram.panel.orchestration.resp4": "Platform Events para la coordinación asíncrona y desacoplada de procesos",
    "idx.diagram.panel.orchestration.principle": "Flow es responsable de la orquestación y la lógica de proceso legible por humanos, por defecto. Apex se gana su lugar cuando el control transaccional, la reutilización, el rendimiento o un límite de integración justifican el costo adicional de ciclo de vida de ingeniería.",

    "idx.diagram.panel.service.title": "Capa de Servicio",
    "idx.diagram.panel.service.resp1": "Métodos Apex invocables llamables desde la orquestación de Flow",
    "idx.diagram.panel.service.resp2": "Cadenas Queueable para la ejecución asíncrona de callouts con reintentos seguros",
    "idx.diagram.panel.service.resp3": "Batch Apex para trabajos de procesamiento masivo de datos de alto volumen",
    "idx.diagram.panel.service.resp4": "Arquitectura de clases de servicio que impone responsabilidad única",
    "idx.diagram.panel.service.principle": "Encapsular la lógica a nivel de transacción para flujos de trabajo críticos en rendimiento y mediación de integraciones. Los servicios son sin estado, seguros ante bulkificación y comprobables de forma independiente.",

    "idx.diagram.panel.data.title": "Capa de Datos y Gobernanza",
    "idx.diagram.panel.data.resp1": "Esquema de objetos personalizados alineado al modelo de dominio del negocio",
    "idx.diagram.panel.data.resp2": "Reglas de validación que garantizan la integridad de los datos al momento de la escritura",
    "idx.diagram.panel.data.resp3": "RBAC mediante Permission Sets y Permission Set Groups",
    "idx.diagram.panel.data.resp4": "Sharing rules y modelado de OWD para seguridad a nivel de registro",
    "idx.diagram.panel.data.principle": "Implementar una alineación de seguridad lista para nivel empresarial y una gobernanza estructurada del ciclo de vida de los datos. La capa de datos es la fuente de verdad: el acceso se gana, no se asume.",

    "idx.diagram.panel.integration.title": "Capa de Integración",
    "idx.diagram.panel.integration.resp1": "Named Credentials como abstracción de autenticación: cero secretos en Apex",
    "idx.diagram.panel.integration.resp2": "Auth Providers OAuth 2.0 para la gestión del ciclo de vida de los tokens",
    "idx.diagram.panel.integration.resp3": "Clase de servicio HttpCallout reutilizable en todos los sistemas externos",
    "idx.diagram.panel.integration.resp4": "Arquitectura de reintentos resiliente a errores mediante encadenamiento de Queueable",
    "idx.diagram.panel.integration.principle": "Proveer una abstracción de autenticación segura y conectividad reutilizable entre los límites de los sistemas. Un único framework de integración soporta todos los sistemas externos, no una clase a medida por cada API.",

    "idx.diagram.gov.title": "Estrategia de Gobernanza de Arquitectura",
    "idx.diagram.gov.pill1": "Separación entre orquestación y ejecución",
    "idx.diagram.gov.pill2": "Abstracción de servicios reutilizable",
    "idx.diagram.gov.pill3": "Superficies declarativas amigables para administradores",
    "idx.diagram.gov.pill4": "Estandarización de seguridad en integraciones",
    "idx.diagram.gov.pill5": "Manejo de transacciones consciente del rendimiento",

    "idx.matrix.tag": "Marco de Decisión",
    "idx.matrix.flow.title": "Usar Flow Cuando",
    "idx.matrix.flow.li1": "Se requiere mantenibilidad por parte del administrador",
    "idx.matrix.flow.li2": "Se esperan ciclos de iteración rápidos",
    "idx.matrix.flow.li3": "La orquestación declarativa es suficiente",
    "idx.matrix.flow.li4": "La transparencia de la lógica de negocio mejora la adopción",
    "idx.matrix.flow.tag": "Declarativo",
    "idx.matrix.apex.title": "Usar Apex Cuando",
    "idx.matrix.apex.li1": "Se necesita control a nivel de transacción",
    "idx.matrix.apex.li2": "Deben coordinarse integraciones complejas",
    "idx.matrix.apex.li3": "La lógica de procesamiento masivo es sensible al rendimiento",
    "idx.matrix.apex.li4": "La abstracción de servicios reutilizable mejora la claridad",
    "idx.matrix.apex.tag": "Programático",
    "idx.matrix.hybrid.title": "Patrón Híbrido",
    "idx.matrix.hybrid.li1": "Capa de orquestación Flow en la parte superior",
    "idx.matrix.hybrid.li2": "Capa de ejecución de servicios Apex debajo",
    "idx.matrix.hybrid.li3": "Framework de integración compartido",
    "idx.matrix.hybrid.li4": "Máxima mantenibilidad + escala empresarial",
    "idx.matrix.hybrid.tag": "Recomendado",

    "idx.projects.tag": "Casos de Estudio",
    "idx.projects.intro": "Patrones de solución de estilo productivo aplicados en las implementaciones del portfolio.",
    "idx.projects.card1.title": "Arquitectura de Automatización de Casos",
    "idx.projects.card1.desc": "Estrategia de enrutamiento automatizado diseñada para reducir la carga de trabajo manual y acelerar el tiempo de respuesta de SLA mediante servicios de lógica de asignación reutilizables.",
    "idx.projects.card1.metricLabel": "niveles de escalamiento automatizados",
    "idx.projects.card2.title": "Arquitectura de Dashboard LWC",
    "idx.projects.card2.desc": "Dashboards Lightning listos para ejecutivos, construidos para la adopción operativa, con proveedores de datos Apex dinámicos y una estrategia de visibilidad de UI basada en roles.",
    "idx.projects.card2.metricLabel": "sincronización de datos en tiempo real",
    "idx.projects.card3.title": "Arquitectura de Integración de API",
    "idx.projects.card3.desc": "Modelo de integración reutilizable basado en Named Credential que permite una comunicación segura con sistemas externos y una ejecución de servicios resiliente a errores.",
    "idx.projects.card3.metricLabel": "capa de integración reutilizable",
    "idx.projects.card4.title": "Análisis Profundo de Automatización Empresarial",
    "idx.projects.card4.desc": "Registro completo de decisiones de arquitectura: contexto, restricciones, compensaciones, capas de solución, modelo de seguridad e impacto de negocio medido.",
    "idx.projects.card4.metricLabel": "registro de decisión de arquitectura",

    "idx.metrics.tag": "Aspectos de Diseño",
    "idx.metrics.intro": "Lo que cada decisión de arquitectura fue realmente construida para lograr.",
    "idx.metrics.card1.label": "Enrutamiento de casos automatizado con Record-Triggered Flow, reemplazando la asignación manual",
    "idx.metrics.card1.domain": "⚙ Velocidad de Automatización",
    "idx.metrics.card2.label": "Dashboards ejecutivos reconstruidos sobre Lightning Web Components con datos en vivo",
    "idx.metrics.card2.domain": "◫ Adopción Ejecutiva",
    "idx.metrics.card3.label": "Un único patrón de integración Named Credential reutilizable aplicado en todos los servicios externos",
    "idx.metrics.card3.domain": "⬡ Confiabilidad de Integración",
    "idx.metrics.card4.label": "Modelado de permisos listo para nivel empresarial aplicado en todas las capas de automatización",
    "idx.metrics.card4.domain": "⬢ Alineación de Seguridad",

    "idx.stack.tag": "Resumen",
    "idx.stack.title": "Stack de Arquitectura Empresarial",
    "idx.stack.row1": "Capa UX",
    "idx.stack.row2": "Capa de Automatización",
    "idx.stack.row3": "Capa de Servicio",
    "idx.stack.row4": "Capa de Datos",
    "idx.stack.row5": "Capa de Integración",

    "idx.cta.sub": "Disponible para roles remotos de Salesforce Platform Engineer (Flow + Apex + Integraciones) en zonas horarias alineadas con EE.UU.<br>Diseño frameworks de automatización escalables que equilibran la mantenibilidad para administradores, la extensibilidad para desarrolladores y la confiabilidad de las integraciones.",

    "pca.title": "Arquitectura Empresarial de<br>Automatización de Casos",
    "pca.summary": "Enrutamiento inteligente basado en Flow, barreras de escalamiento en múltiples niveles y frameworks de validación para la gestión de casos a escala empresarial, eliminando la intervención manual en todo el ciclo de resolución.",
    "pca.impact2": "Niveles de escalamiento automatizados",
    "pca.impact3": "Puntos de contacto de enrutamiento manual",
    "pca.b1.tag": "Contexto", "pca.b1.title": "Problema de Negocio",
    "pca.b1.li1": "La asignación manual de casos provoca retrasos significativos en los tiempos de primera respuesta",
    "pca.b1.li2": "Sin lógica de escalamiento: los casos se estancan sin cumplimiento de SLA",
    "pca.b1.li3": "Validación inconsistente en la creación de casos, generando problemas de calidad de datos",
    "pca.b1.li4": "Sin visibilidad ejecutiva sobre el rendimiento del pipeline de resolución",
    "pca.b2.tag": "Estrategia de Arquitectura", "pca.b2.title": "Diseño de la Solución",
    "pca.b2.li1": "Record-Triggered Flow para la validación de ingreso y la lógica de enrutamiento inicial",
    "pca.b2.li2": "Monitoreo de SLA basado en tiempo y escalamiento implementados con Salesforce Flow",
    "pca.b2.li3": "Apex invocado desde Flow para decisiones de enrutamiento complejas a escala",
    "pca.b2.li4": "Metadatos personalizados para reglas de enrutamiento configurables sin cambios de código",
    "pca.b3.tag": "Orquestación de Flow", "pca.b3.title": "Capas de Implementación",
    "pca.b3.li1": "Puertas de criterios de entrada que evitan la progresión de registros inválidos",
    "pca.b3.li2": "Enrutamiento de asignación mediante transferencia de propiedad basada en colas",
    "pca.b3.li3": "Lógica de escalamiento multirrama implementada con Salesforce Flow",
    "pca.b3.li4": "Lógica de cierre automático para casos inactivos que cumplen criterios de resolución",
    "pca.b4.tag": "Modelo de Seguridad", "pca.b4.title": "Acceso y Cumplimiento",
    "pca.b4.li1": "OWD configurado como Privado; sharing rules para visibilidad entre equipos",
    "pca.b4.li2": "Asignación basada en colas que preserva la integridad completa del registro de auditoría",
    "pca.b4.li3": "Seguridad a nivel de campo en campos sensibles de casos según perfil",
    "pca.b4.li4": "Contexto de ejecución (run-as) de Flow aplicado para un acceso correcto a los registros",
    "pca.b5.tag": "Escalabilidad", "pca.b5.title": "Arquitectura de Crecimiento",
    "pca.b5.li1": "Tabla de enrutamiento en metadatos personalizados: cero cambios de código para nuevas reglas",
    "pca.b5.li2": "Métodos Apex invocables seguros ante bulkificación para procesamiento por lotes",
    "pca.b5.li3": "Arquitectura de subflows de Flow para componentes de lógica modulares y reutilizables",
    "pca.b5.li4": "Platform events para notificaciones de escalamiento asíncronas y desacopladas",
    "pca.b6.tag": "Impacto de Negocio", "pca.b6.title": "Resultados Entregados",
    "pca.b6.li1": "Redujo el tiempo promedio de enrutamiento de casos al reemplazar la asignación manual por enrutamiento automatizado",
    "pca.b6.li2": "Matriz de escalamiento de 3 niveles que elimina los incumplimientos de SLA",
    "pca.b6.li3": "El dashboard ejecutivo muestra métricas de rendimiento de casos en tiempo real",
    "pca.b6.li4": "Las barreras de validación redujeron los incidentes de calidad de datos a casi cero",

    "plwc.title": "Arquitectura de Dashboard<br>Ejecutivo LWC",
    "plwc.summary": "Dashboards ejecutivos en tiempo real construidos sobre Lightning Web Components, con proveedores de datos Apex dinámicos, reportes entre objetos y una estrategia de visibilidad de UI basada en roles, transformando datos crudos en insights listos para la toma de decisiones.",
    "plwc.impact2": "Perfiles ejecutivos atendidos",
    "plwc.impact3": "Sincronización de datos en tiempo real",
    "plwc.b1.tag": "Contexto", "plwc.b1.title": "Problema de Negocio",
    "plwc.b1.li1": "Los ejecutivos dependían de exportaciones semanales a hojas de cálculo para la visibilidad del pipeline",
    "plwc.b1.li2": "Sin reportes en tiempo real entre objetos como Cases, Opportunities y Accounts",
    "plwc.b1.li3": "Diseños de reportes genéricos no alineados con los flujos de toma de decisiones ejecutivas",
    "plwc.b1.li4": "Baja adopción de los reportes nativos de Salesforce, percibidos como demasiado complejos",
    "plwc.b2.tag": "Estrategia de Arquitectura", "plwc.b2.title": "Diseño de la Solución",
    "plwc.b2.li1": "Arquitectura de componentes LWC con adaptadores @wire para enlace de datos en vivo",
    "plwc.b2.li2": "Capa de controladores Apex para agregaciones SOQL complejas entre objetos",
    "plwc.b2.li3": "Diseños FlexiPage con reglas de visibilidad dinámicas por perfil de usuario",
    "plwc.b2.li4": "Editor de propiedades personalizado para la configuración del dashboard sin necesidad de desarrolladores",
    "plwc.b3.tag": "Arquitectura de Componentes", "plwc.b3.title": "Implementación LWC",
    "plwc.b3.li1": "Comunicación entre componentes padre-hijo mediante eventos personalizados y @api",
    "plwc.b3.li2": "Filtrado dinámico mediante propiedades reactivas @track",
    "plwc.b3.li3": "Integración de visualización de KPIs dentro de los componentes LWC",
    "plwc.b3.li4": "Renderizado condicional con directivas de plantilla para vistas basadas en roles",
    "plwc.b4.tag": "Modelo de Seguridad", "plwc.b4.title": "Arquitectura de Acceso",
    "plwc.b4.li1": "Apex with-sharing aplicado: los datos se filtran según el acceso del usuario en ejecución",
    "plwc.b4.li2": "Reglas de visibilidad de FlexiPage que restringen KPIs sensibles según el permission set",
    "plwc.b4.li3": "Seguridad a nivel de campo respetada en las consultas SOQL mediante verificaciones de schema",
    "plwc.b4.li4": "Perfiles de solo lectura para los consumidores del dashboard, sin superficie de riesgo de escritura",
    "plwc.b5.tag": "Escalabilidad", "plwc.b5.title": "Arquitectura de Crecimiento",
    "plwc.b5.li1": "Consultas SOQL agregadas para minimizar el volumen de datos a escala",
    "plwc.b5.li2": "Filtrado del lado del servidor que reduce la carga de datos hacia los componentes LWC",
    "plwc.b5.li3": "Diseño de componentes modular: nuevas tarjetas de KPI agregadas sin necesidad de refactorización",
    "plwc.b5.li4": "Etiquetas personalizadas para todos los textos, habilitando perfiles ejecutivos multilingües",
    "plwc.b6.tag": "Impacto de Negocio", "plwc.b6.title": "Resultados Entregados",
    "plwc.b6.li1": "Reemplazó las exportaciones semanales a hojas de cálculo por un dashboard ejecutivo en vivo dentro de los 30 días posteriores al lanzamiento",
    "plwc.b6.li2": "Visibilidad del pipeline en tiempo real que reemplaza 5 reportes curados manualmente",
    "plwc.b6.li3": "Los ciclos de decisión ejecutiva se redujeron de semanales a diarios",
    "plwc.b6.li4": "Cero dependencia de TI para ajustes de diseño del dashboard después del lanzamiento",

    "papi.title": "Capa de Integración<br>de API Empresarial",
    "papi.summary": "Arquitectura reutilizable de Named Credential con endpoints REST seguros, Auth Providers OAuth 2.0 y capas de sincronización en tiempo real, construyendo una base de integración que escala a través de todos los límites de sistemas externos.",
    "papi.impact1": "Capa de credenciales reutilizable",
    "papi.impact2": "Secretos almacenados en código Apex",
    "papi.impact3": "Sincronización en tiempo real",
    "papi.b1.tag": "Contexto", "papi.b1.title": "Problema de Negocio",
    "papi.b1.li1": "Credenciales de API codificadas directamente en Apex: vulnerabilidad de seguridad crítica",
    "papi.b1.li2": "Sin patrón de integración reutilizable: cada sistema requería código a medida",
    "papi.b1.li3": "La sincronización de datos externos se ejecutaba solo en lotes nocturnos, sin opción en tiempo real",
    "papi.b1.li4": "Sin manejo de errores: los callouts fallidos eran silenciosos y sin mecanismo de reintento",
    "papi.b2.tag": "Estrategia de Arquitectura", "papi.b2.title": "Diseño de la Solución",
    "papi.b2.li1": "Named Credentials + Auth Provider para callouts de Apex sin secretos",
    "papi.b2.li2": "Clase de servicio HttpCallout en Apex: un único punto de integración para todas las APIs",
    "papi.b2.li3": "Platform Events para sincronización asíncrona en tiempo real, desacoplada de las transacciones",
    "papi.b2.li4": "Capa de registro en un objeto personalizado para la auditoría de callouts y la gestión de reintentos",
    "papi.b3.tag": "Capas de Integración", "papi.b3.title": "Implementación Técnica",
    "papi.b3.li1": "Auth Provider OAuth 2.0 que gestiona la renovación de tokens automáticamente",
    "papi.b3.li2": "Named Credential como capa de abstracción: sin URLs ni credenciales en el código",
    "papi.b3.li3": "Cadena de Queueable en Apex para una arquitectura de callouts asíncronos con reintentos seguros",
    "papi.b3.li4": "External Services para el registro de esquemas de API sin código, cuando es viable",
    "papi.b4.tag": "Modelo de Seguridad", "papi.b4.title": "Arquitectura de Credenciales",
    "papi.b4.li1": "Todas las credenciales almacenadas en Named Credentials: cero exposición en Apex",
    "papi.b4.li2": "Delegación de credenciales por usuario mediante Named Credentials a nivel de usuario",
    "papi.b4.li3": "CSP Trusted Sites y CORS configurados para la seguridad de las conexiones salientes",
    "papi.b4.li4": "Registro de callouts con cifrado a nivel de campo en los datos sensibles de respuesta",
    "papi.b5.tag": "Escalabilidad", "papi.b5.title": "Arquitectura Reutilizable",
    "papi.b5.li1": "Una única clase de servicio HttpCallout soporta cualquier endpoint REST mediante configuración",
    "papi.b5.li2": "Metadatos personalizados para el registro de endpoints: nuevas APIs sin necesidad de código",
    "papi.b5.li3": "El bus de Platform Events absorbe picos de volumen sin riesgo de exceder los governor limits",
    "papi.b5.li4": "Cola de reintentos con backoff exponencial para resiliencia ante fallas transitorias",
    "papi.b6.tag": "Impacto de Negocio", "papi.b6.title": "Resultados Entregados",
    "papi.b6.li1": "Los secretos de API se trasladaron fuera del código Apex hacia Named Credentials",
    "papi.b6.li2": "La capa reutilizable redujo el tiempo de nuevas integraciones de semanas a días",
    "papi.b6.li3": "La sincronización en tiempo real reemplazó el lote nocturno: la latencia se redujo de 24h a segundos",
    "papi.b6.li4": "El registro de callouts muestra la salud de las integraciones en el dashboard ejecutivo",

    "padr.title": "Análisis Profundo de<br>Automatización Empresarial",
    "padr.summary": "Un Registro de Decisión de Arquitectura (ADR) completo, que cubre el contexto, la declaración del problema, las restricciones, la justificación de la decisión, las capas de solución, el modelo de seguridad, la arquitectura de escalabilidad, las compensaciones y el impacto de negocio.",
    "padr.impact1": "Registro de Decisión de Arquitectura",
    "padr.impact3": "Decisiones de arquitectura documentadas",
    "padr.b1.num": "01 · Contexto", "padr.b1.title": "Contexto Organizacional",
    "padr.b1.p1": "Los equipos de soporte procesaban grandes volúmenes de casos entrantes con enrutamiento de asignación manual, seguimiento de propiedad inconsistente y brechas de visibilidad de SLA que afectaban el rendimiento general de respuesta y la capacidad de reporte ejecutivo.",
    "padr.b1.p2": "El proceso existente requería que los agentes clasificaran, asignaran y escalaran los casos manualmente, creando cuellos de botella en cada punto de transferencia y haciendo que el cumplimiento del SLA dependiera por completo de la disciplina individual en lugar de una aplicación sistémica.",
    "padr.b2.num": "02 · Declaración del Problema", "padr.b2.title": "Puntos Centrales de Falla",
    "padr.b2.li1": "El enrutamiento manual generaba retrasos de propiedad que incumplían regularmente el objetivo de SLA",
    "padr.b2.li2": "Sin modelo de escalamiento estructurado: los casos se estancaban sin una ruta automatizada",
    "padr.b2.li3": "La visibilidad del cumplimiento de SLA se limitaba a la revisión manual de dashboards",
    "padr.b2.li4": "El liderazgo carecía de reportes en tiempo real sobre el rendimiento del pipeline de resolución",
    "padr.b2.li5": "Validación inconsistente en la ingesta, generando problemas de calidad de datos posteriores",
    "padr.b3.num": "03 · Restricciones", "padr.b3.title": "Restricciones de Arquitectura",
    "padr.b3.li1": "Se requería automatización mantenible por administradores: una solución solo en Apex no era viable",
    "padr.b3.li2": "Arquitectura escalable para la futura expansión de colas sin duplicación de lógica",
    "padr.b3.li3": "Evitar Apex a menos que el patrón declarativo fuera insuficiente para el requerimiento",
    "padr.b3.li4": "Estructura lista para integración ante una posible futura conexión con un sistema ITSM",
    "padr.b3.li5": "Despliegue dentro de la org de Salesforce existente: sin inversión en nuevas licencias",
    "padr.b4.num": "04 · Decisión de Arquitectura", "padr.b4.title": "Estrategia Elegida: Híbrida Flow-First con Capa de Servicio Apex",
    "padr.b4.p1": "Se diseñó un modelo de orquestación Flow-first respaldado por subflows modulares que permiten reutilizar la lógica de enrutamiento de asignación entre procesos de servicio, preservando la mantenibilidad declarativa para el equipo de administración.",
    "padr.b4.p2": "Apex se introdujo únicamente en el límite del servicio, como métodos invocables llamados desde Flow para operaciones que superaban los límites de lo declarativo: lógica de enrutamiento masivo compleja, decisiones de enrutamiento dependientes de callouts y manejo de excepciones personalizado.",
    "padr.b5.num": "05 · Capas de la Solución", "padr.b5.title": "Arquitectura de Implementación",
    "padr.b5.li1": "Record-Triggered Flow como punto de entrada principal de orquestación en la creación de Case",
    "padr.b5.li2": "Subflow de enrutamiento de asignación reutilizable, invocable desde cualquier proceso basado en colas",
    "padr.b5.li3": "Controles de validación de transición de estado que evitan progresiones de estado de caso inválidas",
    "padr.b5.li4": "Monitoreo de SLA basado en tiempo y escalamiento automatizado implementados con Salesforce Flow",
    "padr.b5.li5": "Dashboards de reporte para el liderazgo con componentes de visibilidad del pipeline en tiempo real",
    "padr.b6.num": "06 · Compensaciones de Arquitectura", "padr.b6.title": "Justificación de la Decisión",
    "padr.b6.c1.label": "✓ Elegido: Orquestación Flow-first",
    "padr.b6.c1.p": "Maximiza la mantenibilidad por parte de administradores. Los stakeholders de negocio pueden ajustar la lógica de enrutamiento sin depender de desarrolladores. Reduce el tiempo del ciclo de cambio de semanas a horas.",
    "padr.b6.c2.label": "○ Considerado: Trigger completo en Apex",
    "padr.b6.c2.p": "Mayor techo de rendimiento, pero elimina la visibilidad del administrador. Requiere un desarrollador para cada cambio en las reglas de enrutamiento. Se descartó por la estructura del equipo y el costo de mantenimiento.",
    "padr.b6.c3.label": "✓ Elegido: Patrón de subflow modular",
    "padr.b6.c3.p": "Lógica de enrutamiento reutilizable en múltiples colas de casos sin duplicación. Permite aplicar un comportamiento consistente en todos los puntos de entrada del proceso.",
    "padr.b6.c4.label": "○ Considerado: Flow monolítico",
    "padr.b6.c4.p": "Construcción inicial más simple, pero se vuelve inmantenible a escala. Requiere duplicar la lógica para cada nueva cola. Se descartó para preservar la integridad arquitectónica a largo plazo.",
    "padr.b7.num": "07 · Modelo de Seguridad", "padr.b7.title": "Arquitectura de Seguridad y Cumplimiento",
    "padr.b7.li1": "Visibilidad de registros basada en jerarquía de roles: los agentes solo ven los casos de su cola",
    "padr.b7.li2": "Aplicación de seguridad a nivel de campo en datos sensibles de casos según la asignación de perfil",
    "padr.b7.li3": "Transiciones de propiedad seguras para auditoría: todas las asignaciones se registran en el historial",
    "padr.b7.li4": "Contexto de usuario run-as de Flow configurado para un comportamiento correcto de sharing de registros",
    "padr.b7.li5": "Propiedad basada en colas que preserva el registro de auditoría de cumplimiento en los escalamientos",
    "padr.b8.num": "08 · Modelo de Escalabilidad", "padr.b8.title": "Arquitectura de Crecimiento",
    "padr.b8.p1": "La arquitectura de subflows modulares y reutilizables permite la expansión a colas de servicio adicionales sin introducir duplicación de lógica ni dependencia de Apex. Las nuevas reglas de enrutamiento se registran en Custom Metadata, sin necesidad de despliegue de código.",
    "padr.b8.li1": "La tabla de enrutamiento en Custom Metadata permite cambios de reglas sin modificar Flow ni Apex",
    "padr.b8.li2": "Métodos Apex invocables seguros ante bulkificación manejan escenarios de enrutamiento por lotes",
    "padr.b8.li3": "Los Platform Events permiten futuras notificaciones de escalamiento asíncronas a sistemas externos",
    "padr.b8.li4": "La arquitectura soporta la expansión horizontal de colas sin introducir duplicación de lógica",
    "padr.b9.num": "09 · Impacto de Negocio", "padr.b9.title": "Resultados Medidos",
    "padr.b9.li1": "Reemplazó la carga de trabajo de asignación manual por enrutamiento automatizado dentro de los primeros 30 días",
    "padr.b9.li2": "Mejoró la visibilidad del seguimiento de SLA: el cumplimiento ahora es medible en tiempo real",
    "padr.b9.li3": "Habilitó dashboards de reporte a nivel de liderazgo con métricas del pipeline en vivo",
    "padr.b9.li4": "Las barreras de validación eliminaron los incidentes recurrentes de calidad de datos en la ingesta",
    "padr.b9.li5": "El equipo de administración ahora gestiona los cambios de reglas de enrutamiento de forma independiente, sin dependencia de desarrolladores"
  },

  fr: {
    "nav.architecture": "Architecture",
    "nav.diagram": "Diagramme",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.backToPortfolio": "← Retour au Portfolio",
    "nav.timezone": "GMT-5 · chevauchement PT",
    "nav.available": "Disponible pour Rôles Remote",

    "footer.projects": "Projets",
    "footer.diagram": "Diagramme",
    "footer.architecture": "Architecture",
    "footer.contact": "Contact",

    "common.backAllProjects": "← Tous les Projets d'Architecture",
    "common.downloadResume": "Télécharger CV ↓",
    "common.viewArchitecture": "Voir l'Architecture →",
    "common.viewFullCaseStudy": "Voir l'Étude de Cas Complète →",
    "common.close": "Fermer",
    "common.connectLinkedin": "Connectons-nous sur LinkedIn ↗",
    "common.caseStudyDisclosure": "Étude de cas composite, basée sur un travail de production Salesforce réel. Les détails spécifiques aux clients ont été anonymisés et généralisés ; certains éléments combinent des schémas provenant de plusieurs missions.",

    "headline": "Je conçois des systèmes Salesforce<br>faits pour tenir à grande échelle.",
    "architectureTitle": "Stratégie d'Architecture Salesforce Entreprise",
    "flowMatrixTitle": "Matrice de Décision Flow vs Apex",
    "decisionPanelTitle": "Panel de Revue des Décisions d'Architecture",
    "metricsTitle": "Points Forts de la Conception d'Architecture",
    "ctaTitle": "Construisons une Automatisation<br>Salesforce Entreprise Ensemble",
    "idx.hero.eyebrow": "Consultant Technique Salesforce",
    "idx.hero.sub": "Flow et Apex là où chacun mérite sa place · des modèles de sharing pensés pour l'organisation, pas un modèle générique · des intégrations qui échouent de façon visible, jamais en silence.",
    "idx.hero.ctaProjects": "Voir les Projets d'Architecture",

    "idx.certs.tag": "Certifications",
    "idx.certs.title": "Certifications Salesforce",

    "idx.arch.tag": "Architecture",
    "idx.arch.intro": "Conception de frameworks d'orchestration Flow scalables, de couches de service Apex réutilisables et d'architectures d'intégration de niveau entreprise sur des environnements Sales Cloud. Axé sur la performance, l'alignement de gouvernance et l'automatisation maintenable à grande échelle.",
    "idx.arch.layer1.name": "Couche d'Expérience",
    "idx.arch.layer1.desc": "Lightning UI · LWC Dashboards · Executive Visibility Components — Fournit des surfaces d'interaction basées sur les rôles, conçues pour la clarté opérationnelle et l'accélération de l'adoption.",
    "idx.arch.layer2.name": "Couche d'Orchestration",
    "idx.arch.layer2.desc": "Flow Orchestration · Screen Flows · Record-Triggered Flows — Coordonne les processus métier de manière déclarative tout en conservant la flexibilité nécessaire à l'itération au niveau administrateur.",
    "idx.arch.layer3.name": "Couche de Service",
    "idx.arch.layer3.desc": "Reusable Apex Services · Invocable Methods · Async Processing — Encapsule la logique au niveau transactionnel pour les workflows critiques en performance et la médiation des intégrations.",
    "idx.arch.layer4.name": "Couche de Données et Gouvernance",
    "idx.arch.layer4.desc": "Objects · Validation Rules · Permission Models · Sharing Strategy — Met en œuvre un alignement de sécurité de niveau entreprise et une gouvernance structurée du cycle de vie des données.",
    "idx.arch.layer5.name": "Couche d'Intégration",
    "idx.arch.layer5.desc": "REST APIs · Named Credentials · External Services — Fournit une abstraction d'authentification sécurisée et une connectivité réutilisable entre les frontières des systèmes.",

    "idx.diagram.tag": "Interactif",
    "idx.diagram.title": "Diagramme d'Architecture",
    "idx.diagram.intro": "Cliquez sur chaque nœud de couche pour développer sa portée technique, ses responsabilités et sa justification de conception.",
    "idx.diagram.node.experience": "Expérience",
    "idx.diagram.node.orchestration": "Orchestration",
    "idx.diagram.node.service": "Service",
    "idx.diagram.node.data": "Données",
    "idx.diagram.node.integration": "Intégration",

    "idx.diagram.panel.experience.title": "Couche d'Expérience",
    "idx.diagram.panel.experience.resp1": "Surfaces d'interaction basées sur les rôles via Lightning FlexiPages",
    "idx.diagram.panel.experience.resp2": "Composants LWC avec liaisons de données réactives @wire",
    "idx.diagram.panel.experience.resp3": "Tableaux de bord de visibilité exécutive avec KPI en temps réel",
    "idx.diagram.panel.experience.resp4": "Filtrage dynamique et rendu conditionnel par profil",
    "idx.diagram.panel.experience.principle": "Fournir des surfaces d'interaction basées sur les rôles, conçues pour la clarté opérationnelle et l'accélération de l'adoption. Les composants restent agnostiques aux données : ils consomment les services, ne les écrivent jamais.",

    "idx.diagram.panel.orchestration.title": "Couche d'Orchestration",
    "idx.diagram.panel.orchestration.resp1": "Record-Triggered Flow comme point d'entrée principal de l'automatisation",
    "idx.diagram.panel.orchestration.resp2": "Scheduled Flows pour le suivi des SLA et la logique temporelle",
    "idx.diagram.panel.orchestration.resp3": "Screen Flows pour des parcours utilisateur guidés au sein de l'interface",
    "idx.diagram.panel.orchestration.resp4": "Platform Events pour la coordination asynchrone et découplée des processus",
    "idx.diagram.panel.orchestration.principle": "Flow est responsable de l'orchestration et de la logique de processus lisible par un humain, par défaut. Apex se justifie lorsque le contrôle transactionnel, la réutilisation, la performance ou une frontière d'intégration rendent le coût d'ingénierie supplémentaire pertinent.",

    "idx.diagram.panel.service.title": "Couche de Service",
    "idx.diagram.panel.service.resp1": "Méthodes Apex invocables appelables depuis l'orchestration Flow",
    "idx.diagram.panel.service.resp2": "Chaînes Queueable pour une exécution asynchrone des callouts avec reprise sur erreur sécurisée",
    "idx.diagram.panel.service.resp3": "Batch Apex pour les traitements de données en masse à fort volume",
    "idx.diagram.panel.service.resp4": "Architecture de classes de service imposant une responsabilité unique",
    "idx.diagram.panel.service.principle": "Encapsuler la logique au niveau transactionnel pour les workflows critiques en performance et la médiation des intégrations. Les services sont sans état, sûrs en bulkification et testables indépendamment.",

    "idx.diagram.panel.data.title": "Couche de Données et Gouvernance",
    "idx.diagram.panel.data.resp1": "Schéma d'objets personnalisés aligné sur le modèle de domaine métier",
    "idx.diagram.panel.data.resp2": "Règles de validation garantissant l'intégrité des données lors de l'écriture",
    "idx.diagram.panel.data.resp3": "RBAC via Permission Sets et Permission Set Groups",
    "idx.diagram.panel.data.resp4": "Sharing rules et modélisation OWD pour la sécurité au niveau des enregistrements",
    "idx.diagram.panel.data.principle": "Mettre en œuvre un alignement de sécurité de niveau entreprise et une gouvernance structurée du cycle de vie des données. La couche de données est la source de vérité — l'accès se gagne, il ne se présume pas.",

    "idx.diagram.panel.integration.title": "Couche d'Intégration",
    "idx.diagram.panel.integration.resp1": "Named Credentials comme abstraction d'authentification — zéro secret dans Apex",
    "idx.diagram.panel.integration.resp2": "Auth Providers OAuth 2.0 pour la gestion du cycle de vie des tokens",
    "idx.diagram.panel.integration.resp3": "Classe de service HttpCallout réutilisable pour tous les systèmes externes",
    "idx.diagram.panel.integration.resp4": "Architecture de reprise résiliente aux erreurs via un chaînage de Queueable",
    "idx.diagram.panel.integration.principle": "Fournir une abstraction d'authentification sécurisée et une connectivité réutilisable entre les frontières des systèmes. Un seul framework d'intégration prend en charge tous les systèmes externes — pas une classe sur mesure par API.",

    "idx.diagram.gov.title": "Stratégie de Gouvernance de l'Architecture",
    "idx.diagram.gov.pill1": "Séparation entre orchestration et exécution",
    "idx.diagram.gov.pill2": "Abstraction de services réutilisable",
    "idx.diagram.gov.pill3": "Surfaces déclaratives conviviales pour les administrateurs",
    "idx.diagram.gov.pill4": "Standardisation de la sécurité des intégrations",
    "idx.diagram.gov.pill5": "Gestion des transactions tenant compte de la performance",

    "idx.matrix.tag": "Cadre de Décision",
    "idx.matrix.flow.title": "Utiliser Flow Quand",
    "idx.matrix.flow.li1": "La maintenabilité par l'administrateur est requise",
    "idx.matrix.flow.li2": "Des cycles d'itération rapides sont attendus",
    "idx.matrix.flow.li3": "L'orchestration déclarative est suffisante",
    "idx.matrix.flow.li4": "La transparence de la logique métier améliore l'adoption",
    "idx.matrix.flow.tag": "Déclaratif",
    "idx.matrix.apex.title": "Utiliser Apex Quand",
    "idx.matrix.apex.li1": "Un contrôle au niveau transactionnel est nécessaire",
    "idx.matrix.apex.li2": "Des intégrations complexes doivent être coordonnées",
    "idx.matrix.apex.li3": "La logique de traitement en masse est sensible à la performance",
    "idx.matrix.apex.li4": "L'abstraction de services réutilisable améliore la clarté",
    "idx.matrix.apex.tag": "Programmatique",
    "idx.matrix.hybrid.title": "Modèle Hybride",
    "idx.matrix.hybrid.li1": "Couche d'orchestration Flow au sommet",
    "idx.matrix.hybrid.li2": "Couche d'exécution de services Apex en dessous",
    "idx.matrix.hybrid.li3": "Framework d'intégration partagé",
    "idx.matrix.hybrid.li4": "Maintenabilité maximale + échelle entreprise",
    "idx.matrix.hybrid.tag": "Recommandé",

    "idx.projects.tag": "Études de Cas",
    "idx.projects.intro": "Modèles de solution de style production appliqués dans les implémentations du portfolio.",
    "idx.projects.card1.title": "Architecture d'Automatisation des Cas",
    "idx.projects.card1.desc": "Stratégie de routage automatisé conçue pour réduire la charge de travail manuelle et accélérer le temps de réponse SLA grâce à des services de logique d'assignation réutilisables.",
    "idx.projects.card1.metricLabel": "niveaux d'escalade automatisés",
    "idx.projects.card2.title": "Architecture de Tableau de Bord LWC",
    "idx.projects.card2.desc": "Tableaux de bord Lightning prêts pour l'exécutif, conçus pour l'adoption opérationnelle, avec des fournisseurs de données Apex dynamiques et une stratégie de visibilité UI basée sur les rôles.",
    "idx.projects.card2.metricLabel": "synchronisation des données en temps réel",
    "idx.projects.card3.title": "Architecture d'Intégration API",
    "idx.projects.card3.desc": "Modèle d'intégration réutilisable basé sur Named Credential prenant en charge une communication sécurisée avec les systèmes externes et une exécution de services résiliente aux erreurs.",
    "idx.projects.card3.metricLabel": "couche d'intégration réutilisable",
    "idx.projects.card4.title": "Analyse Approfondie de l'Automatisation d'Entreprise",
    "idx.projects.card4.desc": "Registre complet des décisions d'architecture — contexte, contraintes, compromis, couches de solution, modèle de sécurité et impact business mesuré.",
    "idx.projects.card4.metricLabel": "registre de décision d'architecture",

    "idx.metrics.tag": "Points Forts de Conception",
    "idx.metrics.intro": "Ce que chaque décision d'architecture a été réellement conçue pour accomplir.",
    "idx.metrics.card1.label": "Routage des cas automatisé avec Record-Triggered Flow, remplaçant l'assignation manuelle",
    "idx.metrics.card1.domain": "⚙ Vitesse d'Automatisation",
    "idx.metrics.card2.label": "Tableaux de bord exécutifs reconstruits sur Lightning Web Components avec des données en direct",
    "idx.metrics.card2.domain": "◫ Adoption Exécutive",
    "idx.metrics.card3.label": "Un seul modèle d'intégration Named Credential réutilisable appliqué à tous les services externes",
    "idx.metrics.card3.domain": "⬡ Fiabilité d'Intégration",
    "idx.metrics.card4.label": "Modélisation des permissions de niveau entreprise appliquée à toutes les couches d'automatisation",
    "idx.metrics.card4.domain": "⬢ Alignement de Sécurité",

    "idx.stack.tag": "Résumé",
    "idx.stack.title": "Stack d'Architecture Entreprise",
    "idx.stack.row1": "Couche UX",
    "idx.stack.row2": "Couche d'Automatisation",
    "idx.stack.row3": "Couche de Service",
    "idx.stack.row4": "Couche de Données",
    "idx.stack.row5": "Couche d'Intégration",

    "idx.cta.sub": "Disponible pour des postes remote de Salesforce Platform Engineer (Flow + Apex + Intégrations) sur des fuseaux horaires alignés US.<br>Je conçois des frameworks d'automatisation scalables qui équilibrent la maintenabilité pour les administrateurs, l'extensibilité pour les développeurs et la fiabilité des intégrations.",

    "pca.title": "Architecture d'Automatisation<br>des Cas en Entreprise",
    "pca.summary": "Routage intelligent piloté par Flow, garde-fous d'escalade multi-niveaux et frameworks de validation pour la gestion des cas à l'échelle de l'entreprise — éliminant l'intervention manuelle sur l'ensemble du cycle de résolution.",
    "pca.impact2": "Niveaux d'escalade automatisés",
    "pca.impact3": "Points de contact de routage manuel",
    "pca.b1.tag": "Contexte", "pca.b1.title": "Problème Métier",
    "pca.b1.li1": "L'assignation manuelle des cas provoque des retards significatifs sur les délais de première réponse",
    "pca.b1.li2": "Aucune logique d'escalade — les cas stagnent sans application des SLA",
    "pca.b1.li3": "Validation incohérente à la création des cas, entraînant des problèmes de qualité des données",
    "pca.b1.li4": "Aucune visibilité exécutive sur la performance du pipeline de résolution",
    "pca.b2.tag": "Stratégie d'Architecture", "pca.b2.title": "Conception de la Solution",
    "pca.b2.li1": "Record-Triggered Flow pour la validation à l'entrée et la logique de routage initiale",
    "pca.b2.li2": "Suivi des SLA basé sur le temps et escalade implémentés avec Salesforce Flow",
    "pca.b2.li3": "Apex invoqué depuis Flow pour des décisions de routage complexes à grande échelle",
    "pca.b2.li4": "Métadonnées personnalisées pour des règles de routage configurables sans modification de code",
    "pca.b3.tag": "Orchestration Flow", "pca.b3.title": "Couches d'Implémentation",
    "pca.b3.li1": "Portes de critères d'entrée empêchant la progression d'enregistrements invalides",
    "pca.b3.li2": "Routage d'assignation via un transfert de propriété basé sur des files d'attente",
    "pca.b3.li3": "Logique d'escalade multi-branches implémentée avec Salesforce Flow",
    "pca.b3.li4": "Logique de clôture automatique pour les cas obsolètes remplissant les critères de résolution",
    "pca.b4.tag": "Modèle de Sécurité", "pca.b4.title": "Accès et Conformité",
    "pca.b4.li1": "OWD configuré en Privé ; sharing rules pour la visibilité entre équipes",
    "pca.b4.li2": "Assignation basée sur des files d'attente préservant l'intégrité complète de la piste d'audit",
    "pca.b4.li3": "Sécurité au niveau des champs sur les champs sensibles des cas selon le profil",
    "pca.b4.li4": "Contexte d'exécution (run-as) de Flow appliqué pour un accès correct aux enregistrements",
    "pca.b5.tag": "Scalabilité", "pca.b5.title": "Architecture de Croissance",
    "pca.b5.li1": "Table de routage en métadonnées personnalisées — zéro changement de code pour de nouvelles règles",
    "pca.b5.li2": "Méthodes Apex invocables sûres en bulkification pour le traitement par lots",
    "pca.b5.li3": "Architecture de subflows Flow pour des composants logiques modulaires et réutilisables",
    "pca.b5.li4": "Platform events pour des notifications d'escalade asynchrones et découplées",
    "pca.b6.tag": "Impact Métier", "pca.b6.title": "Résultats Livrés",
    "pca.b6.li1": "A réduit le temps moyen de routage des cas en remplaçant l'assignation manuelle par un routage automatisé",
    "pca.b6.li2": "Matrice d'escalade à 3 niveaux éliminant les manquements aux SLA",
    "pca.b6.li3": "Le tableau de bord exécutif affiche les métriques de débit des cas en temps réel",
    "pca.b6.li4": "Les garde-fous de validation ont réduit les incidents de qualité des données à presque zéro",

    "plwc.title": "Architecture de Tableau de Bord<br>Exécutif LWC",
    "plwc.summary": "Tableaux de bord exécutifs en temps réel construits sur Lightning Web Components, avec des fournisseurs de données Apex dynamiques, des rapports inter-objets et une stratégie de visibilité UI basée sur les rôles — transformant des données brutes en insights prêts pour la décision.",
    "plwc.impact2": "Profils exécutifs desservis",
    "plwc.impact3": "Synchronisation des données en temps réel",
    "plwc.b1.tag": "Contexte", "plwc.b1.title": "Problème Métier",
    "plwc.b1.li1": "Les dirigeants dépendaient d'exports hebdomadaires vers des feuilles de calcul pour la visibilité du pipeline",
    "plwc.b1.li2": "Aucun rapport en temps réel inter-objets entre Cases, Opportunities et Accounts",
    "plwc.b1.li3": "Mises en page de rapports génériques non alignées avec les workflows de décision des dirigeants",
    "plwc.b1.li4": "Faible adoption des rapports natifs Salesforce — perçus comme trop complexes",
    "plwc.b2.tag": "Stratégie d'Architecture", "plwc.b2.title": "Conception de la Solution",
    "plwc.b2.li1": "Architecture de composants LWC avec adaptateurs @wire pour une liaison de données en direct",
    "plwc.b2.li2": "Couche de contrôleurs Apex pour des agrégations SOQL complexes inter-objets",
    "plwc.b2.li3": "Mises en page FlexiPage avec des règles de visibilité dynamiques par profil utilisateur",
    "plwc.b2.li4": "Éditeur de propriétés personnalisé pour la configuration du tableau de bord sans développeur",
    "plwc.b3.tag": "Architecture de Composants", "plwc.b3.title": "Implémentation LWC",
    "plwc.b3.li1": "Communication entre composants parent-enfant via des événements personnalisés et @api",
    "plwc.b3.li2": "Filtrage dynamique via des propriétés réactives @track",
    "plwc.b3.li3": "Intégration de la visualisation des KPI au sein des composants LWC",
    "plwc.b3.li4": "Rendu conditionnel avec des directives de template pour des vues basées sur les rôles",
    "plwc.b4.tag": "Modèle de Sécurité", "plwc.b4.title": "Architecture d'Accès",
    "plwc.b4.li1": "Apex with-sharing appliqué — les données sont filtrées selon l'accès de l'utilisateur en cours",
    "plwc.b4.li2": "Règles de visibilité FlexiPage restreignant les KPI sensibles selon le permission set",
    "plwc.b4.li3": "Sécurité au niveau des champs respectée au niveau des requêtes SOQL via des vérifications de schéma",
    "plwc.b4.li4": "Profils en lecture seule pour les consommateurs du tableau de bord, sans surface de risque en écriture",
    "plwc.b5.tag": "Scalabilité", "plwc.b5.title": "Architecture de Croissance",
    "plwc.b5.li1": "Requêtes SOQL agrégées pour minimiser le volume de données à grande échelle",
    "plwc.b5.li2": "Filtrage côté serveur réduisant la charge utile transmise aux composants LWC",
    "plwc.b5.li3": "Conception de composants modulaire — nouvelles cartes KPI ajoutées sans refactorisation",
    "plwc.b5.li4": "Libellés personnalisés pour tous les textes, permettant des profils exécutifs multilingues",
    "plwc.b6.tag": "Impact Métier", "plwc.b6.title": "Résultats Livrés",
    "plwc.b6.li1": "A remplacé les exports hebdomadaires vers des feuilles de calcul par un tableau de bord exécutif en direct dans les 30 jours suivant le lancement",
    "plwc.b6.li2": "Visibilité du pipeline en temps réel remplaçant 5 rapports curés manuellement",
    "plwc.b6.li3": "Les cycles de décision exécutifs sont passés d'une cadence hebdomadaire à quotidienne",
    "plwc.b6.li4": "Aucune dépendance IT pour les ajustements de mise en page du tableau de bord après le lancement",

    "papi.title": "Couche d'Intégration<br>API Entreprise",
    "papi.summary": "Architecture réutilisable de Named Credential avec des endpoints REST sécurisés, des Auth Providers OAuth 2.0 et des couches de synchronisation en temps réel — construisant une fondation d'intégration qui s'adapte à toutes les frontières de systèmes externes.",
    "papi.impact1": "Couche de credentials réutilisable",
    "papi.impact2": "Secrets stockés dans le code Apex",
    "papi.impact3": "Synchronisation en temps réel",
    "papi.b1.tag": "Contexte", "papi.b1.title": "Problème Métier",
    "papi.b1.li1": "Identifiants API codés en dur dans Apex — vulnérabilité de sécurité critique",
    "papi.b1.li2": "Aucun modèle d'intégration réutilisable — chaque système nécessitait du code sur mesure",
    "papi.b1.li3": "La synchronisation des données externes s'exécutait uniquement en batch nocturne — aucune option temps réel",
    "papi.b1.li4": "Aucune gestion d'erreurs — les callouts échoués étaient silencieux, sans mécanisme de reprise",
    "papi.b2.tag": "Stratégie d'Architecture", "papi.b2.title": "Conception de la Solution",
    "papi.b2.li1": "Named Credentials + Auth Provider pour des callouts Apex sans secret",
    "papi.b2.li2": "Classe de service HttpCallout en Apex — point d'intégration unique pour toutes les API",
    "papi.b2.li3": "Platform Events pour une synchronisation asynchrone en temps réel, découplée des transactions",
    "papi.b2.li4": "Couche de journalisation sur un objet personnalisé pour l'audit des callouts et la gestion des reprises",
    "papi.b3.tag": "Couches d'Intégration", "papi.b3.title": "Implémentation Technique",
    "papi.b3.li1": "Auth Provider OAuth 2.0 gérant automatiquement le renouvellement des tokens",
    "papi.b3.li2": "Named Credential comme couche d'abstraction — aucune URL ni identifiant dans le code",
    "papi.b3.li3": "Chaîne Queueable en Apex pour une architecture de callouts asynchrones avec reprise sécurisée",
    "papi.b3.li4": "External Services pour l'enregistrement de schémas API sans code, lorsque cela est viable",
    "papi.b4.tag": "Modèle de Sécurité", "papi.b4.title": "Architecture des Identifiants",
    "papi.b4.li1": "Tous les identifiants stockés dans des Named Credentials — aucune exposition dans Apex",
    "papi.b4.li2": "Délégation des identifiants par utilisateur via des Named Credentials au niveau utilisateur",
    "papi.b4.li3": "CSP Trusted Sites et CORS configurés pour la sécurité des connexions sortantes",
    "papi.b4.li4": "Journal des callouts avec chiffrement au niveau des champs sur les données de réponse sensibles",
    "papi.b5.tag": "Scalabilité", "papi.b5.title": "Architecture Réutilisable",
    "papi.b5.li1": "Une seule classe de service HttpCallout prend en charge n'importe quel endpoint REST via la configuration",
    "papi.b5.li2": "Métadonnées personnalisées pour l'enregistrement des endpoints — nouvelles API sans code",
    "papi.b5.li3": "Le bus Platform Events absorbe les pics de volume sans risque de dépasser les governor limits",
    "papi.b5.li4": "File de reprise avec backoff exponentiel pour la résilience aux pannes transitoires",
    "papi.b6.tag": "Impact Métier", "papi.b6.title": "Résultats Livrés",
    "papi.b6.li1": "Les secrets API ont été déplacés hors du code Apex vers des Named Credentials",
    "papi.b6.li2": "La couche réutilisable a réduit le temps des nouvelles intégrations de plusieurs semaines à quelques jours",
    "papi.b6.li3": "La synchronisation en temps réel a remplacé le batch nocturne — la latence est passée de 24h à quelques secondes",
    "papi.b6.li4": "La journalisation des callouts expose l'état de santé des intégrations dans le tableau de bord exécutif",

    "padr.title": "Analyse Approfondie de<br>l'Automatisation d'Entreprise",
    "padr.summary": "Un Registre de Décision d'Architecture (ADR) complet — couvrant le contexte, l'énoncé du problème, les contraintes, la justification de la décision, les couches de solution, le modèle de sécurité, l'architecture de scalabilité, les compromis et l'impact business.",
    "padr.impact1": "Registre de Décision d'Architecture",
    "padr.impact3": "Décisions d'architecture documentées",
    "padr.b1.num": "01 · Contexte", "padr.b1.title": "Contexte Organisationnel",
    "padr.b1.p1": "Les équipes de support traitaient des volumes élevés de cas entrants avec un routage d'assignation manuel, un suivi de propriété incohérent et des lacunes de visibilité SLA affectant la performance globale de réponse et la capacité de reporting exécutif.",
    "padr.b1.p2": "Le processus existant exigeait que les agents trient, assignent et escaladent les cas manuellement — créant des goulots d'étranglement à chaque point de transfert et rendant la conformité aux SLA entièrement dépendante de la discipline individuelle plutôt que d'une application systémique.",
    "padr.b2.num": "02 · Énoncé du Problème", "padr.b2.title": "Points de Défaillance Principaux",
    "padr.b2.li1": "Le routage manuel créait des retards de propriété qui manquaient régulièrement l'objectif SLA",
    "padr.b2.li2": "Aucun modèle d'escalade structuré — les cas stagnaient sans chemin automatisé",
    "padr.b2.li3": "La visibilité de la conformité SLA se limitait à une revue manuelle des tableaux de bord",
    "padr.b2.li4": "La direction manquait de reporting en temps réel sur le débit du pipeline de résolution",
    "padr.b2.li5": "Validation incohérente à l'entrée, entraînant des problèmes de qualité des données en aval",
    "padr.b3.num": "03 · Contraintes", "padr.b3.title": "Contraintes d'Architecture",
    "padr.b3.li1": "Une automatisation maintenable par l'administrateur était requise — une solution uniquement en Apex n'était pas viable",
    "padr.b3.li2": "Architecture scalable pour une future expansion des files d'attente sans duplication de logique",
    "padr.b3.li3": "Éviter Apex sauf si le modèle déclaratif s'avérait insuffisant pour le besoin",
    "padr.b3.li4": "Structure prête pour l'intégration en vue d'une éventuelle future connexion à un système ITSM",
    "padr.b3.li5": "Déploiement au sein de l'org Salesforce existante — aucun nouvel investissement en licences",
    "padr.b4.num": "04 · Décision d'Architecture", "padr.b4.title": "Stratégie Retenue : Hybride Flow-First avec Couche de Service Apex",
    "padr.b4.p1": "Un modèle d'orchestration Flow-first a été conçu, appuyé par des subflows modulaires permettant la réutilisation de la logique de routage d'assignation entre les processus de service, tout en préservant la maintenabilité déclarative pour l'équipe d'administration.",
    "padr.b4.p2": "Apex a été introduit uniquement à la frontière du service — sous forme de méthodes invocables appelées par Flow pour les opérations dépassant les limites du déclaratif : logique de routage en masse complexe, décisions de routage dépendantes de callouts et gestion d'exceptions personnalisée.",
    "padr.b5.num": "05 · Couches de la Solution", "padr.b5.title": "Architecture d'Implémentation",
    "padr.b5.li1": "Record-Triggered Flow comme point d'entrée principal d'orchestration à la création du Case",
    "padr.b5.li2": "Subflow de routage d'assignation réutilisable — appelable depuis n'importe quel processus basé sur des files d'attente",
    "padr.b5.li3": "Contrôles de validation des transitions d'état empêchant des progressions d'état de cas invalides",
    "padr.b5.li4": "Suivi des SLA basé sur le temps et escalade automatisée implémentés avec Salesforce Flow",
    "padr.b5.li5": "Tableaux de bord de reporting pour la direction avec des composants de visibilité du pipeline en temps réel",
    "padr.b6.num": "06 · Compromis d'Architecture", "padr.b6.title": "Justification de la Décision",
    "padr.b6.c1.label": "✓ Retenu : Orchestration Flow-first",
    "padr.b6.c1.p": "Maximise la maintenabilité par les administrateurs. Les parties prenantes métier peuvent ajuster la logique de routage sans dépendre d'un développeur. Réduit le cycle de changement de plusieurs semaines à quelques heures.",
    "padr.b6.c2.label": "○ Envisagé : Trigger Apex complet",
    "padr.b6.c2.p": "Plafond de performance plus élevé, mais élimine la visibilité de l'administrateur. Nécessite un développeur pour chaque changement de règle de routage. Écarté en raison de la structure de l'équipe et du coût de maintenance.",
    "padr.b6.c3.label": "✓ Retenu : Modèle de subflow modulaire",
    "padr.b6.c3.p": "Logique de routage réutilisable sur plusieurs files d'attente de cas sans duplication. Permet l'application d'un comportement cohérent sur tous les points d'entrée du processus.",
    "padr.b6.c4.label": "○ Envisagé : Flow monolithique",
    "padr.b6.c4.p": "Construction initiale plus simple, mais devient inmaintenable à grande échelle. Nécessite une duplication de la logique pour chaque nouvelle file d'attente. Écarté pour préserver l'intégrité architecturale à long terme.",
    "padr.b7.num": "07 · Modèle de Sécurité", "padr.b7.title": "Architecture de Sécurité et Conformité",
    "padr.b7.li1": "Visibilité des enregistrements basée sur la hiérarchie des rôles — les agents ne voient que les cas de leur file",
    "padr.b7.li2": "Application de la sécurité au niveau des champs sur les données sensibles des cas selon l'assignation de profil",
    "padr.b7.li3": "Transitions de propriété sûres pour l'audit — toutes les assignations sont enregistrées dans l'historique",
    "padr.b7.li4": "Contexte utilisateur run-as de Flow configuré pour un comportement correct de partage des enregistrements",
    "padr.b7.li5": "Propriété basée sur des files d'attente préservant la piste d'audit de conformité à travers les escalades",
    "padr.b8.num": "08 · Modèle de Scalabilité", "padr.b8.title": "Architecture de Croissance",
    "padr.b8.p1": "L'architecture de subflows modulaires et réutilisables permet l'expansion vers des files de service supplémentaires sans introduire de duplication de logique ni de dépendance à Apex. Les nouvelles règles de routage sont enregistrées dans des Custom Metadata — aucun déploiement de code requis.",
    "padr.b8.li1": "La table de routage en Custom Metadata permet des changements de règles sans modifier Flow ni Apex",
    "padr.b8.li2": "Des méthodes Apex invocables sûres en bulkification gèrent les scénarios de routage par lots",
    "padr.b8.li3": "Les Platform Events permettent de futures notifications d'escalade asynchrones vers des systèmes externes",
    "padr.b8.li4": "L'architecture prend en charge l'expansion horizontale des files d'attente sans introduire de duplication de logique",
    "padr.b9.num": "09 · Impact Métier", "padr.b9.title": "Résultats Mesurés",
    "padr.b9.li1": "A remplacé la charge de travail d'assignation manuelle par un routage automatisé au cours des 30 premiers jours",
    "padr.b9.li2": "A amélioré la visibilité du suivi des SLA — la conformité est désormais mesurable en temps réel",
    "padr.b9.li3": "A permis des tableaux de bord de reporting au niveau de la direction avec des métriques de pipeline en direct",
    "padr.b9.li4": "Les garde-fous de validation ont éliminé les incidents récurrents de qualité des données à l'entrée",
    "padr.b9.li5": "L'équipe d'administration gère désormais les changements de règles de routage de manière autonome — aucune dépendance à un développeur"
  }
};

const SUPPORTED_LANGS = ["en", "es", "fr"];

function getStoredLang() {
  try {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) {
      try { window.localStorage.setItem("ath-lang", urlLang); } catch (e) {}
      return urlLang;
    }
    const stored = window.localStorage.getItem("ath-lang");
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  } catch (e) {
    /* localStorage unavailable (e.g. sandboxed preview) — fall back silently */
  }
  return "en";
}

function storeLang(lang) {
  try { window.localStorage.setItem("ath-lang", lang); } catch (e) {}
}

function applyTranslations(lang) {
  const t = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const [attr, key] = el.getAttribute("data-i18n-attr").split(":");
    if (attr && key && t[key] !== undefined) el.setAttribute(attr, t[key]);
  });

  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  document.documentElement.setAttribute("lang", lang);
}

window.setLanguage = (lang) => {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  storeLang(lang);
  applyTranslations(lang);
};

/* Apply translation immediately (before paint-affecting work below) to avoid
   an English flash for returning ES/FR visitors navigating between pages. */
applyTranslations(getStoredLang());

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

  /* ─── CERT ROTATOR (certification names — kept in English by design) ─── */
  const certs = [
    "Salesforce Certified Platform Sharing and Visibility Architect",
    "Salesforce Certified Platform Developer II",
    "Salesforce Certified Platform App Builder",
    "Salesforce Certified Agentforce Specialist",
    "3/4 toward Application Architect"
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

  diagNodes.forEach(node => {
    const key = node.dataset.node;
    const panel = document.querySelector(`.diag-panel[data-panel="${key}"]`);
    if (panel) {
      if (!panel.id) panel.id = `diag-panel-${key}`;
      node.setAttribute("aria-controls", panel.id);
    }
    node.setAttribute("aria-expanded", "false");
  });

  function closeAllPanels() {
    diagPanels.forEach(p => p.classList.remove("open"));
    diagNodes.forEach(n => {
      n.classList.remove("active");
      n.setAttribute("aria-expanded", "false");
    });
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
        node.setAttribute("aria-expanded", "true");
        setTimeout(() => {
          panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 50);
      }
    });
  });

  document.querySelectorAll(".panel-close").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllPanels();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllPanels();
  });

  /* ─── LANGUAGE SWITCHER ─── */
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  /* ─── MOBILE MENU TOGGLE ─── */
  const navToggle  = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (navToggle && mobileMenu) {
    const closeMobileMenu = () => {
      navToggle.classList.remove("active");
      mobileMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMobileMenu();
    });
  }

});
