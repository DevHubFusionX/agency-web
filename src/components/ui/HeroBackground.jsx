import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 100
const CONNECTION_DISTANCE = 3
const BOUNDS = { x: 15, y: 10, z: 8 }

// Particle system with connections
function ParticleNetwork() {
    const meshRef = useRef()
    const linesRef = useRef()
    const particlesData = useRef([])

    // Initialize particles with random positions and velocities
    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(PARTICLE_COUNT * 3)
        const colors = new Float32Array(PARTICLE_COUNT * 3)

        // Blue gradient colors from theme
        const color1 = new THREE.Color('#38a9f8') // Light blue
        const color2 = new THREE.Color('#0056B8') // Primary blue

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // Random positions within bounds
            positions[i * 3] = (Math.random() - 0.5) * BOUNDS.x * 2
            positions[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS.y * 2
            positions[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS.z * 2

            // Store velocity and phase for animation
            particlesData.current.push({
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.008,
                    (Math.random() - 0.5) * 0.008,
                    (Math.random() - 0.5) * 0.004
                ),
                phase: Math.random() * Math.PI * 2
            })

            // Gradient color based on position
            const mixFactor = Math.random()
            const color = color1.clone().lerp(color2, mixFactor)
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }

        return { positions, colors }
    }, [])

    // Line connections geometry
    const lineGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry()
        // Pre-allocate for maximum possible connections
        const maxConnections = PARTICLE_COUNT * PARTICLE_COUNT / 2
        const linePositions = new Float32Array(maxConnections * 6)
        const lineColors = new Float32Array(maxConnections * 6)
        geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))
        geometry.setDrawRange(0, 0)
        return geometry
    }, [])

    useFrame((state) => {
        if (!meshRef.current) return

        const time = state.clock.elapsedTime
        const positionAttr = meshRef.current.geometry.attributes.position
        const positions = positionAttr.array

        // Update particle positions with gentle floating motion
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const data = particlesData.current[i]
            const idx = i * 3

            // Gentle sine wave motion
            positions[idx] += data.velocity.x + Math.sin(time * 0.5 + data.phase) * 0.003
            positions[idx + 1] += data.velocity.y + Math.cos(time * 0.3 + data.phase) * 0.003
            positions[idx + 2] += data.velocity.z + Math.sin(time * 0.4 + data.phase) * 0.002

            // Boundary wrapping
            if (positions[idx] > BOUNDS.x) positions[idx] = -BOUNDS.x
            if (positions[idx] < -BOUNDS.x) positions[idx] = BOUNDS.x
            if (positions[idx + 1] > BOUNDS.y) positions[idx + 1] = -BOUNDS.y
            if (positions[idx + 1] < -BOUNDS.y) positions[idx + 1] = BOUNDS.y
            if (positions[idx + 2] > BOUNDS.z) positions[idx + 2] = -BOUNDS.z
            if (positions[idx + 2] < -BOUNDS.z) positions[idx + 2] = BOUNDS.z
        }
        positionAttr.needsUpdate = true

        // Update connection lines
        if (linesRef.current) {
            const linePositions = linesRef.current.geometry.attributes.position.array
            const lineColors = linesRef.current.geometry.attributes.color.array
            let lineIndex = 0

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                for (let j = i + 1; j < PARTICLE_COUNT; j++) {
                    const dx = positions[i * 3] - positions[j * 3]
                    const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
                    const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

                    if (dist < CONNECTION_DISTANCE) {
                        const alpha = 1 - dist / CONNECTION_DISTANCE

                        // Start point
                        linePositions[lineIndex * 6] = positions[i * 3]
                        linePositions[lineIndex * 6 + 1] = positions[i * 3 + 1]
                        linePositions[lineIndex * 6 + 2] = positions[i * 3 + 2]
                        // End point
                        linePositions[lineIndex * 6 + 3] = positions[j * 3]
                        linePositions[lineIndex * 6 + 4] = positions[j * 3 + 1]
                        linePositions[lineIndex * 6 + 5] = positions[j * 3 + 2]

                        // Blue color with distance-based intensity
                        const intensity = alpha * 0.6
                        lineColors[lineIndex * 6] = 0.22 * intensity
                        lineColors[lineIndex * 6 + 1] = 0.66 * intensity
                        lineColors[lineIndex * 6 + 2] = 0.97 * intensity
                        lineColors[lineIndex * 6 + 3] = 0.22 * intensity
                        lineColors[lineIndex * 6 + 4] = 0.66 * intensity
                        lineColors[lineIndex * 6 + 5] = 0.97 * intensity

                        lineIndex++
                    }
                }
            }

            linesRef.current.geometry.setDrawRange(0, lineIndex * 2)
            linesRef.current.geometry.attributes.position.needsUpdate = true
            linesRef.current.geometry.attributes.color.needsUpdate = true
        }

        // Subtle camera float
        state.camera.position.x = Math.sin(time * 0.1) * 0.5
        state.camera.position.y = Math.cos(time * 0.15) * 0.3
    })

    return (
        <>
            {/* Particles */}
            <points ref={meshRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={PARTICLE_COUNT}
                        array={positions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={PARTICLE_COUNT}
                        array={colors}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Connection Lines */}
            <lineSegments ref={linesRef} geometry={lineGeometry}>
                <lineBasicMaterial
                    vertexColors
                    transparent
                    opacity={0.5}
                    blending={THREE.AdditiveBlending}
                />
            </lineSegments>
        </>
    )
}

// Main component
const HeroBackground = () => {
    return (
        <div
            className="absolute inset-0 overflow-hidden"
            style={{ zIndex: 0 }}
        >
            <Canvas
                camera={{ position: [0, 0, 12], fov: 60 }}
                dpr={[1, 2]}
                style={{
                    background: 'transparent',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <ParticleNetwork />
            </Canvas>

            {/* Subtle gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0.6) 100%)'
                }}
            />
        </div>
    )
}

export default HeroBackground

