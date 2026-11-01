/* eslint-disable @next/next/no-head-element -- Shared App Router root document; only JSON-LD is placed here, all metadata uses the Metadata API. */
import localFont from "next/font/local";
import { Abril_Fatface, Heebo, Caveat } from "next/font/google";
import SchemaMarkup from "@/components/SchemaMarkup";
import "@/app/globals.css";
import "@/app/grok-redesign.css";

const montserrat = localFont({
  src: [
    {
      path: "../fonts/montserrat-latin.woff2",
      weight: "300 500",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: "Arial",
});

const playfair = localFont({
  src: [
    {
      path: "../fonts/playfair-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../fonts/playfair-italic-latin.woff2",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const plusJakarta = localFont({
  src: [
    {
      path: "../fonts/plus-jakarta-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-article",
  display: "swap",
  adjustFontFallback: "Arial",
});

// Variables de marca: cargadas una sola vez en el shell compartido.
const grokDisplay = Abril_Fatface({ subsets: ["latin"], weight: "400", variable: "--grok-display", display: "swap" });
const grokBody = Heebo({ subsets: ["latin"], variable: "--grok-body", display: "swap" });
const grokScript = Caveat({ subsets: ["latin"], variable: "--grok-script", display: "swap" });

export default function DocumentShell({
  children,
  language = "es",
  schema,
}: {
  children: React.ReactNode;
  language?: "es" | "en";
  schema?: React.ReactNode;
}) {
  return (
    <html lang={language}>
      <head>{language === "es" ? <SchemaMarkup /> : schema}</head>
      <body
        className={`${montserrat.variable} ${playfair.variable} ${plusJakarta.variable} ${grokDisplay.variable} ${grokBody.variable} ${grokScript.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:shadow-lg focus:outline-none"
        >
          {language === "es"
            ? "Saltar al contenido principal"
            : "Skip to main content"}
        </a>
        {children}
      </body>
    </html>
  );
}
