export const useGlobalScrollbarStore = defineStore('global_scrollbar_store', () => {
  // Data
  const globalScrollIsHidden = ref<boolean>(false)

  return { globalScrollIsHidden }
})
