import type { ComputedRef, Ref, WritableComputedRef } from 'vue'

export type TNullable<T> = T | null
export type TGenericRef<T> = Ref<T> | ComputedRef<T> | WritableComputedRef<T>

export enum EFetchStatus {
  IDLE = 'idle',
  SUCCESS = 'success',
  PENDING = 'pending',
  ERROR = 'error'
}

export interface IPagination {
  page: number
  pages: number
  total: number
}

export interface IPaginationRaw {
  page: string | number
  pages: string | number
  total: string | number
}

export interface IPaginatedData<T> {
  items: T
  pagination: IPagination
}

export interface IPaginatedDataRaw<T> {
  items: T
  pagination: IPaginationRaw
}

export enum EErrorPosition {
  ABSOLUTE = 'absolute',
  static = 'static'
}

export interface IInputEmitEvents {
  [key: string]: any[]
}
