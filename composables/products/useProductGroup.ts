import type { IPaginatedDataRaw, IProductGroup, IProductGroupRaw, TNullable } from '~/types'

export const useProductGroup = (id: number) => {
  return useApiFetch<IPaginatedDataRaw<IProductGroupRaw[]>, TNullable<IProductGroup>>(
    // 'products/get',
    'products',
    {
      method: 'GET',
      query: {
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
            .find((item) => item.groupId === id) || null
        )
      }
    }
  )
}
