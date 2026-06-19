# CLAUDE.md

This file is secondary guidance for Claude Code. `AGENTS.md` is the repo source of truth.

## Quick Facts
- Astro 6 static site with file-based routing in `src/pages/`.
- Trust `package.json`, `astro.config.mjs`, `public/CNAME`, `.github/workflows/deploy.yml`, `tsconfig.json`, and the actual `.astro` files over `README.md`.
- `README.md` is the Astro starter template; ignore it.
- Node must satisfy `>=22.12.0`.

## Commands
- Run `npm install` first.
- Use `npm run astro -- check` for validation.
- Use `npm run build` for the CI gate.
- Use `npm run dev` and `npm run preview` for local verification.
- There are no lint or test scripts.

## Structure
- Shared shell: `src/layouts/Layout.astro`, `src/components/Nav.astro`, `src/components/Footer.astro`, `src/styles/global.css`.
- Primary nav is `Start`, `Dev`, `Media`, `Services`, `Kontakt`; `impressum` and `datenschutz` are footer-only.
- `about`, `module`, `templates`, and `marketing-check` still route but are legacy and unlinked.
- Most page styling is inline in the `.astro` files; there is no CMS/content collection layer.

## Deployment
- GitHub Pages deploys from `master` only.
- `astro.config.mjs` and `public/CNAME` must both stay on `web.asfmedia.org`.
- The contact form posts to `formsubmit.co` and relies on `_next` pointing back to the deployed site.

## Content
- Site copy is German.
- The legal pages contain real identity/contact data; preserve their structure unless asked to change it.
