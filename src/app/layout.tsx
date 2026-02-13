import type { Metadata } from "next";
import Script from 'next/script';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ErrorBoundary from '@/components/ErrorBoundary';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '600', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://estabaenlisboa.com'),
  title: {
    default: "Guías de Lisboa 2026 por Locales | Itinerarios y Rutas Verificadas",
    template: "%s | Estaba en Lisboa",
  },
  description: "Guías completas de Lisboa con itinerarios detallados, horarios exactos, GPS y mapas. Creadas por locales. Qué ver en Lisboa, Alfama, Belém, miradores y restaurantes auténticos. Actualizado 2026.",
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://estabaenlisboa.com',
    siteName: 'Estaba en Lisboa',
    title: 'Guías de Lisboa 2026 por Locales - Itinerarios Verificados',
    description: 'Itinerarios con horarios exactos, GPS y restaurantes locales. Qué ver en Lisboa, Alfama, Belém. Sin trampas turísticas.',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/hero-lisboa.jpg',
        width: 1200,
        height: 630,
        alt: 'Guías de Lisboa por Locales - Vista de Alfama',
      },
    ],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com',
    languages: {
      'es': 'https://estabaenlisboa.com',
      'en': 'https://estabaenlisboa.com/en',
      'ko': 'https://estabaenlisboa.com/ko',
    },
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link rel="preconnect" href="https://js.stripe.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://api.brevo.com" />
          <link rel="preconnect" href="https://api.stripe.com" />
          <link rel="preconnect" href="https://clerk.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://js.stripe.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://api.brevo.com" />
          <link rel="dns-prefetch" href="https://api.stripe.com" />
          <link rel="dns-prefetch" href="https://clerk.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
          />
          <SchemaMarkup />
        </head>
        <body className={`${plusJakarta.variable} ${playfair.variable} antialiased`}>
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

          <ErrorBoundary>
            <Navbar />
            {children}
            <Footer />
            <CookieBanner />
            <GoogleAnalytics />
          </ErrorBoundary>
        </body>
      </html>
    </ClerkProvider>
  );
}
