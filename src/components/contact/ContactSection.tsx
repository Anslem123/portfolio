"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SlideIn } from "@/components/animations";
import { MapPinIcon, SendIcon, SOCIAL_ICONS } from "@/components/ui/Icon";
import { FiCopy, FiCheck } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { contact, socialLinks } from "@/data/socials";
import type { ComponentType, SVGAttributes } from "react";

type IconProps = SVGAttributes<SVGElement> & { size?: number; className?: string };

const CONTACT_METHODS = [
  {
    iconKey:  "email" as const,
    label:    "Email",
    getValue: () => contact.email,
    getHref:  () => `mailto:${contact.email}`,
    color:    "#6C63FF",
  },
  {
    iconKey:  "location" as const,
    label:    "Location",
    getValue: () => contact.location,
    getHref:  () => null,
    color:    "#22D3EE",
  },
] as const;

const CONTACT_ICONS: Record<string, ComponentType<IconProps>> = {
  email:    FaEnvelope,
  location: MapPinIcon,
};

interface SocialCardProps {
  name:       string;
  handle:     string;
  url:        string;
  copyValue:  string;
  icon:       React.ReactNode;
}

function SocialCard({ name, handle, url, copyValue, icon }: SocialCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  }, [copyValue]);

  const isExternal = url.startsWith("http");

  return (
    <motion.a
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={`${name}: ${handle}`}
      whileHover="hovered"
      initial="idle"
      className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-base)] hover:border-[rgba(108,99,255,0.35)] hover:bg-[rgba(108,99,255,0.04)] transition-all duration-200 relative overflow-hidden"
    >
      {/* Icon */}
      <span className="w-8 h-8 rounded-lg bg-[rgba(108,99,255,0.08)] flex items-center justify-center text-[#6C63FF] shrink-0">
        {icon}
      </span>

      {/* Name + handle */}
      <div className="flex-1 min-w-0">
        <div className="text-xs font-semibold text-[var(--text-muted)] leading-none mb-1">{name}</div>
        <motion.div
          variants={{ idle: { opacity: 1 }, hovered: { opacity: 1 } }}
          className="text-sm font-medium text-[var(--text-primary)] truncate"
        >
          {handle}
        </motion.div>
      </div>

      {/* Copy button — slides in on hover */}
      <motion.button
        onClick={handleCopy}
        aria-label={`Copy ${name}`}
        variants={{
          idle:    { opacity: 0, scale: 0.8 },
          hovered: { opacity: 1, scale: 1   },
        }}
        transition={{ duration: 0.15 }}
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[#6C63FF] hover:border-[rgba(108,99,255,0.4)] transition-colors duration-150"
      >
        {copied
          ? <FiCheck size={13} className="text-[#34D399]" />
          : <FiCopy  size={13} />
        }
      </motion.button>
    </motion.a>
  );
}

export function ContactSection() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-[var(--bg-surface)]">
      <Container size="md">
        <SectionHeader
          eyebrow="Get In Touch"
          title={<>Let&apos;s work <span className="gradient-text">together</span></>}
          description="Whether you have a project in mind, a role to fill, or just want to connect — I'd love to hear from you."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="space-y-8">
            <SlideIn direction="left">
              <div className="space-y-4">
                {CONTACT_METHODS.map((method) => {
                  const IconComp = CONTACT_ICONS[method.iconKey] as ComponentType<IconProps>;
                  const href = method.getHref();
                  return (
                    <motion.div
                      key={method.label}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-base)] hover:border-[rgba(108,99,255,0.3)] hover:shadow-[0_4px_24px_rgba(108,99,255,0.07)] transition-all duration-200"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${method.color}18`, color: method.color }}
                      >
                        <IconComp size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider mb-0.5">
                          {method.label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-[var(--text-primary)] hover:text-[#6C63FF] transition-colors"
                          >
                            {method.getValue()}
                          </a>
                        ) : (
                          <span className="text-sm font-semibold text-[var(--text-primary)]">
                            {method.getValue()}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </SlideIn>

            <SlideIn direction="left" delay={0.15}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                  Find me on
                </p>
                <div className="flex flex-col gap-2">
                  {socialLinks.map((social) => {
                    const IconComp = SOCIAL_ICONS[social.platform] as ComponentType<IconProps> | undefined;
                    const copyValue = social.platform === "email"
                      ? social.handle
                      : social.url;
                    return (
                      <SocialCard
                        key={social.platform}
                        name={social.name}
                        handle={social.handle}
                        url={social.url}
                        copyValue={copyValue}
                        icon={IconComp ? <IconComp size={16} /> : null}
                      />
                    );
                  })}
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Form */}
          <SlideIn direction="right">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-base)]"
            >
              {[
                { id: "name",    label: "Name",    type: "text",  placeholder: "Your name",           value: form.name    },
                { id: "email",   label: "Email",   type: "email", placeholder: "your@email.com",       value: form.email   },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={`contact-${field.id}`} className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    {field.label}
                  </label>
                  <input
                    id={`contact-${field.id}`}
                    type={field.type}
                    required
                    value={field.value}
                    onChange={(e) => setForm((s) => ({ ...s, [field.id]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity…"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] transition-all duration-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="md"
                className="w-full"
                loading={status === "loading"}
                icon={<SendIcon size={16} />}
                iconPosition="right"
              >
                {status === "success" ? "Message sent!" : "Send Message"}
              </Button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-[#34D399]"
                >
                  Thanks! I&apos;ll get back to you soon.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-[#F87171]"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </form>
          </SlideIn>
        </div>
      </Container>
    </section>
  );
}
