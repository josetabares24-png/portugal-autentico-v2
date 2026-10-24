import type { Metadata } from "next";

export const spanishSiteMetadata: Metadata = {
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
