export const useDadataFetch = <T>(path: string, options = {}) => {
  const config = useRuntimeConfig()
  const dadataFetch = $fetch.create<T>({
    baseURL: config.public.dadataUrl as string,
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + config.public.dadataToken
    }
  })
  return dadataFetch(path, options)
}
