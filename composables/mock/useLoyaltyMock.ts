import { ILoyaltyData } from '~/types/profile'
import { Ref } from 'vue'

export const useLoyaltyMock = () => {
  const loyaltyMock: Ref<ILoyaltyData> = ref({
    pointsCount: 286
  })

  return {
    loyaltyMock
  }
}
