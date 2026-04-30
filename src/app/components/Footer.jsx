import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="AviReels"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-semibold text-2xl tracking-wide">AviReels</span>
          </div>
          <p className="mt-4 text-white/50 text-sm tracking-widest uppercase font-bold text-center md:text-left">
            Show Up Everywhere. Film Nothing.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start gap-3 text-white/70">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/results" className="hover:text-white transition-colors">Results</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <button className="hover:text-white font-bold transition-colors">Book a Strategy Call</button>
        </div>

        {/* Legal & Contact */}
        <div className="flex flex-col items-center md:items-end gap-3 text-white/70 text-sm">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <a href="mailto:hello@avireels.com" className="hover:text-white transition-colors mt-2">hello@avireels.com</a>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 text-center text-white/30 text-xs">
        © 2026 AviReels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
