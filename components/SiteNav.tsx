"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { CaretDown, List, X } from "@/components/icons";
import { PillButton } from "@/components/PillButton";

/* --------------------------------------------------------------------------
   Navbar content-aware.

   Cada sección de la página declara data-nav-theme="dark" | "light" según lo
   OSCURO QUE SEA SU FONDO. Un IntersectionObserver con una banda de detección
   de 1px a la altura del centro del navbar detecta qué sección está justo
   detrás y el navbar invierte su contenido:
     data-nav-theme="dark"  -> fondo oscuro -> contenido blanco
     data-nav-theme="light" -> fondo claro  -> contenido en tinta
   -------------------------------------------------------------------------- */

type Surface = "dark" | "light";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/capacitacion", label: "Capacitación" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/prepa", label: "Secundaria y prepa" },
  { href: "#contacto", label: "Contacto" },
];

const SERVICIOS = [
  {
    href: "/servicios-empresariales",
    title: "Vista general",
    desc: "Todo el catálogo de trámites y gestiones.",
  },
  {
    href: "/servicios-empresariales#servicios",
    title: "Licencias y permisos",
    desc: "Apertura y renovación ante SDARE.",
  },
  {
    href: "/servicios-empresariales#servicios",
    title: "Dictámenes",
    desc: "Eléctrico, estructural y uso de suelo.",
  },
  {
    href: "/servicios-empresariales#servicios",
    title: "Protección civil",
    desc: "Programa interno, extintores y brigadas.",
  },
  {
    href: "/servicios-empresariales#proceso",
    title: "Cómo trabajamos",
    desc: "Diagnóstico, cotización, ejecución y entrega.",
  },
];

export function SiteNav() {
  const navRef = useRef<HTMLDivElement>(null);
  const [surface, setSurface] = useState<Surface>("dark");
  const [openMenu, setOpenMenu] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Detecta el fondo que queda detrás del navbar. */
  useEffect(() => {
    const setup = () => {
      const nav = navRef.current;
      if (!nav) return () => {};

      const rect = nav.getBoundingClientRect();
      const line = rect.top + rect.height / 2; // centro del navbar en el viewport
      const bottom = Math.max(0, window.innerHeight - line - 1);

      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const t = e.target.getAttribute("data-nav-theme");
            if (t === "dark" || t === "light") setSurface(t);
          }
        },
        { rootMargin: `-${line}px 0px -${bottom}px 0px`, threshold: 0 }
      );

      document
        .querySelectorAll("[data-nav-theme]")
        .forEach((el) => io.observe(el));

      return () => io.disconnect();
    };

    let teardown = setup();
    const onResize = () => {
      teardown();
      teardown = setup();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      teardown();
    };
  }, []);

  /* Cierra el dropdown con Escape. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenServices(false);
        setOpenMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hoverOpen = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenServices(true);
  }, []);

  const hoverClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenServices(false), 120);
  }, []);

  const dark = surface === "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div
        ref={navRef}
        className={clsx(
          "mx-auto flex h-[60px] max-w-[1440px] items-center gap-6 rounded-2xl px-4 sm:px-6",
          "backdrop-blur-xl transition-colors duration-500",
          dark
            ? "bg-white/[0.06] text-white"
            : " bg-white/80 text-ink"
        )}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="Group Aether Astra Lux">
          <Image
            src="/img/aether-group-logo.png"
            alt="Group Aether Astra Lux"
            width={4500}
            height={843}
            priority
            className={clsx(
              "h-8 w-auto object-contain transition-[filter] duration-500 sm:h-9",
              dark && "brightness-0 invert"
            )}
          />
        </Link>

        {/* Navegación desktop */}
        <nav className="ml-auto hidden items-center gap-[14px] lg:flex">
          <NavLink href="/" dark={dark}>
            Inicio
          </NavLink>

          {/* Dropdown de servicios */}
          <div
            className="relative"
            onMouseEnter={hoverOpen}
            onMouseLeave={hoverClose}
          >
            <button
              type="button"
              onClick={() => setOpenServices((v) => !v)}
              aria-expanded={openServices}
              aria-haspopup="true"
              className={clsx(
                "flex items-center gap-1.5 text-[12.5px] transition-opacity duration-200",
                dark ? "text-white/85 hover:text-white" : "text-ink/75 hover:text-ink"
              )}
            >
              Servicios
              <CaretDown
                className={clsx(
                  "h-2.5 w-2.5 transition-transform duration-300",
                  openServices && "rotate-180"
                )}
              />
            </button>

            {/* Panel */}
            <div
              className={clsx(
                "absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-5",
                "origin-top transition-all duration-200",
                openServices
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              )}
            >
              <div className="flex gap-3 rounded-[20px] border border-gold-200/70 bg-gold-50 p-3 shadow-dropdown">
                <div className="relative h-[236px] w-[210px] shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src="/img/nav-servicios.jpg"
                    alt=""
                    fill
                    sizes="210px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-[15px] font-normal leading-tight text-white">
                      Servicios
                      <br />
                      empresariales
                    </p>
                  </div>
                </div>

                <ul className="flex-1 py-1">
                  {SERVICIOS.map((s) => (
                    <li key={s.title}>
                      <Link
                        href={s.href}
                        onClick={() => setOpenServices(false)}
                        className="block rounded-xl px-4 py-2.5 transition-colors duration-150 hover:bg-white"
                      >
                        <span className="block text-[13.5px] leading-snug text-ink">
                          {s.title}
                        </span>
                        <span className="mt-0.5 block text-[12px] leading-snug text-ink/55">
                          {s.desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {NAV_LINKS.slice(1).map((l) => (
            <NavLink key={l.href + l.label} href={l.href} dark={dark}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <PillButton href="#contacto" variant="gold" size="md" className="hidden sm:inline-flex">
            Inscríbete ahora
          </PillButton>

          {/* Toggle móvil */}
          <button
            type="button"
            onClick={() => setOpenMenu((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={openMenu}
            className={clsx(
              "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors lg:hidden",
              dark ? "border-white/25 text-white" : "border-ink/15 text-ink"
            )}
          >
            {openMenu ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        className={clsx(
          "mx-auto mt-2 max-w-[1440px] overflow-hidden rounded-2xl border border-gold-200/70 bg-gold-50 shadow-dropdown transition-all duration-300 lg:hidden",
          openMenu ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"
        )}
      >
        <ul className="p-3">
          <li>
            <Link
              href="/"
              onClick={() => setOpenMenu(false)}
              className="block rounded-xl px-4 py-2.5 text-[14px] text-ink hover:bg-white"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/servicios-empresariales"
              onClick={() => setOpenMenu(false)}
              className="block rounded-xl px-4 py-2.5 text-[14px] text-ink hover:bg-white"
            >
              Servicios
            </Link>
          </li>
          {NAV_LINKS.slice(1).map((l) => (
            <li key={l.href + l.label}>
              <Link
                href={l.href}
                onClick={() => setOpenMenu(false)}
                className="block rounded-xl px-4 py-2.5 text-[14px] text-ink hover:bg-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="px-4 pb-2 pt-3 sm:hidden">
            <PillButton href="#contacto" variant="ink" size="md">
              Inscríbete ahora
            </PillButton>
          </li>
        </ul>
      </div>
    </header>
  );
}

function NavLink({
  href,
  dark,
  children,
}: {
  href: string;
  dark: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "text-[12.5px] transition-colors duration-200",
        dark ? "text-white/85 hover:text-white" : "text-ink/75 hover:text-ink"
      )}
    >
      {children}
    </Link>
  );
}
