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

To add a resume PDF, drop it in `public/` (e.g. `public/resume.pdf`) and set
`resumeUrl: '/resume.pdf'` in `src/content.js`.

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`, which can be deployed to any static host
(GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint
