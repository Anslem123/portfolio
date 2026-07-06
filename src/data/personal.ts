import type { PersonalInfo, Stat, Trait } from "@/types/personal";

export const personal: PersonalInfo = {
  name:          "Anslem De Souza",
  preferredName: "Anslem",
  title:         "Full Stack Web Developer",
  tagline:       "Building fast, scalable, and modern web applications with clean architecture and exceptional user experiences.",
  bio: [
    "I'm a Full Stack Web Developer who enjoys building scalable, maintainable and high-performance web applications. I care about getting the architecture right from the start — not just making things work, but making them easy to understand, extend and rely on.",
    "At IIT Bombay, I build and maintain full-stack internal tools and dashboards used across the institute — working across the entire stack, from database schema design and REST APIs to interactive D3.js visualisations and responsive React UIs. At Stellaris Labs, I design and deliver production websites and web applications for clients across hospitality, healthcare, finance, fitness and real estate.",
    "I enjoy learning modern technologies, sharpening my engineering skills and writing clean, reusable code. I value good software architecture, thoughtful user experience and continuous improvement — both in the software I write and in myself as an engineer.",
    "My goal is to become an exceptional software engineer by constantly learning new tools, frameworks and best practices, and by building software that solves real-world problems with clarity and purpose.",
    "I'm open to remote opportunities and roles based in Goa or anywhere in India.",
  ],
  location:     "Goa, India",
  locationFlag: "🇮🇳",
  availability: "Open to Remote · Goa · India",
  resumePath:   "/resume.pdf",
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
    description: "Writing readable, maintainable code that's easy to build on and reason about.",
  },
  {
    iconKey:     "layers",
    title:       "Full Stack",
    description: "Comfortable across the entire stack — schema design, APIs, data visualisation, and UI.",
  },
  {
    iconKey:     "zap",
    title:       "Performance Focused",
    description: "Optimising for speed, reliability and a smooth user experience at every layer.",
  },
  {
    iconKey:     "brain",
    title:       "Problem Solver",
    description: "Breaking down complex requirements into pragmatic, well-structured solutions.",
  },
  {
    iconKey:     "trending",
    title:       "Always Learning",
    description: "Keeping up with modern tools, patterns and best practices to write better software.",
  },
  {
    iconKey:     "target",
    title:       "Delivery Oriented",
    description: "Shipping real products for real users — on time, with quality, and with care.",
  },
];
