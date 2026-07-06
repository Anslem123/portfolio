"use client";

import { motion } from "framer-motion";
import {
  FiCode, FiZap, FiLayers, FiTarget, FiTrendingUp,
} from "react-icons/fi";
import { PiBrain } from "react-icons/pi";
import { Container } from "@/components/ui/Container";
import { SlideIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { personal, stats, traits } from "@/data/personal";
import { EASE } from "@/constants/animations";
import type { ComponentType, SVGAttributes } from "react";

type IconProps = SVGAttributes<SVGElement> & { className?: string };

const TRAIT_ICON_MAP: Record<string, ComponentType<IconProps>> = {
  code:     FiCode,
  zap:      FiZap,
  brain:    PiBrain,
  trending: FiTrendingUp,
  layers:   FiLayers,
  target:   FiTarget,
};

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[var(--bg-surface)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Text */}
          <div className="space-y-6">
            <SlideIn direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#6C63FF]">
                <span className="h-px w-6 bg-[#6C63FF]" />
                About Me
              </span>
            </SlideIn>

            <SlideIn direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
                Building software that{" "}
                <span className="gradient-text">matters</span>
              </h2>
            </SlideIn>

            <SlideIn direction="left" delay={0.2}>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                {personal.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </SlideIn>

            {/* Stats */}
            <SlideIn direction="left" delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>

          {/* Right — Trait cards */}
          <StaggerChildren staggerDelay={0.08} initialDelay={0.2} className="grid sm:grid-cols-2 gap-4">
            {traits.map((trait) => {
              const IconComp = TRAIT_ICON_MAP[trait.iconKey];
              return (
                <StaggerItem key={trait.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: EASE.smooth }}
                    className="group p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-base)] hover:border-[rgba(108,99,255,0.3)] hover:bg-[var(--bg-surface)] hover:shadow-[0_8px_32px_rgba(108,99,255,0.1)] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[rgba(108,99,255,0.1)] flex items-center justify-center text-[#6C63FF] mb-3 group-hover:bg-[rgba(108,99,255,0.2)] transition-colors">
                      {IconComp && <IconComp className="w-5 h-5" />}
                    </div>
                    <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-1">
                      {trait.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {trait.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}
