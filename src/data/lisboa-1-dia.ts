import { Ruta } from '@/types/ruta';

export const LISBOA_1_DIA: Ruta = {
  id: 'lisboa-1-dia',
  nombre: 'Lisboa en 1 Día',
  duracion: '10-12h',
  paradas: 8,
  precio: 5.99,
  descripcion: 'Explora los barrios históricos esenciales de Alfama y Baixa en una jornada inolvidable.',
  
  presupuesto: {
    transporte: 8,
    comidas: 30,
    entradas: 25,
    extras: 10,
    total: 73
  },

  consejos: [
    'Compra la Lisboa Card para transporte y museos ilimitados',
    'Usa zapatos cómodos - Lisboa tiene muchas cuestas',
    'Lleva agua contigo, especialmente en verano',
    'Los restaurantes cierran entre 15:00-19:00',
    'El tranvía 28 está lleno de turistas - mejor caminar o Uber'
  ],

  paradas_data: [
    {
      id: 1,
      hora: '09:00',
      tipo: 'Visita',
      titulo: 'Alfama - El barrio más auténtico',
      descripcion: 'Empieza temprano antes de que lleguen los turistas. Callejuelas medievales, ropa tendida, fado sonando desde las ventanas.',
      consejoLocal: 'Entra por la Catedral Sé y piérdete subiendo hacia el castillo',
      coordenadas: { lat: 38.7134, lng: -9.1286 },
      imagenUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
      duracion: '1.5h',
      transporte: { tipo: 'A pie desde el centro', duracion: '10 min', coste: 'Gratis' }
    },
    {
      id: 2,
      hora: '10:30',
      tipo: 'Visita',
      titulo: 'Mirador Santa Luzia',
      descripcion: 'Las mejores vistas de Alfama y el río Tajo. Azulejos preciosos, buganvillas, perfecto para fotos.',
      consejoLocal: 'El mirador de al lado (Portas do Sol) tiene más gente pero vistas diferentes',
      coordenadas: { lat: 38.7115, lng: -9.1286 },
      imagenUrl: 'https://images.unsplash.com/photo-1588642411190-3e72e93b1497?w=800',
      duracion: '30 min',
      precio: 'Gratis',
      transporte: { tipo: 'A pie desde Alfama', duracion: '5 min', coste: 'Gratis' }
    },
    {
      id: 3,
      hora: '11:30',
      tipo: 'Visita',
      titulo: 'Castelo de São Jorge',
      descripcion: 'Vistas 360 de Lisboa. Pasea por las murallas, ve los pavos reales.',
      consejoLocal: 'Entrada: 15 EUR | Tip: Después de las 15:00 hay menos gente',
      coordenadas: { lat: 38.7139, lng: -9.1334 },
      imagenUrl: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
      duracion: '1.5h',
      precio: '15 EUR',
      horario: '09:00-21:00',
      transporte: { tipo: 'A pie subiendo', duracion: '8 min', coste: 'Gratis' }
    },
    {
      id: 4,
      hora: '13:00',
      tipo: 'Comida',
      titulo: 'Almuerzo en Tasca do Chico',
      descripcion: 'Tasca auténtica donde comen los locales. Menú del día por 8-10 EUR.',
      consejoLocal: 'Alternativa: Taberna da Rua das Flores',
      coordenadas: { lat: 38.7100, lng: -9.1445 },
      imagenUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      duracion: '1h',
      precio: '8-10 EUR',
      horario: '12:00-15:00, 19:00-23:00',
      transporte: { tipo: 'Bajada a pie', duracion: '15 min', coste: 'Gratis' }
    },
    {
      id: 5,
      hora: '15:00',
      tipo: 'Visita',
      titulo: 'Belém - Torre y Monasterio',
      descripcion: 'Torre de Belém y Monasterio de los Jerónimos son patrimonio UNESCO.',
      consejoLocal: 'Compra entradas online para el Monasterio',
      coordenadas: { lat: 38.6916, lng: -9.2160 },
      imagenUrl: 'https://images.unsplash.com/photo-1599052518715-4106f84fc9f6?w=800',
      duracion: '1.5h',
      precio: '12 EUR (Torre) + 10 EUR (Monasterio)',
      horario: '10:00-18:30',
      transporte: { tipo: 'Tranvía 15E o Uber', duracion: '15-20 min', coste: '3 EUR / 8-10 EUR' }
    },
    {
      id: 6,
      hora: '16:30',
      tipo: 'Comida',
      titulo: 'Pastéis de Belém',
      descripcion: 'Los pastéis de nata originales desde 1837.',
      consejoLocal: '1.30 EUR cada uno | El salón de atrás tiene menos cola',
      coordenadas: { lat: 38.6977, lng: -9.2032 },
      imagenUrl: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=800',
      duracion: '30 min',
      precio: '1.30 EUR/unidad',
      horario: '08:00-23:00',
      transporte: { tipo: 'A pie', duracion: '5 min', coste: 'Gratis' }
    },
    {
      id: 7,
      hora: '18:00',
      tipo: 'Visita',
      titulo: 'LX Factory',
      descripcion: 'Antigua fábrica convertida en espacio creativo.',
      consejoLocal: 'Ler Devagar es una librería increíble',
      coordenadas: { lat: 38.7065, lng: -9.1789 },
      imagenUrl: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
      duracion: '1.5h',
      precio: 'Gratis',
      horario: '10:00-00:00',
      transporte: { tipo: 'Uber o Tranvía 15E', duracion: '10 min', coste: '5-7 EUR / 3 EUR' }
    },
    {
      id: 8,
      hora: '20:00',
      tipo: 'Comida',
      titulo: 'Cena en Bairro Alto',
      descripcion: 'Ambiente animado, muchos restaurantes.',
      consejoLocal: 'Recomendado: Café Buenos Aires o Cervejaria Trindade',
      coordenadas: { lat: 38.7139, lng: -9.1446 },
      imagenUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
      duracion: '2h',
      precio: '15-25 EUR',
      horario: '19:00-01:00',
      transporte: { tipo: 'Metro o Uber', duracion: '15 min', coste: '1.50 EUR / 6-8 EUR' }
    }
  ]
};
