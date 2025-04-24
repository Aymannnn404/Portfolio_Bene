"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SkillsSection() {
  const skills = {
    languages: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Python", level: 70 },
      { name: "Java", level: 65 },
    ],
    frameworks: [
      { name: "React", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "Bootstrap", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "PHPMyAdmin", level: 85 },
    ],
  }

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
        <span className="text-blue-400">Compétences</span>
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-clean-card border-slate-700">
          <CardContent className="pt-6">
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-slate-800">
                <TabsTrigger
                  value="languages"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Langages
                </TabsTrigger>
                <TabsTrigger
                  value="frameworks"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Frameworks
                </TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Outils
                </TabsTrigger>
              </TabsList>

              <TabsContent value="languages">
                <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-6">
                  {skills.languages.map((skill) => (
                    <motion.div key={skill.name} variants={item} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-slate-300">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-slate-800" indicatorClassName="bg-blue-600" />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="frameworks">
                <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-6">
                  {skills.frameworks.map((skill) => (
                    <motion.div key={skill.name} variants={item} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-slate-300">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-slate-800" indicatorClassName="bg-blue-600" />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="tools">
                <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-6">
                  {skills.tools.map((skill) => (
                    <motion.div key={skill.name} variants={item} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-slate-300">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-slate-800" indicatorClassName="bg-blue-600" />
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
