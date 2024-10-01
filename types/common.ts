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

export type TErrorPosition = 'absolute' | 'static' | 'hide'

export interface IInputValidationState {
  isFocused: Ref<boolean>
  isValid: ComputedRef<boolean>
  errorMessage: ComputedRef<string | Ref<string> | undefined>
  hasError: ComputedRef<boolean>
  handleBlur: (e: Event) => void
}

export interface IInputEmitEvents {
  input: [Event]
  change: [Event]
  blur: [Event]
}
