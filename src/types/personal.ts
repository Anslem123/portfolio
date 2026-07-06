export interface PersonalInfo {
  name: string;
  preferredName: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  locationFlag: string;
  availability: string;
  resumePath: string;
}

export interface SEOMetadata {
  siteUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  locale: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Trait {
  iconKey: string;
  title: string;
  description: string;
}
