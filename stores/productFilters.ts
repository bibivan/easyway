import { type IFiltersStoreState, type TDefaultState, type TNullable } from '~/types'

export const useProductFiltersStore = defineStore('store_product_filters', () => {
  // data
  const { query } = useProductsQuery()
  const filtersState = reactive<TDefaultState<TNullable<IFiltersStoreState>>>({
    data: null,
    error: null,
    loading: false
  })

  console.log('init', query.value)

  // getters
  const filters = computed(() => filtersState.data)
  const sizesFilters = computed(() => filtersState.data?.sizes)
  const colorsFilters = computed(() => filtersState.data?.colors)
  const priceFromFilter = computed(() => filtersState.data?.priceFrom)
  const priceToFilter = computed(() => filtersState.data?.priceTo)

  // const getFilters = async (query: IBaseProductsQuery) => {
  //   const data = await $fetch<IProductFiltersRaw>('filters', {
  //     baseURL: getBaseUrl(),
  //     query
  //   })
  //
  //   filtersState.data = {
  //     colors: data.COLORS,
  //     priceFrom: data.PRICEFROM,
  //     priceTo: data.PRICETO,
  //     sizes: data.SIZES
  //   }
  // }

  const filtersFetch = useApiFetch('filters', {
    query,
    watch: [query],
    onRequest() {
      console.log('on req', query.value)
    },
    onResponse({ response }) {
      filtersState.data = {
        colors: response._data.COLORS,
        priceFrom: response._data.PRICEFROM,
        priceTo: response._data.PRICETO,
        sizes: response._data.SIZES
      }
    }
  })

  watch(
    () => filtersFetch.status.value,
    (val) => {
      console.log(val)
    }
  )

  return {
    filtersState,
    filters,
    sizesFilters,
    colorsFilters,
    priceFromFilter,
    priceToFilter,
    // getFilters
    getFilters: filtersFetch.refresh
  }
})

// const { query } = useProductsQuery()
// watch(query, async () => {
//   await filtersFetch.refresh()
//   console.log('here query', filtersState.data)
// })
