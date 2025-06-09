'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LiquidButton } from '../ui/liquid-button';
import Link from 'next/link';
import { motion } from "framer-motion";

export function About() {
    const stats = [
        { value: '500+', label: 'Completed\nProject' },
        { value: '1000+', label: 'in house Work' },
        { value: '27+', label: 'Years of Experience' },
        { value: '90+', label: 'furniture labourer' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [revealStack, setRevealStack] = useState(false);
    const stackRef = useRef(null);

    // Scroll-based reveal for md+ screens
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && window.innerWidth >= 768) {
                setRevealStack(true);
            }
        }, { threshold: 0.3 });

        if (stackRef.current) observer.observe(stackRef.current);
        return () => {
            if (stackRef.current) observer.unobserve(stackRef.current);
        };
    }, []);

    // Small screen: interval fade logic
    useEffect(() => {
        const interval = setInterval(() => {
            setFadeOut(true);
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % stats.length);
                setFadeOut(false);
            }, 400); // match animation duration
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden" id='about'>
            {/* World Map */}
            <div
                className="absolute top-[-250px] bottom-0 w-full md:w-2/3 bg-no-repeat bg-contain z-0
             bg-center md:bg-right lg:bg-right md:ml-[450px]"
                style={{
                    backgroundImage: "url('/world-map-black-2.png')",
                }}
            />

            <div className="relative z-10 flex flex-col min-h-screen">
                <div className="flex flex-1 flex-col md:flex-row">
                    {/* Stats Column */}
                    <div className="w-full md:w-1/3 p-12 flex flex-col justify-center">
                        {/* Small screen animation */}
                        <div className="block md:hidden relative min-h-[200px]">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`absolute top-0 left-0 w-full transition-all duration-500 ${index === activeIndex
                                        ? fadeOut
                                            ? 'opacity-0 translate-x-[-20px]'
                                            : 'opacity-100 translate-x-0'
                                        : 'opacity-0'
                                        }`}
                                >
                                    <div className="border-l-4 border-white pl-6">
                                        <div className="text-5xl font-bold mb-2">{stat.value}</div>
                                        <div className="text-sm text-gray-300 tracking-widest uppercase whitespace-pre-line">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* MD+ stacked animation */}
                        <div
                            ref={stackRef}
                            className="hidden md:flex flex-col space-y-12 relative mt-8"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`border-l-4 border-white pl-6 transition-all duration-700 ease-out transform ${index === 0
                                        ? ''
                                        : revealStack
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-10 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 150}ms`,
                                    }}
                                >
                                    <div className="text-5xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-300 tracking-widest uppercase whitespace-pre-line">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side for map background only */}
                    <div className="w-full md:w-2/3" />
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="px-6 pb-16 mt-16 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in sm:animate-none"
                >
                    <h1 className="text-4xl font-bold mt-6">
                        Living Edge – Shaping Exceptional Spaces in India
                    </h1>
                    <p className="text-gray-300 text-sm max-w-3xl leading-relaxed">
                        At Living Edge, we specialize in transforming spaces with bold design and unmatched craftsmanship.
                        Over the past four years, we’ve partnered with 80+ architects, designers, and contractors across India.
                        We offer end-to-end solutions for residential, commercial, and hospitality projects — all under one roof.
                    </p>
                    <LiquidButton variant="orange" asChild>
                        <Link href="/about">Know More!</Link>
                    </LiquidButton>
                </motion.div>
            </div>
        </div>
    );
}
