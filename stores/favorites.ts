import type { IProductGroup, TNullable } from '~/types'

export const useFavoritesStore = defineStore('favorites_store', () => {
  // Data
  const favoritesState = reactive<{
    data: TNullable<IProductGroup[]>
  }>({
    data: null
  })

  // Getters

  // Mutations
  const findItem = (itemId: string) => favoritesState.data?.find((item) => item.groupId === itemId)

  const updateLocalStorage = () => {
    localStorage.setItem('eazy-clothing-favorites', JSON.stringify(favoritesState.data))
  }

  const initFavorites = () => {
    if (process.client) {
      const favoritesJson = localStorage.getItem('eazy-clothing-favorites')
      const favorites = parseJSON(favoritesJson)
      if (favorites) favoritesState.data = favorites
    }
  }

  const addToFavorites = (item: IProductGroup) => {
    if (isEmpty(favoritesState.data)) favoritesState.data = [item]
    else favoritesState.data?.push(item)
    updateLocalStorage()
  }

  const deleteFromFavorites = (itemId: string) => {
    favoritesState.data =
      favoritesState.data?.filter((item) => item.groupId !== itemId) || favoritesState.data
    updateLocalStorage()
  }

  return {
    favoritesState,
    initFavorites,
    findItem,
    addToFavorites,
    deleteFromFavorites
  }
})
