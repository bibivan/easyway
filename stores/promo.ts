import type { IPromoResponseData, TNullable } from '~/types'

export const usePromoStore = defineStore('promo_store', () => {
  const promo = reactive<{
    data: TNullable<number>
    loading: boolean
    error: TNullable<string>
  }>({
    data: null,
    loading: false,
    error: null
  })

  const calculateDiscount = (sum: number) => {
    return promo.data ? Math.floor(sum * (promo.data / 100)) : 0
  }
  const calculateDiscountedSum = (sum: number) => sum - calculateDiscount(sum)

  const cancelPromo = () => (promo.data = null)

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

      const data = (await new Promise((resolve, reject) => {
        return setTimeout(() => {
          return code === 'e' ? resolve({ result: 10 }) : reject(false)
        }, 0)
      })) as IPromoResponseData

      if (data.result) {
        promo.data = data.result
      } else {
        console.log(data)
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
    checkPromoCode,
    cancelPromo,
    calculateDiscount,
    calculateDiscountedSum
  }
})
