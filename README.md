# Tymofii Snisarenko — Portfolio

Single-page portfolio for **Tymofii Snisarenko** (Junior IT PM & Cloud Developer), built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Google Gemini AI**.

## Getting started

```bash
npm install
cp .env.example .env.local
# Add your GEMINI_API_KEY to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Gemini AI chat assistant

1. Get an API key from [Google AI Studio](https://aistudio.google.com/apikey)
2. Add to `.env.local`:

```env
GEMINI_API_KEY=your_key_here
```

3. Restart the dev server. The floating chat widget uses `/api/chat` with `gemini-2.0-flash`.

## Customize content

Edit `src/lib/data.ts` for profile, projects, competencies, and stats. CV PDF lives at `public/Tymofii_Snisarenko_CV.pdf`.

## Build for production

```bash
npm run build
npm start
```

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Google Generative AI (`@google/generative-ai`)
- Lucide React
