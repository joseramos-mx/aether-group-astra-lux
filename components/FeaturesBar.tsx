"use client";

import { Stagger, StaggerItem } from "./Reveal";

type Feature = { title: string; sub: string; icon: React.ReactNode };

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FeaturesBar({
  items,
}: {
  items?: Feature[];
}) {
  const defaults: Feature[] = [
    {
      title: "Diseño 100% para ti",
      sub: "A la medida de tu marca",
      icon: (
        <svg {...iconProps}>
          <path d="M4 4h16v4H4zM4 12h10v8H4zM16 12h4v8h-4z" />
        </svg>
      ),
    },
    {
      title: "Botón directo a WhatsApp",
      sub: "Clientes a un clic",
      icon: (
        <svg {...iconProps}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: "Formulario de contacto",
      sub: "Captura leads 24/7",
      icon: (
        <svg {...iconProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 10h10M7 14h6" />
        </svg>
      ),
    },
    {
      title: "Perfecta en celulares",
      sub: "Diseño 100% responsive",
      icon: (
        <svg {...iconProps}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      ),
    },
    {
      title: "Contenido claro que vende",
      sub: "Copy enfocado a conversión",
      icon: (
        <svg {...iconProps}>
          <path d="M4 12h4l3-8 4 16 3-8h2" />
        </svg>
      ),
    },
    {
      title: "Medición de visitas",
      sub: "Analítica lista para decidir",
      icon: (
        <svg {...iconProps}>
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 4 4 5-6" />
        </svg>
      ),
    },
  ];

  const data = items ?? defaults;

  return (
    <Stagger className="mt-10 grid gap-4 rounded-2xl bg-brand-surface border border-brand-border/5 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((f) => (
        <StaggerItem key={f.title} className="flex items-start gap-3">
          <span className="mt-1 text-brand-accent shrink-0">{f.icon}</span>
          <div>
            <span className="block text-sm text-brand-text">{f.title}</span>
            <span className="text-xs text-brand-muted">{f.sub}</span>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
