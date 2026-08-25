import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { ExploraGrupo } from "@/components/ExploraGrupo";
import { NuestroEnfoque } from "@/components/NuestroEnfoque";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ContactBlock } from "@/components/ContactBlock";
import { SITE_CONFIG } from "@/lib/config";

export default function HomePage() {
  return (
    <div data-brand="group" className="bg-brand-bg text-brand-text">
      <SiteNav />

      <main>
        <Hero />

        <ExploraGrupo />

        <NuestroEnfoque />

        {/* MISIÓN */}
        <section data-nav-theme="dark" className="section section-navy relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-accent/15 blur-3xl"
          />
          <div className="container-page relative">
            <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] items-center">
              <Reveal>
                <div className="inline-block text-[11px] tracking-[0.24em] uppercase text-brand-accent mb-4">
                  Nuestra misión
                </div>
                <h2 className="h2 max-w-xl">
                  Formación que fortalece valores y genera resultados sostenibles.
                </h2>
                <p className="mt-5 text-white/70 max-w-lg">
                  Trabajamos con instituciones educativas, empresas y equipos
                  que buscan crecer con orden, cumplimiento y visión de largo
                  plazo.
                </p>
                <div className="mt-8 flex gap-3">
                  <Link href="/nosotros" className="btn-accent">
                    Conoce al equipo
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 gap-4">
                  <Stat value="14" label="Países con presencia" />
                  <Stat value="+12" label="Años de experiencia" />
                  <Stat value="+20" label="Reconocimientos" />
                  <Stat value="3" label="Verticales de servicio" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section data-nav-theme="light" className="section">
          <div className="container-page">
            <CtaBand
              title="Hablemos de tu caso"
              description="Cuéntanos qué necesitas para tu empresa o equipo."
              primary={{ label: "Contactar", href: "#contacto" }}
              whatsapp={{
                label: "WhatsApp",
                message: "Hola, quiero información.",
              }}
            />
          </div>
        </section>

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

      <div data-nav-theme="dark">
        <Footer
          logo="/img/aether-group-logo.png"
          tagline={SITE_CONFIG.tagline}
          linkGroups={[
            {
              title: "Marcas",
              links: [
                { href: "/servicios-empresariales", label: "Servicios" },
                { href: "/capacitacion", label: "Capacitación" },
                { href: "/prepa", label: "Secundaria y Prepa Novaris Pax" },
              ],
            },
            {
              title: "Grupo",
              links: [
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "#contacto", label: "Contacto" },
              ],
            },
          ]}
        />
      </div>

      <WhatsAppFloat message="Hola, quiero información del grupo." />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/8 border border-white/10 p-5">
      <div className="text-4xl md:text-5xl leading-none text-brand-accent">
        {value}
      </div>
      <div className="mt-2 text-xs text-white/70 uppercase tracking-[0.15em]">
        {label}
      </div>
    </div>
  );
}
