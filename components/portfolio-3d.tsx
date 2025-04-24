"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { PortfolioScene } from "@/components/portfolio-scene"
import { Interface } from "@/components/interface"
import { Suspense } from "react"

export default function Portfolio3D({ started }: { started: boolean }) {
  return (
    <>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 1.5, 5]} fov={75} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <PortfolioScene started={started} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={10}
        />
      </Canvas>

      {started && <Interface />}
    </>
  )
}
