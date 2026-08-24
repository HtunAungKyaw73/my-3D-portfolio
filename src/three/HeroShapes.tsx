import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from './scrollState'

type Shape = {
  kind: 'icosahedron' | 'torusKnot' | 'octahedron'
  position: [number, number, number]
  scale: number
  color: string
  spin: number
}

const shapes: Shape[] = [
  { kind: 'torusKnot', position: [-3.4, 1.2, -1.5], scale: 0.85, color: '#a78bfa', spin: -0.2 },
  { kind: 'icosahedron', position: [3.6, -1.1, -1], scale: 1.05, color: '#f472b6', spin: 0.16 },
  { kind: 'octahedron', position: [2.6, 2.2, -2.5], scale: 0.6, color: '#22d3ee', spin: -0.25 },
  { kind: 'octahedron', position: [-2.8, -1.9, -2], scale: 0.55, color: '#a78bfa', spin: 0.3 },
]

function Geometry({ kind }: { kind: Shape['kind'] }) {
  if (kind === 'torusKnot') return <torusKnotGeometry args={[0.7, 0.22, 128, 24]} />
  if (kind === 'octahedron') return <octahedronGeometry args={[1, 0]} />
  return <icosahedronGeometry args={[1, 1]} />
}

function ShapeMesh({ shape }: { shape: Shape }) {
  const group = useRef<THREE.Group>(null)
  const base = useMemo(() => new THREE.Vector3(...shape.position), [shape])

  useFrame((state) => {
    const g = group.current
    if (!g) return
    const t = state.clock.elapsedTime

    // scatter outward as the camera flies "through" the gate (progress 0.12 → 0.32)
    const p = scrollState.progress
    const open = THREE.MathUtils.smoothstep(p, 0.12, 0.32)
    const dir = base.clone().normalize()
    g.position.copy(base).addScaledVector(dir, open * 14)
    g.position.y += Math.sin(t * 0.5 + base.x) * (scrollState.reducedMotion ? 0 : 0.15)

    const spin = shape.spin * (scrollState.reducedMotion ? 0.15 : 1)
    g.rotation.y = t * spin
    g.rotation.x = t * spin * 0.6
  })

  return (
    <group ref={group}>
      <mesh scale={shape.scale}>
        <Geometry kind={shape.kind} />
        <meshBasicMaterial color={shape.color} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={shape.scale * 0.985}>
        <Geometry kind={shape.kind} />
        <meshStandardMaterial
          color="#0b1020"
          emissive={shape.color}
          emissiveIntensity={0.25}
          transparent
          opacity={0.9}
          roughness={0.2}
          metalness={0.8}
          flatShading
        />
      </mesh>
    </group>
  )
}

export function HeroShapes() {
  return (
    <group>
      {shapes.map((s) => (
        <ShapeMesh key={`${s.kind}-${s.position.join()}`} shape={s} />
      ))}
    </group>
  )
}
