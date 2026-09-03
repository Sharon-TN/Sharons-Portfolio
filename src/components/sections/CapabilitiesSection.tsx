"use client";

import { motion } from "framer-motion";
import { Layers, Palette, Server, Brain } from "lucide-react";
import { capabilities } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={22} />,
  palette: <Palette size={22} />,
  server: <Server size={22} />,
  brain: <Brain size={22} />,
};

const gradientColors = [
  { from: "#6366f1", to: "#06b6d4" },
  { from: "#8b5cf6", to: "#ec4899" },
  { from: "#10b981", to: "#14b8a6" },
  { from: "#f59e0b", to: "#f97316" },
];

export default function CapabilitiesSection() {
  return (
    <SectionWrapper
      id="capabilities"
      label="What I Build"
      title="Building end-to-end digital solutions"
      subtitle="From concept to deployment, I build products that solve real problems with modern technologies."
    >
      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative p-6 sm:p-8 rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "2px", // Crisp sharp rectangle edges
              boxShadow: "var(--shadow-sm)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-hover)";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px rgba(0, 0, 0, 0.08), 0 0 20px ${gradientColors[i].from}15`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
            }}
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(90deg, ${gradientColors[i].from}, ${gradientColors[i].to})`,
              }}
            />

            {/* Background gradient on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 30% 0%, ${gradientColors[i].from}10, transparent 65%)`,
              }}
            />

            {/* Sharp Rectangular Icon Badge */}
            <div
              className="relative z-10 w-11 h-11 rounded-none flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${gradientColors[i].from}20, ${gradientColors[i].to}10)`,
                border: `1px solid ${gradientColors[i].from}30`,
                borderRadius: "2px",
                color: gradientColors[i].from,
              }}
            >
              {iconMap[cap.icon]}
            </div>

            {/* Content */}
            <h3 className="relative z-10 text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
              {cap.title}
            </h3>
            <p className="relative z-10 text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
              {cap.description}
            </p>

            {/* Technologies in sharp rectangular tags */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {cap.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium transition-colors"
                  style={{
                    background: `${gradientColors[i].from}12`,
                    border: `1px solid ${gradientColors[i].from}25`,
                    borderRadius: "2px",
                    color: gradientColors[i].from,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Corner ambient glow */}
            <div
              className="absolute top-0 right-0 w-28 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 100% 0%, ${gradientColors[i].from}15, transparent 70%)`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
