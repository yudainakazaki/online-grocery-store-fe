/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'

import PrimeVue from 'primevue/config'
import Lara from '@primeuix/themes/lara'

import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
})

// Register Menubar
import Badge from 'primevue/badge'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Message from 'primevue/message'
import ProgressSpinner from 'primevue/progressspinner'
import Skeleton from 'primevue/skeleton'
import Toolbar from 'primevue/toolbar'

app.component('Badge', Badge)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Message', Message)
app.component('ProgressSpinner', ProgressSpinner)
app.component('Skeleton', Skeleton)
app.component('Toolbar', Toolbar)

app.mount('#app')
