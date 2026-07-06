export type SocialPlatform =
  | "github"
  | "linkedin"
  | "instagram"
  | "email";

export interface SocialLink {
  platform: SocialPlatform;
  name: string;
  url: string;
  handle: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
}
