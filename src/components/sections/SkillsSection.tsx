"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Server, Database, Code, Brain, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={20} />,
  server: <Server size={20} />,
  database: <Database size={20} />,
  code: <Code size={20} />,
  brain: <Brain size={20} />,
  wrench: <Wrench size={20} />,
};

type SkillCategory = keyof typeof skills;

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");
  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <SectionWrapper
      id="skills"
      label="Tech Stack"
      title="My Technology Universe"
      subtitle="Technologies I use to build products. Hover over categories to explore."
    >
      <div className="mt-12">
        {/* Category Architecture View */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Selector — Left */}
          <div className="lg:col-span-4">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
              {categories.map((key) => {
                const cat = skills[key];
                const isActive = activeCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink ${
                      isActive
                        ? "shadow-lg"
                        : "hover:bg-[var(--color-bg-tertiary)]"
                    }`}
                    style={
                      isActive
                        ? {
                            background: `${cat.color}15`,
                            border: `1px solid ${cat.color}30`,
                            boxShadow: `0 0 20px ${cat.color}10`,
                          }
                        : {
                            background: "transparent",
                            border: "1px solid transparent",
                          }
                    }
                    aria-pressed={isActive}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                      style={{
                        background: isActive ? `${cat.color}20` : "var(--color-bg-tertiary)",
                        color: isActive ? cat.color : "var(--color-text-muted)",
                      }}
                    >
                      {iconMap[cat.icon]}
                    </div>
                    <div className="hidden sm:block">
                      <div
                        className="text-sm font-medium transition-colors"
                        style={{
                          color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                        }}
                      >
                        {cat.label}
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)]">
                        {cat.items.length} technologies
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Architecture flow connector (desktop) */}
            <div className="hidden lg:flex flex-col items-center gap-1 mt-4 ml-5">
              {categories.map((key, i) => (
                <div key={key} className="flex flex-col items-center">
                  {i > 0 && (
                    <div className="w-px h-3" style={{ background: "var(--color-border)" }} />
                  )}
                  {i > 0 && (
                    <div
                      className="text-[8px] font-mono px-1.5 py-0.5 rounded"
                      style={{ color: "var(--color-text-muted)", background: "var(--color-bg-tertiary)" }}
                    >
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Detail — Right */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${skills[activeCategory].color}20`,
                      color: skills[activeCategory].color,
                    }}
                  >
                    {iconMap[skills[activeCategory].icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                      {skills[activeCategory].label}
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {skills[activeCategory].items.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-5">
                  {skills[activeCategory].items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[var(--color-text-primary)]">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-[var(--color-text-muted)]">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{ background: "var(--color-bg-tertiary)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: i * 0.08 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skills[activeCategory].color}, ${skills[activeCategory].color}80)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* All Technologies Grid */}
            <div className="mt-6">
              <h4 className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                All Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {Object.values(skills).flatMap((cat) =>
                  cat.items.map((skill) => (
                    <span
                      key={`${cat.label}-${skill.name}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 cursor-default"
                      style={{
                        background: "var(--color-bg-tertiary)",
                        color: "var(--color-text-secondary)",
                        border: "1px solid var(--color-border)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${cat.color}15`;
                        (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}30`;
                        (e.currentTarget as HTMLElement).style.color = cat.color;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--color-bg-tertiary)";
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                        (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                      }}
                    >
                      {skill.name}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
