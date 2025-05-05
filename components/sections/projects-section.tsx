"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, FileText, Presentation } from "lucide-react"
import { useState } from "react"

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Application de Prise de Rendez-vous",
      description:
        "Application web permettant aux utilisateurs de planifier, modifier ou annuler des rendez-vous avec notifications automatiques et calendrier intégré.",
      image: "/rdvpic.png?height=300&width=600",
      technologies: ["Python", "MySQLite", "tailwind"],
      github: "https://github.com/Aymannnn404",
      competences: [
        "Développer une interface utilisateur",
        "Gérer des données et des événements",
        "Concevoir et interroger une base de données",
        "Mettre en place des notifications automatisées",
      ],
    },
    {
      title: "Site E-commerce de Montres",
      description:
        "Plateforme de vente en ligne spécialisée dans les montres, avec gestion de catalogue, panier, paiement sécurisé via Stripe et suivi des commandes.",
      image: "/watchpic.png?height=300&width=600",
      technologies: ["html", "boostrap", "laravel", "mysql"],
      github: "https://github.com/Aymannnn404",
      competences: [
        "Développer une interface utilisateur moderne",
        "Sécuriser les transactions en ligne",
        "Intégrer des API de paiement",
        "Gérer un catalogue de produits",
      ],
    },
    {
      title: "Application de Réservation de Terrains",
      description:
        "Application mobile permettant aux utilisateurs de réserver des terrains de sport, consulter les disponibilités et gérer leurs réservations en toute simplicité.",
      image: "/fields.png?height=300&width=600",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "https://github.com/Aymannnn404",
      competences: [
        "Développer pour mobile",
        "Intégrer une base de données temps réel",
        "Créer une interface intuitive pour la réservation",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-blue-400">Projets</span>
      </motion.h1>

      <motion.div
        className="flex justify-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button variant="outline" className="flex gap-2 border-blue-500 hover:bg-grey-500/10 text-blue-400" asChild>
          <a href="/Rapport_Stage.docx" download>
            <FileText size={16} /> Rapport de stage
          </a>
        </Button>
        <Button variant="outline" className="flex gap-2 border-blue-500 hover:bg-grey-500/10 text-blue-400" asChild>
          <a href="/presentation_Helkinz.pdf" download>
            <Presentation size={16} /> Présentation d'entreprise
          </a>
        </Button>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div key={index} variants={item} className="mb-12">
            <Card className="bg-clean-card border-slate-700 overflow-hidden">
              <div className="md:flex">
                <div
                  className="md:w-2/5 h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="md:w-3/5">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>

                    <p className="text-slate-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-blue-500 text-blue-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <h4 className="font-semibold mb-2 text-white">Compétences développées:</h4>
                    <ul className="list-disc pl-5 text-slate-300 mb-4">
                      {project.competences.map((comp, i) => (
                        <li key={i}>{comp}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                    <Button
                      variant="outline"
                      className="flex gap-2 border-blue-500 hover:bg-blue-500/10 text-blue-400"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
