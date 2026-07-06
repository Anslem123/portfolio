"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { EASE, VIEWPORT_MARGIN } from "@/constants/animations";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const makeVariants = (delay: number, duration: number): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, ease: EASE.smooth },
  },
});

export function FadeIn({ children, delay = 0, duration = 0.6, className, once = true }: FadeInProps) {
  return (
    <motion.div
      variants={makeVariants(delay, duration)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: VIEWPORT_MARGIN }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
