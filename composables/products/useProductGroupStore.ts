import type { IPaginatedDataRaw, IProductGroup, IProductGroupRaw, TNullable } from '~/types'

export const useProductGroupStore = () => {
  const route = useRoute()
  const id = computed<number>(() => {
    const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
    return parseInt(id, 10)
  })

  return useApiFetch<IPaginatedDataRaw<IProductGroupRaw[]>, TNullable<IProductGroup>>(
    // 'products/get',
    'products',
    {
      method: 'GET',
      params: {
        id
      },
      immediate: false,
      transform: (data: IPaginatedDataRaw<IProductGroupRaw[]>) => {
        data = useCatalogMock()
        return (
          data.items
            .map((item: IProductGroupRaw) => {
              return productGroupRawToProductGroup(item)
            })
            .find((item) => item.groupId === id?.value) || null
        )
      }
    }
  )
}
