"use client";

import {
  Award,
  Cloud,
  Code2,
  Kanban,
  Layers,
  Rocket,
  Shield,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import type {
  AgileWorkflowStep,
  CompetencyGroup,
  SiteConfig,
  StatItem,
} from "@/lib/data";
const iconMap = {
  Kanban,
  Cloud,
  Code: Code2,
} as const;

const workflowIcons = [Layers, Rocket, Cloud, Users];

interface AboutProps {
  siteConfig: SiteConfig;
  aboutBio: readonly string[];
  certifications: readonly string[];
  stats: readonly StatItem[];
  agileWorkflow: readonly AgileWorkflowStep[];
  competencies: readonly CompetencyGroup[];
}

export function About({
  siteConfig,
  aboutBio,
  certifications,
  stats,
  agileWorkflow,
  competencies,
}: AboutProps) {
  return (
    <section id="about" className="relative py-24 md:py-32" aria-labelledby="about-heading">
      <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <FadeIn>
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl"
          >
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={0.1}>
            <div className="glass-card relative overflow-hidden p-8">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl" />
              <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                <div
                  className="flex h-28 w-28 items-center justify-center rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg shadow-cyan-500/10"
                  aria-label={`${siteConfig.name} profile`}
                >
                  <span className="bg-gradient-to-br from-cyan-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent">
                    {siteConfig.initials}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-100">
                  {siteConfig.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Junior IT PM & Cloud Developer · Wrocław, Poland
                </p>
                <div className="mt-6 flex w-full flex-col gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.08)] transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <Award
                        size={14}
                        aria-hidden="true"
                        className="shrink-0 text-emerald-400"
                      />
                      {cert}
                    </span>
                  ))}
                </div>
                <div className="mt-8 grid w-full grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/5 bg-white/5 p-3 text-center"
                    >
                      <p className="text-lg font-bold text-cyan-400">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.15}>
              {aboutBio.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed text-slate-400 sm:text-lg ${i > 0 ? "mt-4" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Agile Process Workflow
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {agileWorkflow.map((item, i) => {
                  const Icon = workflowIcons[i];
                  return (
                    <div
                      key={item.step}
                      className="glass-card group cursor-default p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
                    >
                      <Icon
                        size={20}
                        aria-hidden="true"
                        className="text-cyan-400 transition-colors group-hover:text-emerald-400"
                      />
                      <p className="mt-3 text-sm font-semibold text-slate-100">
                        {item.step}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {competencies.map((comp, index) => {
            const Icon = iconMap[comp.icon];
            return (
              <FadeIn key={comp.title} delay={0.1 + index * 0.1}>
                <div className="glass-card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {comp.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {comp.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <Shield
                          size={14}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-emerald-500/80"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
