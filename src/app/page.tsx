import { HeroSection }             from "@/components/hero/HeroSection";
import { AboutSection }            from "@/components/about/AboutSection";
import { ExperienceSection }       from "@/components/experience/ExperienceSection";
import { TechStackSection }        from "@/components/skills/TechStackSection";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";
import { ContactSection }          from "@/components/contact/ContactSection";
import { createPageMetadata }      from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <FeaturedProjectsSection />
      <ContactSection />
    </>
  );
}
