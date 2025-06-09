"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Heart, Share2, Download } from "lucide-react"

export default function ImageModal({ image, onClose }) {
  if (!image) return null

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      {image && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 max-w-6xl max-h-[90vh] mx-4 bg-gray-900 rounded-2xl overflow-hidden border border-gray-700"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{image.title}</h2>
                <p className="text-gray-400">
                  {image.category} • {image.year}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Heart className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Share2 className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Download className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <motion.img
                src={image.image}
                alt={image.title}
                className="w-full max-h-[60vh] object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />

              {/* Navigation buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Details */}
            <div className="p-6">
              <p className="text-gray-300 text-lg mb-4">{image.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {image.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:border-white transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="text-white font-semibold mb-2">Project Details</h4>
                  <p className="text-gray-400">Category: {image.category}</p>
                  <p className="text-gray-400">Year: {image.year}</p>
                  <p className="text-gray-400">Style: {image.tags.join(", ")}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Specifications</h4>
                  <p className="text-gray-400">Area: 1,200 sq ft</p>
                  <p className="text-gray-400">Duration: 3 months</p>
                  <p className="text-gray-400">Budget: Premium</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Materials</h4>
                  <p className="text-gray-400">Natural wood</p>
                  <p className="text-gray-400">Premium stone</p>
                  <p className="text-gray-400">Custom lighting</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
