import type { IPromoResponseData, IPromoStoreState } from '~/types'

export const usePromoStore = defineStore('promo_store', () => {
  //data
  const promoState = reactive<IPromoStoreState>({
    data: { amount: null, code: null },
    loading: false,
    error: null
  })

  // getters

  // mutations
  const initPromoData = () => {
    const promoJSON = sessionStorage.getItem('easy-clothing-promo')
    if (promoJSON && isValidJSON(promoJSON)) promoState.data = JSON.parse(promoJSON)
  }

  const calculateDiscount = (sum: number) => {
    return promoState.data?.amount ? Math.floor(sum * (promoState.data.amount / 100)) : 0
  }

  const calculateDiscountedSum = (sum: number) => sum - calculateDiscount(sum)

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
