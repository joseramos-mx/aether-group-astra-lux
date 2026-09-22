import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ContactBlock } from "@/components/ContactBlock";
import { FloatingShapes } from "@/components/FloatingShapes";
import { SubjectChips } from "@/components/SubjectChips";
import { Marquee } from "@/components/Marquee";
import { DotField } from "@/components/DotField";
import { SITE_CONFIG, waUrl } from "@/lib/config";

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
        homeHref="/prepa"
        navLinks={navLinks}
        ctaLabel="Agendar visita"
        ctaVariant="accent"
        ctaHref="#contacto"
      />

      <main>
        {/* HERO
           El -mt negativo extiende la sección debajo del header sticky (~88/92px
           de alto). El pt lo compensa sumando el mismo alto + el espacio visual
           que queremos entre el header y el título. Así el DotField cubre toda
           la caja del hero, el header queda por delante con z-40, y el fade
           cream de arriba oculta los puntos justo detrás del pill. */}
        <section className="relative isolate -mt-[88px] overflow-hidden bg-brand-bg pt-[calc(88px+7rem)] pb-28 md:-mt-[92px] md:pt-[calc(92px+9rem)] md:pb-32">
          {/* Fondo interactivo DotField */}
          <div className="absolute inset-0 z-0">
            <DotField
              dotRadius={1.6}
              dotSpacing={16}
              bulgeStrength={58}
              glowRadius={220}
              glowColor="#F28321"
              gradientFrom="rgba(242,131,33,0.55)"
              gradientTo="rgba(13,27,52,0.35)"
            />
          </div>

          {/* Fade cream superior: cubre visualmente la zona donde vive el header */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[180px] md:h-[210px]"
            style={{
              background:
                "linear-gradient(to bottom, rgb(var(--brand-bg)) 0%, rgb(var(--brand-bg) / 0.85) 55%, rgb(var(--brand-bg) / 0) 100%)",
            }}
          />

          {/* Halo suave detrás del contenido para reforzar contraste */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% 50%, rgb(250 245 236 / 0.75) 0%, rgb(250 245 236 / 0) 70%)",
            }}
          />

          {/* Materias orbitando en las esquinas (solo lg+ para no invadir el
             contenido en tablets; ocultas a lectores de pantalla). */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
          >
            <FloatingShapes
              shapes={[
                { label: "MAT", alt: "Matemáticas",  image: "/img/image-OcGyav7XXTTVq0fDXxzmOVek6Noq7s.png", x: "3%",  y: "16%", size: 110, rotate: -8 },
                { label: "BIO", alt: "Biología",     image: "/img/image-RSCqQgrjVGAcuRmzFKB3GMNZmCsun8.png", x: "88%", y: "14%", size: 118, rotate: 10 },
                { label: "FIL", alt: "Filosofía",    image: "/img/image-QSRsEtiSwMn6J3x90Lu6c8XbiHBNQ0.png", x: "6%",  y: "48%", size: 92,  rotate: 6 },
                { label: "QUI", alt: "Química",      image: "/img/image-8cHnCfUnD1rjdivXEa5crfeDjs41C3.png", x: "89%", y: "48%", size: 100, rotate: -6 },
                { label: "HIS", alt: "Historia",     image: "/img/image-BUnsInn0zdX2ZdtHBgDnrtgdofFSLm.png", x: "2%",  y: "78%", size: 108, rotate: 6 },
                { label: "ART", alt: "Arte",         image: "/img/image-cJPmZcdC9Z6FpqJD2sWL1ufe3qEGmT.png", x: "89%", y: "80%", size: 116, rotate: -10 },
              ]}
            />
          </div>

          {/* Contenido */}
          <div className="container-page relative z-10">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-brand-ink shadow-sm backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Novaris Pax · Secundaria y Prepa
                </span>

                <h1 className="mt-7 text-[clamp(2.6rem,7vw,4.8rem)] leading-[1.02] text-brand-ink">
                  <span className="block">Innovación.</span>
                  <span className="block">Cultura.</span>
                  <span className="block">Servicio.</span>
                </h1>

                <p className="mx-auto mt-6 max-w-md text-base text-brand-muted md:text-lg">
                  Un bachillerato que forma para la universidad y para la vida.
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

                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <a href="#admisiones" className="btn-accent">
                    Admisión
                  </a>
                  <a
                    href={waUrl(
                      "Hola, quiero información de Secundaria y Prepa Novaris Pax.",
                      SITE_CONFIG.whatsappPrepa
                    )}
                    target="_blank"
                    rel="noopener"
                    className="btn-whatsapp"
                  >
                    WhatsApp
                  </a>
                </div>
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
                  phone: SITE_CONFIG.whatsappPrepa,
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
          waPhone={SITE_CONFIG.whatsappPrepa}
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

      <WhatsAppFloat
        message="Hola, quiero informes de Secundaria y Prepa Novaris Pax."
        phone={SITE_CONFIG.whatsappPrepa}
      />
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
