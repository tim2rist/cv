"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import type { SiteConfig } from "@/lib/data";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { type ComponentType, type SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface ContactProps {
  siteConfig: SiteConfig;
}

export function Contact({ siteConfig }: ContactProps) {
  const contactLinks: {
    label: string;
    href: string;
    icon: IconComponent;
    display: string;
  }[] = [
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      display: siteConfig.email,
    },
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
      icon: LinkedInIcon,
      display: "Connect on LinkedIn",
    },
    {
      label: "GitHub",
      href: siteConfig.github,
      icon: GitHubIcon,
      display: "View repositories",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="glass-card mx-auto max-w-2xl p-8 text-center sm:p-12"
        >
          <motion.div variants={fadeIn}>
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl"
            >
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Collaborate
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-400">
              Looking for a hybrid PM & Cloud Developer who speaks both business
              and code? Let&apos;s connect to discuss how{" "}
              {siteConfig.name.split(" ")[0]} can help streamline your delivery
              and cloud infrastructure.
            </p>
          </motion.div>

          <motion.ul
            variants={staggerContainer(0.07, 0.15)}
            className="mt-10 flex list-none flex-col gap-3"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.li key={link.label} variants={fadeIn}>
                  <a
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={
                      link.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500/20 group-hover:text-emerald-400">
                        <Icon width={20} height={20} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                          {link.label}
                        </p>
                        <p className="text-sm font-medium text-slate-200">
                          {link.display}
                        </p>
                      </div>
                    </div>
                    <Send
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-slate-600 transition-colors duration-300 group-hover:text-cyan-400"
                    />
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
