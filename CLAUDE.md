# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Authoritative References
- `AGENTS.md` in this repo is the source of truth for technical constraints — **read it first**. The notes below complement, not replace, it.
- `README.md` is the unmodified Astro starter template; ignore it.
- Config truth: `package.json`, `astro.config.mjs`, `.github/workflows/deploy.yml`.

## Commands
- `npm install` — required before anything else.
- `npm run dev` — dev server at `localhost:4321`.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` locally.
- `npm run astro -- check` — type/content validation (no lint/test scripts exist).

## Architecture
- Astro 6 static site, file-based routing under `src/pages/`.
- **Active pages (in nav):** `index`, `dev`, `media`, `services`, `contact`, `impressum`, `datenschutz`.
- **Archived pages (not in nav, still accessible):** `module`, `templates`, `about`, `marketing-check` — legacy ultramind.one collab content, leave as-is.
- Shared shell: `src/layouts/Layout.astro` (site name = `ASFMedia`, dark theme-color, fonts, `lang="de"`).
- Shared UI: `src/components/Nav.astro` (links: Start/Dev/Media/Services/Kontakt, CTA = "Hire Me"), `src/components/Footer.astro`.
- Design tokens: `src/styles/global.css` — Cyberpunk Dharma dark theme. Key vars: `--void` (bg), `--cyan` (accent), `--amber` (secondary), `--ink` (text). Page-level styles are inline per `.astro` file.

## Deployment
- GitHub Pages via `.github/workflows/deploy.yml`. Triggers on push to **`master`** (not `main`). Node 22 → `npm install` → `npm run build` → uploads `dist/`.
- Custom domain `web.asfmedia.org` configured in **two** places that must match: `astro.config.mjs` (`site:`) and `public/CNAME`.
- DNS on Alfahosting: CNAME record `web` → `[github-username].github.io` for the subdomain.

## Content
- Site is for **ASFMedia / Fossnomade** — Creative Director, Illustrator, Developer, Commentary Guy.
- Contact form uses formsubmit.co → `hello@asfmedia.org`. First submit triggers activation email to that address.
- Legal pages (impressum, datenschutz): real data — Alexander Solod, Nürnberger Land, Bayern.
- Site copy is German; preserve language and legal structure unless explicitly asked to change.
