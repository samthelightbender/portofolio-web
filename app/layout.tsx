import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: {
    default: "Syamsu Hidayat - IoT, Robotic, and Fullstack Developer",
    template: "%s | Syamsu Hidayat",
  },
  description:
    "Portfolio of Syamsu Hidayat, an IoT, Robotic, and Fullstack Developer crafting innovative solutions at the intersection of hardware, software, and intelligent systems.",
  keywords: ["Syamsu Nur Hidayat", "Syamsu Hidayat", "SamTheLightBender", "Sam The Light Bender", "IoT Developer", "Robotic Developer", "Fullstack Developer", "Web Developer", "Portfolio", "NextJS", "React", "TypeScript", "Laravel", "PHP", "Arduino", "ESP32"],
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
