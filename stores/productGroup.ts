import { defineStore } from 'pinia'
import type { IPaginatedDataRaw, IProductGroupRaw, IProductGroup, TNullable } from '~/types'
import type { ComputedRef } from 'vue'

export const useProductGroupStore = defineStore('product_store', () => {
  // Data
  const productGroupState = useStoreStateInstance<IProductGroup>()

  //getters
  const productGroup: ComputedRef<TNullable<IProductGroup>> = computed(() => {
    return productGroupState.data || null
  })

  // mutations

  // actions
  const getProductData = async (params: Record<string, string>) => {
    try {
      // const data = await useClientFetch<IPaginatedDataRaw<IProductGroupRaw[]>>('/products/get/', {
      //   method: 'GET',
      //   params
      // })

      const data: IPaginatedDataRaw<IProductGroupRaw[]> = await useCatalogMock()

      productGroupState.data = data.items.map((item: IProductGroupRaw) => {
        return productGroupRawToProductGroup(item)
      })[0]
    } catch (e) {
      console.error(e)
      productGroupState.error = e
    }
  }

  return {
    productGroupState,
    productGroup,
    getProductData
  }
})
