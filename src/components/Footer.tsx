import Link from 'next/link';
import Image from 'next/image';

/**
 * Cierre editorial compartido. Sin patrón decorativo ni dependencias extra:
 * navegación útil, marca legible y enlaces legales de primer nivel.
 * Los mismos destinos permanecen para conservar el enlazado interno.
 */
const PLAN_LINKS = [
  { href: '/portugal', label: 'Viajar por Portugal' },
  { href: '/que-ver-en-lisboa', label: 'Qué ver en Lisboa' },
  { href: '/blog/como-moverse-por-lisboa', label: 'Transporte en Lisboa' },
  { href: '/donde-comer-en-lisboa', label: 'Dónde comer en Lisboa' },
];

const SITE_LINKS = [
  { href: '/blog', label: 'Guías' },
  { href: '/free-tours-lisboa', label: 'Free tours' },
  { href: '/contacto', label: 'Contacto' },
];

const LEGAL_LINKS = [
  { href: '/politica-privacidad', label: 'Privacidad' },
  { href: '/politica-cookies', label: 'Cookies' },
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/terminos-condiciones', label: 'Términos y condiciones' },
];

const linkClass =
  'inline-flex min-h-10 items-center py-1 font-body text-sm leading-snug text-night/85 transition-colors hover:text-terracotta hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta';
const headingClass =
  'font-body text-[11px] font-bold not-italic uppercase tracking-[0.17em] text-night/80';
const legalClass =
  'inline-flex min-h-9 items-center font-body text-xs leading-5 text-night/75 transition-colors hover:text-terracotta hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta';

export default function Footer() {
  return (
    <footer className="border-t border-night/15 bg-[#eee8df] text-night">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-11 md:px-8 md:pb-10 md:pt-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,0.78fr)] md:gap-x-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-block max-w-full rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
            >
              <Image
                src="/logo.png"
                alt="Estaba en Lisboa — inicio"
                width={1200}
                height={500}
                className="h-auto w-[228px] max-w-full sm:w-[250px]"
              />
            </Link>
            <p className="mt-3 max-w-[19rem] font-body text-[13px] leading-6 text-night/75">
              Guías de Lisboa y Portugal en español, con información práctica para organizar tu visita.
            </p>
          </div>

          <nav aria-labelledby="footer-plan-title">
            <h2 id="footer-plan-title" className={headingClass}>Planificar</h2>
            <ul className="mt-3 space-y-0.5">
              {PLAN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-site-title">
            <h2 id="footer-site-title" className={headingClass}>La web</h2>
            <ul className="mt-3 space-y-0.5">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a
                  href="https://instagram.com/estabaenlisboa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-night/15 pt-5 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-6 md:pt-6">
          <p className="font-body text-xs text-night/70">© 2026 Estaba en Lisboa</p>
          <nav aria-label="Información legal" className="flex flex-wrap gap-x-5 gap-y-1">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={legalClass}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
