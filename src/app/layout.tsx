import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import ErrorBoundaryComponent from '@/components/ErrorBoundary';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Guías Gratuitas de Lisboa 2026 por Locales | Itinerarios Completos",
  description: "Guías completas y gratuitas de Lisboa con itinerarios detallados, horarios exactos, GPS y mapas interactivos. Creadas por locales. Actualizado Enero 2026.",
  keywords: ["lisboa", "guias lisboa", "itinerarios lisboa", "viajar lisboa", "lisboa 2026", "guia local lisboa", "que ver en lisboa", "lisboa itinerario"],
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
    title: 'Guías de Lisboa 2026 por Locales - Evita Trampas Turísticas',
    description: 'Itinerarios verificados con horarios exactos, GPS y restaurantes locales. Sin trampas turísticas.',
    images: [
      {
        url: 'https://estabaenlisboa.com/logo.png',
        width: 600,
        height: 188,
        alt: 'Estaba en Lisboa - Logo',
      },
      {
        url: 'https://estabaenlisboa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guías de Lisboa por Locales - Vista de Alfama con tranvía amarillo',
      },
    ],
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
          {/* Preconnect para recursos externos */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link rel="preconnect" href="https://unpkg.com" />
          <link rel="preconnect" href="https://js.stripe.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://unpkg.com" />
          <link rel="dns-prefetch" href="https://js.stripe.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          
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
          {/* Skip to main content link - Accesibilidad */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF6B35] focus:text-white focus:rounded focus:shadow-lg focus:outline-none"
          >
            Saltar al contenido principal
          </a>
          {/* Google tag (gtag.js) - Aplicado a todas las páginas */}
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
            {process.env.NODE_ENV === 'development' && (
              <Script id="clerk-cors-debug" strategy="afterInteractive">
                {`
                  (function() {
                    if (typeof window === 'undefined') return;
                    const run = function() {
                      let corsErrorDetected = false;
                      window.addEventListener('error', function(e) {
                        if (e.message && e.message.includes('CORS') && e.filename && e.filename.includes('clerk')) {
                          if (!corsErrorDetected) {
                            corsErrorDetected = true;
                            const logData = {
                              location: 'layout.tsx:body',
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
                              location: 'layout.tsx:body',
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
                    };

                    if ('requestIdleCallback' in window) {
                      window.requestIdleCallback(run);
                    } else {
                      setTimeout(run, 2000);
                    }
                  })();
                `}
              </Script>
            )}
          </ErrorBoundary>
        </body>
      </html>
    </ClerkProvider>
  );
}
