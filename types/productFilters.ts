import type { TNullable } from '~/types/common'
import type { LocationQueryValue } from 'vue-router'

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

export interface IFiltersStoreState {
  colors: string[]
  priceFrom: number
  priceTo: number
  sizes: string[]
}

export interface IFiltersState {
  [EProductFilters.SIZE]: TNullable<string | LocationQueryValue[]>
  [EProductFilters.COLOR]: TNullable<string | LocationQueryValue[]>
  [EProductFilters.PRICEFROM]: number
  [EProductFilters.PRICETO]: number
}
