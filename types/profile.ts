import { ESize } from '~/types/product'

export interface ILoyaltyData {
  pointsCount: number
}

export interface IUserData {
  name: string
  surname: string
  phone: string
  email: string
  birthDate: string
  emailMarketing: boolean
  size: ESize
}
