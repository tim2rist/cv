import {
  aboutBio,
  certifications,
  competencies,
  projects,
  siteConfig,
  stats,
} from "@/lib/data";

const professionalExperience = [
  {
    role: "Logistics & Delivery Specialist",
    duration: "1 Year",
    highlights: [
      "Mastered time management and route optimization in a high-pressure, fast-paced environment.",
      "Developed strong customer-facing communication skills and conflict resolution under strict delivery deadlines.",
    ],
  },
  {
    role: "Freelance Web Designer",
    duration: "Freelance",
    highlights: [
      "Translated client business requirements into functional, aesthetic web interfaces.",
      "Managed end-to-end project communication, setting clear expectations and delivering on agreed deadlines.",
    ],
  },
  {
    role: "IT System Administrator Assistant",
    duration: "6 Months",
    highlights: [
      "Supported core IT infrastructure maintenance, troubleshooting hardware and network anomalies.",
      "Applied out-of-the-box thinking to resolve daily technical blockers, ensuring continuous operational uptime.",
    ],
  },
];

const education = {
  institution: "Uniwersytet WSB Merito Wrocław",
  degree: "Programista Aplikacji w Chmurze (Cloud Application Developer)",
  graduation: "June 2026",
};

const languages = [
  "Ukrainian (Native)",
  "Polish (Fluent)",
  "English (B2+ — continuously improving)",
];

const interests = [
  "Competitive Esports (CS2): strategic thinking, tactical analysis, and team coordination.",
];

export function buildCvContext(): string {
  return JSON.stringify(
    {
      profile: siteConfig,
      location: "Wrocław, Poland",
      aboutBio,
      certifications,
      competencies,
      projects,
      stats,
      professionalExperience,
      education,
      languages,
      interests,
      softSkills: [
        "Cross-functional communication",
        "Adaptability in high-pressure environments",
        "Strong time management",
        "Out-of-the-box problem solving",
      ],
      hardSkills: [
        "Frontend Web Dev (React, HTML, CSS)",
        "AI-Assisted Dev (Python, Google Gemini API)",
        "AWS",
        "Docker",
      ],
    },
    null,
    2,
  );
}

export function buildGeminiSystemPrompt(): string {
  return `You are Tymofii Snisarenko's AI Portfolio Assistant. Your sole job is to answer questions about Tymofii's professional background, education, work experience, certifications, skills, projects, and languages using the provided CV data.

Be professional, polite, and concise. Do not make up facts. If a question is not answerable based on his profile, say: "I'm sorry, I don't have information on that. Feel free to contact Tymofii directly at tim2rist@gmail.com."

Here is Tymofii's CV information:
${buildCvContext()}`;
}
