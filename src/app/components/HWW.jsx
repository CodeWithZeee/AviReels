import { Search, Wand2, Sliders, UploadCloud } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="bg-[#F4F2EC] py-40 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Pill */}
        <div className="inline-flex items-center justify-center bg-[#E5E2DC] px-5 py-2 rounded-full text-sm font-semibold text-black/80 mb-16">
          How we work
        </div>

        {/* Heading */}
        <h2 className="text-[4rem] md:text-[5rem] leading-[1.1] font-semibold text-black mb-28">
          We like to keep <br />
          things{" "}
          <span className="font-serif italic font-normal">
            nice
          </span>{" "}
          and simple
        </h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-10">

          {/* Connector line */}
          <div className="hidden md:block absolute top-9.5 left-0 right-0 h-0.5 bg-[#E5E2DC]" />

          {/* Step 1 */}
          <Step
            icon={<Search className="w-6 h-6" />}
            title="Research & Script"
            text="We identify what's trending and tailor it to your niche."
          />

          {/* Step 2 */}
          <Step
            icon={<Wand2 className="w-6 h-6" />}
            title="Create & Animate"
            text="Realistic avatars + animated visuals bring your story to life."
          />

          {/* Step 3 */}
          <Step
            icon={<Sliders className="w-6 h-6" />}
            title="Edit & Optimize"
            text="Every second refined for retention and impact."
          />

          {/* Step 4 */}
          <Step
            icon={<UploadCloud className="w-6 h-6" />}
            title="Deliver & Post"
            text="Ready-to-upload, platform-optimized content."
          />
        </div>

        <p className="text-gray-600 text-center my-12 ">Delivery in 1-3 days. 100% done for you.</p>
      </div>
    </section>
  );
}

/* Step component */
function Step({ icon, title, text }) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center max-w-xs mx-auto">

      {/* Icon box */}
      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-black mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}
