import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useAllDataStore = defineStore('allData', () => {
  const state = ref({
    isCollapse: ref(true),
    tags: ref([{
      path: '/home',
      label: '首页',
      icon: 'home'
    },
    ]),
    menuList: ref([]),
    token: ref(''),
    isAuthenticated: ref(false)
  }
  )
  function initState() {
    state.value = {
      isCollapse: ref(true),
      tags: ref([{
        path: '/home',
        label: '首页',
        icon: 'home'
      },
      ]),
      menuList: ref([]),
      token: ref(''),
      isAuthenticated: ref(false)
    }
  }
  function toggleCollapse() {
    state.value.isCollapse = !state.value.isCollapse
  }
  function getIsCollapse() {
    return state.value.isCollapse
  }
  function addTag(tag) {
    if (state.value.tags.some(item => item.path === tag.path)) return
    state.value.tags.push(tag)
  }
  function getTags(){
    return state.value.tags
  }
  function removeTag(tag) {
    state.value.tags = state.value.tags.filter(item => item.path !== tag.path)
  }
  function getMenuList() {
    return state.value.menuList
  }
  function setMenuList(list) {
    state.value.menuList = list
  }
  function getToken() {
    return state.value.token
  }
  function setToken(t) {
    state.value.token = t
  }
  function loadFromLocalStorage() {
    const store = localStorage.getItem("store")
    if (store) {
      state.value = JSON.parse(store)
      console.log("debug", state.value)
    }
  }
  //自动保存到localStorage
  watch(state, (newState) => {
    localStorage.setItem("store", JSON.stringify(newState))
    console.log(newState)
  }, { deep: true })


  function getIsAuthenticated() {
    return state.value.isAuthenticated
  }
  function setIsAuthenticated(isAuthenticated) {
    state.value.isAuthenticated = isAuthenticated
  }
  return {
    initState,
    loadFromLocalStorage,
    toggleCollapse,
    getIsCollapse,
    addTag,
    getTags,
    removeTag,
    getMenuList,
    getToken,
    setMenuList,
    setToken,
    getIsAuthenticated,
    setIsAuthenticated
  }
})

