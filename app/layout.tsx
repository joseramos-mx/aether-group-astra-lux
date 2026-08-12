import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Group Aether Astra Lux",
    template: "%s · Group Aether Astra Lux",
  },
  description:
    "Grupo Aether Astra Lux: preparatoria Novaris Pax, servicios empresariales y centro de capacitación.",
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
    <html lang="es" className={inter.variable}>
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
