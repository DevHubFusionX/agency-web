import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const CodeParticles = () => {
  const pointsRef = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(800 * 3)
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Points ref={pointsRef} positions={particles} stride={3}>
      <PointMaterial
        color="#3b82f6"
        size={0.015}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </Points>
  )
}

const FloatingCubes = () => {
  const groupRef = useRef()

  const cubes = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: 0.3 + Math.random() * 0.4
    }))
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((cube, i) => {
        cube.rotation.x += 0.01 + i * 0.001
        cube.rotation.y += 0.008 + i * 0.0005
        cube.position.y = cubes[i].position[1] + Math.sin(state.clock.elapsedTime + i) * 0.5
      })
    }
  })

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.position} scale={cube.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#6366f1' : '#8b5cf6'}
            transparent
            opacity={0.1}
            wireframe
          />
        </mesh>
      ))}
    </group>
  )
}

const StartupRings = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -6]}>
      {[...Array(4)].map((_, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, (i * Math.PI) / 4]}>
          <torusGeometry args={[2 + i * 0.8, 0.02, 16, 100]} />
          <meshStandardMaterial
            color={`hsl(${220 + i * 15}, 70%, 60%)`}
            transparent
            opacity={0.3 - i * 0.05}
          />
        </mesh>
      ))}
    </group>
  )
}

const TechSphere = ({ position }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.8, 2]} />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  )
}

const PremiumBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#3b82f6" />

        <CodeParticles />
        <FloatingCubes />
        <StartupRings />
        <TechSphere position={[-4, 2, -3]} />
        <TechSphere position={[5, -1, -4]} />
        <TechSphere position={[2, 3, -2]} />
      </Canvas>
    </div>
  )
}

export default PremiumBackground