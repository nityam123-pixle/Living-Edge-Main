"use client"
import { useEffect, useRef } from "react"

export const BackgroundBeams = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const beams = []
    const numBeams = 6

    for (let i = 0; i < numBeams; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.7,
        length: 150 + Math.random() * 300,
        opacity: 0.05 + Math.random() * 0.15,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length,
        )

        gradient.addColorStop(0, `rgba(255, 255, 255, ${beam.opacity})`)
        gradient.addColorStop(0.5, `rgba(156, 163, 175, ${beam.opacity * 0.6})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(beam.x, beam.y)
        ctx.lineTo(beam.x + Math.cos(beam.angle) * beam.length, beam.y + Math.sin(beam.angle) * beam.length)
        ctx.stroke()

        beam.x += Math.cos(beam.angle) * beam.speed
        beam.y += Math.sin(beam.angle) * beam.speed

        if (
          beam.x < -beam.length ||
          beam.x > canvas.width + beam.length ||
          beam.y < -beam.length ||
          beam.y > canvas.height + beam.length
        ) {
          beam.x = Math.random() * canvas.width
          beam.y = Math.random() * canvas.height
          beam.angle = Math.random() * Math.PI * 2
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" style={{ background: "transparent" }} />
}
