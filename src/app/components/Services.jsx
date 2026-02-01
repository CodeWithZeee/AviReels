export default function Services() {
  return (
    <section className="bg-[#F4F2EC] py-40 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">

          {/* Pill */}
          <div className="inline-flex items-center justify-center bg-[#E5E2DC] px-5 py-2 rounded-full text-sm font-semibold text-black/80 mb-8">
            Services
          </div>

          {/* Title */}
          <h1 className="text-[3.25rem] sm:text-[4rem] md:text-[4.75rem] leading-[1.1] font-semibold text-black mb-8">
            How we can <br />
            help you{" "}
            <span className="font-serif italic font-normal">
              grow
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We help businesses and creators grow by creating content that
            commands attention.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <ServiceCard
            emoji="🔥"
            title="AI Reels"
            text="Videos that go viral built with trending hooks and scroll-stopping visuals."
          />

          <ServiceCard
            emoji="🎙️"
            title="AI Podcasts"
            text="Human-like hosts that talk for your brand, creating consistent engaging audio/video."
          />

          <ServiceCard
            emoji="📦"
            title="Showcases"
            text="Cinematic AI storytelling for e-commerce & SaaS product demos."
          />

          <ServiceCard
            emoji="🎓"
            title="Explainers"
            text="Educational explainers that are engaging, trust-building, and crystal clear."
          />

        </div>
      </div>
    </section>
  );
}

/* Card component */
function ServiceCard({ emoji, title, text }) {
  return (
    <div className="bg-white rounded-[2.25rem] p-10 shadow-sm
                    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="text-4xl mb-8">
        {emoji}
      </div>

      <h3 className="text-xl font-bold text-black mb-4">
        {title}
      </h3>

      <p className="text-gray-500 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
