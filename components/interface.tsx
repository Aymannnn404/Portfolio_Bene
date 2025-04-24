"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePortfolio } from "./portfolio-context"
import { User, Code, FolderKanban, Table, Eye, Mail, Menu, X } from "lucide-react"

export function Interface() {
  const { currentSection, setCurrentSection } = usePortfolio()
  const [menuOpen, setMenuOpen] = useState(false)

  const sections = [
    { id: "presentation", icon: User, label: "Présentation" },
    { id: "skills", icon: Code, label: "Compétences" },
    { id: "projects", icon: FolderKanban, label: "Projets" },
    { id: "synthesis", icon: Table, label: "Tableau de Synthèse" },
    { id: "watch", icon: Eye, label: "Veille Technologique" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-black/50 backdrop-blur-sm border-white/20 text-white"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col gap-4 w-64">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={currentSection === section.id ? "default" : "outline"}
                className={`flex items-center justify-start gap-2 ${
                  currentSection === section.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-black/50 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
                }`}
                onClick={() => {
                  setCurrentSection(section.id as any)
                  setMenuOpen(false)
                }}
              >
                <section.icon size={18} />
                {section.label}
              </Button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Desktop navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:block">
        <motion.div
          className="flex items-center gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={currentSection === section.id ? "default" : "outline"}
              size="icon"
              className={`rounded-full ${
                currentSection === section.id ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent hover:bg-white/10"
              }`}
              onClick={() => setCurrentSection(section.id as any)}
              title={section.label}
            >
              <section.icon size={20} />
            </Button>
          ))}
        </motion.div>
      </div>

      {/* Section title */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div
          key={currentSection}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-6 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium"
        >
          {sections.find((s) => s.id === currentSection)?.label}
        </motion.div>
      </div>
    </>
  )
}
