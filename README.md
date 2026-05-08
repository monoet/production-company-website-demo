# Northline Pictures — Demo Website

A polished demo website for a Los Angeles-based film, commercial, and production studio. Built as a starting point for client revamps — cinematic, editorial, and easy to customize.

---

## Stack

- **Vite** + **React** + **TypeScript**
- Plain CSS (no framework, no giant animation libraries)
- Remote images only (Unsplash) — no local assets committed

---

## Getting started

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build → dist/
```

---

## Editing content

All editable content lives in a single data file:

```
src/data/studio.ts
```

Open it and replace:

- **Company info** — name, email, city, tagline
- **Navigation** — labels and anchor links
- **Hero** — headline, body, CTAs, background image
- **Services** — title and description for each card
- **Projects** — title, category, year, roles, description, image URLs
- **About** — heading, copy, stats, location note
- **Process** — step numbers, titles, descriptions
- **Testimonials** — quote text, author, company
- **Contact CTA** — heading, body, mailto link
- **Footer** — description, service list, contact, disclaimer

Images reference Unsplash URLs. Replace the URLs with your client's hosting URLs before launch.

---

## Site structure

```
src/
├── App.tsx
├── main.tsx
├── data/
│   └── studio.ts         ← all editable content
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── FeaturedReel.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── ContactCTA.tsx
│   └── Footer.tsx
└── styles/
    ├── globals.css       ← design tokens, reset, base typography
    └── components.css    ← all component styles
```

---

## What this is NOT

This demo does not include:

- Backend / CMS / database
- Authentication / admin panels
- Payment system or booking engine
- Video hosting infrastructure
- Image asset files committed to the repo

---

## Image policy

All images are remote Unsplash URLs. To use your own assets:

1. Host images externally (your client's CDN, Cloudinary, etc.)
2. Update `image.url` fields in `src/data/studio.ts`

Do NOT commit local image files to this repo.

---

## Responsive breakpoints

The site is tested at:

- **1440px** — full layout
- **1024px** — tablets, compact desktop
- **768px** — small tablets, mobile landscape
- **480px** — mobile portrait

---

## Demo disclaimer

This is a **demo concept website**. Replace all content, contact info, project data, and imagery before using for a real client or launching publicly.