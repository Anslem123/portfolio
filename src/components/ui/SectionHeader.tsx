import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations";
import { type ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const alignClasses = {
  left:   "items-start text-left",
  center: "items-center text-center",
  right:  "items-end text-right",
} as const;

export function SectionHeader({
  eyebrow, title, description, align = "center", className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4", alignClasses[align], className)}>
      {eyebrow && (
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#6C63FF]">
            <span className="h-px w-6 bg-[#6C63FF]" />
            {eyebrow}
            <span className="h-px w-6 bg-[#6C63FF]" />
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
