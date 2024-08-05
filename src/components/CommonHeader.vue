<template>
  <el-header class="header-contaner">
    <span class="left-span">
      <el-button class="menu-button" icon='menu' @click=handleCollaspe>
      </el-button>
      <el-breadcrumb class="breadcrumb" separator-icon="ArrowRight">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
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
            <el-dropdown-item icon="SwitchButton">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </el-header>
</template>

<script setup>
import { useAllDataStore } from '../stores';
const store = useAllDataStore()
const getUserImgUrl = (_userId) => {
  return new URL("../assets/vue.svg", import.meta.url).href
}
const handleCollaspe = () => {
  store.isCollapse = !store.isCollapse
}
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
