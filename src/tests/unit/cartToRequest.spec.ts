// tests/unit/cartToRequest.spec.ts
import { describe, it, expect } from 'vitest'
import { cartToRequest } from '@/converters/cartToRequest'
import type { CartItem } from '@/types/CartItem'

const mockBread = () =>
  ({
    product: {
      productId: 'b1',
      type: 'BREAD',
      ageInDays: 3,
    },
    quantity: 2,
  }) as CartItem

const mockVeg = () =>
  ({
    product: {
      productId: 'v1',
      type: 'VEGETABLE',
    },
    quantity: 3,
  }) as CartItem

const mockBeer = () =>
  ({
    product: {
      productId: 'be1',
      type: 'BEER',
      country: 'BELGIUM',
    },
    quantity: 6,
  }) as CartItem

describe('cartToRequest', () => {
  it('maps bread correctly', () => {
    const req = cartToRequest([mockBread()])
    expect(req[0]).toEqual({
      productId: 'b1',
      type: 'BREAD',
      quantity: 2,
      ageInDays: 3,
    })
  })

  it('maps vegetables correctly', () => {
    const req = cartToRequest([mockVeg()])
    expect(req[0]).toEqual({
      productId: 'v1',
      type: 'VEGETABLE',
      weightInGrams: 300,
    })
  })

  it('maps beer correctly', () => {
    const req = cartToRequest([mockBeer()])
    expect(req[0]).toEqual({
      productId: 'be1',
      type: 'BEER',
      quantity: 6,
      country: 'BELGIUM',
    })
  })
})
