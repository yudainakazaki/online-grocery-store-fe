import api from "@/api/client";
import type { OrderRequestItem } from "@/types/OrderRequestItem";
import type { ReceiptSummary } from "@/types/ReceiptSummary";

export async function calculateOrder(items: OrderRequestItem[]) {
  console.log("Calculating order with items:", items);
  const res = await api.post<ReceiptSummary>("/orders/calculate", { items });
  console.log("Order calculation response:", res.data);
  return res.data;
}
