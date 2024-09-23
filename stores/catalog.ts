import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IGetCatalogPayload, IPaginatedDataRaw } from '~/types'
import type { TDefaultStoreState, IPaginatedData, IProductRaw, IProduct } from '~/types'

export const useCatalogStore = defineStore('catalog_store', () => {
  // Data
  const catalogState = reactive<TDefaultStoreState<IPaginatedData<IProduct[]>>>({
    data: null,
    loading: false,
    error: null
  })

  //getters
  const catalog = computed(() => catalogState.data?.items)

  // mutations

  // actions
  const getCatalogData = async (params: IGetCatalogPayload) => {
    try {
      const data = await useClientFetch<IPaginatedDataRaw<IProductRaw[]>>('/products/get/', {
        method: 'GET',
        params
      })

      catalogState.data = {
        pagination: paginationRawToPagination(data.pagination),
        items: data.items.map((item: IProductRaw) => productRawToProduct(item))
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
