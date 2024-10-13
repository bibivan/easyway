import type { IPaginatedDataRaw, IProductGroup, IProductGroupRaw, TNullable } from '~/types'

export const useProductGroupStore = async () => {
  const route = useRoute()
  const groupId = computed(() => route.params.groupId)

  return useApiFetch<IPaginatedDataRaw<IProductGroupRaw[]>, TNullable<IProductGroup>>(
    'products/get',
    {
      method: 'GET',
      params: {
        id: groupId
      },
      // immediate: false,
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
    }
  )
}
