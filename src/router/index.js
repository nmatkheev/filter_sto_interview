import Home from '@/components/Home'
import NotFound from '@/components/NotFound'

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})