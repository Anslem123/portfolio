export type ProjectFilterCategory =
  | "all"
  | "full-stack"
  | "frontend"
  | "website"
  | "next.js"
  | "react";

export type ProjectStatus = "live" | "in-development" | "archived";

export type ProjectDisplayCategory =
  | "Full Stack Application"
  | "Business Website"
  | "Restaurant & Cafe"
  | "Landing Page"
  | "Healthcare"
  | "Beauty & Wellness"
  | "Fitness"
  | "Finance"
  | "Real Estate"
  | "Demo Website"
  | string;

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectDisplayCategory;
  filterCategories: ProjectFilterCategory[];
  technologies: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  year: number;
  image: string;
  gallery?: string[];
  // Optional deep-dive fields (used on detail page)
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string;
  architecture?: string;
  database?: string;
  authentication?: string;
  deployment?: string;
  futureImprovements?: string[];
}

export interface ProjectFilter {
  label: string;
  value: ProjectFilterCategory;
}
