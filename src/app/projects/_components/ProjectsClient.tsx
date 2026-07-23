"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  SearchIcon, GithubIcon, ExternalLinkIcon, CodeIcon, SparklesIcon,
} from "@/components/ui/Icon";
import { ProjectImage, Placeholder } from "@/components/projects/ProjectImage";
import { projects, projectFilters } from "@/data/projects";
import { EASE } from "@/constants/animations";
import type { ProjectFilterCategory, ProjectStatus } from "@/types/project";

const STATUS_CONFIG: Record<ProjectStatus, { label: string; variant: "success" | "warning" | "default" }> = {
  live:             { label: "Live",           variant: "success" },
  "in-development": { label: "In Development", variant: "warning" },
  archived:         { label: "Archived",       variant: "default" },
};

export function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter =
        activeFilter === "all" ||
        p.filterCategories.includes(activeFilter);
      const q = query.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, query]);

  return (
    <div className="section-padding min-h-screen">
      <Container>

        {/* Header */}
        <div className="mb-12">
          <SectionHeader
            eyebrow="Portfolio"
            title={<>All <span className="gradient-text">Projects</span></>}
            description="Client websites, demo templates, and full-stack applications - React, Next.js, and Node.js projects built with performance, design quality, and maintainable code."
            titleAs="h1"
          />
        </div>

        {/* Search + Filter */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="search"
                placeholder="Search by name, tech, or tag…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] transition-all"
              />
            </div>
            <span className="hidden sm:flex items-center text-xs text-[var(--text-muted)] shrink-0">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {projectFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-[#6C63FF] text-white border-[#6C63FF] shadow-[0_0_15px_rgba(108,99,255,0.3)]"
                    : "bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-color)] hover:border-[#6C63FF] hover:text-[var(--text-primary)]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        {filtered.length > 0 ? (
          <StaggerChildren staggerDelay={0.06} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const status = STATUS_CONFIG[project.status];
              return (
                <StaggerItem key={project.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2, ease: EASE.smooth }}
                    className="group relative flex flex-col h-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden hover:border-[rgba(108,99,255,0.3)] hover:shadow-[0_8px_40px_rgba(108,99,255,0.1)] transition-all duration-300"
                  >
                    {/* Top accent line */}
                    <div className="h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Thumbnail */}
                    <div className="relative h-44 bg-gradient-to-br from-[rgba(108,99,255,0.06)] to-[rgba(34,211,238,0.04)] overflow-hidden">
                      {project.image
                        ? <ProjectImage src={project.image} alt={`Screenshot of ${project.title} - ${project.category}`} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                        : <Placeholder />
                      }
                      <div className="absolute top-3 right-3 z-10">
                        <Badge variant={status.variant} className="text-[10px]">{status.label}</Badge>
                      </div>
                    </div>

                    {/* Tint: bleeds from bottom of image into card body, z between image and content */}
                    <div
                      aria-hidden
                      className="absolute left-0 right-0 pointer-events-none z-10"
                      style={{ top: "77px", height: "104px", background: "linear-gradient(to bottom, transparent 0%, var(--bg-surface) 100%)", transition: "none" }}
                    />

                    <div className="relative z-20 flex flex-col flex-1 p-5">
                      {/* Title + category */}
                      <div className="mb-2.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6C63FF] mb-1 block">
                          {project.category}
                        </span>
                        <h2 className="font-bold text-[var(--text-primary)] text-base leading-snug">
                          {project.title}
                        </h2>
                      </div>

                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1 mb-3 line-clamp-2">
                        {project.shortDescription}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-color)]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <TechBadgeList
                        items={project.technologies}
                        size="sm"
                        max={4}
                        className="mb-4"
                      />

                      {/* Actions */}
                      <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-color)]">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button
                              variant="primary"
                              size="sm"
                              className="w-full"
                              icon={<ExternalLinkIcon size={13} />}
                              iconPosition="right"
                            >
                              Visit Website
                            </Button>
                          </a>
                        ) : (
                          <Link href={`/projects/${project.slug}`} className="flex-1">
                            <Button variant="primary" size="sm" className="w-full">Details</Button>
                          </Link>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[#6C63FF] transition-all"
                            aria-label="GitHub"
                          >
                            <GithubIcon size={14} />
                          </a>
                        )}
                        {/* Detail link for full-stack projects */}
                        {project.problem && (
                          <Link
                            href={`/projects/${project.slug}`}
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[#6C63FF] transition-all"
                            aria-label="View details"
                          >
                            <CodeIcon size={14} />
                          </Link>
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
            <div className="py-24 text-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(108,99,255,0.08)] flex items-center justify-center mx-auto mb-4">
                <SparklesIcon size={28} className="text-[#6C63FF]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-2">No projects found</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6">Try adjusting your search or filter.</p>
              <Button variant="secondary" onClick={() => { setQuery(""); setActiveFilter("all"); }}>
                Clear filters
              </Button>
            </div>
          </FadeIn>
        )}
      </Container>
    </div>
  );
}
