import type { IPromoResponseData, IPromoStoreState } from '~/types'
import { getRandomNumber } from '~/utils/common'

export const usePromoStore = defineStore('promo_store', () => {
  //data
  const promoClearData = { value: null, code: null }
  const promoState = reactive<IPromoStoreState>({
    data: promoClearData,
    loading: false,
    error: null
  })

  // getters

  // mutations
  const initPromoData = () => {
    const promoJSON = sessionStorage.getItem('easyway-promo')
    if (promoJSON && isValidJSON(promoJSON)) promoState.data = JSON.parse(promoJSON)
  }

  const calculateDiscount = (sum: number) => {
    return promoState.data?.value ? Math.floor(sum * (promoState.data.value / 100)) : 0
  }

  const calculateDiscountedSum = (sum: number) => {
    return promoState.data?.value ? sum - calculateDiscount(sum) : sum
  }

  const cancelPromo = () => {
    promoState.data = promoClearData
    promoState.error = null
    sessionStorage.removeItem('easyway-promo')
  }

  // actions
  const checkPromoCode = async (code: string) => {
    promoState.loading = true

    try {
      promoState.error = null

      // const data = await $fetch<IPromoResponseData>('https://promo.aimagic.today/check-promo', {
      //   method: 'POST',
      //   headers: {
      //     Authorization: `Bearer someToken`
      //   },
      //   body: { promo: code }
      // })
      const getData = (): IPromoResponseData => {
        // if (getRandomNumber(1, 100) > 50) throw new Error('серверная ошибка')
        return code === 'e' ? { result: 10 } : false
      }

      const data: IPromoResponseData = getData()

      if (data) {
        promoState.data.value = data.result
        sessionStorage.setItem('easyway-promo', JSON.stringify(promoState.data))
        useNuxtApp().$toast(`Промокод ${code} упешно применен`)
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
