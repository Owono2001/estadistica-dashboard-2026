// src/data/portfolio.ts

// Type definitions
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'web' | 'ai' | 'database';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  challenge: string;
  approach: string;
  solution: string;
  impact: string;
}

export interface ExperienceBullet {
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  badge: string;
  period: string;
  location: string;
  isActive: boolean;
  logo?: string;
  theme: 'emerald' | 'blue';
  focusAreas: string[];
  bulletPoints: ExperienceBullet[];
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  location: string;
}

// Data exports with proper typing
export const personalInfo: PersonalInfo = {
  name: "Pedro Fabian Owono",
  title: "Computer Engineer (M.Eng) | IT/OT Integration",
  location: "Malabo, Equatorial Guinea",
  email: "owonoondomangue@gmail.com",
  github: "https://github.com/Owono2001",
  linkedin: "https://www.linkedin.com/in/pedro-fabian-owono",
  bio: "Bilingual Computer Engineer (M.Eng | B.Eng. Hons) registered with the Board of Engineers Malaysia (BEM). Specializing in bridging IT and Operational Technology (OT), industrial automation, and cybersecurity for high-performance corporate environments."
};

export const skills: Skill[] = [
  { name: "Python", level: 90, category: "programming" },
  { name: "C++", level: 85, category: "programming" },
  { name: "JavaScript", level: 80, category: "programming" },
  { name: "React", level: 75, category: "web" },
  { name: "Docker", level: 75, category: "web" },
  { name: "TensorFlow", level: 70, category: "ai" },
  { name: "OpenCV", level: 75, category: "ai" },
  { name: "PostgreSQL", level: 85, category: "database" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Machine Vision & Intelligence System",
    description: "Computer vision project implementing real-time hand-gesture detection and recognition for human-computer interaction.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    image: "/images/project1MachineVision.webp",
    githubUrl: "https://github.com/Owono2001/Machine-Vision-and-Intelligence",
    featured: true,
    challenge: "Industrial and sterile environments require reliable contactless interfaces to prevent contamination and hardware degradation.",
    approach: "Analyzed the trade-off between cloud-based processing (high latency) and edge computing. Opted for a localized OpenCV pipeline optimized with TensorFlow to ensure operation without internet dependency.",
    solution: "Developed a robust vision-based hand-gesture recognition system. Applied advanced image preprocessing techniques (background subtraction, contour detection) to feed clean data into the machine learning classifier, translating physical gestures into direct system commands.",
    impact: "Achieved consistent real-time gesture recognition at 30 FPS, establishing a foundation for deployable contactless control systems in OT environments."
  },
  {
    id: 2,
    title: "C++ Inventory Management System",
    description: "Object-oriented programming project featuring comprehensive inventory tracking and purchase management with advanced OOP principles.",
    technologies: ["C++", "OOP", "Data Structures", "System Design"],
    image: "/images/project6Cpp.webp",
    githubUrl: "https://github.com/Owono2001/PurchaseOrderManager-Cpp",
    featured: false,
    challenge: "Legacy inventory systems often suffer from memory leaks, rigid architectures, and poor data encapsulation, leading to data corruption during scale.",
    approach: "Bypassed standard procedural scripting in favor of a strict, highly decoupled Object-Oriented architecture to guarantee data integrity and system extensibility.",
    solution: "Architected an inventory and purchase management engine using advanced C++ features. Implemented deep encapsulation, inheritance, and polymorphism to handle multiple inventory types, paired with custom memory management to prevent leaks.",
    impact: "Created a highly modular, zero-leak software architecture demonstrating enterprise-level backend logic and strict memory safety protocols."
  }
];

export const experience: Experience[] = [
  {
    id: "elite-lng",
    title: "HSE Field Contractor",
    company: "Élite Construcciones (EG LNG Turnaround)",
    badge: "Industrial Safety & Operations",
    period: "Sep 2026 - Present",
    location: "Punta Europa, Malabo",
    isActive: true,
    theme: "emerald",
    focusAreas: ["Industrial Safety", "HSE Protocols"],
    bulletPoints: [
      {
        title: "Industrial Safety Enforcement:",
        description: "Executing rigorous safety protocols during the EG LNG Turnaround, ensuring strict compliance with Confined Space Entry and LOTO regulations."
      },
      {
        title: "Live Field Operations:",
        description: "Managing on-site hazard identification and enforcing mandatory PPE compliance within a high-risk petrochemical plant environment."
      }
    ]
  },
  {
    id: "apu-credit",
    title: "IT/OT Engineer Intern",
    company: "CREDIT Lab - Asia Pacific University",
    badge: "Internship",
    period: "Jun 2024 - Sep 2024",
    location: "Kuala Lumpur, Malaysia",
    isActive: false,
    logo: "/images/apu_logo.webp",
    theme: "blue",
    focusAreas: ["Hardware-Software", "3D Prototyping", "Control Logic"],
    bulletPoints: [
      {
        title: "Sensor Networks & Control Logic:",
        description: "Configured and maintained IoT sensor nodes to ensure stable data acquisition and system reliability."
      },
      {
        title: "Hardware/Software Integration:",
        description: "Mapped physical sensor logic to digital automation interfaces."
      },
      {
        title: "Industrial Prototyping:",
        description: "Designed and prototyped hardware enclosures using CAD/SolidWorks for IT/OT asset management."
      }
    ]
  }
];

export const education: Education[] = [
  {
    degree: "BEng Computer Engineering (Hons)",
    university: "Asia Pacific University (APU)",
    period: "Sept 2021 - Nov 2025",
    location: "Kuala Lumpur, Malaysia"
  },
  {
    degree: "Master of Engineering (M.Eng)",
    university: "De Montfort University (DMU)",
    period: "2021 - 2025",
    location: "Leicester, UK (Dual Award)"
  }
];

// Additional utility types for better development experience
export type SkillCategory = Skill['category'];
export type ProjectTechnology = string;
export type AchievementList = string[];

// Type guards for runtime type checking
export const isPersonalInfo = (obj: any): obj is PersonalInfo => {
  return obj && typeof obj.name === 'string' && typeof obj.title === 'string';
};

export const isSkill = (obj: any): obj is Skill => {
  return obj && typeof obj.name === 'string' && typeof obj.level === 'number' && typeof obj.category === 'string';
};

export const isProject = (obj: any): obj is Project => {
  return obj && typeof obj.id === 'number' && typeof obj.title === 'string' && Array.isArray(obj.technologies);
};