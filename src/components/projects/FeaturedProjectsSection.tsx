"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  ArrowRightIcon, GithubIcon, ExternalLinkIcon, SparklesIcon,
} from "@/components/ui/Icon";
import { ProjectImage, Placeholder } from "@/components/projects/ProjectImage";
import { featuredProjects } from "@/data/projects";
import { ROUTES } from "@/constants/site";
import { EASE } from "@/constants/animations";
import type { ProjectStatus } from "@/types/project";

const STATUS_CONFIG: Record<ProjectStatus, { label: string; variant: "success" | "warning" | "default" }> = {
  live:             { label: "Live",           variant: "success" },
  "in-development": { label: "In Development", variant: "warning" },
  archived:         { label: "Archived",       variant: "default" },
};

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-[var(--bg-surface)]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Featured Projects"
            title={<>Things I&apos;ve <span className="gradient-text">built</span></>}
            description="Production-ready web applications and client websites - built with React, Next.js, and Node.js, with a focus on performance and clean code."
            align="left"
          />
          <FadeIn delay={0.3}>
            <Link href={ROUTES.projects} className="shrink-0">
              <Button variant="secondary" icon={<ArrowRightIcon size={16} />} iconPosition="right">
                All Projects
              </Button>
            </Link>
          </FadeIn>
        </div>

        {featuredProjects.length > 0 ? (
          <StaggerChildren staggerDelay={0.12} className="grid lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => {
              const status = STATUS_CONFIG[project.status];
              return (
                <StaggerItem key={project.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease: EASE.smooth }}
                    className="group relative flex flex-col h-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-base)] overflow-hidden hover:border-[rgba(108,99,255,0.35)] hover:shadow-[0_12px_48px_rgba(108,99,255,0.12)] transition-all duration-300"
                  >
                    <div className="h-1 w-full bg-gradient-to-r from-[#6C63FF] via-[#8B84FF] to-[#22D3EE] opacity-60 group-hover:opacity-100 transition-opacity" />

                    {/* Thumbnail */}
                    <div className="relative h-52 bg-gradient-to-br from-[rgba(108,99,255,0.08)] to-[rgba(34,211,238,0.05)] overflow-hidden">
                      {project.image
                        ? <ProjectImage src={project.image} alt={`Screenshot of ${project.title} - ${project.category}`} sizes="(max-width: 1024px) 100vw, 50vw" />
                        : <Placeholder />
                      }
                      <div className="absolute top-4 right-4 z-10 flex gap-2">
                        <Badge variant={status.variant} className="text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          {status.label}
                        </Badge>
                      </div>
                    </div>

                    {/* Tint: bleeds from bottom of image into card body */}
                    <div
                      aria-hidden
                      className="absolute left-0 right-0 pointer-events-none z-10"
                      style={{ top: "93px", height: "120px", background: "linear-gradient(to bottom, transparent 0%, var(--bg-base) 100%)", transition: "none" }}
                    />

                    <div className="relative z-20 flex flex-col flex-1 p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-bold text-[var(--text-primary)] text-lg leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-sm text-[#6C63FF] font-medium mt-1">{project.category}</p>
                        </div>
                        <span className="text-xs font-mono text-[var(--text-muted)] shrink-0 mt-1">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-4 line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <TechBadgeList
                        items={project.technologies}
                        size="sm"
                        max={5}
                        className="mb-5"
                      />

                      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                        <Link href={`/projects/${project.slug}`} className="flex-1">
                          <Button variant="primary" size="sm" className="w-full">View Details</Button>
                        </Link>
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`}
                            className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[#6C63FF] transition-all">
                            <GithubIcon size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live website`}
                            className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[#22D3EE] transition-all">
                            <ExternalLinkIcon size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        ) : (
          <FadeIn>
            <div className="py-20 text-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-base)]">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(108,99,255,0.1)] flex items-center justify-center mx-auto mb-4">
                <SparklesIcon size={28} className="text-[#6C63FF]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Projects coming soon</h3>
              <p className="text-sm text-[var(--text-muted)]">Currently building exciting things. Check back soon!</p>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
