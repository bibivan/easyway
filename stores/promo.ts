import type {ICartItem, IPromoResponseData, IPromoStoreState, TNullable} from '~/types'

export const usePromoStore = defineStore('promo_store', () => {
  //data
  const promoState = reactive<IPromoStoreState>({
    data: { amount: null, code: null },
    loading: false,
    error: null
  })
  let cartState = reactive<{
    data: TNullable<ICartItem[]>
    isShown: boolean
  }>({
    data: null,
    isShown: false
  })

  // getters

  // mutations
  const initPromoData = () => {
    const promoJSON = sessionStorage.getItem('easy-clothing-promo')
    if (promoJSON && isValidJSON(promoJSON)) promoState.data = JSON.parse(promoJSON)
  }

  const calculateDiscount = (
      sum: number,
      cart: { data: TNullable<ICartItem[]>; isShown: boolean }
  ) => {
    let discountSum = 0;
    cartState.data = cart.data;
    // Проверяем, что промокод и данные о скидке существуют и не равны null


    if (cartState.data && promoState.data.code) {

      // Проходим по каждому товару в корзине
      cartState.data!.forEach((item) => {
        // Применяем скидку, если артикул не начинается с 'EF' или промокод не начинается с 'EAZY'
        if (item.article.startsWith('EF') && !promoState.data.code!.startsWith('EAZY')) {
          discountSum += Math.floor(item.price * (promoState.data.amount! / 100));
        } else if (!item.article.startsWith('EF') && promoState.data.code!.startsWith('EAZY')) {
          discountSum += Math.floor(item.price * (promoState.data.amount! / 100));
        }
      });
    }

    return discountSum;
  };

  const calculateDiscountedSum = (sum: number, cart: { data: TNullable<ICartItem[]>; isShown: boolean }) => {
    console.log(cart);
    console.log(promoState);
    return sum - calculateDiscount(sum, cart);
  }

  const cancelPromo = () => {
    promoState.data.amount = null
    promoState.data.code = null
    promoState.error = null
    sessionStorage.removeItem('easy-clothing-promo')
  }

  // actions
  const checkPromoCode = async (code: string) => {
    promoState.loading = true

    try {
      promoState.error = null

      const data = await $fetch<IPromoResponseData>('https://promo.aimagic.today/check-promo/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer someToken`
        },
        body: { promo: code }
      })

      if (data.result) {
        promoState.data.amount = data.result
        sessionStorage.setItem('easy-clothing-promo', JSON.stringify(promoState.data))
        useNuxtApp().$toast(`Промокод ${code} упешно применен`, {
          theme: 'dark'
        })
      } else {
        promoState.error = 'Промокод не действителен'
      }
    } catch (e) {
      console.error(e)
      promoState.error = 'Ошибка при получении данных'
    }

    promoState.loading = false
  }

  return {
    promoState,
    initPromoData,
    checkPromoCode,
    cancelPromo,
    calculateDiscount,
    calculateDiscountedSum
  }
})
