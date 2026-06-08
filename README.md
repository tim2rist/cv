# Tymofii Snisarenko — Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Google_Gemini-8E75C2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Google Gemini" />
</p>

### *Junior IT Project Manager & Cloud Developer*

---

🚀 **[🔗 Live Website](https://cv-alpha-pied.vercel.app)**

---

## 📋 Project Overview

This is a modern, premium, and fully responsive single-page digital portfolio website for **Tymofii Snisarenko**. It is designed to bridge the gap between structured business delivery (Agile PM) and deep technical cloud infrastructure (DevOps & Serverless Engineering). 

The site features high-performance rendering, fluid motion, strict a11y standards, and an interactive **Google Gemini-powered chatbot** that acts as an autonomous recruiter assistant, answering questions about Tymofii's work experience, education, and technical qualifications in real-time.

---

## 🛠️ Tech Stack & Architecture

*   **Framework**: Next.js 16 (App Router) using React Server Components (RSC) for optimized initial page loads.
*   **Styling**: Tailwind CSS v4 featuring modern custom themes and clean responsive layouts.
*   **Animations**: Framer Motion for scroll-linked animations, micro-interactions, and glassmorphic card hover effects (automatically respecting user preferences for reduced motion).
*   **Artificial Intelligence**: Google Generative AI SDK (`@google/generative-ai`) utilizing the fast and efficient `gemini-2.0-flash` model for the interactive chat widget.
*   **Type Safety**: TypeScript for strict schema contracts.

---

## 🌟 Featured Projects Showcased

This portfolio acts as a hub to demonstrate advanced technical projects:
1.  **AI Delivery Assistant**: An automated pipeline leveraging the Google Gemini API to parse meeting transcripts and auto-generate standardized Jira-ready JSON tasks.
2.  **Serverless Cloud Data Ingestion Pipeline**: A containerized Python ingestion script deployed to Amazon ECR, running on an event-driven AWS serverless architecture to fetch and store real-time data.
3.  **Garage App**: A responsive university capstone web application built with React, developed and optimized with Gemini-assisted code generation.

---

## ⚙️ Local Setup & Installation

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/tim2rist/cv.git
cd cv
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root of the project:
```bash
cp .env.example .env.local
```
Open `.env.local` and add your Google Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
*(You can obtain a free API key from [Google AI Studio](https://aistudio.google.com/apikey))*

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Build for Production
To generate a production-ready build:
```bash
npm run build
npm start
```
