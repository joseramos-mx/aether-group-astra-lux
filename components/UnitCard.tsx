"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  badge: string;
  title: string;
  description: ReactNode;
  href: string;
  cta?: string;
};

export function UnitCard({ badge, title, description, href, cta = "Conocer más" }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-brand-card border border-brand-border/5 p-8 flex flex-col gap-4 hover:border-brand-accent/40 hover:shadow-soft transition-colors"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-brand-accent/10 blur-3xl"
      />
      <span className="self-start text-[11px] tracking-[0.2em] uppercase text-brand-accent border border-brand-accent/40 rounded-full px-3 py-1">
        {badge}
      </span>
      <h3 className="h3 text-brand-text">{title}</h3>
      <p className="text-brand-muted text-sm">{description}</p>
      <Link
        href={href}
        className="mt-auto pt-4 text-brand-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all"
      >
        {cta}
        <span aria-hidden>→</span>
      </Link>
    </motion.div>
  );
}
