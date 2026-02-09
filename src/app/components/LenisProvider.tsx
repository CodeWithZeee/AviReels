"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

type Props = {
  children: ReactNode;
};

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    // 📱 Touch devices (mobile / tablet)
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches;

    // ♿ Accessibility: reduced motion
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 🚫 Do NOT enable Lenis in these cases
    if (isTouchDevice || prefersReducedMotion) return;

    // 🧈 Desktop smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
