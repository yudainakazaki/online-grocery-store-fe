import type { Product } from './Product'

export interface CartItem {
  product: Product
  quantity: number

  // Only used for vegetables (grams input UI)
  weightInGrams?: number
}
