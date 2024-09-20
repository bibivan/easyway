import type { IPagination, IPaginationRaw } from '~/types'
import { isObject } from '~/utils/typeguards/common'

export const toNullable = (value: any) => {
  return value === '' || value === undefined || value === null ? null : value
}

export const isValidJSON = (str: any): str is string => {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

export const parseJSON = <T>(str: any): T | any => {
  try {
    return JSON.parse(str)
  } catch (e) {
    return str
  }
}

export const paginationRawToPagination = (obj: IPaginationRaw): IPagination => {
  return {
    page: Number(obj.page),
    pages: Number(obj.pages),
    total: Number(obj.total)
  }
}
