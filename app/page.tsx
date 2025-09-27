"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Github, Instagram, Linkedin, Facebook, Sun, Moon, ArrowRight } from "lucide-react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const projectPlaceholder = "https://placehold.co/400x200/151515/909090?text=Project+Placeholder"

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "project", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Syamsu
                  <br />
                  <span className="text-muted-foreground">Hidayat</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  IoT, Robotic, and Fullstack Developer crafting innovative solutions at the intersection of
                  <span className="text-foreground"> hardware</span>,<span className="text-foreground"> software</span>,
                  and
                  <span className="text-foreground"> intelligent systems</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Indonesia</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">IT Fresh Graduate</div>
                  <div className="text-muted-foreground">@ State Polytechnic of Samarinda (POLNES)</div>
                  <div className="text-xs text-muted-foreground">2021 — 2025</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "Laravel", "React", "TypeScript", "NextJS", "IoT", "Robotic", "Arduino", "ESP32"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">2021 — Current</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025",
                  role: "IT Support Intern",
                  company: "PT United Tractors Tbk Site Loa Janan Sanga",
                  description: "Developed a integrated digitalization system for administration tasks",
                  tech: ["PHP", "CodeIgniter", "MySQL"],
                },
                {
                  year: "2021-2024",
                  role: "Research Team",
                  company: "POLNES Robotic Student Association Team (RAINSTEN)",
                  description: "Developed projects such as hexapod robot, transporter robot, and robotic arm",
                  tech: ["Robotics", "IoT"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="project"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Recent Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Code Showcase Studio",
                  description: "An open-source platform designed to showcase student projects from POLNES, featuring a leaderboard, voting system, and comment functionality, where anyone can collaborate to develop it.",
                  date: "On Progress",
                  tech: ["TypeScript", "React", "NextJS", "ShadcnUI", "PostgreSQL", "TailwindCSS"],
                  link: "https://github.com/pemrogrammer/code-showcase-studio",
                  image: projectPlaceholder,
                },
                {
                  title: "DigiSmart (Digital Innovation And Smart Technology)",
                  description: "Digitalization platform for managing administrative tasks at PT United Tractors Tbk Site Loa Janan Sanga.",
                  date: "June 2025",
                  tech: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
                  link: "#",
                  image: projectPlaceholder,
                },
                {
                  title: "Search and Rescue Robot",
                  description: "A hexapod robot purposed to rescue earthquake disaster victims through various obstacles automatically using path planning algorithm",
                  date: "July 2024",
                  tech: ["Arduino", "Servo", "Ultrasonic", "Infrared", "Camera", "Gripper"],
                  link: "#",
                  image: projectPlaceholder,
                },
                {
                  title: "Transporter Robot",
                  description: "A transporter robot to carry objects to a desired location, controlled using a Dualshock Controller.",
                  date: "January 2023",
                  tech: ["Arduino", "Servo", "Controller", "Motor DC", "Gripper"],
                  link: "#",
                  image: projectPlaceholder,
                },
              ].map((project, index) => (
                <Link
                  key={index}
                  href={project.link}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  {project.image && (
                    <img src={project.image} alt={project.title} className="mb-4 rounded-md object-cover w-full h-48" />
                  )}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{project.date}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs text-muted-foreground rounded border border-border group-hover:border-muted-foreground/50 transition-colors duration-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 pt-2">
                      <span>View Project</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[3] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:syamsunurhidayat047@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">syamsunurhidayat047@gmail.com</span>
                    <ArrowRight
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                    </ArrowRight>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@samthelightbender", url: "https://github.com/samthelightbender/", icon: Github },
                  { name: "Instagram", handle: "@syamsuhidayat", url: "https://www.instagram.com/_syamsuhidayat", icon: Instagram },
                  { name: "Linkedin", handle: "@syamsu-nur-hidayat", url: "https://www.linkedin.com/in/syamsu-nur-hidayat/", icon: Linkedin },
                  { name: "Facebook", handle: "@syamsuhidayat", url: "https://www.facebook.com/M.Syamsu.Nur.Hidayat/", icon: Facebook }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.icon && <social.icon className="inline-block mr-2 w-5 h-5" />}
                        <span>{social.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 SamTheLightBender. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with v0.dev by Felix Macaspac, Modified by SamTheLightBender</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  </Sun>
                ) : (
                  <Moon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  </Moon>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
