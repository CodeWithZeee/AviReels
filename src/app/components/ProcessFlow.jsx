// components/ProcessFlow.jsx
import { FaSearch, FaPlus, FaEdit, FaPaperPlane } from "react-icons/fa";

// Use icon components (not JSX) in module scope to avoid rendering JSX during module evaluation.
const steps = [
  {
    icon: FaSearch,
    title: "Research & Script",
    desc: "We identify what's trending and tailor it to your niche.",
  },
  {
    icon: FaPlus,
    title: "Create & Animate",
    desc: "Realistic avatars + animated visuals bring your story to life.",
  },
  {
    icon: FaEdit,
    title: "Edit & Optimize",
    desc: "Every second refined for retention and impact.",
  },
  {
    icon: FaPaperPlane,
    title: "Deliver & Post",
    desc: "Ready-to-upload, platform-optimized content.",
  },
];

export default function ProcessFlow() {
  return (
    <div className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
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

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-0 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center w-full sm:w-auto"
          >
            <div className="bg-black p-4 sm:p-6 rounded-3xl mb-4 sm:mb-6 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shadow-lg">
              {(() => {
                const Icon = step.icon;
                return (
                  <Icon className="text-2xl sm:text-3xl lg:text-4xl text-white" />
                );
              })()}
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-black mb-2 sm:mb-3">
              {step.title}
            </h3>
            <p className="text-gray-700 max-w-xs text-sm sm:text-base lg:text-lg leading-relaxed px-2">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
