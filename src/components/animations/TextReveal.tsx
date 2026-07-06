"use client";

import { motion, type Variants } from "framer-motion";
import { EASE, VIEWPORT_MARGIN } from "@/constants/animations";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.03, delayChildren: delay },
  }),
};

const wordVariants: Variants = {
  hidden:  { opacity: 0, y: "120%", rotateX: -20 },
  visible: {
    opacity: 1, y: "0%", rotateX: 0,
    transition: { duration: 0.5, ease: EASE.smooth },
  },
};

export function TextReveal({ text, className, delay = 0, once = true }: TextRevealProps) {
  const words = text.split(" ");
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: VIEWPORT_MARGIN }}
      custom={delay}
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className ?? ""}`}
      style={{ overflow: "hidden" }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
