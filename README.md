# ASFMedia Web

Portfolio and landing page for [asfmedia.org](https://asfmedia.org), built with [Astro](https://astro.build/).

The site presents Alexander Solod's work as a digital creator, developer, and streamer, including AI persona projects, self-hosted infrastructure, streaming content, and legal pages for the German market.

## Tech stack

- Astro 6
- TypeScript
- Static site generation
- GitHub Pages deployment

## Getting started

Requirements:

- Node.js 22.12.0 or newer

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Preview the generated build locally:

```sh
npm run preview
```

## Project structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Nav.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── datenschutz.astro
│   │   ├── impressum.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Available pages

- `/` – portfolio landing page
- `/impressum` – legal notice
- `/datenschutz` – privacy policy

## Deployment

The repository includes a GitHub Actions workflow that installs dependencies, runs `npm run build`, and deploys the generated `dist/` directory to GitHub Pages on pushes to `master`.
