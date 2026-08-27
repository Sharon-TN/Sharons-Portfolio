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
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {developmentProcess.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div
              className="flex flex-col items-center text-center p-5 rounded-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${stepColors[i]}30`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${stepColors[i]}08`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Step number */}
              <span className="text-[10px] font-mono text-[var(--color-text-muted)] mb-2">
                0{i + 1}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${stepColors[i]}12`,
                  color: stepColors[i],
                }}
              >
                {iconMap[step.icon] || <Lightbulb size={22} />}
              </div>

              {/* Text */}
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                {step.step}
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Connector arrow (not on last item in each row) */}
            {i < developmentProcess.length - 1 && (i + 1) % 4 !== 0 && (
              <div className="absolute top-1/2 -right-2 hidden sm:block text-[var(--color-border)]">
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
