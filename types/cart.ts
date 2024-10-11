import type { IProductSFAttrs } from '~/types'

export interface ICartItem {
  name: string
  article: string
  attributes: Pick<IProductSFAttrs, 'size' | 'color'>
  cnt: number
  price: number
  picture: string
  id: number
}

export type IPromoResponseData = { result: number | false }
