"use client";

import React, { useEffect, useRef, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Cover } from "../ui/cover";

export function Testimonials() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="testimonials"
      ref={ref}
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center text-white font-medium">
        What Our <Cover>Client</Cover> Says
      </h4>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "⭐⭐⭐⭐⭐ Working with Living Edge was an amazing experience! The team really listened to my ideas and brought them to life in a way that was both stylish and practical. Every detail felt thoughtful and personal. Super professional, creative, and easy to work with—highly recommend!",
    name: "Yash patel",
    title: "Working Experience",
  },
  {
    quote:
      "BEST INTERIOR DESIGING FIRM, GREAT WORK FROM DESIGNING TO EXECUTION. FULLY SATISFIED WITH THE WORK.",
    name: "Parth Goswami",
    title: "Satisfied Customer",
  },
  {
    quote: "Outstanding interior design service with a professional and supportive team. They ensure customer satisfaction with innovative ideas and great attention to detail.",
    name: "Anish Patel",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Loved working with living edge. they have all the transparency through out the work. They made everything super easy and the design turned out better than i imagined.",
    name: "Helly Panchal",
    title: "Happy Customer",
  },
  {
    quote:
      "Living Edge turned our dream space into reality, and for that, we are endlessly grateful. If you're looking for design that speaks to your soul and a team that makes the journey joyful, Living Edge is the name to trust. — A truly happy heart and home 💫",
    name: "Pinal",
    title: "Loved Our Work",
  },
];
