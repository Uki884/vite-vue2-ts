import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import config from '@/config'
// import Home from '../App.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: config.baseUrl,
  routes
})

export default router
