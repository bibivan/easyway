import type { IPaginatedData, IPaginatedDataRaw, IProductGroup, IProductGroupRaw } from '~/types'
import { EProductFilters } from '~/types'

export const useCatalog = () => {
  const route = useRoute()
  const brandParam = computed(() => route.meta.brand)
  const genderParam = computed(() => route.params.gender)

  return useApiFetch('data', {
    method: 'GET',
    query: {
      [EProductFilters.BRAND]: brandParam,
      [EProductFilters.GENDER]: genderParam
    },
    transform: (data: IPaginatedDataRaw<IProductGroupRaw[]>) => {
      console.log('in composable', data)
      return {
        pagination: paginationRawToPagination(data.pagination),
        items: data.items.map((item: IProductGroupRaw) => productGroupRawToProductGroup(item))
      }
    }
  })
}
