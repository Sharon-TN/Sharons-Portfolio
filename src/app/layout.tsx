import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sharon T N — Full Stack Developer & Aspiring AI Engineer",
    template: "%s | Sharon T N",
  },
  description:
    "Personal portfolio of Sharon T N — Full Stack Developer, Software Engineer, and Aspiring AI Engineer. B.E. Computer Science Engineering student at IIT Mandi with a Minor Degree in AI. Building digital products, full-stack systems, and intelligent AI-powered experiences.",
  keywords: [
    "Sharon T N",
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "IIT Mandi",
    "Portfolio",
    "Web Developer",
    "Node.js",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Sharon T N" }],
  creator: "Sharon T N",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sharon T N — Full Stack Developer & Aspiring AI Engineer",
    description:
      "Explore the digital universe of Sharon T N — building full-stack products, modern web experiences, and AI-powered applications.",
    siteName: "Sharon T N Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharon T N — Full Stack Developer & Aspiring AI Engineer",
    description:
      "Explore the digital universe of Sharon T N — building full-stack products, modern web experiences, and AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
