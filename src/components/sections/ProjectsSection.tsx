"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Star, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, type Project } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const categoryColors: Record<string, string> = {
    fullstack: "#6366f1",
    ai: "#8b5cf6",
    frontend: "#ec4899",
    backend: "#10b981",
  };

  const color = categoryColors[project.category] || "#6366f1";
  const isInternalDemo = project.liveUrl.startsWith("/");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-none overflow-hidden transition-all duration-500 flex flex-col justify-between h-full shadow-sm"
      style={{
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "0px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${color}45`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 35px rgba(0,0,0,0.12), 0 0 30px ${color}15`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="p-6 sm:p-7 flex flex-col h-full justify-between">
        {/* Top Content: Badges, Title, Tagline, Description, Tech Stack */}
        <div>
          {/* Top Badges & Actions */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              {project.featured && (
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                >
                  <Star size={12} />
                  Featured
                </span>
              )}
              <span
                className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider"
                style={{ background: "var(--color-bg-tertiary)", color: "var(--color-text-secondary)" }}
              >
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-accent-secondary)] transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon size={15} />
              </a>
              {isInternalDemo ? (
                <Link
                  href={project.liveUrl}
                  className="w-8 h-8 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-accent-primary)] transition-colors"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={15} />
                </Link>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-accent-primary)] transition-colors"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent-primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--color-accent-primary)] mb-3 font-medium">
            {project.tagline}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono"
                style={{
                  background: "var(--color-bg-tertiary)",
                  color: "var(--color-text-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Permanent Detailed View */}
          <div className="pt-5" style={{ borderTop: "1px solid var(--color-border)" }}>
            {/* Problem */}
            <div className="mb-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
                The Problem
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="mb-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
                The Solution
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{project.solution}</p>
            </div>

            {/* Architecture */}
            {project.architecture && (
              <div className="mb-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                  System Architecture
                </h4>
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.architecture.map((layer, i) => (
                    <div key={layer} className="flex items-center gap-1.5">
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-mono"
                        style={{
                          background: `${color}12`,
                          color,
                          border: `1px solid ${color}25`,
                        }}
                      >
                        {layer}
                      </span>
                      {i < project.architecture!.length - 1 && (
                        <ArrowRight size={12} className="text-[var(--color-text-muted)]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Action Links */}
        <div className="flex flex-wrap gap-3 mt-6 pt-5" style={{ borderTop: "1px solid var(--color-border)" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary !py-2.5 !px-4 !text-xs inline-flex items-center gap-2"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          {isInternalDemo ? (
            <Link
              href={project.liveUrl}
              className="btn btn-primary !py-2.5 !px-4 !text-xs inline-flex items-center gap-2"
            >
              <ExternalLink size={14} />
              Live Demo
            </Link>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !py-2.5 !px-4 !text-xs inline-flex items-center gap-2"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      label="Selected Builds"
      title="Projects that solve real problems"
      subtitle="Each project represents a unique challenge, a thoughtful solution, and technologies I love working with."
    >
      {/* Projects Grid with All Details Permanently Visible */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 items-stretch">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
