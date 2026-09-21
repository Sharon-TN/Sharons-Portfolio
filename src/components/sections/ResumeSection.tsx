"use client";

import { motion } from "framer-motion";
import { FileText, Eye, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden w-full flex flex-col items-center justify-center text-center py-16 sm:py-24"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.08) 0%, rgba(167,139,250,0.02) 60%, transparent 80%)",
        }}
      />

      <div className="section-container relative z-10 w-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center"
          style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
        >
          {/* Centered Icon */}
          <div className="w-full flex justify-center items-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.1))",
                border: "1px solid rgba(99,102,241,0.25)",
              }}
            >
              <FileText size={28} className="text-[var(--color-accent-primary)]" />
            </div>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-4 tracking-tight w-full"
            style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
          >
            Want the full story?
          </h2>

          <p
            className="text-sm sm:text-base text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto leading-relaxed w-full"
            style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
          >
            My resume has the complete picture — education, skills, projects, experience, and everything in between.
          </p>

          {/* Centered CTA Buttons */}
          <div className="w-full flex flex-wrap justify-center items-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base px-8 py-3.5 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/25 transition-all"
              id="resume-view-btn"
            >
              <Eye size={20} />
              View Resume
            </a>
            <a
              href="/T_N_Sharon_Resume.pdf"
              download="T_N_Sharon_Resume.pdf"
              className="btn bg-white/10 hover:bg-white/20 text-white border border-white/20 text-base px-8 py-3.5 inline-flex items-center justify-center gap-2 backdrop-blur-sm transition-all"
              id="resume-download-btn"
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
