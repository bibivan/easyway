import type { EBrand, TNullable } from '~/types/common'

export enum IProductSizeAttr {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL'
}

export interface IProductRaw {
  ARTICLE: string
  ATTRIBUTES: string
  BARCODE: string
  BRAND: EBrand
  CATEGORY: string
  DESCRIPTION: string
  ID: string
  NAME: string
  PICTURES: string
  PRICE: string
  PRICE_INT: string
}

export interface IProductAttributes {
  size: IProductSizeAttr
  color: string
  composition: string
  careInstructions: string
}

export interface IProduct {
  article: TNullable<string>
  attributes: TNullable<IProductAttributes>
  barcode: TNullable<number>
  brand: TNullable<EBrand>
  category: TNullable<string>
  description: TNullable<string>
  id: TNullable<number>
  name: TNullable<string>
  pictures: TNullable<string[]>
  price: TNullable<string>
  priceInt: TNullable<number>
}
