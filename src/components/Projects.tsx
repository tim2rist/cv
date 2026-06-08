"use client";

import { Briefcase, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import type { ProjectItem } from "@/lib/data";

const accentStyles = {
  cyan: {
    border: "hover:border-cyan-500/40",
    glow: "group-hover:shadow-cyan-500/10",
    tag: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    gradient: "from-cyan-500/10 via-transparent to-emerald-500/5",
    role: "border-cyan-500/20 bg-cyan-500/5",
  },
  violet: {
    border: "hover:border-violet-500/40",
    glow: "group-hover:shadow-violet-500/10",
    tag: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    gradient: "from-violet-500/10 via-transparent to-cyan-500/5",
    role: "border-violet-500/20 bg-violet-500/5",
  },
  emerald: {
    border: "hover:border-emerald-500/40",
    glow: "group-hover:shadow-emerald-500/10",
    tag: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    gradient: "from-emerald-500/10 via-transparent to-cyan-500/5",
    role: "border-emerald-500/20 bg-emerald-500/5",
  },
} as const;

interface ProjectsProps {
  projects: readonly ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <FadeIn>
          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            Technical projects spanning AI-assisted Agile delivery, AWS cloud
            pipelines, and frontend development.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const styles = accentStyles[project.accent];
            return (
              <FadeIn key={project.id} delay={0.05 + index * 0.08}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 ${styles.border} hover:shadow-2xl ${styles.glow}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${styles.gradient}`}
                  />

                  <div className="relative flex flex-1 flex-col">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      {project.category}
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold leading-snug text-slate-50">
                      {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${styles.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`mt-4 rounded-xl border p-3 ${styles.role}`}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Briefcase
                          size={14}
                          aria-hidden="true"
                          className="text-cyan-400"
                        />
                        <h4 className="text-[10px] font-semibold uppercase tracking-wider text-slate-200">
                          My Role
                        </h4>
                      </div>
                      <ul className="space-y-1.5">
                        {project.role.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-xs leading-relaxed text-slate-400"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        Tech Stack
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/10 bg-slate-900/60 px-2 py-0.5 text-[10px] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(project.githubUrl || project.liveUrl) && (
                      <div className="mt-auto flex flex-wrap gap-3 pt-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 transition-all duration-300 hover:translate-x-0.5 hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                          >
                            View on GitHub
                            <ExternalLink size={12} aria-hidden="true" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-400 transition-all duration-300 hover:translate-x-0.5 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
                          >
                            Live demo
                            <ExternalLink size={12} aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
