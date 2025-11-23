<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="app-container min-h-screen flex flex-col">
    <nav class="p-3 sticky top-0 z-10">
      <Toolbar style="--p-toolbar-background: white; border: none; padding: 1rem; opacity: 0.9">
        <template #start>
          <div class="flex items-center gap-5">
            <a href="/home">
              <img src="/supermarket-svgrepo-com.svg" alt="store icon" class="h-9 w-9" /> </a
            >]
            <RouterLink to="/home" class="nav-link">Home</RouterLink>
            <RouterLink to="/prices" class="nav-link">Prices</RouterLink>
            <RouterLink to="/rules" class="nav-link">Rules</RouterLink>
          </div>
        </template>

        <template #end>
          <div class="relative cursor-pointer" @click="$router.push('/cart')">
            <i class="pi pi-shopping-cart text-black text-3xl"></i>
            <Badge
              v-if="itemCount > 0"
              :value="itemCount"
              class="absolute -top-2 -right-3 bg-red-500 text-white"
              severity="danger"
              rounded
            />
          </div>
        </template>
      </Toolbar>
    </nav>

    <main class="flex-1 p-4">
      <DefaultLayout>
        <RouterView />
      </DefaultLayout>
    </main>

    <footer class="mt-10 py-6 text-center text-gray-600 text-sm border-t border-gray-300">
      © {{ new Date().getFullYear() }} Online Grocery Store desinged by Yudai.
    </footer>
  </div>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import DefaultLayout from './layout/DefaultLayout.vue'
import { useCartStore } from '@/stores/useCartStore'
import { computed, watch } from 'vue'

const cart = useCartStore()
const itemCount = computed(() => cart.totalItemCount)

// Watch the whole cart
watch(
  () => cart.items,
  (newVal) => {
    console.log('🛒 Cart updated:', newVal)
  },
  { deep: true },
)
</script>

<style>
.app-container {
  min-height: 100vh;
  background: #f5f5f5;
}

.nav-link {
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

.nav-link:hover {
  opacity: 0.7;
}
</style>
