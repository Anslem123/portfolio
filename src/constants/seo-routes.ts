/** Static routes included in sitemap.xml. Extend when adding blog, articles, or case studies. */
export const STATIC_SITEMAP_ROUTES = [
  { path: "/",          priority: 1.0,  changeFrequency: "monthly" as const },
  { path: "/projects",  priority: 0.9,  changeFrequency: "weekly"  as const },
] as const;

/** Reserved for dynamic content routes (blog posts, case studies, etc.). */
export const CONTENT_SITEMAP_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}> = [];
