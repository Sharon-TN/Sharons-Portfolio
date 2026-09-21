"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  label,
  title,
  subtitle,
  centered = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding relative overflow-hidden ${className}`}
    >
      {/* Multi-Color Ambient Lighting & Grid Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(244,63,94,0.5) 0%, rgba(168,85,247,0.3) 60%, transparent 80%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(99,102,241,0.3) 60%, transparent 80%)",
          }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(244,63,94,0.2) 60%, transparent 80%)",
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="section-container relative z-10">
        {(label || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={centered ? "flex flex-col items-center text-center mb-10 max-w-3xl mx-auto" : "mb-6"}
          >
            {label && (
              <div className={`section-label ${centered ? "justify-center" : ""}`}>{label}</div>
            )}
            {title && (
              <h2 className={`section-title text-[var(--color-text-primary)] ${centered ? "text-center" : ""}`}>{title}</h2>
            )}
            {subtitle && (
              <p className={`section-subtitle ${centered ? "text-center mx-auto" : ""}`}>{subtitle}</p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={centered ? "w-full flex justify-center" : ""}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
