import { useEffect, useRef } from 'react'

export default function TempleCanvas({ className = '', style = {} }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let animationFrameId
    let isVisible = true
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Golden sparks / Diya ember particles
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55)
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        color: Math.random() > 0.4 ? 'rgba(201, 162, 94, ' : 'rgba(235, 185, 110, ',
        baseAlpha: Math.random() * 0.4 + 0.15,
        alpha: Math.random() * 0.4 + 0.15,
        speedY: Math.random() * 0.35 + 0.1, // float gently upward
        speedX: (Math.random() - 0.5) * 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI * 2
      })
    }

    // Mouse gentle interaction
    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const parent = canvas.parentElement || canvas
    parent.addEventListener('mousemove', handleMouseMove)
    parent.addEventListener('mouseleave', handleMouseLeave)

    // Visibility observer to save battery/CPU
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    }, { threshold: 0.1 })

    observer.observe(canvas)

    // Animation Loop
    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height)

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]

          // Float upward
          p.y -= p.speedY
          p.x += p.speedX
          p.pulseVal += p.pulseSpeed
          p.alpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.15

          // Mouse sway
          if (mouseX > 0) {
            const dx = p.x - mouseX
            const dy = p.y - mouseY
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 120) {
              const force = (120 - dist) / 120
              p.x += (dx / (dist || 1)) * force * 1.5
              p.y += (dy / (dist || 1)) * force * 1.5
            }
          }

          // Wrap edges
          if (p.y < -10) {
            p.y = height + 10
            p.x = Math.random() * width
          }
          if (p.x < -10) p.x = width + 10
          if (p.x > width + 10) p.x = -10

          // Draw soft glowing gold ember
          ctx.beginPath()
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5)
          grad.addColorStop(0, `${p.color}${Math.max(0, Math.min(1, p.alpha * 1.5))})`)
          grad.addColorStop(0.5, `${p.color}${Math.max(0, Math.min(1, p.alpha * 0.7))})`)
          grad.addColorStop(1, `${p.color}0)`)

          ctx.fillStyle = grad
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      parent.removeEventListener('mousemove', handleMouseMove)
      parent.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`temple-canvas ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        ...style
      }}
      aria-hidden="true"
    />
  )
}
