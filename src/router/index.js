import { createRouter, createWebHashHistory } from 'vue-router'
import { useAllDataStore } from '../stores'
import { compose } from 'element-plus/es/components/table/src/util'
const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/Main.vue"),
    redirect: "/login",
    children: [
      // 以下路由由setupRoutes函数动态添加
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: () => import('@/views/Home.vue')
      // },
      // {
      //   path: '/user',
      //   name: 'user',
      //   component: () => import('@/views/User.vue')
      // },
      // {
      //   path: '/good',
      //   name: 'good',
      //   component: () => import('@/views/Good.vue')
      // },
      // {
      //   path: '/other1',
      //   name: 'other1',
      //   component: () => import('@/views/Other1.vue')
      // },
      // {
      //   path: '/other2',
      //   name: 'other2',
      //   component: () => import('@/views/Other2.vue')
      // }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach(async (to) => {
  const store = useAllDataStore()
  console.log(store.getIsAuthenticated())
  if (to.name != "login" && store.getIsAuthenticated() === false) {
    return { name: "login" }
  }
  if (store.getIsAuthenticated() === true) {
    if (!router.getRoutes().some(item => item.name == to.name)) {
      return { name: "404" }
    }
  }
}
)
function setupRoutes() {
  const modules = import.meta.glob('../views/**/*.vue')
  const addRoutes = []
  const store = useAllDataStore()
  store.getMenuList().forEach(item => {
    if (item.children) {
      item.children.forEach(childItem => {
        childItem.component = modules[`../views/${childItem.url}.vue`]
        addRoutes.push(childItem)
      })
    } else {
      item.component = modules[`../views/${item.url}.vue`]
      addRoutes.push(item)
    }
  })

  //首先要删除原有的,之前用户登录添加的路由
  router.getRoutes().forEach(item => {
    if (routes.find(route => route.name == item.name)) {
      return
    } else {
      router.removeRoute(item.name)
    }
  })

  addRoutes.forEach(item => {
    //挂载到"main"节点下
    router.addRoute("main", item)
  })
}

export { router, setupRoutes }
