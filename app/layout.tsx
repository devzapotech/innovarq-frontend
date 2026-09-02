import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "./layoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://studioinnovarq.com";

// Con hosting propio (sin entornos de preview separados por Vercel) el
// noindex se activa a mano seteando NEXT_PUBLIC_SITE_ENV=preview en el
// entorno que corresponda; por defecto el sitio se indexa.
const isIndexable = process.env.NEXT_PUBLIC_SITE_ENV !== "preview";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Innovarq Studio",
    default: "Innovarq Studio | Arquitectura y Reformas Integrales en Buenos Aires",
  },
  description: "Desde 2018, Innovarq Studio transforma espacios en experiencias reales: reformas integrales, diseño arquitectónico e interiorismo en Buenos Aires.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Innovarq Studio",
    title: "Innovarq Studio | Arquitectura y Reformas Integrales en Buenos Aires",
    description: "Desde 2018, Innovarq Studio transforma espacios en experiencias reales: reformas integrales, diseño arquitectónico e interiorismo en Buenos Aires.",
    images: ["/hero_img.webp"],
  },
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "pNa2vVpYKiPQbO3LM0VRHMBYHBlHu1Q1sMSu6iLVV0A",
  },
  other: {
    "facebook-domain-verification": "9damlddtk64cbkb4qvvmniezfx5d77",
  },
};

// LocalBusiness JSON-LD. Los campos marcados con TODO no están disponibles
// en el código (no hay calle/número ni página de Facebook) — completar si
// corresponde.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Innovarq Studio",
  url: SITE_URL,
  logo: `${SITE_URL}/logo_transparente_negro.webp`,
  image: `${SITE_URL}/hero_img.webp`,
  telephone: "+5491155981705",
  email: "consultas.innovarquitectos@gmail.com",
  address: {
    "@type": "PostalAddress",
    // TODO: agregar streetAddress cuando esté disponible.
    addressLocality: "Capital Federal",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: [
    "https://www.instagram.com/studio_innovarq",
    "https://www.linkedin.com/in/innovarq-studio/",
    // TODO: agregar URL de Facebook si el negocio tiene una página propia.
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '782224138220831');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=782224138220831&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
