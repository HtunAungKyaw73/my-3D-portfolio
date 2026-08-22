import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from './scrollState'

const ROWS = 26
const SPACING = 0.95
const Z_START = -23

export function ProjectTunnel() {
  const left = useRef<THREE.Points>(null)
  const right = useRef<THREE.Points>(null)
  const top = useRef<THREE.Points>(null)
  const bottom = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(ROWS * 3)
    for (let i = 0; i < ROWS; i++) {
      arr[i * 3] = 0
      arr[i * 3 + 1] = 0
      arr[i * 3 + 2] = Z_START - i * SPACING
    }
    return arr
  }, [])

  useFrame((state) => {
    if (scrollState.reducedMotion) return
    // slide rows toward the camera to sell forward motion while scrolling the tunnel
    const offset =
      ((scrollState.progress * 26 + state.clock.elapsedTime * 0.4) % SPACING) * SPACING
    for (const p of [left, right, top, bottom]) {
      if (!p.current) continue
      const arr = p.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < ROWS; i++) {
        arr[i * 3 + 2] = Z_START - i * SPACING + offset
      }
      p.current.geometry.attributes.position.needsUpdate = true
      const mat = p.current.material as THREE.PointsMaterial
      mat.opacity = 0.35 + Math.min(Math.abs(scrollState.velocity), 1) * 0.5
    }
  })

  const wallProps = [
    { ref: left, pos: [-4.6, 0, 0] as const, color: '#22d3ee' },
    { ref: right, pos: [4.6, 0, 0] as const, color: '#22d3ee' },
    { ref: top, pos: [0, 3.2, 0] as const, color: '#a78bfa' },
    { ref: bottom, pos: [0, -3.2, 0] as const, color: '#a78bfa' },
  ]

  return (
    <group>
      {wallProps.map((w, i) => (
        <points key={i} ref={w.ref} position={[w.pos[0], w.pos[1], w.pos[2]]}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions.slice(), 3]} />
          </bufferGeometry>
          <pointsMaterial
            size={0.09}
            color={w.color}
            transparent
            opacity={0.4}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>
      ))}
    </group>
  )
}
