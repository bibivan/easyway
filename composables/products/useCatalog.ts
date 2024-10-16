import type { IPaginatedData, IPaginatedDataRaw, IProductGroup, IProductGroupRaw } from '~/types'

export const useCatalog = () => {
  const route = useRoute()
  const brandParam = computed(() => route.meta.brand)
  const genderParam = computed(() => route.params.gender)

  return useApiFetch<IPaginatedDataRaw<IProductGroupRaw[]>, IPaginatedData<IProductGroup[]>>(
    // 'products/get',
    'products',
    {
      method: 'GET',
      query: {
        'filter[BRAND]': brandParam,
        'filter[gender][]': genderParam
      },
      transform: (data: IPaginatedDataRaw<IProductGroupRaw[]>) => {
        data = useCatalogMock()
        return {
          pagination: paginationRawToPagination(data.pagination),
          items: data.items.map((item: IProductGroupRaw) => productGroupRawToProductGroup(item))
        }
      }
    }
  )
}
