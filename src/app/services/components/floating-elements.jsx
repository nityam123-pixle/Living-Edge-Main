"use client"
import { useEffect, useRef } from "react"

export const FloatingElements = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = []
    const numElements = 12

    for (let i = 0; i < numElements; i++) {
      const element = document.createElement("div")
      element.className = "absolute w-2 h-2 bg-gray-600 rounded-full opacity-20"
      element.style.left = Math.random() * 100 + "%"
      element.style.top = Math.random() * 100 + "%"
      element.style.animationDuration = 3 + Math.random() * 4 + "s"
      element.style.animationDelay = Math.random() * 2 + "s"
      element.style.animation = "float 6s ease-in-out infinite"
      container.appendChild(element)
      elements.push(element)
    }

    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
      }
    `
    document.head.appendChild(style)

    return () => {
      elements.forEach((el) => el.remove())
      style.remove()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
}
