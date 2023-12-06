import type { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'admin',
    component: () => import('@/views/admin/index.vue'),
    meta: {
      author: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
] as RouteRecordRaw[]

export default routes
