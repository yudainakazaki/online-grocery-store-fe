import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, vi } from 'vitest'
import ProductCard from '@/components/ProductCard.vue'
import { useCartStore } from '@/stores/useCartStore'
import type { Product } from '@/types/Product'

describe('ProductCard.vue', () => {
  const product: Product = {
    productId: 'p1',
    name: 'Test Product',
    type: 'BREAD',
    price: 1,
    unit: 'per item',
    image: '',
    ageInDays: 1,
  }

  function mountWithStore(initialCart: any = {}) {
    return mount(ProductCard, {
      props: { product },
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              cart: initialCart,
            },
            createSpy: vi.fn,
          }),
        ],
      },
    })
  }

  it('shows Add to Cart when quantity = 0', () => {
    const wrapper = mountWithStore()
    expect(wrapper.text()).toContain('Add to Cart')
  })

  it('increments cart when Add to Cart clicked', async () => {
    const wrapper = mount(ProductCard, {
      props: { product },
      global: {
        plugins: [
          createTestingPinia({
            initialState: { cart: { items: [] } },
            stubActions: false, // <-- allow real action to run
            createSpy: vi.fn,
          }),
        ],
      },
    })

    const store = useCartStore()

    await wrapper.find('button').trigger('click')

    expect(store.items.length).toBe(1)
    expect(store?.items[0]?.quantity).toBe(1)
  })

  it('shows +/- when quantity > 0', async () => {
    const wrapper = mountWithStore({
      items: [{ product, quantity: 2 }],
    })

    // Icons appear, not text "+"
    expect(wrapper.find('.pi-plus').exists()).toBe(true)
    expect(wrapper.find('.pi-minus').exists()).toBe(true)

    // Quantity should show
    expect(wrapper.text()).toContain('2')
  })
})
