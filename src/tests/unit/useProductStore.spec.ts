import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useProductStore } from '@/stores/useProductStore'
import api from '@/api/client'

vi.mock('@/api/client', () => ({
  default: {
    get: vi.fn(),
  },
}))

const mockProduct = {
  productId: 'p1',
  name: 'Test',
  type: 'BREAD',
  unit: 'per item',
  price: 1,
  image: '',
  ageInDays: 1,
}

describe('useProductStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    api.get.mockReset()
  })

  it('fetches products if store is empty', async () => {
    api.get.mockResolvedValue({ data: [mockProduct] })

    const store = useProductStore()
    await store.loadProductsIfEmpty()

    expect(store.products.length).toBe(1)
  })

  it('does not fetch if products already loaded', async () => {
    const store = useProductStore()
    store.products = [mockProduct]

    await store.loadProductsIfEmpty()

    expect(api.get).not.toHaveBeenCalled()
  })
})
