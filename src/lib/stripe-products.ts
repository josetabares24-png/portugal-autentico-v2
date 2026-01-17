export const STRIPE_PRODUCTS = {
  "lisboa-1-dia-lo-esencial": {
    priceId: "price_1SIRshQvLqfRMzHmVNSqlSFE",
    name: "Lisboa 1 Día - Lo Esencial",
    price: 5.99,
  },
  "lisboa-2-dias-completo": {
    priceId: "price_1SIRtWQvLqfRMzHmRqmUq18V",
    name: "Lisboa 2 Días - Completo",
    price: 8.99,
  },
  "lisboa-3-dias-premium": {
    priceId: "price_1SIRtnQvLqfRMzHm7pAGqjW2",
    name: "Lisboa + Alrededores",
    price: 12.99,
  },
  "lisboa-full-week": {
    priceId: "price_1SIRuRQvLqfRMzHmFpSC7938",
    name: "Lisboa Full Week",
    price: 19.99,
  },
  "lisboa-romantica": {
    priceId: "price_1SIS0vQvLqfRMzHmfOG2nzMY",
    name: "Lisboa Romántica",
    price: 9.99,
  },
  "lisboa-familiar": {
    priceId: "price_1SISLWQvLqfRMzHm0QCfDxSw",
    name: "Lisboa Familiar",
    price: 9.99,
  },
  "lisboa-fotografia": {
    priceId: "price_1SIS2SQvLqfRMzHmU9qH2ZSG",
    name: "Lisboa Fotografía",
    price: 9.99,
  },
} as const;

export type ProductId = keyof typeof STRIPE_PRODUCTS;
