import { EGender, EProductFilters, type TNullable } from '~/types'

export const useProductFiltersStore = defineStore('product_filters_store', () => {
  const route = useRoute()

  // data
  const categories = ref()
  const filters = ref()

  // getters
  const query = computed(() => ({
    [EProductFilters.GENDER]: route.query[EProductFilters.GENDER],
    ...(route.query[EProductFilters.GENDER] !== EGender.MALE && {
      [EProductFilters.BRAND]: route.query[EProductFilters.BRAND]
    })
  }))

  // actions
  useApiFetch('categories', {
    query,
    watch: [query],
    onResponse({ response }) {
      categories.value = response._data.categories
    }
  })

  useApiFetch('filters', {
    query,
    watch: [query],
    onResponse({ response }) {
      filters.value = response._data
    }
  })

  return {
    filters,
    categories
  }
})
