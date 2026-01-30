import { Metadata } from 'next';
import QuizLisboa from '@/components/QuizLisboa';

export const metadata: Metadata = {
  title: '¿Qué Lisboa es para ti? | Estaba en Lisboa',
  description:
    'Descubre tu perfil viajero en 60 segundos. Te recomendamos barrios, experiencias y la guía perfecta para tu viaje a Lisboa.',
  openGraph: {
    title: '¿Qué Lisboa es para ti?',
    description: 'Quiz personalizado para planificar tu viaje perfecto a Lisboa',
    url: 'https://estabaenlisboa.com/quiz',
    images: [{ url: 'https://estabaenlisboa.com/images/hero-lisboa.jpg', width: 1200, height: 630, alt: 'Quiz Lisboa' }],
    type: 'website',
  },
  alternates: { canonical: 'https://estabaenlisboa.com/quiz' },
};

export default function QuizPage() {
  return <QuizLisboa />;
}
