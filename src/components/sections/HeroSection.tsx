"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ExternalLink, FileText, Rocket, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { personalInfo, heroRoles } from "@/data/portfolio";
import ParticleField from "@/components/three/ParticleField";

function RoleRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.3em] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroRoles[currentIndex]}
          initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="block gradient-text"
        >
          {heroRoles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function EngineeringCore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 400;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;

    const nodes: { angle: number; radius: number; speed: number; label: string; size: number }[] = [
      { angle: 0, radius: 80, speed: 0.008, label: "React", size: 6 },
      { angle: Math.PI / 3, radius: 100, speed: -0.006, label: "Next.js", size: 5 },
      { angle: (2 * Math.PI) / 3, radius: 120, speed: 0.005, label: "Node.js", size: 6 },
      { angle: Math.PI, radius: 90, speed: -0.007, label: "Python", size: 5 },
      { angle: (4 * Math.PI) / 3, radius: 110, speed: 0.004, label: "AI", size: 7 },
      { angle: (5 * Math.PI) / 3, radius: 95, speed: -0.009, label: "Cloud", size: 4 },
      { angle: Math.PI / 6, radius: 130, speed: 0.003, label: "APIs", size: 4 },
      { angle: (7 * Math.PI) / 6, radius: 70, speed: -0.005, label: "DB", size: 5 },
    ];

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouse);

    const draw = () => {
      timeRef.current += 1;
      const t = timeRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, size, size);

      // Outer rings
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, 50 + i * 30, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(129, 140, 248, ${0.05 + i * 0.02})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Center glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
      gradient.addColorStop(0, `rgba(129, 140, 248, ${0.15 + Math.sin(t * 0.02) * 0.05})`);
      gradient.addColorStop(0.5, "rgba(129, 140, 248, 0.05)");
      gradient.addColorStop(1, "rgba(129, 140, 248, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, 60, 0, Math.PI * 2);
      ctx.fill();

      // Center core
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
      coreGrad.addColorStop(0, "rgba(167, 139, 250, 0.8)");
      coreGrad.addColorStop(1, "rgba(99, 102, 241, 0.3)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 12 + Math.sin(t * 0.03) * 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw nodes and connections
      const nodePositions: { x: number; y: number }[] = [];

      for (const node of nodes) {
        node.angle += node.speed;
        const mouseInfluence = ((mx - 0.5) * 10);
        const mouseInfluenceY = ((my - 0.5) * 10);
        const nx = cx + Math.cos(node.angle) * node.radius + mouseInfluence;
        const ny = cy + Math.sin(node.angle) * node.radius + mouseInfluenceY;
        nodePositions.push({ x: nx, y: ny });

        // Connection line to center
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = `rgba(129, 140, 248, 0.12)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Node glow
        const nodeGlow = ctx.createRadialGradient(nx, ny, 0, nx, ny, node.size * 3);
        nodeGlow.addColorStop(0, "rgba(129, 140, 248, 0.3)");
        nodeGlow.addColorStop(1, "rgba(129, 140, 248, 0)");
        ctx.fillStyle = nodeGlow;
        ctx.beginPath();
        ctx.arc(nx, ny, node.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Node dot
        ctx.fillStyle = "rgba(167, 139, 250, 0.9)";
        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Node label
        ctx.fillStyle = "rgba(160, 160, 184, 0.7)";
        ctx.font = "9px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(node.label, nx, ny + node.size + 14);
      }

      // Inter-node connections
      for (let i = 0; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          const dx = nodePositions[i].x - nodePositions[j].x;
          const dy = nodePositions[i].y - nodePositions[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodePositions[i].x, nodePositions[i].y);
            ctx.lineTo(nodePositions[j].x, nodePositions[j].y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="cursor-crosshair"
        style={{ width: 400, height: 400 }}
        aria-label="Interactive engineering core visualization showing technology nodes orbiting a central core"
      />
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

function CinematicVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false); // Default UNMUTED as requested

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;

    video.play().catch(() => {
      // If browser security policy blocks unmuted audio on cold reload:
      // Start video playback muted, and unmute audio automatically on the first user click/tap!
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => {});

      const unmuteOnFirstClick = () => {
        if (videoRef.current) {
          videoRef.current.muted = false;
          setIsMuted(false);
        }
      };

      window.addEventListener("click", unmuteOnFirstClick, { once: true });
      window.addEventListener("touchstart", unmuteOnFirstClick, { once: true });
    });
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div
      className="relative w-full max-w-[480px] aspect-[4/5] sm:aspect-square mx-auto rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-indigo-500/20"
      style={{
        background: "var(--color-bg-card)",
        border: "1px solid rgba(129, 140, 248, 0.25)",
      }}
    >
      {/* Continuous Smooth Video Playback — Zero Mouse Interference */}
      <video
        ref={videoRef}
        src="/Landing_Video.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover rounded-3xl pointer-events-none select-none"
        style={{
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Floating Mute / Unmute Button on Bottom Right */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-all duration-200"
          aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {isMuted ? (
            <>
              <VolumeX size={16} className="text-rose-400" />
              <span>Unmute Sound</span>
            </>
          ) : (
            <>
              <Volume2 size={16} className="text-emerald-400 animate-pulse" />
              <span>Mute Sound</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "6rem" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <ParticleField />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(167,139,250,0.06) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to top, var(--color-bg-primary), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "var(--color-accent-glow)",
                border: "1px solid rgba(129,140,248,0.15)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-glow" />
              <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                Open to opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                <span className="text-[var(--color-text-muted)] text-lg sm:text-xl font-normal block mb-3">
                  Hi, I&apos;m
                </span>
                <span className="text-[var(--color-text-primary)]">
                  {personalInfo.name}
                </span>
                <span className="text-[var(--color-accent-primary)]">.</span>
              </h1>
            </motion.div>

            {/* Role rotator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
            >
              <RoleRotator />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-base sm:text-lg max-w-lg leading-relaxed mb-10"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToWork}
                className="btn btn-primary group"
                id="hero-explore-btn"
              >
                <Rocket size={18} />
                Explore My Work
                <ExternalLink
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1"
                />
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="hero-resume-btn"
              >
                <FileText size={18} />
                View Resume
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-8 mt-12 pt-8"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              {[
                { value: "9.1", label: "CGPA (B.E. CSE)" },
                { value: "IIT Mandi", label: "AI Minor Degree" },
                { value: "Full Stack", label: "Developer Intern (Krytil)" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center w-full"
          >
            <CinematicVideoPlayer />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-[var(--color-text-muted)]">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-[var(--color-text-muted)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
