import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/Main.vue"),
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/User.vue')
      },
      {
        path: '/good',
        name: 'good',
        component: () => import('@/views/Good.vue')
      },
      {
        path: '/other1',
        name: 'other1',
        component: () => import('@/views/Other1.vue')
      },
      {
        path: '/other2',
        name: 'other2',
        component: () => import('@/views/Other2.vue')
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
