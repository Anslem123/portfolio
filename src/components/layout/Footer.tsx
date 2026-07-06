import Link from "next/link";
import { ExternalLinkIcon, SOCIAL_ICONS } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/navigation";
import { socialLinks } from "@/data/socials";
import { personal } from "@/data/personal";
import type { ComponentType, SVGAttributes } from "react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface)] mt-auto">
      <Container>
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--text-primary)]">
                {personal.name}<span className="text-[#6C63FF]">.</span>
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              {personal.title} building fast, scalable, and modern web applications.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              {personal.location} {personal.locationFlag}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[#6C63FF] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((social) => {
                const IconComp = SOCIAL_ICONS[social.platform] as ComponentType<SVGAttributes<SVGElement> & { size?: number }> | undefined;
                const isExternal = social.url.startsWith("http");
                return (
                  <li key={social.platform}>
                    <a
                      href={social.url}
                      target={isExternal ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[#6C63FF] transition-colors duration-200 group"
                    >
                      {IconComp && (
                        <IconComp size={14} className="text-[var(--text-muted)] group-hover:text-[#6C63FF] transition-colors" />
                      )}
                      {social.name}
                      {isExternal && (
                        <ExternalLinkIcon size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:underline">
              Next.js
            </a>{" "}
            &amp;{" "}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:underline">
              Tailwind CSS
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
