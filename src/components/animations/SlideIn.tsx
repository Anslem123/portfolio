"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { EASE, VIEWPORT_MARGIN } from "@/constants/animations";

type Direction = "left" | "right" | "up" | "down";

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

function getOffset(dir: Direction, dist: number) {
  const map: Record<Direction, { x: number; y: number }> = {
    left:  { x: -dist, y: 0    },
    right: { x: dist,  y: 0    },
    up:    { x: 0,     y: -dist },
    down:  { x: 0,     y: dist  },
  };
  return map[dir];
}

export function SlideIn({
  children, direction = "up", delay = 0, duration = 0.6,
  distance = 40, className, once = true,
}: SlideInProps) {
  const offset = getOffset(direction, distance);

  const variants: Variants = {
    hidden:  { opacity: 0, ...offset },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: { delay, duration, ease: EASE.smooth },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: VIEWPORT_MARGIN }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
