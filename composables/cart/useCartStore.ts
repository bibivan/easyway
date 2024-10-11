import type { ICartItem, IProduct, TNullable } from '~/types'

export const useCartStore = () => {
  // Data
  const cartData = useState<TNullable<ICartItem[]>>('cart_data', () => null)
  const cartIsShown = useState<boolean>('cart_is_shown', () => false)

  // Getters
  const cartItemsCount = computed(() => {
    return cartData.value?.reduce((acc: number, curVal) => acc + curVal.cnt, 0) || 0
  })
  const cartTotalPrice = computed(() => {
    return cartData.value?.reduce((acc: number, curVal) => acc + +curVal.price * curVal.cnt, 0) || 0
  })

  // Mutations
  const clearCart = () => {
    cartData.value = null
    localStorage.removeItem('easyway-cart')
  }
  const findItem = (itemId: number) => cartData.value?.find((item) => item.id === itemId)

  const setToLocalStorage = () =>
    localStorage.setItem('easyway-cart', JSON.stringify(cartData.value))

  const deleteCartItem = (itemId: number) => {
    cartData.value = cartData.value?.filter((item) => item.id !== itemId) || cartData.value
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
      if (!cartData.value) cartData.value = [] as ICartItem[]
      const isInCart = arrayHasElem(cartData.value, 'id', item.id)

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

        cartData.value.push(newCartItem)
        setToLocalStorage()
        useNuxtApp().$toast('Товар добавлен')
      }
    } catch (e) {
      useNuxtApp().$toast('Неверный формат продукта. Товар не добавлен')
    }
  }

  return {
    cartData,
    cartIsShown,
    cartItemsCount,
    cartTotalPrice,
    clearCart,
    deleteCartItem,
    increaseItemsCount,
    decreaseItemsCount,
    putToCart
  }
}
