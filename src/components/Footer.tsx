import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-taupe/20">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

          <Link href="/" className="inline-block flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Estaba en Lisboa"
              width={140}
              height={44}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-6 md:gap-8">
            <Link
              href="/contacto"
              className="font-body font-light text-sm text-night hover:text-terracotta transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/politica-privacidad"
              className="font-body font-light text-sm text-night hover:text-terracotta transition-colors"
            >
              Privacidad
            </Link>
            <a
              href="https://instagram.com/estabaenlisboa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-light text-sm text-night hover:text-terracotta transition-colors"
              aria-label="Instagram de Estaba en Lisboa"
            >
              Instagram
            </a>
          </nav>
        </div>

        <p className="font-body font-light text-taupe text-xs mt-10">
          © 2026 Estaba en Lisboa
        </p>
      </div>
    </footer>
  );
}
