import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from './scrollState'

const COUNT = 900
const DEPTH = 70

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function ParticleField() {
  const points = useRef<THREE.Points>(null)

  const { positions, speeds } = useMemo(() => {
    const rand = mulberry32(42)
    const positions = new Float32Array(COUNT * 3)
    const speeds = new Float32Array(COUNT)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (rand() - 0.5) * 40
      positions[i * 3 + 1] = (rand() - 0.5) * 24
      positions[i * 3 + 2] = 14 - rand() * DEPTH
      speeds[i] = 0.15 + rand() * 0.5
    }
    return { positions, speeds }
  }, [])

  useFrame((state) => {
    if (!points.current || scrollState.reducedMotion) return
    const t = state.clock.elapsedTime
    const arr = points.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += Math.sin(t * 0.4 + i) * 0.0015 * speeds[i]
      arr[i * 3] += Math.cos(t * 0.3 + i * 1.7) * 0.0012 * speeds[i]
    }
    points.current.geometry.attributes.position.needsUpdate = true
    const mat = points.current.material as THREE.PointsMaterial
    mat.opacity = 0.35 + Math.abs(scrollState.velocity) * 0.4
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#67e8f9"
        transparent
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}
