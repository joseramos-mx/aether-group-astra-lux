import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ContactBlock } from "@/components/ContactBlock";
import { Marquee } from "@/components/Marquee";
import { waUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Capacitación",
  description:
    "Catálogo de cursos: habilidades blandas, liderazgo, NOM 035, emprendimiento y más.",
};

const navLinks = [
  { href: "/", label: "← Grupo" },
  { href: "/capacitacion#servicio", label: "Servicio y equipo" },
  { href: "/capacitacion#liderazgo", label: "Liderazgo y NOM 035" },
  { href: "/capacitacion#emprendimiento", label: "Emprendimiento" },
  { href: "/nosotros", label: "Nosotros" },
];

// Catálogo real del PDF, agrupado
const cursosServicio = [
  "Servicio al cliente con enfoque en calidez",
  "Servicio al cliente para meseros",
  "Curso intensivo de presentaciones ejecutivas en Canva",
  "Habilidades de presentación",
  "Team building para equipos de alto rendimiento",
  "Experiencias WOW: superar expectativas del cliente",
  "Sentido de vida para el trabajo",
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Herramientas para solucionar problemas",
];

const cursosLiderazgo = [
  "Liderazgo positivo",
  "Habilidades blandas",
  "Cursos apegados a la NOM 035",
  "Manejo de juntas de trabajo",
  "Disciplina en el trabajo",
  "Decisiones complejas",
  "Habilidades de negociación",
  "Guía para entrevistas de trabajo",
  "Inteligencia emocional en el trabajo",
  "Resiliencia en el trabajo",
];

const cursosEmprendimiento = [
  "Taller de emprendimiento: modelo de negocio (Canvas)",
  "Inteligencia artificial para emprendedores",
];

/* Se calcula para que no se desfase al mover cursos entre categorías. */
const totalCursos = () =>
  cursosServicio.length + cursosLiderazgo.length + cursosEmprendimiento.length;

export default function CapacitacionPage() {
  return (
    <div data-brand="capacitacion" className="bg-brand-bg text-brand-text">
      <Header
        logo="/img/aether-group-logo.png"
        logoAlt="Capacitación"
        brandLabel="Capacitación"
        homeHref="/capacitacion"
        navLinks={navLinks}
        ctaLabel="Inscribirme"
        ctaHref="#contacto"
      />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20 bg-radial-accent">
          <div className="container-page relative z-10 grid gap-12 md:grid-cols-[1.05fr_.95fr] items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-navy/10 px-3 py-1.5 text-[11px] tracking-[0.24em] uppercase text-brand-navy shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-accent" />
                Aprende · Crece · Transforma
              </div>
              <h1 className="h1 mt-6">
                Formación humana con{" "}
                <span className="text-brand-accent">resultados reales</span>.
              </h1>
              <p className="lead mt-5">
                Programas aplicados en habilidades blandas, liderazgo, NOM 035,
                comunicación y emprendimiento.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#servicio" className="btn-primary">
                  Ver catálogo
                </a>
                <a
                  href={waUrl("Hola, quiero información de los cursos.")}
                  target="_blank"
                  rel="noopener"
                  className="btn-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-white border border-brand-navy/10 p-8 shadow-[0_20px_60px_rgba(11,37,69,0.08)]">
                <div className="grid grid-cols-3 gap-4">
                  <StatMini label="Cursos" value={`+${totalCursos()}`} />
                  <StatMini label="Áreas" value="3" />
                  <StatMini label="Modalidades" value="3" />
                </div>
                <div className="mt-6 pt-6 border-t border-brand-navy/10">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-brand-accent mb-3">
                    Modalidades disponibles
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {["Presencial", "Virtual", "Híbrido"].map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-brand-surface border border-brand-navy/10 px-3 py-1"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Marquee
          variant="accent"
          items={["Aprende", "Crece", "Transforma"]}
        />

        {/* SERVICIO Y EQUIPO */}
        <section id="servicio" className="section">
          <div className="container-page">
            <CategoryHeader
              num="01"
              title="Servicio al cliente y equipos"
              desc="Programas para cerrar la brecha entre saber y hacer en atención, comunicación y colaboración."
            />
            <CourseList items={cursosServicio} />
          </div>
        </section>

        {/* LIDERAZGO */}
        <section id="liderazgo" className="section section-alt">
          <div className="container-page">
            <CategoryHeader
              num="02"
              title="Liderazgo y NOM 035"
              desc="Habilidades directivas, cumplimiento normativo y bienestar en el entorno laboral."
            />
            <CourseList items={cursosLiderazgo} />
          </div>
        </section>

        {/* EMPRENDIMIENTO */}
        <section id="emprendimiento" className="section">
          <div className="container-page">
            <CategoryHeader
              num="03"
              title="Emprendimiento e innovación"
              desc="Diseña, valida y aplica tecnología para acelerar tu proyecto."
            />
            <CourseList items={cursosEmprendimiento} />
          </div>
        </section>

        {/* PARA EMPRESAS */}
        <section className="section section-navy relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-accent/15 blur-3xl"
          />
          <div className="container-page relative grid gap-10 md:grid-cols-2 items-center">
            <Reveal>
              <div className="text-[11px] tracking-[0.24em] uppercase text-brand-accent mb-4">
                Para empresas
              </div>
              <h2 className="h2 max-w-xl">
                Programas a la medida de tu equipo.
              </h2>
              <p className="mt-5 text-white/70 max-w-lg">
                Diagnosticamos necesidades, adaptamos el contenido y evaluamos
                resultados por participante.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="space-y-3 text-sm">
                {[
                  "Diagnóstico sin costo",
                  "Presencial, virtual o híbrido",
                  "Constancias oficiales",
                  "Reporte de resultados por participante",
                  "Facturación empresarial",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 rounded-xl bg-white/6 border border-white/10 px-4 py-3 text-white/85"
                  >
                    <span className="text-brand-accent">✓</span> {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container-page">
            <CtaBand
              title="Impulsa a tu equipo"
              description="Solicita el catálogo completo o agenda una sesión de diagnóstico."
              primary={{ label: "Solicitar catálogo", href: "#contacto" }}
              whatsapp={{
                label: "WhatsApp",
                message: "Hola, me interesa capacitación.",
              }}
            />
          </div>
        </section>

        <ContactBlock
          origin="Capacitación"
          title="Cuéntanos qué quieres aprender"
          infoTitle="Asesor académico"
          infoDescription="Te orientamos según tu perfil o el de tu equipo."
          addressLabel="Sede"
          interestLabel="¿Para quién es?"
          submitLabel="Enviar"
          options={[
            "Servicio y equipos",
            "Liderazgo y NOM 035",
            "Emprendimiento",
            "Capacitación para empresa",
          ]}
          waMessage="Hola, quiero información de cursos."
        />
      </main>

      <Footer
        logo="/img/aether-group-logo.png"
        tagline="Capacitación · Group Aether Astra Lux."
        legalLine="Capacitación · Group Aether Astra Lux"
        linkGroups={[
          {
            title: "Catálogo",
            links: [
              { href: "#servicio", label: "Servicio y equipos" },
              { href: "#liderazgo", label: "Liderazgo y NOM 035" },
              { href: "#emprendimiento", label: "Emprendimiento" },
            ],
          },
          {
            title: "Grupo",
            links: [
              { href: "/", label: "Aether Astra Lux" },
              { href: "/servicios-empresariales", label: "Servicios" },
              { href: "/nosotros", label: "Nosotros" },
            ],
          },
        ]}
      />

      <WhatsAppFloat message="Hola, quiero información de los cursos." />
    </div>
  );
}

function CategoryHeader({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <Reveal>
        <div className="text-xs tracking-[0.24em] uppercase text-brand-accent mb-3">
          {num}
        </div>
        <h2 className="h2 max-w-xl">{title}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-brand-muted max-w-md md:text-right">{desc}</p>
      </Reveal>
    </div>
  );
}

function CourseList({ items }: { items: string[] }) {
  return (
    <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <StaggerItem key={c}>
          <div className="group flex items-start gap-4 rounded-2xl bg-white border border-brand-navy/10 p-5 hover:border-brand-accent/50 hover:shadow-[0_10px_30px_rgba(11,37,69,0.06)] transition-all h-full">
            <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-accent/10 text-brand-accent text-xs">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="text-brand-navy leading-snug">{c}</div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function StatMini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl leading-none text-brand-navy">
        {value}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-brand-muted">
        {label}
      </div>
    </div>
  );
}
