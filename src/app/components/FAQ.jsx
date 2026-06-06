"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const accordionData = [
  {
    id: 1,
    title: "Can people tell it's AI?",
    content: "No. The work speaks first. You see the output and decide for yourself."
  },
  {
    id: 2,
    title: "What avatars can you build?",
    content: "Your face, your founder, your brand, or fully custom AI humans built entirely from scratch."
  },
  {
    id: 3,
    title: "What can you produce?",
    content: "Meta ads, personal brands, VSLs, UGC-style creatives, and long-form content."
  },
  {
    id: 4,
    title: "What's included?",
    content: "Everything from brief to delivery. Strategy, scripting, avatars, editing, and formatting handled end-to-end."
  },
  {
    id: 5,
    title: "How does pricing work?",
    content: "Every engagement is scoped around your goals, production needs, and content volume. Book a call to see exactly what gets built and what it costs."
  },
  {
    id: 6,
    title: "How fast is delivery?",
    content: "Under 24 hours from approved brief to finished assets. That is the standard, not the ceiling."
  },
  {
    id: 7,
    title: "Is there a long-term commitment?",
    content: "Every engagement starts with a 30-day pilot. No long-term commitment until the results speak for themselves."
  }
];

export default function Accordion() {
  const [activeId, setActiveId] = useState(null);
  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-[#F4F2EC] py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.1] font-bold text-[#111111] clash">
            Questions we get asked <br className="hidden md:block" />
            <span className="font-serif italic font-normal text-gray-800">before every call.</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {accordionData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[1.5rem] border border-black/5 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer group hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={activeId === item.id}
              >
                <div className="flex-1 pr-6">
                  <h3 className="text-xl md:text-2xl font-bold clash text-[#111111] leading-snug">
                    {item.title}
                  </h3>
                  {/* Tags */}
                  {/* <div className="hidden md:flex gap-2 mt-3">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
                <div className={`w-12 h-12 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${activeId === item.id ? "rotate-45" : "rotate-0"} group-hover:bg-[#111111] group-hover:text-white group-hover:border-black text-[#111111]`}>
                  <Plus className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 relative">
                      {/* Subtitle border top pseudo */}
                      <div className="absolute top-0 left-8 right-8 h-px bg-black/5" />
                      <p className="text-gray-600 gilroy font-medium text-base md:text-[17px] leading-relaxed pt-6">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
