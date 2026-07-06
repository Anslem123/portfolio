import { cn } from "@/lib/utils";

type Variant = "default" | "primary" | "accent" | "success" | "warning" | "outline" | "glass";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  default: "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)]",
  primary: "bg-[rgba(108,99,255,0.12)] text-[#8B84FF] border border-[rgba(108,99,255,0.2)]",
  accent:  "bg-[rgba(34,211,238,0.1)]  text-[#22D3EE] border border-[rgba(34,211,238,0.2)]",
  success: "bg-[rgba(52,211,153,0.1)]  text-[#34D399] border border-[rgba(52,211,153,0.2)]",
  warning: "bg-[rgba(251,191,36,0.1)]  text-[#FBBF24] border border-[rgba(251,191,36,0.2)]",
  outline: "bg-transparent text-[var(--text-secondary)] border border-[var(--border-strong)]",
  glass:   "glass text-[var(--text-secondary)]",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
