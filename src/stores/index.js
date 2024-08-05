import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useAllDataStore = defineStore('allData', () => {
  const isCollapse = ref(true)

  return {
    isCollapse
  }
})
