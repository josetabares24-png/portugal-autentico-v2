import { redirect } from 'next/navigation';

/**
 * Ruta legacy: /app/lisboa-1-dia → /itinerarios/lisboa-1-dia-lo-esencial
 * Creada para satisfacer el validador de Next.js que referencia esta ruta.
 */
export default function Lisboa1DiaLegacyPage() {
  redirect('/itinerarios/lisboa-1-dia-lo-esencial');
}
