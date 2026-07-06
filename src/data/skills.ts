import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    iconKey:  "monitor",
    skills: [
      { name: "React.js",      level: "expert"       },
      { name: "Next.js",       level: "expert"       },
      { name: "TypeScript",    level: "advanced"     },
      { name: "Tailwind CSS",  level: "expert"       },
      { name: "Framer Motion", level: "advanced"     },
      { name: "HTML5 / CSS3",  level: "expert"       },
    ],
  },
  {
    category: "Backend",
    iconKey:  "server",
    skills: [
      { name: "Node.js",    level: "expert"       },
      { name: "Express.js", level: "expert"       },
      { name: "REST APIs",  level: "expert"       },
      { name: "GraphQL",    level: "intermediate" },
      { name: "WebSockets", level: "intermediate" },
    ],
  },
  {
    category: "Databases",
    iconKey:  "database",
    skills: [
      { name: "PostgreSQL", level: "advanced"     },
      { name: "MySQL",      level: "advanced"     },
      { name: "MongoDB",    level: "intermediate" },
      { name: "Redis",      level: "intermediate" },
      { name: "Prisma ORM", level: "advanced"     },
    ],
  },
  {
    category: "Cloud & DevOps",
    iconKey:  "cloud",
    skills: [
      { name: "Vercel",      level: "advanced"     },
      { name: "Docker",      level: "intermediate" },
      { name: "AWS (basics)",level: "learning"     },
      { name: "CI/CD",       level: "intermediate" },
      { name: "Git / GitHub",level: "expert"       },
    ],
  },
  {
    category: "Languages",
    iconKey:  "code",
    skills: [
      { name: "JavaScript", level: "expert"       },
      { name: "TypeScript", level: "advanced"     },
      { name: "Python",     level: "intermediate" },
      { name: "SQL",        level: "advanced"     },
      { name: "Bash",       level: "intermediate" },
    ],
  },
  {
    category: "Tools & Design",
    iconKey:  "tool",
    skills: [
      { name: "Figma",          level: "intermediate" },
      { name: "VS Code",        level: "expert"       },
      { name: "Postman",        level: "expert"       },
      { name: "GitHub Actions", level: "intermediate" },
      { name: "Linux",          level: "intermediate" },
    ],
  },
];
