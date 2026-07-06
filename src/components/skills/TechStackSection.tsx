"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations";
import { techStack } from "@/data/techStack";
import { EASE } from "@/constants/animations";

export function TechStackSection() {
  const allItems = techStack.flatMap((cat) => cat.items);

  return (
    <section id="tech-stack" className="section-padding bg-[var(--bg-surface)]">
      <Container>
        <SectionHeader
          eyebrow="Tech Stack"
          title={<>Tools I <span className="gradient-text">build with</span></>}
          description="A curated set of technologies I use to build fast, reliable, and maintainable software."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, ci) => (
            <FadeIn key={category.category} delay={ci * 0.1}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 rounded-full bg-gradient-to-b from-[#6C63FF] to-[#22D3EE]" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((tech, ti) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + ti * 0.06, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-3 p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-base)] hover:border-[rgba(108,99,255,0.3)] hover:bg-[var(--bg-surface)] hover:shadow-[0_4px_16px_rgba(108,99,255,0.08)] transition-all duration-200 cursor-default"
                    >
                      <div
                        className="w-2 h-2 rounded-full shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: tech.color ?? "#6C63FF" }}
                      />
                      <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Marquee */}
        <FadeIn delay={0.4}>
          <div className="mt-16 relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-base)] py-5">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-8 whitespace-nowrap w-max"
            >
              {[...Array(2)].flatMap((_, di) =>
                allItems.map((tech) => (
                  <span
                    key={`${di}-${tech.name}`}
                    className="text-sm font-medium text-[var(--text-muted)] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color ?? "#6C63FF" }} />
                    {tech.name}
                  </span>
                ))
              )}
            </motion.div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
