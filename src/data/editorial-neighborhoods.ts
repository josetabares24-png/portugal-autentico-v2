import type { EditorialPilot } from './editorial-pilot';

/** Phase 6B: six individually reviewed guides. Original body and order stay intact.
 * Belém and the broad neighborhood comparison await factual review; no rollout
 * by category. Source indices refer to the unchanged articles object.
 */
export const EDITORIAL_NEIGHBORHOODS: Record<string, EditorialPilot> = {
  'baixa-lisboa-que-ver': {
    type: 'neighborhood', sourceBlocks: [0, 2, 4, 6, 9, 12],
    rows: [
      { label: 'Para quién', value: 'Primera visita y un paseo para orientarte entre Rossio y el Tajo.' },
      { label: 'Empieza en', value: 'Rossio; acércate a Praça da Figueira antes de seguir al río.' },
      { label: 'Eje del paseo', value: 'Rua Augusta y sus calles laterales hasta Praça do Comércio.' },
      { label: 'Desnivel', value: 'La ruta por la Baixa es más regular; hacia Chiado y Carmo empiezas a subir.' },
      { label: 'Continúa hacia', value: 'Chiado o Alfama desde el entorno de Praça do Comércio.' },
    ],
  },
  'alfama-historia-guia': {
    type: 'neighborhood', sourceBlocks: [0, 1, 3, 5, 6, 11, 14, 16],
    rows: [
      { label: 'Cómo recorrerla', value: 'A pie, con referencias claras y margen para escaleras y pendientes.' },
      { label: 'Ruta sencilla', value: 'Sé → Santa Luzia → Portas do Sol; después decide si bajas por São Miguel.' },
      { label: 'Miradores', value: 'Santa Luzia y Portas do Sol están muy cerca: puedes combinar ambos.' },
      { label: 'Castillo', value: 'Es una visita de pago aparte; deja margen adicional si decides entrar.' },
      { label: 'Cómo acercarte', value: 'Por Santa Apolónia o Baixa; si usas el 28E, comprueba las alteraciones de CARRIS.' },
      { label: 'Fado', value: 'Compara formatos y condiciones antes de reservar una noche de música.' },
    ],
  },
  'graca-lisboa-que-ver': {
    type: 'neighborhood', sourceBlocks: [0, 2, 4, 6, 9],
    rows: [
      { label: 'Qué encontrarás', value: 'Calles residenciales y miradores sobre una colina junto a Alfama y Mouraria.' },
      { label: 'Para empezar', value: 'Largo da Graça, iglesia y Miradouro da Graça.' },
      { label: 'Otra vista', value: 'Senhora do Monte queda más arriba; encaja al atardecer.' },
      { label: 'Evitar cuestas dobles', value: 'Sube en transporte si quieres ahorrar piernas y baja después hacia Mouraria o Alfama.' },
      { label: 'Tranvía 28', value: 'Puede formar parte del paseo; si hay mucha cola, no condiciones la visita a conseguir sitio.' },
    ],
  },
  'chiado-bairro-alto-guia': {
    type: 'neighborhood', sourceBlocks: [0, 2, 10, 12, 14, 17, 20, 22, 24],
    rows: [
      { label: 'Chiado de día', value: 'Rua Garrett, librerías, cafés y espacios culturales.' },
      { label: 'Bairro Alto', value: 'Paseo residencial de día; bares y ambiente de calle al avanzar la tarde y la noche.' },
      { label: 'Recorrido conjunto', value: 'Chiado → Praça Luís de Camões → Bairro Alto; evita subir y bajar varias veces.' },
      { label: 'Al final de la tarde', value: 'São Pedro de Alcântara, antes de seguir el paseo o salir por los bares.' },
      { label: 'Tiempo', value: 'Unas horas para Chiado; una tarde completa si añades cafés, cultura y la noche.' },
      { label: 'Cómo llegar', value: 'Estación Baixa-Chiado; organiza el sentido del paseo según la pendiente.' },
    ],
  },
  'mouraria-barrio-guia': {
    type: 'neighborhood', sourceBlocks: [0, 4, 6, 7, 10, 13, 15, 20],
    rows: [
      { label: 'Por qué ir', value: 'Historia social, memoria del fado y diversidad del entorno de Martim Moniz.' },
      { label: 'Ruta sencilla', value: 'Martim Moniz → Rua da Mouraria → Rua do Capelão → Largo da Severa.' },
      { label: 'Otra parada', value: 'Escadinhas de São Cristóvão y su mural dedicado al fado.' },
      { label: 'Tiempo', value: 'Una o dos horas; puede formar parte de medio día con Alfama, Graça o Intendente.' },
      { label: 'Qué esperar', value: 'Un barrio que ha cambiado con el tiempo; el origen del fado no tiene una única teoría demostrada.' },
    ],
  },
  'parque-das-nacoes-lisboa-que-ver': {
    type: 'neighborhood', sourceBlocks: [0, 2, 5, 7, 9, 11],
    rows: [
      { label: 'Cuándo encaja', value: 'Si tienes cuatro o cinco días y quieres una Lisboa distinta del centro histórico.' },
      { label: 'Empieza en', value: 'Oriente; desde la estación puedes seguir a pie hacia el frente ribereño.' },
      { label: 'Paseo', value: 'Frente al Tajo, más plano y abierto que las colinas del centro.' },
      { label: 'Tiempo', value: 'Dos horas para Oriente y el paseo; media jornada si añades otra visita.' },
      { label: 'Oceanário', value: 'Si lo incluyes, organiza el resto del recorrido alrededor de esa visita.' },
      { label: 'Telecabina', value: 'Opcional para la vista aérea; el paseo a pie ya permite conocer la zona.' },
    ],
  },
};
