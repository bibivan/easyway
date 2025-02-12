import { ESize } from '~/types'

export interface ICartItem {
  name: string
  article: string
  barcode: number
  cnt: number
  color: string
  id: number
  price: number
  picture: string
  size: ESize
}

export type IPromoResponseData = {
  balance: any;
  result: number | false }
