import Link from "next/link";
import Image from "next/image";
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
const footerLinkClass =
  "inline-flex min-h-10 items-center font-body text-sm leading-6 text-night/85 underline underline-offset-4 decoration-night/30 transition-colors hover:text-terracotta focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta";

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
      <footer className="border-t border-night/15 bg-[#eee8df] text-night">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-11 md:grid md:grid-cols-2 md:gap-x-20 md:px-8 md:pb-10 md:pt-14">
          <div>
            <Link
              href="/en"
              className="inline-block max-w-full rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
            >
              <Image
                src="/logo.png"
                alt="Estaba en Lisboa — home"
                width={1200}
                height={500}
                className="h-auto w-[228px] max-w-full sm:w-[250px]"
              />
            </Link>
            <p className="mt-3 max-w-md font-body text-[13px] leading-6 text-night/75">
              Lisbon guides by José Tabares, who lives in the city. Practical
              decisions first, with official sources for changing information.
            </p>
            <Link href="/sobre-nosotros" className={footerLinkClass}>
              About José and the publication (in Spanish)
            </Link>
          </div>
          <div id="affiliate-policy" className="mt-9 border-t border-night/15 pt-7 md:mt-0 md:border-t-0 md:pt-0">
            <h2 className="font-body text-[11px] font-bold not-italic uppercase tracking-[0.17em] text-night/80">
              About booking links
            </h2>
            <p className="mt-3 max-w-md font-body text-[13px] leading-6 text-night/75">
              Some links are affiliate links. If you book through them, this
              publication may receive a commission. The provider handles your
              reservation, prices, changes and cancellation terms.
            </p>
          </div>
          <nav aria-label="Legal information" className="mt-9 flex flex-wrap gap-x-5 gap-y-1 border-t border-night/15 pt-5 md:col-span-2 md:mt-12 md:pt-6">
            <Link className={footerLinkClass} href="/politica-privacidad">
              Privacy (Spanish)
            </Link>
            <Link className={footerLinkClass} href="/politica-cookies">
              Cookies (Spanish)
            </Link>
            <Link className={footerLinkClass} href="/aviso-legal">
              Legal notice (Spanish)
            </Link>
          </nav>
        </div>
      </footer>
      <CookieBanner language="en" />
      <GoogleAnalytics />
    </DocumentShell>
  );
}
