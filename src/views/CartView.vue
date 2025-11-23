<template>
  <div class="max-w-3xl mx-auto mt-6">
    <h1 class="text-2xl font-bold mb-4 text-black">Your Cart</h1>

    <!-- EMPTY CART -->
    <div v-if="cart.items.length === 0" class="text-gray-600">Your cart is empty.</div>

    <!-- SUCCESS MESSAGE -->
    <Message v-if="orderPlaced" severity="success" class="my-4"> Order placed! </Message>

    <!-- ERROR -->
    <Message v-if="orderStore.error" severity="error" class="mb-4">
      {{ orderStore.error }}
    </Message>

    <!-- RECEIPT SUMMARY -->
    <div v-if="orderStore.summary">
      <Card class="bg-white text-black">
        <template #title>
          <h2 class="text-2xl font-semibold">Order Summary</h2>
        </template>

        <template #content>
          <div
            v-for="(line, i) in orderStore.summary.lines"
            :key="i"
            class="flex gap-4 p-4 bg-white rounded"
          >
            <div
              class="w-20 h-20 bg-gray-100 rounded overflow-hidden flex justify-center items-center"
            >
              <img :src="productImages[line.productId]" class="w-full h-full object-cover" />
            </div>

            <div class="flex-1">
              <h3 class="text-lg font-semibold">{{ line.item }}</h3>

              <h4 class="text-sm text-gray-600 mt-1">
                <span v-if="line.quantity">Quantity: {{ line.quantity }}</span>
                <span v-if="line.weightInGrams">Weight: {{ line.weightInGrams }}g</span>
              </h4>

              <p class="text-sm">Base: €{{ line.basePrice.toFixed(2) }}</p>
              <p v-if="line.discount > 0" class="text-sm text-green-600">
                Discount: -€{{ line.discount.toFixed(2) }}
              </p>
              <p class="font-bold">Final: €{{ line.finalPrice.toFixed(2) }}</p>
            </div>
          </div>

          <div class="text-right text-xl font-bold mt-4">
            Total: €{{ orderStore.summary.total.toFixed(2) }}
          </div>

          <div v-if="orderStore.summary.warnings.length" class="mt-4 flex flex-col gap-2">
            <Message severity="error" v-for="(w, i) in orderStore.summary.warnings" :key="i">
              {{ w }}
            </Message>
          </div>
        </template>
      </Card>
    </div>

    <!-- PLACE ORDER BUTTON -->
    <Button
      v-if="
        cart.items.length > 0 &&
        orderStore.summary &&
        orderStore.summary.lines.length > 0 &&
        !orderStore.loading &&
        !orderPlaced
      "
      label="Place order"
      class="mt-5 w-full bg-yellow-400 text-black border-none hover:bg-yellow-500 mb-4"
      @click="placeOrder"
    />
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import Message from 'primevue/message'

import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import { useOrderStore } from '@/stores/useOrderStore'
import { cartToRequest } from '@/converters/cartToRequest'
import productImages from '@/assets/productImages'

const cart = useCartStore()
const orderStore = useOrderStore()

const orderPlaced = ref(false)

onMounted(() => {
  const req = cartToRequest(cart.items)
  orderStore.submitOrder(req)
})

function placeOrder() {
  orderPlaced.value = true
  cart.items = []
}
</script>
