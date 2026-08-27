"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight, Star, Image as ImageIcon, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, type Project } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

const categories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "AI" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryColors: Record<string, string> = {
    fullstack: "#6366f1",
    ai: "#8b5cf6",
    frontend: "#ec4899",
    backend: "#10b981",
  };

  const color = categoryColors[project.category] || "#6366f1";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between"
      style={{
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${color}10`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Content */}
      <div className="p-6 sm:p-7">
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
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-accent-primary)] transition-colors"
              aria-label={`View ${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={15} />
            </a>
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
        <div className="flex flex-wrap gap-1.5 mb-5">
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

        {/* Expand button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent-primary)] hover:gap-2.5 transition-all duration-200"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show less" : "View architecture & details"}
          <ChevronRight
            size={14}
            className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
          />
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5" style={{ borderTop: "1px solid var(--color-border)" }}>
                {/* Problem */}
                <div className="mb-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
                    The Problem
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{project.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
                    The Solution
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{project.solution}</p>
                </div>

                {/* Architecture */}
                {project.architecture && (
                  <div className="mb-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                      System Architecture
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.architecture.map((layer, i) => (
                        <div key={layer} className="flex items-center gap-2">
                          <span
                            className="px-3 py-1 rounded-lg text-xs font-mono"
                            style={{
                              background: `${color}10`,
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

                {/* Bottom Action Links */}
                <div className="flex gap-3 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary !py-2 !px-4 !text-xs"
                  >
                    <GithubIcon size={14} />
                    Source Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary !py-2 !px-4 !text-xs"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SectionWrapper
      id="projects"
      label="Selected Builds"
      title="Projects that solve real problems"
      subtitle="Each project represents a unique challenge, a thoughtful solution, and technologies I love working with."
    >
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mt-10 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === cat.id ? "" : "hover:bg-[var(--color-bg-tertiary)]"
            }`}
            style={
              filter === cat.id
                ? {
                    background: "var(--color-accent-glow)",
                    color: "var(--color-accent-primary)",
                    border: "1px solid rgba(129,140,248,0.2)",
                  }
                : {
                    background: "transparent",
                    color: "var(--color-text-secondary)",
                    border: "1px solid var(--color-border)",
                  }
            }
            aria-pressed={filter === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No results */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-[var(--color-text-muted)]">
          <p>No projects in this category yet.</p>
        </div>
      )}
    </SectionWrapper>
  );
}
