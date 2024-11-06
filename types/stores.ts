import type { TNullable } from '~/types'

export type TDefaultState<T extends any = any> = {
  data: T
  loading: boolean
  error: TNullable<Error>
}
