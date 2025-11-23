<template>
  <Card class="bg-white text-black flex flex-col">

    <!-- IMAGE SLOT -->
    <template #header>
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-56 object-contain bg-white rounded-t-md py-4"
      />
    </template>

    <template #title>
      <span class="text-lg font-semibold text-black">{{ product.name }}</span>
    </template>

    <template #subtitle>
      <span class="text-sm text-gray-600">
        {{ product.unit }} — €{{ product.price.toFixed(2) }}
      </span>
    </template>

    <template #content>
      <p v-if="product.country" class="text-sm text-gray-500">
        Country: {{ product.country }}
      </p>
    </template>

    <template #footer>
			<div class="mt-auto pt-3">
				<div v-if="quantity === 0">
					<Button
						label="Add to Cart"
						icon="pi pi-shopping-cart"
						class="w-full bg-yellow-300 text-black border-none hover:bg-yellow-400"
						@click="addToCart"
					/>
				</div>

				<!-- Quantity controls -->
				<div v-else class="flex items-center justify-between">
					<Button
						icon="pi pi-minus"
						class="p-button-rounded p-button-outlined bg-white text-black hover:bg-gray-100 border-black"
						@click="decrease"
					/>

					<span class="font-medium text-lg text-black">{{ quantity }}</span>

					<Button
						icon="pi pi-plus"
						class="p-button-rounded p-button-outlined bg-white text-black hover:bg-gray-100 border-black"
						@click="increase"
					/>
				</div>
			</div>
    </template>

  </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import { computed } from "vue";
import { useCartStore } from "@/stores/useCartStore";

import type { Product } from "@/types/Product";

const props = defineProps<{
  product: Product;
}>();

const cart = useCartStore();

const quantity = computed(() => cart.getQuantity(props.product.productId));

function addToCart() {
  cart.addProduct(props.product);
}
function increase() {
  cart.addProduct(props.product);
}
function decrease() {
  cart.removeProduct(props.product.productId);
}
</script>

<style scoped>
.p-card-body {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.p-card-footer {
  margin-top: auto;
}
</style>
