import type { IAuthStoreState, TDefaultState } from '~/types'

export const useAuthorizationStore = defineStore('auth_store', () => {
  // Data
  const cookieToken = useCookie('easyway-user-token', { maxAge: 604800 })
  const authorizationState = reactive<TDefaultState<IAuthStoreState>>({
    data: {
      token: null,
      authFormIsShown: true
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

  const openAuthModal = () => {
    authorizationState.data.authFormIsShown = true
  }

  const closeAuthModal = () => {
    authorizationState.data.authFormIsShown = false
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
        authorizationState.data.token = response._data.token
        cookieToken.value = response._data.token
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
    getCode,
    checkCode
  }
})
