import type { EBrand, EGender, TNullable } from '~/types'
import { ENew } from '~/types'

export enum ESize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
  XXXL = 'XXXL',
  PLUS = 'Plus Size'
}

export interface IProductSizeState {
  value: TNullable<ESize>
  disabled: TNullable<boolean>
}

export interface IProductAttrs {
  composition: string
  care: string
}

export interface IProductRaw {
  ARTICLE: string
  BARCODE: string
  BRAND: string
  CATEGORY: string
  COLOR: string
  DESCRIPTION: string
  FABRIC: IProductAttrs
  GROUP_ID: string
  ID: string
  NAME: string
  PICTURES: string[]
  PRICE: string
  PRICE_INT: string
  SIZE: string
  STOCK?: string
}

export interface IProductGroupRaw {
  BRAND: string
  CATEGORY: string
  COLORS: string[]
  GENDER: string
  GROUP_ID: string
  ITEMS: IProductRaw[]
  NEW: string
  SIZES: string[]
  PRICE: string
}

export interface IProduct {
  article: string
  barcode: number
  brand: TNullable<EBrand>
  category: TNullable<string>
  color: string
  description: TNullable<string>
  fabric: TNullable<IProductAttrs>
  groupId: string
  id: number
  name: string
  pictures: TNullable<string[]>
  price: TNullable<string>
  priceInt: TNullable<number>
  size: ESize
  stock: number
}

export interface IProductGroup {
  brand: EBrand
  category: string
  colors: string[]
  gender: EGender
  groupId: string
  items: IProduct[]
  new: ENew
  price: number
  sizes: ESize[]
}

export interface IProductGroupState {
  color: string
  size: IProductSizeState
}
