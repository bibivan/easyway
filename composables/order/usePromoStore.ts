import type { IPromoData, IPromoResponseData, TNullable } from '~/types'

export const usePromoStore = () => {
  //data
  const promo = useState<IPromoData>('promo_data', () => ({ amount: null, code: null }))
  const loading = useState<boolean>('promo_loading', () => false)
  const error = useState<TNullable<string>>('promo_error', () => null)

  // getters

  // mutations
  const initPromoData = () => {
    const promoJSON = sessionStorage.getItem('easyway-promo')
    if (promoJSON && isValidJSON(promoJSON)) promo.value = JSON.parse(promoJSON)
  }

  const calculateDiscount = (sum: number) => {
    return promo.value?.amount ? Math.floor(sum * (promo.value.amount / 100)) : 0
  }

  const calculateDiscountedSum = (sum: number) => sum - calculateDiscount(sum)

  const cancelPromo = () => {
    promo.value.amount = null
    promo.value.code = null
    error.value = null
    sessionStorage.removeItem('easyway-promo')
  }

  // actions
  const checkPromoCode = async () => {
    loading.value = true

    try {
      error.value = null

      // const data = await $fetch<IPromoResponseData>('https://promo.aimagic.today/check-promo/', {
      //   method: 'POST',
      //   headers: {
      //     Authorization: `Bearer someToken`
      //   },
      //   body: { promo: code }
      // })

      const payload: Record<string, any> = { result: 10 }
      if (promo.value.code !== 'e') payload.result = false
      const data = await $fetch<{ parsedBody: IPromoResponseData }>(
        'http://echo.free.beeceptor.com/sample-request?author=beeceptor',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer someToken`
          },
          body: payload
        }
      )

      // if (data.result) {
      //   promo.value.amount = data.result
      if (data.parsedBody.result) {
        promo.value.amount = data.parsedBody.result
        sessionStorage.setItem('easyway-promo', JSON.stringify(promo.value))
        useNuxtApp().$toast(`Промокод ${promo.value.code} упешно применен`)
      } else {
        error.value = 'Промокод не действителен'
      }
    } catch (e) {
      console.error(e)
      error.value = 'Ошибка при получении данных'
    }

    loading.value = false
  }

  return {
    promo,
    error,
    loading,
    initPromoData,
    checkPromoCode,
    cancelPromo,
    calculateDiscount,
    calculateDiscountedSum
  }
}
