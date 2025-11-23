// tests/unit/useOrderStore.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useOrderStore } from '@/stores/useOrderStore'
import { calculateOrder } from '@/api/order'

vi.mock('@/api/order', () => ({
  calculateOrder: vi.fn(),
}))

describe('useOrderStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('loads summary on successful order', async () => {
    calculateOrder.mockResolvedValue({
      total: 10,
      lines: [],
    })

    const store = useOrderStore()
    await store.submitOrder([{ productId: 'p1', type: 'BREAD', quantity: 1 }])

    expect(store.summary?.total).toBe(10)
  })

  it('sets loading state correctly', async () => {
    calculateOrder.mockResolvedValue({ total: 5, lines: [] })

    const store = useOrderStore()

    const promise = store.submitOrder([{ productId: 'p1', type: 'BREAD', quantity: 1 }])
    expect(store.loading).toBe(true)

    await promise
    expect(store.loading).toBe(false)
  })
})
