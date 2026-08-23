import type { Metadata } from "next";
import Script from 'next/script';
import localFont from 'next/font/local';
import { getLocale } from 'next-intl/server';
import SchemaMarkup from '@/components/SchemaMarkup';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

/*
 * Las tres familias van servidas desde el repositorio, no descargadas de
 * Google en cada compilación. `next/font/google` las descarga durante el
 * build, así que un fallo de red en el servidor de compilación tumba el
 * despliegue entero: ya ocurrió una vez con Plus Jakarta Sans.
 *
 * Son los mismos ficheros que servía Google, en su versión variable y en el
 * subconjunto latino, que es el único que estaba activo. Un fichero por
 * familia y estilo cubre todo el rango de grosores.
 */
const montserrat = localFont({
  src: [{ path: '../fonts/montserrat-latin.woff2', weight: '300 500', style: 'normal' }],
  variable: '--font-body',
  display: 'swap',
  adjustFontFallback: 'Arial',
});

const playfair = localFont({
  src: [
    { path: '../fonts/playfair-latin.woff2', weight: '400 700', style: 'normal' },
    { path: '../fonts/playfair-italic-latin.woff2', weight: '400 700', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});

const plusJakarta = localFont({
  src: [{ path: '../fonts/plus-jakarta-latin.woff2', weight: '400 700', style: 'normal' }],
  variable: '--font-article',
  display: 'swap',
  adjustFontFallback: 'Arial',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://estabaenlisboa.com'),
  title: {
    default: "Guías de Lisboa 2026 | Itinerarios, Rutas y Consejos",
    template: "%s | Estaba en Lisboa",
  },
  description: "Guías completas de Lisboa con itinerarios por jornadas, mapas y consejos prácticos. Qué ver en Lisboa, Alfama, Belém, miradores y dónde comer. Actualizado 2026.",
  keywords: ["lisboa", "guia lisboa", "itinerario lisboa", "que ver lisboa", "viajar lisboa", "lisboa 2026", "alfama", "belem", "miradores lisboa", "restaurantes lisboa", "tranvia 28", "lisboa en 1 dia"],
  authors: [{ name: "Estaba en Lisboa", url: "https://estabaenlisboa.com" }],
  creator: "Estaba en Lisboa",
  publisher: "Estaba en Lisboa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    // El .ico lleva 16/32/48/64 px: Google exige al menos 48 px para
    // mostrar el logotipo del sitio en resultados de búsqueda.
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://estabaenlisboa.com',
    siteName: 'Estaba en Lisboa',
    title: 'Guías de Lisboa 2026 - Itinerarios y Rutas',
    description: 'Itinerarios por jornadas, mapas y recomendaciones. Qué ver en Lisboa, Alfama, Belém y alrededores.',
    images: [
      {
        url: 'https://estabaenlisboa.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Estaba en Lisboa — guías de Lisboa escritas por un local',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guías de Lisboa 2026 - Itinerarios y Rutas',
    description: 'Itinerarios por jornadas, mapas y recomendaciones. Qué ver en Lisboa, Alfama, Belém y alrededores.',
    images: ['https://estabaenlisboa.com/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <ClerkProvider>
      <html lang={locale}>
        <head>
          {/* Sin preconnect a fonts.googleapis/gstatic: las tipografías se
              sirven desde el propio dominio. */}
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://api.brevo.com" />
          <link rel="preconnect" href="https://clerk.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://api.brevo.com" />
          <link rel="dns-prefetch" href="https://clerk.com" />

          <SchemaMarkup />
        </head>
        <body className={`${montserrat.variable} ${playfair.variable} ${plusJakarta.variable} antialiased`}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:shadow-lg focus:outline-none"
          >
            Saltar al contenido principal
          </a>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-8F54LQ5862"
            strategy="afterInteractive"
            async
          />
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8F54LQ5862', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
