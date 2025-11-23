import api from '@/api/client'
import type { OrderRequestItem } from '@/types/OrderRequestItem'
import type { ReceiptSummary } from '@/types/ReceiptSummary'

export async function calculateOrder(items: OrderRequestItem[]) {
  const res = await api.post<ReceiptSummary>('/orders/calculate', { items })
  return res.data
}
