import type { ICartItem, IProduct, TNullable } from '~/types'
import { SvgFilledCart } from '#components'

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
    localStorage.removeItem('eazy-clothing-cart')
  }
  const findItem = (itemId: number) => cartState.data?.find((item) => item.id === itemId)

  const setToLocalStorage = () =>
    localStorage.setItem('eazy-clothing-cart', JSON.stringify(cartState.data))

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
    try {
      if (!cartState.data) cartState.data = [] as ICartItem[]
      const isInCart = arrayHasElem(cartState.data, 'id', item.id)

      if (isInCart)
        useNuxtApp().$toast('Товар уже в корзине', {
          theme: 'dark'
        })
      else {
        const newCartItem: ICartItem = {
          name: item.name,
          article: item.article,
          barcode: item.barcode,
          color: item.color,
          size: item.size,
          cnt: 1,
          price: item.priceInt || 0,
          picture: item.pictures ? item.pictures[0] : '',
          id: item.id
        }

        cartState.data.push(newCartItem)
        setToLocalStorage()
        useNuxtApp().$toast.success('Товар добавлен в корзину', {
          theme: 'dark',
          icon: () => h(SvgFilledCart)
        })
        //@ts-ignore
        ym(98761136, 'reachGoal', 'goal_basket_add')
      }
    } catch (e) {
      useNuxtApp().$toast('Неверный формат продукта. Товар не добавлен', {
        theme: 'dark'
      })
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
