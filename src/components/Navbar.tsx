"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Changed 'relative' to 'fixed top-0 left-0 w-full z-50'
    // Added 'backdrop-blur-md bg-zinc-950/90' for a premium translucent effect
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 text-white">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="MR Fuels Logo"
            width={120}
            height={40}
            className="h-auto w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <a
            href="#features"
            className="text-zinc-300 hover:text-white transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-zinc-300 hover:text-white transition"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-zinc-300 hover:text-white transition"
          >
            Contact
          </a>
          <button className="rounded-full border border-zinc-700 px-5 py-2 hover:bg-zinc-800 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl z-50">
          <div className="flex flex-col space-y-6 px-6 py-10 font-medium">
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-xl text-zinc-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="text-xl text-zinc-300 hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-xl text-zinc-300 hover:text-white"
            >
              Contact
            </a>
            <hr className="border-zinc-800" />
            <button className="w-full rounded-full bg-green-600 text-white px-5 py-4 font-bold">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
