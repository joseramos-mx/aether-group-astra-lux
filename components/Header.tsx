"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { List, X } from "@/components/icons";

/* --------------------------------------------------------------------------
   Header de las páginas internas.

   Toma el lenguaje del navbar de la landing (barra flotante redondeada, Geist)
   pero todo el color sale de los tokens de marca, no de valores fijos: la
   página de prepa monta este mismo componente con data-brand="prepa" y debe
   seguir saliendo en oscuro.

   El corte a menú de hamburguesa es en xl y no en lg: con etiquetas como
   "Liderazgo y NOM 035" la barra no cabe a 1024px, y antes el label de marca
   se encimaba con el primer enlace y los textos se partían en dos líneas.
   -------------------------------------------------------------------------- */

type NavLink = { href: string; label: string };

type Props = {
  logo: string;
  logoAlt: string;
  brandLabel?: string;
  homeHref: string;
  navLinks: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  /* En prepa, --brand-navy vale lo mismo que --brand-bg, así que btn-primary
     pinta un botón navy sobre fondo navy y se pierde. Esas páginas pasan
     "accent" para que el CTA use el color de acento de su marca. */
  ctaVariant?: "primary" | "accent";
};

/* Un enlace a una sección (#) nunca marca página activa: si no, en /capacitacion
   se encenderían las tres categorías a la vez. Y se compara contra base + "/"
   para que "/servicios" no active también "/servicios-empresariales". */
function isActive(href: string, pathname: string | null) {
  if (href.includes("#")) return false;
  if (!pathname || href === "/") return false;
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header({
  logo,
  logoAlt,
  brandLabel,
  homeHref,
  navLinks,
  ctaLabel = "Cotizar",
  ctaHref = "#contacto",
  ctaVariant = "primary",
}: Props) {
  const ctaClass = ctaVariant === "accent" ? "btn-accent" : "btn-primary";
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 px-4 pb-3 pt-4 sm:px-6 sm:pt-5">
      <div className="mx-auto flex h-[60px] max-w-[1440px] items-center gap-6 rounded-2xl border border-brand-border/10 bg-brand-bg/80 px-4 backdrop-blur-xl sm:px-6">
        <Link href={homeHref} className="flex shrink-0 items-center gap-3">
          <Image
            src={logo}
            alt={logoAlt}
            width={110}
            height={44}
            priority
            className="h-8 w-auto object-contain sm:h-9"
          />
          {brandLabel && (
            <span className="hidden whitespace-nowrap font-display text-[13px] text-brand-text sm:block">
              {brandLabel}
            </span>
          )}
        </Link>

        <nav className="ml-auto hidden items-center gap-6 xl:flex">
          {navLinks.map((l) => {
            const active = isActive(l.href, pathname);
            return (
              <Link
                key={l.href + l.label}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "whitespace-nowrap font-display text-[12.5px] transition-colors duration-200",
                  active
                    ? "text-brand-accent"
                    : "text-brand-text/75 hover:text-brand-text"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-0">
          <Link
            href={ctaHref}
            className={clsx(
              ctaClass,
              "hidden whitespace-nowrap !px-5 !py-2.5 sm:inline-flex"
            )}
          >
            {ctaLabel}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border/20 text-brand-text xl:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        className={clsx(
          "mx-auto mt-2 max-w-[1440px] overflow-hidden rounded-2xl border bg-brand-card shadow-dropdown transition-all duration-300 xl:hidden",
          open
            ? "max-h-[520px] border-brand-border/10 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        )}
      >
        <ul className="p-3">
          {navLinks.map((l) => (
            <li key={l.href + l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 font-display text-[14px] text-brand-text hover:bg-brand-surface"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="px-4 pb-2 pt-3 sm:hidden">
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className={clsx(ctaClass, "w-full justify-center !py-2.5")}
            >
              {ctaLabel}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
