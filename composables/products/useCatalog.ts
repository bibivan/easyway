import type { IPaginatedDataRaw, IProductGroupRaw, IPaginatedData, IProductGroup } from '~/types'

export const useCatalog = () => {
  const route = useRoute()
  const query = computed(() => route.query)

  return useApiFetch<IPaginatedDataRaw<IProductGroupRaw[]>, IPaginatedData<IProductGroup[]>>(
    'data',
    {
      query,
      watch: [query],
      transform: (data: IPaginatedDataRaw<IProductGroupRaw[]>) => {
        return {
          pagination: paginationRawToPagination(data.pagination),
          items: productGroupsRawToProductGroups(data.items)
        }
      }
    }
  )
}
