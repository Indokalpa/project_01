# EmergeX Media — React conversion

A faithful React port of `EmergeX Final.html`. Pure frontend — no backend
or database, because nothing in the original site persists or fetches data
(see the root-level conversion notes for the full analysis).

## Structure

```
client/
├── src/
│   ├── assets/
│   │   ├── fonts/Inter.ttf        # extracted from the original's base64 @font-face
│   │   └── images/*.jpg           # extracted from the original's base64 data URIs
│   ├── components/                # one component per page section
│   ├── data/content.js            # all copy/content, as plain data (not hardcoded JSX)
│   ├── hooks/
│   │   ├── useReveal.js           # scroll-in-view fade/slide (replaces the global .rv IntersectionObserver)
│   │   ├── useCountUp.js          # animated stat counters (replaces the [data-to] IntersectionObserver)
│   │   └── useScrollProgress.js   # top progress bar + nav "stuck" state (replaces the scroll listener)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # original stylesheet, unchanged except font @font-face src
└── index.html
```

## Setup

```bash
cd client
npm install
```

## Run (development)

```bash
npm run dev
```

Opens at http://localhost:5173 by default.

## Build for production

```bash
npm run build   # outputs to client/dist
npm run preview # serve the production build locally to sanity-check it
```

## Deploying

`client/dist` after `npm run build` is a static site — deploy it anywhere
that serves static files (Netlify, Vercel, S3+CloudFront, GitHub Pages,
nginx, etc.). No server process, environment variables, or database are
required.
