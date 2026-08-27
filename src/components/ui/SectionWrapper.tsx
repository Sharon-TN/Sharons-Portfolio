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
      <div className={`section-container ${centered ? "text-center" : ""}`}>
        {(label || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={centered ? "flex flex-col items-center" : ""}
          >
            {label && (
              <div className="section-label">{label}</div>
            )}
            {title && (
              <h2 className="section-title">{title}</h2>
            )}
            {subtitle && (
              <p className="section-subtitle">{subtitle}</p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
