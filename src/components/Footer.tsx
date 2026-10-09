import Link from 'next/link';
import Image from 'next/image';

/*
 * Pie de página. La cabecera no se toca (decisión registrada en brain/); el
 * pie enlaza las tres guías centrales indexables. Itinerarios, calculadora y
 * planifica siguen degradadas (brain/08) y no se promocionan aquí.
 */
const PLAN_LINKS = [
  { href: '/que-ver-en-lisboa', label: 'Qué ver en Lisboa' },
  { href: '/transporte-lisboa', label: 'Transporte en Lisboa' },
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

const linkClass = 'font-body font-light text-sm text-white/70 hover:text-gold transition-colors';
const headingClass = 'mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold';

export default function Footer() {
  return (
    <footer className="relative bg-night bg-azulejo-pattern-gold border-t border-white/5 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-24 md:px-8 md:py-14">
        {/* pb-24 en móvil: deja sitio al botón flotante de cookies, que tapaba los enlaces legales. */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.2fr,1fr,1fr]">
          <Link href="/" className="inline-block self-start opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/logo.png"
              alt="Estaba en Lisboa"
              width={140}
              height={44}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>

          <nav aria-label="Planificar el viaje">
            <p className={headingClass}>Planificar</p>
            <ul className="space-y-2.5">
              {PLAN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Estaba en Lisboa">
            <p className={headingClass}>Estaba en Lisboa</p>
            <ul className="space-y-2.5">
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
                  aria-label="Instagram de Estaba en Lisboa"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-body font-light text-white/60 text-xs">© 2026 Estaba en Lisboa</p>
          <nav aria-label="Información legal" className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="font-body font-light text-xs text-white/60 hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
