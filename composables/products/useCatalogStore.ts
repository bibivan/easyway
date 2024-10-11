import type { IPaginatedDataRaw, IProductGroupRaw } from '~/types'

export const useCatalogStore = () => {
  const route = useRoute()

  const catalogState = useApiFetch('products/get', {
    method: 'GET',
    params: {
      'filter[BRAND]': route.meta.brand,
      'filter[gender][]': route.params.gender
    },
    transform: (data: IPaginatedDataRaw<IProductGroupRaw[]>) => {
      data = useCatalogMock()
      return {
        pagination: paginationRawToPagination(data.pagination),
        items: data.items.map((item: IProductGroupRaw) => productGroupRawToProductGroup(item))
      }
    }
  })

  const catalogItems = computed(() => catalogState.data.value?.items)

  return {
    catalogState,
    catalogItems
  }
}
