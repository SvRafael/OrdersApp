import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(PrimeVue)
app.use(router)
app.mount('#app')

