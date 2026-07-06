import { seo } from "@/data/seo";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/socials";
import { experiences } from "@/data/experience";

export function PersonJsonLd() {
  const data = {
    "@context":  "https://schema.org",
    "@type":     "Person",
    name:        personal.name,
    url:         seo.siteUrl,
    jobTitle:    personal.title,
    description: personal.tagline,
    address: {
      "@type":          "PostalAddress",
      addressLocality:  "Goa",
      addressCountry:   "IN",
    },
    worksFor: experiences
      .filter((e) => e.url)
      .map((e) => ({ "@type": "Organization", name: e.company, url: e.url })),
    sameAs: socialLinks
      .filter((s) => s.platform !== "email")
      .map((s) => s.url),
    knowsAbout: ["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Full Stack Development"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
