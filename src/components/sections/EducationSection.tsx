"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, certifications, achievements } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      label="Education & Achievements"
      title="Academic journey & recognition"
    >
      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[var(--color-accent-primary)] mb-6">
            <GraduationCap size={16} />
            Education
          </h3>

          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl mb-4"
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.1))",
                    border: "1px solid rgba(99,102,241,0.15)",
                  }}
                >
                  <GraduationCap size={22} className="text-[var(--color-accent-primary)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-text-primary)]">{edu.degree}</h4>
                  <p className="text-sm text-[var(--color-accent-primary)] font-medium">{edu.institution}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{edu.duration}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-3">{edu.description}</p>

                  {edu.achievements.length > 0 && (
                    <div className="mt-3 space-y-1">
                      {edu.achievements.map((ach, j) => (
                        <p key={j} className="text-xs text-[var(--color-text-muted)] flex items-start gap-1.5">
                          <span className="text-[var(--color-accent-primary)]">•</span>
                          {ach}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements & Certifications */}
        <div>
          {/* Certifications */}
          <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[var(--color-accent-primary)] mb-6">
            <Award size={16} />
            Certifications
          </h3>

          <div className="space-y-3 mb-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group p-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{cert.title}</h4>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {cert.organization} • {cert.year}
                  </p>
                </div>
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-accent-primary)]"
                  aria-label={`Verify ${cert.title}`}
                >
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-amber-500 mb-6">
            <Award size={16} />
            Achievements
          </h3>

          <div className="space-y-3">
            {achievements.map((ach, i) => {
              const typeColors: Record<string, string> = {
                hackathon: "#6366f1",
                competition: "#10b981",
                award: "#f59e0b",
                other: "#8b5cf6",
              };
              const color = typeColors[ach.type] || "#6366f1";

              return (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{ach.title}</h4>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">{ach.description}</p>
                    </div>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ml-3"
                      style={{ background: `${color}15`, color }}
                    >
                      {ach.type}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] mt-2">{ach.year}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
