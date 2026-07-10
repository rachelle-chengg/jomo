// Single source of truth for the site URL + route map.
// Used by app/sitemap.js, app/robots.js, and layout metadata.
// When you ship a new page, flip its `live` flag to true — the sitemap updates itself.

export const SITE_URL = "https://jomo-ecru.vercel.app";

export const ROUTES = [
  { path: "/", changeFrequency: "monthly", priority: 1.0, live: true }, // redirects to /schools for now
  { path: "/schools", changeFrequency: "monthly", priority: 0.9, live: true },
  { path: "/about", changeFrequency: "monthly", priority: 0.7, live: false },
  { path: "/all-programs", changeFrequency: "monthly", priority: 0.8, live: false },
  { path: "/families", changeFrequency: "monthly", priority: 0.8, live: false },
  { path: "/teams", changeFrequency: "monthly", priority: 0.8, live: false },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6, live: false },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5, live: false },
  { path: "/speaking", changeFrequency: "yearly", priority: 0.5, live: false },
];
