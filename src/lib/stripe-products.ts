export const STRIPE_PRODUCTS = {
  "lisboa-1-dia-lo-esencial": {
    priceId: "price_1SrOVhJglPw4zh36W8Oqg3N4",
    name: "Guía Lisboa Express: Lo Mejor en 1 Día (Sin Perder Tiempo)",
    price: 1.99,
  },
  "lisboa-2-dias-completo": {
    priceId: "price_1SrOViJglPw4zh36xVIRenP4",
    name: "Guía Lisboa Fin de Semana: 2 Días Perfectos (La Más Vendida)",
    price: 2.99,
  },
  "lisboa-3-dias-premium": {
    priceId: "price_1SrOViJglPw4zh36F5rDrqoH",
    name: "Guía Lisboa + Sintra: 3 Días de Experiencia Completa",
    price: 3.99,
  },
  "lisboa-full-week": {
    priceId: "price_1SrOVjJglPw4zh36FT8kHxwb",
    name: "Guía Lisboa 7 Días: Semana Completa + Alrededores (Sintra, Cascais, Óbidos)",
    price: 5.99,
  },
  "lisboa-romantica": {
    priceId: "price_1SrOVkJglPw4zh3610LZCAEu",
    name: "Guía Lisboa Romántica: Para Parejas y Lunas de Miel (Incluye Spots para Propuestas)",
    price: 2.99,
  },
  "lisboa-familiar": {
    priceId: "price_1SrOVkJglPw4zh36apTBywoj",
    name: "Guía Lisboa Familiar: Perfecta para Viajar con Niños (Sin Estrés, Todo Planificado)",
    price: 2.99,
  },
  "lisboa-fotografia": {
    priceId: "price_1SrOVlJglPw4zh36JNMf0adm",
    name: "Guía Lisboa Instagram: 50+ Spots para Fotos Perfectas (Fotógrafos e Influencers)",
    price: 2.99,
  },
} as const;

export type ProductId = keyof typeof STRIPE_PRODUCTS;
