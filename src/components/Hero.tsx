"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale: 0.75 se 1 tak expand hoga
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.65, 1]);
  // Rotate: 20 degree tilt se flat
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center pt-32 md:pt-48 bg-[#fafafa] min-h-[160vh] overflow-x-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-gradient-to-b from-green-100/40 to-blue-50/20 blur-[120px] -z-0 rounded-full pointer-events-none" />

      {/* Hero Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto z-10 px-6 mb-20"
      >
        <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 leading-[1] mb-8">
          Smart Fuel Management
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-green-400">
            for Modern Stations
          </span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 font-normal leading-relaxed">
          MR Fuels Transact helps you track sales, tanks, machines, staff, and
          daily reports — all in one powerful platform.
        </p>

        <button className="mt-10 rounded-full bg-zinc-950 text-white px-10 py-4 font-medium text-lg shadow-xl hover:bg-zinc-800 transition-colors">
          Get Started Free
        </button>
      </motion.div>

      {/* --- Plain Image Container (No Borders) --- */}
      <div className="sticky top-24 w-full flex justify-center perspective-[2000px] z-20 overflow-visible">
        <motion.div
          style={{
            scale,
            rotateX,
            opacity,
            transformStyle: "preserve-3d",
          }}
          className="w-full max-w-6xl px-4 md:px-0 origin-top flex justify-center"
        >
          {/* Image Wrapper: Rounded corners preserved but borders/padding removed */}
          <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/hero.JPEG"
              alt="Dashboard Preview"
              width={1400}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Subtle Glow behind the image to give it depth without a solid border */}
          <div className="absolute -inset-10 bg-gradient-to-r from-green-400/10 to-blue-400/10 blur-[100px] -z-10 opacity-50" />
        </motion.div>
      </div>

      {/* Extra space for scroll trigger */}
      <div className="h-[40vh]" />
    </section>
  );
}
