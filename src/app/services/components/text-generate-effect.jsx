"use client"
import { useEffect, useState } from "react"

export const TextGenerateEffect = ({ words, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(words.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 30)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, words])

  return (
    <h1 className={`${className} text-white font-bold tracking-tight`}>
      {displayedText}
      <span className="animate-pulse text-gray-400">|</span>
    </h1>
  )
}
