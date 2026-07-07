import type { MetadataRoute } from "next";
import { seo } from "@/data/seo";
import { projects } from "@/data/projects";
import { STATIC_SITEMAP_ROUTES } from "@/constants/seo-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = STATIC_SITEMAP_ROUTES.map((route) => ({
    url:             `${seo.siteUrl}${route.path}`,
    lastModified:    now,
    changeFrequency: route.changeFrequency,
    priority:        route.priority,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url:             `${seo.siteUrl}/projects/${p.slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.7,
  }));

  // Future: append blog posts, case studies, and article routes here.
  return [...staticRoutes, ...projectRoutes];
}
