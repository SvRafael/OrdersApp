import { createRouter, createWebHistory } from 'vue-router'
import Orders from '../components/Orders.vue'

const routes = [
//   { path: '/', component: Home },
  { path: '/', component: Orders },
//   { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router