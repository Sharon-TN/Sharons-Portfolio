"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden"
      style={{ padding: "4rem 0" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.04), rgba(167,139,250,0.02), transparent)",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.1))",
              border: "1px solid rgba(99,102,241,0.15)",
            }}
          >
            <FileText size={28} className="text-[var(--color-accent-primary)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Want the full story?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
            My resume has the complete picture — education, skills, projects, experience, and everything in between.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base px-8 py-3.5"
              id="resume-view-btn"
            >
              <Eye size={20} />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
