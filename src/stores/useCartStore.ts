import { defineStore } from 'pinia'
import type { Product } from '@/types/Product'

interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItemCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),

    getQuantity: (state) => (productId: string) => {
      const found = state.items.find((i) => i.product.productId === productId)
      return found ? found.quantity : 0
    },
    getItems: (state) => state.items,
  },

  actions: {
    addProduct(product: Product) {
      const found = this.items.find((i) => i.product.productId === product.productId)
      if (found) {
        found.quantity++
      } else {
        this.items.push({ product, quantity: 1 })
      }
    },

    removeProduct(productId: string) {
      const found = this.items.find((i) => i.product.productId === productId)
      if (!found) return

      if (found.quantity > 1) {
        found.quantity--
      } else {
        // remove item completely
        this.items = this.items.filter((i) => i.product.productId !== productId)
      }
    },
  },
})
