"use client";

import { motion, useReducedMotion } from "framer-motion";

type Shape = {
  label: string;
  x: string;
  y: string;
  size: number;
  hue: string;
  rotate?: number;
};

export function FloatingShapes({ shapes }: { shapes: Shape[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-0">
      {shapes.map((s, i) => (
        <motion.div
          key={s.label + i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute select-none"
          style={{
            left: s.x,
            top: s.y,
            transform: `rotate(${s.rotate ?? 0}deg)`,
          }}
        >
          <motion.div
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -16, 0],
                    rotate: [0, (s.rotate ?? 0) + 4, s.rotate ?? 0],
                  }
            }
            transition={{
              duration: 6 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-[28%] shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex items-center justify-center text-white"
            style={{
              width: s.size,
              height: s.size,
              fontSize: s.size * 0.42,
              backgroundImage: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.6), transparent 40%), ${s.hue}`,
            }}
          >
            {s.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
