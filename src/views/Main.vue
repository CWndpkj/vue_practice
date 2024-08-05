<template>
  <div class="common-layout">
    <el-container class="common-container">
      <!-- 左侧侧边栏 -->
      <common-aside></common-aside>
      <el-container class="main-container" direction='vertical'>
        <common-header></common-header>
        <el-main class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue';
</script>

<style lang="scss">
.common-layout,
.common-container,
.el-menu-vertical {
  height: 100%;
  margin: none;
}
</style>
