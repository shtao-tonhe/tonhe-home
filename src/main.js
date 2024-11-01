
import './assets/css/system.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import systemCommon from './mixin/index.js'
console.log('router--', router)

// app.component('FooterProgress', FooterProgress)

const app = createApp(App)
app.mixin(systemCommon)
app.use(createPinia())
app.use(router)
app.mount('#app')

