import { SITE_URL } from "@/lib/site";

// Served automatically at /robots.txt. Points crawlers at the sitemap.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
