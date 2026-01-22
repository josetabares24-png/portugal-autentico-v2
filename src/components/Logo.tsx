import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export default function Logo({ className = '', inverted = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/logo.png"
        alt="Estaba en Lisboa"
        width={160}
        height={50}
        className={`h-12 w-auto ${inverted ? 'brightness-0 invert' : ''}`}
        priority
      />
    </Link>
  );
}
