"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Code,
  Brain,
  Wrench,
} from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

type SkillCategoryKey = keyof typeof skills;

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={22} />,
  monitor: <Monitor size={22} />,
  server: <Server size={22} />,
  database: <Database size={22} />,
  brain: <Brain size={22} />,
  wrench: <Wrench size={22} />,
};

interface MoleculeProps {
  catKey: SkillCategoryKey;
}

// Clockwise domains: Languages (programming), Backend (backend), AI/ML & Data (ai)
// Counter-Clockwise domains: Frontend (frontend), Databases (databases), Cloud (devops)
const clockwiseDomains: Set<SkillCategoryKey> = new Set([
  "programming",
  "backend",
  "ai",
]);

function MolecularStructure({ catKey }: MoleculeProps) {
  const cat = skills[catKey];
  const items = cat.items;
  const totalAtoms = items.length;

  const isClockwise = clockwiseDomains.has(catKey);

  // Exact 2D Geometry Dimensions
  const canvasSize = 340; // 340px x 340px canvas
  const centerPos = canvasSize / 2; // (170, 170) is exact center
  const bondLength = 125; // Length of the stick from center to outer tip

  const spinAnimationClass = isClockwise ? "animate-mole-cw" : "animate-mole-ccw";
  const counterAnimationClass = isClockwise ? "animate-mole-counter-cw" : "animate-mole-counter-ccw";

  return (
    <div className="relative flex flex-col items-center justify-center p-2 group select-none">
      {/* Molecule Header Label */}
      <div className="flex items-center gap-2.5 mb-3 z-20">
        <span
          className="w-3 h-3 rounded-full animate-pulse"
          style={{ background: cat.color }}
        />
        <h3 className="text-sm md:text-base font-mono font-extrabold tracking-wider text-[var(--color-text-primary)] group-hover:text-white uppercase transition-colors">
          {cat.label}
        </h3>
      </div>

      {/* 3D Molecular Canvas Container */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: `${canvasSize}px`, height: `${canvasSize}px` }}
      >
        {/* Ambient Electron Cloud Radial Glow */}
        <div
          className="absolute inset-0 rounded-full blur-3xl transition-opacity duration-500 opacity-20 group-hover:opacity-60 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${cat.color}60 0%, transparent 70%)`,
          }}
        />

        {/* BIG CENTRAL MAIN MOLECULE NUCLEUS SPHERE (Static Center Nucleus) */}
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.3 }}
          className="absolute z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-3 cursor-pointer select-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${centerPos}px`,
            top: `${centerPos}px`,
            background: `radial-gradient(circle at 32% 32%, ${cat.color} 0%, rgba(15, 23, 42, 0.95) 75%, #05070a 100%)`,
            border: `3px solid ${cat.color}`,
            boxShadow: `0 0 22px ${cat.color}60, inset 0 0 14px rgba(255,255,255,0.35)`,
          }}
        >
          <div className="text-white drop-shadow-md">{iconMap[cat.icon]}</div>
          <span className="text-[11px] font-black tracking-wider text-white mt-1 leading-tight uppercase font-mono drop-shadow px-1">
            {cat.label}
          </span>
        </motion.div>

        {/* REVOLVING ATOMIC SYSTEM ASSEMBLY (Sticks + Small Spheres rotating in CW or CCW motion) */}
        <div
          className={`absolute inset-0 w-full h-full pointer-events-auto ${spinAnimationClass}`}
        >
          {/* SVG Solid Chemical Bond Rods (Sticks) */}
          <svg
            viewBox={`0 0 ${canvasSize} ${canvasSize}`}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          >
            {items.map((_, idx) => {
              const angleDeg = (360 / totalAtoms) * idx - 90;
              const angleRad = (angleDeg * Math.PI) / 180;
              const tipX = centerPos + bondLength * Math.cos(angleRad);
              const tipY = centerPos + bondLength * Math.sin(angleRad);

              return (
                <g key={idx}>
                  {/* Thick Outer Chemical Rod */}
                  <line
                    x1={centerPos}
                    y1={centerPos}
                    x2={tipX}
                    y2={tipY}
                    stroke={cat.color}
                    strokeWidth="3.5"
                    strokeOpacity="0.65"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  {/* Inner Glowing Core Specular Line */}
                  <line
                    x1={centerPos}
                    y1={centerPos}
                    x2={tipX}
                    y2={tipY}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                    strokeLinecap="round"
                  />
                </g>
              );
            })}
          </svg>

          {/* ATTACHED ATOMIC SPHERES (Positioned at Stick Ends with Counter-Rotation to keep text upright) */}
          {items.map((item, idx) => {
            const angleDeg = (360 / totalAtoms) * idx - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const tipX = centerPos + bondLength * Math.cos(angleRad);
            const tipY = centerPos + bondLength * Math.sin(angleRad);

            return (
              <div
                key={item.name}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${tipX}px`,
                  top: `${tipY}px`,
                }}
              >
                {/* Counter-rotating container so text stays 100% upright while atomic ball orbits */}
                <div className={counterAnimationClass}>
                  <motion.div
                    whileHover={{ scale: 1.3, zIndex: 30 }}
                    transition={{ duration: 0.2 }}
                    className="w-14 h-14 rounded-full flex flex-col items-center justify-center text-center p-1 cursor-pointer transition-all shadow-2xl"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, ${cat.color} 0%, rgba(15, 23, 42, 0.95) 80%, #030407 100%)`,
                      border: `2.5px solid ${cat.color}`,
                      color: "#ffffff",
                      boxShadow: `0 6px 18px rgba(0,0,0,0.6), 0 0 18px ${cat.color}50, inset 0 0 8px rgba(255,255,255,0.4)`,
                    }}
                  >
                    <span className="text-[10px] font-black text-white leading-tight font-sans text-center drop-shadow px-0.5 select-none">
                      {item.name}
                    </span>
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
      className="!pt-6 !pb-16"
    >
      {/* CSS Keyframes for Kinetic Molecule Rotations */}
      <style jsx global>{`
        @keyframes mole-spin-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes mole-spin-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes mole-counter-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes mole-counter-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-mole-cw {
          animation: mole-spin-cw 28s linear infinite;
        }
        .animate-mole-ccw {
          animation: mole-spin-ccw 28s linear infinite;
        }
        .animate-mole-counter-cw {
          animation: mole-counter-cw 28s linear infinite;
        }
        .animate-mole-counter-ccw {
          animation: mole-counter-ccw 28s linear infinite;
        }

        /* Hovering over any molecule cluster pauses its orbital rotation */
        .group:hover .animate-mole-cw,
        .group:hover .animate-mole-ccw,
        .group:hover .animate-mole-counter-cw,
        .group:hover .animate-mole-counter-ccw {
          animation-play-state: paused;
        }
      `}</style>

      {/* Grid of 6 Kinetic Molecular Chemistry Structures */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2">
        {categories.map((catKey) => (
          <MolecularStructure key={catKey} catKey={catKey} />
        ))}
      </div>
    </SectionWrapper>
  );
}
