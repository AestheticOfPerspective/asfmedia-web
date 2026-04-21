# AGENTS.md

## Scope & Tech Stack
- Astro 6 static site, file-based routing under `src/pages/`.
- Single-package repo. Use npm only (`package-lock.json` is authoritative).
- Node runtime must satisfy `>=22.12.0` (`package.json` engines).

## Critical Gotchas

| Issue | Impact | Fix |
|-------|--------|-----|
| Domain in **two places** | Deploy breaks if they mismatch | Update both `astro.config.mjs` (`site:`) AND `public/CNAME` together |
| Nav links **duplicated** | Dead links if not synced | Update both `src/components/Nav.astro` AND `src/components/Footer.astro` |
| `dist/` and `.astro/` are **generated** | Never hand-edit | These are rebuild artifacts |

## Required Command Order
1. `npm install` (always first)
2. `npm run astro -- check` (validation)
3. `npm run build` (production)
4. For local preview: `npm run preview`

No test/lint scripts exist — verification is `npm run astro -- check && npm run build`.

## Page Ownership
- **Active (in nav):** `index`, `dev`, `media`, `services`, `contact`, `impressum`, `datenschutz`
- **Archived (not in nav):** `module`, `templates`, `about`, `marketing-check` — legacy ultramind.one collab, leave as-is
- **Shared:** `Layout.astro` (shell), `Nav.astro` + `Footer.astro` (UI), `global.css` (design tokens)

## CI/Deployment
- GitHub Pages: deploys on push to **`master`** (not `main`)
- CI flow: Node 22 → `npm install` → `npm run build` → upload `dist/`
- DNS: Alfahosting CNAME `web` → `[username].github.io`

## Content Rules
- Site copy is **German** — preserve language and legal structure
- Contact form → `formsubmit.co` with `_captcha` disabled (spam risk, intentional)
- Legal data: Alexander Solod, Nürnberger Land, Bayern — don't change

## Reference
- `CLAUDE.md` in this repo provides additional architecture context — read it first for detailed tech stack info.