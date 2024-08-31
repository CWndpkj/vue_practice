<template>
  <el-header class="header-contaner">
    <span class="left-span">
      <el-button class="menu-button" icon='menu' @click=handleCollapse>
      </el-button>
      <el-breadcrumb class="breadcrumb" separator-icon="ArrowRight">
        <template v-for="item in breadcrumbList">
          <el-breadcrumb-item v-if="item.url" :to="{ path: item.path }">{{
            item.label }}</el-breadcrumb-item>
          <el-breadcrumb-item v-else>{{
            item.label }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </span>
    <span class="right-span">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="getUserImgUrl('')" alt="">
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="User">用户</el-dropdown-item>
            <el-dropdown-item icon="SwitchButton" @click="handleLoginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </el-header>
</template>

<script setup>
import { useAllDataStore } from '../stores';
import { router, setupRoutes } from '@/router';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'
const store = useAllDataStore()
const route = useRoute()
const getUserImgUrl = (_userId) => {
  return new URL("../assets/vue.svg", import.meta.url).href
}
const handleCollapse = () => {
  store.toggleCollapse()
}
const handleLoginOut = () => {
  router.push('/login')
  store.initState()
  store.setIsAuthenticated(false)
  setupRoutes()
}
const breadcrumbList = ref([])
function getBreadcrumbListFromMenuList(menuList) {
  console.log("passed menulist:", menuList)
  for (const item of menuList) {
    if (item.children) {
      if (getBreadcrumbListFromMenuList(item.children)) {
        breadcrumbList.value.unshift(item)
        return true
      }
    }
    if (route.path == item.path) {
      breadcrumbList.value.unshift(item)
      return true
    }
  }
  return false
}
watch(() => route.path, () => {
  breadcrumbList.value = []
  getBreadcrumbListFromMenuList(store.getMenuList())
  console.log("breadcrumbList", breadcrumbList.value)
});
onMounted(() => {
  getBreadcrumbListFromMenuList(store.getMenuList())
})
</script>

<style lang="scss" scoped>
.header-contaner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-span,
.right-span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-button {
  width: 10px;
  margin-right: 10px;
}

.header-contaner {
  border-bottom: 1px solid #ccc;
}
</style>
