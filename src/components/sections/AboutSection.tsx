"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Code, Layers, Brain, Rocket, Award, GraduationCap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles size={20} />,
  code: <Code size={20} />,
  layers: <Layers size={20} />,
  brain: <Brain size={20} />,
  rocket: <Rocket size={20} />,
};

function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mt-10 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
      <h3 className="text-sm font-mono text-[var(--color-accent-primary)] mb-6 tracking-wider uppercase flex items-center gap-2">
        <span className="w-6 h-px bg-[var(--color-accent-primary)]" />
        My Journey
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
        {personalInfo.journey.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-4 rounded-xl flex flex-col items-start gap-2"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "var(--color-accent-glow)",
                border: "1px solid rgba(129,140,248,0.2)",
                color: "var(--color-accent-primary)",
              }}
            >
              {iconMap[step.icon] || <Sparkles size={20} />}
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--color-text-primary)]">{step.label}</div>
              <div className="text-xs text-[var(--color-text-muted)] mt-1">{step.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      label="About Me"
      title="Who is Sharon?"
    >
      <div className="space-y-10 mt-8">
        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "University", value: personalInfo.university, icon: <GraduationCap size={18} className="text-indigo-400" /> },
            { label: "CGPA", value: "9.1 (CSE B.E.)", icon: <Award size={18} className="text-emerald-400" /> },
            { label: "Minor Degree", value: "Artificial Intelligence (IIT Mandi)", icon: <Brain size={18} className="text-purple-400" /> },
            { label: "Focus", value: "Full Stack & AI Engineering", icon: <Rocket size={18} className="text-sky-400" /> },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-xl flex flex-col gap-2"
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-xs font-mono text-[var(--color-text-muted)]">{item.label}</span>
              </div>
              <div className="text-sm font-semibold text-[var(--color-text-primary)]">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Biography Paragraphs */}
        <div className="space-y-5">
          {personalInfo.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-base text-[var(--color-text-secondary)] leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="p-6 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, var(--color-accent-glow), rgba(139,92,246,0.05))",
            border: "1px solid rgba(129,140,248,0.15)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-glow)] flex items-center justify-center flex-shrink-0">
                <Brain size={24} className="text-[var(--color-accent-primary)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-text-primary)] text-base">
                  {personalInfo.degree}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  {personalInfo.minor} — {personalInfo.university}
                </p>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-sm font-semibold text-[var(--color-accent-primary)]">
              CGPA: 9.1
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <JourneyTimeline />
      </div>
    </SectionWrapper>
  );
}
