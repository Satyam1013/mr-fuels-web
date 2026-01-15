"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-black/95 backdrop-blur-md border-b border-zinc-800"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center transition-transform hover:scale-105"
        >
          <Image
            src="/logo.svg"
            alt="MR Fuels Logo"
            width={180}
            height={60}
            className="h-10 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
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

        {/* Mobile Toggle Button - Visible only on small screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Blends with the dark theme */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-zinc-800 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 px-6 py-8 text-white font-medium">
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-green-500"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-green-500"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-green-500"
            >
              Contact
            </a>
            <hr className="border-zinc-800" />
            <button className="w-full rounded-full bg-green-600 py-3 font-bold hover:bg-green-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
