import * as VueRouter from 'vue-router'

import home from './pages/index.vue'

const routes = [{ path: '/', component: home }]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
