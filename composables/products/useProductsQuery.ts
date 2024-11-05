import { EGender, EProductFilters } from '~/types'

export const useProductsQuery = () => {
  const route = useRoute()
  const query = computed(() => route.query)

  const priceFrom = computed(() => {
    return Array.isArray(query.value[EProductFilters.PRICEFROM])
      ? query.value[EProductFilters.PRICEFROM][0]
      : query.value[EProductFilters.PRICEFROM]
  })

  const priceTo = computed(() => {
    return Array.isArray(query.value[EProductFilters.PRICETO])
      ? query.value[EProductFilters.PRICETO][0]
      : query.value[EProductFilters.PRICETO]
  })

  const currentGender = computed(() => {
    return Array.isArray(query.value[EProductFilters.GENDER])
      ? query.value[EProductFilters.GENDER][0]
      : query.value[EProductFilters.GENDER]
  })

  const currentBrand = computed(() => {
    return Array.isArray(query.value[EProductFilters.BRAND])
      ? query.value[EProductFilters.BRAND][0]
      : query.value[EProductFilters.BRAND]
  })

  const pageId = computed(() => {
    return Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  })

  const queries = computed(() => ({
    [EProductFilters.GENDER]: query.value[EProductFilters.GENDER],
    ...(query.value[EProductFilters.GENDER] !== EGender.MALE && {
      [EProductFilters.BRAND]: query.value[EProductFilters.BRAND]
    })
  }))

  return {
    pageId,
    priceFrom,
    priceTo,
    currentGender,
    currentBrand,
    query: queries
  }
}
