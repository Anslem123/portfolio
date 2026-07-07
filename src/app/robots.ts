import type { MetadataRoute } from "next";
import { seo } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${seo.siteUrl}/sitemap.xml`,
    host:    seo.siteUrl,
  };
}
