import type { TNullable } from '~/types/common'

export interface IAuthStoreState {
  token: TNullable<string>
  authFormIsShown: boolean
}

export interface IAuthDataState {
  phone: TNullable<string>
  code: TNullable<number>
  privacyDataConsent: boolean
  emailMarketing: boolean
}
