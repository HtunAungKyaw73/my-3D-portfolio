import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from './scrollState'

const CENTER_Z = -50

export function ContactCore() {
  const core = useRef<THREE.Mesh>(null)
  const shell = useRef<THREE.Mesh>(null)
  const light = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const pulse = 1 + Math.sin(t * 1.6) * 0.06
    if (core.current) {
      core.current.scale.setScalar(pulse)
      core.current.rotation.y = scrollState.reducedMotion ? 0 : t * 0.3
      core.current.rotation.x = scrollState.reducedMotion ? 0 : t * 0.18
    }
    if (shell.current) {
      shell.current.scale.setScalar(1.9 + Math.sin(t * 1.6) * 0.08)
      shell.current.rotation.y = scrollState.reducedMotion ? 0 : -t * 0.12
      shell.current.rotation.z = scrollState.reducedMotion ? 0 : t * 0.07
    }
    if (light.current) {
      light.current.intensity = 14 + Math.sin(t * 1.6) * 4
    }
  })

  return (
    <group position={[0, 0, CENTER_Z]}>
      <pointLight ref={light} color="#a78bfa" intensity={14} distance={30} />
      <mesh ref={core}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#0b1020"
          emissive="#a78bfa"
          emissiveIntensity={1.4}
          roughness={0.15}
          metalness={0.9}
          flatShading
        />
      </mesh>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.28} />
      </mesh>
    </group>
  )
}
