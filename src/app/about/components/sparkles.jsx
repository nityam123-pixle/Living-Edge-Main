"use client"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function SparklesCore({ id, background, minSize, maxSize, speed, particleColor, className, particleDensity }) {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const animationRef = useRef(null)
  const isCanvasReady = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === canvas) {
          canvas.width = entry.contentRect.width
          canvas.height = entry.contentRect.height
          isCanvasReady.current = true
          initParticles()
        }
      }
    })

    resizeObserver.observe(canvas)

    const initParticles = () => {
      const { width, height } = canvas
      particles.current = []
      const particleCount = particleDensity || 50
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = Math.random() * (maxSize - minSize) + minSize
        const opacity = Math.random()
        const speedFactor = speed || 0.2
        const velocity = {
          x: (Math.random() - 0.5) * speedFactor,
          y: (Math.random() - 0.5) * speedFactor,
        }

        particles.current.push({
          x,
          y,
          size,
          opacity,
          velocity,
        })
      }
    }

    const render = () => {
      if (!isCanvasReady.current) {
        animationRef.current = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.current.forEach((particle) => {
        ctx.fillStyle = particleColor || "#FFFFFF"
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y *= -1
        }

        // Random changes
        if (Math.random() < 0.005) {
          particle.velocity.x = (Math.random() - 0.5) * (speed || 0.2)
          particle.velocity.y = (Math.random() - 0.5) * (speed || 0.2)
        }
      })

      animationRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      resizeObserver.disconnect()
    }
  }, [maxSize, minSize, particleColor, particleDensity, speed])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("h-full w-full", className)}
      style={{
        background: background || "transparent",
      }}
    />
  )
}
