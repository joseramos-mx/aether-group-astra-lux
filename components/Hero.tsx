"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  lead: ReactNode;
  logo: string;
  logoAlt: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
};

export function Hero({
  title,
  lead,
  logo,
  logoAlt,
  primaryCta,
  secondaryCta,
  children,
}: Props) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-radial-accent pt-20 pb-14 md:pt-28 md:pb-20">
      <div className="container-page relative z-10">
        <div className="grid gap-10 items-center md:grid-cols-[1.15fr_.85fr]">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="h1 mb-5">{title}</h1>
            <p className="lead mb-8">{lead}</p>
            <div className="flex flex-wrap gap-3">
              <a href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  target={
                    secondaryCta.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    secondaryCta.href.startsWith("http") ? "noopener" : undefined
                  }
                  className="btn-whatsapp"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto md:mx-0"
          >
            <Image
              src={logo}
              alt={logoAlt}
              width={520}
              height={520}
              priority
              className="max-w-[380px] w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </div>

        {children}
      </div>
    </section>
  );
}
