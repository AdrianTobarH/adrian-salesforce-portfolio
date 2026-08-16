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
    "nav.projects": "Case Studies",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.backToPortfolio": "← Back to Portfolio",
    "nav.timezone": "GMT-5 · PT overlap",
    "nav.available": "Available for Remote Roles",

    "footer.projects": "Case Studies",
    "footer.architecture": "Architecture",
    "footer.about": "About",
    "footer.contact": "Contact",

    "common.backAllProjects": "← All Architecture Projects",
    "common.downloadResume": "Download Resume ↓",
    "common.viewArchitecture": "View Architecture →",
    "common.viewFullCaseStudy": "View Full Case Study →",
    "common.close": "Close",
    "common.connectLinkedin": "Connect on LinkedIn ↗",
    "common.caseStudyDisclosure": "Composite case study based on real Salesforce production work. Client-specific details have been anonymized and generalized; some elements combine patterns from multiple engagements.",

    "headline": "I design Salesforce systems built to hold up at scale.",
    "decisionPanelTitle": "Architecture Decision Review Panel",
    "ctaTitle": "Building a Salesforce system where automation, security, and integrations all need to work together?",
    "idx.hero.eyebrow": "Salesforce Technical Consultant",
    "idx.hero.sub": "Flow and Apex where each earns its place · sharing designed around the org, not a template · integrations that fail loudly, not silently.",
    "idx.hero.ctaProjects": "Explore Architecture",

    "idx.certs.tag": "Credentials",
    "idx.certs.title": "Salesforce Certifications",

    "common.completed": "Completed",
    "common.next": "Next",
    "common.notYetEarned": "Not Yet Earned",
    "idx.aj.tag": "Certification Path",
    "idx.aj.sectionTitle": "The architecture path I'm building.",
    "idx.aj.title": "Application Architect Journey",
    "idx.aj.note": "Not yet a Salesforce Certified Application Architect — that credential requires all four requirements above to be complete.",

    "idx.console.tag": "Signature Interaction",
    "idx.console.title": "Architecture Console",
    "idx.console.intro": "What are you designing?",
    "idx.console.tab.automation": "Automation",
    "idx.console.tab.security": "Security",
    "idx.console.tab.integration": "Integration",
    "idx.console.tab.data": "Data",
    "idx.console.automation.n1": "Ownership", "idx.console.automation.n2": "Complexity",
    "idx.console.automation.n3": "Transaction", "idx.console.automation.n4": "Scale",
    "idx.console.automation.n5": "Maintainability",
    "idx.console.automation.message": "Start with who needs to own the process, then decide where declarative orchestration stops earning its place.",
    "idx.console.automation.cta": "Explore Automation Decisions →",
    "idx.console.security.n1": "Identity", "idx.console.security.n2": "Object",
    "idx.console.security.n3": "Field", "idx.console.security.n4": "Record",
    "idx.console.security.n5": "Runtime",
    "idx.console.security.message": "Start with access boundaries before choosing the sharing mechanism.",
    "idx.console.security.cta": "Explore Security Architecture →",
    "idx.console.integration.n1": "Latency", "idx.console.integration.n2": "Coupling",
    "idx.console.integration.n3": "Ownership", "idx.console.integration.n4": "Failure",
    "idx.console.integration.n5": "Recovery",
    "idx.console.integration.message": "Start with the contract and failure behavior before choosing the integration technology.",
    "idx.console.integration.cta": "Explore Integration Architecture →",
    "idx.console.data.n1": "Ownership", "idx.console.data.n2": "Model",
    "idx.console.data.n3": "Identity", "idx.console.data.n4": "Quality",
    "idx.console.data.n5": "Scale",
    "idx.console.data.message": "Start with who owns the data before designing the schema.",
    "idx.console.data.cta": "Explore Data Architecture →",

    "idx.design.tag": "Capabilities",
    "idx.design.title": "What I Design",
    "idx.design.intro": "Five surfaces, one architectural discipline. Tap or hover a row for the principle behind it.",
    "idx.design.row1.verb": "Automation Systems",
    "idx.design.row1.reveal": "Flow owns orchestration by default — until a requirement genuinely needs programmatic control.",
    "idx.design.row2.verb": "Security Models",
    "idx.design.row2.reveal": "Access starts with explicit boundaries, not accumulated permissions.",
    "idx.design.row3.verb": "Integration Boundaries",
    "idx.design.row3.reveal": "An integration needs a contract for what happens when the other side is down, not just a happy path.",
    "idx.design.row4.verb": "Data Architecture",
    "idx.design.row4.reveal": "Data ownership gets decided before the schema does, not after.",
    "idx.design.row5.verb": "Platform Experiences",
    "idx.design.row5.reveal": "Components consume services and render state — they don't own business logic.",

    "common.compositeProductionCase": "Composite Production Case",
    "idx.projects.categoryAdr": "Architecture Decision Record",

    "about.hero.tag": "PROFILE / 01",
    "about.hero.headline": "I fix the gap between \"it's configured\" and \"it's designed.\"",
    "about.hero.lede": "Working across Flow, Apex, LWC, security architecture, and integrations — currently 3 of 4 requirements into Salesforce Certified Application Architect.",
    "about.hero.portraitCaption1": "Salesforce Platform",

    "about.approach.tag": "APPROACH / 02",
    "about.approach.h1": "What I actually do",
    "about.approach.p1": "A lot of Salesforce work isn't \"build a new feature\" — it's \"this automation works until it doesn't,\" or \"we're not sure who's allowed to see what anymore.\" My focus sits on the boundary between admin-configured automation and engineered systems: where an automation that works under light transaction volume may behave very differently as volume, concurrency, and data complexity increase, or where a permission model that was fine for one team stops making sense for three.",
    "about.approach.p2": "My day-to-day spans Flow automation, Apex development, Lightning Web Components, REST integrations, and the sharing/security model underneath all of it. I don't treat those as separate skills — a routing automation is also a security decision (who does the queue-based reassignment run as?) and a data decision (what happens to the record's field history when it moves).",
    "about.approach.h2": "How I decide between configuration and code",
    "about.approach.p3": "Flow is my default. It's transparent, admins can maintain it without a deployment, and most business process logic doesn't need anything more powerful than what it exposes. I move to Apex when one of a few specific things is true: the logic needs real transaction control, it has to be reused across more entry points than Flow can cleanly share, it's computation- or bulk-heavy enough that governor limits become the real constraint, or it sits at an integration boundary that needs proper error handling. That's a judgment call, not a rule I apply mechanically — and I'd rather explain the reasoning in an interview than hide behind \"best practice.\"",
    "about.approach.h3": "How I think about security",
    "about.approach.p4": "Sharing and security has become one of my strongest technical focus areas, reinforced by the Platform Sharing and Visibility Architect credential. The mental model I use: object and field access (CRUD/FLS) set the ceiling on what's possible at all, record-level sharing decides who's let in under that ceiling, and Apex runtime behavior is a separate decision on top of both — sharing keywords (<code>with sharing</code>, <code>without sharing</code>, <code>inherited sharing</code>) control whether record-level sharing is enforced inside that code, while CRUD/FLS still has to be enforced deliberately, since it isn't automatically tied to the sharing keyword. A lot of real-world security gaps live in that distinction being missed.",
    "about.approach.h4": "Where this is heading",
    "about.approach.p5": "I'm progressing toward Salesforce Certified Application Architect — three of the four requirements are done (Platform App Builder, Platform Developer, Platform Sharing and Visibility Architect), and I'm targeting Platform Data Architect next. That's a deliberate direction, not a rebrand: the work increasingly involves data ownership and system-boundary questions rather than configuration mechanics, and the certification path reflects where that work is heading.",

    "about.dna.tag": "ARCHITECTURE DNA / 03",
    "about.dna.title": "Architecture DNA",
    "about.dna.intro": "Five things this work is built from. Tap or hover each one for the principle behind it.",
    "about.dna.automate.verb": "I automate",
    "about.dna.automate.reveal": "Flow owns orchestration by default — until a requirement genuinely needs programmatic control.",
    "about.dna.build.verb": "I build",
    "about.dna.build.reveal": "Components consume services and render state — they don't own business logic.",
    "about.dna.secure.verb": "I secure",
    "about.dna.secure.reveal": "Access starts with explicit boundaries, not accumulated permissions.",
    "about.dna.connect.verb": "I connect",
    "about.dna.connect.reveal": "An integration needs a contract for what happens when the other side is down, not just a happy path.",
    "about.dna.design.verb": "I design",
    "about.dna.design.reveal": "Every decision names its trade-off, not just its benefit.",

    "about.journey.tag": "JOURNEY / 04",
    "about.journey.title": "Professional Journey",
    "about.journey.intro": "Verified certification history — not a claim, a timeline. The next credential is deliberate, not a rebrand.",
    "about.journey.target": "Target",
    "about.journey.targetCaption": "Requires all 4 credentials above — not yet issued",

    "about.think.tag": "HOW I THINK / 05",
    "about.think.title": "Principles I Design Against",
    "about.think.1.statement": "Declarative first. Not declarative at all costs.",
    "about.think.1.explain": "Flow owns orchestration by default because it keeps the system admin-maintainable. Apex earns its place when transaction control, reuse, or bulk performance justify the added engineering lifecycle — not because a requirement merely could be coded.",
    "about.think.2.statement": "Security isn't a permission set. It's a model.",
    "about.think.2.explain": "Object access, field access, record-level sharing, and Apex runtime behavior are four separate decisions that have to agree with each other. A permission set alone doesn't answer any of them completely.",
    "about.think.3.statement": "Integrations need a failure strategy.",
    "about.think.3.explain": "The interesting design question isn't which API to call — it's what happens when the other side times out, and whether a human finds out about it.",
    "about.think.4.statement": "The happy path is only half the architecture.",
    "about.think.4.explain": "A solution that only works when everything succeeds isn't finished. Bulk behavior, partial failure, and recovery paths are part of the requirement, not an edge case.",
    "about.think.5.statement": "Scale changes design decisions.",
    "about.think.5.explain": "An automation or query pattern that's fine at low volume can become the org's next governor-limit incident as record counts, concurrency, and data complexity grow — so I design for where the org is headed, not just where it is today.",

    "about.capabilities.tag": "CAPABILITIES / 06",
    "about.capabilities.title": "What I Work With",
    "about.capabilities.d1.title": "Platform Development",
    "about.capabilities.d1.li1": "Apex",
    "about.capabilities.d1.li2": "Lightning Web Components",
    "about.capabilities.d1.li3": "SOQL",
    "about.capabilities.d1.li4": "Asynchronous Apex",
    "about.capabilities.d1.li5": "Apex testing (bulk &amp; negative paths)",
    "about.capabilities.d2.title": "Automation",
    "about.capabilities.d2.li1": "Salesforce Flow",
    "about.capabilities.d2.li2": "Invocable Apex",
    "about.capabilities.d2.li3": "Automation ownership &amp; decision-making",
    "about.capabilities.d3.title": "Architecture",
    "about.capabilities.d3.li1": "Sharing &amp; Visibility design",
    "about.capabilities.d3.li2": "Data modeling",
    "about.capabilities.d3.li3": "Solution design",
    "about.capabilities.d3.li4": "Automation decision frameworks",
    "about.capabilities.d4.title": "Integration",
    "about.capabilities.d4.li1": "REST APIs",
    "about.capabilities.d4.li2": "OAuth 2.0",
    "about.capabilities.d4.li3": "Named Credentials",
    "about.capabilities.d5.li1": "External user access",
    "about.capabilities.d5.li2": "Sharing for portal users",
    "about.capabilities.d5.li3": "Security considerations for external-facing data",
    "about.capabilities.d6.title": "Emerging",
    "about.capabilities.d6.li1": "Agentforce (Certified Specialist)",
    "about.capabilities.d6.li2": "Applied as a complement to the platform/architecture core, not a pivot away from it",

    "about.testing.title": "Testing &amp; Delivery",
    "about.testing.p": "I test Apex for bulk behavior and negative paths, not just the single-record happy case a governor limit will never catch in a demo. Delivery runs through sandboxes, Git-based version control, and Salesforce DX / Change Sets for promotion between environments — the fundamentals that make a release safe to repeat, not a one-time event.",

    "about.beyond.tag": "BEYOND THE PLATFORM / 07",
    "about.beyond.title": "Beyond the Platform",
    "about.beyond.p": "Most of what shapes how I work isn't Salesforce-specific: staying deliberate about what I don't know yet, treating certifications as a forcing function for depth rather than a checkbox, and working comfortably across technical and business conversations without needing a translator in between. I work across English, Spanish, and French — which shows up here as much as anywhere else.",

    "idx.principles.tag": "Design Philosophy",
    "idx.principles.title": "How I Design Salesforce Systems",
    "idx.principles.intro": "A few of the principles behind every decision on this site. The full framework, with trade-offs, lives on the Architecture page.",
    "idx.principles.p1.title": "Security by Default",
    "idx.principles.p1.desc": "Least privilege and explicit access — nothing is inherited by accident.",
    "idx.principles.p2.title": "Code With Purpose",
    "idx.principles.p2.desc": "Apex earns its place when transaction control, reuse, or scale justify it — not by default.",
    "idx.principles.p3.title": "Observable Operations",
    "idx.principles.p3.desc": "A solution isn't finished when the happy path works. Failures must be detectable and recoverable.",
    "idx.principles.p4.title": "Trade-offs Are Explicit",
    "idx.principles.p4.desc": "Every architectural decision names what it costs, not just what it buys.",
    "idx.principles.linkText": "See the full Architecture Principles →",


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


    "idx.projects.tag": "Case Studies",
    "idx.projects.intro": "Real production-style solution patterns applied across portfolio implementations.",
    "idx.projects.card1.title": "Case Automation Architecture",
    "idx.projects.card1.desc": "Automated routing strategy designed to reduce manual workload and accelerate SLA response time with reusable assignment logic services.",
    "idx.projects.card2.title": "LWC Dashboard Architecture",
    "idx.projects.card2.desc": "Executive-ready Lightning dashboards built for operational adoption with dynamic Apex data providers and role-based UI visibility strategy.",
    "idx.projects.card3.title": "API Integration Architecture",
    "idx.projects.card3.desc": "Reusable Named Credential integration model supporting secure external system communication with error-resilient service execution.",
    "idx.projects.card4.title": "Enterprise Automation Deep Dive",
    "idx.projects.card4.desc": "Full architecture decision record — context, constraints, tradeoffs, solution layers, security model, and measured business impact.",



    "idx.cta.sub": "Available for remote Salesforce Technical Consultant (Flow + Apex + Integrations) roles across US-aligned timezones.<br>Designing scalable automation frameworks that balance admin maintainability, developer extensibility, and integration reliability.",

    "pca.title": "Enterprise Case Automation<br>Architecture",
    "pca.summary": "Flow-driven intelligent routing, multi-tier escalation guardrails, and validation frameworks for enterprise case management at scale — reducing manual intervention across the resolution lifecycle.",
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
    "pca.b5.li4": "Platform Events as the pattern to evaluate for decoupled, async escalation notifications to external systems",
    "pca.b6.tag": "Business Impact", "pca.b6.title": "Delivered Outcomes",
    "pca.b6.li1": "Reduced average case routing time by replacing manual assignment with automated routing",
    "pca.b6.li2": "Introduced a 3-tier escalation matrix with automated SLA visibility and time-based routing",
    "pca.b6.li3": "Executive dashboard surfaces real-time case throughput metrics",
    "pca.b6.li4": "Validation guardrails at intake improved case data consistency",

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
    "plwc.b6.li1": "Replaced weekly spreadsheet exports with an in-platform, live executive dashboard",
    "plwc.b6.li2": "Consolidated several manually curated reports into a single real-time pipeline view",
    "plwc.b6.li3": "Gave executives on-demand access to pipeline data instead of waiting on the next scheduled report",
    "plwc.b6.li4": "Custom property editor lets admins adjust dashboard layout without a developer or IT ticket",

    "papi.title": "Enterprise API<br>Integration Layer",
    "papi.summary": "Reusable Named Credential architecture with secure REST endpoints and a configuration-driven service layer — an integration foundation designed to extend to additional external systems without new code per integration.",
    "papi.impact1": "Reusable credential layer",
    "papi.impact2": "Secrets stored in Apex code",
    "papi.impact3": "New endpoints via configuration",
    "papi.b1.tag": "Context", "papi.b1.title": "Business Problem",
    "papi.b1.li1": "API credentials hardcoded in Apex — critical security vulnerability",
    "papi.b1.li2": "No reusable integration pattern — each system required bespoke code",
    "papi.b1.li3": "External data sync running on nightly batch only — no real-time option",
    "papi.b1.li4": "Zero error handling — failed callouts silent with no retry mechanism",
    "papi.b2.tag": "Architecture Strategy", "papi.b2.title": "Solution Design",
    "papi.b2.li1": "Named Credentials as the single source of truth for outbound credentials — no secrets stored in Apex",
    "papi.b2.li2": "A reusable Apex service class as the single integration point for REST callouts, replacing bespoke per-system code",
    "papi.b2.li3": "Custom object logging layer for callout auditing and retry visibility",
    "papi.b3.tag": "Architecture Considerations", "papi.b3.title": "Patterns I'd Evaluate at Scale",
    "papi.b3.li1": "OAuth 2.0 Auth Provider for automatic token refresh, where the external system supports it, instead of managing tokens manually",
    "papi.b3.li2": "Platform Events to decouple downstream sync from the request transaction, when near-real-time updates matter more than immediate consistency",
    "papi.b3.li3": "Apex Queueable chaining for retry-safe asynchronous callout sequences",
    "papi.b3.li4": "External Services for no-code API schema registration, where the external API exposes a stable OpenAPI spec",
    "papi.b4.tag": "Security Model", "papi.b4.title": "Credential & Runtime Security",
    "papi.b4.li1": "All outbound credentials stored in Named Credentials — never hardcoded in Apex",
    "papi.b4.li2": "Apex callouts authenticate through the Named Credential / External Credential layer, not through CSP or CORS — those govern browser- and Lightning-originated requests, not server-side callouts",
    "papi.b4.li3": "CSP Trusted Sites evaluated separately for any Lightning component that calls the external system directly from the browser",
    "papi.b4.li4": "Callout logging designed to avoid persisting sensitive response fields, rather than storing raw response bodies indefinitely",
    "papi.b5.tag": "Scalability", "papi.b5.title": "Reusable Architecture",
    "papi.b5.li1": "A single Apex service class supports additional REST endpoints through configuration, rather than a new class per integration",
    "papi.b5.li2": "Custom metadata for endpoint registration — adding a new API is a configuration change, not a deployment",
    "papi.b6.tag": "Business Impact", "papi.b6.title": "Delivered Outcomes",
    "papi.b6.li1": "API secrets moved out of Apex code and into Named Credentials",
    "papi.b6.li2": "Reusable integration service reduced duplication when adding additional endpoints",
    "papi.b6.li3": "Callout logging replaced silent failures with visibility into integration health and failure patterns",

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
    "padr.b6.c1.p": "Maximizes admin maintainability. Business stakeholders can adjust routing logic directly, since changes are configuration rather than code.",
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
    "padr.b9.num": "09 · Business Impact", "padr.b9.title": "Delivered Outcomes",
    "padr.b9.li1": "Replaced manual assignment workload with automated, rule-driven routing",
    "padr.b9.li2": "Improved SLA tracking visibility — compliance now measurable in real time",
    "padr.b9.li3": "Enabled leadership-level reporting dashboards with live pipeline metrics",
    "padr.b9.li4": "Validation guardrails at intake reduced recurring data quality issues",
    "padr.b9.li5": "Admin team can now make routing rule changes independently, without a developer for every change"
  },

  es: {
    "nav.architecture": "Arquitectura",
    "nav.projects": "Casos de Estudio",
    "nav.about": "Sobre Mí",
    "nav.contact": "Contacto",
    "nav.backToPortfolio": "← Volver al Portfolio",
    "nav.timezone": "GMT-5 · superposición PT",
    "nav.available": "Disponible para Roles Remotos",

    "footer.projects": "Casos de Estudio",
    "footer.architecture": "Arquitectura",
    "footer.about": "Sobre Mí",
    "footer.contact": "Contacto",

    "common.backAllProjects": "← Todos los Proyectos de Arquitectura",
    "common.downloadResume": "Descargar CV ↓",
    "common.viewArchitecture": "Ver Arquitectura →",
    "common.viewFullCaseStudy": "Ver Estudio de Caso Completo →",
    "common.close": "Cerrar",
    "common.connectLinkedin": "Conectemos en LinkedIn ↗",
    "common.caseStudyDisclosure": "Estudio de caso compuesto, basado en trabajo real de producción en Salesforce. Los detalles específicos de clientes fueron anonimizados y generalizados; algunos elementos combinan patrones de múltiples proyectos.",

    "headline": "Diseño sistemas Salesforce construidos para sostenerse a escala.",
    "decisionPanelTitle": "Panel de Revisión de Decisiones Arquitectónicas",
    "ctaTitle": "¿Estás construyendo un sistema Salesforce donde automatización, seguridad e integraciones deben funcionar juntos?",
    "idx.hero.eyebrow": "Consultor Técnico Salesforce",
    "idx.hero.sub": "Flow y Apex donde cada uno se gana su lugar · sharing pensado para la organización, no una plantilla · integraciones que fallan de forma visible, no en silencio.",
    "idx.hero.ctaProjects": "Explorar Arquitectura",

    "idx.certs.tag": "Credenciales",
    "idx.certs.title": "Certificaciones Salesforce",

    "common.completed": "Completado",
    "common.next": "Siguiente",
    "common.notYetEarned": "Aún No Obtenido",
    "idx.aj.tag": "Ruta de Certificación",
    "idx.aj.sectionTitle": "La ruta de arquitectura que estoy construyendo.",
    "idx.aj.title": "Trayectoria hacia Application Architect",
    "idx.aj.note": "Todavía no soy Salesforce Certified Application Architect: esa credencial requiere completar los cuatro requisitos anteriores.",

    "idx.console.tag": "Interacción Distintiva",
    "idx.console.title": "Consola de Arquitectura",
    "idx.console.intro": "¿Qué estás diseñando?",
    "idx.console.tab.automation": "Automatización",
    "idx.console.tab.security": "Seguridad",
    "idx.console.tab.integration": "Integración",
    "idx.console.tab.data": "Datos",
    "idx.console.automation.n1": "Propiedad", "idx.console.automation.n2": "Complejidad",
    "idx.console.automation.n3": "Transacción", "idx.console.automation.n4": "Escala",
    "idx.console.automation.n5": "Mantenibilidad",
    "idx.console.automation.message": "Empieza por quién debe ser dueño del proceso, y luego decide en qué punto la orquestación declarativa deja de ser la opción adecuada.",
    "idx.console.automation.cta": "Explorar Decisiones de Automatización →",
    "idx.console.security.n1": "Identidad", "idx.console.security.n2": "Objeto",
    "idx.console.security.n3": "Campo", "idx.console.security.n4": "Registro",
    "idx.console.security.n5": "Tiempo de Ejecución",
    "idx.console.security.message": "Empieza por los límites de acceso antes de elegir el mecanismo de sharing.",
    "idx.console.security.cta": "Explorar Arquitectura de Seguridad →",
    "idx.console.integration.n1": "Latencia", "idx.console.integration.n2": "Acoplamiento",
    "idx.console.integration.n3": "Propiedad", "idx.console.integration.n4": "Falla",
    "idx.console.integration.n5": "Recuperación",
    "idx.console.integration.message": "Empieza por el contrato y el comportamiento ante fallas antes de elegir la tecnología de integración.",
    "idx.console.integration.cta": "Explorar Arquitectura de Integración →",
    "idx.console.data.n1": "Propiedad", "idx.console.data.n2": "Modelo",
    "idx.console.data.n3": "Identidad", "idx.console.data.n4": "Calidad",
    "idx.console.data.n5": "Escala",
    "idx.console.data.message": "Empieza por quién es dueño de los datos antes de diseñar el esquema.",
    "idx.console.data.cta": "Explorar Arquitectura de Datos →",

    "idx.design.tag": "Capacidades",
    "idx.design.title": "Lo Que Diseño",
    "idx.design.intro": "Cinco superficies, una sola disciplina de arquitectura. Pasa el cursor o toca una fila para ver el principio detrás de ella.",
    "idx.design.row1.verb": "Sistemas de Automatización",
    "idx.design.row1.reveal": "Flow es dueño de la orquestación por defecto, hasta que un requerimiento realmente necesita control programático.",
    "idx.design.row2.verb": "Modelos de Seguridad",
    "idx.design.row2.reveal": "El acceso comienza con límites explícitos, no con permisos acumulados.",
    "idx.design.row3.verb": "Límites de Integración",
    "idx.design.row3.reveal": "Una integración necesita un contrato para lo que ocurre cuando el otro lado falla, no solo un camino feliz.",
    "idx.design.row4.verb": "Arquitectura de Datos",
    "idx.design.row4.reveal": "La propiedad de los datos se decide antes que el esquema, no después.",
    "idx.design.row5.verb": "Experiencias de Plataforma",
    "idx.design.row5.reveal": "Los componentes consumen servicios y renderizan estado: no son dueños de la lógica de negocio.",

    "common.compositeProductionCase": "Caso Compuesto de Producción",
    "idx.projects.categoryAdr": "Registro de Decisión de Arquitectura",

    "about.hero.tag": "PERFIL / 01",
    "about.hero.headline": "Resuelvo la brecha entre \"está configurado\" y \"está diseñado\".",
    "about.hero.lede": "Trabajo con Flow, Apex, LWC, arquitectura de seguridad e integraciones — actualmente con 3 de los 4 requisitos completados hacia Salesforce Certified Application Architect.",
    "about.hero.portraitCaption1": "Plataforma Salesforce",

    "about.approach.tag": "ENFOQUE / 02",
    "about.approach.h1": "Lo que realmente hago",
    "about.approach.p1": "Buena parte del trabajo en Salesforce no es \"construir una función nueva\" — es \"esta automatización funciona hasta que deja de funcionar\", o \"ya no sabemos quién puede ver qué\". Me enfoco en el límite entre la automatización configurada por administradores y los sistemas diseñados con criterio de ingeniería: donde una automatización que funciona bien con poco volumen puede comportarse de forma muy distinta cuando aumentan el volumen, la concurrencia y la complejidad de los datos, o donde un modelo de permisos que funcionaba para un equipo deja de tener sentido para tres.",
    "about.approach.p2": "Mi trabajo diario abarca automatización con Flow, desarrollo en Apex, Lightning Web Components, integraciones REST y el modelo de sharing/seguridad que sostiene todo lo anterior. No los trato como habilidades separadas: una automatización de enrutamiento también es una decisión de seguridad (¿bajo qué usuario se ejecuta la reasignación basada en colas?) y una decisión de datos (¿qué pasa con el historial de campos del registro cuando se mueve?).",
    "about.approach.h2": "Cómo decido entre configuración y código",
    "about.approach.p3": "Flow es mi opción por defecto. Es transparente, los administradores pueden mantenerlo sin un despliegue, y la mayoría de la lógica de procesos de negocio no necesita nada más potente que lo que Flow ya ofrece. Paso a Apex cuando se cumple alguna de estas condiciones específicas: la lógica necesita control real de transacciones, tiene que reutilizarse en más puntos de entrada de los que Flow puede compartir limpiamente, es lo bastante intensiva en cómputo o en volumen como para que los governor limits se vuelvan la restricción real, o se ubica en un límite de integración que necesita un manejo de errores adecuado. Es una decisión de criterio, no una regla que aplico mecánicamente — y prefiero explicar el razonamiento en una entrevista antes que escudarme en la \"mejor práctica\".",
    "about.approach.h3": "Cómo pienso la seguridad",
    "about.approach.p4": "Sharing y seguridad se ha convertido en una de mis áreas técnicas más fuertes, reforzada por la credencial Platform Sharing and Visibility Architect. El modelo mental que uso: el acceso a objetos y campos (CRUD/FLS) define el techo de lo que es posible, el sharing a nivel de registro decide quién entra bajo ese techo, y el comportamiento de Apex en tiempo de ejecución es una decisión aparte sobre ambos — las palabras clave de sharing (<code>with sharing</code>, <code>without sharing</code>, <code>inherited sharing</code>) controlan si el sharing a nivel de registro se aplica dentro de ese código, mientras que CRUD/FLS todavía debe aplicarse de forma deliberada, ya que no está atado automáticamente a la palabra clave de sharing. Muchas brechas de seguridad reales existen justamente porque se pasa por alto esa distinción.",
    "about.approach.h4": "Hacia dónde va esto",
    "about.approach.p5": "Estoy avanzando hacia Salesforce Certified Application Architect — tres de los cuatro requisitos están completos (Platform App Builder, Platform Developer, Platform Sharing and Visibility Architect), y mi siguiente objetivo es Platform Data Architect. Es una dirección deliberada, no un cambio de imagen: el trabajo involucra cada vez más preguntas sobre propiedad de los datos y límites entre sistemas, en lugar de mecánica de configuración, y la ruta de certificación refleja hacia dónde se dirige ese trabajo.",

    "about.dna.tag": "ADN DE ARQUITECTURA / 03",
    "about.dna.title": "ADN de Arquitectura",
    "about.dna.intro": "Cinco cosas de las que está hecho este trabajo. Toca o pasa el cursor sobre cada una para ver el principio detrás de ella.",
    "about.dna.automate.verb": "Automatizo",
    "about.dna.automate.reveal": "Flow es dueño de la orquestación por defecto, hasta que un requerimiento realmente necesita control programático.",
    "about.dna.build.verb": "Construyo",
    "about.dna.build.reveal": "Los componentes consumen servicios y renderizan estado: no son dueños de la lógica de negocio.",
    "about.dna.secure.verb": "Aseguro",
    "about.dna.secure.reveal": "El acceso comienza con límites explícitos, no con permisos acumulados.",
    "about.dna.connect.verb": "Conecto",
    "about.dna.connect.reveal": "Una integración necesita un contrato para lo que ocurre cuando el otro lado falla, no solo un camino feliz.",
    "about.dna.design.verb": "Diseño",
    "about.dna.design.reveal": "Cada decisión nombra su costo, no solo su beneficio.",

    "about.journey.tag": "TRAYECTORIA / 04",
    "about.journey.title": "Trayectoria Profesional",
    "about.journey.intro": "Historial de certificaciones verificado: no es una afirmación, es una línea de tiempo. La próxima credencial es una decisión deliberada, no un cambio de imagen.",
    "about.journey.target": "Meta",
    "about.journey.targetCaption": "Requiere las 4 credenciales anteriores — aún no emitida",

    "about.think.tag": "CÓMO PIENSO / 05",
    "about.think.title": "Principios Contra Los Que Diseño",
    "about.think.1.statement": "Declarativo primero. No declarativo a toda costa.",
    "about.think.1.explain": "Flow es dueño de la orquestación por defecto porque mantiene el sistema mantenible por administradores. Apex se gana su lugar cuando el control de transacciones, la reutilización o el rendimiento a gran volumen justifican el costo adicional del ciclo de ingeniería, no porque un requerimiento simplemente pudiera programarse.",
    "about.think.2.statement": "La seguridad no es un permission set. Es un modelo.",
    "about.think.2.explain": "El acceso a objetos, el acceso a campos, el sharing a nivel de registro y el comportamiento de Apex en tiempo de ejecución son cuatro decisiones separadas que deben ser coherentes entre sí. Un permission set por sí solo no responde completamente a ninguna de ellas.",
    "about.think.3.statement": "Las integraciones necesitan una estrategia de fallas.",
    "about.think.3.explain": "La pregunta de diseño interesante no es qué API llamar, sino qué pasa cuando el otro lado no responde a tiempo, y si un humano se entera de que ocurrió.",
    "about.think.4.statement": "El camino feliz es solo la mitad de la arquitectura.",
    "about.think.4.explain": "Una solución que solo funciona cuando todo sale bien no está terminada. El comportamiento masivo, las fallas parciales y las rutas de recuperación son parte del requerimiento, no un caso extremo.",
    "about.think.5.statement": "La escala cambia las decisiones de diseño.",
    "about.think.5.explain": "Un patrón de automatización o de consulta que funciona bien con poco volumen puede convertirse en el próximo incidente de governor limits de la org a medida que crecen los registros, la concurrencia y la complejidad de los datos — por eso diseño pensando en hacia dónde va la org, no solo en dónde está hoy.",

    "about.capabilities.tag": "CAPACIDADES / 06",
    "about.capabilities.title": "Con Lo Que Trabajo",
    "about.capabilities.d1.title": "Desarrollo de Plataforma",
    "about.capabilities.d1.li1": "Apex",
    "about.capabilities.d1.li2": "Lightning Web Components",
    "about.capabilities.d1.li3": "SOQL",
    "about.capabilities.d1.li4": "Apex Asíncrono",
    "about.capabilities.d1.li5": "Pruebas de Apex (casos masivos y negativos)",
    "about.capabilities.d2.title": "Automatización",
    "about.capabilities.d2.li1": "Salesforce Flow",
    "about.capabilities.d2.li2": "Apex Invocable",
    "about.capabilities.d2.li3": "Propiedad y toma de decisiones sobre automatización",
    "about.capabilities.d3.title": "Arquitectura",
    "about.capabilities.d3.li1": "Diseño de Sharing y Visibilidad",
    "about.capabilities.d3.li2": "Modelado de datos",
    "about.capabilities.d3.li3": "Diseño de soluciones",
    "about.capabilities.d3.li4": "Frameworks de decisión de automatización",
    "about.capabilities.d4.title": "Integración",
    "about.capabilities.d4.li1": "REST APIs",
    "about.capabilities.d4.li2": "OAuth 2.0",
    "about.capabilities.d4.li3": "Named Credentials",
    "about.capabilities.d5.li1": "Acceso de usuarios externos",
    "about.capabilities.d5.li2": "Sharing para usuarios de portal",
    "about.capabilities.d5.li3": "Consideraciones de seguridad para datos de cara al exterior",
    "about.capabilities.d6.title": "Emergente",
    "about.capabilities.d6.li1": "Agentforce (Especialista Certificado)",
    "about.capabilities.d6.li2": "Aplicado como complemento al núcleo de plataforma/arquitectura, no como un giro que se aleja de él",

    "about.testing.title": "Pruebas y Entrega",
    "about.testing.p": "Pruebo Apex para comportamiento masivo y casos negativos, no solo el caso feliz de un único registro que un governor limit nunca detectaría en una demo. La entrega pasa por sandboxes, control de versiones con Git y Salesforce DX / Change Sets para promover entre entornos — los fundamentos que hacen que un release sea seguro de repetir, no un evento único.",

    "about.beyond.tag": "MÁS ALLÁ DE LA PLATAFORMA / 07",
    "about.beyond.title": "Más Allá de la Plataforma",
    "about.beyond.p": "Gran parte de lo que define cómo trabajo no es específico de Salesforce: mantenerme deliberado sobre lo que aún no sé, tratar las certificaciones como un mecanismo para profundizar y no como una casilla que marcar, y moverme con comodidad entre conversaciones técnicas y de negocio sin necesitar un traductor de por medio. Trabajo en inglés, español y francés — algo que se nota aquí tanto como en cualquier otro lado.",

    "idx.principles.tag": "Filosofía de Diseño",
    "idx.principles.title": "Cómo Diseño Sistemas Salesforce",
    "idx.principles.intro": "Algunos de los principios detrás de cada decisión en este sitio. El marco completo, con sus trade-offs, vive en la página de Arquitectura.",
    "idx.principles.p1.title": "Seguridad por Defecto",
    "idx.principles.p1.desc": "Mínimo privilegio y acceso explícito: nada se hereda por accidente.",
    "idx.principles.p2.title": "Código con Propósito",
    "idx.principles.p2.desc": "Apex se gana su lugar cuando el control transaccional, la reutilización o la escala lo justifican, no por defecto.",
    "idx.principles.p3.title": "Operaciones Observables",
    "idx.principles.p3.desc": "Una solución no está terminada cuando el camino feliz funciona. Las fallas deben ser detectables y recuperables.",
    "idx.principles.p4.title": "Los Trade-offs Son Explícitos",
    "idx.principles.p4.desc": "Cada decisión de arquitectura nombra su costo, no solo su beneficio.",
    "idx.principles.linkText": "Ver los Principios de Arquitectura completos →",


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


    "idx.projects.tag": "Casos de Estudio",
    "idx.projects.intro": "Patrones de solución de estilo productivo aplicados en las implementaciones del portfolio.",
    "idx.projects.card1.title": "Arquitectura de Automatización de Casos",
    "idx.projects.card1.desc": "Estrategia de enrutamiento automatizado diseñada para reducir la carga de trabajo manual y acelerar el tiempo de respuesta de SLA mediante servicios de lógica de asignación reutilizables.",
    "idx.projects.card2.title": "Arquitectura de Dashboard LWC",
    "idx.projects.card2.desc": "Dashboards Lightning listos para ejecutivos, construidos para la adopción operativa, con proveedores de datos Apex dinámicos y una estrategia de visibilidad de UI basada en roles.",
    "idx.projects.card3.title": "Arquitectura de Integración de API",
    "idx.projects.card3.desc": "Modelo de integración reutilizable basado en Named Credential que permite una comunicación segura con sistemas externos y una ejecución de servicios resiliente a errores.",
    "idx.projects.card4.title": "Análisis Profundo de Automatización Empresarial",
    "idx.projects.card4.desc": "Registro completo de decisiones de arquitectura: contexto, restricciones, compensaciones, capas de solución, modelo de seguridad e impacto de negocio medido.",



    "idx.cta.sub": "Disponible para roles remotos de Salesforce Technical Consultant (Flow + Apex + Integraciones) en zonas horarias alineadas con EE.UU.<br>Diseño frameworks de automatización escalables que equilibran la mantenibilidad para administradores, la extensibilidad para desarrolladores y la confiabilidad de las integraciones.",

    "pca.title": "Arquitectura Empresarial de<br>Automatización de Casos",
    "pca.summary": "Enrutamiento inteligente basado en Flow, barreras de escalamiento en múltiples niveles y frameworks de validación para la gestión de casos a escala empresarial, reduciendo la intervención manual en todo el ciclo de resolución.",
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
    "pca.b5.li4": "Platform Events como patrón a evaluar para notificaciones de escalamiento asíncronas y desacopladas hacia sistemas externos",
    "pca.b6.tag": "Impacto de Negocio", "pca.b6.title": "Resultados Entregados",
    "pca.b6.li1": "Redujo el tiempo promedio de enrutamiento de casos al reemplazar la asignación manual por enrutamiento automatizado",
    "pca.b6.li2": "Se introdujo una matriz de escalamiento de 3 niveles con visibilidad automatizada de SLA y enrutamiento basado en tiempo",
    "pca.b6.li3": "El dashboard ejecutivo muestra métricas de rendimiento de casos en tiempo real",
    "pca.b6.li4": "Las barreras de validación en la ingesta mejoraron la consistencia de los datos de los casos",

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
    "plwc.b6.li1": "Reemplazó las exportaciones semanales a hojas de cálculo por un dashboard ejecutivo en vivo dentro de la plataforma",
    "plwc.b6.li2": "Consolidó varios reportes curados manualmente en una única vista de pipeline en tiempo real",
    "plwc.b6.li3": "Dio a los ejecutivos acceso a los datos del pipeline bajo demanda, en lugar de esperar al próximo reporte programado",
    "plwc.b6.li4": "El editor de propiedades personalizado permite a los administradores ajustar el diseño del dashboard sin depender de un desarrollador o un ticket de TI",

    "papi.title": "Capa de Integración<br>de API Empresarial",
    "papi.summary": "Arquitectura reutilizable de Named Credential con endpoints REST seguros y una capa de servicio basada en configuración: una base de integración diseñada para extenderse a sistemas externos adicionales sin código nuevo por integración.",
    "papi.impact1": "Capa de credenciales reutilizable",
    "papi.impact2": "Secretos almacenados en código Apex",
    "papi.impact3": "Nuevos endpoints mediante configuración",
    "papi.b1.tag": "Contexto", "papi.b1.title": "Problema de Negocio",
    "papi.b1.li1": "Credenciales de API codificadas directamente en Apex: vulnerabilidad de seguridad crítica",
    "papi.b1.li2": "Sin patrón de integración reutilizable: cada sistema requería código a medida",
    "papi.b1.li3": "La sincronización de datos externos se ejecutaba solo en lotes nocturnos, sin opción en tiempo real",
    "papi.b1.li4": "Sin manejo de errores: los callouts fallidos eran silenciosos y sin mecanismo de reintento",
    "papi.b2.tag": "Estrategia de Arquitectura", "papi.b2.title": "Diseño de la Solución",
    "papi.b2.li1": "Named Credentials como única fuente de verdad para las credenciales salientes: sin secretos almacenados en Apex",
    "papi.b2.li2": "Una clase de servicio Apex reutilizable como único punto de integración para los callouts REST, reemplazando código a medida por sistema",
    "papi.b2.li3": "Capa de registro en un objeto personalizado para la auditoría de callouts y la visibilidad de reintentos",
    "papi.b3.tag": "Consideraciones de Arquitectura", "papi.b3.title": "Patrones a Evaluar a Escala",
    "papi.b3.li1": "Auth Provider OAuth 2.0 para renovación automática de tokens, cuando el sistema externo lo soporta, en lugar de gestionar tokens manualmente",
    "papi.b3.li2": "Platform Events para desacoplar la sincronización downstream de la transacción de la solicitud, cuando las actualizaciones casi en tiempo real importan más que la consistencia inmediata",
    "papi.b3.li3": "Encadenamiento de Queueable en Apex para secuencias de callouts asíncronos con reintentos seguros",
    "papi.b3.li4": "External Services para el registro de esquemas de API sin código, cuando la API externa expone una especificación OpenAPI estable",
    "papi.b4.tag": "Modelo de Seguridad", "papi.b4.title": "Seguridad de Credenciales y en Tiempo de Ejecución",
    "papi.b4.li1": "Todas las credenciales salientes almacenadas en Named Credentials: nunca codificadas en Apex",
    "papi.b4.li2": "Los callouts de Apex se autentican mediante la capa de Named Credential / External Credential, no mediante CSP ni CORS: eso rige solicitudes originadas en el navegador o en Lightning, no callouts del lado del servidor",
    "papi.b4.li3": "CSP Trusted Sites se evalúa por separado para cualquier componente Lightning que llame al sistema externo directamente desde el navegador",
    "papi.b4.li4": "El registro de callouts está diseñado para evitar persistir campos sensibles de la respuesta, en lugar de almacenar los cuerpos de respuesta completos indefinidamente",
    "papi.b5.tag": "Escalabilidad", "papi.b5.title": "Arquitectura Reutilizable",
    "papi.b5.li1": "Una única clase de servicio Apex soporta endpoints REST adicionales mediante configuración, en lugar de una nueva clase por integración",
    "papi.b5.li2": "Metadatos personalizados para el registro de endpoints: agregar una nueva API es un cambio de configuración, no un despliegue",
    "papi.b6.tag": "Impacto de Negocio", "papi.b6.title": "Resultados Entregados",
    "papi.b6.li1": "Los secretos de API se trasladaron fuera del código Apex hacia Named Credentials",
    "papi.b6.li2": "El servicio de integración reutilizable redujo la duplicación al agregar endpoints adicionales",
    "papi.b6.li3": "El registro de callouts reemplazó las fallas silenciosas con visibilidad sobre la salud de las integraciones y sus patrones de fallo",

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
    "padr.b6.c1.p": "Maximiza la mantenibilidad por parte de administradores. Los stakeholders de negocio pueden ajustar la lógica de enrutamiento directamente, ya que los cambios son de configuración y no de código.",
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
    "padr.b9.num": "09 · Impacto de Negocio", "padr.b9.title": "Resultados Entregados",
    "padr.b9.li1": "Reemplazó la carga de trabajo de asignación manual por un enrutamiento automatizado y basado en reglas",
    "padr.b9.li2": "Mejoró la visibilidad del seguimiento de SLA: el cumplimiento ahora es medible en tiempo real",
    "padr.b9.li3": "Habilitó dashboards de reporte a nivel de liderazgo con métricas del pipeline en vivo",
    "padr.b9.li4": "Las barreras de validación en la ingesta redujeron los incidentes recurrentes de calidad de datos",
    "padr.b9.li5": "El equipo de administración ahora puede hacer cambios en las reglas de enrutamiento de forma independiente, sin necesidad de un desarrollador para cada cambio"
  },

  fr: {
    "nav.architecture": "Architecture",
    "nav.projects": "Études de Cas",
    "nav.about": "À Propos",
    "nav.contact": "Contact",
    "nav.backToPortfolio": "← Retour au Portfolio",
    "nav.timezone": "GMT-5 · chevauchement PT",
    "nav.available": "Disponible pour Rôles Remote",

    "footer.projects": "Études de Cas",
    "footer.architecture": "Architecture",
    "footer.about": "À Propos",
    "footer.contact": "Contact",

    "common.backAllProjects": "← Tous les Projets d'Architecture",
    "common.downloadResume": "Télécharger CV ↓",
    "common.viewArchitecture": "Voir l'Architecture →",
    "common.viewFullCaseStudy": "Voir l'Étude de Cas Complète →",
    "common.close": "Fermer",
    "common.connectLinkedin": "Connectons-nous sur LinkedIn ↗",
    "common.caseStudyDisclosure": "Étude de cas composite, basée sur un travail de production Salesforce réel. Les détails spécifiques aux clients ont été anonymisés et généralisés ; certains éléments combinent des schémas provenant de plusieurs missions.",

    "headline": "Je conçois des systèmes Salesforce faits pour tenir à grande échelle.",
    "decisionPanelTitle": "Panel de Revue des Décisions d'Architecture",
    "ctaTitle": "Vous construisez un système Salesforce où automatisation, sécurité et intégrations doivent fonctionner ensemble ?",
    "idx.hero.eyebrow": "Consultant Technique Salesforce",
    "idx.hero.sub": "Flow et Apex là où chacun mérite sa place · des modèles de sharing pensés pour l'organisation, pas un modèle générique · des intégrations qui échouent de façon visible, jamais en silence.",
    "idx.hero.ctaProjects": "Explorer l'Architecture",

    "idx.certs.tag": "Certifications",
    "idx.certs.title": "Certifications Salesforce",

    "common.completed": "Terminé",
    "common.next": "Suivant",
    "common.notYetEarned": "Pas Encore Obtenu",
    "idx.aj.tag": "Parcours de Certification",
    "idx.aj.sectionTitle": "Le parcours d'architecture que je construis.",
    "idx.aj.title": "Parcours vers Application Architect",
    "idx.aj.note": "Pas encore Salesforce Certified Application Architect — cette certification exige de compléter les quatre exigences ci-dessus.",

    "idx.console.tag": "Interaction Signature",
    "idx.console.title": "Console d'Architecture",
    "idx.console.intro": "Que concevez-vous ?",
    "idx.console.tab.automation": "Automatisation",
    "idx.console.tab.security": "Sécurité",
    "idx.console.tab.integration": "Intégration",
    "idx.console.tab.data": "Données",
    "idx.console.automation.n1": "Propriété", "idx.console.automation.n2": "Complexité",
    "idx.console.automation.n3": "Transaction", "idx.console.automation.n4": "Échelle",
    "idx.console.automation.n5": "Maintenabilité",
    "idx.console.automation.message": "Commencez par déterminer qui doit être propriétaire du processus, puis décidez à quel moment l'orchestration déclarative cesse d'être pertinente.",
    "idx.console.automation.cta": "Explorer les Décisions d'Automatisation →",
    "idx.console.security.n1": "Identité", "idx.console.security.n2": "Objet",
    "idx.console.security.n3": "Champ", "idx.console.security.n4": "Enregistrement",
    "idx.console.security.n5": "Exécution",
    "idx.console.security.message": "Commencez par les limites d'accès avant de choisir le mécanisme de sharing.",
    "idx.console.security.cta": "Explorer l'Architecture de Sécurité →",
    "idx.console.integration.n1": "Latence", "idx.console.integration.n2": "Couplage",
    "idx.console.integration.n3": "Propriété", "idx.console.integration.n4": "Défaillance",
    "idx.console.integration.n5": "Récupération",
    "idx.console.integration.message": "Commencez par le contrat et le comportement en cas de défaillance avant de choisir la technologie d'intégration.",
    "idx.console.integration.cta": "Explorer l'Architecture d'Intégration →",
    "idx.console.data.n1": "Propriété", "idx.console.data.n2": "Modèle",
    "idx.console.data.n3": "Identité", "idx.console.data.n4": "Qualité",
    "idx.console.data.n5": "Échelle",
    "idx.console.data.message": "Commencez par déterminer qui possède les données avant de concevoir le schéma.",
    "idx.console.data.cta": "Explorer l'Architecture des Données →",

    "idx.design.tag": "Capacités",
    "idx.design.title": "Ce Que Je Conçois",
    "idx.design.intro": "Cinq surfaces, une seule discipline d'architecture. Survolez ou touchez une ligne pour voir le principe qui la sous-tend.",
    "idx.design.row1.verb": "Systèmes d'Automatisation",
    "idx.design.row1.reveal": "Flow est propriétaire de l'orchestration par défaut, jusqu'à ce qu'un besoin nécessite réellement un contrôle programmatique.",
    "idx.design.row2.verb": "Modèles de Sécurité",
    "idx.design.row2.reveal": "L'accès commence par des limites explicites, pas par des permissions accumulées.",
    "idx.design.row3.verb": "Limites d'Intégration",
    "idx.design.row3.reveal": "Une intégration a besoin d'un contrat pour ce qui se passe quand l'autre système est en panne, pas seulement d'un chemin nominal.",
    "idx.design.row4.verb": "Architecture des Données",
    "idx.design.row4.reveal": "La propriété des données se décide avant le schéma, pas après.",
    "idx.design.row5.verb": "Expériences de Plateforme",
    "idx.design.row5.reveal": "Les composants consomment des services et affichent un état — ils ne possèdent pas la logique métier.",

    "common.compositeProductionCase": "Cas de Production Composite",
    "idx.projects.categoryAdr": "Registre de Décision d'Architecture",

    "about.hero.tag": "PROFIL / 01",
    "about.hero.headline": "Je comble l'écart entre « c'est configuré » et « c'est conçu ».",
    "about.hero.lede": "Je travaille avec Flow, Apex, LWC, l'architecture de sécurité et les intégrations — actuellement 3 des 4 exigences complétées vers Salesforce Certified Application Architect.",
    "about.hero.portraitCaption1": "Plateforme Salesforce",

    "about.approach.tag": "APPROCHE / 02",
    "about.approach.h1": "Ce que je fais réellement",
    "about.approach.p1": "Une grande partie du travail Salesforce n'est pas « construire une nouvelle fonctionnalité » — c'est « cette automatisation fonctionne jusqu'à ce qu'elle cesse de fonctionner », ou « on ne sait plus qui est autorisé à voir quoi ». Je me concentre sur la frontière entre l'automatisation configurée par les administrateurs et les systèmes conçus avec rigueur d'ingénierie : là où une automatisation qui fonctionne à faible volume peut se comporter très différemment quand le volume, la concurrence et la complexité des données augmentent, ou là où un modèle de permissions adapté à une équipe cesse d'avoir du sens pour trois.",
    "about.approach.p2": "Mon quotidien couvre l'automatisation Flow, le développement Apex, les Lightning Web Components, les intégrations REST et le modèle de sharing/sécurité qui sous-tend tout cela. Je ne traite pas ces éléments comme des compétences séparées — une automatisation de routage est aussi une décision de sécurité (sous quel utilisateur s'exécute la réaffectation basée sur les files d'attente ?) et une décision de données (qu'advient-il de l'historique des champs de l'enregistrement quand il est déplacé ?).",
    "about.approach.h2": "Comment je choisis entre configuration et code",
    "about.approach.p3": "Flow est mon choix par défaut. C'est transparent, les administrateurs peuvent le maintenir sans déploiement, et la plupart de la logique métier n'a pas besoin de plus puissant que ce que Flow expose déjà. Je passe à Apex quand l'une de ces conditions précises est vraie : la logique nécessite un contrôle transactionnel réel, elle doit être réutilisée sur plus de points d'entrée que Flow ne peut proprement partager, elle est assez intensive en calcul ou en volume pour que les governor limits deviennent la vraie contrainte, ou elle se situe à une frontière d'intégration qui exige une gestion d'erreurs rigoureuse. C'est un jugement, pas une règle que j'applique mécaniquement — et je préfère expliquer ce raisonnement en entretien plutôt que de me cacher derrière la « bonne pratique ».",
    "about.approach.h3": "Comment je pense la sécurité",
    "about.approach.p4": "Le sharing et la sécurité sont devenus l'un de mes axes techniques les plus forts, renforcé par la certification Platform Sharing and Visibility Architect. Le modèle mental que j'utilise : l'accès aux objets et aux champs (CRUD/FLS) fixe le plafond de ce qui est possible, le sharing au niveau des enregistrements décide qui est admis sous ce plafond, et le comportement d'Apex à l'exécution est une décision distincte par-dessus les deux — les mots-clés de sharing (<code>with sharing</code>, <code>without sharing</code>, <code>inherited sharing</code>) déterminent si le sharing au niveau des enregistrements est appliqué dans ce code, alors que le CRUD/FLS doit encore être appliqué délibérément, puisqu'il n'est pas automatiquement lié au mot-clé de sharing. Beaucoup de failles de sécurité réelles viennent de cette distinction négligée.",
    "about.approach.h4": "Vers quoi cela mène",
    "about.approach.p5": "Je progresse vers Salesforce Certified Application Architect — trois des quatre exigences sont complètes (Platform App Builder, Platform Developer, Platform Sharing and Visibility Architect), et je vise ensuite Platform Data Architect. C'est une direction délibérée, pas un changement d'image : le travail implique de plus en plus des questions de propriété des données et de frontières entre systèmes plutôt que de la mécanique de configuration, et le parcours de certification reflète où ce travail se dirige.",

    "about.dna.tag": "ADN D'ARCHITECTURE / 03",
    "about.dna.title": "ADN d'Architecture",
    "about.dna.intro": "Cinq éléments à la base de ce travail. Survolez ou touchez chacun pour voir le principe qui le sous-tend.",
    "about.dna.automate.verb": "J'automatise",
    "about.dna.automate.reveal": "Flow est propriétaire de l'orchestration par défaut — jusqu'à ce qu'un besoin nécessite réellement un contrôle programmatique.",
    "about.dna.build.verb": "Je construis",
    "about.dna.build.reveal": "Les composants consomment des services et affichent un état — ils ne possèdent pas la logique métier.",
    "about.dna.secure.verb": "Je sécurise",
    "about.dna.secure.reveal": "L'accès commence par des limites explicites, pas par des permissions accumulées.",
    "about.dna.connect.verb": "Je connecte",
    "about.dna.connect.reveal": "Une intégration a besoin d'un contrat pour ce qui se passe quand l'autre système est en panne, pas seulement d'un chemin nominal.",
    "about.dna.design.verb": "Je conçois",
    "about.dna.design.reveal": "Chaque décision nomme son compromis, pas seulement son bénéfice.",

    "about.journey.tag": "PARCOURS / 04",
    "about.journey.title": "Parcours Professionnel",
    "about.journey.intro": "Historique de certifications vérifié — pas une affirmation, une chronologie. La prochaine certification est délibérée, pas un changement d'image.",
    "about.journey.target": "Objectif",
    "about.journey.targetCaption": "Nécessite les 4 certifications ci-dessus — pas encore délivrée",

    "about.think.tag": "COMMENT JE PENSE / 05",
    "about.think.title": "Principes Qui Guident Ma Conception",
    "about.think.1.statement": "Déclaratif d'abord. Pas déclaratif à tout prix.",
    "about.think.1.explain": "Flow est propriétaire de l'orchestration par défaut car cela garde le système maintenable par les administrateurs. Apex mérite sa place quand le contrôle transactionnel, la réutilisation ou la performance en volume justifient le coût d'ingénierie supplémentaire — pas simplement parce qu'un besoin pourrait être codé.",
    "about.think.2.statement": "La sécurité n'est pas un permission set. C'est un modèle.",
    "about.think.2.explain": "L'accès aux objets, l'accès aux champs, le sharing au niveau des enregistrements et le comportement d'Apex à l'exécution sont quatre décisions distinctes qui doivent être cohérentes entre elles. Un permission set seul ne répond complètement à aucune d'entre elles.",
    "about.think.3.statement": "Les intégrations ont besoin d'une stratégie de défaillance.",
    "about.think.3.explain": "La question de conception intéressante n'est pas quelle API appeler — c'est ce qui se passe quand l'autre système ne répond pas à temps, et si un humain en est informé.",
    "about.think.4.statement": "Le chemin nominal n'est que la moitié de l'architecture.",
    "about.think.4.explain": "Une solution qui ne fonctionne que lorsque tout réussit n'est pas terminée. Le comportement en volume, les défaillances partielles et les chemins de récupération font partie du besoin, pas un cas marginal.",
    "about.think.5.statement": "L'échelle change les décisions de conception.",
    "about.think.5.explain": "Un modèle d'automatisation ou de requête qui convient à faible volume peut devenir le prochain incident de governor limits de l'organisation à mesure que le nombre d'enregistrements, la concurrence et la complexité des données augmentent — je conçois donc en fonction de ce vers quoi l'organisation se dirige, pas seulement d'où elle en est aujourd'hui.",

    "about.capabilities.tag": "CAPACITÉS / 06",
    "about.capabilities.title": "Avec Quoi Je Travaille",
    "about.capabilities.d1.title": "Développement de Plateforme",
    "about.capabilities.d1.li1": "Apex",
    "about.capabilities.d1.li2": "Lightning Web Components",
    "about.capabilities.d1.li3": "SOQL",
    "about.capabilities.d1.li4": "Apex Asynchrone",
    "about.capabilities.d1.li5": "Tests Apex (cas de volume et cas négatifs)",
    "about.capabilities.d2.title": "Automatisation",
    "about.capabilities.d2.li1": "Salesforce Flow",
    "about.capabilities.d2.li2": "Apex Invocable",
    "about.capabilities.d2.li3": "Propriété et prise de décision en automatisation",
    "about.capabilities.d3.title": "Architecture",
    "about.capabilities.d3.li1": "Conception du Sharing et de la Visibilité",
    "about.capabilities.d3.li2": "Modélisation de données",
    "about.capabilities.d3.li3": "Conception de solutions",
    "about.capabilities.d3.li4": "Cadres de décision d'automatisation",
    "about.capabilities.d4.title": "Intégration",
    "about.capabilities.d4.li1": "REST APIs",
    "about.capabilities.d4.li2": "OAuth 2.0",
    "about.capabilities.d4.li3": "Named Credentials",
    "about.capabilities.d5.li1": "Accès des utilisateurs externes",
    "about.capabilities.d5.li2": "Sharing pour les utilisateurs de portail",
    "about.capabilities.d5.li3": "Considérations de sécurité pour les données exposées à l'extérieur",
    "about.capabilities.d6.title": "Émergent",
    "about.capabilities.d6.li1": "Agentforce (Spécialiste Certifié)",
    "about.capabilities.d6.li2": "Appliqué en complément du socle plateforme/architecture, pas comme un virage qui s'en éloigne",

    "about.testing.title": "Tests et Livraison",
    "about.testing.p": "Je teste Apex pour le comportement en volume et les cas négatifs, pas seulement le cas nominal à un seul enregistrement qu'un governor limit ne détectera jamais dans une démo. La livraison passe par des sandboxes, le contrôle de version Git, et Salesforce DX / Change Sets pour la promotion entre environnements — les fondamentaux qui rendent une mise en production sûre à répéter, pas un événement unique.",

    "about.beyond.tag": "AU-DELÀ DE LA PLATEFORME / 07",
    "about.beyond.title": "Au-delà de la Plateforme",
    "about.beyond.p": "La majeure partie de ce qui façonne ma façon de travailler n'est pas spécifique à Salesforce : rester délibéré sur ce que je ne sais pas encore, traiter les certifications comme un moteur d'approfondissement plutôt qu'une case à cocher, et évoluer confortablement entre conversations techniques et métier sans avoir besoin d'un traducteur. Je travaille en anglais, en espagnol et en français — ce qui se remarque ici autant qu'ailleurs.",

    "idx.principles.tag": "Philosophie de Conception",
    "idx.principles.title": "Comment Je Conçois les Systèmes Salesforce",
    "idx.principles.intro": "Quelques principes derrière chaque décision de ce site. Le cadre complet, avec ses compromis, se trouve sur la page Architecture.",
    "idx.principles.p1.title": "Sécurité par Défaut",
    "idx.principles.p1.desc": "Privilège minimal et accès explicite : rien n'est hérité par accident.",
    "idx.principles.p2.title": "Du Code avec un But",
    "idx.principles.p2.desc": "Apex se justifie quand le contrôle transactionnel, la réutilisation ou l'échelle le justifient, pas par défaut.",
    "idx.principles.p3.title": "Opérations Observables",
    "idx.principles.p3.desc": "Une solution n'est pas terminée quand le chemin nominal fonctionne. Les échecs doivent être détectables et récupérables.",
    "idx.principles.p4.title": "Les Compromis Sont Explicites",
    "idx.principles.p4.desc": "Chaque décision d'architecture nomme son coût, pas seulement son bénéfice.",
    "idx.principles.linkText": "Voir les Principes d'Architecture complets →",


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


    "idx.projects.tag": "Études de Cas",
    "idx.projects.intro": "Modèles de solution de style production appliqués dans les implémentations du portfolio.",
    "idx.projects.card1.title": "Architecture d'Automatisation des Cas",
    "idx.projects.card1.desc": "Stratégie de routage automatisé conçue pour réduire la charge de travail manuelle et accélérer le temps de réponse SLA grâce à des services de logique d'assignation réutilisables.",
    "idx.projects.card2.title": "Architecture de Tableau de Bord LWC",
    "idx.projects.card2.desc": "Tableaux de bord Lightning prêts pour l'exécutif, conçus pour l'adoption opérationnelle, avec des fournisseurs de données Apex dynamiques et une stratégie de visibilité UI basée sur les rôles.",
    "idx.projects.card3.title": "Architecture d'Intégration API",
    "idx.projects.card3.desc": "Modèle d'intégration réutilisable basé sur Named Credential prenant en charge une communication sécurisée avec les systèmes externes et une exécution de services résiliente aux erreurs.",
    "idx.projects.card4.title": "Analyse Approfondie de l'Automatisation d'Entreprise",
    "idx.projects.card4.desc": "Registre complet des décisions d'architecture — contexte, contraintes, compromis, couches de solution, modèle de sécurité et impact business mesuré.",



    "idx.cta.sub": "Disponible pour des postes remote de Salesforce Technical Consultant (Flow + Apex + Intégrations) sur des fuseaux horaires alignés US.<br>Je conçois des frameworks d'automatisation scalables qui équilibrent la maintenabilité pour les administrateurs, l'extensibilité pour les développeurs et la fiabilité des intégrations.",

    "pca.title": "Architecture d'Automatisation<br>des Cas en Entreprise",
    "pca.summary": "Routage intelligent piloté par Flow, garde-fous d'escalade multi-niveaux et frameworks de validation pour la gestion des cas à l'échelle de l'entreprise — réduisant l'intervention manuelle sur l'ensemble du cycle de résolution.",
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
    "pca.b5.li4": "Platform Events comme modèle à évaluer pour des notifications d'escalade asynchrones et découplées vers des systèmes externes",
    "pca.b6.tag": "Impact Métier", "pca.b6.title": "Résultats Livrés",
    "pca.b6.li1": "A réduit le temps moyen de routage des cas en remplaçant l'assignation manuelle par un routage automatisé",
    "pca.b6.li2": "Introduction d'une matrice d'escalade à 3 niveaux avec visibilité SLA automatisée et routage basé sur le temps",
    "pca.b6.li3": "Le tableau de bord exécutif affiche les métriques de débit des cas en temps réel",
    "pca.b6.li4": "Les garde-fous de validation à l'entrée ont amélioré la cohérence des données des cas",

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
    "plwc.b6.li1": "A remplacé les exports hebdomadaires vers des feuilles de calcul par un tableau de bord exécutif en direct, intégré à la plateforme",
    "plwc.b6.li2": "A consolidé plusieurs rapports curés manuellement en une seule vue de pipeline en temps réel",
    "plwc.b6.li3": "A donné aux dirigeants un accès à la demande aux données du pipeline, au lieu d'attendre le prochain rapport programmé",
    "plwc.b6.li4": "L'éditeur de propriétés personnalisé permet aux administrateurs d'ajuster la mise en page du tableau de bord sans développeur ni ticket IT",

    "papi.title": "Couche d'Intégration<br>API Entreprise",
    "papi.summary": "Architecture réutilisable de Named Credential avec des endpoints REST sécurisés et une couche de service pilotée par la configuration — une fondation d'intégration conçue pour s'étendre à d'autres systèmes externes sans nouveau code par intégration.",
    "papi.impact1": "Couche de credentials réutilisable",
    "papi.impact2": "Secrets stockés dans le code Apex",
    "papi.impact3": "Nouveaux endpoints via configuration",
    "papi.b1.tag": "Contexte", "papi.b1.title": "Problème Métier",
    "papi.b1.li1": "Identifiants API codés en dur dans Apex — vulnérabilité de sécurité critique",
    "papi.b1.li2": "Aucun modèle d'intégration réutilisable — chaque système nécessitait du code sur mesure",
    "papi.b1.li3": "La synchronisation des données externes s'exécutait uniquement en batch nocturne — aucune option temps réel",
    "papi.b1.li4": "Aucune gestion d'erreurs — les callouts échoués étaient silencieux, sans mécanisme de reprise",
    "papi.b2.tag": "Stratégie d'Architecture", "papi.b2.title": "Conception de la Solution",
    "papi.b2.li1": "Named Credentials comme source unique de vérité pour les identifiants sortants — aucun secret stocké dans Apex",
    "papi.b2.li2": "Une classe de service Apex réutilisable comme point d'intégration unique pour les callouts REST, remplaçant du code sur mesure par système",
    "papi.b2.li3": "Couche de journalisation sur un objet personnalisé pour l'audit des callouts et la visibilité des reprises",
    "papi.b3.tag": "Considérations d'Architecture", "papi.b3.title": "Modèles à Évaluer à Grande Échelle",
    "papi.b3.li1": "Auth Provider OAuth 2.0 pour le renouvellement automatique des tokens, lorsque le système externe le prend en charge, plutôt que de gérer les tokens manuellement",
    "papi.b3.li2": "Platform Events pour découpler la synchronisation en aval de la transaction de la requête, lorsque des mises à jour quasi temps réel comptent plus que la cohérence immédiate",
    "papi.b3.li3": "Enchaînement de Queueable en Apex pour des séquences de callouts asynchrones avec reprise sécurisée",
    "papi.b3.li4": "External Services pour l'enregistrement de schémas API sans code, lorsque l'API externe expose une spécification OpenAPI stable",
    "papi.b4.tag": "Modèle de Sécurité", "papi.b4.title": "Sécurité des Identifiants et à l'Exécution",
    "papi.b4.li1": "Tous les identifiants sortants stockés dans des Named Credentials — jamais codés en dur dans Apex",
    "papi.b4.li2": "Les callouts Apex s'authentifient via la couche Named Credential / External Credential, pas via CSP ni CORS — ceux-ci régissent les requêtes provenant du navigateur ou de Lightning, pas les callouts côté serveur",
    "papi.b4.li3": "CSP Trusted Sites évalué séparément pour tout composant Lightning appelant le système externe directement depuis le navigateur",
    "papi.b4.li4": "La journalisation des callouts est conçue pour éviter de persister les champs sensibles de la réponse, plutôt que de stocker indéfiniment les corps de réponse complets",
    "papi.b5.tag": "Scalabilité", "papi.b5.title": "Architecture Réutilisable",
    "papi.b5.li1": "Une seule classe de service Apex prend en charge des endpoints REST supplémentaires via la configuration, plutôt qu'une nouvelle classe par intégration",
    "papi.b5.li2": "Métadonnées personnalisées pour l'enregistrement des endpoints — ajouter une nouvelle API est un changement de configuration, pas un déploiement",
    "papi.b6.tag": "Impact Métier", "papi.b6.title": "Résultats Livrés",
    "papi.b6.li1": "Les secrets API ont été déplacés hors du code Apex vers des Named Credentials",
    "papi.b6.li2": "Le service d'intégration réutilisable a réduit la duplication lors de l'ajout de nouveaux endpoints",
    "papi.b6.li3": "La journalisation des callouts a remplacé les échecs silencieux par une visibilité sur l'état de santé des intégrations et leurs schémas de défaillance",

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
    "padr.b6.c1.p": "Maximise la maintenabilité par les administrateurs. Les parties prenantes métier peuvent ajuster la logique de routage directement, puisque les changements relèvent de la configuration et non du code.",
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
    "padr.b9.num": "09 · Impact Métier", "padr.b9.title": "Résultats Livrés",
    "padr.b9.li1": "A remplacé la charge de travail d'assignation manuelle par un routage automatisé et basé sur des règles",
    "padr.b9.li2": "A amélioré la visibilité du suivi des SLA — la conformité est désormais mesurable en temps réel",
    "padr.b9.li3": "A permis des tableaux de bord de reporting au niveau de la direction avec des métriques de pipeline en direct",
    "padr.b9.li4": "Les garde-fous de validation à l'entrée ont réduit les incidents récurrents de qualité des données",
    "padr.b9.li5": "L'équipe d'administration peut désormais modifier les règles de routage de manière autonome, sans développeur pour chaque changement"
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

  /* ─── DECISION FRAMEWORK TABS (Automation / Security / Integration / Architecture Console) ───
     Full ARIA tabs pattern: roving tabindex, automatic activation on arrow/Home/End —
     the same lens switches immediately whether driven by mouse or keyboard. ─── */
  document.querySelectorAll(".decision-tabs").forEach(tabGroup => {
    const tabs = Array.from(tabGroup.querySelectorAll(".decision-tab"));
    const panels = tabGroup.parentElement.querySelectorAll(":scope > .decision-panel");

    function activate(tab, { focus = true } = {}) {
      tabs.forEach(t => {
        const isActive = t === tab;
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", String(isActive));
        t.tabIndex = isActive ? 0 : -1;
      });
      panels.forEach(p => p.classList.remove("active"));
      const target = tabGroup.parentElement.querySelector(
        `.decision-panel[data-decision-panel="${tab.dataset.decision}"]`
      );
      if (target) target.classList.add("active");
      if (focus) tab.focus();
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => activate(tab, { focus: false }));
      tab.addEventListener("keydown", (e) => {
        let next = null;
        if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
        else if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === "Home") next = tabs[0];
        else if (e.key === "End") next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); activate(next); }
      });
    });
  });

  /* ─── LOCAL SUB-NAV SCROLLSPY (long-form architecture/about pages) ─── */
  const subnavLinks = document.querySelectorAll(".subnav a");
  if (subnavLinks.length) {
    const subnavTargets = Array.from(subnavLinks)
      .map(a => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);
    const linkForTarget = new Map(subnavTargets.map((el, i) => [el, subnavLinks[i]]));
    const setActive = (link) => {
      if (!link) return;
      subnavLinks.forEach(a => a.classList.toggle("active", a === link));
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (!visible.length) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActive(linkForTarget.get(visible[0].target));
      }, { rootMargin: "-140px 0px -70% 0px", threshold: 0 });
      subnavTargets.forEach(el => io.observe(el));
      setActive(subnavLinks[0]);
    } else {
      const updateSubnav = () => {
        const pos = window.scrollY + 140;
        let current = subnavTargets[0];
        subnavTargets.forEach(el => { if (el.offsetTop <= pos) current = el; });
        setActive(linkForTarget.get(current));
      };
      window.addEventListener("scroll", updateSubnav, { passive: true });
      updateSubnav();
    }
  }

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

  /* ─── ARCHITECTURE DNA / WHAT I DESIGN (hover/tap/keyboard reveal) ─── */
  document.querySelectorAll(".dna-card, .design-row").forEach(card => {
    card.addEventListener("click", () => {
      const expanded = card.classList.toggle("expanded");
      card.setAttribute("aria-expanded", String(expanded));
    });
  });

  /* ─── HOW I THINK (accordion) ─── */
  document.querySelectorAll(".think-item").forEach(item => {
    const panel = document.getElementById(item.getAttribute("aria-controls"));
    item.addEventListener("click", () => {
      const isOpen = item.getAttribute("aria-expanded") === "true";
      item.setAttribute("aria-expanded", String(!isOpen));
      if (panel) panel.classList.toggle("open", !isOpen);
    });
  });

  /* ─── PROFESSIONAL JOURNEY TIMELINE (one-shot reveal on scroll) ─── */
  const timeline = document.querySelector(".journey-timeline");
  if (timeline) {
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            timeline.classList.add("in-view");
            obs.unobserve(timeline);
          }
        });
      }, { threshold: 0.25 });
      io.observe(timeline);
    } else {
      timeline.classList.add("in-view");
    }
  }

});
