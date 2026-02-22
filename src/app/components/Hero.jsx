import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F4F2EC] pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="md:space-y-10 text-center md:text-left">
            {/* Social Icons */}
            {/* <div className="inline-flex items-center gap-4 bg-[#E5E2DC] px-4 py-3 rounded-full mx-auto md:mx-0">
              <Instagram className="w-5 h-5 text-gray-700 hover:text-black transition" />
              <Linkedin className="w-5 h-5 text-gray-700 hover:text-black transition" />
              <Facebook className="w-5 h-5 text-gray-700 hover:text-black transition" />
            </div> */}

            {/* Eyebrow Tag */}
            <span className="inline-block mb-6 px-5 py-2 text-xs md:text-sm font-semibold tracking-widest uppercase rounded-full bg-linear-to-r from-indigo-500/10 to-purple-500/10 text-gray-600 border border-indigo-500/20">
              Authority Infrastructure for AI Video
            </span>

            {/* Headline */}
            <h2
              className="pl-2 font-semibold text-black leading-[1.05]
              text-[3rem] sm:text-[3.75rem] md:text-[3rem] lg:text-[4rem]"
            >
              Outpublish Your <br />
              Competitors. <br />
              Build Daily Authority. <br />
              <span className="font-serif italic font-normal">
                Never Film Again.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
              AviReels is a fully managed AI-powered video authority engine. We
              turn your brand's ideas, news, and insights into daily short-form
              content using hyper-real AI avatars. No filming. No editing. No
              delays.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-100">
                Book a strategy call
              </button>
              <button className="bg-transparent text-black px-6 py-3 rounded-full font-semibold border border-black transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-100">
                See Real Results
              </button>
            </div>
          </div>

          {/* RIGHT PHONE MOCKUP */}
          <div className="relative flex justify-center md:justify-end">
            <div
              className="relative
              w-[320px] h-160
              sm:w-85 sm:h-170
              md:w-90 md:h-180
              rounded-[3rem]
              border-10 border-white
              shadow-2xl overflow-hidden bg-black"
            >
              {/* Status bar */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[75%] h-1 bg-white/30 rounded-full z-10" />

              {/* Story header */}
              <div className="absolute top-10 left-6 flex items-center gap-2 z-10 text-white">
                <div className="w-9 h-9 rounded-full bg-linear-to-tr from-pink-500 to-yellow-400" />
                <span className="text-sm font-semibold">jessicasu</span>
                <span className="text-sm text-white/70">6h</span>
              </div>

              {/* VIDEO (uncomment when ready) */}
              {/*
              <video
                src="/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
