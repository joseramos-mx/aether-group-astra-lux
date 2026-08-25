"use client";

import { motion } from "framer-motion";
import { waUrl } from "@/lib/config";

type Props = {
  title: string;
  description?: string;
  primary: { label: string; href: string };
  whatsapp?: { label: string; message: string };
};

export function CtaBand({ title, description, primary, whatsapp }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-brand-border/5 bg-gradient-to-br from-brand-surface to-brand-surface-2 p-10 md:p-14 text-center"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgb(var(--brand-accent)/0.15),transparent_60%)] pointer-events-none"
      />
      <div className="relative">
        <h2 className="h2 mb-3">{title}</h2>
        {description && <p className="text-brand-muted mb-6">{description}</p>}
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          <a href={primary.href} className="btn-primary">
            {primary.label}
          </a>
          {whatsapp && (
            <a
              href={waUrl(whatsapp.message)}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp"
            >
              {whatsapp.label}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
