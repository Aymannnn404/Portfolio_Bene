"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function WatchSection() {
  const watchData = {
    topic: "Nano-ordinateurs et IoT (Objets Connectés)",
    tools: ["Flux RSS", "Minimachines", "Elektor Magazine", "Matteralpha", "Developpez.com"],
    articles: [
      
        {
          title: "Orange Pi RV2 : une SBC sous SoC RISC-V 8 cœurs",
          date: "10/03/2025",
          source: "minimachines.net",
          summary: "La Orange Pi RV2 est une mise à jour de carte de développement avec un SoC RISC-V à 8 cœurs.",
          link: "https://www.minimachines.net/actu/orange-pi-rv2-sbc-soc-risc-v-8-coeurs-100325"
        },
        {
          title: "Capacités IA optimisées avec le Super Mode de la série Jetson Orin Nano par Advantech",
          date: "06/03/2025",
          source: "Elektor Magazine",
          summary: "Le système MIC-AI d’Advantech supporte le Super Mode des modules Jetson Orin Nano de NVIDIA.",
          link: "https://www.elektormagazine.com/news/jetson-orin-nano-advantech"
        },
        {
          title: "Un capteur de mouvements Open Source et Low-Cost",
          date: "05/03/2025",
          source: "minimachines.net",
          summary: "Un capteur open source et économique pour piloter des appareils à distance.",
          link: "https://www.minimachines.net/actu/capteur-mouvement-open-source-low-cost-050325"
        },
        {
          title: "Lancement de l'Arduino Nano Matter",
          date: "24/01/2025",
          source: "matteralpha.com",
          summary: "Arduino et Silicon Labs collaborent pour une carte IoT dédiée aux projets faits maison.",
          link: "https://matteralpha.com/launch-arduino-nano-matter"
        },
        {
          title: "Lancement du Compute Module 5 de Raspberry Pi",
          date: "28/11/2024",
          source: "developpez.com",
          summary: "Le CM5 propose de nouvelles spécifications pour booster le Raspberry Pi 5.",
          link: "https://www.developpez.com/actu/299156/lancement-compute-module-5-raspberry-pi"
        },
        {
          title: "RISC-V on Raspberry Pi Pico 2",
          date: "25/09/2024",
          source: "raspberrypi.com",
          summary: "Les cœurs RISC-V Hazard 3 ont été conçus par Luke Wren sur le RP2350.",
          link: "https://www.raspberrypi.com/news/risc-v-on-pico-2"
        },
        {
          title: "Une clé USB avec 8 Ko de stockage garantie 200 ans",
          date: "20/05/2024",
          source: "Developpez.com",
          summary: "Machdyne lance une clé USB conçue pour une conservation des données à très long terme.",
          link: "https://www.developpez.com/actu/287157/cle-usb-8-ko-200-ans"
        },
        {
          title: "Raspberry Pi ajoute de nouvelles options de mémoire à ses cartes Compute Module 4S",
          date: "29/04/2024",
          source: "Netcost",
          summary: "Les nouvelles cartes CM4S supportent de 1 Go à 8 Go de mémoire DDR4.",
          link: "https://www.netcost-security.fr/actualites/raspberry-pi-nouvelles-memoires-cm4s"
        }
    ],
  }

  // The rest of the component stays the same...


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-blue-400">Veille Technologique</span>
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-clean-card border-slate-700">
          <CardContent className="pt-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8 bg-slate-800">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Aperçu
                </TabsTrigger>
                <TabsTrigger
                  value="articles"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Articles
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-white">Sujet de veille</h3>
                    <p className="text-slate-300">{watchData.topic}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-white">Outils utilisés</h3>
                    <div className="flex flex-wrap gap-2">
                      {watchData.tools.map((tool, index) => (
                        <Badge key={index} variant="outline" className="border-blue-500 text-blue-300">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-white">Objectifs</h3>
                    <ul className="list-disc pl-5 text-slate-300">
                      <li className="mb-2">Rester informé des dernières tendances en développement web</li>
                      <li className="mb-2">Anticiper les évolutions technologiques</li>
                      <li className="mb-2">Améliorer mes compétences techniques</li>
                      <li>Partager mes connaissances avec la communauté</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-white">Méthodologie</h3>
                    <p className="text-slate-300 mb-3">
                      Ma méthode de veille technologique s'articule autour de plusieurs axes :
                    </p>
                    <ul className="list-disc pl-5 text-slate-300">
                      <li className="mb-2">Suivi quotidien des sources d'information spécialisées</li>
                      <li className="mb-2">Participation à des webinaires et conférences en ligne</li>
                      <li className="mb-2">Échanges avec la communauté de développeurs</li>
                      <li>Expérimentation des nouvelles technologies</li>
                    </ul>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="articles">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {watchData.articles.map((article, index) => (
                    <motion.div key={index} variants={item}>
                      <Card className="bg-slate-800 border-slate-700">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                            <Badge variant="outline" className="text-xs border-blue-500 text-blue-300">
                              {article.date}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-300 mb-2">Source: {article.source}</p>
                          <p className="text-slate-300">{article.summary}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
