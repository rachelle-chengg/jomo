# JOMO — Portfolio Rebuild

A hand-coded rebuild of the [Experience JOMO](https://www.experiencejomo.com/schools) Schools page,
originally designed and built by Little Byte Designs in Squarespace and rebuilt here in Next.js as a
technical portfolio study.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** (scroll reveals, animated stat counters, accordions)
- Deployed on **Vercel**

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000 — it redirects to `/schools`.

## Project structure
```
app/
  layout.jsx        Fonts, metadata, global shell
  page.jsx          Redirects to /schools
  schools/page.jsx  The flagship page
  sitemap.js        Auto-generates /sitemap.xml
  robots.js         Auto-generates /robots.txt
  globals.css       Tailwind + design tokens
components/         Nav, Footer, Accordion, StatCounter, Reveal
lib/content.js      All copy + image URLs (edit content here, not in layout)
lib/site.js         Site URL + route map (drives the sitemap)
```

## Notes
- Images currently load from the live Squarespace CDN so the site previews instantly.
  Replace with local files in `/public` once original assets are available.
- Brand colors live in `tailwind.config.js` (`clay`, `sage`, `cream`, etc.) — tune to exact hex codes.
- Update `SITE_URL` in `lib/site.js` when a custom domain is attached.
