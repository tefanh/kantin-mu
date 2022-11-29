import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Router
import { router } from './router.config'

// Pinia
import { createPinia } from 'pinia'

// Vuetify
import vuetify from './vuetify.config'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// global components
import Nav from './components/nav/Index.vue'
import Logo from './components/logo/Index.vue'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .component('Logo', Logo)
  .component('Nav', Nav)
  .mount('#app')
