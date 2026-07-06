import { HeroSection }             from "@/components/hero/HeroSection";
import { AboutSection }            from "@/components/about/AboutSection";
import { ExperienceSection }       from "@/components/experience/ExperienceSection";
import { TechStackSection }        from "@/components/skills/TechStackSection";
import { SkillsSection }           from "@/components/skills/SkillsSection";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";
import { ContactSection }          from "@/components/contact/ContactSection";
import { PersonJsonLd }            from "@/components/ui/JsonLd";

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      {/* <SkillsSection /> */}
      <FeaturedProjectsSection />
      <ContactSection />
    </>
  );
}
