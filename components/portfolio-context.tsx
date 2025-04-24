"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Section = "presentation" | "skills" | "projects" | "synthesis" | "watch" | "contact"

interface PortfolioContextType {
  currentSection: Section
  setCurrentSection: (section: Section) => void
  activeProject: number | null
  setActiveProject: (index: number | null) => void
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState<Section>("presentation")
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <PortfolioContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        activeProject,
        setActiveProject,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider")
  }
  return context
}
