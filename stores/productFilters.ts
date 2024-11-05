import { type IFiltersStoreState, type TDefaultState, type TNullable } from '~/types'

export const useProductFiltersStore = defineStore('store_product_filters', () => {
  // data
  const { query } = useProductsQuery()
  const filtersState = reactive<TDefaultState<TNullable<IFiltersStoreState>>>({
    data: null,
    error: null,
    loading: false
  })

  // getters
  const filters = computed(() => filtersState.data)
  const sizesFilters = computed(() => filtersState.data?.sizes)
  const colorsFilters = computed(() => filtersState.data?.colors)
  const minPrice = computed(() => filtersState.data?.priceFrom || 1)
  const maxPrice = computed(() => filtersState.data?.priceTo || 999999)

  const filtersFetch = useApiFetch('filters', {
    query,
    watch: [query],
    onResponse({ response }) {
      filtersState.data = {
        colors: response._data.COLORS,
        priceFrom: response._data.PRICEFROM,
        priceTo: response._data.PRICETO,
        sizes: response._data.SIZES
      }
    }
  })

  return {
    filtersState,
    filters,
    sizesFilters,
    colorsFilters,
    minPrice,
    maxPrice,
    // getFilters
    getFilters: filtersFetch.refresh
  }
})
