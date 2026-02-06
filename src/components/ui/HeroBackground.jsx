import { useEffect, useRef } from 'react'

const HeroBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Create particles
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.vx = (Math.random() - 0.5) * 0.5
                this.vy = (Math.random() - 0.5) * 0.5
                this.radius = Math.random() * 2 + 1
                this.opacity = Math.random() * 0.5 + 0.2
            }

            update() {
                this.x += this.vx
                this.y += this.vy

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width
                if (this.x > canvas.width) this.x = 0
                if (this.y < 0) this.y = canvas.height
                if (this.y > canvas.height) this.y = 0
            }

            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(56, 169, 248, ${this.opacity})`
                ctx.fill()
            }
        }

        // Initialize particles (fewer for better performance)
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle())
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            // Draw connections (only nearby particles for performance)
            particles.forEach((p1, i) => {
                particles.slice(i + 1, i + 10).forEach(p2 => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 150) {
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = `rgba(56, 169, 248, ${0.1 * (1 - distance / 150)})`
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                })
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
            {/* Canvas particle animation */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{
                    background: 'transparent',
                    opacity: 0.6
                }}
            />

            {/* CSS Gradient Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(circle at 20% 30%, rgba(56, 169, 248, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(0, 86, 184, 0.1) 0%, transparent 40%),
            radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0.6) 100%)
          `
                }}
            />

            {/* Animated gradient orbs (CSS only) */}
            <div
                className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
                style={{
                    top: '10%',
                    left: '15%',
                    background: 'radial-gradient(circle, #38a9f8 0%, transparent 70%)',
                    animation: 'float 20s ease-in-out infinite'
                }}
            />
            <div
                className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse"
                style={{
                    bottom: '15%',
                    right: '10%',
                    background: 'radial-gradient(circle, #0056B8 0%, transparent 70%)',
                    animation: 'float 25s ease-in-out infinite reverse',
                    animationDelay: '5s'
                }}
            />
        </div>
    )
}

export default HeroBackground
