import type { TNullable, IProductSFAttrs, IPromoData } from '~/types'

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
  data: IPromoData
  loading: boolean
  error: TNullable<string>
}

export type IPromoResponseData = { result: number } | false
