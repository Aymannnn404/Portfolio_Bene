"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Linkedin, Mail, Github, MapPin, Phone } from "lucide-react"

export function ContactSection() {
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
        <span className="text-blue-400">Contact</span>
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-clean-card border-slate-700">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white">Mes Cordonnées</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-400" size={20} />
                    <span className="text-slate-200"> Aymanbennai042@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-400" size={20} />
                    <span className="text-slate-200">06 68 34 35 04</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-400" size={20} />
                    <span className="text-slate-200">Montfermeil, France</span>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-3 text-white">Retrouvez-moi sur</h3>
                  <div className="flex gap-4">
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
                    <a href="mailto:your-email@example.com">
                      <Button variant="outline" size="icon" className="rounded-full border-blue-500 hover:bg-blue-500/10">
                        <Mail className="h-5 w-5 text-blue-400" />
                      </Button>
                    </a>
                  </div>

                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <h2 className="text-2xl font-bold mb-4 text-white">Envoyez-moi un message</h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-200">
                      Nom
                    </Label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      className="bg-slate-800 border-slate-700 focus:border-blue-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-200">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Votre email"
                      className="bg-slate-800 border-slate-700 focus:border-blue-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-200">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Votre message"
                      rows={5}
                      className="bg-slate-800 border-slate-700 focus:border-blue-500 text-white"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Envoyer
                  </Button>
                </form>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
