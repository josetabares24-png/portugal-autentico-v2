/** Auditoría visual del catálogo, 01/11/2026.
 * null retira una portada sin foto adecuada; no sustituye el artículo ni su URL.
 * Las razones y las hojas de contacto se documentan en la auditoría del PR134.
 */
export const editorialPhotoReview: Record<string, { image: string | null; reason: string }> = {
  'mejores-mercados-lisboa': { image: '/images/lisboa-originales/time-out-market-lisboa/time-out-market-lisboa-interior-puestos-comida.jpg', reason: 'Interior real de un mercado; sustituye una calle residencial.' },
  'belem-barrio-guia': { image: '/images/commons/torre-belem-werner-wikimedia.webp', reason: 'Fotografía real de Commons con atribución; sustituye la Torre artificial.' },
  'monasterio-jeronimos-entradas': { image: '/images/commons/claustro-jeronimos-halun-wikimedia.webp', reason: 'Claustro real de Jakub Hałun, CC BY 4.0.' },
  'arquitectura-manuelina-lisboa': { image: '/images/commons/claustro-jeronimos-halun-wikimedia.webp', reason: 'El claustro representa el tema; fotografía real con atribución.' },
  'vinos-portugueses-guia': { image: null, reason: 'El archivo seleccionado se ve negro; no representa vino.' },
  'mouraria-barrio-guia': { image: null, reason: 'Reutilizaba la imagen asignada a Alfama; no consta una foto propia verificada de Mouraria.' },
  'semana-santa-lisboa': { image: null, reason: 'Calle nocturna sin relación documentada con Semana Santa.' },
  'bacalhau-plato-portugal': { image: null, reason: 'Fachada de tasca, no un plato de bacalao ni su preparación.' },
  'playas-cerca-lisboa': { image: null, reason: 'Amarras y estuario del Tajo, sin playa visible.' },
  'patinetes-electricos-lisboa': { image: null, reason: 'Panorámica del Parque das Nações sin patinete ni infraestructura visible.' },
  'como-pagar-en-portugal': { image: null, reason: 'Una fachada no explica pagos ni muestra los medios de pago.' },
  'casa-cristiano-ronaldo-portugal-quinta-da-marinha': { image: null, reason: 'Plaza de Cascais; no es la vivienda descrita.' },
  'restaurantes-romanticos-lisboa': { image: null, reason: 'Escena de un local de fado sin identificación como restaurante de la selección.' },
  'aeropuerto-lisboa-al-centro': { image: null, reason: 'Funicular de Bica; no representa una conexión con el aeropuerto.' },
};

export function editorialPhoto(slug: string, candidate?: string | null): string | null {
  if (Object.hasOwn(editorialPhotoReview, slug)) return editorialPhotoReview[slug].image;
  return candidate || null;
}
