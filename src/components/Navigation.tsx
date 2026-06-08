"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavLink, SiteConfig } from "@/lib/data";
import { springSnappy } from "@/lib/motion";

interface NavigationProps {
  siteConfig: SiteConfig;
  navLinks: readonly NavLink[];
}

export function Navigation({ siteConfig, navLinks }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.nav
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springSnappy}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-6 ${
          scrolled
            ? "border-white/10 bg-slate-950/70 shadow-lg shadow-cyan-500/5 backdrop-blur-xl"
            : "border-transparent bg-transparent backdrop-blur-sm"
        }`}
      >
        <Link
          href="#home"
          className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-lg font-bold tracking-tight text-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          onClick={handleNavClick}
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ResumeButton resumeUrl={siteConfig.resumeUrl} />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="rounded-lg border border-white/10 p-2 text-slate-200 transition-colors hover:border-cyan-500/40 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={springSnappy}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-slate-950/95 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-white/10 pt-4">
              <ResumeButton
                resumeUrl={siteConfig.resumeUrl}
                className="w-full justify-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ResumeButton({
  resumeUrl,
  className = "",
}: {
  resumeUrl: string;
  className?: string;
}) {
  return (
    <motion.a
      href={resumeUrl}
      download
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={springSnappy}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-slate-100 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute inset-[1px] rounded-full bg-slate-950 transition-colors duration-300 group-hover:bg-slate-900" />
      <span className="relative flex items-center gap-2">
        <FileText size={16} aria-hidden="true" className="text-cyan-400" />
        Resume
      </span>
    </motion.a>
  );
}
