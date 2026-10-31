import type { Metadata } from 'next';
import { Newsreader, DM_Sans, Fraunces, Instrument_Sans } from 'next/font/google';
import HumanWebLab from '@/components/human-web/HumanWebLab';

// Fuentes autoalojadas por Next.js. Se cargan SOLO en el laboratorio privado.
// En producción se elegirá una pareja y se eliminarán las demás de la ruta final.
const newsreader = Newsreader({ subsets:['latin'], display:'swap', variable:'--hw-newsreader' });
const dmSans = DM_Sans({ subsets:['latin'], display:'swap', variable:'--hw-dm' });
const fraunces = Fraunces({ subsets:['latin'], display:'swap', variable:'--hw-fraunces' });
const instrumentSans = Instrument_Sans({ subsets:['latin'], display:'swap', variable:'--hw-instrument' });

export const metadata: Metadata = {
  title: 'Laboratorio Human Web | Estaba en Lisboa',
  description: 'Vista de prueba privada para comparar tipografías, CTA y microinteracciones.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function HumanWebSystemPage() {
  const fontClasses = [newsreader.variable, dmSans.variable, fraunces.variable, instrumentSans.variable].join(' ');
  return <HumanWebLab fontClasses={fontClasses}/>;
}
