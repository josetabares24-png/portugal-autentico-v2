import { Ruta } from '@/types/ruta';

export const LISBOA_1_DIA: Ruta = {
  id: 'lisboa-1-dia',
  nombre: 'Lisboa en 1 Día: Lo Esencial',
  duracion: '10-12 horas',
  paradas: 8,
  precio: 5.99,
  descripcion: 'Descubre lo esencial de Lisboa como un verdadero local. Itinerario diseñado por lisboetas para evitar trampas turísticas.',
  paradas_data: [
    {
      id: 1,
      hora: '09:00',
      duracion: '2-3 horas',
      tipo: 'Visita',
      titulo: 'Alfama - El Alma Auténtica de Lisboa',
      descripcion: 'Alfama es el único barrio que sobrevivió intacto al devastador terremoto de 1755 que destruyó el 85% de Lisboa. Sus callejuelas laberínticas datan del dominio árabe (siglo VIII-XII) y el nombre viene del árabe "al-hamma" que significa fuentes termales. Hoy es el barrio más auténtico de Lisboa, donde aún viven familias generacionales que nunca han salido del barrio. Aquí encontrarás la Lisboa real: señoras tendiendo ropa entre balcones, gatos durmiendo en escaleras de azulejos, y el sonido del fado escapando de tascas centenarias.',
      consejoLocal: 'SECRETO LOCAL: Entra por la Catedral Sé y piérdete subiendo hacia el castillo SIN usar Google Maps. Los mejores rincones están en callejones sin nombre. Los turistas suben directo al castillo en Uber y se pierden el 80% de la magia. La mejor hora es 7:30-9:00am cuando Alfama despierta: panaderos abriendo, olor a café, luz dorada en azulejos. EVITA los restaurantes de Rua dos Remédios (trampas turísticas). Los locales comen en tascas sin letrero. Si llueve, refugiate en el Museu do Fado (5 EUR, pequeño pero increíble).',
      coordenadas: { lat: 38.7134, lng: -9.1286 },
      imagenUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200',
      precio: 'Gratis',
      horario: 'Siempre abierto (mejor 7:00-10:00)',
    },
    {
      id: 2,
      hora: '10:30',
      duracion: '30 minutos',
      tipo: 'Visita',
      titulo: 'Mirador de Santa Luzia - Las Mejores Vistas',
      descripcion: 'El mirador más fotogénico de Lisboa, con azulejos históricos que narran la reconquista cristiana de la ciudad en 1147. Desde aquí verás los tejados rojos de Alfama, el río Tajo brillando como mercurio líquido, y los barcos deslizándose hacia el Atlántico. Los azulejos de las paredes son del siglo XVIII y muestran escenas de Lisboa antes del terremoto. El panel este muestra la Plaza del Comercio tal como era. Los locales vienen aquí para el atardecer con cerveza Sagres, pero la mañana temprano es mágica: luz perfecta para fotos y pocos turistas.',
      consejoLocal: 'FOTO PERFECTA: Llega entre 9:00-9:30am. La luz es perfecta, cero turistas, y el Mirador Portas do Sol (100m arriba) tiene más gente así que este está vacío. TRUCO: El puesto de café al lado abre 8:00am y hace el mejor galão (café con leche portugués) por 1.20 EUR. Llévalo al mirador y disfruta. Los azulejos del lado derecho son los originales del siglo XVIII (los otros son réplicas de 1950). PLAN B si llueve: El Mirador da Graça (15 min caminando) tiene techo cubierto y vistas igual de buenas.',
      coordenadas: { lat: 38.7115, lng: -9.1286 },
      imagenUrl: 'https://images.unsplash.com/photo-1588483882389-c3fde4a78d29?w=1200',
      precio: 'Gratis',
      horario: '24/7 - mejor 9:00-10:00',
      transporte: {
        tipo: 'Caminando',
        duracion: '5 minutos',
        coste: 'Gratis'
      }
    },
    {
      id: 3,
      hora: '11:30',
      duracion: '1.5 horas',
      tipo: 'Visita',
      titulo: 'Castelo de São Jorge - Fortaleza con Historia',
      descripcion: 'Construida en el siglo XI durante la ocupación mora, esta fortaleza domina Lisboa desde su punto más alto. El castillo vio pasar romanos, visigodos, moros y cristianos. En 1147, el primer rey de Portugal, Dom Afonso Henriques, conquistó el castillo tras un asedio de tres meses con ayuda de cruzados del norte de Europa. Durante siglos fue residencia real hasta que el palacio fue destruido por el terremoto de 1755. Las murallas tienen 360° de vistas: el río Tajo, el Puente 25 de Abril (gemelo del Golden Gate), Cristo Rei al otro lado, y toda Lisboa a tus pies. Los pavos reales que caminan libremente son descendientes de las aves que vivían en los jardines reales del siglo XV.',
      consejoLocal: 'AHORRA 15 EUR: Si tienes la Lisboa Card es GRATIS, si no, 15 EUR (caro para lo que es). ALTERNATIVA LOCAL: Las vistas desde las murallas exteriores (gratis) son casi igual de buenas. Entra por la Rua do Recolhimento, camina por fuera de las murallas hasta el Mirador da Graça. Vistas idénticas, cero euros. Si pagas la entrada: entra por la puerta oeste (menos cola), ve directo a la torre más alta (noreste), espera a que salga la gente, tendrás 2 minutos de fotos sin nadie. El mejor secreto: detrás del castillo hay ruinas romanas del siglo I (pasillo subterráneo) que nadie visita.',
      coordenadas: { lat: 38.7139, lng: -9.1334 },
      imagenUrl: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1200',
      precio: '15 EUR (gratis con Lisboa Card)',
      horario: '9:00-21:00 (verano) / 9:00-18:00 (invierno)',
      transporte: {
        tipo: 'Caminando desde mirador',
        duracion: '10 minutos',
        coste: 'Gratis'
      }
    },
    {
      id: 4,
      hora: '13:00',
      duracion: '1.5 horas',
      tipo: 'Comida',
      titulo: 'Tasca do Chico - Almuerzo Auténtico',
      descripcion: 'Esta tasca familiar lleva 40 años sirviendo comida casera a precios de 2005. Es tan local que el menú está escrito a mano en una pizarra y cambia según lo que el dueño João compró en el mercado esa mañana. Las paredes están cubiertas de fotos en blanco y negro de fadistas legendarios y equipos de fútbol del Benfica. El suelo de madera cruje, las mesas son pequeñas y compartidas, y la cocina está a la vista. Aquí no hay menú en inglés, no aceptan reservas, y si preguntas por WiFi te miran raro. Pero el bacalhau à brás (bacalao desmenuzado con patatas paja, huevo y cebolla) es el mejor que probarás en tu vida. El vino de la casa viene en jarras de cerámica sin etiqueta porque lo compran directo a un productor de Alentejo.',
      consejoLocal: 'ESTRATEGIA LOCAL: Llega a las 12:00 (abren 12:15) o después de las 15:00. Entre 13:00-14:30 es caos total. NO PIDAS en inglés aunque hables mal portugués - intenta en español, se entiende y te respetarán más. PLATOS OBLIGATORIOS: Bacalhau à Brás (8 EUR), Carne de Porco Alentejana (9 EUR), y de postre Pastel de Nata con café (3 EUR total). TRUCO: Siéntate en la barra, habla con João (el dueño calvo con bigote), pregúntale por el Benfica, y te tratará como familia. Te dará el vino en jarra más llena. NO PIDAS cuenta, la traen cuando terminan. Si hay fado en vivo por la noche (jueves/viernes 21:00), vale la pena volver.',
      coordenadas: { lat: 38.7100, lng: -9.1445 },
      imagenUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200',
      precio: '8-12 EUR',
      horario: '12:15-15:00 y 19:30-23:00 (cerrado domingo)',
      transporte: {
        tipo: 'Caminando o Tranvía 28',
        duracion: '15 minutos',
        coste: '3 EUR si tomas tranvía'
      }
    },
    {
      id: 5,
      hora: '15:00',
      duracion: '2-3 horas',
      tipo: 'Visita',
      titulo: 'Belém - Monumentos y Historia',
      descripcion: 'Belém es el barrio de donde partieron las carabelas portuguesas que descubrieron nuevos mundos en el siglo XV-XVI. Aquí Vasco da Gama zarpó hacia India (1497), Pedro Álvares Cabral hacia Brasil (1500), y Magallanes inició la primera vuelta al mundo (1519). La Torre de Belém (1520) era el último pedazo de tierra que veían los marineros antes de adentrarse en el Atlántico, muchos para nunca regresar. El Monasterio de los Jerónimos (1501) fue construido con "impuesto de pimienta" - el 5% de las especias traídas de Oriente. Es Patrimonio de la Humanidad y obra maestra del estilo manuelino: columnas que parecen cuerdas de barco, motivos marinos en piedra, y claustros que quitan el aliento. La tumba de Vasco da Gama está en la iglesia.',
      consejoLocal: 'EVITA LA COLA: Compra entradas online (12 EUR) o usa Lisboa Card (gratis). La cola puede ser de 2 horas. MEJOR ORDEN: Torre de Belém primero (9:30am, menos cola), luego Monasterio (11:00am), después pasteles (12:00pm antes de la locura). SECRETO: Jardín de la Torre tiene entrada gratuita con vistas al río y cero gente - perfecto para descansar. El PADRÃO DOS DESCOBRIMENTOS (Monumento a los Descubrimientos) tiene mirador en la cima (6 EUR) con vista 360° mejor que cualquier otro punto. ALTERNATIVA GRATIS: Pasea por los jardines de Belém (enfrente del monasterio) - césped gigante con vistas al río, perfecto para picnic. Si hace calor, el Centro Cultural de Belém tiene AC gratis y exposiciones gratuitas.',
      coordenadas: { lat: 38.6916, lng: -9.2160 },
      imagenUrl: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200',
      precio: '12 EUR monasterio + 6 EUR torre',
      horario: '10:00-18:30 (cerrado lunes)',
      transporte: {
        tipo: 'Tranvía 15E o tren',
        duracion: '30 minutos',
        coste: '3 EUR'
      }
    },
    {
      id: 6,
      hora: '17:00',
      duracion: '30 minutos',
      tipo: 'Comida',
      titulo: 'Pastéis de Belém - Los Originales desde 1837',
      descripcion: 'Esta pastelería es una institución lisboeta. La receta secreta de los pasteles de nata se guarda en una sala con acceso restringido a solo 3 maestros pasteleros que han jurado nunca revelarla. La receta original viene de los monjes del Monasterio de los Jerónimos (al lado) que la crearon antes de 1820. Cuando el monasterio cerró por la revolución liberal de 1820, vendieron la receta a esta pastelería. La diferencia con otros pasteles de nata de Lisboa está en el hojaldre (más crujiente), la crema (más cremosa y con un toque de limón), y la cocción (dorado perfecto con puntos caramelizados). Hacen 20,000 pasteles AL DÍA. La pastelería tiene múltiples salas decoradas con azulejos del siglo XIX. Los locales entran, compran una caja de 6, y se van. Los turistas hacen cola para comer dentro.',
      consejoLocal: 'EVITA 2 HORAS DE COLA: NO hagas cola para comer dentro. Entra por la puerta lateral (para llevar), compra 2-3 pasteles (1.30 EUR cada uno), y cómelos en el jardín de enfrente con vista al monasterio. Sabe IGUAL y ahorras 90 minutos. CÓMO COMER: Espolvorea canela y azúcar glas (están en el mostrador). Cómelo tibio en dos bocados. El hojaldre debe crujir. MEJOR HORA: Antes de las 11:00am o después de las 17:00. Entre medio es caos. SECRETO: Si insistes en comer dentro, ve al "salão de chá" (sala de té) del fondo - mismo pastel, ambiente elegante, te sientan en 5 minutos. COMPRA EXTRA: Los croissants de almendra (2 EUR) están infravalorados y son espectaculares.',
      coordenadas: { lat: 38.6977, lng: -9.2032 },
      imagenUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200',
      precio: '1.30 EUR por pastel',
      horario: '8:00-23:00 todos los días',
      transporte: {
        tipo: 'Caminando desde Monasterio',
        duracion: '5 minutos',
        coste: 'Gratis'
      }
    },
    {
      id: 7,
      hora: '18:00',
      duracion: '1-2 horas',
      tipo: 'Visita',
      titulo: 'LX Factory - Arte Urbano y Creatividad',
      descripcion: 'LXFactory es lo que Shoreditch es a Londres o Williamsburg a Nueva York: un antiguo complejo industrial reconvertido en epicentro creativo. Estas naves fabriles del siglo XIX producían tejidos hasta 1990. Abandonadas durante 15 años, artistas las ocuparon (squat) en 2008 y transformaron almacenes en galerías, estudios, cafés hipsters y tiendas de diseño independiente. Las paredes están cubiertas de murales gigantes que cambian cada mes. La librería Ler Devagar ocupa una nave de tres pisos con máquinas industriales oxidadas como decoración y una bicicleta voladora suspendida del techo. Los domingos hay mercado de vintage y diseñadores locales. El ambiente es joven, alternativo, con música indie sonando en cada rincón.',
      consejoLocal: 'MEJOR DÍA: Domingo por la tarde (15:00-19:00) cuando hay mercadillo, música en vivo en el patio, y ambiente más animado. Entre semana está más tranquilo pero algunos locales cierran. IMPRESCINDIBLE: Ler Devagar (librería) aunque no compres nada - la arquitectura es increíble y puedes subir las escaleras metálicas hasta arriba. Landeau Chocolate (mejor brownie de Lisboa, 3.50 EUR, viene caliente). INSTAGRAM: Mural gigante del Puente 25 de Abril en la entrada, la escalera metálica industrial, y el letrero "Love LX" con el puente de fondo. PLAN B si llueve: Es 80% cubierto, perfecto para días grises. CENA: Si tienes hambre, Rio Maravilha (en el techo, reserva) o simplemente compra comida street food en el patio. CÓMO LLEGAR: Uber (5 EUR desde Belém) o caminando 25 min junto al río.',
      coordenadas: { lat: 38.7065, lng: -9.1789 },
      imagenUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200',
      precio: 'Gratis entrada',
      horario: '10:00-24:00 (varía por local)',
      transporte: {
        tipo: 'Uber o caminando por el río',
        duracion: '25 minutos',
        coste: '5 EUR Uber'
      }
    },
    {
      id: 8,
      hora: '20:00',
      duracion: '2-3 horas',
      tipo: 'Comida',
      titulo: 'Bairro Alto - Cena y Vida Nocturna',
      descripcion: 'Bairro Alto es donde Lisboa sale de fiesta desde hace 400 años. De día es un barrio tranquilo de edificios del siglo XVI con tiendas vintage y galerías de arte. A partir de las 22:00 se transforma: cada portal se convierte en bar, la gente sale a las calles empedradas con cervezas y gin tonics, músicos tocan en esquinas, y el ambiente explota hasta las 3am. No es un barrio pijo - es auténtico, mixto, donde estudiantes, artistas, locales y turistas se mezclan. Los bares son diminutos (10 personas caben adentro), así que todos beben afuera. La policía no dice nada mientras no haya peleas. Es caótico, ruidoso, divertido y completamente lisboeta. Los mejores restaurantes están en calles laterales, lejos del ruido central.',
      consejoLocal: 'CENA PRIMERO: Bairro Alto es para beber, no para comer. Ve a Tasca Baldracca (Rua da Atalaia 86) - auténtica, portuguesa, familiar, 12 EUR plato completo. O Povo (más moderno, 15 EUR) si quieres algo más trendy. ESTRATEGIA FIESTA: Empieza en Pavilhão Chinês (bar museo con decoración increíble, 7 EUR gin tonic), sigue a Bairro Alto sobre las 23:30 (antes está muerto), prueba 2-3 bares pequeños (drinks 5-6 EUR), y acaba en Pink Street (5 min caminando) si quieres discoteca. SECRETO: Rua da Rosa tiene los mejores bares con menos turistas. Park Bar (rooftop encima de parking, entrada escondida) tiene vistas locas y música chill. SEGURIDAD: Es seguro pero hay carteristas - bolsillos cerrados. Los taxis/Ubers no suben por las calles estrechas - punto de recogida en Plaza Camões.',
      coordenadas: { lat: 38.7139, lng: -9.1446 },
      imagenUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200',
      precio: '12-15 EUR cena + 20-30 EUR bebidas',
      horario: 'Cena: 19:00-22:00 / Fiesta: 22:00-3:00',
      transporte: {
        tipo: 'Metro (Baixa-Chiado) o caminando desde LX',
        duracion: '20 minutos',
        coste: '1.50 EUR metro'
      }
    }
  ],
  presupuesto: {
    transporte: 10,
    comidas: 30,
    entradas: 25,
    extras: 8,
    total: 73
  },
  consejos: [
    'Compra la Lisboa Card si piensas visitar 3+ monumentos - sale rentable y evitas colas. Cuesta 21 EUR/día e incluye transporte público ilimitado.',
    'Los restaurantes cierran entre 15:00-19:00. Planifica comidas antes de las 15:00 o después de las 19:30. Muchos locales no aceptan reservas.',
    'El tranvía 28 es icónico pero hay carteristas profesionales. Vigila tus cosas. MEJOR OPCIÓN: Tómalo temprano (antes 8am) o tarde (después 7pm).',
    'Usa zapatos cómodos y prepárate para cuestas. Lisboa tiene 7 colinas. Las chanclas son suicidio en adoquines inclinados.',
    'El agua del grifo es potable y de calidad. No pagues 2 EUR por agua embotellada en restaurantes - pide "água da torneira" (agua del grifo).',
    'Los locales cenan tarde (21:00-22:00). Si cenas a las 19:00 estarás solo con turistas. La auténtica experiencia empieza después de las 20:30.',
    'El domingo muchas cosas cierran: museos, algunos restaurantes, tiendas. Verifica horarios. Los miradores y calles están siempre abiertos.'
  ]
};
