export const SITE_CONFIG = {
  brandName: "Group Aether Astra Lux",
  slogan: "Capacitamos, Cumplimos, Avanzamos",
  tagline: "Permisos actualizados. Personal preparado. Operaciones seguras.",
  mission: "Transformamos personas, equipos e instituciones",

  /* Líneas de WhatsApp por marca. Sustituyen a los números personales de
     Iván Alba Navarro y Martín Estala, que se retiraron del sitio. */
  contacts: [
    {
      name: "Group Aether Astra Lux",
      phone: "618 839 8436",
      phoneRaw: "5216188398436",
      href: "tel:+526188398436",
    },
    {
      name: "Secundaria y Prepa Novaris Pax",
      phone: "618 839 8803",
      phoneRaw: "5216188398803",
      href: "tel:+526188398803",
    },
  ],

  // Fallback principal (grupo) para el botón flotante de WhatsApp
  phone: "618 839 8436",
  phoneHref: "tel:+526188398436",
  whatsapp: "5216188398436",
  whatsappPrepa: "5216188398803",

  email: "contacto@aetherastralux.com",
  address: "C. Urrea 120, Barrio de Tierra Blanca, Durango, Dgo.",

  formEndpoint: "",
  ga4Id: "",
} as const;

export function waUrl(message: string, phone?: string) {
  const num = phone ?? SITE_CONFIG.whatsapp;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export type BrandKey = "group" | "prepa" | "empresa" | "capacitacion";

export const NAV_LINKS: { href: string; label: string; brand: BrandKey }[] = [
  { href: "/", label: "Inicio", brand: "group" },
  { href: "/prepa", label: "Secundaria y Prepa Novaris Pax", brand: "prepa" },
  { href: "/servicios-empresariales", label: "Servicios", brand: "empresa" },
  { href: "/capacitacion", label: "Capacitación", brand: "capacitacion" },
];
