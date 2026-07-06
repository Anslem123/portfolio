import type { Metadata } from "next";
import { seo } from "@/data/seo";
import { ProjectsClient } from "./_components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore all projects built by ${seo.author} — full-stack web applications, frontend interfaces, and backend systems.`,
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
