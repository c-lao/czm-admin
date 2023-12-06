import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})
const setupRouter = (app: App) => {
  app.use(router)
}

router.beforeEach((to, from, next) => {
  next()
})
export { setupRouter }
export default router
