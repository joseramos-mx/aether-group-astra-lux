"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  /* reducedMotion="user" hace que framer-motion desactive las animaciones de
     transform cuando el sistema pide menos movimiento. Se resuelve al animar,
     no al renderizar, así el HTML del servidor y el del cliente coinciden. */
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
