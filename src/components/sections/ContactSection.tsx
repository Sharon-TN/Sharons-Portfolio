"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, FileText, CheckCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/data/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10) newErrors.message = "Message too short (min 10 characters)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate form submission — replace with actual backend integration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 4000);
  };

  const socialLinks = [
    { icon: <Mail size={20} />, label: "Email", href: `mailto:${personalInfo.email}`, value: personalInfo.email },
    { icon: <GithubIcon size={20} />, label: "GitHub", href: personalInfo.github, value: "GitHub Profile" },
    { icon: <LinkedinIcon size={20} />, label: "LinkedIn", href: personalInfo.linkedin, value: "LinkedIn Profile" },
    { icon: <FileText size={20} />, label: "Resume", href: personalInfo.resumeUrl, value: "View Resume" },
  ];

  return (
    <SectionWrapper id="contact" label="Get In Touch">
      <div className="mt-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
          Let&apos;s Build Something{" "}
          <span className="gradient-text">Extraordinary.</span>
        </h2>
        <p className="text-[var(--color-text-secondary)] max-w-xl mb-12">
          Have an idea, opportunity, internship, freelance project, or role in mind? Let&apos;s talk.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-accent-primary)]"
                  style={{
                    background: "var(--color-bg-card)",
                    border: errors.name ? "1px solid #ef4444" : "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <p id="contact-name-error" className="text-xs text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-accent-primary)]"
                  style={{
                    background: "var(--color-bg-card)",
                    border: errors.email ? "1px solid #ef4444" : "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <p id="contact-email-error" className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={form.subject}
                onChange={(e) => { setForm({ ...form, subject: e.target.value }); setErrors({ ...errors, subject: undefined }); }}
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-accent-primary)]"
                style={{
                  background: "var(--color-bg-card)",
                  border: errors.subject ? "1px solid #ef4444" : "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="text-xs text-red-400 mt-1">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: undefined }); }}
                placeholder="Tell me about your project, idea, or opportunity..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 resize-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
                style={{
                  background: "var(--color-bg-card)",
                  border: errors.message ? "1px solid #ef4444" : "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              id="contact-submit-btn"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Social / Info */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-active)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: "var(--color-accent-glow)", color: "var(--color-accent-primary)" }}
                >
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-muted)]">{link.label}</div>
                  <div className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                    {link.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-5 rounded-xl"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.05), transparent)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-glow" />
              <span className="text-sm font-semibold text-emerald-400">Available</span>
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">
              Open to internships, freelance projects, full-time roles, and collaboration opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
