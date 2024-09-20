export type TNullable<T> = T | null

export enum EBrand {
  EASYFIT = 'easyfit',
  EASYWAY = 'easyway',
  EASYNUTRITION = 'easynutrition'
}

export enum ERequestStatus {
  FAILED = 'failed',
  SUCCESS = 'success'
}

export enum EGender {
  MALE = 'male',
  FEMALE = 'female'
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
