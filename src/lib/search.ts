/**
 * Normalización para buscar sin depender de acentos ni mayúsculas.
 *
 * Sin librerías: `Intl`/`normalize('NFD')` ya viene en el navegador y en Node,
 * y para un catálogo de decenas de elementos filtrar en cliente es
 * instantáneo. Añadir un buscador de verdad aquí sería pagar una dependencia
 * para resolver algo que no es un problema.
 *
 *   normalizar('Oceanário')  ->  'oceanario'
 *   normalizar('SÃO JORGE')  ->  'sao jorge'
 */
export function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    // Marcas diacríticas: quita el acento y deja la letra base.
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/*
 * Equivalencias entre el español que escribe el visitante y el portugués que
 * usan los nombres reales.
 *
 * Esto no es un capricho: las tres fichas de miradouros se llaman
 * «Miradouro», y quien busca escribe «mirador». No es subcadena de la otra,
 * así que sin esta tabla el buscador no encontraba nada y parecía roto.
 *
 * Se amplía por evidencia, no por si acaso: cada línea está aquí porque es
 * una palabra que alguien escribiría de verdad.
 */
const EQUIVALENCIAS: Record<string, string[]> = {
  mirador: ['miradouro'],
  miradouro: ['mirador'],
  castillo: ['castelo'],
  castelo: ['castillo'],
  tranvia: ['electrico', 'tram'],
  monasterio: ['mosteiro'],
  mosteiro: ['monasterio'],
  ascensor: ['elevador'],
  elevador: ['ascensor'],
  crucero: ['barco', 'paseo en barco'],
  barco: ['crucero', 'passeio'],
  ninos: ['familia', 'infantil'],
  comida: ['gastronomia', 'gastronomico', 'tasca', 'comer'],
  playa: ['praia'],
};

/**
 * ¿Coincide la consulta con alguno de estos campos?
 *
 * Se parte la consulta en palabras y se exigen todas, para que «barco tajo»
 * afine en vez de devolver cualquier cosa que tenga una de las dos. Cada
 * palabra se busca como subcadena, así que «ocean» ya encuentra «Oceanário»,
 * y además se aceptan sus equivalentes en portugués.
 */
export function coincide(consulta: string, campos: (string | undefined)[]): boolean {
  const q = normalizar(consulta);
  if (!q) return true;

  const heno = normalizar(campos.filter(Boolean).join(' '));

  return q.split(/\s+/).every((palabra) => {
    if (heno.includes(palabra)) return true;
    const variantes = EQUIVALENCIAS[palabra];
    return variantes ? variantes.some((v) => heno.includes(normalizar(v))) : false;
  });
}
