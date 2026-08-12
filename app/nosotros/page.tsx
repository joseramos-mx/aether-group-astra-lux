import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { ContactBlock } from "@/components/ContactBlock";
import { Marquee } from "@/components/Marquee";
import { waUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Iván Alba Navarro y Martín Estala. El equipo detrás de Group Aether Astra Lux.",
};

const navLinks = [
  { href: "/", label: "← Grupo" },
  { href: "/servicios-empresariales", label: "Servicios" },
  { href: "/capacitacion", label: "Capacitación" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function NosotrosPage() {
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
        <section className="relative overflow-hidden pt-20 md:pt-28 pb-14 bg-radial-accent">
          <div className="container-page relative z-10 max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-navy/10 px-3 py-1.5 text-[11px] tracking-[0.24em] uppercase text-brand-navy shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-accent" />
                Nosotros
              </div>
              <h1 className="h1 mt-6">
                Formación humana con{" "}
                <span className="text-brand-accent">alcance internacional</span>.
              </h1>
              <p className="lead mt-5">
                El equipo detrás de Group Aether Astra Lux: educadores y
                consultores con trayectoria en instituciones educativas,
                empresas y programas de formación.
              </p>
            </Reveal>
          </div>
        </section>

        {/* IVÁN ALBA */}
        <section className="section">
          <div className="container-page grid gap-10 lg:grid-cols-[.4fr_.6fr] items-start">
            <Reveal>
              <div className="rounded-3xl bg-brand-navy text-white p-8 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-accent/25 blur-3xl"
                />
                <div className="relative">
                  <div className="text-[11px] tracking-[0.24em] uppercase text-brand-accent mb-4">
                    01 · Cofundador
                  </div>
                  <h2 className="text-3xl md:text-4xl leading-tight mb-3">
                    Iván Alba Navarro
                  </h2>
                  <p className="text-white/70 text-sm mb-6">
                    Licenciado en Filosofía. Líder educativo con experiencia en
                    la Nueva Escuela Mexicana y modelo Montessori.
                  </p>
                  <a
                    href={waUrl(
                      "Hola Iván, vengo del sitio del grupo.",
                      SITE_CONFIG.contacts[0].phoneRaw
                    )}
                    target="_blank"
                    rel="noopener"
                    className="btn-accent"
                  >
                    Contactar a Iván
                  </a>
                  <div className="mt-4 text-xs text-white/50">
                    {SITE_CONFIG.contacts[0].phone}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <ProfileBlock
                  title="Formación académica"
                  items={["Licenciatura en Filosofía."]}
                />
                <ProfileBlock
                  title="Liderazgo educativo"
                  items={[
                    "Coordinador académico del área de secundaria, con amplio conocimiento de la Nueva Escuela Mexicana, sus fases y procesos.",
                    "Subdirector del área de Bachillerato en Comunidad Montessori Durango.",
                    "Director de Colegio Montessori, campus Fenix.",
                  ]}
                />
                <ProfileBlock
                  title="Docencia y capacitación"
                  items={[
                    "Maestro en el Instituto de Capacitación y Educación Profesional (ICEP).",
                    "Maestro en la Universidad Tecmilenio.",
                    "Impartición de cursos de proyectos de vida, habilidades y estrategias empresariales y docentes.",
                  ]}
                />
                <ProfileBlock
                  title="Conocimiento curricular"
                  items={[
                    "Dominio de programas sintético, analítico y codiseño, con claridad en su diseño e implementación.",
                  ]}
                />
                <ProfileBlock
                  title="Asesoría y desarrollo institucional"
                  items={[
                    "Asesor para aperturas de nuevas empresas y escuelas de nivel básico, media superior y superior.",
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <Marquee
          variant="accent"
          items={["Capacitamos", "Cumplimos", "Avanzamos"]}
        />

        {/* MARTÍN ESTALA */}
        <section className="section section-alt">
          <div className="container-page grid gap-10 lg:grid-cols-[.6fr_.4fr] items-start">
            <Reveal>
              <div className="space-y-6">
                <ProfileBlock
                  title="Trayectoria"
                  items={["+12 años de experiencia en formación humana."]}
                />
                <ProfileBlock
                  title="Presencia en 14 países"
                  items={[
                    "México, Estados Unidos, Guatemala, Honduras, El Salvador, Venezuela, Perú, Cuba, Puerto Rico, República Dominicana, España, Italia, República Democrática del Congo y Tanzania.",
                  ]}
                />
                <ProfileBlock
                  title="Alcance internacional"
                  items={[
                    "Programas de formación y acompañamiento con impacto en instituciones y comunidades.",
                  ]}
                />
                <ProfileBlock
                  title="Reconocimientos"
                  items={[
                    "En 2024 fue reconocido como personaje notable en el libro Sombrerete Personajes Notables, por su destacada trayectoria en diversas disciplinas del arte.",
                    "Celebra +20 premios en distintas áreas.",
                  ]}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-brand-navy text-white p-8 relative overflow-hidden lg:order-last">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-accent/25 blur-3xl"
                />
                <div className="relative">
                  <div className="text-[11px] tracking-[0.24em] uppercase text-brand-accent mb-4">
                    02 · Cofundador
                  </div>
                  <h2 className="text-3xl md:text-4xl leading-tight mb-3">
                    Martín Estala
                  </h2>
                  <p className="text-white/70 text-sm mb-6">
                    Formador con más de una década de experiencia y alcance
                    internacional en programas de formación humana.
                  </p>
                  <a
                    href={waUrl(
                      "Hola Martín, vengo del sitio del grupo.",
                      SITE_CONFIG.contacts[1].phoneRaw
                    )}
                    target="_blank"
                    rel="noopener"
                    className="btn-accent"
                  >
                    Contactar a Martín
                  </a>
                  <div className="mt-4 text-xs text-white/50">
                    {SITE_CONFIG.contacts[1].phone}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PAÍSES */}
        <section className="section">
          <div className="container-page">
            <Reveal className="max-w-xl mb-8">
              <div className="text-xs tracking-[0.24em] uppercase text-brand-accent mb-3">
                Alcance
              </div>
              <h2 className="h2">Presentes en 14 países.</h2>
            </Reveal>
            <Stagger className="flex flex-wrap gap-2">
              {[
                "México",
                "Estados Unidos",
                "Guatemala",
                "Honduras",
                "El Salvador",
                "Venezuela",
                "Perú",
                "Cuba",
                "Puerto Rico",
                "República Dominicana",
                "España",
                "Italia",
                "R. D. del Congo",
                "Tanzania",
              ].map((p) => (
                <StaggerItem key={p}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-navy/10 px-4 py-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {p}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <ContactBlock
          origin="Nosotros"
          title="Escríbenos"
          description="Cuéntanos cómo podemos apoyarte."
          waMessage="Hola, vengo del sitio."
          options={[
            "Permisos y dictámenes",
            "Capacitación",
            "Colaboración",
            "Otro",
          ]}
          interestLabel="¿Sobre qué quieres hablar?"
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
              { href: "/prepa", label: "Prepa Novaris Pax" },
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

      <WhatsAppFloat message="Hola, vengo del sitio del grupo." />
    </div>
  );
}

function ProfileBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="card">
      <div className="text-xs tracking-[0.24em] uppercase text-brand-accent mb-3">
        {title}
      </div>
      <ul className="space-y-2 text-brand-navy text-sm md:text-base">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
