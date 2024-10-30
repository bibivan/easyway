import type { IProduct } from '~/types'
import { EProductSizeAttr } from '~/types'

export interface ICartItem {
  name: string
  article: string
  cnt: number
  color: string
  id: number
  price: number
  picture: string
  size: EProductSizeAttr
}

export type IPromoResponseData = { result: number | false }
