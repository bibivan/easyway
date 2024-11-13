import type { TNullable } from '~/types/common'

export interface IAuthStoreState {
  token: TNullable<string>
  authFormIsShown: boolean
}

export interface IAuthDataState {
  phone: TNullable<string>
  code: string
  privacyDataConsent: boolean
  emailMarketing: boolean
  codeCheckingIsShown: boolean
  errorMessage: TNullable<string>
}

export interface ICodeCheckingResponse {
  success: boolean
  message?: string
  token?: string
}
