<template>
  <div>
    <AppLoader v-if="productStore.loading" />
    <div v-else class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ProductCard v-for="product in products" :product="product" :key="product.productId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLoader from '../components/AppLoader.vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '@/stores/useProductStore'
import { onMounted, computed } from 'vue'

const productStore = useProductStore()
const products = computed(() => productStore.getProducts)

onMounted(() => {
  productStore.loadProductsIfEmpty()
})
</script>
