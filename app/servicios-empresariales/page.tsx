import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ContactBlock } from "@/components/ContactBlock";
import { Marquee } from "@/components/Marquee";
import { SITE_CONFIG, waUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Permisos, licencias y dictámenes en Durango. Apertura de empresas, protección civil y cumplimiento normativo.",
};

const navLinks = [
  { href: "/", label: "← Grupo" },
  { href: "/servicios-empresariales#servicios", label: "Servicios" },
  { href: "/servicios-empresariales#proceso", label: "Proceso" },
  { href: "/nosotros", label: "Nosotros" },
];

// 9 servicios reales del catálogo
const services = [
  {
    n: "01",
    title: "Licencia de funcionamiento (SDARE)",
    desc: "Apertura y renovación de licencia de funcionamiento para empresas ante SDARE.",
  },
  {
    n: "02",
    title: "Dictamen eléctrico",
    desc: "Elaboración de dictamen eléctrico con perito del municipio.",
  },
  {
    n: "03",
    title: "Dictamen estructural",
    desc: "Dictamen estructural con perito del municipio.",
  },
  {
    n: "04",
    title: "Dictamen de uso de suelo",
    desc: "Trámite completo del dictamen de uso de suelo.",
  },
  {
    n: "05",
    title: "Dictamen de protección civil",
    desc: "Creación del Programa Interno de Protección Civil.",
  },
  {
    n: "06",
    title: "Dictamen de Secretaría de Salud",
    desc: "Cumplimiento y trámite de dictamen sanitario.",
  },
  {
    n: "07",
    title: "Certificado de fumigación",
    desc: "Emisión de certificado para operación del inmueble.",
  },
  {
    n: "08",
    title: "Extintores",
    desc: "Relleno y actualización de extintores para tu empresa.",
  },
  {
    n: "09",
    title: "Capacitación de prevención",
    desc: "Combate de conatos de incendios, evacuación de inmueble y primeros auxilios.",
  },
];

export default function ServiciosPage() {
  return (
    <div data-brand="empresa" className="bg-brand-bg text-brand-text">
      <Header
        logo="/img/aether-group-logo.png"
        logoAlt="Servicios"
        brandLabel="Servicios"
        homeHref="/servicios-empresariales"
        navLinks={navLinks}
        ctaLabel="Cotizar"
        ctaHref="#contacto"
      />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20 bg-radial-accent">
          <div className="container-page relative z-10 max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-navy/10 px-3 py-1.5 text-[11px] tracking-[0.24em] uppercase text-brand-navy shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-accent" />
                Permisos · Dictámenes · Cumplimiento
              </div>
              <h1 className="h1 mt-6">
                Permisos actualizados.{" "}
                <span className="text-brand-accent">Operaciones seguras</span>.
              </h1>
              <p className="lead mt-5">
                Apertura y renovación de licencias, dictámenes con perito del
                municipio y programa interno de protección civil. Todo en Durango.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contacto" className="btn-primary">
                  Cotizar
                </a>
                <a
                  href={waUrl("Hola, necesito asesoría en permisos.")}
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
          variant="accent"
          items={SITE_CONFIG.tagline.split(". ").filter(Boolean)}
        />

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container-page">
            <Reveal className="max-w-xl mb-10">
              <h2 className="h2">Catálogo de servicios.</h2>
              <p className="mt-3 text-brand-muted">
                Nueve trámites que resolvemos de principio a fin.
              </p>
            </Reveal>

            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <StaggerItem key={s.n}>
                  <div className="card group h-full hover:border-brand-accent/40 transition-colors">
                    <div className="text-xs uppercase tracking-[0.24em] text-brand-accent mb-4">
                      {s.n}
                    </div>
                    <h3 className="text-lg md:text-xl mb-2 leading-tight text-brand-navy">
                      {s.title}
                    </h3>
                    <p className="text-sm text-brand-muted">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* PROCESO */}
        <section id="proceso" className="section section-alt">
          <div className="container-page">
            <Reveal className="max-w-xl mb-10">
              <h2 className="h2">Cómo trabajamos.</h2>
            </Reveal>
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", t: "Diagnóstico", d: "Revisamos tu situación actual." },
                { n: "02", t: "Cotización", d: "Costos, tiempos y documentos claros." },
                { n: "03", t: "Ejecución", d: "Gestión ante cada autoridad." },
                { n: "04", t: "Entrega", d: "Documentos y plan de seguimiento." },
              ].map((s) => (
                <StaggerItem key={s.n}>
                  <div className="card h-full">
                    <div className="text-xs uppercase tracking-[0.24em] text-brand-accent mb-4">
                      {s.n}
                    </div>
                    <h3 className="text-lg mb-2 text-brand-navy">{s.t}</h3>
                    <p className="text-sm text-brand-muted">{s.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="section">
          <div className="container-page">
            <CtaBand
              title="Regulariza tu empresa"
              description="Recibe una propuesta en 24 horas hábiles."
              primary={{ label: "Cotizar", href: "#contacto" }}
              whatsapp={{
                label: "WhatsApp",
                message: "Hola, quiero una cotización de permisos.",
              }}
            />
          </div>
        </section>

        <ContactBlock
          origin="Servicios"
          title="Solicita tu cotización"
          infoTitle="Habla con nosotros"
          infoDescription="Atendemos empresas en Durango y la región."
          addressLabel="Oficina"
          interestLabel="¿Qué servicio necesitas?"
          showCompany
          submitLabel="Enviar"
          options={services.map((s) => s.title)}
          waMessage="Hola, quiero información de servicios."
        />
      </main>

      <Footer
        logo="/img/aether-group-logo.png"
        tagline="Servicios · Group Aether Astra Lux."
        legalLine="Servicios · Group Aether Astra Lux"
        linkGroups={[
          {
            title: "Servicios",
            links: [
              { href: "#servicios", label: "Catálogo" },
              { href: "#proceso", label: "Proceso" },
            ],
          },
          {
            title: "Grupo",
            links: [
              { href: "/", label: "Aether Astra Lux" },
              { href: "/capacitacion", label: "Capacitación" },
              { href: "/nosotros", label: "Nosotros" },
            ],
          },
        ]}
      />

      <WhatsAppFloat message="Hola, necesito asesoría en permisos." />
    </div>
  );
}
