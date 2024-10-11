import {
  type IProductGroup,
  type IProductGroupState,
  type TGenericRef,
  type TNullable
} from '~/types'

export const useActiveProduct = (data: TGenericRef<TNullable<IProductGroup>>) => {
  if (!data.value) return { state: undefined, activeProduct: undefined }

  const state = reactive<IProductGroupState>({
    color: data.value.items[0].sfAttrs?.color || data.value.colors[0],
    size: data.value.items[0].sfAttrs?.size || data.value.sizes[0]
  })

  const activeProduct = computed(() => {
    return data.value?.items.find((item) => {
      return item.sfAttrs?.color === state.color && item.sfAttrs?.size === state.size
    })
  })

  watch(
    () => state.color,
    () => {
      if (!activeProduct.value) {
        const itemByColor = data.value?.items.find((item) => item.sfAttrs?.color === state.color)
        if (itemByColor?.sfAttrs) state.size = itemByColor.sfAttrs.size
      }
    }
  )

  watch(
    () => state.size,
    () => {
      if (!activeProduct.value) {
        const itemBySize = data.value?.items.find((item) => item.sfAttrs?.size === state.size)
        if (itemBySize?.sfAttrs) state.color = itemBySize.sfAttrs.color
      }
    }
  )

  return {
    state,
    activeProduct
  }
}
