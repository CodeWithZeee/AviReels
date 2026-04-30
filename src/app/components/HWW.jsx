"use client";

import { motion } from "framer-motion";
import { Search, Wand2, Sliders, UploadCloud } from "lucide-react";

export default function HowWeWork() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="bg-[#F4F2EC] py-32 md:py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02),transparent_70%)] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >

        {/* Pill */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-block px-5 py-2.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-black/5 text-gray-800 border border-black/5">
            How we work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] font-bold clash text-[#111111] mb-24 md:mb-32"
        >
          From brief to live content in <br />
          <span className="font-serif italic font-normal text-gray-800 relative inline-block mt-2">
            1-3 days.
          </span>
        </motion.h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 lg:gap-10">

          {/* Connector line */}
          <div className="hidden md:block absolute top-[2.75rem] left-10 right-10 h-0.5 bg-black/5" />

          {/* Step 1 */}
          <Step
            icon={<Search className="w-6 h-6 text-indigo-600" />}
            title="01 — Brief Us"
            text="Tell us your goal, your niche, your brand. We handle the strategy from there. No lengthy onboarding. No complicated process."
            fadeUp={fadeUp}
            delay={0}
          />

          {/* Step 2 */}
          <Step
            icon={<Wand2 className="w-6 h-6 text-purple-600" />}
            title="02 — We Build Your Avatar"
            text="From your existing photos or footage — or entirely from scratch. Hyper-real. On-brand. Indistinguishable from a real person on camera."
            fadeUp={fadeUp}
            delay={0.1}
          />

          {/* Step 3 */}
          <Step
            icon={<Sliders className="w-6 h-6 text-blue-600" />}
            title="03 — We Produce Everything"
            text="Script, avatar, editing, platform formatting. Ready to post in 1-3 days. You review and approve. That's it."
            fadeUp={fadeUp}
            delay={0.2}
          />

          {/* Step 4 */}
          <Step
            icon={<UploadCloud className="w-6 h-6 text-teal-600" />}
            title="04 — You Grow"
            text="We keep the system running while you focus on everything else. Daily presence. Compounding results."
            fadeUp={fadeUp}
            delay={0.3}
          />
        </div>

        <motion.p variants={fadeUp} className="text-gray-600 text-lg md:text-xl font-medium gilroy text-center mt-20 max-w-2xl mx-auto border-t border-black/5 pt-12">
          <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ease-out hover:bg-black hover:scale-105 flex items-center justify-center gap-3 group mx-auto">
            Book a Strategy Call
            <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.p>
      </motion.div>
    </section>
  );
}

/* Step component */
function Step({ icon, title, text, fadeUp, delay }) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative z-10 flex flex-col items-center text-center max-w-xs mx-auto group"
    >
      {/* Icon box */}
      <div className="w-24 h-24 bg-white rounded-[1.5rem] flex items-center justify-center shadow-sm border border-black/5 mb-8 group-hover:scale-110 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 will-change-transform">
        <div className="w-16 h-16 bg-gray-50/80 rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold clash text-[#111111] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-[15px] md:text-base leading-relaxed gilroy font-medium px-2">
        {text}
      </p>
    </motion.div>
  );
}
