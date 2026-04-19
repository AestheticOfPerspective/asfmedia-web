# AGENTS.md

## Scope
- This repo is a single Astro site (`asfmedia-web`), not a monorepo.
- Package manager is npm (`package-lock.json` present); use npm commands, not pnpm/yarn.
- Required runtime is Node `>=22.12.0` (`package.json` engines).

## Source Of Truth
- `README.md` is the default Astro starter text and is not project-specific.
- Trust executable config instead: `package.json`, `astro.config.mjs`, `.github/workflows/deploy.yml`.

## Canonical Commands
- `npm install` first (required before any scripts).
- `npm run dev` starts Astro dev server (default `localhost:4321`).
- `npm run astro -- check` is the closest thing to type/content validation (no dedicated lint/test scripts exist).
- `npm run build` creates production output in `dist/`.
- `npm run preview` serves the built site from `dist/`.

## Deployment Facts (GitHub Pages)
- CI workflow: `.github/workflows/deploy.yml`.
- Deployment triggers on push to `master` (not `main`).
- CI uses Node 22, runs `npm install` then `npm run build`, and uploads `dist/`.
- Domain is configured in two places and must stay in sync:
  - `astro.config.mjs` -> `site: 'https://asfmedia.org'`
  - `public/CNAME` -> `asfmedia.org`

## Code Map
- Routes are file-based under `src/pages/`:
  - `index.astro` -> `/`
  - `marketing-check.astro` -> `/marketing-check`
  - `impressum.astro` -> `/impressum`
  - `datenschutz.astro` -> `/datenschutz`
- Shared shell is `src/layouts/Layout.astro` (global metadata, Google Fonts, `html lang="de"`, global CSS import).
- Shared UI blocks are `src/components/Nav.astro` and `src/components/Footer.astro`.
- Design tokens and base styles live in `src/styles/global.css`; page-level layout styles are mostly inline in each `.astro` file.

## Non-obvious Gotchas
- `src/components/Nav.astro` uses hash anchors (`#projects`, `#streaming`, `#portfolio`, `#about`, `#contact`) globally.
- `src/pages/marketing-check.astro` defines all five target ids, but `src/pages/index.astro` still has no `id="portfolio"` section.
- `impressum.astro` and `datenschutz.astro` also render `Nav`, so hash links there do not target local sections.
- When changing nav anchors, update route sections and anchor ids together to avoid silent broken in-page navigation.
- `dist/` and `.astro/` are generated artifacts; do not hand-edit them.
- Site copy/legal text is German; preserve language and legal-page structure unless the task explicitly changes content strategy.
