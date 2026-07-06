"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { SlideIn, FadeIn } from "@/components/animations";
import { BriefcaseIcon, CalendarIcon, MapPinIcon, ExternalLinkIcon } from "@/components/ui/Icon";
import { FiBook } from "react-icons/fi";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { EASE } from "@/constants/animations";
import type { EmploymentType } from "@/types/experience";

const TYPE_LABELS: Record<EmploymentType, string> = {
  "full-time":  "Full-Time",
  "part-time":  "Part-Time",
  freelance:    "Freelance",
  contract:     "Contract",
  internship:   "Internship",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <Container size="md">
        <SectionHeader
          eyebrow="Experience & Education"
          title={<>Where I&apos;ve <span className="gradient-text">worked & learned</span></>}
          description="My professional journey and academic background that shaped who I am as an engineer."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Work Experience */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-[rgba(108,99,255,0.12)] flex items-center justify-center text-[#6C63FF]">
                  <BriefcaseIcon size={16} />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Work Experience</h3>
              </div>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#6C63FF] via-[rgba(108,99,255,0.3)] to-transparent" />
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <SlideIn key={exp.id} direction="left" delay={i * 0.1}>
                    <div className="relative pl-12">
                      <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-[var(--bg-surface)] border-2 border-[#6C63FF] flex items-center justify-center shadow-[0_0_12px_rgba(108,99,255,0.3)]">
                        <div className="w-2 h-2 rounded-full bg-[#6C63FF]" />
                      </div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2, ease: EASE.smooth }}
                        className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[rgba(108,99,255,0.3)] hover:shadow-[0_4px_24px_rgba(108,99,255,0.08)] transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="font-bold text-[var(--text-primary)] text-base">{exp.role}</h4>
                            <div className="flex items-center gap-1.5 mt-1">
                              {exp.url ? (
                                <a
                                  href={exp.url} target="_blank" rel="noopener noreferrer"
                                  className="text-sm font-medium text-[#6C63FF] hover:underline inline-flex items-center gap-1"
                                >
                                  {exp.company}
                                  <ExternalLinkIcon size={11} />
                                </a>
                              ) : (
                                <span className="text-sm font-medium text-[#6C63FF]">{exp.company}</span>
                              )}
                            </div>
                          </div>
                          <Badge variant="primary" className="shrink-0 text-[10px]">
                            {TYPE_LABELS[exp.type]}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                          <span className="flex items-center gap-1">
                            <CalendarIcon size={11} /> {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPinIcon size={11} /> {exp.location}
                          </span>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                          {exp.description.map((desc, j) => (
                            <li key={j} className="flex gap-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                              <span className="text-[#6C63FF] mt-0.5 shrink-0">→</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-[10px]">{tech}</Badge>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </SlideIn>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-[rgba(34,211,238,0.1)] flex items-center justify-center text-[#22D3EE]">
                  <FiBook size={16} />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Education</h3>
              </div>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#22D3EE] via-[rgba(34,211,238,0.3)] to-transparent" />
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <SlideIn key={edu.id} direction="right" delay={i * 0.1}>
                    <div className="relative pl-12">
                      <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-[var(--bg-surface)] border-2 border-[#22D3EE] flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                        <div className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                      </div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2, ease: EASE.smooth }}
                        className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[rgba(34,211,238,0.25)] hover:shadow-[0_4px_24px_rgba(34,211,238,0.08)] transition-all duration-300"
                      >
                        <h4 className="font-bold text-[var(--text-primary)] text-base mb-1">{edu.degree}</h4>
                        <p className="text-sm font-medium text-[#22D3EE] mb-3">{edu.institution}</p>
                        <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                          <CalendarIcon size={11} /> {edu.duration}
                          {edu.endDate === null && (
                            <Badge variant="accent" className="text-[10px] ml-2">Current</Badge>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </SlideIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
