import type { NavItem, CommandItem } from "@/types/navigation";
import { ROUTES } from "@/constants/site";

export const navItems: NavItem[] = [
  { label: "Home",     href: ROUTES.home     },
  { label: "Projects", href: ROUTES.projects },
];

export const commandItems: CommandItem[] = [
  { id: "home",       label: "Home",               group: "navigation", href: ROUTES.home       },
  { id: "projects",   label: "Projects",            group: "navigation", href: ROUTES.projects   },
  { id: "about",      label: "About Me",            group: "navigation", href: ROUTES.about      },
  { id: "experience", label: "Experience",          group: "navigation", href: ROUTES.experience },
  { id: "contact",    label: "Contact",             group: "navigation", href: ROUTES.contact    },
  { id: "theme",      label: "Toggle Theme",        group: "actions",    action: "toggleTheme"   },
  { id: "resume",     label: "Download Resume",     group: "actions",    href: ROUTES.resume     },
  { id: "github",     label: "GitHub",              group: "social",     href: "https://github.com/Anslem123"                                    },
  { id: "linkedin",   label: "LinkedIn",            group: "social",     href: "https://www.linkedin.com/in/anslem-de-souza-77985922a/"          },
  { id: "email",      label: "Send Email",          group: "social",     href: "mailto:anslemdesouza@gmail.com"                                  },
];
