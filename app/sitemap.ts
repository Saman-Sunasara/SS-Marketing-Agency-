import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = ["", "/services", "/case-studies", "/pricing", "/about", "/contact", "/brand-guidelines"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
