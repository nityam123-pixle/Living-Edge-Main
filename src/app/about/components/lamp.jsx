"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { SparklesCore } from "./sparkles"

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[600px] md:min-h-[800px] flex-col items-center justify-center overflow-hidden bg-neutral-950 w-full rounded-md z-0",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 md:h-56 w-[20rem] md:w-[30rem] bg-gradient-conic from-[#3352CC] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-neutral-950 h-20 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 md:w-40 h-[100%] left-0 bg-neutral-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 md:h-56 w-[20rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#1C2D70] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-20 md:w-40 h-[100%] right-0 bg-neutral-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-neutral-950 h-20 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-24 md:h-48 w-full translate-y-6 md:translate-y-12 scale-x-125 md:scale-x-150 bg-neutral-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-24 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-16 md:h-36 w-[14rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-[#3352CC] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "12rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-16 md:h-36 w-32 md:w-64 -translate-y-[3rem] md:-translate-y-[6rem] rounded-full bg-[#1C2D70] blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[20rem] md:w-[30rem] -translate-y-[4rem] md:-translate-y-[7rem] bg-[#1C2D70]"
        ></motion.div>

        <div className="w-[20rem] md:w-[40rem] h-20 md:h-40 relative">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="absolute inset-auto z-40 h-22 md:h-44 w-full -translate-y-[6rem] md:-translate-y-[12.5rem] bg-neutral-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-40 md:-translate-y-80 flex-col items-center px-5">{children}</div>
    </div>
  )
}
