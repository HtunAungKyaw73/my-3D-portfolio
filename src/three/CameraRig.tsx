import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from './scrollState'

const cameraPath = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(0, 0.4, 10),
    new THREE.Vector3(0, 0, 4),
    new THREE.Vector3(0, 0, -6),
    new THREE.Vector3(0, 1, -17),
    new THREE.Vector3(0, 0, -32),
    new THREE.Vector3(0, 0, -50),
  ],
  false,
  'catmullrom',
  0.5,
)

const targetPath = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -2),
    new THREE.Vector3(0, 0, -16),
    new THREE.Vector3(0, 0, -30),
    new THREE.Vector3(0, 0, -50),
  ],
  false,
  'catmullrom',
  0.5,
)

const damp = THREE.MathUtils.damp

export function CameraRig() {
  const camera = useThree((s) => s.camera)
  const pos = useRef(new THREE.Vector3(0, 0.4, 10))
  const look = useRef(new THREE.Vector3(0, 0, 0))
  const smooth = useRef(0)

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.05)
    smooth.current = damp(smooth.current, scrollState.progress, 4, d)
    const t = THREE.MathUtils.clamp(smooth.current, 0, 1)

    cameraPath.getPointAt(t, pos.current)
    targetPath.getPointAt(t, look.current)

    const parallax = scrollState.reducedMotion ? 0 : 1
    pos.current.x += scrollState.mouseX * 0.35 * parallax
    pos.current.y += -scrollState.mouseY * 0.25 * parallax

    camera.position.lerp(pos.current, 1 - Math.exp(-8 * d))
    camera.lookAt(look.current)
  })

  return null
}
