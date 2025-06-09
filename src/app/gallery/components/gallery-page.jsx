"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Eye, Heart, Share2, ArrowLeft } from "lucide-react"
import AnimatedBackground from "./animated-background"
import ImageModal from "./image-modal"
import Link from "next/link"
import Image from "next/image"

const galleryData = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    category: "Living Room",
    image: "/images/living-edge 8.jpeg?height=400&width=600",
    description: "Clean lines and neutral tones create a serene living space",
    tags: ["Modern", "Minimalist", "Neutral"],
    year: "2024",
  },
  {
    id: 2,
    title: "Industrial Kitchen Design",
    category: "Kitchen",
    image: "/images/living-edge 14.jpeg?height=400&width=600",
    description: "Raw materials meet sophisticated functionality",
    tags: ["Industrial", "Modern", "Dark"],
    year: "2024",
  },
  {
    id: 3,
    title: "Luxury Master Bedroom",
    category: "Bedroom",
    image: "/images/living-edge 11.jpeg?height=400&width=600",
    description: "Elegant comfort with premium materials and textures",
    tags: ["Luxury", "Elegant", "Comfort"],
    year: "2023",
  },
  {
    id: 4,
    title: "Contemporary Office Space",
    category: "Office",
    image: "/images/living-edge 1.jpeg?height=400&width=600",
    description: "Productivity meets style in this modern workspace",
    tags: ["Contemporary", "Professional", "Clean"],
    year: "2024",
  },
  {
    id: 5,
    title: "Scandinavian Dining Room",
    category: "Dining Room",
    image: "/panache/p_11.jpg?height=400&width=600",
    description: "Warm wood tones and cozy textures",
    tags: ["Scandinavian", "Warm", "Natural"],
    year: "2023",
  },
  {
    id: 6,
    title: "Modern Wardrobe Closet",
    category: "Bathroom",
    image: "/panache/p_10.jpg?height=400&width=600",
    description: "Premium wardrobe closet",
    tags: ["Modern", "Luxury", "Complex"],
    year: "2024",
  },
  {
    id: 7,
    title: "Cozy Reading Nook",
    category: "Living Room",
    image: "/panache/p_3.jpg?height=400&width=600",
    description: "Perfect corner for relaxation and contemplation",
    tags: ["Cozy", "Comfortable", "Intimate"],
    year: "2023",
  },
  {
    id: 8,
    title: "Executive Home Office",
    category: "Office",
    image: "/images/living-edge 5.jpeg?height=400&width=600",
    description: "Sophisticated workspace with custom built-ins",
    tags: ["Executive", "Custom", "Sophisticated"],
    year: "2024",
  },
]

const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Office", "Dining Room", "Bathroom"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(galleryData)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    let filtered = galleryData

    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredData(filtered)
  }, [selectedCategory, searchTerm])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="bg-black text-white relative overflow-hidden pb-20">
        <div className="absolute top-4 left-4 z-50 flex items-center space-x-4">
                <Link href="/">
                    <Image
                        src="/logo2.png" // Replace with your actual logo path
                        alt="Logo"
                        width={120}
                        height={60}
                        className="object-contain"
                        priority
                    />
                </Link>
                <Link href="/">
                    <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition">
                        <ArrowLeft size={16} />
                        Home
                    </button>
                </Link>
            </div>
      <AnimatedBackground />

      {/* Hero Section */}
      <motion.section
        className="relative z-10 pt-20 pb-16 px-4 text-center"
        variants={heroVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Gallery
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Explore our curated collection of interior design masterpieces, where every space tells a unique story of
          elegance and functionality.
        </motion.p>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section
        className="relative z-10 px-4 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-white transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-white text-black hover:bg-gray-200"
                      : "border-gray-600 text-gray-300 hover:border-white hover:text-white bg-transparent"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section
        className="relative z-10 px-4 pb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <Card className="bg-gray-900/30 border-gray-800 overflow-hidden backdrop-blur-sm hover:border-gray-600 transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-3">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                          >
                            <Eye className="w-5 h-5 text-white" />
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                          >
                            <Heart className="w-5 h-5 text-white" />
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                          >
                            <Share2 className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-black/70 text-white border-none">
                        {item.category}
                      </Badge>
                      <Badge className="absolute top-3 right-3 bg-white/20 text-white border-none backdrop-blur-sm">
                        {item.year}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gray-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs border-gray-600 text-gray-300 hover:border-white transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredData.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-2xl text-gray-400 mb-4">No projects found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Image Modal */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  )
}
