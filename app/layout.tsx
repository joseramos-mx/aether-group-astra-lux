import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* Geist es variable (100-900). En el diseño solo se usan Thin (100) y Regular (400). */
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Group Aether Astra Lux",
    template: "%s · Group Aether Astra Lux",
  },
  description:
    "Grupo Aether Astra Lux: secundaria y prepa Novaris Pax, servicios empresariales y centro de capacitación.",
  metadataBase: new URL("https://aetherastralux.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Group Aether Astra Lux",
  },
  icons: { icon: "/img/aether-group-logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${geist.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>

        {SITE_CONFIG.ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${SITE_CONFIG.ga4Id}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
