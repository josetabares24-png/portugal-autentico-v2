import type { EditorialPilot } from './editorial-pilot';

/** Phase 6D: four individually reviewed decision guides. No automatic rollout
 * to activity cards, recent ticket guides or old redirected articles.
 * Source indices refer to the unchanged articles object in the blog page.
 */
export const EDITORIAL_ATTRACTIONS: Record<string, EditorialPilot> = {
  'mejores-miradores-lisboa': {
    type: 'place', title: 'Qué mirador elegir', sourceBlocks: [0, 2, 5, 8, 10, 12, 14, 16, 19],
    rows: [
      { label: 'Vista amplia', value: 'Senhora do Monte, en Graça; puedes subir en transporte y empezar a bajar desde allí.' },
      { label: 'Vista y descanso', value: 'Miradouro da Graça, junto a la iglesia, con sombra y bancos.' },
      { label: 'Si recorres Alfama', value: 'Santa Luzia y Portas do Sol: combínalos en la misma caminata.' },
      { label: 'Chiado o Bairro Alto', value: 'São Pedro de Alcântara encaja con el paseo por esta zona.' },
      { label: 'Bica o Cais do Sodré', value: 'Santa Catarina, con vistas al Tajo y ambiente al final de la tarde.' },
      { label: 'Evitar cuestas dobles', value: 'Elige la ruta este o la oeste según tus barrios; no intentes ver todos los miradores en un día.' },
    ],
  },
  'mejores-mercados-lisboa': {
    type: 'place', title: 'Qué mercado elegir', sourceBlocks: [0, 3, 6, 8, 11, 13, 15, 16],
    rows: [
      { label: 'Comer con variedad', value: 'Mercado da Ribeira / Time Out Market, céntrico y con numerosos puestos.' },
      { label: 'Barrio y restauración', value: 'Campo de Ourique combina producto fresco y espacios para comer.' },
      { label: 'Segunda mano', value: 'Feira da Ladra, en Campo de Santa Clara; es una feria de calle, no un mercado gastronómico.' },
      { label: 'Producto fresco', value: 'Mercado de Arroios, con puestos de abastos y restauración.' },
      { label: 'Una feria grande', value: 'Feira do Relógio; requiere más tiempo fuera del circuito turístico central.' },
      { label: 'Antes de ir', value: 'Comprueba el día y horario en la fuente oficial, especialmente si hay festivos.' },
    ],
  },
  'lisboa-cuando-llueve': {
    type: 'practical', sourceBlocks: [0, 2, 5, 7, 10, 12, 13],
    rows: [
      { label: 'Plan principal', value: 'Elige una actividad cubierta y agrupa el resto del día en la misma zona.' },
      { label: 'Oceanário', value: 'En Parque das Nações, junto a Oriente; la visita media indicada es de 1,5 a 2 horas.' },
      { label: 'Museos', value: 'Escoge uno cerca de tu recorrido; no conviertas la lluvia en una carrera entre museos.' },
      { label: 'Para comer', value: 'Un mercado cubierto permite mantener el plan gastronómico sin encadenar traslados.' },
      { label: 'Una pausa', value: 'Si después mejora, espera la lluvia fuerte en un café o pastelería y retoma el paseo.' },
      { label: 'Al salir', value: 'Calzado con buena suela; deja miradores y barrios empinados para una franja más seca.' },
    ],
  },
  'que-hacer-gratis-en-lisboa': {
    type: 'practical', sourceBlocks: [0, 1, 3, 4, 8, 10, 14, 17, 28, 35, 36],
    rows: [
      { label: 'Qué significa gratis', value: 'Acceso sin entrada; transporte, consumo o zonas de pago pueden costar aparte.' },
      { label: 'Miradores', value: 'Escoge dos o tres que encajen en tu ruta, sin intentar subir a todos.' },
      { label: 'Barrios cercanos', value: 'Combina Baixa, Chiado y Príncipe Real, o Alfama, Mouraria y Graça.' },
      { label: 'Junto al río', value: 'Ribeira das Naus y Cais do Sodré permiten un paseo sin reservar una terraza.' },
      { label: 'Descansos', value: 'Incluye plazas, bancos y jardines; comprueba horarios si vas muy temprano o tarde.' },
      { label: 'Antes de contar con ello', value: 'Verifica las condiciones de acceso gratuito y distingue exteriores de zonas con entrada.' },
    ],
  },
};
