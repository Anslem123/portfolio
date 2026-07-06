import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Size = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm:   "max-w-3xl",
  md:   "max-w-5xl",
  lg:   "max-w-6xl",
  xl:   "max-w-7xl",
  full: "max-w-full",
};

export function Container({ children, className, size = "lg" }: ContainerProps) {
  return (
    <div className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
