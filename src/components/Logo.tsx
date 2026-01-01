import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <svg 
        width="200" 
        height="56" 
        viewBox="0 0 200 56" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-auto"
      >
        <defs>
          {/* Degradado vibrante para el círculo */}
          <linearGradient id="sunsetGradientCompact" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#FF8A5B', stopOpacity: 1}} />
            <stop offset="50%" style={{stopColor: '#FF6B35', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#EA5A28', stopOpacity: 1}} />
          </linearGradient>
          
          {/* Sombra suave del círculo */}
          <filter id="softShadowCompact">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="1.2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.15"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <style>{`
          .subtitulo-c {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
            font-size: 9px;
            font-weight: 500;
            fill: #94A3B8;
            letter-spacing: 1.8px;
            text-transform: uppercase;
          }
          .titulo-c {
            font-family: 'Fraunces', 'Playfair Display', Georgia, serif;
            font-size: 35px;
            font-weight: 600;
            fill: #0F172A;
            letter-spacing: -0.8px;
          }
          .punto-c {
            fill: #FF6B35;
          }
        `}</style>
        
        {/* "ESTABA EN" refinado */}
        <text x="9" y="16" className="subtitulo-c">ESTABA EN</text>
        
        {/* Círculo con degradado y sombra */}
        <circle cx="156" cy="28" r="20" fill="url(#sunsetGradientCompact)" filter="url(#softShadowCompact)" />
        
        {/* "Lisboa" con mejor balance */}
        <text x="7" y="45" className="titulo-c">Lisboa</text>
        
        {/* Punto decorativo sutil */}
        <circle cx="131" cy="42" r="1.6" className="punto-c" opacity="0.6" />
      </svg>
    </Link>
  );
}
