# Sharon T N — Developer Portfolio & Digital Universe

An extraordinary, modern, and interactive personal portfolio website designed and engineered for **Sharon T N**, Full Stack Developer & Aspiring AI Engineer (Computer Science & Engineering at IIT Mandi, Minor in AI).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Three.js / HTML5 Canvas**.

## 🌐 Live Production URL
Visit the live portfolio at: **[https://sharon-tn-portfolio.vercel.app](https://sharon-tn-portfolio.vercel.app)**

---

## 🚀 Quick Start (Running Manually)

To run the development server on **localhost:5173**:

```bash
npm run dev -- --port 5173
```

Or simply:

```bash
npx next dev --port 5173
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ How to Customize Your Content

All data is centrally managed in **`src/data/portfolio.ts`**. You do not need to touch UI components to update your information!

Simply edit `src/data/portfolio.ts` to update:
- **Personal Info**: Name, bio, email, social links, resume URL
- **Capabilities**: Key engineering areas (Full Stack, UI Design, Backend, AI)
- **Skills & Tech Universe**: Frontend, Backend, Databases, AI/ML tools, DevOps
- **Projects**: Project title, tagline, problem, solution, tech stack, architecture, live demo & GitHub links
- **Experience**: Internships, freelance work, duration, bullet points
- **Education & Certifications**: Degrees, courses, credentials, achievements

---

## 🎨 Key Features & Architecture

- **Cinematic Hero**: Rotating role titles, custom particle field, and interactive canvas 3D Engineering Core node visualization.
- **Glassmorphism & Aesthetics**: Cyberpunk-inspired dark/light theme, custom spring-physics cursor, background noise texture, dynamic gradient accents.
- **Modular Sections**:
  - `HeroSection`: Intro, role rotator, interactive 3D core
  - `AboutSection`: Interactive journey timeline, quick info cards, bio
  - `CapabilitiesSection`: 4 core engineering domains with gradient card glows
  - `ProjectsSection`: Filterable project grid, expandable problem/solution/architecture details
  - `SkillsSection`: Dynamic category selector, animated skill bars, full technology tag cloud
  - `ProcessSection`: 8-step engineering pipeline from concept to deployment
  - `ExperienceSection`: Vertical timeline with color-coded experience badges
  - `EducationSection`: Academic timeline, certifications with verification links, achievements
  - `ResumeSection`: Quick action buttons to view or download resume
  - `ContactSection`: Validated contact form, interactive social cards, live availability indicator
- **Theme Provider**: Dark/Light mode toggle with persistence and system default fallback.
- **Accessibility & UX**: Motion reduction support (`prefers-reduced-motion`), mobile full-screen animated menu, keyboard navigation, full SEO meta tags & OpenGraph cards.

---

## 📄 License

Created for Sharon T N. All rights reserved.
