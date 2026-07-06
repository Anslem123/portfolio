"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { MapPinIcon, ArrowRightIcon, GithubIcon, LinkedinIcon, SparklesIcon } from "@/components/ui/Icon";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/socials";
import { TYPING_STRINGS, ROUTES } from "@/constants/site";
import { EASE } from "@/constants/animations";

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: EASE.smooth },
  },
};

const github   = socialLinks.find((s) => s.platform === "github");
const linkedin = socialLinks.find((s) => s.platform === "linkedin");

export function HeroSection() {
  const typedText = useTypingEffect(TYPING_STRINGS);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-72px)] flex items-center mesh-gradient overflow-hidden"
    >
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"
      />
      {/* Glow orbs */}
      <div aria-hidden className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#6C63FF] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div aria-hidden className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#22D3EE] opacity-[0.03] blur-[120px] pointer-events-none" />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          {/* Availability pill */}
          <motion.div variants={item} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-medium text-[var(--text-muted)]">
              <MapPinIcon size={13} className="text-[#6C63FF]" />
              {personal.availability} · {personal.location}
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] leading-[1.08] tracking-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personal.preferredName}</span>
            </h1>
          </motion.div>

          {/* Typing effect */}
          <motion.div variants={item} className="h-10 sm:h-12 flex items-center justify-center">
            <span className="text-lg sm:text-2xl font-semibold text-[var(--text-secondary)]">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-[#6C63FF] ml-0.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <Link href={ROUTES.projects}>
              <Button size="lg" variant="primary" magnetic icon={<SparklesIcon size={16} />}>
                View Projects
              </Button>
            </Link>
            <Link href={ROUTES.contact}>
              <Button size="lg" variant="secondary" icon={<ArrowRightIcon size={16} />} iconPosition="right">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          {/* Social quick-links */}
          <motion.div variants={item} className="flex items-center justify-center gap-4 pt-2">
            {github && (
              <a
                href={github.url}
                target="_blank" rel="noopener noreferrer"
                aria-label={github.name}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[#6C63FF] hover:bg-[rgba(108,99,255,0.08)] transition-all duration-200"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank" rel="noopener noreferrer"
                aria-label={linkedin.name}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[#6C63FF] hover:bg-[rgba(108,99,255,0.08)] transition-all duration-200"
              >
                <LinkedinIcon size={16} />
              </a>
            )}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#6C63FF] to-transparent"
        />
      </motion.div>
    </section>
  );
}
