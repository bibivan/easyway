import type { IAuthStoreState, TDefaultState } from '~/types'

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
  const setToken = () => {
    const token = cookieToken.value
    if (token) authorizationState.data.token = token
  }

  const updateToken = (token: string) => {
    cookieToken.value = token
    authorizationState.data.token = token
  }

  const openAuthModal = () => {
    authorizationState.data.authFormIsShown = true
  }

  const closeAuthModal = () => {
    authorizationState.data.authFormIsShown = false
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
    return useApiFetch('get-code', {
      method: 'POST',
      body: {
        phone
      }
    })
  }

  const checkCode = async (code: number) => {
    return useApiFetch<{ token: string }, { token: string }>('check-code', {
      method: 'POST',
      body: {
        code
      },
      onResponse: ({ response }) => {
        updateToken(response._data.token)
      }
    })
  }

  return {
    authorizationState,
    token,
    authFormIsShown,
    setToken,
    openAuthModal,
    closeAuthModal,
    goToAuth,
    logOut,
    getCode,
    checkCode
  }
})
