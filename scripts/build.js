#!/usr/bin/env node
/**
 * Tiny, dependency-free static content builder.
 *
 * What it does:
 *   1. Reads data/certifications.js (the single source of truth for every
 *      certification and Application Architect progress).
 *   2. Renders the certification grid and the Application Architect Journey
 *      component as plain HTML strings.
 *   3. Injects those strings into every target file between matching
 *      `<!-- NAME:START -->` / `<!-- NAME:END -->` marker comments.
 *
 * What it deliberately does NOT do:
 *   - No framework, no bundler, no client-side templating.
 *   - No regeneration of hand-authored prose (case studies, ADRs, principles).
 *     That content is unique, narrative, and not worth abstracting into data.
 *   - No network access, no fabricated data. If a certification is missing
 *     issueDate/credentialId, the renderer omits that line — it never prints
 *     a placeholder.
 *
 * Usage: node scripts/build.js
 * Run this after editing data/certifications.js, then commit the
 * regenerated HTML alongside the data change.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const certifications = require(path.join(ROOT, "data/certifications.js"));

const REQ_LABELS = {
  appBuilder: "Platform App Builder",
  platformDeveloper: "Platform Developer",
  sharingVisibility: "Platform Sharing and Visibility Architect",
  dataArchitect: "Platform Data Architect"
};
const REQ_ORDER = ["appBuilder", "platformDeveloper", "sharingVisibility", "dataArchitect"];

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatDate(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[m - 1]} ${String(d).padStart(2, "0")}, ${y}`;
}

/* ─── Certification grid (active, non-retired, non-planned; sorted by priority) ─── */
function renderCertGrid() {
  const shown = certifications
    .filter(c => c.status === "active")
    .sort((a, b) => a.priority - b.priority);

  return shown.map(c => {
    const priorityClass = c.priority <= 2 ? " cert-priority" : "";
    const imgSrc = c.badge
      ? `assets/certifications/${encodeURIComponent(c.badge).replace(/%20/g, "%20")}`
      : null;
    const fallbackWord = c.shortName.split(" ").slice(-1)[0];
    const img = imgSrc
      ? `<img src="${imgSrc}" alt="${esc(c.shortName)}" width="240" height="235" loading="lazy" onerror="this.parentElement.innerHTML='<div class=cert-fallback>${esc(fallbackWord)}</div>'">`
      : `<div class="cert-fallback">${esc(fallbackWord)}</div>`;
    return `      <div class="cert-card${priorityClass}">
        <div class="cert-img-wrap">
          ${img}
        </div>
        <span class="cert-name">${esc(c.shortName)}</span>
      </div>`;
  }).join("\n");
}

/* ─── Application Architect Journey ─── */
function renderArchitectJourney() {
  const byReq = {};
  certifications.forEach(c => { if (c.architectPathRequirement) byReq[c.architectPathRequirement] = c; });

  const completedCount = REQ_ORDER.filter(r => byReq[r] && byReq[r].completed).length;
  const total = REQ_ORDER.length;
  const pct = Math.round((completedCount / total) * 100);

  const steps = REQ_ORDER.map(reqKey => {
    const cert = byReq[reqKey];
    const done = !!(cert && cert.completed);
    const label = REQ_LABELS[reqKey];
    const statusKey = done ? "common.completed" : "common.next";
    const statusText = done ? "Completed" : "Next";
    return `        <div class="aj-step${done ? " done" : " next"}">
          <span class="aj-step-icon" aria-hidden="true">${done ? "✓" : "○"}</span>
          <span class="aj-step-label">${esc(label)}</span>
          <span class="aj-step-status" data-i18n="${statusKey}">${statusText}</span>
        </div>`;
  }).join("\n");

  return `      <div class="architect-journey">
        <div class="aj-head">
          <span class="aj-title" data-i18n="idx.aj.title">Application Architect Journey</span>
          <span class="aj-fraction">${completedCount}/${total} <span class="aj-pct">(${pct}%)</span></span>
        </div>
        <div class="aj-bar"><div class="aj-bar-fill" style="width:${pct}%"></div></div>
        <div class="aj-steps">
${steps}
        </div>
        <p class="aj-note" data-i18n="idx.aj.note">Not yet a Salesforce Certified Application Architect — that credential requires all four requirements above to be complete.</p>
      </div>`;
}

/* ─── Marker injection ─── */
function injectSection(html, markerName, content) {
  const re = new RegExp(`(<!--\\s*${markerName}:START\\s*-->)([\\s\\S]*?)(<!--\\s*${markerName}:END\\s*-->)`);
  if (!re.test(html)) return { html, changed: false };
  return { html: html.replace(re, `$1\n${content}\n    $3`), changed: true };
}

const TARGETS = ["index.html", "about.html"];

let totalChanged = 0;
TARGETS.forEach(file => {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, "utf8");
  let changedAny = false;

  let r = injectSection(html, "CERTS", renderCertGrid());
  html = r.html; changedAny = changedAny || r.changed;

  r = injectSection(html, "ARCHITECT_JOURNEY", renderArchitectJourney());
  html = r.html; changedAny = changedAny || r.changed;

  if (changedAny) {
    fs.writeFileSync(filePath, html, "utf8");
    totalChanged++;
    console.log(`  updated: ${file}`);
  }
});

console.log(`\nBuild complete. ${totalChanged} file(s) regenerated from data/certifications.js.`);
