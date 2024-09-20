import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { EBrand, type IPaginatedDataRaw } from '~/types'
import type { TDefaultStoreState, IPaginatedData, IProductRaw, IProduct } from '~/types'

export const useCatalogStore = defineStore('catalog_store', () => {
  // Data
  const catalogState = reactive<TDefaultStoreState<IPaginatedData<IProduct[]>>>({
    data: null,
    loading: false,
    error: null
  })

  // mutations

  // actions
  const getCatalogData = async (brand: EBrand) => {
    try {
      const data = await useClientFetch<IPaginatedDataRaw<IProductRaw[]>>('/catalog/get/', {
        method: 'GET',
        params: { 'filter[BRAND]': brand }
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
    getCatalogData
  }
})
