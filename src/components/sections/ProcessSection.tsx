"use client";

import { motion } from "framer-motion";
import { Lightbulb, Search, Palette, Monitor, Server, Brain, CheckCircle, Rocket } from "lucide-react";
import { developmentProcess } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  lightbulb: <Lightbulb size={22} />,
  search: <Search size={22} />,
  palette: <Palette size={22} />,
  monitor: <Monitor size={22} />,
  server: <Server size={22} />,
  brain: <Brain size={22} />,
  "check-circle": <CheckCircle size={22} />,
  rocket: <Rocket size={22} />,
};

const stepColors = [
  "#f59e0b", "#6366f1", "#ec4899", "#06b6d4",
  "#10b981", "#8b5cf6", "#14b8a6", "#ef4444",
];

export default function ProcessSection() {
  return (
    <SectionWrapper
      id="process"
      label="Engineering Process"
      title="From idea to deployment"
      subtitle="My approach to building software products — systematic, thoughtful, and quality-focused."
      centered
    >
      <div className="w-full flex justify-center mt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl items-stretch justify-items-center">
          {developmentProcess.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative group w-full h-full"
            >
              <div
                className="w-full h-full flex flex-col items-center text-center justify-start p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${stepColors[i]}45`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px rgba(0,0,0,0.08), 0 0 25px ${stepColors[i]}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Step number */}
                <span
                  className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full mb-3"
                  style={{
                    background: `${stepColors[i]}12`,
                    color: stepColors[i],
                    border: `1px solid ${stepColors[i]}25`,
                  }}
                >
                  0{i + 1}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110 shadow-inner"
                  style={{
                    background: `linear-gradient(135deg, ${stepColors[i]}20, ${stepColors[i]}08)`,
                    border: `1px solid ${stepColors[i]}30`,
                    color: stepColors[i],
                  }}
                >
                  {iconMap[step.icon] || <Lightbulb size={22} />}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)] mb-1.5 group-hover:text-[var(--color-accent-primary)] transition-colors">
                  {step.step}
                </h3>

                {/* Description */}
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mt-auto">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow between steps in same row (desktop only) */}
              {i < developmentProcess.length - 1 && (i + 1) % 4 !== 0 && (
                <div
                  className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-6 h-6 rounded-full items-center justify-center pointer-events-none text-xs font-bold"
                  style={{
                    background: "var(--color-bg-tertiary)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
