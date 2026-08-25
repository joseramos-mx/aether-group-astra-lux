import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "@/components/icons";

/* --------------------------------------------------------------------------
   Sección "Explora el grupo".

   Tres cards de igual altura. El arte de cada una viene de los SVG entregados;
   la tercera usa el wordmark de Secundaria Prepa pasado a blanco por filtro.
   Tipografía: título en Geist Bold, descripción en Regular y el "Ver más" en
   Regular a menor tamaño sobre #FD562A (blanco en la card naranja, donde el
   naranja sobre naranja no tendría contraste).
   -------------------------------------------------------------------------- */

type Card = {
  href: string;
  title: string;
  desc: string;
  art: { src: string; width: number; height: number; invert?: boolean };
  /* Colores propios de cada card */
  bg: string;
  title_: string;
  desc_: string;
  more: string;
};

const CARDS: Card[] = [
  {
    href: "/servicios-empresariales",
    title: "Servicios empresariales",
    desc: "Permisos, dictámenes y trámites para tu operación",
    art: { src: "/img/sec-servicios.svg", width: 657, height: 485 },
    bg: "bg-[#111111]",
    title_: "text-white",
    desc_: "text-white/75",
    more: "text-flame",
  },
  {
    href: "/capacitacion",
    title: "Centro de capacitación",
    desc: "Cursos y talleres para personas y equipos.",
    art: { src: "/img/sec-capacitacion.svg", width: 585, height: 489 },
    bg: "bg-[#EDEDED]",
    title_: "text-[#111111]",
    desc_: "text-[#111111]/65",
    more: "text-flame",
  },
  {
    href: "/prepa",
    title: "Secundaria y prepa Novaris Pax",
    desc: "Secundaria y preparatoria: Innovación, cultura, servicio.",
    art: {
      src: "/img/secundaria-prepa-logo.png",
      width: 1865,
      height: 457,
      invert: true,
    },
    bg: "bg-[#F18513]",
    title_: "text-white",
    desc_: "text-white/85",
    more: "text-white",
  },
];

export function ExploraGrupo() {
  return (
    <section data-nav-theme="light" className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 xl:px-[72px]">
        <h2 className="text-center font-display text-[clamp(1.75rem,2.6vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-brand-navy">
          Explora el grupo
        </h2>

        <div className="mt-12 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={clsx(
                "group flex flex-col rounded-[28px] p-10 transition-transform duration-300 hover:-translate-y-1",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2",
                c.bg
              )}
            >
              {/* Arte: caja de alto fijo, object-contain centra y escala */}
              <div className="h-[220px] w-full sm:h-[250px] lg:h-[270px]">
                <Image
                  src={c.art.src}
                  alt=""
                  width={c.art.width}
                  height={c.art.height}
                  unoptimized={c.art.src.endsWith(".svg")}
                  className={clsx(
                    "h-full w-full object-contain",
                    c.art.invert && "brightness-0 invert"
                  )}
                />
              </div>

              <div className="mt-7">
                <h3
                  className={clsx(
                    "font-display text-[19px] font-bold leading-snug",
                    c.title_
                  )}
                >
                  {c.title}
                </h3>
                <p
                  className={clsx(
                    "mt-2 font-display text-[14px] font-normal leading-snug",
                    c.desc_
                  )}
                >
                  {c.desc}
                </p>
                <span
                  className={clsx(
                    "mt-4 inline-flex items-center gap-2 font-display text-[13px] font-normal",
                    c.more
                  )}
                >
                  Ver más
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
