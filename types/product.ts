import type { EBrand, EGender, TNullable } from '~/types'

export enum EProductSizeAttr {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL'
}

export enum EProductFilters {
  SIZE = 'size',
  COLOR = 'color',
  GENDER = 'gender',
  BRAND = 'BRAND'
}

export interface IProductAttributesRaw {
  sfAttrs: {
    name: string
    value: string
  }[]
}

export interface IProductSFAttrs {
  size: EProductSizeAttr
  color: string
  description: string
  composition: string
  careInstructions: string
  gender: EGender
}

export interface IProductRaw {
  ARTICLE: string
  ATTRIBUTES: string
  BARCODE: string
  BRAND: string
  CATEGORY: string
  DESCRIPTION: string
  ID: string
  GROUP_ID: string
  NAME: string
  PICTURES: string
  PRICE: string
  PRICE_INT: string
}

export interface IProduct {
  article: string
  sfAttrs: TNullable<IProductSFAttrs>
  barcode: TNullable<number>
  brand: TNullable<EBrand>
  category: TNullable<string>
  description: TNullable<string>
  id: number
  groupId: number
  name: string
  pictures: TNullable<string[]>
  price: TNullable<string>
  priceInt: TNullable<number>
}

export interface IProductGroupRaw {
  SIZES: string[]
  COLORS: string[]
  GROUP_ID: string
  CATEGORY: string
  ITEMS: IProductRaw[]
}

export interface IProductGroup {
  sizes: EProductSizeAttr[]
  colors: string[]
  groupId: number
  category: string
  items: IProduct[]
}

export interface IProductGroupState {
  color: string
  size: EProductSizeAttr
}
