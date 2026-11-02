import Link from 'next/link';
import Image from 'next/image';
import { CookiePreferencesButton } from '@/components/CookieBanner';

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
  'inline-flex min-h-9 items-center py-0.5 text-[13px] leading-snug text-white/85 transition-colors hover:text-[#fcc603] hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcc603] md:text-sm';
const headingClass =
  'text-[10px] font-bold not-italic uppercase tracking-[0.14em] text-white/80 sm:text-[11px]';
const legalClass =
  'inline-flex min-h-8 items-center text-[11px] leading-5 text-white/75 transition-colors hover:text-[#fcc603] hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcc603] sm:text-xs';

export default function Footer() {
  return (
    <footer className="border-t border-[#0b2a3d] bg-[#0b2a3d] text-white" style={{ fontFamily: 'var(--grok-body), Arial, sans-serif' }}>
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-8 sm:px-6 sm:pt-10 md:px-8 md:pb-10 md:pt-12">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,0.78fr)] md:gap-x-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-block max-w-full rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcc603]"
            >
              <Image
                src="/brand/logo-v1-inverso.png"
                alt="Estaba en Lisboa — inicio"
                width={1200}
                height={500}
                sizes="(max-width: 639px) 150px, (max-width: 767px) 175px, 190px"
                className="h-auto w-[150px] max-w-full sm:w-[175px] md:w-[190px]"
              />
            </Link>
            <p className="mt-2 max-w-[19rem] text-xs leading-[1.55] text-white/75 sm:text-[13px]">
              Guías de Lisboa y Portugal en español, con información práctica para organizar tu visita.
            </p>
          </div>

          <nav aria-labelledby="footer-plan-title">
            <h2 id="footer-plan-title" className={headingClass}>Planificar</h2>
            <ul className="mt-2 space-y-0">
              {PLAN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-site-title">
            <h2 id="footer-site-title" className={headingClass}>La web</h2>
            <ul className="mt-2 space-y-0">
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

        <div className="mt-6 flex flex-col gap-2 border-t border-white/20 pt-4 md:mt-10 md:flex-row md:items-center md:justify-between md:gap-6 md:pt-5">
          <p className="text-[11px] text-white/70 sm:text-xs">© 2026 Estaba en Lisboa</p>
          <nav aria-label="Información legal" className="flex flex-wrap gap-x-4 gap-y-0.5 sm:gap-x-5">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={legalClass}>
                {link.label}
              </Link>
            ))}
            <CookiePreferencesButton className={legalClass} />
          </nav>
        </div>
      </div>
    </footer>
  );
}
