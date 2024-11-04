import type { ComputedRef, Ref, WritableComputedRef } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

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
}

export interface IPaginationRaw {
  currentPage: string | number
  totalPages: string | number
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

export interface ICollaborator {
  img: string
  name: string
}

export interface IBreadcrumbData {
  link?: RouteLocationRaw
  label: string
}
