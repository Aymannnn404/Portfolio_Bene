"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function SynthesisSection() {
  const synthesisData = [
    {
      "project": "Application de Rendez-vous",
      "competences": [
        { "id": "C1.1", "name": "Analyse des besoins fonctionnels", "status": "Acquis" },
        { "id": "C4.1", "name": "Conception et modélisation de la base de données", "status": "Acquis" },
        { "id": "C5.2", "name": "Développement des composants d'accès à la base de données", "status": "Acquis" }
      ]
    },
    {
      "project": "Site E-commerce de Montres",
      "competences": [
        { "id": "C2.3", "name": "Développement de l'interface utilisateur responsive", "status": "Acquis" },
        { "id": "C3.2", "name": "Sécurisation des transactions et données utilisateur", "status": "Acquis" },
        { "id": "C6.1", "name": "Tests, validation et déploiement de l'application", "status": "Acquis" }
      ]
    },
    {
      "project": "Application de Réservation de Terrains",
      "competences": [
        { "id": "C2.1", "name": "Conception d'une solution applicative adaptée", "status": "Acquis" },
        { "id": "C5.1", "name": "Programmation mobile multiplateforme", "status": "Acquis" },
        { "id": "C7.3", "name": "Gestion des données en temps réel", "status": "En cours" }
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-blue-400">Tableau de Synthèse</span>
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-center"
        >
          <p className="text-slate-300 mb-4">
            Ce tableau de synthèse présente les compétences du référentiel BTS SIO que j'ai pu mettre en œuvre à travers
            mes différents projets.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 shadow-md text-white">
            <Download className="mr-2 h-4 w-4" /> Télécharger le tableau complet
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="bg-clean-card border-slate-700">
            <CardContent className="pt-6 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="w-[200px] text-slate-200">Projet</TableHead>
                    <TableHead className="text-slate-200">Compétences</TableHead>
                    <TableHead className="w-[100px] text-slate-200">Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {synthesisData.map((item, index) =>
                    item.competences.map((competence, compIndex) => (
                      <TableRow key={`${index}-${compIndex}`} className="border-slate-700">
                        {compIndex === 0 ? (
                          <TableCell rowSpan={item.competences.length} className="align-top font-medium text-white">
                            {item.project}
                          </TableCell>
                        ) : null}
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-medium text-white">{competence.id}</span>
                            <span className="text-sm text-slate-300">{competence.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              competence.status === "Acquis" ? "bg-emerald-600 text-white" : "bg-amber-600 text-white"
                            }
                          >
                            {competence.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    )),
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-clean-card border-slate-700">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Compétences du référentiel</h3>
              <p className="text-slate-300 mb-4">
                Le BTS SIO option SLAM forme aux métiers du développement d'applications. Les compétences sont réparties
                en plusieurs blocs selon le référentiel officiel.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <h4 className="font-semibold text-white">Support Informatique</h4>
                  <p className="text-slate-300 text-sm">
                    Assistance technique et maintenance pour garantir le bon fonctionnement de vos systèmes informatiques et réseaux.
                  </p>
                </div>
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <h4 className="font-semibold text-white">Développement d'Applications</h4>
                  <p className="text-slate-300 text-sm">
                    Conception et développement d'applications sur mesure pour répondre aux besoins spécifiques de votre entreprise.
                  </p>
                </div>
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <h4 className="font-semibold text-white">Cybersécurité</h4>
                  <p className="text-slate-300 text-sm">
                    Protection des systèmes et des données contre les menaces cybernétiques grâce à des solutions de sécurité avancées.
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
