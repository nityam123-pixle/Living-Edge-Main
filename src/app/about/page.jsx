"use client"
import { Award, Users, Lightbulb, Star, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { LampContainer } from "./components/lamp"
import { TextGenerateEffect } from "./components/text-generate-effect"
import { BackgroundBeams } from "./components/background-beams"
import { HoverEffect } from "./components/card-hover-effect"
import Link from "next/link"

const teamMembers = [
    {
        name: "Sarah Mitchell",
        role: "Lead Interior Designer",
        image: "/placeholder.svg?height=300&width=300",
        bio: "With over 15 years of experience, Sarah brings a unique blend of contemporary and classic design sensibilities.",
    },
    {
        name: "Marcus Chen",
        role: "Architectural Designer",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Marcus specializes in space optimization and sustainable design solutions for modern living.",
    },
    {
        name: "Elena Rodriguez",
        role: "Color & Texture Specialist",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Elena's expertise in color psychology and material selection creates emotionally resonant spaces.",
    },
]

const values = [
    {
        title: "Sustainable Design",
        description: "We prioritize eco-friendly materials and energy-efficient solutions in every project.",
        link: "#sustainability",
    },
    {
        title: "Client-Centered Approach",
        description: "Your vision and lifestyle guide every design decision we make.",
        link: "#approach",
    },
    {
        title: "Innovative Solutions",
        description: "We blend cutting-edge technology with timeless design principles.",
        link: "#innovation",
    },
    {
        title: "Innovative Solutions",
        description: "We blend cutting-edge technology with timeless design principles.",
        link: "#innovation",
    },
]

const achievements = [
    { icon: Award, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "2000+", label: "Happy Clients" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Lightbulb, number: "90+", label: "Furniture Labourers" },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Fixed top header */}
            <div className="relative z-50 w-full flex items-center justify-between px-4 pt-4 md:px-8 md:pt-6">
                <Link href="/">
                    <Image
                        src="/logo2.png"
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

            {/* Lamp + Hero Section */}
            <LampContainer>
                <div className="flex flex-col items-center justify-center relative z-20 text-center px-4 w-full max-w-6xl mx-auto mt-20 md:mt-32">
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-2 md:py-4 bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-transparent"
                    >
                        Crafting Spaces,
                        <br /> Creating Stories...
                    </motion.h1>

                    {/* Add your TextGenerateEffect or description here */}
                    <div className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/80">
                        <TextGenerateEffect
                           words="We believe that great design isn't just about aesthetics—it's about creating spaces that inspire, comfort, and reflect the unique story of those who inhabit them."
                           className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90">
                            <Link href="/projects">View Our Work</Link>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                            <Link href="/#contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </LampContainer>

            {/* Our Story Section */}
            <ScrollAnimationWrapper>
                <section className="py-12 sm:py-16 md:py-20 px-4 relative bg-zinc-900 overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                className="order-2 lg:order-1"
                            >
                                <Badge variant="outline" className="mb-4 border-zinc-700 text-zinc-400">
                                    Our Story
                                </Badge>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                                    Transforming Spaces Since 1990s
                                </h2>
                                <div className="space-y-3 sm:space-y-4 text-zinc-400 leading-relaxed text-sm sm:text-base">
                                    <p>
                                        At Living Edge, we are dedicated to transforming spaces with innovative solutions and impeccable craftsmanship.
                                        Over the past four years, we have proudly served 80+ architects, interior designers, and contractors,
                                    </p>
                                    <p>
                                        becoming a
                                        trusted name in the industry. Our commitment is to provide comprehensive solutions under one roof, catering to
                                        diverse residential, commercial, and hospitality needs. Backed by expertise and collaboration, we ensure every
                                        project is executed with precision and excellence.
                                    </p>
                                    <p>
                                        We are more than just designers; we are your partners in creating spaces that tell your story. Our passion for
                                        design, commitment to excellence, and dedication to customer satisfaction set us apart in the industry. We invite
                                        you to explore the possibilities with us and experience the difference that Living Edge can make.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                className="relative order-1 lg:order-2"
                            >
                                <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] max-w-lg mx-auto lg:max-w-none">
                                    <Image
                                        src="/images/living-edge 8.jpeg?height=500&width=600"
                                        alt="Our design studio"
                                        fill
                                        className="rounded-lg shadow-2xl border border-zinc-800 object-cover"
                                    />
                                    <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#3352CC] text-white p-4 sm:p-6 rounded-lg shadow-lg">
                                        <div className="text-xl sm:text-2xl font-bold">27+</div>
                                        <div className="text-xs sm:text-sm">Years of Excellence</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </ScrollAnimationWrapper>

            {/* Achievements Section */}
            <ScrollAnimationWrapper>
                <section className="py-12 sm:py-16 bg-zinc-950 overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: (i) => ({
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: i * 0.1 },
                                        }),
                                    }}
                                    custom={index}
                                    className="text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#3352CC] text-white rounded-lg mb-3 sm:mb-4">
                                        <achievement.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-white">{achievement.number}</div>
                                    <div className="text-xs sm:text-sm text-zinc-400 leading-tight">{achievement.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollAnimationWrapper>

            {/* Team Section */}
            {/* <ScrollAnimationWrapper>
                <section className="py-12 sm:py-16 md:py-20 px-4 bg-zinc-900 overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 sm:mb-16">
                            <Badge variant="outline" className="mb-4 border-zinc-700 text-zinc-400">
                                Meet Our Team
                            </Badge>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                                The Creative Minds Behind Every Project
                            </h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Our diverse team brings together decades of experience in interior design, architecture, and creative
                                problem-solving.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: (i) => ({
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: i * 0.2,
                                                duration: 0.6,
                                                ease: "easeOut",
                                            },
                                        }),
                                    }}
                                    custom={index}
                                    className="w-full"
                                >
                                    <Card className="overflow-hidden group hover:shadow-lg transition-shadow bg-zinc-800 border-zinc-700 h-full">
                                        <div className="aspect-square overflow-hidden">
                                            <Image
                                                src={member.image || "/placeholder.svg"}
                                                alt={member.name}
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <CardContent className="p-4 sm:p-6">
                                            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white">{member.name}</h3>
                                            <p className="text-[#3352CC] font-medium mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                                            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollAnimationWrapper> */}

            {/* Values Section with Hover Effect */}
            <ScrollAnimationWrapper>
                <section className="py-12 sm:py-16 md:py-20 px-4 relative bg-black overflow-hidden">
                    <BackgroundBeams className="opacity-20" />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-12 sm:mb-16">
                            <Badge variant="outline" className="mb-4 border-zinc-700 text-zinc-400">
                                Our Values
                            </Badge>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                                What Drives Our Design Philosophy
                            </h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                These core principles guide every decision we make and every space we create.
                            </p>
                        </div>

                        <HoverEffect items={values} />
                    </div>
                </section>
            </ScrollAnimationWrapper>

            {/* Call to Action */}
            <ScrollAnimationWrapper>
                <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#1C2D70] text-white overflow-hidden hidden md:block">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight"
                        >
                            Ready to Transform Your Space?
                        </motion.h2>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { delay: 0.2 } },
                            }}
                            className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 leading-relaxed"
                        >
                            Let&apos;s work together to create a space that tells your unique story. From concept to completion, we&apos;re here
                            to bring your vision to life.
                        </motion.p>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                            }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto"
                        >
                            <Button
                                size="lg"
                                variant="secondary"
                                className="bg-white text-[#1C2D70] hover:bg-gray-200 w-full sm:w-auto"
                            >
                                <Link href="/#contact">Schedule a Consultation</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-[#1C2D70] w-full sm:w-auto"
                            >
                                <Link href="/">View Our Portfolio</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </ScrollAnimationWrapper>
        </div>
    )
}
