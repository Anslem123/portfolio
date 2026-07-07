import { seo, seoKnowsAbout } from "@/data/seo";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/socials";
import { experiences } from "@/data/experience";
import type { Project } from "@/types/project";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Combined JSON-LD graphs for Person, Occupation, WebSite, and Organization. */
export function StructuredData() {
  const profileLinks = socialLinks
    .filter((s) => s.platform !== "email")
    .map((s) => s.url);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${seo.siteUrl}/#person`,
    name: personal.name,
    givenName: "Anslem",
    familyName: "De Souza",
    url: seo.siteUrl,
    image: `${seo.siteUrl}/opengraph-image`,
    jobTitle: personal.title,
    description: personal.tagline,
    email: "mailto:anslemdesouza@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goa",
      addressRegion: "Goa",
      addressCountry: "IN",
    },
    nationality: {
      "@type": "Country",
      name: "India",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Web Developer",
      description:
        "Designing and building scalable web applications with React, Next.js, TypeScript, and Node.js.",
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
      skills: seoKnowsAbout.join(", "),
    },
    worksFor: experiences
      .filter((e) => e.url)
      .map((e) => ({
        "@type": "Organization",
        name: e.company,
        url: e.url,
      })),
    sameAs: profileLinks,
    knowsAbout: [...seoKnowsAbout],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seo.siteUrl}/#website`,
    name: seo.siteName,
    alternateName: seo.applicationName,
    url: seo.siteUrl,
    description: seo.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${seo.siteUrl}/#person` },
    author: { "@id": `${seo.siteUrl}/#person` },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${seo.siteUrl}/#organization`,
    name: personal.name,
    url: seo.siteUrl,
    description:
      "Freelance full stack web development services — React, Next.js, TypeScript, and Node.js applications for clients worldwide.",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Goa" },
    ],
    founder: { "@id": `${seo.siteUrl}/#person` },
    sameAs: profileLinks,
    knowsAbout: [...seoKnowsAbout],
  };

  return (
    <>
      <JsonLdScript data={person} />
      <JsonLdScript data={website} />
      <JsonLdScript data={organization} />
    </>
  );
}

/** @deprecated Use StructuredData instead. Kept for backwards compatibility. */
export function PersonJsonLd() {
  return <StructuredData />;
}

export function ProjectJsonLd({ project }: { project: Pick<Project, "title" | "slug" | "shortDescription" | "year" | "technologies" | "liveUrl" | "githubUrl" | "image"> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.shortDescription,
    url: `${seo.siteUrl}/projects/${project.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    datePublished: String(project.year),
    author: { "@id": `${seo.siteUrl}/#person` },
    keywords: project.technologies.join(", "),
    ...(project.image ? { image: `${seo.siteUrl}${project.image}` } : {}),
    ...(project.liveUrl ? { sameAs: [project.liveUrl, ...(project.githubUrl ? [project.githubUrl] : [])] } : project.githubUrl ? { sameAs: [project.githubUrl] } : {}),
  };

  return <JsonLdScript data={data} />;
}
