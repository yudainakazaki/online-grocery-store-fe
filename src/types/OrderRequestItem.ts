export type OrderRequestItem =
  | {
      productId: string;
      type: "BREAD";
      quantity: number;
      ageInDays: number;
    }
  | {
      productId: string;
      type: "VEGETABLE";
      weightInGrams: number;
    }
  | {
      productId: string;
      type: "BEER";
      quantity: number;
      country: string;
    };
