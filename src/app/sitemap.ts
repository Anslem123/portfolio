import type { MetadataRoute } from "next";
import { seo } from "@/data/seo";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = seo.siteUrl;
  const now  = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,          lastModified: now, changeFrequency: "monthly",  priority: 1.0   },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url:             `${base}/projects/${p.slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
