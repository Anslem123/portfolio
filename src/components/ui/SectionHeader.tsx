import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations";
import { type ReactNode } from "react";

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Small gradient pill + label - used before section titles */
export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#6C63FF]",
        className
      )}
    >
      <span
        aria-hidden
        className="shrink-0 w-7 h-1 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#22D3EE] shadow-[0_0_10px_rgba(108,99,255,0.35)]"
      />
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleAs?: "h1" | "h2";
}

const alignClasses = {
  left:   "items-start text-left",
  center: "items-center text-center",
  right:  "items-end text-right",
} as const;

export function SectionHeader({
  eyebrow, title, description, align = "center", className, titleAs = "h2",
}: SectionHeaderProps) {
  const TitleTag = titleAs;

  return (
    <div className={cn("flex flex-col gap-4", alignClasses[align], className)}>
      {eyebrow && (
        <FadeIn>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <TitleTag className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
          {title}
        </TitleTag>
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
