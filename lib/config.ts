export const SITE_CONFIG = {
  brandName: "Group Aether Astra Lux",
  slogan: "Capacitamos, Cumplimos, Avanzamos",
  tagline: "Permisos actualizados. Personal preparado. Operaciones seguras.",
  mission: "Transformamos personas, equipos e instituciones",

  // Contactos principales
  contacts: [
    {
      name: "Iván Alba Navarro",
      phone: "+52 618 157 7437",
      phoneRaw: "5216181577437",
      href: "tel:+526181577437",
    },
    {
      name: "Martín Estala",
      phone: "+52 442 799 6686",
      phoneRaw: "5214427996686",
      href: "tel:+524427996686",
    },
  ],

  // Fallback principal (Iván) para botón WhatsApp flotante
  phone: "+52 618 157 7437",
  phoneHref: "tel:+526181577437",
  whatsapp: "5216181577437",

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
