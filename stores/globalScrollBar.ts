import { defineStore } from 'pinia'

export const useGlobalScrollbarStore = defineStore('global_scrollbar_store', () => {
  // Data
  const globalScrollbarState = reactive<{
    hidden: boolean
  }>({
    hidden: false
  })

  return { globalScrollbarState }
})
