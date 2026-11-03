import type { RestaurantMenuItem, RestaurantMenuSection } from '@/components/blog/RestaurantMenu';

const item = (name: string, price: string, description?: string, detail?: string): RestaurantMenuItem => ({
  name,
  price,
  ...(description ? { description } : {}),
  ...(detail ? { detail } : {}),
});

/**
 * Transcripción editorial en español de las dos cartas que Sinchi envió
 * directamente el 02-11-2026: SINCHI CARTA.docx + CARTA DE VINOS SINCHI.pdf.
 * Precios del documento original, no de TheFork. Sujetos a cambios.
 */
export const sinchiMenu: RestaurantMenuSection[] = [
  {
    id: 'entrantes',
    title: 'Entrantes',
    groups: [{
      items: [
        item('Pulpo al olivo', '20 €', 'Pulpo con salsa de aceitunas peruanas, aguacate y tomates cherry.'),
        item('Yuquitas huancaína', '8 €', 'Yuca frita acompañada de salsa huancaína.'),
        item('Camarones crocantes (5 unidades)', '14 €', 'Camarones empanados en panko, fritos y acompañados de salsa de maracuyá.'),
        item('Empanadas de camarón (4 unidades)', '15 €', 'Empanadas con camarón y salsa nikkei agridulce.'),
      ],
    }],
  },
  {
    id: 'ceviches-tiraditos',
    title: 'Ceviches y tiraditos',
    introduction: 'Pescados y mariscos marinados y preparados según distintas recetas peruanas.',
    groups: [{
      items: [
        item('Trío de ceviches', '38 €', 'Clásico, ají amarillo y atún nikkei.'),
        item('Ceviche clásico', '22 €', 'Pescado blanco, cebolla morada, maíz cancha, choclo, camote y leche de tigre clásica.'),
        item('Ceviche del barrio', '24 €', 'Pescado blanco, pulpo, camarón, calamar, maíz y camote en leche de tigre clásica.'),
        item('Ceviche al ají amarillo', '22 €', 'Pescado blanco, cebolla morada, maíz cancha, choclo, camote y leche de tigre con ají amarillo.'),
        item('Ceviche de atún clásico', '24 €', 'Atún, cebolla morada, maíz cancha, choclo, camote y leche de tigre clásica.'),
        item('Ceviche de atún nikkei', '24 €', 'Atún con salsa nikkei, aguacate, maíz cancha, cebolla morada y pepino japonés.'),
        item('Tiradito de atún clásico', '22 €', 'Láminas de atún en salsa clásica, con maíz, camote y cebolla morada.'),
        item('Tiradito de atún nikkei', '24 €', 'Láminas de atún en salsa nikkei, con aguacate, cebolla morada y maíz.'),
        item('Tiradito clásico', '20 €', 'Láminas de pescado blanco, maíz cancha, choclo, camote y leche de tigre clásica.'),
        item('Tiradito al ají amarillo', '22 €', 'Láminas de pescado blanco con maíz cancha, choclo y camote.', 'La carta presenta una diferencia en el nombre del ají entre idiomas; consulta la salsa al reservar.'),
      ],
    }],
  },
  {
    id: 'principales',
    title: 'Platos principales',
    groups: [{
      items: [
        item('Lomo saltado', '26 €', 'Lomo de ternera salteado al wok con cebolla morada, tomate, cilantro, soja y vinagre; servido con arroz.'),
        item('Pollo saltado', '20 €', 'Pollo al wok con cebolla morada, tomate, cilantro, soja y vinagre; servido con arroz.'),
        item('Tallarín saltado criollo', '24 €', 'Fideos al wok con lomo de ternera, cebolla morada, tomate, cebollín, soja, salsa de ostras y vinagre.'),
        item('Tallarín saltado de pollo', '20 €', 'Fideos al wok con pollo, cebolla morada, tomate, cebollín, soja, salsa de ostras y vinagre.'),
        item('Arroz chaufa de camarones', '25 €', 'Arroz salteado al wok con cebollín, huevo, camarones y un toque de soja.'),
        item('Arroz chaufa de pollo', '20 €', 'Arroz salteado al wok con cebollín, huevo, pollo y un toque de soja.'),
        item('Arroz con mariscos', '26 €', 'Arroz con camarón, calamar, pulpo, vino blanco y chalaquita peruana.'),
        item('Pulpo anticuchero', '28 €', 'Pulpo a la plancha con salsa anticuchera, maíz peruano, yukitas y salsa huancaína.'),
      ],
    }],
  },
  {
    id: 'acompanamientos',
    title: 'Acompañamientos',
    groups: [{
      items: [
        item('Canchita peruana', '2 €'),
        item('Porción de arroz blanco', '2 €'),
        item('Salsa huancaína o rocoto', '2 €'),
      ],
    }],
    introduction: 'La carta original también indica un coste de 0,50 € por envase para llevar.',
  },
  {
    id: 'postres',
    title: 'Postres',
    groups: [{
      items: [
        item('Cheesecake de lúcuma', '7 €'),
        item('Crema volteada', '5,50 €'),
        item('Alfajores', '6,50 €'),
      ],
    }],
  },
  {
    id: 'bebidas',
    title: 'Bebidas y coctelería',
    groups: [
      {
        title: 'Sin alcohol',
        items: [
          item('Refresco en lata', '3 €'),
          item('Inca Kola', '5,80 €', 'Refresco peruano.'),
          item('Ice tea', '2,50 €'),
          item('Chicha morada', '4,50 €'),
          item('Zumo de frutos rojos', '3,50 €'),
          item('Agua con gas', '2,50 €'),
          item('Agua sin gas', '2 €'),
          item('San Pellegrino con gas', '5,50 €'),
        ],
      },
      {
        title: 'Cervezas y sidra',
        items: [
          item('Cerveza peruana', '5,80 €'),
          item('Sagres o Super Bock', '3 €'),
          item('Somersby Apple', '3,50 €'),
          item('Cerveza sin alcohol', '3 €'),
        ],
      },
      {
        title: 'Pisco y cócteles',
        items: [
          item('Pisco sour tradicional', '10 €'),
          item('Pisco sour de maracuyá', '10 €'),
          item('Pisco sour de frutos rojos', '10 €'),
          item('Pisco macerado (3 meses)', '12 €'),
          item('Chicha sour', '10 €'),
          item('Chilcano tradicional', '9 €'),
          item('Chilcano de sabores', '9,50 €'),
          item('Shot de pisco peruano', '6,50 €'),
        ],
      },
    ],
  },
  {
    id: 'cafeteria',
    title: 'Cafetería',
    groups: [{
      items: [
        item('Café espresso', '1,50 €'),
        item('Café descafeinado', '1,80 €'),
        item('Café peruano', '2 €'),
        item('Café colombiano', '2 €'),
        item('Café con leche', '2,50 €'),
        item('Té', '1,80 €'),
      ],
    }],
  },
  {
    id: 'vinos',
    title: 'Carta de vinos',
    introduction: 'Botellas de 75 cl. Los precios por copa (15 cl) se indican solo en las referencias que aparecen así en la carta de vinos.',
    groups: [
      {
        title: 'Blancos de Portugal',
        items: [
          item('Consciência Branco', '18 €'),
          item('Côtto Sommelier Branco', '20 €', 'Copa 15 cl: 5 €.'),
          item('Planalto Reserva Branco', '23 €', 'Casa Ferreirinha · Douro · 2025.'),
          item('Esporão Colheita Branco', '26 €', 'Alentejo.'),
          item('Luís Pato Vinhas Velhas', '28 €', 'Bairrada.'),
          item('Soalheiro Alvarinho', '29 €', 'Monção e Melgaço · Alvarinho. Copa 15 cl: 7 €.'),
          item('Niepoort Redoma Branco', '42 €', 'Douro.'),
        ],
      },
      {
        title: 'Tintos de Portugal',
        items: [
          item('Côtto Sommelier Tinto', '20 €', 'Copa 15 cl: 5 €.'),
          item('Luís Pato Baga Touriga', '26 €', 'Bairrada.'),
          item('Esporão Colheita Tinto', '26 €', 'Alentejo.'),
          item('Crasto Tinto', '30 €', 'Douro · 2023. Copa 15 cl: 7 €.'),
          item('Vallado Reserva Field Blend', '59 €', 'Douro · 2022.'),
        ],
      },
      {
        title: 'Vinos de Perú · Intipalka',
        items: [
          item('Intipalka Sauvignon Blanc', '34 €', 'Valle de Ica · 2025. Copa 15 cl: 8 €.'),
          item('Intipalka Tannat', '34 €', 'Valle de Ica · 2024.'),
        ],
      },
    ],
  },
];
