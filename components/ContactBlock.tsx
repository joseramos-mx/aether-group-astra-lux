import { SITE_CONFIG, waUrl } from "@/lib/config";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

type Props = {
  origin: string;
  title?: string;
  description?: string;
  infoTitle?: string;
  infoDescription?: string;
  interestLabel?: string;
  options: string[];
  showCompany?: boolean;
  submitLabel?: string;
  waMessage: string;
  addressLabel?: string;
  id?: string;
};

export function ContactBlock({
  origin,
  title = "Hablemos",
  description = "Cuéntanos qué necesitas.",
  infoTitle = "Contáctanos",
  infoDescription = "Atendemos en Durango, Dgo.",
  interestLabel,
  options,
  showCompany,
  submitLabel,
  waMessage,
  addressLabel = "Ubicación",
  id = "contacto",
}: Props) {
  return (
    <section id={id} className="section">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="h2 mb-3">{title}</h2>
          <p className="text-brand-muted">{description}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <h3 className="h3 text-brand-text mb-2">{infoTitle}</h3>
            <p className="text-brand-muted mb-6">{infoDescription}</p>

            <div className="space-y-4">
              {SITE_CONFIG.contacts.map((c) => (
                <div
                  key={c.phone}
                  className="card flex items-start gap-4"
                >
                  <div className="card-icon mb-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-brand-text">{c.name}</div>
                    <a
                      href={c.href}
                      className="text-brand-muted hover:text-brand-accent text-sm"
                    >
                      {c.phone}
                    </a>
                    <div className="mt-2">
                      <a
                        href={waUrl(waMessage, c.phoneRaw)}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 text-xs text-brand-accent hover:underline"
                      >
                        Escribir por WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card flex items-start gap-4">
                <div className="card-icon mb-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-brand-text">{addressLabel}</div>
                  <div className="text-brand-muted text-sm mt-1">
                    {SITE_CONFIG.address}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm
              origin={origin}
              interestLabel={interestLabel}
              options={options}
              showCompany={showCompany}
              submitLabel={submitLabel}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
