"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Code, Brain, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={22} />,
  server: <Server size={22} />,
  database: <Database size={22} />,
  code: <Code size={22} />,
  brain: <Brain size={22} />,
  wrench: <Wrench size={22} />,
};

type SkillCategoryKey = keyof typeof skills;

interface FidgetSpinnerDomainProps {
  categoryKey: SkillCategoryKey;
}

function FidgetSpinnerDomain({ categoryKey }: FidgetSpinnerDomainProps) {
  const cat = skills[categoryKey];
  const items = cat.items;
  const totalItems = items.length;
  const radius = 105; // orbit radius in pixels

  return (
    <div className="relative flex flex-col items-center justify-center py-6 group">
      {/* Top Domain Label */}
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div
          className="w-7 h-7 rounded-none flex items-center justify-center"
          style={{
            background: `${cat.color}20`,
            color: cat.color,
            borderRadius: "2px",
          }}
        >
          {iconMap[cat.icon]}
        </div>
        <span className="text-sm font-bold text-[var(--color-text-primary)]">
          {cat.label}
        </span>
      </div>

      {/* Floating Fidget Spinner Revolving Orbit System (No Card Box) */}
      <div className="relative w-[250px] h-[250px] flex items-center justify-center">
        {/* Ambient Core Glow */}
        <div
          className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, ${cat.color}40 0%, transparent 70%)`,
          }}
        />

        {/* Orbital Track Rings */}
        <div
          className="absolute w-[210px] h-[210px] rounded-full border border-dashed pointer-events-none"
          style={{ borderColor: `${cat.color}35` }}
        />
        <div
          className="absolute w-[140px] h-[140px] rounded-full border border-dotted pointer-events-none opacity-40"
          style={{ borderColor: `${cat.color}45` }}
        />

        {/* Central Core Domain Node */}
        <motion.div
          whileHover={{ scale: 1.12 }}
          className="relative z-20 w-20 h-20 rounded-full flex flex-col items-center justify-center text-center p-2 shadow-lg transition-transform duration-300"
          style={{
            background: `radial-gradient(circle, ${cat.color}35 0%, var(--color-bg-site) 90%)`,
            border: `2px solid ${cat.color}`,
            boxShadow: `0 0 25px ${cat.color}45`,
          }}
        >
          <div style={{ color: cat.color }}>{iconMap[cat.icon]}</div>
          <span className="text-[10px] font-bold tracking-tight text-[var(--color-text-primary)] mt-1 leading-none">
            {cat.label.split(" ")[0]}
          </span>
        </motion.div>

        {/* Revolving Orbiting Spinner Blades */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-auto transition-all duration-700"
          style={{
            animation: "fidget-spin 22s linear infinite",
          }}
        >
          {items.map((item, idx) => {
            const angleDeg = (360 / totalItems) * idx;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <div
                key={item.name}
                className="absolute top-1/2 left-1/2 -mt-4 -ml-12"
                style={{
                  transform: `translate3d(${x}px, ${y}px, 0)`,
                }}
              >
                {/* Counter-rotating badge so text stays upright */}
                <div
                  style={{
                    animation: "fidget-counter-spin 22s linear infinite",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.25, zIndex: 30 }}
                    className="px-2.5 py-1 text-[11px] font-mono font-medium shadow-md whitespace-nowrap flex items-center gap-1.5 backdrop-blur-md transition-colors"
                    style={{
                      background: "var(--color-bg-glass)",
                      border: `1px solid ${cat.color}50`,
                      borderRadius: "2px",
                      color: "var(--color-text-primary)",
                      boxShadow: `0 2px 10px rgba(0,0,0,0.2), 0 0 12px ${cat.color}20`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: cat.color }}
                    />
                    <span>{item.name}</span>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const categories = Object.keys(skills) as SkillCategoryKey[];

  return (
    <SectionWrapper
      id="skills"
      label="Tech Stack"
      title="My Technology Universe"
      subtitle="Technologies, frameworks, and programming languages I utilize to engineer scalable full-stack applications and AI solutions."
      className="!pt-6 !pb-16"
    >
      {/* CSS Keyframes for Fidget Spinner Orbiting */}
      <style jsx global>{`
        @keyframes fidget-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fidget-counter-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .group:hover [style*="fidget-spin"] {
          animation-play-state: paused;
        }
      `}</style>

      {/* Grid of Clean Floating Fidget Spinner Technology Orbiters (No Rectangular Card Boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {categories.map((catKey) => (
          <FidgetSpinnerDomain key={catKey} categoryKey={catKey} />
        ))}
      </div>
    </SectionWrapper>
  );
}
