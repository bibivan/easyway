import { ESize } from '~/types/product'
import { TRawDateString } from '~/types/date'

export interface ILoyaltyData {
  token: string
  pointsCount: number
}

export interface IUserData {
  birthDate: TRawDateString
  email: string
  emailMarketing: boolean
  name: string
  phone: string
  size: ESize
  surname: string
  token: string
}
