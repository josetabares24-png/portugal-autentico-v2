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
        width={180}
        height={56}
        className="h-14 w-auto"
        priority
      />
    </Link>
  );
}
