import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import setupPlugins from './plugins/index'
import '@/plugins/iconfont/iconfont.css'
const bootstrap = async () => {
  const app = createApp(App)
  app.use(createPinia())

  setupRouter(app)

  setupPlugins(app)

  await router.isReady()
  app.mount('#app')
}
bootstrap()
