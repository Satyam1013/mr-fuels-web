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

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.65, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex flex-col items-center pt-22 md:pt-48 bg-[#fafafa] min-h-[160vh] overflow-x-hidden"
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
        {/* NotebookLM Style Font & Gradient using Logo Colors */}
        <h2 className="text-6xl md:text-[5.5rem] font-medium tracking-tight text-[#1f1f1f] leading-[1.1] mb-8">
          Manage Your Fuel{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#007AFF] to-[#00D1FF] animate-gradient-x">
            Smartly
          </span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-[#5f6368] font-normal leading-relaxed tracking-tight">
          MR Fuels Transact helps you track sales, tanks, and daily reports in
          one powerful, Gemini-powered platform.
        </p>

        <button className="mt-10 rounded-full bg-black text-white px-8 py-4 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300">
          Try MR Fuels Transact
        </button>
      </motion.div>

      {/* --- Dashboard Image Container --- */}
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
          <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <Image
              src="/hero.JPEG"
              alt="Dashboard Preview"
              width={1400}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="absolute -inset-10 bg-gradient-to-r from-yellow-400/5 via-blue-400/5 to-green-400/5 blur-[100px] -z-10 opacity-50" />
        </motion.div>
      </div>

      <div className="h-[40vh]" />
    </section>
  );
}
