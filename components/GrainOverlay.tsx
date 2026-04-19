"use client"

import { useEffect, useRef } from "react"

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const generateNoise = () => {
      const w = canvas.width
      const h = canvas.height
      const imageData = ctx.createImageData(w, h)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = 12 // Opacity of the grain
      }

      ctx.putImageData(imageData, 0, 0)
    }

    const loop = () => {
      generateNoise()
      animationFrameId = window.requestAnimationFrame(loop)
    }

    window.addEventListener("resize", resize)
    resize()
    loop()

    return () => {
      window.removeEventListener("resize", resize)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] mix-blend-overlay"
    />
  )
}
