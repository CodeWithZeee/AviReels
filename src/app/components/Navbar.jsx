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
      name: "About",
      href: "/about",
    },
    {
      name: "Result",
      href: "/Pricing",
    },
    // {
    //   name: "Privacy",
    //   href: "/#Privacy",
    // },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="mx-2 sm:mx-4 lg:mx-10 my-2 sm:my-4 lg:my-5 bg-transparent backdrop-blur rounded-2xl sm:rounded-3xl h-14 sm:h-16 flex items-center px-2 sm:px-4 overflow-hidden fixed top-0 left-0 right-0 z-50">
        <Image
          src="/Logo.png"
          alt="Avi Reels"
          width={70}
          height={150}
          className="h-12 sm:h-16 w-auto object-contain"
        />
        <p className="font-bold text-lg sm:text-xl lg:text-2xl ml-1 sm:ml-2 ">AviReels</p>

        {/* Desktop Navigation */}
        <div className="hidden font-semibold lg:flex mx-10 ml-auto items-center gap-4">
          <ul className="flex gap-8 space-x-4">
            {NavbarLinks.map((link) => (
              <li className="relative group cursor-pointer" key={link.name}>
                <Link href={link.href}>
                  <span className="text-xl">{link.name}</span>
                  <span className="underline-style"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Button - Book a call */}
          <button className="bg-black text-white p-2  rounded-4xl m-2 font-bold transition-all duration-300 ease-out
         hover:-translate-y-1 hover:scale-105
         hover:shadow-xl active:scale-100">Book a call</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden ml-auto p-2 rounded-lg hover:bg-white/10 transition-all duration-300 mobile-menu-button"
          aria-label="Toggle menu"
          type="button"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`h-6 w-6 text-black transition-all duration-300 absolute ${
                isMenuOpen
                  ? "opacity-0 rotate-180 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              className={`h-6 w-6 text-black transition-all duration-300 absolute ${
                isMenuOpen
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

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu lg:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen
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
                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-30 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
