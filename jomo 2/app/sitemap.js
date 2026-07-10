import { SITE_URL, ROUTES } from "@/lib/site";

// Next.js serves this automatically at /sitemap.xml — no build config needed.
// Only routes flagged `live` are included, so search engines never see a 404.
export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.filter((r) => r.live).map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
