import type { ArticleEssentialsProps } from '@/components/blog/ArticleEssentials';

export type EditorialPilot = ArticleEssentialsProps & {
  /** Optional direct answer; the original introduction is retained in the body. */
  answer?: string;
  prioritizeHeading?: string;
  deferOpeningDisclaimer?: boolean;
  /** Source block indices in the unchanged article data, for editorial review. */
  sourceBlocks: readonly number[];
};

/** Seven reviewed pages only. No automatic category-based activation. */
export const EDITORIAL_PILOT: Record<string, EditorialPilot> = {
  'metro-lisboa-guia': {
    type: 'transport', sourceBlocks: [0, 2, 5, 9, 12, 15],
    rows: [
      { label: 'Horario', value: '06:30–01:00, en condiciones normales.' },
      { label: 'Billete', value: 'Carris/Metro: 1,90 €.' },
      { label: 'Tarjeta', value: 'Navegante ocasional: 0,50 €; viajes aparte.' },
      { label: '24 horas', value: 'Carris/Metro: 7,25 €.' },
      { label: 'Aeropuerto', value: 'Línea Roja; comprueba el transbordo al alojamiento.' },
      { label: 'Mapa y uso', value: 'Abre el plano oficial de la primera sección y busca estación, sentido y transbordo.' },
    ],
  },
  'tarjeta-navegante-lisboa': {
    type: 'transport', sourceBlocks: [0, 3, 5, 7, 11, 20, 21],
    rows: [
      { label: 'Qué comprar', value: 'Una Navegante ocasional por persona: 0,50 €.' },
      { label: 'Pocos trayectos', value: 'Zapping: 1,72 € por viaje en Metro y Carris.' },
      { label: 'Día intenso', value: '24 h Carris/Metro: 7,25 €. Supera al zapping desde el quinto viaje.' },
      { label: 'Solo Metro', value: 'Contactless: 1,92 € por trayecto, una persona por tarjeta o dispositivo.' },
      { label: 'No mezclar', value: 'Zapping y 24 h no pueden estar cargados a la vez en la misma tarjeta.' },
    ],
  },
  'como-pagar-en-portugal': {
    type: 'practical', sourceBlocks: [0, 1, 8, 16, 21, 28], deferOpeningDisclaimer: true,
    rows: [
      { label: 'Tarjeta', value: 'Comprueba la marca admitida antes de consumir.' },
      { label: 'Efectivo', value: 'Lleva algo en euros como alternativa.' },
      { label: 'Multibanco', value: 'Aceptar Multibanco no confirma que acepten tu Visa o Mastercard.' },
      { label: 'Comisiones', value: 'Distingue el cargo de tu banco del cargo del operador del cajero.' },
      { label: 'Contactless', value: 'Tarjeta, móvil o reloj; puede pedir PIN o autenticación.' },
    ],
  },
  'como-moverse-por-lisboa': {
    type: 'transport', title: 'Qué transporte elegir', sourceBlocks: [0, 4, 12, 29],
    rows: [
      { label: 'Centro', value: 'Camina por zonas cercanas; Metro para cruzar la ciudad.' },
      { label: 'Aeropuerto', value: 'Metro si el equipaje y la conexión encajan; taxi o app con maletas o mala conexión.' },
      { label: 'Belém', value: 'Compara tren desde Cais do Sodré, 15E y bus según el servicio del día.' },
      { label: 'Sintra', value: 'Tren desde Rossio, normalmente práctico desde el centro.' },
      { label: 'Cascais', value: 'Tren desde Cais do Sodré.' },
      { label: 'Cuestas o noche', value: 'Bus, taxi o app cuando caminar o enlazar transportes deja de compensar.' },
    ],
  },
  'time-out-market-lisboa': {
    type: 'food', sourceBlocks: [0, 5, 11, 12, 16, 17, 23],
    rows: [
      { label: 'Para quién sí', value: 'Grupos con gustos distintos y una comida práctica junto a Cais do Sodré.' },
      { label: 'Para quién no', value: 'Quien busca silencio, servicio de mesa o el precio más bajo.' },
      { label: 'Presupuesto', value: 'Según la carta del puesto: suma plato, bebida y extras antes de pedir.' },
      { label: 'Mejor momento', value: 'Fuera del pico habitual de comida y cena.' },
      { label: 'Cuánto tiempo', value: 'Depende de las colas y los pedidos; evita encajarlo con una conexión justa.' },
      { label: 'Reservas', value: 'Las mesas comunes no se reservan.' },
    ],
  },
  'estacion-oriente-lisboa': {
    type: 'transport', sourceBlocks: [4, 5, 12, 13, 14, 15],
    answer: 'En Oriente, los trenes están arriba, el Metro en el nivel inferior y los recorridos peatonales conectan con la terminal de autobuses. La Línea Roja enlaza con el aeropuerto. Para una conexión, busca primero tu transporte, su nivel y la vía o dársena; deja la arquitectura para después.',
    prioritizeHeading: 'Cómo usar el intercambiador sin perder tiempo',
    rows: [
      { label: 'Trenes', value: 'Andenes superiores, bajo la cubierta de vidrio y acero.' },
      { label: 'Metro', value: 'Línea Roja, en el nivel inferior.' },
      { label: 'Autobuses', value: 'Sigue autocarros y confirma la dársena del operador.' },
      { label: 'Aeropuerto', value: 'En la misma Línea Roja; desde el centro puede hacer falta transbordo.' },
      { label: 'Accesos', value: 'Comboios, metro y autocarros tienen niveles y señalización propios.' },
      { label: 'Margen', value: 'Comprueba el acceso al andén antes de parar a mirar la estación; con equipaje, prevé el cambio de nivel.' },
    ],
  },
  'vida-nocturna-lisboa': {
    type: 'neighborhood', title: 'Elige por ambiente', sourceBlocks: [0, 12, 13, 17, 27, 28],
    rows: [
      { label: 'Bares y calle', value: 'Bairro Alto: empezar entre bares pequeños y moverte a pie.' },
      { label: 'Continuar', value: 'Cais do Sodré: bares, restaurantes y opciones más tarde.' },
      { label: 'Conectar zonas', value: 'Baja desde Bairro Alto por Bica hacia Cais do Sodré.' },
      { label: 'Fado', value: 'Alfama, Mouraria o Madragoa; elige por música y condiciones de la sesión.' },
      { label: 'Noche tranquila', value: 'Cena y paseo corto por Chiado, Baixa o junto al Tajo.' },
    ],
  },
};
