/** Facts checked against Turismo de Portugal on 2026-10-14.
 * Durations are editorial suggestions, not transport timetables. */
export const portugalRegions = [
  {
    id: 'lisboa', number: '01', name: 'Lisboa y alrededores', places: 'Lisboa · Sintra · Cascais',
    description: 'Barrios junto al Tajo, los palacios de Sintra y la costa de Cascais. Puedes dedicar el viaje a esta zona sin cambiar de alojamiento cada noche: Lisboa y sus excursiones cercanas dan para algo más que una escala.',
    planning: 'Separa la visita a Sintra del día de Cascais. En Sintra, elige las entradas que realmente quieras y comprueba sus condiciones antes de cerrar el resto del plan.',
    href: '/que-ver-en-lisboa', label: 'Qué ver en Lisboa', source: 'https://www.visitportugal.com/es/destinos/lisboa-regiao',
  },
  {
    id: 'norte', number: '02', name: 'Oporto y el norte', places: 'Oporto · Duero · Braga · Guimarães',
    description: 'Oporto reúne el casco histórico, la ribera y las bodegas de Gaia al otro lado del Duero. La región continúa hacia el valle del río, Braga y Guimarães: son destinos distintos, no barrios de la misma ciudad.',
    planning: 'Si solo tienes dos días, céntrate en Oporto. Para añadir el Duero u otra ciudad, reserva una jornada aparte y comprueba el viaje de vuelta.',
    href: '/blog/lisboa-vs-porto', label: 'Lisboa u Oporto: cuál elegir', source: 'https://www.visitportugal.com/es/destinos/porto-e-norte',
  },
  {
    id: 'centro', number: '03', name: 'Centro de Portugal', places: 'Coimbra · Aveiro · Tomar · Óbidos',
    description: 'Coimbra y su universidad, la ría de Aveiro, el Convento de Cristo en Tomar y las murallas de Óbidos muestran partes muy diferentes del centro. Hacia el interior aparecen sierras y aldeas de piedra; la costa tiene su propio recorrido.',
    planning: 'Escoge las paradas por la ruta que vas a seguir. Coimbra o Aveiro pueden encajar en un viaje hacia Oporto; recorrer aldeas del interior exige otra organización.',
    href: 'https://www.visitportugal.com/es/destinos/centro-de-portugal', label: 'Turismo oficial del Centro', source: 'https://www.visitportugal.com/es/destinos/centro-de-portugal',
  },
  {
    id: 'alentejo', number: '04', name: 'Alentejo', places: 'Évora · Elvas · Monsaraz · Costa alentejana',
    description: 'Évora y Elvas, ambas Patrimonio Mundial, son dos entradas al patrimonio del Alentejo. Monsaraz y el entorno de Alqueva llevan hacia el interior; el litoral ofrece un viaje diferente, entre pueblos y playas.',
    planning: 'No agrupes interior y costa como si fueran una sola excursión. Decide primero qué quieres visitar y revisa las conexiones de cada localidad antes de elegir base.',
    href: 'https://www.visitportugal.com/es/destinos/alentejo', label: 'Turismo oficial del Alentejo', source: 'https://www.visitportugal.com/es/destinos/alentejo',
  },
  {
    id: 'algarve', number: '05', name: 'Algarve', places: 'Faro · Tavira · Lagos · Silves',
    description: 'El Algarve no es una sola playa. La Ría Formosa y Tavira están al este; Lagos y las calas entre acantilados proponen otra costa. Faro tiene centro histórico y Silves permite mirar hacia el interior.',
    planning: 'Elige una base según la parte que quieras recorrer. Si llegas desde Lisboa, cuenta el traslado como parte del viaje y comprueba cómo llegar desde la estación o terminal hasta tu alojamiento.',
    href: 'https://www.visitportugal.com/es/destinos/algarve', label: 'Turismo oficial del Algarve', source: 'https://www.visitportugal.com/es/destinos/algarve',
  },
] as const;

export const portugalIslands = [
  { name: 'Madeira', places: 'Funchal · Levadas · Porto Santo',
    description: 'Funchal, los recorridos junto a las levadas y la laurisilva forman parte del viaje a Madeira. Porto Santo es otra isla. Antes de fijar una caminata, consulta el estado y las condiciones del recorrido en la información oficial.',
    href: 'https://www.visitportugal.com/es/destinos/madeira' },
  { name: 'Azores', places: 'São Miguel · Terceira · Pico · Y otras seis islas',
    description: 'Son nueve islas, con paisajes y conexiones diferentes. São Miguel concentra lagunas como Sete Cidades y Lagoa do Fogo; Terceira tiene Angra do Heroísmo y Pico sus viñedos sobre lava. Elige una isla de partida antes de intentar combinar varias.',
    href: 'https://www.visitportugal.com/es/destinos/acores' },
] as const;

export const portugalRoutes = [
  { days: '3–4', name: 'Una ciudad y una salida', route: ['Lisboa', 'Sintra o Cascais'],
    description: 'Dedica dos o tres días a Lisboa y una jornada a una excursión. Si entras por Oporto, aplica la misma idea allí: una base y una salida bien elegida. Con pocos días, otra mudanza suele quitar más tiempo del que aporta.',
    href: '/que-ver-en-lisboa', label: 'Organizar los días en Lisboa' },
  { days: '7', name: 'Lisboa, Sintra y Oporto', route: ['Lisboa + Sintra', 'Traslado', 'Oporto'],
    description: 'Una propuesta de primera visita: cuatro días para Lisboa y Sintra, el quinto para viajar y llegar a Oporto, y los dos últimos para la ciudad. Si los vuelos encajan, entrar por una y salir por la otra evita volver al punto de partida.',
    href: '/blog/portugal-en-7-dias', label: 'Ver la ruta de siete días' },
  { days: '10–14', name: 'Añadir una tercera base', route: ['Lisboa', 'Centro', 'Oporto'],
    description: 'Puedes detenerte en Coimbra o Aveiro antes de Oporto. Si prefieres el sur, plantea Lisboa, una parada en el Alentejo y el Algarve. Son dos alternativas: sumar norte y sur a la vez exige dedicar más días a desplazarse.',
    href: '#regiones', label: 'Elegir la tercera región' },
] as const;

export const portugalGuides = [
  { title: 'Cómo moverse por Portugal', text: 'Comparar tren, autobús y coche antes de fijar las bases.', href: '/blog/como-moverse-por-portugal' },
  { title: 'Cómo pagar en Portugal', text: 'Tarjetas, efectivo y qué comprobar en los cajeros.', href: '/blog/como-pagar-en-portugal' },
  { title: 'Sintra desde Lisboa', text: 'Organizar el tren, las visitas y el regreso.', href: '/blog/sintra-desde-lisboa' },
  { title: 'Cascais desde Lisboa', text: 'Elegir el recorrido por el centro y la costa.', href: '/blog/que-ver-cascais-desde-lisboa' },
] as const;
