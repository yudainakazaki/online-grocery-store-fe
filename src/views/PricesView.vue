<template>
  <div>
    <AppLoader v-if="pricesStore.loading" />
    <div v-else class="max-w-2xl mx-auto mt-8">
      <h1 class="text-3xl font-bold mb-4 text-black">Current Prices</h1>

      <DataTable :value="priceRows" class="rounded-lg overflow-hidden">
        <Column field="name" header="Item" class="font-semibold" />
        <Column field="price" header="Price (€)" />
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLoader from '../components/AppLoader.vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { computed, onMounted } from 'vue'
import { usePricesStore } from '@/stores/usePricesStore'

const pricesStore = usePricesStore()

onMounted(() => {
  pricesStore.loadPrices()
})

const prices = computed(() => pricesStore.getPrices)

// Convert backend object → table rows
const priceRows = computed(() => {
  if (!prices.value) return []

  return [
    { name: 'Bread (per item)', price: prices.value.breadPrice },
    { name: 'Vegetables (per 100g)', price: prices.value.vegetablePricePer100g },
    { name: 'Belgian Beer (per bottle)', price: prices.value.belgiumBeerPricePerBottle },
    { name: 'Dutch Beer (per bottle)', price: prices.value.dutchBeerPricePerBottle },
    { name: 'German Beer (per bottle)', price: prices.value.germanBeerPricePerBottle },
    { name: 'Belgian Beer Pack (6-pack)', price: prices.value.belgiumBeerPackPrice },
    { name: 'Dutch Beer Pack (6-pack)', price: prices.value.dutchBeerPackPrice },
    { name: 'German Beer Pack (6-pack)', price: prices.value.germanBeerPackPrice },
  ]
})
</script>

<style>
.p-datatable {
  background-color: #ffffff;
  color: #222;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.p-datatable .p-datatable-thead > tr > th {
  background-color: #f8fafc;
  color: #374151;
  font-weight: 600;
  border-bottom: 1px solid #e5e7eb;
}

.p-datatable .p-datatable-tbody > tr > td {
  background-color: #ffffff;
  color: #111827;
  border-bottom: 1px solid #f1f5f9;
}
</style>
