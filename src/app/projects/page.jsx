"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Grid3X3, List, Eye, ArrowLeft } from "lucide-react"
import { projects } from "./data/projects"

// Aceternity UI Background Grid Component
const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
    </div>
  )
}

// Spotlight Effect Component
const Spotlight = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gray-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-2000" />
    </div>
  )
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    const filtered = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredProjects(filtered)
  }, [searchTerm])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundGrid />
      <Spotlight />
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

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover our portfolio of exceptional interior design projects, where luxury meets functionality
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8"
            >
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-gray-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="bg-gray-800 hover:bg-gray-700 border-gray-600 hidden md:block"
                >
                  <Grid3X3 className="w-4 h-4 hidden md:block" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="bg-gray-800 hover:bg-gray-700 border-gray-600 hidden md:block"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <Badge variant="outline" className="border-gray-600 text-gray-300 mb-8">
                {filteredProjects.length} Projects Found
              </Badge>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`grid gap-8 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 overflow-hidden group hover:border-gray-600 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge className="bg-white/20 text-white border-white/30">
                          <Eye className="w-3 h-3 mr-1" />
                          View Project
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {project.images.length} Images
                        </Badge>

                        <Link href={`/projects/${project.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:text-gray-300 hover:bg-gray-800 group/btn"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="text-gray-500 text-lg">No projects found matching your search.</div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
