import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SlideIn, FadeIn } from "@/components/animations";
import {
  GithubIcon, ExternalLinkIcon, ArrowLeftIcon,
  DatabaseIcon, ShieldIcon, CloudIcon, CodeIcon,
} from "@/components/ui/Icon";
import { ProjectImage, Placeholder } from "@/components/projects/ProjectImage";
import { ProjectJsonLd } from "@/components/ui/JsonLd";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";
import type { ProjectStatus } from "@/types/project";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project  = projects.find((p) => p.slug === slug);
  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }
  return createPageMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
    ogType: "article",
  });
}

const STATUS_CONFIG: Record<ProjectStatus, { label: string; variant: "success" | "warning" | "default" }> = {
  live:             { label: "Live",           variant: "success" },
  "in-development": { label: "In Development", variant: "warning" },
  archived:         { label: "Archived",       variant: "default" },
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project  = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const status    = STATUS_CONFIG[project.status];
  const hasDetail = !!(project.problem || project.solution || project.features?.length);

  return (
    <article className="section-padding min-h-screen" aria-labelledby="project-title">
      <ProjectJsonLd project={project} />
      <Container size="md">

        {/* Back */}
        <FadeIn>
          <Link href="/projects">
            <Button variant="ghost" size="sm" icon={<ArrowLeftIcon size={16} />} className="mb-10">
              All Projects
            </Button>
          </Link>
        </FadeIn>

        {/* Hero card */}
        <SlideIn direction="up" className="mb-10">
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 z-10 bg-gradient-to-r from-[#6C63FF] to-[#22D3EE]" />

            {/* Hero image banner */}
            <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-gradient-to-br from-[rgba(108,99,255,0.08)] to-[rgba(34,211,238,0.05)]">
              {project.image
                ? <ProjectImage src={project.image} alt={`Screenshot of ${project.title} - ${project.category}`} sizes="(max-width: 768px) 100vw, 768px" priority />
                : <Placeholder />
              }
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-[var(--bg-surface)]/10 to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <Badge variant={status.variant}>{status.label}</Badge>
                <span className="text-xs font-mono text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">{project.year}</span>
              </div>
            </div>

            <div className="p-8">

            <p className="text-xs font-semibold uppercase tracking-widest text-[#6C63FF] mb-2">
              {project.category}
            </p>
            <h1 id="project-title" className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-3">
              {project.title}
            </h1>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
              {project.fullDescription}
            </p>

            {/* Tech */}
            <TechBadgeList items={project.technologies} size="md" className="mb-6" />

            {/* Tags */}
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-color)]">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-[var(--border-color)]">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm" icon={<ExternalLinkIcon size={14} />} iconPosition="right">
                    Visit Website
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="sm" icon={<GithubIcon size={14} />}>
                    Source Code
                  </Button>
                </a>
              )}
            </div>
            </div>{/* end p-8 */}
          </div>
        </SlideIn>

        {/* Deep-dive detail (only shown for projects with problem/solution/features) */}
        {hasDetail && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {project.problem && (
                <FadeIn delay={0.1}>
                  <InfoCard title="Problem" accent="#F87171">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.problem}</p>
                  </InfoCard>
                </FadeIn>
              )}
              {project.solution && (
                <FadeIn delay={0.15}>
                  <InfoCard title="Solution" accent="#34D399">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.solution}</p>
                  </InfoCard>
                </FadeIn>
              )}
              {project.features && project.features.length > 0 && (
                <FadeIn delay={0.2}>
                  <InfoCard title="Key Features" accent="#6C63FF">
                    <ul className="space-y-2">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="text-[#6C63FF] shrink-0 mt-0.5">→</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </InfoCard>
                </FadeIn>
              )}
              {project.challenges && (
                <FadeIn delay={0.25}>
                  <InfoCard title="Challenges" accent="#FBBF24">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.challenges}</p>
                  </InfoCard>
                </FadeIn>
              )}
            </div>

            {/* Technical details */}
            {(project.architecture || project.database || project.authentication || project.deployment) && (
              <FadeIn delay={0.3}>
                <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
                  <h2 className="font-bold text-[var(--text-primary)] mb-5">Technical Details</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.database && (
                      <TechDetail icon={<DatabaseIcon size={15} />} label="Database" value={project.database} />
                    )}
                    {project.authentication && (
                      <TechDetail icon={<ShieldIcon size={15} />} label="Authentication" value={project.authentication} />
                    )}
                    {project.deployment && (
                      <TechDetail icon={<CloudIcon size={15} />} label="Deployment" value={project.deployment} />
                    )}
                    {project.architecture && (
                      <TechDetail icon={<CodeIcon size={15} />} label="Architecture" value={project.architecture} />
                    )}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Future improvements */}
            {project.futureImprovements && project.futureImprovements.length > 0 && (
              <FadeIn delay={0.35}>
                <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
                  <h2 className="font-bold text-[var(--text-primary)] mb-4">Future Improvements</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.futureImprovements.map((item) => (
                      <Badge key={item} variant="glass">{item}</Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        )}
      </Container>
    </article>
  );
}

function InfoCard({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-4 rounded-full" style={{ backgroundColor: accent }} />
        <h2 className="font-bold text-[var(--text-primary)] text-sm">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function TechDetail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-base)]">
      <span className="text-[#6C63FF] shrink-0 mt-0.5">{icon}</span>
      <div>
        <div className="text-xs text-[var(--text-muted)] font-medium mb-0.5">{label}</div>
        <div className="text-sm text-[var(--text-primary)]">{value}</div>
      </div>
    </div>
  );
}
