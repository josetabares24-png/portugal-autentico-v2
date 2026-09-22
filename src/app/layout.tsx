import type { Metadata } from "next";
import Script from 'next/script';
import localFont from 'next/font/local';
import SchemaMarkup from '@/components/SchemaMarkup';
import "./globals.css";

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
    default: "Estaba en Lisboa | Guías de Lisboa en español",
    template: "%s | Estaba en Lisboa",
  },
  description: "Guías sobre Lisboa: transporte, barrios, comida, qué ver, dónde alojarse y excursiones. Información práctica para organizar el viaje.",
  keywords: [
    "lisboa",
    "guia lisboa",
    "que ver lisboa",
    "como moverse por lisboa",
    "barrios lisboa",
    "transporte lisboa",
    "donde comer lisboa",
    "viajar a lisboa",
    "sintra desde lisboa",
    "lisboa 2026"
  ],
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
    title: 'Estaba en Lisboa | Guías de Lisboa',
    description: 'Información en español sobre qué ver, transporte, barrios, comida, alojamiento y excursiones en Lisboa.',
    images: [
      {
        url: 'https://estabaenlisboa.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Estaba en Lisboa — guías prácticas sobre Lisboa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estaba en Lisboa | Guías de Lisboa',
    description: 'Información práctica en español para organizar un viaje a Lisboa.',
    images: ['https://estabaenlisboa.com/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es">
        <head>
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://api.brevo.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://api.brevo.com" />

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
  );
}
