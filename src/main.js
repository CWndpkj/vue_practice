import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import '@/api/mock'
import api from '@/api/api'
import config from '@/config'
import { useAllDataStore } from '@/stores/index'
import { router, setupRoutes } from "@/router"
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.config.globalProperties.$api = api
app.config.globalProperties.$config = config
app.use(ElementPlus)
const store = useAllDataStore()
store.loadFromLocalStorage()
//setupRoutes需要放到app.use(router)之前
setupRoutes()
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
