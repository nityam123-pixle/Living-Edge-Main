"use client"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }) => {
  const beamsRef = useRef(null)

  useEffect(() => {
    const beams = beamsRef.current
    if (!beams) return

    const createBeam = () => {
      const beam = document.createElement("div")
      beam.className = "absolute bg-gradient-to-t from-[#3352CC] via-[#1C2D70] to-transparent opacity-20 animate-pulse"
      beam.style.left = Math.random() * 100 + "%"
      beam.style.width = "2px"
      beam.style.height = "100px"
      beam.style.animationDelay = Math.random() * 3 + "s"
      beam.style.animationDuration = Math.random() * 3 + 2 + "s"
      beams.appendChild(beam)

      setTimeout(() => {
        if (beams.contains(beam)) {
          beams.removeChild(beam)
        }
      }, 5000)
    }

    const interval = setInterval(createBeam, 300)
    return () => clearInterval(interval)
  }, [])

  return <div ref={beamsRef} className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} />
}
