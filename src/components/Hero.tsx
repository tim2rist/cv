"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { HeroContent, SiteConfig } from "@/lib/data";
import {
  easeOutExpo,
  fadeUp,
  fadeUpReduced,
  heroBadgeFloat,
  heroBadgeKeyframes,
  staggerContainer,
} from "@/lib/motion";

const badgePositions = [
  { top: "16%", left: "6%", delay: 0.5 },
  { top: "28%", right: "5%", delay: 0.65 },
  { bottom: "32%", left: "10%", delay: 0.8 },
  { bottom: "18%", right: "8%", delay: 0.95 },
];

interface HeroProps {
  siteConfig: SiteConfig;
  heroContent: HeroContent;
  floatingBadges: readonly string[];
}

export function Hero({ siteConfig, heroContent, floatingBadges }: HeroProps) {
  const reducedMotion = useReducedMotion();
  const itemVariants = reducedMotion ? fadeUpReduced : fadeUp;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg animate-grid-fade" />
      <div className="ambient-glow pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
      <div
        className="ambient-glow ambient-glow-delayed pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="ambient-glow pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[90px]"
        style={{ animationDelay: "-7s" }}
      />

      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge}
          className="pointer-events-none absolute hidden sm:block"
          style={badgePositions[i % badgePositions.length]}
          initial={{ opacity: 0, scale: 0.88, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{
            delay: badgePositions[i % badgePositions.length].delay,
            duration: 0.55,
            ease: easeOutExpo,
          }}
        >
          <motion.span
            animate={reducedMotion ? undefined : heroBadgeKeyframes(i)}
            transition={reducedMotion ? undefined : heroBadgeFloat(i)}
            className="inline-block rounded-full border border-white/10 bg-slate-900/50 px-4 py-2 text-xs font-semibold tracking-wider text-slate-200 shadow-lg shadow-cyan-500/5 backdrop-blur-md"
          >
            {badge}
          </motion.span>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        <motion.div
          variants={staggerContainer(0.12, 0.08)}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-6 max-w-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.2em] text-transparent sm:text-sm"
          >
            {heroContent.overline}
          </motion.p>

          <motion.h1
            variants={staggerContainer(0.07, 0)}
            className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroContent.headlineLines.map((line) => (
              <motion.span
                key={line.text}
                variants={itemVariants}
                className={`block ${
                  line.gradient
                    ? "bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent"
                    : "text-slate-50"
                }`}
              >
                {line.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm font-medium text-cyan-400/90"
          >
            {heroContent.profileTagline} · {siteConfig.name}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/35 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              Explore Projects
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <Mail size={18} aria-hidden="true" className="text-cyan-400" />
              Get in Touch
            </Link>
            <a
              href={siteConfig.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-7 py-3.5 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:bg-violet-500/15 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap gap-3 sm:hidden"
          >
            {floatingBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
