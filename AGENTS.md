# AGENTS.md

## Scope
- Single Astro site (`asfmedia-web`), not a monorepo.
- Use npm only (`package-lock.json` is authoritative).
- Node runtime must satisfy `>=22.12.0` (`package.json` engines).

## Verified Commands
- `npm install` (required before any script).
- `npm run dev` (Astro dev server on `localhost:4321`).
- `npm run astro -- check` (only repo-provided validation/type check).
- `npm run build` (production build to `dist/`).
- `npm run preview` (serve built output).
- Preferred verification before handoff: `npm run astro -- check && npm run build`.

## Deployment Facts (GitHub Pages)
- CI: `.github/workflows/deploy.yml`.
- Deploys on push to `master` (not `main`).
- CI sequence is fixed: Node 22 -> `npm install` -> `npm run build` -> upload `dist/`.
- Canonical host must match in both files:
  - `astro.config.mjs` (`site`, currently `https://web.asfmedia.org`)
  - `public/CNAME` (currently `web.asfmedia.org`)

## Code Map
- Shared shell: `src/layouts/Layout.astro` (global head/meta/fonts + global CSS import).
- Shared UI: `src/components/Nav.astro` and `src/components/Footer.astro`.
- Design tokens/base styles: `src/styles/global.css`; page-specific layout styles are inline in each page.
- Routes live in `src/pages/`: `index`, `about`, `contact`, `dev`, `media`, `services`, `templates`, `module`, `marketing-check`, `impressum`, `datenschutz`.

## High-Signal Gotchas
- `README.md` is still the Astro starter template; do not treat it as project truth.
- Navigation links are duplicated in both `src/components/Nav.astro` and `src/components/Footer.astro`; keep both in sync when adding/removing routes.
- Domain/brand strings are currently mixed (`web.asfmedia.org`, `asfmedia.org`, `ultramind.one`) across pages. When editing contact/legal/SEO text, normalize all hardcoded hosts together.
- `src/pages/contact.astro` form flow is hardcoded (`formsubmit` action + `_next` redirect); domain changes must update these fields explicitly.
- If palette tokens change in `src/styles/global.css`, recheck contact form input contrast in `src/pages/contact.astro`.
- `dist/` and `.astro/` are generated; never hand-edit.
- Legal pages and core copy are German; preserve legal structure unless explicitly asked to rewrite content.
