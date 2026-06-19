# AGENTS.md

## Source of Truth
- Trust `package.json`, `astro.config.mjs`, `public/CNAME`, `.github/workflows/deploy.yml`, `tsconfig.json`, and the actual `.astro` files over `README.md`.
- `README.md` is the Astro starter template; ignore it.

## Commands
- Node must be `>=22.12.0`.
- Run `npm install` before validation.
- Run `npm run astro -- check` for type/content checks.
- Run `npm run build` as the CI gate.
- Use `npm run dev` for local work and `npm run preview` to verify the built site.
- There is no lint or test script.

## Structure
- Astro 6 static site with file-based routing in `src/pages/`.
- Shared shell lives in `src/layouts/Layout.astro`, `src/components/Nav.astro`, `src/components/Footer.astro`, and `src/styles/global.css`.
- `src/pages/about.astro`, `module.astro`, `templates.astro`, and `marketing-check.astro` still route but are legacy and unlinked.
- Most page styling is inline in `.astro` files; there is no CMS or content-collection layer.

## Gotchas
- `astro.config.mjs` and `public/CNAME` must both stay on `web.asfmedia.org`.
- GitHub Pages deploys from `master` only: `npm install` -> `npm run build` -> publish `dist/`.
- Nav links are duplicated in `Nav.astro` and `Footer.astro`; the mobile menu behavior is the inline script in `Nav.astro`.
- The contact form posts to `formsubmit.co` and `_next` must point back to `https://web.asfmedia.org/contact?sent=1`.
- Site copy is German, and the legal pages contain real identity/contact data; preserve their structure unless asked to change it.
