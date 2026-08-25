import clsx from "clsx";

/* --------------------------------------------------------------------------
   Sección "Nuestra misión" + índices de confianza.

   Bento de 12 columnas: la card de misión ocupa 4 columnas y las dos filas;
   las métricas alternan ancho para que ninguna fila quede simétrica.
     fila 1 -> misión(4) · países(5) · años(3)
     fila 2 -> misión    · reconocimientos(3) · verticales(5)

   Las cards anchas ponen el número y la etiqueta lado a lado; las angostas,
   el número arriba y la etiqueta debajo.
   -------------------------------------------------------------------------- */

type Stat = {
  value: string;
  label: string;
  bg: string;
  /* Ancha = número y etiqueta en línea */
  wide: boolean;
  span: string;
};

const STATS: Stat[] = [
  {
    value: "14",
    label: "Países con presencia",
    bg: "bg-[#06BFAD]",
    wide: true,
    span: "lg:col-span-5",
  },
  {
    value: "+12",
    label: "Años de experiencia",
    bg: "bg-[#FF8C00]",
    wide: false,
    span: "lg:col-span-3",
  },
  {
    value: "+20",
    label: "Reconocimientos",
    bg: "bg-[#7ACC13]",
    wide: false,
    span: "lg:col-span-3",
  },
  {
    value: "3",
    label: "Verticales de servicio",
    bg: "bg-[#8B4A07]",
    wide: true,
    span: "lg:col-span-5",
  },
];

export function MisionIndices() {
  return (
    <section data-nav-theme="light" className="bg-white pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 xl:px-[72px]">
        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-12">
          {/* Misión */}
          <div className="flex flex-col rounded-3xl bg-[#0D86F5] p-9 sm:col-span-2 lg:col-span-4 lg:row-span-2">
            <div className="font-display text-[15px] font-normal text-white/90">
              Nuestra misión
            </div>
            <h2 className="mt-4 font-display text-[clamp(1.5rem,2.2vw,2rem)] font-bold leading-[1.15] tracking-[-0.01em] text-white">
              Formación que fortalece valores y genera resultados sostenibles.
            </h2>
            <p className="mt-auto pt-10 font-display text-[11.5px] font-normal leading-[1.55] text-white/85">
              Trabajamos con instituciones educativas, empresas y equipos que
              buscan crecer con orden, cumplimiento y visión de largo plazo.
            </p>
          </div>

          {STATS.map((s) => (
            <div
              key={s.label}
              className={clsx(
                "rounded-3xl p-8",
                s.bg,
                s.span,
                s.wide
                  ? "flex items-center gap-7"
                  : "flex flex-col justify-center"
              )}
            >
              <div
                className={clsx(
                  "font-display font-light leading-none text-white",
                  "text-[clamp(3.25rem,7.4vw,6.75rem)]"
                )}
              >
                {s.value}
              </div>
              <div
                className={clsx(
                  "font-display font-normal leading-tight text-white",
                  s.wide ? "text-[clamp(1rem,1.6vw,1.5rem)]" : "mt-3 text-[14px]"
                )}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
