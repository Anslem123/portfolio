"use client";

import { motion } from "framer-motion";
import { forwardRef, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE } from "@/constants/animations";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "glass";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  magnetic?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#6C63FF] text-white hover:bg-[#5046E5] shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)]",
  secondary:
    "bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[#6C63FF] hover:text-[#6C63FF]",
  ghost:
    "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]",
  outline:
    "border border-[#6C63FF] text-[#6C63FF] hover:bg-[#6C63FF] hover:text-white",
  glass:
    "glass text-[var(--text-primary)] hover:border-[rgba(108,99,255,0.4)] hover:shadow-[0_0_20px_rgba(108,99,255,0.15)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8  px-4 text-sm  gap-1.5 rounded-[8px]",
  md: "h-11 px-6 text-sm  gap-2   rounded-[10px]",
  lg: "h-13 px-8 text-base gap-2.5 rounded-[12px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, icon, iconPosition = "left",
     loading = false, magnetic = false, className, disabled, ...props }, ref) => {

    const innerRef = useRef<HTMLButtonElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLButtonElement>) ?? innerRef;

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic) return;
      const el = resolvedRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width  / 2) * 0.25;
      const y = (e.clientY - rect.top  - rect.height / 2) * 0.25;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      if (!magnetic) return;
      const el = resolvedRef.current;
      if (el) el.style.transform = "";
    };

    return (
      <motion.button
        ref={innerRef}
        whileTap={{ scale: 0.97 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center font-semibold",
          "transition-all select-none cursor-pointer",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        style={{ transitionDuration: `${EASE.smooth[2] * 1000}ms` }}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading…
          </span>
        ) : (
          <>
            {icon && iconPosition === "left"  && <span className="flex-shrink-0">{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
