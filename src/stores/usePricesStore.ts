import { defineStore } from "pinia";
import api from "@/api/client";

export const usePricesStore = defineStore("prices", {
  state: () => ({
    prices: null,
    loading: false,
  }),

  getters: {
    getPrices: (state) => state.prices,
  },

  actions: {
    async loadPrices() {
      if (this.prices) return; // already loaded

      this.loading = true;

      try {
        const res = await api.get("/prices");
        this.prices = res.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    }
  }
});
