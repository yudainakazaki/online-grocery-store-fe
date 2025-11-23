import { defineStore } from "pinia";
import api from "@/api/client";
import type { Product } from "@/types/Product";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
    loading: false,
  }),

  getters: {
    getProducts: (state) => state.products,
    isEmpty: (state) => state.products.length === 0,
  },

  actions: {
    async loadProductsIfEmpty() {
      if (!this.isEmpty) return;

      this.loading = true;
      try {
        const res = await api.get("/items");
        this.products = res.data;
        console.log("Loaded products:", this.products);
      } finally {
        this.loading = false;
      }
    }
  },
});
