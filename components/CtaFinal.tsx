import { PillButton } from "@/components/PillButton";

/* --------------------------------------------------------------------------
   CTA de cierre. Fondo negro, un solo mensaje centrado y un botón.

   No lleva la fila de avatares con contador del ejemplo de Osmo ("415+ people
   already joined") porque sería un dato inventado. La línea de apoyo usa una
   cifra que el sitio ya sostiene en la sección de índices.
   -------------------------------------------------------------------------- */

export function CtaFinal() {
  return (
    <section data-nav-theme="dark" className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 text-center sm:px-8">
        <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-normal leading-[1.18] tracking-[-0.015em] text-white">
          Hagamos oficial tu siguiente paso.
        </h2>

        <p className="mx-auto mt-5 max-w-[46ch] font-display text-[13px] font-normal leading-[1.6] text-white/55">
          Doce años acompañando empresas e instituciones con permisos al día,
          personal preparado y operaciones seguras.
        </p>

        <div className="mt-9 flex justify-center">
          <PillButton href="#contacto" variant="light" size="lg">
            Hablemos de tu caso
          </PillButton>
        </div>
      </div>
    </section>
  );
}
