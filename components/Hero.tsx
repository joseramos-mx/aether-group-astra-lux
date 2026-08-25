import Image from "next/image";
import { PillButton } from "@/components/PillButton";
import { PrepaCard } from "@/components/PrepaCard";

const STATS = [
  { label: "Países con presencia", value: "14" },
  { label: "Años de experiencia", value: "+12" },
  { label: "Reconocimientos", value: "+20" },
  { label: "Verticales de servicio", value: "3" },
];

export function Hero() {
  return (
    /* data-nav-theme="dark": el fondo es oscuro, el navbar va en blanco. */
    <section
      data-nav-theme="dark"
      className="relative isolate min-h-[760px] overflow-hidden lg:min-h-svh"
    >
      {/* Fondo: la foto ya viene desenfocada de origen + overlay #171715 al 75% */}
      <Image
        src="/img/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/75" />

      <div className="mx-auto flex min-h-[760px] w-full max-w-[1440px] flex-col px-6 pb-8 pt-[128px] sm:px-8 lg:min-h-svh lg:pt-[150px] xl:px-[72px]">
        <div className="grid flex-1 gap-14 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-10">
          {/* Columna de texto */}
          <div>
            <h1 className="font-display text-[clamp(2.75rem,6.1vw,6.5rem)] font-thin leading-[1.06] tracking-[-0.02em] text-white">
              Transformamos
              <br className="hidden sm:inline" />{" "}
              personas, equipos
              <br className="hidden sm:inline" />{" "}
              e instituciones.
            </h1>

            <p className="mt-8 max-w-[400px] font-display text-[13px] font-normal leading-[1.62] text-white/85 sm:mt-10">
              Diseñamos experiencias de formación que desarrollan habilidades,
              fortalecen valores y generan resultados reales y sostenibles.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <PillButton href="#contacto" variant="gold">
                Inscríbete ahora
              </PillButton>
              <PillButton href="#servicios" variant="outline">
                Inscríbete ahora
              </PillButton>
            </div>
          </div>

          {/* Columna de métricas */}
          <div className="flex flex-col gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-gold-400 px-9 py-5 lg:w-[270px]"
              >
                <div className="font-display text-[13.5px] font-normal leading-none text-white">
                  {s.label}
                </div>
                <div className="mt-3 font-display text-[40px] font-thin leading-none text-white">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card de Secundaria y Prepa, anclada abajo a la izquierda */}
        <div className="mt-14 lg:mt-6 xl:-ml-9">
          <PrepaCard />
        </div>
      </div>
    </section>
  );
}
