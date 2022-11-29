import * as VueRouter from 'vue-router'

import Home from './pages/Index.vue'
import Intro from './pages/Intro.vue'
import Login from './pages/login/Index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/intro', component: Intro },
  { path: '/login', component: Login },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
