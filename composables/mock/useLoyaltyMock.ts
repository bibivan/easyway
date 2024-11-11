import type { ILoyaltyData } from '~/types'

export const useLoyaltyMock = () => {
  const loyaltyMock: ILoyaltyData = {
    pointsCount: 286
  }

  return useMockFetch('userMock', loyaltyMock)
}
