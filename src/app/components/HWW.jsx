"use client";

import { motion } from "framer-motion";

export default function HowWeWork() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="bg-[#F4F2EC] py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#f5a623]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >

        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-20 md:mb-24">
          <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] font-bold clash text-[#111111]">
            Brief to finished creative. <br />
            <span className="font-serif italic font-normal text-gray-800 relative inline-block mt-2">
              Under 24 hours.
            </span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          <StepCard
            number="01"
            title="Brief"
            text="Share the goal, the audience, and the angle. Production starts immediately."
            fadeUp={fadeUp}
          />
          
          <StepCard
            number="02"
            title="Avatar"
            text="Your face, your client's likeness, or a fully custom AI human. No footage required."
            fadeUp={fadeUp}
          />

          <StepCard
            number="03"
            title="Production"
            text="Script, video, editing, and formatting built specifically for the platform it is going on."
            fadeUp={fadeUp}
          />

          <StepCard
            number="04"
            title="Delivery"
            text="Finished assets in under 24 hours. While everyone else is still coordinating, yours is already live."
            fadeUp={fadeUp}
          />

        </div>

        <motion.div variants={fadeUp} className="text-center mt-20">
          <button className="bg-[#171717] text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 hover:bg-black hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
            Book a Strategy Call
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}

/* Step Card component */
function StepCard({ number, title, text, fadeUp }) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative bg-white/70 backdrop-blur-sm rounded-[2rem] p-10 md:p-14 overflow-hidden group border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
    >
      {/* Watermark Number */}
      <div className="absolute -right-8 -top-12 text-[10rem] md:text-[14rem] font-bold clash leading-none text-black/[0.03] group-hover:text-black/[0.05] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 select-none z-0">
        {number}
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold clash text-[#111111] mb-4 flex items-center gap-4">
          <span className="text-[#f5a623] text-lg font-bold">{number}</span>
          {title}
        </h3>
        <p className="text-gray-600 text-[17px] md:text-lg leading-relaxed gilroy font-medium max-w-sm">
          {text}
        </p>
      </div>

      {/* Subtle hover gradient bottom line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#f5a623] to-[#f8cd79] group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}
