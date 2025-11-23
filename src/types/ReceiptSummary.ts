export interface ReceiptLine {
  productId: string;
  item: string;
  basePrice: number;
  discount: number;
  finalPrice: number;
  quantity: number | null;
  weightInGrams: number | null;
}

export interface ReceiptSummary {
  lines: ReceiptLine[];
  total: number;
  warnings: string[];
}
