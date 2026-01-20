import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guías Gratuitas de Lisboa 2025 por Locales | Itinerarios Completos",
  description: "Guías completas y gratuitas de Lisboa con itinerarios detallados, horarios exactos, GPS y mapas interactivos. Creadas por locales. Actualizado Enero 2025.",
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
          {/* #region agent log - Detect CORS errors */}
          {typeof window !== 'undefined' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    const originalFetch = window.fetch;
                    const originalError = window.console.error;
                    let corsErrorDetected = false;
                    
                    window.addEventListener('error', function(e) {
                      if (e.message && e.message.includes('CORS') && e.filename && e.filename.includes('clerk')) {
                        if (!corsErrorDetected) {
                          corsErrorDetected = true;
                          const logData = {
                            location: 'layout.tsx:77',
                            message: 'CORS error detected with Clerk',
                            data: {
                              errorMessage: e.message,
                              filename: e.filename,
                              lineno: e.lineno,
                              colno: e.colno,
                              timestamp: Date.now()
                            },
                            timestamp: Date.now(),
                            sessionId: 'debug-session',
                            runId: 'initial',
                            hypothesisId: 'A'
                          };
                          fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(logData)
                          }).catch(function() {});
                        }
                      }
                    }, true);
                    
                    window.addEventListener('unhandledrejection', function(e) {
                      if (e.reason && e.reason.toString && e.reason.toString().includes('CORS')) {
                        if (!corsErrorDetected) {
                          corsErrorDetected = true;
                          const logData = {
                            location: 'layout.tsx:105',
                            message: 'CORS error detected in promise rejection',
                            data: {
                              reason: e.reason.toString(),
                              timestamp: Date.now()
                            },
                            timestamp: Date.now(),
                            sessionId: 'debug-session',
                            runId: 'initial',
                            hypothesisId: 'A'
                          };
                          fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(logData)
                          }).catch(function() {});
                        }
                      }
                    });
                  })();
                `
              }}
            />
          )}
          {/* #endregion */}
          {/* Preconnect para recursos externos */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link rel="preconnect" href="https://unpkg.com" />
          <link rel="preconnect" href="https://js.stripe.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://unpkg.com" />
          <link rel="dns-prefetch" href="https://js.stripe.com" />
          
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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ErrorBoundary>
            <Navbar />
            {children}
            <Footer />
            <CookieBanner />
          </ErrorBoundary>
        </body>
      </html>
    </ClerkProvider>
  );
}
