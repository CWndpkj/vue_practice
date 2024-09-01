<template>
  <div class="container">
    <el-tag class="tag" v-for="tag in store.getTags()" :key=tag.path :closable="tag.path != '/home' ? true : false"
      @close="handleClose(tag)" @click="handleClick(tag)" :effect="tag.path == route.path ? 'dark' : 'plain'">
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script setup>
import { useAllDataStore } from '@/stores'
import { useRoute, useRouter } from 'vue-router'
const store = useAllDataStore()
const router = useRouter()
const route = useRoute()
const handleClick = (tag) => {
  router.push(tag.path)
}
const handleClose = (tag) => {
  const tags = store.getTags()
  const index = tags.findIndex(item => item.path == tag.path)
  if (index == tags.length - 1)
    router.push(tags[index - 1].path)
  else
    router.push(tags[index + 1].path)
  store.removeTag(tag)
}
</script>

<style lang="scss" scoped>
.container {
  margin-left: 20px;
  margin-top: 10px;
}

.tag {
  margin: 5px;
  cursor: pointer;
}
</style>
