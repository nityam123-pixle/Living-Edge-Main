"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";
import { motion } from "framer-motion";

export function Projects() {
  const cards = data.map((card, index) => {
    // Check if it's the last card
    if (index === data.length - 1) {
      return (
        <Link href="/projects" key={card.src} className="block">
          <Card card={card} index={index} />
        </Link>
      );
    }

    return <Card key={card.src} card={card} index={index} />;
  });

 return (
    <motion.div
      className="w-full h-full py-20"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }} // 👈 fade in when 50% in viewport
    >
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects
      </h2>
      <Carousel items={cards} />
    </motion.div>
  );
}

const ProjectContent = ({ description, imageSrc, imageAlt }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description}
        </span>
      </p>
      <img
        src={imageSrc}
        alt={imageAlt || "Project image"}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Residential",
    title: "Luxury Living Room Makeover",
    src: "/images/living-edge 6.jpeg",
    content: (
      <ProjectContent
        description="A complete transformation blending modern aesthetics and warm textures to create a serene, high-end living room experience."
        imageSrc="/images/living-edge 8.jpeg"
        imageAlt="Living room makeover"
      />
    ),
  },
  {
    category: "Bedrooms",
    title: "Cozy Bedroom designs",
    src: "/arRecidence/ar_3.jpg",
    content: (
      <ProjectContent
        description="A complete transformation blending modern aesthetics and warm textures to create a serene, high-end living room experience."
        imageSrc="/arRecidence/ar_2.jpg"
        imageAlt="Living room makeover"
      />
    ),
  },
  {
    category: "Dinning",
    title: "Beautiful Dinning Space",
    src: "/panache/p_11.jpg",
    content: (
      <ProjectContent
        description="A complete transformation blending modern aesthetics and warm textures to create a serene, high-end living room experience."
        imageSrc="/panache/p_11.jpg"
        imageAlt="Living room makeover"
      />
    ),
  },
  {
    category: "Residential",
    title: "Cozy Living Room",
    src: "/images/living-edge 8.jpeg",
    content: (
      <ProjectContent
        description="A complete transformation blending modern aesthetics and warm textures to create a serene, high-end living room experience."
        imageSrc="/images/living-edge 10.jpeg"
        imageAlt="Living room makeover"
      />
    ),
  },
  {
    category: "Kitchen",
    title: "Elegant Kitchen Interior",
    src: "/images/living-edge 14.jpeg",
    content: (
      <ProjectContent
        description="Designed for a premium retail experience, this boutique interior highlights minimalism and premium material finishes."
        imageSrc="/images/living-edge 14.jpeg"
        imageAlt="Boutique interior"
      />
    ),
  },
  {
    category: "Office",
    title: "Enera Design",
    src: "/images/living-edge 1.jpeg",
    content: (
      <ProjectContent
        description="A bright, functional office space designed with clean lines, ergonomic layout, and calming natural tones."
        imageSrc="/images/living-edge 1.jpeg"
        imageAlt="Workspace design"
      />
    ),
  },
  {
    category: "Showcase",
    title: "View All Projects",
    src: "/images/blur-all.jpg",
    content: (
      <a href="/projects">
        <ProjectContent
          description="Browse the full gallery of completed residential and commercial interiors we've crafted with passion."
          imageSrc="/images/projects/view-all.jpg"
          imageAlt="View all projects"
        />
      </a>
    ),
  },
]
