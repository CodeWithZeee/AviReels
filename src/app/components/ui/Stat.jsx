"use client";
import { useEffect, useRef, useState } from "react";

export default function Stat({ value, label }) {
  const [displayValue, setDisplayValue] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateValue();
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = () => {
    const duration = 1800;
    const numberMatch = value.match(/[\d.]+/);

    if (!numberMatch) {
      setDisplayValue(value);
      return;
    }

    const numericPart = parseFloat(numberMatch[0]);
    const prefix = value.substring(0, value.indexOf(numberMatch[0]));
    const suffix = value.substring(
      value.indexOf(numberMatch[0]) + numberMatch[0].length,
    );

    let multiplier = 1;
    if (suffix.includes("M")) multiplier = 1000000;
    if (suffix.includes("K")) multiplier = 1000;

    const endValue = numericPart * multiplier;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = endValue * eased;

      let formattedNumber;

      if (suffix.includes("M")) {
        formattedNumber = (current / 1000000).toFixed(1) + "M";
      } else if (suffix.includes("K")) {
        formattedNumber = Math.floor(current / 1000) + "K";
      } else {
        formattedNumber = Math.floor(current);
      }

      setDisplayValue(prefix + formattedNumber + suffix.replace(/[MK]/, ""));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <div
      ref={ref}
      className="bg-gray-200 rounded-2xl p-5 sm:p-6 lg:p-8 border border-neutral-200"
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 wrap-break-word">
        {displayValue}
      </div>
      <div className="text-[10px] sm:text-xs uppercase tracking-wide text-neutral-500 font-semibold">
        {label}
      </div>
    </div>
  );
}
