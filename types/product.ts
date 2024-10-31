import type { EBrand, EGender, TNullable } from '~/types'

export enum EProductSizeAttr {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
  XXXL = 'XXXL'
}

export interface IProductSizeState {
  value: TNullable<EProductSizeAttr>
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
  PICTURES: string
  PRICE: string
  PRICE_INT: string
  SIZE: string
  STOCK?: string
}

export interface IProduct {
  article: string
  barcode: TNullable<number>
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
  size: EProductSizeAttr
  stock: number
}

export interface IProductGroupRaw {
  SIZES: string[]
  COLORS: string[]
  GROUP_ID: string
  CATEGORY: string
  GENDER: string
  ITEMS: IProductRaw[]
}

export interface IProductGroup {
  sizes: EProductSizeAttr[]
  colors: string[]
  groupId: string
  category: string
  gender: EGender
  items: IProduct[]
}

export interface IProductGroupState {
  color: string
  size: IProductSizeState
}
