import type { ICartItem, IPromoResponseData, IPromoStoreState, TNullable } from '~/types'

export const usePromoStore = defineStore('promo_store', () => {
  //data
  const promoState = reactive<IPromoStoreState>({
    data: { amount: null, code: null, balance:false },
    loading: false,
    error: null
  })

  // getters

  // mutations
  const initPromoData = () => {
    const promoJSON = sessionStorage.getItem('easy-clothing-promo')
    if (promoJSON && isValidJSON(promoJSON)) promoState.data = JSON.parse(promoJSON)
  }

  const calculateDiscount = (cartData: TNullable<ICartItem[]>) => {
    let discountSum = 0

    if (cartData && promoState.data.code) {
      let totalDiscount = 0;
      cartData!.forEach((item) => {
        let discount = 0;
        if (promoState.data.balance === true) {
          discount = Math.min(promoState.data.amount!, item.price - 1, promoState.data.amount! - totalDiscount);
          totalDiscount += discount;
        } else {
          if (promoState.data.code!.startsWith('EAZY')) {
            discount = Math.floor(item.price * (promoState.data.amount! / 100));
          } else if (promoState.data.code!.startsWith('easy')) {
            if (item.article.startsWith('EF')) {
              discount = Math.floor(item.price * (promoState.data.amount! / 100));
            }
          } else {
            discount = Math.floor(item.price * (promoState.data.amount! / 100));
          }
        }
        discountSum += discount;
      });
    }

    return discountSum
  }

  const calculateDiscountedSum = (sum: number, cartData: TNullable<ICartItem[]>) => {
    return sum - calculateDiscount(cartData)
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
        promoState.data.amount = data.result;
        promoState.data.balance = data.balance;
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
