"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AILabSection from "@/components/sections/AILabSection";
import ProcessSection from "@/components/sections/ProcessSection";
import EducationSection from "@/components/sections/EducationSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

export default function PortfolioClient() {
  return (
    <ThemeProvider>
      {/* Noise texture overlay */}
      <div className="noise" />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <SkillsSection />
        <ProcessSection />
        <ExperienceSection />
        <AILabSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}
