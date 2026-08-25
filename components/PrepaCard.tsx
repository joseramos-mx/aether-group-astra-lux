import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

/* --------------------------------------------------------------------------
   Card de Secundaria y Prepa Novaris Pax.

   El arte viene del SVG entregado (Asset 2secprep-card.svg). Se le extrajo el
   botón —la píldora, el texto y la flecha estaban vectorizados dentro— porque
   su <text> declara font-family: Geist y un SVG servido como <img> no puede
   cargar la webfont: caería a una tipografía del sistema. El botón se rehace
   aquí en HTML, así conserva Geist, es un link real, enfocable y con hover.

   El SVG original sin tocar queda en /img/Asset 2secprep-card.svg.

   Geometría del botón en unidades del viewBox (346.58 x 417.42):
     x 25.19 · y 330.94 · w 296.19 · h 60.70
   convertida a porcentajes para que escale con la card.
   -------------------------------------------------------------------------- */

const BUTTON_BOX = {
  left: "7.269%",
  top: "79.283%",
  width: "85.462%",
  height: "14.542%",
};

export function PrepaCard({ className }: { className?: string }) {
  return (
    <div className={"relative inline-block w-[181px] " + (className ?? "")}>
      <Image
        src="/img/secprep-card.svg"
        alt="Secundaria y Prepa Novaris Pax"
        width={347}
        height={417}
        unoptimized
        priority
        className="block h-auto w-full"
      />

      <Link
        href="/prepa"
        style={BUTTON_BOX}
        className="group absolute flex items-center justify-between rounded-full bg-[#08264D] pl-[7%] pr-[1.5%] text-white transition-colors duration-200 hover:bg-[#0d3667] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span className="font-display text-[12.5px] font-normal leading-none">
          Inscríbete ahora
        </span>
        <span className="flex aspect-square h-[62%] items-center justify-center rounded-full border border-white transition-transform duration-200 group-hover:rotate-45">
          <ArrowUpRight className="h-[52%] w-[52%]" />
        </span>
      </Link>
    </div>
  );
}
