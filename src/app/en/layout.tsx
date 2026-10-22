import Link from "next/link";
import type { Metadata } from "next";
import DocumentShell from "@/components/DocumentShell";
import EnglishNavigation from "@/components/english/EnglishNavigation";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://estabaenlisboa.com"),
  title: {
    default: "Lisbon travel guides | Estaba en Lisboa",
    template: "%s | Estaba en Lisboa",
  },
  description:
    "Practical Lisbon guides by José Tabares: transport, walking routes, timed tickets and decisions before your trip.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};
const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://estabaenlisboa.com/en#website",
  name: "Estaba en Lisboa",
  url: "https://estabaenlisboa.com/en",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    "@id": "https://estabaenlisboa.com/#organization",
    name: "Estaba en Lisboa",
    url: "https://estabaenlisboa.com",
  },
};
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocumentShell
      language="en"
      schema={
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
      }
    >
      <EnglishNavigation />
      {children}
      <footer className="border-t border-border-soft bg-white/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2">
          <div>
            <p className="font-display text-2xl font-semibold text-night">
              Estaba en Lisboa
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
              Lisbon guides by José Tabares, who lives in the city. Practical
              decisions first, with official sources for changing information.
            </p>
            <Link
              href="/sobre-nosotros"
              className="mt-3 inline-flex min-h-11 items-center text-sm underline"
            >
              About José and the publication (in Spanish)
            </Link>
          </div>
          <div id="affiliate-policy">
            <h2 className="font-body text-sm font-bold">About booking links</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Some links are affiliate links. If you book through them, this
              publication may receive a commission. The provider handles your
              reservation, prices, changes and cancellation terms.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 text-sm">
              <Link
                className="inline-flex min-h-11 items-center underline"
                href="/politica-privacidad"
              >
                Privacy (Spanish)
              </Link>
              <Link
                className="inline-flex min-h-11 items-center underline"
                href="/politica-cookies"
              >
                Cookies (Spanish)
              </Link>
              <Link
                className="inline-flex min-h-11 items-center underline"
                href="/aviso-legal"
              >
                Legal notice (Spanish)
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner language="en" />
      <GoogleAnalytics />
    </DocumentShell>
  );
}
