import { IAuthStoreState, ICodeCheckingResponse, TDefaultState } from '~/types'
import { FetchContext, FetchResponse } from 'ofetch'

export const useAuthorizationStore = defineStore('auth_store', () => {
  // Data
  const cookieToken = useCookie('easyway-user-token', {
    maxAge: 2046426067910,
    secure: true,
    sameSite: 'strict'
  })
  const authorizationState = reactive<TDefaultState<IAuthStoreState>>({
    data: {
      token: null,
      authFormIsShown: false
    },
    error: null,
    loading: false
  })

  // Getters
  const token = computed(() => authorizationState.data.token)
  const authFormIsShown = computed(() => authorizationState.data.authFormIsShown)

  // Mutations
  const openAuthModal = () => {
    authorizationState.data.authFormIsShown = true
  }

  const closeAuthModal = () => {
    authorizationState.data.authFormIsShown = false
  }

  const setToken = () => {
    const token = cookieToken.value
    if (token) authorizationState.data.token = token
  }

  const updateToken = (token: string) => {
    cookieToken.value = token
    authorizationState.data.token = token
  }

  const logOut = () => {
    cookieToken.value = null
    authorizationState.data.token = null
    return navigateTo('/')
  }

  const goToAuth = () => {
    cookieToken.value = null
    openAuthModal()
    return navigateTo('/')
  }

  // Actions
  const getCode = async (phone: string) => {
    return $fetch<ICodeCheckingResponse>('get-sms-code', {
      baseURL: getBaseUrl(),
      method: 'POST',
      body: {
        phone: '7' + phone
      }
    })
  }

  const checkCode = async (code: string, phone: string) => {
    return $fetch<ICodeCheckingResponse>('check-code', {
      baseURL: getBaseUrl(),
      method: 'POST',
      body: {
        code,
        phone: '7' + phone
      },
      onResponse: ({ response }) => {
        updateToken(response._data.token)
      },
      onResponseError: ({ response }) => {
        if (response?.status === 404 && response?._data.message) {
          throw new Error(
            response?._data.message +
              '. Мы автоматически зерегистрируем вас полсе вашей первой покупки'
          )
        } else {
          throw new Error('Что-то пошло не так. Повторите попытку позже')
        }
      }
    })
  }

  return {
    authorizationState,
    token,
    authFormIsShown,
    setToken,
    updateToken,
    openAuthModal,
    closeAuthModal,
    goToAuth,
    logOut,
    getCode,
    checkCode
  }
})
