// tests/unit/useCartStore.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useCartStore } from '@/stores/useCartStore'
import type { Product } from '@/types/Product'

const mockProduct = (id: string) =>
  ({
    productId: id,
    name: 'Test Product',
    type: 'BREAD',
    price: 1,
    image: '',
    unit: 'per item',
    ageInDays: 1,
  }) as Product

describe('useCartStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds product to cart', () => {
    const store = useCartStore()
    store.addProduct(mockProduct('p1'))

    expect(store.items.length).toBe(1)
    expect(store?.items[0]?.quantity).toBe(1)
  })

  it('increments quantity if product exists', () => {
    const store = useCartStore()
    const p = mockProduct('p1')

    store.addProduct(p)
    store.addProduct(p)

    expect(store?.items[0]?.quantity).toBe(2)
  })

  it('removes product quantity', () => {
    const store = useCartStore()
    const p = mockProduct('p1')

    store.addProduct(p)
    store.addProduct(p)

    store.removeProduct('p1')

    expect(store?.items[0]?.quantity).toBe(1)
  })

  it('removes product fully when quantity hits zero', () => {
    const store = useCartStore()
    const p = mockProduct('p1')

    store.addProduct(p)
    store.removeProduct('p1')

    expect(store.items.length).toBe(0)
  })

  it('getQuantity returns correct number', () => {
    const store = useCartStore()
    const p = mockProduct('p1')

    store.addProduct(p)
    store.addProduct(p)

    expect(store.getQuantity('p1')).toBe(2)
  })
})
