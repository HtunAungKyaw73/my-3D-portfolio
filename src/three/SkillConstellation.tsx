import { useMemo, useRef } from 'react'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from './scrollState'
import { skillGroups } from '../data/profile'

const CENTER_Z = -16

function Ring({
  index,
  radius,
  tilt,
  color,
  label,
  skills,
}: {
  index: number
  radius: number
  tilt: number
  color: string
  label: string
  skills: string[]
}) {
  const ring = useRef<THREE.Group>(null)

  const nodes = useMemo(() => {
    return skills.map((skill, i) => {
      const angle = (i / skills.length) * Math.PI * 2
      return {
        skill,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0,
        ] as [number, number, number],
      }
    })
  }, [radius, skills])

  useFrame((state) => {
    const g = ring.current
    if (!g) return
    const speed = scrollState.reducedMotion ? 0.02 : 0.1 + index * 0.03
    g.rotation.z = state.clock.elapsedTime * speed * (index % 2 === 0 ? 1 : -1)
  })

  return (
    <group rotation={[tilt, 0, 0]}>
      <group ref={ring}>
        <mesh>
          <torusGeometry args={[radius, 0.008, 8, 128]} />
          <meshBasicMaterial color={color} transparent opacity={0.35} />
        </mesh>
        {nodes.map((n) => (
          <group key={n.skill} position={n.position}>
            <mesh>
              <sphereGeometry args={[0.055, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
            <Html center distanceFactor={16} zIndexRange={[10, 0]}>
              <div className="pointer-events-none select-none whitespace-nowrap rounded border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[13px] text-gray-200 backdrop-blur-sm">
                {n.skill}
              </div>
            </Html>
          </group>
        ))}
      </group>
      <Html center distanceFactor={19} position={[0, radius + 0.55, 0]} zIndexRange={[10, 0]}>
        <div
          className="pointer-events-none select-none font-mono text-sm font-semibold uppercase tracking-[0.3em]"
          style={{ color }}
        >
          {label}
        </div>
      </Html>
    </group>
  )
}

const ringConfigs = [
  { radius: 2.4, tilt: 0.35, color: '#22d3ee' },
  { radius: 3.5, tilt: -0.45, color: '#a78bfa' },
  { radius: 4.6, tilt: 0.85, color: '#f472b6' },
  { radius: 5.7, tilt: -0.15, color: '#34d399' },
]

export function SkillConstellation() {
  const group = useRef<THREE.Group>(null)
  const core = useRef<THREE.Mesh>(null)
  const shell = useRef<THREE.Mesh>(null)
  const light = useRef<THREE.PointLight>(null)
  const coreMat = useRef<THREE.MeshStandardMaterial>(null)
  const shellMat = useRef<THREE.MeshBasicMaterial>(null)

  useFrame((state) => {
    const g = group.current
    if (!g || scrollState.reducedMotion) return
    g.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.25
    if (core.current) {
      core.current.rotation.y += 0.002
      core.current.rotation.x += 0.001
    }
    if (shell.current) shell.current.rotation.y -= 0.0015

    // Brightest at landing (progress 0), eases down as you scroll away
    const landing = 1 - THREE.MathUtils.smoothstep(scrollState.progress, 0, 0.25)
    if (coreMat.current) coreMat.current.emissiveIntensity = 0.55 + landing * 0.85
    if (shellMat.current) shellMat.current.opacity = 0.22 + landing * 0.28
    if (light.current) light.current.intensity = 14 + landing * 26
  })

  return (
    <group ref={group} position={[0, 0, CENTER_Z]}>
      {/* Single central sphere — warm amber (swapped from teal/green) */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[5.8, 3]} />
        <meshBasicMaterial
          ref={shellMat}
          color="#fbbf24"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[5.68, 3]} />
        <meshStandardMaterial
          ref={coreMat}
          color="#431407"
          emissive="#f59e0b"
          emissiveIntensity={0.55}
          transparent
          opacity={0.62}
          roughness={0.3}
          metalness={0.35}
          flatShading
        />
      </mesh>
      <pointLight ref={light} color="#f59e0b" intensity={14} distance={22} decay={2} />
      {skillGroups.map((groupData, i) => (
        <Ring
          key={groupData.label}
          index={i}
          label={groupData.label}
          skills={groupData.skills}
          {...ringConfigs[i]}
        />
      ))}
    </group>
  )
}
