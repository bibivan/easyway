import type { IPaginatedData, IPaginatedDataRaw, IProductGroup, IProductGroupRaw } from '~/types'
import { EProductFilters } from '~/types'

export const useCatalog = () => {
  const route = useRoute()
  const query = computed(() => route.query)

  if (process.server) {
    console.log(query.value)
  }

  return useApiFetch('data', {
    method: 'GET',
    query,
    watch: [query],
    transform: (data: IPaginatedDataRaw<IProductGroupRaw[]>) => {
      return {
        pagination: paginationRawToPagination(data.pagination),
        items: productGroupsRawToProductGroups(data.items)
      }
    }
  })
}
