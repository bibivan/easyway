import type { IProductSFAttrs } from '~/types/product'

export interface ICartItem {
  name: string
  article: string
  attributes: Pick<IProductSFAttrs, 'size' | 'color'>
  cnt: number
  price: number
  picture: string
  id: number
}

export interface IPromoResponseData {
  result: number
}
