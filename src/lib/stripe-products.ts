export const STRIPE_PRODUCTS = {
  "lisboa-1-dia-lo-esencial": {
    priceId: "price_1SrROYJglPw4zh36iR17AIYz",
    name: "Guía Lisboa Express: Lo Mejor en 1 Día (Sin Perder Tiempo)",
    price: 1.99,
  },
  "lisboa-2-dias-completo": {
    priceId: "price_1SrROZJglPw4zh36UyYmizEN",
    name: "Guía Lisboa Fin de Semana: 2 Días Perfectos (La Más Vendida)",
    price: 2.99,
  },
  "lisboa-3-dias-premium": {
    priceId: "price_1SrROaJglPw4zh36Duif1EGb",
    name: "Guía Lisboa + Sintra: 3 Días de Experiencia Completa",
    price: 3.99,
  },
  "lisboa-full-week": {
    priceId: "price_1SrRObJglPw4zh363xyTNsx9",
    name: "Guía Lisboa 7 Días: Semana Completa + Alrededores (Sintra, Cascais, Óbidos)",
    price: 5.99,
  },
  "lisboa-romantica": {
    priceId: "price_1SrRObJglPw4zh36HNrZTa8y",
    name: "Guía Lisboa Romántica: Para Parejas y Lunas de Miel (Incluye Spots para Propuestas)",
    price: 2.99,
  },
  "lisboa-familiar": {
    priceId: "price_1SrROcJglPw4zh36gHqlXI4c",
    name: "Guía Lisboa Familiar: Perfecta para Viajar con Niños (Sin Estrés, Todo Planificado)",
    price: 2.99,
  },
  "lisboa-fotografia": {
    priceId: "price_1SrROdJglPw4zh36n2PXXbwL",
    name: "Guía Lisboa Instagram: 50+ Spots para Fotos Perfectas (Fotógrafos e Influencers)",
    price: 2.99,
  },
} as const;

export type ProductId = keyof typeof STRIPE_PRODUCTS;
