import type { ComputedRef, Ref } from 'vue'

export type TNullable<T> = T | null

export enum ERequestStatus {
  FAILED = 'failed',
  SUCCESS = 'success'
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
  input: [Event]
  change: [Event]
  blur: [Event]
}
