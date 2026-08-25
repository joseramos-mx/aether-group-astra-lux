import Image from "next/image";
import clsx from "clsx";
import TextLoop from "@/components/TextLoop/TextLoop";

/* --------------------------------------------------------------------------
   Sección "Nuestro enfoque".

   Arriba, el TextLoop de React Bits recorriendo una onda en loop infinito
   (shape "wave", separador ✦, sin ribbon, pausa al hover). El SVG del
   componente mide 1200x520 y la onda vive en la banda central, así que se
   recorta con un contenedor de alto fijo para que no arrastre el espacio
   vacío de arriba y abajo.

   Abajo, las cuatro cards negras con las ilustraciones entregadas.
   -------------------------------------------------------------------------- */

const LOOP_WORDS = "Crece ✦ Aprende ✦ Transforma ✦ Innovación ✦ Diseña ✦ Experimenta";

type Pillar = {
  title: string;
  text: string;
  art: string;
};

const PILLARS: Pillar[] = [
  {
    title: "Capacitación especializada",
    text: "Cursos aplicados en habilidades blandas, liderazgo, NOM 035 y emprendimiento.",
    art: "/img/enfoque-capacitacion.svg",
  },
  {
    title: "Actualización de permisos",
    text: "Apertura y renovación de licencia de funcionamiento ante SDARE.",
    art: "/img/enfoque-permisos.svg",
  },
  {
    title: "Cumplimiento normativo",
    text: "Dictámenes estructural, eléctrico, uso de suelo, protección civil y salud.",
    art: "/img/enfoque-normativo.svg",
  },
  {
    title: "Seguridad y confianza",
    text: "Programa Interno de Protección Civil, extintores y primeros auxilios.",
    art: "/img/enfoque-seguridad.svg",
  },
];

export function NuestroEnfoque() {
  return (
    <section id="servicios" data-nav-theme="light" className="bg-white pb-20 md:pb-28">
      {/* Marquee curvo */}
      <div className="relative h-[170px] overflow-hidden md:h-[210px] lg:h-[240px]">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <TextLoop
            text={LOOP_WORDS}
            shape="wave"
            separator="✦"
            curviness={18}
            ribbon={false}
            pauseOnHover
            speed={70}
            fontSize={30}
            fontWeight={900}
            letterSpacing={1.5}
            uppercase
            color="#BB8C48"
            className="font-display"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 xl:px-[72px]">
        <h2 className="font-display text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-tight tracking-[-0.02em] text-brand-navy">
          Nuestro enfoque
        </h2>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className={clsx(
                "flex flex-col rounded-[28px] bg-[#111111] p-6 pb-8",
                "transition-transform duration-300 hover:-translate-y-1"
              )}
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-white p-[11%]">
                <Image
                  src={p.art}
                  alt=""
                  width={483}
                  height={483}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-6 text-center font-display text-[15px] font-bold leading-snug text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-center font-display text-[11.5px] font-normal leading-snug text-white/70">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
