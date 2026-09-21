"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Brain,
  Cloud,
  Palette,
  ArrowRight,
  Sparkles,
  Zap,
  Server,
  ShieldCheck,
  Cpu,
  Globe,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface CapabilitySlide {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  secondaryAccent: string;
  bgGradient: string;
  highlights: { title: string; subtitle: string; icon: React.ReactNode }[];
  technologies: string[];
  projectLinkText: string;
}

const capabilities: CapabilitySlide[] = [
  {
    id: "fullstack",
    number: "01",
    category: "SYSTEM ARCHITECTURE",
    title: "Full Stack Applications",
    tagline: "Scalable Web Platforms, Async Services & Enterprise APIs",
    description:
      "Engineering robust, high-availability software from clean relational/document data models to fluid user interfaces. Experienced in designing low-latency RESTful APIs, secure authentication systems, and performant server architectures.",
    icon: <Layers size={32} />,
    accent: "#6366f1",
    secondaryAccent: "#06b6d4",
    bgGradient: "from-indigo-600/20 via-cyan-600/10 to-transparent",
    highlights: [
      {
        title: "FastAPI & Node.js Backends",
        subtitle: "Async request processing & clean Swagger documentation",
        icon: <Server size={18} />,
      },
      {
        title: "Enterprise Auth & RBAC",
        subtitle: "Secure JWT workflows & role-based route guards",
        icon: <ShieldCheck size={18} />,
      },
      {
        title: "Optimized Database Schemas",
        subtitle: "MongoDB & SQL database indexing for speed",
        icon: <Zap size={18} />,
      },
    ],
    technologies: ["React.js", "FastAPI", "Python", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    projectLinkText: "Featured in Krytil Jobs & E-Locate",
  },
  {
    id: "ai",
    number: "02",
    category: "INTELLIGENT SYSTEMS",
    title: "Artificial Intelligence & ML",
    tagline: "Generative AI Integrations, Neural Architectures & Stochastic Models",
    description:
      "Building practical AI solutions that merge LLM capabilities with predictive modeling. Specialized in prompt design, multimodal AI reasoning with Google Gemini, and probabilistic Monte Carlo simulations for crisis forecasting.",
    icon: <Brain size={32} />,
    accent: "#a855f7",
    secondaryAccent: "#ec4899",
    bgGradient: "from-purple-600/20 via-pink-600/10 to-transparent",
    highlights: [
      {
        title: "Generative AI & LLM Systems",
        subtitle: "Contextual prompt chains & multi-turn reasoning pipelines",
        icon: <Sparkles size={18} />,
      },
      {
        title: "Monte Carlo Risk Engines",
        subtitle: "Probabilistic forecasting & scenario modeling",
        icon: <Cpu size={18} />,
      },
      {
        title: "IIT Mandi AI Specialization",
        subtitle: "Deep learning foundations, neural networks & predictive math",
        icon: <Zap size={18} />,
      },
    ],
    technologies: ["Python", "Gemini AI", "Machine Learning", "Deep Learning", "NumPy", "Monte Carlo", "FastAPI"],
    projectLinkText: "Featured in Day Zero Water Emergency Planner",
  },
  {
    id: "cloud",
    number: "03",
    category: "CLOUD & DEVOPS",
    title: "Cloud Infrastructure & DevOps",
    tagline: "Continuous Delivery, Edge Hosting & Resilient Cloud Deployments",
    description:
      "Bridging application development with automated cloud pipelines. Configuring automated git push-to-production workflows on Vercel and leveraging Google Cloud Platform for reliable, globally distributed digital products.",
    icon: <Cloud size={32} />,
    accent: "#10b981",
    secondaryAccent: "#14b8a6",
    bgGradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    highlights: [
      {
        title: "Automated Git CI/CD",
        subtitle: "Push-to-deploy pipelines with zero downtime",
        icon: <Zap size={18} />,
      },
      {
        title: "Google Cloud Winner",
        subtitle: "Official rewards winner for Google Cloud Study Jams",
        icon: <Globe size={18} />,
      },
      {
        title: "Edge Optimization",
        subtitle: "Global CDN caching, code splitting & bundle minimization",
        icon: <Server size={18} />,
      },
    ],
    technologies: ["Google Cloud", "AWS", "Git & GitHub", "Vercel Edge", "Docker", "CI/CD Pipelines"],
    projectLinkText: "Deployed across Vercel & GCP infrastructure",
  },
  {
    id: "frontend",
    number: "04",
    category: "VISUAL ENGINEERING",
    title: "Interactive Web & 3D Visuals",
    tagline: "60 FPS WebGL, Kinetic Animations & Modern Glassmorphism",
    description:
      "Crafting high-impact user interfaces that command attention. Specializing in HTML5 Canvas 2D/3D orbital physics, hardware-accelerated animations, and responsive cyberpunk-inspired glass aesthetics.",
    icon: <Palette size={32} />,
    accent: "#f59e0b",
    secondaryAccent: "#f97316",
    bgGradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    highlights: [
      {
        title: "Three.js & Canvas 2D/3D",
        subtitle: "Custom particle simulations & kinetic molecular rotators",
        icon: <Sparkles size={18} />,
      },
      {
        title: "Micro-Interaction Motion",
        subtitle: "Physics-based spring curves & responsive hover states",
        icon: <Zap size={18} />,
      },
      {
        title: "Design System Architecture",
        subtitle: "Tailwind CSS design tokens & dark/light theme persistence",
        icon: <Layers size={18} />,
      },
    ],
    technologies: ["Three.js", "HTML5 Canvas", "Framer Motion", "Tailwind CSS", "React.js", "TypeScript"],
    projectLinkText: "Featured across this portfolio & Day Zero 3D UI",
  },
];

export default function CapabilitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentCap = capabilities[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % capabilities.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <SectionWrapper
      id="capabilities"
      label="Core Capabilities"
      title="Engineering Specialties"
      subtitle="Swipe or browse through my primary technical domains — architected with modern tooling and real-world execution."
      centered
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mt-2 select-none">
        {/* Navigation Selector Bar (Tabs) */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8 w-full">
          {capabilities.map((cap, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={cap.id}
                onClick={() => handleSelect(idx)}
                className="relative flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-semibold transition-all duration-300 cursor-pointer"
                style={{
                  background: isActive ? `${cap.accent}20` : "var(--color-bg-card)",
                  border: isActive ? `1.5px solid ${cap.accent}` : "1px solid var(--color-border)",
                  color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                  boxShadow: isActive ? `0 0 20px ${cap.accent}30` : "none",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: cap.accent,
                    boxShadow: isActive ? `0 0 8px ${cap.accent}` : "none",
                  }}
                />
                <span className="opacity-60">{cap.number}</span>
                <span>{cap.title}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Visual Carousel Stage */}
        <div className="relative w-full min-h-[560px] sm:min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentCap.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl"
              style={{
                background: "var(--color-bg-card)",
                border: `1.5px solid ${currentCap.accent}40`,
                boxShadow: `0 20px 50px rgba(0, 0, 0, 0.2), 0 0 40px ${currentCap.accent}15`,
              }}
            >
              {/* Vibrant Atmospheric Background Mesh */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentCap.bgGradient} pointer-events-none opacity-40`}
              />

              {/* Top Accent Gradient Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${currentCap.accent}, ${currentCap.secondaryAccent})`,
                }}
              />

              {/* Big Watermark Number */}
              <div
                className="absolute -bottom-6 -right-6 text-8xl sm:text-9xl font-black font-mono opacity-5 pointer-events-none select-none"
                style={{ color: currentCap.accent }}
              >
                {currentCap.number}
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Header: Category Badge + Icon */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${currentCap.accent}30, ${currentCap.secondaryAccent}15)`,
                        border: `2px solid ${currentCap.accent}50`,
                        color: currentCap.accent,
                        boxShadow: `0 0 25px ${currentCap.accent}30`,
                      }}
                    >
                      {currentCap.icon}
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--color-text-muted)] block">
                        {currentCap.category}
                      </span>
                      <span
                        className="text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full inline-block mt-1"
                        style={{
                          background: `${currentCap.accent}15`,
                          color: currentCap.accent,
                          border: `1px solid ${currentCap.accent}30`,
                        }}
                      >
                        Specialty {currentCap.number} of 04
                      </span>
                    </div>
                  </div>

                  {/* Desktop Quick Nav Arrows */}
                  <div className="hidden sm:flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors cursor-pointer"
                      aria-label="Previous Capability"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors cursor-pointer"
                      aria-label="Next Capability"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Bold Display Title & Subheading */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] tracking-tight mb-2">
                    {currentCap.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[var(--color-accent-primary)] mb-4">
                    {currentCap.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                    {currentCap.description}
                  </p>
                </div>

                {/* 3 Pillars / High-Impact Highlights Grid */}
                <div className="grid sm:grid-cols-3 gap-3.5 mb-6">
                  {currentCap.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-2xl border transition-all duration-300"
                      style={{
                        background: "rgba(0, 0, 0, 0.15)",
                        borderColor: "var(--color-border)",
                      }}
                    >
                      <div className="flex items-center gap-2.5 mb-1.5" style={{ color: currentCap.accent }}>
                        {item.icon}
                        <h4 className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies Badges & Project Tie-in Footer */}
                <div className="pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {currentCap.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono font-medium rounded-lg"
                        style={{
                          background: `${currentCap.accent}12`,
                          border: `1px solid ${currentCap.accent}25`,
                          color: currentCap.accent,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project association pill */}
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--color-accent-primary)] hover:underline self-start sm:self-auto"
                  >
                    <span>{currentCap.projectLinkText}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Carousel Controls (Mobile & Dot Indicators) */}
        <div className="flex items-center justify-between w-full max-w-xs mt-6 px-4">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-primary)] transition-all cursor-pointer shadow-sm hover:scale-105"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {capabilities.map((cap, idx) => (
              <button
                key={cap.id}
                onClick={() => handleSelect(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="transition-all duration-300 rounded-full cursor-pointer"
                style={{
                  width: idx === currentIndex ? "24px" : "8px",
                  height: "8px",
                  background: idx === currentIndex ? cap.accent : "var(--color-border)",
                  boxShadow: idx === currentIndex ? `0 0 10px ${cap.accent}` : "none",
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-primary)] transition-all cursor-pointer shadow-sm hover:scale-105"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
