"use client"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-10", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item?.link}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-zinc-800 dark:bg-zinc-700 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-3 sm:p-4 overflow-hidden bg-zinc-900 border border-zinc-800 dark:border-zinc-700 group-hover:border-zinc-600 relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-2 sm:p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide mt-2 sm:mt-4 text-sm sm:text-base", className)}>
      {children}
    </h4>
  )
}

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-4 sm:mt-8 text-zinc-400 tracking-wide leading-relaxed text-xs sm:text-sm", className)}>
      {children}
    </p>
  )
}
