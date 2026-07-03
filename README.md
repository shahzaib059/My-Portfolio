# Muhammad Shahzaib Khan — Portfolio

A premium, fully responsive personal portfolio built with **Next.js (latest), React 19, TypeScript, Tailwind CSS and Framer Motion**.

Signature: an animated automation **node-graph** in the hero with live data pulses — built to match an automation / AI-workflow brand. Warm gold + coral gradient with an emerald accent, dark mode by default with a light toggle.

## Tech stack

- Next.js 16 (App Router) — latest patched release
- React 19 + TypeScript
- Tailwind CSS (design tokens via CSS variables)
- Framer Motion (reveals, hero entrance, carousel, modal)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build && npm start   # production build
```

## Customize your content

All content lives in typed files under `src/data/` — edit these, no component changes needed:

| File | What it controls |
|------|------------------|
| `site.ts` | Name, roles, intro, contact, socials, stats, marquee |
| `skills.ts` | Skill categories + levels |
| `services.ts` | Service cards |
| `projects.ts` | Projects + filter categories |
| `experience.ts` | Career timeline |
| `testimonials.ts` | Client reviews |
| `certs.ts` | Certifications |

### Images
Placeholders use `placehold.co`. Replace with your own:
- Put your photo in `/public` and swap the `<img>` in `src/components/Hero.tsx` (ideally `next/image`).
- Project / testimonial images: update the data or point them at files in `/public`.

### Colors / fonts
Design tokens are CSS variables at the top of `src/app/globals.css` (`--gold`, `--coral`, `--emerald`, `--grad`, …). Fonts are set in `src/app/layout.tsx`.

### Contact form
The form in `src/components/Contact.tsx` currently simulates submission. Wire the `submit` handler to your backend, an email API (e.g. Resend), or a GoHighLevel / n8n webhook.

## Deploy to Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/ashar-portfolio.git
   git push -u origin main
   ```
2. Import the repo at https://vercel.com/new — framework auto-detects as Next.js. Deploy.
3. Update `site.url` in `src/data/site.ts` to your final domain (used for SEO, sitemap, robots).
