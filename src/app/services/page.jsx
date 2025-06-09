"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Palette,
  Home,
  Lightbulb,
  Hammer,
  Building,
  Eye,
  Sofa,
  Zap,
  Shield,
  Brush,
  Layers,
  Settings,
  Users,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  ArrowLeft,
} from "lucide-react"
import { useState } from "react"
import { BackgroundBeams } from "./components/background-beams"
import { TextGenerateEffect } from "./components/text-generate-effect"
import { SparklesCore } from "./components/sparkles"
import { FloatingElements } from "./components/floating-elements"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "2D & 3D Designing",
    description: "Detailed floor plans and 3D visualizations for clear conceptualization.",
    icon: Eye,
    category: "Design",
    complexity: "Advanced",
  },
  {
    title: "Key to Key Turnkey Projects",
    description: "End-to-end project delivery, ready for immediate use.",
    icon: Home,
    category: "Project Management",
    complexity: "Expert",
  },
  {
    title: "Interior Designing",
    description: "Aesthetic and functional designs tailored to your lifestyle.",
    icon: Palette,
    category: "Design",
    complexity: "Advanced",
  },
  {
    title: "Modular Furniture",
    description: "Space-saving, stylish, and customizable modular solutions.",
    icon: Layers,
    category: "Furniture",
    complexity: "Intermediate",
  },
  {
    title: "Consultancy (B2B)",
    description: "Expert advice for commercial and retail space planning.",
    icon: Building,
    category: "Consulting",
    complexity: "Expert",
  },
  {
    title: "Architectural Designing",
    description: "Structural and aesthetic planning for residential and commercial buildings.",
    icon: Building,
    category: "Architecture",
    complexity: "Expert",
  },
  {
    title: "3D Visualization",
    description: "Photorealistic renders to preview designs before execution.",
    icon: Eye,
    category: "Visualization",
    complexity: "Advanced",
  },
  {
    title: "Korean & Stone Work",
    description: "Durable and elegant surface solutions for kitchens and bathrooms.",
    icon: Hammer,
    category: "Materials",
    complexity: "Advanced",
  },
  {
    title: "Ply & Hardware Solutions",
    description: "High-quality materials for long-lasting and functional furniture.",
    icon: Settings,
    category: "Materials",
    complexity: "Intermediate",
  },
  {
    title: "Laminate, Veneer & Decorative Panels",
    description: "Stylish surfaces to enrich interiors.",
    icon: Layers,
    category: "Finishes",
    complexity: "Intermediate",
  },
  {
    title: "Lighting Solutions",
    description: "Smart and ambient lighting to enhance mood and functionality.",
    icon: Lightbulb,
    category: "Technology",
    complexity: "Advanced",
  },
  {
    title: "Furniture Labour Work",
    description: "Skilled craftsmanship for custom and modular installations.",
    icon: Hammer,
    category: "Installation",
    complexity: "Advanced",
  },
  {
    title: "Office Furniture",
    description: "Ergonomic and efficient furniture for professional spaces.",
    icon: Building,
    category: "Commercial",
    complexity: "Intermediate",
  },
  {
    title: "PMC Solution",
    description: "Project Management Consultancy for streamlined execution.",
    icon: Settings,
    category: "Management",
    complexity: "Expert",
  },
  {
    title: "Wall Texture Work",
    description: "Textured finishes to add depth and interest to walls.",
    icon: Brush,
    category: "Finishes",
    complexity: "Intermediate",
  },
  {
    title: "Foam & Furnishings",
    description: "Comfortable and aesthetic upholstery solutions.",
    icon: Sofa,
    category: "Furniture",
    complexity: "Intermediate",
  },
  {
    title: "Electrical Work",
    description: "Safe and efficient electrical planning and execution.",
    icon: Zap,
    category: "Infrastructure",
    complexity: "Advanced",
  },
  {
    title: "Stretch & Decorative Ceiling",
    description: "Modern and elegant ceiling installations.",
    icon: Layers,
    category: "Installation",
    complexity: "Advanced",
  },
  {
    title: "Digital Locks",
    description: "Secure and smart access systems for modern homes.",
    icon: Shield,
    category: "Security",
    complexity: "Advanced",
  },
  {
    title: "Wallpaper",
    description: "Customizable patterns and textures for walls.",
    icon: Brush,
    category: "Finishes",
    complexity: "Basic",
  },
  {
    title: "Carpet & Wall",
    description: "Soft surfaces for comfort and insulation.",
    icon: Layers,
    category: "Finishes",
    complexity: "Intermediate",
  },
  {
    title: "Ceiling & Painting Work",
    description: "Professional finishes for clean and attractive interiors.",
    icon: Brush,
    category: "Finishes",
    complexity: "Intermediate",
  },
  {
    title: "2D/3D MDF CNC Work",
    description: "Precision-cut decorative panels for doors, walls, and furniture.",
    icon: Settings,
    category: "Manufacturing",
    complexity: "Advanced",
  },
  {
    title: "Customised Decorative Lighting Solution",
    description: "Unique lighting pieces that complement your theme.",
    icon: Lightbulb,
    category: "Custom",
    complexity: "Expert",
  },
  {
    title: "Home Automation",
    description: "Alexa, Google, and touch-based smart automation for modern living.",
    icon: Zap,
    category: "Technology",
    complexity: "Expert",
  },
  {
    title: "Profile Shutter & Glass Work",
    description: "Elegant storage with aluminum and glass shutter systems.",
    icon: Layers,
    category: "Installation",
    complexity: "Advanced",
  },
  {
    title: "Sofa & Bed Lining Work",
    description: "Tailored upholstery work for beds and sofas.",
    icon: Sofa,
    category: "Furniture",
    complexity: "Intermediate",
  },
  {
    title: "Loose Furniture",
    description: "Tables, chairs, and more—designed to fit and function beautifully.",
    icon: Sofa,
    category: "Furniture",
    complexity: "Intermediate",
  },
]

const stats = [
  { number: "500+", label: "Projects Completed", icon: Target },
  { number: "27+", label: "Years Experience", icon: Clock },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "50+", label: "Expert Team Members", icon: Users },
]

const processSteps = [
  {
    step: "01",
    title: "Consultation & Planning",
    description: "Initial meeting to understand your vision, requirements, and budget constraints.",
  },
  {
    step: "02",
    title: "Design & Visualization",
    description: "Creating detailed 2D/3D designs and photorealistic renders for your approval.",
  },
  {
    step: "03",
    title: "Material Selection",
    description: "Curating premium materials and finishes that align with your aesthetic preferences.",
  },
  {
    step: "04",
    title: "Execution & Delivery",
    description: "Professional installation and project completion with quality assurance.",
  },
]

const words = "Professional Interior Design & Architectural Services"

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get unique categories from services
  const categories = ["All", ...new Set(services.map((service) => service.category))]

  // Filter services based on selected category
  const filteredServices =
    selectedCategory === "All" ? services : services.filter((service) => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <BackgroundBeams />
        <FloatingElements />
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

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="h-32 relative w-full mb-8">
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.8}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          <TextGenerateEffect words={words} className="text-5xl md:text-7xl font-bold mb-8 leading-tight" />

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your space with our comprehensive suite of interior design, architectural planning, and project
            management services. From concept to completion, we deliver excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
                <Link href="#serv">Explore Services</Link>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-white hover:bg-gray-900 px-8 py-4 text-lg font-semibold"
            >
                <Link href="/">View Portfolio</Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-gray-300" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional interior design solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-gray-600 transition-all duration-300">
                  <div className="text-6xl font-bold text-gray-600 mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{process.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" id="serv">Comprehensive Services</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              From architectural planning to final installation, we offer a complete range of professional services to
              transform your space into something extraordinary.
            </p>
          </div>

          {/* Service Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={category === selectedCategory ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  category === selectedCategory
                    ? "bg-white text-black hover:bg-gray-200 shadow-lg"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Counter */}
          <div className="text-center mb-8">
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredServices.length}</span> services
              {selectedCategory !== "All" && (
                <span>
                  {" "}
                  in <span className="text-white font-semibold">{selectedCategory}</span>
                </span>
              )}
            </p>
          </div>

          {/* Services Grid with Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={`${service.title}-${selectedCategory}`}
                  className="bg-gray-800/30 backdrop-blur-sm border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 group cursor-pointer h-full animate-in fade-in-0 hover:duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gray-700/50 group-hover:bg-gray-600/50 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-gray-300" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs px-2 py-1">
                          {service.category}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors duration-300 leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={`text-xs px-2 py-1 ${
                          service.complexity === "Expert"
                            ? "border-gray-400 text-gray-300"
                            : service.complexity === "Advanced"
                              ? "border-gray-500 text-gray-400"
                              : "border-gray-600 text-gray-500"
                        }`}
                      >
                        {service.complexity}
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors duration-300" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg mb-4">No services found in this category</div>
              <Button
                onClick={() => setSelectedCategory("All")}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                View All Services
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="rexwslative py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Why Choose Our Services</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                With over 27+ years of experience and 500+ successful projects, we bring unmatched expertise and
                dedication to every project.
              </p>

              <div className="space-y-6">
                {[
                  "End-to-end project management and execution",
                  "Premium quality materials and craftsmanship",
                  "Innovative design solutions and technology integration",
                  "Transparent pricing and timely delivery",
                  "Post-completion support and maintenance",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Design Excellence",
                  description: "Award-winning designs that blend aesthetics with functionality",
                },
                { title: "Quality Assurance", description: "Rigorous quality checks at every stage of the project" },
                { title: "Timely Delivery", description: "Committed to delivering projects on schedule" },
                { title: "Customer Support", description: "Dedicated support team for all your queries and concerns" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
                >
                  <Award className="w-8 h-8 text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 px-4 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-8" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Space?</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let&apos;s discuss your project requirements and create a customized solution that exceeds your expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold">
                <Link href="/#contact">Schedule Consultation</Link>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-500 text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold"
              >
                Download Brochure
              </Button>
            </div>

            <Separator className="my-8 bg-gray-700" />

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
