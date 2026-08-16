# adrian-salesforce-portfolio

Personal portfolio for Adrian Tobar Hanze — Salesforce Technical Consultant. Static HTML/CSS/JS, no framework, deployed on Vercel.

## Architecture

- **No build step required to deploy.** Every `.html` file is checked in fully rendered — Vercel serves the repo as-is.
- **One small build step is required after editing certification data.** `scripts/build.js` reads `data/certifications.js` and regenerates the certification grid + Application Architect Journey component, injecting them into `index.html` between `<!-- CERTS:START/END -->` and `<!-- ARCHITECT_JOURNEY:START/END -->` marker comments. Run it locally, then commit the regenerated HTML alongside the data change:
  ```
  node scripts/build.js
  ```
- `data/nav.js` documents the intended nav/footer link set. Nav/footer HTML itself is hand-maintained (identical block copy-pasted across all 7 pages) rather than templated — it changes rarely enough that a build step wasn't worth the added complexity. If you add a page or rename a nav item, update it in all 7 files: `index.html`, `architecture.html`, `about.html`, and the 4 files under `projects/`.
- `style.css` is shared sitewide. `projects/project-style.css` adds project/long-form-page-specific components (content blocks, ADR blocks, tradeoff cards) and is also loaded by `architecture.html` and `about.html`.
- `script.js` is one shared file: the i18n engine + dictionary, nav/mobile-menu/diagram/decision-tab interactions, and the scroll-reveal/scroll-spy behavior. Everything in it guards for the element's absence (`if (el) ...` / `querySelectorAll(...).forEach(...)`), so it's safe to include on every page even when a given page doesn't have every component.

## Local development

No install, no build. Open the HTML files directly, or serve the folder with any static file server, e.g.:
```
npx serve .
```

## Language strategy

- **Trilingual (EN/ES/FR):** navigation, footer, Hero, CTA, certification summaries, project card summaries, and the pre-existing case-study body content (all still fully translated from earlier work).
- **English-only, by design:** `architecture.html`'s deep content (Principles, Layered Architecture writeup, Automation Decision Framework, Security/Data/Integration/Operational Architecture, Risks), `about.html`, and the new "Options Considered" / "Risks & Mitigations" blocks added to the case studies. This is a deliberate choice, not an oversight — the target audience for this reference material is primarily English-reading, and tripling hundreds of lines of dense technical prose into ES/FR wasn't judged worth the translation/QA burden it would add. If that changes, add the new keys to the `translations` object in `script.js` following the existing `idx.*` / `pca.*` / `padr.*` naming convention, and tag the corresponding elements with `data-i18n`.

## How certification data works

Everything about a certification lives in one record in `data/certifications.js`:
```js
{
  id, officialName, shortName, badge, status, category, priority,
  architectPathRequirement, completed, issueDate, credentialId
}
```
- `status`: `"active"` (shown in the grid), `"retired"` (not shown in the grid today — see below), or `"planned"` (not yet earned).
- `architectPathRequirement`: one of `"appBuilder"`, `"platformDeveloper"`, `"sharingVisibility"`, `"dataArchitect"`, or `null`. This is what drives the Application Architect Journey component.
- **Never invent `issueDate` or `credentialId`.** If it isn't confirmed, omit the field — `scripts/build.js` skips the line entirely rather than printing a placeholder.

### Adding a new certification
1. Add a record to `data/certifications.js`.
2. Run `node scripts/build.js`.
3. Commit both files.

### Updating Application Architect progress (the Data Architect update)
This is the specific update the whole data model was built for. When Salesforce records the Platform Data Architect exam as complete:
1. In `data/certifications.js`, find the `platform-data-architect` record and change:
   ```js
   status: "planned"   →   status: "active"
   completed: false     →   completed: true
   ```
   Add `issueDate` / `credentialId` once you have them (don't fabricate them in the meantime).
2. Run `node scripts/build.js`. The homepage's Application Architect Journey updates to 4/4 (100%) automatically, and the certification grid picks up the new badge — no other file needs to change.
3. **Do not** change any positioning copy ("Salesforce Certified Application Architect") anywhere on the site until Salesforce has actually issued that multi-certification credential — completing the fourth exam is a prerequisite, not the same thing as holding the credential. When it's issued, that's a deliberate content/positioning update (Hero, `<title>`, meta description, About page, OG image, CV) — search the repo for `"3/4"`, `"3 of 4"`, and `"Application Architect"` to find every place that framing appears.
4. The CV (`Adrian Tobar CV.pdf`) is a static file rendered from an HTML source that isn't checked into this repo (it was generated with Playwright's `page.pdf()` during a chat session, not part of the build). A CV 2.0 rebuild around the completed Application Architect credential is intentionally deferred — see the project history for the reasoning.

## How case studies are stored

Each case study is a hand-authored HTML page under `projects/`. They are **composite case studies based on real Salesforce production work** — not one-to-one retrospectives of a single client engagement, and not fiction either. Every case study page carries a `.case-disclosure` paragraph saying so explicitly. When extending a case study:
- Never invent a client name, industry, team size, or metric.
- If a number can't be sourced/measured, describe the mechanism instead ("replaced manual assignment with rule-driven routing"), not a percentage.
- New sections (Options Considered, Risks & Mitigations) are English-only per the language strategy above.

## How ADRs are maintained

The one formal ADR-labeled content lives in `projects/case-study-enterprise-automation.html`'s "Architecture Tradeoffs" block (`ADR-001`, `ADR-002`). Only add a new ADR number for a decision that's genuinely interesting and can be described honestly — don't manufacture ADRs to look thorough. `architecture.html`'s Automation Decision Framework is a reasoning framework (how decisions get made in general), not an ADR log (specific decisions that were made) — keep that distinction when adding to either.

## Creating a new case study
1. Copy the structure of an existing project page (nav, `.project-hero`, `.case-disclosure`, `.content-grid` of `.content-block`s).
2. Include, at minimum: Context, Business Problem, Solution Design, Options Considered, Security Model, Risks & Mitigations, Scalability, Business Impact.
3. Add the project to the `.project-grid` on `index.html` (card + `<a>` link) and to `sitemap.xml`.
4. Keep metrics qualitative unless you can source a real number (see `#metrics` in project history — several fabricated-sounding percentages were removed for exactly this reason).

## Deploying

Push to any branch; if the repo's Vercel integration is connected (it is), that branch gets a preview deployment automatically. Only `main` is production. Nothing in this repo should be merged to `main` without an explicit human decision to do so.

## What must never be fabricated

- Client names, industries, or company scale
- Metrics/percentages without a real, sourceable baseline
- Certification names, issue dates, or credential IDs
- Employment type (contract vs. freelance vs. part-time vs. full-time) beyond what's been explicitly confirmed
- Claiming "Salesforce Certified Application Architect" before Salesforce has actually issued it
- Testimonials, client logos, or GitHub activity used as a seniority proxy

When in doubt, omit the detail, generalize honestly, or frame the content as a reasoning framework rather than a specific claim.
