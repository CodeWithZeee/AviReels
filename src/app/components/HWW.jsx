import { Search, Wand2, Sliders, UploadCloud } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="bg-[#F4F2EC] py-40 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Pill */}
        <div className="pill">
          How we work
        </div>

        {/* Heading */}
        <h2 className="text-[4rem] md:text-[5rem] leading-[1.1] font-semibold text-black mb-28">
          Built to Move at  <br />
          {/* Distribution.{" "} */}
          <span className="font-serif italic font-normal">
            News Speed
          </span>{" "}
          {/* and simple */}
        </h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-10">

          {/* Connector line */}
          <div className="hidden md:block absolute top-9.5 left-0 right-0 h-0.5 bg-[#E5E2DC]" />

          {/* Step 1 */}
          <Step
            icon={<Search className="w-6 h-6" />}
            title="Research & Script"
            text="We scan your industry, identify trending narratives, and build scripts that position your brand at the center of the conversation. Strategy first, always."
          />

          {/* Step 2 */}
          <Step
            icon={<Wand2 className="w-6 h-6" />}
            title="Create & Animate"
            text="Your hyper-real AI avatar delivers the content. Indistinguishable from real. On-brand, every time. No recording sessions, no scheduling, no bad days on camera."
          />

          {/* Step 3 */}
          <Step
            icon={<Sliders className="w-6 h-6" />}
            title="Edit & Optimize"
            text="Every second of footage is refined for platform-native retention. Hook. Hold. Convert. Built for Reels, Shorts, TikTok, and LinkedIn from the ground up."
          />

          {/* Step 4 */}
          <Step
            icon={<UploadCloud className="w-6 h-6" />}
            title="Deliver & Post"
            text="Ready to post, formatted for every platform, delivered on your schedule. We handle posting if you need it. You stay focused on running the company."
          />
        </div>

        <p className="text-gray-600 text-center my-12 ">Delivery in 1-3 days. Zero production lift on your end. The system runs. You grow.</p>
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
