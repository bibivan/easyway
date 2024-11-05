import type { TNullable } from '~/types/common'

export enum EProductFilters {
  SIZE = 'SIZES',
  COLOR = 'COLORS',
  GENDER = 'GENDER',
  BRAND = 'BRAND',
  CATEGORY = 'CATEGORY',
  PRICEFROM = 'PRICEFROM',
  PRICETO = 'PRICETO',
  GROUPID = 'GROUP_ID',
  NEW = 'NEW'
}

export interface ICategoriesStoreState {
  male: TNullable<string[]>
  female: TNullable<string[]>
  current: TNullable<string[]>
}

export interface IProductFiltersRaw {
  COLORS: string[]
  PRICEFROM: number
  PRICETO: number
  SIZES: string[]
}

export interface IFiltersStoreState {
  colors: string[]
  priceFrom: number
  priceTo: number
  sizes: string[]
}
