"use client";

import { motion } from "framer-motion";
import { waUrl } from "@/lib/config";

export function WhatsAppFloat({
  message = "Hola, me gustaría más información sobre sus servicios.",
}: {
  message?: string;
}) {
  return (
    <motion.a
      href={waUrl(message)}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25d366] text-[#062e14] px-4 py-3 shadow-[0_12px_28px_rgba(37,211,102,0.45)]"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.35.687 4.54 1.87 6.396L4 29l7.85-1.848A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.6c-1.83 0-3.55-.49-5.03-1.34l-.36-.21-4.66 1.1 1.12-4.53-.24-.37A9.55 9.55 0 0 1 6.4 15C6.4 9.7 10.7 5.4 16 5.4S25.6 9.7 25.6 15 21.3 24.6 16 24.6zm5.44-7.19c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.48.71.31 1.26.5 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
      </svg>
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </motion.a>
  );
}
