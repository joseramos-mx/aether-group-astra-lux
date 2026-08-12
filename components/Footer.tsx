import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, waUrl } from "@/lib/config";

type LinkGroup = { title: string; links: { href: string; label: string }[] };

type Props = {
  logo: string;
  tagline: string;
  legalLine?: string;
  groupSlogan?: string;
  linkGroups: LinkGroup[];
};

export function Footer({
  logo,
  tagline,
  legalLine,
  groupSlogan = "Capacitamos, Cumplimos, Avanzamos",
  linkGroups,
}: Props) {
  return (
    <footer className="section-navy border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container-page py-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_repeat(3,1fr)] sm:grid-cols-2">
          <div>
            <Image
              src={logo}
              alt=""
              width={140}
              height={56}
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm max-w-sm text-white/70">{tagline}</p>
          </div>

          {linkGroups.map((g) => (
            <div key={g.title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-brand-accent mb-3">
                {g.title}
              </h4>
              <ul className="space-y-1.5 text-sm">
                {g.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener" : undefined}
                      className="text-white/70 hover:text-brand-accent transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-brand-accent mb-3">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {SITE_CONFIG.contacts.map((c) => (
                <li key={c.phone}>
                  <div className="text-white">{c.name}</div>
                  <a href={c.href} className="hover:text-brand-accent">
                    {c.phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={waUrl("Hola, vengo del sitio.")}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-brand-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 text-xs text-white/50 leading-relaxed">
                {SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t flex flex-wrap items-center justify-between gap-2 text-xs text-white/50"
             style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <span>
            &copy; {new Date().getFullYear()} {legalLine ?? SITE_CONFIG.brandName}. Todos los derechos reservados.
          </span>
          <span>{groupSlogan}</span>
        </div>
      </div>
    </footer>
  );
}
