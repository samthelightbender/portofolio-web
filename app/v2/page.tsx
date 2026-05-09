// app/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

// Data
import {
  navLinks,
  socialLinks,
  heroData,
  experiences,
  projects,
  contactData,
} from "@/lib/data2";

// Helper for animations
const fadeIn = (direction = "up", delay = 0.2) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <div
      className="absolute bottom-0 left-0 right-0 top-0"
      style={{
        background:
          "radial-gradient(circle 800px at 100% 200px, var(--primary-gradient), transparent 40%)",
      }}
    ></div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <motion.a
          href="#home"
          className="text-2xl font-bold tracking-tight text-foreground"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
        >
          S<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              variants={fadeIn("down", 0.4 + index * 0.1)}
              initial="hidden"
              animate="show"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col h-full p-6">
                <nav className="flex flex-col space-y-6 text-center mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default function PortfolioPage() {
  return (
    <div className="relative bg-background text-foreground antialiased">
      <AnimatedBackground />

      <div className="min-h-screen">
        <Header />

        <main className="container mx-auto px-4 pt-20 md:px-6">
          {/* Hero Section */}
          <section
            id="home"
            className="min-h-[calc(100vh-5rem)] flex flex-col-reverse md:flex-row items-center justify-center gap-12"
          >
            {/* Text Content */}
            <motion.div
              className="w-full max-w-2xl text-center md:text-left"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {heroData.name}
              </h1>
              <h2 className="mt-3 text-2xl font-semibold text-primary sm:text-3xl md:text-4xl">
                {heroData.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground mx-auto md:mx-0">
                {heroData.bio}
              </p>
              <div className="mt-8 flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeIn("up", 0.6 + index * 0.1)}
                    initial="hidden"
                    animate="show"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
            >
              <Avatar className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 border-4 border-primary/20 shadow-lg">
                <AvatarImage src="./hero.jpg" alt="Your Name" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20">
            <motion.h2
              className="text-3xl font-bold tracking-tight text-center sm:text-4xl"
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              Work Experience
            </motion.h2>
            <div className="mt-12 grid gap-8 md:grid-cols-1">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.2 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  whileHover={{ y: -8 }} // <-- SOLUTION IS HERE
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-md text-primary">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {exp.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <div
                            key={skill}
                            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <motion.h2
              className="text-3xl font-bold tracking-tight text-center sm:text-4xl"
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              Featured Projects
            </motion.h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeIn("up", 0.2 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  whileHover={{ y: -8 }} // <-- SOLUTION IS HERE
                  viewport={{ once: true, amount: 0.5 }}
                  className="h-full" // Ensure motion div fills the grid cell
                >
                  {/* --- REMOVED HOVER CLASSES FROM HERE --- */}
                  <Card className="h-full flex flex-col overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <project.icon className="h-8 w-8 text-primary" />
                        <CardTitle>{project.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground flex-grow">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <div
                            key={tag}
                            className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6"
                      >
                        <Button variant="outline" className="w-full">
                          View Project
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 text-center">
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of an amazing team.
            </motion.p>
            <motion.div
              className="mt-8"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              <a href={`mailto:${contactData.email}`}>
                <Button size="lg">
                  Say Hello <Mail className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </section>
        </main>

        <footer className="py-6 mt-12 border-t border-border">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {heroData.name}. All rights
              reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}