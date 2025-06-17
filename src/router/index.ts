import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/products',
    component: Products
  },
  {
    path: '/product/:id',
    component: ProductDetail
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/',
    redirect: '/products'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
