import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ContactBlock } from "@/components/ContactBlock";
import { Marquee } from "@/components/Marquee";
import { SITE_CONFIG, waUrl } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios-empresariales", label: "Servicios" },
  { href: "/capacitacion", label: "Capacitación" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/prepa", label: "Secundaria y Prepa" },
  { href: "#contacto", label: "Contacto" },
];

export default function HomePage() {
  return (
    <div data-brand="group" className="bg-brand-bg text-brand-text">
      <Header
        logo="/img/aether-group-logo.png"
        logoAlt="Group Aether Astra Lux"
        homeHref="/"
        navLinks={navLinks}
        ctaLabel="Contacto"
        ctaHref="#contacto"
      />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-24 bg-radial-accent">
          <div className="container-page relative z-10 grid gap-12 md:grid-cols-[1.05fr_.95fr] items-center">
            <Reveal>

              <h1 className="h1 mt-6 max-w-[16ch]">
                Transformamos personas, equipos e{" "}
                <span className="text-brand-accent">instituciones</span>.
              </h1>
              <p className="lead mt-6">
                Diseñamos experiencias de formación que desarrollan habilidades,
                fortalecen valores y generan resultados reales y sostenibles.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#servicios" className="btn-primary">
                  Ver servicios
                </a>
                <a
                  href={waUrl("Hola, quiero información del grupo.")}
                  target="_blank"
                  rel="noopener"
                  className="btn-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -top-4 -right-4 w-40 h-40 rounded-3xl bg-brand-navy"
                  style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
                />
                <div
                  aria-hidden
                  className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-brand-accent"
                  style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" }}
                />
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(11,37,69,0.15)] aspect-[4/5]">
                  <Image
                    src="/img/estudiantes.jpg"
                    alt="Estudiantes en sesión colaborativa"
                    fill
                    priority
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* UNIDADES / ACCESOS */}
        <section className="section">
          <div className="container-page">
            <Reveal className="max-w-2xl mb-10">
              <h2 className="h2">Explora el grupo.</h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              <UnitCard
                num="01"
                title="Servicios empresariales"
                desc="Permisos, dictámenes y trámites para tu operación."
                href="/servicios-empresariales"
              />
              <UnitCard
                num="02"
                title="Centro de capacitación"
                desc="Cursos y talleres para personas y equipos."
                href="/capacitacion"
              />
              <UnitCard
                num="03"
                title="Secundaria y Prepa Novaris Pax"
                desc="Secundaria y preparatoria: innovación, cultura, servicio."
                href="/prepa"
                logo="/img/secundaria-prepa-logo.png"
              />
            </div>
          </div>
        </section>

        <Marquee
          variant="accent"
          items={["Aprende", "Crece", "Transforma"]}
        />

        {/* PILARES (los 4 del catálogo) */}
        <section id="servicios" className="section section-alt">
          <div className="container-page">
            <Reveal className="max-w-2xl mb-12">
              <h2 className="h2">Nuestro enfoque.</h2>
              <p className="mt-3 text-brand-muted">
                Permisos actualizados, personal preparado, operaciones seguras.
              </p>
            </Reveal>

            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <PillarCard
                icon={<IconBook />}
                title="Capacitación especializada"
                text="Cursos aplicados en habilidades blandas, liderazgo, NOM 035 y emprendimiento."
              />
              <PillarCard
                icon={<IconDoc />}
                title="Actualización de permisos"
                text="Apertura y renovación de licencia de funcionamiento ante SDARE."
              />
              <PillarCard
                icon={<IconCheck />}
                title="Cumplimiento normativo"
                text="Dictámenes estructural, eléctrico, uso de suelo, protección civil y salud."
              />
              <PillarCard
                icon={<IconShield />}
                title="Seguridad y confianza"
                text="Programa Interno de Protección Civil, extintores y primeros auxilios."
              />
            </Stagger>
          </div>
        </section>

        {/* MISIÓN */}
        <section className="section section-navy relative overflow-hidden">
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

        <section className="section">
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
      </main>

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

      <WhatsAppFloat message="Hola, quiero información del grupo." />
    </div>
  );
}

function PillarCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <StaggerItem className="card group hover:border-brand-accent/40 transition-colors">
      <div className="card-icon">{icon}</div>
      <h3 className="h3 text-brand-navy mb-2">{title}</h3>
      <p className="text-brand-muted text-sm">{text}</p>
    </StaggerItem>
  );
}

function UnitCard({
  num,
  title,
  desc,
  href,
  logo,
}: {
  num: string;
  title: string;
  desc: string;
  href: string;
  logo?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl bg-white border border-brand-navy/10 p-8 flex flex-col justify-between min-h-[220px] hover:border-brand-accent/50 hover:shadow-[0_20px_45px_rgba(11,37,69,0.08)] transition-all"
    >
      <div className="flex items-start justify-between">
        <span className="text-xs tracking-[0.24em] uppercase text-brand-accent">
          {num}
        </span>
        {logo && (
          <Image
            src={logo}
            alt=""
            width={245}
            height={60}
            className="h-8 w-auto max-w-[140px] object-contain"
          />
        )}
      </div>
      <div>
        <h3 className="text-2xl text-brand-navy leading-tight">{title}</h3>
        <p className="mt-2 text-sm text-brand-muted">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-accent group-hover:gap-2 transition-all">
          Ver más →
        </span>
      </div>
    </Link>
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

/* Icons */
function IconBook() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
function IconDoc() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7z" />
      <path d="m8 12 3 3 5-5" />
    </svg>
  );
}
