export const getShopToken = () => {
  const config = useRuntimeConfig()
  return config.public.token
}

export const getBaseUrl = () => {
  const config = useRuntimeConfig()
  return config.public.baseURL
}
