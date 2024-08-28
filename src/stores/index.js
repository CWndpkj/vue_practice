import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useAllDataStore = defineStore('allData', () => {
  const isCollapse = ref(true)
  const tags = ref([{
    path: '/home',
    label: '首页',
    icon: 'home'
  },
  ])

  const menuList = ref([])
  const token = ref('')

  function addTag(tag) {
    if (tags.value.some(item => item.path === tag.path)) return
    tags.value.push(tag)
  }
  function removeTag(tag) {
    tags.value = tags.value.filter(item => item.path !== tag.path)
  }
  function setMenuList(list) {
    menuList.value = list
  }
  function setToken(t) {
    token.value = t
  }
  return {
    isCollapse,
    tags,
    addTag,
    removeTag,
    menuList,
    token,
    setMenuList,
    setToken
  }
})

