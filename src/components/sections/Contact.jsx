"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Cover } from "../ui/cover";

function LabelInputContainer({ children, className, style }) {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)} style={style}>
      {children}
    </div>
  );
}

export function Contact() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // triggers when 30% visible
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Animation styles with stagger delays
  const animStyle = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  });

  return (
    <div
      ref={containerRef}
      id="contact"
      className="shadow-input mx-auto w-full max-w-[800px] backdrop-blur-[18px] bg-[#11121617] z-[20] rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black mt-32"
    >
      <h2
        className="text-4xl font-bold text-neutral-800 dark:text-neutral-200"
        style={animStyle(0)}
      >
        Do You Have Questions, <Cover>Let&apos;s Discuss</Cover>
      </h2>

      {submitted && (
        <p
          className="mt-6 text-green-500 text-sm"
          style={animStyle(100)}
        >
          ✅ Your message has been sent!
        </p>
      )}

      <form
        className="my-8"
        action="https://formspree.io/f/mjkryvro" // ← Replace with your Formspree form ID
        method="POST"
        onSubmit={() => setSubmitted(true)}
      >
        <div
          className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
          style={animStyle(150)}
        >
          <LabelInputContainer>
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" name="firstName" placeholder="Tyler" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" name="lastName" placeholder="Durden" type="text" required />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4" style={animStyle(300)}>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="you@example.com" type="email" required />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4" style={animStyle(450)}>
          <Label htmlFor="message">Your Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            required
            className="p-3 rounded-md outline-none border border-zinc-700 resize-none h-[140px] bg-zinc-800 text-white"
          />
        </LabelInputContainer>

        <button
          type="submit"
          className="mt-4 w-full h-10 rounded-md bg-blue-900 text-white font-medium hover:bg-blue-800 transition-all"
          style={animStyle(600)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
