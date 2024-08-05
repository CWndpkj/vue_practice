<template>
  <el-menu class="el-menu-vertical" :collapse="store.isCollapse">
    <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path">
      <component class="icons" :is="item.icon"></component>
      <span>{{ item.name }}</span>
    </el-menu-item>
    <el-sub-menu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template #title>
        <component class='icons' :is="item.icon"></component>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item v-for="item in item.chrildren" :index="item.path" :key="item.path">
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAllDataStore } from '../stores';
const data = ref([
  {
    path: "/home",
    name: "首页",
    icon: 'location',
    url: "/home"
  },
  {
    path: "/goods",
    name: "商品",
    icon: 'food',
    url: "/goods"
  },
  {
    path: "/users",
    name: "用户",
    icon: 'user',
    url: "/users"
  },
  {
    path: "/other",
    name: "其他",
    icon: 'location',
    chrildren: [
      {
        path: "/other1",
        name: "其他1",
        icon: "location",
        url: "/other1"
      },
      {
        path: "other2",
        name: "其他2",
        icon: "location",
        url: "/other2"
      }
    ]
  }
])

const noChildren = computed(() => {
  return data.value.filter(item => !item.chrildren)
})
const hasChildren = computed(() => {

  return data.value.filter(item => item.chrildren)
})

const store = useAllDataStore()
const asideWidth = computed(() => store.isCollapse ? '50px' : '150px')
</script>

<style lang="scss" scoped>
.icons {
  height: 15px;
  width: 15px;
}
</style>
