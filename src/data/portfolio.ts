// ============================================================================
// SHARON'S PORTFOLIO — CENTRALIZED DATA (Updated from Resume)
// ============================================================================

export const personalInfo = {
  name: "T N Sharon",
  firstName: "Sharon",
  lastName: "T N",
  professionalTitle: "Full Stack Developer & Aspiring AI Engineer",
  tagline: "I build scalable full-stack applications, intelligent AI-powered solutions, and cloud systems.",
  location: "Bengaluru, Karnataka",
  email: "sharon1452005@gmail.com",
  phone: "+91 9019740083",
  github: "https://github.com/Sharon-TN",
  linkedin: "https://linkedin.com/in/sharon-t-n",
  resumeUrl: "https://drive.google.com/file/d/1aMVrGoMgpGrBvtL2b_tttCmzSGa2DX74/view?usp=sharing",
  profileImage: "/profile.jpg",
  university: "Atria Institute of Technology & IIT Mandi",
  degree: "B.E. Computer Science Engineering (CGPA: 9.1)",
  minor: "Minor Degree in Artificial Intelligence (IIT Mandi)",
  year: "Final Year",
  bio: [
    "Final-year Computer Science Engineering student with practical experience in full-stack application development, artificial intelligence, machine learning, and cloud computing.",
    "Demonstrated ability to develop scalable software solutions, lead collaborative engineering teams, and solve real-world problems through innovative technology.",
    "Strong analytical, problem-solving, and leadership skills, with a passion for continuous learning and building high-quality software products.",
    "Elected Class Representative serving student-faculty coordination since 1st semester, maintaining a consistent 9+ SGPA academic record."
  ],
  journey: [
    { label: "Foundations", description: "96.4% in ICSE & 95.2% in PUC (PCMC)", icon: "code" },
    { label: "Engineering", description: "B.E. in CSE at Atria Institute of Technology (9.1 CGPA)", icon: "layers" },
    { label: "AI Specialization", description: "Minor Degree in Artificial Intelligence from IIT Mandi", icon: "brain" },
    { label: "Full Stack Lead", description: "Internships leading developer teams at Krytil & Coincent", icon: "rocket" },
    { label: "Cloud & AI Labs", description: "Google Cloud & Generative AI Study Jam rewards recipient", icon: "sparkles" },
  ],
};

export const heroRoles = [
  "Full Stack Developer",
  "Aspiring AI Engineer",
  "Software Engineer",
  "Web Developer",
  "Tech Team Lead",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  programming: {
    label: "Languages",
    icon: "code",
    color: "#6366f1",
    items: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "Java", level: 78 },
    ],
  },
  frontend: {
    label: "Frontend",
    icon: "monitor",
    color: "#ec4899",
    items: [
      { name: "React.js", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Three.js", level: 75 },
    ],
  },
  backend: {
    label: "Backend & APIs",
    icon: "server",
    color: "#10b981",
    items: [
      { name: "FastAPI", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "JWT", level: 85 },
      { name: "PHP", level: 75 },
    ],
  },
  databases: {
    label: "Databases",
    icon: "database",
    color: "#f59e0b",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  ai: {
    label: "AI / ML & Data",
    icon: "brain",
    color: "#8b5cf6",
    items: [
      { name: "Generative AI", level: 85 },
      { name: "Gemini AI", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 78 },
      { name: "Monte Carlo Simulation", level: 82 },
    ],
  },
  devops: {
    label: "Cloud & DevOps",
    icon: "wrench",
    color: "#06b6d4",
    items: [
      { name: "Google Cloud Platform", level: 85 },
      { name: "AWS", level: 78 },
      { name: "Git & GitHub", level: 92 },
      { name: "Vercel", level: 88 },
    ],
  },
};

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: "fullstack" | "ai" | "frontend" | "backend";
  github: string;
  liveUrl: string;
  images: string[];
  featured: boolean;
  architecture?: string[];
}

export const projects: Project[] = [
  {
    id: "day-zero",
    title: "Day Zero: Water Emergency Planner",
    tagline: "AI-powered water emergency planner with weather integration & forecasting.",
    description: "An intelligent water emergency forecasting platform combining Gemini AI, real-time weather integration via Open-Meteo API, interactive 3D visualizations using Three.js, and Monte Carlo risk simulations.",
    problem: "Urban regions facing severe water scarcity struggle with predictive resource allocation and emergency crisis preparedness.",
    solution: "Developed an AI-driven crisis planner that simulates water availability scenarios using Monte Carlo algorithms, live weather data, and generative AI recommendations.",
    technologies: ["React.js", "FastAPI", "Python", "Vite", "Gemini AI", "Three.js", "Open-Meteo API", "Monte Carlo Simulation"],
    category: "ai",
    github: "https://github.com/Sharon-TN/DAY-ZERO-WATER-EMERGENCY-PLANNER",
    liveUrl: "https://day-zero-water-emergency-planner-hi.vercel.app/",
    images: [],
    featured: true,
    architecture: ["React + Three.js UI", "FastAPI Engine", "Gemini AI Model", "Open-Meteo API", "Monte Carlo Simulator"],
  },
  {
    id: "e-locate",
    title: "E-Locate: E-Waste Management Locator",
    tagline: "Smart e-waste management platform for locating recycling centres.",
    description: "Community web application connecting individuals and businesses with nearby certified e-waste recycling facilities using interactive geolocation and search filters.",
    problem: "Improper electronic waste disposal is largely due to lack of public awareness and difficulty locating authorized recycling facilities.",
    solution: "Created a location-aware web service integrated with Google Maps API, structured database indexing, and facility registration dashboards.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API", "JWT", "REST APIs", "Vercel"],
    category: "fullstack",
    github: "https://github.com/Sharon-TN/E-LOCATE-EWASTE-MANAGEMENT-FACILITY-LOCATOR",
    liveUrl: "https://elocate-sepia.vercel.app/",
    images: [],
    featured: true,
    architecture: ["React.js SPA", "Node.js/Express Backend", "Google Maps API", "MongoDB Atlas"],
  },
  {
    id: "krytil-jobs",
    title: "Krytil Jobs Web Application",
    tagline: "Full-stack recruitment platform with candidate management and recruiter dashboards.",
    description: "Led a team of 5 developers to build a comprehensive recruitment platform featuring user authentication, job posting workflows, candidate management, and recruiter analytics.",
    problem: "Recruitment processes often lack unified candidate tracking, structured workflows, and real-time dashboard analytics for hiring managers.",
    solution: "Architected a scalable full-stack web application with secure JWT authentication, intuitive candidate pipeline management, and responsive recruiter dashboards.",
    technologies: ["React.js", "FastAPI", "Python", "MongoDB", "JWT", "REST APIs", "Git", "GitHub"],
    category: "fullstack",
    github: "https://github.com/Sharon-TN/Krytil-Jobs-Final",
    liveUrl: "/confidential",
    images: [],
    featured: true,
    architecture: ["React.js Frontend", "FastAPI Python Backend", "MongoDB Database", "JWT Security Layer"],
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  type: "internship" | "freelance" | "personal" | "academic";
}

export const experiences: Experience[] = [
  {
    id: "krytil-internship",
    role: "Full Stack Developer Intern",
    company: "Krytil",
    duration: "Jan 2026 – Present",
    description: [
      "Led a team of five developers to build a full-stack recruitment platform supporting authentication, job posting, candidate management, and recruiter dashboards.",
      "Architected backend APIs using FastAPI and Python with MongoDB database integration.",
      "Implemented secure JWT authentication and role-based authorization for recruiters and job seekers."
    ],
    technologies: ["React.js", "FastAPI", "Python", "MongoDB", "JWT", "REST APIs", "Git"],
    type: "internship",
  },
  {
    id: "coincent-internship",
    role: "Web Developer Intern",
    company: "Coincent",
    duration: "Aug 2024 – Sept 2024",
    description: [
      "Built 4+ responsive web applications using both frontend and backend modern web technologies.",
      "Collaborated with cross-functional teams to design clean UI/UX components and integrate RESTful backend endpoints."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Bootstrap"],
    type: "internship",
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements: string[];
}

export const education: Education[] = [
  {
    id: "be-cse",
    degree: "B.E. in Computer Science Engineering",
    institution: "Atria Institute of Technology",
    duration: "CGPA: 9.1 | Expected 2027",
    description: "Focusing on Software Engineering, Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and OOP.",
    achievements: [
      "Consistently maintained 9+ SGPA across all semesters",
      "Elected Class Representative serving student-faculty coordination since 1st Semester",
    ],
  },
  {
    id: "minor-ai",
    degree: "Minor Degree in Artificial Intelligence",
    institution: "IIT Mandi",
    duration: "Expected 2026",
    description: "Specializing in Machine Learning, Deep Learning, Generative AI, and AI application architecture.",
    achievements: [
      "Built Day Zero AI Water Emergency Planner using Gemini AI and Monte Carlo simulations",
      "Earned official Google rewards for Google Cloud & Generative AI Study Jam",
    ],
  },
  {
    id: "puc-khps",
    degree: "PUC (PCMC) — 95.2%",
    institution: "KHPS BASE PU College",
    duration: "Completed",
    description: "Physics, Chemistry, Mathematics, and Computer Science background with distinction.",
    achievements: ["Scored 95.2% overall in pre-university examination"],
  },
  {
    id: "icse-cotton",
    degree: "10th Grade (ICSE) — 96.4%",
    institution: "Bishop Cotton Boys' School",
    duration: "Completed",
    description: "Strong academic foundation in science, mathematics, and computer applications.",
    achievements: ["Achieved 96.4% in ICSE Board examinations"],
  },
];

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  verificationLink: string;
}

export const certifications: Certification[] = [
  {
    id: "gcp-study-jam",
    title: "Google Cloud Study Jam",
    organization: "Google Cloud",
    year: "Earned Rewards",
    verificationLink: "https://cloud.google.com",
  },
  {
    id: "gen-ai-jam",
    title: "Google Generative AI Study Jam",
    organization: "Google Cloud",
    year: "Earned Rewards",
    verificationLink: "https://cloud.google.com",
  },
  {
    id: "krytil-cert",
    title: "Krytil Internship Completion Certificate",
    organization: "Krytil",
    year: "2026",
    verificationLink: "#",
  },
  {
    id: "coincent-cert",
    title: "Coincent Internship Completion Certificate",
    organization: "Coincent",
    year: "2024",
    verificationLink: "#",
  },
  {
    id: "iitb-php",
    title: "PHP & MySQL Certification",
    organization: "IIT Bombay",
    year: "Certified",
    verificationLink: "#",
  },
  {
    id: "infosys-python",
    title: "Infosys Python Certification",
    organization: "Infosys Springboard",
    year: "Certified",
    verificationLink: "#",
  },
  {
    id: "infosys-devops",
    title: "Infosys DevOps Certification",
    organization: "Infosys Springboard",
    year: "Certified",
    verificationLink: "#",
  },
];

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  type: "hackathon" | "competition" | "award" | "other";
}

export const achievements: Achievement[] = [
  {
    id: "sgpa-9plus",
    title: "Consistent 9+ SGPA Track Record",
    description: "Maintained 9+ SGPA across all semesters in B.E. Computer Science Engineering.",
    year: "Academic",
    type: "award",
  },
  {
    id: "kannada-essay",
    title: "1st Prize — State Level Kannada Essay Writing Competition",
    description: "Awarded First Prize in state-level literary competition.",
    year: "State Award",
    type: "competition",
  },
  {
    id: "google-rewards",
    title: "Google Cloud & Generative AI Rewards Winner",
    description: "Earned official Google swag and credentials for completing Cloud & GenAI Jams.",
    year: "Google",
    type: "award",
  },
  {
    id: "class-rep",
    title: "Elected Class Representative",
    description: "Serving student-faculty coordination and leadership since 1st semester.",
    year: "Leadership",
    type: "other",
  },
];

export const developmentProcess = [
  { step: "Idea", description: "Identifying real-world problems (e.g. water emergency, e-waste)", icon: "lightbulb" },
  { step: "Research", description: "Analyzing requirements, APIs, and data models", icon: "search" },
  { step: "Design", description: "Designing UI/UX and system architecture", icon: "palette" },
  { step: "Frontend", description: "Building responsive React.js & Three.js interfaces", icon: "monitor" },
  { step: "Backend", description: "Creating FastAPI / Node.js APIs & MongoDB schemas", icon: "server" },
  { step: "AI Integration", description: "Integrating Gemini AI & predictive simulations", icon: "brain" },
  { step: "Testing", description: "Testing authentication, security, and response speeds", icon: "check-circle" },
  { step: "Deployment", description: "Deploying on Vercel & Google Cloud Platform", icon: "rocket" },
];
