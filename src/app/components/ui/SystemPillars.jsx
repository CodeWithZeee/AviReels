"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Strategy First",
    description:
      "Every video starts with a question: what does this do for the brand? If we can't answer that clearly, we don't ship it.",
  },
  {
    title: "System Over Sporadic",
    description:
      "Daily presence beats occasional brilliance. The system keeps publishing while you focus on running the business.",
  },
  {
    title: "Engineered Distribution",
    description:
      "Different niches. Different platforms. Same underlying system. This isn't luck. It's repeatable infrastructure.",
  },
];

export default function SystemPillars() {
  return (
    <section className="w-full py-24 px-6 bg-[#F4F2EC] rounded">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.25em] uppercase bg-black/5 px-4 py-2 rounded-full text-neutral-600">
            3 System Pillars — Replaces Abstract Body Copy
          </span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Top Animated Line */}
              <div className="h-0.5 w-full bg-black/70 mb-8 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-black"
                />
              </div>

              {/* Card Content */}
              <div className="relative transition-all duration-500 group-hover:-translate-y-3">
                
                {/* Gradient Accent */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl -z-10" />

                <h3 className="text-2xl font-semibold mb-6 tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed text-lg">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}