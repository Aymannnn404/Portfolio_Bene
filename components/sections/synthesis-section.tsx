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
      project: "Développement d'un QCM en utilisant PHP / MySQL",
      period: "01/24-04/24",
      competences: [
        {
          id: "Gérer le patrimoine informatique",
          name: "Recenser et identifier les ressources numériques",
          status: "Acquis",
        },
        { id: "Répondre aux incidents", name: "Traiter des demandes concernant les applications", status: "Acquis" },
        {
          id: "Développer la présence en ligne",
          name: "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
          status: "Acquis",
        },
        { id: "Travailler en mode projet", name: "Planifier les activités", status: "Acquis" },
      ],
    },
    {
      project: "Développement d'une application de réservation de terrain de foot fivearena = Html css et php mysql",
      period: "10/24-03/25",
      competences: [
        {
          id: "Gérer le patrimoine informatique",
          name: "Exploiter des référentiels, normes et standards",
          status: "Acquis",
        },
        {
          id: "Répondre aux incidents",
          name: "Traiter des demandes concernant les services réseau et système",
          status: "Acquis",
        },
        {
          id: "Développer la présence en ligne",
          name: "Référencer les services en ligne de l'organisation",
          status: "Acquis",
        },
        {
          id: "Travailler en mode projet",
          name: "Analyser les objectifs et les modalités d'organisation d'un projet",
          status: "Acquis",
        },
      ],
    },
    {
      project: "Réalisation du portfolio Documentation de mon code",
      period: "01/25-03/25",
      competences: [
        {
          id: "Organiser son développement professionnel",
          name: "Gérer son identité professionnelle",
          status: "Acquis",
        },
      ],
    },
    {
      project: "Réalisation d'une site web de vente de montres en utilisant laravel html Css et JS",
      period: "06/24",
      competences: [
        {
          id: "Gérer le patrimoine informatique",
          name: "Mettre en place et vérifier les niveaux d'habilitation",
          status: "Acquis",
        },
        { id: "Répondre aux incidents", name: "Collecter, suivre et orienter des demandes", status: "Acquis" },
        {
          id: "Développer la présence en ligne",
          name: "Participer à la valorisation de l'image de l'organisation",
          status: "Acquis",
        },
        { id: "Travailler en mode projet", name: "Évaluer les indicateurs de suivi d'un projet", status: "Acquis" },
        { id: "Mettre à disposition des utilisateurs", name: "Déployer un service", status: "Acquis" },
        {
          id: "Organiser son développement professionnel",
          name: "Développer son projet professionnel",
          status: "Acquis",
        },
      ],
    },
    {
      project: "Réalisation d'une application locale de site de prises de rendez vous réalisée en Python",
      period: "01/25",
      competences: [
        { id: "Gérer le patrimoine informatique", name: "Gérer des sauvegardes", status: "Acquis" },
        { id: "Répondre aux incidents", name: "Collecter, suivre et orienter des demandes", status: "Acquis" },
        {
          id: "Travailler en mode projet",
          name: "Réaliser les tests d'intégration et d'acceptation",
          status: "Acquis",
        },
        {
          id: "Mettre à disposition des utilisateurs",
          name: "Accompagner les utilisateurs dans la mise en place d'un service",
          status: "Acquis",
        },
      ],
    },
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
          <a href="/Tableau de synthese.xlsx" download>
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-md text-white">
              <Download className="mr-2 h-4 w-4" /> Télécharger le tableau complet
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 p-4 bg-slate-800 border border-slate-700 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-2 text-white">Informations personnelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-300">
            <div>
              <span className="font-medium">Nom et prénom:</span> BENNAI Ayman
            </div>
            <div>
              <span className="font-medium">N° candidat:</span> 02444895431
            </div>
            <div>
              <span className="font-medium">Centre de formation:</span> BTS SIO OPTION SLAM
            </div>
            <div>
              <span className="font-medium">Portfolio:</span>{" "}
              <a href="https://portfolio-bene.vercel.app" className="text-blue-400 hover:underline">
                portfolio-bene.vercel.app
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="bg-clean-card border-slate-700">
            <CardContent className="pt-6 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="w-[250px] text-slate-200">Projet</TableHead>
                    <TableHead className="w-[100px] text-slate-200">Période</TableHead>
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
                        {compIndex === 0 ? (
                          <TableCell rowSpan={item.competences.length} className="align-top font-medium text-white">
                            {item.period}
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
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-clean-card border-slate-700">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Compétences du référentiel BTS SIO SLAM</h3>
              <p className="text-slate-300 mb-4">
                Le BTS SIO option SLAM forme aux métiers du développement d'applications. Les compétences sont réparties
                en plusieurs blocs selon le référentiel officiel.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <h4 className="font-semibold text-white">Gérer le patrimoine informatique</h4>
                  <ul className="text-slate-300 text-sm list-disc pl-5 mt-2">
                    <li>Recenser et identifier les ressources numériques</li>
                    <li>Exploiter des référentiels, normes et standards</li>
                    <li>Mettre en place et vérifier les niveaux d'habilitation</li>
                    <li>Vérifier les conditions de la continuité d'un service</li>
                    <li>Gérer des sauvegardes</li>
                    <li>Vérifier le respect des règles d'utilisation</li>
                  </ul>
                </div>
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <h4 className="font-semibold text-white">Répondre aux incidents et aux demandes</h4>
                  <ul className="text-slate-300 text-sm list-disc pl-5 mt-2">
                    <li>Collecter, suivre et orienter des demandes</li>
                    <li>Traiter des demandes concernant les services réseau et système</li>
                    <li>Traiter des demandes concernant les applications</li>
                  </ul>
                </div>
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <h4 className="font-semibold text-white">Développer la présence en ligne</h4>
                  <ul className="text-slate-300 text-sm list-disc pl-5 mt-2">
                    <li>Participer à la valorisation de l'image de l'organisation</li>
                    <li>Référencer les services en ligne de l'organisation</li>
                    <li>Participer à l'évolution d'un site Web</li>
                  </ul>
                </div>
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <h4 className="font-semibold text-white">Travailler en mode projet</h4>
                  <ul className="text-slate-300 text-sm list-disc pl-5 mt-2">
                    <li>Analyser les objectifs et les modalités d'organisation</li>
                    <li>Planifier les activités</li>
                    <li>Évaluer les indicateurs de suivi d'un projet</li>
                    <li>Réaliser les tests d'intégration et d'acceptation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
