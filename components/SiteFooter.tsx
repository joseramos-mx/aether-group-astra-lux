import Link from "next/link";
import { SITE_CONFIG, waUrl } from "@/lib/config";

/* --------------------------------------------------------------------------
   Footer de la landing.

   La cuarta columna del ejemplo de Osmo es un newsletter; aquí va la ubicación
   y el horario, porque el proyecto no tiene endpoint de suscripción y un
   formulario que no envía a ningún lado sería peor que no tenerlo.
   El wordmark gigante del fondo se recorta con overflow, como en el ejemplo.
   -------------------------------------------------------------------------- */

const SITEMAP = [
  { href: "/", label: "Inicio" },
  { href: "/servicios-empresariales", label: "Servicios" },
  { href: "/capacitacion", label: "Capacitación" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const MARCAS = [
  { href: "/servicios-empresariales", label: "Servicios empresariales" },
  { href: "/capacitacion", label: "Centro de capacitación" },
  { href: "/prepa", label: "Secundaria y Prepa Novaris Pax" },
];

export function SiteFooter() {
  return (
    <footer
      data-nav-theme="dark"
      className="relative overflow-hidden bg-[#0A0A0A] pt-16"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 xl:px-[72px]">
        <div className="grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterCol title="Mapa del sitio">
            <ul className="space-y-2">
              {SITEMAP.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="font-display text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol title="Marcas">
            <ul className="space-y-2">
              {MARCAS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-display text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol title="Contacto">
            <ul className="space-y-3">
              {SITE_CONFIG.contacts.map((c) => (
                <li key={c.phone}>
                  <div className="font-display text-[13px] text-white">
                    {c.name}
                  </div>
                  <a
                    href={c.href}
                    className="font-display text-[13px] text-white/60 transition-colors hover:text-white"
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-display text-[13px] text-white/60 transition-colors hover:text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={waUrl("Hola, vengo del sitio.")}
                  target="_blank"
                  rel="noopener"
                  className="font-display text-[13px] text-gold-300 transition-colors hover:text-gold-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </FooterCol>

          <FooterCol title="Ubicación">
            <p className="font-display text-[13px] leading-[1.7] text-white/70">
              {SITE_CONFIG.address}
            </p>
            <p className="mt-3 font-display text-[13px] leading-[1.7] text-white/45">
              Lunes a viernes
              <br />
              9:00 a 18:00 h
            </p>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6">
          <span className="font-display text-[12px] text-white/40">
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. Todos los
            derechos reservados.
          </span>
          <span className="font-display text-[12px] text-white/40">
            {SITE_CONFIG.slogan}
          </span>
        </div>
      </div>

      {/* Wordmark de fondo, recortado por abajo */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 xl:px-[72px]">
          <span className="block -mb-[0.22em] font-display text-[clamp(5rem,19vw,17rem)] font-normal leading-[0.8] tracking-[-0.03em] text-white/[0.055]">
            Aether ✦
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 font-display text-[11px] uppercase tracking-[0.18em] text-white/35">
        {title}
      </h3>
      {children}
    </div>
  );
}
