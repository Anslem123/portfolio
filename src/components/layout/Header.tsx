"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { useMounted } from "@/hooks/useMounted";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, DownloadIcon } from "@/components/ui/Icon";
import { navItems } from "@/data/navigation";
import { personal } from "@/data/personal";
import { ROUTES } from "@/constants/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled  = useScrolled(20);
  const mounted   = useMounted();
  const pathname  = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
        className={cn(
          // Always-present base: border-b is constant so its width never transitions
          "fixed top-0 left-0 right-0 z-40 border-b [transform:translateZ(0)]",
          // Transition only the properties that legitimately change (excludes
          // backdrop-filter (would cause GPU layer flash) and border-width (constant)
          "transition-[padding,background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "py-3 glass border-[var(--border-color)] shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
            // border-transparent: explicit color avoids currentColor flash
            // shadow zero: same structure as scrolled state so interpolation is clean
            : "py-5 bg-transparent border-transparent shadow-[0_4px_24px_rgba(0,0,0,0)]"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Logo: name only, no avatar */}
            <Link href={ROUTES.home} className="font-bold text-[var(--text-primary)] text-sm tracking-tight hover:text-[#6C63FF] transition-colors duration-200" aria-label={`${personal.name} — Home`}>
              {personal.name}<span className="text-[#6C63FF]">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) => {
                const isActive = item.href === ROUTES.home
                  ? pathname === "/"
                  : pathname.startsWith(item.href.split("#")[0]);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-[#6C63FF]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        initial={false}
                        className="absolute inset-0 rounded-lg bg-[rgba(108,99,255,0.1)]"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-color)] transition-all duration-200"
                >
                  {theme === "dark"
                    ? <SunIcon size={16} />
                    : <MoonIcon size={16} />
                  }
                </button>
              )}

              <a
                href={personal.resumePath}
                download
                className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-[#6C63FF] text-white text-sm font-semibold hover:bg-[#5046E5] shadow-[0_0_15px_rgba(108,99,255,0.25)] hover:shadow-[0_0_25px_rgba(108,99,255,0.45)] transition-all duration-200"
              >
                <DownloadIcon size={14} />
                Resume
              </a>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 rounded-2xl glass border border-[var(--border-color)] shadow-2xl p-4"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-[var(--border-color)]">
                <a
                  href={personal.resumePath}
                  download
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#6C63FF] hover:bg-[rgba(108,99,255,0.1)] transition-colors"
                >
                  <DownloadIcon size={16} />
                  Download Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
