import { defineStore } from 'pinia'
import api from '@/api/client'

export const useRulesStore = defineStore('rules', {
  state: () => ({
    rules: null,
    loading: false,
  }),

  getters: {
    getRules: (state) => state.rules,
  },

  actions: {
    async loadRules() {
      if (this.rules) return

      this.loading = true
      try {
        const res = await api.get('/rules')
        this.rules = res.data
      } finally {
        this.loading = false
      }
    },
  },
})
