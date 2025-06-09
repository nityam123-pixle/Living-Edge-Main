"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function LiquidButton({ children, text, className, onClick, disabled = false, variant = "orange" }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVibrating, setIsVibrating] = useState(false)

  const handleMouseEnter = () => {
    if (disabled) return
    setIsHovered(true)
    setTimeout(() => {
      setIsVibrating(true)
      setTimeout(() => setIsVibrating(false), 600)
    }, 800)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsVibrating(false)
  }

  const handleClick = () => {
    if (disabled || !onClick) return
    onClick()
  }

  const variants = {
    orange: {
      border: "border-orange-500",
      text: "text-orange-500",
      gradient: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",
    },
    blue: {
      border: "border-blue-500",
      text: "text-blue-500",
      gradient: "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500",
    },
    green: {
      border: "border-green-500",
      text: "text-green-500",
      gradient: "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500",
    },
    purple: {
      border: "border-purple-500",
      text: "text-purple-500",
      gradient: "bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500",
    },
    pink: {
      border: "border-pink-500",
      text: "text-pink-500",
      gradient: "bg-gradient-to-r from-pink-500 via-rose-500 to-red-500",
    },
    gray: {
        border: "border-gray-400",
        text: "text-white",
        gradient: "bg-gradient-to-r from-gray-600 via-gray-400 to-gray-300",
    }
  }

  const currentVariant = variants[variant]

  return (
    <motion.button
      className={cn(
        "relative px-10 py-4 border-2 font-semibold rounded-full overflow-hidden bg-transparent transition-colors duration-200",
        currentVariant.border,
        currentVariant.text,
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={disabled}
      animate={
        isVibrating && !disabled
          ? {
              scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
              rotate: [0, 2, -2, 1, -1, 0],
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }
          : {}
      }
    >
      {/* Main curved fill effect from bottom */}
      <motion.div
        className={cn("absolute inset-0 rounded-full", currentVariant.gradient)}
        initial={{
          clipPath: "ellipse(0% 0% at 50% 100%)",
        }}
        animate={
          isHovered && !disabled
            ? {
                clipPath: [
                  "ellipse(0% 0% at 50% 100%)",
                  "ellipse(60% 20% at 50% 100%)",
                  "ellipse(80% 35% at 50% 95%)",
                  "ellipse(90% 50% at 50% 90%)",
                  "ellipse(95% 65% at 50% 85%)",
                  "ellipse(98% 80% at 50% 80%)",
                  "ellipse(100% 90% at 50% 75%)",
                  "ellipse(100% 100% at 50% 50%)",
                ],
              }
            : {
                clipPath: "ellipse(0% 0% at 50% 100%)",
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
        }}
      />

      {/* Smooth water surface effect */}
      <motion.div
        className={cn("absolute inset-0 rounded-full", currentVariant.gradient)}
        style={{ opacity: 0.3 }}
        initial={{
          clipPath: "ellipse(0% 0% at 50% 100%)",
        }}
        animate={
          isHovered && !disabled
            ? {
                clipPath: [
                  "ellipse(0% 0% at 50% 100%)",
                  "ellipse(70% 25% at 50% 98%)",
                  "ellipse(85% 45% at 50% 96%)",
                  "ellipse(95% 65% at 50% 94%)",
                  "ellipse(98% 85% at 50% 92%)",
                  "ellipse(100% 100% at 50% 90%)",
                  "ellipse(100% 100% at 50% 50%)",
                ],
              }
            : {
                clipPath: "ellipse(0% 0% at 50% 100%)",
              }
        }
        transition={{
          duration: 0.9,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
          times: [0, 0.2, 0.4, 0.6, 0.8, 0.95, 1],
        }}
      />

      {/* Subtle water surface ripple */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
        }}
        initial={{ x: "-100%", opacity: 0 }}
        animate={
          isHovered && !disabled
            ? {
                x: ["100%", "200%"],
                opacity: [0, 0.6, 0],
              }
            : { x: "-100%", opacity: 0 }
        }
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: "easeInOut",
          repeat: 1,
        }}
      />

      {/* Water surface tension effect */}
      <motion.div
        className="absolute inset-x-0 bg-white/10 rounded-full"
        style={{ height: "2px" }}
        initial={{ bottom: "0%", opacity: 0 }}
        animate={
          isHovered && !disabled
            ? {
                bottom: ["0%", "20%", "40%", "60%", "80%", "90%", "50%"],
                opacity: [0, 0.4, 0.6, 0.8, 0.6, 0.4, 0],
              }
            : { bottom: "0%", opacity: 0 }
        }
        transition={{
          duration: 0.8,
          ease: "easeOut",
          times: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
        }}
      />

      {/* Curved shine effect */}
      <AnimatePresence>
        {isHovered && !disabled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-full"
            style={{
              clipPath: "ellipse(80% 40% at 50% 60%)",
            }}
            initial={{
              y: "100%",
              opacity: 0,
              clipPath: "ellipse(60% 20% at 50% 100%)",
            }}
            animate={{
              y: ["-120%", "-60%", "0%"],
              opacity: [0, 0.8, 0],
              clipPath: ["ellipse(60% 20% at 50% 100%)", "ellipse(70% 30% at 50% 80%)", "ellipse(80% 40% at 50% 60%)"],
            }}
            exit={{ y: "-120%", opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
          />
        )}
      </AnimatePresence>

      {/* Liquid ripple effect */}
      <motion.div
        className="absolute inset-0 border-2 border-white/20 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isHovered && !disabled
            ? {
                scale: [0.8, 1.1, 0.95, 1.05, 1],
                opacity: [0, 0.6, 0.3, 0.4, 0],
              }
            : { scale: 0.8, opacity: 0 }
        }
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      />

      <span
        className={cn(
          "relative z-10 transition-colors duration-400 font-medium",
          isHovered && !disabled ? "text-white" : currentVariant.text,
        )}
      >
        {children || text || "Liquid Button"}
      </span>
    </motion.button>
  )
}
