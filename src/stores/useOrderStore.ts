import { defineStore } from "pinia";
import { calculateOrder } from "@/api/order";
import type { ReceiptSummary } from "@/types/ReceiptSummary";
import type { OrderRequestItem } from "@/types/OrderRequestItem";

export const useOrderStore = defineStore("order", {
  state: () => ({
    summary: null as ReceiptSummary | null,
    loading: false,
  }),

  actions: {
    async submitOrder(req: OrderRequestItem[]) {
      if (req.length === 0) {
        return;
      }
      
      this.loading = true;

      try {
        this.summary = await calculateOrder(req);
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
});
