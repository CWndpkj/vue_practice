import { createApp } from 'vue'
import router from "@/router"
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import '@/api/mock'
import api from '@/api/api'
import config from '@/config'
const app = createApp(App)
const pinia = createPinia()
app.config.globalProperties.$api = api
app.config.globalProperties.$config = config
app.use(router)
app.use(ElementPlus)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
