export interface Product {
  productId: string
  name: string
  type: 'BREAD' | 'VEGETABLE' | 'BEER'
  image: string
  price: number
  unit: string
  ageInDays?: number
  weightInGrams?: number
  country?: string
}
