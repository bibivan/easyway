import type { IProductSFAttrs } from '~/types/product'
import type { TNullable } from '~/types/common'

export interface ICartItem {
  name: string
  article: string
  attributes: Pick<IProductSFAttrs, 'size' | 'color'>
  cnt: number
  price: number
  picture: string
  id: number
}

export interface IPromoStoreState {
  data: TNullable<IPromoData>
  loading: boolean
  error: TNullable<string>
}

export interface IPromoData {
  value: number
  name: string
}

export type IPromoResponseData = { result: number } | false
