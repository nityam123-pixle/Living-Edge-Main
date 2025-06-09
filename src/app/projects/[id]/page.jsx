"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, X, ZoomIn, Grid3X3, ChevronLeft, ChevronRight, Home, Calendar } from "lucide-react"
import { projects } from "../data/projects"

// Background Grid Component
const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  )
}

// Lightbox Component
const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose, onNext, onPrev])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
        >
          <X className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Project image ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="max-w-full max-h-full object-contain"
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === params.id)
    if (foundProject) {
      setProject(foundProject)
      setCurrentProject(projects.indexOf(foundProject))
    }
  }, [params.id])

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const nextProject = () => {
    const nextIndex = currentProject === projects.length - 1 ? 0 : currentProject + 1
    router.push(`/projects/${projects[nextIndex].id}`)
  }

  const prevProject = () => {
    const prevIndex = currentProject === 0 ? projects.length - 1 : currentProject - 1
    router.push(`/projects/${projects[prevIndex].id}`)
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundGrid />

      <div className="relative z-10">
        {/* Navigation Header */}
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => router.push("/projects")}
                className="text-white hover:text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevProject}
                  className="text-white hover:text-gray-300 hover:bg-gray-800"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  {currentProject + 1} of {projects.length}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextProject}
                  className="text-white hover:text-gray-300 hover:bg-gray-800"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                {project.name}
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">{project.fullDescription}</p>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <Grid3X3 className="w-5 h-5" />
                <span>{project.images.length} Images</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Home className="w-5 h-5" />
                <span>Interior Design</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.name} - Image ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/50 px-2 py-1 rounded text-white text-xs">
                        {index + 1}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {currentProject > 0 && (
                      <Button
                        variant="outline"
                        onClick={prevProject}
                        className="border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous Project
                      </Button>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() => router.push("/projects")}
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                  >
                    <Grid3X3 className="w-4 h-4 mr-2" />
                    All Projects
                  </Button>

                  <div className="flex items-center gap-4">
                    {currentProject < projects.length - 1 && (
                      <Button
                        variant="outline"
                        onClick={nextProject}
                        className="border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        Next Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={project.images}
            currentIndex={currentImageIndex}
            onClose={() => setLightboxOpen(false)}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
