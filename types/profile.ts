import { ESize } from '~/types/product'
import { TRawDateString } from '~/types/date'

export interface ILoyaltyData {
  pointsCount: number
}

export interface IUserData {
  name: string
  surname: string
  phone: string
  email: string
  birthDate: TRawDateString
  emailMarketing: boolean
  size: ESize
}
