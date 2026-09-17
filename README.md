# Portfolio

A personal portfolio site built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Customizing

All your personal content lives in one file: `src/content.js`. Edit the
values there — name, title, bio, skills, projects, and contact links — and
the site updates automatically. You shouldn't need to touch any component
file just to change content.

To add a resume or report PDF, drop it in `public/files/` and reference it
from `src/content.js` with the `asset('/files/your-file.pdf')` helper defined
at the top of that file — it keeps the link working whether the site is
served from `/` or a subpath like `/gatezz/`.

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`, which can be deployed to any static host
(GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and deploys to GitHub Pages automatically on every push to `main`.

One-time setup: in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions**. After that, every push to `main` publishes the latest
build to `https://<username>.github.io/<repo-name>/`.

`vite.config.js` sets `base: '/gatezz/'` to match this repo's name. If you
rename the repo or deploy elsewhere, update that value to match.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint
