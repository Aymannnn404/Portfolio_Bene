"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { User, Code, FolderKanban, Table, Eye, Mail, Menu } from "lucide-react"

type Section = "presentation" | "skills" | "projects" | "synthesis" | "watch" | "contact"

interface NavbarProps {
  currentSection: Section
  setCurrentSection: (section: Section) => void
}

export function Navbar({ currentSection, setCurrentSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    { id: "presentation" as Section, icon: User, label: "Présentation" },
    { id: "skills" as Section, icon: Code, label: "Compétences" },
    { id: "projects" as Section, icon: FolderKanban, label: "Projets" },
    { id: "synthesis" as Section, icon: Table, label: "Tableau de Synthèse" },
    { id: "watch" as Section, icon: Eye, label: "Veille Technologique" },
    { id: "contact" as Section, icon: Mail, label: "Contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-900/95 backdrop-blur-md shadow-lg" : "bg-blue-900/80"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            BENE | Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Button
                  variant={currentSection === section.id ? "default" : "ghost"}
                  className={`flex items-center gap-2 ${
                    currentSection === section.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "text-white hover:bg-blue-800/50"
                  }`}
                  onClick={() => setCurrentSection(section.id)}
                >
                  <section.icon size={18} />
                  <span>{section.label}</span>
                </Button>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-blue-900 border-blue-800 w-64">
              <nav className="flex flex-col space-y-4 mt-8">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={currentSection === section.id ? "default" : "ghost"}
                    className={`flex items-center justify-start gap-2 ${
                      currentSection === section.id
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "text-white hover:bg-blue-800/50"
                    }`}
                    onClick={() => {
                      setCurrentSection(section.id)
                      setSheetOpen(false)
                    }}
                  >
                    <section.icon size={18} />
                    <span>{section.label}</span>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
