#!/bin/bash

# Script para generar las 7 páginas de guías restantes
# Ejecutar desde la raíz del proyecto

echo "Generando páginas de guías..."

# LISBOA 3 DÍAS
cat > src/app/guias/lisboa-3-dias/page.tsx << 'EOF'
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Lisboa3DiasPage() {
  return (
    <div className="min-h-screen bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1526306063970-d5c223f28c89?w=1200" alt="Lisboa 3 Días" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa en 3 Días:<br /><span className="text-primary">Completa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experiencia completa: Lisboa + Sintra + los barrios más auténticos
          </p>
          <button onClick={() => alert('Próximamente: Checkout Stripe')} className="group bg-gradient-to-r from-primary to-orange-500 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all">
            Comprar por 5.99€
          </button>
        </div>
      </section>
    </div>
  );
}
EOF

# LISBOA PAREJA
cat > src/app/guias/lisboa-pareja/page.tsx << 'EOF'
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LisboaParejaPage() {
  return (
    <div className="min-h-screen bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200" alt="Lisboa Pareja" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa en Pareja:<br /><span className="text-primary">Romance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Miradores al atardecer, cenas especiales y rincones secretos para dos
          </p>
          <button onClick={() => alert('Próximamente: Checkout Stripe')} className="group bg-gradient-to-r from-primary to-orange-500 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all">
            Comprar por 6.99€
          </button>
        </div>
      </section>
    </div>
  );
}
EOF

# LISBOA NIÑOS
cat > src/app/guias/lisboa-ninos/page.tsx << 'EOF'
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LisboaNinosPage() {
  return (
    <div className="min-h-screen bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1560421683-6856ea585c78?w=1200" alt="Lisboa Niños" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa con Niños:<br /><span className="text-primary">Familiar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Actividades kid-friendly, restaurantes familiares y diversión para todos
          </p>
          <button onClick={() => alert('Próximamente: Checkout Stripe')} className="group bg-gradient-to-r from-primary to-orange-500 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all">
            Comprar por 6.99€
          </button>
        </div>
      </section>
    </div>
  );
}
EOF

# LISBOA 7 DÍAS
cat > src/app/guias/lisboa-7-dias/page.tsx << 'EOF'
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Lisboa7DiasPage() {
  return (
    <div className="min-h-screen bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200" alt="Lisboa 7 Días" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-md rounded-full mb-6">
            <span className="text-sm font-bold">⭐ PREMIUM</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa en 7 Días:<br /><span className="text-primary">Inmersiva</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Semana completa: Lisboa + Sintra + Cascais + Óbidos + experiencia local
          </p>
          <button onClick={() => alert('Próximamente: Checkout Stripe')} className="group bg-gradient-to-r from-primary to-orange-500 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all">
            Comprar por 9.99€
          </button>
        </div>
      </section>
    </div>
  );
}
EOF

# LISBOA COCHE
cat > src/app/guias/lisboa-coche/page.tsx << 'EOF'
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LisboaCochePage() {
  return (
    <div className="min-h-screen bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200" alt="Lisboa Coche" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa en Coche:<br /><span className="text-primary">Road Trip</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Rutas optimizadas con GPS, información de parking y excursiones perfectas
          </p>
          <button onClick={() => alert('Próximamente: Checkout Stripe')} className="group bg-gradient-to-r from-primary to-orange-500 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all">
            Comprar por 7.99€
          </button>
        </div>
      </section>
    </div>
  );
}
EOF

# LISBOA CULTURAL
cat > src/app/guias/lisboa-cultural/page.tsx << 'EOF'
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LisboaCulturalPage() {
  return (
    <div className="min-h-screen bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=1200" alt="Lisboa Cultural" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Lisboa Cultural:<br /><span className="text-primary">Arte e Historia</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Museos, galerías, azulejos y patrimonio artístico de Lisboa
          </p>
          <button onClick={() => alert('Próximamente: Checkout Stripe')} className="group bg-gradient-to-r from-primary to-orange-500 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all">
            Comprar por 8.99€
          </button>
        </div>
      </section>
    </div>
  );
}
EOF

echo "✅ 7 páginas generadas exitosamente!"
echo ""
echo "Archivos creados:"
echo "  - src/app/guias/lisboa-3-dias/page.tsx"
echo "  - src/app/guias/lisboa-pareja/page.tsx"
echo "  - src/app/guias/lisboa-ninos/page.tsx"
echo "  - src/app/guias/lisboa-7-dias/page.tsx"
echo "  - src/app/guias/lisboa-coche/page.tsx"
echo "  - src/app/guias/lisboa-cultural/page.tsx"
echo ""
echo "Siguiente paso:"
echo "  git add src/app/guias/"
echo "  git commit -m 'feat: añadir 7 páginas guías individuales'"
echo "  git push origin main"
echo "  npx vercel --prod"
