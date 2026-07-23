import type { PersonalInfo, Stat, Trait } from "@/types/personal";

export const personal: PersonalInfo = {
  name:          "Anslem De Souza",
  preferredName: "Anslem",
  title:         "Full Stack Web Developer",
  tagline:
    "I build scalable web applications with React, Next.js, and TypeScript - focused on clean architecture, maintainable code, and great user experiences.",
  bio: [
    "I'm a Full Stack Web Developer based in Goa, India, passionate about building web applications that are fast, reliable, and easy to maintain. I care about getting the architecture right from the start - not just making things work, but making them straightforward to extend and reason about.",
    "At IIT Bombay, I build and maintain full-stack internal tools and dashboards used across the institute - from PostgreSQL schema design and REST APIs to interactive D3.js visualisations and responsive React interfaces. At Stellaris Labs, I design and deliver production websites and web applications for clients across hospitality, healthcare, finance, fitness, and real estate.",
    "My stack centres on React, Next.js, TypeScript, and Node.js, with experience across both frontend and backend - from UI components and data visualisation to database design and API development. I enjoy learning modern tools and writing clean, reusable code.",
    "I'm available for remote opportunities worldwide and freelance projects. Whether you need a React developer, a Next.js specialist, or someone who can own the full stack, I'd love to hear about what you're building.",
  ],
  location:     "Goa, India",
  locationFlag: "🇮🇳",
  availability: "Open to Remote & Freelance",
  resumePath:   "/resume/Anslem_DeSouza_Full_Stack_Developer_Resume.pdf",
};

export const stats: Stat[] = [
  { value: "2+",  label: "Years Experience"  },
  { value: "15+", label: "Projects Delivered" },
  { value: "2",   label: "Companies"          },
  { value: "2",   label: "Active Roles"       },
];

export const traits: Trait[] = [
  {
    iconKey:     "code",
    title:       "Clean Code",
    description: "Readable, maintainable code that's easy to build on - a foundation for long-lived web applications.",
  },
  {
    iconKey:     "layers",
    title:       "Full Stack",
    description: "Comfortable across the stack: database design, REST APIs, data visualisation, and React frontends.",
  },
  {
    iconKey:     "zap",
    title:       "Performance Focused",
    description: "Optimising for speed, reliability, and a smooth user experience at every layer of the application.",
  },
  {
    iconKey:     "brain",
    title:       "Problem Solver",
    description: "Breaking down complex requirements into pragmatic, well-structured software solutions.",
  },
  {
    iconKey:     "trending",
    title:       "Always Learning",
    description: "Staying current with modern frameworks, patterns, and best practices in web development.",
  },
  {
    iconKey:     "target",
    title:       "Delivery Oriented",
    description: "Shipping production-ready products for real users - on time, with quality and care.",
  },
];
