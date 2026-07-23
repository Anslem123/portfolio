"use client";

import { useEffect, useState, useCallback, type ReactNode } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import {
  SearchIcon, HomeIcon, FolderIcon, UserIcon, BriefcaseIcon,
  SunIcon, MoonIcon, DownloadIcon, ExternalLinkIcon,
  GithubIcon, LinkedinIcon,
} from "@/components/ui/Icon";
import { FaEnvelope } from "react-icons/fa";
import { commandItems } from "@/data/navigation";
import { ROUTES } from "@/constants/site";
import type { CommandItem } from "@/types/navigation";

const GROUP_ICON_MAP: Record<string, ReactNode> = {
  home:       <HomeIcon size={14} />,
  projects:   <FolderIcon size={14} />,
  about:      <UserIcon size={14} />,
  experience: <BriefcaseIcon size={14} />,
  contact:    <FaEnvelope size={14} />,
  github:     <GithubIcon size={14} />,
  linkedin:   <LinkedinIcon size={14} />,
  email:      <FaEnvelope size={14} />,
  resume:     <DownloadIcon size={14} />,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const handleSelect = (item: CommandItem) => {
    setOpen(false);
    if (item.action === "toggleTheme") {
      setTheme(theme === "dark" ? "light" : "dark");
      return;
    }
    if (!item.href) return;
    if (item.href.startsWith("http") || item.href.startsWith("mailto")) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  };

  const groups = ["navigation", "actions", "social"] as const;

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="dialog"
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
              className="fixed left-1/2 top-[20vh] z-50 w-full max-w-lg -translate-x-1/2"
            >
              <Command
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden"
                loop
              >
                <div className="flex items-center gap-3 px-4 border-b border-[var(--border-color)]">
                  <SearchIcon size={16} className="text-[var(--text-muted)] shrink-0" />
                  <Command.Input
                    placeholder="Type a command or search…"
                    className="h-14 w-full bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm outline-none"
                  />
                  <kbd className="text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border-color)] rounded px-1.5 py-0.5 shrink-0">
                    ESC
                  </kbd>
                </div>

                <Command.List className="max-h-80 overflow-y-auto py-2 px-2">
                  <Command.Empty className="py-8 text-center text-sm text-[var(--text-muted)]">
                    No results found.
                  </Command.Empty>

                  {groups.map((group) => {
                    const items = commandItems.filter((i) => i.group === group);
                    if (!items.length) return null;
                    return (
                      <Command.Group
                        key={group}
                        heading={group.charAt(0).toUpperCase() + group.slice(1)}
                        className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-[var(--text-muted)]"
                      >
                        {items.map((item) => {
                          const icon = item.action === "toggleTheme"
                            ? (theme === "dark" ? <SunIcon size={14} /> : <MoonIcon size={14} />)
                            : (GROUP_ICON_MAP[item.id] ?? <ExternalLinkIcon size={14} />);

                          const label = item.action === "toggleTheme"
                            ? `Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`
                            : item.label;

                          return (
                            <Command.Item
                              key={item.id}
                              onSelect={() => handleSelect(item)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--text-secondary)] cursor-pointer data-[selected=true]:bg-[var(--brand-tint)] data-[selected=true]:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors duration-100"
                            >
                              <span className="w-4 h-4 text-[var(--text-muted)] shrink-0 flex items-center justify-center">
                                {icon}
                              </span>
                              {label}
                            </Command.Item>
                          );
                        })}
                      </Command.Group>
                    );
                  })}
                </Command.List>
              </Command>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <button
        onClick={toggle}
        aria-label="Open command palette"
        className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-[var(--text-muted)] border border-[var(--border-color)] bg-[var(--bg-elevated)] hover:border-[var(--brand)] hover:text-[var(--text-primary)] transition-colors duration-200"
      >
        <SearchIcon size={13} />
        <span>Search…</span>
        <kbd className="text-[10px] font-mono border border-[var(--border-color)] rounded px-1">⌘K</kbd>
      </button>
    </>
  );
}
