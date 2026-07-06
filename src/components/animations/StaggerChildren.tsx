"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { EASE, VIEWPORT_MARGIN } from "@/constants/animations";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; initialDelay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren:   custom.initialDelay,
    },
  }),
};

export const staggerItemVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: EASE.smooth },
  },
};

export function StaggerChildren({
  children, staggerDelay = 0.1, initialDelay = 0, className, once = true,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: VIEWPORT_MARGIN }}
      custom={{ staggerDelay, initialDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}
