import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

const nameOffApp = createApp(App);
nameOffApp.use(router);
nameOffApp.use(store)

nameOffApp.mount('#app')
