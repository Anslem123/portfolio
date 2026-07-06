"use client";

import { motion } from "framer-motion";
import {
  FiMonitor, FiServer, FiDatabase, FiCloud, FiCode, FiSettings,
} from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations";
import { skillCategories } from "@/data/skills";
import type { SkillLevel } from "@/types/skill";
import type { ComponentType, SVGAttributes } from "react";

type IconProps = SVGAttributes<SVGElement> & { className?: string; size?: number };

const ICON_MAP: Record<string, ComponentType<IconProps>> = {
  monitor:  FiMonitor,
  server:   FiServer,
  database: FiDatabase,
  cloud:    FiCloud,
  code:     FiCode,
  tool:     FiSettings,
};

const LEVEL_CONFIG: Record<SkillLevel, { label: string; color: string; width: string; dots: number }> = {
  expert:       { label: "Expert",       color: "#6C63FF", width: "100%", dots: 4 },
  advanced:     { label: "Advanced",     color: "#22D3EE", width: "80%",  dots: 3 },
  intermediate: { label: "Intermediate", color: "#FBBF24", width: "60%",  dots: 2 },
  learning:     { label: "Learning",     color: "#34D399", width: "35%",  dots: 1 },
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title={<>What I <span className="gradient-text">know</span></>}
          description="A comprehensive overview of my technical capabilities across the full stack."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, ci) => {
            const IconComp = ICON_MAP[category.iconKey];
            return (
              <FadeIn key={category.category} delay={ci * 0.07}>
                <div className="h-full p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[rgba(108,99,255,0.25)] hover:shadow-[0_4px_32px_rgba(108,99,255,0.07)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    {IconComp && (
                      <div className="w-8 h-8 rounded-lg bg-[rgba(108,99,255,0.1)] flex items-center justify-center text-[#6C63FF]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    )}
                    <h3 className="font-bold text-[var(--text-primary)] text-sm">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, si) => {
                      const cfg = LEVEL_CONFIG[skill.level];
                      return (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-medium text-[var(--text-secondary)]">
                              {skill.name}
                            </span>
                            <div className="flex gap-1">
                              {Array.from({ length: 4 }).map((_, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: ci * 0.07 + si * 0.05 + idx * 0.04, duration: 0.2 }}
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: idx < cfg.dots ? cfg.color : "var(--border-strong)" }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="h-1 rounded-full bg-[var(--bg-elevated)] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: cfg.width }}
                              viewport={{ once: true }}
                              transition={{ delay: ci * 0.07 + si * 0.05, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: cfg.color }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Legend */}
        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {(Object.entries(LEVEL_CONFIG) as [SkillLevel, typeof LEVEL_CONFIG[SkillLevel]][]).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <span key={idx} className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: idx < cfg.dots ? cfg.color : "var(--border-strong)" }} />
                  ))}
                </div>
                <span className="text-xs text-[var(--text-muted)]">{cfg.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
