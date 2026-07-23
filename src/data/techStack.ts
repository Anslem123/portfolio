import type { TechCategory } from "@/types/skill";

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React",        color: "#61DAFB" },
      { name: "Next.js",      color: "#FFFFFF" },
      { name: "TypeScript",   color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Framer Motion",color: "#FF0055" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js",    color: "#339933" },
      { name: "Express.js", color: "#FFFFFF" },
      { name: "REST API",   color: undefined },
      // { name: "GraphQL",    color: "#E10098" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MySQL",      color: "#4479A1" },
      // { name: "MongoDB",    color: "#47A248" },
      // { name: "Prisma",     color: "#2D3748" },
      // { name: "Redis",      color: "#DC382D" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      // { name: "Docker",  color: "#2496ED" },
      { name: "Vercel",  color: "#FFFFFF" },
      { name: "Git",     color: "#F05032" },
      { name: "GitHub",  color: "#FFFFFF" },
      // { name: "CI/CD",   color: "#6C63FF" },
    ],
  },
];
