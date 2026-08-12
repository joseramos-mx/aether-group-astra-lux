# Group Aether Astra Lux — Sitio web (Next.js)

Sitio corporativo del **Group Aether Astra Lux** con sus tres unidades de negocio:

- **Prepa Novaris Pax** — `app/prepa`
- **Servicios Empresariales** — `app/servicios-empresariales`
- **Centro de Capacitación** — `app/capacitacion`

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v3** con variables CSS por marca (intercambio de paleta vía `data-brand`)
- **Lenis** — smooth scrolling nativo con inercia
- **Framer Motion** — animaciones (reveal on scroll, stagger, hero, WhatsApp float)
- **next/font** — Inter + Playfair Display auto-optimizadas

## Estructura

```
.
├── app/
│   ├── layout.tsx                          # Root: fuentes + SmoothScroll + GA4
│   ├── page.tsx                            # Landing del grupo (data-brand="group")
│   ├── prepa/page.tsx                      # Prepa Novaris Pax  (data-brand="prepa")
│   ├── servicios-empresariales/page.tsx    # Servicios          (data-brand="empresa")
│   ├── capacitacion/page.tsx               # Capacitación       (data-brand="capacitacion")
│   └── globals.css                         # Tailwind + variables por marca
├── components/
│   ├── SmoothScroll.tsx        # Wrapper Lenis
│   ├── Reveal.tsx              # Reveal, Stagger, StaggerItem (Framer Motion)
│   ├── Header.tsx              # Nav sticky con menú móvil
│   ├── Footer.tsx
│   ├── Hero.tsx                # Hero animado por página
│   ├── FeaturesBar.tsx         # Los 6 puntos del brief
│   ├── UnitCard.tsx            # Cards de marcas del grupo
│   ├── IconCard.tsx            # Card genérica + StepCard
│   ├── SectionTitle.tsx
│   ├── CtaBand.tsx             # Banda CTA con gradiente radial
│   ├── ContactForm.tsx         # Form con fallback WhatsApp
│   ├── ContactBlock.tsx        # Sección de contacto reusable
│   └── WhatsAppFloat.tsx       # Botón flotante fijo
├── lib/config.ts               # SITE_CONFIG global
├── public/img/                 # Logos del grupo y marcas
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Configuración

Edita `lib/config.ts`:

```ts
export const SITE_CONFIG = {
  brandName: "Group Aether Astra Lux",
  phone: "+52 000 000 0000",
  phoneHref: "tel:+520000000000",
  whatsapp: "521000000000",        // E.164 sin "+"
  email: "contacto@aetherastralux.com",
  address: "Ciudad de México, México",
  formEndpoint: "",                 // Formspree/Web3Forms/Getform (opcional)
  ga4Id: "",                        // "G-XXXXXXXXXX" para Google Analytics 4
};
```

Sin `formEndpoint`, los formularios abren WhatsApp con el mensaje pre-llenado como fallback.
Con `ga4Id`, se carga GA4 automáticamente desde `app/layout.tsx`.

## Los 6 puntos del brief

Cada página incluye `<FeaturesBar />` con los puntos originales:

1. Diseño 100% para ti
2. Botón directo a WhatsApp (flotante fijo + CTAs)
3. Formulario de contacto (con fallback WhatsApp)
4. Perfecta en celulares (responsive + menú móvil)
5. Contenido claro que vende (copy enfocado a conversión)
6. Medición de visitas (GA4 listo, sólo agrega el ID)

## Sistema de marcas

Cada página envuelve el layout con `data-brand="…"`:

| Marca | data-brand | Paleta |
|---|---|---|
| Group Aether Astra Lux | `group` | Negro + dorado |
| Prepa Novaris Pax | `prepa` | Azul marino + naranja |
| Servicios Empresariales | `empresa` | Oscuro + dorado |
| Centro de Capacitación | `capacitacion` | Azul profundo + ámbar |

Las paletas se declaran como variables CSS en `app/globals.css`. Tailwind las expone
como clases `bg-brand-*`, `text-brand-*`, etc. Para ajustar colores, edita el bloque
`[data-brand="…"] { --brand-… }`.

## Comandos

```powershell
# Instalar dependencias
npm install

# Desarrollo (http://localhost:3000)
npm run dev

# Build de producción
npm run build

# Servir el build
npm run start
```

## Deploy

- **Vercel:** conecta el repo, deploy sin configuración.
- **Netlify:** funciona con el runtime de Next; build command `next build`.
- **Cloudflare Pages:** usar `@cloudflare/next-on-pages`.

## Endpoints de formulario sugeridos

- [Formspree](https://formspree.io/) — 50 envíos/mes gratis
- [Web3Forms](https://web3forms.com/) — gratis con marca
- [Getform](https://getform.io/) — plan gratuito básico

Copia el endpoint que te den y pégalo en `SITE_CONFIG.formEndpoint`.
