// lib/data.ts

import { Github, Instagram, Linkedin, Facebook } from "lucide-react";

export const skills = [
    "PHP", "Laravel", "React", "TypeScript", "NextJS", "IoT", "Robotic", "Arduino", "ESP32"
];

export const workExperience = [
    {
        year: "2025",
        role: "IT Support Intern",
        company: "PT United Tractors Tbk Site Loa Janan Sanga",
        description: "Developed an integrated digitalization system for administration tasks.",
        tech: ["PHP", "CodeIgniter", "MySQL"],
    },
    {
        year: "2021-2024",
        role: "Research Team",
        company: "POLNES Robotic Student Association Team (RAINSTEN)",
        description: "Developed projects such as hexapod robot, transporter robot, and robotic arm.",
        tech: ["Robotics", "IoT"],
    },
];

export const projects = [
    {
        title: "Code Showcase Studio",
        description: "An open-source platform designed to showcase student projects from POLNES, featuring a leaderboard, voting system, and comment functionality.",
        date: "On Progress",
        tech: ["TypeScript", "React", "NextJS", "ShadcnUI", "PostgreSQL", "TailwindCSS"],
        link: "https://github.com/pemrogrammer/code-showcase-studio",
        image: "https://placehold.co/400x200/151515/909090?text=Code+Showcase",
    },
    {
        title: "DigiSmart (Digital Innovation And Smart Technology)",
        description: "Digitalization platform for managing administrative tasks at PT United Tractors Tbk Site Loa Janan Sanga.",
        date: "June 2025",
        tech: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
        link: "#",
        image: "https://placehold.co/400x200/151515/909090?text=DigiSmart",
    },
    {
        title: "Search and Rescue Robot",
        description: "A hexapod robot purposed to rescue earthquake disaster victims through various obstacles automatically using path planning algorithm",
        date: "July 2024",
        tech: ["Arduino", "Servo", "Ultrasonic", "Infrared", "Camera", "Gripper"],
        link: "#",
        image: "https://placehold.co/400x200/151515/909090?text=Hexapod+Robot",
    },
    {
        title: "Transporter Robot",
        description: "A transporter robot to carry objects to a desired location, controlled using a Dualshock Controller.",
        date: "January 2023",
        tech: ["Arduino", "Servo", "Controller", "Motor DC", "Gripper"],
        link: "#",
        image: "https://placehold.co/400x200/151515/909090?text=Transporter+Robot",
    },
];

export const socialLinks = [
    { name: "GitHub", handle: "@samthelightbender", url: "https://github.com/samthelightbender/", icon: Github },
    { name: "Instagram", handle: "@syamsuhidayat", url: "https://www.instagram.com/_syamsuhidayat", icon: Instagram },
    { name: "Linkedin", handle: "@syamsu-nur-hidayat", url: "https://www.linkedin.com/in/syamsu-nur-hidayat/", icon: Linkedin },
    { name: "Facebook", handle: "@syamsuhidayat", url: "https://www.facebook.com/M.Syamsu.Nur.Hidayat/", icon: Facebook }
];

export const sectionIds = ["intro", "work", "project", "connect"];