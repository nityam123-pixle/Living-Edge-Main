"use client";
import { useEffect, useRef, useState } from "react";
import { Carousel } from "../ui/carousel";
import { Cover } from "../ui/cover";

export function Gallery() {
  const slideData = [
    {
      title: "Professional Offices",
      src: "/images/living-edge 1.jpeg",
    },
    {
      title: "Urban Dreams",
      src: "/images/living-edge 2.jpeg",
    },
    {
      title: "Lively Entrance",
      src: "/images/living-edge 4.jpeg",
    },
    {
      title: "Gallery",
      button: "View Gallery",
      src: "/images/living-edge 5.jpeg",
    },
  ];

  const galleryRef = useRef(null);
  const [coverVisible, setCoverVisible] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);

  useEffect(() => {
    if (!galleryRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCoverVisible(true);

          // Delay showing carousel until after Cover fade-in (~500ms)
          setTimeout(() => setCarouselVisible(true), 500);

          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="gallery" ref={galleryRef}>
      <h4
        className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center text-white font-medium"
        style={{
          opacity: coverVisible ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        View Our <Cover>{/* Cover text should also fade */}<span
          style={{
            opacity: coverVisible ? 1 : 0,
            transition: "opacity 0.5s ease 0.3s",
            display: "inline-block",
          }}
        >Gallery</span></Cover>
      </h4>

      <div
        className="relative overflow-hidden w-full h-full py-20"
        style={{
          opacity: carouselVisible ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}
