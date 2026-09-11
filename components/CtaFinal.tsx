import { PillButton } from "@/components/PillButton";

/* --------------------------------------------------------------------------
   CTA de cierre: una píldora negra sobre el fondo blanco, no una banda a
   pantalla completa.

   El radio va en dos pasos porque rounded-full solo se lee como píldora
   cuando el bloque es mucho más ancho que alto: en móvil el bloque es
   estrecho y alto, y un radio completo lo deformaría, así que ahí lleva un
   radio fijo grande y solo a partir de lg pasa a píldora.

   No lleva la fila de avatares con contador del ejemplo de Osmo ("415+ people
   already joined") porque sería un dato inventado. La línea de apoyo usa una
   cifra que el sitio ya sostiene en la sección de índices.
   -------------------------------------------------------------------------- */

export function CtaFinal() {
  return (
    <section data-nav-theme="light" className="bg-white pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 xl:px-[72px]">
        <div className="rounded-[36px] bg-[#0A0A0A] px-8 py-14 text-center sm:px-12 lg:rounded-full lg:px-24 lg:py-16">
          <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(1.5rem,2.9vw,2.4rem)] font-normal leading-[1.18] tracking-[-0.015em] text-white">
            Hagamos oficial tu siguiente paso.
          </h2>

          <p className="mx-auto mt-4 max-w-[46ch] font-display text-[13px] font-normal leading-[1.6] text-white/55">
            Doce años acompañando empresas e instituciones con permisos al día,
            personal preparado y operaciones seguras.
          </p>

          <div className="mt-8 flex justify-center">
            <PillButton href="#contacto" variant="light" size="lg">
              Hablemos de tu caso
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
