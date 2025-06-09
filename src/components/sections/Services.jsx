"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Camera, Gem, Home, Layers3, PencilRuler, Ruler } from "lucide-react";
import { Cover } from "../ui/cover";
import { cn } from "@/lib/utils";
import { LiquidButton } from "../ui/liquid-button";
import Link from "next/link";

export function Services() {
  const features = [
    {
      title: "2D & 3D Designing",
      description: "Precise technical designs tailored for your architectural and interior needs.",
      icon: <Ruler />,
    },
    {
      title: "Interior Designing",
      description: "Transform your spaces with functional, aesthetic, and modern interiors.",
      icon: <Home />,
    },
    {
      title: "Consultancy (B2B)",
      description: "Strategic interior and architectural consulting tailored for businesses.",
      icon: <Briefcase />,
    },
    {
      title: "3D Visualization",
      description: "Realistic renders to help you visualize projects before execution.",
      icon: <Camera />,
    },
    {
      title: "Modular Furniture",
      description: "Smart, space-saving modular solutions customized for your layout.",
      icon: <Layers3 />,
    },
    {
      title: "Key to Key Turnkey Projects",
      description: "From planning to handover — we manage the entire project seamlessly.",
      icon: <Building2 />,
    },
    {
      title: "Architectural Designing",
      description: "Comprehensive architectural blueprints and spatial planning.",
      icon: <PencilRuler />,
    },
    {
      title: "Korean & Stone Work",
      description: "Premium finishes with Korean and natural stone craftsmanship.",
      icon: <Gem />,
    },
  ];

  // Animation variants
  const coverVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 } },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.5, duration: 0.4 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 + features.length * 0.5 + 0.1, duration: 0.4 } },
  };

  return (
    <div className="mt-[150px] flex flex-col">

      <motion.div
        className="px-8 flex flex-col justify-center items-center"
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="mx-auto text-white text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight"
          variants={coverVariants}
        >
          <Cover>Our Services</Cover>
        </motion.h2>

        <motion.p
          className="max-w-xl text-[1rem] mt-[20px] text-center md:text-lg text-neutral-700 dark:text-neutral-400"
          variants={paragraphVariants}
        >
          We Provide you Quality of Services.
        </motion.p>
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto"
      >
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} variants={featureVariants} />
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={buttonVariants}
      >
        <LiquidButton className="max-w-md w-full sm:w-auto mb-20" variant="gray">
          <Link href="/services">All Services</Link>
        </LiquidButton>
      </motion.div>
    </div>
  );
}

const Feature = ({ title, description, icon, index, variants }) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
        />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
        />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400"
      >
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"
        />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100"
        >
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10"
      >
        {description}
      </p>
    </motion.div>
  );
};
