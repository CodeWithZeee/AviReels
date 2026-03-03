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
    <section className="py-16 md:py-24 lg:py-32 bg-[#F4F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* IMAGE */}
          <div
            className={`relative rounded-3xl overflow-hidden border border-dashed border-neutral-300 aspect-4/3 ${
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
          </div>

          {/* CONTENT */}
          <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <div className="uppercase text-sm tracking-widest text-neutral-400 mb-4">
              {platform}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold mb-4 sm:mb-6">
              {titleLine1} <br />
              <span className="italic font-serif">{titleLine2}</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 max-w-xl mb-8 sm:mb-12">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
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
