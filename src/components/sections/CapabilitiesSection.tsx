"use client";

import { motion } from "framer-motion";
import { Layers, Palette, Server, Brain } from "lucide-react";
import { capabilities } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={24} />,
  palette: <Palette size={24} />,
  server: <Server size={24} />,
  brain: <Brain size={24} />,
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
      <div className="grid sm:grid-cols-2 gap-5 mt-12">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-active)";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px rgba(99,102,241,0.08)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Background gradient on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 30% 0%, ${gradientColors[i].from}08, transparent 60%)`,
              }}
            />

            {/* Icon */}
            <div
              className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${gradientColors[i].from}20, ${gradientColors[i].to}10)`,
                border: `1px solid ${gradientColors[i].from}20`,
                color: gradientColors[i].from,
              }}
            >
              {iconMap[cap.icon]}
            </div>

            {/* Content */}
            <h3 className="relative z-10 text-lg font-semibold text-[var(--color-text-primary)] mb-3">
              {cap.title}
            </h3>
            <p className="relative z-10 text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
              {cap.description}
            </p>

            {/* Technologies */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {cap.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tag"
                  style={{
                    background: `${gradientColors[i].from}08`,
                    borderColor: `${gradientColors[i].from}15`,
                    color: gradientColors[i].from,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 100% 0%, ${gradientColors[i].from}10, transparent 70%)`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
