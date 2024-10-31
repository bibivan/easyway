import {
  EProductFilters,
  type IPaginatedDataRaw,
  type IProductGroup,
  type IProductGroupRaw,
  type TNullable
} from '~/types'

export const useProductGroup = (id: string) => {
  return useApiFetch<IPaginatedDataRaw<IProductGroupRaw[]>, TNullable<IProductGroup>>('data', {
    method: 'GET',
    query: { [EProductFilters.GROUPID]: id },
    immediate: false,
    transform: (data: IPaginatedDataRaw<IProductGroupRaw[]>) => {
      return (
        data.items
          .map((item: IProductGroupRaw) => {
            return productGroupRawToProductGroup(item)
          })
          .find((item) => item.groupId === id) || null
      )
    }
  })
}
