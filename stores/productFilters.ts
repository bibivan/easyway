import {
  EGender,
  EProductFilters,
  type IProductCategoriesState,
  type TDefaultState,
  type TNullable
} from '~/types'

export const useProductFiltersStore = defineStore('product_filters_store', () => {
  const route = useRoute()

  // data
  const filtersState = reactive<TDefaultState<TNullable<IProductCategoriesState>>>({
    data: null,
    error: null,
    loading: false
  })

  // getters
  const filters = computed(() => filtersState.data)
  const query = computed(() => ({
    [EProductFilters.GENDER]: route.query[EProductFilters.GENDER],
    ...(route.query[EProductFilters.GENDER] !== EGender.MALE && {
      [EProductFilters.BRAND]: route.query[EProductFilters.BRAND]
    })
  }))

  const filtersFetch = useApiFetch('filters', {
    query,
    watch: [query],
    immediate: false,
    onResponse({ response }) {
      filtersState.data = response._data
    }
  })

  return {
    filters,
    getFilters: filtersFetch.refresh
  }
})
