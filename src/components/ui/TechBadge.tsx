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
    "text-[#E8E6FF] dark:text-[#EDEAFF]",
    "bg-gradient-to-br from-[rgba(108,99,255,0.22)] via-[rgba(80,70,229,0.16)] to-[rgba(34,211,238,0.10)]",
    "border border-[rgba(108,99,255,0.28)]",
    "shadow-[0_0_0_1px_rgba(108,99,255,0.06),0_2px_8px_rgba(108,99,255,0.12)]",
    "backdrop-blur-[6px]",
    "transition-[background,border-color,box-shadow,color] duration-200 ease-out",
    "hover:from-[rgba(108,99,255,0.32)] hover:via-[rgba(80,70,229,0.24)] hover:to-[rgba(34,211,238,0.16)]",
    "hover:border-[rgba(108,99,255,0.45)]",
    "hover:shadow-[0_0_0_1px_rgba(108,99,255,0.1),0_4px_14px_rgba(108,99,255,0.22)]",
    "hover:text-white",
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
