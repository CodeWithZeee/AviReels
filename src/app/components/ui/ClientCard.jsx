import Image from "next/image";
import Stat from "./Stat";

export default function ClientCard({
  platform = "",
  titleLine1 = "",
  titleLine2 = "",
  description = "",
  image,
  stats = [],
  reverse = false,
}) {
  return (
    <section className="py-16 bg-[#F4F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          {/* IMAGE */}
          <div
            className={`relative rounded-3xl overflow-hidden shadow-sm aspect-[4/3] ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {typeof image === "string" && image.trim() !== "" ? (
              <Image
                src={image}
                alt="Client Screenshot"
                fill
                className="object-cover"
              />
            ) : null}
            <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none" />
          </div>

          {/* CONTENT */}
          <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <div className="uppercase text-[11px] md:text-xs font-bold tracking-[0.2em] text-gray-500 mb-4">
              {platform}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-bold mb-6 text-[#111111] clash">
              {titleLine1} <br />
              <span className="italic font-normal text-gray-800">{titleLine2}</span>
            </h2>

            <p className="text-[15px] sm:text-lg text-gray-600 font-medium gilroy max-w-xl mb-10 leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Stat key={i} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
