/*
 * Fotos de terceros con licencia libre que usa el sitio.
 *
 * No son de José y nunca se presentan como suyas: cada una lleva el crédito
 * corto encima de la imagen y la atribución completa (autor, licencia y
 * enlace al archivo original) en la nota de créditos de la página donde
 * aparece. Si se añade una foto aquí, se añade también en
 * `public/images/commons/CREDITOS.md`.
 */

export interface PhotoCredit {
  /** Lo que muestra la foto, comprobado en su ficha de Wikimedia Commons. */
  subject: string;
  author: string;
  license: 'CC BY 2.0' | 'CC BY 4.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'CC0' | 'Dominio público';
  licenseUrl?: string;
  /** Ficha del archivo original en Wikimedia Commons. */
  sourceUrl: string;
}

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  '/images/commons/castelo-mouros-wikimedia.webp': {
    subject: 'Muralla del Castelo dos Mouros, Sintra',
    author: 'Diego Delso',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Castelo_dos_Mouros,_Sintra,_Portugal,_2019-05-25,_DD_85.jpg',
  },
  '/images/commons/palacio-nacional-sintra-wikimedia.webp': {
    subject: 'Fachada del Palacio Nacional de Sintra',
    author: 'Jakub Hałun',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Pal%C3%A1cio_Nacional_de_Sintra,_Sintra,_Portugal,_20250606_1415_0223.jpg',
  },
  '/images/commons/palacio-ajuda-wikimedia.webp': {
    subject: 'Comedor de gala del Palacio Nacional da Ajuda',
    author: 'Brisid H.',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Grand_Dining_Room_at_Ajuda_National_Palace_in_Belem,_Lisbon,_Portugal.png',
  },
  '/images/commons/tesouro-real-wikimedia.webp': {
    subject: 'Corona real de 1817 en el Museo del Tesoro Real',
    author: 'Jules Verne Times Two',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Royal_Crown_made_in_Brazil_by_Ant%C3%B3nio_Gomes_da_Silva_in_1817,_Royal_Treasure_Museum,_Lisbon,_Portugal_julesvernex2.jpg',
  },
  '/images/commons/jeronimos-torre-belem-wikimedia.webp': {
    subject: 'Monasterio de los Jerónimos visto desde el Padrão dos Descobrimentos',
    author: 'Jakub Hałun',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:View_of_Mosteiro_dos_Jer%C3%B3nimos_from_Monument_of_the_Discoveries,_Bel%C3%A9m,_Lisbon,_20250604_1111_9124.jpg',
  },
  '/images/commons/sintra-palacio-pena-wikimedia.webp': {
    subject: 'Palacio da Pena, Sintra',
    author: 'CEphoto, Uwe Aranas',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg',
  },
};

export function getPhotoCredit(image?: string): PhotoCredit | undefined {
  return image ? PHOTO_CREDITS[image] : undefined;
}

/** «Foto: Autor / Wikimedia Commons, CC BY-SA 4.0». */
export function formatPhotoCreditShort(credit: PhotoCredit): string {
  return `Foto: ${credit.author} / Wikimedia Commons, ${credit.license}`;
}
