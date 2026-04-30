"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavbarLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Results",
      href: "/results",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="fixed top-2 sm:top-4 lg:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl bg-[#FBFAF7]/90 backdrop-blur-xl shadow-sm border border-black/5 rounded-2xl sm:rounded-full h-16 sm:h-20 px-4 sm:px-6 z-50 transition-all duration-300">
        <div className="flex items-center justify-between w-full h-full gap-4">
          <div className="flex items-center shrink-0">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Avi Reels"
                width={70}
                height={150}
                priority
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="font-bold text-xl sm:text-2xl ml-2 clash tracking-wide text-[#111111] whitespace-nowrap">
              AviReels
            </p>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-4 xl:gap-8 px-3 xl:px-6">
            {NavbarLinks.map((link) => (
              <li className="relative group cursor-pointer shrink-0" key={link.name}>
                <Link href={link.href}>
                  <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-gray-500 transition-colors group-hover:text-[#111111] whitespace-nowrap">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Button - Book a call */}
          <button
            className="hidden lg:flex shrink-0 bg-[#111111] text-white px-7 py-3.5 rounded-full text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ease-out border border-black/10 hover:bg-black hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-95 items-center justify-center whitespace-nowrap"
          >
            Book a Strategy Call
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden ml-auto shrink-0 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 mobile-menu-button"
            aria-label="Toggle menu"
            type="button"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 text-black transition-all duration-300 absolute ${isMenuOpen
                  ? "opacity-0 rotate-180 scale-0"
                  : "opacity-100 rotate-0 scale-100"
                  }`}
              />
              <X
                className={`h-6 w-6 text-black transition-all duration-300 absolute ${isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-180 scale-0"
                  }`}
              />
            </div>
            {/* Fallback text if icons don't load */}
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu lg:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 ease-in-out z-40 ${isMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {NavbarLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-4 text-[#111111] font-bold uppercase tracking-widest text-[13px] hover:bg-black/5 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-30 ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
