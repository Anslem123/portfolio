import type { Project, ProjectFilter } from "@/types/project";

const WEBSITE_STACK = ["Next.js", "React", "TypeScript", "Tailwind CSS", "HeroUI", "React Icons"];

export const projects: Project[] = [

  // ─── Client & demo websites ───────────────────────────────────────────────

  {
    id:               "daikin-dealer-goa",
    slug:             "daikin-dealer-goa",
    title:            "Daikin Dealer Goa",
    shortDescription: "Authorized Daikin dealer website for air conditioning sales and service in Goa.",
    fullDescription:
      "A professional business website built for an authorized Daikin air conditioning dealer based in Goa. The site presents the full product catalogue, service offerings, and contact information in a clean, trust-building layout designed to drive enquiries and sales.",
    category:          "Business Website",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Client", "Business", "AC", "Dealer", "Goa"],
    liveUrl:           "https://daikindealergoa.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/daikin-dealer-goa/hero.webp",
  },

  {
    id:               "bonds-beach-cafe",
    slug:             "bonds-beach-cafe",
    title:            "Bonds Beach Cafe",
    shortDescription: "Beachside cafe website showcasing the menu, ambience, and location of Bonds Beach Cafe.",
    fullDescription:
      "A vibrant, responsive website for Bonds Beach Cafe, a beachside dining destination. The site highlights the menu, gallery, opening hours, and contact details in a warm, inviting design that reflects the relaxed coastal atmosphere of the venue.",
    category:          "Restaurant & Cafe",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Client", "Restaurant", "Cafe", "Beach", "Goa"],
    liveUrl:           "https://bondsbeachcafe.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/bonds-beach-cafe/hero.webp",
  },

  {
    id:               "mama-cecelias-beach-cafe",
    slug:             "mama-cecelias-beach-cafe",
    title:            "Mama Cecelia's Beach Cafe",
    shortDescription: "A warm and inviting website for Mama Cecelia's, a beloved beachside cafe in Goa.",
    fullDescription:
      "A charming restaurant website for Mama Cecelia's Beach Cafe that captures the homely, relaxed vibe of this popular Goa dining spot. Features a full menu display, photo gallery, and directions to help visitors plan their visit.",
    category:          "Restaurant & Cafe",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Client", "Restaurant", "Cafe", "Beach", "Goa"],
    liveUrl:           "https://mamaceceliasbeachcafe.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/mama-cecelias-beach-cafe/hero.webp",
  },

  {
    id:               "stellaris-cafe",
    slug:             "stellaris-cafe",
    title:            "Stellaris Cafe",
    shortDescription: "A modern demo website for a cafe business, built to showcase Stellaris Labs' web design capabilities.",
    fullDescription:
      "A polished demo website template designed for cafe and coffee shop businesses. Built under Stellaris Labs, this demo showcases a full-featured restaurant site including menu sections, a gallery, reservation prompt, and contact details, all styled with a premium, modern aesthetic.",
    category:          "Demo Website",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Restaurant", "Cafe", "Stellaris Labs"],
    liveUrl:           "https://cafe.stellarislabs.com",
    featured:          true,
    status:            "live",
    year:              2025,
    image:             "/projects/stellaris-cafe/hero.webp",
  },

  {
    id:               "stellaris-dental",
    slug:             "stellaris-dental",
    title:            "Stellaris Dental",
    shortDescription: "A professional demo website template for dental clinics, built by Stellaris Labs.",
    fullDescription:
      "A clean, trust-focused demo website for dental clinic businesses. Includes a services overview, doctor profiles, appointment booking prompt, and patient testimonial sections, designed to build credibility and convert visitors into patients.",
    category:          "Healthcare",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Healthcare", "Dental", "Stellaris Labs"],
    liveUrl:           "https://dental.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/stellaris-dental/hero.webp",
  },

  {
    id:               "stellaris-beauty-salon",
    slug:             "stellaris-beauty-salon",
    title:            "Stellaris Beauty Salon",
    shortDescription: "An elegant demo website template for beauty salons and spas, crafted by Stellaris Labs.",
    fullDescription:
      "A sophisticated, visually rich demo website for beauty salons and wellness spas. Highlights service offerings, a pricing menu, gallery, and booking prompt, all wrapped in a premium aesthetic that reflects the luxury of the beauty industry.",
    category:          "Beauty & Wellness",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Beauty", "Salon", "Wellness", "Stellaris Labs"],
    liveUrl:           "https://beauty-salon.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/stellaris-beauty-salon/hero.webp",
  },

  {
    id:               "stellaris-gym",
    slug:             "stellaris-gym",
    title:            "Stellaris Gym",
    shortDescription: "A high-energy demo website template for gyms and fitness centres, built by Stellaris Labs.",
    fullDescription:
      "A bold, motivating demo website for gyms and fitness businesses. Features membership plan cards, a class schedule section, trainer profiles, and a strong call-to-action, designed to inspire visitors and drive sign-ups.",
    category:          "Fitness",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Gym", "Fitness", "Health", "Stellaris Labs"],
    liveUrl:           "https://gym.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/stellaris-gym/hero.webp",
  },

  {
    id:               "stellaris-investment",
    slug:             "stellaris-investment",
    title:            "Stellaris Investment",
    shortDescription: "A professional demo website template for investment advisory and wealth management firms.",
    fullDescription:
      "A polished, trust-instilling demo website for investment and wealth management businesses. Presents services, market insights, team credentials, and contact details in a layout that conveys professionalism and financial authority.",
    category:          "Finance",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Finance", "Investment", "Wealth", "Stellaris Labs"],
    liveUrl:           "https://investment.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/stellaris-investment/hero.webp",
  },

  {
    id:               "stellaris-insurance",
    slug:             "stellaris-insurance",
    title:            "Stellaris Insurance",
    shortDescription: "A clear and credible demo website template for insurance providers and brokers.",
    fullDescription:
      "A reassuring, well-structured demo website for insurance companies and brokers. Showcases plan types, coverage highlights, a FAQ section, and lead capture form, designed to build trust and make complex products easy to understand.",
    category:          "Finance",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Finance", "Insurance", "Stellaris Labs"],
    liveUrl:           "https://insurance.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/stellaris-insurance/hero.webp",
  },

  {
    id:               "stellaris-real-estate",
    slug:             "stellaris-real-estate",
    title:            "Stellaris Real Estate",
    shortDescription: "A sleek demo website template for real estate agencies and property listing businesses.",
    fullDescription:
      "A modern, visual-first demo website for real estate agencies. Includes a property listing grid, agent profiles, neighbourhood highlights, and a contact form, styled to appeal to both buyers and sellers looking for a trustworthy agency.",
    category:          "Real Estate",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Real Estate", "Property", "Stellaris Labs"],
    liveUrl:           "https://real-estate.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/stellaris-real-estate/hero.webp",
  },

  {
    id:               "st-cups-cafe",
    slug:             "st-cups-cafe",
    title:            "ST Cups Cafe",
    shortDescription: "A stylish demo cafe website built to showcase specialty coffee and light bites.",
    fullDescription:
      "A clean, minimal demo website for a specialty coffee cafe. Features a curated menu display, story section, and contact details, crafted to appeal to coffee lovers and highlight the quality and personality of the cafe brand.",
    category:          "Restaurant & Cafe",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Cafe", "Coffee", "Stellaris Labs"],
    liveUrl:           "https://st-cups.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/st-cups-cafe/hero.webp",
  },

  {
    id:               "lorenzos-cafe",
    slug:             "lorenzos-cafe",
    title:            "Lorenzo's Cafe",
    shortDescription: "A warm Italian-inspired demo restaurant website with menu and ambience showcasing.",
    fullDescription:
      "An inviting demo website for an Italian-inspired cafe and restaurant. Showcases the menu with rich food imagery, the story behind the brand, and reservation details, styled to evoke warmth, authenticity, and a love of good food.",
    category:          "Restaurant & Cafe",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Restaurant", "Italian", "Cafe", "Stellaris Labs"],
    liveUrl:           "https://lorenzos-cafe.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/lorenzos-cafe/hero.webp",
  },

  {
    id:               "chris-diner",
    slug:             "chris-diner",
    title:            "Chris Diner",
    shortDescription: "A classic American-style diner demo website with a bold menu and venue showcase.",
    fullDescription:
      "A vibrant, appetite-inspiring demo website for a classic diner. Features a visually engaging menu, opening hours, location map, and a casual brand tone, designed to attract walk-ins and build a loyal local following.",
    category:          "Restaurant & Cafe",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Diner", "Restaurant", "American", "Stellaris Labs"],
    liveUrl:           "https://chris-diner.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/chris-diner/hero.webp",
  },

  {
    id:               "thai-time",
    slug:             "thai-time",
    title:            "Thai Time",
    shortDescription: "An aromatic Thai restaurant demo website featuring authentic cuisine and a rich visual identity.",
    fullDescription:
      "A vibrant demo website for a Thai restaurant business. The site presents a curated menu of authentic Thai dishes, a gallery of dishes and interiors, and contact details, all brought to life in a colour palette and layout that reflects Thai culinary culture.",
    category:          "Restaurant & Cafe",
    filterCategories:  ["website", "frontend", "next.js", "react"],
    technologies:      WEBSITE_STACK,
    tags:              ["Demo", "Restaurant", "Thai", "Cuisine", "Stellaris Labs"],
    liveUrl:           "https://thai-time.stellarislabs.com",
    featured:          false,
    status:            "live",
    year:              2025,
    image:             "/projects/thai-time/hero.webp",
  },

  // ─── Full-stack applications ───────────────────────────────────────────────

  {
    id:               "oracle-qr",
    slug:             "oracle-qr-platform",
    title:            "Oracle: QR Management Platform",
    shortDescription: "Full-stack SaaS platform for dynamic and static QR code generation, management, and analytics.",
    fullDescription:
      "Oracle is a production-grade QR code management platform built for Stellaris Labs clients. It supports dynamic and static QR codes across multiple content types: URLs, plain text, email addresses, phone numbers, SMS, and GPS locations. A real-time dashboard provides campaign management and scan analytics, giving businesses full visibility and control over their QR code strategy.",
    category:          "Full Stack Application",
    filterCategories:  ["full-stack", "next.js", "react"],
    technologies:      ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Prisma", "Redis"],
    tags:              ["SaaS", "QR Codes", "Analytics", "Dashboard", "Stellaris Labs"],
    featured:          true,
    status:            "in-development",
    year:              2025,
    image:             "/projects/oracle-qr/hero.webp",
    problem:
      "Businesses needed a scalable, customisable way to manage QR code campaigns without relying on third-party tools that lacked analytics and branding control.",
    solution:
      "A purpose-built SaaS platform giving businesses full control over their QR campaigns with real-time analytics, dynamic redirect management, and a clean admin dashboard.",
    features: [
      "Dynamic and static QR code generation",
      "Support for URL, Text, Email, Phone, SMS, and Location types",
      "Real-time scan analytics and campaign tracking",
      "Custom branding and styling for generated codes",
      "Bulk QR code generation",
      "Role-based access control",
      "REST API for third-party integrations",
    ],
    challenges:
      "Designing a flexible schema that supports multiple QR content types while keeping API boundaries clean, and ensuring low-latency redirects for dynamic codes at scale.",
    architecture:  "Monorepo: Next.js App Router frontend with dedicated API routes, PostgreSQL via Prisma ORM",
    database:      "PostgreSQL with Prisma ORM",
    authentication: "JWT-based auth with refresh token rotation",
    deployment:    "Vercel (frontend) · Railway (database)",
    futureImprovements: [
      "AI-generated QR code designs",
      "White-label support for agencies",
      "Advanced funnel analytics",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectFilters: ProjectFilter[] = [
  { label: "All",           value: "all"        },
  { label: "Full Stack",    value: "full-stack"  },
  { label: "Frontend",      value: "frontend"    },
  { label: "Websites",      value: "website"     },
  { label: "Next.js",       value: "next.js"     },
  { label: "React",         value: "react"       },
];
