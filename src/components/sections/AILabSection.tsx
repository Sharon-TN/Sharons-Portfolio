"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Zap, Cpu, FlaskConical, ArrowRight } from "lucide-react";
import { aiLabProjects } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

function NeuralNetworkViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 300;
    const h = 200;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(dpr, dpr);

    const layers = [3, 5, 4, 2];
    const nodePositions: { x: number; y: number }[][] = [];

    layers.forEach((count, layerIdx) => {
      const x = 40 + (layerIdx / (layers.length - 1)) * (w - 80);
      const nodes: { x: number; y: number }[] = [];
      for (let i = 0; i < count; i++) {
        const y = (h / (count + 1)) * (i + 1);
        nodes.push({ x, y });
      }
      nodePositions.push(nodes);
    });

    let frame = 0;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let l = 0; l < nodePositions.length - 1; l++) {
        for (const n1 of nodePositions[l]) {
          for (const n2 of nodePositions[l + 1]) {
            const pulse = Math.sin(frame * 0.03 + n1.y * 0.05 + l) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.06 + pulse * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let l = 0; l < nodePositions.length; l++) {
        for (const node of nodePositions[l]) {
          const pulse = Math.sin(frame * 0.04 + node.y * 0.1) * 0.5 + 0.5;
          // Glow
          const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 12);
          glow.addColorStop(0, `rgba(139, 92, 246, ${0.2 + pulse * 0.15})`);
          glow.addColorStop(1, "rgba(139, 92, 246, 0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
          ctx.fill();
          // Core
          ctx.fillStyle = `rgba(167, 139, 250, ${0.6 + pulse * 0.3})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3 + pulse, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    };

    const id = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto opacity-70"
      style={{ width: 300, height: 200 }}
      aria-hidden="true"
    />
  );
}

const categoryIcons: Record<string, React.ReactNode> = {
  "LLM Applications": <Zap size={18} />,
  "Generative AI": <Sparkles size={18} />,
  "Machine Learning": <Cpu size={18} />,
  "AI Integration": <Brain size={18} />,
};

export default function AILabSection() {
  return (
    <SectionWrapper
      id="ai-lab"
      label="AI Lab"
      title="Exploring the frontiers of AI"
      subtitle="As an aspiring AI engineer, I experiment with language models, generative AI, and machine learning."
    >
      {/* Neural network viz */}
      <div className="mt-8 mb-12 flex justify-center">
        <div
          className="p-6 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.05), rgba(99,102,241,0.03))",
            border: "1px solid rgba(139,92,246,0.1)",
          }}
        >
          <NeuralNetworkViz />
          <p className="text-center text-xs font-mono text-[var(--color-text-muted)] mt-3">
            Neural Network Visualization
          </p>
        </div>
      </div>

      {/* Lab Status */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl mb-8 max-w-fit"
        style={{
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(139,92,246,0.15)",
        }}
      >
        <FlaskConical size={16} className="text-purple-400" />
        <span className="text-sm text-[var(--color-text-secondary)]">
          <span className="font-semibold text-purple-400">Aspiring AI Engineer</span> — Actively exploring & building
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {aiLabProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group p-5 rounded-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.3)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(139,92,246,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Category & Status */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-purple-400">
                {categoryIcons[project.category] || <Brain size={18} />}
                <span className="text-xs font-mono">{project.category}</span>
              </div>
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: project.status === "Completed" ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)",
                  color: project.status === "Completed" ? "#10b981" : "#f59e0b",
                }}
              >
                {project.status}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-xs font-medium"
                  style={{ background: "rgba(139,92,246,0.08)", color: "rgb(167,139,250)" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* View more */}
            <div className="flex items-center gap-1 text-xs font-medium text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
              View details <ArrowRight size={12} />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
