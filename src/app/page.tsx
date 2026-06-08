import { About } from "@/components/About";
import { AIChatAssistant } from "@/components/AIChatAssistant";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import {
  aboutBio,
  agileWorkflow,
  certifications,
  competencies,
  floatingBadges,
  heroContent,
  navLinks,
  projects,
  siteConfig,
  stats,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navigation siteConfig={siteConfig} navLinks={navLinks} />
      <main>
        <Hero
          siteConfig={siteConfig}
          heroContent={heroContent}
          floatingBadges={floatingBadges}
        />
        <About
          siteConfig={siteConfig}
          aboutBio={aboutBio}
          certifications={certifications}
          stats={stats}
          agileWorkflow={agileWorkflow}
          competencies={competencies}
        />
        <Projects projects={projects} />
        <Contact siteConfig={siteConfig} />
      </main>
      <Footer siteConfig={siteConfig} />
      <AIChatAssistant />
    </>
  );
}
