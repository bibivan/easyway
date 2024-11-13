import {
  ESize,
  type IProduct,
  type IProductGroup,
  type IProductGroupState,
  type IProductSizeState,
  type TGenericRef,
  type TNullable
} from '~/types'
import type { ComputedRef } from 'vue'

export const useActiveProduct = (data: TGenericRef<TNullable<IProductGroup>>) => {
  if (!data.value) return { state: undefined, activeProduct: undefined }

  const state: IProductGroupState = reactive({
    color: data.value.colors[0],
    size: {
      value: null,
      disabled: null
    }
  })

  const sizeList: ComputedRef<TNullable<IProductSizeState[]>> = computed(() => {
    const list = data.value?.items.reduce((acc: IProductSizeState[], curItem: IProduct) => {
      if (curItem.color !== state.color) return acc
      else return [...acc, { value: curItem.size, disabled: curItem.stock === 0 }]
    }, [])

    if (list && state.size) {
      const sizeOrder = Object.values(ESize)

      return list.sort((a: IProductSizeState, b: IProductSizeState) => {
        const indexA = a.value ? sizeOrder.indexOf(a.value) : -1
        const indexB = b.value ? sizeOrder.indexOf(b.value) : -1

        if (indexA === -1) return 1
        if (indexB === -1) return -1

        return indexA - indexB
      })
    } else return null
  })

  const activeProduct: ComputedRef<TNullable<IProduct>> = computed(() => {
    return (
      data.value?.items.find((item) => {
        return item.color === state.color && item.size === state.size?.value
      }) || null
    )
  })

  onMounted(() => {
    if (sizeList.value) state.size = sizeList.value[0]
  })

  return {
    state,
    activeProduct,
    sizeList
  }
}
