<template>
  <el-menu :default-active="activeMenu" class="el-menu-vertical-demo">
    <template v-for="item in menuList">
      <el-sub-menu v-if="item.children" :index="item.path" :key="item.path" @select="handleRoute(item)">
        <template #title>
          <component :is="item.icon" class="icons"></component>
          <span>{{ item.label }}</span>
        </template>
        <template v-for="subItem in item.children">
          <el-sub-menu v-if="subItem.children" :index="subItem.path" :key="subItem.path" @select="handleRoute(subItem)">
            <template #title>
              <component :is="item.icon" class="icons"></component>
              <span>{{ subItem.label }}</span>
            </template>
            <el-menu-item v-for="subSubItem in subItem.children" :index="subSubItem.path" :key="subSubItem.path"
              @click="handleRoute(subSubItem)">
              <component :is="item.icon" class="icons"></component>
              <span>{{ subSubItem.label }}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="subItem.path" :key="subItem.path" @click="handleRoute(subItem)">
            <component :is="item.icon" class="icons"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" :key="item.path" @click="handleRoute(item)">
        <component :is="item.icon" class="icons"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue';
import { useAllDataStore } from '../stores';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const store = useAllDataStore()
const menuList = store.getMenuList()
const activeMenu = computed(() => route.path)
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
