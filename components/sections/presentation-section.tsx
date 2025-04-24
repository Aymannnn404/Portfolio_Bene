"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Github, Download } from "lucide-react"

export function PresentationSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-blue-400">Présentation</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center md:items-end justify-center"
        >
          <Avatar className="w-40 h-40 border-2 border-blue-500 shadow-lg shadow-blue-500/20">
            <AvatarFallback className="bg-blue-100 text-blue-800 text-4xl">SIO</AvatarFallback>
            <AvatarImage src="/logo.png?height=160&width=160" alt="Photo de profil" />
          </Avatar>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <h2 className="text-3xl font-bold mb-2 text-white">Bennai Ayman</h2>
          <p className="text-slate-300 mb-4">Étudiant en BTS SIO SLAM</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Développeur Web</Badge>
            <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white">Programmeur</Badge>
            <Badge className="bg-violet-600 hover:bg-violet-700 text-white">Développeur Full Stack</Badge>
          </div>

          <p className="text-slate-300 mb-6">
            Passionné par le développement logiciel et les nouvelles technologies. Je suis un Étudiant en BTS SIO SLAM 2éme Année.
          </p>

          <div className="flex gap-3 mb-6">
  <a href="https://www.linkedin.com/in/ayman-bennai-931353362/" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="rounded-full border-blue-500 hover:bg-blue-500/10">
      <Linkedin className="h-5 w-5 text-blue-400" />
    </Button>
  </a>
  <a href="https://github.com/Aymannnn404" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="rounded-full border-blue-500 hover:bg-blue-500/10">
      <Github className="h-5 w-5 text-blue-400" />
    </Button>
  </a>
  <a href="Aymanbennai042@gmail.com">
    <Button variant="outline" size="icon" className="rounded-full border-blue-500 hover:bg-blue-500/10">
      <Mail className="h-5 w-5 text-blue-400" />
    </Button>
  </a>
</div>


          <a href="/aymancv.pdf" download>
      <Button className="bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 text-white">
        <Download className="mr-2 h-4 w-4" />
        Télécharger mon CV
      </Button>
    </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 w-full max-w-4xl"
      >
        <Card className="bg-clean-card border-slate-700">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4 text-white">À propos de moi</h3>
            <p className="text-slate-300 mb-4">
            Je suis actuellement en formation BTS SIO option SLAM à l'institut F2I. Passionné par l'informatique depuis mon plus jeune âge, j'ai décidé de me spécialiser dans le développement d'applications.
            </p>
            <p className="text-slate-300 mb-4">
            Au cours de ma formation, j'ai acquis des compétences solides en programmation, en conception de bases de données et en développement web. J'ai également eu l'opportunité de travailler sur plusieurs projets concrets qui m'ont permis de mettre en pratique mes connaissances.
            </p>
            <p className="text-slate-300">
            Je suis particulièrement intéressé par le développement web, la cybersécurité, l'intelligence artificielle et je souhaite poursuivre ma carrière dans ce domaine après l'obtention de mon diplôme.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
