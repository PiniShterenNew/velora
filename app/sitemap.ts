import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/work", priority: 0.9 },
    { path: "/process", priority: 0.8 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
