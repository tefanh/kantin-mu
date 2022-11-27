import * as VueRouter from 'vue-router'

import home from './pages/index.vue'
import about from './pages/about.vue'

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
