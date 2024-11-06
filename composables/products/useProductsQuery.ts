import { EGender, EProductFilters } from '~/types'

export const useProductsQuery = () => {
  const route = useRoute()
  const query = computed(() => route.query)

  const priceFrom = computed(() => {
    if (Array.isArray(query.value[EProductFilters.PRICEFROM])) {
      return (
        isString(query.value[EProductFilters.PRICEFROM][0]) &&
        parseInt(query.value[EProductFilters.PRICEFROM][0], 10)
      )
    } else if (isString(query.value[EProductFilters.PRICEFROM])) {
      return (
        isString(query.value[EProductFilters.PRICEFROM]) &&
        parseInt(query.value[EProductFilters.PRICEFROM], 10)
      )
    }
  })

  const priceTo = computed(() => {
    if (Array.isArray(query.value[EProductFilters.PRICETO])) {
      return (
        isString(query.value[EProductFilters.PRICETO][0]) &&
        parseInt(query.value[EProductFilters.PRICETO][0], 10)
      )
    } else if (isString(query.value[EProductFilters.PRICETO])) {
      return (
        isString(query.value[EProductFilters.PRICETO]) &&
        parseInt(query.value[EProductFilters.PRICETO], 10)
      )
    }
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
