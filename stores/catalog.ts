import { defineStore } from 'pinia'
import type {
  IGetCatalogPayload,
  IPaginatedDataRaw,
  IPaginatedData,
  IProductGroupRaw,
  IProductGroup
} from '~/types'

export const useCatalogStore = defineStore('catalog_store', () => {
  // Data
  const catalogState = useStoreStateInstance<IPaginatedData<IProductGroup[]>>()

  //getters
  const catalog = computed(() => catalogState.data?.items)

  // mutations

  // actions
  const getCatalogData = async (params: IGetCatalogPayload) => {
    try {
      // const data = await useClientFetch<IPaginatedDataRaw<IProductGroupRaw[]>>('/products/get/', {
      //   method: 'GET',
      //   params
      // })

      const data: IPaginatedDataRaw<IProductGroupRaw[]> = await useCatalogMock()

      catalogState.data = {
        pagination: paginationRawToPagination(data.pagination),
        items: data.items.map((item: IProductGroupRaw) => productGroupRawToProductGroup(item))
      }
    } catch (e) {
      console.error(e)
      catalogState.error = e
    }
  }

  return {
    catalogState,
    catalog,
    getCatalogData
  }
})
