import type { ICartItem, IProduct, TDefaultStoreState } from '~/types'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart_store', () => {
  // Data
  const cartState = reactive<TDefaultStoreState<ICartItem[]> & { isShown: boolean }>({
    data: null,
    loading: false,
    isShown: false,
    error: null
  })

  // Getters
  const cartItemsCount = computed(() => {
    return cartState.data?.reduce((acc: number, curVal) => acc + curVal.cnt, 0) || 0
  })
  const cartTotalPrice = computed(() => {
    return cartState.data?.reduce((acc: number, curVal) => acc + +curVal.price * curVal.cnt, 0) || 0
  })

  // Mutations
  const clearCart = () => (cartState.data = null)

  const setToLocalStorage = () =>
    localStorage.setItem('easyway-cart', JSON.stringify(cartState.data))

  const deleteCartItem = (itemId: number) => {
    cartState.data = cartState.data?.filter((item) => item.id !== itemId) || cartState.data
    setToLocalStorage()
  }

  const increaseItemsCount = (itemId: number) => {
    cartState.data?.forEach((item) => {
      if (item.id === itemId) item.cnt++
    })
    setToLocalStorage()
  }

  const decreaseItemsCount = (itemId: number) => {
    cartState.data?.forEach((item) => {
      if (item.id === itemId) {
        return item.cnt > 1 ? item.cnt-- : deleteCartItem(itemId)
      }
    })
    setToLocalStorage()
  }

  const putToCart = (item: IProduct) => {
    if (!item.sfAttrs) return useNuxtApp().$toast('Отсутствуют аттрибуты. Продукт не добавлен')

    try {
      if (!cartState.data) cartState.data = [] as ICartItem[]
      const isInCart = arrayHasElem(cartState.data, 'id', item.id)

      if (isInCart) useNuxtApp().$toast('Товар уже в корзине')
      else {
        const newCartItem: ICartItem = {
          name: item.name,
          article: item.article,
          attributes: {
            color: item.sfAttrs.color,
            size: item.sfAttrs.size
          },
          cnt: 1,
          price: item.priceInt || 0,
          picture: item.pictures ? item.pictures[0] : '',
          id: item.id
        }

        cartState.data.push(newCartItem)
        setToLocalStorage()
        useNuxtApp().$toast('Товар добавлен')
      }
    } catch (e) {
      cartState.error = e
      console.error(e)
      useNuxtApp().$toast('Неверный формат продукта. Товар не добавлен')
    }
  }

  return {
    cartState,
    cartItemsCount,
    cartTotalPrice,
    clearCart,
    deleteCartItem,
    increaseItemsCount,
    decreaseItemsCount,
    putToCart
  }
})
