import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import ExitIntentModal from '@/components/ExitIntentModal';
import SchemaMarkup from '@/components/SchemaMarkup';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guías de Lisboa 2025 por Locales | Evita Trampas Turísticas",
  description: "Itinerarios verificados de Lisboa con horarios exactos y GPS. 500+ viajeros satisfechos. Desde €3.99. Garantía 48h sin preguntas. Actualizado Enero 2025.",
  keywords: ["lisboa", "guias lisboa", "itinerarios lisboa", "viajar lisboa", "lisboa 2025", "guia local lisboa", "que ver en lisboa", "lisboa itinerario"],
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://estabaenlisboa.com',
    siteName: 'Estaba en Lisboa',
    title: 'Guías de Lisboa 2025 por Locales - Evita Trampas Turísticas',
    description: 'Itinerarios verificados con horarios exactos, GPS y restaurantes locales. Sin trampas turísticas. 500+ viajeros satisfechos.',
    images: [
      {
        url: 'https://estabaenlisboa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guías de Lisboa por Locales - Vista de Alfama con tranvía amarillo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guías de Lisboa 2025 por Locales',
    description: 'Itinerarios verificados. 500+ viajeros. Desde €3.99. Sin trampas turísticas.',
    images: ['https://estabaenlisboa.com/og-image.jpg'],
    creator: '@estabaenlisboa',
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
    <ClerkProvider>
      <html lang="es">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossOrigin=""
          />
          <SchemaMarkup />
        </head>
        <body className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}>
          <Header />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
          <StickyCTA />
          <ExitIntentModal />
        </body>
      </html>
    </ClerkProvider>
  );
}
