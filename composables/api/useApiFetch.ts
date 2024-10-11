type useFetchType = typeof useFetch

export const useApiFetch: useFetchType = (path, options = {}) => {
  options.baseURL = getBaseUrl()

  if (options.method === 'GET') {
    options.query = {
      ...options.query,
      token: getShopToken()
    }
  } else {
    options.body = {
      ...(typeof options?.body === 'object' && options?.body),
      token: getShopToken()
    }
  }
  return useFetch(path, options)
}

// type useFetchType = typeof useFetch
//
// export const useApiFetch: useFetchType = (path, options = {}) => {
//   const config = useRuntimeConfig()
//
//   // modify options as needed
//   options.baseURL = config.public.baseURL
//   return useFetch(path, options)
// }
