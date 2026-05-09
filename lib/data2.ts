// lib/data.ts

import {
  Github,
  Linkedin,
  Mail,
  Home,
  Briefcase,
  Layers,
  Contact,
  Code,
  Bot,
  Laptop,
  Instagram,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: Layers },
  { label: "Contact", href: "#contact", icon: Contact },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/samthelightbender",
    icon: Github,
  },
  { name: "LinkedIn", url: "https://linkedin.com/in/syamsu-nur-hidayat", icon: Linkedin },
  { name: "Email", url: "mailto:syamsunurhidayat047@gmail.com", icon: Mail },
  { name: "Instagram", url: "https://www.instagram.com/_syamsuhidayat", icon: Instagram }
];

export const heroData = {
  name: "Syamsu Hidayat",
  title: "IoT, Robotics, and Full-Stack Developer",
  bio: "Crafting innovative solutions at the intersection of hardware and software. I turn complex problems into elegant, user-friendly applications.",
};

export const experiences = [
  {
    company: "PT United Tractors Tbk Site Loa Janan Sanga",
    title: "IT Support Intern", // role
    duration: "Feb 2025 - Jun 2025", // year
    description: "Developed an integrated digitalization system for administration tasks.",
    skills: ["PHP", "CodeIgniter", "MySQL"], // tech
  },
  {
    company: "POLNES Robotic Student Association Team (RAINSTEN)",
    title: "Research Team", // role
    duration: "Nov 2021 - Okt 2025", // year
    description: "Developed projects such as hexapod robot, transporter robot, and robotic arm.",
    skills: ["Robotics", "IoT"], // tech
  },
];
// projects
export const projects = [
  {
    title: "Code Showcase Studio",
    description: "An open-source platform designed to showcase student projects from POLNES, featuring a leaderboard, voting system, and comment functionality.",
    tags: ["TypeScript", "React", "NextJS", "ShadcnUI", "PostgreSQL", "TailwindCSS"],
    imageUrl: "https://placehold.co/400x200/151515/909090?text=Code+Showcase",
    link: "https://github.com/samthelightbender/code-showcase-studio",
    icon: Code,
  },
  {
    title: "DigiSmart (Digital Innovation And Smart Technology)",
    description: "Digitalization platform for managing administrative tasks at PT United Tractors Tbk Site Loa Janan Sanga.",
    tags: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
    imageUrl: "https://placehold.co/400x200/151515/909090?text=DigiSmart",
    link: "#", // Assuming no public link for this internal project
    icon: Briefcase, // Changed icon to Briefcase as it's a work project
  },
  {
    title: "Search and Rescue Robot",
    description: "A hexapod robot purposed to rescue earthquake disaster victims through various obstacles automatically using path planning algorithm",
    tags: ["Arduino", "Servo", "Ultrasonic", "Infrared", "Camera", "Gripper"],
    imageUrl: "https://placehold.co/400x200/151515/909090?text=Hexapod+Robot",
    link: "#", // Assuming no public link
    icon: Bot,
  },
  {
    title: "Transporter Robot",
    description: "A transporter robot to carry objects to a desired location, controlled using a Dualshock Controller.",
    tags: ["Arduino", "Servo", "Controller", "Motor DC", "Gripper"],
    imageUrl: "https://placehold.co/400x200/151515/909090?text=Transporter+Robot",
    link: "#", // Assuming no public link
    icon: Bot,
  },
];

export const contactData = {
  email: "contact@samthelightbender.dev",
  socials: socialLinks,
};