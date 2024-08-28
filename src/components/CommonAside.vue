<template>
  <el-menu class="el-menu-vertical" :collapse="store.isCollapse" :default-active="activePage">
    <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path" @click="handleRoute(item)">
      <component class="icons" :is="item.icon"></component>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-sub-menu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template #title>
        <component class='icons' :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item v-for="subItem in item.chrildren" :index="subItem.path" :key="subItem.path"
        @click="handleRoute(subItem)">
        <component class="icons" :is="subItem.icon"></component>
        <span>{{ subItem.label }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAllDataStore } from '../stores';
import { useRoute, useRouter } from 'vue-router';
const noChildren = computed(() => {
  return store.menuList.filter(item => !item.chrildren)
})
const hasChildren = computed(() => {
  return store.menuList.filter(item => item.chrildren)
})
const router = useRouter()
const route = useRoute()
const store = useAllDataStore()
const activePage = computed(() => route.path)
const handleRoute = (item) => {
  router.push(item.path)
  store.addTag(item)
}
</script>

<style lang="scss" scoped>
.icons {
  height: 15px;
  width: 15px;
}
</style>
