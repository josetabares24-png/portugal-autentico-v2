const PRICE_IDS = {
  LISBOA_FAMILIAR: "price_1SlSLWQvLqfRMzHm0QCfDxSw",
  LISBOA_FOTOGRAFIA: "price_1SlS2SQvLqfRMzHmU9qH2ZSG",
};

export const STRIPE_PRODUCTS = {
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
