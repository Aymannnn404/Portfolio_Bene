"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-clean-dark z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2 text-blue-500">Portfolio BTS SIO SLAM</h1>
        <p className="text-xl mb-8 text-slate-300">Bienvenue sur mon portfolio interactif</p>

        <div className="w-80 mb-6 mx-auto">
          <Progress value={progress} className="h-2 bg-slate-800" />
          <p className="text-sm mt-2 text-slate-400">{progress}% chargé</p>
        </div>

      </motion.div>
    </div>
  )
}
