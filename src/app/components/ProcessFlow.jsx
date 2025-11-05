// components/ProcessFlow.jsx
import { FaSearch, FaPlus, FaEdit, FaPaperPlane } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-4xl text-white" />,
    title: "Research & Script",
    desc: "We identify what’s trending and tailor it to your niche.",
  },
  {
    icon: <FaPlus className="text-4xl text-white" />,
    title: "Create & Animate",
    desc: "Realistic avatars + animated visuals bring your story to life.",
  },
  {
    icon: <FaEdit className="text-4xl text-white" />,
    title: "Edit & Optimize",
    desc: "Every second refined for retention and impact.",
  },
  {
    icon: <FaPaperPlane className="text-4xl text-white" />,
    title: "Deliver & Post",
    desc: "Ready-to-upload, platform-optimized content.",
  },
];

export default function ProcessFlow() {
  return (
    <div className="relative  py-16 px-6">
      {/* Curvy Line (for large screens) */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-transparent">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="absolute w-full h-full"
        >
          <path
            d="M0,50 C200,0 400,100 600,50 C800,0 1000,100 1200,50"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="bg-black p-6 rounded-3xl mb-6 w-24 h-24 flex items-center justify-center shadow-lg">
              {step.icon}
            </div>
            <h3 className="text-2xl font-serif text-black mb-3">
              {step.title}
            </h3>
            <p className="text-gray-700 max-w-xs text-lg leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
