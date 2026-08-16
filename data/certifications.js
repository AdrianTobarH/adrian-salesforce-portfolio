/**
 * Single source of truth for every Salesforce certification shown on the site.
 *
 * This file is the ONLY place certification names, dates, and progress toward
 * Application Architect should ever be edited. Run `node scripts/build.js`
 * after editing it, then commit both this file and the regenerated HTML.
 *
 * Never invent an issueDate or credentialId. If it isn't confirmed, leave it
 * undefined — the renderer omits the line entirely rather than showing a
 * placeholder.
 */

module.exports = [
  {
    id: "sharing-visibility-architect",
    officialName: "Salesforce Certified Platform Sharing and Visibility Architect",
    shortName: "Platform Sharing and Visibility Architect",
    badge: "Platform Sharing and Visibility Architect.png",
    status: "active",
    category: "architect",
    priority: 1,
    architectPathRequirement: "sharingVisibility",
    completed: true
    // issueDate / credentialId: not yet confirmed — intentionally omitted, not placeholdered
  },
  {
    id: "platform-developer-ii",
    officialName: "Salesforce Certified Platform Developer II",
    shortName: "Platform Developer II",
    badge: "Platform Developer II.png",
    status: "active",
    category: "developer",
    priority: 2,
    architectPathRequirement: null,
    completed: null,
    issueDate: "2025-12-31",
    credentialId: "7326948"
  },
  {
    id: "platform-developer-i",
    officialName: "Salesforce Certified Platform Developer I",
    shortName: "Platform Developer I",
    badge: "Platform Developer.png",
    status: "active",
    category: "developer",
    priority: 3,
    architectPathRequirement: "platformDeveloper",
    completed: true,
    issueDate: "2025-11-14",
    credentialId: "6975638"
  },
  {
    id: "platform-app-builder",
    officialName: "Salesforce Certified Platform App Builder",
    shortName: "Platform App Builder",
    badge: "Platform App Builder.png",
    status: "active",
    category: "generalist",
    priority: 4,
    architectPathRequirement: "appBuilder",
    completed: true,
    issueDate: "2025-04-14",
    credentialId: "6045369"
  },
  {
    id: "agentforce-specialist",
    officialName: "Salesforce Certified Agentforce Specialist",
    shortName: "Agentforce Specialist",
    badge: "Agentforce Specialist.png",
    status: "active",
    category: "specialist",
    priority: 5,
    architectPathRequirement: null,
    completed: null,
    issueDate: "2025-07-07",
    credentialId: "6335176"
  },
  {
    id: "platform-administrator",
    officialName: "Salesforce Certified Platform Administrator",
    shortName: "Platform Administrator",
    badge: "Platform Administrator.png",
    status: "active",
    category: "generalist",
    priority: 6,
    architectPathRequirement: null,
    completed: null,
    issueDate: "2024-08-22",
    credentialId: "4787855"
  },
  {
    id: "platform-foundations",
    officialName: "Salesforce Certified Platform Foundations",
    shortName: "Platform Foundations",
    badge: "Platform Foundations.png",
    status: "active",
    category: "generalist",
    priority: 7,
    architectPathRequirement: null,
    completed: null,
    issueDate: "2023-11-02",
    credentialId: "3781815"
  },
  {
    id: "ai-associate",
    officialName: "Salesforce Certified AI Associate",
    shortName: "AI Associate",
    badge: null,
    status: "retired",
    category: "associate",
    priority: 99,
    architectPathRequirement: null,
    completed: null,
    issueDate: "2024-11-01"
  },
  // Not yet earned — the fourth Application Architect requirement.
  // When completed, change completed:true and add issueDate/credentialId here,
  // then run `node scripts/build.js` to update the journey component and cert
  // grid everywhere automatically. Do NOT change the Application Architect
  // positioning language elsewhere until Salesforce has actually issued the
  // Application Architect credential — completing the exam is not the same
  // as holding the multi-cert credential.
  {
    id: "platform-data-architect",
    officialName: "Salesforce Certified Platform Data Architect",
    shortName: "Platform Data Architect",
    badge: null,
    status: "planned",
    category: "architect",
    priority: 0,
    architectPathRequirement: "dataArchitect",
    completed: false
  }
];
