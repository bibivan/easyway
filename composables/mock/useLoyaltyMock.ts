import type { ILoyaltyData } from '~/types'

export const useLoyaltyMock = () => {
  const loyaltyMock: ILoyaltyData = {
    token: '23232asdfsdfasdf',
    pointsCount: 286
  }

  return useMockFetch('userMock', loyaltyMock)
}
