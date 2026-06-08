import type { SiteConfig } from "@/lib/data";

interface FooterProps {
  siteConfig: SiteConfig;
}

export function Footer({ siteConfig }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>
          © {year}{" "}
          <span className="text-slate-400">{siteConfig.name}</span>. Built with
          Next.js & Tailwind CSS.
        </p>
        <p className="text-xs uppercase tracking-wider">
          Agile Delivery · Cloud Development · AI Tooling
        </p>
      </div>
    </footer>
  );
}
