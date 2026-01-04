const PRICE_IDS = {
  LISBOA_1_DIA: "price_1SlRshQvLqfRMzHmVNSqISFE",
  LISBOA_2_DIAS: "price_1SlRtWQvLqfRMzHmRqmUq18V",
  LISBOA_3_DIAS: "price_1SlRtnQvLqfRMzHm7pAGqjW2",
  LISBOA_FULL_WEEK: "price_1SlRuRQvLqfRMzHmFpSC7938",
  LISBOA_ROMANTICA: "price_1SlS0rQvLqfRMzHmfOG2nzMY",
  LISBOA_FAMILIAR: "price_1SlSLWQvLqfRMzHm0QCfDxSw",
  LISBOA_FOTOGRAFIA: "price_1SlS2SQvLqfRMzHmU9qH2ZSG",
};

export const STRIPE_PRODUCTS = {
  "lisboa-1-dia-lo-esencial": {
    priceId: PRICE_IDS.LISBOA_1_DIA,
    name: "Lisboa 1 Día - Lo Esencial",
    price: 5.99,
  },
  "lisboa-2-dias-completo": {
    priceId: PRICE_IDS.LISBOA_2_DIAS,
    name: "Lisboa 2 Días - Completo",
    price: 8.99,
  },
  "lisboa-3-dias-premium": {
    priceId: PRICE_IDS.LISBOA_3_DIAS,
    name: "Lisboa + Alrededores",
    price: 12.99,
  },
  "lisboa-full-week": {
    priceId: PRICE_IDS.LISBOA_FULL_WEEK,
    name: "Lisboa Full Week",
    price: 19.99,
  },
  "lisboa-romantica": {
    priceId: PRICE_IDS.LISBOA_ROMANTICA,
    name: "Lisboa Romántica",
    price: 9.99,
  },
  "lisboa-familiar": {
    priceId: PRICE_IDS.LISBOA_FAMILIAR,
    name: "Lisboa Familiar",
    price: 9.99,
  },
  "lisboa-fotografia": {
    priceId: PRICE_IDS.LISBOA_FOTOGRAFIA,
    name: "Lisboa Fotografía",
    price: 9.99,
  },
} as const;

export type ProductId = keyof typeof STRIPE_PRODUCTS;
