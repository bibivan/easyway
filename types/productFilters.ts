import type { TNullable } from '~/types/common'

export enum EProductFilters {
  SIZE = 'SIZES',
  COLOR = 'COLORS',
  GENDER = 'GENDER',
  BRAND = 'BRAND',
  CATEGORY = 'CATEGORY',
  GROUPID = 'GROUP_ID'
}

export interface IProductCategoriesState {
  male: TNullable<string[]>
  female: TNullable<string[]>
  current: TNullable<string[]>
}
