import { createPageMetadata } from "@/lib/seo";
import { ProjectsClient } from "./_components/ProjectsClient";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Full stack portfolio projects by Anslem De Souza - React and Next.js web applications, client websites, and Node.js backends built with clean architecture.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}
