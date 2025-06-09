"use client"
import { useState } from "react"

export const HoverEffect = ({ items, className = "" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative z-20 bg-black p-4 rounded-2xl overflow-hidden border border-transparent group-hover:border-slate-700 transition duration-200">
            <div className="relative z-50">
              <div className="p-4">
                <h4 className="text-zinc-100 font-bold tracking-wide mt-4">{item.title}</h4>
                <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
