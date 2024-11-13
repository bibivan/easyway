import { IAuthStoreState, ICodeCheckingResponse, TDefaultState } from '~/types'

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
    // console.log('updated', cookieToken.value, token)
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

    // return $fetch<ICodeCheckingResponse>(
    //   'https://echo.free.beeceptor.com/sample-request?success=true',
    //   {
    //     onResponse: ({ response }) => {
    //       response._data = {
    //         success: parseJSON(response._data?.parsedQueryParams.success)
    //       }
    //       console.log(response._data)
    //     }
    //   }
    // )
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
      }
    })
    // const query = () => {
    //   if (code === '1111') {
    //     return { success: true, token: 'asdfsdfsdf' }
    //   } else return { success: false, message: 'Неверный код' }
    // }
    //
    // return $fetch<ICodeCheckingResponse>('https://echo.free.beeceptor.com/sample-request', {
    //   query: query(),
    //   onResponse: ({ response }) => {
    //     response._data = {
    //       ...response._data.parsedQueryParams,
    //       success: parseJSON(response._data?.parsedQueryParams?.success)
    //     }
    //     console.log(response._data, '4442323333')
    //     if (response._data.token) {
    //       updateToken(response._data.token)
    //     }
    //   }
    // })
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
