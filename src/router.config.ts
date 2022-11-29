import * as VueRouter from 'vue-router'

import Home from './pages/Index.vue'
import Intro from './pages/Intro.vue'
import Login from './pages/login/Index.vue'
import Register from './pages/register/Index.vue'
import ForgotPassword from './pages/forgot-password/Index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/intro', component: Intro },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
