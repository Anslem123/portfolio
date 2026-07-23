import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id:        "iit-bombay",
    company:   "Indian Institute of Technology Bombay",
    role:      "Full Stack Web Developer",
    duration:  "November 2024 - Present",
    startDate: "2024-11",
    endDate:   null,
    location:  "Hybrid · Mumbai, Maharashtra",
    type:      "full-time",
    description: [
      "Design, develop and maintain scalable full-stack web applications and internal dashboards used across the institute.",
      "Built a complete dashboard from the ground up (end-to-end, from database schema design to responsive UI), delivering a production-ready internal tool.",
      "Develop interactive data visualisations using D3.js, including dynamic charts and polygon-based map overlays for geospatial data representation.",
      "Build and consume REST APIs with JWT-based authentication, writing optimised SQL queries and designing efficient API endpoints for dashboard data.",
      "Work with relational databases (PostgreSQL, MySQL) with a focus on schema design, query performance and data integrity.",
      "Implement real-time application features and carry out performance optimisation, debugging and systematic testing.",
      "Contribute Python-based data processing pipelines (including web scraping, data cleaning, transformation and Pandas-based dataset preparation) to feed application workflows.",
      "Maintain and evolve existing applications by introducing new features while upholding clean, maintainable code standards and modern Git-based workflows.",
    ],
    technologies: [
      "React", "JavaScript", "TypeScript", "Node.js", "Express.js",
      "REST APIs", "JWT", "D3.js", "Mantine UI", "Tailwind CSS",
      "PostgreSQL", "MySQL", "Python", "Pandas", "Git",
    ],
    url: "https://www.iitb.ac.in",
  },
  {
    id:        "stellaris-labs",
    company:   "Stellaris Labs",
    role:      "Freelance Full Stack Web Developer",
    duration:  "November 2025 - Present",
    startDate: "2025-11",
    endDate:   null,
    location:  "Remote · Goa",
    type:      "freelance",
    description: [
      "Build and deliver production-ready websites and web applications for clients across multiple industries, including hospitality, healthcare, retail, finance and real estate.",
      "Architect scalable frontend applications using Next.js and TypeScript, with a strong emphasis on component reusability, performance and maintainability.",
      "Implement full authentication flows using Supabase Auth and integrate Supabase as the backend database layer.",
      "Develop consistent, accessible UI using HeroUI and Tailwind CSS, building reusable component libraries that accelerate delivery across client projects.",
      "Manage multiple client projects simultaneously while maintaining high code quality, meeting deadlines and iterating based on feedback.",
      "Delivered client projects include Daikin Dealer Goa, Bonds Beach Cafe, Mama Cecelia's Beach Cafe, and a suite of Stellaris Labs demo templates across the cafe, dental, beauty, gym, finance and real estate verticals.",
    ],
    technologies: [
      "Next.js", "React", "TypeScript", "HeroUI", "Tailwind CSS",
      "React Icons", "Supabase", "Supabase Auth", "Git",
    ],
    url: "https://stellarislabs.com",
  },
];
