"use client";

import { motion } from "framer-motion";

type Chip = { label: string; color: string };

export function SubjectChips({ items }: { items: Chip[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
      className="flex flex-wrap justify-center gap-2"
    >
      {items.map((c) => (
        <motion.span
          key={c.label}
          variants={{
            hidden: { opacity: 0, y: 12, scale: 0.9 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="text-xs tracking-[0.2em] uppercase text-white px-3 py-2 rounded-full shadow-sm"
          style={{ background: c.color }}
        >
          {c.label}
        </motion.span>
      ))}
    </motion.div>
  );
}
