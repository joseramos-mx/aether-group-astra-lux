import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ContactBlock } from "@/components/ContactBlock";
import { FloatingShapes } from "@/components/FloatingShapes";
import { SubjectChips } from "@/components/SubjectChips";
import { Marquee } from "@/components/Marquee";
import { waUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Secundaria y Prepa Novaris Pax",
  description: "Secundaria y preparatoria: innovación, cultura, servicio.",
};

const navLinks = [
  { href: "/", label: "← Grupo" },
  { href: "/prepa#modelo", label: "Modelo" },
  { href: "/prepa#admisiones", label: "Admisiones" },
];

export default function PrepaPage() {
  return (
    <div data-brand="prepa" className="bg-brand-bg text-brand-text">
      <Header
        logo="/img/secundaria-prepa-logo.png"
        logoAlt="Secundaria y Prepa Novaris Pax"
        brandLabel="Novaris Pax"
        homeHref="/prepa"
        navLinks={navLinks}
        ctaLabel="Agendar visita"
        ctaHref="#contacto"
      />

      <main>
        {/* HERO */}
        <section className="section-cream relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-28">
          <FloatingShapes
            shapes={[
              { label: "MAT", x: "6%",  y: "10%", size: 120, hue: "#3b82f6", rotate: -12 },
              { label: "BIO", x: "84%", y: "12%", size: 140, hue: "#22c55e", rotate: 14 },
              { label: "HIS", x: "3%",  y: "58%", size: 100, hue: "#eab308", rotate: 8 },
              { label: "ART", x: "88%", y: "62%", size: 130, hue: "#ef4444", rotate: -10 },
              { label: "FIL", x: "12%", y: "82%", size: 85,  hue: "#a855f7", rotate: 12 },
              { label: "QUI", x: "80%", y: "84%", size: 95,  hue: "#f97316", rotate: -6 },
            ]}
          />

          <div className="container-page relative z-10 text-center">
            <Reveal>
              <Image
                src="/img/secundaria-prepa-logo.png"
                alt="Secundaria y Prepa Novaris Pax"
                width={1865}
                height={457}
                priority
                className="mx-auto h-14 md:h-16 w-auto object-contain"
              />
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 text-[11px] tracking-[0.24em] uppercase text-[rgb(var(--brand-ink))] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                Novaris Pax
              </div>
              <h1 className="leading-[1.05] mt-6 text-[clamp(2.4rem,6vw,4.2rem)] max-w-[14ch] mx-auto">
                Innovación. Cultura. Servicio.
              </h1>
              <p className="mt-5 max-w-lg mx-auto text-[rgb(var(--brand-ink)/0.72)] text-lg">
                Secundaria y preparatoria que forman para la universidad y para la vida.
              </p>

              <div className="mt-8">
                <SubjectChips
                  items={[
                    { label: "Ciencias",    color: "#3b82f6" },
                    { label: "Salud",       color: "#22c55e" },
                    { label: "Negocios",    color: "#eab308" },
                    { label: "Humanidades", color: "#a855f7" },
                    { label: "Arte",        color: "#ef4444" },
                    { label: "Tecnología",  color: "#f97316" },
                  ]}
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <a href="#admisiones" className="btn-ink">
                  Admisión
                </a>
                <a
                  href={waUrl("Hola, quiero información de Secundaria y Prepa Novaris Pax.")}
                  target="_blank"
                  rel="noopener"
                  className="btn-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <Marquee
          variant="dark"
          items={["Innovación", "Cultura", "Servicio"]}
        />

        {/* MODELO */}
        <section id="modelo" className="section">
          <div className="container-page">
            <Reveal className="max-w-xl mb-10">
              <h2 className="h2">Tres pilares.</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-3">
              <PillarCard
                num="01"
                title="Innovación"
                text="Aprendizaje por proyectos y tecnología aplicada."
                color="#3b82f6"
              />
              <PillarCard
                num="02"
                title="Cultura"
                text="Humanidades, arte y pensamiento crítico."
                color="#a855f7"
              />
              <PillarCard
                num="03"
                title="Servicio"
                text="Liderazgo estudiantil y compromiso con el entorno."
                color="#f97316"
              />
            </Stagger>
          </div>
        </section>

        {/* ADMISIONES */}
        <section id="admisiones" className="section section-alt">
          <div className="container-page">
            <Reveal className="max-w-xl mb-10">
              <h2 className="h2">Proceso de admisión.</h2>
            </Reveal>
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: 1, t: "Informes", d: "Solicita ficha o WhatsApp." },
                { n: 2, t: "Visita", d: "Conoce instalaciones y docentes." },
                { n: 3, t: "Examen", d: "Evaluación y entrevista." },
                { n: 4, t: "Inscripción", d: "Formaliza tu ingreso." },
              ].map((s) => (
                <StaggerItem key={s.n} className="card">
                  <div className="card-icon text-lg">{s.n}</div>
                  <h3 className="h3 text-brand-text mb-2">{s.t}</h3>
                  <p className="text-brand-muted text-sm">{s.d}</p>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-14">
              <CtaBand
                title="Agenda tu visita"
                primary={{ label: "Informes", href: "#contacto" }}
                whatsapp={{
                  label: "WhatsApp",
                  message: "Hola, quiero agendar visita a Secundaria y Prepa Novaris Pax.",
                }}
              />
            </div>
          </div>
        </section>

        <ContactBlock
          origin="Secundaria y Prepa Novaris Pax"
          title="Informes de admisión"
          description="Te acompañamos en el proceso."
          infoTitle="Admisiones"
          infoDescription="Lunes a viernes de 9:00 a 18:00 h."
          addressLabel="Campus"
          interestLabel="Nivel"
          options={["Secundaria", "Preparatoria", "Informes"]}
          waMessage="Hola, quiero información de Secundaria y Prepa Novaris Pax."
          submitLabel="Solicitar informes"
        />
      </main>

      <Footer
        logo="/img/secundaria-prepa-logo.png"
        tagline="Secundaria y Prepa Novaris Pax. Group Aether Astra Lux."
        legalLine="Secundaria y Prepa Novaris Pax"
        groupSlogan="Innovación · Cultura · Servicio"
        linkGroups={[
          {
            title: "Secundaria y Prepa",
            links: [
              { href: "#modelo", label: "Modelo" },
              { href: "#admisiones", label: "Admisiones" },
            ],
          },
          {
            title: "Grupo",
            links: [
              { href: "/", label: "Aether Astra Lux" },
              { href: "/servicios-empresariales", label: "Empresas" },
              { href: "/capacitacion", label: "Capacitación" },
            ],
          },
        ]}
      />

      <WhatsAppFloat message="Hola, quiero informes de Secundaria y Prepa Novaris Pax." />
    </div>
  );
}

function PillarCard({
  num,
  title,
  text,
  color,
}: {
  num: string;
  title: string;
  text: string;
  color: string;
}) {
  return (
    <div className="card group relative overflow-hidden hover:border-brand-accent/40 transition-colors">
      <span
        aria-hidden
        className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-30 blur-2xl transition-transform duration-500 group-hover:scale-125"
        style={{ background: color }}
      />
      <div className="text-xs uppercase tracking-[0.24em] text-brand-accent mb-4">
        {num}
      </div>
      <h3 className="text-2xl md:text-3xl mb-3">{title}</h3>
      <p className="text-brand-muted text-sm">{text}</p>
    </div>
  );
}
