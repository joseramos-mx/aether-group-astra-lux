import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { ExploraGrupo } from "@/components/ExploraGrupo";
import { NuestroEnfoque } from "@/components/NuestroEnfoque";
import { MisionIndices } from "@/components/MisionIndices";
import { CtaFinal } from "@/components/CtaFinal";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactBlock } from "@/components/ContactBlock";

export default function HomePage() {
  return (
    <div data-brand="group" className="bg-brand-bg text-brand-text">
      <SiteNav />

      <main>
        <Hero />

        <ExploraGrupo />

        <NuestroEnfoque />

        <MisionIndices />

        <CtaFinal />

        <div data-nav-theme="light">
          <ContactBlock
            origin="Home"
            waMessage="Hola, vengo del sitio."
            options={[
              "Permisos y dictámenes",
              "Capacitación de personal",
              "Secundaria y Prepa Novaris Pax",
              "Información general",
            ]}
            interestLabel="¿Qué te interesa?"
          />
        </div>
      </main>

      <SiteFooter />

      <WhatsAppFloat message="Hola, quiero información del grupo." />
    </div>
  );
}
