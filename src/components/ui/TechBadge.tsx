"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/constants/animations";

type TechBadgeSize = "sm" | "md";

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
  size?: TechBadgeSize;
  /** Disable hover motion (e.g. inside another interactive card). */
  interactive?: boolean;
}

const sizeClasses: Record<TechBadgeSize, string> = {
  sm: "px-2.5 py-1 text-[10px] sm:px-3 sm:py-1 sm:text-[11px]",
  md: "px-3 py-1.5 text-[11px] sm:px-3.5 sm:py-1.5 sm:text-xs",
};

export function TechBadge({
  children,
  className,
  size = "sm",
  interactive = true,
}: TechBadgeProps) {
  const classes = cn(
    "inline-flex items-center rounded-full font-medium tracking-wide select-none",
    "text-black dark:text-[#EDEAFF]",
    "bg-gradient-to-br from-[var(--brand-a20)] via-[var(--brand-a12)] to-[var(--accent-a08)]",
    "border border-[var(--brand-a30)]",
    "shadow-[0_0_0_1px_var(--brand-a06),0_2px_8px_var(--brand-a12)]",
    "backdrop-blur-[6px]",
    "transition-[background,border-color,box-shadow,color] duration-200 ease-out",
    "hover:from-[var(--brand-a30)] hover:via-[var(--brand-a20)] hover:to-[var(--accent-a15)]",
    "hover:border-[var(--brand-a45)]",
    "hover:shadow-[0_0_0_1px_var(--brand-a10),0_4px_14px_var(--brand-a25)]",
    "hover:text-black dark:hover:text-white",
    sizeClasses[size],
    className,
  );

  if (!interactive) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <motion.span
      className={classes}
      whileHover={{ y: -1.5, scale: 1.04 }}
      transition={{ duration: 0.2, ease: EASE.smooth }}
    >
      {children}
    </motion.span>
  );
}

interface TechBadgeListProps {
  items: string[];
  size?: TechBadgeSize;
  className?: string;
  /** Limit how many badges to show; remaining become a +N badge. */
  max?: number;
  interactive?: boolean;
}

export function TechBadgeList({
  items,
  size = "sm",
  className,
  max,
  interactive = true,
}: TechBadgeListProps) {
  const visible = max != null ? items.slice(0, max) : items;
  const overflow = max != null ? Math.max(0, items.length - max) : 0;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {visible.map((item) => (
        <TechBadge key={item} size={size} interactive={interactive}>
          {item}
        </TechBadge>
      ))}
      {overflow > 0 && (
        <TechBadge size={size} interactive={interactive} className="opacity-80">
          +{overflow}
        </TechBadge>
      )}
    </div>
  );
}
