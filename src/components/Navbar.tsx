"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Top-4 se humne isse floating banaya hai
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out w-[95%] max-w-5xl 
      ${
        isScrolled || isOpen
          ? "bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-lg py-2 rounded-full"
          : "bg-transparent py-4 rounded-none"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-8">
        {/* Logo Section */}
        <Link href="#hero" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="MR Fuels Logo"
            width={140}
            height={40}
            unoptimized // Isse Next.js image ko modify nahi karega
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links (Centered in the floating bar) */}
        <div className="hidden md:flex space-x-10 text-[15px] font-medium items-center text-gray-600">
          <Link href="#features" className="hover:text-black transition-colors">
            Overview
          </Link>
          <Link href="#pricing" className="hover:text-black transition-colors">
            Plans
          </Link>
          <Link href="#contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
            Get the app
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="flex flex-col space-y-4 px-8 py-8 text-gray-800 font-medium">
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              Overview
            </Link>
            <Link
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              Plans
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              Contact
            </Link>
            <hr className="border-gray-100" />
            <button className="w-full rounded-full bg-black text-white py-4 font-bold">
              Get the app
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
