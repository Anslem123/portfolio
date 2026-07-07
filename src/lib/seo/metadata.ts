import type { Metadata } from "next";
import { seo } from "@/data/seo";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? seo.siteUrl : `${seo.siteUrl}${normalized}`;
}

interface PageMetadataOptions {
  /** Page title without the site suffix (uses root title template). Omit for home default. */
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
}

/** Builds consistent page metadata with canonical URLs, Open Graph, and Twitter cards. */
export function createPageMetadata({
  title,
  description = seo.description,
  path = "/",
  ogImage = seo.ogImage,
  ogType = "website",
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = title ? `${title} | ${seo.author}` : seo.defaultTitle;

  return {
    ...(title ? { title } : {}),
    description,
    keywords: seo.keywords,
    authors: [{ name: seo.author, url: seo.siteUrl }],
    creator: seo.author,
    publisher: seo.publisher,
    category: seo.category,
    applicationName: seo.applicationName,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      locale: seo.locale,
      url,
      siteName: seo.siteName,
      title: ogTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
      creator: seo.twitterHandle,
      site: seo.twitterHandle,
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}
