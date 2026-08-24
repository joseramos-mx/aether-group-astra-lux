"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

type NavLink = { href: string; label: string };

type Props = {
  logo: string;
  logoAlt: string;
  brandLabel?: string;
  homeHref: string;
  navLinks: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function Header({
  logo,
  logoAlt,
  brandLabel,
  homeHref,
  navLinks,
  ctaLabel = "Cotizar",
  ctaHref = "#contacto",
}: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-brand-bg/90 border-b border-brand-navy/8">
      <div className="container-page flex items-center justify-between gap-6 py-3">
        <Link href={homeHref} className="flex items-center gap-3 group">
          <Image
            src={logo}
            alt={logoAlt}
            width={110}
            height={44}
            priority
            className="h-10 w-auto object-contain"
          />
          {brandLabel && (
            <span className="hidden sm:block text-sm tracking-wider text-brand-text">
              {brandLabel}
            </span>
          )}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-brand-border/10 text-brand-text"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          className={clsx(
            "lg:flex lg:items-center lg:gap-6",
            open
              ? "absolute left-0 right-0 top-full flex flex-col items-stretch gap-2 bg-brand-surface border-b border-brand-border/5 p-5"
              : "hidden"
          )}
        >
          {navLinks.map((l) => {
            const active =
              l.href === pathname ||
              (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "text-sm py-1 border-b-2 border-transparent transition-colors",
                  active
                    ? "text-brand-accent border-brand-accent"
                    : "text-brand-text hover:text-brand-accent"
                )}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="btn-primary lg:ml-2"
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
