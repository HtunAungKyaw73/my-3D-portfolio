import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import * as THREE from 'three'
import { CameraRig } from './CameraRig'
import { ParticleField } from './ParticleField'
import { HeroShapes } from './HeroShapes'
import { SkillConstellation } from './SkillConstellation'
import { ProjectTunnel } from './ProjectTunnel'
import { ContactCore } from './ContactCore'

export function Experience() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 60, near: 0.1, far: 120, position: [0, 0.4, 10] }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor('#05060a')
          scene.fog = new THREE.Fog('#05060a', 8, 34)
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 3, 6]} intensity={20} color="#22d3ee" distance={25} />
          <pointLight position={[0, 0, -16]} intensity={18} color="#a78bfa" distance={30} />
          <CameraRig />
          <ParticleField />
          <HeroShapes />
          <SkillConstellation />
          <ProjectTunnel />
          <ContactCore />
        </Suspense>
      </Canvas>
    </div>
  )
}
