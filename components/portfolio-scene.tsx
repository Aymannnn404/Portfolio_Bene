"use client"

import { useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector3 } from "three"
import { usePortfolio } from "./portfolio-context"
import { PresentationSection } from "./sections/presentation-section"
import { SkillsSection } from "./sections/skills-section"
import { ProjectsSection } from "./sections/projects-section"
import { SynthesisSection } from "./sections/synthesis-section"
import { WatchSection } from "./sections/watch-section"
import { ContactSection } from "./sections/contact-section"
import * as THREE from "three"

export function PortfolioScene({ started }: { started: boolean }) {
  const { currentSection } = usePortfolio()
  const { camera } = useThree()
  const cameraTargetRef = useRef(new Vector3(0, 1.5, 0))

  // Define positions for each section
  const sectionPositions = {
    presentation: new Vector3(0, 1.5, 0),
    skills: new Vector3(-8, 1.5, 0),
    projects: new Vector3(0, 1.5, -8),
    synthesis: new Vector3(8, 1.5, 0),
    watch: new Vector3(0, 1.5, 8),
    contact: new Vector3(0, 6, 0),
  }

  // Update camera target when section changes
  useEffect(() => {
    if (started) {
      cameraTargetRef.current.copy(sectionPositions[currentSection])
    }
  }, [currentSection, started])

  // Smoothly move camera to target position
  useFrame((state, delta) => {
    if (started) {
      // Calculate direction to look at
      const direction = new Vector3().subVectors(cameraTargetRef.current, camera.position).normalize()

      // Calculate new position (orbit around target)
      const distance = 5
      const speed = 0.5
      const angle = state.clock.elapsedTime * speed

      const x = Math.sin(angle) * distance + cameraTargetRef.current.x
      const z = Math.cos(angle) * distance + cameraTargetRef.current.z

      // Smoothly interpolate camera position
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, x, delta)
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, z, delta)

      // Look at target
      camera.lookAt(cameraTargetRef.current)
    }
  })

  return (
    <group>
      {/* Central platform */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <cylinderGeometry args={[15, 15, 0.2, 64]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      {/* Sections */}
      <PresentationSection position={sectionPositions.presentation} isActive={currentSection === "presentation"} />
      <SkillsSection position={sectionPositions.skills} isActive={currentSection === "skills"} />
      <ProjectsSection position={sectionPositions.projects} isActive={currentSection === "projects"} />
      <SynthesisSection position={sectionPositions.synthesis} isActive={currentSection === "synthesis"} />
      <WatchSection position={sectionPositions.watch} isActive={currentSection === "watch"} />
      <ContactSection position={sectionPositions.contact} isActive={currentSection === "contact"} />

      {/* Decorative elements */}
      <Stars />
    </group>
  )
}

function Stars() {
  const starsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  const starCount = 2000
  const positions = new Float32Array(starCount * 3)

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 100
    positions[i3 + 1] = (Math.random() - 0.5) * 100
    positions[i3 + 2] = (Math.random() - 0.5) * 100
  }

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ffffff" sizeAttenuation />
    </points>
  )
}
