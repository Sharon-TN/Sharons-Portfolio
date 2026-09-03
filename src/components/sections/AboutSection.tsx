"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const bioParagraphs = [
  "Final-year Computer Science Engineering student at Atria Institute of Technology (9.1 CGPA) with practical experience in full-stack application development, artificial intelligence, machine learning, and cloud computing.",
  "Pursuing a Minor Degree in Artificial Intelligence from IIT Mandi, focusing on neural networks, deep learning foundations, and modern generative AI architectures.",
  "Demonstrated ability to develop scalable software solutions, lead collaborative engineering teams (Full Stack Intern at Krytil and Web Developer Intern at Coincent), and solve real-world problems through innovative technology.",
];

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      label="About Me"
      title="Who is Sharon?"
      className="!pt-4 sm:!pt-6 !pb-12 sm:!pb-16 -mt-2 sm:-mt-4"
    >
      <div className="space-y-4 mt-2 max-w-4xl">
        {bioParagraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </SectionWrapper>
  );
}
