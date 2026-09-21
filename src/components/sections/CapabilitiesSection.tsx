"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Brain,
  Cloud,
  Palette,
  Terminal,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface CapabilityItem {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  secondaryColor: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  features: string[];
  systemType: string;
}

const capabilityData: CapabilityItem[] = [
  {
    id: "fullstack",
    code: "SYS-01",
    title: "Full Stack Applications",
    tagline: "End-to-end scalable web architectures & high-throughput APIs",
    description:
      "Architecting enterprise-grade platforms uniting responsive client interfaces with resilient microservices, role-based JWT auth, and optimized database pipelines.",
    icon: <Layers size={22} />,
    accentColor: "#6366f1",
    secondaryColor: "#06b6d4",
    systemType: "Distributed REST & Async Backend",
    metrics: [
      { label: "API Latency", value: "< 45ms" },
      { label: "Auth Flow", value: "JWT + RBAC" },
      { label: "Database", value: "MongoDB Atlas" },
    ],
    technologies: ["React.js", "FastAPI", "Python", "Node.js", "Express", "MongoDB"],
    features: [
      "RESTful endpoint design & Swagger documentation",
      "Async request processing & connection pooling",
      "Role-based access control & token refresh cycles",
      "Scalable schema design with compound indexing",
    ],
  },
  {
    id: "ai",
    code: "SYS-02",
    title: "Artificial Intelligence & ML",
    tagline: "Generative AI integrations, LLM workflows & risk simulations",
    description:
      "Engineering predictive models and intelligent agentic workflows using Gemini AI, Monte Carlo forecasting algorithms, and custom neural pipeline orchestrations.",
    icon: <Brain size={22} />,
    accentColor: "#8b5cf6",
    secondaryColor: "#ec4899",
    systemType: "Generative AI & Stochastic Modeling",
    metrics: [
      { label: "Inference", value: "Streaming" },
      { label: "Engine", value: "Gemini + NumPy" },
      { label: "Simulation", value: "Monte Carlo" },
    ],
    technologies: ["Python", "Gemini AI", "Machine Learning", "Deep Learning", "NumPy", "FastAPI"],
    features: [
      "Prompt engineering & multimodal reasoning workflows",
      "Monte Carlo water crisis & resource risk modeling",
      "Live predictive analytics integrated with external APIs",
      "IIT Mandi AI Specialization foundations",
    ],
  },
  {
    id: "cloud",
    code: "SYS-03",
    title: "Cloud Infrastructure & DevOps",
    tagline: "Automated CI/CD, containerization & edge deployment workflows",
    description:
      "Deploying high-availability digital products on Google Cloud Platform, AWS, and Vercel edge networks with automated git workflows and zero-downtime rollouts.",
    icon: <Cloud size={22} />,
    accentColor: "#10b981",
    secondaryColor: "#14b8a6",
    systemType: "Edge Cloud & Continuous Deployment",
    metrics: [
      { label: "Uptime", value: "99.98%" },
      { label: "Deploy Time", value: "< 90s" },
      { label: "Cloud Jam", value: "Google Winner" },
    ],
    technologies: ["Google Cloud", "AWS", "Git", "GitHub Actions", "Vercel", "Docker"],
    features: [
      "Automated git push-to-production Vercel deployments",
      "Google Cloud Platform & Study Jam certified workflows",
      "Environment variable isolation & secrets management",
      "Global CDN caching & asset optimization",
    ],
  },
  {
    id: "frontend",
    code: "SYS-04",
    title: "Interactive Web & 3D Visuals",
    tagline: "Modern kinetic animations, 3D Canvas visualizers & sleek UX",
    description:
      "Crafting memorable digital environments with WebGL, Three.js shaders, kinetic molecular chemistry visualizers, and physics-driven micro-interactions.",
    icon: <Palette size={22} />,
    accentColor: "#f59e0b",
    secondaryColor: "#f97316",
    systemType: "60 FPS WebGL & Kinetic UI",
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Shaders", value: "Hardware Accel" },
      { label: "Design", value: "Cyber Glass" },
    ],
    technologies: ["Three.js", "HTML5 Canvas", "Framer Motion", "Tailwind CSS", "React.js"],
    features: [
      "Custom 2D/3D orbital physics & particle fields",
      "Glassmorphic cybernetic layouts with backdrop blur",
      "Accessible motion curves with reduced-motion fallbacks",
      "Fluid responsive typography and dynamic color tokens",
    ],
  },
];

// Interactive Micro-Component 1: Full-Stack Packet Flow
function FullstackVisualizer() {
  return (
    <div className="w-full py-2.5 px-3 rounded-xl bg-black/40 border border-indigo-500/20 font-mono text-[11px] overflow-hidden">
      <div className="flex items-center justify-between text-indigo-300 font-semibold mb-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          PIPELINE STREAM
        </span>
        <span className="text-white/50 text-[10px]">AVG 38ms</span>
      </div>

      <div className="relative flex items-center justify-between gap-1 sm:gap-2 my-2">
        <div className="px-2 py-1.5 rounded-lg bg-indigo-950/70 border border-indigo-500/40 text-indigo-200 text-center flex-1">
          <div className="text-[10px] text-indigo-400">CLIENT</div>
          <div className="font-bold text-[11px]">React SPA</div>
        </div>

        {/* Animated Flow Line */}
        <div className="relative flex-1 h-0.5 bg-indigo-500/30 overflow-hidden">
          <motion.div
            className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="px-2 py-1.5 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-200 text-center flex-1">
          <div className="text-[10px] text-cyan-400">SERVER</div>
          <div className="font-bold text-[11px]">FastAPI</div>
        </div>

        {/* Animated Flow Line */}
        <div className="relative flex-1 h-0.5 bg-cyan-500/30 overflow-hidden">
          <motion.div
            className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: 0.8 }}
          />
        </div>

        <div className="px-2 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-center flex-1">
          <div className="text-[10px] text-emerald-400">CLUSTER</div>
          <div className="font-bold text-[11px]">MongoDB</div>
        </div>
      </div>
    </div>
  );
}

// Interactive Micro-Component 2: Neural Synapse Matrix
function AINeuralVisualizer() {
  return (
    <div className="w-full py-2.5 px-3 rounded-xl bg-black/40 border border-purple-500/20 font-mono text-[11px] overflow-hidden">
      <div className="flex items-center justify-between text-purple-300 font-semibold mb-1.5">
        <span className="flex items-center gap-1.5">
          <Sparkles size={12} className="text-pink-400 animate-spin" style={{ animationDuration: "6s" }} />
          INFERENCE ENGINE
        </span>
        <span className="text-emerald-400 text-[10px]">TENSOR CONVERGED</span>
      </div>

      <div className="space-y-1 my-1">
        <div className="flex justify-between items-center text-[10px] text-white/70">
          <span>PROMPT</span>
          <span className="text-purple-300 truncate max-w-[170px]">&quot;Water risk forecast&quot;</span>
        </div>
        <div className="w-full h-1.5 bg-purple-950 rounded-full overflow-hidden border border-purple-500/30">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
            animate={{ width: ["15%", "95%", "85%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] text-white/50 pt-0.5">
          <span>Stochastic Engine: Monte Carlo</span>
          <span className="text-pink-400">99.4% conf</span>
        </div>
      </div>
    </div>
  );
}

// Interactive Micro-Component 3: Cloud DevOps Pipeline Terminal
function CloudTerminalVisualizer() {
  return (
    <div className="w-full py-2.5 px-3 rounded-xl bg-black/40 border border-emerald-500/20 font-mono text-[11px] overflow-hidden">
      <div className="flex items-center justify-between text-emerald-300 font-semibold mb-1.5">
        <span className="flex items-center gap-1.5">
          <Terminal size={12} className="text-teal-400" />
          CI/CD RUNNER
        </span>
        <span className="text-emerald-400 text-[10px]">✓ PASSING</span>
      </div>

      <div className="bg-black/60 rounded-lg p-2 border border-emerald-500/20 space-y-1 text-[10px] text-white/80">
        <div className="flex items-center gap-1.5 text-emerald-300">
          <CheckCircle2 size={11} className="text-emerald-400 flex-shrink-0" />
          <span>git push origin main → auto build</span>
        </div>
        <div className="flex items-center gap-1.5 text-cyan-300">
          <CheckCircle2 size={11} className="text-cyan-400 flex-shrink-0" />
          <span>Vercel edge bundle optimized (200 OK)</span>
        </div>
        <div className="flex items-center gap-1.5 text-teal-300">
          <CheckCircle2 size={11} className="text-teal-400 flex-shrink-0" />
          <span>Google Cloud study jam verified</span>
        </div>
      </div>
    </div>
  );
}

// Interactive Micro-Component 4: Interactive Canvas Orb
function InteractiveCanvasVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const w = 260;
    const h = 60;
    canvas.width = w;
    canvas.height = h;

    const render = () => {
      t += 0.03;
      ctx.clearRect(0, 0, w, h);

      // Draw kinetic wave lines
      ctx.beginPath();
      for (let x = 0; x < w; x += 3) {
        const y = h / 2 + Math.sin(x * 0.05 + t) * 12 + Math.cos(x * 0.02 - t) * 6;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(245, 158, 11, 0.7)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Particle dots
      for (let i = 0; i < 5; i++) {
        const px = ((t * 40 + i * 55) % (w + 20)) - 10;
        const py = h / 2 + Math.sin(px * 0.05 + t) * 12 + Math.cos(px * 0.02 - t) * 6;
        ctx.fillStyle = i % 2 === 0 ? "#f97316" : "#fbbf24";
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="w-full py-2 px-3 rounded-xl bg-black/40 border border-amber-500/20 font-mono text-[11px] overflow-hidden">
      <div className="flex items-center justify-between text-amber-300 font-semibold mb-1">
        <span className="flex items-center gap-1.5">
          <Zap size={12} className="text-amber-400" />
          KINETIC RENDER
        </span>
        <span className="text-amber-400 text-[10px]">60 FPS WEBGL</span>
      </div>
      <div className="flex justify-center items-center h-[52px]">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
}

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<string>("fullstack");

  const visualizers: Record<string, React.ReactNode> = {
    fullstack: <FullstackVisualizer />,
    ai: <AINeuralVisualizer />,
    cloud: <CloudTerminalVisualizer />,
    frontend: <InteractiveCanvasVisualizer />,
  };

  return (
    <SectionWrapper
      id="capabilities"
      label="Core Capabilities"
      title="Engineering Systems & Architecture"
      subtitle="A multi-disciplinary stack engineered for scalable products, real-time AI solutions, and fluid user experiences."
      centered
    >
      {/* Interactive Domain Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 mt-2">
        {capabilityData.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 cursor-pointer"
              style={{
                background: isActive
                  ? `linear-gradient(135deg, ${item.accentColor}25, ${item.secondaryColor}15)`
                  : "var(--color-bg-card)",
                border: isActive
                  ? `1.5px solid ${item.accentColor}`
                  : "1px solid var(--color-border)",
                color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                boxShadow: isActive ? `0 0 20px ${item.accentColor}30` : "none",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: item.accentColor,
                  boxShadow: isActive ? `0 0 8px ${item.accentColor}` : "none",
                }}
              />
              {item.title}
            </button>
          );
        })}
      </div>

      {/* Extraordinary 4-Module Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
        {capabilityData.map((item, idx) => {
          const isSelected = activeTab === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => setActiveTab(item.id)}
              className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden"
              style={{
                background: "var(--color-bg-card)",
                border: isSelected
                  ? `2px solid ${item.accentColor}`
                  : "1px solid var(--color-border)",
                boxShadow: isSelected
                  ? `0 12px 36px rgba(0, 0, 0, 0.25), 0 0 30px ${item.accentColor}20`
                  : "var(--shadow-sm)",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.accentColor}60`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px rgba(0,0,0,0.1), 0 0 25px ${item.accentColor}15`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                }
              }}
            >
              {/* Top Accent Gradient Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, ${item.accentColor}, ${item.secondaryColor})`,
                  opacity: isSelected ? 1 : 0.4,
                }}
              />

              {/* Ambient Radial Hover Glow */}
              <div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${item.accentColor}25 0%, transparent 70%)`,
                  opacity: isSelected ? 0.8 : 0.2,
                }}
              />

              <div>
                {/* Header Row: System Code + Icon Badge + System Type */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${item.accentColor}25, ${item.secondaryColor}15)`,
                        border: `1.5px solid ${item.accentColor}40`,
                        color: item.accentColor,
                        boxShadow: `0 0 16px ${item.accentColor}20`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-[var(--color-text-muted)] block">
                        {item.code}
                      </span>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5"
                        style={{
                          background: `${item.accentColor}15`,
                          color: item.accentColor,
                          border: `1px solid ${item.accentColor}30`,
                        }}
                      >
                        {item.systemType}
                      </span>
                    </div>
                  </div>

                  {/* Active Beacon */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/80">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: item.accentColor }}
                    />
                    ONLINE
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-extrabold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-[var(--color-accent-primary)] mb-3">
                  {item.tagline}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Extraordinary Micro-Visualizer Widget */}
                <div className="mb-6">{visualizers[item.id]}</div>

                {/* Key Architecture Features */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase font-bold text-[var(--color-text-muted)] tracking-wider">
                    Core Architectural Highlights
                  </div>
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                      <ArrowRight size={13} className="text-[var(--color-accent-primary)] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Metrics & Tech Cloud */}
              <div className="pt-4 border-t border-[var(--color-border)]">
                {/* Real-world Performance Metrics */}
                <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] mb-4">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-[10px] text-[var(--color-text-muted)] font-mono">{metric.label}</div>
                      <div className="text-xs font-extrabold font-mono text-[var(--color-text-primary)] mt-0.5">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg transition-colors"
                      style={{
                        background: `${item.accentColor}10`,
                        border: `1px solid ${item.accentColor}25`,
                        color: item.accentColor,
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
