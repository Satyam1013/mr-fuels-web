"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to handle blending logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-zinc-800"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
        {/* Logo Section - Increased size and removal of hard black box for blending */}
        <Link
          href="/"
          className="flex items-center transition-transform hover:scale-105"
        >
          <Image
            src="/logo.svg"
            alt="MR Fuels Logo"
            width={180} // Increased base width
            height={60} // Increased base height
            className="h-10 md:h-14 w-auto object-contain" // Significantly larger height
            priority
          />
        </Link>

        {/* Desktop Links (ensure text is white to contrast black bg) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium items-center text-white">
          <a href="#features" className="hover:text-green-500 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-green-500 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-green-500 transition">
            Contact
          </a>
          <button className="rounded-full border border-zinc-700 px-6 py-2 hover:bg-white hover:text-black transition duration-300">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
