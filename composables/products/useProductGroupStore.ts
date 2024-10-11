import type { IPaginatedDataRaw, IProductGroupRaw } from '~/types'

export const useProductGroupStore = () => {
  const route = useRoute()

  return useApiFetch('products/get', {
    method: 'GET',
    params: {
      'filter[BRAND]': route.meta.brand,
      id: route.params.id
    },
    watch: [route.meta, route.params],
    transform: (data: IPaginatedDataRaw<IProductGroupRaw[]>) => {
      data = useCatalogMock()
      return (
        data.items
          .map((item: IProductGroupRaw) => {
            return productGroupRawToProductGroup(item)
          })
          .find((item) => item.groupId === parseInt(route.params.id as string, 10)) || null
      )
    }
  })
}
