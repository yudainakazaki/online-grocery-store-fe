import type { OrderRequestItem } from '@/types/OrderRequestItem'
import type { Product } from '@/types/Product'
import type { CartItem } from '@/types/CartItem'

export function cartToRequest(items: CartItem[]): OrderRequestItem[] {
  return items.map((ci) => {
    const p: Product = ci.product

    if (p.type === 'BREAD') {
      return {
        productId: p.productId,
        type: 'BREAD',
        quantity: ci.quantity,
        ageInDays: p.ageInDays ?? 1,
      }
    }

    if (p.type === 'VEGETABLE') {
      return {
        productId: p.productId,
        type: 'VEGETABLE',
        weightInGrams: (ci.quantity || 0) * 100,
      }
    }

    if (p.type === 'BEER') {
      return {
        productId: p.productId,
        type: 'BEER',
        quantity: ci.quantity,
        country: p.country ?? '',
      }
    }

    throw new Error(`Unsupported item type: ${p.type}`)
  })
}
