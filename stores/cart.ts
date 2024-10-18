import type { ICartItem, IProduct, TNullable } from '~/types'

export const useCartStore = defineStore('cart_store', () => {
  // Data
  const cartState = reactive<{
    data: TNullable<ICartItem[]>
    isShown: boolean
  }>({
    data: null,
    isShown: false
  })

  // Getters
  const cartItemsCount = computed(() => {
    return cartState.data?.reduce((acc: number, curVal) => acc + curVal.cnt, 0) || 0
  })
  const cartTotalPrice = computed(() => {
    return cartState.data?.reduce((acc: number, curVal) => acc + +curVal.price * curVal.cnt, 0) || 0
  })

  // Mutations
  const clearCart = () => {
    cartState.data = null
    localStorage.removeItem('easyway-cart')
  }
  const findItem = (itemId: number) => cartState.data?.find((item) => item.id === itemId)

  const setToLocalStorage = () =>
    localStorage.setItem('easyway-cart', JSON.stringify(cartState.data))

  const deleteCartItem = (itemId: number) => {
    cartState.data = cartState.data?.filter((item) => item.id !== itemId) || cartState.data
    setToLocalStorage()
  }

  const increaseItemsCount = (itemId: number) => {
    const cartItem = findItem(itemId)
    if (cartItem) cartItem.cnt++
    setToLocalStorage()
  }

  const decreaseItemsCount = (itemId: number) => {
    const cartItem = findItem(itemId)

    if (cartItem && cartItem.cnt > 1) {
      cartItem.cnt--
      setToLocalStorage()
    } else if (cartItem) {
      deleteCartItem(itemId)
    }
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
