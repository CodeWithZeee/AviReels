"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="bg-[#F4F2EC] px-6 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_20px_40px_rgb(0,0,0,0.04)] border border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >

              {/* Quote Text */}
              <h3 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]
                             leading-[1.15] font-bold text-[#111111] clash">
                This is what our clients see when we deliver their avatar.
              </h3>

              <h2 className="text-xl text-gray-500 font-medium gilroy mt-8">
                Real client reaction. Unedited. This is the standard we build to.
              </h2>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="w-full max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image
                  src="/Ser_Reaction.png"
                  alt="Client reaction screenshot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border-[10px] border-white/20 rounded-[2.5rem] z-10 pointer-events-none mix-blend-overlay" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
