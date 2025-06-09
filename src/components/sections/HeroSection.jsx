'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cover } from "@/components/ui/cover"
import Image from "next/image"

const text = "Living Edge, Crafting Dreams and"
const words = text.split(" ")

const HeroSection = () => {
  const [animateRest, setAnimateRest] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateRest(true), 1000) // delay rest after bg loads
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="w-full h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url('/bg-4.jpeg')` }}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Header: Logo and Contact button */}
      <div className="w-full flex justify-between items-center px-6 pt-6 relative z-10">
        <motion.a
          href="/"
          initial={{ y: -100, opacity: 0, rotate: -90 }}
          animate={animateRest ? { y: 0, opacity: 1, rotate: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
        >
          <Image
            src="/logo2.png"
            width={120}
            height={100}
            className="max-h-[100px] h-full object-contain"
            alt="logo"
          />
        </motion.a>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={animateRest ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-white border border-[#525252] rounded-full px-6 py-2 text-sm font-semibold hover:bg-[#5070ff2f] transition"
        >
          Contact Us
        </motion.a>
      </div>

      {/* Hero Section */}
      <div className="w-full mt-60 flex items-center pl-6 md:pl-[60px] relative z-10">
        <div className="max-w-[600px]">
          <div className="text-start text-3xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-300 dark:from-neutral-100 dark:to-white py-2 md:py-6">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ y: 60, opacity: 0 }}
                animate={animateRest ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.4 + idx * 0.15 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ y: 60, opacity: 0 }}
              animate={animateRest ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.4 + words.length * 0.15 }}
              className="inline-block ml-2"
            >
              <Cover>Interiors</Cover>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroSection
