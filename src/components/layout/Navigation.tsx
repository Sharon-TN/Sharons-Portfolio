"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/components/ThemeProvider";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <nav className="section-container">
          <div
            className={`flex items-center justify-between rounded-2xl px-6 py-3.5 transition-all duration-500 ${
              isScrolled
                ? "glass shadow-lg"
                : "glass"
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-3 group"
              aria-label="Go to home"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-base overflow-hidden shadow-md">
                <span className="relative z-10">S</span>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-bold text-lg text-[var(--color-text-primary)] hidden sm:block tracking-tight">
                Sharon&apos;s Portfolio
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-6">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="relative px-3 py-2 text-base font-semibold tracking-wide whitespace-nowrap transition-colors duration-300 hover:text-[var(--color-accent-primary)]"
                    style={{
                      color: isActive
                        ? "var(--color-accent-primary)"
                        : "var(--color-text-secondary)",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                        style={{ background: "var(--color-accent-primary)" }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[var(--color-accent-glow)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* CTA Button */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="hidden md:inline-flex btn btn-primary !py-2.5 !px-5 !text-sm"
              >
                Let&apos;s Talk
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: "var(--color-bg-primary)", opacity: 0.97 }}
            />

            {/* Close button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-xl flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center gap-2 px-8">
              {/* Decorative Elements */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
              </div>

              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className={`text-2xl font-semibold py-3 transition-colors duration-300 ${
                      isActive
                        ? "gradient-text"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    <span className="text-xs font-mono text-[var(--color-accent-primary)] mr-3">
                      0{i + 1}
                    </span>
                    {link.label}
                  </motion.a>
                );
              })}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="btn btn-primary mt-6"
              >
                Let&apos;s Talk
              </motion.a>

              {/* Bottom Info */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-10 text-xs font-mono text-[var(--color-text-muted)]"
              >
                © {new Date().getFullYear()} {personalInfo.name}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
