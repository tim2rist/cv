export interface SiteConfig {
  name: string;
  initials: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CompetencyGroup {
  title: string;
  icon: "Kanban" | "Cloud" | "Code";
  items: string[];
}

export interface AgileWorkflowStep {
  step: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string[];
  techStack: string[];
  tags: string[];
  accent: "cyan" | "violet" | "emerald";
  githubUrl?: string;
  liveUrl?: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface HeroContent {
  overline: string;
  headlineLines: { text: string; gradient?: boolean }[];
  profileTagline: string;
}

export const siteConfig: SiteConfig = {
  name: "Tymofii Snisarenko",
  initials: "TS",
  title: "Tymofii Snisarenko | Junior IT PM & Cloud Developer",
  description:
    "Multilingual Junior IT Project Manager and Cloud Developer graduating from WSB Merito in Cloud Application Development. I combine AI-assisted engineering (Google Gemini API), AWS cloud infrastructure, and client-facing leadership to optimize Agile workflows and deliver seamless project outcomes.",
  email: "tim2rist@gmail.com",
  linkedin: "https://linkedin.com/in/tymofii-snisarenko",
  github: "https://github.com/tim2rist",
  resumeUrl: "/Tymofii_Snisarenko_CV.pdf",
};

export const heroContent: HeroContent = {
  overline: "OPTIMIZING AGILE WORKFLOWS WITH CLOUD & AI",
  headlineLines: [
    { text: "Bridging the Gap Between" },
    { text: "Agile Delivery", gradient: true },
    { text: "and Cloud Development" },
  ],
  profileTagline: "Junior IT Project Manager & Cloud Developer",
};

export const aboutBio: readonly string[] = [
  "I am a multilingual Junior IT Project Manager and Cloud Developer nearing graduation in Cloud Application Development from WSB Merito Wrocław. While completing my degree and building a comprehensive React frontend capstone project, I developed a deep interest in workflow automation and AI-assisted engineering.",
  "Recognized for an out-of-the-box approach to problem-solving, I combine modern AI tooling (Google Gemini API) with technical infrastructure knowledge and practical soft skills gained through client-facing operational roles. I thrive on translating business requirements into scalable, cloud-native solutions.",
];

export const navLinks: readonly NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const certifications: readonly string[] = [
  "Cloud Application Developer — WSB Merito (Graduating June 2026)",
  "AI-Assisted Development — Google Gemini API",
  "AWS Cloud Infrastructure — S3 & ECR",
];

export const floatingBadges: readonly string[] = [
  "AWS",
  "Docker",
  "Agile",
  "Gemini API",
];

export const competencies: readonly CompetencyGroup[] = [
  {
    title: "Agile & Project Management",
    icon: "Kanban",
    items: [
      "Sprint planning & backlog refinement",
      "Jira ticket generation & workflow automation",
      "Cross-functional communication",
      "Risk identification & executive summaries",
      "Client requirement translation",
    ],
  },
  {
    title: "Cloud Infrastructure",
    icon: "Cloud",
    items: [
      "AWS (S3, Amazon ECR)",
      "Docker containerization & deployment",
      "Serverless data ingestion pipelines",
      "Linux system administration",
      "Infrastructure troubleshooting & uptime",
    ],
  },
  {
    title: "Core Tech",
    icon: "Code",
    items: [
      "Python",
      "React, HTML, CSS",
      "TypeScript & Next.js",
      "Google Gemini API",
      "Git & Cursor AI",
    ],
  },
];

export const agileWorkflow: readonly AgileWorkflowStep[] = [
  {
    step: "Plan",
    description: "Ingest requirements & define sprint scope",
  },
  {
    step: "Build",
    description: "Develop features & containerize services",
  },
  {
    step: "Ship",
    description: "Deploy to AWS & validate pipelines",
  },
  {
    step: "Review",
    description: "Retrospectives & stakeholder alignment",
  },
];

export const stats: readonly StatItem[] = [
  { label: "Technical Projects", value: "3" },
  { label: "Languages", value: "3" },
  { label: "IT Experience", value: "18+ mo" },
];

export const projects: readonly ProjectItem[] = [
  {
    id: "ai-delivery-assistant",
    title: "AI Delivery Assistant",
    category: "Agile Project Management / AI Tooling",
    description:
      "An automated pipeline that ingests raw client meeting transcripts and processes them via the Google Gemini LLM. Strict system prompts enable the model to act as an Agile PM, isolating executive summaries, risks, and generating standardized, production-ready Jira tickets in JSON format.",
    role: [
      "Designed and built the end-to-end meeting transcript ingestion and parsing pipeline.",
      "Authored strict Gemini system prompts to extract executive summaries, risks, and actionable items.",
      "Configured automated output of standardized Jira-ready JSON tickets for sprint planning.",
      "Applied Agile PM principles to structure LLM outputs for cross-functional team consumption.",
    ],
    techStack: ["Python", "Google Gemini API", "JSON", "Jira"],
    tags: ["Gemini API", "Agile", "Python", "Jira"],
    accent: "cyan",
    githubUrl: "https://github.com/tim2rist/monterail-ai-pm",
  },
  {
    id: "serverless-cloud-pipeline",
    title: "Serverless Cloud Data Ingestion Pipeline",
    category: "Cloud Engineering / DevOps",
    description:
      "A serverless cloud pipeline that periodically fetches real-time external API data for the Wrocław region. The Python ingestion script was containerized with Docker and securely deployed to Amazon Elastic Container Registry, forming the foundation for scalable cloud-native data workflows.",
    role: [
      "Architected the serverless cloud data ingestion pipeline for regional API data.",
      "Containerized the Python ingestion script using Docker for repeatable deployments.",
      "Deployed and managed container images on Amazon ECR with secure AWS configuration.",
      "Ensured reliable periodic data fetching and operational continuity on AWS infrastructure.",
    ],
    techStack: ["AWS S3", "Amazon ECR", "Docker", "Python", "Cursor AI"],
    tags: ["AWS", "Docker", "Python", "DevOps"],
    accent: "violet",
  },
  {
    id: "frontend-capstone",
    title: "Garage App — University Capstone",
    category: "University Capstone / Frontend Development",
    description:
      "A comprehensive university capstone web application prioritizing responsive design and user experience. Developed using modern frontend frameworks with code generation and design acceleration powered by the Google Gemini API.",
    role: [
      "Designed and developed the full capstone web application as part of WSB Merito coursework.",
      "Leveraged Google Gemini API to accelerate code generation, UI prototyping, and troubleshooting.",
      "Prioritized responsive design and intuitive user experience across device breakpoints.",
      "Built interactive UI components and managed application state with React patterns.",
      "Translated functional requirements into a polished, production-quality frontend.",
    ],
    techStack: ["React", "HTML", "CSS", "JavaScript", "Google Gemini API"],
    tags: ["React", "Capstone", "Gemini API", "Responsive"],
    accent: "emerald",
    githubUrl: "https://github.com/tim2rist/garage-app",
    liveUrl: "https://garage-app-rho.vercel.app",
  },
];
