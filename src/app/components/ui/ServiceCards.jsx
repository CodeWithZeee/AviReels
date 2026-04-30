"use client";

import { motion } from "framer-motion";
import { Flame, Layers, Bot, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Short-Form Authority Engine",
    subtitle:
      "Daily short-form content engineered for algorithm performance, brand authority, and audience compounding. Reels, Shorts, and TikToks that stop the scroll and build category presence over time.",
    outcome:
      "Daily presence. Compounding reach. Category dominance.",
  },
  {
    icon: Layers,
    title: "Long-Form Compounding Strategy",
    subtitle:
      "One long-form asset becomes 8-15 short-form clips, email content, SEO leverage, and sales enablement material. We build the content ecosystem, not just the video.",
    outcome:
      "One idea. Maximum distribution. Compounding authority.",
  },
  {
    icon: Bot,
    title: "Conversion-Optimized Avatar Content",
    subtitle:
      "AI avatar videos built specifically for landing pages, sales pages, and product demos. Hyper-real presentation that builds trust at first impression and reduces sales friction at the most critical moment in your funnel.",
    outcome:
      "Higher dwell time. More booked calls. Better conversion rates.",
  },
  {
    icon: GraduationCap,
    title: "Market Education & Trust Building",
    subtitle:
      "Complex ideas, made clear. Explainer content that positions your brand as the expert voice in your category. Built for B2B sales cycles where trust is earned before a meeting is booked.",
    outcome:
      "Educated pipeline. Shorter sales cycles. Established authority.",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,          // ⬅️ Faster reveal
              delay: index * 0.08,     // ⬅️ Tighter stagger
              ease: [0.22, 1, 0.36, 1] // Sharp ease-out curve
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="my-8 border-2 relative group p-8 rounded-2xl border-neutral-300 bg-[#F4F2EC] overflow-hidden transition-all duration-300"
          >
            {/* Fast Gradient Accent */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-linear-to-br from-black/5 via-transparent to-black/10" />
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }} // ⬅️ Snappier
              className="relative mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm"
            >
              <Icon className="w-6 h-6 text-neutral-900" />
            </motion.div>

            {/* Title */}
            <h3 className="relative text-xl md:text-2xl font-bold text-[#111111] clash mb-4 tracking-tight">
              {service.title}
            </h3>

            {/* Subtitle */}
            <p className="relative text-gray-600 font-medium gilroy leading-relaxed mb-6">
              {service.subtitle}
            </p>

            {/* Faster Divider Sweep */}
            <div className="relative h-px w-full bg-neutral-200 mb-6 overflow-hidden">
              <div className="h-full w-0 bg-black group-hover:w-full transition-all duration-400" />
            </div>

            {/* Outcome */}
            <p className="relative font-bold text-[#111111] clash">
              Outcome:{" "}
              <span className="text-gray-600 font-medium gilroy">
                {service.outcome}
              </span>
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}