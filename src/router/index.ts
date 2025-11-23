import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import PricesView from '../views/PricesView.vue'
import RulesView from '../views/RulesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/prices',
      name: 'prices',
      component: PricesView,
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView,
    },
    // Redirect unknown paths to home
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home',
    },
  ],
})

export default router
