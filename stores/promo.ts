import type { IPromoResponseData, IPromoStoreState } from '~/types'
import { getRandomNumber } from '~/utils/common'

export const usePromoStore = defineStore('promo_store', () => {
  const promo = reactive<IPromoStoreState>({
    data: null,
    loading: false,
    error: null
  })

  const initPromoData = () => {
    const promoJSON = sessionStorage.getItem('easyway-promo')
    if (promoJSON && isValidJSON(promoJSON)) promo.data = JSON.parse(promoJSON)
  }

  const calculateDiscount = (sum: number) => {
    return promo.data ? Math.floor(sum * (promo.data.value / 100)) : 0
  }

  const calculateDiscountedSum = (sum: number) => {
    return promo.data ? sum - calculateDiscount(sum) : sum
  }

  const cancelPromo = () => {
    promo.data = null
    promo.error = null
    sessionStorage.removeItem('easyway-promo')
  }

  const checkPromoCode = async (code: string) => {
    try {
      promo.loading = true
      cancelPromo()

      // const data = await $fetch<IPromoResponseData>('https://promo.aimagic.today/check-promo', {
      //   method: 'POST',
      //   headers: {
      //     Authorization: `Bearer someToken`
      //   },
      //   body: { promo: code }
      // })
      const getData = (): IPromoResponseData => {
        if (getRandomNumber(1, 100) > 50) throw new Error('серверная ошибка')
        return code === 'e' ? { result: 10 } : false
      }

      const data: IPromoResponseData = getData()

      if (data) {
        promo.data = {
          value: data.result,
          name: code
        }

        promo.error = null
        sessionStorage.setItem('easyway-promo', JSON.stringify(promo.data))
      } else {
        promo.error = 'Промокод не действителен'
      }
    } catch (e) {
      console.error(e)
      promo.error = 'Ошибка при получении данных'
    }

    promo.loading = false
  }

  return {
    promo,
    initPromoData,
    checkPromoCode,
    cancelPromo,
    calculateDiscount,
    calculateDiscountedSum
  }
})
