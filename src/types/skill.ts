export type SkillLevel = "expert" | "advanced" | "intermediate" | "learning";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  iconKey: string;
  skills: Skill[];
}

export interface TechItem {
  name: string;
  color?: string;
  url?: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}
