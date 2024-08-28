<template>
  <div class="common-layout" ref="common-layout">
    <el-container class="common-container" ref="common-container">
      <!-- 左侧侧边栏 -->
      <common-aside></common-aside>
      <el-container class="main-container" direction='vertical'>
        <common-header></common-header>
        <common-tags></common-tags>
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
import CommonTags from '../components/CommonTags.vue';
import { onMounted, getCurrentInstance } from 'vue';
import { useAllDataStore } from '@/stores'

const store = useAllDataStore()
const { proxy } = getCurrentInstance()
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    store.isCollapse = true ? entry.contentRect.width < 1000 : store.isCollapse
  }
})

onMounted(() => {
  const element = proxy.$refs['common-layout']
  element && resizeObserver.observe(element)
})

</script>

<style lang="scss">
.common-layout,
.common-container,
.el-menu-vertical {
  height: 100%;
  margin: none;
}
</style>
