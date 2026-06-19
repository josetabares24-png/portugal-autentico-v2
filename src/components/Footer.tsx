import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-night bg-azulejo-pattern-gold border-t border-white/5 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

          <Link href="/" className="inline-block flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/logo.png"
              alt="Estaba en Lisboa"
              width={140}
              height={44}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-6 md:gap-8">
            <Link
              href="/planifica-tu-viaje"
              className="font-body font-light text-sm text-white/70 hover:text-gold transition-colors"
            >
              Planifica tu Viaje
            </Link>
            <Link
              href="/contacto"
              className="font-body font-light text-sm text-white/70 hover:text-gold transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/politica-privacidad"
              className="font-body font-light text-sm text-white/70 hover:text-gold transition-colors"
            >
              Privacidad
            </Link>
            <a
              href="https://instagram.com/estabaenlisboa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-light text-sm text-white/70 hover:text-gold transition-colors"
              aria-label="Instagram de Estaba en Lisboa"
            >
              Instagram
            </a>
          </nav>
        </div>

        <p className="font-body font-light text-white/40 text-xs mt-10">
          © 2026 Estaba en Lisboa
        </p>
      </div>
    </footer>
  );
}
