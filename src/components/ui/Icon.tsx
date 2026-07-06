/**
 * Centralized icon resolver using react-icons.
 * Keeps all icon imports in one place for easy swapping.
 */
import {
  FaGithub, FaLinkedin, FaInstagram, FaDiscord,
  FaWhatsapp, FaEnvelope, FaDownload,
} from "react-icons/fa";
import {
  FiCode, FiZap, FiLayers, FiTarget, FiTrendingUp,
  FiBriefcase, FiMapPin, FiCalendar, FiExternalLink,
  FiSearch, FiX, FiMenu, FiSun, FiMoon, FiSend,
  FiPhone, FiMessageSquare, FiHome, FiFolder,
  FiUser, FiArrowLeft, FiArrowRight, FiFilter,
  FiDatabase, FiMonitor, FiServer, FiCloud, FiSettings,
  FiShield,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { PiBrain }    from "react-icons/pi";
import { SiTypescript, SiNextdotjs, SiReact, SiNodedotjs,
  SiPostgresql, SiTailwindcss, SiPrisma, SiRedis,
  SiMysql, SiMongodb, SiDocker, SiVercel,
  SiExpress, SiGraphql, SiGit, SiPython, SiFigma,
  SiGithubactions } from "react-icons/si";
import type { ComponentType, SVGAttributes } from "react";

type IconProps = SVGAttributes<SVGElement> & { size?: number | string };
type IconComponent = ComponentType<IconProps>;

// ─── Social / contact icons ───────────────────────────────────────────────────
export const SOCIAL_ICONS: Record<string, IconComponent> = {
  github:    FaGithub,
  linkedin:  FaLinkedin,
  instagram: FaInstagram,
  discord:   FaDiscord,
  whatsapp:  FaWhatsapp,
  email:     FaEnvelope,
  mail:      FaEnvelope,
};

// ─── Trait / about icons ──────────────────────────────────────────────────────
export const TRAIT_ICONS: Record<string, IconComponent> = {
  code:     FiCode,
  zap:      FiZap,
  brain:    PiBrain,
  trending: FiTrendingUp,
  layers:   FiLayers,
  target:   FiTarget,
};

// ─── Skill category icons ─────────────────────────────────────────────────────
export const SKILL_ICONS: Record<string, IconComponent> = {
  monitor:  FiMonitor,
  server:   FiServer,
  database: FiDatabase,
  cloud:    FiCloud,
  code:     FiCode,
  tool:     FiSettings,
};

// ─── Tech stack (brand) icons ─────────────────────────────────────────────────
export const TECH_ICONS: Record<string, IconComponent> = {
  "React":         SiReact,
  "Next.js":       SiNextdotjs,
  "TypeScript":    SiTypescript,
  "Tailwind CSS":  SiTailwindcss,
  "Node.js":       SiNodedotjs,
  "Express.js":    SiExpress,
  "GraphQL":       SiGraphql,
  "PostgreSQL":    SiPostgresql,
  "MySQL":         SiMysql,
  "MongoDB":       SiMongodb,
  "Prisma":        SiPrisma,
  "Redis":         SiRedis,
  "Docker":        SiDocker,
  "Vercel":        SiVercel,
  "Git":           SiGit,
  "Python":        SiPython,
  "Figma":         SiFigma,
  "GitHub Actions":SiGithubactions,
};

// ─── Navigation / UI icons ───────────────────────────────────────────────────
export {
  FaDownload    as DownloadIcon,
  FiSearch      as SearchIcon,
  FiX           as CloseIcon,
  FiMenu        as MenuIcon,
  FiSun         as SunIcon,
  FiMoon        as MoonIcon,
  FiSend        as SendIcon,
  FiPhone       as PhoneIcon,
  FiMessageSquare as MessageIcon,
  FiMapPin      as MapPinIcon,
  FiCalendar    as CalendarIcon,
  FiExternalLink as ExternalLinkIcon,
  FiHome        as HomeIcon,
  FiFolder      as FolderIcon,
  FiUser        as UserIcon,
  FiBriefcase   as BriefcaseIcon,
  FiArrowLeft   as ArrowLeftIcon,
  FiArrowRight  as ArrowRightIcon,
  FiFilter      as FilterIcon,
  FiDatabase    as DatabaseIcon,
  FiShield      as ShieldIcon,
  FiCloud       as CloudIcon,
  FiCode        as CodeIcon,
  HiSparkles    as SparklesIcon,
  FaGithub      as GithubIcon,
  FaLinkedin    as LinkedinIcon,
};
