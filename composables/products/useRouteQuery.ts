import { EProductFilters } from '~/types'

export const useRouteQuery = () => {
  const route = useRoute()
  const currentGender = computed(() => {
    return Array.isArray(route.query[EProductFilters.GENDER])
      ? route.query[EProductFilters.GENDER][0]
      : route.query[EProductFilters.GENDER]
  })

  const currentBrand = computed(() => {
    return Array.isArray(route.query[EProductFilters.BRAND])
      ? route.query[EProductFilters.BRAND][0]
      : route.query[EProductFilters.BRAND]
  })

  const pageId = computed(() => {
    return Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  })

  return {
    pageId,
    currentGender,
    currentBrand
  }
}
