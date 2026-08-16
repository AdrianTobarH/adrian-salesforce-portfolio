/**
 * Single source of truth for top navigation, mobile menu, and footer links.
 * Edit here, then run `node scripts/build.js` to regenerate the nav/footer
 * markup that gets injected into every page between the
 * <!-- NAV:START/END --> and <!-- FOOTER:START/END --> markers.
 *
 * `href` is relative to the SITE ROOT. The build script rewrites it to be
 * relative to each page's actual location (root vs /projects/) automatically.
 */

module.exports = {
  primary: [
    { label: "Architecture", href: "/architecture.html" },
    { label: "Case Studies", href: "/index.html#projects" },
    { label: "About", href: "/about.html" },
    { label: "Resume", href: "/Adrian%20Tobar%20CV.pdf", download: true }
  ],
  footer: [
    { label: "Architecture", href: "/architecture.html" },
    { label: "Case Studies", href: "/index.html#projects" },
    { label: "About", href: "/about.html" },
    { label: "Contact", href: "/index.html#contact" },
    { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/adrian-tobar-hanze/", external: true }
  ]
};
