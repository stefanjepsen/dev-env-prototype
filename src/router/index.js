import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/FranksSurprise',
    name: 'FranksSurprise',
    component: () => import('src/views/FranksSurprise.vue')
  },
  {
    path: '/PiasSurprise',
    name: 'PiasSurprise',
    component: () => import('src/views/PiasSurprise.vue')
  },
  {
    path: '/UllasSurprise',
    name: 'UllasSurprise',
    component: () => import('src/views/UllasSurprise.vue')
  },
  
 
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Register.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
