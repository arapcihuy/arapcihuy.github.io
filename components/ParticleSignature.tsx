"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export default function ParticleSignature() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const count = Math.min(150, Math.floor((width * height) / 8000))
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6'
      })
    }
    particlesRef.current = particles
  }, [])

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height)
    
    const particles = particlesRef.current
    const mouse = mouseRef.current
    
    particles.forEach((p, i) => {
      p.x += p.vx
      p.y += p.vy
      
      if (p.x < 0 || p.x > width) p.vx *= -1
      if (p.y < 0 || p.y > height) p.vy *= -1
      
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 100) {
        const force = (100 - dist) / 100
        p.vx -= (dx / dist) * force * 0.5
        p.vy -= (dy / dist) * force * 0.5
      }
      
      p.vx *= 0.99
      p.vy *= 0.99
      
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.opacity
      ctx.fill()
      
      particles.slice(i + 1).forEach(p2 => {
        const dx2 = p.x - p2.x
        const dy2 = p.y - p2.y
        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
        
        if (dist2 < 100) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = p.color
          ctx.globalAlpha = (1 - dist2 / 100) * 0.2
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })
    })
    
    ctx.globalAlpha = 1
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      initParticles(canvas.width, canvas.height)
    }
    
    resize()
    window.addEventListener('resize', resize)
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)
    
    const animate = () => {
      draw(ctx, canvas.width, canvas.height)
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()
    
    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [draw, initParticles])

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 z-[4] pointer-events-auto cursor-none"
      style={{ mixBlendMode: 'screen' } as React.CSSProperties}
    />
  )
}
