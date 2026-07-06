export type EmploymentType =
  | "full-time"
  | "part-time"
  | "freelance"
  | "contract"
  | "internship";

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | null;
  location: string;
  type: EmploymentType;
  description: string[];
  technologies: string[];
  logo?: string;
  url?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  startDate: string;
  endDate: string | null;
  logo?: string;
  url?: string;
}
