<template>
  <el-menu class="el-menu-vertical" :collapse="store.getIsCollapse()" :default-active="activePage">
    <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path" @click="handleRoute(item)">
      <component class="icons" :is="item.icon"></component>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-sub-menu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <!-- <template #title> -->
      <!--   <component class='icons' :is="item.icon"></component> -->
      <!--   <span>{{ item.label }}</span> -->
      <!-- </template> -->
      <el-sub-menu v-for="item in item.children" :index="item.path" :key="item.path"
        @click="handleRoute(item)">
        <!-- <component class="icons" :is="item.icon"></component> -->
        <!-- <span>{{ subItem.label }}</span> -->
        <el-menu-item v-if="childrenHasChildren.some(subItem => subItem.path === item.path)"
          v-for="item in childrenHasChildren" :index="item.path" :key="item.path" @click="handleRoute(item)">
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue';
import { useAllDataStore } from '../stores';
import { useRoute, useRouter } from 'vue-router';

const noChildren = computed(() => {
  return store.getMenuList().filter(item => !item.children)
})
const hasChildren = computed(() => {
  return store.getMenuList().filter(item => item.children)
})
const childrenHasChildren = computed(() => {
  return store.getMenuList().filter(item => item.children && item.children.some(subItem => subItem.children))})
const router = useRouter()
const route = useRoute()
const store = useAllDataStore()
const activePage = computed(() => route.path)
const handleRoute = (item) => {
  router.push(item.path)
  console.log(route)
  store.addTag(item)
}
</script>

<style lang="scss" scoped>
.icons {
  height: 15px;
  width: 15px;
}
</style>
