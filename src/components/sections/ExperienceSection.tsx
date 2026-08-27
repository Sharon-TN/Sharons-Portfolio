"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

const typeLabels: Record<string, { label: string; color: string }> = {
  internship: { label: "Internship", color: "#6366f1" },
  freelance: { label: "Freelance", color: "#10b981" },
  personal: { label: "Personal Project", color: "#f59e0b" },
  academic: { label: "Academic", color: "#8b5cf6" },
};

export default function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="My professional journey"
      subtitle="Internships, freelance work, and technical experience that shaped my skills."
    >
      <div className="mt-12 space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, i) => {
          const typeInfo = typeLabels[exp.type] || typeLabels.personal;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Clean Experience Card — No floating timeline dots */}
              <div
                className="p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${typeInfo.color}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${typeInfo.color}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4" style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-[var(--color-accent-primary)] mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <span
                      className="text-xs font-mono font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `${typeInfo.color}15`,
                        color: typeInfo.color,
                        border: `1px solid ${typeInfo.color}30`,
                      }}
                    >
                      {typeInfo.label}
                    </span>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-text-muted)] mb-5 px-3 py-1.5 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                  <Calendar size={13} className="text-[var(--color-accent-primary)]" />
                  {exp.duration}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono"
                      style={{
                        background: "var(--color-bg-tertiary)",
                        color: "var(--color-text-secondary)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
