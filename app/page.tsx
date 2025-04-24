"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { PresentationSection } from "@/components/sections/presentation-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SynthesisSection } from "@/components/sections/synthesis-section"
import { WatchSection } from "@/components/sections/watch-section"
import { ContactSection } from "@/components/sections/contact-section"
import { LoadingScreen } from "@/components/loading-screen"

type Section = "presentation" | "skills" | "projects" | "synthesis" | "watch" | "contact"

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>("presentation")
  const [loading, setLoading] = useState(true)

  // Simulate loading for a better experience
  setTimeout(() => {
    if (loading) setLoading(false)
  }, 2000)

  return (
    <main className="min-h-screen bg-clean-dark text-slate-100">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />

          <div className="container mx-auto px-4 py-8 pt-24">
            <AnimatePresence mode="wait">
              {currentSection === "presentation" && <PresentationSection key="presentation" />}
              {currentSection === "skills" && <SkillsSection key="skills" />}
              {currentSection === "projects" && <ProjectsSection key="projects" />}
              {currentSection === "synthesis" && <SynthesisSection key="synthesis" />}
              {currentSection === "watch" && <WatchSection key="watch" />}
              {currentSection === "contact" && <ContactSection key="contact" />}
            </AnimatePresence>
          </div>

          <footer className="py-6 text-center text-sm text-slate-400">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              Bennai Ayman © {new Date().getFullYear()}
            </motion.p>
          </footer>
        </>
      )}
    </main>
  )
}
