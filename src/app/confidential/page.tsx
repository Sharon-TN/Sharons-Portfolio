import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, ArrowLeft, ExternalLink, Lock, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

export const metadata: Metadata = {
  title: "Project Confidential Notice — Krytil Jobs",
  description:
    "This Project is Confidential as it is a company project, hence the Live Demo is Unavailable.",
};

export default function ConfidentialPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(239,68,68,0.4) 0%, rgba(245,158,11,0.2) 60%, transparent 80%)",
          }}
        />
        <div
          className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.2) 60%, transparent 80%)",
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 w-full border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <span className="text-xs font-mono font-semibold text-[var(--color-text-muted)] tracking-wider uppercase">
            Sharon T N • Portfolio
          </span>
        </div>
      </header>

      {/* Main Notice Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="w-full max-w-2xl mx-auto">
          {/* Main Card */}
          <div
            className="rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-center"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Top Security Glow Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{
                background: "linear-gradient(90deg, #f59e0b, #ef4444, #6366f1)",
              }}
            />

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-inner relative group"
              style={{
                background: "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(245,158,11,0.08))",
                border: "1px solid rgba(239,68,68,0.3)",
              }}
            >
              <ShieldAlert size={38} className="text-amber-500 animate-pulse" />
              <div
                className="absolute -bottom-1 -right-1 w-7 h-7 rounded-lg bg-[var(--color-bg-card)] border border-amber-500/40 flex items-center justify-center text-amber-500 shadow-sm"
              >
                <Lock size={14} />
              </div>
            </div>

            {/* Confidential Badge */}
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-amber-500 bg-amber-500/10 border border-amber-500/25">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                Confidential Project Notice
              </span>
            </div>

            {/* Project Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)] mb-3 tracking-tight">
              Krytil Jobs Web Application
            </h1>

            {/* Required Message Banner */}
            <div
              className="rounded-2xl p-5 my-6 text-left sm:text-center"
              style={{
                background: "rgba(245, 158, 11, 0.08)",
                border: "1px solid rgba(245, 158, 11, 0.25)",
              }}
            >
              <p className="text-base sm:text-lg font-bold text-amber-500 leading-relaxed">
                This Project is Confidential as it is a company project, hence the Live Demo is Unavailable.
              </p>
            </div>

            {/* Context & Explanation */}
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 text-left sm:text-center">
              This recruitment platform was architected and built during my tenure as Full Stack Developer Intern at{" "}
              <strong className="text-[var(--color-text-primary)]">Krytil</strong>. In accordance with enterprise non-disclosure agreements,
              proprietary workflow confidentiality, and internal data security policies, public production deployment access is restricted.
            </p>

            {/* Technical Highlights */}
            <div
              className="rounded-2xl p-5 mb-8 text-left"
              style={{
                background: "var(--color-bg-tertiary)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                Key Engineering Highlights
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Led a team of five developers to engineer the full-stack recruitment architecture.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Built performant RESTful backend APIs using FastAPI and Python.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Integrated secure role-based JWT authentication and recruiter workflows with MongoDB.</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="https://github.com/Sharon-TN/Krytil-Jobs-Final"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full sm:w-auto !py-3 !px-6 !text-sm justify-center"
              >
                <GithubIcon size={16} />
                <span>GitHub Repository</span>
                <ExternalLink size={14} className="opacity-70" />
              </a>

              <Link
                href="/#projects"
                className="btn btn-primary w-full sm:w-auto !py-3 !px-6 !text-sm justify-center"
              >
                <ArrowLeft size={16} />
                <span>Return to Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} Sharon T N • Confidentiality Notice
      </footer>
    </div>
  );
}
