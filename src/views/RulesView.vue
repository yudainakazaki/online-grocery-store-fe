<template>
  <div>
    <AppLoader v-if="rulesStore.loading" />
    <div v-else class="max-w-3xl mx-auto mt-8">
      <h1 class="text-3xl font-bold mb-6 text-black">Discount Rules</h1>

      <!-- Bread Rules -->
      <h2 class="text-xl font-semibold mb-2 text-black">Bread Rules</h2>
      <DataTable :value="breadRows" class="rounded-lg overflow-hidden mb-6">
        <Column field="rule" header="Rule" />
      </DataTable>

      <!-- Vegetable Rules -->
      <h2 class="text-xl font-semibold mb-2 text-black">Vegetable Rules</h2>
      <DataTable :value="vegetableRows" class="rounded-lg overflow-hidden mb-6">
        <Column field="rule" header="Rule" />
      </DataTable>

      <!-- Beer Rules -->
      <h2 class="text-xl font-semibold mb-2 text-black">Beer Rules</h2>
      <DataTable :value="beerRows" class="rounded-lg overflow-hidden">
        <Column field="rule" header="Rule" />
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLoader from '../components/AppLoader.vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { computed, onMounted } from 'vue'
import { useRulesStore } from '@/stores/useRulesStore'

const rulesStore = useRulesStore()

onMounted(() => {
  rulesStore.loadRules()
})

const rules = computed(() => rulesStore.getRules)

const breadRows = computed(() => rules.value?.breadRules?.map((r) => ({ rule: r })) ?? [])

const vegetableRows = computed(() => rules.value?.vegetableRules?.map((r) => ({ rule: r })) ?? [])

const beerRows = computed(() => rules.value?.beerRules?.map((r) => ({ rule: r })) ?? [])
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
}

.p-datatable .p-datatable-tbody > tr > td {
  background-color: #ffffff;
  color: #111827;
  border-bottom: 1px solid #f1f5f9;
}
</style>
