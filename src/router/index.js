import Home from '@/components/Home'
import AddTask from '@/components/AddTask'
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
  },
  { 
    path: '/AddTask', 
    name: 'AddTask', 
    component: AddTask 
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})